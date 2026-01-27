n.d(t, {
    Xn: () => a,
    tz: () => l,
});
var r,
    i = n(250105),
    l = (((r = {}).PAYMENT_REVIEW = "control"), (r.PLAN_SELECTION = "plan_selection"), r);
let s = (0, i.Ay)({
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

function a(e) {
    return s.useConfig({
        location: e,
    });
}
