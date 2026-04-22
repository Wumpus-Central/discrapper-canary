n.d(t, { R: () => r, Y: () => a });
var i = n(627968);
n(64700);
var l = n(192308);
function r(e) {
    let { guildId: t, userId: r, anaylticsLocations: a, modReportId: o } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e("94390").then(n.bind(n, 524085));
        return (n) => (0, i.jsx)(e, { guildId: t, userId: r, anaylticsLocations: a, modReportId: o, ...n });
    });
}
function a(e) {
    let { guildId: t, userId: r, anaylticsLocations: a } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e("31815").then(n.bind(n, 21754));
        return (n) => (0, i.jsx)(e, { guildId: t, userId: r, anaylticsLocations: a, ...n });
    });
}
