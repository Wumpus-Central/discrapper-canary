"use strict";
n.d(t, { M: () => s, Q: () => i });
let r = (0, n(945810).mj)({
    name: "2026-03-game-detection-collect-executable-fingerprint",
    kind: "user",
    defaultConfig: { enabledForAllGames: !1, enabledForRunningGames: !1 },
    variations: {
        0: { enabledForAllGames: !1, enabledForRunningGames: !1 },
        1: { enabledForAllGames: !0, enabledForRunningGames: !1 },
        2: { enabledForAllGames: !1, enabledForRunningGames: !0 },
    },
});
function i(e) {
    return r.getConfig({ location: e }).enabledForAllGames;
}
function s(e) {
    return r.getConfig({ location: e }).enabledForRunningGames;
}
