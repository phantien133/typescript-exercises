declare module 'stats' {
    type CompareFunc<T> = (a: T, b: T) => number;
    export function getMaxIndex<T>(input: T[], comparator: CompareFunc<T>): number
    export function getMaxElement<T>(input: T[], comparator: CompareFunc<T>): T | null;
    export function getMinIndex<T>(input: T[], comparator: CompareFunc<T>): number;
    export function getMedianIndex<T>(input: T[], comparator: CompareFunc<T>): number;
    export function getMedianElement<T>(input: T[], comparator: CompareFunc<T>): T | null;
    export function getAverageValue<T>(input: T[], getValue: (item: T) => number): number | null;
    export function getMinElement<T>(input: T[], comparator: CompareFunc<T>): T | null;
}