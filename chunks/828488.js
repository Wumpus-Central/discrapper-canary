"use strict";
n.d(t, { LX: () => s, Lw: () => _, W$: () => a, ac: () => c, fw: () => l, sV: () => d, uJ: () => u });
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
        r,
        s = l(t),
        u =
            ((n = o.getConfig({ location: t }).enabled),
            (i = l(t)),
            (r = a.getCurrentConfig({ guildId: e ?? void 0, location: t }, { autoTrackExposure: !1 }).enabled),
            i || (r && n));
    return s || u;
}
function c(e) {
    return s.useConfig({ location: e }).enabled;
}
function d(e, t) {
    let n = o.useConfig({ location: t }).enabled,
        i = c(t),
        r = a.useExperiment({ guildId: e ?? void 0, location: t }, { autoTrackExposure: !1 }).enabled;
    return i || (r && n);
}
function _(e, t) {
    let n = c(t),
        i = d(e, t);
    return n || i;
}
