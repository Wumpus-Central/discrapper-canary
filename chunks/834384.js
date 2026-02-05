"use strict";
n.d(t, { A: () => H });
var r = n(627968);
n(64700);
var i = n(635358),
    a = n(417597),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    u = n(44120),
    c = n(465794),
    d = n(773669),
    _ = n(106799),
    f = n(652165),
    p = n(287809),
    h = n(927578),
    m = n(979286),
    g = n(4227),
    E = n(298072),
    A = n(993408),
    I = n(450481),
    T = n(740076),
    y = n(466459),
    S = n(623373),
    v = n(561769),
    C = n(766172),
    b = n(525723),
    N = n(57020),
    R = n(61750),
    O = n(758836),
    D = n(788868),
    L = n(985018),
    w = n(742282);
let x = (e) => {
        let {
                product: t,
                cardRef: n,
                isPremiumUser: a,
                analyticsLocations: o,
                selectedVariantIndex: l,
                hasDiscountOffer: c,
                discountOfferAmount: d,
                text: _,
            } = e,
            f = (0, A.R8)(t, a, !1),
            p = () => {
                (0, u.A)({
                    skuId: (0, C.Y)({ product: t, selectedVariantIndex: l }),
                    returnRef: n,
                    analyticsLocations: o,
                    variantsReturnStyle: i.g.VARIANTS_GROUP,
                });
            },
            h = c
                ? L.intl.formatToPlainString(L.t["5U5RB5"], { discountOfferAmount: d })
                : L.intl.formatToPlainString(L.t["cNSL/j"], { price: f });
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), p();
            },
            text: _ ?? h,
            fullWidth: !0,
        });
    },
    P = (e) => {
        let { isClaimPremiumProductDisabled: t, text: n } = e;
        return (0, r.jsx)(c.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: { textOverride: n ?? L.intl.string(L.t.sEAnVH) },
            subscriptionTier: D.pe.TIER_2,
            showGradient: !0,
        });
    },
    M = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: n ?? L.intl.string(L.t.FdGl5A),
            fullWidth: !0,
        });
    },
    k = (e) => {
        let { handleUseNow: t, isApplying: n, text: i } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: i ?? L.intl.string(L.t.MAS7uK),
            fullWidth: !0,
        });
    },
    U = (e) => {
        let { skuId: t, onClick: n, text: i } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n(t);
            },
            text: i ?? L.intl.string(L.t.FdGl5A),
            fullWidth: !0,
        });
    },
    G = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: i,
                analyticsLocations: a,
                text: o,
                onClickAnalytics: l,
            } = e,
            u = async () => {
                l?.("claim premium product button"),
                    await (0, m.iJ)(t.skuId),
                    (0, R.A)({ product: t, analyticsLocations: a, purchaseType: O.gs.PREMIUM_PURCHASE });
            };
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), u();
            },
            disabled: n,
            loading: i,
            loadingStartedLabel: L.intl.string(L.t["TYw+9s"]),
            loadingFinishedLabel: L.intl.string(L.t.Pg1UP5),
            text: o ?? L.intl.string(L.t.zp6caO),
            fullWidth: !0,
        });
    },
    V = (e) => {
        let { product: t, analyticsLocations: n, onClickAnalytics: o } = e,
            l = (0, v.sC)(),
            u = (0, a.bG)([d.default], () => d.default.locale),
            c = () => {
                o?.("rental claim with orbs button"),
                    (0, f.B4)({
                        skuId: (0, C.Y)({ product: t }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: r } = e;
                            (0, m.gB)({ variantsReturnStyle: i.g.VARIANTS_GROUP });
                            let a =
                                r[0]?.ends_at != null
                                    ? new Date(r[0].ends_at).toLocaleDateString(u, {
                                          minute: "numeric",
                                          hour: "numeric",
                                          day: "numeric",
                                          month: "long",
                                          year: "numeric",
                                      })
                                    : void 0;
                            (0, R.A)({
                                product: t,
                                analyticsLocations: n,
                                itemConsumed: r[0]?.consumed,
                                purchaseType: O.gs.ORB,
                                rentalDuration: l,
                                rentalExpiresAt: a,
                            });
                        },
                        rentalDuration: l,
                    });
            };
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            text: L.intl.format(L.t["4NKuqc"], {
                orbPrice: O.O0,
                orbIconHook: () => (0, r.jsx)(_.A, { className: w.f }),
            }),
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            "aria-label": L.intl.formatToPlainString(L.t.DlNs2T, { orbPrice: O.O0 }),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let {
                product: t,
                checkoutEligiblePrices: n,
                analyticsLocations: a,
                selectedVariantIndex: o,
                text: l,
                onClickAnalytics: u,
            } = e,
            c = () => {
                u?.("claim with orbs button"),
                    (0, f.B4)({
                        skuId: (0, C.Y)({ product: t, selectedVariantIndex: o }),
                        onCheckoutSuccess: (e) => {
                            let { entitlements: n } = e;
                            (0, m.gB)({ variantsReturnStyle: i.g.VARIANTS_GROUP }),
                                (0, R.A)({
                                    product: t,
                                    analyticsLocations: a,
                                    itemConsumed: n[0]?.consumed,
                                    purchaseType: O.gs.ORB,
                                });
                        },
                        analyticsLocations: a,
                    });
            };
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            text:
                l ??
                L.intl.format(L.t.lOtBOI, {
                    orbPrice: n[0].amount,
                    orbIconHook: () => (0, r.jsx)(_.A, { className: w.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            "aria-label": L.intl.formatToPlainString(L.t.yi41qQ, { orbPrice: n[0].amount }),
            fullWidth: !0,
        });
    },
    B = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: n ?? L.intl.string(L.t.GpnHfH),
            fullWidth: !0,
        });
    },
    j = (e) => {
        let {
                product: t,
                cardRef: n,
                selectedVariantIndex: i,
                onClick: s,
                text: u,
                prioritizedCurrency: c,
                onClickAnalytics: d,
            } = e,
            _ = (0, a.bG)([p.default], () => p.default.getCurrentUser()),
            f = h.Ay.canUseCollectibles(_),
            m = (0, v.sC)(),
            { isPurchased: E, isPartiallyOwnedBundle: S } = (0, y.h)(t),
            C = (0, A.G0)(t),
            R = (0, A.tt)(t),
            { isDisabled: O } = (0, T.I)(t.skuId),
            D = (0, A.Zu)({ product: t, isPartiallyOwnedBundle: S, isPurchased: E }),
            L = (0, b.V_)(t),
            w = null != L,
            {
                shouldCheckoutWithOrbs: j,
                hasSufficientOrbs: H,
                checkoutEligiblePrices: Y,
            } = (0, N.FI)({
                product: t,
                isPremiumUser: f,
                prioritizedCurrency: c,
                hasDiscountOffer: w,
                isRental: null != m,
            }),
            { analyticsLocations: W } = (0, l.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            K = (0, v.ql)(t, o.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [z, $] = (0, a.yK)([g.A], () => [
                g.A.isClaiming === t.skuId,
                null != g.A.isClaiming && g.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: q, isApplying: Z } = (0, I.p)({ product: t });
        if (null != s) return (0, r.jsx)(U, { onClick: s, skuId: t.skuId, text: u });
        if (C && !f && !R) return (0, r.jsx)(P, { isClaimPremiumProductDisabled: $, text: u });
        if (!D || O) return (0, r.jsx)(M, { handlePreviewButtonClick: K, text: u });
        if (E) return (0, r.jsx)(k, { handleUseNow: q, isApplying: Z, text: u });
        if (C)
            return (0, r.jsx)(G, {
                product: t,
                isClaimPremiumProductDisabled: $,
                isClaiming: z,
                analyticsLocations: W,
                text: u,
                onClickAnalytics: d,
            });
        if (j && H)
            return null != m
                ? (0, r.jsx)(V, { product: t, analyticsLocations: W, onClickAnalytics: d })
                : (0, r.jsx)(F, {
                      product: t,
                      checkoutEligiblePrices: Y,
                      analyticsLocations: W,
                      selectedVariantIndex: i,
                      text: u,
                      onClickAnalytics: d,
                  });
        if (j && !H)
            if (Y.length > 1) return (0, r.jsx)(B, { handlePreviewButtonClick: K, text: u });
            else return (0, r.jsx)(M, { handlePreviewButtonClick: K, text: u });
        return (0, r.jsx)(x, {
            product: t,
            cardRef: n,
            isPremiumUser: f,
            analyticsLocations: W,
            selectedVariantIndex: i,
            hasDiscountOffer: w,
            discountOfferAmount: L,
            text: u,
        });
    },
    H = (e) => {
        let { skuId: t, cardRef: n, onClick: i, text: a, prioritizedCurrency: s, onClickAnalytics: o } = e,
            l = (0, v.Vm)(t),
            u = (0, E.Q)(l);
        if (null == l) return null;
        let c = (0, S.rb)(l, u);
        return (0, r.jsx)(j, {
            product: c,
            cardRef: n,
            selectedVariantIndex: u,
            onClick: i,
            text: a,
            prioritizedCurrency: s,
            onClickAnalytics: o,
        });
    };
