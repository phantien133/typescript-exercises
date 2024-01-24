// declarations/stats/index.d.ts
declare module 'stats' {
  type GetIndex = <T>(input: T[], comparator: (a: T, b: T) => number) => number;
  type GetElement = <T>(input: T[], comparator: (a: T, b: T) => number) =>  T | null;

  export const getMaxIndex: GetIndex
  export const getMaxElement: GetElement
  export const getMinIndex: GetIndex
  export const getMinElement: GetElement
  export const getMedianIndex: GetIndex
  export const getMedianElement: GetElement
  export const getAverageValue: <T>(input: T[], getValue: (item: T) => number) =>  number | null;
}
