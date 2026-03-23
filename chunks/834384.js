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
    f = r(287809),
    m = r(927578),
    h = r(979286),
    A = r(4227),
    x = r(298072),
    p = r(993408),
    C = r(450481),
    g = r(740076),
    v = r(466459),
    I = r(623373),
    b = r(561769),
    k = r(766172),
    E = r(525723),
    j = r(57020),
    y = r(61750),
    T = r(758836),
    R = r(788868),
    _ = r(985018),
    L = r(742282);
let N = (e) => {
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
            f = (0, p.R8)(t, l, !1),
            m = o
                ? _.intl.formatToPlainString(_.t["5U5RB5"], { discountOfferAmount: c })
                : _.intl.formatToPlainString(_.t["cNSL/j"], { price: f });
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, u.A)({
                        skuId: (0, k.Y)({ product: t, selectedVariantIndex: a }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: d ?? m,
            fullWidth: !0,
        });
    },
    O = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r } = e;
        return (0, n.jsx)(o.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: { textOverride: r ?? _.intl.string(_.t.sEAnVH) },
            subscriptionTier: R.pe.TIER_2,
            showGradient: !0,
        });
    },
    P = (e) => {
        let { handlePreviewButtonClick: t, text: r } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: r ?? _.intl.string(_.t.FdGl5A),
            fullWidth: !0,
        });
    },
    S = (e) => {
        let { handleUseNow: t, isApplying: r, text: l } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: r,
            text: l ?? _.intl.string(_.t.MAS7uK),
            fullWidth: !0,
        });
    },
    V = (e) => {
        let { skuId: t, onClick: r, text: l } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: l ?? _.intl.string(_.t.FdGl5A),
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
                    await (0, h.iJ)(t.skuId),
                    (0, y.A)({ product: t, analyticsLocations: s, purchaseType: T.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), o();
            },
            disabled: r,
            loading: l,
            loadingStartedLabel: _.intl.string(_.t["TYw+9s"]),
            loadingFinishedLabel: _.intl.string(_.t.Pg1UP5),
            text: a ?? _.intl.string(_.t.zp6caO),
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
                _.intl.format(_.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(c.A, { className: L.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    u?.("claim with orbs button"),
                    (0, d.B4)({
                        skuId: (0, k.Y)({ product: t, selectedVariantIndex: s }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, h.gB)(),
                                (0, y.A)({
                                    product: t,
                                    analyticsLocations: l,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: T.gs.ORB,
                                });
                        },
                        analyticsLocations: l,
                    });
            },
            "aria-label": _.intl.formatToPlainString(_.t.yi41qQ, { orbPrice: r[0].amount }),
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
            text: r ?? _.intl.string(_.t.GpnHfH),
            fullWidth: !0,
        });
    },
    D = (e) => {
        let {
                product: t,
                cardRef: r,
                selectedVariantIndex: i,
                onClick: u,
                text: o,
                prioritizedCurrency: c,
                onClickAnalytics: d,
            } = e,
            h = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
            x = m.Ay.canUseCollectibles(h),
            { isPurchased: I, isPartiallyOwnedBundle: k } = (0, v.h)(t),
            y = (0, p.G0)(t),
            T = (0, p.tt)(t),
            { isDisabled: R } = (0, g.I)(t.skuId),
            _ = (0, p.Zu)({ product: t, isPartiallyOwnedBundle: k, isPurchased: I }),
            L = (0, E.V_)(t),
            D = null != L,
            {
                shouldCheckoutWithOrbs: W,
                hasSufficientOrbs: U,
                checkoutEligiblePrices: H,
            } = (0, j.F)({ product: t, isPremiumUser: x, prioritizedCurrency: c, hasDiscountOffer: D }),
            { analyticsLocations: F } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            G = (0, b.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [z, Q] = (0, l.yK)([A.A], () => [
                A.A.isClaiming === t.skuId,
                null != A.A.isClaiming && A.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: X, isApplying: Y } = (0, C.p)({ product: t });
        if (null != u) return (0, n.jsx)(V, { onClick: u, skuId: t.skuId, text: o });
        if (y && !x && !T) return (0, n.jsx)(O, { isClaimPremiumProductDisabled: Q, text: o });
        if (!_ || R) return (0, n.jsx)(P, { handlePreviewButtonClick: G, text: o });
        if (I) return (0, n.jsx)(S, { handleUseNow: X, isApplying: Y, text: o });
        if (y)
            return (0, n.jsx)(w, {
                product: t,
                isClaimPremiumProductDisabled: Q,
                isClaiming: z,
                analyticsLocations: F,
                text: o,
                onClickAnalytics: d,
            });
        if (W && U)
            return (0, n.jsx)(M, {
                product: t,
                checkoutEligiblePrices: H,
                analyticsLocations: F,
                selectedVariantIndex: i,
                text: o,
                onClickAnalytics: d,
            });
        if (W && !U)
            if (H.length > 1) return (0, n.jsx)(B, { handlePreviewButtonClick: G, text: o });
            else return (0, n.jsx)(P, { handlePreviewButtonClick: G, text: o });
        return (0, n.jsx)(N, {
            product: t,
            cardRef: r,
            isPremiumUser: x,
            analyticsLocations: F,
            selectedVariantIndex: i,
            hasDiscountOffer: D,
            discountOfferAmount: L,
            text: o,
        });
    },
    W = (e) => {
        let { skuId: t, cardRef: r, onClick: l, text: i, prioritizedCurrency: s, onClickAnalytics: a } = e,
            u = (0, b.Vm)(t),
            o = (0, x.Q)(u);
        if (null == u) return null;
        let c = (0, I.rb)(u, o);
        return (0, n.jsx)(D, {
            product: c,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: l,
            text: i,
            prioritizedCurrency: s,
            onClickAnalytics: a,
        });
    };
