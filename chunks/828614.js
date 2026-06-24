n.d(e, { A: () => t0 });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(835245),
    u = n(612324),
    c = n(575593),
    o = n(334279),
    d = n(269115),
    k = n(890856),
    p = n(825484),
    m = n(444927),
    x = n(793574),
    C = n(688810),
    I = n(713517),
    f = n(440938),
    _ = n(161918),
    g = n(503089),
    A = n(597783),
    h = n(174459),
    E = n(298072),
    T = n(993408),
    j = n(623373),
    v = n(331884),
    y = n(652215),
    R = n(66455),
    P = n(562708),
    L = n(172218),
    N = n(139286),
    O = n(536572),
    S = n(268959),
    b = n(834730),
    H = n(561769),
    V = n(375708);
let B = function (t) {
    let { skuId: e, className: n } = t,
        i = (0, H.Vm)(e),
        s = (0, O.VG)(i),
        l = null != i && i.type === c.R.BUNDLE && i.items.length > 0;
    return (0, r.jsx)(b.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: n,
        lineClamp: 1,
        children: l ? V.intl.format(V.t.UTc0ny, { count: i.items.length, productName: s }) : s,
    });
};
var D = n(947641),
    M = n(17928),
    U = n(778712),
    w = n(661531),
    F = n(287809),
    W = n(466459),
    G = n(139136),
    z = n(395744),
    Y = n(846957),
    Q = n(929283),
    K = n(245068),
    $ = n(761365),
    q = n(721861);
function Z(t) {
    let { responsive: e } = t;
    return !0 !== e;
}
function X(t) {
    let { product: e, isCardHovered: n } = t,
        i = (0, j.YW)(e),
        { isPurchased: s, isPartiallyOwnedBundle: a } = (0, W.h)(e),
        u = i === c.R.PROFILE_EFFECT || i === c.R.PROFILE_FRAME || i === c.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(q.mA, { [q.zj]: (s || a) && !n, [q.Ge]: u }),
                children: (0, r.jsx)(J, { product: e, isCardHovered: n }),
            }),
            s && (0, r.jsx)(tt, { hidden: n }),
        ],
    });
}
function J(t) {
    let e,
        { product: n, isCardHovered: i } = t,
        s = (0, M.bG)([F.default], () => F.default.getCurrentUser()),
        l = (0, j.YW)(n),
        a =
            ((e = (0, E.Q)(n)),
            n?.type === c.R.VARIANTS_GROUP && null != n.variants && n.variants.length > e
                ? n.variants[e].items[0]
                : n.items[0]);
    switch (l) {
        case c.R.PROFILE_EFFECT:
            return (0, r.jsx)(G.A, { skuId: a.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case c.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: q.pI, children: (0, r.jsx)(z.A, { frame: a, filterLayer: Z }) });
        case c.R.AVATAR_DECORATION:
            return (0, r.jsx)(Q.i, { item: a, user: s, isHighlighted: i, avatarSize: U._3.SIZE_120 });
        case c.R.NAMEPLATE:
            return (0, r.jsx)($.A, { nameplate: a, user: s, isHighlighted: i });
        case c.R.BUNDLE:
            return (0, r.jsx)(K.X, { product: n, user: s, isHighlighted: i });
        case c.R.EXTERNAL_SKU:
            return (0, r.jsx)(Y.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function tt(t) {
    let { hidden: e } = t;
    return (0, r.jsx)(D.r, {
        size: "custom",
        color: w.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: l()(q.zo, { [q.R]: e }),
    });
}
let te = function (t) {
    let { skuId: e, isCardHovered: n, overrideVariantIndex: i } = t,
        s = (0, H.Vm)(e),
        l = (0, E.Q)(s);
    if (null == s) return null;
    let a = (0, j.rb)(s, i ?? l);
    return (0, r.jsx)(X, { product: a, isCardHovered: n });
};
var tn = n(702841),
    tr = n(428262),
    ti = n(13875),
    ts = n(740076),
    tl = n(219103),
    ta = n(525723),
    tu = n(57020),
    tc = n(380836);
function to(t) {
    let { product: e, prioritizedCurrency: n } = t,
        s = (0, tn.bG)([F.default], () => F.default.getCurrentUser()),
        l = tr.Ay.canUseCollectibles(s),
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
        } = (0, tu.F)({ product: e, hasShopDiscount: o, prioritizedCurrency: n, hasDiscountOffer: null != I });
    return d
        ? (0, r.jsx)(b.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: V.intl.string(V.t.wu4gyV),
          })
        : p
          ? (0, r.jsx)(b.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: V.intl.string(V.t.BEjTij),
            })
          : k && !(m && !l)
            ? (0, r.jsx)(b.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: V.intl.string(V.t["6cfuDj"]),
              })
            : x
              ? (0, r.jsx)(b.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: V.intl.string(V.t.nBtvYB),
                })
              : m
                ? (0, r.jsx)(b.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: V.intl.string(V.t.rt69oo),
                  })
                : 0 === f.length
                  ? null
                  : (0, r.jsx)(tl.x, {
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
    let { skuId: e, prioritizedCurrency: n } = t,
        i = (0, H.Vm)(e),
        s = (0, E.Q)(i);
    if (null == i) return null;
    let l = (0, j.rb)(i, s);
    return (0, r.jsx)(to, { product: l, prioritizedCurrency: n });
};
var tk = n(821609),
    tp = n(44120),
    tm = n(465794),
    tx = n(757036),
    tC = n(206835),
    tI = n(106799),
    tf = n(652165),
    t_ = n(564064),
    tg = n(4227),
    tA = n(450481),
    th = n(395068),
    tE = n(766172),
    tT = n(61750),
    tj = n(758836),
    tv = n(788868),
    ty = n(40577);
function tR(t) {
    let {
            product: e,
            cardRef: n,
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
    return (0, r.jsx)(tk.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(),
                o?.(tj.sH.BUY_WITH_FIAT),
                (0, tp.A)({
                    skuId: (0, tE.Y)({ product: e, selectedVariantIndex: l }),
                    returnRef: n,
                    analyticsLocations: s,
                    discoverySessionId: k,
                });
        },
        text: c ?? p,
        fullWidth: !0,
    });
}
function tP(t) {
    let { text: e, onTrackClick: n } = t;
    return (0, r.jsx)(tm.A, {
        subscriptionTier: tv.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: e ?? V.intl.string(V.t.sEAnVH),
        onClick: (t) => {
            t.stopPropagation(), n?.(tj.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function tL(t) {
    let { handlePreviewButtonClick: e, text: n, onTrackClick: i } = t;
    return (0, r.jsx)(tk.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), i?.(tj.sH.VIEW_DETAILS), e(t);
        },
        text: n ?? V.intl.string(V.t.FdGl5A),
        fullWidth: !0,
    });
}
function tN(t) {
    let { handleUseNow: e, isApplying: n, text: i, onTrackClick: s } = t;
    return (0, r.jsx)(tk.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), s?.(tj.sH.USE_NOW), e();
        },
        loading: n,
        text: i ?? V.intl.string(V.t.MAS7uK),
        fullWidth: !0,
    });
}
function tO(t) {
    let { text: e, onTrackClick: n } = t,
        i = (0, tC.A)();
    return (0, r.jsx)(tk.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), n?.(tj.sH.EDIT_PROFILE), i();
        },
        text: e ?? V.intl.string(V.t["2p2aYz"]),
        fullWidth: !0,
    });
}
function tS(t) {
    let { skuId: e, onClick: n, text: i } = t;
    return (0, r.jsx)(tk.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), n(e);
        },
        text: i ?? V.intl.string(V.t.FdGl5A),
        fullWidth: !0,
    });
}
function tb(t) {
    let {
        product: e,
        isClaimPremiumProductDisabled: n,
        isClaiming: i,
        analyticsLocations: s,
        text: l,
        onClickAnalytics: a,
        onTrackClick: u,
    } = t;
    async function c() {
        a?.("claim premium product button"),
            u?.(tj.sH.ADD_TO_COLLECTION),
            await (0, t_.iJ)(e.skuId),
            (0, tT.A)({ product: e, analyticsLocations: s, purchaseType: tj.gs.PREMIUM_PURCHASE });
    }
    return (0, r.jsx)(tk.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), c();
        },
        disabled: n,
        loading: i,
        loadingStartedLabel: V.intl.string(V.t["TYw+9s"]),
        loadingFinishedLabel: V.intl.string(V.t.Pg1UP5),
        text: l ?? V.intl.string(V.t.zp6caO),
        fullWidth: !0,
    });
}
function tH(t) {
    let {
            product: e,
            checkoutEligiblePrices: n,
            analyticsLocations: i,
            selectedVariantIndex: s,
            text: l,
            onClickAnalytics: a,
            onTrackClick: u,
        } = t,
        c = (0, f.uM)()?.sessionId;
    return (0, r.jsx)(tk.$, {
        variant: "primary",
        text:
            l ??
            V.intl.format(V.t.JC15qj, {
                orbPrice: n[0].amount,
                orbIconHook: () => (0, r.jsx)(tI.A, { className: ty.f }),
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
        "aria-label": V.intl.formatToPlainString(V.t.yi41qQ, { orbPrice: n[0].amount }),
        fullWidth: !0,
    });
}
function tV(t) {
    let { handlePreviewButtonClick: e, text: n, onTrackClick: i } = t;
    return (0, r.jsx)(tk.$, {
        variant: "primary",
        onClick: (t) => {
            t.stopPropagation(), i?.(tj.sH.PAYMENT_OPTIONS), e(t);
        },
        text: n ?? V.intl.string(V.t.GpnHfH),
        fullWidth: !0,
    });
}
function tB(t) {
    let {
            product: e,
            cardRef: n,
            selectedVariantIndex: i,
            onClick: s,
            text: l,
            prioritizedCurrency: a,
            onClickAnalytics: u,
            onTrackClick: c,
        } = t,
        o = (0, th.A)({ location: "ProductCardPrimaryCTAInner", product: e }),
        d = (0, tn.bG)([F.default], () => F.default.getCurrentUser()),
        k = (0, tx.L)(tv.PremiumTypes.TIER_2),
        p = tr.Ay.canUseShopDiscounts(d),
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
        [N, O] = (0, tn.yK)([tg.A], () => [
            tg.A.isClaiming === e.skuId,
            null != tg.A.isClaiming && tg.A.isClaiming !== e.skuId,
        ]),
        { handleUseNow: S, isApplying: b, canUseNow: B } = (0, tA.p)({ product: e });
    if (null != s) return (0, r.jsx)(tS, { onClick: s, skuId: e.skuId, text: l });
    if (f && !k && !_) return (0, r.jsx)(tP, { text: l, onTrackClick: c });
    if (!A || g) return (0, r.jsx)(tL, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
    if (m)
        return B
            ? (0, r.jsx)(tN, { handleUseNow: S, isApplying: b, text: l, onTrackClick: c })
            : (0, r.jsx)(tO, { text: l, onTrackClick: c });
    if (o)
        return (0, r.jsx)(C.f5, {
            value: [...P, x.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, r.jsx)(tP, { text: V.intl.string(V.t["9wfL34"]), onTrackClick: c }),
        });
    if (f)
        return (0, r.jsx)(tb, {
            product: e,
            isClaimPremiumProductDisabled: O,
            isClaiming: N,
            analyticsLocations: P,
            text: l,
            onClickAnalytics: u,
            onTrackClick: c,
        });
    if (j && v)
        return (0, r.jsx)(tH, {
            product: e,
            checkoutEligiblePrices: y,
            analyticsLocations: P,
            selectedVariantIndex: i,
            text: l,
            onClickAnalytics: u,
            onTrackClick: c,
        });
    if (j && !v)
        if (y.length > 1) return (0, r.jsx)(tV, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
        else return (0, r.jsx)(tL, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
    return R
        ? (0, r.jsx)(tL, { handlePreviewButtonClick: L, text: l, onTrackClick: c })
        : (0, r.jsx)(tR, {
              product: e,
              cardRef: n,
              hasShopDiscount: p,
              analyticsLocations: P,
              selectedVariantIndex: i,
              hasDiscountOffer: E,
              discountOfferAmount: h,
              text: l,
              onTrackClick: c,
          });
}
let tD = function (t) {
    let { skuId: e, cardRef: n, onClick: i, text: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: u } = t,
        c = (0, H.Vm)(e),
        o = (0, E.Q)(c);
    if (null == c) return null;
    let d = (0, j.rb)(c, o);
    return (0, r.jsx)(tB, {
        product: d,
        cardRef: n,
        selectedVariantIndex: o,
        onClick: i,
        text: s,
        prioritizedCurrency: l,
        onClickAnalytics: a,
        onTrackClick: u,
    });
};
var tM = n(408278),
    tU = n(39623),
    tw = n(878112),
    tF = n(347722);
let tW = (t) => {
        let {
                product: e,
                selectedVariantIndex: n,
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
            ? (0, r.jsx)(tM.K, {
                  variant: "primary",
                  "aria-label": V.intl.string(V.t.SKNnqq),
                  icon: l ?? tU.b,
                  onClick: (t) => {
                      t.stopPropagation(), null != s ? s(e.skuId) : (c?.(tj.sH.OPEN_DETAILS), m(t));
                  },
              })
            : p
              ? (0, r.jsx)(f.R9, {
                    newValue: { pageCategory: d === tj.G2.HOME ? void 0 : k?.pageCategory },
                    children: (0, r.jsx)(tw.A, {
                        primary: !0,
                        product: e,
                        selectedVariantIndex: n,
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
                cardRef: n,
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
        return (0, r.jsx)(tW, {
            product: d,
            cardRef: n,
            selectedVariantIndex: o,
            onClick: i,
            icon: s,
            prioritizedCurrency: l,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var tz = n(661847),
    tY = n(139146),
    tQ = n(420960);
function tK(t) {
    let { product: e, selectedVariantIndex: n, isCardHovered: i, onTrackClick: s } = t;
    return (0, r.jsx)(tY.R, {
        product: e,
        selectedVariantIndex: n,
        isCardHovered: i,
        className: tQ.i,
        onTrackClick: s,
    });
}
let t$ = function (t) {
    let { skuId: e, isCardHovered: n, onTrackClick: i } = t,
        s = (0, H.Vm)(e),
        l = (0, E.Q)(s);
    return null == s
        ? null
        : (0, r.jsx)(tK, { product: s, selectedVariantIndex: l, isCardHovered: n, onTrackClick: i });
};
var tq = n(935094),
    tZ = n(521e3),
    tX = n(496569);
let tJ = i.memo(function (t) {
        let {
                product: e,
                hideWishlistButton: n,
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
            { previewingVariantIndex: J, handleEntering: tt, handleLeaving: tn } = (0, tq.f)(e),
            tr = (0, H.gZ)() ?? q,
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
                    { analyticsLocations: n } = (0, C.Ay)(),
                    r = (0, E.Q)(t),
                    s = (0, v.o)(),
                    l = (0, T.xM)(s),
                    a = i.useRef(null),
                    u = i.useRef(!1),
                    c = i.useRef(r);
                i.useEffect(() => {
                    c.current = r;
                }, [r]);
                let o = i.useCallback(() => {
                        let r = (0, j.B1)(t);
                        (0, N.x)(
                            {
                                name: P.ImpressionNames.SHOP_CARD,
                                type: P.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: r ? (t.variants[c.current]?.skuId ?? t.skuId) : t.skuId,
                                    card_id: e?.cardId,
                                    shop_session_id: e?.sessionId,
                                    position_in_section: e?.tilePosition,
                                    product_sku_ids: (0, j.B1)(t) ? t.variants.map((t) => t.skuId) : [t.skuId],
                                    location_stack: n,
                                    discount_source: (0, T.b_)(l),
                                },
                            },
                            !1,
                            !0,
                        );
                    }, [t, e?.cardId, e?.sessionId, e?.tilePosition, n, l]),
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
                let { product: e, analyticsLocations: n } = t,
                    { cardId: r, sessionId: s, tilePosition: l } = (0, f.uM)() ?? {},
                    a = (0, E.Q)(e),
                    u = (0, v.o)(),
                    c = (0, T.xM)(u);
                return i.useCallback(
                    (t, i) => {
                        h.default.track(y.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, j.B1)(e) ? (e.variants[i ?? a]?.skuId ?? e.skuId) : e.skuId,
                            cta: t,
                            shop_session_id: s,
                            card_id: r,
                            product_sku_ids: (0, j.v8)(e),
                            location_stack: n,
                            position_in_section: l,
                            discount_source: (0, T.b_)(c),
                        });
                    },
                    [e, a, s, r, n, l, c],
                );
            })({ product: e, analyticsLocations: tf }),
            tg = i.useCallback(
                (t) => {
                    null != D ? D(t) : (t_(tj.sH.OPEN_DETAILS), tI(t));
                },
                [t_, D, tI],
            );
        !(function (t, e) {
            let n = (0, f.uM)(),
                { analyticsLocations: r } = (0, C.Ay)(),
                s = (0, E.Q)(e),
                l = i.useRef(!1),
                a = (0, R.A)(n),
                u = (0, R.A)(e),
                c = (0, R.A)(s),
                o = (0, R.A)(r);
            i.useEffect(() => {
                if (!t) {
                    l.current = !1;
                    return;
                }
                if (l.current) return;
                let e = setTimeout(() => {
                    let t = a.current,
                        e = u.current,
                        n = (0, j.B1)(e);
                    h.default.track(y.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: t?.sessionId,
                        sku_id: n ? (e.variants[c.current]?.skuId ?? e.skuId) : e.skuId,
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
        return (0, r.jsx)(d.L, {
            innerRef: to,
            onChange: tC,
            threshold: 0,
            children: (0, r.jsx)(k.s, {
                ref: tx,
                onClick: tg,
                "aria-label": tu,
                "aria-describedby": tc,
                className: l()($, tX.ty, { [tX.yo]: tk }),
                onFocus: () => W?.(e.skuId),
                onBlur: () => G?.(e.skuId),
                onMouseEnter: () => w?.(e.skuId),
                onMouseLeave: () => F?.(e.skuId),
                children: (0, r.jsx)(tZ.vf.Provider, {
                    value: tp ? to : null,
                    children: (0, r.jsxs)("div", {
                        id: tc,
                        className: tX.qt,
                        style: { aspectRatio: Z },
                        children: [
                            tT &&
                                e.previewAssets?.bgStatic != null &&
                                (0, r.jsx)("img", { className: tX.vD, src: e.previewAssets.bgStatic, alt: "" }),
                            (0, r.jsx)("div", {
                                className: l()(tX.Dq, { [tX.$r]: !s || ty || tP, [tX.T9]: tA }),
                                children: (0, r.jsx)(te, {
                                    skuId: e.skuId,
                                    isCardHovered: tk,
                                    overrideVariantIndex: J,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: tX.N1,
                                children: [
                                    (0, r.jsx)(S.A, {
                                        skuId: e.skuId,
                                        badgeOverride: b,
                                        className: K,
                                        prioritizedCurrency: tr,
                                        skipLimitedTimeCheck: V,
                                    }),
                                    !n && (0, r.jsx)(t$, { skuId: e.skuId, isCardHovered: tk, onTrackClick: t_ }),
                                ],
                            }),
                            tR &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: l()(tX.wY, { [tX.KY]: tA }) }),
                                        (0, r.jsxs)("div", {
                                            className: tX.xQ,
                                            children: [
                                                ty &&
                                                    (0, r.jsxs)("div", {
                                                        className: tX.xE,
                                                        children: [
                                                            !(s && o) &&
                                                                (0, r.jsxs)("div", {
                                                                    className: tX.Ly,
                                                                    children: [
                                                                        !s &&
                                                                            (0, r.jsx)(B, {
                                                                                skuId: e.skuId,
                                                                                className: l()(Q, tX.tZ),
                                                                            }),
                                                                        !o &&
                                                                            (0, r.jsx)("div", {
                                                                                className: tX.oh,
                                                                                children: (0, r.jsx)(td, {
                                                                                    skuId: e.skuId,
                                                                                    prioritizedCurrency: tr,
                                                                                }),
                                                                            }),
                                                                    ],
                                                                }),
                                                            th &&
                                                                (0, r.jsx)(tz.A, {
                                                                    skuId: e.skuId,
                                                                    isCollapsed: !tk,
                                                                    onVariantEnter: tt,
                                                                    onVariantExit: tn,
                                                                    overflowProps: tE,
                                                                    onTrackClick: t_,
                                                                }),
                                                        ],
                                                    }),
                                                tv &&
                                                    (0, r.jsx)("div", {
                                                        className: tX.Vs,
                                                        children: (0, r.jsxs)(p.e, {
                                                            wrap: !1,
                                                            className: tX.Ld,
                                                            fullWidth: !0,
                                                            children: [
                                                                !m &&
                                                                    (0, r.jsx)(tD, {
                                                                        skuId: e.skuId,
                                                                        cardRef: to,
                                                                        onClick: M,
                                                                        text: z,
                                                                        prioritizedCurrency: tr,
                                                                        onClickAnalytics: ta,
                                                                        onTrackClick: t_,
                                                                    }),
                                                                !g &&
                                                                    (0, r.jsx)(tG, {
                                                                        skuId: e.skuId,
                                                                        cardRef: to,
                                                                        onClick: U,
                                                                        icon: Y,
                                                                        prioritizedCurrency: tr,
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
        let { skuId: e, ...n } = t,
            i = (0, H.Vm)(e),
            s = (0, m.A)(() => ({ cardId: (0, a.A)() })),
            l = (0, g.c)("product_card");
        return null != i && (e !== o.j.PREMIUM_TIER_2_1_DAY || l)
            ? (0, r.jsx)(f.R9, { newValue: s, children: (0, r.jsx)(tJ, { product: i, ...n }) })
            : null;
    };
