t.d(a, { A: () => r });
var r = {};
r = {
    rangeOverflow: (e) => `Waarde moet ${e.maxValue} of eerder zijn.`,
    rangeReversed: "De startdatum moet voor de einddatum liggen.",
    rangeUnderflow: (e) => `Waarde moet ${e.minValue} of later zijn.`,
    unavailableDate: "Geselecteerde datum niet beschikbaar.",
};
