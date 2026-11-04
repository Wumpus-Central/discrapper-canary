var i = t(582128),
    l = t(877624),
    a = t(855986),
    o = t(554146),
    r = t(841702),
    s = t(826673),
    u = t(412260),
    c = t(860300),
    d = t(682901);
function f(e) {
    return [d.gD.PREMIUM_YEAR_TIER_2, d.gD.PREMIUM_MONTH_TIER_2, d.gD.PREMIUM_3_MONTH_TIER_2].includes(e?.id);
}
t.d(
    n,
    {},
    {
        JW: function () {
            let [e, n] = i.useState(),
                t = (0, a.yK)([u.A], () => u.A.getGiftPromotionRewardSkuIds()),
                { purchases: l, hasPreviouslyFetched: o, fetchPurchasesError: s } = (0, r.Wg)(),
                c = i.useRef(!1);
            return (
                i.useEffect(() => {
                    o &&
                        !c.current &&
                        t.length > 0 &&
                        (n(null == s ? t.filter((e) => null == l.get(e)) : []), (c.current = !0));
                }, [t, l, o, s]),
                e
            );
        },
        K5: function (e, n) {
            if (null == e) return;
            let { reverse: t = !1, colorStops: i, defaultAngle: l = 78.98 } = n ?? {},
                a = Array.isArray(e) ? e : e.gradient,
                o = Array.isArray(e) || null == e.angle ? l : e.angle;
            t && (o = (o + 180) % 360);
            let r = null != i ? a.map((e, n) => `${e} ${i[n]}%`).join(", ") : a.join(", ");
            return { background: `linear-gradient(${o}deg, ${r})` };
        },
        MD: function () {
            let { enabled: e } = c.J.getConfig({ location: "shouldShowGiftPromotionReminderNotice" });
            if (!e || null == u.A.getMarketingComponentByType(l.C.GIFT_REMINDER_NAGBAR)) return !1;
            let n = u.A.getGiftPromotion()?.id;
            return (
                null != n &&
                !!(0, s.u$)(o.M.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK, n).isDismissed &&
                !(0, s.u$)(o.M.GIFTING_PROMOTION_REMINDER, n).isDismissed
            );
        },
        Mq: f,
        gc: function (e) {
            if (null != e)
                return {
                    backgroundImage: `url(${e})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
        },
        kz: function (e, n, t) {
            let i = f(e);
            return null != t && 1 === t.length && i && n;
        },
        px: function (e, n, t) {
            let i = f(e),
                l = null != t && t.length >= 1;
            return n && i && l;
        },
        x: function (e, n) {
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
        },
    },
);
