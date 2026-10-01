t.d(n, { JW: () => g, K5: () => p, MD: () => h, Mq: () => m, gc: () => A, kz: () => f, px: () => C, x: () => b });
var i = t(582128),
    l = t(877624),
    a = t(17928),
    r = t(554146),
    o = t(841702),
    s = t(826673),
    c = t(412260),
    u = t(860300),
    d = t(202541);
function g() {
    let [e, n] = i.useState(),
        t = (0, a.yK)([c.A], () => c.A.getGiftPromotionRewardSkuIds()),
        { purchases: l, hasPreviouslyFetched: r, fetchPurchasesError: s } = (0, o.Wg)(),
        u = i.useRef(!1);
    return (
        i.useEffect(() => {
            r &&
                !u.current &&
                t.length > 0 &&
                (n(null == s ? t.filter((e) => null == l.get(e)) : []), (u.current = !0));
        }, [t, l, r, s]),
        e
    );
}
function C(e, n, t) {
    let i = m(e),
        l = null != t && t.length >= 1;
    return n && i && l;
}
function f(e, n, t) {
    let i = m(e);
    return null != t && 1 === t.length && i && n;
}
function m(e) {
    return [d.gD.PREMIUM_YEAR_TIER_2, d.gD.PREMIUM_MONTH_TIER_2].includes(e?.id);
}
function p(e, n) {
    if (null == e) return;
    let { reverse: t = !1, colorStops: i, defaultAngle: l = 78.98 } = n ?? {},
        a = Array.isArray(e) ? e : e.gradient,
        r = Array.isArray(e) || null == e.angle ? l : e.angle;
    t && (r = (r + 180) % 360);
    let o = null != i ? a.map((e, n) => `${e} ${i[n]}%`).join(", ") : a.join(", ");
    return { background: `linear-gradient(${r}deg, ${o})` };
}
function A(e) {
    if (null != e)
        return {
            backgroundImage: `url(${e})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        };
}
function b(e, n) {
    if (null != e && null != n) {
        let t = n.background,
            i = e.backgroundImage;
        return (
            (e.backgroundImage = `${i}, ${t}`),
            (e.backgroundColor = "lightgray"),
            (e.backgroundRepeat = "no-repeat, no-repeat"),
            null == e.backgroundSize && (e.backgroundSize = "auto 110%, auto"),
            null == e.backgroundPosition && (e.backgroundPosition = "right 90% center, 0% 0%"),
            e
        );
    }
    return null != e ? e : null != n ? n : {};
}
function h() {
    let { enabled: e } = u.J.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
    if (!e || null == c.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR)) return !1;
    let n = c.A.getGiftPromotion()?.id;
    return (
        null != n &&
        !!(0, s.u$)(r.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, n).isDismissed &&
        !(0, s.u$)(r.M.GIFTING_PROMOTION_REMINDER, n).isDismissed
    );
}
