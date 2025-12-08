n.d(t, { Z: () => _ });
var a = n(54381);
n(473749);
var l = n(120356),
    r = n.n(l),
    i = n(442837),
    s = n(481060),
    o = n(594174),
    c = n(74538),
    d = n(597688),
    u = n(429368),
    m = n(884697),
    p = n(724994),
    h = n(786040),
    x = n(58201),
    f = n(445794),
    g = n(956472),
    b = n(388032),
    v = n(944525);
let j = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: l, className: u, prioritizedCurrency: x } = e,
            j = (0, h.jB)(),
            { isPurchased: _, isPartiallyOwnedBundle: y } = (0, p.L)(t),
            C = (0, m.G1)(t),
            S = (0, i.e7)([d.Z], () => d.Z.getCategoryForProduct(t.skuId)),
            E = (null == S ? void 0 : S.unpublishedAt) != null ? (0, m.OT)(S.unpublishedAt) : null,
            O = (0, i.e7)([o.default], () => o.default.getCurrentUser()),
            N = c.ZP.canUseCollectibles(O),
            T = (0, f.Iw)(t),
            { isOrbExclusive: P } = (0, g.Ip)({
                product: t,
                isPremiumUser: N,
                prioritizedCurrency: x,
                hasDiscountOffer: null != T,
            }),
            I = n;
        if (
            (null == I &&
                (null == E || l
                    ? !y && !_ && (0, m.Yq)(t.skuId)
                        ? (I = h.Zh.NEW)
                        : null != j && 3 === j
                          ? (I = h.Zh.THREE_DAY_RENTAL)
                          : null != j && 7 === j
                            ? (I = h.Zh.SEVEN_DAY_RENTAL)
                            : null != j
                              ? (I = h.Zh.RENTAL)
                              : P
                                ? (I = h.Zh.ORBS_EXCLUSIVE)
                                : C && (I = h.Zh.NITRO_EXCLUSIVE)
                    : (I = h.Zh.LIMITED_TIME)),
            null == I || I === h.Zh.NONE)
        )
            return null;
        let w = null;
        switch (I) {
            case h.Zh.LIMITED_TIME:
                w =
                    null != E
                        ? E > 1
                            ? b.intl.formatToPlainString(b.t.Io7ozn, { days: E })
                            : b.intl.string(b.t.Bc13HF)
                        : b.intl.string(b.t["h/uBCR"]);
                break;
            case h.Zh.NEW:
                w = b.intl.string(b.t.y2b7CA);
                break;
            case h.Zh.NITRO_EXCLUSIVE:
                w = b.intl.string(b.t.X3Ekj8);
                break;
            case h.Zh.ORBS_EXCLUSIVE:
                w = b.intl.string(b.t["0TmQRG"]);
                break;
            case h.Zh.THREE_DAY_RENTAL:
                w = b.intl.string(b.t["52UXCo"]);
                break;
            case h.Zh.SEVEN_DAY_RENTAL:
                w = b.intl.string(b.t.FRR2s2);
                break;
            case h.Zh.RENTAL:
                w = b.intl.string(b.t.VgsFa1);
        }
        return (0, a.jsx)(s.IGR, {
            text: w,
            disableColor: !0,
            className: r()(u, v.productCardBadge),
        });
    },
    _ = (e) => {
        let { skuId: t, badgeOverride: n, className: l, prioritizedCurrency: r, skipLimitedTimeCheck: i } = e,
            s = (0, h.LJ)(t),
            o = (0, u.o)(s);
        if (null == s) return null;
        let c = (0, x.W)(s, o);
        return (0, a.jsx)(j, {
            product: c,
            badgeOverride: n,
            skipLimitedTimeCheck: i,
            className: l,
            prioritizedCurrency: r,
        });
    };
