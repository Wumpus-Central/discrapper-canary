n.d(t, {
    HS: () => a,
    PH: () => f,
    ST: () => l,
    U$: () => c,
    W5: () => m,
    XF: () => d,
    ZI: () => u,
    ZN: () => s,
    by: () => o,
    eh: () => _,
    q4: () => p,
    yC: () => h,
});
var r = n(281445),
    i = n(115093),
    a = (function (e) {
        return (e.SELECT_GAME = "select-game"), (e.SERVER_SETTINGS = "server-settings"), e;
    })({});
let s = {
        steps: {
            "select-game": {
                onBack: { type: "close" },
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
                onNext: { type: "save" },
            },
        },
    },
    o = 24,
    l = 680,
    c = 632,
    u = 10,
    d = 32,
    f = 1000,
    p =
        "production" === window.GLOBAL_ENV.PROJECT_ENV
            ? "1425215263548117002"
            : "staging" === window.GLOBAL_ENV.PROJECT_ENV
              ? "1415044199572832256"
              : "1415025086791942144";
r.X.SHOCKBYTE, window.GLOBAL_ENV.RELEASE_CHANNEL, i.B.STAGING;
let _ = { [r.X.SHOCKBYTE]: "https://shockbyte.com/legal/acceptable-use-policy" },
    h = (e, t) =>
        "https://discord.sjc1.qualtrics.com/jfe/form/SV_2h34PnQLPTCjTTM?user_id=".concat(e, "&guild_id=").concat(t),
    m = "0";
