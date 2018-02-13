export function errorTransferInto(err) {
  if (!(err instanceof Error))
    return err.toString()
  return {
    __type: 'error',
    name: err.name,
    message: err.message,
    stack: err.stack
  }
}
export function errorTransferFrom(terr) {
  if (terr.__type !== 'error')
    return terr
  let errCtor;
  switch (terr.name) {
    case "TypeError":
      errCtor = TypeError
    case "RangeError":
      errCtor = RangeError
    case "EvalError":
      errCtor = EvalError
    case "ReferenceError":
      errCtor = ReferenceError
    case "SyntaxError":
      errCtor = SyntaxError
    case "URIError":
      errCtor = URIError
    default:
      errCtor = Error
  }
  const err = new errCtor(terr.message)
  err.stack = terr.stack
  return err
}

const parsedSourceMaps = {}
let SourceMapConsumer;

// lazily parse source map
function getSourceMap(sourceFilename) {
  if (parsedSourceMaps[sourceFilename])
    return parsedSourceMaps[sourceFilename]

  const sm = global.sourceMaps[sourceFilename]
  if (!sm)
    return

  if (typeof SourceMapConsumer === 'undefined')
    SourceMapConsumer = require('source-map').SourceMapConsumer

  const mapped = {
    url: sm.filename,
    map: new SourceMapConsumer(sm.map)
  }

  parsedSourceMaps[sourceFilename] = mapped

  return mapped
}

Error.prepareStackTrace = prepareStackTrace

function prepareStackTrace(error, stack) {
  return error + stack.map(function (frame) {
    return '\n    at ' + wrapCallSite(frame);
  }).join('');
}

function wrapCallSite(frame) {
  if (frame.isNative()) {
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    frame = cloneCallSite(frame);
    frame.getFileName = function () { return position.source; };
    frame.getLineNumber = function () { return position.line; };
    frame.getColumnNumber = function () { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function () { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function () { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}


function mapSourcePosition(position) {
  const sourceMap = getSourceMap(position.source);

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map) {
    let originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = originalPosition.source.replace("webpack:///", "")
      return originalPosition;
    }
  }

  return position;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function (name) {
    object[name] = /^(?:is|get)/.test(name) ? function () { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}