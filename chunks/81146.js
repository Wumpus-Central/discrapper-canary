n.d(t, { default: () => tj });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(110259),
    d = n(575593),
    u = n(334279),
    _ = n(702841),
    p = n(990078),
    m = n(462887),
    h = n(231723),
    f = n(935462),
    g = n(408278),
    E = n(972213),
    A = n(834730),
    v = n(430690),
    I = n(821609),
    x = n(318254),
    S = n(825484),
    T = n(534514),
    y = n(247928),
    R = n(331322),
    C = n(97808),
    N = n(778712),
    b = n(652215),
    j = n(359778),
    w = n(245604),
    L = n(460905),
    k = n(736653),
    P = n(775602),
    O = n(793574),
    U = n(688810),
    D = n(139286),
    M = n(262295),
    B = n(320095),
    F = n(963852),
    G = n(763754),
    H = n(20851),
    V = n(44120),
    W = n(725807),
    z = n(757036),
    Y = n(986687),
    $ = n(101058),
    Q = n(84540),
    q = n(836602),
    Z = n(576622),
    J = n(761705),
    X = n(270051),
    K = n(652165),
    ee = n(287809),
    et = n(954571),
    en = n(975571),
    er = n(927578),
    ei = n(580630),
    ea = n(693477),
    el = n(440938),
    es = n(4227),
    eo = n(298072),
    ec = n(993408),
    ed = n(640634),
    eu = n(940980);
n(321073);
var e_ = n(985018);
let ep = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return e_.intl.formatToPlainString(e_.t["/0Yndu"], { num: e.bundledProducts?.length });
        let n = e.bundledProducts ?? [],
            r = [],
            i = !1;
        for (let e of n)
            switch (e.type) {
                case d.R.AVATAR_DECORATION:
                    r.push(e_.intl.formatToPlainString(e_.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case d.R.PROFILE_EFFECT:
                    r.push(e_.intl.formatToPlainString(e_.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case d.R.NAMEPLATE:
                    r.push(e_.intl.formatToPlainString(e_.t["2keXky"], { itemName: e.name })), (i = !0);
            }
        if (i) {
            let e = r.join(", ").replace(/, ([^,]*)$/, " & $1");
            return e_.intl.formatToPlainString(e_.t.Ofrqj6, { joinedItems: e });
        }
        let a = r.join(" & ");
        return e_.intl.formatToPlainString(e_.t.Ofrqj6, { joinedItems: a });
    },
    em = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === d.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let n = ep(e, t);
                    return e.summary.replace("{joinedItems}", n);
                }
                return e.summary;
            }
            switch (e?.type) {
                case d.R.AVATAR_DECORATION:
                    return e_.intl.string(e_.t["3lv7q2"]);
                case d.R.PROFILE_EFFECT:
                    return e_.intl.string(e_.t.VhJL72);
                case d.R.NAMEPLATE:
                    return e_.intl.string(e_.t.ik37EZ);
                case d.R.PROFILE_FRAME:
                    return e_.intl.string(e_.t.fWzWPp);
                case d.R.BUNDLE:
                    return ep(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
var eh = n(740076),
    ef = n(466459),
    eg = n(442759),
    eE = n(780898),
    eA = n(344346),
    ev = n(139136),
    eI = n(395744),
    ex = n(623373),
    eS = n(660653),
    eT = n(536572),
    ey = n(885574),
    eR = n(401231);
let eC = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(p.m, {
              position: "top",
              align: "left",
              text: e_.intl.string(e_.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: l()(eR.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: eR.P0,
                          children: (0, r.jsx)(ey.m, { size: "md", color: "currentColor", className: eR.G }),
                      }),
                      (0, r.jsx)(A.E, { variant: "text-md/semibold", children: e_.intl.string(e_.t.BEjTij) }),
                  ],
              }),
          })
        : (0, r.jsx)(A.E, { variant: "text-md/semibold", className: t, children: e_.intl.string(e_.t["6cfuDj"]) });
};
var eN = n(691540),
    eb = n(857250),
    ej = n(97483),
    ew = n(173936),
    eL = n(957565),
    ek = n(758836);
function eP(e) {
    let { skuId: t, tab: n, onTrackClick: a } = e,
        l = i.useCallback(() => {
            et.default.track(b.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), a?.(ek.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${b.BVt.COLLECTIBLES_SHOP}${((0, ek.cw))(n) ? `?tab=${n}` : ""}#itemSkuId=${t}`;
            (0, eL.C)(e, () => (0, eN.P0)((0, eb.o)(e_.intl.string(e_.t["L/PwZf"]), ej.Ck.SUCCESS)));
        }, [t, n, a]);
    return (0, r.jsx)(g.K, {
        "aria-label": e_.intl.string(e_.t.WqhZss),
        onClick: l,
        icon: ew.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var eO = n(854818),
    eU = n(177366),
    eD = n(674019);
function eM(e) {
    let { product: t, isDarkText: n = !1, isOrbExclusive: i = !1 } = e,
        a = (function (e, t) {
            if (t) return e_.intl.string(e_.t["0TmQRG"]);
            switch (e) {
                case d.R.AVATAR_DECORATION:
                    return e_.intl.string(e_.t["7v0T9P"]);
                case d.R.PROFILE_EFFECT:
                    return e_.intl.string(e_.t.wR5wOo);
                case d.R.PROFILE_FRAME:
                    return e_.intl.string(e_.t.GWrZOd);
                case d.R.NAMEPLATE:
                    return e_.intl.string(e_.t.x5CoXR);
            }
            return null;
        })(t.type, i);
    return null === a
        ? null
        : (0, r.jsx)(A.E, { variant: "text-xxs/normal", className: l()([eD.kL, n ? eD.ap : eD.aK]), children: a });
}
var eB = n(203312),
    eF = n(878112),
    eG = n(140735),
    eH = n(252955);
let eV = (e) => {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: a = "heading-md/semibold",
        } = e,
        s = (0, ei.RS)(t, n);
    return (0, r.jsxs)(A.E, {
        variant: a,
        className: l()(eH.v, i),
        children: [
            (0, r.jsx)(eG.A, { children: e_.intl.format(e_.t["2CEGln"], { price: s }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: s }),
        ],
    });
};
var eW = n(219103),
    ez = n(469215);
function eY(e) {
    let {
            product: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: a,
            className: s,
            discountOfferAmount: o,
            hideStrikethroughPrice: c = !1,
            discountIconDisplayMode: d,
            discountIconSize: u = "md",
        } = e,
        _ = (0, ec.WD)(t, { hasShopDiscount: n, discount: a });
    if (null == _) return null;
    let { defaultPrice: p, showDefaultPriceOnly: m } = _;
    if (m)
        return (0, r.jsx)("div", {
            className: l()(ez.kG, s),
            children: (0, r.jsx)(eW.x, { priceAmount: p.amount, priceCurrency: p.currency }),
        });
    let { showDiscountPrice: h, originalPrice: f, finalPrice: g } = _;
    return (0, r.jsxs)("div", {
        className: l()(ez.kG, s),
        children: [
            c ? null : (0, r.jsx)(eV, { price: f, className: ez.q9 }),
            (0, r.jsx)(eW.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: a,
                className: l()({ [ez.q9]: null == o }),
                discountIconConfig: h && null != d ? { displayMode: d, source: i ?? ec.D0.NITRO, size: u } : void 0,
                discountOfferAmount: o,
            }),
        ],
    });
}
var e$ = n(403581),
    eQ = n(939249),
    eq = n(532794),
    eZ = n(788868),
    eJ = n(447806);
let eX = (e) => {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: a } = (0, U.Ay)(),
        l = i.useRef(null);
    return (0, r.jsx)(eQ.D, {
        className: eJ.F,
        innerRef: l,
        onClick: () => {
            n?.(ek.sH.SUBSCRIBE_NOW),
                (0, eq.A)({ subscriptionTier: eZ.pe.TIER_2, analyticsLocations: a, returnRef: l });
        },
        children: t,
    });
};
var eK = n(805961);
function e0(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, ec.yt)(t, b.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let a = (0, ei.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: eK.k,
        children: [
            (0, r.jsx)(p.m, {
                text: e_.intl.string(e_.t.MPFyJ5),
                "aria-label": e_.intl.string(e_.t.X3Ekj8),
                children: (0, r.jsx)(e$.t, { size: "md", color: "currentColor", className: eK.o }),
            }),
            (0, r.jsx)(A.E, {
                variant: "text-xs/medium",
                children: e_.intl.format(e_.t.Sv8iic, {
                    price: a,
                    subscribeNowHook: (e) => (0, r.jsx)(eX, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var e1 = n(572595),
    e2 = n(450481);
let e7 = (e) => {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: a, isApplying: l } = (0, e2.p)({ product: t, onSuccess: n });
    return (0, r.jsx)(I.$, {
        variant: "primary",
        onClick: () => {
            i?.(ek.sH.USE_NOW), a();
        },
        loading: l,
        text: e_.intl.string(e_.t.MAS7uK),
        fullWidth: !0,
    });
};
var e5 = n(478016),
    e6 = n(661531),
    e9 = n(224016),
    e4 = n(913521);
let e8 = () => {
    let e = [e_.t.E1NP2x, e_.t.kpMomJ, e_.t.xT1Vfn, e_.t.myyAEr, e_.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: e4.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: e4.ym,
            }),
            (0, r.jsx)(e9.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: e4.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: e4.UJ,
                            children: [
                                (0, r.jsx)(e5.U, { color: e6.A.colors.WHITE }),
                                (0, r.jsx)(A.E, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
                                    children: e_.intl.string(e),
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
var e3 = n(17928),
    te = n(132198),
    tt = n(83554);
let tn = (e) => {
    let { user: t } = e,
        n = er.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...a } = (0, e3.cf)([q.A], () => q.A.getPendingChanges()),
        l = (0, $.V7)({ userId: t.id, image: i });
    return (0, r.jsx)("div", {
        className: tt.k,
        children: (0, r.jsx)(Y.A, {
            ...a,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, te._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
var tr = n(561769);
let ti = (e) => {
    let { skuId: t, overrideVariantIndex: n, className: i } = e,
        a = (0, tr.Vm)(t),
        l = (0, eo.Q)(a);
    return null != a && (0, ex.B1)(a)
        ? (0, r.jsx)(A.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: i,
              lineClamp: 1,
              children: a.variants[n ?? l].variantLabel,
          })
        : null;
};
var ta = n(661847),
    tl = n(846957),
    ts = n(818348),
    to = n(752274);
function tc(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i } = e,
        a = n ? e_.intl.string(e_.t.wu4gyV) : e_.intl.string(e_.t.eFNRzU),
        l = n || !i;
    return (0, r.jsxs)("div", {
        className: to.eg,
        children: [
            (0, r.jsx)("div", {
                className: to.zR,
                children: (0, r.jsx)(A.E, { variant: "text-xs/normal", className: l ? to.r9 : void 0, children: a }),
            }),
            (0, r.jsx)(eW.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? to.r9 : void 0 }),
        ],
    });
}
function td(e) {
    let {
            prices: t,
            hasShopDiscount: n,
            discountSource: i,
            discount: a,
            product: l,
            hasSufficientOrbs: s,
            onTrackClick: o,
            isProductDisabled: c,
            discountOfferAmount: d,
        } = e,
        u = null != d;
    return 0 === t.length
        ? null
        : t[0].currency === ts.Yr.DISCORD_ORB
          ? (0, r.jsx)(tc, { orbPrice: t[0], isProductDisabled: c, hasSufficientOrbs: s })
          : (0, r.jsxs)("div", {
                className: to.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: to.pw,
                        children: [
                            (0, r.jsx)(eY, {
                                product: l,
                                discount: a,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n || u,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: d,
                            }),
                            n || u ? null : (0, r.jsx)(e0, { product: l, onTrackClick: o }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === ts.Yr.DISCORD_ORB &&
                        (0, r.jsx)(eW.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: c || !s ? to.r9 : void 0,
                        }),
                ],
            });
}
var tu = n(139146),
    t_ = n(929283);
let tp = (e, t) => (e.type === d.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e);
var tm = n(525723),
    th = n(212407),
    tf = n(347722),
    tg = n(935094),
    tE = n(57020),
    tA = n(61750),
    tv = n(127157);
let tI = (e) => {
        let { item: t, product: n, user: i } = e,
            a = (0, ec.aw)(n),
            { firstAvatarDecoration: l } = (0, eg.f5)(n);
        switch (t.type) {
            case d.R.AVATAR_DECORATION:
                return (0, r.jsx)("div", {
                    className: a ? tv.X2 : tv.h1,
                    children: (0, r.jsx)(t_.i, { user: i, item: t, isHighlighted: !0 }),
                });
            case d.R.PROFILE_EFFECT:
                return (0, r.jsx)("div", {
                    className: a ? tv.ME : tv.sm,
                    children: (0, r.jsx)(ev.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case d.R.PROFILE_FRAME:
                return (0, r.jsx)("div", { className: tv.ob, children: (0, r.jsx)(eI.A, { profileFrame: t }) });
            case d.R.NAMEPLATE:
                return (0, r.jsx)("div", {
                    className: tv.Dz,
                    children: (0, r.jsx)(eA.A, {
                        className: tv.M4,
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
    tx = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: tv.g4,
            children: (0, r.jsx)(v.t, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        s = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        o = `(${i + 1}/${a})`;
                    return (0, r.jsx)(
                        v.q,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: tv.Kg,
                                children: [
                                    (0, r.jsx)(tI, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: tv.gx,
                                        children: [s?.name, " ", o],
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
    tS = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, ec.aw)(t)
            ? (0, r.jsx)(tx, { product: t, user: n, activeSlide: i })
            : (0, ek.pQ)(t.skuId)
              ? (0, r.jsx)(tl.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(tI, { item: t.items[0], product: t, user: n })
                : null;
    },
    tT = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(A.E, {
                  variant: "text-sm/normal",
                  className: tv.CU,
                  children: e_.intl.format(e_.t.Q1scdE, {
                      helpdeskArticle: en.A.getArticleURL(b.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    ty = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: s,
                tab: c,
                onClose: u,
                returnRef: h,
                previewingVariantIndexProps: f,
                selectedVariantIndex: g,
                activeBundleSlide: E,
                giftRecipient: v,
                giftingOrigin: C,
                onTrackClick: N,
            } = e,
            { analyticsLocations: j } = (0, U.Ay)(),
            { cardId: w, sessionId: L, tilePosition: P } = (0, el.uM)() ?? {},
            O = (0, z.L)(eZ.PremiumTypes.TIER_2),
            D = er.Ay.canUseShopDiscounts(n),
            M = (0, ec.xM)(n),
            { previewingVariantIndex: B, handleEntering: F, handleLeaving: G } = f,
            H = tp(t, B),
            Y = (0, ex.rb)(t, g);
        o()(null != Y, "Selected product should not be null");
        let $ = (0, ef.h)(t),
            { isPurchased: q, isPartiallyOwnedBundle: Z } = (0, ef.h)(Y),
            { isDisabled: ee, disabledReason: et } = (0, eh.I)(Y.skuId),
            en = (0, ec.Zu)({ product: Y, isPartiallyOwnedBundle: Z, isPurchased: q }),
            eo = (0, _.bG)([es.A], () => es.A.isClaiming === Y?.skuId),
            ep = (0, k.Ay)(),
            eE = (0, m.M)(ep),
            eA = (0, ec.G0)(Y),
            ev = (0, ec.yt)(Y, b.lid.DEFAULT),
            eI = ev?.amount === 0,
            { firstAvatarDecoration: eS } = (0, eg.f5)(H ?? Y),
            ey = i.useMemo(() => (0, ec.fT)(Y, D), [Y, D]),
            eR = (0, eT.VG)(t),
            eN = (0, tf.X)(Y),
            { enabled: eb } = (0, X.Z)({ location: "collectibles_shop_product_details_modal" }),
            ej = em(Y, !1),
            ew = (0, tm.V_)(t),
            eL = null != ew,
            eP = (t.variants?.length ?? 0) > 8,
            eO = (0, eu.W)("CollectiblesShopProductDetailsModal"),
            eU = c === ek.G2.ORBS && s ? tr.Hi.ORBS : eO ? tr.Hi.FIAT : void 0,
            eD = (0, ed.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eG,
                isOrbExclusive: eH,
                hasSufficientOrbs: eV,
            } = (0, tE.F)({ product: Y, hasShopDiscount: D, hasDiscountOffer: eL, prioritizedCurrency: eU }),
            eW = i.useMemo(() => eG.some((e) => e.currency === ts.Yr.DISCORD_ORB), [eG]);
        (0, J.W)({ disableFetch: !eW });
        let ez = i.useCallback(() => {
            N(ek.sH.BUY_WITH_FIAT),
                (0, V.A)({ skuId: Y.skuId, analyticsLocations: j, onClose: (e) => (e ? u() : (0, ts.tE)()) });
        }, [j, u, Y.skuId, N]);
        return (
            i.useEffect(() => {
                if (null != eS) return (0, Q.p)({ avatarDecoration: eS }), () => (0, Q.p)({ avatarDecoration: void 0 });
            }, [eS]),
            (0, r.jsxs)("div", {
                className: tv.qA,
                children: [
                    (0, r.jsx)("div", { className: tv.gn, children: (0, r.jsx)(eB.A, { category: a }) }),
                    (0, r.jsx)(tS, { product: H ?? Y, user: n, activeSlide: E }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: tv.h_,
                                children: [
                                    (0, r.jsx)(eM, { product: Y, isDarkText: !eE, isOrbExclusive: eH }),
                                    (0, r.jsx)(T.D, {
                                        variant: "heading-xl/extrabold",
                                        className: tv.v7,
                                        children: eR,
                                    }),
                                    (0, r.jsx)(A.E, { variant: "text-sm/normal", children: ej }),
                                    (0, r.jsx)(tT, { skuId: Y.skuId }),
                                    $.isPurchased || $.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(eC, { className: tv.On, isPartiallyPurchased: Z })
                                        : eA
                                          ? (0, r.jsx)(A.E, {
                                                variant: "text-md/semibold",
                                                className: tv.On,
                                                children: e_.intl.string(e_.t.rt69oo),
                                            })
                                          : eb
                                            ? (0, r.jsx)(td, {
                                                  prices: eG,
                                                  product: Y,
                                                  hasShopDiscount: D,
                                                  discountSource: M,
                                                  discount: ey,
                                                  hasSufficientOrbs: eV,
                                                  isProductDisabled: ee,
                                                  discountOfferAmount: ew,
                                                  onTrackClick: N,
                                              })
                                            : eH
                                              ? null
                                              : (0, r.jsxs)("div", {
                                                    className: tv.pw,
                                                    children: [
                                                        (0, r.jsx)(eY, {
                                                            product: Y,
                                                            discount: ey,
                                                            hasShopDiscount: D,
                                                            discountSource: M,
                                                            hideStrikethroughPrice: !D || eL,
                                                            discountIconDisplayMode: "tooltip",
                                                            discountIconSize: "xs",
                                                            discountOfferAmount: ew,
                                                        }),
                                                        D || eL
                                                            ? null
                                                            : (0, r.jsx)(e0, { product: Y, onTrackClick: N }),
                                                    ],
                                                }),
                                ],
                            }),
                            (0, ex.B1)(t) &&
                                (0, r.jsx)(y.M, {
                                    children: (0, r.jsxs)("div", {
                                        className: l()(tv.Oj, { [tv.OJ]: eP }),
                                        children: [
                                            eP &&
                                                (0, r.jsx)(ti, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: B,
                                                    className: tv.L$,
                                                }),
                                            (0, r.jsx)(ta.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: F,
                                                onVariantExit: G,
                                                wrap: !0,
                                            }),
                                            !eP &&
                                                (0, r.jsx)(ti, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: B,
                                                    className: tv.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== et &&
                                (0, r.jsx)(A.E, { variant: "text-xs/normal", className: tv.H$, children: et }),
                            (0, r.jsx)(R.B, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (eA && !O && !eI) {
                                        let e;
                                        return (
                                            (e = e_.intl.string(e_.t.sEAnVH)),
                                            (0, r.jsx)(W.A, {
                                                subscriptionTier: eZ.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: () => {
                                                    N(ek.sH.UNLOCK_WITH_NITRO), (0, e1.M)();
                                                },
                                                onSubscribeModalClose: () => {
                                                    (0, e1.t)({
                                                        product: Y,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: h,
                                                        analyticsLocations: j,
                                                        tab: c,
                                                        giftRecipient: v,
                                                        giftingOrigin: C,
                                                        cardId: w,
                                                        sessionId: L,
                                                        tilePosition: P,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return en
                                        ? q
                                            ? eN
                                                ? (0, r.jsxs)(S.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(e7, { product: Y, onSuccess: u, onTrackClick: N }),
                                                          (0, r.jsx)(eF.A, {
                                                              primary: !0,
                                                              product: Y,
                                                              onSuccess: u,
                                                              giftRecipient: v,
                                                              giftingOrigin: C,
                                                              onTrackClick: N,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(e7, { product: Y, onSuccess: u, onTrackClick: N })
                                            : eA
                                              ? (0, r.jsx)(I.$, {
                                                    loading: eo,
                                                    loadingStartedLabel: e_.intl.string(e_.t["TYw+9s"]),
                                                    loadingFinishedLabel: e_.intl.string(e_.t.Pg1UP5),
                                                    onClick: async () => {
                                                        N(ek.sH.ADD_TO_COLLECTION),
                                                            await (0, ea.iJ)(Y.skuId),
                                                            u(),
                                                            (0, tA.A)({
                                                                product: Y,
                                                                analyticsLocations: j,
                                                                purchaseType: ek.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: e_.intl.string(e_.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eG.map((e, t) => {
                                                        let n,
                                                            i = 0 === t;
                                                        if (e.currency === ts.Yr.DISCORD_ORB) {
                                                            let t, n, a, l;
                                                            return (
                                                                (t = ee
                                                                    ? e_.intl.string(e_.t.cTdr3x)
                                                                    : e_.intl.string(e_.t.zqh7ZM)),
                                                                (n = !eV || ee),
                                                                (a = e_.intl.formatToPlainString(e_.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (l = n ? `${a}, ${t}` : a),
                                                                (0, r.jsx)(p.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, r.jsx)(I.$, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            N(ek.sH.BUY_WITH_ORBS),
                                                                                (0, K.B4)({
                                                                                    skuId: Y.skuId,
                                                                                    onCheckoutSuccess: (e) => {
                                                                                        let { entitlements: t } = e;
                                                                                        (0, ea.gB)(),
                                                                                            u(),
                                                                                            (0, tA.A)({
                                                                                                product: Y,
                                                                                                analyticsLocations: j,
                                                                                                itemConsumed:
                                                                                                    t[0]?.consumed,
                                                                                                purchaseType: ek.gs.ORB,
                                                                                            });
                                                                                    },
                                                                                    analyticsLocations: j,
                                                                                });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": l,
                                                                        text: e_.intl.format(
                                                                            eD ? e_.t.JC15qj : e_.t.lOtBOI,
                                                                            {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(x.C, {
                                                                                        className: tv.fN,
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
                                                            (n = ((e) => {
                                                                switch (e.type) {
                                                                    case d.R.BUNDLE:
                                                                        return e_.intl.string(e_.t.V1AWw0);
                                                                    case d.R.PROFILE_EFFECT:
                                                                        return e_.intl.string(e_.t.kAeDcK);
                                                                    case d.R.NAMEPLATE:
                                                                        return e_.intl.string(e_.t.H3vhqU);
                                                                    case d.R.PROFILE_FRAME:
                                                                        return e_.intl.string(e_.t.BlSW1e);
                                                                    case d.R.AVATAR_DECORATION:
                                                                    default:
                                                                        return e_.intl.string(e_.t.AQ0Veg);
                                                                }
                                                            })(Y)),
                                                            eL
                                                                ? (n = e_.intl.formatToPlainString(e_.t["5U5RB5"], {
                                                                      discountOfferAmount: ew,
                                                                  }))
                                                                : eb &&
                                                                  (n = e_.intl.formatToPlainString(e_.t["cNSL/j"], {
                                                                      price: (0, ei.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(S.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(I.$, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: ez,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eN &&
                                                                        (0, r.jsx)(eF.A, {
                                                                            primary: i,
                                                                            product: Y,
                                                                            onSuccess: u,
                                                                            giftRecipient: v,
                                                                            giftingOrigin: C,
                                                                            onTrackClick: N,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eN
                                          ? (0, r.jsx)(eF.A, {
                                                primary: !0,
                                                product: Y,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: v,
                                                giftingOrigin: C,
                                                onTrackClick: N,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, r.jsx)(A.E, {
                                className: l()(tv.ed, !eE && tv.un),
                                variant: "text-xxs/normal",
                                children: eA && !q ? e_.intl.string(e_.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    tR = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: tv.mV,
            children: (0, r.jsx)(M.A, {
                avatar: (0, r.jsx)(C.eu, {
                    src: t.avatarSrc,
                    size: N._3.SIZE_32,
                    "aria-label": t.name,
                    status: b.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(tv.$L, n),
            }),
        });
    },
    tC = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, eE.Ov)();
        return (0, r.jsx)("div", {
            className: tv.nJ,
            role: "img",
            "aria-label": e_.intl.string(e_.t.SZeUdR),
            children: (0, r.jsxs)(y.M, {
                children: [
                    (0, r.jsx)(tR, { user: a.mallow, innerClassName: tv.ab }),
                    (0, r.jsxs)(A.E, {
                        variant: "text-sm/semibold",
                        className: tv.OS,
                        children: [e_.intl.string(e_.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(tR, { user: a.phibi, innerClassName: tv.e9 }),
                    (0, r.jsx)("div", {
                        className: tv.mV,
                        children: (0, r.jsx)(eA.A, {
                            className: tv.M4,
                            innerClassName: tv.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(tR, { user: a.locke, innerClassName: tv.e9 }),
                    (0, r.jsxs)(A.E, {
                        variant: "text-sm/semibold",
                        className: tv.OS,
                        children: [e_.intl.string(e_.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(tR, { user: a.boom, innerClassName: tv.bD }),
                    (0, r.jsx)(tR, { user: a.cherry, innerClassName: tv.bD }),
                ],
            }),
        });
    },
    tN = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            s = (0, _.bG)([P.A], () => P.A.useReducedMotion),
            o = er.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: c, ...u } = (0, _.cf)([q.A], () => q.A.getPendingChanges()),
            p = (0, $.V7)({ userId: n.id, image: c }),
            m = t.type === d.R.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: g, firstNameplate: E } = (0, eg.f5)(t),
            A = null != g,
            v = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(Y.A, {
                            ...u,
                            pendingAvatar: p,
                            user: n,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: f,
                            pendingProfileEffect: g,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: m,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        m && (0, r.jsx)(tb, { user: n }),
                    ],
                }),
            I = (e) => (0, r.jsx)(tC, { user: n, nameplate: e, avatarDecoration: f });
        if (t.type === d.R.BUNDLE) {
            if (!(0, eS.Wb)(t))
                return (0, r.jsx)("div", {
                    className: tv.RA,
                    children: (0, r.jsx)("div", { className: tv.bo, children: v() }),
                });
            {
                let e = i ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !s;
                return n.type === d.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: l()(tv.Zj, a && c ? tv.p2 : ""), children: I(n) })
                    : (0, r.jsx)("div", { className: l()(tv.Ak, a && c ? tv.p2 : ""), children: v() });
            }
        }
        return null != E
            ? (0, r.jsx)("div", { className: tv.Zj, children: I(E) })
            : (0, r.jsx)("div", { className: h?.type === d.R.AVATAR_DECORATION ? tv.RA : tv.Ak, children: v() });
    },
    tb = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, B.rh)({
                    ...(0, F.Ay)({ author: t, channelId: "1337", content: e_.intl.string(e_.t.d5YwK5) }),
                    state: b.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": e_.intl.string(e_.t["TN+ZvB"]),
            children: (0, r.jsx)(y.M, {
                children: (0, r.jsxs)(j.Z, {
                    className: tv.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(H.A, { className: tv.G5, author: (0, G.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: tv.lG,
                            children: [
                                (0, r.jsx)(w.U, { size: "md", color: "currentColor", className: tv.hq }),
                                (0, r.jsx)(L.n, { size: "md", color: "currentColor", className: tv.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    tj = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: s,
                returnRef: p,
                analyticsSource: m,
                analyticsLocations: v,
                shouldCheckoutWithOrbs: I,
                tab: x,
                giftRecipient: S,
                giftingOrigin: T,
            } = e,
            y = (0, _.bG)([ee.default], () => ee.default.getCurrentUser()),
            R = (0, tg.f)(a),
            { previewingVariantIndex: C } = R,
            N = (0, eo.Q)(a),
            j = tp(a, C),
            w = (0, ex.rb)(a, N);
        o()(null != w, "Selected product should not be null");
        let { analyticsLocations: L } = (0, U.Ay)([...v, O.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eU.Yr)(w.skuId);
        let k = (0, th.U1)(s);
        i.useEffect(() => {
            null != y && (0, Z.A)(y.id, y.getAvatarURL(void 0, 80));
        }, [y]);
        let P = i.useMemo(() => (0, ec.V6)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            et.default.track(b.HAw.OPEN_MODAL, {
                type: b.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: m,
                location_stack: L,
                sku_id: w.skuId,
                product_type: P,
            }),
                (0, ea.RD)(w.skuId);
        }, [m, L, w.skuId, P]);
        let { cardId: M, sessionId: B, tilePosition: F } = (0, el.uM)() ?? {},
            G = i.useMemo(() => (0, ex.v8)(a), [a]),
            H = (function (e) {
                let { skuId: t, productSkuIds: n, analyticsLocations: r } = e,
                    { cardId: a, sessionId: l } = (0, el.uM)() ?? {};
                return i.useCallback(
                    (e) => {
                        et.default.track(b.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: t,
                            cta: e,
                            shop_session_id: l,
                            card_id: a,
                            product_sku_ids: n,
                            location_stack: r,
                        });
                    },
                    [t, r, a, n, l],
                );
            })({ skuId: w.skuId, productSkuIds: G, analyticsLocations: L });
        (0, D.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: w.skuId,
                card_id: M,
                shop_session_id: B,
                position_in_section: F,
                product_sku_ids: G,
                location_stack: L,
            },
        });
        let V = (0, K.o6)(),
            W = t === h.ip.EXITING,
            z = (0, tm.$R)(a),
            Y = z?.amount,
            $ = null != Y && (z?.discountId === eZ.eR || z?.discountId === eZ.Qz),
            { activeSlide: Q, isTransitioning: q } = (function (e) {
                let { slideCount: t, intervalMs: n = 3e3 } = e,
                    [r, a] = (0, i.useState)(0),
                    [l, s] = (0, i.useState)(!1),
                    o = (0, i.useCallback)(
                        (e) => {
                            l ||
                                e < 0 ||
                                e >= t ||
                                (s(!0),
                                setTimeout(() => {
                                    a(e), s(!1);
                                }, 300));
                        },
                        [l, t, 300],
                    );
                return (
                    (0, i.useEffect)(() => {
                        if (t <= 1) return;
                        let e = setInterval(() => {
                            o((r + 1) % t);
                        }, n);
                        return () => clearInterval(e);
                    }, [t, n, r, o]),
                    { activeSlide: r, isTransitioning: l }
                );
            })({ slideCount: i.useMemo(() => ((0, ec.aw)(w) ? w.items.length : 0), [w]), intervalMs: 5e3 });
        return null == y
            ? null
            : (0, r.jsx)(U.f5, {
                  value: L,
                  children: (0, r.jsxs)(f.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: tv.CR,
                      returnRef: p,
                      transitionState: t,
                      size: f.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(f.$m, {
                              "data-migration-pending": !0,
                              className: tv.jE,
                              children: [
                                  (0, r.jsx)(ty, {
                                      user: y,
                                      product: a,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: R,
                                      selectedVariantIndex: N,
                                      shouldCheckoutWithOrbs: I,
                                      tab: x,
                                      activeBundleSlide: Q,
                                      giftRecipient: S?.id !== y.id ? S : void 0,
                                      giftingOrigin: S?.id !== y.id ? T : void 0,
                                      onTrackClick: H,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          tv.i1,
                                          w.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? tv.bF
                                              : w.type === d.R.AVATAR_DECORATION
                                                ? tv.Jq
                                                : tv.eF,
                                      ),
                                      style: { backgroundImage: `url(${k})` },
                                      children: [
                                          (0, ek.pQ)(a.skuId)
                                              ? a.skuId === ek.Dp.ORB_PROFILE_BADGE
                                                  ? V || W
                                                      ? null
                                                      : (0, r.jsx)(tn, { user: y })
                                                  : a.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(e8, {})
                                                    : (0, r.jsx)(tl.B, { product: a, className: tv.Ms })
                                              : (0, r.jsx)(tN, {
                                                    user: y,
                                                    product: j ?? w,
                                                    activeBundleSlide: Q,
                                                    isTransitioning: q,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: tv.VG,
                                              children: [
                                                  (0, r.jsx)(tu.R, {
                                                      product: a,
                                                      selectedVariantIndex: N,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: H,
                                                  }),
                                                  (0, r.jsx)(eP, { skuId: w.skuId, tab: x, onTrackClick: H }),
                                                  (0, r.jsx)(g.K, {
                                                      "aria-label": e_.intl.string(e_.t.cpT0Cq),
                                                      onClick: () => {
                                                          H(ek.sH.CLOSE_DETAIL), n();
                                                      },
                                                      icon: E.d,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          $ &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(f.jl, {
                                      "data-migration-pending": !0,
                                      className: tv.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: tv.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: tv.do,
                                              children: [
                                                  (0, r.jsx)(A.E, {
                                                      variant: "text-sm/semibold",
                                                      className: tv.Q2,
                                                      children: e_.intl.format(e_.t["78ph4b"], {
                                                          discountOfferAmount: Y,
                                                      }),
                                                  }),
                                                  z?.expiresAt != null && (0, r.jsx)(eO.e, { endDate: z.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
