declare module 'stats' {
  type Compare<T> = (a: T, b: T) => number;

  type GetIndex = <T>(input: T[], comparator: Compare<T>) => number;
  export const getMaxIndex: GetIndex;
  export const getMinIndex: GetIndex;
  export const getMedianIndex: GetIndex;

  type GetElement= <T>(input: T[], comparator: Compare<T>) => T | null;
  export const getMaxElement : GetElement
  export const getMinElement : GetElement
  export const getMedianElement : GetElement
  export function getAverageValue<T>(input: T[], getValue: (item: T) => number) : number | null;
}
