r.d(t, { A: () => H });
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
    m = r(287809),
    f = r(927578),
    h = r(979286),
    x = r(4227),
    p = r(298072),
    g = r(993408),
    C = r(450481),
    A = r(740076),
    I = r(466459),
    b = r(623373),
    v = r(561769),
    k = r(766172),
    E = r(525723),
    j = r(57020),
    y = r(61750),
    R = r(758836),
    T = r(788868),
    _ = r(985018),
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
            f = o
                ? _.intl.formatToPlainString(_.t["5U5RB5"], { discountOfferAmount: c })
                : _.intl.formatToPlainString(_.t["cNSL/j"], { price: m });
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
            text: d ?? f,
            fullWidth: !0,
        });
    },
    S = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r } = e;
        return (0, n.jsx)(o.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: { textOverride: r ?? _.intl.string(_.t.sEAnVH) },
            subscriptionTier: T.pe.TIER_2,
            showGradient: !0,
        });
    },
    N = (e) => {
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
    O = (e) => {
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
    B = (e) => {
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
                    (0, y.A)({ product: t, analyticsLocations: s, purchaseType: R.gs.PREMIUM_PURCHASE });
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
                                    purchaseType: R.gs.ORB,
                                });
                        },
                        analyticsLocations: l,
                    });
            },
            "aria-label": _.intl.formatToPlainString(_.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    W = (e) => {
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
    w = (e) => {
        let {
                product: t,
                cardRef: r,
                selectedVariantIndex: i,
                onClick: u,
                text: o,
                prioritizedCurrency: c,
                onClickAnalytics: d,
            } = e,
            h = (0, l.bG)([m.default], () => m.default.getCurrentUser()),
            p = f.Ay.canUseCollectibles(h),
            { isPurchased: b, isPartiallyOwnedBundle: k } = (0, I.h)(t),
            y = (0, g.G0)(t),
            R = (0, g.tt)(t),
            { isDisabled: T } = (0, A.I)(t.skuId),
            _ = (0, g.Zu)({ product: t, isPartiallyOwnedBundle: k, isPurchased: b }),
            L = (0, E.V_)(t),
            w = null != L,
            {
                shouldCheckoutWithOrbs: H,
                hasSufficientOrbs: U,
                checkoutEligiblePrices: G,
            } = (0, j.F)({ product: t, isPremiumUser: p, prioritizedCurrency: c, hasDiscountOffer: w }),
            { analyticsLocations: D } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            F = (0, v.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [z, Q] = (0, l.yK)([x.A], () => [
                x.A.isClaiming === t.skuId,
                null != x.A.isClaiming && x.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: X, isApplying: Y } = (0, C.p)({ product: t });
        if (null != u) return (0, n.jsx)(V, { onClick: u, skuId: t.skuId, text: o });
        if (y && !p && !R) return (0, n.jsx)(S, { isClaimPremiumProductDisabled: Q, text: o });
        if (!_ || T) return (0, n.jsx)(N, { handlePreviewButtonClick: F, text: o });
        if (b) return (0, n.jsx)(O, { handleUseNow: X, isApplying: Y, text: o });
        if (y)
            return (0, n.jsx)(B, {
                product: t,
                isClaimPremiumProductDisabled: Q,
                isClaiming: z,
                analyticsLocations: D,
                text: o,
                onClickAnalytics: d,
            });
        if (H && U)
            return (0, n.jsx)(M, {
                product: t,
                checkoutEligiblePrices: G,
                analyticsLocations: D,
                selectedVariantIndex: i,
                text: o,
                onClickAnalytics: d,
            });
        if (H && !U)
            if (G.length > 1) return (0, n.jsx)(W, { handlePreviewButtonClick: F, text: o });
            else return (0, n.jsx)(N, { handlePreviewButtonClick: F, text: o });
        return (0, n.jsx)(P, {
            product: t,
            cardRef: r,
            isPremiumUser: p,
            analyticsLocations: D,
            selectedVariantIndex: i,
            hasDiscountOffer: w,
            discountOfferAmount: L,
            text: o,
        });
    },
    H = (e) => {
        let { skuId: t, cardRef: r, onClick: l, text: i, prioritizedCurrency: s, onClickAnalytics: a } = e,
            u = (0, v.Vm)(t),
            o = (0, p.Q)(u);
        if (null == u) return null;
        let c = (0, b.rb)(u, o);
        return (0, n.jsx)(w, {
            product: c,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: l,
            text: i,
            prioritizedCurrency: s,
            onClickAnalytics: a,
        });
    };
