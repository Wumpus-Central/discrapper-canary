r.d(t, { A: () => e9 });
var n = r(627968),
    l = r(64700),
    i = r(503698),
    s = r.n(i),
    o = r(835245),
    a = r(612324),
    u = r(575593),
    c = r(334279),
    d = r(269115),
    f = r(890856),
    C = r(825484),
    _ = r(444927),
    p = r(793574),
    h = r(688810),
    E = r(713517),
    I = r(440938),
    g = r(161918),
    S = r(395856),
    A = r(503089),
    T = r(642160),
    R = r(597783),
    k = r(174459),
    m = r(298072),
    O = r(993408),
    v = r(623373),
    x = r(331884),
    y = r(652215),
    P = r(66455),
    F = r(562708),
    L = r(172218),
    j = r(139286),
    N = r(536572),
    b = r(268959),
    D = r(834730),
    U = r(561769),
    H = r(375708);
let w = function (e) {
    let { skuId: t, className: r } = e,
        l = (0, U.Vm)(t),
        i = (0, N.VG)(l),
        s = null != l && l.type === u.R.BUNDLE && l.items.length > 0;
    return (0, n.jsx)(D.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: s ? H.intl.format(H.t.UTc0ny, { count: l.items.length, productName: i }) : i,
    });
};
var V = r(947641),
    M = r(17928),
    B = r(778712),
    W = r(661531),
    G = r(287809),
    z = r(466459),
    K = r(139136),
    Y = r(395744),
    q = r(846957),
    $ = r(929283),
    Q = r(245068),
    X = r(761365),
    Z = r(721861);
function J(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function ee(e) {
    let { product: t, isCardHovered: r } = e,
        l = (0, v.YW)(t),
        { isPurchased: i, isPartiallyOwnedBundle: o } = (0, z.h)(t),
        a = l === u.R.PROFILE_EFFECT || l === u.R.PROFILE_FRAME || l === u.R.BUNDLE;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: s()(Z.mA, { [Z.zj]: (i || o) && !r, [Z.Ge]: a }),
                children: (0, n.jsx)(et, { product: t, isCardHovered: r }),
            }),
            i && (0, n.jsx)(er, { hidden: r }),
        ],
    });
}
function et(e) {
    let t,
        { product: r, isCardHovered: l } = e,
        i = (0, M.bG)([G.default], () => G.default.getCurrentUser()),
        s = (0, v.YW)(r),
        o =
            ((t = (0, m.Q)(r)),
            r?.type === u.R.VARIANTS_GROUP && null != r.variants && r.variants.length > t
                ? r.variants[t].items[0]
                : r.items[0]);
    switch (s) {
        case u.R.PROFILE_EFFECT:
            return (0, n.jsx)(K.A, { skuId: o.skuId, isHighlighted: l, removeSetHeight: !0, hideBackground: !0 });
        case u.R.PROFILE_FRAME:
            return (0, n.jsx)("div", { className: Z.pI, children: (0, n.jsx)(Y.A, { frame: o, filterLayer: J }) });
        case u.R.AVATAR_DECORATION:
            return (0, n.jsx)($.i, { item: o, user: i, isHighlighted: l, avatarSize: B._3.SIZE_120 });
        case u.R.NAMEPLATE:
            return (0, n.jsx)(X.A, { nameplate: o, user: i, isHighlighted: l });
        case u.R.BUNDLE:
            return (0, n.jsx)(Q.X, { product: r, user: i, isHighlighted: l });
        case u.R.EXTERNAL_SKU:
            return (0, n.jsx)(q.B, { product: r, animationState: l ? "on" : "off" });
        default:
            return null;
    }
}
function er(e) {
    let { hidden: t } = e;
    return (0, n.jsx)(V.r, {
        size: "custom",
        color: W.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: s()(Z.zo, { [Z.R]: t }),
    });
}
let en = function (e) {
    let { skuId: t, isCardHovered: r, overrideVariantIndex: l } = e,
        i = (0, U.Vm)(t),
        s = (0, m.Q)(i);
    if (null == i) return null;
    let o = (0, v.rb)(i, l ?? s);
    return (0, n.jsx)(ee, { product: o, isCardHovered: r });
};
var el = r(702841),
    ei = r(428262),
    es = r(13875),
    eo = r(740076),
    ea = r(219103),
    eu = r(525723),
    ec = r(57020),
    ed = r(380836);
function ef(e) {
    let { product: t, prioritizedCurrency: r } = e,
        i = (0, el.bG)([G.default], () => G.default.getCurrentUser()),
        s = ei.Ay.canUseCollectibles(i),
        o = (0, O.xM)(i),
        a = (0, es.Do)("ProductCardPriceInner") && t.type === u.R.PROFILE_FRAME,
        c = null != o || a,
        { isDisabled: d } = (0, eo.I)(t.skuId),
        { isPurchased: f, isPartiallyOwnedBundle: C } = (0, z.h)(t),
        _ = (0, O.G0)(t),
        p = (0, O.tt)(t),
        h = l.useMemo(() => (0, O.fT)(t, c), [t, c]),
        E = (0, eu.V_)(t),
        {
            checkoutEligiblePrices: I,
            hasSufficientOrbs: g,
            shouldCheckoutWithOrbs: S,
        } = (0, ec.F)({ product: t, hasShopDiscount: c, prioritizedCurrency: r, hasDiscountOffer: null != E });
    return d
        ? (0, n.jsx)(D.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: H.intl.string(H.t.wu4gyV),
          })
        : C
          ? (0, n.jsx)(D.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: H.intl.string(H.t.BEjTij),
            })
          : f && !(_ && !s)
            ? (0, n.jsx)(D.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: H.intl.string(H.t["6cfuDj"]),
              })
            : p
              ? (0, n.jsx)(D.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: H.intl.string(H.t.nBtvYB),
                })
              : _
                ? (0, n.jsx)(D.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: H.intl.string(H.t.rt69oo),
                  })
                : 0 === I.length
                  ? null
                  : (0, n.jsx)(ea.x, {
                        priceAmount: I[0].amount,
                        priceCurrency: I[0].currency,
                        discount: h,
                        discountIconConfig: c
                            ? { displayMode: "default", source: o ?? O.D0.NITRO, size: "sm" }
                            : void 0,
                        discountOfferAmount: E,
                        className: S && !g ? ed.c : void 0,
                        variant: "text-md/bold",
                    });
}
let eC = function (e) {
    let { skuId: t, prioritizedCurrency: r } = e,
        l = (0, U.Vm)(t),
        i = (0, m.Q)(l);
    if (null == l) return null;
    let s = (0, v.rb)(l, i);
    return (0, n.jsx)(ef, { product: s, prioritizedCurrency: r });
};
var e_ = r(821609),
    ep = r(44120),
    eh = r(465794),
    eE = r(757036),
    eI = r(206835),
    eg = r(106799),
    eS = r(652165),
    eA = r(662388),
    eT = r(4227),
    eR = r(450481),
    ek = r(395068),
    em = r(766172),
    eO = r(61750),
    ev = r(758836),
    ex = r(788868),
    ey = r(40577);
function eP(e) {
    let {
            product: t,
            cardRef: r,
            hasShopDiscount: l,
            analyticsLocations: i,
            selectedVariantIndex: s,
            hasDiscountOffer: o,
            discountOfferAmount: a,
            text: u,
            onTrackClick: c,
        } = e,
        d = (0, O.R8)(t, l, !1),
        f = (0, I.uM)()?.sessionId,
        C = o
            ? H.intl.formatToPlainString(H.t["5U5RB5"], { discountOfferAmount: a })
            : H.intl.formatToPlainString(H.t["cNSL/j"], { price: d });
    return (0, n.jsx)(e_.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(),
                c?.(ev.sH.BUY_WITH_FIAT),
                (0, ep.A)({
                    skuId: (0, em.Y)({ product: t, selectedVariantIndex: s }),
                    returnRef: r,
                    analyticsLocations: i,
                    discoverySessionId: f,
                });
        },
        text: u ?? C,
        fullWidth: !0,
    });
}
function eF(e) {
    let { text: t, onTrackClick: r } = e;
    return (0, n.jsx)(eh.A, {
        subscriptionTier: ex.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: t ?? H.intl.string(H.t.sEAnVH),
        onClick: (e) => {
            e.stopPropagation(), r?.(ev.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function eL(e) {
    let { handlePreviewButtonClick: t, text: r, onTrackClick: l } = e;
    return (0, n.jsx)(e_.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), l?.(ev.sH.VIEW_DETAILS), t(e);
        },
        text: r ?? H.intl.string(H.t.FdGl5A),
        fullWidth: !0,
    });
}
function ej(e) {
    let { handleUseNow: t, isApplying: r, text: l, onTrackClick: i } = e;
    return (0, n.jsx)(e_.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(ev.sH.USE_NOW), t();
        },
        loading: r,
        text: l ?? H.intl.string(H.t.MAS7uK),
        fullWidth: !0,
    });
}
function eN(e) {
    let { text: t, onTrackClick: r } = e,
        l = (0, eI.A)();
    return (0, n.jsx)(e_.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), r?.(ev.sH.EDIT_PROFILE), l();
        },
        text: t ?? H.intl.string(H.t["2p2aYz"]),
        fullWidth: !0,
    });
}
function eb(e) {
    let { skuId: t, onClick: r, text: l } = e;
    return (0, n.jsx)(e_.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), r(t);
        },
        text: l ?? H.intl.string(H.t.FdGl5A),
        fullWidth: !0,
    });
}
function eD(e) {
    let {
        product: t,
        isClaimPremiumProductDisabled: r,
        isClaiming: l,
        analyticsLocations: i,
        text: s,
        onClickAnalytics: o,
        onTrackClick: a,
    } = e;
    async function u() {
        o?.("claim premium product button"),
            a?.(ev.sH.ADD_TO_COLLECTION),
            await (0, eA.iJ)(t.skuId),
            (0, eO.A)({ product: t, analyticsLocations: i, purchaseType: ev.gs.PREMIUM_PURCHASE });
    }
    return (0, n.jsx)(e_.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), u();
        },
        disabled: r,
        loading: l,
        loadingStartedLabel: H.intl.string(H.t["TYw+9s"]),
        loadingFinishedLabel: H.intl.string(H.t.Pg1UP5),
        text: s ?? H.intl.string(H.t.zp6caO),
        fullWidth: !0,
    });
}
function eU(e) {
    let {
            product: t,
            checkoutEligiblePrices: r,
            analyticsLocations: l,
            selectedVariantIndex: i,
            text: s,
            onClickAnalytics: o,
            onTrackClick: a,
        } = e,
        u = (0, I.uM)()?.sessionId;
    return (0, n.jsx)(e_.$, {
        variant: "primary",
        text:
            s ??
            H.intl.format(H.t.JC15qj, {
                orbPrice: r[0].amount,
                orbIconHook: () => (0, n.jsx)(eg.A, { className: ey.f }),
            }),
        onClick: (e) => {
            e.stopPropagation(),
                o?.("claim with orbs button"),
                a?.(ev.sH.BUY_WITH_ORBS),
                (0, eS.B4)({
                    skuId: (0, em.Y)({ product: t, selectedVariantIndex: i }),
                    onComplete: (e) => {
                        (0, eA.gB)(),
                            (0, eO.A)({
                                product: t,
                                analyticsLocations: l,
                                itemConsumed: e?.entitlements?.[0]?.consumed,
                                purchaseType: ev.gs.ORB,
                            });
                    },
                    analyticsLocations: l,
                    discoverySessionId: u,
                });
        },
        "aria-label": H.intl.formatToPlainString(H.t.yi41qQ, { orbPrice: r[0].amount }),
        fullWidth: !0,
    });
}
function eH(e) {
    let { handlePreviewButtonClick: t, text: r, onTrackClick: l } = e;
    return (0, n.jsx)(e_.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), l?.(ev.sH.PAYMENT_OPTIONS), t(e);
        },
        text: r ?? H.intl.string(H.t.GpnHfH),
        fullWidth: !0,
    });
}
function ew(e) {
    let {
            product: t,
            cardRef: r,
            selectedVariantIndex: l,
            onClick: i,
            text: s,
            prioritizedCurrency: o,
            onClickAnalytics: a,
            onTrackClick: u,
        } = e,
        c = (0, ek.A)({ location: "ProductCardPrimaryCTAInner", product: t }),
        d = (0, el.bG)([G.default], () => G.default.getCurrentUser()),
        f = (0, eE.L)(ex.PremiumTypes.TIER_2),
        C = ei.Ay.canUseShopDiscounts(d),
        { isPurchased: _, isPartiallyOwnedBundle: E } = (0, z.h)(t),
        I = (0, O.G0)(t),
        g = (0, O.tt)(t),
        { isDisabled: S } = (0, eo.I)(t.skuId),
        A = (0, O.Zu)({ product: t, isPartiallyOwnedBundle: E, isPurchased: _ }),
        T = (0, eu.V_)(t),
        R = null != T,
        {
            shouldCheckoutWithOrbs: k,
            hasSufficientOrbs: m,
            checkoutEligiblePrices: v,
            isOrbExclusive: x,
        } = (0, ec.F)({ product: t, hasShopDiscount: C, prioritizedCurrency: o, hasDiscountOffer: R }),
        { analyticsLocations: y } = (0, h.Ay)(p.A.COLLECTIBLES_SHOP_CARD),
        P = (0, U.ql)(t, p.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, a),
        [F, L] = (0, el.yK)([eT.A], () => [
            eT.A.isClaiming === t.skuId,
            null != eT.A.isClaiming && eT.A.isClaiming !== t.skuId,
        ]),
        { handleUseNow: j, isApplying: N, canUseNow: b } = (0, eR.p)({ product: t });
    if (null != i) return (0, n.jsx)(eb, { onClick: i, skuId: t.skuId, text: s });
    if (I && !f && !g) return (0, n.jsx)(eF, { text: s, onTrackClick: u });
    if (!A || S) return (0, n.jsx)(eL, { handlePreviewButtonClick: P, text: s, onTrackClick: u });
    if (_)
        return b
            ? (0, n.jsx)(ej, { handleUseNow: j, isApplying: N, text: s, onTrackClick: u })
            : (0, n.jsx)(eN, { text: s, onTrackClick: u });
    if (c)
        return (0, n.jsx)(h.f5, {
            value: [...y, p.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, n.jsx)(eF, { text: H.intl.string(H.t["9wfL34"]), onTrackClick: u }),
        });
    if (I)
        return (0, n.jsx)(eD, {
            product: t,
            isClaimPremiumProductDisabled: L,
            isClaiming: F,
            analyticsLocations: y,
            text: s,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    if (k && m)
        return (0, n.jsx)(eU, {
            product: t,
            checkoutEligiblePrices: v,
            analyticsLocations: y,
            selectedVariantIndex: l,
            text: s,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    if (k && !m)
        if (v.length > 1) return (0, n.jsx)(eH, { handlePreviewButtonClick: P, text: s, onTrackClick: u });
        else return (0, n.jsx)(eL, { handlePreviewButtonClick: P, text: s, onTrackClick: u });
    return x
        ? (0, n.jsx)(eL, { handlePreviewButtonClick: P, text: s, onTrackClick: u })
        : (0, n.jsx)(eP, {
              product: t,
              cardRef: r,
              hasShopDiscount: C,
              analyticsLocations: y,
              selectedVariantIndex: l,
              hasDiscountOffer: R,
              discountOfferAmount: T,
              text: s,
              onTrackClick: u,
          });
}
let eV = function (e) {
    let { skuId: t, cardRef: r, onClick: l, text: i, prioritizedCurrency: s, onClickAnalytics: o, onTrackClick: a } = e,
        u = (0, U.Vm)(t),
        c = (0, m.Q)(u);
    if (null == u) return null;
    let d = (0, v.rb)(u, c);
    return (0, n.jsx)(ew, {
        product: d,
        cardRef: r,
        selectedVariantIndex: c,
        onClick: l,
        text: i,
        prioritizedCurrency: s,
        onClickAnalytics: o,
        onTrackClick: a,
    });
};
var eM = r(408278),
    eB = r(39623),
    eW = r(878112),
    eG = r(347722);
let ez = (e) => {
        let {
                product: t,
                selectedVariantIndex: r,
                cardRef: l,
                onClick: i,
                icon: s,
                prioritizedCurrency: o,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, g.Mk)(),
            d = c?.tab,
            f = (0, I.uM)(),
            C = (0, eG.X)(t, o),
            _ = (0, U.ql)(t, p.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, a);
        return null != i || null != s
            ? (0, n.jsx)(eM.K, {
                  variant: "primary",
                  "aria-label": H.intl.string(H.t.SKNnqq),
                  icon: s ?? eB.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != i ? i(t.skuId) : (u?.(ev.sH.OPEN_DETAILS), _(e));
                  },
              })
            : C
              ? (0, n.jsx)(I.R9, {
                    newValue: { pageCategory: d === ev.G2.HOME ? void 0 : f?.pageCategory },
                    children: (0, n.jsx)(eW.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: r,
                        returnRef: l,
                        tooltipDelay: 250,
                        onTrackClick: u,
                    }),
                })
              : null;
    },
    eK = function (e) {
        let {
                skuId: t,
                cardRef: r,
                onClick: l,
                icon: i,
                prioritizedCurrency: s,
                onClickAnalytics: o,
                onTrackClick: a,
            } = e,
            u = (0, U.Vm)(t),
            c = (0, m.Q)(u);
        if (null == u) return null;
        let d = (0, v.rb)(u, c);
        return (0, n.jsx)(ez, {
            product: d,
            cardRef: r,
            selectedVariantIndex: c,
            onClick: l,
            icon: i,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: a,
        });
    };
var eY = r(484469),
    eq = r(661847),
    e$ = r(139146),
    eQ = r(420960);
function eX(e) {
    let { product: t, selectedVariantIndex: r, isCardHovered: l, onTrackClick: i } = e;
    return (0, n.jsx)(e$.R, {
        product: t,
        selectedVariantIndex: r,
        isCardHovered: l,
        className: eQ.i,
        onTrackClick: i,
    });
}
let eZ = function (e) {
    let { skuId: t, isCardHovered: r, onTrackClick: l } = e,
        i = (0, U.Vm)(t),
        s = (0, m.Q)(i);
    return null == i
        ? null
        : (0, n.jsx)(eX, { product: i, selectedVariantIndex: s, isCardHovered: r, onTrackClick: l });
};
var eJ = r(935094),
    e0 = r(521e3),
    e2 = r(496569);
let e1 = l.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: i,
                hideVariantSwitcher: o,
                hidePrice: c,
                hidePrimaryCTA: _,
                hideSecondaryCTA: S,
                badgeOverride: A,
                skipLimitedTimeCheck: T,
                onClickCard: D,
                onClickPrimaryCTA: H,
                onClickSecondaryCTA: V,
                onMouseEnter: M,
                onMouseLeave: B,
                onFocus: W,
                onBlur: G,
                primaryCTAText: z,
                secondaryCTAIcon: K,
                productNameClassName: Y,
                badgeClassName: q,
                cardClassName: $,
                prioritizedCurrency: Q,
                aspectRatio: X,
                hideStaticBundleBackgroundAsset: Z,
            } = e,
            { previewingVariantIndex: J, handleEntering: ee, handleLeaving: et } = (0, eJ.f)(t),
            er = (0, U.gZ)() ?? Q,
            el = (0, g.Mk)(),
            ei = el?.tab,
            es = (0, I.uM)(),
            eo = l.useMemo(() => (0, U.UU)(t, ei, es), [t, ei, es]),
            ea = (0, N.s7)(t),
            eu = l.useId(),
            ec = l.useRef(null),
            { isHoveringOrFocusing: ed } = (0, E.A)(ec),
            ef = (0, e0.$c)(t.skuId),
            e_ = (function (e) {
                let t = (0, I.uM)(),
                    { analyticsLocations: r } = (0, h.Ay)(),
                    n = (0, m.Q)(e),
                    i = (0, x.o)(),
                    s = (0, O.xM)(i),
                    o = l.useRef(null),
                    a = l.useRef(!1),
                    u = l.useRef(n);
                l.useEffect(() => {
                    u.current = n;
                }, [n]);
                let c = l.useCallback(() => {
                        let n = (0, v.B1)(e);
                        (0, j.x)(
                            {
                                name: F.ImpressionNames.SHOP_CARD,
                                type: F.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: n ? (e.variants[u.current]?.skuId ?? e.skuId) : e.skuId,
                                    card_id: t?.cardId,
                                    shop_session_id: t?.sessionId,
                                    position_in_section: t?.tilePosition,
                                    product_sku_ids: (0, v.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                    location_stack: r,
                                    discount_source: (0, O.b_)(s),
                                },
                            },
                            !1,
                            !0,
                        );
                    }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r, s]),
                    d = (0, L.K)((e) => {
                        e
                            ? a.current ||
                              (null === o.current &&
                                  (o.current = setTimeout(() => {
                                      c(), (a.current = !0), (o.current = null);
                                  }, 1e3)))
                            : ((a.current = !1), null !== o.current && (clearTimeout(o.current), (o.current = null)));
                    }, 0.5);
                return (
                    l.useEffect(
                        () => () => {
                            null !== o.current && (clearTimeout(o.current), (o.current = null));
                        },
                        [],
                    ),
                    d
                );
            })(t),
            ep = (0, a.A)(ec, e_),
            { handleCardVisibilityChange: eh } = (0, R.Z)(t.skuId, ei === ev.G2.CATALOG ? "full" : ei),
            eE = (0, U.ql)(t, p.A.COLLECTIBLES_SHOP_CARD, eo),
            { analyticsLocations: eI } = (0, h.Ay)(),
            eg = (function (e) {
                let { product: t, analyticsLocations: r } = e,
                    { cardId: n, sessionId: i, tilePosition: s } = (0, I.uM)() ?? {},
                    o = (0, m.Q)(t),
                    a = (0, x.o)(),
                    u = (0, O.xM)(a);
                return l.useCallback(
                    (e, l) => {
                        k.default.track(y.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, v.B1)(t) ? (t.variants[l ?? o]?.skuId ?? t.skuId) : t.skuId,
                            cta: e,
                            shop_session_id: i,
                            card_id: n,
                            product_sku_ids: (0, v.v8)(t),
                            location_stack: r,
                            position_in_section: s,
                            discount_source: (0, O.b_)(u),
                        });
                    },
                    [t, o, i, n, r, s, u],
                );
            })({ product: t, analyticsLocations: eI }),
            eS = l.useCallback(
                (e) => {
                    null != D ? D(e) : (eg(ev.sH.OPEN_DETAILS), eE(e));
                },
                [eg, D, eE],
            );
        !(function (e, t) {
            let r = (0, I.uM)(),
                { analyticsLocations: n } = (0, h.Ay)(),
                i = (0, m.Q)(t),
                s = l.useRef(!1),
                o = (0, P.A)(r),
                a = (0, P.A)(t),
                u = (0, P.A)(i),
                c = (0, P.A)(n);
            l.useEffect(() => {
                if (!e) {
                    s.current = !1;
                    return;
                }
                if (s.current) return;
                let t = setTimeout(() => {
                    let e = o.current,
                        t = a.current,
                        r = (0, v.B1)(t);
                    k.default.track(y.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: r ? (t.variants[u.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, v.v8)(t),
                        location_stack: c.current,
                    }),
                        (s.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, o, a, u, c]);
        })(ed, t);
        let eA = t.type === u.R.BUNDLE && t.previewAssets?.fgStatic != null,
            eT = t.type === u.R.VARIANTS_GROUP && !o,
            eR = l.useMemo(() => ({ maxVariantsToShow: 4, onClick: eE }), [eE]),
            ek = t.type === u.R.BUNDLE && !Z,
            em = !_ || !S,
            eO = !(c && i) || eT,
            ex = eO || em,
            ey = em || eT;
        return (0, n.jsx)(d.L, {
            innerRef: ec,
            onChange: eh,
            threshold: 0,
            children: (0, n.jsx)(f.s, {
                ref: ep,
                onClick: eS,
                "aria-label": ea,
                "aria-describedby": eu,
                className: s()($, e2.ty, { [e2.yo]: ed }),
                onFocus: () => W?.(t.skuId),
                onBlur: () => G?.(t.skuId),
                onMouseEnter: () => M?.(t.skuId),
                onMouseLeave: () => B?.(t.skuId),
                children: (0, n.jsx)(e0.vf.Provider, {
                    value: ef ? ec : null,
                    children: (0, n.jsxs)("div", {
                        id: eu,
                        className: e2.qt,
                        style: { aspectRatio: X },
                        children: [
                            ek &&
                                t.previewAssets?.bgStatic != null &&
                                (0, n.jsx)("img", { className: e2.vD, src: t.previewAssets.bgStatic, alt: "" }),
                            (0, n.jsx)("div", {
                                className: s()(e2.Dq, { [e2.$r]: !i || eO || ey, [e2.T9]: eA }),
                                children: (0, n.jsx)(en, {
                                    skuId: t.skuId,
                                    isCardHovered: ed,
                                    overrideVariantIndex: J,
                                }),
                            }),
                            (0, n.jsxs)("div", {
                                className: e2.N1,
                                children: [
                                    (0, n.jsx)(b.A, {
                                        skuId: t.skuId,
                                        badgeOverride: A,
                                        className: q,
                                        prioritizedCurrency: er,
                                        skipLimitedTimeCheck: T,
                                    }),
                                    !r && (0, n.jsx)(eZ, { skuId: t.skuId, isCardHovered: ed, onTrackClick: eg }),
                                ],
                            }),
                            ex &&
                                (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)("div", { className: s()(e2.wY, { [e2.KY]: eA }) }),
                                        (0, n.jsxs)("div", {
                                            className: e2.xQ,
                                            children: [
                                                eO &&
                                                    (0, n.jsxs)("div", {
                                                        className: e2.xE,
                                                        children: [
                                                            !(i && c) &&
                                                                (0, n.jsxs)("div", {
                                                                    className: e2.Ly,
                                                                    children: [
                                                                        !i &&
                                                                            (0, n.jsx)(w, {
                                                                                skuId: t.skuId,
                                                                                className: s()(Y, e2.tZ),
                                                                            }),
                                                                        !c &&
                                                                            (0, n.jsx)("div", {
                                                                                className: e2.oh,
                                                                                children: (0, n.jsx)(eC, {
                                                                                    skuId: t.skuId,
                                                                                    prioritizedCurrency: er,
                                                                                }),
                                                                            }),
                                                                    ],
                                                                }),
                                                            eT &&
                                                                (0, n.jsx)(eq.A, {
                                                                    skuId: t.skuId,
                                                                    isCollapsed: !ed,
                                                                    onVariantEnter: ee,
                                                                    onVariantExit: et,
                                                                    overflowProps: eR,
                                                                    onTrackClick: eg,
                                                                }),
                                                        ],
                                                    }),
                                                em &&
                                                    (0, n.jsx)("div", {
                                                        className: e2.Vs,
                                                        children: (0, n.jsxs)(C.e, {
                                                            wrap: !1,
                                                            className: e2.Ld,
                                                            fullWidth: !0,
                                                            children: [
                                                                !_ &&
                                                                    (0, n.jsx)(eV, {
                                                                        skuId: t.skuId,
                                                                        cardRef: ec,
                                                                        onClick: H,
                                                                        text: z,
                                                                        prioritizedCurrency: er,
                                                                        onClickAnalytics: eo,
                                                                        onTrackClick: eg,
                                                                    }),
                                                                !S &&
                                                                    (0, n.jsx)(eK, {
                                                                        skuId: t.skuId,
                                                                        cardRef: ec,
                                                                        onClick: V,
                                                                        icon: K,
                                                                        prioritizedCurrency: er,
                                                                        onClickAnalytics: eo,
                                                                        onTrackClick: eg,
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
    e7 = (e) => {
        let t = (0, A.c)("product_card");
        return e === c.j.PREMIUM_TIER_2_1_DAY && !t;
    },
    e8 = (e) => {
        let { skuId: t, ...r } = e,
            l = (0, U.Vm)(t),
            i = (0, _.A)(() => ({ cardId: (0, o.A)() })),
            s = e7(t);
        return null == l || s
            ? null
            : (0, n.jsx)(I.R9, { newValue: i, children: (0, n.jsx)(e1, { product: l, ...r }) });
    },
    e6 = (e) => {
        let { skuId: t, ...r } = e,
            { state: i, product: s } = (0, T.I)(t, { needsCategory: !1, seedCategoryStore: !0 }),
            a = (0, _.A)(() => ({ cardId: (0, o.A)() })),
            u = e7(t),
            c = l.useContext(U.v3),
            d = l.useMemo(() => ({ ...c, productOverride: s ?? void 0, standalonePreview: !0 }), [c, s]);
        return u
            ? null
            : "loading" === i
              ? (0, n.jsx)(eY.A, {})
              : null == s
                ? null
                : (0, n.jsx)(I.R9, {
                      newValue: a,
                      children: (0, n.jsx)(U.v3.Provider, { value: d, children: (0, n.jsx)(e1, { product: s, ...r }) }),
                  });
    },
    e9 = (e) => ((0, S.$)("product_card") ? (0, n.jsx)(e6, { ...e }) : (0, n.jsx)(e8, { ...e }));
