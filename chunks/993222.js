n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var l = n(120356),
    i = n.n(l),
    s = n(399606),
    a = n(481060),
    o = n(594174),
    c = n(74538),
    u = n(884697),
    d = n(318028),
    p = n(724994),
    g = n(786040),
    f = n(445794),
    h = n(956472),
    C = n(388032),
    m = n(944525);
let _ = (e) => {
        let { product: t, badgeOverride: n, skipLimitedTimeCheck: l, className: _, prioritizedCurrency: b } = e,
            { isPurchased: v, isPartiallyOwnedBundle: E } = (0, p.L)(t),
            { isFetching: x, category: O } = (0, d.l)(t.skuId),
            S = (null == O ? void 0 : O.unpublishedAt) != null ? (0, u.OT)(O.unpublishedAt) : null,
            y = (0, s.e7)([o.default], () => o.default.getCurrentUser()),
            j = c.ZP.canUseCollectibles(y),
            k = (0, f.Iw)(t),
            { isOrbExclusive: I } = (0, h.Ip)({
                product: t,
                isPremiumUser: j,
                prioritizedCurrency: b,
                hasDiscountOffer: null != k,
            }),
            T = n;
        if (
            (null == T &&
                (null == S || l
                    ? !E && !v && (0, u.Yq)(t.skuId)
                        ? (T = g.Zh.NEW)
                        : I && (T = g.Zh.ORBS_EXCLUSIVE)
                    : (T = g.Zh.LIMITED_TIME)),
            null == T || T === g.Zh.NONE || x)
        )
            return null;
        let L = null;
        switch (T) {
            case g.Zh.LIMITED_TIME:
                L =
                    null != S
                        ? S > 1
                            ? C.intl.formatToPlainString(C.t.Io7ozn, { days: S })
                            : C.intl.string(C.t.Bc13HF)
                        : C.intl.string(C.t["h/uBCR"]);
                break;
            case g.Zh.NEW:
                L = C.intl.string(C.t.y2b7CA);
                break;
            case g.Zh.ORBS_EXCLUSIVE:
                L = C.intl.string(C.t["0TmQRG"]);
        }
        return (0, r.jsx)(a.IGR, {
            text: L,
            disableColor: !0,
            className: i()(_, m.productCardBadge),
        });
    },
    b = (e) => {
        let { skuId: t, badgeOverride: n, className: l, prioritizedCurrency: i, skipLimitedTimeCheck: s } = e,
            a = (0, g.LJ)(t);
        return null == a
            ? null
            : (0, r.jsx)(_, {
                  product: a,
                  badgeOverride: n,
                  skipLimitedTimeCheck: s,
                  className: l,
                  prioritizedCurrency: i,
              });
    };
