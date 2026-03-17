"use strict";
n.d(t, { Bl: () => d, M5: () => o, Qb: () => s, gz: () => l, ip: () => c, j$: () => u });
var r = n(600975),
    i = n(5180);
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
function a(e) {
    return null != e && !(0, i.ai)(e);
}
function o(e, t) {
    let n = a(e);
    return s.useExperiment({ guildId: e, location: t }, { disable: !n, autoTrackExposure: !1 }).enabled;
}
function l(e, t) {
    let n = a(e),
        r = s.useExperiment({ guildId: e, location: t }, { disable: !n, autoTrackExposure: !1 });
    return r.enabled && !r.rollbackEnabled;
}
function u(e, t) {
    let n = a(e);
    return s.useExperiment({ guildId: e, location: t }, { disable: !n, autoTrackExposure: !1 }).rollbackEnabled;
}
function c(e, t) {
    return !!a(e) && s.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).rollbackEnabled;
}
function d(e, t) {
    return !!a(e) && s.getCurrentConfig({ guildId: e, location: t }, { autoTrackExposure: !1 }).enabled;
}
