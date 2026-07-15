n.d(t, { A: () => e6 });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(132500),
    o = n(612324),
    u = n(575593),
    c = n(334279),
    d = n(269115),
    p = n(890856),
    C = n(825484),
    I = n(444927),
    f = n(793574),
    g = n(688810),
    k = n(713517),
    A = n(440938),
    x = n(161918),
    m = n(395856),
    _ = n(503089),
    v = n(642160),
    h = n(597783),
    E = n(174459),
    R = n(298072),
    y = n(993408),
    T = n(623373),
    j = n(331884),
    b = n(652215),
    P = n(66455),
    L = n(562708),
    S = n(172218),
    O = n(139286),
    N = n(536572),
    V = n(268959),
    H = n(834730),
    M = n(561769),
    D = n(375708);
let B = function (e) {
    let { skuId: t, className: n } = e,
        i = (0, M.Vm)(t),
        s = (0, N.VG)(i),
        l = null != i && i.type === u.R.BUNDLE && i.items.length > 0;
    return (0, r.jsx)(H.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: n,
        lineClamp: 1,
        children: l ? D.intl.format(D.t.UTc0ny, { count: i.items.length, productName: s }) : s,
    });
};
var w = n(947641),
    U = n(17928),
    F = n(778712),
    G = n(661531),
    W = n(287809),
    z = n(466459),
    $ = n(139136),
    Y = n(395744),
    K = n(846957),
    Q = n(929283),
    q = n(245068),
    X = n(761365),
    Z = n(721861);
function J(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function ee(e) {
    let { product: t, isCardHovered: n } = e,
        i = (0, T.YW)(t),
        { isPurchased: s, isPartiallyOwnedBundle: a } = (0, z.h)(t),
        o = i === u.R.PROFILE_EFFECT || i === u.R.PROFILE_FRAME || i === u.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(Z.mA, { [Z.zj]: (s || a) && !n, [Z.Ge]: o }),
                children: (0, r.jsx)(et, { product: t, isCardHovered: n }),
            }),
            s && (0, r.jsx)(en, { hidden: n }),
        ],
    });
}
function et(e) {
    let t,
        { product: n, isCardHovered: i } = e,
        s = (0, U.bG)([W.default], () => W.default.getCurrentUser()),
        l = (0, T.YW)(n),
        a =
            ((t = (0, R.Q)(n)),
            n?.type === u.R.VARIANTS_GROUP && null != n.variants && n.variants.length > t
                ? n.variants[t].items[0]
                : n.items[0]);
    switch (l) {
        case u.R.PROFILE_EFFECT:
            return (0, r.jsx)($.A, { skuId: a.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case u.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: Z.pI, children: (0, r.jsx)(Y.A, { frame: a, filterLayer: J }) });
        case u.R.AVATAR_DECORATION:
            return (0, r.jsx)(Q.i, { item: a, user: s, isHighlighted: i, avatarSize: F._3.SIZE_120 });
        case u.R.NAMEPLATE:
            return (0, r.jsx)(X.A, { nameplate: a, user: s, isHighlighted: i });
        case u.R.BUNDLE:
            return (0, r.jsx)(q.X, { product: n, user: s, isHighlighted: i });
        case u.R.EXTERNAL_SKU:
            return (0, r.jsx)(K.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function en(e) {
    let { hidden: t } = e;
    return (0, r.jsx)(w.r, {
        size: "custom",
        color: G.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: l()(Z.zo, { [Z.R]: t }),
    });
}
let er = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, M.Vm)(t),
        l = (0, R.Q)(s);
    if (null == s) return null;
    let a = (0, T.rb)(s, i ?? l);
    return (0, r.jsx)(ee, { product: a, isCardHovered: n });
};
var ei = n(702841),
    es = n(428262),
    el = n(13875),
    ea = n(740076),
    eo = n(219103),
    eu = n(525723),
    ec = n(57020),
    ed = n(380836);
function ep(e) {
    let { product: t, prioritizedCurrency: n } = e,
        s = (0, ei.bG)([W.default], () => W.default.getCurrentUser()),
        l = es.Ay.canUseCollectibles(s),
        a = (0, y.xM)(s),
        o = (0, el.Do)("ProductCardPriceInner") && t.type === u.R.PROFILE_FRAME,
        c = null != a || o,
        { isDisabled: d } = (0, ea.I)(t.skuId),
        { isPurchased: p, isPartiallyOwnedBundle: C } = (0, z.h)(t),
        I = (0, y.G0)(t),
        f = (0, y.tt)(t),
        g = (0, eu.V_)(t),
        {
            checkoutEligiblePrices: k,
            hasSufficientOrbs: A,
            shouldCheckoutWithOrbs: x,
        } = (0, ec.F)({ product: t, hasShopDiscount: c, prioritizedCurrency: n, hasDiscountOffer: null != g }),
        m = k[0]?.currency,
        _ = i.useMemo(() => (0, y.fT)(t, c, m), [t, c, m]);
    return d
        ? (0, r.jsx)(H.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: D.intl.string(D.t.wu4gyV),
          })
        : C
          ? (0, r.jsx)(H.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: D.intl.string(D.t.BEjTij),
            })
          : p && !(I && !l)
            ? (0, r.jsx)(H.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: D.intl.string(D.t["6cfuDj"]),
              })
            : f
              ? (0, r.jsx)(H.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: D.intl.string(D.t.nBtvYB),
                })
              : I
                ? (0, r.jsx)(H.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: D.intl.string(D.t.rt69oo),
                  })
                : 0 === k.length
                  ? null
                  : (0, r.jsx)(eo.x, {
                        priceAmount: k[0].amount,
                        priceCurrency: k[0].currency,
                        discount: _,
                        discountIconConfig: c
                            ? { displayMode: "default", source: a ?? y.D0.NITRO, size: "sm" }
                            : void 0,
                        discountOfferAmount: g,
                        className: x && !A ? ed.c : void 0,
                        variant: "text-md/bold",
                    });
}
let eC = function (e) {
    let { skuId: t, prioritizedCurrency: n } = e,
        i = (0, M.Vm)(t),
        s = (0, R.Q)(i);
    if (null == i) return null;
    let l = (0, T.rb)(i, s);
    return (0, r.jsx)(ep, { product: l, prioritizedCurrency: n });
};
var eI = n(821609),
    ef = n(44120),
    eg = n(465794),
    ek = n(757036),
    eA = n(206835),
    ex = n(106799),
    em = n(652165),
    e_ = n(662388),
    ev = n(4227),
    eh = n(450481),
    eE = n(395068),
    eR = n(766172),
    ey = n(61750),
    eT = n(758836),
    ej = n(202541),
    eb = n(40577);
function eP(e) {
    let {
            product: t,
            cardRef: n,
            hasShopDiscount: i,
            analyticsLocations: s,
            selectedVariantIndex: l,
            hasDiscountOffer: a,
            discountOfferAmount: o,
            text: u,
            onTrackClick: c,
        } = e,
        d = (0, y.R8)(t, i, !1),
        p = (0, A.uM)()?.sessionId,
        C = a
            ? D.intl.formatToPlainString(D.t["5U5RB5"], { discountOfferAmount: o })
            : D.intl.formatToPlainString(D.t["cNSL/j"], { price: d });
    return (0, r.jsx)(eI.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(),
                c?.(eT.sH.BUY_WITH_FIAT),
                (0, ef.A)({
                    skuId: (0, eR.Y)({ product: t, selectedVariantIndex: l }),
                    returnRef: n,
                    analyticsLocations: s,
                    discoverySessionId: p,
                });
        },
        text: u ?? C,
        fullWidth: !0,
    });
}
function eL(e) {
    let { text: t, onTrackClick: n } = e;
    return (0, r.jsx)(eg.A, {
        subscriptionTier: ej.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: t ?? D.intl.string(D.t.sEAnVH),
        onClick: (e) => {
            e.stopPropagation(), n?.(eT.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function eS(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: i } = e;
    return (0, r.jsx)(eI.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(eT.sH.VIEW_DETAILS), t(e);
        },
        text: n ?? D.intl.string(D.t.FdGl5A),
        fullWidth: !0,
    });
}
function eO(e) {
    let { handleUseNow: t, isApplying: n, text: i, onTrackClick: s } = e;
    return (0, r.jsx)(eI.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), s?.(eT.sH.USE_NOW), t();
        },
        loading: n,
        text: i ?? D.intl.string(D.t.MAS7uK),
        fullWidth: !0,
    });
}
function eN(e) {
    let { text: t, onTrackClick: n } = e,
        i = (0, eA.A)();
    return (0, r.jsx)(eI.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n?.(eT.sH.EDIT_PROFILE), i();
        },
        text: t ?? D.intl.string(D.t["2p2aYz"]),
        fullWidth: !0,
    });
}
function eV(e) {
    let { skuId: t, onClick: n, text: i } = e;
    return (0, r.jsx)(eI.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n(t);
        },
        text: i ?? D.intl.string(D.t.FdGl5A),
        fullWidth: !0,
    });
}
function eH(e) {
    let {
        product: t,
        isClaimPremiumProductDisabled: n,
        isClaiming: i,
        analyticsLocations: s,
        text: l,
        onClickAnalytics: a,
        onTrackClick: o,
    } = e;
    async function u() {
        a?.("claim premium product button"),
            o?.(eT.sH.ADD_TO_COLLECTION),
            await (0, e_.iJ)(t.skuId),
            (0, ey.A)({ product: t, analyticsLocations: s, purchaseType: eT.gs.PREMIUM_PURCHASE });
    }
    return (0, r.jsx)(eI.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), u();
        },
        disabled: n,
        loading: i,
        loadingStartedLabel: D.intl.string(D.t["TYw+9s"]),
        loadingFinishedLabel: D.intl.string(D.t.Pg1UP5),
        text: l ?? D.intl.string(D.t.zp6caO),
        fullWidth: !0,
    });
}
function eM(e) {
    let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: i,
            selectedVariantIndex: s,
            text: l,
            onClickAnalytics: a,
            onTrackClick: o,
        } = e,
        u = (0, A.uM)()?.sessionId;
    return (0, r.jsx)(eI.$, {
        variant: "primary",
        text:
            l ??
            D.intl.format(D.t.JC15qj, {
                orbPrice: n[0].amount,
                orbIconHook: () => (0, r.jsx)(ex.A, { className: eb.f }),
            }),
        onClick: (e) => {
            e.stopPropagation(),
                a?.("claim with orbs button"),
                o?.(eT.sH.BUY_WITH_ORBS),
                (0, em.B4)({
                    skuId: (0, eR.Y)({ product: t, selectedVariantIndex: s }),
                    onComplete: (e) => {
                        (0, e_.gB)(),
                            (0, ey.A)({
                                product: t,
                                analyticsLocations: i,
                                itemConsumed: e?.entitlements?.[0]?.consumed,
                                purchaseType: eT.gs.ORB,
                            });
                    },
                    analyticsLocations: i,
                    discoverySessionId: u,
                });
        },
        "aria-label": D.intl.formatToPlainString(D.t.yi41qQ, { orbPrice: n[0].amount }),
        fullWidth: !0,
    });
}
function eD(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: i } = e;
    return (0, r.jsx)(eI.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(eT.sH.PAYMENT_OPTIONS), t(e);
        },
        text: n ?? D.intl.string(D.t.GpnHfH),
        fullWidth: !0,
    });
}
function eB(e) {
    let {
            product: t,
            cardRef: n,
            selectedVariantIndex: i,
            onClick: s,
            text: l,
            prioritizedCurrency: a,
            onClickAnalytics: o,
            onTrackClick: u,
        } = e,
        c = (0, eE.A)({ location: "ProductCardPrimaryCTAInner", product: t }),
        d = (0, ei.bG)([W.default], () => W.default.getCurrentUser()),
        p = (0, ek.L)(ej.PremiumTypes.TIER_2),
        C = es.Ay.canUseShopDiscounts(d),
        { isPurchased: I, isPartiallyOwnedBundle: k } = (0, z.h)(t),
        A = (0, y.G0)(t),
        x = (0, y.tt)(t),
        { isDisabled: m } = (0, ea.I)(t.skuId),
        _ = (0, y.Zu)({ product: t, isPartiallyOwnedBundle: k, isPurchased: I }),
        v = (0, eu.V_)(t),
        h = null != v,
        {
            shouldCheckoutWithOrbs: E,
            hasSufficientOrbs: R,
            checkoutEligiblePrices: T,
            isOrbExclusive: j,
        } = (0, ec.F)({ product: t, hasShopDiscount: C, prioritizedCurrency: a, hasDiscountOffer: h }),
        { analyticsLocations: b } = (0, g.Ay)(f.A.COLLECTIBLES_SHOP_CARD),
        P = (0, M.ql)(t, f.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [L, S] = (0, ei.yK)([ev.A], () => [
            ev.A.isClaiming === t.skuId,
            null != ev.A.isClaiming && ev.A.isClaiming !== t.skuId,
        ]),
        { handleUseNow: O, isApplying: N, canUseNow: V } = (0, eh.p)({ product: t });
    if (null != s) return (0, r.jsx)(eV, { onClick: s, skuId: t.skuId, text: l });
    if (A && !p && !x) return (0, r.jsx)(eL, { text: l, onTrackClick: u });
    if (!_ || m) return (0, r.jsx)(eS, { handlePreviewButtonClick: P, text: l, onTrackClick: u });
    if (I)
        return V
            ? (0, r.jsx)(eO, { handleUseNow: O, isApplying: N, text: l, onTrackClick: u })
            : (0, r.jsx)(eN, { text: l, onTrackClick: u });
    if (c)
        return (0, r.jsx)(g.f5, {
            value: [...b, f.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, r.jsx)(eL, { text: D.intl.string(D.t["9wfL34"]), onTrackClick: u }),
        });
    if (A)
        return (0, r.jsx)(eH, {
            product: t,
            isClaimPremiumProductDisabled: S,
            isClaiming: L,
            analyticsLocations: b,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (E && R)
        return (0, r.jsx)(eM, {
            product: t,
            checkoutEligiblePrices: T,
            analyticsLocations: b,
            selectedVariantIndex: i,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (E && !R)
        if (T.length > 1) return (0, r.jsx)(eD, { handlePreviewButtonClick: P, text: l, onTrackClick: u });
        else return (0, r.jsx)(eS, { handlePreviewButtonClick: P, text: l, onTrackClick: u });
    return j
        ? (0, r.jsx)(eS, { handlePreviewButtonClick: P, text: l, onTrackClick: u })
        : (0, r.jsx)(eP, {
              product: t,
              cardRef: n,
              hasShopDiscount: C,
              analyticsLocations: b,
              selectedVariantIndex: i,
              hasDiscountOffer: h,
              discountOfferAmount: v,
              text: l,
              onTrackClick: u,
          });
}
let ew = function (e) {
    let { skuId: t, cardRef: n, onClick: i, text: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = e,
        u = (0, M.Vm)(t),
        c = (0, R.Q)(u);
    if (null == u) return null;
    let d = (0, T.rb)(u, c);
    return (0, r.jsx)(eB, {
        product: d,
        cardRef: n,
        selectedVariantIndex: c,
        onClick: i,
        text: s,
        prioritizedCurrency: l,
        onClickAnalytics: a,
        onTrackClick: o,
    });
};
var eU = n(408278),
    eF = n(39623),
    eG = n(878112),
    eW = n(347722);
let ez = (e) => {
        let {
                product: t,
                selectedVariantIndex: n,
                cardRef: i,
                onClick: s,
                icon: l,
                prioritizedCurrency: a,
                onClickAnalytics: o,
                onTrackClick: u,
            } = e,
            c = (0, x.Mk)(),
            d = c?.tab,
            p = (0, A.uM)(),
            C = (0, eW.X)(t, a),
            I = (0, M.ql)(t, f.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o);
        return null != s || null != l
            ? (0, r.jsx)(eU.K, {
                  variant: "primary",
                  "aria-label": D.intl.string(D.t.SKNnqq),
                  icon: l ?? eF.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != s ? s(t.skuId) : (u?.(eT.sH.OPEN_DETAILS), I(e));
                  },
              })
            : C
              ? (0, r.jsx)(A.R9, {
                    newValue: { pageCategory: d === eT.G2.HOME ? void 0 : p?.pageCategory },
                    children: (0, r.jsx)(eG.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: n,
                        returnRef: i,
                        tooltipDelay: 250,
                        onTrackClick: u,
                    }),
                })
              : null;
    },
    e$ = function (e) {
        let {
                skuId: t,
                cardRef: n,
                onClick: i,
                icon: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: o,
            } = e,
            u = (0, M.Vm)(t),
            c = (0, R.Q)(u);
        if (null == u) return null;
        let d = (0, T.rb)(u, c);
        return (0, r.jsx)(ez, {
            product: d,
            cardRef: n,
            selectedVariantIndex: c,
            onClick: i,
            icon: s,
            prioritizedCurrency: l,
            onClickAnalytics: a,
            onTrackClick: o,
        });
    };
var eY = n(484469),
    eK = n(661847),
    eQ = n(139146),
    eq = n(420960);
function eX(e) {
    let { product: t, selectedVariantIndex: n, isCardHovered: i, onTrackClick: s } = e;
    return (0, r.jsx)(eQ.R, {
        product: t,
        selectedVariantIndex: n,
        isCardHovered: i,
        className: eq.i,
        onTrackClick: s,
    });
}
let eZ = function (e) {
    let { skuId: t, isCardHovered: n, onTrackClick: i } = e,
        s = (0, M.Vm)(t),
        l = (0, R.Q)(s);
    return null == s
        ? null
        : (0, r.jsx)(eX, { product: s, selectedVariantIndex: l, isCardHovered: n, onTrackClick: i });
};
var eJ = n(935094),
    e0 = n(521e3),
    e2 = n(496569);
let e7 = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: s,
                hideVariantSwitcher: a,
                hidePrice: c,
                hidePrimaryCTA: I,
                hideSecondaryCTA: m,
                badgeOverride: _,
                skipLimitedTimeCheck: v,
                onClickCard: H,
                onClickPrimaryCTA: D,
                onClickSecondaryCTA: w,
                onMouseEnter: U,
                onMouseLeave: F,
                onFocus: G,
                onBlur: W,
                primaryCTAText: z,
                secondaryCTAIcon: $,
                productNameClassName: Y,
                badgeClassName: K,
                cardClassName: Q,
                prioritizedCurrency: q,
                aspectRatio: X,
                hideStaticBundleBackgroundAsset: Z,
            } = e,
            { previewingVariantIndex: J, handleEntering: ee, handleLeaving: et } = (0, eJ.f)(t),
            en = (0, M.gZ)() ?? q,
            ei = (0, x.Mk)(),
            es = ei?.tab,
            el = (0, A.uM)(),
            ea = i.useMemo(() => (0, M.UU)(t, es, el), [t, es, el]),
            eo = (0, N.s7)(t),
            eu = i.useId(),
            ec = i.useRef(null),
            { isHoveringOrFocusing: ed } = (0, k.A)(ec),
            ep = (0, e0.$c)(t.skuId),
            eI = (function (e) {
                let t = (0, A.uM)(),
                    { analyticsLocations: n } = (0, g.Ay)(),
                    r = (0, R.Q)(e),
                    s = (0, j.o)(),
                    l = (0, y.xM)(s),
                    a = i.useRef(null),
                    o = i.useRef(!1),
                    u = i.useRef(r);
                i.useEffect(() => {
                    u.current = r;
                }, [r]);
                let c = i.useCallback(() => {
                        let r = (0, T.B1)(e);
                        (0, O.x)(
                            {
                                name: L.ImpressionNames.SHOP_CARD,
                                type: L.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: r ? (e.variants[u.current]?.skuId ?? e.skuId) : e.skuId,
                                    card_id: t?.cardId,
                                    shop_session_id: t?.sessionId,
                                    position_in_section: t?.tilePosition,
                                    product_sku_ids: (0, T.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                    location_stack: n,
                                    discount_source: (0, y.b_)(l),
                                },
                            },
                            !1,
                            !0,
                        );
                    }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, l]),
                    d = (0, S.K)((e) => {
                        e
                            ? o.current ||
                              (null === a.current &&
                                  (a.current = setTimeout(() => {
                                      c(), (o.current = !0), (a.current = null);
                                  }, 1e3)))
                            : ((o.current = !1), null !== a.current && (clearTimeout(a.current), (a.current = null)));
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
            })(t),
            ef = (0, o.A)(ec, eI),
            { handleCardVisibilityChange: eg } = (0, h.Z)(t.skuId, es === eT.G2.CATALOG ? "full" : es),
            ek = (0, M.ql)(t, f.A.COLLECTIBLES_SHOP_CARD, ea),
            { analyticsLocations: eA } = (0, g.Ay)(),
            ex = (function (e) {
                let { product: t, analyticsLocations: n } = e,
                    { cardId: r, sessionId: s, tilePosition: l } = (0, A.uM)() ?? {},
                    a = (0, R.Q)(t),
                    o = (0, j.o)(),
                    u = (0, y.xM)(o);
                return i.useCallback(
                    (e, i) => {
                        let o = (0, T.B1)(t) ? (t.variants[i ?? a]?.skuId ?? t.skuId) : t.skuId;
                        E.default.track(b.HAw.SHOP_CARD_CLICKED, {
                            sku_id: o,
                            cta: e,
                            shop_session_id: s,
                            card_id: r,
                            product_sku_ids: (0, T.v8)(t),
                            location_stack: n,
                            position_in_section: l,
                            discount_source: (0, y.b_)(u),
                        });
                    },
                    [t, a, s, r, n, l, u],
                );
            })({ product: t, analyticsLocations: eA }),
            em = i.useCallback(
                (e) => {
                    null != H ? H(e) : (ex(eT.sH.OPEN_DETAILS), ek(e));
                },
                [ex, H, ek],
            );
        !(function (e, t) {
            let n = (0, A.uM)(),
                { analyticsLocations: r } = (0, g.Ay)(),
                s = (0, R.Q)(t),
                l = i.useRef(!1),
                a = (0, P.A)(n),
                o = (0, P.A)(t),
                u = (0, P.A)(s),
                c = (0, P.A)(r);
            i.useEffect(() => {
                if (!e) {
                    l.current = !1;
                    return;
                }
                if (l.current) return;
                let t = setTimeout(() => {
                    let e = a.current,
                        t = o.current,
                        n = (0, T.B1)(t);
                    E.default.track(b.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: n ? (t.variants[u.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, T.v8)(t),
                        location_stack: c.current,
                    }),
                        (l.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, a, o, u, c]);
        })(ed, t);
        let e_ = t.type === u.R.BUNDLE && t.previewAssets?.fgStatic != null,
            ev = t.type === u.R.VARIANTS_GROUP && !a,
            eh = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: ek }), [ek]),
            eE = t.type === u.R.BUNDLE && !Z,
            eR = !I || !m,
            ey = !(c && s) || ev,
            ej = ey || eR,
            eb = eR || ev;
        return (0, r.jsx)(d.L, {
            innerRef: ec,
            onChange: eg,
            threshold: 0,
            children: (0, r.jsx)(p.s, {
                ref: ef,
                onClick: em,
                "aria-label": eo,
                "aria-describedby": eu,
                className: l()(Q, e2.ty, { [e2.yo]: ed }),
                onFocus: () => G?.(t.skuId),
                onBlur: () => W?.(t.skuId),
                onMouseEnter: () => U?.(t.skuId),
                onMouseLeave: () => F?.(t.skuId),
                children: (0, r.jsx)(e0.vf.Provider, {
                    value: ep ? ec : null,
                    children: (0, r.jsxs)("div", {
                        id: eu,
                        className: e2.qt,
                        style: { aspectRatio: X },
                        children: [
                            eE &&
                                t.previewAssets?.bgStatic != null &&
                                (0, r.jsx)("img", { className: e2.vD, src: t.previewAssets.bgStatic, alt: "" }),
                            (0, r.jsx)("div", {
                                className: l()(e2.Dq, { [e2.$r]: !s || ey || eb, [e2.T9]: e_ }),
                                children: (0, r.jsx)(er, {
                                    skuId: t.skuId,
                                    isCardHovered: ed,
                                    overrideVariantIndex: J,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: e2.N1,
                                children: [
                                    (0, r.jsx)(V.A, {
                                        skuId: t.skuId,
                                        badgeOverride: _,
                                        className: K,
                                        prioritizedCurrency: en,
                                        skipLimitedTimeCheck: v,
                                    }),
                                    !n && (0, r.jsx)(eZ, { skuId: t.skuId, isCardHovered: ed, onTrackClick: ex }),
                                ],
                            }),
                            ej &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: l()(e2.wY, { [e2.KY]: e_ }) }),
                                        (0, r.jsxs)("div", {
                                            className: e2.xQ,
                                            children: [
                                                ey &&
                                                    (0, r.jsxs)("div", {
                                                        className: e2.xE,
                                                        children: [
                                                            !(s && c) &&
                                                                (0, r.jsxs)("div", {
                                                                    className: e2.Ly,
                                                                    children: [
                                                                        !s &&
                                                                            (0, r.jsx)(B, {
                                                                                skuId: t.skuId,
                                                                                className: l()(Y, e2.tZ),
                                                                            }),
                                                                        !c &&
                                                                            (0, r.jsx)("div", {
                                                                                className: e2.oh,
                                                                                children: (0, r.jsx)(eC, {
                                                                                    skuId: t.skuId,
                                                                                    prioritizedCurrency: en,
                                                                                }),
                                                                            }),
                                                                    ],
                                                                }),
                                                            ev &&
                                                                (0, r.jsx)(eK.A, {
                                                                    skuId: t.skuId,
                                                                    isCollapsed: !ed,
                                                                    onVariantEnter: ee,
                                                                    onVariantExit: et,
                                                                    overflowProps: eh,
                                                                    onTrackClick: ex,
                                                                }),
                                                        ],
                                                    }),
                                                eR &&
                                                    (0, r.jsx)("div", {
                                                        className: e2.Vs,
                                                        children: (0, r.jsxs)(C.e, {
                                                            wrap: !1,
                                                            className: e2.Ld,
                                                            fullWidth: !0,
                                                            children: [
                                                                !I &&
                                                                    (0, r.jsx)(ew, {
                                                                        skuId: t.skuId,
                                                                        cardRef: ec,
                                                                        onClick: D,
                                                                        text: z,
                                                                        prioritizedCurrency: en,
                                                                        onClickAnalytics: ea,
                                                                        onTrackClick: ex,
                                                                    }),
                                                                !m &&
                                                                    (0, r.jsx)(e$, {
                                                                        skuId: t.skuId,
                                                                        cardRef: ec,
                                                                        onClick: w,
                                                                        icon: $,
                                                                        prioritizedCurrency: en,
                                                                        onClickAnalytics: ea,
                                                                        onTrackClick: ex,
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
    e1 = (e) => {
        let t = (0, _.c)("product_card");
        return e === c.j.PREMIUM_TIER_2_1_DAY && !t;
    },
    e8 = (e) => {
        let { skuId: t, ...n } = e,
            i = (0, M.Vm)(t),
            s = (0, I.A)(() => ({ cardId: (0, a.A)() })),
            l = e1(t);
        return null == i || l
            ? null
            : (0, r.jsx)(A.R9, { newValue: s, children: (0, r.jsx)(e7, { product: i, ...n }) });
    },
    e5 = (e) => {
        let { skuId: t, ...n } = e,
            { state: s, product: l } = (0, v.I)(t, { needsCategory: !1, seedCategoryStore: !0 }),
            o = (0, I.A)(() => ({ cardId: (0, a.A)() })),
            u = e1(t),
            c = i.useContext(M.v3),
            d = i.useMemo(() => ({ ...c, productOverride: l ?? void 0, standalonePreview: !0 }), [c, l]);
        return u
            ? null
            : "loading" === s
              ? (0, r.jsx)(eY.A, {})
              : null == l
                ? null
                : (0, r.jsx)(A.R9, {
                      newValue: o,
                      children: (0, r.jsx)(M.v3.Provider, { value: d, children: (0, r.jsx)(e7, { product: l, ...n }) }),
                  });
    },
    e6 = (e) => ((0, m.$)("product_card") ? (0, r.jsx)(e5, { ...e }) : (0, r.jsx)(e8, { ...e }));
