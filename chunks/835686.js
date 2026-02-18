t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} tot ${e.endDate}`,
    dateSelected: (e) => `${e.date} geselecteerd`,
    finishRangeSelectionPrompt: "Klik om de selectie van het datumbereik te voltooien",
    maximumDate: "Laatste beschikbare datum",
    minimumDate: "Eerste beschikbare datum",
    next: "Volgende",
    previous: "Vorige",
    selectedDateDescription: (e) => `Geselecteerde datum: ${e.date}`,
    selectedRangeDescription: (e) => `Geselecteerd bereik: ${e.dateRange}`,
    startRangeSelectionPrompt: "Klik om het datumbereik te selecteren",
    todayDate: (e) => `Vandaag, ${e.date}`,
    todayDateSelected: (e) => `Vandaag, ${e.date} geselecteerd`,
};
