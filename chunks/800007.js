n.d(t, {
    Ge: () => _,
    HS: () => a,
    PH: () => f,
    ST: () => l,
    U$: () => c,
    W5: () => g,
    XF: () => d,
    ZI: () => u,
    ZN: () => o,
    by: () => s,
    eh: () => h,
    q4: () => p,
    yC: () => m,
});
var r = n(281445),
    i = n(115093),
    a = (function (e) {
        return (e.SELECT_GAME = "select-game"), (e.SERVER_SETTINGS = "server-settings"), e;
    })({});
let o = {
        steps: {
            "select-game": {
                onBack: {
                    type: "close",
                },
                onNext: {
                    type: "go-to-step",
                    step: "server-settings",
                },
            },
            "server-settings": {
                onBack: {
                    type: "go-to-step",
                    step: "select-game",
                },
                onNext: {
                    type: "save",
                },
            },
        },
    },
    s = 24,
    l = 680,
    c = 632,
    u = 10,
    d = 32,
    f = 1e3,
    p =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144",
    _ =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? ["1402418491272986635", "1458530944955973852"]
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? ["356875570916753438", "1458563423670501376"]
              : ["1", "2"];
r.X.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, i.B.STAGING;
let h = {
        [r.X.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy",
    },
    m = (e, t) =>
        "https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=".concat(e, "&guild_id=").concat(t),
    g = "0";
