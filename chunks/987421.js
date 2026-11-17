e.d(n, { A: () => tU });
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
    j = e(818296),
    v = e(682301),
    A = e(777829),
    P = e(859587),
    y = e(918838),
    S = e(151115),
    h = e(536572),
    L = e(268959),
    E = e(387945),
    _ = e(601938),
    N = e(140877),
    R = e(164636),
    O = e(821609),
    U = e(44120),
    H = e(465794),
    V = e(757036),
    D = e(206835),
    w = e(106799),
    Y = e(652165),
    B = e(287809),
    M = e(448645),
    W = e(580630),
    F = e(969935),
    $ = e(4227),
    q = e(298072),
    z = e(993408),
    K = e(450481),
    G = e(740076),
    Q = e(466459),
    J = e(758461),
    Z = e(623373),
    X = e(561769),
    tt = e(766172),
    tn = e(57020),
    te = e(61750),
    ti = e(758836),
    ta = e(682901),
    tr = e(818348),
    tl = e(792996),
    ts = e(508672);
function to(t) {
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
        x = null != s ? (0, W.$g)(s.amount, s.currency) : (0, z.R8)(n, a, !1),
        I = (0, b.uM)()?.sessionId,
        k = o ?? tl.intl.formatToPlainString(tl.t["cNSL/j"], { price: x });
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(),
                c?.(ti.sH.BUY_WITH_FIAT),
                (0, U.A)({
                    skuId: (0, tt.Y)({ product: n, selectedVariantIndex: l }),
                    returnRef: e,
                    analyticsLocations: r,
                    discoverySessionId: I,
                }));
        },
        text: k,
        "aria-label": tl.intl.formatToPlainString(tl.t["5UYoSr"], { ctaLabel: k, productLabel: d }),
        fullWidth: !0,
        tabIndex: u,
    });
}
function tc(t) {
    let { text: n, onTrackClick: e, productLabel: a, tabIndex: r } = t,
        l = n ?? tl.intl.string(tl.t.sEAnVH);
    return (0, i.jsx)(H.A, {
        subscriptionTier: ta.pe.TIER_2,
        fullWidth: !0,
        buttonTextOverride: l,
        "aria-label": tl.intl.formatToPlainString(tl.t["5UYoSr"], { ctaLabel: l, productLabel: a }),
        onClick: (t) => {
            (t.stopPropagation(), e?.(ti.sH.UNLOCK_WITH_NITRO));
        },
        tabIndex: r,
    });
}
function td(t) {
    let { handlePreviewButtonClick: n, text: e, onTrackClick: a, productLabel: r, tabIndex: l } = t,
        s = e ?? tl.intl.string(tl.t.FdGl5A);
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), a?.(ti.sH.VIEW_DETAILS), n(t));
        },
        text: s,
        "aria-label": tl.intl.formatToPlainString(tl.t["5UYoSr"], { ctaLabel: s, productLabel: r }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tu(t) {
    let { handleUseNow: n, isApplying: e, text: a, onTrackClick: r, productLabel: l, tabIndex: s } = t,
        o = a ?? tl.intl.string(tl.t.MAS7uK);
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), r?.(ti.sH.USE_NOW), n());
        },
        loading: e,
        text: o,
        "aria-label": tl.intl.formatToPlainString(tl.t["5UYoSr"], { ctaLabel: o, productLabel: l }),
        fullWidth: !0,
        tabIndex: s,
    });
}
function tx(t) {
    let { text: n, onTrackClick: e, productLabel: a, tabIndex: r } = t,
        l = (0, D.A)(),
        s = n ?? tl.intl.string(tl.t["2p2aYz"]);
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), e?.(ti.sH.EDIT_PROFILE), l());
        },
        text: s,
        "aria-label": tl.intl.formatToPlainString(tl.t["5UYoSr"], { ctaLabel: s, productLabel: a }),
        fullWidth: !0,
        tabIndex: r,
    });
}
function tI(t) {
    let { skuId: n, onClick: e, text: a, productLabel: r, tabIndex: l } = t,
        s = a ?? tl.intl.string(tl.t.FdGl5A);
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), e(n));
        },
        text: s,
        "aria-label": tl.intl.formatToPlainString(tl.t["5UYoSr"], { ctaLabel: s, productLabel: r }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tk(t) {
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
        u = l ?? tl.intl.string(tl.t.zp6caO);
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(),
                (async function () {
                    (s?.("claim premium product button"),
                        o?.(ti.sH.ADD_TO_COLLECTION),
                        await (0, F.iJ)(n.skuId),
                        (0, te.A)({ product: n, analyticsLocations: r, purchaseType: ti.gs.PREMIUM_PURCHASE }));
                })());
        },
        disabled: e,
        loading: a,
        loadingStartedLabel: tl.intl.string(tl.t["TYw+9s"]),
        loadingFinishedLabel: tl.intl.string(tl.t.Pg1UP5),
        text: u,
        "aria-label": tl.intl.formatToPlainString(tl.t["5UYoSr"], { ctaLabel: u, productLabel: c }),
        fullWidth: !0,
        tabIndex: d,
    });
}
function tp(t) {
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
        x = l ?? tl.intl.formatToPlainString(tl.t.yi41qQ, { orbPrice: e[0].amount });
    return (0, i.jsx)(O.$, {
        variant: "primary",
        text:
            l ??
            tl.intl.format(tl.t.JC15qj, {
                orbPrice: e[0].amount,
                orbIconHook: () => (0, i.jsx)(w.A, { className: ts.f }),
            }),
        onClick: (t) => {
            (t.stopPropagation(),
                s?.("claim with orbs button"),
                o?.(ti.sH.BUY_WITH_ORBS),
                (0, Y.B4)({
                    skuId: (0, tt.Y)({ product: n, selectedVariantIndex: r }),
                    onComplete: (t) => {
                        ((0, F.gB)(),
                            (0, te.A)({
                                product: n,
                                analyticsLocations: a,
                                itemConsumed: t?.entitlements?.[0]?.consumed,
                                purchaseType: ti.gs.ORB,
                            }));
                    },
                    analyticsLocations: a,
                    discoverySessionId: u,
                }));
        },
        "aria-label": tl.intl.formatToPlainString(tl.t["5UYoSr"], { ctaLabel: x, productLabel: c }),
        fullWidth: !0,
        tabIndex: d,
    });
}
function tC(t) {
    let { handlePreviewButtonClick: n, text: e, onTrackClick: a, productLabel: r, tabIndex: l } = t,
        s = e ?? tl.intl.string(tl.t.GpnHfH);
    return (0, i.jsx)(O.$, {
        variant: "primary",
        onClick: (t) => {
            (t.stopPropagation(), a?.(ti.sH.PAYMENT_OPTIONS), n(t));
        },
        text: s,
        "aria-label": tl.intl.formatToPlainString(tl.t["5UYoSr"], { ctaLabel: s, productLabel: r }),
        fullWidth: !0,
        tabIndex: l,
    });
}
function tb(t) {
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
        u = (0, R.bG)([B.default], () => B.default.getCurrentUser()),
        x = (0, V.L)(ta.PremiumTypes.TIER_2),
        I = M.Ay.canUseShopDiscounts(u),
        C = (0, J.hS)(n),
        { isPurchased: b, isPartiallyOwnedBundle: m } = (0, Q.h)(n),
        f = (0, z.G0)(n),
        g = (0, z.tt)(n),
        { isDisabled: T } = (0, G.I)(n.skuId),
        j = (0, z.Zu)({ product: n, isPartiallyOwnedBundle: m, isPurchased: b }),
        {
            shouldCheckoutWithOrbs: v,
            hasSufficientOrbs: A,
            checkoutEligiblePrices: P,
            checkoutEligibleFormerPrices: y,
            isOrbExclusive: S,
        } = (0, tn.F)({ product: n, hasShopDiscount: I, prioritizedCurrency: s }),
        L = P.find((t, n) => t.currency !== tr.Yr.DISCORD_ORB && null != y[n]),
        { analyticsLocations: E } = (0, p.Ay)(k.A.COLLECTIBLES_SHOP_CARD),
        _ = (0, h.s7)(n),
        N = (0, X.ql)(n, k.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        [O, U] = (0, R.yK)([$.A], () => [
            $.A.isClaiming === n.skuId,
            null != $.A.isClaiming && $.A.isClaiming !== n.skuId,
        ]),
        { handleUseNow: H, isApplying: D, canUseNow: w } = (0, K.p)({ product: n }),
        Y = l ?? C ?? void 0;
    if (null != r) return (0, i.jsx)(tI, { onClick: r, skuId: n.skuId, text: l, productLabel: _, tabIndex: d });
    if (f && !x && !g) return (0, i.jsx)(tc, { text: l, onTrackClick: c, productLabel: _, tabIndex: d });
    if (!j || T)
        return (0, i.jsx)(td, { handlePreviewButtonClick: N, text: l, onTrackClick: c, productLabel: _, tabIndex: d });
    if (b)
        return w
            ? (0, i.jsx)(tu, { handleUseNow: H, isApplying: D, text: l, onTrackClick: c, productLabel: _, tabIndex: d })
            : (0, i.jsx)(tx, { text: l, onTrackClick: c, productLabel: _, tabIndex: d });
    if (f)
        return (0, i.jsx)(tk, {
            product: n,
            isClaimPremiumProductDisabled: U,
            isClaiming: O,
            analyticsLocations: E,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: _,
            tabIndex: d,
        });
    if (v && A)
        return (0, i.jsx)(tp, {
            product: n,
            checkoutEligiblePrices: P,
            analyticsLocations: E,
            selectedVariantIndex: a,
            text: l,
            onClickAnalytics: o,
            onTrackClick: c,
            productLabel: _,
            tabIndex: d,
        });
    if (v && !A)
        if (P.length > 1)
            return (0, i.jsx)(tC, {
                handlePreviewButtonClick: N,
                text: l,
                onTrackClick: c,
                productLabel: _,
                tabIndex: d,
            });
        else
            return (0, i.jsx)(td, {
                handlePreviewButtonClick: N,
                text: l,
                onTrackClick: c,
                productLabel: _,
                tabIndex: d,
            });
    return S
        ? (0, i.jsx)(td, { handlePreviewButtonClick: N, text: l, onTrackClick: c, productLabel: _, tabIndex: d })
        : (0, i.jsx)(to, {
              product: n,
              cardRef: e,
              hasShopDiscount: I,
              analyticsLocations: E,
              selectedVariantIndex: a,
              fiatPrice: L,
              text: Y,
              onTrackClick: c,
              productLabel: _,
              tabIndex: d,
          });
}
let tm = function (t) {
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
        d = (0, X.Vm)(n),
        u = (0, q.Q)(d);
    if (null == d) return null;
    let x = (0, Z.rb)(d, u);
    return (0, i.jsx)(tb, {
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
var tf = e(408278),
    tg = e(39623),
    tT = e(878112),
    tj = e(347722);
function tv(t) {
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
        p = (0, tj.X)(n, s),
        C = (0, X.ql)(n, k.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, o),
        f = (0, h.s7)(n);
    return null != r || null != l
        ? (0, i.jsx)(tf.K, {
              variant: "primary",
              "aria-label": tl.intl.formatToPlainString(tl.t["5UYoSr"], {
                  ctaLabel: tl.intl.string(tl.t.SKNnqq),
                  productLabel: f,
              }),
              icon: l ?? tg.EyeIcon,
              onClick: (t) => {
                  (t.stopPropagation(), null != r ? r(n.skuId) : (c?.(ti.sH.OPEN_DETAILS), C(t)));
              },
              tabIndex: d,
          })
        : p
          ? (0, i.jsx)(b.R9, {
                newValue: { pageCategory: x === ti.G2.HOME ? void 0 : I?.pageCategory },
                children: (0, i.jsx)(tT.A, {
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
let tA = function (t) {
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
        d = (0, X.Vm)(n),
        u = (0, q.Q)(d);
    if (null == d) return null;
    let x = (0, Z.rb)(d, u);
    return (0, i.jsx)(tv, {
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
var tP = e(484469),
    ty = e(784054),
    tS = e(301198),
    th = e(668253);
function tL(t) {
    let { product: n, selectedVariantIndex: e, isCardHovered: a, onTrackClick: r, tabIndex: l } = t;
    return (0, i.jsx)(tS.R, {
        product: n,
        selectedVariantIndex: e,
        isCardHovered: a,
        className: th.i,
        onTrackClick: r,
        tabIndex: l,
    });
}
let tE = function (t) {
    let { skuId: n, isCardHovered: e, onTrackClick: a, tabIndex: r } = t,
        l = (0, X.Vm)(n),
        s = (0, q.Q)(l);
    return null == l
        ? null
        : (0, i.jsx)(tL, { product: l, selectedVariantIndex: s, isCardHovered: e, onTrackClick: a, tabIndex: r });
};
var t_ = e(935094),
    tN = e(521e3),
    tR = e(496552);
let tO = a.memo(function (t) {
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
                onClickPrimaryCTA: v,
                onClickSecondaryCTA: R,
                onMouseEnter: O,
                onMouseLeave: U,
                onFocus: H,
                onBlur: V,
                primaryCTAText: D,
                secondaryCTAIcon: w,
                productNameClassName: Y,
                badgeClassName: B,
                cardClassName: M,
                prioritizedCurrency: W,
                aspectRatio: F,
                hideStaticBundleBackgroundAsset: $,
                listItemProps: q,
            } = t,
            z = q?.tabIndex,
            { previewingVariantIndex: K, handleEntering: G, handleLeaving: Q } = (0, t_.f)(n),
            J = (0, X.gZ)() ?? W,
            Z = (0, j.g)(n),
            tt = (0, S.fP)(Z),
            tn = J ?? (tt ? ti.Hi.FIAT : void 0),
            te = (0, m.Mk)(),
            ta = te?.tab,
            tr = (0, b.uM)(),
            tl = a.useMemo(() => (0, X.UU)(n, ta, tr), [n, ta, tr]),
            ts = (0, h.s7)(n),
            to = a.useId(),
            tc = a.useRef(null),
            { isHoveringOrFocusing: td } = (0, C.A)(tc),
            tu = (0, tN.$c)(n.skuId),
            tx = (0, y.U)(n),
            tI = (0, o.A)(tc, tx),
            tk = (0, X.ql)(n, k.A.COLLECTIBLES_SHOP_CARD, tl),
            { analyticsLocations: tp } = (0, p.Ay)(),
            tC = (0, A.f)({ product: n, analyticsLocations: tp }),
            tb = a.useCallback(
                (t) => {
                    null != T ? T(t) : (tC(ti.sH.OPEN_DETAILS), tk(t));
                },
                [tC, T, tk],
            );
        (0, P.x)(td, n);
        let tf = n.type === c.R.BUNDLE && n.previewAssets?.fgStatic != null,
            tg = n.type === c.R.VARIANTS_GROUP && !s,
            tT = a.useMemo(() => ({ maxVariantsToShow: 4, onClick: tk }), [tk]),
            tj = n.type === c.R.BUNDLE && !$,
            tv = !I || !f,
            tP = !(d && r) || tg,
            tS = tP || tv,
            th = tv || tg;
        return (0, i.jsx)(u.s, {
            ref: tI,
            onClick: tb,
            "aria-label": ts,
            "aria-describedby": to,
            className: l()(M, tR.ty, { [tR.yo]: td }),
            buttonProps: { ...q, role: "button" },
            onFocus: () => {
                (q?.onFocus?.(), H?.(n.skuId));
            },
            onBlur: () => V?.(n.skuId),
            onMouseEnter: () => O?.(n.skuId),
            onMouseLeave: () => U?.(n.skuId),
            children: (0, i.jsx)(tN.vf.Provider, {
                value: tu ? tc : null,
                children: (0, i.jsxs)("div", {
                    id: to,
                    "data-testid": "collectibles-shop-product-card",
                    className: tR.qt,
                    style: { aspectRatio: F },
                    children: [
                        tj &&
                            n.previewAssets?.bgStatic != null &&
                            (0, i.jsx)("img", { className: tR.vD, src: n.previewAssets.bgStatic, alt: "" }),
                        (0, i.jsx)("div", {
                            className: l()(tR.Dq, { [tR.$r]: !r || tP || th, [tR.T9]: tf }),
                            children: (0, i.jsx)(_.A, { skuId: n.skuId, isCardHovered: td, overrideVariantIndex: K }),
                        }),
                        (0, i.jsxs)("div", {
                            className: tR.N1,
                            children: [
                                (0, i.jsx)(L.A, {
                                    skuId: n.skuId,
                                    badgeOverride: g,
                                    className: B,
                                    prioritizedCurrency: tn,
                                    tabIndex: z,
                                }),
                                !e &&
                                    (0, i.jsx)(tE, {
                                        skuId: n.skuId,
                                        isCardHovered: td,
                                        onTrackClick: tC,
                                        tabIndex: z,
                                    }),
                            ],
                        }),
                        tS &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("div", { className: l()(tR.wY, { [tR.KY]: tf }) }),
                                    (0, i.jsxs)("div", {
                                        className: tR.xQ,
                                        children: [
                                            tP &&
                                                (0, i.jsxs)("div", {
                                                    className: tR.xE,
                                                    children: [
                                                        !(r && d) &&
                                                            (0, i.jsxs)("div", {
                                                                className: tR.Ly,
                                                                children: [
                                                                    !r &&
                                                                        (0, i.jsx)(E.A, {
                                                                            skuId: n.skuId,
                                                                            className: l()(Y, tR.tZ),
                                                                        }),
                                                                    !d &&
                                                                        (0, i.jsx)("div", {
                                                                            className: tR.oh,
                                                                            children: (0, i.jsx)(N.A, {
                                                                                skuId: n.skuId,
                                                                                prioritizedCurrency: tn,
                                                                                promoPriceLayout: tg
                                                                                    ? N.e.STACKED
                                                                                    : N.e.INLINE,
                                                                            }),
                                                                        }),
                                                                ],
                                                            }),
                                                        tg &&
                                                            (0, i.jsx)(ty.A, {
                                                                skuId: n.skuId,
                                                                isCollapsed: !td,
                                                                onVariantEnter: G,
                                                                onVariantExit: Q,
                                                                overflowProps: tT,
                                                                onTrackClick: tC,
                                                                parentTabIndex: z,
                                                            }),
                                                    ],
                                                }),
                                            tv &&
                                                (0, i.jsx)("div", {
                                                    className: tR.Vs,
                                                    children: (0, i.jsxs)(x.e, {
                                                        wrap: !1,
                                                        className: tR.Ld,
                                                        fullWidth: !0,
                                                        children: [
                                                            !I &&
                                                                (0, i.jsx)(tm, {
                                                                    skuId: n.skuId,
                                                                    cardRef: tc,
                                                                    onClick: v,
                                                                    text: D,
                                                                    prioritizedCurrency: tn,
                                                                    onClickAnalytics: tl,
                                                                    onTrackClick: tC,
                                                                    tabIndex: z,
                                                                }),
                                                            !f &&
                                                                (0, i.jsx)(tA, {
                                                                    skuId: n.skuId,
                                                                    cardRef: tc,
                                                                    onClick: R,
                                                                    icon: w,
                                                                    prioritizedCurrency: tn,
                                                                    onClickAnalytics: tl,
                                                                    onTrackClick: tC,
                                                                    tabIndex: z,
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
    tU = function (t) {
        let n,
            { skuId: e, ...r } = t,
            o = a.useContext(X.v3),
            { state: c, product: u } = (0, v.IK)(e, {
                needsCategory: !1,
                seedCategoryStore: !0,
                flattenVariants: o.flattenProductVariants,
            }),
            x = (0, X.Vm)(e),
            k = u ?? ("loading" === c ? x : void 0),
            p = (0, I.A)(() => ({ cardId: (0, s.A)() })),
            C = ((n = (0, T.c)("product_card")), e === d.j.PREMIUM_TIER_2_1_DAY && !n),
            m = a.useMemo(() => ({ ...o, productOverride: k, standalonePreview: !0 }), [o, k]);
        return C
            ? null
            : null == k
              ? "loading" === c
                  ? (0, i.jsx)(tP.A, {})
                  : null
              : (0, i.jsxs)(b.R9, {
                    newValue: p,
                    children: [
                        e === d.j.PREMIUM_TIER_2_3_DAY ? (0, i.jsx)(g, { location: "product_card" }) : null,
                        (0, i.jsx)(X.v3.Provider, {
                            value: m,
                            children: (0, i.jsx)(tO, { product: k, ...r, cardClassName: l()(r.cardClassName, tR.w) }),
                        }),
                    ],
                });
    };
