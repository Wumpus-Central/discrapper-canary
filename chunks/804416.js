t.d(a, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \u{2013} ${e.endDate}`,
    dateSelected: (e) => `${e.date} valittu`,
    finishRangeSelectionPrompt: "Lopeta p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.",
    maximumDate: "Viimeinen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4",
    minimumDate: "Ensimm\xe4inen varattavissa oleva p\xe4iv\xe4m\xe4\xe4r\xe4",
    next: "Seuraava",
    previous: "Edellinen",
    selectedDateDescription: (e) => `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
    selectedRangeDescription: (e) => `Valittu aikav\xe4li: ${e.dateRange}`,
    startRangeSelectionPrompt: "Aloita p\xe4iv\xe4m\xe4\xe4r\xe4alueen valinta napsauttamalla t\xe4t\xe4.",
    todayDate: (e) => `T\xe4n\xe4\xe4n, ${e.date}`,
    todayDateSelected: (e) => `T\xe4n\xe4\xe4n, ${e.date} valittu`,
};
