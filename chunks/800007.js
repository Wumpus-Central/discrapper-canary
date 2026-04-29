n.d(t, {
    FG: () => I,
    HS: () => s,
    LC: () => T,
    PH: () => u,
    ST: () => d,
    U$: () => c,
    W5: () => N,
    XF: () => E,
    Yh: () => h,
    ZI: () => _,
    ZN: () => l,
    by: () => o,
    eh: () => S,
    q4: () => A,
});
var i,
    a = n(281445),
    r = n(115093),
    s = (((i = {}).SELECT_GAME = "select-game"), (i.SERVER_SETTINGS = "server-settings"), i);
let l = {
        steps: {
            "select-game": { onBack: { type: "close" }, onNext: { type: "go-to-step", step: "server-settings" } },
            "server-settings": { onBack: { type: "go-to-step", step: "select-game" }, onNext: { type: "save" } },
        },
    },
    o = 24,
    d = 680,
    c = 632,
    _ = 10,
    E = 32,
    u = 1e3,
    A =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144";
window.GLOBAL_ENV.PROJECT_ENV;
let I =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1402418491272986635"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "356875570916753438"
              : "1",
    T =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1458530944955973852"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1458563423670501376"
              : "2";
class h {
    static FEATURED_PRODUCT_ID =
        "production" === window.GLOBAL_ENV.PROJECT_ENV ? "1497100850261131334" : "1497097140001046528";
    static FEATURED_GAME_ID =
        "production" === window.GLOBAL_ENV.PROJECT_ENV ? "1440133627899023452" : "1497095960202051584";
    static FEATURED_GAME_NAME = "Windrose";
    static SECOND_GAME_NAME = "Factorio";
    static THIRD_GAME_NAME = "V Rising";
}
a.X.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, r.B.STAGING;
let S = { [a.X.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" },
    N = "0";
