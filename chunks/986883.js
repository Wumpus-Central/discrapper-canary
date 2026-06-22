"use strict";
n.d(t, { DQ: () => o, qS: () => s });
var i,
    r = n(945810),
    s =
        (((i = {})[(i.CONTROL = 0)] = "CONTROL"),
        (i[(i.AMOUNT_OFF = 1)] = "AMOUNT_OFF"),
        (i[(i.AMOUNT_OFF_WITH_MONTHLY_RATE = 2)] = "AMOUNT_OFF_WITH_MONTHLY_RATE"),
        (i[(i.SAVE_MONTHS = 3)] = "SAVE_MONTHS"),
        (i[(i.BEST_VALUE = 4)] = "BEST_VALUE"),
        i);
let a = (0, r.mj)({
    name: "2026-06-annual-plan-checkout-copy",
    kind: "user",
    defaultConfig: 0,
    variations: { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4 },
});
function o(e) {
    let { location: t } = e;
    return a.useConfig({ location: t });
}
