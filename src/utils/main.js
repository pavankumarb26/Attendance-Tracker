import {
  absentChecker,
  holidayChecker,
  sundayChecker,
  attendencePerform
} from './utils.js';

function toIST(date) {
  const ist = new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  return new Date(ist.getFullYear(), ist.getMonth(), ist.getDate());
}

function attendenceCalculator(
  holidays = [],
  leaves = [],
  daysToPredict = 0,
  periods_present = 0,
  total_periods_held = 0,
  startDate = new Date(),
  sundays = [],
  periods_per_day = 0
) {
  const result = [];
  let present = periods_present;
  let held = total_periods_held;

  let current = toIST(startDate);

  for (let i = 0; i < daysToPredict; i++) {
    const day = new Date(current.getFullYear(), current.getMonth(), current.getDate());

    const isSunday = sundayChecker(sundays, day);
    const isHoliday = holidayChecker(holidays, day);
    const isLeave = absentChecker(leaves, day);

    if (!isSunday && !isHoliday) {
      if (isLeave) {
        held += periods_per_day;
      } else {
        present += periods_per_day;
        held += periods_per_day;
      }
    }

    const attendancePercentage = attendencePerform(present, held);

    let hoursCanSkip = 0;
    let additionalHoursNeeded = 0;

    if (attendancePercentage < 75) {
      additionalHoursNeeded = Math.ceil(((0.75 * held) - present) / 0.25);
    } else {
      hoursCanSkip = Math.floor((present - 0.75 * held) / 0.75);
    }

    let status;
    if (isHoliday || isSunday) {
      status = 1;
    } else if (isLeave) {
      status = 0;
    } else {
      status = 2;
    }

    const dayString = day.toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'Asia/Kolkata'
    });

    result.push({
      day: dayString,
      date: day,
      attendence: attendencePerform(present, held),
      status,
      held,
      present,
      hoursCanSkip,
      additionalHoursNeeded,
      isSunday,
      isHoliday
    });

    current.setDate(current.getDate() + 1);
  }

  return result;
}

export default attendenceCalculator;
