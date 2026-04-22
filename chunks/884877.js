"use strict";
n.d(t, { xM: () => l });
var r = n(440703),
    i = n(405269),
    s = n(927813),
    a = n(927578),
    o = n(985018);
let l = (e) => {
    let t = e.rewardsConfig.rewards
            .filter((e) => e.type === r.l.FRACTIONAL_PREMIUM)
            .flatMap((e) => Array(e.quantity).fill(e.skuId)),
        n = (0, a.iv)(t),
        l = { days: o.t.fYmirx, hours: o.t["C3RO+g"], minutes: o.t.r77oHc },
        u = (0, i.Tf)(0, n * s.A.Millis.HOUR);
    return o.intl.formatToPlainString(o.t["4SqnVD"], { time: (0, i.uN)(u, l) });
};
