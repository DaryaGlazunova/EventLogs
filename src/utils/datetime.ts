export function changeDateFormat(date: Date) {
  const option: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZone: "UTC",
  };

  return date.toLocaleString("ru", option);
}
