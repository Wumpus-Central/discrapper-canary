"use strict";
n.d(t, { JW: () => l, K5: () => f, Mq: () => _, gc: () => p, kz: () => d, px: () => c, t8: () => u, x: () => h });
var r = n(64700),
    i = n(311907),
    a = n(841702),
    s = n(412260);
n(552736);
var o = n(788868);
function l() {
    let [e, t] = r.useState(),
        n = (0, i.bG)([s.A], () => s.A.getGiftPromotionRewardSkuIds()),
        { purchases: o, hasPreviouslyFetched: l, fetchPurchasesError: u } = (0, a.Wg)(),
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
function u(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e.skuId, e.assetId)), t;
}
function c(e, t, n) {
    let r = _(e),
        i = null != n && n.length >= 1;
    return t && r && i;
}
function d(e, t, n) {
    let r = _(e);
    return null != n && 1 === n.length && r && t;
}
function _(e) {
    return [o.gD.PREMIUM_YEAR_TIER_2, o.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function f(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: r, defaultAngle: i = 78.98 } = t ?? {},
        a = Array.isArray(e) ? e : e.gradient,
        s = Array.isArray(e) || null == e.angle ? i : e.angle;
    n && (s = (s + 180) % 360);
    let o = null != r ? a.map((e, t) => `${e} ${r[t]}%`).join(", ") : a.join(", ");
    return { background: `linear-gradient(${s}deg, ${o})` };
}
function p(e) {
    if (null != e)
        return {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function h(e, t) {
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
