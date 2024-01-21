declare module 'stats' {
  type Compare<T> = (a: T, b: T) => number;

  export function getMaxIndex<T>(input: T[], comparator: Compare<T>) : number;
  export function getMinIndex<T>(input: T[], comparator: Compare<T>) : number;
  export function getMedianIndex<T>(input: T[], comparator: Compare<T>) : number;
  export function getMaxElement<T>(input: T[], comparator: Compare<T>) : T | null;
  export function getMinElement<T>(input: T[], comparator: Compare<T>) : T | null;
  export function getMedianElement<T>(input: T[], comparator: Compare<T>) : T | null;
  export function getAverageValue<T>(input: T[], getValue: (item: T) => number) : number | null;
}
