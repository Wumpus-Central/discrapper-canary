n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var l = n(120356),
    i = n.n(l),
    a = n(442837),
    s = n(481060),
    o = n(594174),
    c = n(74538),
    u = n(597688),
    d = n(429368),
    f = n(884697),
    g = n(724994),
    p = n(786040),
    m = n(58201),
    h = n(445794),
    C = n(956472),
    _ = n(388032),
    b = n(944525);
let v = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: l, className: d, prioritizedCurrency: m } = e,
            v = (0, p.jB)(),
            { isPurchased: x, isPartiallyOwnedBundle: E } = (0, g.L)(t),
            O = (0, f.G1)(t),
            S = (0, a.e7)([u.Z], () => u.Z.getCategoryForProduct(t.skuId)),
            y = (null == S ? void 0 : S.unpublishedAt) != null ? (0, f.OT)(S.unpublishedAt) : null,
            j = (0, a.e7)([o.default], () => o.default.getCurrentUser()),
            k = c.ZP.canUseCollectibles(j),
            I = (0, h.Iw)(t),
            { isOrbExclusive: T } = (0, C.Ip)({
                product: t,
                isPremiumUser: k,
                prioritizedCurrency: m,
                hasDiscountOffer: null != I,
            }),
            L = n;
        if (
            (null == L &&
                (null == y || l
                    ? !E && !x && (0, f.Yq)(t.skuId)
                        ? (L = p.Zh.NEW)
                        : null != v && 1 === v
                          ? (L = p.Zh.ONE_DAY_RENTAL)
                          : null != v && 3 === v
                            ? (L = p.Zh.THREE_DAY_RENTAL)
                            : null != v
                              ? (L = p.Zh.RENTAL)
                              : T
                                ? (L = p.Zh.ORBS_EXCLUSIVE)
                                : O && (L = p.Zh.NITRO_EXCLUSIVE)
                    : (L = p.Zh.LIMITED_TIME)),
            null == L || L === p.Zh.NONE)
        )
            return null;
        let B = null;
        switch (L) {
            case p.Zh.LIMITED_TIME:
                B =
                    null != y
                        ? y > 1
                            ? _.intl.formatToPlainString(_.t.Io7ozn, { days: y })
                            : _.intl.string(_.t.Bc13HF)
                        : _.intl.string(_.t["h/uBCR"]);
                break;
            case p.Zh.NEW:
                B = _.intl.string(_.t.y2b7CA);
                break;
            case p.Zh.NITRO_EXCLUSIVE:
                B = _.intl.string(_.t.X3Ekj8);
                break;
            case p.Zh.ORBS_EXCLUSIVE:
                B = _.intl.string(_.t["0TmQRG"]);
                break;
            case p.Zh.ONE_DAY_RENTAL:
                B = _.intl.string(_.t["9dHf8O"]);
                break;
            case p.Zh.THREE_DAY_RENTAL:
                B = _.intl.string(_.t["52UXCo"]);
                break;
            case p.Zh.RENTAL:
                B = _.intl.string(_.t.VgsFa1);
        }
        return (0, r.jsx)(s.IGR, {
            text: B,
            disableColor: !0,
            className: i()(d, b.productCardBadge),
        });
    },
    x = (e) => {
        let { skuId: t, badgeOverride: n, className: l, prioritizedCurrency: i, skipLimitedTimeCheck: a } = e,
            s = (0, p.LJ)(t),
            o = (0, d.o)(s);
        if (null == s) return null;
        let c = (0, m.W)(s, o);
        return (0, r.jsx)(v, {
            product: c,
            badgeOverride: n,
            skipLimitedTimeCheck: a,
            className: l,
            prioritizedCurrency: i,
        });
    };
