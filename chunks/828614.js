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
    C = r(793574),
    x = r(688810),
    I = r(713517),
    _ = r(440938),
    g = r(161918),
    A = r(320447),
    h = r(503089),
    f = r(597783),
    E = r(174459),
    T = r(298072),
    j = r(993408),
    v = r(623373),
    y = r(331884),
    R = r(652215),
    P = r(66455),
    b = r(562708),
    L = r(172218),
    N = r(139286),
    O = r(536572),
    S = r(268959),
    H = r(834730),
    V = r(561769),
    B = r(375708);
let D = (e) => {
    let { skuId: t, className: r } = e,
        n = (0, V.Vm)(t),
        s = (0, O.VG)(n),
        { enabled: l } = (0, A.P)("ProductCardName"),
        a = l && null != n && n.type === c.R.BUNDLE && n.items.length > 0;
    return (0, i.jsx)(H.E, {
        tag: "span",
        variant: "heading-md/medium",
        color: "text-strong",
        className: r,
        lineClamp: 1,
        children: a ? B.intl.format(B.t.UTc0ny, { count: n.items.length, productName: s }) : s,
    });
};
var M = r(947641),
    U = r(17928),
    w = r(778712),
    F = r(661531),
    W = r(287809),
    G = r(466459),
    z = r(139136),
    Y = r(395744),
    Q = r(846957),
    K = r(929283),
    q = r(245068),
    $ = r(761365),
    Z = r(721861);
let X = (e) => {
        let { responsive: t } = e;
        return !0 !== t;
    },
    J = (e) => {
        let { product: t, isCardHovered: r } = e,
            n = (0, v.YW)(t),
            { isPurchased: s, isPartiallyOwnedBundle: a } = (0, G.h)(t),
            { enabled: u } = (0, A.P)("ProductCardPreview"),
            o = n === c.R.PROFILE_EFFECT || n === c.R.PROFILE_FRAME || (n === c.R.BUNDLE && u);
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)("div", {
                    className: l()(Z.mA, { [Z.zj]: (s || a) && !r, [Z.Ge]: o }),
                    children: (0, i.jsx)(ee, { product: t, isCardHovered: r }),
                }),
                s && (0, i.jsx)(et, { hidden: r }),
            ],
        });
    },
    ee = (e) => {
        var t;
        let r,
            n,
            { product: s, isCardHovered: l } = e,
            a = (0, U.bG)([W.default], () => W.default.getCurrentUser()),
            u = (0, v.YW)(s),
            o =
                ((r = (0, T.Q)(s)),
                (n = null != t ? t : r),
                s?.type === c.R.VARIANTS_GROUP && null != s.variants && s.variants.length > n
                    ? s.variants[n].items[0]
                    : s.items[0]);
        switch (u) {
            case c.R.PROFILE_EFFECT:
                return (0, i.jsx)(z.A, { skuId: o.skuId, isHighlighted: l, removeSetHeight: !0, hideBackground: !0 });
            case c.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: Z.pI, children: (0, i.jsx)(Y.A, { frame: o, filterLayer: X }) });
            case c.R.AVATAR_DECORATION:
                return (0, i.jsx)(K.i, { item: o, user: a, isHighlighted: l, avatarSize: w._3.SIZE_120 });
            case c.R.NAMEPLATE:
                return (0, i.jsx)($.A, { nameplate: o, user: a, isHighlighted: l });
            case c.R.BUNDLE:
                return (0, i.jsx)(q.X, { product: s, user: a, isHighlighted: l });
            case c.R.EXTERNAL_SKU:
                return (0, i.jsx)(Q.B, { product: s, animationState: l ? "on" : "off" });
            default:
                return null;
        }
    },
    et = (e) => {
        let { hidden: t } = e;
        return (0, i.jsx)(M.r, {
            size: "custom",
            color: F.A.colors.INTERACTIVE_TEXT_ACTIVE,
            width: 40,
            height: 40,
            className: l()(Z.zo, { [Z.R]: t }),
        });
    },
    er = (e) => {
        let { skuId: t, isCardHovered: r, overrideVariantIndex: n } = e,
            s = (0, V.Vm)(t),
            l = (0, T.Q)(s);
        if (null == s) return null;
        let a = (0, v.rb)(s, n ?? l);
        return (0, i.jsx)(J, { product: a, isCardHovered: r });
    };
var ei = r(702841),
    en = r(428262),
    es = r(13875),
    el = r(740076),
    ea = r(219103),
    eu = r(525723),
    ec = r(57020),
    eo = r(380836);
let ed = (e) => {
        let { product: t, prioritizedCurrency: r } = e,
            s = (0, ei.bG)([W.default], () => W.default.getCurrentUser()),
            l = en.Ay.canUseCollectibles(s),
            a = (0, j.xM)(s),
            u = (0, es.Do)("ProductCardPriceInner") && t.type === c.R.PROFILE_FRAME,
            o = null != a || u,
            { isDisabled: d } = (0, el.I)(t.skuId),
            { isPurchased: k, isPartiallyOwnedBundle: p } = (0, G.h)(t),
            m = (0, j.G0)(t),
            C = (0, j.tt)(t),
            x = n.useMemo(() => (0, j.fT)(t, o), [t, o]),
            I = (0, eu.V_)(t),
            {
                checkoutEligiblePrices: _,
                hasSufficientOrbs: g,
                shouldCheckoutWithOrbs: A,
            } = (0, ec.F)({ product: t, hasShopDiscount: o, prioritizedCurrency: r, hasDiscountOffer: null != I });
        return d
            ? (0, i.jsx)(H.E, {
                  variant: "text-md/medium",
                  color: "text-muted",
                  lineClamp: 1,
                  children: B.intl.string(B.t.wu4gyV),
              })
            : p
              ? (0, i.jsx)(H.E, {
                    variant: "text-md/medium",
                    color: "text-muted",
                    lineClamp: 1,
                    children: B.intl.string(B.t.BEjTij),
                })
              : k && !(m && !l)
                ? (0, i.jsx)(H.E, {
                      variant: "text-md/medium",
                      color: "text-muted",
                      lineClamp: 1,
                      children: B.intl.string(B.t["6cfuDj"]),
                  })
                : C
                  ? (0, i.jsx)(H.E, {
                        variant: "text-md/bold",
                        color: "text-strong",
                        lineClamp: 1,
                        children: B.intl.string(B.t.nBtvYB),
                    })
                  : m
                    ? (0, i.jsx)(H.E, {
                          variant: "text-md/bold",
                          color: "text-strong",
                          lineClamp: 1,
                          children: B.intl.string(B.t.rt69oo),
                      })
                    : 0 === _.length
                      ? null
                      : (0, i.jsx)(ea.x, {
                            priceAmount: _[0].amount,
                            priceCurrency: _[0].currency,
                            discount: x,
                            discountIconConfig: o
                                ? { displayMode: "default", source: a ?? j.D0.NITRO, size: "sm" }
                                : void 0,
                            discountOfferAmount: I,
                            className: A && !g ? eo.c : void 0,
                            variant: "text-md/bold",
                        });
    },
    ek = (e) => {
        let { skuId: t, prioritizedCurrency: r } = e,
            n = (0, V.Vm)(t),
            s = (0, T.Q)(n);
        if (null == n) return null;
        let l = (0, v.rb)(n, s);
        return (0, i.jsx)(ed, { product: l, prioritizedCurrency: r });
    };
var ep = r(821609),
    em = r(44120),
    eC = r(465794),
    ex = r(757036),
    eI = r(106799),
    e_ = r(652165),
    eg = r(859040),
    eA = r(4227),
    eh = r(640634),
    ef = r(450481),
    eE = r(395068),
    eT = r(766172),
    ej = r(61750),
    ev = r(758836),
    ey = r(788868),
    eR = r(40577);
let eP = (e) => {
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
            d = (0, j.R8)(t, n, !1),
            k = a
                ? B.intl.formatToPlainString(B.t["5U5RB5"], { discountOfferAmount: u })
                : B.intl.formatToPlainString(B.t["cNSL/j"], { price: d });
        return (0, i.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(),
                    o?.(ev.sH.BUY_WITH_FIAT),
                    (0, em.A)({
                        skuId: (0, eT.Y)({ product: t, selectedVariantIndex: l }),
                        returnRef: r,
                        analyticsLocations: s,
                    });
            },
            text: c ?? k,
            fullWidth: !0,
        });
    },
    eb = (e) => {
        let { text: t, onTrackClick: r } = e;
        return (0, i.jsx)(eC.A, {
            subscriptionTier: ey.pe.TIER_2,
            fullWidth: !0,
            buttonTextOverride: t ?? B.intl.string(B.t.sEAnVH),
            onClick: (e) => {
                e.stopPropagation(), r?.(ev.sH.UNLOCK_WITH_NITRO);
            },
        });
    },
    eL = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: n } = e;
        return (0, i.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n?.(ev.sH.VIEW_DETAILS), t(e);
            },
            text: r ?? B.intl.string(B.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eN = (e) => {
        let { handleUseNow: t, isApplying: r, text: n, onTrackClick: s } = e;
        return (0, i.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), s?.(ev.sH.USE_NOW), t();
            },
            loading: r,
            text: n ?? B.intl.string(B.t.MAS7uK),
            fullWidth: !0,
        });
    },
    eO = (e) => {
        let { skuId: t, onClick: r, text: n } = e;
        return (0, i.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), r(t);
            },
            text: n ?? B.intl.string(B.t.FdGl5A),
            fullWidth: !0,
        });
    },
    eS = (e) => {
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
                    u?.(ev.sH.ADD_TO_COLLECTION),
                    await (0, eg.iJ)(t.skuId),
                    (0, ej.A)({ product: t, analyticsLocations: s, purchaseType: ev.gs.PREMIUM_PURCHASE });
            };
        return (0, i.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), c();
            },
            disabled: r,
            loading: n,
            loadingStartedLabel: B.intl.string(B.t["TYw+9s"]),
            loadingFinishedLabel: B.intl.string(B.t.Pg1UP5),
            text: l ?? B.intl.string(B.t.zp6caO),
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
            c = (0, eh.l)("collectibles_shop_product_card");
        return (0, i.jsx)(ep.$, {
            variant: "primary",
            text:
                l ??
                B.intl.format(c ? B.t.JC15qj : B.t.lOtBOI, {
                    orbPrice: r[0].amount,
                    orbIconHook: () => (0, i.jsx)(eI.A, { className: eR.f }),
                }),
            onClick: (e) => {
                e.stopPropagation(),
                    a?.("claim with orbs button"),
                    u?.(ev.sH.BUY_WITH_ORBS),
                    (0, e_.B4)({
                        skuId: (0, eT.Y)({ product: t, selectedVariantIndex: s }),
                        onComplete: (e) => {
                            (0, eg.gB)(),
                                (0, ej.A)({
                                    product: t,
                                    analyticsLocations: n,
                                    itemConsumed: e?.entitlements?.[0]?.consumed,
                                    purchaseType: ev.gs.ORB,
                                });
                        },
                        analyticsLocations: n,
                    });
            },
            "aria-label": B.intl.formatToPlainString(B.t.yi41qQ, { orbPrice: r[0].amount }),
            fullWidth: !0,
        });
    },
    eV = (e) => {
        let { handlePreviewButtonClick: t, text: r, onTrackClick: n } = e;
        return (0, i.jsx)(ep.$, {
            variant: "primary",
            onClick: (e) => {
                e.stopPropagation(), n?.(ev.sH.PAYMENT_OPTIONS), t(e);
            },
            text: r ?? B.intl.string(B.t.GpnHfH),
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
            o = (0, eE.A)({ location: "ProductCardPrimaryCTAInner", product: t }),
            d = (0, ei.bG)([W.default], () => W.default.getCurrentUser()),
            k = (0, ex.L)(ey.PremiumTypes.TIER_2),
            p = en.Ay.canUseShopDiscounts(d),
            { isPurchased: m, isPartiallyOwnedBundle: I } = (0, G.h)(t),
            _ = (0, j.G0)(t),
            g = (0, j.tt)(t),
            { isDisabled: A } = (0, el.I)(t.skuId),
            h = (0, j.Zu)({ product: t, isPartiallyOwnedBundle: I, isPurchased: m }),
            f = (0, eu.V_)(t),
            E = null != f,
            {
                shouldCheckoutWithOrbs: T,
                hasSufficientOrbs: v,
                checkoutEligiblePrices: y,
                isOrbExclusive: R,
            } = (0, ec.F)({ product: t, hasShopDiscount: p, prioritizedCurrency: a, hasDiscountOffer: E }),
            { analyticsLocations: P } = (0, x.Ay)(C.A.COLLECTIBLES_SHOP_CARD),
            b = (0, V.ql)(t, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u),
            [L, N] = (0, ei.yK)([eA.A], () => [
                eA.A.isClaiming === t.skuId,
                null != eA.A.isClaiming && eA.A.isClaiming !== t.skuId,
            ]),
            { handleUseNow: O, isApplying: S } = (0, ef.p)({ product: t });
        if (null != s) return (0, i.jsx)(eO, { onClick: s, skuId: t.skuId, text: l });
        if (_ && !k && !g) return (0, i.jsx)(eb, { text: l, onTrackClick: c });
        if (!h || A) return (0, i.jsx)(eL, { handlePreviewButtonClick: b, text: l, onTrackClick: c });
        if (m) return (0, i.jsx)(eN, { handleUseNow: O, isApplying: S, text: l, onTrackClick: c });
        if (o)
            return (0, i.jsx)(x.f5, {
                value: [...P, C.A.PROFILE_FRAMES_EA_MARKETING],
                children: (0, i.jsx)(eb, { text: B.intl.string(B.t.IvmZVF), onTrackClick: c }),
            });
        if (_)
            return (0, i.jsx)(eS, {
                product: t,
                isClaimPremiumProductDisabled: N,
                isClaiming: L,
                analyticsLocations: P,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (T && v)
            return (0, i.jsx)(eH, {
                product: t,
                checkoutEligiblePrices: y,
                analyticsLocations: P,
                selectedVariantIndex: n,
                text: l,
                onClickAnalytics: u,
                onTrackClick: c,
            });
        if (T && !v)
            if (y.length > 1) return (0, i.jsx)(eV, { handlePreviewButtonClick: b, text: l, onTrackClick: c });
            else return (0, i.jsx)(eL, { handlePreviewButtonClick: b, text: l, onTrackClick: c });
        return R
            ? (0, i.jsx)(eL, { handlePreviewButtonClick: b, text: l, onTrackClick: c })
            : (0, i.jsx)(eP, {
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
            c = (0, V.Vm)(t),
            o = (0, T.Q)(c);
        if (null == c) return null;
        let d = (0, v.rb)(c, o);
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
            m = (0, V.ql)(t, C.A.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON, u);
        return null != s || null != l
            ? (0, i.jsx)(eM.K, {
                  variant: "primary",
                  "aria-label": B.intl.string(B.t.SKNnqq),
                  icon: l ?? eU.b,
                  onClick: (e) => {
                      e.stopPropagation(), null != s ? s(t.skuId) : (c?.(ev.sH.OPEN_DETAILS), m(e));
                  },
              })
            : p
              ? (0, i.jsx)(_.R9, {
                    newValue: { pageCategory: d === ev.G2.HOME ? void 0 : k?.pageCategory },
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
            c = (0, V.Vm)(t),
            o = (0, T.Q)(c);
        if (null == c) return null;
        let d = (0, v.rb)(c, o);
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
    eq = (e) => {
        let { skuId: t, isCardHovered: r, onTrackClick: n } = e,
            s = (0, V.Vm)(t),
            l = (0, T.Q)(s);
        return null == s
            ? null
            : (0, i.jsx)(eK, { product: s, selectedVariantIndex: l, isCardHovered: r, onTrackClick: n });
    };
var e$ = r(935094),
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
                hideSecondaryCTA: h,
                badgeOverride: H,
                skipLimitedTimeCheck: B,
                onClickCard: M,
                onClickPrimaryCTA: U,
                onClickSecondaryCTA: w,
                onMouseEnter: F,
                onMouseLeave: W,
                onFocus: G,
                onBlur: z,
                primaryCTAText: Y,
                secondaryCTAIcon: Q,
                productNameClassName: K,
                badgeClassName: q,
                cardClassName: $,
                prioritizedCurrency: Z,
                aspectRatio: X,
                hideStaticBundleBackgroundAsset: J,
            } = e,
            { previewingVariantIndex: ee, handleEntering: et, handleLeaving: ei } = (0, e$.f)(t),
            en = (0, V.gZ)() ?? Z,
            { enabled: es } = (0, A.P)("ProductCard"),
            el = (0, g.Mk)(),
            ea = el?.tab,
            eu = (0, _.uM)(),
            ec = n.useMemo(() => (0, V.UU)(t, ea, eu), [t, ea, eu]),
            eo = (0, O.s7)(t),
            ed = n.useId(),
            ep = n.useRef(null),
            { isHoveringOrFocusing: em } = (0, I.A)(ep),
            eC = (0, eZ.$c)(t.skuId),
            ex = (function (e) {
                let t = (0, _.uM)(),
                    { analyticsLocations: r } = (0, x.Ay)(),
                    i = (0, T.Q)(e),
                    s = (0, y.o)(),
                    l = (0, j.xM)(s),
                    a = n.useRef(null),
                    u = n.useRef(!1),
                    c = n.useRef(i);
                n.useEffect(() => {
                    c.current = i;
                }, [i]);
                let o = n.useCallback(() => {
                        let i = (0, v.B1)(e);
                        (0, N.x)(
                            {
                                name: b.ImpressionNames.SHOP_CARD,
                                type: b.ImpressionTypes.VIEW,
                                properties: {
                                    sku_id: i ? (e.variants[c.current]?.skuId ?? e.skuId) : e.skuId,
                                    card_id: t?.cardId,
                                    shop_session_id: t?.sessionId,
                                    position_in_section: t?.tilePosition,
                                    product_sku_ids: (0, v.B1)(e) ? e.variants.map((e) => e.skuId) : [e.skuId],
                                    location_stack: r,
                                    discount_source: (0, j.b_)(l),
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
            eI = (0, u.A)(ep, ex),
            { handleCardVisibilityChange: e_ } = (0, f.Z)(t.skuId, ea === ev.G2.CATALOG ? "full" : ea),
            eg = (0, V.ql)(t, C.A.COLLECTIBLES_SHOP_CARD, ec),
            { analyticsLocations: eA } = (0, x.Ay)(),
            eh = (function (e) {
                let { product: t, analyticsLocations: r } = e,
                    { cardId: i, sessionId: s, tilePosition: l } = (0, _.uM)() ?? {},
                    a = (0, T.Q)(t),
                    u = (0, y.o)(),
                    c = (0, j.xM)(u);
                return n.useCallback(
                    (e, n) => {
                        E.default.track(R.HAw.SHOP_CARD_CLICKED, {
                            sku_id: (0, v.B1)(t) ? (t.variants[n ?? a]?.skuId ?? t.skuId) : t.skuId,
                            cta: e,
                            shop_session_id: s,
                            card_id: i,
                            product_sku_ids: (0, v.v8)(t),
                            location_stack: r,
                            position_in_section: l,
                            discount_source: (0, j.b_)(c),
                        });
                    },
                    [t, a, s, i, r, l, c],
                );
            })({ product: t, analyticsLocations: eA }),
            ef = n.useCallback(
                (e) => {
                    null != M ? M(e) : (eh(ev.sH.OPEN_DETAILS), eg(e));
                },
                [eh, M, eg],
            );
        !(function (e, t) {
            let r = (0, _.uM)(),
                { analyticsLocations: i } = (0, x.Ay)(),
                s = (0, T.Q)(t),
                l = n.useRef(!1),
                a = (0, P.A)(r),
                u = (0, P.A)(t),
                c = (0, P.A)(s),
                o = (0, P.A)(i);
            n.useEffect(() => {
                if (!e) {
                    l.current = !1;
                    return;
                }
                if (l.current) return;
                let t = setTimeout(() => {
                    let e = a.current,
                        t = u.current,
                        r = (0, v.B1)(t);
                    E.default.track(R.HAw.SHOP_CARD_HOVERED, {
                        shop_session_id: e?.sessionId,
                        sku_id: r ? (t.variants[c.current]?.skuId ?? t.skuId) : t.skuId,
                        position_in_section: e?.tilePosition,
                        card_id: e?.cardId,
                        product_sku_ids: (0, v.v8)(t),
                        location_stack: o.current,
                    }),
                        (l.current = !0);
                }, 250);
                return () => clearTimeout(t);
            }, [e, a, u, c, o]);
        })(em, t);
        let { enabled: eE } = (0, A.P)("ProductCard"),
            eT = t.type === c.R.BUNDLE && eE && t.previewAssets?.fgStatic != null,
            ej = t.type === c.R.VARIANTS_GROUP && !a,
            ey = n.useMemo(() => ({ maxVariantsToShow: 4, onClick: eg }), [eg]),
            eR = t.type === c.R.BUNDLE && es && !J,
            eP = !m || !h,
            eb = !(o && s) || ej,
            eL = eb || eP,
            eN = eP || ej;
        return (0, i.jsx)(d.L, {
            innerRef: ep,
            onChange: e_,
            threshold: 0,
            children: (0, i.jsx)(k.s, {
                ref: eI,
                onClick: ef,
                "aria-label": eo,
                "aria-describedby": ed,
                className: l()($, eX.ty, { [eX.yo]: em }),
                onFocus: () => G?.(t.skuId),
                onBlur: () => z?.(t.skuId),
                onMouseEnter: () => F?.(t.skuId),
                onMouseLeave: () => W?.(t.skuId),
                children: (0, i.jsx)(eZ.vf.Provider, {
                    value: eC ? ep : null,
                    children: (0, i.jsxs)("div", {
                        id: ed,
                        className: eX.qt,
                        style: { aspectRatio: X },
                        children: [
                            eR &&
                                t.previewAssets?.bgStatic != null &&
                                (0, i.jsx)("img", { className: eX.vD, src: t.previewAssets.bgStatic, alt: "" }),
                            (0, i.jsx)("div", {
                                className: l()(eX.Dq, { [eX.$r]: !s || eb || eN, [eX.T9]: eT }),
                                children: (0, i.jsx)(er, {
                                    skuId: t.skuId,
                                    isCardHovered: em,
                                    overrideVariantIndex: ee,
                                }),
                            }),
                            (0, i.jsxs)("div", {
                                className: eX.N1,
                                children: [
                                    (0, i.jsx)(S.A, {
                                        skuId: t.skuId,
                                        badgeOverride: H,
                                        className: q,
                                        prioritizedCurrency: en,
                                        skipLimitedTimeCheck: B,
                                    }),
                                    !r && (0, i.jsx)(eq, { skuId: t.skuId, isCardHovered: em, onTrackClick: eh }),
                                ],
                            }),
                            eL &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)("div", { className: l()(eX.wY, { [eX.KY]: eT }) }),
                                        (0, i.jsxs)("div", {
                                            className: eX.xQ,
                                            children: [
                                                eb &&
                                                    (0, i.jsxs)("div", {
                                                        className: eX.xE,
                                                        children: [
                                                            !(s && o) &&
                                                                (0, i.jsxs)("div", {
                                                                    className: eX.Ly,
                                                                    children: [
                                                                        !s &&
                                                                            (0, i.jsx)(D, {
                                                                                skuId: t.skuId,
                                                                                className: l()(K, eX.tZ),
                                                                            }),
                                                                        !o &&
                                                                            (0, i.jsx)("div", {
                                                                                className: eX.oh,
                                                                                children: (0, i.jsx)(ek, {
                                                                                    skuId: t.skuId,
                                                                                    prioritizedCurrency: en,
                                                                                }),
                                                                            }),
                                                                    ],
                                                                }),
                                                            ej &&
                                                                (0, i.jsx)(ez.A, {
                                                                    skuId: t.skuId,
                                                                    isCollapsed: !em,
                                                                    onVariantEnter: et,
                                                                    onVariantExit: ei,
                                                                    overflowProps: ey,
                                                                    onTrackClick: eh,
                                                                }),
                                                        ],
                                                    }),
                                                eP &&
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
                                                                        cardRef: ep,
                                                                        onClick: U,
                                                                        text: Y,
                                                                        prioritizedCurrency: en,
                                                                        onClickAnalytics: ec,
                                                                        onTrackClick: eh,
                                                                    }),
                                                                !h &&
                                                                    (0, i.jsx)(eG, {
                                                                        skuId: t.skuId,
                                                                        cardRef: ep,
                                                                        onClick: w,
                                                                        icon: Q,
                                                                        prioritizedCurrency: en,
                                                                        onClickAnalytics: ec,
                                                                        onTrackClick: eh,
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
            n = (0, V.Vm)(t),
            s = (0, m.A)(() => ({ cardId: (0, a.A)() })),
            l = (0, h.c)("product_card");
        return null != n && (t !== o.j.PREMIUM_TIER_2_1_DAY || l)
            ? (0, i.jsx)(_.R9, { newValue: s, children: (0, i.jsx)(eJ, { product: n, ...r }) })
            : null;
    };
