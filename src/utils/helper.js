import { getAttendanceTodayArray } from './attendanceTodayArray';

function getAttendanceCounts(data) {
  try {
    const todayArray = getAttendanceTodayArray(data);

    if (!todayArray || todayArray.length === 0 || todayArray[0]?.message) {
      return 0;
    }

    let totalClasses = 0;
    todayArray.forEach(item => {
      const record = item.attendance_today?.toUpperCase() || "";
      totalClasses += record.length;
    });

    return totalClasses;
  } catch (e) {
    return 0;
  }
}

export default getAttendanceCounts;
