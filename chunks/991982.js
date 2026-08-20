t.d(a, { R: () => i, Y: () => s });
var n = t(477900);
t(582128);
var d = t(192308);
function i(e) {
    let { guildId: a, userId: i, anaylticsLocations: s, modReportId: l } = e;
    (0, d.openModalLazy)(async () => {
        let { default: e } = await Promise.all([
            t.e("744878"),
            t.e("408891"),
            t.e("691671"),
            t.e("470314"),
            t.e("985256"),
        ]).then(t.bind(t, 631963));
        return (t) => (0, n.jsx)(e, { guildId: a, userId: i, anaylticsLocations: s, modReportId: l, ...t });
    });
}
function s(e) {
    let { guildId: a, userId: i, anaylticsLocations: s } = e;
    (0, d.openModalLazy)(async () => {
        let { default: e } = await Promise.all([t.e("740291"), t.e("470314"), t.e("695067"), t.e("831815")]).then(
            t.bind(t, 21754),
        );
        return (t) => (0, n.jsx)(e, { guildId: a, userId: i, anaylticsLocations: s, ...t });
    });
}
