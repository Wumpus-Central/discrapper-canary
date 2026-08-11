t.d(a, { R: () => i, Y: () => s });
var n = t(477900);
t(582128);
var d = t(192308);
function i(e) {
    let { guildId: a, userId: i, anaylticsLocations: s, modReportId: l } = e;
    (0, d.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            t.e("27358"),
            t.e("98064"),
            t.e("8891"),
            t.e("91671"),
            t.e("70314"),
            t.e("85256"),
        ]).then(t.bind(t, 631963));
        return (t) => (0, n.jsx)(e, { guildId: a, userId: i, anaylticsLocations: s, modReportId: l, ...t });
    });
}
function s(e) {
    let { guildId: a, userId: i, anaylticsLocations: s } = e;
    (0, d.openModalLazy)(async () => {
        let { default: e } = await Promise.all([t.e("54752"), t.e("70314"), t.e("95067"), t.e("31815")]).then(
            t.bind(t, 21754),
        );
        return (t) => (0, n.jsx)(e, { guildId: a, userId: i, anaylticsLocations: s, ...t });
    });
}
