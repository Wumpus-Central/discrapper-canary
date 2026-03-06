r.d(e, { A: () => H });
var i = r(627968);
r(64700);
var l = r(417597),
    n = r(397927),
    s = r(793574),
    a = r(688810),
    u = r(44120),
    o = r(465794),
    d = r(106799),
    c = r(652165),
    m = r(287809),
    x = r(927578),
    A = r(979286),
    p = r(4227),
    h = r(298072),
    g = r(993408),
    C = r(450481),
    I = r(740076),
    v = r(466459),
    f = r(623373),
    j = r(561769),
    k = r(766172),
    y = r(525723),
    E = r(57020),
    T = r(61750),
    _ = r(758836),
    b = r(788868),
    N = r(985018),
    R = r(63444);
let L = (t) => {
        let {
                product: e,
                cardRef: r,
                isPremiumUser: l,
                analyticsLocations: s,
                selectedVariantIndex: a,
                hasDiscountOffer: o,
                discountOfferAmount: d,
                text: c,
            } = t,
            m = (0, g.R8)(e, l, !1),
            x = o
                ? N.intl.formatToPlainString(N.t["5U5RB5"], { discountOfferAmount: d })
                : N.intl.formatToPlainString(N.t["cNSL/j"], { price: m });
        return (0, i.jsx)(n.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(),
                    (0, u.A)({
                        skuId: (0, k.Y)({ product: e, selectedVariantIndex: a }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: c ?? x,
            fullWidth: !0,
        });
    },
    O = (t) => {
        let { isClaimPremiumProductDisabled: e, text: r } = t;
        return (0, i.jsx)(o.A, {
            fullWidth: !0,
            disabled: e,
            onClick: (t) => t.stopPropagation(),
            textOptions: { textOverride: r ?? N.intl.string(N.t.sEAnVH) },
            subscriptionTier: b.pe.TIER_2,
            showGradient: !0,
        });
    },
    P = (t) => {
        let { handlePreviewButtonClick: e, text: r } = t;
        return (0, i.jsx)(n.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e(t);
            },
            text: r ?? N.intl.string(N.t.FdGl5A),
            fullWidth: !0,
        });
    },
    S = (t) => {
        let { handleUseNow: e, isApplying: r, text: l } = t;
        return (0, i.jsx)(n.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e();
            },
            loading: r,
            text: l ?? N.intl.string(N.t.MAS7uK),
            fullWidth: !0,
        });
    },
    V = (t) => {
        let { skuId: e, onClick: r, text: l } = t;
        return (0, i.jsx)(n.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), r(e);
            },
            text: l ?? N.intl.string(N.t.FdGl5A),
            fullWidth: !0,
        });
    },
    w = (t) => {
        let {
                product: e,
                isClaimPremiumProductDisabled: r,
                isClaiming: l,
                analyticsLocations: s,
                text: a,
                onClickAnalytics: u,
            } = t,
            o = async () => {
                u?.("claim premium product button"),
                    await (0, A.iJ)(e.skuId),
                    (0, T.A)({ product: e, analyticsLocations: s, purchaseType: _.gs.PREMIUM_PURCHASE });
            };
        return (0, i.jsx)(n.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), o();
            },
            disabled: r,
            loading: l,
            loadingStartedLabel: N.intl.string(N.t["TYw+9s"]),
            loadingFinishedLabel: N.intl.string(N.t.Pg1UP5),
            text: a ?? N.intl.string(N.t.zp6caO),
            fullWidth: !0,
        });
    },
    B = (t) => {
        let {
            product: e,
            checkoutEligiblePrices: r,
            analyticsLocations: l,
            selectedVariantIndex: s,
            text: a,
            onClickAnalytics: u,
        } = t;
        return (0, i.jsx)(n.Button, {
            variant: "primary",
            text:
                a ??
                N.intl.format(N.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, i.jsx)(d.A, { className: R.f }),
                }),
            onClick: (t) => {
                t.stopPropagation(),
                    u?.("claim with orbs button"),
                    (0, c.B4)({
                        skuId: (0, k.Y)({ product: e, selectedVariantIndex: s }),
                        onCheckoutSuccess: (t) => {
                            let { entitlements: r } = t;
                            (0, A.gB)(),
                                (0, T.A)({
                                    product: e,
                                    analyticsLocations: l,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: _.gs.ORB,
                                });
                        },
                        analyticsLocations: l,
                    });
            },
            "aria-label": N.intl.formatToPlainString(N.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    U = (t) => {
        let { handlePreviewButtonClick: e, text: r } = t;
        return (0, i.jsx)(n.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e(t);
            },
            text: r ?? N.intl.string(N.t.GpnHfH),
            fullWidth: !0,
        });
    },
    D = (t) => {
        let {
                product: e,
                cardRef: r,
                selectedVariantIndex: n,
                onClick: u,
                text: o,
                prioritizedCurrency: d,
                onClickAnalytics: c,
            } = t,
            A = (0, l.bG)([m.default], () => m.default.getCurrentUser()),
            h = x.Ay.canUseCollectibles(A),
            { isPurchased: f, isPartiallyOwnedBundle: k } = (0, v.h)(e),
            T = (0, g.G0)(e),
            _ = (0, g.tt)(e),
            { isDisabled: b } = (0, I.I)(e.skuId),
            N = (0, g.Zu)({ product: e, isPartiallyOwnedBundle: k, isPurchased: f }),
            R = (0, y.V_)(e),
            D = null != R,
            {
                shouldCheckoutWithOrbs: H,
                hasSufficientOrbs: W,
                checkoutEligiblePrices: F,
            } = (0, E.F)({ product: e, isPremiumUser: h, prioritizedCurrency: d, hasDiscountOffer: D }),
            { analyticsLocations: z } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            G = (0, j.ql)(e, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, c),
            [M, X] = (0, l.yK)([p.A], () => [
                p.A.isClaiming === e.skuId,
                null != p.A.isClaiming && p.A.isClaiming !== e.skuId,
            ]),
            { handleUseNow: Q, isApplying: q } = (0, C.p)({ product: e });
        if (null != u) return (0, i.jsx)(V, { onClick: u, skuId: e.skuId, text: o });
        if (T && !h && !_) return (0, i.jsx)(O, { isClaimPremiumProductDisabled: X, text: o });
        if (!N || b) return (0, i.jsx)(P, { handlePreviewButtonClick: G, text: o });
        if (f) return (0, i.jsx)(S, { handleUseNow: Q, isApplying: q, text: o });
        if (T)
            return (0, i.jsx)(w, {
                product: e,
                isClaimPremiumProductDisabled: X,
                isClaiming: M,
                analyticsLocations: z,
                text: o,
                onClickAnalytics: c,
            });
        if (H && W)
            return (0, i.jsx)(B, {
                product: e,
                checkoutEligiblePrices: F,
                analyticsLocations: z,
                selectedVariantIndex: n,
                text: o,
                onClickAnalytics: c,
            });
        if (H && !W)
            if (F.length > 1) return (0, i.jsx)(U, { handlePreviewButtonClick: G, text: o });
            else return (0, i.jsx)(P, { handlePreviewButtonClick: G, text: o });
        return (0, i.jsx)(L, {
            product: e,
            cardRef: r,
            isPremiumUser: h,
            analyticsLocations: z,
            selectedVariantIndex: n,
            hasDiscountOffer: D,
            discountOfferAmount: R,
            text: o,
        });
    },
    H = (t) => {
        let { skuId: e, cardRef: r, onClick: l, text: n, prioritizedCurrency: s, onClickAnalytics: a } = t,
            u = (0, j.Vm)(e),
            o = (0, h.Q)(u);
        if (null == u) return null;
        let d = (0, f.rb)(u, o);
        return (0, i.jsx)(D, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: l,
            text: n,
            prioritizedCurrency: s,
            onClickAnalytics: a,
        });
    };
