n.d(t, { Z: () => E });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    s = n(399606),
    a = n(481060),
    o = n(594174),
    c = n(74538),
    u = n(429368),
    d = n(884697),
    p = n(318028),
    g = n(724994),
    f = n(786040),
    h = n(58201),
    C = n(445794),
    m = n(956472),
    _ = n(388032),
    b = n(944525);
let v = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: l, className: u, prioritizedCurrency: h } = e,
            { isPurchased: v, isPartiallyOwnedBundle: E } = (0, g.L)(t),
            x = (0, d.G1)(t),
            { isFetching: O, category: S } = (0, p.l)(t.skuId),
            y = (null == S ? void 0 : S.unpublishedAt) != null ? (0, d.OT)(S.unpublishedAt) : null,
            j = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
            k = c.ZP.canUseCollectibles(j),
            I = (0, C.Iw)(t),
            { isOrbExclusive: T } = (0, m.Ip)({
                product: t,
                isPremiumUser: k,
                prioritizedCurrency: h,
                hasDiscountOffer: null != I,
            }),
            L = n;
        if (
            (null == L &&
                (null == y || l
                    ? !E && !v && (0, d.Yq)(t.skuId)
                        ? (L = f.Zh.NEW)
                        : T
                          ? (L = f.Zh.ORBS_EXCLUSIVE)
                          : x && (L = f.Zh.NITRO_EXCLUSIVE)
                    : (L = f.Zh.LIMITED_TIME)),
            null == L || L === f.Zh.NONE || O)
        )
            return null;
        let B = null;
        switch (L) {
            case f.Zh.LIMITED_TIME:
                B =
                    null != y
                        ? y > 1
                            ? _.intl.formatToPlainString(_.t.Io7ozn, { days: y })
                            : _.intl.string(_.t.Bc13HF)
                        : _.intl.string(_.t["h/uBCR"]);
                break;
            case f.Zh.NEW:
                B = _.intl.string(_.t.y2b7CA);
                break;
            case f.Zh.NITRO_EXCLUSIVE:
                B = _.intl.string(_.t.X3Ekj8);
                break;
            case f.Zh.ORBS_EXCLUSIVE:
                B = _.intl.string(_.t["0TmQRG"]);
        }
        return (0, r.jsx)(a.IGR, {
            text: B,
            disableColor: !0,
            className: i()(u, b.productCardBadge),
        });
    },
    E = (e) => {
        let { skuId: t, badgeOverride: n, className: l, prioritizedCurrency: i, skipLimitedTimeCheck: s } = e,
            a = (0, f.LJ)(t),
            o = (0, u.o)(a);
        if (null == a) return null;
        let c = (0, h.W)(a, o);
        return (0, r.jsx)(v, {
            product: c,
            badgeOverride: n,
            skipLimitedTimeCheck: s,
            className: l,
            prioritizedCurrency: i,
        });
    };
