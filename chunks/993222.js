n.d(t, { Z: () => y });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(442837),
    s = n(481060),
    o = n(594174),
    c = n(74538),
    d = n(597688),
    u = n(429368),
    m = n(884697),
    p = n(724994),
    h = n(786040),
    f = n(58201),
    x = n(445794),
    b = n(956472),
    g = n(388032),
    v = n(994987);
let j = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: r, className: u, prioritizedCurrency: f } = e,
            j = (0, h.jB)(),
            { isPurchased: y, isPartiallyOwnedBundle: C } = (0, p.L)(t),
            _ = (0, m.G1)(t),
            S = (0, l.e7)([d.Z], () => d.Z.getCategoryForProduct(t.skuId)),
            E = (null == S ? void 0 : S.unpublishedAt) != null ? (0, m.OT)(S.unpublishedAt) : null,
            T = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
            O = c.ZP.canUseCollectibles(T),
            N = (0, x.Iw)(t),
            { isOrbExclusive: P } = (0, b.Ip)({
                product: t,
                isPremiumUser: O,
                prioritizedCurrency: f,
                hasDiscountOffer: null != N,
            }),
            w = n;
        if (
            (null == w &&
                (!r && (0, m.L9)(null == S ? void 0 : S.unpublishedAt)
                    ? (w = h.Zh.LIMITED_TIME)
                    : !C && !y && (0, m.Yq)(t.skuId)
                      ? (w = h.Zh.NEW)
                      : null != j && 3 === j
                        ? (w = h.Zh.THREE_DAY_RENTAL)
                        : null != j && 7 === j
                          ? (w = h.Zh.SEVEN_DAY_RENTAL)
                          : null != j
                            ? (w = h.Zh.RENTAL)
                            : P
                              ? (w = h.Zh.ORBS_EXCLUSIVE)
                              : _ && (w = h.Zh.NITRO_EXCLUSIVE)),
            null == w || w === h.Zh.NONE)
        )
            return null;
        let I = null;
        switch (w) {
            case h.Zh.LIMITED_TIME:
                I =
                    null != E
                        ? E > 1
                            ? g.intl.formatToPlainString(g.t.Io7ozn, { days: E })
                            : g.intl.string(g.t.Bc13HF)
                        : g.intl.string(g.t["h/uBCR"]);
                break;
            case h.Zh.NEW:
                I = g.intl.string(g.t.y2b7CA);
                break;
            case h.Zh.NITRO_EXCLUSIVE:
                I = g.intl.string(g.t.X3Ekj8);
                break;
            case h.Zh.ORBS_EXCLUSIVE:
                I = g.intl.string(g.t["0TmQRG"]);
                break;
            case h.Zh.THREE_DAY_RENTAL:
                I = g.intl.string(g.t["52UXCo"]);
                break;
            case h.Zh.SEVEN_DAY_RENTAL:
                I = g.intl.string(g.t.FRR2s2);
                break;
            case h.Zh.RENTAL:
                I = g.intl.string(g.t.VgsFa1);
        }
        return (0, a.jsx)(s.IGR, {
            text: I,
            disableColor: !0,
            className: i()(u, v.productCardBadge),
        });
    },
    y = (e) => {
        let { skuId: t, badgeOverride: n, className: r, prioritizedCurrency: i, skipLimitedTimeCheck: l } = e,
            s = (0, h.LJ)(t),
            o = (0, u.o)(s);
        if (null == s) return null;
        let c = (0, f.W)(s, o);
        return (0, a.jsx)(j, {
            product: c,
            badgeOverride: n,
            skipLimitedTimeCheck: l,
            className: r,
            prioritizedCurrency: i,
        });
    };
