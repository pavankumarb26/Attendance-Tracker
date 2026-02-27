export const getAttendanceTodayArray = (attendanceData) => {
  try {
    const raw = typeof attendanceData === 'string' ? JSON.parse(attendanceData) : attendanceData
    const { rows } = raw.attendance_table

    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const todayKey = `${day}/${month}`

    const headerRow = rows[0]
    const colIndex = headerRow.indexOf(todayKey)

    if (colIndex === -1) return [{ message: "No classes today" }]

    return rows.slice(1)
      .filter(row => row[row.length - 2] !== '0/0') .filter(row => row[colIndex] !== '-')  // ✅ dynamic, not hardcoded row[9]
      .map(row => ({
        subject: row[1],
        attendance_today: row[colIndex]
      }))

  } catch (e) {
    return [{ message: "No data" }]
  }
}
