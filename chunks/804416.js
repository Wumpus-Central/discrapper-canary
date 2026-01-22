n.d(t, { A: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} \u{2013} ${e.endDate}`,
    dateSelected: (e) => `${e.date} valittu`,
    finishRangeSelectionPrompt: "Lopeta päivämääräalueen valinta napsauttamalla tätä.",
    maximumDate: "Viimeinen varattavissa oleva päivämäärä",
    minimumDate: "Ensimmäinen varattavissa oleva päivämäärä",
    next: "Seuraava",
    previous: "Edellinen",
    selectedDateDescription: (e) => `Valittu p\xe4iv\xe4m\xe4\xe4r\xe4: ${e.date}`,
    selectedRangeDescription: (e) => `Valittu aikav\xe4li: ${e.dateRange}`,
    startRangeSelectionPrompt: "Aloita päivämääräalueen valinta napsauttamalla tätä.",
    todayDate: (e) => `T\xe4n\xe4\xe4n, ${e.date}`,
    todayDateSelected: (e) => `T\xe4n\xe4\xe4n, ${e.date} valittu`,
};
