r.d(e, { A: () => G });
var i = r(627968);
r(64700);
var l = r(635358),
    n = r(417597),
    s = r(397927),
    a = r(793574),
    u = r(688810),
    o = r(44120),
    d = r(465794),
    c = r(106799),
    m = r(652165),
    x = r(287809),
    p = r(927578),
    g = r(979286),
    h = r(4227),
    C = r(298072),
    A = r(993408),
    I = r(450481),
    j = r(740076),
    k = r(466459),
    f = r(623373),
    v = r(561769),
    y = r(766172),
    E = r(525723),
    _ = r(57020),
    b = r(61750),
    T = r(758836),
    R = r(788868),
    S = r(985018),
    N = r(63444);
let P = (t) => {
        let {
                product: e,
                cardRef: r,
                isPremiumUser: n,
                analyticsLocations: a,
                selectedVariantIndex: u,
                hasDiscountOffer: d,
                discountOfferAmount: c,
                text: m,
            } = t,
            x = (0, A.R8)(e, n, !1),
            p = d
                ? S.intl.formatToPlainString(S.t["5U5RB5"], { discountOfferAmount: c })
                : S.intl.formatToPlainString(S.t["cNSL/j"], { price: x });
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(),
                    (0, o.A)({
                        skuId: (0, y.Y)({ product: e, selectedVariantIndex: u }),
                        returnRef: r,
                        analyticsLocations: a,
                        variantsReturnStyle: l.g.VARIANTS_GROUP,
                    });
            },
            text: m ?? p,
            fullWidth: !0,
        });
    },
    L = (t) => {
        let { isClaimPremiumProductDisabled: e, text: r } = t;
        return (0, i.jsx)(d.A, {
            fullWidth: !0,
            disabled: e,
            onClick: (t) => t.stopPropagation(),
            textOptions: { textOverride: r ?? S.intl.string(S.t.sEAnVH) },
            subscriptionTier: R.pe.TIER_2,
            showGradient: !0,
        });
    },
    O = (t) => {
        let { handlePreviewButtonClick: e, text: r } = t;
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e(t);
            },
            text: r ?? S.intl.string(S.t.FdGl5A),
            fullWidth: !0,
        });
    },
    V = (t) => {
        let { handleUseNow: e, isApplying: r, text: l } = t;
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e();
            },
            loading: r,
            text: l ?? S.intl.string(S.t.MAS7uK),
            fullWidth: !0,
        });
    },
    B = (t) => {
        let { skuId: e, onClick: r, text: l } = t;
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), r(e);
            },
            text: l ?? S.intl.string(S.t.FdGl5A),
            fullWidth: !0,
        });
    },
    w = (t) => {
        let {
                product: e,
                isClaimPremiumProductDisabled: r,
                isClaiming: l,
                analyticsLocations: n,
                text: a,
                onClickAnalytics: u,
            } = t,
            o = async () => {
                u?.("claim premium product button"),
                    await (0, g.iJ)(e.skuId),
                    (0, b.A)({ product: e, analyticsLocations: n, purchaseType: T.gs.PREMIUM_PURCHASE });
            };
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), o();
            },
            disabled: r,
            loading: l,
            loadingStartedLabel: S.intl.string(S.t["TYw+9s"]),
            loadingFinishedLabel: S.intl.string(S.t.Pg1UP5),
            text: a ?? S.intl.string(S.t.zp6caO),
            fullWidth: !0,
        });
    },
    U = (t) => {
        let {
            product: e,
            checkoutEligiblePrices: r,
            analyticsLocations: n,
            selectedVariantIndex: a,
            text: u,
            onClickAnalytics: o,
        } = t;
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            text:
                u ??
                S.intl.format(S.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, i.jsx)(c.A, { className: N.f }),
                }),
            onClick: (t) => {
                t.stopPropagation(),
                    o?.("claim with orbs button"),
                    (0, m.B4)({
                        skuId: (0, y.Y)({ product: e, selectedVariantIndex: a }),
                        onCheckoutSuccess: (t) => {
                            let { entitlements: r } = t;
                            (0, g.gB)({ variantsReturnStyle: l.g.VARIANTS_GROUP }),
                                (0, b.A)({
                                    product: e,
                                    analyticsLocations: n,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: T.gs.ORB,
                                });
                        },
                        analyticsLocations: n,
                    });
            },
            "aria-label": S.intl.formatToPlainString(S.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    H = (t) => {
        let { handlePreviewButtonClick: e, text: r } = t;
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e(t);
            },
            text: r ?? S.intl.string(S.t.GpnHfH),
            fullWidth: !0,
        });
    },
    W = (t) => {
        let {
                product: e,
                cardRef: r,
                selectedVariantIndex: l,
                onClick: s,
                text: o,
                prioritizedCurrency: d,
                onClickAnalytics: c,
            } = t,
            m = (0, n.bG)([x.default], () => x.default.getCurrentUser()),
            g = p.Ay.canUseCollectibles(m),
            { isPurchased: C, isPartiallyOwnedBundle: f } = (0, k.h)(e),
            y = (0, A.G0)(e),
            b = (0, A.tt)(e),
            { isDisabled: T } = (0, j.I)(e.skuId),
            R = (0, A.Zu)({ product: e, isPartiallyOwnedBundle: f, isPurchased: C }),
            S = (0, E.V_)(e),
            N = null != S,
            {
                shouldCheckoutWithOrbs: W,
                hasSufficientOrbs: G,
                checkoutEligiblePrices: z,
            } = (0, _.F)({ product: e, isPremiumUser: g, prioritizedCurrency: d, hasDiscountOffer: N }),
            { analyticsLocations: D } = (0, u.Ay)(a.A.COLLECTIBLES_SHOP_CARD),
            F = (0, v.ql)(e, a.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, c),
            [M, X] = (0, n.yK)([h.A], () => [
                h.A.isClaiming === e.skuId,
                null != h.A.isClaiming && h.A.isClaiming !== e.skuId,
            ]),
            { handleUseNow: Q, isApplying: q } = (0, I.p)({ product: e });
        if (null != s) return (0, i.jsx)(B, { onClick: s, skuId: e.skuId, text: o });
        if (y && !g && !b) return (0, i.jsx)(L, { isClaimPremiumProductDisabled: X, text: o });
        if (!R || T) return (0, i.jsx)(O, { handlePreviewButtonClick: F, text: o });
        if (C) return (0, i.jsx)(V, { handleUseNow: Q, isApplying: q, text: o });
        if (y)
            return (0, i.jsx)(w, {
                product: e,
                isClaimPremiumProductDisabled: X,
                isClaiming: M,
                analyticsLocations: D,
                text: o,
                onClickAnalytics: c,
            });
        if (W && G)
            return (0, i.jsx)(U, {
                product: e,
                checkoutEligiblePrices: z,
                analyticsLocations: D,
                selectedVariantIndex: l,
                text: o,
                onClickAnalytics: c,
            });
        if (W && !G)
            if (z.length > 1) return (0, i.jsx)(H, { handlePreviewButtonClick: F, text: o });
            else return (0, i.jsx)(O, { handlePreviewButtonClick: F, text: o });
        return (0, i.jsx)(P, {
            product: e,
            cardRef: r,
            isPremiumUser: g,
            analyticsLocations: D,
            selectedVariantIndex: l,
            hasDiscountOffer: N,
            discountOfferAmount: S,
            text: o,
        });
    },
    G = (t) => {
        let { skuId: e, cardRef: r, onClick: l, text: n, prioritizedCurrency: s, onClickAnalytics: a } = t,
            u = (0, v.Vm)(e),
            o = (0, C.Q)(u);
        if (null == u) return null;
        let d = (0, f.rb)(u, o);
        return (0, i.jsx)(W, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: l,
            text: n,
            prioritizedCurrency: s,
            onClickAnalytics: a,
        });
    };
