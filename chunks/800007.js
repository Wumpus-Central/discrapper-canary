"use strict";
n.d(t, {
    FG: () => p,
    HS: () => a,
    LC: () => m,
    PH: () => f,
    ST: () => u,
    U$: () => d,
    W5: () => A,
    XF: () => _,
    YJ: () => h,
    ZI: () => c,
    ZN: () => o,
    by: () => l,
    eh: () => g,
    q4: () => E,
});
var r,
    i = n(281445),
    s = n(115093),
    a = (((r = {}).SELECT_GAME = "select-game"), (r.SERVER_SETTINGS = "server-settings"), r);
let o = {
        steps: {
            "select-game": { onBack: { type: "close" }, onNext: { type: "go-to-step", step: "server-settings" } },
            "server-settings": { onBack: { type: "go-to-step", step: "select-game" }, onNext: { type: "save" } },
        },
    },
    l = 24,
    u = 680,
    d = 632,
    c = 10,
    _ = 32,
    f = 1e3,
    E =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144",
    h = "production" === window.GLOBAL_ENV.PROJECT_ENV ? "1361763069696675961" : "1486428380437020672",
    p =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1402418491272986635"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "356875570916753438"
              : "1",
    m =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1458530944955973852"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1458563423670501376"
              : "2";
i.X.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, s.B.STAGING;
let g = { [i.X.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" },
    A = "0";
