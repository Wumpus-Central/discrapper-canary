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
    A = n(440938),
    m = n(161918),
    k = n(395856),
    v = n(503089),
    _ = n(642160),
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
    G = n(661531),
    W = n(287809),
    z = n(466459),
    $ = n(139136),
    Y = n(395744),
    K = n(846957),
    Q = n(929283),
    q = n(245068),
    X = n(761365),
    Z = n(955117);
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
        s = (0, F.bG)([W.default], () => W.default.getCurrentUser()),
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
        color: G.A.colors.INTERACTIVE_TEXT_ACTIVE,
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
    ed = n(264300);
function ep(e) {
    let { product: t, prioritizedCurrency: n } = e,
        s = (0, ei.bG)([W.default], () => W.default.getCurrentUser()),
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
            hasSufficientOrbs: A,
            shouldCheckoutWithOrbs: m,
        } = (0, ec.F)({ product: t, hasShopDiscount: c, prioritizedCurrency: n, hasDiscountOffer: null != g }),
        k = x[0]?.currency,
        v = i.useMemo(() => (0, y.fT)(t, c, k), [t, c, k]);
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
                        discount: v,
                        discountIconConfig: c
                            ? { displayMode: "default", source: a ?? y.D0.NITRO, size: "sm" }
                            : void 0,
                        discountOfferAmount: g,
                        className: m && !A ? ed.c : void 0,
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
    eA = n(206835),
    em = n(106799),
    ek = n(652165),
    ev = n(34332),
    e_ = n(4227),
    eh = n(629042),
    eE = n(450481),
    eR = n(395068),
    ey = n(766172),
    ej = n(61750),
    eT = n(758836),
    eb = n(202541),
    eP = n(910393);
function eL(e) {
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
            ? H.intl.formatToPlainString(H.t["5U5RB5"], { discountOfferAmount: o })
            : H.intl.formatToPlainString(H.t["cNSL/j"], { price: d });
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(),
                c?.(eT.sH.BUY_WITH_FIAT),
                (0, eI.A)({
                    skuId: (0, ey.Y)({ product: t, selectedVariantIndex: l }),
                    returnRef: n,
                    analyticsLocations: s,
                    discoverySessionId: p,
                });
        },
        text: u ?? C,
        fullWidth: !0,
    });
}
function eS(e) {
    let { text: t, onTrackClick: n } = e;
    return (0, r.jsx)(eg.A, {
        subscriptionTier: eb.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: t ?? H.intl.string(H.t.sEAnVH),
        onClick: (e) => {
            e.stopPropagation(), n?.(eT.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function eO(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: i } = e;
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(eT.sH.VIEW_DETAILS), t(e);
        },
        text: n ?? H.intl.string(H.t.FdGl5A),
        fullWidth: !0,
    });
}
function eN(e) {
    let { handleUseNow: t, isApplying: n, text: i, onTrackClick: s } = e;
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), s?.(eT.sH.USE_NOW), t();
        },
        loading: n,
        text: i ?? H.intl.string(H.t.MAS7uK),
        fullWidth: !0,
    });
}
function eV(e) {
    let { text: t, onTrackClick: n } = e,
        i = (0, eA.A)();
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n?.(eT.sH.EDIT_PROFILE), i();
        },
        text: t ?? H.intl.string(H.t["2p2aYz"]),
        fullWidth: !0,
    });
}
function eM(e) {
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
function eD(e) {
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
            await (0, ev.iJ)(t.skuId),
            (0, ej.A)({ product: t, analyticsLocations: s, purchaseType: eT.gs.PREMIUM_PURCHASE });
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
function eH(e) {
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
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        text:
            l ??
            H.intl.format(H.t.JC15qj, {
                orbPrice: n[0].amount,
                orbIconHook: () => (0, r.jsx)(em.A, { className: eP.f }),
            }),
        onClick: (e) => {
            e.stopPropagation(),
                a?.("claim with orbs button"),
                o?.(eT.sH.BUY_WITH_ORBS),
                (0, ek.B4)({
                    skuId: (0, ey.Y)({ product: t, selectedVariantIndex: s }),
                    onComplete: (e) => {
                        (0, ev.gB)(),
                            (0, ej.A)({
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
        "aria-label": H.intl.formatToPlainString(H.t.yi41qQ, { orbPrice: n[0].amount }),
        fullWidth: !0,
    });
}
function eB(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: i } = e;
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(eT.sH.PAYMENT_OPTIONS), t(e);
        },
        text: n ?? H.intl.string(H.t.GpnHfH),
        fullWidth: !0,
    });
}
function ew(e) {
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
        c = (0, eR.A)({ location: "ProductCardPrimaryCTAInner", product: t }),
        d = (0, ei.bG)([W.default], () => W.default.getCurrentUser()),
        p = (0, ex.L)(eb.PremiumTypes.TIER_2),
        C = es.Ay.canUseShopDiscounts(d),
        f = (0, eh.V)(t),
        { isPurchased: x, isPartiallyOwnedBundle: A } = (0, z.h)(t),
        m = (0, y.G0)(t),
        k = (0, y.tt)(t),
        { isDisabled: v } = (0, ea.I)(t.skuId),
        _ = (0, y.Zu)({ product: t, isPartiallyOwnedBundle: A, isPurchased: x }),
        h = (0, eu.V_)(t),
        E = null != h,
        {
            shouldCheckoutWithOrbs: R,
            hasSufficientOrbs: j,
            checkoutEligiblePrices: T,
            isOrbExclusive: b,
        } = (0, ec.F)({ product: t, hasShopDiscount: C, prioritizedCurrency: a, hasDiscountOffer: E }),
        { analyticsLocations: P } = (0, g.Ay)(I.A.COLLECTIBLES_SHOP_CARD),
        L = (0, D.ql)(t, I.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [S, O] = (0, ei.yK)([e_.A], () => [
            e_.A.isClaiming === t.skuId,
            null != e_.A.isClaiming && e_.A.isClaiming !== t.skuId,
        ]),
        { handleUseNow: N, isApplying: V, canUseNow: M } = (0, eE.p)({ product: t }),
        B = l ?? f ?? void 0;
    if (null != s) return (0, r.jsx)(eM, { onClick: s, skuId: t.skuId, text: l });
    if (m && !p && !k) return (0, r.jsx)(eS, { text: l, onTrackClick: u });
    if (!_ || v) return (0, r.jsx)(eO, { handlePreviewButtonClick: L, text: l, onTrackClick: u });
    if (x)
        return M
            ? (0, r.jsx)(eN, { handleUseNow: N, isApplying: V, text: l, onTrackClick: u })
            : (0, r.jsx)(eV, { text: l, onTrackClick: u });
    if (c)
        return (0, r.jsx)(g.f5, {
            value: [...P, I.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, r.jsx)(eS, { text: H.intl.string(H.t["9wfL34"]), onTrackClick: u }),
        });
    if (m)
        return (0, r.jsx)(eD, {
            product: t,
            isClaimPremiumProductDisabled: O,
            isClaiming: S,
            analyticsLocations: P,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (R && j)
        return (0, r.jsx)(eH, {
            product: t,
            checkoutEligiblePrices: T,
            analyticsLocations: P,
            selectedVariantIndex: i,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (R && !j)
        if (T.length > 1) return (0, r.jsx)(eB, { handlePreviewButtonClick: L, text: l, onTrackClick: u });
        else return (0, r.jsx)(eO, { handlePreviewButtonClick: L, text: l, onTrackClick: u });
    return b
        ? (0, r.jsx)(eO, { handlePreviewButtonClick: L, text: l, onTrackClick: u })
        : (0, r.jsx)(eL, {
              product: t,
              cardRef: n,
              hasShopDiscount: C,
              analyticsLocations: P,
              selectedVariantIndex: i,
              hasDiscountOffer: E,
              discountOfferAmount: h,
              text: B,
              onTrackClick: u,
          });
}
let eF = function (e) {
    let { skuId: t, cardRef: n, onClick: i, text: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = e,
        u = (0, D.Vm)(t),
        c = (0, R.Q)(u);
    if (null == u) return null;
    let d = (0, j.rb)(u, c);
    return (0, r.jsx)(ew, {
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
    eG = n(39623),
    eW = n(878112),
    ez = n(347722);
function e$(e) {
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
        C = (0, ez.X)(t, a),
        f = (0, D.ql)(t, I.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o);
    return null != s || null != l
        ? (0, r.jsx)(eU.K, {
              variant: "primary",
              "aria-label": H.intl.string(H.t.SKNnqq),
              icon: l ?? eG.b,
              onClick: (e) => {
                  e.stopPropagation(), null != s ? s(t.skuId) : (u?.(eT.sH.OPEN_DETAILS), f(e));
              },
          })
        : C
          ? (0, r.jsx)(A.R9, {
                newValue: { pageCategory: d === eT.G2.HOME ? void 0 : p?.pageCategory },
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
let eY = function (e) {
    let { skuId: t, cardRef: n, onClick: i, icon: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = e,
        u = (0, D.Vm)(t),
        c = (0, R.Q)(u);
    if (null == u) return null;
    let d = (0, j.rb)(u, c);
    return (0, r.jsx)(e$, {
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
var eK = n(484469),
    eQ = n(661847),
    eq = n(139146),
    eX = n(362523);
function eZ(e) {
    let { product: t, selectedVariantIndex: n, isCardHovered: i, onTrackClick: s } = e;
    return (0, r.jsx)(eq.R, {
        product: t,
        selectedVariantIndex: n,
        isCardHovered: i,
        className: eX.i,
        onTrackClick: s,
    });
}
let eJ = function (e) {
    let { skuId: t, isCardHovered: n, onTrackClick: i } = e,
        s = (0, D.Vm)(t),
        l = (0, R.Q)(s);
    return null == s
        ? null
        : (0, r.jsx)(eZ, { product: s, selectedVariantIndex: l, isCardHovered: n, onTrackClick: i });
};
var e0 = n(935094),
    e2 = n(521e3),
    e7 = n(162945);
let e1 = i.memo(function (e) {
    let {
            product: t,
            hideWishlistButton: n,
            hideProductName: s,
            hideVariantSwitcher: a,
            hidePrice: c,
            hidePrimaryCTA: f,
            hideSecondaryCTA: k,
            badgeOverride: v,
            skipLimitedTimeCheck: _,
            onClickCard: M,
            onClickPrimaryCTA: H,
            onClickSecondaryCTA: w,
            onMouseEnter: F,
            onMouseLeave: U,
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
        { previewingVariantIndex: J, handleEntering: ee, handleLeaving: et } = (0, e0.f)(t),
        en = (0, D.gZ)() ?? q,
        ei = (0, m.Mk)(),
        es = ei?.tab,
        el = (0, A.uM)(),
        ea = i.useMemo(() => (0, D.UU)(t, es, el), [t, es, el]),
        eo = (0, N.s7)(t),
        eu = i.useId(),
        ec = i.useRef(null),
        { isHoveringOrFocusing: ed } = (0, x.A)(ec),
        ep = (0, e2.$c)(t.skuId),
        ef = (function (e) {
            let t = (0, A.uM)(),
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
        { handleCardVisibilityChange: eg } = (0, h.Z)(t.skuId, es === eT.G2.CATALOG ? "full" : es),
        ex = (0, D.ql)(t, I.A.COLLECTIBLES_SHOP_CARD, ea),
        { analyticsLocations: eA } = (0, g.Ay)(),
        em = (function (e) {
            let { product: t, analyticsLocations: n } = e,
                { cardId: r, sessionId: s, tilePosition: l } = (0, A.uM)() ?? {},
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
        })({ product: t, analyticsLocations: eA }),
        ek = i.useCallback(
            (e) => {
                null != M ? M(e) : (em(eT.sH.OPEN_DETAILS), ex(e));
            },
            [em, M, ex],
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
    let ev = t.type === u.R.BUNDLE && t.previewAssets?.fgStatic != null,
        e_ = t.type === u.R.VARIANTS_GROUP && !a,
        eh = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: ex }), [ex]),
        eE = t.type === u.R.BUNDLE && !Z,
        eR = !f || !k,
        ey = !(c && s) || e_,
        ej = ey || eR,
        eb = eR || e_;
    return (0, r.jsx)(d.L, {
        innerRef: ec,
        onChange: eg,
        threshold: 0,
        children: (0, r.jsx)(p.s, {
            ref: eI,
            onClick: ek,
            "aria-label": eo,
            "aria-describedby": eu,
            className: l()(Q, e7.ty, { [e7.yo]: ed }),
            onFocus: () => G?.(t.skuId),
            onBlur: () => W?.(t.skuId),
            onMouseEnter: () => F?.(t.skuId),
            onMouseLeave: () => U?.(t.skuId),
            children: (0, r.jsx)(e2.vf.Provider, {
                value: ep ? ec : null,
                children: (0, r.jsxs)("div", {
                    id: eu,
                    className: e7.qt,
                    style: { aspectRatio: X },
                    children: [
                        eE &&
                            t.previewAssets?.bgStatic != null &&
                            (0, r.jsx)("img", { className: e7.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, r.jsx)("div", {
                            className: l()(e7.Dq, { [e7.$r]: !s || ey || eb, [e7.T9]: ev }),
                            children: (0, r.jsx)(er, { skuId: t.skuId, isCardHovered: ed, overrideVariantIndex: J }),
                        }),
                        (0, r.jsxs)("div", {
                            className: e7.N1,
                            children: [
                                (0, r.jsx)(V.A, {
                                    skuId: t.skuId,
                                    badgeOverride: v,
                                    className: K,
                                    prioritizedCurrency: en,
                                    skipLimitedTimeCheck: _,
                                }),
                                !n && (0, r.jsx)(eJ, { skuId: t.skuId, isCardHovered: ed, onTrackClick: em }),
                            ],
                        }),
                        ej &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", { className: l()(e7.wY, { [e7.KY]: ev }) }),
                                    (0, r.jsxs)("div", {
                                        className: e7.xQ,
                                        children: [
                                            ey &&
                                                (0, r.jsxs)("div", {
                                                    className: e7.xE,
                                                    children: [
                                                        !(s && c) &&
                                                            (0, r.jsxs)("div", {
                                                                className: e7.Ly,
                                                                children: [
                                                                    !s &&
                                                                        (0, r.jsx)(B, {
                                                                            skuId: t.skuId,
                                                                            className: l()(Y, e7.tZ),
                                                                        }),
                                                                    !c &&
                                                                        (0, r.jsx)("div", {
                                                                            className: e7.oh,
                                                                            children: (0, r.jsx)(eC, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: en,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        e_ &&
                                                            (0, r.jsx)(eQ.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ed,
                                                                onVariantEnter: ee,
                                                                onVariantExit: et,
                                                                overflowProps: eh,
                                                                onTrackClick: em,
                                                            }),
                                                    ],
                                                }),
                                            eR &&
                                                (0, r.jsx)("div", {
                                                    className: e7.Vs,
                                                    children: (0, r.jsxs)(C.e, {
                                                        wrap: !1,
                                                        className: e7.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !f &&
                                                                (0, r.jsx)(eF, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: H,
                                                                    text: z,
                                                                    prioritizedCurrency: en,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: em,
                                                                }),
                                                            !k &&
                                                                (0, r.jsx)(eY, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: w,
                                                                    icon: $,
                                                                    prioritizedCurrency: en,
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
});
function e5(e) {
    let t = (0, v.c)("product_card");
    return e === c.j.PREMIUM_TIER_2_1_DAY && !t;
}
function e3(e) {
    let { skuId: t, ...n } = e,
        i = (0, D.Vm)(t),
        s = (0, f.A)(() => ({ cardId: (0, a.A)() })),
        l = e5(t);
    return null == i || l ? null : (0, r.jsx)(A.R9, { newValue: s, children: (0, r.jsx)(e1, { product: i, ...n }) });
}
function e6(e) {
    let { skuId: t, ...n } = e,
        { state: s, product: l } = (0, _.I)(t, { needsCategory: !1, seedCategoryStore: !0 }),
        o = (0, f.A)(() => ({ cardId: (0, a.A)() })),
        u = e5(t),
        c = i.useContext(D.v3),
        d = i.useMemo(() => ({ ...c, productOverride: l ?? void 0, standalonePreview: !0 }), [c, l]);
    return u
        ? null
        : "loading" === s
          ? (0, r.jsx)(eK.A, {})
          : null == l
            ? null
            : (0, r.jsx)(A.R9, {
                  newValue: o,
                  children: (0, r.jsx)(D.v3.Provider, { value: d, children: (0, r.jsx)(e1, { product: l, ...n }) }),
              });
}
let e8 = function (e) {
    return (0, k.$)("product_card") ? (0, r.jsx)(e6, { ...e }) : (0, r.jsx)(e3, { ...e });
};
