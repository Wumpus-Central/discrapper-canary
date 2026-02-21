"use strict";
n.d(t, { $k: () => s, Ay: () => l, _E: () => o, ws: () => a });
let r = (0, n(600975).C)({
    kind: "guild",
    id: "2026-01_boost_progress_bar_default_on",
    label: "Boost Progress Bar Default On",
    defaultConfig: { enabled: !1 },
    treatments: [{ id: 1, label: "Progress bar default-on", config: { enabled: !0 } }],
});
function i(e, t) {
    return (!!t && null == e.premiumProgressBarEnabledUserUpdatedAt) || e.premiumProgressBarEnabled;
}
function s(e, t) {
    let { enabled: n } = r.getCurrentConfig({ guildId: e.id, ...t }, { autoTrackExposure: !1 });
    return i(e, n);
}
function a(e, t) {
    let { enabled: n } = r.useExperiment({ ...t, guildId: e.id });
    return i(e, n);
}
function o(e, t) {
    let n = i(e, t),
        r = e.premiumProgressBarEnabled;
    return n && !r;
}
let l = r;
