interface ClassData {
  classTitle: string;
  location?: string;
  timeStart: string;
  timeEnd: string;
  timeDifference?: number | null; // Optional, can be number or null
  bgColor: string;
}

type DaySchedule = Record<string, ClassData[]>;

type WeekSchedule = Record<string, ClassData[]>;

export type { ClassData, DaySchedule, WeekSchedule };