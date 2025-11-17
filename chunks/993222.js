n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    o = n(481060),
    s = n(594174),
    c = n(74538),
    u = n(597688),
    d = n(429368),
    p = n(884697),
    g = n(724994),
    f = n(786040),
    h = n(58201),
    C = n(445794),
    m = n(956472),
    _ = n(388032),
    b = n(944525);
let v = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: l, className: d, prioritizedCurrency: h } = e,
            { isPurchased: v, isPartiallyOwnedBundle: x } = (0, g.L)(t),
            E = (0, p.G1)(t),
            O = (0, a.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)),
            S = (null == O ? void 0 : O.unpublishedAt) != null ? (0, p.OT)(O.unpublishedAt) : null,
            y = (0, a.e7)([s.default], () => s.default.getCurrentUser()),
            j = c.ZP.canUseCollectibles(y),
            k = (0, C.Iw)(t),
            { isOrbExclusive: I } = (0, m.Ip)({
                product: t,
                isPremiumUser: j,
                prioritizedCurrency: h,
                hasDiscountOffer: null != k,
            }),
            T = n;
        if (
            (null == T &&
                (null == S || l
                    ? !x && !v && (0, p.Yq)(t.skuId)
                        ? (T = f.Zh.NEW)
                        : I
                          ? (T = f.Zh.ORBS_EXCLUSIVE)
                          : E && (T = f.Zh.NITRO_EXCLUSIVE)
                    : (T = f.Zh.LIMITED_TIME)),
            null == T || T === f.Zh.NONE)
        )
            return null;
        let L = null;
        switch (T) {
            case f.Zh.LIMITED_TIME:
                L =
                    null != S
                        ? S > 1
                            ? _.intl.formatToPlainString(_.t.Io7ozn, { days: S })
                            : _.intl.string(_.t.Bc13HF)
                        : _.intl.string(_.t["h/uBCR"]);
                break;
            case f.Zh.NEW:
                L = _.intl.string(_.t.y2b7CA);
                break;
            case f.Zh.NITRO_EXCLUSIVE:
                L = _.intl.string(_.t.X3Ekj8);
                break;
            case f.Zh.ORBS_EXCLUSIVE:
                L = _.intl.string(_.t["0TmQRG"]);
        }
        return (0, r.jsx)(o.IGR, {
            text: L,
            disableColor: !0,
            className: i()(d, b.productCardBadge),
        });
    },
    x = (e) => {
        let { skuId: t, badgeOverride: n, className: l, prioritizedCurrency: i, skipLimitedTimeCheck: a } = e,
            o = (0, f.LJ)(t),
            s = (0, d.o)(o);
        if (null == o) return null;
        let c = (0, h.W)(o, s);
        return (0, r.jsx)(v, {
            product: c,
            badgeOverride: n,
            skipLimitedTimeCheck: a,
            className: l,
            prioritizedCurrency: i,
        });
    };
