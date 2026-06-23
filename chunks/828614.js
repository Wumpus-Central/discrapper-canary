r.d(e, { A: () => t0 });
var n = r(627968),
    i = r(64700),
    s = r(503698),
    l = r.n(s),
    a = r(835245),
    u = r(612324),
    c = r(575593),
    o = r(334279),
    d = r(269115),
    k = r(890856),
    p = r(825484),
    m = r(444927),
    x = r(793574),
    C = r(688810),
    I = r(713517),
    f = r(440938),
    _ = r(161918),
    g = r(503089),
    A = r(597783),
    h = r(174459),
    E = r(298072),
    T = r(993408),
    j = r(623373),
    v = r(331884),
    y = r(652215),
    R = r(66455),
    P = r(562708),
    L = r(172218),
    N = r(139286),
    O = r(536572),
    S = r(268959),
    b = r(834730),
    H = r(561769),
    V = r(375708);
let B = function (t) {
    let { skuId: e, className: r } = t,
        i = (0, H.Vm)(e),
        s = (0, O.VG)(i),
        l = null != i && i.type === c.R.BUNDLE && i.items.length > 0;
    return (0, n.jsx)(b.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: l ? V.intl.format(V.t.UTc0ny, { count: i.items.length, productName: s }) : s,
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
function Z(t) {
    let { responsive: e } = t;
    return !0 !== e;
}
function X(t) {
    let { product: e, isCardHovered: r } = t,
        i = (0, j.YW)(e),
        { isPurchased: s, isPartiallyOwnedBundle: a } = (0, W.h)(e),
        u = i === c.R.PROFILE_EFFECT || i === c.R.PROFILE_FRAME || i === c.R.BUNDLE;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: l()(q.mA, { [q.zj]: (s || a) && !r, [q.Ge]: u }),
                children: (0, n.jsx)(J, { product: e, isCardHovered: r }),
            }),
            s && (0, n.jsx)(tt, { hidden: r }),
        ],
    });
}
function J(t) {
    let e,
        { product: r, isCardHovered: i } = t,
        s = (0, M.bG)([F.default], () => F.default.getCurrentUser()),
        l = (0, j.YW)(r),
        a =
            ((e = (0, E.Q)(r)),
            r?.type === c.R.VARIANTS_GROUP && null != r.variants && r.variants.length > e
                ? r.variants[e].items[0]
                : r.items[0]);
    switch (l) {
        case c.R.PROFILE_EFFECT:
            return (0, n.jsx)(G.A, { skuId: a.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case c.R.PROFILE_FRAME:
            return (0, n.jsx)("div", { className: q.pI, children: (0, n.jsx)(z.A, { frame: a, filterLayer: Z }) });
        case c.R.AVATAR_DECORATION:
            return (0, n.jsx)(Q.i, { item: a, user: s, isHighlighted: i, avatarSize: U._3.SIZE_120 });
        case c.R.NAMEPLATE:
            return (0, n.jsx)($.A, { nameplate: a, user: s, isHighlighted: i });
        case c.R.BUNDLE:
            return (0, n.jsx)(K.X, { product: r, user: s, isHighlighted: i });
        case c.R.EXTERNAL_SKU:
            return (0, n.jsx)(Y.B, { product: r, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function tt(t) {
    let { hidden: e } = t;
    return (0, n.jsx)(D.r, {
        size: "custom",
        color: w.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: l()(q.zo, { [q.R]: e }),
    });
}
let te = function (t) {
    let { skuId: e, isCardHovered: r, overrideVariantIndex: i } = t,
        s = (0, H.Vm)(e),
        l = (0, E.Q)(s);
    if (null == s) return null;
    let a = (0, j.rb)(s, i ?? l);
    return (0, n.jsx)(X, { product: a, isCardHovered: r });
};
var tr = r(702841),
    tn = r(428262),
    ti = r(13875),
    ts = r(740076),
    tl = r(219103),
    ta = r(525723),
    tu = r(57020),
    tc = r(380836);
function to(t) {
    let { product: e, prioritizedCurrency: r } = t,
        s = (0, tr.bG)([F.default], () => F.default.getCurrentUser()),
        l = tn.Ay.canUseCollectibles(s),
        a = (0, T.xM)(s),
        u = (0, ti.Do)("ProductCardPriceInner") && e.type === c.R.PROFILE_FRAME,
        o = null != a || u,
        { isDisabled: d } = (0, ts.I)(e.skuId),
        { isPurchased: k, isPartiallyOwnedBundle: p } = (0, W.h)(e),
        m = (0, T.G0)(e),
        x = (0, T.tt)(e),
        C = i.useMemo(() => (0, T.fT)(e, o), [e, o]),
        I = (0, ta.V_)(e),
        {
            checkoutEligiblePrices: f,
            hasSufficientOrbs: _,
            shouldCheckoutWithOrbs: g,
        } = (0, tu.F)({ product: e, hasShopDiscount: o, prioritizedCurrency: r, hasDiscountOffer: null != I });
    return d
        ? (0, n.jsx)(b.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: V.intl.string(V.t.wu4gyV),
          })
        : p
          ? (0, n.jsx)(b.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: V.intl.string(V.t.BEjTij),
            })
          : k && !(m && !l)
            ? (0, n.jsx)(b.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: V.intl.string(V.t["6cfuDj"]),
              })
            : x
              ? (0, n.jsx)(b.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: V.intl.string(V.t.nBtvYB),
                })
              : m
                ? (0, n.jsx)(b.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: V.intl.string(V.t.rt69oo),
                  })
                : 0 === f.length
                  ? null
                  : (0, n.jsx)(tl.x, {
                        priceAmount: f[0].amount,
                        priceCurrency: f[0].currency,
                        discount: C,
                        discountIconConfig: o
                            ? { displayMode: "default", source: a ?? T.D0.NITRO, size: "sm" }
                            : void 0,
                        discountOfferAmount: I,
                        className: g && !_ ? tc.c : void 0,
                        variant: "text-md/bold",
                    });
}
let td = function (t) {
    let { skuId: e, prioritizedCurrency: r } = t,
        i = (0, H.Vm)(e),
        s = (0, E.Q)(i);
    if (null == i) return null;
    let l = (0, j.rb)(i, s);
    return (0, n.jsx)(to, { product: l, prioritizedCurrency: r });
};
var tk = r(821609),
    tp = r(44120),
    tm = r(465794),
    tx = r(757036),
    tC = r(206835),
    tI = r(106799),
    tf = r(652165),
    t_ = r(564064),
    tg = r(4227),
    tA = r(450481),
    th = r(395068),
    tE = r(766172),
    tT = r(61750),
    tj = r(758836),
    tv = r(788868),
    ty = r(40577);
let tR = (t) => {
        let {
                product: e,
                cardRef: r,
                hasShopDiscount: i,
                analyticsLocations: s,
                selectedVariantIndex: l,
                hasDiscountOffer: a,
                discountOfferAmount: u,
                text: c,
                onTrackClick: o,
            } = t,
            d = (0, T.R8)(e, i, !1),
            k = (0, f.uM)()?.sessionId,
            p = a
                ? V.intl.formatToPlainString(V.t["5U5RB5"], { discountOfferAmount: u })
                : V.intl.formatToPlainString(V.t["cNSL/j"], { price: d });
        return (0, n.jsx)(tk.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(),
                    o?.(tj.sH.BUY_WITH_FIAT),
                    (0, tp.A)({
                        skuId: (0, tE.Y)({ product: e, selectedVariantIndex: l }),
                        returnRef: r,
                        analyticsLocations: s,
                        discoverySessionId: k,
                    });
            },
            text: c ?? p,
            fullWidth: !0,
        });
    },
    tP = (t) => {
        let { text: e, onTrackClick: r } = t;
        return (0, n.jsx)(tm.A, {
            subscriptionTier: tv.pe.TIER_2,
            fullWidth: !0,
            buttonTextOverride: e ?? V.intl.string(V.t.sEAnVH),
            onClick: (t) => {
                t.stopPropagation(), r?.(tj.sH.UNLOCK_WITH_NITRO);
            },
        });
    },
    tL = (t) => {
        let { handlePreviewButtonClick: e, text: r, onTrackClick: i } = t;
        return (0, n.jsx)(tk.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), i?.(tj.sH.VIEW_DETAILS), e(t);
            },
            text: r ?? V.intl.string(V.t.FdGl5A),
            fullWidth: !0,
        });
    },
    tN = (t) => {
        let { handleUseNow: e, isApplying: r, text: i, onTrackClick: s } = t;
        return (0, n.jsx)(tk.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), s?.(tj.sH.USE_NOW), e();
            },
            loading: r,
            text: i ?? V.intl.string(V.t.MAS7uK),
            fullWidth: !0,
        });
    },
    tO = (t) => {
        let { text: e, onTrackClick: r } = t,
            i = (0, tC.A)();
        return (0, n.jsx)(tk.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), r?.(tj.sH.EDIT_PROFILE), i();
            },
            text: e ?? V.intl.string(V.t["2p2aYz"]),
            fullWidth: !0,
        });
    },
    tS = (t) => {
        let { skuId: e, onClick: r, text: i } = t;
        return (0, n.jsx)(tk.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), r(e);
            },
            text: i ?? V.intl.string(V.t.FdGl5A),
            fullWidth: !0,
        });
    },
    tb = (t) => {
        let {
                product: e,
                isClaimPremiumProductDisabled: r,
                isClaiming: i,
                analyticsLocations: s,
                text: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = t,
            c = async () => {
                a?.("claim premium product button"),
                    u?.(tj.sH.ADD_TO_COLLECTION),
                    await (0, t_.iJ)(e.skuId),
                    (0, tT.A)({ product: e, analyticsLocations: s, purchaseType: tj.gs.PREMIUM_PURCHASE });
            };
        return (0, n.jsx)(tk.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), c();
            },
            disabled: r,
            loading: i,
            loadingStartedLabel: V.intl.string(V.t["TYw+9s"]),
            loadingFinishedLabel: V.intl.string(V.t.Pg1UP5),
            text: l ?? V.intl.string(V.t.zp6caO),
            fullWidth: !0,
        });
    },
    tH = (t) => {
        let {
                product: e,
                checkoutEligiblePrices: r,
                analyticsLocations: i,
                selectedVariantIndex: s,
                text: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = t,
            c = (0, f.uM)()?.sessionId;
        return (0, n.jsx)(tk.$, {
            variant: "primary",
            text:
                l ??
                V.intl.format(V.t.JC15qj, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, n.jsx)(tI.A, { className: ty.f }),
                }),
            onClick: (t) => {
                t.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(tj.sH.BUY_WITH_ORBS),
                    (0, tf.B4)({
                        skuId: (0, tE.Y)({ product: e, selectedVariantIndex: s }),
                        onComplete: (t) => {
                            (0, t_.gB)(),
                                (0, tT.A)({
                                    product: e,
                                    analyticsLocations: i,
                                    itemConsumed: t?.entitlements?.[0]?.consumed,
                                    purchaseType: tj.gs.ORB,
                                });
                        },
                        analyticsLocations: i,
                        discoverySessionId: c,
                    });
            },
            "aria-label": V.intl.formatToPlainString(V.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    tV = (t) => {
        let { handlePreviewButtonClick: e, text: r, onTrackClick: i } = t;
        return (0, n.jsx)(tk.$, {
            variant: "primary",
            onClick: (t) => {
                t.stopPropagation(), i?.(tj.sH.PAYMENT_OPTIONS), e(t);
            },
            text: r ?? V.intl.string(V.t.GpnHfH),
            fullWidth: !0,
        });
    },
    tB = (t) => {
        let {
                product: e,
                cardRef: r,
                selectedVariantIndex: i,
                onClick: s,
                text: l,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = t,
            o = (0, th.A)({ location: "ProductCardPrimaryCTAInner", product: e }),
            d = (0, tr.bG)([F.default], () => F.default.getCurrentUser()),
            k = (0, tx.L)(tv.PremiumTypes.TIER_2),
            p = tn.Ay.canUseShopDiscounts(d),
            { isPurchased: m, isPartiallyOwnedBundle: I } = (0, W.h)(e),
            f = (0, T.G0)(e),
            _ = (0, T.tt)(e),
            { isDisabled: g } = (0, ts.I)(e.skuId),
            A = (0, T.Zu)({ product: e, isPartiallyOwnedBundle: I, isPurchased: m }),
            h = (0, ta.V_)(e),
            E = null != h,
            {
                shouldCheckoutWithOrbs: j,
                hasSufficientOrbs: v,
                checkoutEligiblePrices: y,
                isOrbExclusive: R,
            } = (0, tu.F)({ product: e, hasShopDiscount: p, prioritizedCurrency: a, hasDiscountOffer: E }),
            { analyticsLocations: P } = (0, C.Ay)(x.A.COLLECTIBLES_SHOP_CARD),
            L = (0, H.ql)(e, x.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [N, O] = (0, tr.yK)([tg.A], () => [
                tg.A.isClaiming === e.skuId,
                null != tg.A.isClaiming && tg.A.isClaiming !== e.skuId,
            ]),
            { handleUseNow: S, isApplying: b, canUseNow: B } = (0, tA.p)({ product: e });
        if (null != s) return (0, n.jsx)(tS, { onClick: s, skuId: e.skuId, text: l });
        if (f && !k && !_) return (0, n.jsx)(tP, { text: l, onTrackClick: c });
        if (!A || g) return (0, n.jsx)(tL, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
        if (m)
            return B
                ? (0, n.jsx)(tN, { handleUseNow: S, isApplying: b, text: l, onTrackClick: c })
                : (0, n.jsx)(tO, { text: l, onTrackClick: c });
        if (o)
            return (0, n.jsx)(C.f5, {
                value: [...P, x.A.PROFILE_FRAMES_EA_MARKETING],
                children: (0, n.jsx)(tP, { text: V.intl.string(V.t["9wfL34"]), onTrackClick: c }),
            });
        if (f)
            return (0, n.jsx)(tb, {
                product: e,
                isClaimPremiumProductDisabled: O,
                isClaiming: N,
                analyticsLocations: P,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (j && v)
            return (0, n.jsx)(tH, {
                product: e,
                checkoutEligiblePrices: y,
                analyticsLocations: P,
                selectedVariantIndex: i,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (j && !v)
            if (y.length > 1) return (0, n.jsx)(tV, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
            else return (0, n.jsx)(tL, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
        return R
            ? (0, n.jsx)(tL, { handlePreviewButtonClick: L, text: l, onTrackClick: c })
            : (0, n.jsx)(tR, {
                  product: e,
                  cardRef: r,
                  hasShopDiscount: p,
                  analyticsLocations: P,
                  selectedVariantIndex: i,
                  hasDiscountOffer: E,
                  discountOfferAmount: h,
                  text: l,
                  onTrackClick: c,
              });
    },
    tD = (t) => {
        let {
                skuId: e,
                cardRef: r,
                onClick: i,
                text: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = t,
            c = (0, H.Vm)(e),
            o = (0, E.Q)(c);
        if (null == c) return null;
        let d = (0, j.rb)(c, o);
        return (0, n.jsx)(tB, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: i,
            text: s,
            prioritizedCurrency: l,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var tM = r(408278),
    tU = r(39623),
    tw = r(878112),
    tF = r(347722);
let tW = (t) => {
        let {
                product: e,
                selectedVariantIndex: r,
                cardRef: i,
                onClick: s,
                icon: l,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = t,
            o = (0, _.Mk)(),
            d = o?.tab,
            k = (0, f.uM)(),
            p = (0, tF.X)(e, a),
            m = (0, H.ql)(e, x.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != s || null != l
            ? (0, n.jsx)(tM.K, {
                  variant: "primary",
                  "aria-label": V.intl.string(V.t.SKNnqq),
                  icon: l ?? tU.b,
                  onClick: (t) => {
                      t.stopPropagation(), null != s ? s(e.skuId) : (c?.(tj.sH.OPEN_DETAILS), m(t));
                  },
              })
            : p
              ? (0, n.jsx)(f.R9, {
                    newValue: { pageCategory: d === tj.G2.HOME ? void 0 : k?.pageCategory },
                    children: (0, n.jsx)(tw.A, {
                        primary: !0,
                        product: e,
                        selectedVariantIndex: r,
                        returnRef: i,
                        tooltipDelay: 250,
                        onTrackClick: c,
                    }),
                })
              : null;
    },
    tG = function (t) {
        let {
                skuId: e,
                cardRef: r,
                onClick: i,
                icon: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = t,
            c = (0, H.Vm)(e),
            o = (0, E.Q)(c);
        if (null == c) return null;
        let d = (0, j.rb)(c, o);
        return (0, n.jsx)(tW, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: i,
            icon: s,
            prioritizedCurrency: l,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var tz = r(661847),
    tY = r(139146),
    tQ = r(420960);
function tK(t) {
    let { product: e, selectedVariantIndex: r, isCardHovered: i, onTrackClick: s } = t;
    return (0, n.jsx)(tY.R, {
        product: e,
        selectedVariantIndex: r,
        isCardHovered: i,
        className: tQ.i,
        onTrackClick: s,
    });
}
let t$ = function (t) {
    let { skuId: e, isCardHovered: r, onTrackClick: i } = t,
        s = (0, H.Vm)(e),
        l = (0, E.Q)(s);
    return null == s
        ? null
        : (0, n.jsx)(tK, { product: s, selectedVariantIndex: l, isCardHovered: r, onTrackClick: i });
};
var tq = r(935094),
    tZ = r(521e3),
    tX = r(496569);
let tJ = i.memo(function (t) {
        let {
                product: e,
                hideWishlistButton: r,
                hideProductName: s,
                hideVariantSwitcher: a,
                hidePrice: o,
                hidePrimaryCTA: m,
                hideSecondaryCTA: g,
                badgeOverride: b,
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
            { previewingVariantIndex: J, handleEntering: tt, handleLeaving: tr } = (0, tq.f)(e),
            tn = (0, H.gZ)() ?? q,
            ti = (0, _.Mk)(),
            ts = ti?.tab,
            tl = (0, f.uM)(),
            ta = i.useMemo(() => (0, H.UU)(e, ts, tl), [e, ts, tl]),
            tu = (0, O.s7)(e),
            tc = i.useId(),
            to = i.useRef(null),
            { isHoveringOrFocusing: tk } = (0, I.A)(to),
            tp = (0, tZ.$c)(e.skuId),
            tm = (function (t) {
                let e = (0, f.uM)(),
                    { analyticsLocations: r } = (0, C.Ay)(),
                    n = (0, E.Q)(t),
                    s = (0, v.o)(),
                    l = (0, T.xM)(s),
                    a = i.useRef(null),
                    u = i.useRef(!1),
                    c = i.useRef(n);
                i.useEffect(() => {
                    c.current = n;
                }, [n]);
                let o = i.useCallback(() => {
                        let n = (0, j.B1)(t);
                        (0, N.x)(
                            {
                                name: P.ImpressionNames.SHOP_CARD,
                                type: P.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: n ? (t.variants[c.current]?.skuId ?? t.skuId) : t.skuId,
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
                    i.useEffect(
                        () => () => {
                            null !== a.current && (clearTimeout(a.current), (a.current = null));
                        },
                        [],
                    ),
                    d
                );
            })(e),
            tx = (0, u.A)(to, tm),
            { handleCardVisibilityChange: tC } = (0, A.Z)(e.skuId, ts === tj.G2.CATALOG ? "full" : ts),
            tI = (0, H.ql)(e, x.A.COLLECTIBLES_SHOP_CARD, ta),
            { analyticsLocations: tf } = (0, C.Ay)(),
            t_ = (function (t) {
                let { product: e, analyticsLocations: r } = t,
                    { cardId: n, sessionId: s, tilePosition: l } = (0, f.uM)() ?? {},
                    a = (0, E.Q)(e),
                    u = (0, v.o)(),
                    c = (0, T.xM)(u);
                return i.useCallback(
                    (t, i) => {
                        h.default.track(y.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, j.B1)(e) ? (e.variants[i ?? a]?.skuId ?? e.skuId) : e.skuId,
                            cta: t,
                            shop_session_id: s,
                            card_id: n,
                            product_sku_ids: (0, j.v8)(e),
                            location_stack: r,
                            position_in_section: l,
                            discount_source: (0, T.b_)(c),
                        });
                    },
                    [e, a, s, n, r, l, c],
                );
            })({ product: e, analyticsLocations: tf }),
            tg = i.useCallback(
                (t) => {
                    null != D ? D(t) : (t_(tj.sH.OPEN_DETAILS), tI(t));
                },
                [t_, D, tI],
            );
        !(function (t, e) {
            let r = (0, f.uM)(),
                { analyticsLocations: n } = (0, C.Ay)(),
                s = (0, E.Q)(e),
                l = i.useRef(!1),
                a = (0, R.A)(r),
                u = (0, R.A)(e),
                c = (0, R.A)(s),
                o = (0, R.A)(n);
            i.useEffect(() => {
                if (!t) {
                    l.current = !1;
                    return;
                }
                if (l.current) return;
                let e = setTimeout(() => {
                    let t = a.current,
                        e = u.current,
                        r = (0, j.B1)(e);
                    h.default.track(y.HAw.SHOP_CARD_HOVERED, {
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
        })(tk, e);
        let tA = e.type === c.R.BUNDLE && e.previewAssets?.fgStatic != null,
            th = e.type === c.R.VARIANTS_GROUP && !a,
            tE = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: tI }), [tI]),
            tT = e.type === c.R.BUNDLE && !X,
            tv = !m || !g,
            ty = !(o && s) || th,
            tR = ty || tv,
            tP = tv || th;
        return (0, n.jsx)(d.L, {
            innerRef: to,
            onChange: tC,
            threshold: 0,
            children: (0, n.jsx)(k.s, {
                ref: tx,
                onClick: tg,
                "aria-label": tu,
                "aria-describedby": tc,
                className: l()($, tX.ty, { [tX.yo]: tk }),
                onFocus: () => W?.(e.skuId),
                onBlur: () => G?.(e.skuId),
                onMouseEnter: () => w?.(e.skuId),
                onMouseLeave: () => F?.(e.skuId),
                children: (0, n.jsx)(tZ.vf.Provider, {
                    value: tp ? to : null,
                    children: (0, n.jsxs)("div", {
                        id: tc,
                        className: tX.qt,
                        style: { aspectRatio: Z },
                        children: [
                            tT &&
                                e.previewAssets?.bgStatic != null &&
                                (0, n.jsx)("img", { className: tX.vD, src: e.previewAssets.bgStatic, alt: "" }),
                            (0, n.jsx)("div", {
                                className: l()(tX.Dq, { [tX.$r]: !s || ty || tP, [tX.T9]: tA }),
                                children: (0, n.jsx)(te, {
                                    skuId: e.skuId,
                                    isCardHovered: tk,
                                    overrideVariantIndex: J,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: tX.N1,
                                children: [
                                    (0, n.jsx)(S.A, {
                                        skuId: e.skuId,
                                        badgeOverride: b,
                                        className: K,
                                        prioritizedCurrency: tn,
                                        skipLimitedTimeCheck: V,
                                    }),
                                    !r && (0, n.jsx)(t$, { skuId: e.skuId, isCardHovered: tk, onTrackClick: t_ }),
                                ],
                            }),
                            tR &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("div", { className: l()(tX.wY, { [tX.KY]: tA }) }),
                                        (0, n.jsxs)("div", {
                                            className: tX.xQ,
                                            children: [
                                                ty &&
                                                    (0, n.jsxs)("div", {
                                                        className: tX.xE,
                                                        children: [
                                                            !(s && o) &&
                                                                (0, n.jsxs)("div", {
                                                                    className: tX.Ly,
                                                                    children: [
                                                                        !s &&
                                                                            (0, n.jsx)(B, {
                                                                                skuId: e.skuId,
                                                                                className: l()(Q, tX.tZ),
                                                                            }),
                                                                        !o &&
                                                                            (0, n.jsx)("div", {
                                                                                className: tX.oh,
                                                                                children: (0, n.jsx)(td, {
                                                                                    skuId: e.skuId,
                                                                                    prioritizedCurrency: tn,
                                                                                }),
                                                                            }),
                                                                    ],
                                                                }),
                                                            th &&
                                                                (0, n.jsx)(tz.A, {
                                                                    skuId: e.skuId,
                                                                    isCollapsed: !tk,
                                                                    onVariantEnter: tt,
                                                                    onVariantExit: tr,
                                                                    overflowProps: tE,
                                                                    onTrackClick: t_,
                                                                }),
                                                        ],
                                                    }),
                                                tv &&
                                                    (0, n.jsx)("div", {
                                                        className: tX.Vs,
                                                        children: (0, n.jsxs)(p.e, {
                                                            wrap: !1,
                                                            className: tX.Ld,
                                                            fullWidth: !0,
                                                            children: [
                                                                !m &&
                                                                    (0, n.jsx)(tD, {
                                                                        skuId: e.skuId,
                                                                        cardRef: to,
                                                                        onClick: M,
                                                                        text: z,
                                                                        prioritizedCurrency: tn,
                                                                        onClickAnalytics: ta,
                                                                        onTrackClick: t_,
                                                                    }),
                                                                !g &&
                                                                    (0, n.jsx)(tG, {
                                                                        skuId: e.skuId,
                                                                        cardRef: to,
                                                                        onClick: U,
                                                                        icon: Y,
                                                                        prioritizedCurrency: tn,
                                                                        onClickAnalytics: ta,
                                                                        onTrackClick: t_,
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
    t0 = function (t) {
        let { skuId: e, ...r } = t,
            i = (0, H.Vm)(e),
            s = (0, m.A)(() => ({ cardId: (0, a.A)() })),
            l = (0, g.c)("product_card");
        return null != i && (e !== o.j.PREMIUM_TIER_2_1_DAY || l)
            ? (0, n.jsx)(f.R9, { newValue: s, children: (0, n.jsx)(tJ, { product: i, ...r }) })
            : null;
    };
