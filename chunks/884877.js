n.d(t, {
    xM: () => c,
}),
    n(114821),
    n(339614);
var r = n(440703),
    i = n(405269),
    a = n(927813),
    s = n(927578),
    o = n(985018);
let l = (e) => e.rewardsConfig.rewards.filter((e) => e.type === r.l.FRACTIONAL_PREMIUM),
    c = (e) => {
        let t = l(e).flatMap((e) => Array(e.quantity).fill(e.skuId)),
            n = (0, s.iv)(t),
            r = {
                days: o.t.fYmirx,
                hours: o.t["C3RO+g"],
                minutes: o.t.r77oHc,
            },
            c = (0, i.Tf)(0, n * a.A.Millis.HOUR);
        return o.intl.formatToPlainString(o.t["4SqnVD"], {
            time: (0, i.uN)(c, r),
        });
    };
