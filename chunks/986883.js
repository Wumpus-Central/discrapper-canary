n.d(t, { DQ: () => s, qS: () => r });
var l,
    i = n(945810),
    r =
        (((l = {})[(l.CONTROL = 0)] = "CONTROL"),
        (l[(l.AMOUNT_OFF = 1)] = "AMOUNT_OFF"),
        (l[(l.AMOUNT_OFF_WITH_MONTHLY_RATE = 2)] = "AMOUNT_OFF_WITH_MONTHLY_RATE"),
        (l[(l.SAVE_MONTHS = 3)] = "SAVE_MONTHS"),
        (l[(l.BEST_VALUE = 4)] = "BEST_VALUE"),
        l);
let a = (0, i.mj)({
    name: "2026-06-annual-plan-checkout-copy",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 },
});
function s(e) {
    let { location: t } = e;
    return a.useConfig({ location: t });
}
