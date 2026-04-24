"use strict";
n.d(t, { JW: () => h, K5: () => g, MD: () => C, Mq: () => f, gc: () => _, kz: () => p, px: () => m, x: () => x });
var l = n(64700),
    i = n(877624),
    s = n(17928),
    a = n(554146),
    r = n(841702),
    o = n(826673),
    c = n(374200),
    u = n(860300),
    d = n(788868);
function h() {
    let [e, t] = l.useState(),
        n = (0, s.yK)([c.A], () => c.A.getGiftPromotionRewardSkuIds()),
        { purchases: i, hasPreviouslyFetched: a, fetchPurchasesError: o } = (0, r.Wg)(),
        u = l.useRef(!1);
    return (
        l.useEffect(() => {
            a &&
                !u.current &&
                n.length > 0 &&
                (t(null == o ? n.filter((e) => null == i.get(e)) : []), (u.current = !0));
        }, [n, i, a, o]),
        e
    );
}
function m(e, t, n) {
    let l = f(e),
        i = null != n && n.length >= 1;
    return t && l && i;
}
function p(e, t, n) {
    let l = f(e);
    return null != n && 1 === n.length && l && t;
}
function f(e) {
    return [d.gD.PREMIUM_YEAR_TIER_2, d.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function g(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: l, defaultAngle: i = 78.98 } = t ?? {},
        s = Array.isArray(e) ? e : e.gradient,
        a = Array.isArray(e) || null == e.angle ? i : e.angle;
    n && (a = (a + 180) % 360);
    let r = null != l ? s.map((e, t) => `${e} ${l[t]}%`).join(", ") : s.join(", ");
    return { background: `linear-gradient(${a}deg, ${r})` };
}
function _(e) {
    if (null != e)
        return {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function x(e, t) {
    if (null != e && null != t) {
        let n = t.background,
            l = e.backgroundImage;
        return (
            (e.backgroundImage = `${l}, ${n}`),
            (e.backgroundColor = "lightgray"),
            (e.backgroundRepeat = "no-repeat, no-repeat"),
            null == e.backgroundSize && (e.backgroundSize = "auto 110%, auto"),
            null == e.backgroundPosition && (e.backgroundPosition = "right 90% center, 0% 0%"),
            e
        );
    }
    return null != e ? e : null != t ? t : {};
}
function C() {
    let { enabled: e } = u.J.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
    if (!e || null == c.A.getMarketingComponentByType(i.C.GIFT_REMINDER_NAGBAR)) return !1;
    let t = c.A.getGiftPromotion()?.id;
    return (
        null != t &&
        !!(0, o.u$)(a.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, t).isDismissed &&
        !(0, o.u$)(a.M.GIFTING_PROMOTION_REMINDER, t).isDismissed
    );
}
