const parseMeetingTime = (meetingTime) => {
    if (!meetingTime) return { days: [], start: null, end: null };
    const [days, times] = meetingTime.split(' ');
    const [start, end] = times.split('-').map(time => parseFloat(time.replace(':', '.')));
    return { days: days.split(''), start, end };
};


const daysOverlap = (days1, days2) => {
    return days1.some(day => days2.includes(day));
};


const timesOverlap = (start1, end1, start2, end2) => {
    return start1 < end2 && start2 < end1;
};


export const hasTimeConflict = (courseA, courseB) => {
    const timeA = parseMeetingTime(courseA.meets);
    const timeB = parseMeetingTime(courseB.meets);
    return daysOverlap(timeA.days, timeB.days) && timesOverlap(timeA.start, timeA.end, timeB.start, timeB.end);
};
