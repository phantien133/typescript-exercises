declare module 'str-utils' {
    type strReverse = (str: string) => string;
    type strToLower = (str: string) => string;
    type strToUpper = (str: string) => string;
    type strRandomize = (str: string) => string;
    type strInvertCase = (str: string) => string;

    const strReverse: strReverse;
    const strToLower: strToLower;
    const strToUpper: strToUpper;
    const strRandomize: strRandomize;
    const strInvertCase: strInvertCase;

    export {
        strReverse,
        strToLower,
        strToUpper,
        strRandomize,
        strInvertCase
    };
}
