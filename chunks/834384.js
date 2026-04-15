r.d(t, { A: () => M });
var n = r(627968);
r(64700);
var l = r(417597),
    i = r(397927),
    s = r(793574),
    a = r(688810),
    o = r(44120),
    u = r(725807),
    c = r(106799),
    d = r(652165),
    p = r(287809),
    k = r(927578),
    C = r(979286),
    m = r(4227),
    x = r(298072),
    g = r(993408),
    h = r(640634),
    A = r(450481),
    I = r(740076),
    v = r(466459),
    _ = r(623373),
    T = r(561769),
    f = r(766172),
    E = r(525723),
    y = r(57020),
    j = r(61750),
    b = r(758836),
    R = r(788868),
    P = r(985018),
    S = r(270001);
let O = (e) => {
        let {
                product: t,
                cardRef: r,
                isPremiumUser: l,
                analyticsLocations: s,
                selectedVariantIndex: a,
                hasDiscountOffer: u,
                discountOfferAmount: c,
                text: d,
                onTrackClick: p,
            } = e,
            k = (0, g.R8)(t, l, !1),
            C = u
                ? P.intl.formatToPlainString(P.t["5U5RB5"], { discountOfferAmount: c })
                : P.intl.formatToPlainString(P.t["cNSL/j"], { price: k });
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    p?.(b.sH.BUY_WITH_FIAT),
                    (0, o.A)({
                        skuId: (0, f.Y)({ product: t, selectedVariantIndex: a }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: d ?? C,
            fullWidth: !0,
        });
    },
    N = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r, onTrackClick: l } = e;
        return (0, n.jsx)(u.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => {
                e.stopPropagation(), l?.(b.sH.UNLOCK_WITH_NITRO);
            },
            textOptions: { textOverride: r ?? P.intl.string(P.t.sEAnVH) },
            subscriptionTier: R.pe.TIER_2,
            showGradient: !0,
        });
    },
    L = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: l } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), l?.(b.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? P.intl.string(P.t.FdGl5A),
            fullWidth: !0,
        });
    },
    V = (e) => {
        let { handleUseNow: t, isApplying: r, text: l, onTrackClick: s } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), s?.(b.sH.USE_NOW), t();
            },
            loading: r,
            text: l ?? P.intl.string(P.t.MAS7uK),
            fullWidth: !0,
        });
    },
    B = (e) => {
        let { skuId: t, onClick: r, text: l } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: l ?? P.intl.string(P.t.FdGl5A),
            fullWidth: !0,
        });
    },
    H = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: r,
                isClaiming: l,
                analyticsLocations: s,
                text: a,
                onClickAnalytics: o,
                onTrackClick: u,
            } = e,
            c = async () => {
                o?.("claim premium product button"),
                    u?.(b.sH.ADD_TO_COLLECTION),
                    await (0, C.iJ)(t.skuId),
                    (0, j.A)({ product: t, analyticsLocations: s, purchaseType: b.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: r,
            loading: l,
            loadingStartedLabel: P.intl.string(P.t["TYw+9s"]),
            loadingFinishedLabel: P.intl.string(P.t.Pg1UP5),
            text: a ?? P.intl.string(P.t.zp6caO),
            fullWidth: !0,
        });
    },
    w = (e) => {
        let {
                product: t,
                checkoutEligiblePrices: r,
                analyticsLocations: l,
                selectedVariantIndex: s,
                text: a,
                onClickAnalytics: o,
                onTrackClick: u,
            } = e,
            p = (0, h.l)("collectibles_shop_product_card");
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            text:
                a ??
                P.intl.format(p ? P.t.JC15qj : P.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(c.A, { className: S.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    o?.("claim with orbs button"),
                    u?.(b.sH.BUY_WITH_ORBS),
                    (0, d.B4)({
                        skuId: (0, f.Y)({ product: t, selectedVariantIndex: s }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, C.gB)(),
                                (0, j.A)({
                                    product: t,
                                    analyticsLocations: l,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: b.gs.ORB,
                                });
                        },
                        analyticsLocations: l,
                    });
            },
            "aria-label": P.intl.formatToPlainString(P.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    U = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: l } = e;
        return (0, n.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), l?.(b.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? P.intl.string(P.t.GpnHfH),
            fullWidth: !0,
        });
    },
    D = (e) => {
        let {
                product: t,
                cardRef: r,
                selectedVariantIndex: i,
                onClick: o,
                text: u,
                prioritizedCurrency: c,
                onClickAnalytics: d,
                onTrackClick: C,
            } = e,
            x = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
            h = k.Ay.canUseCollectibles(x),
            { isPurchased: _, isPartiallyOwnedBundle: f } = (0, v.h)(t),
            j = (0, g.G0)(t),
            b = (0, g.tt)(t),
            { isDisabled: R } = (0, I.I)(t.skuId),
            P = (0, g.Zu)({ product: t, isPartiallyOwnedBundle: f, isPurchased: _ }),
            S = (0, E.V_)(t),
            D = null != S,
            {
                shouldCheckoutWithOrbs: M,
                hasSufficientOrbs: W,
                checkoutEligiblePrices: G,
                isOrbExclusive: F,
            } = (0, y.F)({ product: t, isPremiumUser: h, prioritizedCurrency: c, hasDiscountOffer: D }),
            { analyticsLocations: z } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            K = (0, T.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [Y, Q] = (0, l.yK)([m.A], () => [
                m.A.isClaiming === t.skuId,
                null != m.A.isClaiming && m.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: q, isApplying: X } = (0, A.p)({ product: t });
        if (null != o) return (0, n.jsx)(B, { onClick: o, skuId: t.skuId, text: u });
        if (j && !h && !b) return (0, n.jsx)(N, { isClaimPremiumProductDisabled: Q, text: u, onTrackClick: C });
        if (!P || R) return (0, n.jsx)(L, { handlePreviewButtonClick: K, text: u, onTrackClick: C });
        if (_) return (0, n.jsx)(V, { handleUseNow: q, isApplying: X, text: u, onTrackClick: C });
        if (j)
            return (0, n.jsx)(H, {
                product: t,
                isClaimPremiumProductDisabled: Q,
                isClaiming: Y,
                analyticsLocations: z,
                text: u,
                onClickAnalytics: d,
                onTrackClick: C,
            });
        if (M && W)
            return (0, n.jsx)(w, {
                product: t,
                checkoutEligiblePrices: G,
                analyticsLocations: z,
                selectedVariantIndex: i,
                text: u,
                onClickAnalytics: d,
                onTrackClick: C,
            });
        if (M && !W)
            if (G.length > 1) return (0, n.jsx)(U, { handlePreviewButtonClick: K, text: u, onTrackClick: C });
            else return (0, n.jsx)(L, { handlePreviewButtonClick: K, text: u, onTrackClick: C });
        return F
            ? (0, n.jsx)(L, { handlePreviewButtonClick: K, text: u, onTrackClick: C })
            : (0, n.jsx)(O, {
                  product: t,
                  cardRef: r,
                  isPremiumUser: h,
                  analyticsLocations: z,
                  selectedVariantIndex: i,
                  hasDiscountOffer: D,
                  discountOfferAmount: S,
                  text: u,
                  onTrackClick: C,
              });
    },
    M = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: l,
                text: i,
                prioritizedCurrency: s,
                onClickAnalytics: a,
                onTrackClick: o,
            } = e,
            u = (0, T.Vm)(t),
            c = (0, x.Q)(u);
        if (null == u) return null;
        let d = (0, _.rb)(u, c);
        return (0, n.jsx)(D, {
            product: d,
            cardRef: r,
            selectedVariantIndex: c,
            onClick: l,
            text: i,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: o,
        });
    };
