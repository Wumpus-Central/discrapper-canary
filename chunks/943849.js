"use strict";
n.d(t, { L: () => l });
var r = n(626584),
    i = n(600975),
    a = n(818348);
let s = (0, i.C)({
        id: "2024-04_quests_logging",
        kind: "user",
        label: "Quests Logging",
        defaultConfig: { enabled: !1 },
        treatments: [
            { id: 0, label: "Control", config: { enabled: !1 } },
            { id: 1, label: "Quest logging enabled", config: { enabled: !0 } },
        ],
    }),
    o = () => s.getCurrentConfig({ location: "quests_logging" }, { autoTrackExposure: !1 }).enabled;
function l() {
    let { quest: e, location: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = o(),
        i = e?.config.messages.questName,
        s = null != t ? `-${t}` : "",
        l = null != i ? `-${i})` : "",
        u = `QuestLogger${s}${l}`,
        c = new r.A(u);
    return {
        log: n ? c.log : a.tE,
        warn: n ? c.warn : a.tE,
        error: n ? c.error : a.tE,
        info: n ? c.info : a.tE,
        verbose: n ? c.verbose : a.tE,
        trace: n ? c.trace : a.tE,
    };
}
