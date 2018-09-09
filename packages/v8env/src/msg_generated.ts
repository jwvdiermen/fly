// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @enum
 */
export namespace fly{
export enum Any{
  NONE= 0,
  TimerStart= 1,
  TimerReady= 2,
  TimerClear= 3,
  HttpRequest= 4
}};

/**
 * @enum
 */
export namespace fly{
export enum ErrorKind{
  NoError= 0,
  NotFound= 1,
  PermissionDenied= 2,
  ConnectionRefused= 3,
  ConnectionReset= 4,
  ConnectionAborted= 5,
  NotConnected= 6,
  AddrInUse= 7,
  AddrNotAvailable= 8,
  BrokenPipe= 9,
  AlreadyExists= 10,
  WouldBlock= 11,
  InvalidInput= 12,
  InvalidData= 13,
  TimedOut= 14,
  Interrupted= 15,
  WriteZero= 16,
  Other= 17,
  UnexpectedEof= 18,
  EmptyHost= 19,
  IdnaError= 20,
  InvalidPort= 21,
  InvalidIpv4Address= 22,
  InvalidIpv6Address= 23,
  InvalidDomainCharacter= 24,
  RelativeUrlWithoutBase= 25,
  RelativeUrlWithCannotBeABaseBase= 26,
  SetHostOnCannotBeABaseUrl= 27,
  Overflow= 28,
  HttpUser= 29,
  HttpClosed= 30,
  HttpCanceled= 31,
  HttpParse= 32,
  HttpOther= 33
}};

/**
 * @enum
 */
export namespace fly{
export enum HttpMethod{
  Get= 0,
  Head= 1,
  Post= 2,
  Put= 3,
  Patch= 4,
  Delete= 5,
  Connect= 6,
  Options= 7,
  Trace= 8
}};

/**
 * @constructor
 */
export namespace fly{
export class Base {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Base
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Base {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Base= obj
 * @returns Base
 */
static getRootAsBase(bb:flatbuffers.ByteBuffer, obj?:Base):Base {
  return (obj || new Base).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
cmdId():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_cmd_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns fly.ErrorKind
 */
errorKind():fly.ErrorKind {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? /**  */ (this.bb!.readInt8(this.bb_pos + offset)) : fly.ErrorKind.NoError;
};

/**
 * @param fly.ErrorKind value
 * @returns boolean
 */
mutate_error_kind(value:fly.ErrorKind):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
error():string|null
error(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
error(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns fly.Any
 */
msgType():fly.Any {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? /**  */ (this.bb!.readUint8(this.bb_pos + offset)) : fly.Any.NONE;
};

/**
 * @param fly.Any value
 * @returns boolean
 */
mutate_msg_type(value:fly.Any):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 10);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint8(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Table obj
 * @returns ?flatbuffers.Table
 */
msg<T extends flatbuffers.Table>(obj:T):T|null {
  var offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__union(obj, this.bb_pos + offset) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startBase(builder:flatbuffers.Builder) {
  builder.startObject(5);
};

/**
 * @param flatbuffers.Builder builder
 * @param number cmdId
 */
static addCmdId(builder:flatbuffers.Builder, cmdId:number) {
  builder.addFieldInt32(0, cmdId, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param fly.ErrorKind errorKind
 */
static addErrorKind(builder:flatbuffers.Builder, errorKind:fly.ErrorKind) {
  builder.addFieldInt8(1, errorKind, fly.ErrorKind.NoError);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset errorOffset
 */
static addError(builder:flatbuffers.Builder, errorOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, errorOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param fly.Any msgType
 */
static addMsgType(builder:flatbuffers.Builder, msgType:fly.Any) {
  builder.addFieldInt8(3, msgType, fly.Any.NONE);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset msgOffset
 */
static addMsg(builder:flatbuffers.Builder, msgOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, msgOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endBase(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset offset
 */
static finishBaseBuffer(builder:flatbuffers.Builder, offset:flatbuffers.Offset) {
  builder.finish(offset);
};

}
}
/**
 * @constructor
 */
export namespace fly{
export class TimerStart {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns TimerStart
 */
__init(i:number, bb:flatbuffers.ByteBuffer):TimerStart {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param TimerStart= obj
 * @returns TimerStart
 */
static getRootAsTimerStart(bb:flatbuffers.ByteBuffer, obj?:TimerStart):TimerStart {
  return (obj || new TimerStart).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns boolean
 */
interval():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param boolean value
 * @returns boolean
 */
mutate_interval(value:boolean):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, +value);
  return true;
};

/**
 * @returns number
 */
delay():number {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_delay(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 8);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startTimerStart(builder:flatbuffers.Builder) {
  builder.startObject(3);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean interval
 */
static addInterval(builder:flatbuffers.Builder, interval:boolean) {
  builder.addFieldInt8(1, +interval, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @param number delay
 */
static addDelay(builder:flatbuffers.Builder, delay:number) {
  builder.addFieldInt32(2, delay, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endTimerStart(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace fly{
export class TimerReady {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns TimerReady
 */
__init(i:number, bb:flatbuffers.ByteBuffer):TimerReady {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param TimerReady= obj
 * @returns TimerReady
 */
static getRootAsTimerReady(bb:flatbuffers.ByteBuffer, obj?:TimerReady):TimerReady {
  return (obj || new TimerReady).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @returns boolean
 */
done():boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? !!this.bb!.readInt8(this.bb_pos + offset) : false;
};

/**
 * @param boolean value
 * @returns boolean
 */
mutate_done(value:boolean):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 6);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, +value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startTimerReady(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param boolean done
 */
static addDone(builder:flatbuffers.Builder, done:boolean) {
  builder.addFieldInt8(1, +done, +false);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endTimerReady(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace fly{
export class TimerClear {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns TimerClear
 */
__init(i:number, bb:flatbuffers.ByteBuffer):TimerClear {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param TimerClear= obj
 * @returns TimerClear
 */
static getRootAsTimerClear(bb:flatbuffers.ByteBuffer, obj?:TimerClear):TimerClear {
  return (obj || new TimerClear).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Builder builder
 */
static startTimerClear(builder:flatbuffers.Builder) {
  builder.startObject(1);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endTimerClear(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace fly{
export class HeaderPair {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns HeaderPair
 */
__init(i:number, bb:flatbuffers.ByteBuffer):HeaderPair {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param HeaderPair= obj
 * @returns HeaderPair
 */
static getRootAsHeaderPair(bb:flatbuffers.ByteBuffer, obj?:HeaderPair):HeaderPair {
  return (obj || new HeaderPair).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
key():string|null
key(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
key(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
value():string|null
value(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
value(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param flatbuffers.Builder builder
 */
static startHeaderPair(builder:flatbuffers.Builder) {
  builder.startObject(2);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset keyOffset
 */
static addKey(builder:flatbuffers.Builder, keyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, keyOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset valueOffset
 */
static addValue(builder:flatbuffers.Builder, valueOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, valueOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endHeaderPair(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
/**
 * @constructor
 */
export namespace fly{
export class HttpRequest {
  bb: flatbuffers.ByteBuffer|null = null;

  bb_pos:number = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns HttpRequest
 */
__init(i:number, bb:flatbuffers.ByteBuffer):HttpRequest {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param flatbuffers.ByteBuffer bb
 * @param HttpRequest= obj
 * @returns HttpRequest
 */
static getRootAsHttpRequest(bb:flatbuffers.ByteBuffer, obj?:HttpRequest):HttpRequest {
  return (obj || new HttpRequest).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @returns number
 */
id():number {
  var offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb_pos + offset) : 0;
};

/**
 * @param number value
 * @returns boolean
 */
mutate_id(value:number):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 4);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeUint32(this.bb_pos + offset, value);
  return true;
};

/**
 * @param flatbuffers.Encoding= optionalEncoding
 * @returns string|Uint8Array|null
 */
url():string|null
url(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
url(optionalEncoding?:any):string|Uint8Array|null {
  var offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns fly.HttpMethod
 */
method():fly.HttpMethod {
  var offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? /**  */ (this.bb!.readInt8(this.bb_pos + offset)) : fly.HttpMethod.Get;
};

/**
 * @param fly.HttpMethod value
 * @returns boolean
 */
mutate_method(value:fly.HttpMethod):boolean {
  var offset = this.bb!.__offset(this.bb_pos, 8);

  if (offset === 0) {
    return false;
  }

  this.bb!.writeInt8(this.bb_pos + offset, value);
  return true;
};

/**
 * @param number index
 * @param fly.HeaderPair= obj
 * @returns fly.HeaderPair
 */
headers(index: number, obj?:fly.HeaderPair):fly.HeaderPair|null {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? (obj || new fly.HeaderPair).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
};

/**
 * @returns number
 */
headersLength():number {
  var offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
};

/**
 * @param flatbuffers.Builder builder
 */
static startHttpRequest(builder:flatbuffers.Builder) {
  builder.startObject(4);
};

/**
 * @param flatbuffers.Builder builder
 * @param number id
 */
static addId(builder:flatbuffers.Builder, id:number) {
  builder.addFieldInt32(0, id, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset urlOffset
 */
static addUrl(builder:flatbuffers.Builder, urlOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, urlOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param fly.HttpMethod method
 */
static addMethod(builder:flatbuffers.Builder, method:fly.HttpMethod) {
  builder.addFieldInt8(2, method, fly.HttpMethod.Get);
};

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset headersOffset
 */
static addHeaders(builder:flatbuffers.Builder, headersOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, headersOffset, 0);
};

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createHeadersVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (var i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
};

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startHeadersVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
};

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endHttpRequest(builder:flatbuffers.Builder):flatbuffers.Offset {
  var offset = builder.endObject();
  return offset;
};

}
}
