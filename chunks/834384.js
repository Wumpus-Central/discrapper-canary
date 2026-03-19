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
    f = r(740076),
    I = r(466459),
    k = r(623373),
    v = r(561769),
    j = r(766172),
    E = r(525723),
    T = r(57020),
    _ = r(61750),
    y = r(758836),
    R = r(788868),
    b = r(985018),
    L = r(63444);
let O = (t) => {
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
                ? b.intl.formatToPlainString(b.t["5U5RB5"], { discountOfferAmount: d })
                : b.intl.formatToPlainString(b.t["cNSL/j"], { price: A });
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
    N = (t) => {
        let { isClaimPremiumProductDisabled: e, text: r } = t;
        return (0, i.jsx)(o.A, {
            fullWidth: !0,
            disabled: e,
            onClick: (t) => t.stopPropagation(),
            textOptions: { textOverride: r ?? b.intl.string(b.t.sEAnVH) },
            subscriptionTier: R.pe.TIER_2,
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
            text: r ?? b.intl.string(b.t.FdGl5A),
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
            text: n ?? b.intl.string(b.t.MAS7uK),
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
            text: n ?? b.intl.string(b.t.FdGl5A),
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
                    (0, _.A)({ product: e, analyticsLocations: s, purchaseType: y.gs.PREMIUM_PURCHASE });
            };
        return (0, i.jsx)(l.Button, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), o();
            },
            disabled: r,
            loading: n,
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
            selectedVariantIndex: s,
            text: a,
            onClickAnalytics: u,
        } = t;
        return (0, i.jsx)(l.Button, {
            variant: "primary",
            text:
                a ??
                b.intl.format(b.t.lOtBOI, {
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
                                (0, _.A)({
                                    product: e,
                                    analyticsLocations: n,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: y.gs.ORB,
                                });
                        },
                        analyticsLocations: n,
                    });
            },
            "aria-label": b.intl.formatToPlainString(b.t.yi41qQ, { orbPrice: r[0].amount }),
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
            text: r ?? b.intl.string(b.t.GpnHfH),
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
            { isPurchased: k, isPartiallyOwnedBundle: j } = (0, I.h)(e),
            _ = (0, C.G0)(e),
            y = (0, C.tt)(e),
            { isDisabled: R } = (0, f.I)(e.skuId),
            b = (0, C.Zu)({ product: e, isPartiallyOwnedBundle: j, isPurchased: k }),
            L = (0, E.V_)(e),
            D = null != L,
            {
                shouldCheckoutWithOrbs: H,
                hasSufficientOrbs: M,
                checkoutEligiblePrices: W,
            } = (0, T.F)({ product: e, isPremiumUser: g, prioritizedCurrency: d, hasDiscountOffer: D }),
            { analyticsLocations: F } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            G = (0, v.ql)(e, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, c),
            [z, Q] = (0, n.yK)([p.A], () => [
                p.A.isClaiming === e.skuId,
                null != p.A.isClaiming && p.A.isClaiming !== e.skuId,
            ]),
            { handleUseNow: X, isApplying: q } = (0, h.p)({ product: e });
        if (null != u) return (0, i.jsx)(S, { onClick: u, skuId: e.skuId, text: o });
        if (_ && !g && !y) return (0, i.jsx)(N, { isClaimPremiumProductDisabled: Q, text: o });
        if (!b || R) return (0, i.jsx)(P, { handlePreviewButtonClick: G, text: o });
        if (k) return (0, i.jsx)(V, { handleUseNow: X, isApplying: q, text: o });
        if (_)
            return (0, i.jsx)(B, {
                product: e,
                isClaimPremiumProductDisabled: Q,
                isClaiming: z,
                analyticsLocations: F,
                text: o,
                onClickAnalytics: c,
            });
        if (H && M)
            return (0, i.jsx)(U, {
                product: e,
                checkoutEligiblePrices: W,
                analyticsLocations: F,
                selectedVariantIndex: l,
                text: o,
                onClickAnalytics: c,
            });
        if (H && !M)
            if (W.length > 1) return (0, i.jsx)(w, { handlePreviewButtonClick: G, text: o });
            else return (0, i.jsx)(P, { handlePreviewButtonClick: G, text: o });
        return (0, i.jsx)(O, {
            product: e,
            cardRef: r,
            isPremiumUser: g,
            analyticsLocations: F,
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
