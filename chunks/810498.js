n.d(t, {
    JW: () => l,
    K5: () => p,
    Mq: () => f,
    gc: () => _,
    kz: () => d,
    px: () => u,
    t8: () => c,
    x: () => h,
}),
    n(896048),
    n(114821),
    n(339614),
    n(264879);
var r = n(64700),
    i = n(311907),
    a = n(841702),
    o = n(412260);
n(552736);
var s = n(788868);

function l() {
    let [e, t] = r.useState(),
        n = (0, i.bG)([o.A], () => o.A.getGiftPromotionRewardSkuIds()),
        { purchases: s, hasPreviouslyFetched: l, fetchPurchasesError: c } = (0, a.Wg)(),
        u = r.useRef(!1);
    return (
        r.useEffect(() => {
            l &&
                !u.current &&
                n.length > 0 &&
                (t(null == c ? n.filter((e) => null == s.get(e)) : []), (u.current = !0));
        }, [n, s, l, c]),
        e
    );
}

function c(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e.skuId, e.assetId)), t;
}

function u(e, t, n) {
    let r = f(e),
        i = null != n && n.length >= 1;
    return t && r && i;
}

function d(e, t, n) {
    let r = f(e);
    return null != n && 1 === n.length && r && t;
}

function f(e) {
    return [s.gD.PREMIUM_YEAR_TIER_2, s.gD.PREMIUM_MONTH_TIER_2].includes(null == e ? void 0 : e.id);
}

function p(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: r, defaultAngle: i = 78.98 } = null != t ? t : {},
        a = Array.isArray(e) ? e : e.gradient,
        o = Array.isArray(e) || null == e.angle ? i : e.angle;
    n && (o = (o + 180) % 360);
    let s = null != r ? a.map((e, t) => "".concat(e, " ").concat(r[t], "%")).join(", ") : a.join(", ");
    return {
        background: "linear-gradient(".concat(o, "deg, ").concat(s, ")"),
    };
}

function _(e) {
    if (null != e)
        return {
            backgroundImage: "url(".concat(e, ")"),
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
            (e.backgroundImage = "".concat(r, ", ").concat(n)),
            (e.backgroundColor = "lightgray"),
            (e.backgroundRepeat = "no-repeat, no-repeat"),
            null == e.backgroundSize && (e.backgroundSize = "auto 110%, auto"),
            null == e.backgroundPosition && (e.backgroundPosition = "right 90% center, 0% 0%"),
            e
        );
    }
    return null != e ? e : null != t ? t : {};
}
