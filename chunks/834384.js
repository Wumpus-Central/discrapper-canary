n.d(t, {
    A: () => H,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(635358),
    a = n(417597),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    c = n(44120),
    u = n(465794),
    d = n(773669),
    f = n(106799),
    p = n(652165),
    _ = n(287809),
    h = n(927578),
    m = n(979286),
    g = n(4227),
    E = n(298072),
    y = n(993408),
    b = n(450481),
    O = n(740076),
    v = n(466459),
    A = n(623373),
    I = n(561769),
    S = n(766172),
    T = n(525723),
    C = n(57020),
    N = n(61750),
    w = n(758836),
    R = n(788868),
    P = n(985018),
    D = n(742282);
let x = (e) => {
        let {
                product: t,
                cardRef: n,
                isPremiumUser: a,
                analyticsLocations: o,
                selectedVariantIndex: l,
                hasDiscountOffer: u,
                discountOfferAmount: d,
                text: f,
            } = e,
            p = (0, y.R8)(t, a, !1),
            _ = () => {
                (0, c.A)({
                    skuId: (0, S.Y)({
                        product: t,
                        selectedVariantIndex: l,
                    }),
                    returnRef: n,
                    analyticsLocations: o,
                    variantsReturnStyle: i.g.VARIANTS_GROUP,
                });
            },
            h = u
                ? P.intl.formatToPlainString(P.t["5U5RB5"], {
                      discountOfferAmount: d,
                  })
                : P.intl.formatToPlainString(P.t["cNSL/j"], {
                      price: p,
                  });
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), _();
            },
            text: null != f ? f : h,
            fullWidth: !0,
        });
    },
    L = (e) => {
        let { isClaimPremiumProductDisabled: t, text: n } = e;
        return (0, r.jsx)(u.A, {
            fullWidth: !0,
            disabled: t,
            onClick: (e) => e.stopPropagation(),
            textOptions: {
                textOverride: null != n ? n : P.intl.string(P.t.sEAnVH),
            },
            subscriptionTier: R.pe.TIER_2,
            showGradient: !0,
        });
    },
    j = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : P.intl.string(P.t.FdGl5A),
            fullWidth: !0,
        });
    },
    M = (e) => {
        let { handleUseNow: t, isApplying: n, text: i } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: null != i ? i : P.intl.string(P.t.MAS7uK),
            fullWidth: !0,
        });
    },
    k = (e) => {
        let { skuId: t, onClick: n, text: i } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n(t);
            },
            text: null != i ? i : P.intl.string(P.t.FdGl5A),
            fullWidth: !0,
        });
    },
    U = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: i,
                analyticsLocations: a,
                text: o,
                onClickAnalytics: l,
            } = e,
            c = async () => {
                null == l || l("claim premium product button"),
                    await (0, m.iJ)(t.skuId),
                    (0, N.A)({
                        product: t,
                        analyticsLocations: a,
                        purchaseType: w.gs.PREMIUM_PURCHASE,
                    });
            };
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: i,
            loadingStartedLabel: P.intl.string(P.t["TYw+9s"]),
            loadingFinishedLabel: P.intl.string(P.t.Pg1UP5),
            text: null != o ? o : P.intl.string(P.t.zp6caO),
            fullWidth: !0,
        });
    },
    G = (e) => {
        let { product: t, analyticsLocations: n, onClickAnalytics: o } = e,
            l = (0, I.sC)(),
            c = (0, a.bG)([d.default], () => d.default.locale),
            u = () => {
                null == o || o("rental claim with orbs button"),
                    (0, p.B4)({
                        skuId: (0, S.Y)({
                            product: t,
                        }),
                        onCheckoutSuccess: (e) => {
                            var r, a;
                            let { entitlements: s } = e;
                            (0, m.gB)({
                                variantsReturnStyle: i.g.VARIANTS_GROUP,
                            });
                            let o =
                                (null == (r = s[0]) ? void 0 : r.ends_at) != null
                                    ? new Date(s[0].ends_at).toLocaleDateString(c, {
                                          minute: "numeric",
                                          hour: "numeric",
                                          day: "numeric",
                                          month: "long",
                                          year: "numeric",
                                      })
                                    : void 0;
                            (0, N.A)({
                                product: t,
                                analyticsLocations: n,
                                itemConsumed: null == (a = s[0]) ? void 0 : a.consumed,
                                purchaseType: w.gs.ORB,
                                rentalDuration: l,
                                rentalExpiresAt: o,
                            });
                        },
                        rentalDuration: l,
                    });
            };
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            text: P.intl.format(P.t["4NKuqc"], {
                orbPrice: w.O0,
                orbIconHook: () =>
                    (0, r.jsx)(f.A, {
                        className: D.f,
                    }),
            }),
            onClick: (e) => {
                e.stopPropagation(), u();
            },
            "aria-label": P.intl.formatToPlainString(P.t.DlNs2T, {
                orbPrice: w.O0,
            }),
            fullWidth: !0,
        });
    },
    V = (e) => {
        let {
                product: t,
                checkoutEligiblePrices: n,
                analyticsLocations: a,
                selectedVariantIndex: o,
                text: l,
                onClickAnalytics: c,
            } = e,
            u = () => {
                null == c || c("claim with orbs button"),
                    (0, p.B4)({
                        skuId: (0, S.Y)({
                            product: t,
                            selectedVariantIndex: o,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: r } = e;
                            (0, m.gB)({
                                variantsReturnStyle: i.g.VARIANTS_GROUP,
                            }),
                                (0, N.A)({
                                    product: t,
                                    analyticsLocations: a,
                                    itemConsumed: null == (n = r[0]) ? void 0 : n.consumed,
                                    purchaseType: w.gs.ORB,
                                });
                        },
                        analyticsLocations: a,
                    });
            };
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            text:
                null != l
                    ? l
                    : P.intl.format(P.t.kAgx5L, {
                          orbPrice: n[0].amount,
                          orbIconHook: () =>
                              (0, r.jsx)(f.A, {
                                  className: D.f,
                              }),
                      }),
            onClick: (e) => {
                e.stopPropagation(), u();
            },
            "aria-label": P.intl.formatToPlainString(P.t["fNG/05"], {
                orbPrice: n[0].amount,
            }),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, r.jsx)(s.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : P.intl.string(P.t.GpnHfH),
            fullWidth: !0,
        });
    },
    B = (e) => {
        let {
                product: t,
                cardRef: n,
                selectedVariantIndex: i,
                onClick: s,
                text: c,
                prioritizedCurrency: u,
                onClickAnalytics: d,
            } = e,
            f = (0, a.bG)([_.default], () => _.default.getCurrentUser()),
            p = h.Ay.canUseCollectibles(f),
            m = (0, I.sC)(),
            { isPurchased: E, isPartiallyOwnedBundle: A } = (0, v.h)(t),
            S = (0, y.G0)(t),
            N = (0, y.tt)(t),
            { isDisabled: w } = (0, O.I)(t.skuId),
            R = (0, y.Zu)({
                product: t,
                isPartiallyOwnedBundle: A,
                isPurchased: E,
            }),
            P = (0, T.V_)(t),
            D = null != P,
            {
                shouldCheckoutWithOrbs: B,
                hasSufficientOrbs: H,
                checkoutEligiblePrices: Y,
            } = (0, C.FI)({
                product: t,
                isPremiumUser: p,
                prioritizedCurrency: u,
                hasDiscountOffer: D,
                isRental: null != m,
            }),
            { analyticsLocations: W } = (0, l.Ay)(o.A.COLLECTIBLES_SHOP_CARD),
            K = (0, I.ql)(t, o.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, d),
            [z, q] = (0, a.yK)([g.A], () => [
                g.A.isClaiming === t.skuId,
                null != g.A.isClaiming && g.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: Z, isApplying: X } = (0, b.p)({
                product: t,
            });
        if (null != s)
            return (0, r.jsx)(k, {
                onClick: s,
                skuId: t.skuId,
                text: c,
            });
        if (S && !p && !N)
            return (0, r.jsx)(L, {
                isClaimPremiumProductDisabled: q,
                text: c,
            });
        if (!R || w)
            return (0, r.jsx)(j, {
                handlePreviewButtonClick: K,
                text: c,
            });
        if (E)
            return (0, r.jsx)(M, {
                handleUseNow: Z,
                isApplying: X,
                text: c,
            });
        if (S)
            return (0, r.jsx)(U, {
                product: t,
                isClaimPremiumProductDisabled: q,
                isClaiming: z,
                analyticsLocations: W,
                text: c,
                onClickAnalytics: d,
            });
        if (B && H)
            return null != m
                ? (0, r.jsx)(G, {
                      product: t,
                      analyticsLocations: W,
                      onClickAnalytics: d,
                  })
                : (0, r.jsx)(V, {
                      product: t,
                      checkoutEligiblePrices: Y,
                      analyticsLocations: W,
                      selectedVariantIndex: i,
                      text: c,
                      onClickAnalytics: d,
                  });
        if (B && !H)
            if (Y.length > 1)
                return (0, r.jsx)(F, {
                    handlePreviewButtonClick: K,
                    text: c,
                });
            else
                return (0, r.jsx)(j, {
                    handlePreviewButtonClick: K,
                    text: c,
                });
        return (0, r.jsx)(x, {
            product: t,
            cardRef: n,
            isPremiumUser: p,
            analyticsLocations: W,
            selectedVariantIndex: i,
            hasDiscountOffer: D,
            discountOfferAmount: P,
            text: c,
        });
    },
    H = (e) => {
        let { skuId: t, cardRef: n, onClick: i, text: a, prioritizedCurrency: s, onClickAnalytics: o } = e,
            l = (0, I.Vm)(t),
            c = (0, E.Q)(l);
        if (null == l) return null;
        let u = (0, A.rb)(l, c);
        return (0, r.jsx)(B, {
            product: u,
            cardRef: n,
            selectedVariantIndex: c,
            onClick: i,
            text: a,
            prioritizedCurrency: s,
            onClickAnalytics: o,
        });
    };
