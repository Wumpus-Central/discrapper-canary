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
    C = n(890856),
    p = n(825484),
    f = n(444927),
    I = n(793574),
    g = n(688810),
    x = n(713517),
    A = n(440938),
    k = n(161918),
    m = n(395856),
    v = n(503089),
    _ = n(642160),
    E = n(629042),
    h = n(597783),
    R = n(174459),
    y = n(298072),
    j = n(993408),
    T = n(623373),
    b = n(331884),
    P = n(652215),
    L = n(66455),
    S = n(562708),
    O = n(172218),
    N = n(139286),
    V = n(536572),
    M = n(268959),
    H = n(834730),
    D = n(561769),
    w = n(375708);
let B = function (e) {
    let { skuId: t, className: n } = e,
        i = (0, D.Vm)(t),
        s = (0, V.VG)(i),
        l = null != i && i.type === u.R.BUNDLE && i.items.length > 0;
    return (0, r.jsx)(H.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: n,
        lineClamp: 1,
        children: l ? w.intl.format(w.t.UTc0ny, { count: i.items.length, productName: s }) : s,
    });
};
var F = n(947641),
    U = n(17928),
    G = n(778712),
    W = n(661531),
    z = n(287809),
    $ = n(466459),
    Y = n(139136),
    K = n(395744),
    Q = n(846957),
    q = n(929283),
    X = n(245068),
    Z = n(761365),
    J = n(955117);
function ee(e) {
    let { responsive: t } = e;
    return !0 !== t;
}
function et(e) {
    let { product: t, isCardHovered: n } = e,
        i = (0, T.YW)(t),
        { isPurchased: s, isPartiallyOwnedBundle: a } = (0, $.h)(t),
        o = i === u.R.PROFILE_EFFECT || i === u.R.PROFILE_FRAME || i === u.R.BUNDLE;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: l()(J.mA, { [J.zj]: (s || a) && !n, [J.Ge]: o }),
                children: (0, r.jsx)(en, { product: t, isCardHovered: n }),
            }),
            s && (0, r.jsx)(er, { hidden: n }),
        ],
    });
}
function en(e) {
    let t,
        { product: n, isCardHovered: i } = e,
        s = (0, U.bG)([z.default], () => z.default.getCurrentUser()),
        l = (0, T.YW)(n),
        a =
            ((t = (0, y.Q)(n)),
            n?.type === u.R.VARIANTS_GROUP && null != n.variants && n.variants.length > t
                ? n.variants[t].items[0]
                : n.items[0]);
    switch (l) {
        case u.R.PROFILE_EFFECT:
            return (0, r.jsx)(Y.A, { skuId: a.skuId, isHighlighted: i, removeSetHeight: !0, hideBackground: !0 });
        case u.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: J.pI, children: (0, r.jsx)(K.A, { frame: a, filterLayer: ee }) });
        case u.R.AVATAR_DECORATION:
            return (0, r.jsx)(q.i, { item: a, user: s, isHighlighted: i, avatarSize: G._3.SIZE_120 });
        case u.R.NAMEPLATE:
            return (0, r.jsx)(Z.A, { nameplate: a, user: s, isHighlighted: i });
        case u.R.BUNDLE:
            return (0, r.jsx)(X.X, { product: n, user: s, isHighlighted: i });
        case u.R.EXTERNAL_SKU:
            return (0, r.jsx)(Q.B, { product: n, animationState: i ? "on" : "off" });
        default:
            return null;
    }
}
function er(e) {
    let { hidden: t } = e;
    return (0, r.jsx)(F.r, {
        size: "custom",
        color: W.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: l()(J.zo, { [J.R]: t }),
    });
}
let ei = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, D.Vm)(t),
        l = (0, y.Q)(s);
    if (null == s) return null;
    let a = (0, T.rb)(s, i ?? l);
    return (0, r.jsx)(et, { product: a, isCardHovered: n });
};
var es = n(702841),
    el = n(428262),
    ea = n(13875),
    eo = n(740076),
    eu = n(219103),
    ec = n(57020),
    ed = n(264300);
function eC(e) {
    let { product: t, prioritizedCurrency: n } = e,
        s = (0, es.bG)([z.default], () => z.default.getCurrentUser()),
        l = el.Ay.canUseCollectibles(s),
        a = (0, j.xM)(s),
        o = (0, ea.Do)("ProductCardPriceInner") && t.type === u.R.PROFILE_FRAME,
        c = null != a || o,
        { isDisabled: d } = (0, eo.I)(t.skuId),
        { isPurchased: C, isPartiallyOwnedBundle: p } = (0, $.h)(t),
        f = (0, j.G0)(t),
        I = (0, j.tt)(t),
        {
            checkoutEligiblePrices: g,
            hasSufficientOrbs: x,
            shouldCheckoutWithOrbs: A,
        } = (0, ec.F)({ product: t, hasShopDiscount: c, prioritizedCurrency: n }),
        k = g[0]?.currency,
        m = i.useMemo(() => (0, j.fT)(t, c, k), [t, c, k]);
    return d
        ? (0, r.jsx)(H.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: w.intl.string(w.t.wu4gyV),
          })
        : p
          ? (0, r.jsx)(H.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: w.intl.string(w.t.BEjTij),
            })
          : C && !(f && !l)
            ? (0, r.jsx)(H.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: w.intl.string(w.t["6cfuDj"]),
              })
            : I
              ? (0, r.jsx)(H.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: w.intl.string(w.t.nBtvYB),
                })
              : f
                ? (0, r.jsx)(H.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: w.intl.string(w.t.rt69oo),
                  })
                : 0 === g.length
                  ? null
                  : (0, r.jsx)(eu.x, {
                        priceAmount: g[0].amount,
                        priceCurrency: g[0].currency,
                        discount: m,
                        discountIconConfig: c
                            ? { displayMode: "default", source: a ?? j.D0.NITRO, size: "sm" }
                            : void 0,
                        className: A && !x ? ed.c : void 0,
                        variant: "text-md/bold",
                    });
}
let ep = function (e) {
    let { skuId: t, prioritizedCurrency: n } = e,
        i = (0, D.Vm)(t),
        s = (0, y.Q)(i);
    if (null == i) return null;
    let l = (0, T.rb)(i, s);
    return (0, r.jsx)(eC, { product: l, prioritizedCurrency: n });
};
var ef = n(821609),
    eI = n(44120),
    eg = n(465794),
    ex = n(757036),
    eA = n(206835),
    ek = n(106799),
    em = n(652165),
    ev = n(34332),
    e_ = n(4227),
    eE = n(450481),
    eh = n(395068),
    eR = n(766172),
    ey = n(61750),
    ej = n(758836),
    eT = n(202541),
    eb = n(910393);
function eP(e) {
    let {
            product: t,
            cardRef: n,
            hasShopDiscount: i,
            analyticsLocations: s,
            selectedVariantIndex: l,
            text: a,
            onTrackClick: o,
        } = e,
        u = (0, j.R8)(t, i, !1),
        c = (0, A.uM)()?.sessionId;
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(),
                o?.(ej.sH.BUY_WITH_FIAT),
                (0, eI.A)({
                    skuId: (0, eR.Y)({ product: t, selectedVariantIndex: l }),
                    returnRef: n,
                    analyticsLocations: s,
                    discoverySessionId: c,
                });
        },
        text: a ?? w.intl.formatToPlainString(w.t["cNSL/j"], { price: u }),
        fullWidth: !0,
    });
}
function eL(e) {
    let { text: t, onTrackClick: n } = e;
    return (0, r.jsx)(eg.A, {
        subscriptionTier: eT.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: t ?? w.intl.string(w.t.sEAnVH),
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
        text: n ?? w.intl.string(w.t.FdGl5A),
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
        text: i ?? w.intl.string(w.t.MAS7uK),
        fullWidth: !0,
    });
}
function eN(e) {
    let { text: t, onTrackClick: n } = e,
        i = (0, eA.A)();
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n?.(ej.sH.EDIT_PROFILE), i();
        },
        text: t ?? w.intl.string(w.t["2p2aYz"]),
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
        text: i ?? w.intl.string(w.t.FdGl5A),
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
            await (0, ev.iJ)(t.skuId),
            (0, ey.A)({ product: t, analyticsLocations: s, purchaseType: ej.gs.PREMIUM_PURCHASE });
    }
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), u();
        },
        disabled: n,
        loading: i,
        loadingStartedLabel: w.intl.string(w.t["TYw+9s"]),
        loadingFinishedLabel: w.intl.string(w.t.Pg1UP5),
        text: l ?? w.intl.string(w.t.zp6caO),
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
            w.intl.format(w.t.JC15qj, {
                orbPrice: n[0].amount,
                orbIconHook: () => (0, r.jsx)(ek.A, { className: eb.f }),
            }),
        onClick: (e) => {
            e.stopPropagation(),
                a?.("claim with orbs button"),
                o?.(ej.sH.BUY_WITH_ORBS),
                (0, em.B4)({
                    skuId: (0, eR.Y)({ product: t, selectedVariantIndex: s }),
                    onComplete: (e) => {
                        (0, ev.gB)(),
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
        "aria-label": w.intl.formatToPlainString(w.t.yi41qQ, { orbPrice: n[0].amount }),
        fullWidth: !0,
    });
}
function eD(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: i } = e;
    return (0, r.jsx)(ef.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(ej.sH.PAYMENT_OPTIONS), t(e);
        },
        text: n ?? w.intl.string(w.t.GpnHfH),
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
        c = (0, eh.A)({ location: "ProductCardPrimaryCTAInner", product: t }),
        d = (0, es.bG)([z.default], () => z.default.getCurrentUser()),
        C = (0, ex.L)(eT.PremiumTypes.TIER_2),
        p = el.Ay.canUseShopDiscounts(d),
        f = (0, E.VZ)(t),
        { isPurchased: x, isPartiallyOwnedBundle: A } = (0, $.h)(t),
        k = (0, j.G0)(t),
        m = (0, j.tt)(t),
        { isDisabled: v } = (0, eo.I)(t.skuId),
        _ = (0, j.Zu)({ product: t, isPartiallyOwnedBundle: A, isPurchased: x }),
        {
            shouldCheckoutWithOrbs: h,
            hasSufficientOrbs: R,
            checkoutEligiblePrices: y,
            isOrbExclusive: T,
        } = (0, ec.F)({ product: t, hasShopDiscount: p, prioritizedCurrency: a }),
        { analyticsLocations: b } = (0, g.Ay)(I.A.COLLECTIBLES_SHOP_CARD),
        P = (0, D.ql)(t, I.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [L, S] = (0, es.yK)([e_.A], () => [
            e_.A.isClaiming === t.skuId,
            null != e_.A.isClaiming && e_.A.isClaiming !== t.skuId,
        ]),
        { handleUseNow: O, isApplying: N, canUseNow: V } = (0, eE.p)({ product: t }),
        M = l ?? f ?? void 0;
    if (null != s) return (0, r.jsx)(eV, { onClick: s, skuId: t.skuId, text: l });
    if (k && !C && !m) return (0, r.jsx)(eL, { text: l, onTrackClick: u });
    if (!_ || v) return (0, r.jsx)(eS, { handlePreviewButtonClick: P, text: l, onTrackClick: u });
    if (x)
        return V
            ? (0, r.jsx)(eO, { handleUseNow: O, isApplying: N, text: l, onTrackClick: u })
            : (0, r.jsx)(eN, { text: l, onTrackClick: u });
    if (c)
        return (0, r.jsx)(g.f5, {
            value: [...b, I.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, r.jsx)(eL, { text: w.intl.string(w.t["9wfL34"]), onTrackClick: u }),
        });
    if (k)
        return (0, r.jsx)(eM, {
            product: t,
            isClaimPremiumProductDisabled: S,
            isClaiming: L,
            analyticsLocations: b,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (h && R)
        return (0, r.jsx)(eH, {
            product: t,
            checkoutEligiblePrices: y,
            analyticsLocations: b,
            selectedVariantIndex: i,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (h && !R)
        if (y.length > 1) return (0, r.jsx)(eD, { handlePreviewButtonClick: P, text: l, onTrackClick: u });
        else return (0, r.jsx)(eS, { handlePreviewButtonClick: P, text: l, onTrackClick: u });
    return T
        ? (0, r.jsx)(eS, { handlePreviewButtonClick: P, text: l, onTrackClick: u })
        : (0, r.jsx)(eP, {
              product: t,
              cardRef: n,
              hasShopDiscount: p,
              analyticsLocations: b,
              selectedVariantIndex: i,
              text: M,
              onTrackClick: u,
          });
}
let eB = function (e) {
    let { skuId: t, cardRef: n, onClick: i, text: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = e,
        u = (0, D.Vm)(t),
        c = (0, y.Q)(u);
    if (null == u) return null;
    let d = (0, T.rb)(u, c);
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
var eF = n(408278),
    eU = n(39623),
    eG = n(878112),
    eW = n(347722);
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
        c = (0, k.Mk)(),
        d = c?.tab,
        C = (0, A.uM)(),
        p = (0, eW.X)(t, a),
        f = (0, D.ql)(t, I.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o);
    return null != s || null != l
        ? (0, r.jsx)(eF.K, {
              variant: "primary",
              "aria-label": w.intl.string(w.t.SKNnqq),
              icon: l ?? eU.b,
              onClick: (e) => {
                  e.stopPropagation(), null != s ? s(t.skuId) : (u?.(ej.sH.OPEN_DETAILS), f(e));
              },
          })
        : p
          ? (0, r.jsx)(A.R9, {
                newValue: { pageCategory: d === ej.G2.HOME ? void 0 : C?.pageCategory },
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
}
let e$ = function (e) {
    let { skuId: t, cardRef: n, onClick: i, icon: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = e,
        u = (0, D.Vm)(t),
        c = (0, y.Q)(u);
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
    eq = n(362523);
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
        l = (0, y.Q)(s);
    return null == s
        ? null
        : (0, r.jsx)(eX, { product: s, selectedVariantIndex: l, isCardHovered: n, onTrackClick: i });
};
var eJ = n(935094),
    e0 = n(521e3),
    e2 = n(162945);
let e7 = i.memo(function (e) {
    let {
            product: t,
            hideWishlistButton: n,
            hideProductName: s,
            hideVariantSwitcher: a,
            hidePrice: c,
            hidePrimaryCTA: f,
            hideSecondaryCTA: m,
            badgeOverride: v,
            skipLimitedTimeCheck: _,
            onClickCard: H,
            onClickPrimaryCTA: w,
            onClickSecondaryCTA: F,
            onMouseEnter: U,
            onMouseLeave: G,
            onFocus: W,
            onBlur: z,
            primaryCTAText: $,
            secondaryCTAIcon: Y,
            productNameClassName: K,
            badgeClassName: Q,
            cardClassName: q,
            prioritizedCurrency: X,
            aspectRatio: Z,
            hideStaticBundleBackgroundAsset: J,
        } = e,
        { previewingVariantIndex: ee, handleEntering: et, handleLeaving: en } = (0, eJ.f)(t),
        er = (0, D.gZ)() ?? X,
        es = (0, E.Nc)(t),
        el = er ?? (es ? D.Hi.FIAT : void 0),
        ea = (0, k.Mk)(),
        eo = ea?.tab,
        eu = (0, A.uM)(),
        ec = i.useMemo(() => (0, D.UU)(t, eo, eu), [t, eo, eu]),
        ed = (0, V.s7)(t),
        eC = i.useId(),
        ef = i.useRef(null),
        { isHoveringOrFocusing: eI } = (0, x.A)(ef),
        eg = (0, e0.$c)(t.skuId),
        ex = (function (e) {
            let t = (0, A.uM)(),
                { analyticsLocations: n } = (0, g.Ay)(),
                r = (0, y.Q)(e),
                s = (0, b.o)(),
                l = (0, j.xM)(s),
                a = i.useRef(null),
                o = i.useRef(!1),
                u = i.useRef(r);
            i.useEffect(() => {
                u.current = r;
            }, [r]);
            let c = i.useCallback(() => {
                    let r = (0, T.B1)(e);
                    (0, N.x)(
                        {
                            name: S.ImpressionNames.SHOP_CARD,
                            type: S.ImpressionTypes.VIEW,
                            properties: {
                                sku_id: r ? (e.variants[u.current]?.skuId ?? e.skuId) : e.skuId,
                                card_id: t?.cardId,
                                shop_session_id: t?.sessionId,
                                position_in_section: t?.tilePosition,
                                product_sku_ids: (0, T.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                location_stack: n,
                                discount_source: (0, j.b_)(l),
                            },
                        },
                        !1,
                        !0,
                    );
                }, [e, t?.cardId, t?.sessionId, t?.tilePosition, n, l]),
                d = (0, O.K)((e) => {
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
        eA = (0, o.A)(ef, ex),
        { handleCardVisibilityChange: ek } = (0, h.Z)(t.skuId, eo === ej.G2.CATALOG ? "full" : eo),
        em = (0, D.ql)(t, I.A.COLLECTIBLES_SHOP_CARD, ec),
        { analyticsLocations: ev } = (0, g.Ay)(),
        e_ = (function (e) {
            let { product: t, analyticsLocations: n } = e,
                { cardId: r, sessionId: s, tilePosition: l } = (0, A.uM)() ?? {},
                a = (0, y.Q)(t),
                o = (0, b.o)(),
                u = (0, j.xM)(o);
            return i.useCallback(
                (e, i) => {
                    let o = (0, T.B1)(t) ? (t.variants[i ?? a]?.skuId ?? t.skuId) : t.skuId;
                    R.default.track(P.HAw.SHOP_CARD_CLICKED, {
                        sku_id: o,
                        cta: e,
                        shop_session_id: s,
                        card_id: r,
                        product_sku_ids: (0, T.v8)(t),
                        location_stack: n,
                        position_in_section: l,
                        discount_source: (0, j.b_)(u),
                    });
                },
                [t, a, s, r, n, l, u],
            );
        })({ product: t, analyticsLocations: ev }),
        eE = i.useCallback(
            (e) => {
                null != H ? H(e) : (e_(ej.sH.OPEN_DETAILS), em(e));
            },
            [e_, H, em],
        );
    !(function (e, t) {
        let n = (0, A.uM)(),
            { analyticsLocations: r } = (0, g.Ay)(),
            s = (0, y.Q)(t),
            l = i.useRef(!1),
            a = (0, L.A)(n),
            o = (0, L.A)(t),
            u = (0, L.A)(s),
            c = (0, L.A)(r);
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
                R.default.track(P.HAw.SHOP_CARD_HOVERED, {
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
    })(eI, t);
    let eh = t.type === u.R.BUNDLE && t.previewAssets?.fgStatic != null,
        eR = t.type === u.R.VARIANTS_GROUP && !a,
        ey = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: em }), [em]),
        eT = t.type === u.R.BUNDLE && !J,
        eb = !f || !m,
        eP = !(c && s) || eR,
        eL = eP || eb,
        eS = eb || eR;
    return (0, r.jsx)(d.L, {
        innerRef: ef,
        onChange: ek,
        threshold: 0,
        children: (0, r.jsx)(C.s, {
            ref: eA,
            onClick: eE,
            "aria-label": ed,
            "aria-describedby": eC,
            className: l()(q, e2.ty, { [e2.yo]: eI }),
            onFocus: () => W?.(t.skuId),
            onBlur: () => z?.(t.skuId),
            onMouseEnter: () => U?.(t.skuId),
            onMouseLeave: () => G?.(t.skuId),
            children: (0, r.jsx)(e0.vf.Provider, {
                value: eg ? ef : null,
                children: (0, r.jsxs)("div", {
                    id: eC,
                    className: e2.qt,
                    style: { aspectRatio: Z },
                    children: [
                        eT &&
                            t.previewAssets?.bgStatic != null &&
                            (0, r.jsx)("img", { className: e2.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, r.jsx)("div", {
                            className: l()(e2.Dq, { [e2.$r]: !s || eP || eS, [e2.T9]: eh }),
                            children: (0, r.jsx)(ei, { skuId: t.skuId, isCardHovered: eI, overrideVariantIndex: ee }),
                        }),
                        (0, r.jsxs)("div", {
                            className: e2.N1,
                            children: [
                                (0, r.jsx)(M.A, {
                                    skuId: t.skuId,
                                    badgeOverride: v,
                                    className: Q,
                                    prioritizedCurrency: el,
                                    skipLimitedTimeCheck: _,
                                }),
                                !n && (0, r.jsx)(eZ, { skuId: t.skuId, isCardHovered: eI, onTrackClick: e_ }),
                            ],
                        }),
                        eL &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", { className: l()(e2.wY, { [e2.KY]: eh }) }),
                                    (0, r.jsxs)("div", {
                                        className: e2.xQ,
                                        children: [
                                            eP &&
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
                                                                            className: l()(K, e2.tZ),
                                                                        }),
                                                                    !c &&
                                                                        (0, r.jsx)("div", {
                                                                            className: e2.oh,
                                                                            children: (0, r.jsx)(ep, {
                                                                                skuId: t.skuId,
                                                                                prioritizedCurrency: el,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        eR &&
                                                            (0, r.jsx)(eK.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !eI,
                                                                onVariantEnter: et,
                                                                onVariantExit: en,
                                                                overflowProps: ey,
                                                                onTrackClick: e_,
                                                            }),
                                                    ],
                                                }),
                                            eb &&
                                                (0, r.jsx)("div", {
                                                    className: e2.Vs,
                                                    children: (0, r.jsxs)(p.e, {
                                                        wrap: !1,
                                                        className: e2.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !f &&
                                                                (0, r.jsx)(eB, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ef,
                                                                    onClick: w,
                                                                    text: $,
                                                                    prioritizedCurrency: el,
                                                                    onClickAnalytics: ec,
                                                                    onTrackClick: e_,
                                                                }),
                                                            !m &&
                                                                (0, r.jsx)(e$, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ef,
                                                                    onClick: F,
                                                                    icon: Y,
                                                                    prioritizedCurrency: el,
                                                                    onClickAnalytics: ec,
                                                                    onTrackClick: e_,
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
    let t = (0, v.c)("product_card");
    return e === c.j.PREMIUM_TIER_2_1_DAY && !t;
}
function e3(e) {
    let { skuId: t, ...n } = e,
        i = (0, D.Vm)(t),
        s = (0, f.A)(() => ({ cardId: (0, a.A)() })),
        l = e1(t);
    return null == i || l ? null : (0, r.jsx)(A.R9, { newValue: s, children: (0, r.jsx)(e7, { product: i, ...n }) });
}
function e8(e) {
    let { skuId: t, ...n } = e,
        { state: s, product: l } = (0, _.I)(t, { needsCategory: !1, seedCategoryStore: !0 }),
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
            : (0, r.jsx)(A.R9, {
                  newValue: o,
                  children: (0, r.jsx)(D.v3.Provider, { value: d, children: (0, r.jsx)(e7, { product: l, ...n }) }),
              });
}
let e6 = function (e) {
    return (0, m.$)("product_card") ? (0, r.jsx)(e8, { ...e }) : (0, r.jsx)(e3, { ...e });
};
