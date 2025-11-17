n.d(t, { Z: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} do ${e.endDate}`,
    dateSelected: (e) => `${e.date} izbrano`,
    finishRangeSelectionPrompt: `Kliknite za dokon\u{10D}anje izbire datumskega obsega`,
    maximumDate: `Zadnji razpolo\u{17E}ljivi datum`,
    minimumDate: `Prvi razpolo\u{17E}ljivi datum`,
    next: "Naprej",
    previous: "Nazaj",
    selectedDateDescription: (e) => `Izbrani datum: ${e.date}`,
    selectedRangeDescription: (e) => `Izbrano obmo\u{10D}je: ${e.dateRange}`,
    startRangeSelectionPrompt: `Kliknite za za\u{10D}etek izbire datumskega obsega`,
    todayDate: (e) => `Danes, ${e.date}`,
    todayDateSelected: (e) => `Danes, ${e.date} izbrano`,
};
