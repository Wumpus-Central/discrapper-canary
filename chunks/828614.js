n.d(t, { A: () => e5 });
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
    I = n(444927),
    f = n(793574),
    g = n(688810),
    x = n(713517),
    A = n(440938),
    k = n(161918),
    m = n(395856),
    v = n(503089),
    _ = n(642160),
    E = n(597783),
    h = n(174459),
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
    H = n(561769),
    D = n(375708);
let w = function (e) {
    let { skuId: t, className: n } = e,
        i = (0, H.Vm)(t),
        s = (0, N.VG)(i),
        l = null != i && i.type === u.R.BUNDLE && i.items.length > 0;
    return (0, r.jsx)(M.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: n,
        lineClamp: 1,
        children: l ? D.intl.format(D.t.UTc0ny, { count: i.items.length, productName: s }) : s,
    });
};
var B = n(947641),
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
    return (0, r.jsx)(B.r, {
        size: "custom",
        color: G.A.colors.INTERACTIVE_TEXT_ACTIVE,
        width: 40,
        height: 40,
        className: l()(Z.zo, { [Z.R]: t }),
    });
}
let er = function (e) {
    let { skuId: t, isCardHovered: n, overrideVariantIndex: i } = e,
        s = (0, H.Vm)(t),
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
    eu = n(57020),
    ec = n(264300);
function ed(e) {
    let { product: t, prioritizedCurrency: n } = e,
        s = (0, ei.bG)([W.default], () => W.default.getCurrentUser()),
        l = es.Ay.canUseCollectibles(s),
        a = (0, y.xM)(s),
        o = (0, el.Do)("ProductCardPriceInner") && t.type === u.R.PROFILE_FRAME,
        c = null != a || o,
        { isDisabled: d } = (0, ea.I)(t.skuId),
        { isPurchased: C, isPartiallyOwnedBundle: p } = (0, z.h)(t),
        I = (0, y.G0)(t),
        f = (0, y.tt)(t),
        {
            checkoutEligiblePrices: g,
            hasSufficientOrbs: x,
            shouldCheckoutWithOrbs: A,
        } = (0, eu.F)({ product: t, hasShopDiscount: c, prioritizedCurrency: n }),
        k = g[0]?.currency,
        m = i.useMemo(() => (0, y.fT)(t, c, k), [t, c, k]);
    return d
        ? (0, r.jsx)(M.E, {
              variant: "text-md/medium",
              color: "text-muted",
              lineClamp: 1,
              children: D.intl.string(D.t.wu4gyV),
          })
        : p
          ? (0, r.jsx)(M.E, {
                variant: "text-md/medium",
                color: "text-muted",
                lineClamp: 1,
                children: D.intl.string(D.t.BEjTij),
            })
          : C && !(I && !l)
            ? (0, r.jsx)(M.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: D.intl.string(D.t["6cfuDj"]),
              })
            : f
              ? (0, r.jsx)(M.E, {
                    variant: "text-md/bold",
                    color: "text-strong",
                    lineClamp: 1,
                    children: D.intl.string(D.t.nBtvYB),
                })
              : I
                ? (0, r.jsx)(M.E, {
                      variant: "text-md/bold",
                      color: "text-strong",
                      lineClamp: 1,
                      children: D.intl.string(D.t.rt69oo),
                  })
                : 0 === g.length
                  ? null
                  : (0, r.jsx)(eo.x, {
                        priceAmount: g[0].amount,
                        priceCurrency: g[0].currency,
                        discount: m,
                        discountIconConfig: c
                            ? { displayMode: "default", source: a ?? y.D0.NITRO, size: "sm" }
                            : void 0,
                        className: A && !x ? ec.c : void 0,
                        variant: "text-md/bold",
                    });
}
let eC = function (e) {
    let { skuId: t, prioritizedCurrency: n } = e,
        i = (0, H.Vm)(t),
        s = (0, R.Q)(i);
    if (null == i) return null;
    let l = (0, j.rb)(i, s);
    return (0, r.jsx)(ed, { product: l, prioritizedCurrency: n });
};
var ep = n(821609),
    eI = n(44120),
    ef = n(465794),
    eg = n(757036),
    ex = n(206835),
    eA = n(106799),
    ek = n(652165),
    em = n(34332),
    ev = n(4227),
    e_ = n(629042),
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
        u = (0, y.R8)(t, i, !1),
        c = (0, A.uM)()?.sessionId;
    return (0, r.jsx)(ep.$, {
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
        text: a ?? D.intl.formatToPlainString(D.t["cNSL/j"], { price: u }),
        fullWidth: !0,
    });
}
function eL(e) {
    let { text: t, onTrackClick: n } = e;
    return (0, r.jsx)(ef.A, {
        subscriptionTier: eT.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: t ?? D.intl.string(D.t.sEAnVH),
        onClick: (e) => {
            e.stopPropagation(), n?.(ej.sH.UNLOCK_WITH_NITRO);
        },
    });
}
function eS(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: i } = e;
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(ej.sH.VIEW_DETAILS), t(e);
        },
        text: n ?? D.intl.string(D.t.FdGl5A),
        fullWidth: !0,
    });
}
function eO(e) {
    let { handleUseNow: t, isApplying: n, text: i, onTrackClick: s } = e;
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), s?.(ej.sH.USE_NOW), t();
        },
        loading: n,
        text: i ?? D.intl.string(D.t.MAS7uK),
        fullWidth: !0,
    });
}
function eN(e) {
    let { text: t, onTrackClick: n } = e,
        i = (0, ex.A)();
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n?.(ej.sH.EDIT_PROFILE), i();
        },
        text: t ?? D.intl.string(D.t["2p2aYz"]),
        fullWidth: !0,
    });
}
function eV(e) {
    let { skuId: t, onClick: n, text: i } = e;
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), n(t);
        },
        text: i ?? D.intl.string(D.t.FdGl5A),
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
            await (0, em.iJ)(t.skuId),
            (0, ey.A)({ product: t, analyticsLocations: s, purchaseType: ej.gs.PREMIUM_PURCHASE });
    }
    return (0, r.jsx)(ep.$, {
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
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        text:
            l ??
            D.intl.format(D.t.JC15qj, {
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
                        (0, em.gB)(),
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
        "aria-label": D.intl.formatToPlainString(D.t.yi41qQ, { orbPrice: n[0].amount }),
        fullWidth: !0,
    });
}
function eD(e) {
    let { handlePreviewButtonClick: t, text: n, onTrackClick: i } = e;
    return (0, r.jsx)(ep.$, {
        variant: "primary",
        onClick: (e) => {
            e.stopPropagation(), i?.(ej.sH.PAYMENT_OPTIONS), t(e);
        },
        text: n ?? D.intl.string(D.t.GpnHfH),
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
        d = (0, ei.bG)([W.default], () => W.default.getCurrentUser()),
        C = (0, eg.L)(eT.PremiumTypes.TIER_2),
        p = es.Ay.canUseShopDiscounts(d),
        I = (0, e_.VZ)(t),
        { isPurchased: x, isPartiallyOwnedBundle: A } = (0, z.h)(t),
        k = (0, y.G0)(t),
        m = (0, y.tt)(t),
        { isDisabled: v } = (0, ea.I)(t.skuId),
        _ = (0, y.Zu)({ product: t, isPartiallyOwnedBundle: A, isPurchased: x }),
        {
            shouldCheckoutWithOrbs: E,
            hasSufficientOrbs: h,
            checkoutEligiblePrices: R,
            isOrbExclusive: j,
        } = (0, eu.F)({ product: t, hasShopDiscount: p, prioritizedCurrency: a }),
        { analyticsLocations: T } = (0, g.Ay)(f.A.COLLECTIBLES_SHOP_CARD),
        b = (0, H.ql)(t, f.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [P, L] = (0, ei.yK)([ev.A], () => [
            ev.A.isClaiming === t.skuId,
            null != ev.A.isClaiming && ev.A.isClaiming !== t.skuId,
        ]),
        { handleUseNow: S, isApplying: O, canUseNow: N } = (0, eE.p)({ product: t }),
        V = l ?? I ?? void 0;
    if (null != s) return (0, r.jsx)(eV, { onClick: s, skuId: t.skuId, text: l });
    if (k && !C && !m) return (0, r.jsx)(eL, { text: l, onTrackClick: u });
    if (!_ || v) return (0, r.jsx)(eS, { handlePreviewButtonClick: b, text: l, onTrackClick: u });
    if (x)
        return N
            ? (0, r.jsx)(eO, { handleUseNow: S, isApplying: O, text: l, onTrackClick: u })
            : (0, r.jsx)(eN, { text: l, onTrackClick: u });
    if (c)
        return (0, r.jsx)(g.f5, {
            value: [...T, f.A.PROFILE_FRAMES_EA_MARKETING],
            children: (0, r.jsx)(eL, { text: D.intl.string(D.t["9wfL34"]), onTrackClick: u }),
        });
    if (k)
        return (0, r.jsx)(eM, {
            product: t,
            isClaimPremiumProductDisabled: L,
            isClaiming: P,
            analyticsLocations: T,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (E && h)
        return (0, r.jsx)(eH, {
            product: t,
            checkoutEligiblePrices: R,
            analyticsLocations: T,
            selectedVariantIndex: i,
            text: l,
            onClickAnalytics: o,
            onTrackClick: u,
        });
    if (E && !h)
        if (R.length > 1) return (0, r.jsx)(eD, { handlePreviewButtonClick: b, text: l, onTrackClick: u });
        else return (0, r.jsx)(eS, { handlePreviewButtonClick: b, text: l, onTrackClick: u });
    return j
        ? (0, r.jsx)(eS, { handlePreviewButtonClick: b, text: l, onTrackClick: u })
        : (0, r.jsx)(eP, {
              product: t,
              cardRef: n,
              hasShopDiscount: p,
              analyticsLocations: T,
              selectedVariantIndex: i,
              text: V,
              onTrackClick: u,
          });
}
let eB = function (e) {
    let { skuId: t, cardRef: n, onClick: i, text: s, prioritizedCurrency: l, onClickAnalytics: a, onTrackClick: o } = e,
        u = (0, H.Vm)(t),
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
        I = (0, H.ql)(t, f.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o);
    return null != s || null != l
        ? (0, r.jsx)(eF.K, {
              variant: "primary",
              "aria-label": D.intl.string(D.t.SKNnqq),
              icon: l ?? eU.b,
              onClick: (e) => {
                  e.stopPropagation(), null != s ? s(t.skuId) : (u?.(ej.sH.OPEN_DETAILS), I(e));
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
        u = (0, H.Vm)(t),
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
        s = (0, H.Vm)(t),
        l = (0, R.Q)(s);
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
            hidePrimaryCTA: I,
            hideSecondaryCTA: m,
            badgeOverride: v,
            skipLimitedTimeCheck: _,
            onClickCard: M,
            onClickPrimaryCTA: D,
            onClickSecondaryCTA: B,
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
        { previewingVariantIndex: J, handleEntering: ee, handleLeaving: et } = (0, eJ.f)(t),
        en = (0, H.gZ)() ?? q,
        ei = (0, k.Mk)(),
        es = ei?.tab,
        el = (0, A.uM)(),
        ea = i.useMemo(() => (0, H.UU)(t, es, el), [t, es, el]),
        eo = (0, N.s7)(t),
        eu = i.useId(),
        ec = i.useRef(null),
        { isHoveringOrFocusing: ed } = (0, x.A)(ec),
        ep = (0, e0.$c)(t.skuId),
        eI = (function (e) {
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
        ef = (0, o.A)(ec, eI),
        { handleCardVisibilityChange: eg } = (0, E.Z)(t.skuId, es === ej.G2.CATALOG ? "full" : es),
        ex = (0, H.ql)(t, f.A.COLLECTIBLES_SHOP_CARD, ea),
        { analyticsLocations: eA } = (0, g.Ay)(),
        ek = (function (e) {
            let { product: t, analyticsLocations: n } = e,
                { cardId: r, sessionId: s, tilePosition: l } = (0, A.uM)() ?? {},
                a = (0, R.Q)(t),
                o = (0, T.o)(),
                u = (0, y.xM)(o);
            return i.useCallback(
                (e, i) => {
                    let o = (0, j.B1)(t) ? (t.variants[i ?? a]?.skuId ?? t.skuId) : t.skuId;
                    h.default.track(b.HAw.SHOP_CARD_CLICKED, {
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
        em = i.useCallback(
            (e) => {
                null != M ? M(e) : (ek(ej.sH.OPEN_DETAILS), ex(e));
            },
            [ek, M, ex],
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
                h.default.track(b.HAw.SHOP_CARD_HOVERED, {
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
        eE = i.useMemo(() => ({ maxVariantsToShow: 4, onClick: ex }), [ex]),
        eh = t.type === u.R.BUNDLE && !Z,
        eR = !I || !m,
        ey = !(c && s) || e_,
        eT = ey || eR,
        eb = eR || e_;
    return (0, r.jsx)(d.L, {
        innerRef: ec,
        onChange: eg,
        threshold: 0,
        children: (0, r.jsx)(C.s, {
            ref: ef,
            onClick: em,
            "aria-label": eo,
            "aria-describedby": eu,
            className: l()(Q, e2.ty, { [e2.yo]: ed }),
            onFocus: () => G?.(t.skuId),
            onBlur: () => W?.(t.skuId),
            onMouseEnter: () => F?.(t.skuId),
            onMouseLeave: () => U?.(t.skuId),
            children: (0, r.jsx)(e0.vf.Provider, {
                value: ep ? ec : null,
                children: (0, r.jsxs)("div", {
                    id: eu,
                    className: e2.qt,
                    style: { aspectRatio: X },
                    children: [
                        eh &&
                            t.previewAssets?.bgStatic != null &&
                            (0, r.jsx)("img", { className: e2.vD, src: t.previewAssets.bgStatic, alt: "" }),
                        (0, r.jsx)("div", {
                            className: l()(e2.Dq, { [e2.$r]: !s || ey || eb, [e2.T9]: ev }),
                            children: (0, r.jsx)(er, { skuId: t.skuId, isCardHovered: ed, overrideVariantIndex: J }),
                        }),
                        (0, r.jsxs)("div", {
                            className: e2.N1,
                            children: [
                                (0, r.jsx)(V.A, {
                                    skuId: t.skuId,
                                    badgeOverride: v,
                                    className: K,
                                    prioritizedCurrency: en,
                                    skipLimitedTimeCheck: _,
                                }),
                                !n && (0, r.jsx)(eZ, { skuId: t.skuId, isCardHovered: ed, onTrackClick: ek }),
                            ],
                        }),
                        eT &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)("div", { className: l()(e2.wY, { [e2.KY]: ev }) }),
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
                                                                        (0, r.jsx)(w, {
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
                                                        e_ &&
                                                            (0, r.jsx)(eK.A, {
                                                                skuId: t.skuId,
                                                                isCollapsed: !ed,
                                                                onVariantEnter: ee,
                                                                onVariantExit: et,
                                                                overflowProps: eE,
                                                                onTrackClick: ek,
                                                            }),
                                                    ],
                                                }),
                                            eR &&
                                                (0, r.jsx)("div", {
                                                    className: e2.Vs,
                                                    children: (0, r.jsxs)(p.e, {
                                                        wrap: !1,
                                                        className: e2.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !I &&
                                                                (0, r.jsx)(eB, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: D,
                                                                    text: z,
                                                                    prioritizedCurrency: en,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: ek,
                                                                }),
                                                            !m &&
                                                                (0, r.jsx)(e$, {
                                                                    skuId: t.skuId,
                                                                    cardRef: ec,
                                                                    onClick: B,
                                                                    icon: $,
                                                                    prioritizedCurrency: en,
                                                                    onClickAnalytics: ea,
                                                                    onTrackClick: ek,
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
        i = (0, H.Vm)(t),
        s = (0, I.A)(() => ({ cardId: (0, a.A)() })),
        l = e1(t);
    return null == i || l ? null : (0, r.jsx)(A.R9, { newValue: s, children: (0, r.jsx)(e7, { product: i, ...n }) });
}
function e8(e) {
    let { skuId: t, ...n } = e,
        { state: s, product: l } = (0, _.I)(t, { needsCategory: !1, seedCategoryStore: !0 }),
        o = (0, I.A)(() => ({ cardId: (0, a.A)() })),
        u = e1(t),
        c = i.useContext(H.v3),
        d = i.useMemo(() => ({ ...c, productOverride: l ?? void 0, standalonePreview: !0 }), [c, l]);
    return u
        ? null
        : "loading" === s
          ? (0, r.jsx)(eY.A, {})
          : null == l
            ? null
            : (0, r.jsx)(A.R9, {
                  newValue: o,
                  children: (0, r.jsx)(H.v3.Provider, { value: d, children: (0, r.jsx)(e7, { product: l, ...n }) }),
              });
}
let e5 = function (e) {
    return (0, m.$)("product_card") ? (0, r.jsx)(e8, { ...e }) : (0, r.jsx)(e3, { ...e });
};
