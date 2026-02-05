n.d(t, { Xn: () => l, tz: () => r });
var i,
    s = n(250105),
    r = (((i = {}).PAYMENT_REVIEW = "control"), (i.PLAN_SELECTION = "plan_selection"), i);
let a = (0, s.Ay)({
    name: "2026-01-marketing-banner-cta-action",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: { 0: { treatment: "control" }, 1: { treatment: "plan_selection" } },
});
function l(e) {
    return a.useConfig({ location: e });
}
