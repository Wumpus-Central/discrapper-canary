r.d(t, { A: () => W });
var n = r(627968);
r(64700);
var l = r(417597),
    i = r(397927),
    s = r(793574),
    a = r(688810),
    u = r(44120),
    o = r(725807),
    c = r(106799),
    d = r(652165),
    m = r(287809),
    h = r(927578),
    p = r(979286),
    f = r(4227),
    x = r(298072),
    g = r(993408),
    v = r(450481),
    C = r(740076),
    A = r(466459),
    I = r(623373),
    k = r(561769),
    b = r(766172),
    y = r(525723),
    E = r(57020),
    j = r(61750),
    _ = r(758836),
    R = r(788868),
    T = r(985018),
    L = r(37655);
let P = (e) => {
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
            m = (0, g.R8)(t, l, !1),
            h = o
                ? T.intl.formatToPlainString(T.t["5U5RB5"], { discountOfferAmount: c })
                : T.intl.formatToPlainString(T.t["cNSL/j"], { price: m });
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, u.A)({
                        skuId: (0, b.Y)({ product: t, selectedVariantIndex: a }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: d ?? h,
            fullWidth: !0,
        });
    },
    S = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r } = e;
        return (0, n.jsx)(o.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: { textOverride: r ?? T.intl.string(T.t.sEAnVH) },
            subscriptionTier: R.pe.TIER_2,
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
            text: r ?? T.intl.string(T.t.FdGl5A),
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
            text: l ?? T.intl.string(T.t.MAS7uK),
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
            text: l ?? T.intl.string(T.t.FdGl5A),
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
                    await (0, p.iJ)(t.skuId),
                    (0, j.A)({ product: t, analyticsLocations: s, purchaseType: _.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), o();
            },
            disabled: r,
            loading: l,
            loadingStartedLabel: T.intl.string(T.t["TYw+9s"]),
            loadingFinishedLabel: T.intl.string(T.t.Pg1UP5),
            text: a ?? T.intl.string(T.t.zp6caO),
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
                T.intl.format(T.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(c.A, { className: L.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    u?.("claim with orbs button"),
                    (0, d.B4)({
                        skuId: (0, b.Y)({ product: t, selectedVariantIndex: s }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, p.gB)(),
                                (0, j.A)({
                                    product: t,
                                    analyticsLocations: l,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: _.gs.ORB,
                                });
                        },
                        analyticsLocations: l,
                    });
            },
            "aria-label": T.intl.formatToPlainString(T.t.yi41qQ, { orbPrice: r[0].amount }),
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
            text: r ?? T.intl.string(T.t.GpnHfH),
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
            p = (0, l.bG)([m.default], () => m.default.getCurrentUser()),
            x = h.Ay.canUseCollectibles(p),
            { isPurchased: I, isPartiallyOwnedBundle: b } = (0, A.h)(t),
            j = (0, g.G0)(t),
            _ = (0, g.tt)(t),
            { isDisabled: R } = (0, C.I)(t.skuId),
            T = (0, g.Zu)({ product: t, isPartiallyOwnedBundle: b, isPurchased: I }),
            L = (0, y.V_)(t),
            H = null != L,
            {
                shouldCheckoutWithOrbs: W,
                hasSufficientOrbs: U,
                checkoutEligiblePrices: D,
            } = (0, E.F)({ product: t, isPremiumUser: x, prioritizedCurrency: c, hasDiscountOffer: H }),
            { analyticsLocations: G } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            F = (0, k.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [z, K] = (0, l.yK)([f.A], () => [
                f.A.isClaiming === t.skuId,
                null != f.A.isClaiming && f.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: Q, isApplying: Y } = (0, v.p)({ product: t });
        if (null != u) return (0, n.jsx)(N, { onClick: u, skuId: t.skuId, text: o });
        if (j && !x && !_) return (0, n.jsx)(S, { isClaimPremiumProductDisabled: K, text: o });
        if (!T || R) return (0, n.jsx)(O, { handlePreviewButtonClick: F, text: o });
        if (I) return (0, n.jsx)(V, { handleUseNow: Q, isApplying: Y, text: o });
        if (j)
            return (0, n.jsx)(w, {
                product: t,
                isClaimPremiumProductDisabled: K,
                isClaiming: z,
                analyticsLocations: G,
                text: o,
                onClickAnalytics: d,
            });
        if (W && U)
            return (0, n.jsx)(M, {
                product: t,
                checkoutEligiblePrices: D,
                analyticsLocations: G,
                selectedVariantIndex: i,
                text: o,
                onClickAnalytics: d,
            });
        if (W && !U)
            if (D.length > 1) return (0, n.jsx)(B, { handlePreviewButtonClick: F, text: o });
            else return (0, n.jsx)(O, { handlePreviewButtonClick: F, text: o });
        return (0, n.jsx)(P, {
            product: t,
            cardRef: r,
            isPremiumUser: x,
            analyticsLocations: G,
            selectedVariantIndex: i,
            hasDiscountOffer: H,
            discountOfferAmount: L,
            text: o,
        });
    },
    W = (e) => {
        let { skuId: t, cardRef: r, onClick: l, text: i, prioritizedCurrency: s, onClickAnalytics: a } = e,
            u = (0, k.Vm)(t),
            o = (0, x.Q)(u);
        if (null == u) return null;
        let c = (0, I.rb)(u, o);
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
