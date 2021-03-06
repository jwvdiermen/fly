/* tslint:disable:no-namespace */

/**
 * @module fly
 * @private
 */
// Type definitions for text-encoding
// Project: https://github.com/inexorabletash/text-encoding
// Definitions by: MIZUNE Pine <https://github.com/pine613>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/** @hidden */
declare namespace TextEncoding {
  interface TextDecoderOptions {
    fatal?: boolean
    ignoreBOM?: boolean
  }

  interface TextDecodeOptions {
    stream?: boolean
  }

  interface TextEncoderOptions {
    NONSTANDARD_allowLegacyEncoding?: boolean
  }

  interface TextDecoder {
    encoding: string
    fatal: boolean
    ignoreBOM: boolean
    decode(input?: ArrayBuffer | ArrayBufferView, options?: TextDecodeOptions): string
  }

  interface TextEncoder {
    encoding: string
    encode(input?: string, options?: TextEncodeOptions): Uint8Array
  }

  interface TextEncodeOptions {
    stream?: boolean
  }

  interface TextEncoderStatic {
    (utfLabel?: string, options?: TextEncoderOptions): TextEncoder
    new (utfLabel?: string, options?: TextEncoderOptions): TextEncoder
  }

  interface TextDecoderStatic {
    (label?: string, options?: TextDecoderOptions): TextDecoder
    new (label?: string, options?: TextDecoderOptions): TextDecoder
  }

  interface TextEncodingStatic {
    TextEncoder: TextEncoderStatic
    TextDecoder: TextDecoderStatic
  }
}

// /** @hidden */
// declare var TextDecoder: TextEncoding.TextDecoderStatic;

// /** @hidden */
// declare var TextEncoder: TextEncoding.TextEncoderStatic;

/** @hidden */
declare var TextEncoding: TextEncoding.TextEncodingStatic

/** @hidden */
declare module "text-encoding" {
  export = TextEncoding
}
