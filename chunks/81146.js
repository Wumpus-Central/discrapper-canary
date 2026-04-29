s.d(t, { default: () => ty });
var i = s(627968),
    n = s(64700),
    r = s(503698),
    a = s.n(r),
    l = s(284009),
    c = s.n(l),
    d = s(110259),
    o = s(575593),
    u = s(334279),
    m = s(702841),
    x = s(990078),
    h = s(462887),
    p = s(231723),
    j = s(935462),
    g = s(408278),
    A = s(972213),
    v = s(834730),
    E = s(430690),
    I = s(821609),
    N = s(318254),
    f = s(825484),
    C = s(534514),
    R = s(247928),
    k = s(331322),
    _ = s(97808),
    O = s(778712),
    T = s(652215),
    S = s(359778),
    y = s(245604),
    b = s(460905),
    P = s(736653),
    D = s(775602),
    L = s(793574),
    M = s(688810),
    B = s(139286),
    U = s(262295),
    F = s(320095),
    w = s(963852),
    H = s(763754),
    V = s(20851),
    W = s(44120),
    z = s(725807),
    $ = s(757036),
    G = s(986687),
    q = s(101058),
    Y = s(84540),
    Z = s(836602),
    J = s(576622),
    K = s(761705),
    Q = s(270051),
    X = s(652165),
    ee = s(287809),
    et = s(954571),
    es = s(975571),
    ei = s(927578),
    en = s(580630),
    er = s(693477),
    ea = s(440938),
    el = s(4227),
    ec = s(298072),
    ed = s(993408),
    eo = s(640634),
    eu = s(940980);
s(321073);
var em = s(985018);
let ex = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return em.intl.formatToPlainString(em.t["/0Yndu"], { num: e.bundledProducts?.length });
        let s = e.bundledProducts ?? [],
            i = [],
            n = !1;
        for (let e of s)
            switch (e.type) {
                case o.R.AVATAR_DECORATION:
                    i.push(em.intl.formatToPlainString(em.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case o.R.PROFILE_EFFECT:
                    i.push(em.intl.formatToPlainString(em.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case o.R.NAMEPLATE:
                    i.push(em.intl.formatToPlainString(em.t["2keXky"], { itemName: e.name })), (n = !0);
            }
        if (n) {
            let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
            return em.intl.formatToPlainString(em.t.Ofrqj6, { joinedItems: e });
        }
        let r = i.join(" & ");
        return em.intl.formatToPlainString(em.t.Ofrqj6, { joinedItems: r });
    },
    eh = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, n.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === o.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let s = ex(e, t);
                    return e.summary.replace("{joinedItems}", s);
                }
                return e.summary;
            }
            switch (e?.type) {
                case o.R.AVATAR_DECORATION:
                    return em.intl.string(em.t["3lv7q2"]);
                case o.R.PROFILE_EFFECT:
                    return em.intl.string(em.t.VhJL72);
                case o.R.NAMEPLATE:
                    return em.intl.string(em.t.ik37EZ);
                case o.R.PROFILE_FRAME:
                    return em.intl.string(em.t.fWzWPp);
                case o.R.BUNDLE:
                    return ex(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
var ep = s(740076),
    ej = s(466459),
    eg = s(442759),
    eA = s(395068),
    ev = s(780898),
    eE = s(344346),
    eI = s(139136),
    eN = s(395744),
    ef = s(623373),
    eC = s(660653),
    eR = s(536572),
    ek = s(885574),
    e_ = s(401231);
let eO = (e) => {
    let { className: t, isPartiallyPurchased: s } = e;
    return s
        ? (0, i.jsx)(x.m, {
              position: "top",
              align: "left",
              text: em.intl.string(em.t.y1VWkZ),
              children: (0, i.jsxs)("div", {
                  className: a()(e_.GX, t),
                  children: [
                      (0, i.jsx)("span", {
                          className: e_.P0,
                          children: (0, i.jsx)(ek.m, { size: "md", color: "currentColor", className: e_.G }),
                      }),
                      (0, i.jsx)(v.E, { variant: "text-md/semibold", children: em.intl.string(em.t.BEjTij) }),
                  ],
              }),
          })
        : (0, i.jsx)(v.E, { variant: "text-md/semibold", className: t, children: em.intl.string(em.t["6cfuDj"]) });
};
var eT = s(691540),
    eS = s(857250),
    ey = s(97483),
    eb = s(173936),
    eP = s(957565),
    eD = s(758836);
function eL(e) {
    let { skuId: t, tab: s, onTrackClick: r } = e,
        a = n.useCallback(() => {
            et.default.track(T.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), r?.(eD.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${T.BVt.COLLECTIBLES_SHOP}${((0, eD.cw))(s) ? `?tab=${s}` : ""}#itemSkuId=${t}`;
            (0, eP.C)(e, () => (0, eT.P0)((0, eS.o)(em.intl.string(em.t["L/PwZf"]), ey.Ck.SUCCESS)));
        }, [t, s, r]);
    return (0, i.jsx)(g.K, {
        "aria-label": em.intl.string(em.t.WqhZss),
        onClick: a,
        icon: eb.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var eM = s(854818),
    eB = s(177366),
    eU = s(674019);
function eF(e) {
    let { product: t, isDarkText: s = !1, isOrbExclusive: n = !1 } = e,
        r = (function (e, t) {
            if (t) return em.intl.string(em.t["0TmQRG"]);
            switch (e) {
                case o.R.AVATAR_DECORATION:
                    return em.intl.string(em.t["7v0T9P"]);
                case o.R.PROFILE_EFFECT:
                    return em.intl.string(em.t.wR5wOo);
                case o.R.PROFILE_FRAME:
                    return em.intl.string(em.t.GWrZOd);
                case o.R.NAMEPLATE:
                    return em.intl.string(em.t.x5CoXR);
            }
            return null;
        })(t.type, n);
    return null === r
        ? null
        : (0, i.jsx)(v.E, { variant: "text-xxs/normal", className: a()([eU.kL, s ? eU.ap : eU.aK]), children: r });
}
var ew = s(203312),
    eH = s(878112),
    eV = s(140735),
    eW = s(252955);
let ez = (e) => {
    let {
            price: { amount: t, currency: s },
            className: n,
            variant: r = "heading-md/semibold",
        } = e,
        l = (0, en.RS)(t, s);
    return (0, i.jsxs)(v.E, {
        variant: r,
        className: a()(eW.v, n),
        children: [
            (0, i.jsx)(eV.A, { children: em.intl.format(em.t["2CEGln"], { price: l }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: l }),
        ],
    });
};
var e$ = s(219103),
    eG = s(469215);
function eq(e) {
    let {
            product: t,
            hasShopDiscount: s,
            discountSource: n,
            discount: r,
            className: l,
            discountOfferAmount: c,
            hideStrikethroughPrice: d = !1,
            discountIconDisplayMode: o,
            discountIconSize: u = "md",
        } = e,
        m = (0, ed.WD)(t, { hasShopDiscount: s, discount: r });
    if (null == m) return null;
    let { defaultPrice: x, showDefaultPriceOnly: h } = m;
    if (h)
        return (0, i.jsx)("div", {
            className: a()(eG.kG, l),
            children: (0, i.jsx)(e$.x, { priceAmount: x.amount, priceCurrency: x.currency }),
        });
    let { showDiscountPrice: p, originalPrice: j, finalPrice: g } = m;
    return (0, i.jsxs)("div", {
        className: a()(eG.kG, l),
        children: [
            d ? null : (0, i.jsx)(ez, { price: j, className: eG.q9 }),
            (0, i.jsx)(e$.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: r,
                className: a()({ [eG.q9]: null == c }),
                discountIconConfig: p && null != o ? { displayMode: o, source: n ?? ed.D0.NITRO, size: u } : void 0,
                discountOfferAmount: c,
            }),
        ],
    });
}
var eY = s(403581),
    eZ = s(939249),
    eJ = s(532794),
    eK = s(788868),
    eQ = s(447806);
let eX = (e) => {
    let { text: t, onTrackClick: s } = e,
        { analyticsLocations: r } = (0, M.Ay)(),
        a = n.useRef(null);
    return (0, i.jsx)(eZ.D, {
        className: eQ.F,
        innerRef: a,
        onClick: () => {
            s?.(eD.sH.SUBSCRIBE_NOW),
                (0, eJ.A)({ subscriptionTier: eK.pe.TIER_2, analyticsLocations: r, returnRef: a });
        },
        children: t,
    });
};
var e0 = s(805961);
function e1(e) {
    let { product: t, onTrackClick: s } = e,
        n = (0, ed.yt)(t, T.lid.PREMIUM_TIER_2);
    if (null == n) return null;
    let r = (0, en.RS)(n.amount, n.currency);
    return (0, i.jsxs)("div", {
        className: e0.k,
        children: [
            (0, i.jsx)(x.m, {
                text: em.intl.string(em.t.MPFyJ5),
                "aria-label": em.intl.string(em.t.X3Ekj8),
                children: (0, i.jsx)(eY.t, { size: "md", color: "currentColor", className: e0.o }),
            }),
            (0, i.jsx)(v.E, {
                variant: "text-xs/medium",
                children: em.intl.format(em.t.Sv8iic, {
                    price: r,
                    subscribeNowHook: (e) => (0, i.jsx)(eX, { text: e, onTrackClick: s }),
                }),
            }),
        ],
    });
}
var e5 = s(572595),
    e7 = s(450481);
let e2 = (e) => {
    let { product: t, onSuccess: s, onTrackClick: n } = e,
        { handleUseNow: r, isApplying: a } = (0, e7.p)({ product: t, onSuccess: s });
    return (0, i.jsx)(I.$, {
        variant: "primary",
        onClick: () => {
            n?.(eD.sH.USE_NOW), r();
        },
        loading: a,
        text: em.intl.string(em.t.MAS7uK),
        fullWidth: !0,
    });
};
var e3 = s(478016),
    e8 = s(661531),
    e4 = s(224016),
    e9 = s(913521);
let e6 = () => {
    let e = [em.t.E1NP2x, em.t.kpMomJ, em.t.xT1Vfn, em.t.myyAEr, em.t.zTk8Ul];
    return (0, i.jsxs)("div", {
        className: e9.kL,
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: e9.ym,
            }),
            (0, i.jsx)(e4.A, { color: "white" }),
            (0, i.jsx)("div", {
                className: e9.PX,
                children: e.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: e9.UJ,
                            children: [
                                (0, i.jsx)(e3.U, { color: e8.A.colors.WHITE }),
                                (0, i.jsx)(v.E, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
                                    children: em.intl.string(e),
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
var te = s(17928),
    tt = s(132198),
    ts = s(83554);
let ti = (e) => {
    let { user: t } = e,
        s = ei.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: n, ...r } = (0, te.cf)([Z.A], () => Z.A.getPendingChanges()),
        a = (0, q.V7)({ userId: t.id, image: n });
    return (0, i.jsx)("div", {
        className: ts.k,
        children: (0, i.jsx)(G.A, {
            ...r,
            pendingAvatar: a,
            user: t,
            pendingBadges: [(0, tt._)()],
            canUsePremiumCustomization: s,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
var tn = s(561769);
let tr = (e) => {
    let { skuId: t, overrideVariantIndex: s, className: n } = e,
        r = (0, tn.Vm)(t),
        a = (0, ec.Q)(r);
    return null != r && (0, ef.B1)(r)
        ? (0, i.jsx)(v.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: n,
              lineClamp: 1,
              children: r.variants[s ?? a].variantLabel,
          })
        : null;
};
var ta = s(661847),
    tl = s(846957),
    tc = s(818348),
    td = s(752274);
function to(e) {
    let { orbPrice: t, isProductDisabled: s, hasSufficientOrbs: n } = e,
        r = s ? em.intl.string(em.t.wu4gyV) : em.intl.string(em.t.eFNRzU),
        a = s || !n;
    return (0, i.jsxs)("div", {
        className: td.eg,
        children: [
            (0, i.jsx)("div", {
                className: td.zR,
                children: (0, i.jsx)(v.E, { variant: "text-xs/normal", className: a ? td.r9 : void 0, children: r }),
            }),
            (0, i.jsx)(e$.x, { priceAmount: t.amount, priceCurrency: t.currency, className: a ? td.r9 : void 0 }),
        ],
    });
}
function tu(e) {
    let {
            prices: t,
            hasShopDiscount: s,
            discountSource: n,
            discount: r,
            product: a,
            hasSufficientOrbs: l,
            onTrackClick: c,
            isProductDisabled: d,
            discountOfferAmount: o,
        } = e,
        u = null != o;
    return 0 === t.length
        ? null
        : t[0].currency === tc.Yr.DISCORD_ORB
          ? (0, i.jsx)(to, { orbPrice: t[0], isProductDisabled: d, hasSufficientOrbs: l })
          : (0, i.jsxs)("div", {
                className: td.eg,
                children: [
                    (0, i.jsxs)("div", {
                        className: td.pw,
                        children: [
                            (0, i.jsx)(eq, {
                                product: a,
                                discount: r,
                                hasShopDiscount: s,
                                discountSource: n,
                                hideStrikethroughPrice: !s || u,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: o,
                            }),
                            s || u ? null : (0, i.jsx)(e1, { product: a, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tc.Yr.DISCORD_ORB &&
                        (0, i.jsx)(e$.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: d || !l ? td.r9 : void 0,
                        }),
                ],
            });
}
var tm = s(139146),
    tx = s(929283);
let th = (e, t) => (e.type === o.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e);
var tp = s(525723),
    tj = s(212407),
    tg = s(347722),
    tA = s(935094),
    tv = s(57020),
    tE = s(61750),
    tI = s(127157);
let tN = (e) => {
        let { item: t, product: s, user: n } = e,
            r = (0, ed.aw)(s),
            { firstAvatarDecoration: a } = (0, eg.f5)(s);
        switch (t.type) {
            case o.R.AVATAR_DECORATION:
                return (0, i.jsx)("div", {
                    className: r ? tI.X2 : tI.h1,
                    children: (0, i.jsx)(tx.i, { user: n, item: t, isHighlighted: !0 }),
                });
            case o.R.PROFILE_EFFECT:
                return (0, i.jsx)("div", {
                    className: r ? tI.ME : tI.sm,
                    children: (0, i.jsx)(eI.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case o.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: tI.ob, children: (0, i.jsx)(eN.A, { profileFrame: t }) });
            case o.R.NAMEPLATE:
                return (0, i.jsx)("div", {
                    className: tI.Dz,
                    children: (0, i.jsx)(eE.A, {
                        className: tI.M4,
                        nameplate: t,
                        user: n,
                        nameplatePreviewSize: "large",
                        pendingAvatarDecoration: a,
                        isHighlighted: !0,
                    }),
                });
            default:
                return null;
        }
    },
    tf = (e) => {
        let { product: t, user: s, activeSlide: n = 0 } = e,
            r = t.items.length;
        return (0, i.jsx)("div", {
            className: tI.g4,
            children: (0, i.jsx)(E.t, {
                activeSlide: String(n),
                children: t.items.map((e, n) => {
                    let a = String(n),
                        l = null != t.bundledProducts ? t.bundledProducts[n] : void 0,
                        c = `(${n + 1}/${r})`;
                    return (0, i.jsx)(
                        E.q,
                        {
                            id: a,
                            children: (0, i.jsxs)("div", {
                                className: tI.Kg,
                                children: [
                                    (0, i.jsx)(tN, { item: e, product: t, user: s }),
                                    (0, i.jsxs)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: tI.gx,
                                        children: [l?.name, " ", c],
                                    }),
                                ],
                            }),
                        },
                        a,
                    );
                }),
            }),
        });
    },
    tC = (e) => {
        let { product: t, user: s, activeSlide: n } = e;
        return (0, ed.aw)(t)
            ? (0, i.jsx)(tf, { product: t, user: s, activeSlide: n })
            : (0, eD.pQ)(t.skuId)
              ? (0, i.jsx)(tl.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, i.jsx)(tN, { item: t.items[0], product: t, user: s })
                : null;
    },
    tR = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, i.jsx)(v.E, {
                  variant: "text-sm/normal",
                  className: tI.CU,
                  children: em.intl.format(em.t.Q1scdE, {
                      helpdeskArticle: es.A.getArticleURL(T.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    tk = (e) => {
        let {
                product: t,
                user: s,
                category: r,
                shouldCheckoutWithOrbs: l,
                tab: d,
                onClose: u,
                returnRef: p,
                previewingVariantIndexProps: j,
                selectedVariantIndex: g,
                activeBundleSlide: A,
                giftRecipient: E,
                giftingOrigin: _,
                onTrackClick: O,
            } = e,
            { analyticsLocations: S } = (0, M.Ay)(),
            { cardId: y, sessionId: b, tilePosition: D } = (0, ea.uM)() ?? {},
            L = (0, $.L)(eK.PremiumTypes.TIER_2),
            B = ei.Ay.canUseShopDiscounts(s),
            U = (0, ed.xM)(s),
            { previewingVariantIndex: F, handleEntering: w, handleLeaving: H } = j,
            V = th(t, F),
            G = (0, ef.rb)(t, g);
        c()(null != G, "Selected product should not be null");
        let q = (0, ej.h)(t),
            { isPurchased: Z, isPartiallyOwnedBundle: J } = (0, ej.h)(G),
            { isDisabled: ee, disabledReason: et } = (0, ep.I)(G.skuId),
            es = (0, ed.Zu)({ product: G, isPartiallyOwnedBundle: J, isPurchased: Z }),
            ec = (0, m.bG)([el.A], () => el.A.isClaiming === G?.skuId),
            ex = (0, P.Ay)(),
            ev = (0, h.M)(ex),
            eE = (0, ed.G0)(G),
            eI = (0, ed.yt)(G, T.lid.DEFAULT),
            eN = eI?.amount === 0,
            { firstAvatarDecoration: eC } = (0, eg.f5)(V ?? G),
            ek = n.useMemo(() => (0, ed.fT)(G, B), [G, B]),
            e_ = (0, eR.VG)(t),
            eT = (0, tg.X)(G),
            { enabled: eS } = (0, Q.Z)({ location: "collectibles_shop_product_details_modal" }),
            ey = eh(G, !1),
            eb = (0, tp.V_)(t),
            eP = null != eb,
            eL = (t.variants?.length ?? 0) > 8,
            eM = (0, eu.W)("CollectiblesShopProductDetailsModal"),
            eB = d === eD.G2.ORBS && l ? tn.Hi.ORBS : eM ? tn.Hi.FIAT : void 0,
            eU = (0, eo.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eV,
                isOrbExclusive: eW,
                hasSufficientOrbs: ez,
            } = (0, tv.F)({ product: G, hasShopDiscount: B, hasDiscountOffer: eP, prioritizedCurrency: eB }),
            e$ = (0, eA.A)({ location: "CollectiblesShopProductDetailsModal", product: G }),
            eG = n.useMemo(() => eV.some((e) => e.currency === tc.Yr.DISCORD_ORB), [eV]);
        (0, K.W)({ disableFetch: !eG });
        let eY = n.useCallback(() => {
            O(eD.sH.BUY_WITH_FIAT),
                (0, W.A)({ skuId: G.skuId, analyticsLocations: S, onClose: (e) => (e ? u() : (0, tc.tE)()) });
        }, [S, u, G.skuId, O]);
        n.useEffect(() => {
            if (null != eC) return (0, Y.p)({ avatarDecoration: eC }), () => (0, Y.p)({ avatarDecoration: void 0 });
        }, [eC]);
        let eZ = (e) =>
            (0, i.jsx)(z.A, {
                subscriptionTier: eK.pe.TIER_2,
                fullWidth: !0,
                textOptions: { textOverride: e },
                onClick: () => {
                    O(eD.sH.UNLOCK_WITH_NITRO), (0, e5.M)();
                },
                onSubscribeModalClose: () => {
                    (0, e5.t)({
                        product: G,
                        category: r,
                        shouldCheckoutWithOrbs: l,
                        returnRef: p,
                        analyticsLocations: S,
                        tab: d,
                        giftRecipient: E,
                        giftingOrigin: _,
                        cardId: y,
                        sessionId: b,
                        tilePosition: D,
                    });
                },
            });
        return (0, i.jsxs)("div", {
            className: tI.qA,
            children: [
                (0, i.jsx)("div", { className: tI.gn, children: (0, i.jsx)(ew.A, { category: r }) }),
                (0, i.jsx)(tC, { product: V ?? G, user: s, activeSlide: A }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: tI.h_,
                            children: [
                                (0, i.jsx)(eF, { product: G, isDarkText: !ev, isOrbExclusive: eW }),
                                (0, i.jsx)(C.D, { variant: "heading-xl/extrabold", className: tI.v7, children: e_ }),
                                (0, i.jsx)(v.E, { variant: "text-sm/normal", children: ey }),
                                (0, i.jsx)(tR, { skuId: G.skuId }),
                                q.isPurchased || q.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(eO, { className: tI.On, isPartiallyPurchased: J })
                                    : eE
                                      ? (0, i.jsx)(v.E, {
                                            variant: "text-md/semibold",
                                            className: tI.On,
                                            children: em.intl.string(em.t.rt69oo),
                                        })
                                      : eS
                                        ? (0, i.jsx)(tu, {
                                              prices: eV,
                                              product: G,
                                              hasShopDiscount: B,
                                              discountSource: U,
                                              discount: ek,
                                              hasSufficientOrbs: ez,
                                              isProductDisabled: ee,
                                              discountOfferAmount: eb,
                                              onTrackClick: O,
                                          })
                                        : eW
                                          ? null
                                          : (0, i.jsxs)("div", {
                                                className: tI.pw,
                                                children: [
                                                    (0, i.jsx)(eq, {
                                                        product: G,
                                                        discount: ek,
                                                        hasShopDiscount: B,
                                                        discountSource: U,
                                                        hideStrikethroughPrice: !B || eP,
                                                        discountIconDisplayMode: "tooltip",
                                                        discountIconSize: "xs",
                                                        discountOfferAmount: eb,
                                                    }),
                                                    B || eP ? null : (0, i.jsx)(e1, { product: G, onTrackClick: O }),
                                                ],
                                            }),
                            ],
                        }),
                        (0, ef.B1)(t) &&
                            (0, i.jsx)(R.M, {
                                children: (0, i.jsxs)("div", {
                                    className: a()(tI.Oj, { [tI.OJ]: eL }),
                                    children: [
                                        eL &&
                                            (0, i.jsx)(tr, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: F,
                                                className: tI.L$,
                                            }),
                                        (0, i.jsx)(ta.A, {
                                            skuId: t.skuId,
                                            onVariantEnter: w,
                                            onVariantExit: H,
                                            wrap: !0,
                                        }),
                                        !eL &&
                                            (0, i.jsx)(tr, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: F,
                                                className: tI.L$,
                                            }),
                                    ],
                                }),
                            }),
                        null !== et && (0, i.jsx)(v.E, { variant: "text-xs/normal", className: tI.H$, children: et }),
                        (0, i.jsx)(k.B, {
                            direction: "vertical",
                            gap: 8,
                            children:
                                !eE || L || eN
                                    ? es
                                        ? Z
                                            ? eT
                                                ? (0, i.jsxs)(f.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, i.jsx)(e2, { product: G, onSuccess: u, onTrackClick: O }),
                                                          (0, i.jsx)(eH.A, {
                                                              primary: !0,
                                                              product: G,
                                                              onSuccess: u,
                                                              giftRecipient: E,
                                                              giftingOrigin: _,
                                                              onTrackClick: O,
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(e2, { product: G, onSuccess: u, onTrackClick: O })
                                            : e$
                                              ? eZ(em.intl.string(em.t.sEAnVH))
                                              : eE
                                                ? (0, i.jsx)(I.$, {
                                                      loading: ec,
                                                      loadingStartedLabel: em.intl.string(em.t["TYw+9s"]),
                                                      loadingFinishedLabel: em.intl.string(em.t.Pg1UP5),
                                                      onClick: async () => {
                                                          O(eD.sH.ADD_TO_COLLECTION),
                                                              await (0, er.iJ)(G.skuId),
                                                              u(),
                                                              (0, tE.A)({
                                                                  product: G,
                                                                  analyticsLocations: S,
                                                                  purchaseType: eD.gs.PREMIUM_PURCHASE,
                                                              });
                                                      },
                                                      text: em.intl.string(em.t.zp6caO),
                                                      fullWidth: !0,
                                                  })
                                                : (0, i.jsx)(i.Fragment, {
                                                      children: eV.map((e, t) => {
                                                          let s,
                                                              n = 0 === t;
                                                          if (e.currency === tc.Yr.DISCORD_ORB) {
                                                              let t, s, r, a;
                                                              return (
                                                                  (t = ee
                                                                      ? em.intl.string(em.t.cTdr3x)
                                                                      : em.intl.string(em.t.zqh7ZM)),
                                                                  (s = !ez || ee),
                                                                  (r = em.intl.formatToPlainString(em.t.yi41qQ, {
                                                                      orbPrice: e.amount,
                                                                  })),
                                                                  (a = s ? `${r}, ${t}` : r),
                                                                  (0, i.jsx)(x.m, {
                                                                      position: "top",
                                                                      text: t,
                                                                      shouldShow: s,
                                                                      "aria-label": !1,
                                                                      children: (0, i.jsx)(I.$, {
                                                                          variant: n ? "primary" : "secondary",
                                                                          onClick: () => {
                                                                              O(eD.sH.BUY_WITH_ORBS),
                                                                                  (0, X.B4)({
                                                                                      skuId: G.skuId,
                                                                                      onCheckoutSuccess: (e) => {
                                                                                          let { entitlements: t } = e;
                                                                                          (0, er.gB)(),
                                                                                              u(),
                                                                                              (0, tE.A)({
                                                                                                  product: G,
                                                                                                  analyticsLocations: S,
                                                                                                  itemConsumed:
                                                                                                      t[0]?.consumed,
                                                                                                  purchaseType:
                                                                                                      eD.gs.ORB,
                                                                                              });
                                                                                      },
                                                                                      analyticsLocations: S,
                                                                                  });
                                                                          },
                                                                          disabled: s,
                                                                          "aria-label": a,
                                                                          text: em.intl.format(
                                                                              eU ? em.t.JC15qj : em.t.lOtBOI,
                                                                              {
                                                                                  orbPrice: e.amount,
                                                                                  orbIconHook: () =>
                                                                                      (0, i.jsx)(N.C, {
                                                                                          className: tI.fN,
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
                                                                      case o.R.BUNDLE:
                                                                          return em.intl.string(em.t.V1AWw0);
                                                                      case o.R.PROFILE_EFFECT:
                                                                          return em.intl.string(em.t.kAeDcK);
                                                                      case o.R.NAMEPLATE:
                                                                          return em.intl.string(em.t.H3vhqU);
                                                                      case o.R.PROFILE_FRAME:
                                                                          return em.intl.string(em.t.BlSW1e);
                                                                      case o.R.AVATAR_DECORATION:
                                                                      default:
                                                                          return em.intl.string(em.t.AQ0Veg);
                                                                  }
                                                              })(G)),
                                                              eP
                                                                  ? (s = em.intl.formatToPlainString(em.t["5U5RB5"], {
                                                                        discountOfferAmount: eb,
                                                                    }))
                                                                  : eS &&
                                                                    (s = em.intl.formatToPlainString(em.t["cNSL/j"], {
                                                                        price: (0, en.$g)(e.amount, e.currency),
                                                                    })),
                                                              (0, i.jsxs)(f.e, {
                                                                  wrap: !1,
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, i.jsx)(I.$, {
                                                                          variant: n ? "primary" : "secondary",
                                                                          onClick: eY,
                                                                          text: s,
                                                                          fullWidth: !0,
                                                                      }),
                                                                      eT &&
                                                                          (0, i.jsx)(eH.A, {
                                                                              primary: n,
                                                                              product: G,
                                                                              onSuccess: u,
                                                                              giftRecipient: E,
                                                                              giftingOrigin: _,
                                                                              onTrackClick: O,
                                                                          }),
                                                                  ],
                                                              })
                                                          );
                                                      }),
                                                  })
                                        : eT
                                          ? (0, i.jsx)(eH.A, {
                                                primary: !0,
                                                product: G,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: E,
                                                giftingOrigin: _,
                                                onTrackClick: O,
                                            })
                                          : null
                                    : eZ(em.intl.string(em.t.sEAnVH)),
                        }),
                        (0, i.jsx)(v.E, {
                            className: a()(tI.ed, !ev && tI.un),
                            variant: "text-xxs/normal",
                            children: eE && !Z ? em.intl.string(em.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    t_ = (e) => {
        let { user: t, innerClassName: s } = e;
        return (0, i.jsx)("div", {
            className: tI.mV,
            children: (0, i.jsx)(U.A, {
                avatar: (0, i.jsx)(_.eu, {
                    src: t.avatarSrc,
                    size: O._3.SIZE_32,
                    "aria-label": t.name,
                    status: T.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(tI.$L, s),
            }),
        });
    },
    tO = (e) => {
        let { user: t, nameplate: s, avatarDecoration: n } = e,
            r = (0, ev.Ov)();
        return (0, i.jsx)("div", {
            className: tI.nJ,
            role: "img",
            "aria-label": em.intl.string(em.t.SZeUdR),
            children: (0, i.jsxs)(R.M, {
                children: [
                    (0, i.jsx)(t_, { user: r.mallow, innerClassName: tI.ab }),
                    (0, i.jsxs)(v.E, {
                        variant: "text-sm/semibold",
                        className: tI.OS,
                        children: [em.intl.string(em.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, i.jsx)(t_, { user: r.phibi, innerClassName: tI.e9 }),
                    (0, i.jsx)("div", {
                        className: tI.mV,
                        children: (0, i.jsx)(eE.A, {
                            className: tI.M4,
                            innerClassName: tI.e9,
                            user: t,
                            nameplate: s,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: n,
                        }),
                    }),
                    (0, i.jsx)(t_, { user: r.locke, innerClassName: tI.e9 }),
                    (0, i.jsxs)(v.E, {
                        variant: "text-sm/semibold",
                        className: tI.OS,
                        children: [em.intl.string(em.t["NG43/6"]), " - 12"],
                    }),
                    (0, i.jsx)(t_, { user: r.boom, innerClassName: tI.bD }),
                    (0, i.jsx)(t_, { user: r.cherry, innerClassName: tI.bD }),
                ],
            }),
        });
    },
    tT = (e) => {
        let { product: t, user: s, activeBundleSlide: n, isTransitioning: r } = e,
            l = (0, m.bG)([D.A], () => D.A.useReducedMotion),
            c = ei.Ay.canUsePremiumProfileCustomization(s),
            { pendingAvatar: d, ...u } = (0, m.cf)([Z.A], () => Z.A.getPendingChanges()),
            x = (0, q.V7)({ userId: s.id, image: d }),
            h = t.type === o.R.AVATAR_DECORATION,
            [p] = t.items,
            {
                firstAvatarDecoration: j,
                firstProfileEffect: g,
                firstNameplate: A,
                firstProfileFrame: v,
            } = (0, eg.f5)(t),
            E = null != g,
            I = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(G.A, {
                            ...u,
                            pendingAvatar: x,
                            user: s,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: j,
                            pendingProfileEffect: g,
                            pendingProfileFrame: v,
                            disabledInputs: !0,
                            hideMessageInput: !E,
                            hideCustomStatus: !0,
                            hideBioSection: h,
                            hideExampleButton: !0,
                            interactive: !1,
                            containerClassName: h ? tI.Bb : void 0,
                        }),
                        h && (0, i.jsx)(tS, { user: s }),
                    ],
                }),
            N = (e) => (0, i.jsx)(tO, { user: s, nameplate: e, avatarDecoration: j });
        if (t.type === o.R.BUNDLE) {
            if (!(0, eC.Wb)(t))
                return (0, i.jsx)("div", {
                    className: tI.RA,
                    children: (0, i.jsx)("div", { className: tI.bo, children: I() }),
                });
            {
                let e = n ?? 0,
                    s = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    d = c?.type !== s?.type && !l;
                return s.type === o.R.NAMEPLATE
                    ? (0, i.jsx)("div", { className: a()(tI.Zj, r && d ? tI.p2 : ""), children: N(s) })
                    : (0, i.jsx)("div", { className: a()(tI.Ak, r && d ? tI.p2 : ""), children: I() });
            }
        }
        return null != A
            ? (0, i.jsx)("div", { className: tI.Zj, children: N(A) })
            : (0, i.jsx)("div", { className: p?.type === o.R.AVATAR_DECORATION ? tI.RA : tI.Ak, children: I() });
    },
    tS = (e) => {
        let { user: t } = e,
            s = ((e) => {
                let { author: t } = e;
                return (0, F.rh)({
                    ...(0, w.Ay)({ author: t, channelId: "1337", content: em.intl.string(em.t.d5YwK5) }),
                    state: T.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": em.intl.string(em.t["TN+ZvB"]),
            children: (0, i.jsx)(R.M, {
                children: (0, i.jsxs)(S.Z, {
                    className: tI.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(V.A, { className: tI.G5, author: (0, H.p_)(s), message: s }, s.id),
                        (0, i.jsxs)("div", {
                            className: tI.lG,
                            children: [
                                (0, i.jsx)(y.U, { size: "md", color: "currentColor", className: tI.hq }),
                                (0, i.jsx)(b.n, { size: "md", color: "currentColor", className: tI.hq }),
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
                category: l,
                returnRef: x,
                analyticsSource: h,
                analyticsLocations: E,
                shouldCheckoutWithOrbs: I,
                tab: N,
                giftRecipient: f,
                giftingOrigin: C,
            } = e,
            R = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            k = (0, tA.f)(r),
            { previewingVariantIndex: _ } = k,
            O = (0, ec.Q)(r),
            S = th(r, _),
            y = (0, ef.rb)(r, O);
        c()(null != y, "Selected product should not be null");
        let { analyticsLocations: b } = (0, M.Ay)([...E, L.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eB.Yr)(y.skuId);
        let P = (0, tj.U1)(l);
        n.useEffect(() => {
            null != R && (0, J.A)(R.id, R.getAvatarURL(void 0, 80));
        }, [R]);
        let D = n.useMemo(() => (0, ed.V6)(r.type, r.skuId), [r.type, r.skuId]);
        n.useEffect(() => {
            et.default.track(T.HAw.OPEN_MODAL, {
                type: T.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: b,
                sku_id: y.skuId,
                product_type: D,
            }),
                (0, er.RD)(y.skuId);
        }, [h, b, y.skuId, D]);
        let { cardId: U, sessionId: F, tilePosition: w } = (0, ea.uM)() ?? {},
            H = n.useMemo(() => (0, ef.v8)(r), [r]),
            V = (function (e) {
                let { skuId: t, productSkuIds: s, analyticsLocations: i } = e,
                    { cardId: r, sessionId: a } = (0, ea.uM)() ?? {};
                return n.useCallback(
                    (e) => {
                        et.default.track(T.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: t,
                            cta: e,
                            shop_session_id: a,
                            card_id: r,
                            product_sku_ids: s,
                            location_stack: i,
                        });
                    },
                    [t, i, r, s, a],
                );
            })({ skuId: y.skuId, productSkuIds: H, analyticsLocations: b });
        (0, B.A)({
            type: d.ImpressionTypes.MODAL,
            name: d.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: y.skuId,
                card_id: U,
                shop_session_id: F,
                position_in_section: w,
                product_sku_ids: H,
                location_stack: b,
            },
        });
        let W = (0, X.o6)(),
            z = t === p.ip.EXITING,
            $ = (0, tp.$R)(r),
            G = $?.amount,
            q = null != G && ($?.discountId === eK.eR || $?.discountId === eK.Qz),
            { activeSlide: Y, isTransitioning: Z } = (function (e) {
                let { slideCount: t, intervalMs: s = 3e3 } = e,
                    [i, r] = (0, n.useState)(0),
                    [a, l] = (0, n.useState)(!1),
                    c = (0, n.useCallback)(
                        (e) => {
                            a ||
                                e < 0 ||
                                e >= t ||
                                (l(!0),
                                setTimeout(() => {
                                    r(e), l(!1);
                                }, 300));
                        },
                        [a, t, 300],
                    );
                return (
                    (0, n.useEffect)(() => {
                        if (t <= 1) return;
                        let e = setInterval(() => {
                            c((i + 1) % t);
                        }, s);
                        return () => clearInterval(e);
                    }, [t, s, i, c]),
                    { activeSlide: i, isTransitioning: a }
                );
            })({ slideCount: n.useMemo(() => ((0, ed.aw)(y) ? y.items.length : 0), [y]), intervalMs: 5e3 });
        return null == R
            ? null
            : (0, i.jsx)(M.f5, {
                  value: b,
                  children: (0, i.jsxs)(j.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: tI.CR,
                      returnRef: x,
                      transitionState: t,
                      size: j.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, i.jsxs)(j.$m, {
                              "data-migration-pending": !0,
                              className: tI.jE,
                              children: [
                                  (0, i.jsx)(tk, {
                                      user: R,
                                      product: r,
                                      category: l,
                                      onClose: s,
                                      previewingVariantIndexProps: k,
                                      selectedVariantIndex: O,
                                      shouldCheckoutWithOrbs: I,
                                      tab: N,
                                      activeBundleSlide: Y,
                                      giftRecipient: f?.id !== R.id ? f : void 0,
                                      giftingOrigin: f?.id !== R.id ? C : void 0,
                                      onTrackClick: V,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: a()(
                                          tI.i1,
                                          y.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? tI.bF
                                              : y.type === o.R.AVATAR_DECORATION
                                                ? tI.Jq
                                                : tI.eF,
                                      ),
                                      style: { backgroundImage: `url(${P})` },
                                      children: [
                                          (0, eD.pQ)(r.skuId)
                                              ? r.skuId === eD.Dp.ORB_PROFILE_BADGE
                                                  ? W || z
                                                      ? null
                                                      : (0, i.jsx)(ti, { user: R })
                                                  : r.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, i.jsx)(e6, {})
                                                    : (0, i.jsx)(tl.B, { product: r, className: tI.Ms })
                                              : (0, i.jsx)(tT, {
                                                    user: R,
                                                    product: S ?? y,
                                                    activeBundleSlide: Y,
                                                    isTransitioning: Z,
                                                }),
                                          (0, i.jsxs)("div", {
                                              className: tI.VG,
                                              children: [
                                                  (0, i.jsx)(tm.R, {
                                                      product: r,
                                                      selectedVariantIndex: O,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: V,
                                                  }),
                                                  (0, i.jsx)(eL, { skuId: y.skuId, tab: N, onTrackClick: V }),
                                                  (0, i.jsx)(g.K, {
                                                      "aria-label": em.intl.string(em.t.cpT0Cq),
                                                      onClick: () => {
                                                          V(eD.sH.CLOSE_DETAIL), s();
                                                      },
                                                      icon: A.d,
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
                              (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsxs)(j.jl, {
                                      "data-migration-pending": !0,
                                      className: tI.Hx,
                                      children: [
                                          (0, i.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: tI.OC,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: tI.do,
                                              children: [
                                                  (0, i.jsx)(v.E, {
                                                      variant: "text-sm/semibold",
                                                      className: tI.Q2,
                                                      children: em.intl.format(em.t["78ph4b"], {
                                                          discountOfferAmount: G,
                                                      }),
                                                  }),
                                                  $?.expiresAt != null && (0, i.jsx)(eM.e, { endDate: $.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
