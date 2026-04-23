t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} till ${e.endDate}`,
    dateSelected: (e) => `${e.date} har valts`,
    finishRangeSelectionPrompt: "Klicka f\xf6r att avsluta val av datumintervall",
    maximumDate: "Sista tillg\xe4ngliga datum",
    minimumDate: "F\xf6rsta tillg\xe4ngliga datum",
    next: "N\xe4sta",
    previous: "F\xf6reg\xe5ende",
    selectedDateDescription: (e) => `Valt datum: ${e.date}`,
    selectedRangeDescription: (e) => `Valt intervall: ${e.dateRange}`,
    startRangeSelectionPrompt: "Klicka f\xf6r att v\xe4lja datumintervall",
    todayDate: (e) => `Idag, ${e.date}`,
    todayDateSelected: (e) => `Idag, ${e.date} har valts`,
};
