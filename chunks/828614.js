n.d(t, { A: () => e0 });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(835245),
    o = n(612324),
    u = n(575593),
    c = n(334279),
    d = n(269115),
    p = n(890856),
    C = n(825484),
    f = n(444927),
    I = n(793574),
    g = n(688810),
    k = n(713517),
    A = n(440938),
    m = n(161918),
    x = n(503089),
    _ = n(597783),
    h = n(174459),
    E = n(298072),
    v = n(993408),
    R = n(623373),
    y = n(331884),
    T = n(652215),
    j = n(66455),
    b = n(562708),
    L = n(172218),
    P = n(139286),
    S = n(536572),
    O = n(268959),
    N = n(834730),
    V = n(561769),
    H = n(375708);
let M = function (e) {
    let { skuId: t, className: n } = e,
        i = (0, V.Vm)(t),
        s = (0, S.VG)(i),
        l = null != i && i.type === u.R.BUNDLE && i.items.length > 0;
    return (0, r.jsx)(N.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: n,
        lineClamp: 1,
        children: l ? H.intl.format(H.t.UTc0ny, { count: i.items.length, productName: s }) : s,
    });
};
var D = n(947641),
    B = n(17928),
    w = n(778712),
    U = n(661531),
    F = n(287809),
    G = n(466459),
    W = n(139136),
    z = n(395744),
    Y = n(846957),
    $ = n(929283),
    K = n(245068),
    Q = n(761365),
    q = n(721861);
function X(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function Z(e) {
    let { product: t, isCardHovered: n } = e,
        i = (0, R.YW)(t),
        { isPurchased: s, isPartiallyOwnedBundle: a } = (0, G.h)(t),
        o = i === u.R.PROFILE_EFFECT || i === u.R.PROFILE_FRAME || i === u.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(q.mA, { [q.zj]: (s || a) && !n, [q.Ge]: o }),
                children: (0, r.jsx)(J, { product: t, isCardHovered: n }),
            }),
            s && (0, r.jsx)(ee, { hidden: n }),
        ],
    });
}
function J(e) {
    let t,
        { product: n, isCardHovered: i } = e,
        s = (0, B.bG)([F.default], () => F.default.getCurrentUser()),
        l = (0, R.YW)(n),
        a =
            ((t = (0, E.Q)(n)),
            n?.type === u.R.VARIANTS_GROUP && null != n.variants && n.variants.length > t
                ? n.variants[t].items[0]
                : n.items[0]);
    switch (l) {
        case u.R.PROFILE_EFFECT:
            return (0, r.jsx)(W.A, { skuId: a.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case u.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: q.pI, children: (0, r.jsx)(z.A, { frame: a, filterLayer: X }) });
        case u.R.AVATAR_DECORATION:
            return (0, r.jsx)($.i, { item: a, user: s, isHighlighted: i, avatarSize: w._3.SIZE_120 });
        case u.R.NAMEPLATE:
            return (0, r.jsx)(Q.A, { nameplate: a, user: s, isHighlighted: i });
        case u.R.BUNDLE:
            return (0, r.jsx)(K.X, { product: n, user: s, isHighlighted: i });
        case u.R.EXTERNAL_SKU:
            return (0, r.jsx)(Y.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function ee(e) {
    let { hidden: t } = e;
    return (0, r.jsx)(D.r, {
        size: "custom",
        color: U.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: l()(q.zo, { [q.R]: t }),
    });
}
let et = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, V.Vm)(t),
        l = (0, E.Q)(s);
    if (null == s) return null;
    let a = (0, R.rb)(s, i ?? l);
    return (0, r.jsx)(Z, { product: a, isCardHovered: n });
};
var en = n(702841),
    er = n(428262),
    ei = n(13875),
    es = n(740076),
    el = n(219103),
    ea = n(525723),
    eo = n(57020),
    eu = n(380836);
function ec(e) {
    let { product: t, prioritizedCurrency: n } = e,
        s = (0, en.bG)([F.default], () => F.default.getCurrentUser()),
        l = er.Ay.canUseCollectibles(s),
        a = (0, v.xM)(s),
        o = (0, ei.Do)("ProductCardPriceInner") && t.type === u.R.PROFILE_FRAME,
        c = null != a || o,
        { isDisabled: d } = (0, es.I)(t.skuId),
        { isPurchased: p, isPartiallyOwnedBundle: C } = (0, G.h)(t),
        f = (0, v.G0)(t),
        I = (0, v.tt)(t),
        g = i.useMemo(() => (0, v.fT)(t, c), [t, c]),
        k = (0, ea.V_)(t),
        {
            checkoutEligiblePrices: A,
            hasSufficientOrbs: m,
            shouldCheckoutWithOrbs: x,
        } = (0, eo.F)({ product: t, hasShopDiscount: c, prioritizedCurrency: n, hasDiscountOffer: null != k });
    return d
        ? (0, r.jsx)(N.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: H.intl.string(H.t.wu4gyV),
          })
        : C
          ? (0, r.jsx)(N.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: H.intl.string(H.t.BEjTij),
            })
          : p && !(f && !l)
            ? (0, r.jsx)(N.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: H.intl.string(H.t["6cfuDj"]),
              })
            : I
              ? (0, r.jsx)(N.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: H.intl.string(H.t.nBtvYB),
                })
              : f
                ? (0, r.jsx)(N.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: H.intl.string(H.t.rt69oo),
                  })
                : 0 === A.length
                  ? null
                  : (0, r.jsx)(el.x, {
                        priceAmount: A[0].amount,
                        priceCurrency: A[0].currency,
                        discount: g,
                        discountIconConfig: c
                            ? { displayMode: "default", source: a ?? v.D0.NITRO, size: "sm" }
                            : void 0,
                        discountOfferAmount: k,
                        className: x && !m ? eu.c : void 0,
                        variant: "text-md/bold",
                    });
}
let ed = function (e) {
    let { skuId: t, prioritizedCurrency: n } = e,
        i = (0, V.Vm)(t),
        s = (0, E.Q)(i);
    if (null == i) return null;
    let l = (0, R.rb)(i, s);
    return (0, r.jsx)(ec, { product: l, prioritizedCurrency: n });
};
var ep = n(821609),
    eC = n(44120),
    ef = n(465794),
    eI = n(757036),
    eg = n(206835),
    ek = n(106799),
    eA = n(652165),
    em = n(662388),
    ex = n(4227),
    e_ = n(450481),
    eh = n(395068),
    eE = n(766172),
    ev = n(61750),
    eR = n(758836),
    ey = n(788868),
    eT = n(40577);
function ej(e) {
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
        d = (0, v.R8)(t, i, !1),
        p = (0, A.uM)()?.sessionId,
        C = a
            ? H.intl.formatToPlainString(H.t["5U5RB5"], { discountOfferAmount: o })
            : H.intl.formatToPlainString(H.t["cNSL/j"], { price: d });
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(),
                c?.(eR.sH.BUY_WITH_FIAT),
                (0, eC.A)({
                    skuId: (0, eE.Y)({ product: t, selectedVariantIndex: l }),
                    returnRef: n,
                    analyticsLocations: s,
                    discoverySessionId: p,
                });
        },
        text: u ?? C,
        fullWidth: !0,
    });
}
function eb(e) {
    let { text: t, onTrackClick: n } = e;
    return (0, r.jsx)(ef.A, {
        subscriptionTier: ey.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: t ?? H.intl.string(H.t.sEAnVH),
        onClick: (e) => {
            e.stopPropagation(), n?.(eR.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function eL(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: i } = e;
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(eR.sH.VIEW_DETAILS), t(e);
        },
        text: n ?? H.intl.string(H.t.FdGl5A),
        fullWidth: !0,
    });
}
function eP(e) {
    let { handleUseNow: t, isApplying: n, text: i, onTrackClick: s } = e;
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), s?.(eR.sH.USE_NOW), t();
        },
        loading: n,
        text: i ?? H.intl.string(H.t.MAS7uK),
        fullWidth: !0,
    });
}
function eS(e) {
    let { text: t, onTrackClick: n } = e,
        i = (0, eg.A)();
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n?.(eR.sH.EDIT_PROFILE), i();
        },
        text: t ?? H.intl.string(H.t["2p2aYz"]),
        fullWidth: !0,
    });
}
function eO(e) {
    let { skuId: t, onClick: n, text: i } = e;
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n(t);
        },
        text: i ?? H.intl.string(H.t.FdGl5A),
        fullWidth: !0,
    });
}
function eN(e) {
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
            o?.(eR.sH.ADD_TO_COLLECTION),
            await (0, em.iJ)(t.skuId),
            (0, ev.A)({ product: t, analyticsLocations: s, purchaseType: eR.gs.PREMIUM_PURCHASE });
    }
    return (0, r.jsx)(ep.$, {
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
function eV(e) {
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
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        text:
            l ??
            H.intl.format(H.t.JC15qj, {
                orbPrice: n[0].amount,
                orbIconHook: () => (0, r.jsx)(ek.A, { className: eT.f }),
            }),
        onClick: (e) => {
            e.stopPropagation(),
                a?.("claim with orbs button"),
                o?.(eR.sH.BUY_WITH_ORBS),
                (0, eA.B4)({
                    skuId: (0, eE.Y)({ product: t, selectedVariantIndex: s }),
                    onComplete: (e) => {
                        (0, em.gB)(),
                            (0, ev.A)({
                                product: t,
                                analyticsLocations: i,
                                itemConsumed: e?.entitlements?.[0]?.consumed,
                                purchaseType: eR.gs.ORB,
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
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(eR.sH.PAYMENT_OPTIONS), t(e);
        },
        text: n ?? H.intl.string(H.t.GpnHfH),
        fullWidth: !0,
    });
}
function eM(e) {
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
        c = (0, eh.A)({ location: "ProductCardPrimaryCTAInner", product: t }),
        d = (0, en.bG)([F.default], () => F.default.getCurrentUser()),
        p = (0, eI.L)(ey.PremiumTypes.TIER_2),
        C = er.Ay.canUseShopDiscounts(d),
        { isPurchased: f, isPartiallyOwnedBundle: k } = (0, G.h)(t),
        A = (0, v.G0)(t),
        m = (0, v.tt)(t),
        { isDisabled: x } = (0, es.I)(t.skuId),
        _ = (0, v.Zu)({ product: t, isPartiallyOwnedBundle: k, isPurchased: f }),
        h = (0, ea.V_)(t),
        E = null != h,
        {
            shouldCheckoutWithOrbs: R,
            hasSufficientOrbs: y,
            checkoutEligiblePrices: T,
            isOrbExclusive: j,
        } = (0, eo.F)({ product: t, hasShopDiscount: C, prioritizedCurrency: a, hasDiscountOffer: E }),
        { analyticsLocations: b } = (0, g.Ay)(I.A.COLLECTIBLES_SHOP_CARD),
        L = (0, V.ql)(t, I.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [P, S] = (0, en.yK)([ex.A], () => [
            ex.A.isClaiming === t.skuId,
            null != ex.A.isClaiming && ex.A.isClaiming !== t.skuId,
        ]),
        { handleUseNow: O, isApplying: N, canUseNow: M } = (0, e_.p)({ product: t });
    if (null != s) return (0, r.jsx)(eO, { onClick: s, skuId: t.skuId, text: l });
    if (A && !p && !m) return (0, r.jsx)(eb, { text: l, onTrackClick: u });
    if (!_ || x) return (0, r.jsx)(eL, { handlePreviewButtonClick: L, text: l, onTrackClick: u });
    if (f)
        return M
            ? (0, r.jsx)(eP, { handleUseNow: O, isApplying: N, text: l, onTrackClick: u })
            : (0, r.jsx)(eS, { text: l, onTrackClick: u });
    if (c)
        return (0, r.jsx)(g.f5, {
            value: [...b, I.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, r.jsx)(eb, { text: H.intl.string(H.t["9wfL34"]), onTrackClick: u }),
        });
    if (A)
        return (0, r.jsx)(eN, {
            product: t,
            isClaimPremiumProductDisabled: S,
            isClaiming: P,
            analyticsLocations: b,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (R && y)
        return (0, r.jsx)(eV, {
            product: t,
            checkoutEligiblePrices: T,
            analyticsLocations: b,
            selectedVariantIndex: i,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (R && !y)
        if (T.length > 1) return (0, r.jsx)(eH, { handlePreviewButtonClick: L, text: l, onTrackClick: u });
        else return (0, r.jsx)(eL, { handlePreviewButtonClick: L, text: l, onTrackClick: u });
    return j
        ? (0, r.jsx)(eL, { handlePreviewButtonClick: L, text: l, onTrackClick: u })
        : (0, r.jsx)(ej, {
              product: t,
              cardRef: n,
              hasShopDiscount: C,
              analyticsLocations: b,
              selectedVariantIndex: i,
              hasDiscountOffer: E,
              discountOfferAmount: h,
              text: l,
              onTrackClick: u,
          });
}
let eD = function (e) {
    let { skuId: t, cardRef: n, onClick: i, text: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = e,
        u = (0, V.Vm)(t),
        c = (0, E.Q)(u);
    if (null == u) return null;
    let d = (0, R.rb)(u, c);
    return (0, r.jsx)(eM, {
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
var eB = n(408278),
    ew = n(39623),
    eU = n(878112),
    eF = n(347722);
let eG = (e) => {
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
            c = (0, m.Mk)(),
            d = c?.tab,
            p = (0, A.uM)(),
            C = (0, eF.X)(t, a),
            f = (0, V.ql)(t, I.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o);
        return null != s || null != l
            ? (0, r.jsx)(eB.K, {
                  variant: "primary",
                  "aria-label": H.intl.string(H.t.SKNnqq),
                  icon: l ?? ew.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != s ? s(t.skuId) : (u?.(eR.sH.OPEN_DETAILS), f(e));
                  },
              })
            : C
              ? (0, r.jsx)(A.R9, {
                    newValue: { pageCategory: d === eR.G2.HOME ? void 0 : p?.pageCategory },
                    children: (0, r.jsx)(eU.A, {
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
    eW = function (e) {
        let {
                skuId: t,
                cardRef: n,
                onClick: i,
                icon: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: o,
            } = e,
            u = (0, V.Vm)(t),
            c = (0, E.Q)(u);
        if (null == u) return null;
        let d = (0, R.rb)(u, c);
        return (0, r.jsx)(eG, {
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
var ez = n(661847),
    eY = n(139146),
    e$ = n(420960);
function eK(e) {
    let { product: t, selectedVariantIndex: n, isCardHovered: i, onTrackClick: s } = e;
    return (0, r.jsx)(eY.R, {
        product: t,
        selectedVariantIndex: n,
        isCardHovered: i,
        className: e$.i,
        onTrackClick: s,
    });
}
let eQ = function (e) {
    let { skuId: t, isCardHovered: n, onTrackClick: i } = e,
        s = (0, V.Vm)(t),
        l = (0, E.Q)(s);
    return null == s
        ? null
        : (0, r.jsx)(eK, { product: s, selectedVariantIndex: l, isCardHovered: n, onTrackClick: i });
};
var eq = n(935094),
    eX = n(521e3),
    eZ = n(496569);
let eJ = i.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: n,
                hideProductName: s,
                hideVariantSwitcher: a,
                hidePrice: c,
                hidePrimaryCTA: f,
                hideSecondaryCTA: x,
                badgeOverride: N,
                skipLimitedTimeCheck: H,
                onClickCard: D,
                onClickPrimaryCTA: B,
                onClickSecondaryCTA: w,
                onMouseEnter: U,
                onMouseLeave: F,
                onFocus: G,
                onBlur: W,
                primaryCTAText: z,
                secondaryCTAIcon: Y,
                productNameClassName: $,
                badgeClassName: K,
                cardClassName: Q,
                prioritizedCurrency: q,
                aspectRatio: X,
                hideStaticBundleBackgroundAsset: Z,
            } = e,
            { previewingVariantIndex: J, handleEntering: ee, handleLeaving: en } = (0, eq.f)(t),
            er = (0, V.gZ)() ?? q,
            ei = (0, m.Mk)(),
            es = ei?.tab,
            el = (0, A.uM)(),
            ea = i.useMemo(() => (0, V.UU)(t, es, el), [t, es, el]),
            eo = (0, S.s7)(t),
            eu = i.useId(),
            ec = i.useRef(null),
            { isHoveringOrFocusing: ep } = (0, k.A)(ec),
            eC = (0, eX.$c)(t.skuId),
            ef = (function (e) {
                let t = (0, A.uM)(),
                    { analyticsLocations: n } = (0, g.Ay)(),
                    r = (0, E.Q)(e),
                    s = (0, y.o)(),
                    l = (0, v.xM)(s),
                    a = i.useRef(null),
                    o = i.useRef(!1),
                    u = i.useRef(r);
                i.useEffect(() => {
                    u.current = r;
                }, [r]);
                let c = i.useCallback(() => {
                        let r = (0, R.B1)(e);
                        (0, P.x)(
                            {
                                name: b.ImpressionNames.SHOP_CARD,
                                type: b.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: r ? (e.variants[u.current]?.skuId ?? e.skuId) : e.skuId,
                                    card_id: t?.cardId,
                                    shop_session_id: t?.sessionId,
                                    position_in_section: t?.tilePosition,
                                    product_sku_ids: (0, R.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                    location_stack: n,
                                    discount_source: (0, v.b_)(l),
                                },
                            },
                            !1,
                            !0,
                        );
                    }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, l]),
                    d = (0, L.K)((e) => {
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
            { handleCardVisibilityChange: eg } = (0, _.Z)(t.skuId, es === eR.G2.CATALOG ? "full" : es),
            ek = (0, V.ql)(t, I.A.COLLECTIBLES_SHOP_CARD, ea),
            { analyticsLocations: eA } = (0, g.Ay)(),
            em = (function (e) {
                let { product: t, analyticsLocations: n } = e,
                    { cardId: r, sessionId: s, tilePosition: l } = (0, A.uM)() ?? {},
                    a = (0, E.Q)(t),
                    o = (0, y.o)(),
                    u = (0, v.xM)(o);
                return i.useCallback(
                    (e, i) => {
                        h.default.track(T.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, R.B1)(t) ? (t.variants[i ?? a]?.skuId ?? t.skuId) : t.skuId,
                            cta: e,
                            shop_session_id: s,
                            card_id: r,
                            product_sku_ids: (0, R.v8)(t),
                            location_stack: n,
                            position_in_section: l,
                            discount_source: (0, v.b_)(u),
                        });
                    },
                    [t, a, s, r, n, l, u],
                );
            })({ product: t, analyticsLocations: eA }),
            ex = i.useCallback(
                (e) => {
                    null != D ? D(e) : (em(eR.sH.OPEN_DETAILS), ek(e));
                },
                [em, D, ek],
            );
        !(function (e, t) {
            let n = (0, A.uM)(),
                { analyticsLocations: r } = (0, g.Ay)(),
                s = (0, E.Q)(t),
                l = i.useRef(!1),
                a = (0, j.A)(n),
                o = (0, j.A)(t),
                u = (0, j.A)(s),
                c = (0, j.A)(r);
            i.useEffect(() => {
                if (!e) {
                    l.current = !1;
                    return;
                }
                if (l.current) return;
                let t = setTimeout(() => {
                    let e = a.current,
                        t = o.current,
                        n = (0, R.B1)(t);
                    h.default.track(T.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: n ? (t.variants[u.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, R.v8)(t),
                        location_stack: c.current,
                    }),
                        (l.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, a, o, u, c]);
        })(ep, t);
        let e_ = t.type === u.R.BUNDLE && t.previewAssets?.fgStatic != null,
            eh = t.type === u.R.VARIANTS_GROUP && !a,
            eE = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: ek }), [ek]),
            ev = t.type === u.R.BUNDLE && !Z,
            ey = !f || !x,
            eT = !(c && s) || eh,
            ej = eT || ey,
            eb = ey || eh;
        return (0, r.jsx)(d.L, {
            innerRef: ec,
            onChange: eg,
            threshold: 0,
            children: (0, r.jsx)(p.s, {
                ref: eI,
                onClick: ex,
                "aria-label": eo,
                "aria-describedby": eu,
                className: l()(Q, eZ.ty, { [eZ.yo]: ep }),
                onFocus: () => G?.(t.skuId),
                onBlur: () => W?.(t.skuId),
                onMouseEnter: () => U?.(t.skuId),
                onMouseLeave: () => F?.(t.skuId),
                children: (0, r.jsx)(eX.vf.Provider, {
                    value: eC ? ec : null,
                    children: (0, r.jsxs)("div", {
                        id: eu,
                        className: eZ.qt,
                        style: { aspectRatio: X },
                        children: [
                            ev &&
                                t.previewAssets?.bgStatic != null &&
                                (0, r.jsx)("img", { className: eZ.vD, src: t.previewAssets.bgStatic, alt: "" }),
                            (0, r.jsx)("div", {
                                className: l()(eZ.Dq, { [eZ.$r]: !s || eT || eb, [eZ.T9]: e_ }),
                                children: (0, r.jsx)(et, {
                                    skuId: t.skuId,
                                    isCardHovered: ep,
                                    overrideVariantIndex: J,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: eZ.N1,
                                children: [
                                    (0, r.jsx)(O.A, {
                                        skuId: t.skuId,
                                        badgeOverride: N,
                                        className: K,
                                        prioritizedCurrency: er,
                                        skipLimitedTimeCheck: H,
                                    }),
                                    !n && (0, r.jsx)(eQ, { skuId: t.skuId, isCardHovered: ep, onTrackClick: em }),
                                ],
                            }),
                            ej &&
                                (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)("div", { className: l()(eZ.wY, { [eZ.KY]: e_ }) }),
                                        (0, r.jsxs)("div", {
                                            className: eZ.xQ,
                                            children: [
                                                eT &&
                                                    (0, r.jsxs)("div", {
                                                        className: eZ.xE,
                                                        children: [
                                                            !(s && c) &&
                                                                (0, r.jsxs)("div", {
                                                                    className: eZ.Ly,
                                                                    children: [
                                                                        !s &&
                                                                            (0, r.jsx)(M, {
                                                                                skuId: t.skuId,
                                                                                className: l()($, eZ.tZ),
                                                                            }),
                                                                        !c &&
                                                                            (0, r.jsx)("div", {
                                                                                className: eZ.oh,
                                                                                children: (0, r.jsx)(ed, {
                                                                                    skuId: t.skuId,
                                                                                    prioritizedCurrency: er,
                                                                                }),
                                                                            }),
                                                                    ],
                                                                }),
                                                            eh &&
                                                                (0, r.jsx)(ez.A, {
                                                                    skuId: t.skuId,
                                                                    isCollapsed: !ep,
                                                                    onVariantEnter: ee,
                                                                    onVariantExit: en,
                                                                    overflowProps: eE,
                                                                    onTrackClick: em,
                                                                }),
                                                        ],
                                                    }),
                                                ey &&
                                                    (0, r.jsx)("div", {
                                                        className: eZ.Vs,
                                                        children: (0, r.jsxs)(C.e, {
                                                            wrap: !1,
                                                            className: eZ.Ld,
                                                            fullWidth: !0,
                                                            children: [
                                                                !f &&
                                                                    (0, r.jsx)(eD, {
                                                                        skuId: t.skuId,
                                                                        cardRef: ec,
                                                                        onClick: B,
                                                                        text: z,
                                                                        prioritizedCurrency: er,
                                                                        onClickAnalytics: ea,
                                                                        onTrackClick: em,
                                                                    }),
                                                                !x &&
                                                                    (0, r.jsx)(eW, {
                                                                        skuId: t.skuId,
                                                                        cardRef: ec,
                                                                        onClick: w,
                                                                        icon: Y,
                                                                        prioritizedCurrency: er,
                                                                        onClickAnalytics: ea,
                                                                        onTrackClick: em,
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
    e0 = function (e) {
        let { skuId: t, ...n } = e,
            i = (0, V.Vm)(t),
            s = (0, f.A)(() => ({ cardId: (0, a.A)() })),
            l = (0, x.c)("product_card");
        return null != i && (t !== c.j.PREMIUM_TIER_2_1_DAY || l)
            ? (0, r.jsx)(A.R9, { newValue: s, children: (0, r.jsx)(eJ, { product: i, ...n }) })
            : null;
    };
