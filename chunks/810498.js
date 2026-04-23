"use strict";
n.d(t, { JW: () => c, K5: () => f, MD: () => A, Mq: () => m, gc: () => g, kz: () => h, px: () => E, x: () => p });
var i = n(64700),
    r = n(877624),
    s = n(17928),
    a = n(554146),
    o = n(841702),
    l = n(826673),
    d = n(374200),
    _ = n(860300),
    u = n(788868);
function c() {
    let [e, t] = i.useState(),
        n = (0, s.yK)([d.A], () => d.A.getGiftPromotionRewardSkuIds()),
        { purchases: r, hasPreviouslyFetched: a, fetchPurchasesError: l } = (0, o.Wg)(),
        _ = i.useRef(!1);
    return (
        i.useEffect(() => {
            a &&
                !_.current &&
                n.length > 0 &&
                (t(null == l ? n.filter((e) => null == r.get(e)) : []), (_.current = !0));
        }, [n, r, a, l]),
        e
    );
}
function E(e, t, n) {
    let i = m(e),
        r = null != n && n.length >= 1;
    return t && i && r;
}
function h(e, t, n) {
    let i = m(e);
    return null != n && 1 === n.length && i && t;
}
function m(e) {
    return [u.gD.PREMIUM_YEAR_TIER_2, u.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function f(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: i, defaultAngle: r = 78.98 } = t ?? {},
        s = Array.isArray(e) ? e : e.gradient,
        a = Array.isArray(e) || null == e.angle ? r : e.angle;
    n && (a = (a + 180) % 360);
    let o = null != i ? s.map((e, t) => `${e} ${i[t]}%`).join(", ") : s.join(", ");
    return { background: `linear-gradient(${a}deg, ${o})` };
}
function g(e) {
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
            i = e.backgroundImage;
        return (
            (e.backgroundImage = `${i}, ${n}`),
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
    let { enabled: e } = _.J.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
    if (!e || null == d.A.getMarketingComponentByType(r.C.GIFT_REMINDER_NAGBAR)) return !1;
    let t = d.A.getGiftPromotion()?.id;
    return (
        null != t &&
        !!(0, l.u$)(a.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, t).isDismissed &&
        !(0, l.u$)(a.M.GIFTING_PROMOTION_REMINDER, t).isDismissed
    );
}
