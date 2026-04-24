"use strict";
n.d(t, { R: () => i, Y: () => a });
var s = n(627968);
n(64700);
var l = n(192308);
function i(e) {
    let { guildId: t, userId: i, anaylticsLocations: a, modReportId: r } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e("85256").then(n.bind(n, 631963));
        return (n) => (0, s.jsx)(e, { guildId: t, userId: i, anaylticsLocations: a, modReportId: r, ...n });
    });
}
function a(e) {
    let { guildId: t, userId: i, anaylticsLocations: a } = e;
    (0, l.openModalLazy)(async () => {
        let { default: e } = await n.e("31815").then(n.bind(n, 21754));
        return (n) => (0, s.jsx)(e, { guildId: t, userId: i, anaylticsLocations: a, ...n });
    });
}
