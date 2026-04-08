r.d(t, { A: () => U });
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
    C = r(993408),
    g = r(640634),
    v = r(450481),
    A = r(740076),
    k = r(466459),
    I = r(623373),
    b = r(561769),
    E = r(766172),
    y = r(525723),
    j = r(57020),
    _ = r(61750),
    R = r(758836),
    T = r(788868),
    L = r(985018),
    S = r(37655);
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
            m = (0, C.R8)(t, l, !1),
            h = o
                ? L.intl.formatToPlainString(L.t["5U5RB5"], { discountOfferAmount: c })
                : L.intl.formatToPlainString(L.t["cNSL/j"], { price: m });
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, u.A)({
                        skuId: (0, E.Y)({ product: t, selectedVariantIndex: a }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: d ?? h,
            fullWidth: !0,
        });
    },
    N = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r } = e;
        return (0, n.jsx)(o.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: { textOverride: r ?? L.intl.string(L.t.sEAnVH) },
            subscriptionTier: T.pe.TIER_2,
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
    w = (e) => {
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
                    await (0, p.iJ)(t.skuId),
                    (0, _.A)({ product: t, analyticsLocations: s, purchaseType: R.gs.PREMIUM_PURCHASE });
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
            } = e,
            o = (0, g.l)("collectibles_shop_product_card");
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            text:
                a ??
                L.intl.format(o ? L.t.JC15qj : L.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(c.A, { className: S.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    u?.("claim with orbs button"),
                    (0, d.B4)({
                        skuId: (0, E.Y)({ product: t, selectedVariantIndex: s }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, p.gB)(),
                                (0, _.A)({
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
    H = (e) => {
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
            p = (0, l.bG)([m.default], () => m.default.getCurrentUser()),
            x = h.Ay.canUseCollectibles(p),
            { isPurchased: g, isPartiallyOwnedBundle: I } = (0, k.h)(t),
            E = (0, C.G0)(t),
            _ = (0, C.tt)(t),
            { isDisabled: R } = (0, A.I)(t.skuId),
            T = (0, C.Zu)({ product: t, isPartiallyOwnedBundle: I, isPurchased: g }),
            L = (0, y.V_)(t),
            S = null != L,
            {
                shouldCheckoutWithOrbs: D,
                hasSufficientOrbs: U,
                checkoutEligiblePrices: W,
            } = (0, j.F)({ product: t, isPremiumUser: x, prioritizedCurrency: c, hasDiscountOffer: S }),
            { analyticsLocations: G } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            F = (0, b.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [z, K] = (0, l.yK)([f.A], () => [
                f.A.isClaiming === t.skuId,
                null != f.A.isClaiming && f.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: Q, isApplying: Y } = (0, v.p)({ product: t });
        if (null != u) return (0, n.jsx)(w, { onClick: u, skuId: t.skuId, text: o });
        if (E && !x && !_) return (0, n.jsx)(N, { isClaimPremiumProductDisabled: K, text: o });
        if (!T || R) return (0, n.jsx)(O, { handlePreviewButtonClick: F, text: o });
        if (g) return (0, n.jsx)(V, { handleUseNow: Q, isApplying: Y, text: o });
        if (E)
            return (0, n.jsx)(B, {
                product: t,
                isClaimPremiumProductDisabled: K,
                isClaiming: z,
                analyticsLocations: G,
                text: o,
                onClickAnalytics: d,
            });
        if (D && U)
            return (0, n.jsx)(M, {
                product: t,
                checkoutEligiblePrices: W,
                analyticsLocations: G,
                selectedVariantIndex: i,
                text: o,
                onClickAnalytics: d,
            });
        if (D && !U)
            if (W.length > 1) return (0, n.jsx)(H, { handlePreviewButtonClick: F, text: o });
            else return (0, n.jsx)(O, { handlePreviewButtonClick: F, text: o });
        return (0, n.jsx)(P, {
            product: t,
            cardRef: r,
            isPremiumUser: x,
            analyticsLocations: G,
            selectedVariantIndex: i,
            hasDiscountOffer: S,
            discountOfferAmount: L,
            text: o,
        });
    },
    U = (e) => {
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
