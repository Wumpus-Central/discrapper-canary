"use strict";
n.d(t, { Bl: () => _, M5: () => l, Qb: () => s, gz: () => u, ip: () => d, j$: () => c });
var r = n(600975),
    i = n(652215),
    a = n(349828);
let s = (0, r.C)({
    kind: "guild",
    id: "2025-06_vanity_url_perk",
    label: "Vanity URL Standalone Perk",
    defaultConfig: { enabled: !1, rollbackEnabled: !1 },
    treatments: [
        {
            id: 1,
            label: "Enable ability to purchase Vanity URL Standalone Perk",
            config: { enabled: !0, rollbackEnabled: !1 },
        },
        { id: 2, label: "Rollback UI for Vanity URL Standalone Perk", config: { enabled: !0, rollbackEnabled: !0 } },
    ],
});
function o(e) {
    return null != e && e !== a.Vc && e !== i.YYv;
}
function l(e, t) {
    let n = o(e);
    return s.useExperiment({ guildId: e, location: t }, { disable: !n, autoTrackExposure: !1 }).enabled;
}
function u(e, t) {
    let n = o(e),
        r = s.useExperiment({ guildId: e, location: t }, { disable: !n, autoTrackExposure: !1 });
    return r.enabled && !r.rollbackEnabled;
}
function c(e, t) {
    let n = o(e);
    return s.useExperiment({ guildId: e, location: t }, { disable: !n, autoTrackExposure: !1 }).rollbackEnabled;
}
function d(e, t) {
    return !!o(e) && s.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).rollbackEnabled;
}
function _(e, t) {
    return !!o(e) && s.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
