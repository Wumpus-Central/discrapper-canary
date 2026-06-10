r.d(e, { A: () => t1 });
var i = r(627968),
    n = r(64700),
    s = r(503698),
    l = r.n(s),
    a = r(835245),
    u = r(612324),
    c = r(575593),
    o = r(334279),
    d = r(269115),
    p = r(890856),
    k = r(825484),
    m = r(444927),
    x = r(793574),
    C = r(688810),
    I = r(713517),
    _ = r(440938),
    g = r(161918),
    A = r(503089),
    h = r(597783),
    f = r(174459),
    E = r(298072),
    T = r(993408),
    j = r(623373),
    v = r(331884),
    y = r(652215),
    R = r(66455),
    P = r(562708),
    L = r(172218),
    O = r(139286),
    N = r(536572),
    b = r(268959),
    S = r(834730),
    H = r(561769),
    V = r(375708);
let B = (t) => {
    let { skuId: e, className: r } = t,
        n = (0, H.Vm)(e),
        s = (0, N.VG)(n),
        l = null != n && n.type === c.R.BUNDLE && n.items.length > 0;
    return (0, i.jsx)(S.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: l ? V.intl.format(V.t.UTc0ny, { count: n.items.length, productName: s }) : s,
    });
};
var D = r(947641),
    M = r(17928),
    U = r(778712),
    w = r(661531),
    F = r(287809),
    W = r(466459),
    G = r(139136),
    z = r(395744),
    Y = r(846957),
    Q = r(929283),
    K = r(245068),
    $ = r(761365),
    q = r(721861);
let Z = (t) => {
        let { responsive: e } = t;
        return !0 !== e;
    },
    X = (t) => {
        let { product: e, isCardHovered: r } = t,
            n = (0, j.YW)(e),
            { isPurchased: s, isPartiallyOwnedBundle: a } = (0, W.h)(e),
            u = n === c.R.PROFILE_EFFECT || n === c.R.PROFILE_FRAME || n === c.R.BUNDLE;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: l()(q.mA, { [q.zj]: (s || a) && !r, [q.Ge]: u }),
                    children: (0, i.jsx)(J, { product: e, isCardHovered: r }),
                }),
                s && (0, i.jsx)(tt, { hidden: r }),
            ],
        });
    },
    J = (t) => {
        var e;
        let r,
            n,
            { product: s, isCardHovered: l } = t,
            a = (0, M.bG)([F.default], () => F.default.getCurrentUser()),
            u = (0, j.YW)(s),
            o =
                ((r = (0, E.Q)(s)),
                (n = null != e ? e : r),
                s?.type === c.R.VARIANTS_GROUP && null != s.variants && s.variants.length > n
                    ? s.variants[n].items[0]
                    : s.items[0]);
        switch (u) {
            case c.R.PROFILE_EFFECT:
                return (0, i.jsx)(G.A, { skuId: o.skuId, isHighlighted: l, removeSetHeight: !0, hideBackground: !0 });
            case c.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: q.pI, children: (0, i.jsx)(z.A, { frame: o, filterLayer: Z }) });
            case c.R.AVATAR_DECORATION:
                return (0, i.jsx)(Q.i, { item: o, user: a, isHighlighted: l, avatarSize: U._3.SIZE_120 });
            case c.R.NAMEPLATE:
                return (0, i.jsx)($.A, { nameplate: o, user: a, isHighlighted: l });
            case c.R.BUNDLE:
                return (0, i.jsx)(K.X, { product: s, user: a, isHighlighted: l });
            case c.R.EXTERNAL_SKU:
                return (0, i.jsx)(Y.B, { product: s, animationState: l ? "on" : "off" });
            default:
                return null;
        }
    },
    tt = (t) => {
        let { hidden: e } = t;
        return (0, i.jsx)(D.r, {
            size: "custom",
            color: w.A.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: l()(q.zo, { [q.R]: e }),
        });
    },
    te = (t) => {
        let { skuId: e, isCardHovered: r, overrideVariantIndex: n } = t,
            s = (0, H.Vm)(e),
            l = (0, E.Q)(s);
        if (null == s) return null;
        let a = (0, j.rb)(s, n ?? l);
        return (0, i.jsx)(X, { product: a, isCardHovered: r });
    };
var tr = r(702841),
    ti = r(428262),
    tn = r(13875),
    ts = r(740076),
    tl = r(219103),
    ta = r(525723),
    tu = r(57020),
    tc = r(380836);
let to = (t) => {
        let { product: e, prioritizedCurrency: r } = t,
            s = (0, tr.bG)([F.default], () => F.default.getCurrentUser()),
            l = ti.Ay.canUseCollectibles(s),
            a = (0, T.xM)(s),
            u = (0, tn.Do)("ProductCardPriceInner") && e.type === c.R.PROFILE_FRAME,
            o = null != a || u,
            { isDisabled: d } = (0, ts.I)(e.skuId),
            { isPurchased: p, isPartiallyOwnedBundle: k } = (0, W.h)(e),
            m = (0, T.G0)(e),
            x = (0, T.tt)(e),
            C = n.useMemo(() => (0, T.fT)(e, o), [e, o]),
            I = (0, ta.V_)(e),
            {
                checkoutEligiblePrices: _,
                hasSufficientOrbs: g,
                shouldCheckoutWithOrbs: A,
            } = (0, tu.F)({ product: e, hasShopDiscount: o, prioritizedCurrency: r, hasDiscountOffer: null != I });
        return d
            ? (0, i.jsx)(S.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: V.intl.string(V.t.wu4gyV),
              })
            : k
              ? (0, i.jsx)(S.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: V.intl.string(V.t.BEjTij),
                })
              : p && !(m && !l)
                ? (0, i.jsx)(S.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: V.intl.string(V.t["6cfuDj"]),
                  })
                : x
                  ? (0, i.jsx)(S.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: V.intl.string(V.t.nBtvYB),
                    })
                  : m
                    ? (0, i.jsx)(S.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: V.intl.string(V.t.rt69oo),
                      })
                    : 0 === _.length
                      ? null
                      : (0, i.jsx)(tl.x, {
                            priceAmount: _[0].amount,
                            priceCurrency: _[0].currency,
                            discount: C,
                            discountIconConfig: o
                                ? { displayMode: "default", source: a ?? T.D0.NITRO, size: "sm" }
                                : void 0,
                            discountOfferAmount: I,
                            className: A && !g ? tc.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    td = (t) => {
        let { skuId: e, prioritizedCurrency: r } = t,
            n = (0, H.Vm)(e),
            s = (0, E.Q)(n);
        if (null == n) return null;
        let l = (0, j.rb)(n, s);
        return (0, i.jsx)(to, { product: l, prioritizedCurrency: r });
    };
var tp = r(821609),
    tk = r(44120),
    tm = r(465794),
    tx = r(757036),
    tC = r(206835),
    tI = r(106799),
    t_ = r(652165),
    tg = r(859040),
    tA = r(4227),
    th = r(640634),
    tf = r(450481),
    tE = r(395068),
    tT = r(766172),
    tj = r(61750),
    tv = r(758836),
    ty = r(788868),
    tR = r(40577);
let tP = (t) => {
        let {
                product: e,
                cardRef: r,
                hasShopDiscount: n,
                analyticsLocations: s,
                selectedVariantIndex: l,
                hasDiscountOffer: a,
                discountOfferAmount: u,
                text: c,
                onTrackClick: o,
            } = t,
            d = (0, T.R8)(e, n, !1),
            p = a
                ? V.intl.formatToPlainString(V.t["5U5RB5"], { discountOfferAmount: u })
                : V.intl.formatToPlainString(V.t["cNSL/j"], { price: d });
        return (0, i.jsx)(tp.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(),
                    o?.(tv.sH.BUY_WITH_FIAT),
                    (0, tk.A)({
                        skuId: (0, tT.Y)({ product: e, selectedVariantIndex: l }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: c ?? p,
            fullWidth: !0,
        });
    },
    tL = (t) => {
        let { text: e, onTrackClick: r } = t;
        return (0, i.jsx)(tm.A, {
            subscriptionTier: ty.pe.TIER_2,
            fullWidth: !0,
            buttonTextOverride: e ?? V.intl.string(V.t.sEAnVH),
            onClick: (t) => {
                t.stopPropagation(), r?.(tv.sH.UNLOCK_WITH_NITRO);
            },
        });
    },
    tO = (t) => {
        let { handlePreviewButtonClick: e, text: r, onTrackClick: n } = t;
        return (0, i.jsx)(tp.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), n?.(tv.sH.VIEW_DETAILS), e(t);
            },
            text: r ?? V.intl.string(V.t.FdGl5A),
            fullWidth: !0,
        });
    },
    tN = (t) => {
        let { handleUseNow: e, isApplying: r, text: n, onTrackClick: s } = t;
        return (0, i.jsx)(tp.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), s?.(tv.sH.USE_NOW), e();
            },
            loading: r,
            text: n ?? V.intl.string(V.t.MAS7uK),
            fullWidth: !0,
        });
    },
    tb = (t) => {
        let { text: e, onTrackClick: r } = t,
            n = (0, tC.A)();
        return (0, i.jsx)(tp.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), r?.(tv.sH.EDIT_PROFILE), n();
            },
            text: e ?? V.intl.string(V.t["2p2aYz"]),
            fullWidth: !0,
        });
    },
    tS = (t) => {
        let { skuId: e, onClick: r, text: n } = t;
        return (0, i.jsx)(tp.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), r(e);
            },
            text: n ?? V.intl.string(V.t.FdGl5A),
            fullWidth: !0,
        });
    },
    tH = (t) => {
        let {
                product: e,
                isClaimPremiumProductDisabled: r,
                isClaiming: n,
                analyticsLocations: s,
                text: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = t,
            c = async () => {
                a?.("claim premium product button"),
                    u?.(tv.sH.ADD_TO_COLLECTION),
                    await (0, tg.iJ)(e.skuId),
                    (0, tj.A)({ product: e, analyticsLocations: s, purchaseType: tv.gs.PREMIUM_PURCHASE });
            };
        return (0, i.jsx)(tp.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), c();
            },
            disabled: r,
            loading: n,
            loadingStartedLabel: V.intl.string(V.t["TYw+9s"]),
            loadingFinishedLabel: V.intl.string(V.t.Pg1UP5),
            text: l ?? V.intl.string(V.t.zp6caO),
            fullWidth: !0,
        });
    },
    tV = (t) => {
        let {
                product: e,
                checkoutEligiblePrices: r,
                analyticsLocations: n,
                selectedVariantIndex: s,
                text: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = t,
            c = (0, th.l)("collectibles_shop_product_card");
        return (0, i.jsx)(tp.$, {
            variant: "primary",
            text:
                l ??
                V.intl.format(c ? V.t.JC15qj : V.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, i.jsx)(tI.A, { className: tR.f }),
                }),
            onClick: (t) => {
                t.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(tv.sH.BUY_WITH_ORBS),
                    (0, t_.B4)({
                        skuId: (0, tT.Y)({ product: e, selectedVariantIndex: s }),
                        onComplete: (t) => {
                            (0, tg.gB)(),
                                (0, tj.A)({
                                    product: e,
                                    analyticsLocations: n,
                                    itemConsumed: t?.entitlements?.[0]?.consumed,
                                    purchaseType: tv.gs.ORB,
                                });
                        },
                        analyticsLocations: n,
                    });
            },
            "aria-label": V.intl.formatToPlainString(V.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    tB = (t) => {
        let { handlePreviewButtonClick: e, text: r, onTrackClick: n } = t;
        return (0, i.jsx)(tp.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), n?.(tv.sH.PAYMENT_OPTIONS), e(t);
            },
            text: r ?? V.intl.string(V.t.GpnHfH),
            fullWidth: !0,
        });
    },
    tD = (t) => {
        let {
                product: e,
                cardRef: r,
                selectedVariantIndex: n,
                onClick: s,
                text: l,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = t,
            o = (0, tE.A)({ location: "ProductCardPrimaryCTAInner", product: e }),
            d = (0, tr.bG)([F.default], () => F.default.getCurrentUser()),
            p = (0, tx.L)(ty.PremiumTypes.TIER_2),
            k = ti.Ay.canUseShopDiscounts(d),
            { isPurchased: m, isPartiallyOwnedBundle: I } = (0, W.h)(e),
            _ = (0, T.G0)(e),
            g = (0, T.tt)(e),
            { isDisabled: A } = (0, ts.I)(e.skuId),
            h = (0, T.Zu)({ product: e, isPartiallyOwnedBundle: I, isPurchased: m }),
            f = (0, ta.V_)(e),
            E = null != f,
            {
                shouldCheckoutWithOrbs: j,
                hasSufficientOrbs: v,
                checkoutEligiblePrices: y,
                isOrbExclusive: R,
            } = (0, tu.F)({ product: e, hasShopDiscount: k, prioritizedCurrency: a, hasDiscountOffer: E }),
            { analyticsLocations: P } = (0, C.Ay)(x.A.COLLECTIBLES_SHOP_CARD),
            L = (0, H.ql)(e, x.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [O, N] = (0, tr.yK)([tA.A], () => [
                tA.A.isClaiming === e.skuId,
                null != tA.A.isClaiming && tA.A.isClaiming !== e.skuId,
            ]),
            { handleUseNow: b, isApplying: S, canUseNow: B } = (0, tf.p)({ product: e });
        if (null != s) return (0, i.jsx)(tS, { onClick: s, skuId: e.skuId, text: l });
        if (_ && !p && !g) return (0, i.jsx)(tL, { text: l, onTrackClick: c });
        if (!h || A) return (0, i.jsx)(tO, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
        if (m)
            return B
                ? (0, i.jsx)(tN, { handleUseNow: b, isApplying: S, text: l, onTrackClick: c })
                : (0, i.jsx)(tb, { text: l, onTrackClick: c });
        if (o)
            return (0, i.jsx)(C.f5, {
                value: [...P, x.A.PROFILE_FRAMES_EA_MARKETING],
                children: (0, i.jsx)(tL, { text: V.intl.string(V.t["9wfL34"]), onTrackClick: c }),
            });
        if (_)
            return (0, i.jsx)(tH, {
                product: e,
                isClaimPremiumProductDisabled: N,
                isClaiming: O,
                analyticsLocations: P,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (j && v)
            return (0, i.jsx)(tV, {
                product: e,
                checkoutEligiblePrices: y,
                analyticsLocations: P,
                selectedVariantIndex: n,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (j && !v)
            if (y.length > 1) return (0, i.jsx)(tB, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
            else return (0, i.jsx)(tO, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
        return R
            ? (0, i.jsx)(tO, { handlePreviewButtonClick: L, text: l, onTrackClick: c })
            : (0, i.jsx)(tP, {
                  product: e,
                  cardRef: r,
                  hasShopDiscount: k,
                  analyticsLocations: P,
                  selectedVariantIndex: n,
                  hasDiscountOffer: E,
                  discountOfferAmount: f,
                  text: l,
                  onTrackClick: c,
              });
    },
    tM = (t) => {
        let {
                skuId: e,
                cardRef: r,
                onClick: n,
                text: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = t,
            c = (0, H.Vm)(e),
            o = (0, E.Q)(c);
        if (null == c) return null;
        let d = (0, j.rb)(c, o);
        return (0, i.jsx)(tD, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: n,
            text: s,
            prioritizedCurrency: l,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var tU = r(408278),
    tw = r(39623),
    tF = r(878112),
    tW = r(347722);
let tG = (t) => {
        let {
                product: e,
                selectedVariantIndex: r,
                cardRef: n,
                onClick: s,
                icon: l,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = t,
            o = (0, g.Mk)(),
            d = o?.tab,
            p = (0, _.uM)(),
            k = (0, tW.X)(e, a),
            m = (0, H.ql)(e, x.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != s || null != l
            ? (0, i.jsx)(tU.K, {
                  variant: "primary",
                  "aria-label": V.intl.string(V.t.SKNnqq),
                  icon: l ?? tw.b,
                  onClick: (t) => {
                      t.stopPropagation(), null != s ? s(e.skuId) : (c?.(tv.sH.OPEN_DETAILS), m(t));
                  },
              })
            : k
              ? (0, i.jsx)(_.R9, {
                    newValue: { pageCategory: d === tv.G2.HOME ? void 0 : p?.pageCategory },
                    children: (0, i.jsx)(tF.A, {
                        primary: !0,
                        product: e,
                        selectedVariantIndex: r,
                        returnRef: n,
                        tooltipDelay: 250,
                        onTrackClick: c,
                    }),
                })
              : null;
    },
    tz = (t) => {
        let {
                skuId: e,
                cardRef: r,
                onClick: n,
                icon: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = t,
            c = (0, H.Vm)(e),
            o = (0, E.Q)(c);
        if (null == c) return null;
        let d = (0, j.rb)(c, o);
        return (0, i.jsx)(tG, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: n,
            icon: s,
            prioritizedCurrency: l,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var tY = r(661847),
    tQ = r(139146),
    tK = r(420960);
let t$ = (t) => {
        let { product: e, selectedVariantIndex: r, isCardHovered: n, onTrackClick: s } = t;
        return (0, i.jsx)(tQ.R, {
            product: e,
            selectedVariantIndex: r,
            isCardHovered: n,
            className: tK.i,
            onTrackClick: s,
        });
    },
    tq = (t) => {
        let { skuId: e, isCardHovered: r, onTrackClick: n } = t,
            s = (0, H.Vm)(e),
            l = (0, E.Q)(s);
        return null == s
            ? null
            : (0, i.jsx)(t$, { product: s, selectedVariantIndex: l, isCardHovered: r, onTrackClick: n });
    };
var tZ = r(935094),
    tX = r(521e3),
    tJ = r(496569);
let t0 = n.memo(function (t) {
        let {
                product: e,
                hideWishlistButton: r,
                hideProductName: s,
                hideVariantSwitcher: a,
                hidePrice: o,
                hidePrimaryCTA: m,
                hideSecondaryCTA: A,
                badgeOverride: S,
                skipLimitedTimeCheck: V,
                onClickCard: D,
                onClickPrimaryCTA: M,
                onClickSecondaryCTA: U,
                onMouseEnter: w,
                onMouseLeave: F,
                onFocus: W,
                onBlur: G,
                primaryCTAText: z,
                secondaryCTAIcon: Y,
                productNameClassName: Q,
                badgeClassName: K,
                cardClassName: $,
                prioritizedCurrency: q,
                aspectRatio: Z,
                hideStaticBundleBackgroundAsset: X,
            } = t,
            { previewingVariantIndex: J, handleEntering: tt, handleLeaving: tr } = (0, tZ.f)(e),
            ti = (0, H.gZ)() ?? q,
            tn = (0, g.Mk)(),
            ts = tn?.tab,
            tl = (0, _.uM)(),
            ta = n.useMemo(() => (0, H.UU)(e, ts, tl), [e, ts, tl]),
            tu = (0, N.s7)(e),
            tc = n.useId(),
            to = n.useRef(null),
            { isHoveringOrFocusing: tp } = (0, I.A)(to),
            tk = (0, tX.$c)(e.skuId),
            tm = (function (t) {
                let e = (0, _.uM)(),
                    { analyticsLocations: r } = (0, C.Ay)(),
                    i = (0, E.Q)(t),
                    s = (0, v.o)(),
                    l = (0, T.xM)(s),
                    a = n.useRef(null),
                    u = n.useRef(!1),
                    c = n.useRef(i);
                n.useEffect(() => {
                    c.current = i;
                }, [i]);
                let o = n.useCallback(() => {
                        let i = (0, j.B1)(t);
                        (0, O.x)(
                            {
                                name: P.ImpressionNames.SHOP_CARD,
                                type: P.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: i ? (t.variants[c.current]?.skuId ?? t.skuId) : t.skuId,
                                    card_id: e?.cardId,
                                    shop_session_id: e?.sessionId,
                                    position_in_section: e?.tilePosition,
                                    product_sku_ids: (0, j.B1)(t) ? t.variants.map((t) => t.skuId) : [t.skuId],
                                    location_stack: r,
                                    discount_source: (0, T.b_)(l),
                                },
                            },
                            !1,
                            !0,
                        );
                    }, [t, e?.cardId, e?.sessionId, e?.tilePosition, r, l]),
                    d = (0, L.K)((t) => {
                        t
                            ? u.current ||
                              (null === a.current &&
                                  (a.current = setTimeout(() => {
                                      o(), (u.current = !0), (a.current = null);
                                  }, 1e3)))
                            : ((u.current = !1), null !== a.current && (clearTimeout(a.current), (a.current = null)));
                    }, 0.5);
                return (
                    n.useEffect(
                        () => () => {
                            null !== a.current && (clearTimeout(a.current), (a.current = null));
                        },
                        [],
                    ),
                    d
                );
            })(e),
            tx = (0, u.A)(to, tm),
            { handleCardVisibilityChange: tC } = (0, h.Z)(e.skuId, ts === tv.G2.CATALOG ? "full" : ts),
            tI = (0, H.ql)(e, x.A.COLLECTIBLES_SHOP_CARD, ta),
            { analyticsLocations: t_ } = (0, C.Ay)(),
            tg = (function (t) {
                let { product: e, analyticsLocations: r } = t,
                    { cardId: i, sessionId: s, tilePosition: l } = (0, _.uM)() ?? {},
                    a = (0, E.Q)(e),
                    u = (0, v.o)(),
                    c = (0, T.xM)(u);
                return n.useCallback(
                    (t, n) => {
                        f.default.track(y.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, j.B1)(e) ? (e.variants[n ?? a]?.skuId ?? e.skuId) : e.skuId,
                            cta: t,
                            shop_session_id: s,
                            card_id: i,
                            product_sku_ids: (0, j.v8)(e),
                            location_stack: r,
                            position_in_section: l,
                            discount_source: (0, T.b_)(c),
                        });
                    },
                    [e, a, s, i, r, l, c],
                );
            })({ product: e, analyticsLocations: t_ }),
            tA = n.useCallback(
                (t) => {
                    null != D ? D(t) : (tg(tv.sH.OPEN_DETAILS), tI(t));
                },
                [tg, D, tI],
            );
        !(function (t, e) {
            let r = (0, _.uM)(),
                { analyticsLocations: i } = (0, C.Ay)(),
                s = (0, E.Q)(e),
                l = n.useRef(!1),
                a = (0, R.A)(r),
                u = (0, R.A)(e),
                c = (0, R.A)(s),
                o = (0, R.A)(i);
            n.useEffect(() => {
                if (!t) {
                    l.current = !1;
                    return;
                }
                if (l.current) return;
                let e = setTimeout(() => {
                    let t = a.current,
                        e = u.current,
                        r = (0, j.B1)(e);
                    f.default.track(y.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: t?.sessionId,
                        sku_id: r ? (e.variants[c.current]?.skuId ?? e.skuId) : e.skuId,
                        position_in_section: t?.tilePosition,
                        card_id: t?.cardId,
                        product_sku_ids: (0, j.v8)(e),
                        location_stack: o.current,
                    }),
                        (l.current = !0);
                }, 250);
                return () => clearTimeout(e);
            }, [t, a, u, c, o]);
        })(tp, e);
        let th = e.type === c.R.BUNDLE && e.previewAssets?.fgStatic != null,
            tf = e.type === c.R.VARIANTS_GROUP && !a,
            tE = n.useMemo(() => ({ maxVariantsToShow: 4, onClick: tI }), [tI]),
            tT = e.type === c.R.BUNDLE && !X,
            tj = !m || !A,
            ty = !(o && s) || tf,
            tR = ty || tj,
            tP = tj || tf;
        return (0, i.jsx)(d.L, {
            innerRef: to,
            onChange: tC,
            threshold: 0,
            children: (0, i.jsx)(p.s, {
                ref: tx,
                onClick: tA,
                "aria-label": tu,
                "aria-describedby": tc,
                className: l()($, tJ.ty, { [tJ.yo]: tp }),
                onFocus: () => W?.(e.skuId),
                onBlur: () => G?.(e.skuId),
                onMouseEnter: () => w?.(e.skuId),
                onMouseLeave: () => F?.(e.skuId),
                children: (0, i.jsx)(tX.vf.Provider, {
                    value: tk ? to : null,
                    children: (0, i.jsxs)("div", {
                        id: tc,
                        className: tJ.qt,
                        style: { aspectRatio: Z },
                        children: [
                            tT &&
                                e.previewAssets?.bgStatic != null &&
                                (0, i.jsx)("img", { className: tJ.vD, src: e.previewAssets.bgStatic, alt: "" }),
                            (0, i.jsx)("div", {
                                className: l()(tJ.Dq, { [tJ.$r]: !s || ty || tP, [tJ.T9]: th }),
                                children: (0, i.jsx)(te, {
                                    skuId: e.skuId,
                                    isCardHovered: tp,
                                    overrideVariantIndex: J,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: tJ.N1,
                                children: [
                                    (0, i.jsx)(b.A, {
                                        skuId: e.skuId,
                                        badgeOverride: S,
                                        className: K,
                                        prioritizedCurrency: ti,
                                        skipLimitedTimeCheck: V,
                                    }),
                                    !r && (0, i.jsx)(tq, { skuId: e.skuId, isCardHovered: tp, onTrackClick: tg }),
                                ],
                            }),
                            tR &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", { className: l()(tJ.wY, { [tJ.KY]: th }) }),
                                        (0, i.jsxs)("div", {
                                            className: tJ.xQ,
                                            children: [
                                                ty &&
                                                    (0, i.jsxs)("div", {
                                                        className: tJ.xE,
                                                        children: [
                                                            !(s && o) &&
                                                                (0, i.jsxs)("div", {
                                                                    className: tJ.Ly,
                                                                    children: [
                                                                        !s &&
                                                                            (0, i.jsx)(B, {
                                                                                skuId: e.skuId,
                                                                                className: l()(Q, tJ.tZ),
                                                                            }),
                                                                        !o &&
                                                                            (0, i.jsx)("div", {
                                                                                className: tJ.oh,
                                                                                children: (0, i.jsx)(td, {
                                                                                    skuId: e.skuId,
                                                                                    prioritizedCurrency: ti,
                                                                                }),
                                                                            }),
                                                                    ],
                                                                }),
                                                            tf &&
                                                                (0, i.jsx)(tY.A, {
                                                                    skuId: e.skuId,
                                                                    isCollapsed: !tp,
                                                                    onVariantEnter: tt,
                                                                    onVariantExit: tr,
                                                                    overflowProps: tE,
                                                                    onTrackClick: tg,
                                                                }),
                                                        ],
                                                    }),
                                                tj &&
                                                    (0, i.jsx)("div", {
                                                        className: tJ.Vs,
                                                        children: (0, i.jsxs)(k.e, {
                                                            wrap: !1,
                                                            className: tJ.Ld,
                                                            fullWidth: !0,
                                                            children: [
                                                                !m &&
                                                                    (0, i.jsx)(tM, {
                                                                        skuId: e.skuId,
                                                                        cardRef: to,
                                                                        onClick: M,
                                                                        text: z,
                                                                        prioritizedCurrency: ti,
                                                                        onClickAnalytics: ta,
                                                                        onTrackClick: tg,
                                                                    }),
                                                                !A &&
                                                                    (0, i.jsx)(tz, {
                                                                        skuId: e.skuId,
                                                                        cardRef: to,
                                                                        onClick: U,
                                                                        icon: Y,
                                                                        prioritizedCurrency: ti,
                                                                        onClickAnalytics: ta,
                                                                        onTrackClick: tg,
                                                                    }),
                                                            ],
                                                        }),
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                        ],
                    }),
                }),
            }),
        });
    }),
    t1 = (t) => {
        let { skuId: e, ...r } = t,
            n = (0, H.Vm)(e),
            s = (0, m.A)(() => ({ cardId: (0, a.A)() })),
            l = (0, A.c)("product_card");
        return null != n && (e !== o.j.PREMIUM_TIER_2_1_DAY || l)
            ? (0, i.jsx)(_.R9, { newValue: s, children: (0, i.jsx)(t0, { product: n, ...r }) })
            : null;
    };
