"use strict";
n.d(t, { JW: () => l, K5: () => _, Mq: () => d, gc: () => f, kz: () => c, px: () => u, x: () => p });
var r = n(64700),
    i = n(311907),
    s = n(841702),
    a = n(412260),
    o = n(788868);
function l() {
    let [e, t] = r.useState(),
        n = (0, i.yK)([a.A], () => a.A.getGiftPromotionRewardSkuIds()),
        { purchases: o, hasPreviouslyFetched: l, fetchPurchasesError: u } = (0, s.Wg)(),
        c = r.useRef(!1);
    return (
        r.useEffect(() => {
            l &&
                !c.current &&
                n.length > 0 &&
                (t(null == u ? n.filter((e) => null == o.get(e)) : []), (c.current = !0));
        }, [n, o, l, u]),
        e
    );
}
function u(e, t, n) {
    let r = d(e),
        i = null != n && n.length >= 1;
    return t && r && i;
}
function c(e, t, n) {
    let r = d(e);
    return null != n && 1 === n.length && r && t;
}
function d(e) {
    return [o.gD.PREMIUM_YEAR_TIER_2, o.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function _(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: r, defaultAngle: i = 78.98 } = t ?? {},
        s = Array.isArray(e) ? e : e.gradient,
        a = Array.isArray(e) || null == e.angle ? i : e.angle;
    n && (a = (a + 180) % 360);
    let o = null != r ? s.map((e, t) => `${e} ${r[t]}%`).join(", ") : s.join(", ");
    return { background: `linear-gradient(${a}deg, ${o})` };
}
function f(e) {
    if (null != e)
        return {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function p(e, t) {
    if (null != e && null != t) {
        let n = t.background,
            r = e.backgroundImage;
        return (
            (e.backgroundImage = `${r}, ${n}`),
            (e.backgroundColor = "lightgray"),
            (e.backgroundRepeat = "no-repeat, no-repeat"),
            null == e.backgroundSize && (e.backgroundSize = "auto 110%, auto"),
            null == e.backgroundPosition && (e.backgroundPosition = "right 90% center, 0% 0%"),
            e
        );
    }
    return null != e ? e : null != t ? t : {};
}
