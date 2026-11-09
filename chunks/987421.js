e.d(n, { A: () => tR });
var i = e(477900),
    a = e(582128),
    r = e(503698),
    l = e.n(r),
    s = e(115560),
    o = e(612324),
    c = e(575593),
    d = e(334279),
    u = e(890856),
    x = e(825484),
    I = e(444927),
    k = e(793574),
    p = e(688810),
    C = e(713517),
    b = e(857512),
    m = e(161918);
let f = (0, e(945810).mj)({
    name: "2026-10-fractional-nitro-pricing",
    kind: "user",
    defaultConfig: null,
    variations: { 0: null, 1: 2800, 2: 4200 },
});
function g(t) {
    let { location: n } = t;
    return (f.useConfig({ location: n }), null);
}
var T = e(503089),
    j = e(682301),
    v = e(758461),
    A = e(777829),
    P = e(859587),
    y = e(918838),
    S = e(536572),
    h = e(268959),
    L = e(387945),
    E = e(601938),
    _ = e(140877),
    N = e(164636),
    R = e(821609),
    O = e(44120),
    U = e(465794),
    H = e(757036),
    V = e(206835),
    D = e(106799),
    w = e(652165),
    Y = e(287809),
    B = e(722178),
    M = e(580630),
    W = e(429811),
    F = e(4227),
    $ = e(298072),
    q = e(993408),
    z = e(450481),
    K = e(740076),
    G = e(466459),
    Q = e(623373),
    J = e(561769),
    Z = e(766172),
    X = e(57020),
    tt = e(61750),
    tn = e(758836),
    te = e(682901),
    ti = e(818348),
    ta = e(792996),
    tr = e(508672);
function tl(t) {
    let {
            product: n,
            cardRef: e,
            hasShopDiscount: a,
            analyticsLocations: r,
            selectedVariantIndex: l,
            fiatPrice: s,
            text: o,
            onTrackClick: c,
            productLabel: d,
            tabIndex: u,
        } = t,
        x = null != s ? (0, M.$g)(s.amount, s.currency) : (0, q.R8)(n, a, !1),
        I = (0, b.uM)()?.sessionId,
        k = o ?? ta.intl.formatToPlainString(ta.t["cNSL/j"], { price: x });
    return (0, i.jsx)(R.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(),
                c?.(tn.sH.BUY_WITH_FIAT),
                (0, O.A)({
                    skuId: (0, Z.Y)({ product: n, selectedVariantIndex: l }),
                    returnRef: e,
                    analyticsLocations: r,
                    discoverySessionId: I,
                }));
        },
        text: k,
        "aria-label": ta.intl.formatToPlainString(ta.t["5UYoSr"], { ctaLabel: k, productLabel: d }),
        fullWidth: !0,
        tabIndex: u,
    });
}
function ts(t) {
    let { text: n, onTrackClick: e, productLabel: a, tabIndex: r } = t,
        l = n ?? ta.intl.string(ta.t.sEAnVH);
    return (0, i.jsx)(U.A, {
        subscriptionTier: te.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: l,
        "aria-label": ta.intl.formatToPlainString(ta.t["5UYoSr"], { ctaLabel: l, productLabel: a }),
        onClick: (t) => {
            (t.stopPropagation(), e?.(tn.sH.UNLOCK_WITH_NITRO));
        },
        tabIndex: r,
    });
}
function to(t) {
    let { handlePreviewButtonClick: n, text: e, onTrackClick: a, productLabel: r, tabIndex: l } = t,
        s = e ?? ta.intl.string(ta.t.FdGl5A);
    return (0, i.jsx)(R.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), a?.(tn.sH.VIEW_DETAILS), n(t));
        },
        text: s,
        "aria-label": ta.intl.formatToPlainString(ta.t["5UYoSr"], { ctaLabel: s, productLabel: r }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tc(t) {
    let { handleUseNow: n, isApplying: e, text: a, onTrackClick: r, productLabel: l, tabIndex: s } = t,
        o = a ?? ta.intl.string(ta.t.MAS7uK);
    return (0, i.jsx)(R.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), r?.(tn.sH.USE_NOW), n());
        },
        loading: e,
        text: o,
        "aria-label": ta.intl.formatToPlainString(ta.t["5UYoSr"], { ctaLabel: o, productLabel: l }),
        fullWidth: !0,
        tabIndex: s,
    });
}
function td(t) {
    let { text: n, onTrackClick: e, productLabel: a, tabIndex: r } = t,
        l = (0, V.A)(),
        s = n ?? ta.intl.string(ta.t["2p2aYz"]);
    return (0, i.jsx)(R.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), e?.(tn.sH.EDIT_PROFILE), l());
        },
        text: s,
        "aria-label": ta.intl.formatToPlainString(ta.t["5UYoSr"], { ctaLabel: s, productLabel: a }),
        fullWidth: !0,
        tabIndex: r,
    });
}
function tu(t) {
    let { skuId: n, onClick: e, text: a, productLabel: r, tabIndex: l } = t,
        s = a ?? ta.intl.string(ta.t.FdGl5A);
    return (0, i.jsx)(R.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), e(n));
        },
        text: s,
        "aria-label": ta.intl.formatToPlainString(ta.t["5UYoSr"], { ctaLabel: s, productLabel: r }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tx(t) {
    let {
            product: n,
            isClaimPremiumProductDisabled: e,
            isClaiming: a,
            analyticsLocations: r,
            text: l,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
            tabIndex: d,
        } = t,
        u = l ?? ta.intl.string(ta.t.zp6caO);
    return (0, i.jsx)(R.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(),
                (async function () {
                    (s?.("claim premium product button"),
                        o?.(tn.sH.ADD_TO_COLLECTION),
                        await (0, W.iJ)(n.skuId),
                        (0, tt.A)({ product: n, analyticsLocations: r, purchaseType: tn.gs.PREMIUM_PURCHASE }));
                })());
        },
        disabled: e,
        loading: a,
        loadingStartedLabel: ta.intl.string(ta.t["TYw+9s"]),
        loadingFinishedLabel: ta.intl.string(ta.t.Pg1UP5),
        text: u,
        "aria-label": ta.intl.formatToPlainString(ta.t["5UYoSr"], { ctaLabel: u, productLabel: c }),
        fullWidth: !0,
        tabIndex: d,
    });
}
function tI(t) {
    let {
            product: n,
            checkoutEligiblePrices: e,
            analyticsLocations: a,
            selectedVariantIndex: r,
            text: l,
            onClickAnalytics: s,
            onTrackClick: o,
            productLabel: c,
            tabIndex: d,
        } = t,
        u = (0, b.uM)()?.sessionId,
        x = l ?? ta.intl.formatToPlainString(ta.t.yi41qQ, { orbPrice: e[0].amount });
    return (0, i.jsx)(R.$, {
        variant: "primary",
        text:
            l ??
            ta.intl.format(ta.t.JC15qj, {
                orbPrice: e[0].amount,
                orbIconHook: () => (0, i.jsx)(D.A, { className: tr.f }),
            }),
        onClick: (t) => {
            (t.stopPropagation(),
                s?.("claim with orbs button"),
                o?.(tn.sH.BUY_WITH_ORBS),
                (0, w.B4)({
                    skuId: (0, Z.Y)({ product: n, selectedVariantIndex: r }),
                    onComplete: (t) => {
                        ((0, W.gB)(),
                            (0, tt.A)({
                                product: n,
                                analyticsLocations: a,
                                itemConsumed: t?.entitlements?.[0]?.consumed,
                                purchaseType: tn.gs.ORB,
                            }));
                    },
                    analyticsLocations: a,
                    discoverySessionId: u,
                }));
        },
        "aria-label": ta.intl.formatToPlainString(ta.t["5UYoSr"], { ctaLabel: x, productLabel: c }),
        fullWidth: !0,
        tabIndex: d,
    });
}
function tk(t) {
    let { handlePreviewButtonClick: n, text: e, onTrackClick: a, productLabel: r, tabIndex: l } = t,
        s = e ?? ta.intl.string(ta.t.GpnHfH);
    return (0, i.jsx)(R.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), a?.(tn.sH.PAYMENT_OPTIONS), n(t));
        },
        text: s,
        "aria-label": ta.intl.formatToPlainString(ta.t["5UYoSr"], { ctaLabel: s, productLabel: r }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tp(t) {
    let {
            product: n,
            cardRef: e,
            selectedVariantIndex: a,
            onClick: r,
            text: l,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
            tabIndex: d,
        } = t,
        u = (0, N.bG)([Y.default], () => Y.default.getCurrentUser()),
        x = (0, H.L)(te.PremiumTypes.TIER_2),
        I = B.Ay.canUseShopDiscounts(u),
        C = (0, v.hS)(n),
        { isPurchased: b, isPartiallyOwnedBundle: m } = (0, G.h)(n),
        f = (0, q.G0)(n),
        g = (0, q.tt)(n),
        { isDisabled: T } = (0, K.I)(n.skuId),
        j = (0, q.Zu)({ product: n, isPartiallyOwnedBundle: m, isPurchased: b }),
        {
            shouldCheckoutWithOrbs: A,
            hasSufficientOrbs: P,
            checkoutEligiblePrices: y,
            checkoutEligibleFormerPrices: h,
            isOrbExclusive: L,
        } = (0, X.F)({ product: n, hasShopDiscount: I, prioritizedCurrency: s }),
        E = y.find((t, n) => t.currency !== ti.Yr.DISCORD_ORB && null != h[n]),
        { analyticsLocations: _ } = (0, p.Ay)(k.A.COLLECTIBLES_SHOP_CARD),
        R = (0, S.s7)(n),
        O = (0, J.ql)(n, k.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [U, V] = (0, N.yK)([F.A], () => [
            F.A.isClaiming === n.skuId,
            null != F.A.isClaiming && F.A.isClaiming !== n.skuId,
        ]),
        { handleUseNow: D, isApplying: w, canUseNow: M } = (0, z.p)({ product: n }),
        W = l ?? C ?? void 0;
    if (null != r) return (0, i.jsx)(tu, { onClick: r, skuId: n.skuId, text: l, productLabel: R, tabIndex: d });
    if (f && !x && !g) return (0, i.jsx)(ts, { text: l, onTrackClick: c, productLabel: R, tabIndex: d });
    if (!j || T)
        return (0, i.jsx)(to, { handlePreviewButtonClick: O, text: l, onTrackClick: c, productLabel: R, tabIndex: d });
    if (b)
        return M
            ? (0, i.jsx)(tc, { handleUseNow: D, isApplying: w, text: l, onTrackClick: c, productLabel: R, tabIndex: d })
            : (0, i.jsx)(td, { text: l, onTrackClick: c, productLabel: R, tabIndex: d });
    if (f)
        return (0, i.jsx)(tx, {
            product: n,
            isClaimPremiumProductDisabled: V,
            isClaiming: U,
            analyticsLocations: _,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: R,
            tabIndex: d,
        });
    if (A && P)
        return (0, i.jsx)(tI, {
            product: n,
            checkoutEligiblePrices: y,
            analyticsLocations: _,
            selectedVariantIndex: a,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: R,
            tabIndex: d,
        });
    if (A && !P)
        if (y.length > 1)
            return (0, i.jsx)(tk, {
                handlePreviewButtonClick: O,
                text: l,
                onTrackClick: c,
                productLabel: R,
                tabIndex: d,
            });
        else
            return (0, i.jsx)(to, {
                handlePreviewButtonClick: O,
                text: l,
                onTrackClick: c,
                productLabel: R,
                tabIndex: d,
            });
    return L
        ? (0, i.jsx)(to, { handlePreviewButtonClick: O, text: l, onTrackClick: c, productLabel: R, tabIndex: d })
        : (0, i.jsx)(tl, {
              product: n,
              cardRef: e,
              hasShopDiscount: I,
              analyticsLocations: _,
              selectedVariantIndex: a,
              fiatPrice: E,
              text: W,
              onTrackClick: c,
              productLabel: R,
              tabIndex: d,
          });
}
let tC = function (t) {
    let {
            skuId: n,
            cardRef: e,
            onClick: a,
            text: r,
            prioritizedCurrency: l,
            onClickAnalytics: s,
            onTrackClick: o,
            tabIndex: c,
        } = t,
        d = (0, J.Vm)(n),
        u = (0, $.Q)(d);
    if (null == d) return null;
    let x = (0, Q.rb)(d, u);
    return (0, i.jsx)(tp, {
        product: x,
        cardRef: e,
        selectedVariantIndex: u,
        onClick: a,
        text: r,
        prioritizedCurrency: l,
        onClickAnalytics: s,
        onTrackClick: o,
        tabIndex: c,
    });
};
var tb = e(408278),
    tm = e(39623),
    tf = e(878112),
    tg = e(347722);
function tT(t) {
    let {
            product: n,
            selectedVariantIndex: e,
            cardRef: a,
            onClick: r,
            icon: l,
            prioritizedCurrency: s,
            onClickAnalytics: o,
            onTrackClick: c,
            tabIndex: d,
        } = t,
        u = (0, m.Mk)(),
        x = u?.tab,
        I = (0, b.uM)(),
        p = (0, tg.X)(n, s),
        C = (0, J.ql)(n, k.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        f = (0, S.s7)(n);
    return null != r || null != l
        ? (0, i.jsx)(tb.K, {
              variant: "primary",
              "aria-label": ta.intl.formatToPlainString(ta.t["5UYoSr"], {
                  ctaLabel: ta.intl.string(ta.t.SKNnqq),
                  productLabel: f,
              }),
              icon: l ?? tm.EyeIcon,
              onClick: (t) => {
                  (t.stopPropagation(), null != r ? r(n.skuId) : (c?.(tn.sH.OPEN_DETAILS), C(t)));
              },
              tabIndex: d,
          })
        : p
          ? (0, i.jsx)(b.R9, {
                newValue: { pageCategory: x === tn.G2.HOME ? void 0 : I?.pageCategory },
                children: (0, i.jsx)(tf.A, {
                    primary: !0,
                    product: n,
                    selectedVariantIndex: e,
                    returnRef: a,
                    tooltipDelay: 250,
                    onTrackClick: c,
                    tabIndex: d,
                }),
            })
          : null;
}
let tj = function (t) {
    let {
            skuId: n,
            cardRef: e,
            onClick: a,
            icon: r,
            prioritizedCurrency: l,
            onClickAnalytics: s,
            onTrackClick: o,
            tabIndex: c,
        } = t,
        d = (0, J.Vm)(n),
        u = (0, $.Q)(d);
    if (null == d) return null;
    let x = (0, Q.rb)(d, u);
    return (0, i.jsx)(tT, {
        product: x,
        cardRef: e,
        selectedVariantIndex: u,
        onClick: a,
        icon: r,
        prioritizedCurrency: l,
        onClickAnalytics: s,
        onTrackClick: o,
        tabIndex: c,
    });
};
var tv = e(484469),
    tA = e(784054),
    tP = e(301198),
    ty = e(668253);
function tS(t) {
    let { product: n, selectedVariantIndex: e, isCardHovered: a, onTrackClick: r, tabIndex: l } = t;
    return (0, i.jsx)(tP.R, {
        product: n,
        selectedVariantIndex: e,
        isCardHovered: a,
        className: ty.i,
        onTrackClick: r,
        tabIndex: l,
    });
}
let th = function (t) {
    let { skuId: n, isCardHovered: e, onTrackClick: a, tabIndex: r } = t,
        l = (0, J.Vm)(n),
        s = (0, $.Q)(l);
    return null == l
        ? null
        : (0, i.jsx)(tS, { product: l, selectedVariantIndex: s, isCardHovered: e, onTrackClick: a, tabIndex: r });
};
var tL = e(935094),
    tE = e(521e3),
    t_ = e(496552);
let tN = a.memo(function (t) {
        let {
                product: n,
                hideWishlistButton: e,
                hideProductName: r,
                hideVariantSwitcher: s,
                hidePrice: d,
                hidePrimaryCTA: I,
                hideSecondaryCTA: f,
                badgeOverride: g,
                onClickCard: T,
                onClickPrimaryCTA: j,
                onClickSecondaryCTA: N,
                onMouseEnter: R,
                onMouseLeave: O,
                onFocus: U,
                onBlur: H,
                primaryCTAText: V,
                secondaryCTAIcon: D,
                productNameClassName: w,
                badgeClassName: Y,
                cardClassName: B,
                prioritizedCurrency: M,
                aspectRatio: W,
                hideStaticBundleBackgroundAsset: F,
                listItemProps: $,
            } = t,
            q = $?.tabIndex,
            { previewingVariantIndex: z, handleEntering: K, handleLeaving: G } = (0, tL.f)(n),
            Q = (0, J.gZ)() ?? M,
            Z = (0, v.jo)(n),
            X = Q ?? (Z ? tn.Hi.FIAT : void 0),
            tt = (0, m.Mk)(),
            te = tt?.tab,
            ti = (0, b.uM)(),
            ta = a.useMemo(() => (0, J.UU)(n, te, ti), [n, te, ti]),
            tr = (0, S.s7)(n),
            tl = a.useId(),
            ts = a.useRef(null),
            { isHoveringOrFocusing: to } = (0, C.A)(ts),
            tc = (0, tE.$c)(n.skuId),
            td = (0, y.U)(n),
            tu = (0, o.A)(ts, td),
            tx = (0, J.ql)(n, k.A.COLLECTIBLES_SHOP_CARD, ta),
            { analyticsLocations: tI } = (0, p.Ay)(),
            tk = (0, A.f)({ product: n, analyticsLocations: tI }),
            tp = a.useCallback(
                (t) => {
                    null != T ? T(t) : (tk(tn.sH.OPEN_DETAILS), tx(t));
                },
                [tk, T, tx],
            );
        (0, P.x)(to, n);
        let tb = n.type === c.R.BUNDLE && n.previewAssets?.fgStatic != null,
            tm = n.type === c.R.VARIANTS_GROUP && !s,
            tf = a.useMemo(() => ({ maxVariantsToShow: 4, onClick: tx }), [tx]),
            tg = n.type === c.R.BUNDLE && !F,
            tT = !I || !f,
            tv = !(d && r) || tm,
            tP = tv || tT,
            ty = tT || tm;
        return (0, i.jsx)(u.s, {
            ref: tu,
            onClick: tp,
            "aria-label": tr,
            "aria-describedby": tl,
            className: l()(B, t_.ty, { [t_.yo]: to }),
            buttonProps: { ...$, role: "button" },
            onFocus: () => {
                ($?.onFocus?.(), U?.(n.skuId));
            },
            onBlur: () => H?.(n.skuId),
            onMouseEnter: () => R?.(n.skuId),
            onMouseLeave: () => O?.(n.skuId),
            children: (0, i.jsx)(tE.vf.Provider, {
                value: tc ? ts : null,
                children: (0, i.jsxs)("div", {
                    id: tl,
                    "data-testid": "collectibles-shop-product-card",
                    className: t_.qt,
                    style: { aspectRatio: W },
                    children: [
                        tg &&
                            n.previewAssets?.bgStatic != null &&
                            (0, i.jsx)("img", { className: t_.vD, src: n.previewAssets.bgStatic, alt: "" }),
                        (0, i.jsx)("div", {
                            className: l()(t_.Dq, { [t_.$r]: !r || tv || ty, [t_.T9]: tb }),
                            children: (0, i.jsx)(E.A, { skuId: n.skuId, isCardHovered: to, overrideVariantIndex: z }),
                        }),
                        (0, i.jsxs)("div", {
                            className: t_.N1,
                            children: [
                                (0, i.jsx)(h.A, {
                                    skuId: n.skuId,
                                    badgeOverride: g,
                                    className: Y,
                                    prioritizedCurrency: X,
                                    tabIndex: q,
                                }),
                                !e &&
                                    (0, i.jsx)(th, {
                                        skuId: n.skuId,
                                        isCardHovered: to,
                                        onTrackClick: tk,
                                        tabIndex: q,
                                    }),
                            ],
                        }),
                        tP &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: l()(t_.wY, { [t_.KY]: tb }) }),
                                    (0, i.jsxs)("div", {
                                        className: t_.xQ,
                                        children: [
                                            tv &&
                                                (0, i.jsxs)("div", {
                                                    className: t_.xE,
                                                    children: [
                                                        !(r && d) &&
                                                            (0, i.jsxs)("div", {
                                                                className: t_.Ly,
                                                                children: [
                                                                    !r &&
                                                                        (0, i.jsx)(L.A, {
                                                                            skuId: n.skuId,
                                                                            className: l()(w, t_.tZ),
                                                                        }),
                                                                    !d &&
                                                                        (0, i.jsx)("div", {
                                                                            className: t_.oh,
                                                                            children: (0, i.jsx)(_.A, {
                                                                                skuId: n.skuId,
                                                                                prioritizedCurrency: X,
                                                                                promoPriceLayout: tm
                                                                                    ? _.e.STACKED
                                                                                    : _.e.INLINE,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        tm &&
                                                            (0, i.jsx)(tA.A, {
                                                                skuId: n.skuId,
                                                                isCollapsed: !to,
                                                                onVariantEnter: K,
                                                                onVariantExit: G,
                                                                overflowProps: tf,
                                                                onTrackClick: tk,
                                                                parentTabIndex: q,
                                                            }),
                                                    ],
                                                }),
                                            tT &&
                                                (0, i.jsx)("div", {
                                                    className: t_.Vs,
                                                    children: (0, i.jsxs)(x.e, {
                                                        wrap: !1,
                                                        className: t_.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !I &&
                                                                (0, i.jsx)(tC, {
                                                                    skuId: n.skuId,
                                                                    cardRef: ts,
                                                                    onClick: j,
                                                                    text: V,
                                                                    prioritizedCurrency: X,
                                                                    onClickAnalytics: ta,
                                                                    onTrackClick: tk,
                                                                    tabIndex: q,
                                                                }),
                                                            !f &&
                                                                (0, i.jsx)(tj, {
                                                                    skuId: n.skuId,
                                                                    cardRef: ts,
                                                                    onClick: N,
                                                                    icon: D,
                                                                    prioritizedCurrency: X,
                                                                    onClickAnalytics: ta,
                                                                    onTrackClick: tk,
                                                                    tabIndex: q,
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
        });
    }),
    tR = function (t) {
        let n,
            { skuId: e, ...r } = t,
            o = a.useContext(J.v3),
            { state: c, product: u } = (0, j.IK)(e, {
                needsCategory: !1,
                seedCategoryStore: !0,
                flattenVariants: o.flattenProductVariants,
            }),
            x = (0, J.Vm)(e),
            k = u ?? ("loading" === c ? x : void 0),
            p = (0, I.A)(() => ({ cardId: (0, s.A)() })),
            C = ((n = (0, T.c)("product_card")), e === d.j.PREMIUM_TIER_2_1_DAY && !n),
            m = a.useMemo(() => ({ ...o, productOverride: k, standalonePreview: !0 }), [o, k]);
        return C
            ? null
            : null == k
              ? "loading" === c
                  ? (0, i.jsx)(tv.A, {})
                  : null
              : (0, i.jsxs)(b.R9, {
                    newValue: p,
                    children: [
                        e === d.j.PREMIUM_TIER_2_3_DAY ? (0, i.jsx)(g, { location: "product_card" }) : null,
                        (0, i.jsx)(J.v3.Provider, {
                            value: m,
                            children: (0, i.jsx)(tN, { product: k, ...r, cardClassName: l()(r.cardClassName, t_.w) }),
                        }),
                    ],
                });
    };
