n.d(t, {
    FG: () => T,
    HS: () => s,
    LC: () => S,
    PH: () => u,
    ST: () => o,
    U$: () => E,
    W5: () => O,
    XF: () => c,
    YJ: () => A,
    ZI: () => d,
    ZN: () => _,
    by: () => l,
    eh: () => N,
    q4: () => I,
});
var i,
    r = n(281445),
    a = n(115093),
    s = (((i = {}).SELECT_GAME = "select-game"), (i.SERVER_SETTINGS = "server-settings"), i);
let _ = {
        steps: {
            "select-game": { onBack: { type: "close" }, onNext: { type: "go-to-step", step: "server-settings" } },
            "server-settings": { onBack: { type: "go-to-step", step: "select-game" }, onNext: { type: "save" } },
        },
    },
    l = 24,
    o = 680,
    E = 632,
    d = 10,
    c = 32,
    u = 1e3,
    I =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144",
    A = "production" === window.GLOBAL_ENV.PROJECT_ENV ? "1361763069696675961" : "1486428380437020672",
    T =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1402418491272986635"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "356875570916753438"
              : "1",
    S =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1458530944955973852"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1458563423670501376"
              : "2";
r.X.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, a.B.STAGING;
let N = { [r.X.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" },
    O = "0";
