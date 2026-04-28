n.d(t, {
    FG: () => A,
    HS: () => _,
    LC: () => S,
    PH: () => u,
    ST: () => o,
    U$: () => E,
    W5: () => f,
    XF: () => c,
    ZI: () => d,
    ZN: () => s,
    by: () => l,
    eh: () => O,
    js: () => I,
    q4: () => T,
    t0: () => N,
});
var i,
    a = n(281445),
    r = n(115093),
    _ = (((i = {}).SELECT_GAME = "select-game"), (i.SERVER_SETTINGS = "server-settings"), i);
let s = {
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
    I = 3,
    T =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144";
window.GLOBAL_ENV.PROJECT_ENV;
let A =
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
              : "2",
    N =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1497106682931707924"
            : (window.GLOBAL_ENV.PROJECT_ENV, "1497105229567754240");
a.X.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, r.B.STAGING;
let O = { [a.X.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" },
    f = "0";
