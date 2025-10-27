n.d(t, { Z: () => r });
var r = {};
r = {
    dateRange: (e) => `${e.startDate} do ${e.endDate}`,
    dateSelected: (e) => `${e.date} odabran`,
    finishRangeSelectionPrompt: `Kliknite da dovr\u{161}ite raspon odabranih datuma`,
    maximumDate: `Posljednji raspolo\u{17E}ivi datum`,
    minimumDate: `Prvi raspolo\u{17E}ivi datum`,
    next: `Sljede\u{107}i`,
    previous: "Prethodni",
    selectedDateDescription: (e) => `Odabrani datum: ${e.date}`,
    selectedRangeDescription: (e) => `Odabrani raspon: ${e.dateRange}`,
    startRangeSelectionPrompt: `Kliknite da zapo\u{10D}nete raspon odabranih datuma`,
    todayDate: (e) => `Danas, ${e.date}`,
    todayDateSelected: (e) => `Danas, odabran ${e.date}`,
};
