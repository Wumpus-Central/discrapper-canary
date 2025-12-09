n.d(t, { Z: () => _ });
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
    x = n(58201),
    f = n(445794),
    g = n(956472),
    b = n(388032),
    v = n(944525);
let j = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: r, className: u, prioritizedCurrency: x } = e,
            j = (0, h.jB)(),
            { isPurchased: _, isPartiallyOwnedBundle: y } = (0, p.L)(t),
            C = (0, m.G1)(t),
            S = (0, l.e7)([d.Z], () => d.Z.getCategoryForProduct(t.skuId)),
            E = (null == S ? void 0 : S.unpublishedAt) != null ? (0, m.OT)(S.unpublishedAt) : null,
            O = (0, l.e7)([o.default], () => o.default.getCurrentUser()),
            T = c.ZP.canUseCollectibles(O),
            N = (0, f.Iw)(t),
            { isOrbExclusive: P } = (0, g.Ip)({
                product: t,
                isPremiumUser: T,
                prioritizedCurrency: x,
                hasDiscountOffer: null != N,
            }),
            w = n;
        if (
            (null == w &&
                (null == E || r
                    ? !y && !_ && (0, m.Yq)(t.skuId)
                        ? (w = h.Zh.NEW)
                        : null != j && 3 === j
                          ? (w = h.Zh.THREE_DAY_RENTAL)
                          : null != j && 7 === j
                            ? (w = h.Zh.SEVEN_DAY_RENTAL)
                            : null != j
                              ? (w = h.Zh.RENTAL)
                              : P
                                ? (w = h.Zh.ORBS_EXCLUSIVE)
                                : C && (w = h.Zh.NITRO_EXCLUSIVE)
                    : (w = h.Zh.LIMITED_TIME)),
            null == w || w === h.Zh.NONE)
        )
            return null;
        let I = null;
        switch (w) {
            case h.Zh.LIMITED_TIME:
                I =
                    null != E
                        ? E > 1
                            ? b.intl.formatToPlainString(b.t.Io7ozn, { days: E })
                            : b.intl.string(b.t.Bc13HF)
                        : b.intl.string(b.t["h/uBCR"]);
                break;
            case h.Zh.NEW:
                I = b.intl.string(b.t.y2b7CA);
                break;
            case h.Zh.NITRO_EXCLUSIVE:
                I = b.intl.string(b.t.X3Ekj8);
                break;
            case h.Zh.ORBS_EXCLUSIVE:
                I = b.intl.string(b.t["0TmQRG"]);
                break;
            case h.Zh.THREE_DAY_RENTAL:
                I = b.intl.string(b.t["52UXCo"]);
                break;
            case h.Zh.SEVEN_DAY_RENTAL:
                I = b.intl.string(b.t.FRR2s2);
                break;
            case h.Zh.RENTAL:
                I = b.intl.string(b.t.VgsFa1);
        }
        return (0, a.jsx)(s.IGR, {
            text: I,
            disableColor: !0,
            className: i()(u, v.productCardBadge),
        });
    },
    _ = (e) => {
        let { skuId: t, badgeOverride: n, className: r, prioritizedCurrency: i, skipLimitedTimeCheck: l } = e,
            s = (0, h.LJ)(t),
            o = (0, u.o)(s);
        if (null == s) return null;
        let c = (0, x.W)(s, o);
        return (0, a.jsx)(j, {
            product: c,
            badgeOverride: n,
            skipLimitedTimeCheck: l,
            className: r,
            prioritizedCurrency: i,
        });
    };
