n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(780384),
    a = n(755721),
    o = n(410030),
    s = n(639119),
    l = n(767714),
    c = n(70466),
    u = n(124481);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = p(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function p(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let h = (e) => {
    var {
            textOptions: t,
            subscriptionTier: n,
            hasActivePromotion: d = !1,
            isPersistentCTA: p = !1,
            useShorterCTA: h = !1,
            showGradient: m,
            confirmationFooter: g,
            color: E,
        } = e,
        b = _(e, [
            "textOptions",
            "subscriptionTier",
            "hasActivePromotion",
            "isPersistentCTA",
            "useShorterCTA",
            "showGradient",
            "confirmationFooter",
            "color",
        ]);
    let y = (0, o.ZP)(),
        { buttonText: O, marketingSubscriptionTierSkuId: v } = (0, c.G)({
            hasActivePromotion: d,
            subscriptionTier: n,
            useShorterCTA: h,
            isPersistentCTA: p,
        }),
        I = (0, s.N)(),
        T = null == I ? void 0 : I.subscription_trial,
        S = null != T && v === T.sku_id,
        A = null != E ? E : (0, i.wj)(y) ? a.Tt.BRAND_INVERTED : a.Tt.BRAND;
    return (0, r.jsx)(
        l.Z,
        f(
            {
                color: A,
                textOptions: f(
                    {
                        textOverride: O,
                        textClassName: S ? u.freeTrialText : void 0,
                    },
                    t,
                ),
                onlyShineOnHover: !0,
                subscriptionTier: v,
                showGradient: m,
                confirmationFooter: g,
            },
            b,
        ),
    );
};
