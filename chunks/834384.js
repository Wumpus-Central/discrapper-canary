r.d(t, { A: () => W });
var n = r(627968);
r(64700);
var l = r(417597),
    i = r(397927),
    s = r(793574),
    a = r(688810),
    u = r(44120),
    o = r(465794),
    c = r(106799),
    d = r(652165),
    h = r(287809),
    m = r(927578),
    x = r(979286),
    f = r(4227),
    p = r(298072),
    g = r(993408),
    v = r(450481),
    C = r(740076),
    A = r(466459),
    b = r(623373),
    k = r(561769),
    I = r(766172),
    y = r(525723),
    E = r(57020),
    j = r(61750),
    R = r(758836),
    _ = r(788868),
    L = r(985018),
    T = r(37655);
let S = (e) => {
        let {
                product: t,
                cardRef: r,
                isPremiumUser: l,
                analyticsLocations: s,
                selectedVariantIndex: a,
                hasDiscountOffer: o,
                discountOfferAmount: c,
                text: d,
            } = e,
            h = (0, g.R8)(t, l, !1),
            m = o
                ? L.intl.formatToPlainString(L.t["5U5RB5"], { discountOfferAmount: c })
                : L.intl.formatToPlainString(L.t["cNSL/j"], { price: h });
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, u.A)({
                        skuId: (0, I.Y)({ product: t, selectedVariantIndex: a }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: d ?? m,
            fullWidth: !0,
        });
    },
    P = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r } = e;
        return (0, n.jsx)(o.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: { textOverride: r ?? L.intl.string(L.t.sEAnVH) },
            subscriptionTier: _.pe.TIER_2,
            showGradient: !0,
        });
    },
    O = (e) => {
        let { handlePreviewButtonClick: t, text: r } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: r ?? L.intl.string(L.t.FdGl5A),
            fullWidth: !0,
        });
    },
    V = (e) => {
        let { handleUseNow: t, isApplying: r, text: l } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: r,
            text: l ?? L.intl.string(L.t.MAS7uK),
            fullWidth: !0,
        });
    },
    N = (e) => {
        let { skuId: t, onClick: r, text: l } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: l ?? L.intl.string(L.t.FdGl5A),
            fullWidth: !0,
        });
    },
    w = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: r,
                isClaiming: l,
                analyticsLocations: s,
                text: a,
                onClickAnalytics: u,
            } = e,
            o = async () => {
                u?.("claim premium product button"),
                    await (0, x.iJ)(t.skuId),
                    (0, j.A)({ product: t, analyticsLocations: s, purchaseType: R.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), o();
            },
            disabled: r,
            loading: l,
            loadingStartedLabel: L.intl.string(L.t["TYw+9s"]),
            loadingFinishedLabel: L.intl.string(L.t.Pg1UP5),
            text: a ?? L.intl.string(L.t.zp6caO),
            fullWidth: !0,
        });
    },
    M = (e) => {
        let {
            product: t,
            checkoutEligiblePrices: r,
            analyticsLocations: l,
            selectedVariantIndex: s,
            text: a,
            onClickAnalytics: u,
        } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            text:
                a ??
                L.intl.format(L.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(c.A, { className: T.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    u?.("claim with orbs button"),
                    (0, d.B4)({
                        skuId: (0, I.Y)({ product: t, selectedVariantIndex: s }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, x.gB)(),
                                (0, j.A)({
                                    product: t,
                                    analyticsLocations: l,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: R.gs.ORB,
                                });
                        },
                        analyticsLocations: l,
                    });
            },
            "aria-label": L.intl.formatToPlainString(L.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    B = (e) => {
        let { handlePreviewButtonClick: t, text: r } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: r ?? L.intl.string(L.t.GpnHfH),
            fullWidth: !0,
        });
    },
    H = (e) => {
        let {
                product: t,
                cardRef: r,
                selectedVariantIndex: i,
                onClick: u,
                text: o,
                prioritizedCurrency: c,
                onClickAnalytics: d,
            } = e,
            x = (0, l.bG)([h.default], () => h.default.getCurrentUser()),
            p = m.Ay.canUseCollectibles(x),
            { isPurchased: b, isPartiallyOwnedBundle: I } = (0, A.h)(t),
            j = (0, g.G0)(t),
            R = (0, g.tt)(t),
            { isDisabled: _ } = (0, C.I)(t.skuId),
            L = (0, g.Zu)({ product: t, isPartiallyOwnedBundle: I, isPurchased: b }),
            T = (0, y.V_)(t),
            H = null != T,
            {
                shouldCheckoutWithOrbs: W,
                hasSufficientOrbs: D,
                checkoutEligiblePrices: U,
            } = (0, E.F)({ product: t, isPremiumUser: p, prioritizedCurrency: c, hasDiscountOffer: H }),
            { analyticsLocations: G } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            F = (0, k.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [z, Y] = (0, l.yK)([f.A], () => [
                f.A.isClaiming === t.skuId,
                null != f.A.isClaiming && f.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: K, isApplying: Q } = (0, v.p)({ product: t });
        if (null != u) return (0, n.jsx)(N, { onClick: u, skuId: t.skuId, text: o });
        if (j && !p && !R) return (0, n.jsx)(P, { isClaimPremiumProductDisabled: Y, text: o });
        if (!L || _) return (0, n.jsx)(O, { handlePreviewButtonClick: F, text: o });
        if (b) return (0, n.jsx)(V, { handleUseNow: K, isApplying: Q, text: o });
        if (j)
            return (0, n.jsx)(w, {
                product: t,
                isClaimPremiumProductDisabled: Y,
                isClaiming: z,
                analyticsLocations: G,
                text: o,
                onClickAnalytics: d,
            });
        if (W && D)
            return (0, n.jsx)(M, {
                product: t,
                checkoutEligiblePrices: U,
                analyticsLocations: G,
                selectedVariantIndex: i,
                text: o,
                onClickAnalytics: d,
            });
        if (W && !D)
            if (U.length > 1) return (0, n.jsx)(B, { handlePreviewButtonClick: F, text: o });
            else return (0, n.jsx)(O, { handlePreviewButtonClick: F, text: o });
        return (0, n.jsx)(S, {
            product: t,
            cardRef: r,
            isPremiumUser: p,
            analyticsLocations: G,
            selectedVariantIndex: i,
            hasDiscountOffer: H,
            discountOfferAmount: T,
            text: o,
        });
    },
    W = (e) => {
        let { skuId: t, cardRef: r, onClick: l, text: i, prioritizedCurrency: s, onClickAnalytics: a } = e,
            u = (0, k.Vm)(t),
            o = (0, p.Q)(u);
        if (null == u) return null;
        let c = (0, b.rb)(u, o);
        return (0, n.jsx)(H, {
            product: c,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: l,
            text: i,
            prioritizedCurrency: s,
            onClickAnalytics: a,
        });
    };
