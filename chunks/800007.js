"use strict";
n.d(t, {
    FG: () => p,
    HS: () => a,
    LC: () => E,
    PH: () => f,
    ST: () => u,
    U$: () => c,
    W5: () => A,
    XF: () => _,
    Yh: () => m,
    ZI: () => d,
    ZN: () => o,
    by: () => l,
    eh: () => g,
    q4: () => h,
});
var i,
    r = n(281445),
    s = n(115093),
    a = (((i = {}).SELECT_GAME = "select-game"), (i.SERVER_SETTINGS = "server-settings"), i);
let o = {
        steps: {
            "select-game": { onBack: { type: "close" }, onNext: { type: "go-to-step", step: "server-settings" } },
            "server-settings": { onBack: { type: "go-to-step", step: "select-game" }, onNext: { type: "save" } },
        },
    },
    l = 24,
    u = 680,
    c = 632,
    d = 10,
    _ = 32,
    f = 1e3,
    h =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144";
window.GLOBAL_ENV.PROJECT_ENV;
let p =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1402418491272986635"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "356875570916753438"
              : "1",
    E =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1458530944955973852"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1458563423670501376"
              : "2";
class m {
    static FEATURED_PRODUCT_ID =
        "production" === window.GLOBAL_ENV.PROJECT_ENV ? "1497100850261131334" : "1497097140001046528";
    static FEATURED_GAME_ID =
        "production" === window.GLOBAL_ENV.PROJECT_ENV ? "1440133627899023452" : "1497095960202051584";
    static FEATURED_GAME_NAME = "Windrose";
    static SECOND_GAME_NAME = "Factorio";
    static THIRD_GAME_NAME = "V Rising";
}
r.X.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, s.B.STAGING;
let g = { [r.X.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" },
    A = "0";
