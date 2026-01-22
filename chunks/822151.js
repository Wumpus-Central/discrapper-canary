n.d(t, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} till ${e.endDate}`,
    dateSelected: (e) => `${e.date} har valts`,
    finishRangeSelectionPrompt: "Klicka för att avsluta val av datumintervall",
    maximumDate: "Sista tillgängliga datum",
    minimumDate: "Första tillgängliga datum",
    next: "Nästa",
    previous: "Föregående",
    selectedDateDescription: (e) => `Valt datum: ${e.date}`,
    selectedRangeDescription: (e) => `Valt intervall: ${e.dateRange}`,
    startRangeSelectionPrompt: "Klicka för att välja datumintervall",
    todayDate: (e) => `Idag, ${e.date}`,
    todayDateSelected: (e) => `Idag, ${e.date} har valts`,
};
