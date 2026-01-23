n.d(t, {
    A: () => W,
}),
    n(896048);
var a = n(627968);
n(64700);
var l = n(635358),
    r = n(417597),
    i = n(397927),
    s = n(793574),
    o = n(688810),
    c = n(44120),
    d = n(465794),
    u = n(773669),
    m = n(106799),
    p = n(652165),
    h = n(287809),
    x = n(927578),
    g = n(979286),
    f = n(4227),
    b = n(298072),
    v = n(993408),
    j = n(450481),
    _ = n(740076),
    y = n(466459),
    A = n(623373),
    C = n(561769),
    S = n(766172),
    O = n(525723),
    E = n(57020),
    T = n(61750),
    N = n(758836),
    w = n(788868),
    I = n(985018),
    k = n(742282);
let P = (e) => {
        let {
                product: t,
                cardRef: n,
                isPremiumUser: r,
                analyticsLocations: s,
                selectedVariantIndex: o,
                hasDiscountOffer: d,
                discountOfferAmount: u,
                text: m,
            } = e,
            p = (0, v.R8)(t, r, !1),
            h = d
                ? I.intl.formatToPlainString(I.t["5U5RB5"], {
                      discountOfferAmount: u,
                  })
                : I.intl.formatToPlainString(I.t["cNSL/j"], {
                      price: p,
                  });
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, c.A)({
                        skuId: (0, S.Y)({
                            product: t,
                            selectedVariantIndex: o,
                        }),
                        returnRef: n,
                        analyticsLocations: s,
                        variantsReturnStyle: l.g.VARIANTS_GROUP,
                    });
            },
            text: null != m ? m : h,
            fullWidth: !0,
        });
    },
    R = (e) => {
        let { isClaimPremiumProductDisabled: t, text: n } = e;
        return (0, a.jsx)(d.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: {
                textOverride: null != n ? n : I.intl.string(I.t.sEAnVH),
            },
            subscriptionTier: w.pe.TIER_2,
            showGradient: !0,
        });
    },
    D = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : I.intl.string(I.t.FdGl5A),
            fullWidth: !0,
        });
    },
    M = (e) => {
        let { handleUseNow: t, isApplying: n, text: l } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: null != l ? l : I.intl.string(I.t.MAS7uK),
            fullWidth: !0,
        });
    },
    L = (e) => {
        let { skuId: t, onClick: n, text: l } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n(t);
            },
            text: null != l ? l : I.intl.string(I.t.FdGl5A),
            fullWidth: !0,
        });
    },
    U = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: l,
                analyticsLocations: r,
                text: s,
                onClickAnalytics: o,
            } = e,
            c = async () => {
                null == o || o("claim premium product button"),
                    await (0, g.iJ)(t.skuId),
                    (0, T.A)({
                        product: t,
                        analyticsLocations: r,
                        purchaseType: N.gs.PREMIUM_PURCHASE,
                    });
            };
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: l,
            loadingStartedLabel: I.intl.string(I.t["TYw+9s"]),
            loadingFinishedLabel: I.intl.string(I.t.Pg1UP5),
            text: null != s ? s : I.intl.string(I.t.zp6caO),
            fullWidth: !0,
        });
    },
    B = (e) => {
        let { product: t, analyticsLocations: n, onClickAnalytics: s } = e,
            o = (0, C.sC)(),
            c = (0, r.bG)([u.default], () => u.default.locale);
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            text: I.intl.format(I.t["4NKuqc"], {
                orbPrice: N.O0,
                orbIconHook: () =>
                    (0, a.jsx)(m.A, {
                        className: k.f,
                    }),
            }),
            onClick: (e) => {
                e.stopPropagation(),
                    null == s || s("rental claim with orbs button"),
                    (0, p.B4)({
                        skuId: (0, S.Y)({
                            product: t,
                        }),
                        onCheckoutSuccess: (e) => {
                            var a, r;
                            let { entitlements: i } = e;
                            (0, g.gB)({
                                variantsReturnStyle: l.g.VARIANTS_GROUP,
                            });
                            let s =
                                (null == (a = i[0]) ? void 0 : a.ends_at) != null
                                    ? new Date(i[0].ends_at).toLocaleDateString(c, {
                                          minute: "numeric",
                                          hour: "numeric",
                                          day: "numeric",
                                          month: "long",
                                          year: "numeric",
                                      })
                                    : void 0;
                            (0, T.A)({
                                product: t,
                                analyticsLocations: n,
                                itemConsumed: null == (r = i[0]) ? void 0 : r.consumed,
                                purchaseType: N.gs.ORB,
                                rentalDuration: o,
                                rentalExpiresAt: s,
                            });
                        },
                        rentalDuration: o,
                    });
            },
            "aria-label": I.intl.formatToPlainString(I.t.DlNs2T, {
                orbPrice: N.O0,
            }),
            fullWidth: !0,
        });
    },
    G = (e) => {
        let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: r,
            selectedVariantIndex: s,
            text: o,
            onClickAnalytics: c,
        } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            text:
                null != o
                    ? o
                    : I.intl.format(I.t.kAgx5L, {
                          orbPrice: n[0].amount,
                          orbIconHook: () =>
                              (0, a.jsx)(m.A, {
                                  className: k.f,
                              }),
                      }),
            onClick: (e) => {
                e.stopPropagation(),
                    null == c || c("claim with orbs button"),
                    (0, p.B4)({
                        skuId: (0, S.Y)({
                            product: t,
                            selectedVariantIndex: s,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: a } = e;
                            (0, g.gB)({
                                variantsReturnStyle: l.g.VARIANTS_GROUP,
                            }),
                                (0, T.A)({
                                    product: t,
                                    analyticsLocations: r,
                                    itemConsumed: null == (n = a[0]) ? void 0 : n.consumed,
                                    purchaseType: N.gs.ORB,
                                });
                        },
                        analyticsLocations: r,
                    });
            },
            "aria-label": I.intl.formatToPlainString(I.t["fNG/05"], {
                orbPrice: n[0].amount,
            }),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, a.jsx)(i.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : I.intl.string(I.t.GpnHfH),
            fullWidth: !0,
        });
    },
    V = (e) => {
        let {
                product: t,
                cardRef: n,
                selectedVariantIndex: l,
                onClick: i,
                text: c,
                prioritizedCurrency: d,
                onClickAnalytics: u,
            } = e,
            m = (0, r.bG)([h.default], () => h.default.getCurrentUser()),
            p = x.Ay.canUseCollectibles(m),
            g = (0, C.sC)(),
            { isPurchased: b, isPartiallyOwnedBundle: A } = (0, y.h)(t),
            S = (0, v.G0)(t),
            T = (0, v.tt)(t),
            { isDisabled: N } = (0, _.I)(t.skuId),
            w = (0, v.Zu)({
                product: t,
                isPartiallyOwnedBundle: A,
                isPurchased: b,
            }),
            I = (0, O.V_)(t),
            k = null != I,
            {
                shouldCheckoutWithOrbs: V,
                hasSufficientOrbs: W,
                checkoutEligiblePrices: H,
            } = (0, E.FI)({
                product: t,
                isPremiumUser: p,
                prioritizedCurrency: d,
                hasDiscountOffer: k,
                isRental: null != g,
            }),
            { analyticsLocations: K } = (0, o.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            z = (0, C.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [q, Q] = (0, r.yK)([f.A], () => [
                f.A.isClaiming === t.skuId,
                null != f.A.isClaiming && f.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: Y, isApplying: J } = (0, j.p)({
                product: t,
            });
        if (null != i)
            return (0, a.jsx)(L, {
                onClick: i,
                skuId: t.skuId,
                text: c,
            });
        if (S && !p && !T)
            return (0, a.jsx)(R, {
                isClaimPremiumProductDisabled: Q,
                text: c,
            });
        if (!w || N)
            return (0, a.jsx)(D, {
                handlePreviewButtonClick: z,
                text: c,
            });
        if (b)
            return (0, a.jsx)(M, {
                handleUseNow: Y,
                isApplying: J,
                text: c,
            });
        if (S)
            return (0, a.jsx)(U, {
                product: t,
                isClaimPremiumProductDisabled: Q,
                isClaiming: q,
                analyticsLocations: K,
                text: c,
                onClickAnalytics: u,
            });
        if (V && W)
            return null != g
                ? (0, a.jsx)(B, {
                      product: t,
                      analyticsLocations: K,
                      onClickAnalytics: u,
                  })
                : (0, a.jsx)(G, {
                      product: t,
                      checkoutEligiblePrices: H,
                      analyticsLocations: K,
                      selectedVariantIndex: l,
                      text: c,
                      onClickAnalytics: u,
                  });
        if (V && !W)
            if (H.length > 1)
                return (0, a.jsx)(F, {
                    handlePreviewButtonClick: z,
                    text: c,
                });
            else
                return (0, a.jsx)(D, {
                    handlePreviewButtonClick: z,
                    text: c,
                });
        return (0, a.jsx)(P, {
            product: t,
            cardRef: n,
            isPremiumUser: p,
            analyticsLocations: K,
            selectedVariantIndex: l,
            hasDiscountOffer: k,
            discountOfferAmount: I,
            text: c,
        });
    },
    W = (e) => {
        let { skuId: t, cardRef: n, onClick: l, text: r, prioritizedCurrency: i, onClickAnalytics: s } = e,
            o = (0, C.Vm)(t),
            c = (0, b.Q)(o);
        if (null == o) return null;
        let d = (0, A.rb)(o, c);
        return (0, a.jsx)(V, {
            product: d,
            cardRef: n,
            selectedVariantIndex: c,
            onClick: l,
            text: r,
            prioritizedCurrency: i,
            onClickAnalytics: s,
        });
    };
