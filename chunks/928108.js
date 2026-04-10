"use strict";
n.d(t, { _: () => s, p: () => r });
var i = n(853066);
function r(e) {
    let { enabled: t } = i.R.getCurrentConfig({ guildId: e, location: "988d4e_3" });
    return t;
}
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { enabled: n } = i.R.useExperiment({ guildId: e, location: "988d4e_4" }, { autoTrackExposure: t });
    return n;
}
