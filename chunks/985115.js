n.d(t, { s: () => O, A: () => N });
var r = n(477900);
n(582128);
var i = n(855986),
    s = n(287809),
    a = n(448645),
    l = n(590180),
    u = n(298072),
    o = n(993408),
    c = n(561573),
    d = n(288106),
    I = n(669470),
    p = n(818296),
    f = n(466459),
    m = n(623373),
    v = n(248180),
    g = n(503698),
    x = n.n(g),
    C = n(559106),
    _ = n(866665),
    h = n(805251),
    E = n(926321),
    A = n(278416),
    b = n(318254),
    R = n(758836),
    k = n(792996),
    y = n(6919);
let L = (e) => {
        let { ref: t, ...n } = e;
        return (0, r.jsx)(C.vN, { children: (0, r.jsx)("div", { ref: t, ...n }) });
    },
    O = (e) => {
        let { className: t, tabIndex: n = 0 } = e,
            i = k.intl.string(k.t["+drfVi"]);
        return (0, r.jsx)(_.m, {
            text: k.intl.string(k.t.dCou7i),
            children: (0, r.jsx)(L, {
                className: x()(t, y.$),
                tabIndex: n,
                role: "img",
                "aria-label": i,
                children: (0, r.jsx)(h.E, { type: { text: i }, variant: "inverted", icon: E.DiceIcon }),
            }),
        });
    },
    S = (e) => {
        let { badge: t, className: n, tabIndex: i } = e;
        if (t.type === R.Le.DYNAMIC) return (0, r.jsx)(O, { className: n, tabIndex: i });
        let s = (function (e) {
            switch (e.type) {
                case R.Le.BADGE_OVERRIDE:
                    return { type: { text: e.text } };
                case R.Le.PROMO_DISCOUNT:
                    return {
                        type: { text: k.intl.formatToPlainString(k.t.nH5DSU, { percentage: e.percentOff }) },
                        icon: A.TagIcon,
                    };
                case R.Le.PROMO_ORBS_BACK:
                    return {
                        type: { text: k.intl.formatToPlainString(k.t.ti90Eh, { orbCount: e.orbCount }) },
                        icon: b.OrbsIcon,
                    };
                case R.Le.LIMITED_TIME:
                    var t;
                    let n;
                    return {
                        type: {
                            text:
                                null == (n = null != (t = e.unpublishedAt) ? (0, o.WU)(t) : null)
                                    ? k.intl.string(k.t["h/uBCR"])
                                    : n > 1
                                      ? k.intl.formatToPlainString(k.t.Io7ozn, { days: n })
                                      : k.intl.string(k.t.Bc13HF),
                        },
                    };
                case R.Le.NEW:
                    return { type: "new" };
                case R.Le.ORBS_EXCLUSIVE:
                    return { type: { text: k.intl.string(k.t["0TmQRG"]) }, icon: b.OrbsIcon };
                case R.Le.NITRO_EXCLUSIVE:
                    return { type: { text: k.intl.string(k.t.X3Ekj8) } };
                default:
                    return null;
            }
        })(t);
        if (null == s) return null;
        let { type: a, icon: l } = s;
        return (0, r.jsx)("div", {
            className: x()(n, y.$),
            children: (0, r.jsx)(h.E, { type: a, variant: "inverted", icon: l }),
        });
    };
var T = n(561769),
    P = n(57020);
function j(e) {
    var t;
    let n,
        {
            product: u,
            badgeOverride: g,
            productBadgeOverride: x,
            className: C,
            prioritizedCurrency: _,
            tabIndex: h,
        } = e,
        { isPurchased: E, isPartiallyOwnedBundle: A } = (0, f.h)(u),
        b = (0, o.G0)(u),
        k = (0, i.bG)([l.A], () => l.A.getCategoryForProduct(u.skuId)),
        y = u.categoryWillUnpublishAt ?? k?.unpublishedAt,
        L = (0, i.bG)([s.default], () => s.default.getCurrentUser()),
        O = a.Ay.canUseShopDiscounts(L),
        {
            isOrbExclusive: T,
            isShowingPromoPrice: j,
            shouldCheckoutWithOrbs: N,
        } = (0, P.F)({ product: u, hasShopDiscount: O, prioritizedCurrency: _ }),
        V = (0, p.g)(u),
        D = (0, v.S)(V),
        M =
            ((t = u.skuId),
            (n = (0, i.bG)([c.A], () =>
                (function (e) {
                    let t = 0;
                    for (let n of e ?? []) {
                        let e = n[d.QK.SELF_PURCHASE];
                        e?.type === d.Ns.ACTION && (t += e.amount);
                    }
                    return t > 0 ? t : null;
                })(c.A.getRewardsForSkuId(t)),
            )),
            (0, I.xG)(V) ? n : null),
        B = g;
    if (
        (null == B &&
            (null != x
                ? (B = R.Le.BADGE_OVERRIDE)
                : j && null != D
                  ? (B = R.Le.PROMO_DISCOUNT)
                  : N || null == M
                    ? (0, m.JQ)(u)
                        ? (B = R.Le.DYNAMIC)
                        : (0, o.HF)(y)
                          ? (B = R.Le.LIMITED_TIME)
                          : !A && !E && (0, o.aT)(u.skuId)
                            ? (B = R.Le.NEW)
                            : T
                              ? (B = R.Le.ORBS_EXCLUSIVE)
                              : b && (B = R.Le.NITRO_EXCLUSIVE)
                    : (B = R.Le.PROMO_ORBS_BACK)),
        null == B || B === R.Le.NONE)
    )
        return null;
    let w = null;
    switch (B) {
        case R.Le.PROMO_DISCOUNT:
            null != D && (w = { type: B, percentOff: D });
            break;
        case R.Le.PROMO_ORBS_BACK:
            null != M && (w = { type: B, orbCount: M });
            break;
        case R.Le.LIMITED_TIME:
            w = { type: B, unpublishedAt: y };
            break;
        case R.Le.BADGE_OVERRIDE:
            null != x && "" !== x && (w = { type: B, text: x });
            break;
        case R.Le.DYNAMIC:
        case R.Le.NEW:
        case R.Le.ORBS_EXCLUSIVE:
        case R.Le.NITRO_EXCLUSIVE:
            w = { type: B };
    }
    return null == w ? null : (0, r.jsx)(S, { badge: w, className: C, tabIndex: h });
}
let N = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s, tabIndex: a } = e,
        l = (0, T.Vm)(t),
        o = (0, u.Q)(l);
    if (null == l || l.hideBadge) return null;
    let c = (0, m.rb)(l, o);
    return (0, r.jsx)(j, {
        product: c,
        badgeOverride: n,
        productBadgeOverride: l.badgeOverride,
        className: i,
        prioritizedCurrency: s,
        tabIndex: a,
    });
};
