declare module 'str-utils' {
  type StringFunction = (value: string) => string;

  export const strReverse: StringFunction
  export const strToLower: StringFunction
  export const strToUpper: StringFunction
  export const strRandomize: StringFunction
  export const strInvertCase: StringFunction
}
