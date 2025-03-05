export type TimeSlot = {
  id: string;
  time: string;
  capacity: number;
  booked: number;
};

type TimeSlotsData = {
  [key: string]: TimeSlot[];
};

type TimeSlotsByLang = {
  en: TimeSlotsData;
  tr: TimeSlotsData;
};

export const timeSlots: TimeSlotsByLang = {
  en: {
    "2025-03-21": [
      { id: "1", time: "09:00", capacity: 10, booked: 0 },
      { id: "2", time: "10:00", capacity: 10, booked: 0 },
      { id: "3", time: "11:00", capacity: 10, booked: 0 },
      { id: "4", time: "14:00", capacity: 10, booked: 0 },
      { id: "5", time: "15:00", capacity: 10, booked: 0 },
    ],
    "2025-03-22": [
      { id: "6", time: "09:00", capacity: 10, booked: 0 },
      { id: "7", time: "10:00", capacity: 10, booked: 0 },
      { id: "8", time: "11:00", capacity: 10, booked: 0 },
    ],
    "2025-03-23": [
      { id: "9", time: "14:00", capacity: 10, booked: 0 },
      { id: "10", time: "15:00", capacity: 10, booked: 0 },
      { id: "11", time: "16:00", capacity: 10, booked: 0 },
    ],
    "2025-03-24": [
      { id: "12", time: "09:00", capacity: 10, booked: 0 },
      { id: "13", time: "10:00", capacity: 10, booked: 0 },
    ],
  },
  tr: {
    "2025-03-21": [
      { id: "1", time: "09:00", capacity: 10, booked: 0 },
      { id: "2", time: "10:00", capacity: 10, booked: 0 },
      { id: "3", time: "11:00", capacity: 10, booked: 0 },
      { id: "4", time: "14:00", capacity: 10, booked: 0 },
      { id: "5", time: "15:00", capacity: 10, booked: 0 },
    ],
    "2025-03-22": [
      { id: "6", time: "09:00", capacity: 10, booked: 0 },
      { id: "7", time: "10:00", capacity: 10, booked: 0 },
      { id: "8", time: "11:00", capacity: 10, booked: 0 },
    ],
    "2025-03-23": [
      { id: "9", time: "14:00", capacity: 10, booked: 0 },
      { id: "10", time: "15:00", capacity: 10, booked: 0 },
      { id: "11", time: "16:00", capacity: 10, booked: 0 },
    ],
    "2025-03-24": [
      { id: "12", time: "09:00", capacity: 10, booked: 0 },
      { id: "13", time: "10:00", capacity: 10, booked: 0 },
    ],
  },
};
