n.d(t, { A: () => e8 });
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
    f = n(444927),
    I = n(793574),
    g = n(688810),
    x = n(713517),
    m = n(440938),
    A = n(161918),
    k = n(395856),
    _ = n(503089),
    v = n(642160),
    h = n(597783),
    E = n(174459),
    R = n(298072),
    y = n(993408),
    j = n(623373),
    T = n(331884),
    b = n(652215),
    P = n(66455),
    L = n(562708),
    S = n(172218),
    O = n(139286),
    N = n(536572),
    V = n(268959),
    M = n(834730),
    D = n(561769),
    H = n(375708);
let B = function (e) {
    let { skuId: t, className: n } = e,
        i = (0, D.Vm)(t),
        s = (0, N.VG)(i),
        l = null != i && i.type === u.R.BUNDLE && i.items.length > 0;
    return (0, r.jsx)(M.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: n,
        lineClamp: 1,
        children: l ? H.intl.format(H.t.UTc0ny, { count: i.items.length, productName: s }) : s,
    });
};
var w = n(947641),
    F = n(17928),
    U = n(778712),
    W = n(661531),
    G = n(287809),
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
        i = (0, j.YW)(t),
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
        s = (0, F.bG)([G.default], () => G.default.getCurrentUser()),
        l = (0, j.YW)(n),
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
            return (0, r.jsx)(Q.i, { item: a, user: s, isHighlighted: i, avatarSize: U._3.SIZE_120 });
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
        color: W.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: l()(Z.zo, { [Z.R]: t }),
    });
}
let er = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, D.Vm)(t),
        l = (0, R.Q)(s);
    if (null == s) return null;
    let a = (0, j.rb)(s, i ?? l);
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
        s = (0, ei.bG)([G.default], () => G.default.getCurrentUser()),
        l = es.Ay.canUseCollectibles(s),
        a = (0, y.xM)(s),
        o = (0, el.Do)("ProductCardPriceInner") && t.type === u.R.PROFILE_FRAME,
        c = null != a || o,
        { isDisabled: d } = (0, ea.I)(t.skuId),
        { isPurchased: p, isPartiallyOwnedBundle: C } = (0, z.h)(t),
        f = (0, y.G0)(t),
        I = (0, y.tt)(t),
        g = (0, eu.V_)(t),
        {
            checkoutEligiblePrices: x,
            hasSufficientOrbs: m,
            shouldCheckoutWithOrbs: A,
        } = (0, ec.F)({ product: t, hasShopDiscount: c, prioritizedCurrency: n, hasDiscountOffer: null != g }),
        k = x[0]?.currency,
        _ = i.useMemo(() => (0, y.fT)(t, c, k), [t, c, k]);
    return d
        ? (0, r.jsx)(M.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: H.intl.string(H.t.wu4gyV),
          })
        : C
          ? (0, r.jsx)(M.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: H.intl.string(H.t.BEjTij),
            })
          : p && !(f && !l)
            ? (0, r.jsx)(M.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: H.intl.string(H.t["6cfuDj"]),
              })
            : I
              ? (0, r.jsx)(M.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: H.intl.string(H.t.nBtvYB),
                })
              : f
                ? (0, r.jsx)(M.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: H.intl.string(H.t.rt69oo),
                  })
                : 0 === x.length
                  ? null
                  : (0, r.jsx)(eo.x, {
                        priceAmount: x[0].amount,
                        priceCurrency: x[0].currency,
                        discount: _,
                        discountIconConfig: c
                            ? { displayMode: "default", source: a ?? y.D0.NITRO, size: "sm" }
                            : void 0,
                        discountOfferAmount: g,
                        className: A && !m ? ed.c : void 0,
                        variant: "text-md/bold",
                    });
}
let eC = function (e) {
    let { skuId: t, prioritizedCurrency: n } = e,
        i = (0, D.Vm)(t),
        s = (0, R.Q)(i);
    if (null == i) return null;
    let l = (0, j.rb)(i, s);
    return (0, r.jsx)(ep, { product: l, prioritizedCurrency: n });
};
var ef = n(821609),
    eI = n(44120),
    eg = n(465794),
    ex = n(757036),
    em = n(206835),
    eA = n(106799),
    ek = n(652165),
    e_ = n(662388),
    ev = n(4227),
    eh = n(450481),
    eE = n(395068),
    eR = n(766172),
    ey = n(61750),
    ej = n(758836),
    eT = n(202541),
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
        p = (0, m.uM)()?.sessionId,
        C = a
            ? H.intl.formatToPlainString(H.t["5U5RB5"], { discountOfferAmount: o })
            : H.intl.formatToPlainString(H.t["cNSL/j"], { price: d });
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(),
                c?.(ej.sH.BUY_WITH_FIAT),
                (0, eI.A)({
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
        subscriptionTier: eT.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: t ?? H.intl.string(H.t.sEAnVH),
        onClick: (e) => {
            e.stopPropagation(), n?.(ej.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function eS(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: i } = e;
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(ej.sH.VIEW_DETAILS), t(e);
        },
        text: n ?? H.intl.string(H.t.FdGl5A),
        fullWidth: !0,
    });
}
function eO(e) {
    let { handleUseNow: t, isApplying: n, text: i, onTrackClick: s } = e;
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), s?.(ej.sH.USE_NOW), t();
        },
        loading: n,
        text: i ?? H.intl.string(H.t.MAS7uK),
        fullWidth: !0,
    });
}
function eN(e) {
    let { text: t, onTrackClick: n } = e,
        i = (0, em.A)();
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n?.(ej.sH.EDIT_PROFILE), i();
        },
        text: t ?? H.intl.string(H.t["2p2aYz"]),
        fullWidth: !0,
    });
}
function eV(e) {
    let { skuId: t, onClick: n, text: i } = e;
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n(t);
        },
        text: i ?? H.intl.string(H.t.FdGl5A),
        fullWidth: !0,
    });
}
function eM(e) {
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
            o?.(ej.sH.ADD_TO_COLLECTION),
            await (0, e_.iJ)(t.skuId),
            (0, ey.A)({ product: t, analyticsLocations: s, purchaseType: ej.gs.PREMIUM_PURCHASE });
    }
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), u();
        },
        disabled: n,
        loading: i,
        loadingStartedLabel: H.intl.string(H.t["TYw+9s"]),
        loadingFinishedLabel: H.intl.string(H.t.Pg1UP5),
        text: l ?? H.intl.string(H.t.zp6caO),
        fullWidth: !0,
    });
}
function eD(e) {
    let {
            product: t,
            checkoutEligiblePrices: n,
            analyticsLocations: i,
            selectedVariantIndex: s,
            text: l,
            onClickAnalytics: a,
            onTrackClick: o,
        } = e,
        u = (0, m.uM)()?.sessionId;
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        text:
            l ??
            H.intl.format(H.t.JC15qj, {
                orbPrice: n[0].amount,
                orbIconHook: () => (0, r.jsx)(eA.A, { className: eb.f }),
            }),
        onClick: (e) => {
            e.stopPropagation(),
                a?.("claim with orbs button"),
                o?.(ej.sH.BUY_WITH_ORBS),
                (0, ek.B4)({
                    skuId: (0, eR.Y)({ product: t, selectedVariantIndex: s }),
                    onComplete: (e) => {
                        (0, e_.gB)(),
                            (0, ey.A)({
                                product: t,
                                analyticsLocations: i,
                                itemConsumed: e?.entitlements?.[0]?.consumed,
                                purchaseType: ej.gs.ORB,
                            });
                    },
                    analyticsLocations: i,
                    discoverySessionId: u,
                });
        },
        "aria-label": H.intl.formatToPlainString(H.t.yi41qQ, { orbPrice: n[0].amount }),
        fullWidth: !0,
    });
}
function eH(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: i } = e;
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(ej.sH.PAYMENT_OPTIONS), t(e);
        },
        text: n ?? H.intl.string(H.t.GpnHfH),
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
        d = (0, ei.bG)([G.default], () => G.default.getCurrentUser()),
        p = (0, ex.L)(eT.PremiumTypes.TIER_2),
        C = es.Ay.canUseShopDiscounts(d),
        { isPurchased: f, isPartiallyOwnedBundle: x } = (0, z.h)(t),
        m = (0, y.G0)(t),
        A = (0, y.tt)(t),
        { isDisabled: k } = (0, ea.I)(t.skuId),
        _ = (0, y.Zu)({ product: t, isPartiallyOwnedBundle: x, isPurchased: f }),
        v = (0, eu.V_)(t),
        h = null != v,
        {
            shouldCheckoutWithOrbs: E,
            hasSufficientOrbs: R,
            checkoutEligiblePrices: j,
            isOrbExclusive: T,
        } = (0, ec.F)({ product: t, hasShopDiscount: C, prioritizedCurrency: a, hasDiscountOffer: h }),
        { analyticsLocations: b } = (0, g.Ay)(I.A.COLLECTIBLES_SHOP_CARD),
        P = (0, D.ql)(t, I.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [L, S] = (0, ei.yK)([ev.A], () => [
            ev.A.isClaiming === t.skuId,
            null != ev.A.isClaiming && ev.A.isClaiming !== t.skuId,
        ]),
        { handleUseNow: O, isApplying: N, canUseNow: V } = (0, eh.p)({ product: t });
    if (null != s) return (0, r.jsx)(eV, { onClick: s, skuId: t.skuId, text: l });
    if (m && !p && !A) return (0, r.jsx)(eL, { text: l, onTrackClick: u });
    if (!_ || k) return (0, r.jsx)(eS, { handlePreviewButtonClick: P, text: l, onTrackClick: u });
    if (f)
        return V
            ? (0, r.jsx)(eO, { handleUseNow: O, isApplying: N, text: l, onTrackClick: u })
            : (0, r.jsx)(eN, { text: l, onTrackClick: u });
    if (c)
        return (0, r.jsx)(g.f5, {
            value: [...b, I.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, r.jsx)(eL, { text: H.intl.string(H.t["9wfL34"]), onTrackClick: u }),
        });
    if (m)
        return (0, r.jsx)(eM, {
            product: t,
            isClaimPremiumProductDisabled: S,
            isClaiming: L,
            analyticsLocations: b,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (E && R)
        return (0, r.jsx)(eD, {
            product: t,
            checkoutEligiblePrices: j,
            analyticsLocations: b,
            selectedVariantIndex: i,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (E && !R)
        if (j.length > 1) return (0, r.jsx)(eH, { handlePreviewButtonClick: P, text: l, onTrackClick: u });
        else return (0, r.jsx)(eS, { handlePreviewButtonClick: P, text: l, onTrackClick: u });
    return T
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
        u = (0, D.Vm)(t),
        c = (0, R.Q)(u);
    if (null == u) return null;
    let d = (0, j.rb)(u, c);
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
var eF = n(408278),
    eU = n(39623),
    eW = n(878112),
    eG = n(347722);
function ez(e) {
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
        c = (0, A.Mk)(),
        d = c?.tab,
        p = (0, m.uM)(),
        C = (0, eG.X)(t, a),
        f = (0, D.ql)(t, I.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o);
    return null != s || null != l
        ? (0, r.jsx)(eF.K, {
              variant: "primary",
              "aria-label": H.intl.string(H.t.SKNnqq),
              icon: l ?? eU.b,
              onClick: (e) => {
                  e.stopPropagation(), null != s ? s(t.skuId) : (u?.(ej.sH.OPEN_DETAILS), f(e));
              },
          })
        : C
          ? (0, r.jsx)(m.R9, {
                newValue: { pageCategory: d === ej.G2.HOME ? void 0 : p?.pageCategory },
                children: (0, r.jsx)(eW.A, {
                    primary: !0,
                    product: t,
                    selectedVariantIndex: n,
                    returnRef: i,
                    tooltipDelay: 250,
                    onTrackClick: u,
                }),
            })
          : null;
}
let e$ = function (e) {
    let { skuId: t, cardRef: n, onClick: i, icon: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = e,
        u = (0, D.Vm)(t),
        c = (0, R.Q)(u);
    if (null == u) return null;
    let d = (0, j.rb)(u, c);
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
        s = (0, D.Vm)(t),
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
            hidePrimaryCTA: f,
            hideSecondaryCTA: k,
            badgeOverride: _,
            skipLimitedTimeCheck: v,
            onClickCard: M,
            onClickPrimaryCTA: H,
            onClickSecondaryCTA: w,
            onMouseEnter: F,
            onMouseLeave: U,
            onFocus: W,
            onBlur: G,
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
        en = (0, D.gZ)() ?? q,
        ei = (0, A.Mk)(),
        es = ei?.tab,
        el = (0, m.uM)(),
        ea = i.useMemo(() => (0, D.UU)(t, es, el), [t, es, el]),
        eo = (0, N.s7)(t),
        eu = i.useId(),
        ec = i.useRef(null),
        { isHoveringOrFocusing: ed } = (0, x.A)(ec),
        ep = (0, e0.$c)(t.skuId),
        ef = (function (e) {
            let t = (0, m.uM)(),
                { analyticsLocations: n } = (0, g.Ay)(),
                r = (0, R.Q)(e),
                s = (0, T.o)(),
                l = (0, y.xM)(s),
                a = i.useRef(null),
                o = i.useRef(!1),
                u = i.useRef(r);
            i.useEffect(() => {
                u.current = r;
            }, [r]);
            let c = i.useCallback(() => {
                    let r = (0, j.B1)(e);
                    (0, O.x)(
                        {
                            name: L.ImpressionNames.SHOP_CARD,
                            type: L.ImpressionTypes.VIEW,
                            properties: {
                                sku_id: r ? (e.variants[u.current]?.skuId ?? e.skuId) : e.skuId,
                                card_id: t?.cardId,
                                shop_session_id: t?.sessionId,
                                position_in_section: t?.tilePosition,
                                product_sku_ids: (0, j.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
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
        eI = (0, o.A)(ec, ef),
        { handleCardVisibilityChange: eg } = (0, h.Z)(t.skuId, es === ej.G2.CATALOG ? "full" : es),
        ex = (0, D.ql)(t, I.A.COLLECTIBLES_SHOP_CARD, ea),
        { analyticsLocations: em } = (0, g.Ay)(),
        eA = (function (e) {
            let { product: t, analyticsLocations: n } = e,
                { cardId: r, sessionId: s, tilePosition: l } = (0, m.uM)() ?? {},
                a = (0, R.Q)(t),
                o = (0, T.o)(),
                u = (0, y.xM)(o);
            return i.useCallback(
                (e, i) => {
                    let o = (0, j.B1)(t) ? (t.variants[i ?? a]?.skuId ?? t.skuId) : t.skuId;
                    E.default.track(b.HAw.SHOP_CARD_CLICKED, {
                        sku_id: o,
                        cta: e,
                        shop_session_id: s,
                        card_id: r,
                        product_sku_ids: (0, j.v8)(t),
                        location_stack: n,
                        position_in_section: l,
                        discount_source: (0, y.b_)(u),
                    });
                },
                [t, a, s, r, n, l, u],
            );
        })({ product: t, analyticsLocations: em }),
        ek = i.useCallback(
            (e) => {
                null != M ? M(e) : (eA(ej.sH.OPEN_DETAILS), ex(e));
            },
            [eA, M, ex],
        );
    !(function (e, t) {
        let n = (0, m.uM)(),
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
                    n = (0, j.B1)(t);
                E.default.track(b.HAw.SHOP_CARD_HOVERED, {
                    shop_session_id: e?.sessionId,
                    sku_id: n ? (t.variants[u.current]?.skuId ?? t.skuId) : t.skuId,
                    position_in_section: e?.tilePosition,
                    card_id: e?.cardId,
                    product_sku_ids: (0, j.v8)(t),
                    location_stack: c.current,
                }),
                    (l.current = !0);
            }, 250);
            return () => clearTimeout(t);
        }, [e, a, o, u, c]);
    })(ed, t);
    let e_ = t.type === u.R.BUNDLE && t.previewAssets?.fgStatic != null,
        ev = t.type === u.R.VARIANTS_GROUP && !a,
        eh = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: ex }), [ex]),
        eE = t.type === u.R.BUNDLE && !Z,
        eR = !f || !k,
        ey = !(c && s) || ev,
        eT = ey || eR,
        eb = eR || ev;
    return (0, r.jsx)(d.L, {
        innerRef: ec,
        onChange: eg,
        threshold: 0,
        children: (0, r.jsx)(p.s, {
            ref: eI,
            onClick: ek,
            "aria-label": eo,
            "aria-describedby": eu,
            className: l()(Q, e2.ty, { [e2.yo]: ed }),
            onFocus: () => W?.(t.skuId),
            onBlur: () => G?.(t.skuId),
            onMouseEnter: () => F?.(t.skuId),
            onMouseLeave: () => U?.(t.skuId),
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
                            children: (0, r.jsx)(er, { skuId: t.skuId, isCardHovered: ed, overrideVariantIndex: J }),
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
                                !n && (0, r.jsx)(eZ, { skuId: t.skuId, isCardHovered: ed, onTrackClick: eA }),
                            ],
                        }),
                        eT &&
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
                                                                onTrackClick: eA,
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
                                                            !f &&
                                                                (0, r.jsx)(ew, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: H,
                                                                    text: z,
                                                                    prioritizedCurrency: en,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: eA,
                                                                }),
                                                            !k &&
                                                                (0, r.jsx)(e$, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: w,
                                                                    icon: $,
                                                                    prioritizedCurrency: en,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: eA,
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
});
function e1(e) {
    let t = (0, _.c)("product_card");
    return e === c.j.PREMIUM_TIER_2_1_DAY && !t;
}
function e6(e) {
    let { skuId: t, ...n } = e,
        i = (0, D.Vm)(t),
        s = (0, f.A)(() => ({ cardId: (0, a.A)() })),
        l = e1(t);
    return null == i || l ? null : (0, r.jsx)(m.R9, { newValue: s, children: (0, r.jsx)(e7, { product: i, ...n }) });
}
function e5(e) {
    let { skuId: t, ...n } = e,
        { state: s, product: l } = (0, v.I)(t, { needsCategory: !1, seedCategoryStore: !0 }),
        o = (0, f.A)(() => ({ cardId: (0, a.A)() })),
        u = e1(t),
        c = i.useContext(D.v3),
        d = i.useMemo(() => ({ ...c, productOverride: l ?? void 0, standalonePreview: !0 }), [c, l]);
    return u
        ? null
        : "loading" === s
          ? (0, r.jsx)(eY.A, {})
          : null == l
            ? null
            : (0, r.jsx)(m.R9, {
                  newValue: o,
                  children: (0, r.jsx)(D.v3.Provider, { value: d, children: (0, r.jsx)(e7, { product: l, ...n }) }),
              });
}
let e8 = function (e) {
    return (0, k.$)("product_card") ? (0, r.jsx)(e5, { ...e }) : (0, r.jsx)(e6, { ...e });
};
