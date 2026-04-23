t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \u{434}\u{43E} ${e.endDate}`,
    dateSelected: (e) => `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{43E} \u{435} ${e.date}`,
    finishRangeSelectionPrompt: "Натиснете, за да довършите избора на времеви интервал",
    maximumDate: "Последна налична дата",
    minimumDate: "Първа налична дата",
    next: "Напред",
    previous: "Назад",
    selectedDateDescription: (e) =>
        `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{430} \u{434}\u{430}\u{442}\u{430}: ${e.date}`,
    selectedRangeDescription: (e) =>
        `\u{418}\u{437}\u{431}\u{440}\u{430}\u{43D} \u{434}\u{438}\u{430}\u{43F}\u{430}\u{437}\u{43E}\u{43D}: ${e.dateRange}`,
    startRangeSelectionPrompt: "Натиснете, за да пристъпите към избора на времеви интервал",
    todayDate: (e) => `\u{414}\u{43D}\u{435}\u{441}, ${e.date}`,
    todayDateSelected: (e) =>
        `\u{414}\u{43D}\u{435}\u{441}, ${e.date} \u{441}\u{430} \u{438}\u{437}\u{431}\u{440}\u{430}\u{43D}\u{438}`,
};
