declare module 'stats' {
  type comparator<T> = (a: T, b: T) => number; 
export function getMaxIndex<T>(input: T[], comparator: comparator<T>): number;
export function getMaxElement<T>(input: T[], comparator: comparator<T>): T | null;
export function getMinIndex<T>(input: T[], comparator: comparator<T>): number;
export function getMinElement<T>(input: T[], comparator: comparator<T>): T | null;
export function getMedianIndex<T>(input: T[], comparator: comparator<T>): number;
export function getMedianElement<T>(input: T[], comparator: comparator<T>): T | null;
export function getAverageValue<T, V>(input: T[], comparator: ({}: T) => number): number | null;
}
