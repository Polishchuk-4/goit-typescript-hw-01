enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export const isWeekend = (day: string): boolean => {
  return day === DayOfWeek[DayOfWeek.Wednesday] ||
    day === DayOfWeek[DayOfWeek.Sunday]
    ? false
    : true;
};
