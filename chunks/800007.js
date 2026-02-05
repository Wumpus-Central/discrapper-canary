"use strict";
n.d(t, {
    Ge: () => p,
    HS: () => a,
    PH: () => _,
    ST: () => l,
    U$: () => u,
    W5: () => g,
    XF: () => d,
    ZI: () => c,
    ZN: () => s,
    by: () => o,
    eh: () => h,
    q4: () => f,
    yC: () => m,
});
var r = n(281445),
    i = n(115093),
    a = (function (e) {
        return (e.SELECT_GAME = "select-game"), (e.SERVER_SETTINGS = "server-settings"), e;
    })({});
let s = {
        steps: {
            "select-game": { onBack: { type: "close" }, onNext: { type: "go-to-step", step: "server-settings" } },
            "server-settings": { onBack: { type: "go-to-step", step: "select-game" }, onNext: { type: "save" } },
        },
    },
    o = 24,
    l = 680,
    u = 632,
    c = 10,
    d = 32,
    _ = 1e3,
    f =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144",
    p =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? ["1402418491272986635", "1458530944955973852"]
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? ["356875570916753438", "1458563423670501376"]
              : ["1", "2"];
r.X.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, i.B.STAGING;
let h = { [r.X.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" },
    m = (e, t) => `https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=${e}&guild_id=${t}`,
    g = "0";
