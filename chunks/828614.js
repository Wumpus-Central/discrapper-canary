r.d(t, { A: () => e0 });
var i = r(627968),
    n = r(64700),
    s = r(503698),
    l = r.n(s),
    a = r(835245),
    u = r(612324),
    c = r(575593),
    o = r(334279),
    d = r(269115),
    k = r(890856),
    p = r(825484),
    m = r(444927),
    x = r(793574),
    C = r(688810),
    I = r(713517),
    _ = r(440938),
    g = r(161918),
    A = r(503089),
    h = r(597783),
    f = r(174459),
    E = r(298072),
    T = r(993408),
    j = r(623373),
    v = r(331884),
    y = r(652215),
    R = r(66455),
    P = r(562708),
    L = r(172218),
    N = r(139286),
    O = r(536572),
    S = r(268959),
    b = r(834730),
    H = r(561769),
    V = r(375708);
let B = (e) => {
    let { skuId: t, className: r } = e,
        n = (0, H.Vm)(t),
        s = (0, O.VG)(n),
        l = null != n && n.type === c.R.BUNDLE && n.items.length > 0;
    return (0, i.jsx)(b.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: l ? V.intl.format(V.t.UTc0ny, { count: n.items.length, productName: s }) : s,
    });
};
var D = r(947641),
    M = r(17928),
    U = r(778712),
    w = r(661531),
    F = r(287809),
    W = r(466459),
    G = r(139136),
    z = r(395744),
    Y = r(846957),
    Q = r(929283),
    K = r(245068),
    $ = r(761365),
    q = r(721861);
let Z = (e) => {
        let { responsive: t } = e;
        return !0 !== t;
    },
    X = (e) => {
        let { product: t, isCardHovered: r } = e,
            n = (0, j.YW)(t),
            { isPurchased: s, isPartiallyOwnedBundle: a } = (0, W.h)(t),
            u = n === c.R.PROFILE_EFFECT || n === c.R.PROFILE_FRAME || n === c.R.BUNDLE;
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: l()(q.mA, { [q.zj]: (s || a) && !r, [q.Ge]: u }),
                    children: (0, i.jsx)(J, { product: t, isCardHovered: r }),
                }),
                s && (0, i.jsx)(ee, { hidden: r }),
            ],
        });
    },
    J = (e) => {
        var t;
        let r,
            n,
            { product: s, isCardHovered: l } = e,
            a = (0, M.bG)([F.default], () => F.default.getCurrentUser()),
            u = (0, j.YW)(s),
            o =
                ((r = (0, E.Q)(s)),
                (n = null != t ? t : r),
                s?.type === c.R.VARIANTS_GROUP && null != s.variants && s.variants.length > n
                    ? s.variants[n].items[0]
                    : s.items[0]);
        switch (u) {
            case c.R.PROFILE_EFFECT:
                return (0, i.jsx)(G.A, { skuId: o.skuId, isHighlighted: l, removeSetHeight: !0, hideBackground: !0 });
            case c.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: q.pI, children: (0, i.jsx)(z.A, { frame: o, filterLayer: Z }) });
            case c.R.AVATAR_DECORATION:
                return (0, i.jsx)(Q.i, { item: o, user: a, isHighlighted: l, avatarSize: U._3.SIZE_120 });
            case c.R.NAMEPLATE:
                return (0, i.jsx)($.A, { nameplate: o, user: a, isHighlighted: l });
            case c.R.BUNDLE:
                return (0, i.jsx)(K.X, { product: s, user: a, isHighlighted: l });
            case c.R.EXTERNAL_SKU:
                return (0, i.jsx)(Y.B, { product: s, animationState: l ? "on" : "off" });
            default:
                return null;
        }
    },
    ee = (e) => {
        let { hidden: t } = e;
        return (0, i.jsx)(D.r, {
            size: "custom",
            color: w.A.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: l()(q.zo, { [q.R]: t }),
        });
    },
    et = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: n } = e,
            s = (0, H.Vm)(t),
            l = (0, E.Q)(s);
        if (null == s) return null;
        let a = (0, j.rb)(s, n ?? l);
        return (0, i.jsx)(X, { product: a, isCardHovered: r });
    };
var er = r(702841),
    ei = r(428262),
    en = r(13875),
    es = r(740076),
    el = r(219103),
    ea = r(525723),
    eu = r(57020),
    ec = r(380836);
let eo = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            s = (0, er.bG)([F.default], () => F.default.getCurrentUser()),
            l = ei.Ay.canUseCollectibles(s),
            a = (0, T.xM)(s),
            u = (0, en.Do)("ProductCardPriceInner") && t.type === c.R.PROFILE_FRAME,
            o = null != a || u,
            { isDisabled: d } = (0, es.I)(t.skuId),
            { isPurchased: k, isPartiallyOwnedBundle: p } = (0, W.h)(t),
            m = (0, T.G0)(t),
            x = (0, T.tt)(t),
            C = n.useMemo(() => (0, T.fT)(t, o), [t, o]),
            I = (0, ea.V_)(t),
            {
                checkoutEligiblePrices: _,
                hasSufficientOrbs: g,
                shouldCheckoutWithOrbs: A,
            } = (0, eu.F)({ product: t, hasShopDiscount: o, prioritizedCurrency: r, hasDiscountOffer: null != I });
        return d
            ? (0, i.jsx)(b.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: V.intl.string(V.t.wu4gyV),
              })
            : p
              ? (0, i.jsx)(b.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: V.intl.string(V.t.BEjTij),
                })
              : k && !(m && !l)
                ? (0, i.jsx)(b.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: V.intl.string(V.t["6cfuDj"]),
                  })
                : x
                  ? (0, i.jsx)(b.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: V.intl.string(V.t.nBtvYB),
                    })
                  : m
                    ? (0, i.jsx)(b.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: V.intl.string(V.t.rt69oo),
                      })
                    : 0 === _.length
                      ? null
                      : (0, i.jsx)(el.x, {
                            priceAmount: _[0].amount,
                            priceCurrency: _[0].currency,
                            discount: C,
                            discountIconConfig: o
                                ? { displayMode: "default", source: a ?? T.D0.NITRO, size: "sm" }
                                : void 0,
                            discountOfferAmount: I,
                            className: A && !g ? ec.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    ed = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            n = (0, H.Vm)(t),
            s = (0, E.Q)(n);
        if (null == n) return null;
        let l = (0, j.rb)(n, s);
        return (0, i.jsx)(eo, { product: l, prioritizedCurrency: r });
    };
var ek = r(821609),
    ep = r(44120),
    em = r(465794),
    ex = r(757036),
    eC = r(206835),
    eI = r(106799),
    e_ = r(652165),
    eg = r(564064),
    eA = r(4227),
    eh = r(450481),
    ef = r(395068),
    eE = r(766172),
    eT = r(61750),
    ej = r(758836),
    ev = r(788868),
    ey = r(40577);
let eR = (e) => {
        let {
                product: t,
                cardRef: r,
                hasShopDiscount: n,
                analyticsLocations: s,
                selectedVariantIndex: l,
                hasDiscountOffer: a,
                discountOfferAmount: u,
                text: c,
                onTrackClick: o,
            } = e,
            d = (0, T.R8)(t, n, !1),
            k = (0, _.uM)()?.sessionId,
            p = a
                ? V.intl.formatToPlainString(V.t["5U5RB5"], { discountOfferAmount: u })
                : V.intl.formatToPlainString(V.t["cNSL/j"], { price: d });
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    o?.(ej.sH.BUY_WITH_FIAT),
                    (0, ep.A)({
                        skuId: (0, eE.Y)({ product: t, selectedVariantIndex: l }),
                        returnRef: r,
                        analyticsLocations: s,
                        discoverySessionId: k,
                    });
            },
            text: c ?? p,
            fullWidth: !0,
        });
    },
    eP = (e) => {
        let { text: t, onTrackClick: r } = e;
        return (0, i.jsx)(em.A, {
            subscriptionTier: ev.pe.TIER_2,
            fullWidth: !0,
            buttonTextOverride: t ?? V.intl.string(V.t.sEAnVH),
            onClick: (e) => {
                e.stopPropagation(), r?.(ej.sH.UNLOCK_WITH_NITRO);
            },
        });
    },
    eL = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: n } = e;
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n?.(ej.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? V.intl.string(V.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eN = (e) => {
        let { handleUseNow: t, isApplying: r, text: n, onTrackClick: s } = e;
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), s?.(ej.sH.USE_NOW), t();
            },
            loading: r,
            text: n ?? V.intl.string(V.t.MAS7uK),
            fullWidth: !0,
        });
    },
    eO = (e) => {
        let { text: t, onTrackClick: r } = e,
            n = (0, eC.A)();
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r?.(ej.sH.EDIT_PROFILE), n();
            },
            text: t ?? V.intl.string(V.t["2p2aYz"]),
            fullWidth: !0,
        });
    },
    eS = (e) => {
        let { skuId: t, onClick: r, text: n } = e;
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: n ?? V.intl.string(V.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eb = (e) => {
        let {
                product: t,
                isClaimPremiumProductDisabled: r,
                isClaiming: n,
                analyticsLocations: s,
                text: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = async () => {
                a?.("claim premium product button"),
                    u?.(ej.sH.ADD_TO_COLLECTION),
                    await (0, eg.iJ)(t.skuId),
                    (0, eT.A)({ product: t, analyticsLocations: s, purchaseType: ej.gs.PREMIUM_PURCHASE });
            };
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: r,
            loading: n,
            loadingStartedLabel: V.intl.string(V.t["TYw+9s"]),
            loadingFinishedLabel: V.intl.string(V.t.Pg1UP5),
            text: l ?? V.intl.string(V.t.zp6caO),
            fullWidth: !0,
        });
    },
    eH = (e) => {
        let {
                product: t,
                checkoutEligiblePrices: r,
                analyticsLocations: n,
                selectedVariantIndex: s,
                text: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, _.uM)()?.sessionId;
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            text:
                l ??
                V.intl.format(V.t.JC15qj, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, i.jsx)(eI.A, { className: ey.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(ej.sH.BUY_WITH_ORBS),
                    (0, e_.B4)({
                        skuId: (0, eE.Y)({ product: t, selectedVariantIndex: s }),
                        onComplete: (e) => {
                            (0, eg.gB)(),
                                (0, eT.A)({
                                    product: t,
                                    analyticsLocations: n,
                                    itemConsumed: e?.entitlements?.[0]?.consumed,
                                    purchaseType: ej.gs.ORB,
                                });
                        },
                        analyticsLocations: n,
                        discoverySessionId: c,
                    });
            },
            "aria-label": V.intl.formatToPlainString(V.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    eV = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: n } = e;
        return (0, i.jsx)(ek.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n?.(ej.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? V.intl.string(V.t.GpnHfH),
            fullWidth: !0,
        });
    },
    eB = (e) => {
        let {
                product: t,
                cardRef: r,
                selectedVariantIndex: n,
                onClick: s,
                text: l,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = e,
            o = (0, ef.A)({ location: "ProductCardPrimaryCTAInner", product: t }),
            d = (0, er.bG)([F.default], () => F.default.getCurrentUser()),
            k = (0, ex.L)(ev.PremiumTypes.TIER_2),
            p = ei.Ay.canUseShopDiscounts(d),
            { isPurchased: m, isPartiallyOwnedBundle: I } = (0, W.h)(t),
            _ = (0, T.G0)(t),
            g = (0, T.tt)(t),
            { isDisabled: A } = (0, es.I)(t.skuId),
            h = (0, T.Zu)({ product: t, isPartiallyOwnedBundle: I, isPurchased: m }),
            f = (0, ea.V_)(t),
            E = null != f,
            {
                shouldCheckoutWithOrbs: j,
                hasSufficientOrbs: v,
                checkoutEligiblePrices: y,
                isOrbExclusive: R,
            } = (0, eu.F)({ product: t, hasShopDiscount: p, prioritizedCurrency: a, hasDiscountOffer: E }),
            { analyticsLocations: P } = (0, C.Ay)(x.A.COLLECTIBLES_SHOP_CARD),
            L = (0, H.ql)(t, x.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [N, O] = (0, er.yK)([eA.A], () => [
                eA.A.isClaiming === t.skuId,
                null != eA.A.isClaiming && eA.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: S, isApplying: b, canUseNow: B } = (0, eh.p)({ product: t });
        if (null != s) return (0, i.jsx)(eS, { onClick: s, skuId: t.skuId, text: l });
        if (_ && !k && !g) return (0, i.jsx)(eP, { text: l, onTrackClick: c });
        if (!h || A) return (0, i.jsx)(eL, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
        if (m)
            return B
                ? (0, i.jsx)(eN, { handleUseNow: S, isApplying: b, text: l, onTrackClick: c })
                : (0, i.jsx)(eO, { text: l, onTrackClick: c });
        if (o)
            return (0, i.jsx)(C.f5, {
                value: [...P, x.A.PROFILE_FRAMES_EA_MARKETING],
                children: (0, i.jsx)(eP, { text: V.intl.string(V.t["9wfL34"]), onTrackClick: c }),
            });
        if (_)
            return (0, i.jsx)(eb, {
                product: t,
                isClaimPremiumProductDisabled: O,
                isClaiming: N,
                analyticsLocations: P,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (j && v)
            return (0, i.jsx)(eH, {
                product: t,
                checkoutEligiblePrices: y,
                analyticsLocations: P,
                selectedVariantIndex: n,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (j && !v)
            if (y.length > 1) return (0, i.jsx)(eV, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
            else return (0, i.jsx)(eL, { handlePreviewButtonClick: L, text: l, onTrackClick: c });
        return R
            ? (0, i.jsx)(eL, { handlePreviewButtonClick: L, text: l, onTrackClick: c })
            : (0, i.jsx)(eR, {
                  product: t,
                  cardRef: r,
                  hasShopDiscount: p,
                  analyticsLocations: P,
                  selectedVariantIndex: n,
                  hasDiscountOffer: E,
                  discountOfferAmount: f,
                  text: l,
                  onTrackClick: c,
              });
    },
    eD = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: n,
                text: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, H.Vm)(t),
            o = (0, E.Q)(c);
        if (null == c) return null;
        let d = (0, j.rb)(c, o);
        return (0, i.jsx)(eB, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: n,
            text: s,
            prioritizedCurrency: l,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var eM = r(408278),
    eU = r(39623),
    ew = r(878112),
    eF = r(347722);
let eW = (e) => {
        let {
                product: t,
                selectedVariantIndex: r,
                cardRef: n,
                onClick: s,
                icon: l,
                prioritizedCurrency: a,
                onClickAnalytics: u,
                onTrackClick: c,
            } = e,
            o = (0, g.Mk)(),
            d = o?.tab,
            k = (0, _.uM)(),
            p = (0, eF.X)(t, a),
            m = (0, H.ql)(t, x.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != s || null != l
            ? (0, i.jsx)(eM.K, {
                  variant: "primary",
                  "aria-label": V.intl.string(V.t.SKNnqq),
                  icon: l ?? eU.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != s ? s(t.skuId) : (c?.(ej.sH.OPEN_DETAILS), m(e));
                  },
              })
            : p
              ? (0, i.jsx)(_.R9, {
                    newValue: { pageCategory: d === ej.G2.HOME ? void 0 : k?.pageCategory },
                    children: (0, i.jsx)(ew.A, {
                        primary: !0,
                        product: t,
                        selectedVariantIndex: r,
                        returnRef: n,
                        tooltipDelay: 250,
                        onTrackClick: c,
                    }),
                })
              : null;
    },
    eG = (e) => {
        let {
                skuId: t,
                cardRef: r,
                onClick: n,
                icon: s,
                prioritizedCurrency: l,
                onClickAnalytics: a,
                onTrackClick: u,
            } = e,
            c = (0, H.Vm)(t),
            o = (0, E.Q)(c);
        if (null == c) return null;
        let d = (0, j.rb)(c, o);
        return (0, i.jsx)(eW, {
            product: d,
            cardRef: r,
            selectedVariantIndex: o,
            onClick: n,
            icon: s,
            prioritizedCurrency: l,
            onClickAnalytics: a,
            onTrackClick: u,
        });
    };
var ez = r(661847),
    eY = r(139146),
    eQ = r(420960);
let eK = (e) => {
        let { product: t, selectedVariantIndex: r, isCardHovered: n, onTrackClick: s } = e;
        return (0, i.jsx)(eY.R, {
            product: t,
            selectedVariantIndex: r,
            isCardHovered: n,
            className: eQ.i,
            onTrackClick: s,
        });
    },
    e$ = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: n } = e,
            s = (0, H.Vm)(t),
            l = (0, E.Q)(s);
        return null == s
            ? null
            : (0, i.jsx)(eK, { product: s, selectedVariantIndex: l, isCardHovered: r, onTrackClick: n });
    };
var eq = r(935094),
    eZ = r(521e3),
    eX = r(496569);
let eJ = n.memo(function (e) {
        let {
                product: t,
                hideWishlistButton: r,
                hideProductName: s,
                hideVariantSwitcher: a,
                hidePrice: o,
                hidePrimaryCTA: m,
                hideSecondaryCTA: A,
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
            } = e,
            { previewingVariantIndex: J, handleEntering: ee, handleLeaving: er } = (0, eq.f)(t),
            ei = (0, H.gZ)() ?? q,
            en = (0, g.Mk)(),
            es = en?.tab,
            el = (0, _.uM)(),
            ea = n.useMemo(() => (0, H.UU)(t, es, el), [t, es, el]),
            eu = (0, O.s7)(t),
            ec = n.useId(),
            eo = n.useRef(null),
            { isHoveringOrFocusing: ek } = (0, I.A)(eo),
            ep = (0, eZ.$c)(t.skuId),
            em = (function (e) {
                let t = (0, _.uM)(),
                    { analyticsLocations: r } = (0, C.Ay)(),
                    i = (0, E.Q)(e),
                    s = (0, v.o)(),
                    l = (0, T.xM)(s),
                    a = n.useRef(null),
                    u = n.useRef(!1),
                    c = n.useRef(i);
                n.useEffect(() => {
                    c.current = i;
                }, [i]);
                let o = n.useCallback(() => {
                        let i = (0, j.B1)(e);
                        (0, N.x)(
                            {
                                name: P.ImpressionNames.SHOP_CARD,
                                type: P.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: i ? (e.variants[c.current]?.skuId ?? e.skuId) : e.skuId,
                                    card_id: t?.cardId,
                                    shop_session_id: t?.sessionId,
                                    position_in_section: t?.tilePosition,
                                    product_sku_ids: (0, j.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                    location_stack: r,
                                    discount_source: (0, T.b_)(l),
                                },
                            },
                            !1,
                            !0,
                        );
                    }, [e, t?.cardId, t?.sessionId, t?.tilePosition, r, l]),
                    d = (0, L.K)((e) => {
                        e
                            ? u.current ||
                              (null === a.current &&
                                  (a.current = setTimeout(() => {
                                      o(), (u.current = !0), (a.current = null);
                                  }, 1e3)))
                            : ((u.current = !1), null !== a.current && (clearTimeout(a.current), (a.current = null)));
                    }, 0.5);
                return (
                    n.useEffect(
                        () => () => {
                            null !== a.current && (clearTimeout(a.current), (a.current = null));
                        },
                        [],
                    ),
                    d
                );
            })(t),
            ex = (0, u.A)(eo, em),
            { handleCardVisibilityChange: eC } = (0, h.Z)(t.skuId, es === ej.G2.CATALOG ? "full" : es),
            eI = (0, H.ql)(t, x.A.COLLECTIBLES_SHOP_CARD, ea),
            { analyticsLocations: e_ } = (0, C.Ay)(),
            eg = (function (e) {
                let { product: t, analyticsLocations: r } = e,
                    { cardId: i, sessionId: s, tilePosition: l } = (0, _.uM)() ?? {},
                    a = (0, E.Q)(t),
                    u = (0, v.o)(),
                    c = (0, T.xM)(u);
                return n.useCallback(
                    (e, n) => {
                        f.default.track(y.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, j.B1)(t) ? (t.variants[n ?? a]?.skuId ?? t.skuId) : t.skuId,
                            cta: e,
                            shop_session_id: s,
                            card_id: i,
                            product_sku_ids: (0, j.v8)(t),
                            location_stack: r,
                            position_in_section: l,
                            discount_source: (0, T.b_)(c),
                        });
                    },
                    [t, a, s, i, r, l, c],
                );
            })({ product: t, analyticsLocations: e_ }),
            eA = n.useCallback(
                (e) => {
                    null != D ? D(e) : (eg(ej.sH.OPEN_DETAILS), eI(e));
                },
                [eg, D, eI],
            );
        !(function (e, t) {
            let r = (0, _.uM)(),
                { analyticsLocations: i } = (0, C.Ay)(),
                s = (0, E.Q)(t),
                l = n.useRef(!1),
                a = (0, R.A)(r),
                u = (0, R.A)(t),
                c = (0, R.A)(s),
                o = (0, R.A)(i);
            n.useEffect(() => {
                if (!e) {
                    l.current = !1;
                    return;
                }
                if (l.current) return;
                let t = setTimeout(() => {
                    let e = a.current,
                        t = u.current,
                        r = (0, j.B1)(t);
                    f.default.track(y.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: r ? (t.variants[c.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, j.v8)(t),
                        location_stack: o.current,
                    }),
                        (l.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, a, u, c, o]);
        })(ek, t);
        let eh = t.type === c.R.BUNDLE && t.previewAssets?.fgStatic != null,
            ef = t.type === c.R.VARIANTS_GROUP && !a,
            eE = n.useMemo(() => ({ maxVariantsToShow: 4, onClick: eI }), [eI]),
            eT = t.type === c.R.BUNDLE && !X,
            ev = !m || !A,
            ey = !(o && s) || ef,
            eR = ey || ev,
            eP = ev || ef;
        return (0, i.jsx)(d.L, {
            innerRef: eo,
            onChange: eC,
            threshold: 0,
            children: (0, i.jsx)(k.s, {
                ref: ex,
                onClick: eA,
                "aria-label": eu,
                "aria-describedby": ec,
                className: l()($, eX.ty, { [eX.yo]: ek }),
                onFocus: () => W?.(t.skuId),
                onBlur: () => G?.(t.skuId),
                onMouseEnter: () => w?.(t.skuId),
                onMouseLeave: () => F?.(t.skuId),
                children: (0, i.jsx)(eZ.vf.Provider, {
                    value: ep ? eo : null,
                    children: (0, i.jsxs)("div", {
                        id: ec,
                        className: eX.qt,
                        style: { aspectRatio: Z },
                        children: [
                            eT &&
                                t.previewAssets?.bgStatic != null &&
                                (0, i.jsx)("img", { className: eX.vD, src: t.previewAssets.bgStatic, alt: "" }),
                            (0, i.jsx)("div", {
                                className: l()(eX.Dq, { [eX.$r]: !s || ey || eP, [eX.T9]: eh }),
                                children: (0, i.jsx)(et, {
                                    skuId: t.skuId,
                                    isCardHovered: ek,
                                    overrideVariantIndex: J,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: eX.N1,
                                children: [
                                    (0, i.jsx)(S.A, {
                                        skuId: t.skuId,
                                        badgeOverride: b,
                                        className: K,
                                        prioritizedCurrency: ei,
                                        skipLimitedTimeCheck: V,
                                    }),
                                    !r && (0, i.jsx)(e$, { skuId: t.skuId, isCardHovered: ek, onTrackClick: eg }),
                                ],
                            }),
                            eR &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", { className: l()(eX.wY, { [eX.KY]: eh }) }),
                                        (0, i.jsxs)("div", {
                                            className: eX.xQ,
                                            children: [
                                                ey &&
                                                    (0, i.jsxs)("div", {
                                                        className: eX.xE,
                                                        children: [
                                                            !(s && o) &&
                                                                (0, i.jsxs)("div", {
                                                                    className: eX.Ly,
                                                                    children: [
                                                                        !s &&
                                                                            (0, i.jsx)(B, {
                                                                                skuId: t.skuId,
                                                                                className: l()(Q, eX.tZ),
                                                                            }),
                                                                        !o &&
                                                                            (0, i.jsx)("div", {
                                                                                className: eX.oh,
                                                                                children: (0, i.jsx)(ed, {
                                                                                    skuId: t.skuId,
                                                                                    prioritizedCurrency: ei,
                                                                                }),
                                                                            }),
                                                                    ],
                                                                }),
                                                            ef &&
                                                                (0, i.jsx)(ez.A, {
                                                                    skuId: t.skuId,
                                                                    isCollapsed: !ek,
                                                                    onVariantEnter: ee,
                                                                    onVariantExit: er,
                                                                    overflowProps: eE,
                                                                    onTrackClick: eg,
                                                                }),
                                                        ],
                                                    }),
                                                ev &&
                                                    (0, i.jsx)("div", {
                                                        className: eX.Vs,
                                                        children: (0, i.jsxs)(p.e, {
                                                            wrap: !1,
                                                            className: eX.Ld,
                                                            fullWidth: !0,
                                                            children: [
                                                                !m &&
                                                                    (0, i.jsx)(eD, {
                                                                        skuId: t.skuId,
                                                                        cardRef: eo,
                                                                        onClick: M,
                                                                        text: z,
                                                                        prioritizedCurrency: ei,
                                                                        onClickAnalytics: ea,
                                                                        onTrackClick: eg,
                                                                    }),
                                                                !A &&
                                                                    (0, i.jsx)(eG, {
                                                                        skuId: t.skuId,
                                                                        cardRef: eo,
                                                                        onClick: U,
                                                                        icon: Y,
                                                                        prioritizedCurrency: ei,
                                                                        onClickAnalytics: ea,
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
    e0 = (e) => {
        let { skuId: t, ...r } = e,
            n = (0, H.Vm)(t),
            s = (0, m.A)(() => ({ cardId: (0, a.A)() })),
            l = (0, A.c)("product_card");
        return null != n && (t !== o.j.PREMIUM_TIER_2_1_DAY || l)
            ? (0, i.jsx)(_.R9, { newValue: s, children: (0, i.jsx)(eJ, { product: n, ...r }) })
            : null;
    };
