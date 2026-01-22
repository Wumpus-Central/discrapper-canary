n.d(t, {
    Xn: () => s,
    tz: () => i,
});
var r = n(250105),
    i = (function (e) {
        return (e.PAYMENT_REVIEW = "control"), (e.PLAN_SELECTION = "plan_selection"), e;
    })({});
let a = (0, r.Ay)({
    name: "2026-01-marketing-banner-cta-action",
    kind: "user",
    defaultConfig: {
        treatment: "control",
    },
    variations: {
        0: {
            treatment: "control",
        },
        1: {
            treatment: "plan_selection",
        },
    },
});

function s(e) {
    return a.useConfig({
        location: e,
    });
}
