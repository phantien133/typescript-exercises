// declarations/str-utils/index.d.ts

declare module 'str-utils' {
  type StrValue = (value: string) => string;

  export const strReverse: StrValue
  export const strToLower: StrValue
  export const strToUpper: StrValue
  export const strRandomize: StrValue
  export const strInvertCase: StrValue
}
