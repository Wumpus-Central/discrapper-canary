n.d(t, {
    A: () => H,
}),
    n(896048);
var a = n(627968);
n(64700);
var l = n(635358),
    i = n(417597),
    r = n(397927),
    s = n(793574),
    o = n(688810),
    c = n(44120),
    d = n(465794),
    u = n(773669),
    m = n(106799),
    p = n(652165),
    h = n(287809),
    f = n(927578),
    x = n(979286),
    b = n(4227),
    g = n(298072),
    v = n(993408),
    j = n(450481),
    y = n(740076),
    _ = n(466459),
    A = n(561769),
    C = n(766172),
    S = n(767503),
    O = n(525723),
    E = n(57020),
    N = n(61750),
    T = n(758836),
    I = n(788868),
    w = n(985018),
    k = n(742282);
let P = (e) => {
        let {
                product: t,
                cardRef: n,
                isPremiumUser: i,
                analyticsLocations: s,
                selectedVariantIndex: o,
                hasDiscountOffer: d,
                discountOfferAmount: u,
                text: m,
            } = e,
            p = (0, v.R8)(t, i, !1),
            h = d
                ? w.intl.formatToPlainString(w.t["5U5RB5"], {
                      discountOfferAmount: u,
                  })
                : w.intl.formatToPlainString(w.t["cNSL/j"], {
                      price: p,
                  });
        return (0, a.jsx)(r.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    (0, c.A)({
                        skuId: (0, C.Y)({
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
                textOverride: null != n ? n : w.intl.string(w.t.sEAnVH),
            },
            subscriptionTier: I.pe.TIER_2,
            showGradient: !0,
        });
    },
    D = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, a.jsx)(r.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : w.intl.string(w.t.FdGl5A),
            fullWidth: !0,
        });
    },
    M = (e) => {
        let { handleUseNow: t, isApplying: n, text: l } = e;
        return (0, a.jsx)(r.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t();
            },
            loading: n,
            text: null != l ? l : w.intl.string(w.t.MAS7uK),
            fullWidth: !0,
        });
    },
    L = (e) => {
        let { skuId: t, onClick: n, text: l } = e;
        return (0, a.jsx)(r.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n(t);
            },
            text: null != l ? l : w.intl.string(w.t.FdGl5A),
            fullWidth: !0,
        });
    },
    U = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: n,
                isClaiming: l,
                analyticsLocations: i,
                text: s,
                onClickAnalytics: o,
            } = e,
            c = async () => {
                null == o || o("claim premium product button"),
                    await (0, x.iJ)(t.skuId),
                    (0, N.A)({
                        product: t,
                        analyticsLocations: i,
                        purchaseType: T.gs.PREMIUM_PURCHASE,
                    });
            };
        return (0, a.jsx)(r.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: n,
            loading: l,
            loadingStartedLabel: w.intl.string(w.t["TYw+9s"]),
            loadingFinishedLabel: w.intl.string(w.t.Pg1UP5),
            text: null != s ? s : w.intl.string(w.t.zp6caO),
            fullWidth: !0,
        });
    },
    B = (e) => {
        let { product: t, analyticsLocations: n, onClickAnalytics: s } = e,
            o = (0, A.sC)(),
            c = (0, i.bG)([u.default], () => u.default.locale);
        return (0, a.jsx)(r.Button, {
            variant: "primary",
            text: w.intl.format(w.t["4NKuqc"], {
                orbPrice: T.O0,
                orbIconHook: () =>
                    (0, a.jsx)(m.A, {
                        className: k.f,
                    }),
            }),
            onClick: (e) => {
                e.stopPropagation(),
                    null == s || s("rental claim with orbs button"),
                    (0, p.B4)({
                        skuId: (0, C.Y)({
                            product: t,
                        }),
                        onCheckoutSuccess: (e) => {
                            var a, i;
                            let { entitlements: r } = e;
                            (0, x.gB)({
                                variantsReturnStyle: l.g.VARIANTS_GROUP,
                            });
                            let s =
                                (null == (a = r[0]) ? void 0 : a.ends_at) != null
                                    ? new Date(r[0].ends_at).toLocaleDateString(c, {
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
                                itemConsumed: null == (i = r[0]) ? void 0 : i.consumed,
                                purchaseType: T.gs.ORB,
                                rentalDuration: o,
                                rentalExpiresAt: s,
                            });
                        },
                        rentalDuration: o,
                    });
            },
            "aria-label": w.intl.formatToPlainString(w.t.DlNs2T, {
                orbPrice: T.O0,
            }),
            fullWidth: !0,
        });
    },
    G = (e) => {
        let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: i,
            selectedVariantIndex: s,
            text: o,
            onClickAnalytics: c,
        } = e;
        return (0, a.jsx)(r.Button, {
            variant: "primary",
            text:
                null != o
                    ? o
                    : w.intl.format(w.t.kAgx5L, {
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
                        skuId: (0, C.Y)({
                            product: t,
                            selectedVariantIndex: s,
                        }),
                        onCheckoutSuccess: (e) => {
                            var n;
                            let { entitlements: a } = e;
                            (0, x.gB)({
                                variantsReturnStyle: l.g.VARIANTS_GROUP,
                            }),
                                (0, N.A)({
                                    product: t,
                                    analyticsLocations: i,
                                    itemConsumed: null == (n = a[0]) ? void 0 : n.consumed,
                                    purchaseType: T.gs.ORB,
                                });
                        },
                        analyticsLocations: i,
                    });
            },
            "aria-label": w.intl.formatToPlainString(w.t["fNG/05"], {
                orbPrice: n[0].amount,
            }),
            fullWidth: !0,
        });
    },
    F = (e) => {
        let { handlePreviewButtonClick: t, text: n } = e;
        return (0, a.jsx)(r.Button, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), t(e);
            },
            text: null != n ? n : w.intl.string(w.t.GpnHfH),
            fullWidth: !0,
        });
    },
    V = (e) => {
        let {
                product: t,
                cardRef: n,
                selectedVariantIndex: l,
                onClick: r,
                text: c,
                prioritizedCurrency: d,
                onClickAnalytics: u,
            } = e,
            m = (0, i.bG)([h.default], () => h.default.getCurrentUser()),
            p = f.Ay.canUseCollectibles(m),
            x = (0, A.sC)(),
            { isPurchased: g, isPartiallyOwnedBundle: C } = (0, _.h)(t),
            S = (0, v.G0)(t),
            N = (0, v.tt)(t),
            { isDisabled: T } = (0, y.I)(t.skuId),
            I = (0, v.Zu)({
                product: t,
                isPartiallyOwnedBundle: C,
                isPurchased: g,
            }),
            w = (0, O.V_)(t),
            k = null != w,
            {
                shouldCheckoutWithOrbs: V,
                hasSufficientOrbs: H,
                checkoutEligiblePrices: W,
            } = (0, E.FI)({
                product: t,
                isPremiumUser: p,
                prioritizedCurrency: d,
                hasDiscountOffer: k,
                isRental: null != x,
            }),
            { analyticsLocations: K } = (0, o.Ay)(s.A.COLLECTIBLES_SHOP_CARD),
            z = (0, A.ql)(t, s.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [q, Q] = (0, i.yK)([b.A], () => [
                b.A.isClaiming === t.skuId,
                null != b.A.isClaiming && b.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: Y, isApplying: J } = (0, j.p)({
                product: t,
            });
        if (null != r)
            return (0, a.jsx)(L, {
                onClick: r,
                skuId: t.skuId,
                text: c,
            });
        if (S && !p && !N)
            return (0, a.jsx)(R, {
                isClaimPremiumProductDisabled: Q,
                text: c,
            });
        if (!I || T)
            return (0, a.jsx)(D, {
                handlePreviewButtonClick: z,
                text: c,
            });
        if (g)
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
        if (V && H)
            return null != x
                ? (0, a.jsx)(B, {
                      product: t,
                      analyticsLocations: K,
                      onClickAnalytics: u,
                  })
                : (0, a.jsx)(G, {
                      product: t,
                      checkoutEligiblePrices: W,
                      analyticsLocations: K,
                      selectedVariantIndex: l,
                      text: c,
                      onClickAnalytics: u,
                  });
        if (V && !H)
            if (W.length > 1)
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
            discountOfferAmount: w,
            text: c,
        });
    },
    H = (e) => {
        let { skuId: t, cardRef: n, onClick: l, text: i, prioritizedCurrency: r, onClickAnalytics: s } = e,
            o = (0, A.Vm)(t),
            c = (0, g.Q)(o);
        if (null == o) return null;
        let d = (0, S.r)(o, c);
        return (0, a.jsx)(V, {
            product: d,
            cardRef: n,
            selectedVariantIndex: c,
            onClick: l,
            text: i,
            prioritizedCurrency: r,
            onClickAnalytics: s,
        });
    };
