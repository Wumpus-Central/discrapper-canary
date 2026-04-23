"use strict";
n.d(t, { JW: () => _, K5: () => E, MD: () => A, Mq: () => h, gc: () => m, kz: () => p, px: () => f, x: () => g });
var r = n(64700),
    i = n(877624),
    s = n(311907),
    a = n(554146),
    o = n(841702),
    l = n(826673),
    u = n(412260),
    c = n(860300),
    d = n(788868);
function _() {
    let [e, t] = r.useState(),
        n = (0, s.yK)([u.A], () => u.A.getGiftPromotionRewardSkuIds()),
        { purchases: i, hasPreviouslyFetched: a, fetchPurchasesError: l } = (0, o.Wg)(),
        c = r.useRef(!1);
    return (
        r.useEffect(() => {
            a &&
                !c.current &&
                n.length > 0 &&
                (t(null == l ? n.filter((e) => null == i.get(e)) : []), (c.current = !0));
        }, [n, i, a, l]),
        e
    );
}
function f(e, t, n) {
    let r = h(e),
        i = null != n && n.length >= 1;
    return t && r && i;
}
function p(e, t, n) {
    let r = h(e);
    return null != n && 1 === n.length && r && t;
}
function h(e) {
    return [d.gD.PREMIUM_YEAR_TIER_2, d.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function E(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: r, defaultAngle: i = 78.98 } = t ?? {},
        s = Array.isArray(e) ? e : e.gradient,
        a = Array.isArray(e) || null == e.angle ? i : e.angle;
    n && (a = (a + 180) % 360);
    let o = null != r ? s.map((e, t) => `${e} ${r[t]}%`).join(", ") : s.join(", ");
    return { background: `linear-gradient(${a}deg, ${o})` };
}
function m(e) {
    if (null != e)
        return {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function g(e, t) {
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
function A() {
    let { enabled: e } = c.J.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
    if (!e || null == u.A.getMarketingComponentByType(i.C.GIFT_REMINDER_NAGBAR)) return !1;
    let t = u.A.getGiftPromotion()?.id;
    return (
        null != t &&
        !!(0, l.u$)(a.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, t).isDismissed &&
        !(0, l.u$)(a.M.GIFTING_PROMOTION_REMINDER, t).isDismissed
    );
}
