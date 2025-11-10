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
    b = n(809854);
let v = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: l, className: u, prioritizedCurrency: h } = e,
            { isPurchased: v, isPartiallyOwnedBundle: E } = (0, g.L)(t),
            { isFetching: x, category: O } = (0, p.l)(t.skuId),
            S = (null == O ? void 0 : O.unpublishedAt) != null ? (0, d.OT)(O.unpublishedAt) : null,
            y = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
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
                    ? !E && !v && (0, d.Yq)(t.skuId)
                        ? (T = f.Zh.NEW)
                        : I && (T = f.Zh.ORBS_EXCLUSIVE)
                    : (T = f.Zh.LIMITED_TIME)),
            null == T || T === f.Zh.NONE || x)
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
            case f.Zh.ORBS_EXCLUSIVE:
                L = _.intl.string(_.t["0TmQRG"]);
        }
        return (0, r.jsx)(a.IGR, {
            text: L,
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
