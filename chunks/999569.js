n.d(t, { s: () => j, A: () => N });
var r = n(477900);
n(582128);
var i = n(503698),
    s = n.n(i),
    a = n(855986),
    l = n(559106),
    o = n(866665),
    u = n(805251),
    d = n(926321),
    c = n(318254),
    I = n(278416),
    v = n(287809),
    f = n(448645),
    p = n(590180),
    m = n(298072),
    g = n(993408),
    x = n(561573),
    _ = n(288106),
    A = n(669470),
    E = n(818296),
    C = n(466459),
    h = n(623373),
    b = n(248180),
    R = n(561769),
    k = n(57020),
    O = n(792996),
    y = n(31005);
let S = (e) => {
        let { ref: t, ...n } = e;
        return (0, r.jsx)(l.vN, { children: (0, r.jsx)("div", { ref: t, ...n }) });
    },
    j = (e) => {
        let { className: t, tabIndex: n = 0 } = e,
            i = O.intl.string(O.t["+drfVi"]);
        return (0, r.jsx)(o.m, {
            text: O.intl.string(O.t.dCou7i),
            children: (0, r.jsx)(S, {
                className: s()(t, y.$),
                tabIndex: n,
                role: "img",
                "aria-label": i,
                children: (0, r.jsx)(u.E, { type: { text: i }, variant: "inverted", icon: d.DiceIcon }),
            }),
        });
    };
function T(e) {
    var t;
    let n,
        {
            product: i,
            badgeOverride: l,
            productBadgeOverride: o,
            className: d,
            prioritizedCurrency: m,
            tabIndex: S,
        } = e,
        { isPurchased: T, isPartiallyOwnedBundle: N } = (0, C.h)(i),
        P = (0, g.G0)(i),
        V = (0, a.bG)([p.A], () => p.A.getCategoryForProduct(i.skuId)),
        L = i.categoryWillUnpublishAt ?? V?.unpublishedAt,
        D = null != L ? (0, g.WU)(L) : null,
        M = (0, a.bG)([v.default], () => v.default.getCurrentUser()),
        B = f.Ay.canUseShopDiscounts(M),
        {
            isOrbExclusive: w,
            isShowingPromoPrice: H,
            shouldCheckoutWithOrbs: G,
        } = (0, k.F)({ product: i, hasShopDiscount: B, prioritizedCurrency: m }),
        U = (0, E.g)(i),
        W = (0, b.S)(U),
        F =
            ((t = i.skuId),
            (n = (0, a.bG)([x.A], () =>
                (function (e) {
                    let t = 0;
                    for (let n of e ?? []) {
                        let e = n[_.QK.SELF_PURCHASE];
                        e?.type === _.Ns.ACTION && (t += e.amount);
                    }
                    return t > 0 ? t : null;
                })(x.A.getRewardsForSkuId(t)),
            )),
            (0, A.xG)(U) ? n : null),
        K = l;
    if (
        (null == K &&
            (null != o
                ? (K = R.AW.BADGE_OVERRIDE)
                : H && null != W
                  ? (K = R.AW.PROMO_DISCOUNT)
                  : G || null == F
                    ? (0, h.JQ)(i)
                        ? (K = R.AW.DYNAMIC)
                        : (0, g.HF)(L)
                          ? (K = R.AW.LIMITED_TIME)
                          : !N && !T && (0, g.aT)(i.skuId)
                            ? (K = R.AW.NEW)
                            : w
                              ? (K = R.AW.ORBS_EXCLUSIVE)
                              : P && (K = R.AW.NITRO_EXCLUSIVE)
                    : (K = R.AW.PROMO_ORBS_BACK)),
        null == K || K === R.AW.NONE)
    )
        return null;
    if (K === R.AW.DYNAMIC) return (0, r.jsx)(j, { className: d, tabIndex: S });
    if (K === R.AW.ORBS_EXCLUSIVE)
        return (0, r.jsx)("div", {
            className: s()(d, y.$),
            children: (0, r.jsx)(u.E, {
                type: { text: O.intl.string(O.t["0TmQRG"]) },
                variant: "inverted",
                icon: c.OrbsIcon,
            }),
        });
    if (K === R.AW.PROMO_DISCOUNT && null != W)
        return (0, r.jsx)("div", {
            className: s()(d, y.$),
            children: (0, r.jsx)(u.E, {
                type: { text: O.intl.formatToPlainString(O.t.nH5DSU, { percentage: W }) },
                variant: "inverted",
                icon: I.TagIcon,
            }),
        });
    if (K === R.AW.PROMO_ORBS_BACK && null != F)
        return (0, r.jsx)("div", {
            className: s()(d, y.$),
            children: (0, r.jsx)(u.E, {
                type: { text: O.intl.formatToPlainString(O.t.ti90Eh, { orbCount: F }) },
                variant: "inverted",
                icon: c.OrbsIcon,
            }),
        });
    let z = null;
    switch (K) {
        case R.AW.LIMITED_TIME:
            if (null != D) {
                let e = D > 1 ? O.intl.formatToPlainString(O.t.Io7ozn, { days: D }) : O.intl.string(O.t.Bc13HF);
                z = (0, r.jsx)(u.E, { type: { text: e }, variant: "inverted" });
            } else z = (0, r.jsx)(u.E, { type: { text: O.intl.string(O.t["h/uBCR"]) }, variant: "inverted" });
            break;
        case R.AW.NEW:
            z = (0, r.jsx)(u.E, { type: "new", variant: "inverted" });
            break;
        case R.AW.NITRO_EXCLUSIVE:
            z = (0, r.jsx)(u.E, { type: { text: O.intl.string(O.t.X3Ekj8) }, variant: "inverted" });
            break;
        case R.AW.BADGE_OVERRIDE:
            null != o && "" !== o && (z = (0, r.jsx)(u.E, { type: { text: o }, variant: "inverted" }));
    }
    return null == z ? null : (0, r.jsx)("div", { className: s()(d, y.$), children: z });
}
let N = function (e) {
    let { skuId: t, badgeOverride: n, className: i, prioritizedCurrency: s, tabIndex: a } = e,
        l = (0, R.Vm)(t),
        o = (0, m.Q)(l);
    if (null == l || l.hideBadge) return null;
    let u = (0, h.rb)(l, o);
    return (0, r.jsx)(T, {
        product: u,
        badgeOverride: n,
        productBadgeOverride: l.badgeOverride,
        className: i,
        prioritizedCurrency: s,
        tabIndex: a,
    });
};
