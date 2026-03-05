r.d(e, { A: () => W });
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
    A = r(287809),
    x = r(927578),
    p = r(979286),
    h = r(4227),
    g = r(298072),
    C = r(993408),
    I = r(450481),
    v = r(740076),
    f = r(466459),
    j = r(623373),
    k = r(561769),
    y = r(766172),
    T = r(525723),
    _ = r(57020),
    E = r(61750),
    R = r(758836),
    N = r(788868),
    b = r(985018),
    O = r(63444);
let L = (t) => {
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
            A = (0, C.R8)(e, n, !1),
            x = d
                ? b.intl.formatToPlainString(b.t["5U5RB5"], { discountOfferAmount: c })
                : b.intl.formatToPlainString(b.t["cNSL/j"], { price: A });
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
            text: m ?? x,
            fullWidth: !0,
        });
    },
    P = (t) => {
        let { isClaimPremiumProductDisabled: e, text: r } = t;
        return (0, i.jsx)(d.A, {
            fullWidth: !0,
            disabled: e,
            onClick: (t) => t.stopPropagation(),
            textOptions: { textOverride: r ?? b.intl.string(b.t.sEAnVH) },
            subscriptionTier: N.pe.TIER_2,
            showGradient: !0,
        });
    },
    S = (t) => {
        let { handlePreviewButtonClick: e, text: r } = t;
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e(t);
            },
            text: r ?? b.intl.string(b.t.FdGl5A),
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
            text: l ?? b.intl.string(b.t.MAS7uK),
            fullWidth: !0,
        });
    },
    w = (t) => {
        let { skuId: e, onClick: r, text: l } = t;
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), r(e);
            },
            text: l ?? b.intl.string(b.t.FdGl5A),
            fullWidth: !0,
        });
    },
    B = (t) => {
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
                    await (0, p.iJ)(e.skuId),
                    (0, E.A)({ product: e, analyticsLocations: n, purchaseType: R.gs.PREMIUM_PURCHASE });
            };
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), o();
            },
            disabled: r,
            loading: l,
            loadingStartedLabel: b.intl.string(b.t["TYw+9s"]),
            loadingFinishedLabel: b.intl.string(b.t.Pg1UP5),
            text: a ?? b.intl.string(b.t.zp6caO),
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
                b.intl.format(b.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, i.jsx)(c.A, { className: O.f }),
                }),
            onClick: (t) => {
                t.stopPropagation(),
                    o?.("claim with orbs button"),
                    (0, m.B4)({
                        skuId: (0, y.Y)({ product: e, selectedVariantIndex: a }),
                        onCheckoutSuccess: (t) => {
                            let { entitlements: r } = t;
                            (0, p.gB)({ variantsReturnStyle: l.g.VARIANTS_GROUP }),
                                (0, E.A)({
                                    product: e,
                                    analyticsLocations: n,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: R.gs.ORB,
                                });
                        },
                        analyticsLocations: n,
                    });
            },
            "aria-label": b.intl.formatToPlainString(b.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    D = (t) => {
        let { handlePreviewButtonClick: e, text: r } = t;
        return (0, i.jsx)(s.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e(t);
            },
            text: r ?? b.intl.string(b.t.GpnHfH),
            fullWidth: !0,
        });
    },
    H = (t) => {
        let {
                product: e,
                cardRef: r,
                selectedVariantIndex: l,
                onClick: s,
                text: o,
                prioritizedCurrency: d,
                onClickAnalytics: c,
            } = t,
            m = (0, n.bG)([A.default], () => A.default.getCurrentUser()),
            p = x.Ay.canUseCollectibles(m),
            { isPurchased: g, isPartiallyOwnedBundle: j } = (0, f.h)(e),
            y = (0, C.G0)(e),
            E = (0, C.tt)(e),
            { isDisabled: R } = (0, v.I)(e.skuId),
            N = (0, C.Zu)({ product: e, isPartiallyOwnedBundle: j, isPurchased: g }),
            b = (0, T.V_)(e),
            O = null != b,
            {
                shouldCheckoutWithOrbs: H,
                hasSufficientOrbs: W,
                checkoutEligiblePrices: F,
            } = (0, _.F)({ product: e, isPremiumUser: p, prioritizedCurrency: d, hasDiscountOffer: O }),
            { analyticsLocations: G } = (0, u.Ay)(a.A.COLLECTIBLES_SHOP_CARD),
            z = (0, k.ql)(e, a.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, c),
            [M, X] = (0, n.yK)([h.A], () => [
                h.A.isClaiming === e.skuId,
                null != h.A.isClaiming && h.A.isClaiming !== e.skuId,
            ]),
            { handleUseNow: Q, isApplying: q } = (0, I.p)({ product: e });
        if (null != s) return (0, i.jsx)(w, { onClick: s, skuId: e.skuId, text: o });
        if (y && !p && !E) return (0, i.jsx)(P, { isClaimPremiumProductDisabled: X, text: o });
        if (!N || R) return (0, i.jsx)(S, { handlePreviewButtonClick: z, text: o });
        if (g) return (0, i.jsx)(V, { handleUseNow: Q, isApplying: q, text: o });
        if (y)
            return (0, i.jsx)(B, {
                product: e,
                isClaimPremiumProductDisabled: X,
                isClaiming: M,
                analyticsLocations: G,
                text: o,
                onClickAnalytics: c,
            });
        if (H && W)
            return (0, i.jsx)(U, {
                product: e,
                checkoutEligiblePrices: F,
                analyticsLocations: G,
                selectedVariantIndex: l,
                text: o,
                onClickAnalytics: c,
            });
        if (H && !W)
            if (F.length > 1) return (0, i.jsx)(D, { handlePreviewButtonClick: z, text: o });
            else return (0, i.jsx)(S, { handlePreviewButtonClick: z, text: o });
        return (0, i.jsx)(L, {
            product: e,
            cardRef: r,
            isPremiumUser: p,
            analyticsLocations: G,
            selectedVariantIndex: l,
            hasDiscountOffer: O,
            discountOfferAmount: b,
            text: o,
        });
    },
    W = (t) => {
        let { skuId: e, cardRef: r, onClick: l, text: n, prioritizedCurrency: s, onClickAnalytics: a } = t,
            u = (0, k.Vm)(e),
            o = (0, g.Q)(u);
        if (null == u) return null;
        let d = (0, j.rb)(u, o);
        return (0, i.jsx)(H, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: l,
            text: n,
            prioritizedCurrency: s,
            onClickAnalytics: a,
        });
    };
