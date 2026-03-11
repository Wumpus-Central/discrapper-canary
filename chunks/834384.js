r.d(e, { A: () => H });
var i = r(627968);
r(64700);
var n = r(417597),
    l = r(397927),
    s = r(793574),
    a = r(688810),
    u = r(44120),
    o = r(465794),
    d = r(106799),
    c = r(652165),
    A = r(287809),
    m = r(927578),
    x = r(979286),
    p = r(4227),
    g = r(298072),
    C = r(993408),
    h = r(450481),
    I = r(740076),
    f = r(466459),
    k = r(623373),
    v = r(561769),
    j = r(766172),
    T = r(525723),
    E = r(57020),
    y = r(61750),
    _ = r(758836),
    b = r(788868),
    R = r(985018),
    L = r(63444);
let N = (t) => {
        let {
                product: e,
                cardRef: r,
                isPremiumUser: n,
                analyticsLocations: s,
                selectedVariantIndex: a,
                hasDiscountOffer: o,
                discountOfferAmount: d,
                text: c,
            } = t,
            A = (0, C.R8)(e, n, !1),
            m = o
                ? R.intl.formatToPlainString(R.t["5U5RB5"], { discountOfferAmount: d })
                : R.intl.formatToPlainString(R.t["cNSL/j"], { price: A });
        return (0, i.jsx)(l.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(),
                    (0, u.A)({
                        skuId: (0, j.Y)({ product: e, selectedVariantIndex: a }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: c ?? m,
            fullWidth: !0,
        });
    },
    O = (t) => {
        let { isClaimPremiumProductDisabled: e, text: r } = t;
        return (0, i.jsx)(o.A, {
            fullWidth: !0,
            disabled: e,
            onClick: (t) => t.stopPropagation(),
            textOptions: { textOverride: r ?? R.intl.string(R.t.sEAnVH) },
            subscriptionTier: b.pe.TIER_2,
            showGradient: !0,
        });
    },
    P = (t) => {
        let { handlePreviewButtonClick: e, text: r } = t;
        return (0, i.jsx)(l.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e(t);
            },
            text: r ?? R.intl.string(R.t.FdGl5A),
            fullWidth: !0,
        });
    },
    V = (t) => {
        let { handleUseNow: e, isApplying: r, text: n } = t;
        return (0, i.jsx)(l.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e();
            },
            loading: r,
            text: n ?? R.intl.string(R.t.MAS7uK),
            fullWidth: !0,
        });
    },
    S = (t) => {
        let { skuId: e, onClick: r, text: n } = t;
        return (0, i.jsx)(l.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), r(e);
            },
            text: n ?? R.intl.string(R.t.FdGl5A),
            fullWidth: !0,
        });
    },
    B = (t) => {
        let {
                product: e,
                isClaimPremiumProductDisabled: r,
                isClaiming: n,
                analyticsLocations: s,
                text: a,
                onClickAnalytics: u,
            } = t,
            o = async () => {
                u?.("claim premium product button"),
                    await (0, x.iJ)(e.skuId),
                    (0, y.A)({ product: e, analyticsLocations: s, purchaseType: _.gs.PREMIUM_PURCHASE });
            };
        return (0, i.jsx)(l.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), o();
            },
            disabled: r,
            loading: n,
            loadingStartedLabel: R.intl.string(R.t["TYw+9s"]),
            loadingFinishedLabel: R.intl.string(R.t.Pg1UP5),
            text: a ?? R.intl.string(R.t.zp6caO),
            fullWidth: !0,
        });
    },
    U = (t) => {
        let {
            product: e,
            checkoutEligiblePrices: r,
            analyticsLocations: n,
            selectedVariantIndex: s,
            text: a,
            onClickAnalytics: u,
        } = t;
        return (0, i.jsx)(l.Button, {
            variant: "primary",
            text:
                a ??
                R.intl.format(R.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, i.jsx)(d.A, { className: L.f }),
                }),
            onClick: (t) => {
                t.stopPropagation(),
                    u?.("claim with orbs button"),
                    (0, c.B4)({
                        skuId: (0, j.Y)({ product: e, selectedVariantIndex: s }),
                        onCheckoutSuccess: (t) => {
                            let { entitlements: r } = t;
                            (0, x.gB)(),
                                (0, y.A)({
                                    product: e,
                                    analyticsLocations: n,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: _.gs.ORB,
                                });
                        },
                        analyticsLocations: n,
                    });
            },
            "aria-label": R.intl.formatToPlainString(R.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    w = (t) => {
        let { handlePreviewButtonClick: e, text: r } = t;
        return (0, i.jsx)(l.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), e(t);
            },
            text: r ?? R.intl.string(R.t.GpnHfH),
            fullWidth: !0,
        });
    },
    D = (t) => {
        let {
                product: e,
                cardRef: r,
                selectedVariantIndex: l,
                onClick: u,
                text: o,
                prioritizedCurrency: d,
                onClickAnalytics: c,
            } = t,
            x = (0, n.bG)([A.default], () => A.default.getCurrentUser()),
            g = m.Ay.canUseCollectibles(x),
            { isPurchased: k, isPartiallyOwnedBundle: j } = (0, f.h)(e),
            y = (0, C.G0)(e),
            _ = (0, C.tt)(e),
            { isDisabled: b } = (0, I.I)(e.skuId),
            R = (0, C.Zu)({ product: e, isPartiallyOwnedBundle: j, isPurchased: k }),
            L = (0, T.V_)(e),
            D = null != L,
            {
                shouldCheckoutWithOrbs: H,
                hasSufficientOrbs: W,
                checkoutEligiblePrices: F,
            } = (0, E.F)({ product: e, isPremiumUser: g, prioritizedCurrency: d, hasDiscountOffer: D }),
            { analyticsLocations: G } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            M = (0, v.ql)(e, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, c),
            [z, Q] = (0, n.yK)([p.A], () => [
                p.A.isClaiming === e.skuId,
                null != p.A.isClaiming && p.A.isClaiming !== e.skuId,
            ]),
            { handleUseNow: X, isApplying: q } = (0, h.p)({ product: e });
        if (null != u) return (0, i.jsx)(S, { onClick: u, skuId: e.skuId, text: o });
        if (y && !g && !_) return (0, i.jsx)(O, { isClaimPremiumProductDisabled: Q, text: o });
        if (!R || b) return (0, i.jsx)(P, { handlePreviewButtonClick: M, text: o });
        if (k) return (0, i.jsx)(V, { handleUseNow: X, isApplying: q, text: o });
        if (y)
            return (0, i.jsx)(B, {
                product: e,
                isClaimPremiumProductDisabled: Q,
                isClaiming: z,
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
            if (F.length > 1) return (0, i.jsx)(w, { handlePreviewButtonClick: M, text: o });
            else return (0, i.jsx)(P, { handlePreviewButtonClick: M, text: o });
        return (0, i.jsx)(N, {
            product: e,
            cardRef: r,
            isPremiumUser: g,
            analyticsLocations: G,
            selectedVariantIndex: l,
            hasDiscountOffer: D,
            discountOfferAmount: L,
            text: o,
        });
    },
    H = (t) => {
        let { skuId: e, cardRef: r, onClick: n, text: l, prioritizedCurrency: s, onClickAnalytics: a } = t,
            u = (0, v.Vm)(e),
            o = (0, g.Q)(u);
        if (null == u) return null;
        let d = (0, k.rb)(u, o);
        return (0, i.jsx)(D, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: n,
            text: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
        });
    };
