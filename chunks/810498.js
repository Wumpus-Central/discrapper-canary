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
    s = n(412260);
n(552736);
var o = n(788868);

function l() {
    let [e, t] = r.useState(),
        n = (0, i.bG)([s.A], () => s.A.getGiftPromotionRewardSkuIds()),
        { purchases: o, hasPreviouslyFetched: l, fetchPurchasesError: c } = (0, a.Wg)(),
        u = r.useRef(!1);
    return (
        r.useEffect(() => {
            l &&
                !u.current &&
                n.length > 0 &&
                (t(null == c ? n.filter((e) => null == o.get(e)) : []), (u.current = !0));
        }, [n, o, l, c]),
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
    return [o.gD.PREMIUM_YEAR_TIER_2, o.gD.PREMIUM_MONTH_TIER_2].includes(null == e ? void 0 : e.id);
}

function p(e, t) {
    if (null == e) return;
    let { reverse: n = !1, colorStops: r, defaultAngle: i = 78.98 } = null != t ? t : {},
        a = Array.isArray(e) ? e : e.gradient,
        s = Array.isArray(e) || null == e.angle ? i : e.angle;
    n && (s = (s + 180) % 360);
    let o = null != r ? a.map((e, t) => "".concat(e, " ").concat(r[t], "%")).join(", ") : a.join(", ");
    return {
        background: "linear-gradient(".concat(s, "deg, ").concat(o, ")"),
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

function h(e, t, n) {
    if (null != e && null != t) {
        var r, i;
        let a = t.background,
            s = e.backgroundImage;
        return {
            backgroundImage: "".concat(s, ", ").concat(a),
            backgroundColor: "lightgray",
            backgroundSize: null != (r = null == n ? void 0 : n.backgroundSize) ? r : "auto 110%, auto",
            backgroundPosition: null != (i = null == n ? void 0 : n.backgroundPosition) ? i : "right 90% center, 0% 0%",
            backgroundRepeat: "no-repeat, no-repeat",
        };
    }
    return null != e ? e : null != t ? t : {};
}
