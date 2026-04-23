r.d(t, { A: () => w });
var i = r(627968);
r(64700);
var n = r(417597),
    l = r(821609),
    s = r(793574),
    a = r(688810),
    u = r(44120),
    c = r(725807),
    o = r(106799),
    d = r(652165),
    k = r(287809),
    p = r(927578),
    C = r(979286),
    m = r(4227),
    x = r(298072),
    I = r(993408),
    A = r(640634),
    g = r(450481),
    h = r(740076),
    _ = r(466459),
    f = r(623373),
    T = r(561769),
    E = r(766172),
    v = r(525723),
    j = r(57020),
    y = r(61750),
    P = r(758836),
    b = r(788868),
    R = r(985018),
    N = r(40577);
let O = (e) => {
        let {
                product: t,
                cardRef: r,
                isPremiumUser: n,
                analyticsLocations: s,
                selectedVariantIndex: a,
                hasDiscountOffer: c,
                discountOfferAmount: o,
                text: d,
                onTrackClick: k,
            } = e,
            p = (0, I.R8)(t, n, !1),
            C = c
                ? R.intl.formatToPlainString(R.t["5U5RB5"], { discountOfferAmount: o })
                : R.intl.formatToPlainString(R.t["cNSL/j"], { price: p });
        return (0, i.jsx)(l.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    k?.(P.sH.BUY_WITH_FIAT),
                    (0, u.A)({
                        skuId: (0, E.Y)({ product: t, selectedVariantIndex: a }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: d ?? C,
            fullWidth: !0,
        });
    },
    L = (e) => {
        let { isClaimPremiumProductDisabled: t, text: r, onTrackClick: n } = e;
        return (0, i.jsx)(c.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => {
                e.stopPropagation(), n?.(P.sH.UNLOCK_WITH_NITRO);
            },
            textOptions: { textOverride: r ?? R.intl.string(R.t.sEAnVH) },
            subscriptionTier: b.pe.TIER_2,
            showGradient: !0,
        });
    },
    S = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: n } = e;
        return (0, i.jsx)(l.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n?.(P.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? R.intl.string(R.t.FdGl5A),
            fullWidth: !0,
        });
    },
    H = (e) => {
        let { handleUseNow: t, isApplying: r, text: n, onTrackClick: s } = e;
        return (0, i.jsx)(l.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), s?.(P.sH.USE_NOW), t();
            },
            loading: r,
            text: n ?? R.intl.string(R.t.MAS7uK),
            fullWidth: !0,
        });
    },
    V = (e) => {
        let { skuId: t, onClick: r, text: n } = e;
        return (0, i.jsx)(l.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: n ?? R.intl.string(R.t.FdGl5A),
            fullWidth: !0,
        });
    },
    B = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: r,
                isClaiming: n,
                analyticsLocations: s,
                text: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = e,
            o = async () => {
                u?.("claim premium product button"),
                    c?.(P.sH.ADD_TO_COLLECTION),
                    await (0, C.iJ)(t.skuId),
                    (0, y.A)({ product: t, analyticsLocations: s, purchaseType: P.gs.PREMIUM_PURCHASE });
            };
        return (0, i.jsx)(l.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), o();
            },
            disabled: r,
            loading: n,
            loadingStartedLabel: R.intl.string(R.t["TYw+9s"]),
            loadingFinishedLabel: R.intl.string(R.t.Pg1UP5),
            text: a ?? R.intl.string(R.t.zp6caO),
            fullWidth: !0,
        });
    },
    U = (e) => {
        let {
                product: t,
                checkoutEligiblePrices: r,
                analyticsLocations: n,
                selectedVariantIndex: s,
                text: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = e,
            k = (0, A.l)("collectibles_shop_product_card");
        return (0, i.jsx)(l.$, {
            variant: "primary",
            text:
                a ??
                R.intl.format(k ? R.t.JC15qj : R.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, i.jsx)(o.A, { className: N.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    u?.("claim with orbs button"),
                    c?.(P.sH.BUY_WITH_ORBS),
                    (0, d.B4)({
                        skuId: (0, E.Y)({ product: t, selectedVariantIndex: s }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, C.gB)(),
                                (0, y.A)({
                                    product: t,
                                    analyticsLocations: n,
                                    itemConsumed: r[0]?.consumed,
                                    purchaseType: P.gs.ORB,
                                });
                        },
                        analyticsLocations: n,
                    });
            },
            "aria-label": R.intl.formatToPlainString(R.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    D = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: n } = e;
        return (0, i.jsx)(l.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n?.(P.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? R.intl.string(R.t.GpnHfH),
            fullWidth: !0,
        });
    },
    W = (e) => {
        let {
                product: t,
                cardRef: r,
                selectedVariantIndex: l,
                onClick: u,
                text: c,
                prioritizedCurrency: o,
                onClickAnalytics: d,
                onTrackClick: C,
            } = e,
            x = (0, n.bG)([k.default], () => k.default.getCurrentUser()),
            A = p.Ay.canUseCollectibles(x),
            { isPurchased: f, isPartiallyOwnedBundle: E } = (0, _.h)(t),
            y = (0, I.G0)(t),
            P = (0, I.tt)(t),
            { isDisabled: b } = (0, h.I)(t.skuId),
            R = (0, I.Zu)({ product: t, isPartiallyOwnedBundle: E, isPurchased: f }),
            N = (0, v.V_)(t),
            W = null != N,
            {
                shouldCheckoutWithOrbs: w,
                hasSufficientOrbs: M,
                checkoutEligiblePrices: G,
                isOrbExclusive: F,
            } = (0, j.F)({ product: t, isPremiumUser: A, prioritizedCurrency: o, hasDiscountOffer: W }),
            { analyticsLocations: z } = (0, a.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            Q = (0, T.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [Y, q] = (0, n.yK)([m.A], () => [
                m.A.isClaiming === t.skuId,
                null != m.A.isClaiming && m.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: K, isApplying: X } = (0, g.p)({ product: t });
        if (null != u) return (0, i.jsx)(V, { onClick: u, skuId: t.skuId, text: c });
        if (y && !A && !P) return (0, i.jsx)(L, { isClaimPremiumProductDisabled: q, text: c, onTrackClick: C });
        if (!R || b) return (0, i.jsx)(S, { handlePreviewButtonClick: Q, text: c, onTrackClick: C });
        if (f) return (0, i.jsx)(H, { handleUseNow: K, isApplying: X, text: c, onTrackClick: C });
        if (y)
            return (0, i.jsx)(B, {
                product: t,
                isClaimPremiumProductDisabled: q,
                isClaiming: Y,
                analyticsLocations: z,
                text: c,
                onClickAnalytics: d,
                onTrackClick: C,
            });
        if (w && M)
            return (0, i.jsx)(U, {
                product: t,
                checkoutEligiblePrices: G,
                analyticsLocations: z,
                selectedVariantIndex: l,
                text: c,
                onClickAnalytics: d,
                onTrackClick: C,
            });
        if (w && !M)
            if (G.length > 1) return (0, i.jsx)(D, { handlePreviewButtonClick: Q, text: c, onTrackClick: C });
            else return (0, i.jsx)(S, { handlePreviewButtonClick: Q, text: c, onTrackClick: C });
        return F
            ? (0, i.jsx)(S, { handlePreviewButtonClick: Q, text: c, onTrackClick: C })
            : (0, i.jsx)(O, {
                  product: t,
                  cardRef: r,
                  isPremiumUser: A,
                  analyticsLocations: z,
                  selectedVariantIndex: l,
                  hasDiscountOffer: W,
                  discountOfferAmount: N,
                  text: c,
                  onTrackClick: C,
              });
    },
    w = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: n,
                text: l,
                prioritizedCurrency: s,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, T.Vm)(t),
            o = (0, x.Q)(c);
        if (null == c) return null;
        let d = (0, f.rb)(c, o);
        return (0, i.jsx)(W, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: n,
            text: l,
            prioritizedCurrency: s,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
