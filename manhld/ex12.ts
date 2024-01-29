declare module 'stats' {
    type CompareFuction<T> = (a: T, b: T) => number;
    type GetIndexFunction = <T>(input: T[], comparator: CompareFuction<T>) => number;
    type GetElementFunction = <T>(input: T[], comparator: CompareFuction<T>) => T | null;
    type GetAverageFunction = <T>(input: T[], callback: (age: T) => number) => number;

    export const getMaxIndex: GetIndexFunction
    export const getMinIndex: GetIndexFunction
    export const getMedianIndex: GetIndexFunction
    export const getMaxElement: GetElementFunction
    export const getMinElement: GetElementFunction
    export const getMedianElement: GetElementFunction
    export const getAverageValue: GetAverageFunction
}
