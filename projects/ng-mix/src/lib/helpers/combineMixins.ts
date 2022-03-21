/**
 * @deprecated The method should not be used
 */
export const composeMixins = (...functions: any): any => functions.reduce((a: any, b: any) => (...args: any) => a(b(...args)))();