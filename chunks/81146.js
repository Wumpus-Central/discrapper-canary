s.d(t, { default: () => ty });
var n = s(627968),
    i = s(64700),
    r = s(503698),
    l = s.n(r),
    a = s(284009),
    c = s.n(a),
    o = s(562708),
    d = s(575593),
    u = s(334279),
    m = s(702841),
    h = s(990078),
    x = s(462887),
    p = s(231723),
    A = s(935462),
    g = s(408278),
    j = s(972213),
    R = s(834730),
    N = s(430690),
    v = s(821609),
    E = s(318254),
    _ = s(825484),
    I = s(534514),
    f = s(247928),
    C = s(331322),
    T = s(97808),
    O = s(778712),
    k = s(652215),
    b = s(359778),
    S = s(245604),
    P = s(460905),
    y = s(736653),
    D = s(775602),
    L = s(793574),
    B = s(688810),
    M = s(139286),
    U = s(262295),
    H = s(320095),
    F = s(963852),
    G = s(763754),
    V = s(20851),
    w = s(44120),
    W = s(465794),
    z = s(757036),
    $ = s(986687),
    q = s(101058),
    K = s(84540),
    Y = s(836602),
    Z = s(903209),
    J = s(761705),
    Q = s(371446),
    X = s(652165),
    ee = s(287809),
    et = s(174459),
    es = s(975571),
    en = s(927578),
    ei = s(580630),
    er = s(859040),
    el = s(440938),
    ea = s(4227),
    ec = s(298072),
    eo = s(993408),
    ed = s(640634),
    eu = s(940980),
    em = s(13875);
s(321073);
var eh = s(375708);
let ex = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return eh.intl.formatToPlainString(eh.t["/0Yndu"], { num: e.bundledProducts?.length });
        let s = e.bundledProducts ?? [],
            n = [],
            i = !1;
        for (let e of s)
            switch (e.type) {
                case d.R.AVATAR_DECORATION:
                    n.push(eh.intl.formatToPlainString(eh.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case d.R.PROFILE_EFFECT:
                    n.push(eh.intl.formatToPlainString(eh.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case d.R.NAMEPLATE:
                    n.push(eh.intl.formatToPlainString(eh.t["2keXky"], { itemName: e.name })), (i = !0);
            }
        if (i) {
            let e = n.join(", ").replace(/, ([^,]*)$/, " & $1");
            return eh.intl.formatToPlainString(eh.t.Ofrqj6, { joinedItems: e });
        }
        let r = n.join(" & ");
        return eh.intl.formatToPlainString(eh.t.Ofrqj6, { joinedItems: r });
    },
    ep = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === d.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let s = ex(e, t);
                    return e.summary.replace("{joinedItems}", s);
                }
                return e.summary;
            }
            switch (e?.type) {
                case d.R.AVATAR_DECORATION:
                    return eh.intl.string(eh.t["3lv7q2"]);
                case d.R.PROFILE_EFFECT:
                    return eh.intl.string(eh.t.VhJL72);
                case d.R.NAMEPLATE:
                    return eh.intl.string(eh.t.ik37EZ);
                case d.R.PROFILE_FRAME:
                    return eh.intl.string(eh.t.fWzWPp);
                case d.R.BUNDLE:
                    return ex(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
var eA = s(740076),
    eg = s(466459),
    ej = s(442759),
    eR = s(395068),
    eN = s(780898),
    ev = s(344346),
    eE = s(139136),
    e_ = s(395744),
    eI = s(623373),
    ef = s(660653),
    eC = s(536572),
    eT = s(885574),
    eO = s(401231);
let ek = (e) => {
    let { className: t, isPartiallyPurchased: s } = e;
    return s
        ? (0, n.jsx)(h.m, {
              position: "top",
              align: "left",
              text: eh.intl.string(eh.t.y1VWkZ),
              children: (0, n.jsxs)("div", {
                  className: l()(eO.GX, t),
                  children: [
                      (0, n.jsx)("span", {
                          className: eO.P0,
                          children: (0, n.jsx)(eT.m, { size: "md", color: "currentColor", className: eO.G }),
                      }),
                      (0, n.jsx)(R.E, { variant: "text-md/semibold", children: eh.intl.string(eh.t.BEjTij) }),
                  ],
              }),
          })
        : (0, n.jsx)(R.E, { variant: "text-md/semibold", className: t, children: eh.intl.string(eh.t["6cfuDj"]) });
};
var eb = s(691540),
    eS = s(857250),
    eP = s(97483),
    ey = s(173936),
    eD = s(957565),
    eL = s(758836);
function eB(e) {
    let { skuId: t, tab: s, onTrackClick: r } = e,
        l = i.useCallback(() => {
            et.default.track(k.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), r?.(eL.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${k.BVt.COLLECTIBLES_SHOP}${((0, eL.cw))(s) ? `?tab=${s}` : ""}#itemSkuId=${t}`;
            (0, eD.C)(e, () => (0, eb.P0)((0, eS.o)(eh.intl.string(eh.t["L/PwZf"]), eP.Ck.SUCCESS)));
        }, [t, s, r]);
    return (0, n.jsx)(g.K, {
        "aria-label": eh.intl.string(eh.t.WqhZss),
        onClick: l,
        icon: ey.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var eM = s(854818),
    eU = s(177366),
    eH = s(674019);
function eF(e) {
    let { product: t, isDarkText: s = !1, isOrbExclusive: i = !1 } = e,
        r = (function (e, t) {
            if (t) return eh.intl.string(eh.t["0TmQRG"]);
            switch (e) {
                case d.R.AVATAR_DECORATION:
                    return eh.intl.string(eh.t["7v0T9P"]);
                case d.R.PROFILE_EFFECT:
                    return eh.intl.string(eh.t.wR5wOo);
                case d.R.PROFILE_FRAME:
                    return eh.intl.string(eh.t.GWrZOd);
                case d.R.NAMEPLATE:
                    return eh.intl.string(eh.t.x5CoXR);
            }
            return null;
        })(t.type, i);
    return null === r
        ? null
        : (0, n.jsx)(R.E, { variant: "text-xxs/normal", className: l()([eH.kL, s ? eH.ap : eH.aK]), children: r });
}
var eG = s(203312),
    eV = s(878112),
    ew = s(140735),
    eW = s(252955);
let ez = (e) => {
    let {
            price: { amount: t, currency: s },
            className: i,
            variant: r = "heading-md/semibold",
        } = e,
        a = (0, ei.RS)(t, s);
    return (0, n.jsxs)(R.E, {
        variant: r,
        className: l()(eW.v, i),
        children: [
            (0, n.jsx)(ew.A, { children: eh.intl.format(eh.t["2CEGln"], { price: a }) }),
            (0, n.jsx)("span", { "aria-hidden": !0, children: a }),
        ],
    });
};
var e$ = s(219103),
    eq = s(469215);
function eK(e) {
    let {
            product: t,
            hasShopDiscount: s,
            discountSource: i,
            discount: r,
            className: a,
            discountOfferAmount: c,
            hideStrikethroughPrice: o = !1,
            discountIconDisplayMode: d,
            discountIconSize: u = "md",
        } = e,
        m = (0, eo.WD)(t, { hasShopDiscount: s, discount: r });
    if (null == m) return null;
    let { defaultPrice: h, showDefaultPriceOnly: x } = m;
    if (x)
        return (0, n.jsx)("div", {
            className: l()(eq.kG, a),
            children: (0, n.jsx)(e$.x, { priceAmount: h.amount, priceCurrency: h.currency }),
        });
    let { showDiscountPrice: p, originalPrice: A, finalPrice: g } = m;
    return (0, n.jsxs)("div", {
        className: l()(eq.kG, a),
        children: [
            o ? null : (0, n.jsx)(ez, { price: A, className: eq.q9 }),
            (0, n.jsx)(e$.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: r,
                className: l()({ [eq.q9]: null == c }),
                discountIconConfig: p && null != d ? { displayMode: d, source: i ?? eo.D0.NITRO, size: u } : void 0,
                discountOfferAmount: c,
            }),
        ],
    });
}
var eY = s(403581),
    eZ = s(939249),
    eJ = s(532794),
    eQ = s(788868),
    eX = s(447806);
let e0 = (e) => {
    let { text: t, onTrackClick: s } = e,
        { analyticsLocations: r } = (0, B.Ay)(),
        l = i.useRef(null);
    return (0, n.jsx)(eZ.D, {
        className: eX.F,
        innerRef: l,
        onClick: () => {
            s?.(eL.sH.SUBSCRIBE_NOW),
                (0, eJ.A)({ subscriptionTier: eQ.pe.TIER_2, analyticsLocations: r, returnRef: l });
        },
        children: t,
    });
};
var e1 = s(805961);
function e5(e) {
    let { product: t, onTrackClick: s } = e,
        i = (0, eo.yt)(t, k.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let r = (0, ei.RS)(i.amount, i.currency);
    return (0, n.jsxs)("div", {
        className: e1.k,
        children: [
            (0, n.jsx)(h.m, {
                text: eh.intl.string(eh.t.MPFyJ5),
                "aria-label": eh.intl.string(eh.t.X3Ekj8),
                children: (0, n.jsx)(eY.t, { size: "md", color: "currentColor", className: e1.o }),
            }),
            (0, n.jsx)(R.E, {
                variant: "text-xs/medium",
                children: eh.intl.format(eh.t.Sv8iic, {
                    price: r,
                    subscribeNowHook: (e) => (0, n.jsx)(e0, { text: e, onTrackClick: s }),
                }),
            }),
        ],
    });
}
var e7 = s(572595),
    e4 = s(450481);
let e3 = (e) => {
    let { product: t, onSuccess: s, onTrackClick: i } = e,
        { handleUseNow: r, isApplying: l } = (0, e4.p)({ product: t, onSuccess: s });
    return (0, n.jsx)(v.$, {
        variant: "primary",
        onClick: () => {
            i?.(eL.sH.USE_NOW), r();
        },
        loading: l,
        text: eh.intl.string(eh.t.MAS7uK),
        fullWidth: !0,
    });
};
var e2 = s(478016),
    e8 = s(661531),
    e9 = s(224016),
    e6 = s(913521);
let te = () => {
    let e = [eh.t.E1NP2x, eh.t.kpMomJ, eh.t.xT1Vfn, eh.t.myyAEr, eh.t.zTk8Ul];
    return (0, n.jsxs)("div", {
        className: e6.kL,
        children: [
            (0, n.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: e6.ym,
            }),
            (0, n.jsx)(e9.A, { color: "white" }),
            (0, n.jsx)("div", {
                className: e6.PX,
                children: e.map((e, t) =>
                    (0, n.jsxs)(
                        "div",
                        {
                            className: e6.UJ,
                            children: [
                                (0, n.jsx)(e2.U, { color: e8.A.colors.WHITE }),
                                (0, n.jsx)(R.E, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
                                    children: eh.intl.string(e),
                                }),
                            ],
                        },
                        t,
                    ),
                ),
            }),
        ],
    });
};
var tt = s(110629),
    ts = s(17928),
    tn = s(576052),
    ti = s(83554);
let tr = (e) => {
    let { user: t } = e,
        s = en.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...r } = (0, ts.cf)([Y.A], () => Y.A.getPendingChanges()),
        l = (0, q.V7)({ userId: t.id, image: i });
    return (0, n.jsx)("div", {
        className: ti.k,
        children: (0, n.jsx)($.A, {
            ...r,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, tn._)()],
            canUsePremiumCustomization: s,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
var tl = s(561769);
let ta = (e) => {
    let { skuId: t, overrideVariantIndex: s, className: i } = e,
        r = (0, tl.Vm)(t),
        l = (0, ec.Q)(r);
    return null != r && (0, eI.B1)(r)
        ? (0, n.jsx)(R.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: i,
              lineClamp: 1,
              children: r.variants[s ?? l].variantLabel,
          })
        : null;
};
var tc = s(661847),
    to = s(846957),
    td = s(818348),
    tu = s(752274);
function tm(e) {
    let { orbPrice: t, isProductDisabled: s, hasSufficientOrbs: i } = e,
        r = s ? eh.intl.string(eh.t.wu4gyV) : eh.intl.string(eh.t.eFNRzU),
        l = s || !i;
    return (0, n.jsxs)("div", {
        className: tu.eg,
        children: [
            (0, n.jsx)("div", {
                className: tu.zR,
                children: (0, n.jsx)(R.E, { variant: "text-xs/normal", className: l ? tu.r9 : void 0, children: r }),
            }),
            (0, n.jsx)(e$.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? tu.r9 : void 0 }),
        ],
    });
}
function th(e) {
    let {
            prices: t,
            hasShopDiscount: s,
            discountSource: i,
            discount: r,
            product: l,
            hasSufficientOrbs: a,
            onTrackClick: c,
            isProductDisabled: o,
            discountOfferAmount: d,
        } = e,
        u = null != d;
    return 0 === t.length
        ? null
        : t[0].currency === td.Yr.DISCORD_ORB
          ? (0, n.jsx)(tm, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a })
          : (0, n.jsxs)("div", {
                className: tu.eg,
                children: [
                    (0, n.jsxs)("div", {
                        className: tu.pw,
                        children: [
                            (0, n.jsx)(eK, {
                                product: l,
                                discount: r,
                                hasShopDiscount: s,
                                discountSource: i,
                                hideStrikethroughPrice: !s || u,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: d,
                            }),
                            s || u ? null : (0, n.jsx)(e5, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === td.Yr.DISCORD_ORB &&
                        (0, n.jsx)(e$.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tu.r9 : void 0,
                        }),
                ],
            });
}
var tx = s(139146),
    tp = s(929283);
let tA = (e, t) => (e.type === d.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e);
var tg = s(525723),
    tj = s(212407),
    tR = s(347722),
    tN = s(935094),
    tv = s(57020),
    tE = s(61750),
    t_ = s(127157);
let tI = (e) => {
        let { item: t, product: s, user: i } = e,
            r = (0, eo.aw)(s),
            { firstAvatarDecoration: l } = (0, ej.f5)(s);
        switch (t.type) {
            case d.R.AVATAR_DECORATION:
                return (0, n.jsx)("div", {
                    className: r ? t_.X2 : t_.h1,
                    children: (0, n.jsx)(tp.i, { user: i, item: t, isHighlighted: !0 }),
                });
            case d.R.PROFILE_EFFECT:
                return (0, n.jsx)("div", {
                    className: r ? t_.ME : t_.sm,
                    children: (0, n.jsx)(eE.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case d.R.PROFILE_FRAME:
                return (0, n.jsx)("div", { className: t_.ob, children: (0, n.jsx)(e_.A, { frame: t }) });
            case d.R.NAMEPLATE:
                return (0, n.jsx)("div", {
                    className: t_.Dz,
                    children: (0, n.jsx)(ev.A, {
                        className: t_.M4,
                        nameplate: t,
                        user: i,
                        nameplatePreviewSize: "large",
                        pendingAvatarDecoration: l,
                        isHighlighted: !0,
                    }),
                });
            default:
                return null;
        }
    },
    tf = (e) => {
        let { product: t, user: s, activeSlide: i = 0 } = e,
            r = t.items.length;
        return (0, n.jsx)("div", {
            className: t_.g4,
            children: (0, n.jsx)(N.t, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        a = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        c = `(${i + 1}/${r})`;
                    return (0, n.jsx)(
                        N.q,
                        {
                            id: l,
                            children: (0, n.jsxs)("div", {
                                className: t_.Kg,
                                children: [
                                    (0, n.jsx)(tI, { item: e, product: t, user: s }),
                                    (0, n.jsxs)(R.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: t_.gx,
                                        children: [a?.name, " ", c],
                                    }),
                                ],
                            }),
                        },
                        l,
                    );
                }),
            }),
        });
    },
    tC = (e) => {
        let { product: t, user: s, activeSlide: i } = e;
        return (0, eo.aw)(t)
            ? (0, n.jsx)(tf, { product: t, user: s, activeSlide: i })
            : (0, eL.pQ)(t.skuId)
              ? (0, n.jsx)(to.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, n.jsx)(tI, { item: t.items[0], product: t, user: s })
                : null;
    },
    tT = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, n.jsx)(R.E, {
                  variant: "text-sm/normal",
                  className: t_.CU,
                  children: eh.intl.format(eh.t.Q1scdE, {
                      helpdeskArticle: es.A.getArticleURL(k.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    tO = (e) => {
        let {
                product: t,
                user: s,
                category: r,
                shouldCheckoutWithOrbs: a,
                tab: o,
                onClose: u,
                returnRef: p,
                previewingVariantIndexProps: A,
                selectedVariantIndex: g,
                activeBundleSlide: j,
                giftRecipient: N,
                giftingOrigin: T,
                onTrackClick: O,
            } = e,
            { analyticsLocations: b } = (0, B.Ay)(),
            { cardId: S, sessionId: P, tilePosition: D } = (0, el.uM)() ?? {},
            L = (0, z.L)(eQ.PremiumTypes.TIER_2),
            M = (0, eo.xM)(s),
            { previewingVariantIndex: U, handleEntering: H, handleLeaving: F } = A,
            G = tA(t, U),
            V = (0, eI.rb)(t, g);
        c()(null != V, "Selected product should not be null");
        let $ = (0, em.Do)("CollectiblesShopProductDetailsModal") && V.type === d.R.PROFILE_FRAME,
            q = en.Ay.canUseShopDiscounts(s) || $,
            Y = (0, eg.h)(t),
            { isPurchased: Z, isPartiallyOwnedBundle: ee } = (0, eg.h)(V),
            { isDisabled: et, disabledReason: es } = (0, eA.I)(V.skuId),
            ec = (0, eo.Zu)({ product: V, isPartiallyOwnedBundle: ee, isPurchased: Z }),
            ex = (0, m.bG)([ea.A], () => ea.A.isClaiming === V?.skuId),
            eN = (0, y.Ay)(),
            ev = (0, x.M)(eN),
            eE = (0, eo.G0)(V),
            e_ = (0, eo.yt)(V, k.lid.DEFAULT),
            ef = e_?.amount === 0,
            { firstAvatarDecoration: eT } = (0, ej.f5)(G ?? V),
            eO = i.useMemo(() => (0, eo.fT)(V, q), [V, q]),
            eb = (0, eC.VG)(t),
            eS = (0, tR.X)(V),
            { enabled: eP } = (0, Q.Z)({ location: "collectibles_shop_product_details_modal" }),
            ey = ep(V, !1),
            eD = (0, tg.V_)(t),
            eB = null != eD,
            eM = (t.variants?.length ?? 0) > 8,
            eU = (0, eu.W)("CollectiblesShopProductDetailsModal"),
            eH = o === eL.G2.ORBS && a ? tl.Hi.ORBS : eU ? tl.Hi.FIAT : void 0,
            ew = (0, ed.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eW,
                isOrbExclusive: ez,
                hasSufficientOrbs: e$,
            } = (0, tv.F)({ product: V, hasShopDiscount: q, hasDiscountOffer: eB, prioritizedCurrency: eH }),
            eq = (0, eR.A)({ location: "CollectiblesShopProductDetailsModal", product: V }),
            eY = i.useMemo(() => eW.some((e) => e.currency === td.Yr.DISCORD_ORB), [eW]);
        (0, J.W)({ disableFetch: !eY });
        let eZ = i.useCallback(() => {
            O(eL.sH.BUY_WITH_FIAT),
                (0, w.A)({ skuId: V.skuId, analyticsLocations: b, onClose: (e) => (e ? u() : (0, td.tE)()) });
        }, [b, u, V.skuId, O]);
        i.useEffect(() => {
            if (null != eT) return (0, K.p)({ avatarDecoration: eT }), () => (0, K.p)({ avatarDecoration: void 0 });
        }, [eT]);
        let eJ = (e) =>
            (0, n.jsx)(W.A, {
                subscriptionTier: eQ.pe.TIER_2,
                fullWidth: !0,
                buttonTextOverride: e,
                onClick: () => {
                    O(eL.sH.UNLOCK_WITH_NITRO), (0, e7.M)();
                },
                onSubscribeModalClose: () => {
                    (0, e7.t)({
                        product: V,
                        category: r,
                        shouldCheckoutWithOrbs: a,
                        returnRef: p,
                        analyticsLocations: b,
                        tab: o,
                        giftRecipient: N,
                        giftingOrigin: T,
                        cardId: S,
                        sessionId: P,
                        tilePosition: D,
                    });
                },
            });
        return (0, n.jsxs)("div", {
            className: t_.qA,
            children: [
                (0, n.jsx)("div", { className: t_.gn, children: (0, n.jsx)(eG.A, { category: r }) }),
                (0, n.jsx)(tC, { product: G ?? V, user: s, activeSlide: j }),
                (0, n.jsxs)("div", {
                    children: [
                        (0, n.jsxs)("div", {
                            className: t_.h_,
                            children: [
                                $
                                    ? (0, n.jsx)("div", {
                                          className: t_.LM,
                                          children: (0, n.jsx)(tt.A, {
                                              location: "CollectiblesShopProductDetailsModal",
                                          }),
                                      })
                                    : (0, n.jsx)(eF, { product: V, isDarkText: !ev, isOrbExclusive: ez }),
                                (0, n.jsx)(I.D, { variant: "heading-xl/extrabold", className: t_.v7, children: eb }),
                                (0, n.jsx)(R.E, { variant: "text-sm/normal", children: ey }),
                                (0, n.jsx)(tT, { skuId: V.skuId }),
                                Y.isPurchased || Y.isPartiallyOwnedBundle
                                    ? (0, n.jsx)(ek, { className: t_.On, isPartiallyPurchased: ee })
                                    : eE
                                      ? (0, n.jsx)(R.E, {
                                            variant: "text-md/semibold",
                                            className: t_.On,
                                            children: eh.intl.string(eh.t.rt69oo),
                                        })
                                      : eP
                                        ? (0, n.jsx)(th, {
                                              prices: eW,
                                              product: V,
                                              hasShopDiscount: q,
                                              discountSource: M,
                                              discount: eO,
                                              hasSufficientOrbs: e$,
                                              isProductDisabled: et,
                                              discountOfferAmount: eD,
                                              onTrackClick: O,
                                          })
                                        : ez
                                          ? null
                                          : (0, n.jsxs)("div", {
                                                className: t_.pw,
                                                children: [
                                                    (0, n.jsx)(eK, {
                                                        product: V,
                                                        discount: eO,
                                                        hasShopDiscount: q,
                                                        discountSource: M,
                                                        hideStrikethroughPrice: !q || eB,
                                                        discountIconDisplayMode: "tooltip",
                                                        discountIconSize: "xs",
                                                        discountOfferAmount: eD,
                                                    }),
                                                    q || eB ? null : (0, n.jsx)(e5, { product: V, onTrackClick: O }),
                                                ],
                                            }),
                            ],
                        }),
                        (0, eI.B1)(t) &&
                            (0, n.jsx)(f.M, {
                                children: (0, n.jsxs)("div", {
                                    className: l()(t_.Oj, { [t_.OJ]: eM }),
                                    children: [
                                        eM &&
                                            (0, n.jsx)(ta, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: U,
                                                className: t_.L$,
                                            }),
                                        (0, n.jsx)(tc.A, {
                                            skuId: t.skuId,
                                            onVariantEnter: H,
                                            onVariantExit: F,
                                            wrap: !0,
                                        }),
                                        !eM &&
                                            (0, n.jsx)(ta, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: U,
                                                className: t_.L$,
                                            }),
                                    ],
                                }),
                            }),
                        null !== es && (0, n.jsx)(R.E, { variant: "text-xs/normal", className: t_.H$, children: es }),
                        (0, n.jsx)(C.B, {
                            direction: "vertical",
                            gap: 8,
                            children:
                                !eE || L || ef
                                    ? ec
                                        ? Z
                                            ? eS
                                                ? (0, n.jsxs)(_.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, n.jsx)(e3, { product: V, onSuccess: u, onTrackClick: O }),
                                                          (0, n.jsx)(eV.A, {
                                                              primary: !0,
                                                              product: V,
                                                              onSuccess: u,
                                                              giftRecipient: N,
                                                              giftingOrigin: T,
                                                              onTrackClick: O,
                                                          }),
                                                      ],
                                                  })
                                                : (0, n.jsx)(e3, { product: V, onSuccess: u, onTrackClick: O })
                                            : eq
                                              ? eJ(eh.intl.string(eh.t.IvmZVF))
                                              : eE
                                                ? (0, n.jsx)(v.$, {
                                                      loading: ex,
                                                      loadingStartedLabel: eh.intl.string(eh.t["TYw+9s"]),
                                                      loadingFinishedLabel: eh.intl.string(eh.t.Pg1UP5),
                                                      onClick: async () => {
                                                          O(eL.sH.ADD_TO_COLLECTION),
                                                              await (0, er.iJ)(V.skuId),
                                                              u(),
                                                              (0, tE.A)({
                                                                  product: V,
                                                                  analyticsLocations: b,
                                                                  purchaseType: eL.gs.PREMIUM_PURCHASE,
                                                              });
                                                      },
                                                      text: eh.intl.string(eh.t.zp6caO),
                                                      fullWidth: !0,
                                                  })
                                                : (0, n.jsx)(n.Fragment, {
                                                      children: eW.map((e, t) => {
                                                          let s,
                                                              i = 0 === t;
                                                          if (e.currency === td.Yr.DISCORD_ORB) {
                                                              let t, s, r, l;
                                                              return (
                                                                  (t = et
                                                                      ? eh.intl.string(eh.t.cTdr3x)
                                                                      : eh.intl.string(eh.t.zqh7ZM)),
                                                                  (s = !e$ || et),
                                                                  (r = eh.intl.formatToPlainString(eh.t.yi41qQ, {
                                                                      orbPrice: e.amount,
                                                                  })),
                                                                  (l = s ? `${r}, ${t}` : r),
                                                                  (0, n.jsx)(h.m, {
                                                                      position: "top",
                                                                      text: t,
                                                                      shouldShow: s,
                                                                      "aria-label": !1,
                                                                      children: (0, n.jsx)(v.$, {
                                                                          variant: i ? "primary" : "secondary",
                                                                          onClick: () => {
                                                                              O(eL.sH.BUY_WITH_ORBS),
                                                                                  (0, X.B4)({
                                                                                      skuId: V.skuId,
                                                                                      onComplete: (e) => {
                                                                                          (0, er.gB)(),
                                                                                              u(),
                                                                                              (0, tE.A)({
                                                                                                  product: V,
                                                                                                  analyticsLocations: b,
                                                                                                  itemConsumed:
                                                                                                      e
                                                                                                          ?.entitlements?.[0]
                                                                                                          ?.consumed,
                                                                                                  purchaseType:
                                                                                                      eL.gs.ORB,
                                                                                              });
                                                                                      },
                                                                                      analyticsLocations: b,
                                                                                  });
                                                                          },
                                                                          disabled: s,
                                                                          "aria-label": l,
                                                                          text: eh.intl.format(
                                                                              ew ? eh.t.JC15qj : eh.t.lOtBOI,
                                                                              {
                                                                                  orbPrice: e.amount,
                                                                                  orbIconHook: () =>
                                                                                      (0, n.jsx)(E.C, {
                                                                                          className: t_.fN,
                                                                                          size: "sm",
                                                                                          color: "currentColor",
                                                                                      }),
                                                                              },
                                                                          ),
                                                                          fullWidth: !0,
                                                                      }),
                                                                  })
                                                              );
                                                          }
                                                          return (
                                                              (s = ((e) => {
                                                                  switch (e.type) {
                                                                      case d.R.BUNDLE:
                                                                          return eh.intl.string(eh.t.V1AWw0);
                                                                      case d.R.PROFILE_EFFECT:
                                                                          return eh.intl.string(eh.t.kAeDcK);
                                                                      case d.R.NAMEPLATE:
                                                                          return eh.intl.string(eh.t.H3vhqU);
                                                                      case d.R.PROFILE_FRAME:
                                                                          return eh.intl.string(eh.t.BlSW1e);
                                                                      case d.R.AVATAR_DECORATION:
                                                                      default:
                                                                          return eh.intl.string(eh.t.AQ0Veg);
                                                                  }
                                                              })(V)),
                                                              eB
                                                                  ? (s = eh.intl.formatToPlainString(eh.t["5U5RB5"], {
                                                                        discountOfferAmount: eD,
                                                                    }))
                                                                  : eP &&
                                                                    (s = eh.intl.formatToPlainString(eh.t["cNSL/j"], {
                                                                        price: (0, ei.$g)(e.amount, e.currency),
                                                                    })),
                                                              (0, n.jsxs)(_.e, {
                                                                  wrap: !1,
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, n.jsx)(v.$, {
                                                                          variant: i ? "primary" : "secondary",
                                                                          onClick: eZ,
                                                                          text: s,
                                                                          fullWidth: !0,
                                                                      }),
                                                                      eS &&
                                                                          (0, n.jsx)(eV.A, {
                                                                              primary: i,
                                                                              product: V,
                                                                              onSuccess: u,
                                                                              giftRecipient: N,
                                                                              giftingOrigin: T,
                                                                              onTrackClick: O,
                                                                          }),
                                                                  ],
                                                              })
                                                          );
                                                      }),
                                                  })
                                        : eS
                                          ? (0, n.jsx)(eV.A, {
                                                primary: !0,
                                                product: V,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: N,
                                                giftingOrigin: T,
                                                onTrackClick: O,
                                            })
                                          : null
                                    : eJ(eh.intl.string(eh.t.sEAnVH)),
                        }),
                        (0, n.jsx)(R.E, {
                            className: l()(t_.ed, !ev && t_.un),
                            variant: "text-xxs/normal",
                            children: eE && !Z ? eh.intl.string(eh.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    tk = (e) => {
        let { user: t, innerClassName: s } = e;
        return (0, n.jsx)("div", {
            className: t_.mV,
            children: (0, n.jsx)(U.A, {
                avatar: (0, n.jsx)(T.eu, {
                    src: t.avatarSrc,
                    size: O._3.SIZE_32,
                    "aria-label": t.name,
                    status: k.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(t_.$L, s),
            }),
        });
    },
    tb = (e) => {
        let { user: t, nameplate: s, avatarDecoration: i } = e,
            r = (0, eN.Ov)();
        return (0, n.jsx)("div", {
            className: t_.nJ,
            role: "img",
            "aria-label": eh.intl.string(eh.t.SZeUdR),
            children: (0, n.jsxs)(f.M, {
                children: [
                    (0, n.jsx)(tk, { user: r.mallow, innerClassName: t_.ab }),
                    (0, n.jsxs)(R.E, {
                        variant: "text-sm/semibold",
                        className: t_.OS,
                        children: [eh.intl.string(eh.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, n.jsx)(tk, { user: r.phibi, innerClassName: t_.e9 }),
                    (0, n.jsx)("div", {
                        className: t_.mV,
                        children: (0, n.jsx)(ev.A, {
                            className: t_.M4,
                            innerClassName: t_.e9,
                            user: t,
                            nameplate: s,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, n.jsx)(tk, { user: r.locke, innerClassName: t_.e9 }),
                    (0, n.jsxs)(R.E, {
                        variant: "text-sm/semibold",
                        className: t_.OS,
                        children: [eh.intl.string(eh.t["NG43/6"]), " - 12"],
                    }),
                    (0, n.jsx)(tk, { user: r.boom, innerClassName: t_.bD }),
                    (0, n.jsx)(tk, { user: r.cherry, innerClassName: t_.bD }),
                ],
            }),
        });
    },
    tS = (e) => {
        let { product: t, user: s, activeBundleSlide: i, isTransitioning: r } = e,
            a = (0, m.bG)([D.A], () => D.A.useReducedMotion),
            c = en.Ay.canUsePremiumProfileCustomization(s),
            { pendingAvatar: o, ...u } = (0, m.cf)([Y.A], () => Y.A.getPendingChanges()),
            h = (0, q.V7)({ userId: s.id, image: o }),
            x = t.type === d.R.AVATAR_DECORATION,
            [p] = t.items,
            {
                firstAvatarDecoration: A,
                firstProfileEffect: g,
                firstNameplate: j,
                firstProfileFrame: R,
            } = (0, ej.f5)(t),
            N = null != g || null != R,
            v = () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)($.A, {
                            ...u,
                            pendingAvatar: h,
                            user: s,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: A,
                            pendingProfileEffect: g,
                            pendingProfileFrame: R,
                            disabledInputs: !0,
                            hideMessageInput: !N,
                            hideCustomStatus: !0,
                            hideBioSection: x,
                            hideExampleButton: !0,
                            interactive: !1,
                            containerClassName: x ? t_.Bb : void 0,
                        }),
                        x && (0, n.jsx)(tP, { user: s }),
                    ],
                }),
            E = (e) => (0, n.jsx)(tb, { user: s, nameplate: e, avatarDecoration: A });
        if (t.type === d.R.BUNDLE) {
            if (!(0, ef.Wb)(t))
                return (0, n.jsx)("div", {
                    className: t_.RA,
                    children: (0, n.jsx)("div", { className: t_.bo, children: v() }),
                });
            {
                let e = i ?? 0,
                    s = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    o = c?.type !== s?.type && !a;
                return s.type === d.R.NAMEPLATE
                    ? (0, n.jsx)("div", { className: l()(t_.Zj, r && o ? t_.p2 : ""), children: E(s) })
                    : (0, n.jsx)("div", { className: l()(t_.Ak, r && o ? t_.p2 : ""), children: v() });
            }
        }
        return null != j
            ? (0, n.jsx)("div", { className: t_.Zj, children: E(j) })
            : (0, n.jsx)("div", { className: p?.type === d.R.AVATAR_DECORATION ? t_.RA : t_.Ak, children: v() });
    },
    tP = (e) => {
        let { user: t } = e,
            s = ((e) => {
                let { author: t } = e;
                return (0, H.rh)({
                    ...(0, F.Ay)({ author: t, channelId: "1337", content: eh.intl.string(eh.t.d5YwK5) }),
                    state: k.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, n.jsx)("div", {
            role: "img",
            "aria-label": eh.intl.string(eh.t["TN+ZvB"]),
            children: (0, n.jsx)(f.M, {
                children: (0, n.jsxs)(b.Z, {
                    className: t_.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, n.jsx)(V.A, { className: t_.G5, author: (0, G.p_)(s), message: s }, s.id),
                        (0, n.jsxs)("div", {
                            className: t_.lG,
                            children: [
                                (0, n.jsx)(S.U, { size: "md", color: "currentColor", className: t_.hq }),
                                (0, n.jsx)(P.n, { size: "md", color: "currentColor", className: t_.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    ty = (e) => {
        let {
                transitionState: t,
                onClose: s,
                product: r,
                category: a,
                returnRef: h,
                analyticsSource: x,
                analyticsLocations: N,
                shouldCheckoutWithOrbs: v,
                tab: E,
                giftRecipient: _,
                giftingOrigin: I,
            } = e,
            f = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            C = (0, tN.f)(r),
            { previewingVariantIndex: T } = C,
            O = (0, ec.Q)(r),
            b = tA(r, T),
            S = (0, eI.rb)(r, O);
        c()(null != S, "Selected product should not be null");
        let { analyticsLocations: P } = (0, B.Ay)([...N, L.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eU.Yr)(S.skuId);
        let y = (0, tj.U1)(a);
        i.useEffect(() => {
            null != f && (0, Z.A)(f.id, f.getAvatarURL(void 0, 80));
        }, [f]);
        let D = i.useMemo(() => (0, eo.V6)(r.type, r.skuId), [r.type, r.skuId]);
        i.useEffect(() => {
            et.default.track(k.HAw.OPEN_MODAL, {
                type: k.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: x,
                location_stack: P,
                sku_id: S.skuId,
                product_type: D,
            }),
                (0, er.RD)(S.skuId);
        }, [x, P, S.skuId, D]);
        let { cardId: U, sessionId: H, tilePosition: F } = (0, el.uM)() ?? {},
            G = i.useMemo(() => (0, eI.v8)(r), [r]),
            V = (function (e) {
                let { skuId: t, productSkuIds: s, analyticsLocations: n } = e,
                    { cardId: r, sessionId: l } = (0, el.uM)() ?? {};
                return i.useCallback(
                    (e) => {
                        et.default.track(k.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: t,
                            cta: e,
                            shop_session_id: l,
                            card_id: r,
                            product_sku_ids: s,
                            location_stack: n,
                        });
                    },
                    [t, n, r, s, l],
                );
            })({ skuId: S.skuId, productSkuIds: G, analyticsLocations: P });
        (0, M.A)({
            type: o.ImpressionTypes.MODAL,
            name: o.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: S.skuId,
                card_id: U,
                shop_session_id: H,
                position_in_section: F,
                product_sku_ids: G,
                location_stack: P,
            },
        });
        let w = (0, X.o6)(),
            W = t === p.ip.EXITING,
            z = (0, tg.$R)(r),
            $ = z?.amount,
            q = null != $ && (z?.discountId === eQ.eR || z?.discountId === eQ.Qz),
            { activeSlide: K, isTransitioning: Y } = (function (e) {
                let { slideCount: t, intervalMs: s = 3e3 } = e,
                    [n, r] = (0, i.useState)(0),
                    [l, a] = (0, i.useState)(!1),
                    c = (0, i.useCallback)(
                        (e) => {
                            l ||
                                e < 0 ||
                                e >= t ||
                                (a(!0),
                                setTimeout(() => {
                                    r(e), a(!1);
                                }, 300));
                        },
                        [l, t, 300],
                    );
                return (
                    (0, i.useEffect)(() => {
                        if (t <= 1) return;
                        let e = setInterval(() => {
                            c((n + 1) % t);
                        }, s);
                        return () => clearInterval(e);
                    }, [t, s, n, c]),
                    { activeSlide: n, isTransitioning: l }
                );
            })({ slideCount: i.useMemo(() => ((0, eo.aw)(S) ? S.items.length : 0), [S]), intervalMs: 5e3 });
        return null == f
            ? null
            : (0, n.jsx)(B.f5, {
                  value: P,
                  children: (0, n.jsxs)(A.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: t_.CR,
                      returnRef: h,
                      transitionState: t,
                      size: A.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, n.jsxs)(A.$m, {
                              "data-migration-pending": !0,
                              className: t_.jE,
                              children: [
                                  (0, n.jsx)(tO, {
                                      user: f,
                                      product: r,
                                      category: a,
                                      onClose: s,
                                      previewingVariantIndexProps: C,
                                      selectedVariantIndex: O,
                                      shouldCheckoutWithOrbs: v,
                                      tab: E,
                                      activeBundleSlide: K,
                                      giftRecipient: _?.id !== f.id ? _ : void 0,
                                      giftingOrigin: _?.id !== f.id ? I : void 0,
                                      onTrackClick: V,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: l()(
                                          t_.i1,
                                          S.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? t_.bF
                                              : S.type === d.R.AVATAR_DECORATION
                                                ? t_.Jq
                                                : t_.eF,
                                      ),
                                      style: { backgroundImage: `url(${y})` },
                                      children: [
                                          (0, eL.pQ)(r.skuId)
                                              ? r.skuId === eL.Dp.ORB_PROFILE_BADGE
                                                  ? w || W
                                                      ? null
                                                      : (0, n.jsx)(tr, { user: f })
                                                  : r.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, n.jsx)(te, {})
                                                    : (0, n.jsx)(to.B, { product: r, className: t_.Ms })
                                              : (0, n.jsx)(tS, {
                                                    user: f,
                                                    product: b ?? S,
                                                    activeBundleSlide: K,
                                                    isTransitioning: Y,
                                                }),
                                          (0, n.jsxs)("div", {
                                              className: t_.VG,
                                              children: [
                                                  (0, n.jsx)(tx.R, {
                                                      product: r,
                                                      selectedVariantIndex: O,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: V,
                                                  }),
                                                  (0, n.jsx)(eB, { skuId: S.skuId, tab: E, onTrackClick: V }),
                                                  (0, n.jsx)(g.K, {
                                                      "aria-label": eh.intl.string(eh.t.cpT0Cq),
                                                      onClick: () => {
                                                          V(eL.sH.CLOSE_DETAIL), s();
                                                      },
                                                      icon: j.d,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          q &&
                              (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsxs)(A.jl, {
                                      "data-migration-pending": !0,
                                      className: t_.Hx,
                                      children: [
                                          (0, n.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: t_.OC,
                                          }),
                                          (0, n.jsxs)("div", {
                                              className: t_.do,
                                              children: [
                                                  (0, n.jsx)(R.E, {
                                                      variant: "text-sm/semibold",
                                                      className: t_.Q2,
                                                      children: eh.intl.format(eh.t["78ph4b"], {
                                                          discountOfferAmount: $,
                                                      }),
                                                  }),
                                                  z?.expiresAt != null && (0, n.jsx)(eM.e, { endDate: z.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
