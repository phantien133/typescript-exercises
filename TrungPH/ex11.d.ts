
declare module 'str-utils' {
  // export const ...
  // export function ...

  /**
* Reverses a string.
* @param {String} value
* @return {String}
*/
export function strReverse(value: string): string;

/**
* Converts a string to lower case.
* @param {String} value
* @return {String}
*/
export function strToLower(value: string): string;

/**
* Converts a string to upper case.
* @param {String} value
* @return {String}
*/
export function strToUpper(value: string): string;

/**
* Randomizes characters of a string.
* @param {String} value
* @return {String}
*/
export function strRandomize(value: string): string;

/**
* Inverts case of a string.
* @param {String} value
* @return {String}
*/
export function strInvertCase(value: string): string;

}
