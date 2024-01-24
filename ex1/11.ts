declare module 'str-utils' {
    type Str = (input: string) => string;

    export const strReverse: Str;
    export const strToLower: Str;
    export const strToUpper: Str;
    export const strRandomize: Str;
    export const strInvertCase: Str;
}
