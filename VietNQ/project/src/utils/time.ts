export function convertToYMDString(datetime: Date): string {
  return datetime.toISOString().split('T')[0];
}

export function isEqualsDate(date1: Date, date2: Date) {
  return convertToYMDString(date1) === convertToYMDString(date2);
}
