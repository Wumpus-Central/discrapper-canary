t.d(a, { A: () => r });
var r = {};
r = {
    calendar: "Календар",
    day: "день",
    dayPeriod: "дп/пп",
    endDate: "Дата завершення",
    era: "ера",
    hour: "година",
    minute: "хвилина",
    month: "місяць",
    second: "секунда",
    selectedDateDescription: (e) =>
        `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
    selectedRangeDescription: (e) =>
        `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{434}\u{456}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.startDate} \u{2014} ${e.endDate}`,
    selectedTimeDescription: (e) =>
        `\u{412}\u{438}\u{431}\u{440}\u{430}\u{43D}\u{438}\u{439} \u{447}\u{430}\u{441}: ${e.time}`,
    startDate: "Дата початку",
    timeZoneName: "часовий пояс",
    weekday: "день тижня",
    year: "рік",
};
