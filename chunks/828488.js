"use strict";
n.d(t, { LX: () => s, W$: () => a, ac: () => c, fw: () => l, uJ: () => u });
var i = n(945810),
    r = n(880006);
let s = (0, i.mj)({
        kind: "user",
        name: "2026-03-conversation-highlighting-utility",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !1 }, 2: { enabled: !0 } },
    }),
    a = (0, r.A)({
        kind: "guild",
        id: "2026-04_topical_navigation_aa",
        label: "Topical Navigation",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Treatment", config: { enabled: !0 } }],
    }),
    o = (0, i.mj)({
        kind: "user",
        name: "2026-04-topical-navigation-staff-control",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
    });
function l(e) {
    return s.getConfig({ location: e }).enabled;
}
function u(e, t) {
    let n,
        i,
        r = l(t),
        s =
            ((n = o.getConfig({ location: t }).enabled),
            (i = a.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled),
            n || i);
    return r || s;
}
function c(e) {
    return s.useConfig({ location: e }).enabled;
}
