n.d(t, { default: () => tw });
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
    f = n(231723),
    h = n(935462),
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
    P = n(460905),
    L = n(736653),
    k = n(775602),
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
var ef = n(740076),
    eh = n(466459),
    eg = n(442759),
    eE = n(395068),
    eA = n(780898),
    ev = n(344346),
    eI = n(139136),
    ex = n(395744),
    eS = n(623373),
    eT = n(660653),
    ey = n(536572),
    eR = n(885574),
    eC = n(401231);
let eN = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(p.m, {
              position: "top",
              align: "left",
              text: e_.intl.string(e_.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: l()(eC.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: eC.P0,
                          children: (0, r.jsx)(eR.m, { size: "md", color: "currentColor", className: eC.G }),
                      }),
                      (0, r.jsx)(A.E, { variant: "text-md/semibold", children: e_.intl.string(e_.t.BEjTij) }),
                  ],
              }),
          })
        : (0, r.jsx)(A.E, { variant: "text-md/semibold", className: t, children: e_.intl.string(e_.t["6cfuDj"]) });
};
var eb = n(691540),
    ej = n(857250),
    ew = n(97483),
    eP = n(173936),
    eL = n(957565),
    ek = n(758836);
function eO(e) {
    let { skuId: t, tab: n, onTrackClick: a } = e,
        l = i.useCallback(() => {
            et.default.track(b.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), a?.(ek.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${b.BVt.COLLECTIBLES_SHOP}${((0, ek.cw))(n) ? `?tab=${n}` : ""}#itemSkuId=${t}`;
            (0, eL.C)(e, () => (0, eb.P0)((0, ej.o)(e_.intl.string(e_.t["L/PwZf"]), ew.Ck.SUCCESS)));
        }, [t, n, a]);
    return (0, r.jsx)(g.K, {
        "aria-label": e_.intl.string(e_.t.WqhZss),
        onClick: l,
        icon: eP.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var eU = n(854818),
    eD = n(177366),
    eM = n(674019);
function eB(e) {
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
        : (0, r.jsx)(A.E, { variant: "text-xxs/normal", className: l()([eM.kL, n ? eM.ap : eM.aK]), children: a });
}
var eF = n(203312),
    eG = n(878112),
    eH = n(140735),
    eV = n(252955);
let eW = (e) => {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: a = "heading-md/semibold",
        } = e,
        s = (0, ei.RS)(t, n);
    return (0, r.jsxs)(A.E, {
        variant: a,
        className: l()(eV.v, i),
        children: [
            (0, r.jsx)(eH.A, { children: e_.intl.format(e_.t["2CEGln"], { price: s }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: s }),
        ],
    });
};
var ez = n(219103),
    eY = n(469215);
function e$(e) {
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
            className: l()(eY.kG, s),
            children: (0, r.jsx)(ez.x, { priceAmount: p.amount, priceCurrency: p.currency }),
        });
    let { showDiscountPrice: f, originalPrice: h, finalPrice: g } = _;
    return (0, r.jsxs)("div", {
        className: l()(eY.kG, s),
        children: [
            c ? null : (0, r.jsx)(eW, { price: h, className: eY.q9 }),
            (0, r.jsx)(ez.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: a,
                className: l()({ [eY.q9]: null == o }),
                discountIconConfig: f && null != d ? { displayMode: d, source: i ?? ec.D0.NITRO, size: u } : void 0,
                discountOfferAmount: o,
            }),
        ],
    });
}
var eQ = n(403581),
    eq = n(939249),
    eZ = n(532794),
    eJ = n(788868),
    eX = n(447806);
let eK = (e) => {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: a } = (0, U.Ay)(),
        l = i.useRef(null);
    return (0, r.jsx)(eq.D, {
        className: eX.F,
        innerRef: l,
        onClick: () => {
            n?.(ek.sH.SUBSCRIBE_NOW),
                (0, eZ.A)({ subscriptionTier: eJ.pe.TIER_2, analyticsLocations: a, returnRef: l });
        },
        children: t,
    });
};
var e0 = n(805961);
function e1(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, ec.yt)(t, b.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let a = (0, ei.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: e0.k,
        children: [
            (0, r.jsx)(p.m, {
                text: e_.intl.string(e_.t.MPFyJ5),
                "aria-label": e_.intl.string(e_.t.X3Ekj8),
                children: (0, r.jsx)(eQ.t, { size: "md", color: "currentColor", className: e0.o }),
            }),
            (0, r.jsx)(A.E, {
                variant: "text-xs/medium",
                children: e_.intl.format(e_.t.Sv8iic, {
                    price: a,
                    subscribeNowHook: (e) => (0, r.jsx)(eK, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var e2 = n(572595),
    e7 = n(450481);
let e5 = (e) => {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: a, isApplying: l } = (0, e7.p)({ product: t, onSuccess: n });
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
var e6 = n(478016),
    e9 = n(661531),
    e4 = n(224016),
    e8 = n(913521);
let e3 = () => {
    let e = [e_.t.E1NP2x, e_.t.kpMomJ, e_.t.xT1Vfn, e_.t.myyAEr, e_.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: e8.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: e8.ym,
            }),
            (0, r.jsx)(e4.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: e8.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: e8.UJ,
                            children: [
                                (0, r.jsx)(e6.U, { color: e9.A.colors.WHITE }),
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
var te = n(17928),
    tt = n(132198),
    tn = n(83554);
let tr = (e) => {
    let { user: t } = e,
        n = er.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...a } = (0, te.cf)([q.A], () => q.A.getPendingChanges()),
        l = (0, $.V7)({ userId: t.id, image: i });
    return (0, r.jsx)("div", {
        className: tn.k,
        children: (0, r.jsx)(Y.A, {
            ...a,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, tt._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
var ti = n(561769);
let ta = (e) => {
    let { skuId: t, overrideVariantIndex: n, className: i } = e,
        a = (0, ti.Vm)(t),
        l = (0, eo.Q)(a);
    return null != a && (0, eS.B1)(a)
        ? (0, r.jsx)(A.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: i,
              lineClamp: 1,
              children: a.variants[n ?? l].variantLabel,
          })
        : null;
};
var tl = n(661847),
    ts = n(846957),
    to = n(818348),
    tc = n(752274);
function td(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i } = e,
        a = n ? e_.intl.string(e_.t.wu4gyV) : e_.intl.string(e_.t.eFNRzU),
        l = n || !i;
    return (0, r.jsxs)("div", {
        className: tc.eg,
        children: [
            (0, r.jsx)("div", {
                className: tc.zR,
                children: (0, r.jsx)(A.E, { variant: "text-xs/normal", className: l ? tc.r9 : void 0, children: a }),
            }),
            (0, r.jsx)(ez.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? tc.r9 : void 0 }),
        ],
    });
}
function tu(e) {
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
        : t[0].currency === to.Yr.DISCORD_ORB
          ? (0, r.jsx)(td, { orbPrice: t[0], isProductDisabled: c, hasSufficientOrbs: s })
          : (0, r.jsxs)("div", {
                className: tc.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: tc.pw,
                        children: [
                            (0, r.jsx)(e$, {
                                product: l,
                                discount: a,
                                hasShopDiscount: n,
                                discountSource: i,
                                hideStrikethroughPrice: !n || u,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: d,
                            }),
                            n || u ? null : (0, r.jsx)(e1, { product: l, onTrackClick: o }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === to.Yr.DISCORD_ORB &&
                        (0, r.jsx)(ez.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: c || !s ? tc.r9 : void 0,
                        }),
                ],
            });
}
var t_ = n(139146),
    tp = n(929283);
let tm = (e, t) => (e.type === d.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e);
var tf = n(525723),
    th = n(212407),
    tg = n(347722),
    tE = n(935094),
    tA = n(57020),
    tv = n(61750),
    tI = n(127157);
let tx = (e) => {
        let { item: t, product: n, user: i } = e,
            a = (0, ec.aw)(n),
            { firstAvatarDecoration: l } = (0, eg.f5)(n);
        switch (t.type) {
            case d.R.AVATAR_DECORATION:
                return (0, r.jsx)("div", {
                    className: a ? tI.X2 : tI.h1,
                    children: (0, r.jsx)(tp.i, { user: i, item: t, isHighlighted: !0 }),
                });
            case d.R.PROFILE_EFFECT:
                return (0, r.jsx)("div", {
                    className: a ? tI.ME : tI.sm,
                    children: (0, r.jsx)(eI.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case d.R.PROFILE_FRAME:
                return (0, r.jsx)("div", { className: tI.ob, children: (0, r.jsx)(ex.A, { profileFrame: t }) });
            case d.R.NAMEPLATE:
                return (0, r.jsx)("div", {
                    className: tI.Dz,
                    children: (0, r.jsx)(ev.A, {
                        className: tI.M4,
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
    tS = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: tI.g4,
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
                                className: tI.Kg,
                                children: [
                                    (0, r.jsx)(tx, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(A.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: tI.gx,
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
    tT = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, ec.aw)(t)
            ? (0, r.jsx)(tS, { product: t, user: n, activeSlide: i })
            : (0, ek.pQ)(t.skuId)
              ? (0, r.jsx)(ts.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(tx, { item: t.items[0], product: t, user: n })
                : null;
    },
    ty = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(A.E, {
                  variant: "text-sm/normal",
                  className: tI.CU,
                  children: e_.intl.format(e_.t.Q1scdE, {
                      helpdeskArticle: en.A.getArticleURL(b.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    tR = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: s,
                tab: c,
                onClose: u,
                returnRef: f,
                previewingVariantIndexProps: h,
                selectedVariantIndex: g,
                activeBundleSlide: E,
                giftRecipient: v,
                giftingOrigin: C,
                onTrackClick: N,
            } = e,
            { analyticsLocations: j } = (0, U.Ay)(),
            { cardId: w, sessionId: P, tilePosition: k } = (0, el.uM)() ?? {},
            O = (0, z.L)(eJ.PremiumTypes.TIER_2),
            D = er.Ay.canUseShopDiscounts(n),
            M = (0, ec.xM)(n),
            { previewingVariantIndex: B, handleEntering: F, handleLeaving: G } = h,
            H = tm(t, B),
            Y = (0, eS.rb)(t, g);
        o()(null != Y, "Selected product should not be null");
        let $ = (0, eh.h)(t),
            { isPurchased: q, isPartiallyOwnedBundle: Z } = (0, eh.h)(Y),
            { isDisabled: ee, disabledReason: et } = (0, ef.I)(Y.skuId),
            en = (0, ec.Zu)({ product: Y, isPartiallyOwnedBundle: Z, isPurchased: q }),
            eo = (0, _.bG)([es.A], () => es.A.isClaiming === Y?.skuId),
            ep = (0, L.Ay)(),
            eA = (0, m.M)(ep),
            ev = (0, ec.G0)(Y),
            eI = (0, ec.yt)(Y, b.lid.DEFAULT),
            ex = eI?.amount === 0,
            { firstAvatarDecoration: eT } = (0, eg.f5)(H ?? Y),
            eR = i.useMemo(() => (0, ec.fT)(Y, D), [Y, D]),
            eC = (0, ey.VG)(t),
            eb = (0, tg.X)(Y),
            { enabled: ej } = (0, X.Z)({ location: "collectibles_shop_product_details_modal" }),
            ew = em(Y, !1),
            eP = (0, tf.V_)(t),
            eL = null != eP,
            eO = (t.variants?.length ?? 0) > 8,
            eU = (0, eu.W)("CollectiblesShopProductDetailsModal"),
            eD = c === ek.G2.ORBS && s ? ti.Hi.ORBS : eU ? ti.Hi.FIAT : void 0,
            eM = (0, ed.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eH,
                isOrbExclusive: eV,
                hasSufficientOrbs: eW,
            } = (0, tA.F)({ product: Y, hasShopDiscount: D, hasDiscountOffer: eL, prioritizedCurrency: eD }),
            ez = (0, eE.A)({ location: "CollectiblesShopProductDetailsModal", product: Y }),
            eY = i.useMemo(() => eH.some((e) => e.currency === to.Yr.DISCORD_ORB), [eH]);
        (0, J.W)({ disableFetch: !eY });
        let eQ = i.useCallback(() => {
            N(ek.sH.BUY_WITH_FIAT),
                (0, V.A)({ skuId: Y.skuId, analyticsLocations: j, onClose: (e) => (e ? u() : (0, to.tE)()) });
        }, [j, u, Y.skuId, N]);
        i.useEffect(() => {
            if (null != eT) return (0, Q.p)({ avatarDecoration: eT }), () => (0, Q.p)({ avatarDecoration: void 0 });
        }, [eT]);
        let eq = (e) =>
            (0, r.jsx)(W.A, {
                subscriptionTier: eJ.pe.TIER_2,
                fullWidth: !0,
                textOptions: { textOverride: e },
                onClick: () => {
                    N(ek.sH.UNLOCK_WITH_NITRO), (0, e2.M)();
                },
                onSubscribeModalClose: () => {
                    (0, e2.t)({
                        product: Y,
                        category: a,
                        shouldCheckoutWithOrbs: s,
                        returnRef: f,
                        analyticsLocations: j,
                        tab: c,
                        giftRecipient: v,
                        giftingOrigin: C,
                        cardId: w,
                        sessionId: P,
                        tilePosition: k,
                    });
                },
            });
        return (0, r.jsxs)("div", {
            className: tI.qA,
            children: [
                (0, r.jsx)("div", { className: tI.gn, children: (0, r.jsx)(eF.A, { category: a }) }),
                (0, r.jsx)(tT, { product: H ?? Y, user: n, activeSlide: E }),
                (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsxs)("div", {
                            className: tI.h_,
                            children: [
                                (0, r.jsx)(eB, { product: Y, isDarkText: !eA, isOrbExclusive: eV }),
                                (0, r.jsx)(T.D, { variant: "heading-xl/extrabold", className: tI.v7, children: eC }),
                                (0, r.jsx)(A.E, { variant: "text-sm/normal", children: ew }),
                                (0, r.jsx)(ty, { skuId: Y.skuId }),
                                $.isPurchased || $.isPartiallyOwnedBundle
                                    ? (0, r.jsx)(eN, { className: tI.On, isPartiallyPurchased: Z })
                                    : ev
                                      ? (0, r.jsx)(A.E, {
                                            variant: "text-md/semibold",
                                            className: tI.On,
                                            children: e_.intl.string(e_.t.rt69oo),
                                        })
                                      : ej
                                        ? (0, r.jsx)(tu, {
                                              prices: eH,
                                              product: Y,
                                              hasShopDiscount: D,
                                              discountSource: M,
                                              discount: eR,
                                              hasSufficientOrbs: eW,
                                              isProductDisabled: ee,
                                              discountOfferAmount: eP,
                                              onTrackClick: N,
                                          })
                                        : eV
                                          ? null
                                          : (0, r.jsxs)("div", {
                                                className: tI.pw,
                                                children: [
                                                    (0, r.jsx)(e$, {
                                                        product: Y,
                                                        discount: eR,
                                                        hasShopDiscount: D,
                                                        discountSource: M,
                                                        hideStrikethroughPrice: !D || eL,
                                                        discountIconDisplayMode: "tooltip",
                                                        discountIconSize: "xs",
                                                        discountOfferAmount: eP,
                                                    }),
                                                    D || eL ? null : (0, r.jsx)(e1, { product: Y, onTrackClick: N }),
                                                ],
                                            }),
                            ],
                        }),
                        (0, eS.B1)(t) &&
                            (0, r.jsx)(y.M, {
                                children: (0, r.jsxs)("div", {
                                    className: l()(tI.Oj, { [tI.OJ]: eO }),
                                    children: [
                                        eO &&
                                            (0, r.jsx)(ta, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: B,
                                                className: tI.L$,
                                            }),
                                        (0, r.jsx)(tl.A, {
                                            skuId: t.skuId,
                                            onVariantEnter: F,
                                            onVariantExit: G,
                                            wrap: !0,
                                        }),
                                        !eO &&
                                            (0, r.jsx)(ta, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: B,
                                                className: tI.L$,
                                            }),
                                    ],
                                }),
                            }),
                        null !== et && (0, r.jsx)(A.E, { variant: "text-xs/normal", className: tI.H$, children: et }),
                        (0, r.jsx)(R.B, {
                            direction: "vertical",
                            gap: 8,
                            children:
                                !ev || O || ex
                                    ? en
                                        ? q
                                            ? eb
                                                ? (0, r.jsxs)(S.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(e5, { product: Y, onSuccess: u, onTrackClick: N }),
                                                          (0, r.jsx)(eG.A, {
                                                              primary: !0,
                                                              product: Y,
                                                              onSuccess: u,
                                                              giftRecipient: v,
                                                              giftingOrigin: C,
                                                              onTrackClick: N,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(e5, { product: Y, onSuccess: u, onTrackClick: N })
                                            : ez
                                              ? eq(e_.intl.string(e_.t.sEAnVH))
                                              : ev
                                                ? (0, r.jsx)(I.$, {
                                                      loading: eo,
                                                      loadingStartedLabel: e_.intl.string(e_.t["TYw+9s"]),
                                                      loadingFinishedLabel: e_.intl.string(e_.t.Pg1UP5),
                                                      onClick: async () => {
                                                          N(ek.sH.ADD_TO_COLLECTION),
                                                              await (0, ea.iJ)(Y.skuId),
                                                              u(),
                                                              (0, tv.A)({
                                                                  product: Y,
                                                                  analyticsLocations: j,
                                                                  purchaseType: ek.gs.PREMIUM_PURCHASE,
                                                              });
                                                      },
                                                      text: e_.intl.string(e_.t.zp6caO),
                                                      fullWidth: !0,
                                                  })
                                                : (0, r.jsx)(r.Fragment, {
                                                      children: eH.map((e, t) => {
                                                          let n,
                                                              i = 0 === t;
                                                          if (e.currency === to.Yr.DISCORD_ORB) {
                                                              let t, n, a, l;
                                                              return (
                                                                  (t = ee
                                                                      ? e_.intl.string(e_.t.cTdr3x)
                                                                      : e_.intl.string(e_.t.zqh7ZM)),
                                                                  (n = !eW || ee),
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
                                                                                              (0, tv.A)({
                                                                                                  product: Y,
                                                                                                  analyticsLocations: j,
                                                                                                  itemConsumed:
                                                                                                      t[0]?.consumed,
                                                                                                  purchaseType:
                                                                                                      ek.gs.ORB,
                                                                                              });
                                                                                      },
                                                                                      analyticsLocations: j,
                                                                                  });
                                                                          },
                                                                          disabled: n,
                                                                          "aria-label": l,
                                                                          text: e_.intl.format(
                                                                              eM ? e_.t.JC15qj : e_.t.lOtBOI,
                                                                              {
                                                                                  orbPrice: e.amount,
                                                                                  orbIconHook: () =>
                                                                                      (0, r.jsx)(x.C, {
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
                                                                        discountOfferAmount: eP,
                                                                    }))
                                                                  : ej &&
                                                                    (n = e_.intl.formatToPlainString(e_.t["cNSL/j"], {
                                                                        price: (0, ei.$g)(e.amount, e.currency),
                                                                    })),
                                                              (0, r.jsxs)(S.e, {
                                                                  wrap: !1,
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, r.jsx)(I.$, {
                                                                          variant: i ? "primary" : "secondary",
                                                                          onClick: eQ,
                                                                          text: n,
                                                                          fullWidth: !0,
                                                                      }),
                                                                      eb &&
                                                                          (0, r.jsx)(eG.A, {
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
                                        : eb
                                          ? (0, r.jsx)(eG.A, {
                                                primary: !0,
                                                product: Y,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: v,
                                                giftingOrigin: C,
                                                onTrackClick: N,
                                            })
                                          : null
                                    : eq(e_.intl.string(e_.t.sEAnVH)),
                        }),
                        (0, r.jsx)(A.E, {
                            className: l()(tI.ed, !eA && tI.un),
                            variant: "text-xxs/normal",
                            children: ev && !q ? e_.intl.string(e_.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    tC = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: tI.mV,
            children: (0, r.jsx)(M.A, {
                avatar: (0, r.jsx)(C.eu, {
                    src: t.avatarSrc,
                    size: N._3.SIZE_32,
                    "aria-label": t.name,
                    status: b.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(tI.$L, n),
            }),
        });
    },
    tN = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, eA.Ov)();
        return (0, r.jsx)("div", {
            className: tI.nJ,
            role: "img",
            "aria-label": e_.intl.string(e_.t.SZeUdR),
            children: (0, r.jsxs)(y.M, {
                children: [
                    (0, r.jsx)(tC, { user: a.mallow, innerClassName: tI.ab }),
                    (0, r.jsxs)(A.E, {
                        variant: "text-sm/semibold",
                        className: tI.OS,
                        children: [e_.intl.string(e_.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(tC, { user: a.phibi, innerClassName: tI.e9 }),
                    (0, r.jsx)("div", {
                        className: tI.mV,
                        children: (0, r.jsx)(ev.A, {
                            className: tI.M4,
                            innerClassName: tI.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(tC, { user: a.locke, innerClassName: tI.e9 }),
                    (0, r.jsxs)(A.E, {
                        variant: "text-sm/semibold",
                        className: tI.OS,
                        children: [e_.intl.string(e_.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(tC, { user: a.boom, innerClassName: tI.bD }),
                    (0, r.jsx)(tC, { user: a.cherry, innerClassName: tI.bD }),
                ],
            }),
        });
    },
    tb = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            s = (0, _.bG)([k.A], () => k.A.useReducedMotion),
            o = er.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: c, ...u } = (0, _.cf)([q.A], () => q.A.getPendingChanges()),
            p = (0, $.V7)({ userId: n.id, image: c }),
            m = t.type === d.R.AVATAR_DECORATION,
            [f] = t.items,
            { firstAvatarDecoration: h, firstProfileEffect: g, firstNameplate: E } = (0, eg.f5)(t),
            A = null != g,
            v = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(Y.A, {
                            ...u,
                            pendingAvatar: p,
                            user: n,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: h,
                            pendingProfileEffect: g,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: m,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        m && (0, r.jsx)(tj, { user: n }),
                    ],
                }),
            I = (e) => (0, r.jsx)(tN, { user: n, nameplate: e, avatarDecoration: h });
        if (t.type === d.R.BUNDLE) {
            if (!(0, eT.Wb)(t))
                return (0, r.jsx)("div", {
                    className: tI.RA,
                    children: (0, r.jsx)("div", { className: tI.bo, children: v() }),
                });
            {
                let e = i ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !s;
                return n.type === d.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: l()(tI.Zj, a && c ? tI.p2 : ""), children: I(n) })
                    : (0, r.jsx)("div", { className: l()(tI.Ak, a && c ? tI.p2 : ""), children: v() });
            }
        }
        return null != E
            ? (0, r.jsx)("div", { className: tI.Zj, children: I(E) })
            : (0, r.jsx)("div", { className: f?.type === d.R.AVATAR_DECORATION ? tI.RA : tI.Ak, children: v() });
    },
    tj = (e) => {
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
                    className: tI.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(H.A, { className: tI.G5, author: (0, G.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: tI.lG,
                            children: [
                                (0, r.jsx)(w.U, { size: "md", color: "currentColor", className: tI.hq }),
                                (0, r.jsx)(P.n, { size: "md", color: "currentColor", className: tI.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    tw = (e) => {
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
            R = (0, tE.f)(a),
            { previewingVariantIndex: C } = R,
            N = (0, eo.Q)(a),
            j = tm(a, C),
            w = (0, eS.rb)(a, N);
        o()(null != w, "Selected product should not be null");
        let { analyticsLocations: P } = (0, U.Ay)([...v, O.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eD.Yr)(w.skuId);
        let L = (0, th.U1)(s);
        i.useEffect(() => {
            null != y && (0, Z.A)(y.id, y.getAvatarURL(void 0, 80));
        }, [y]);
        let k = i.useMemo(() => (0, ec.V6)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            et.default.track(b.HAw.OPEN_MODAL, {
                type: b.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: m,
                location_stack: P,
                sku_id: w.skuId,
                product_type: k,
            }),
                (0, ea.RD)(w.skuId);
        }, [m, P, w.skuId, k]);
        let { cardId: M, sessionId: B, tilePosition: F } = (0, el.uM)() ?? {},
            G = i.useMemo(() => (0, eS.v8)(a), [a]),
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
            })({ skuId: w.skuId, productSkuIds: G, analyticsLocations: P });
        (0, D.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: w.skuId,
                card_id: M,
                shop_session_id: B,
                position_in_section: F,
                product_sku_ids: G,
                location_stack: P,
            },
        });
        let V = (0, K.o6)(),
            W = t === f.ip.EXITING,
            z = (0, tf.$R)(a),
            Y = z?.amount,
            $ = null != Y && (z?.discountId === eJ.eR || z?.discountId === eJ.Qz),
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
                  value: P,
                  children: (0, r.jsxs)(h.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: tI.CR,
                      returnRef: p,
                      transitionState: t,
                      size: h.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(h.$m, {
                              "data-migration-pending": !0,
                              className: tI.jE,
                              children: [
                                  (0, r.jsx)(tR, {
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
                                          tI.i1,
                                          w.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? tI.bF
                                              : w.type === d.R.AVATAR_DECORATION
                                                ? tI.Jq
                                                : tI.eF,
                                      ),
                                      style: { backgroundImage: `url(${L})` },
                                      children: [
                                          (0, ek.pQ)(a.skuId)
                                              ? a.skuId === ek.Dp.ORB_PROFILE_BADGE
                                                  ? V || W
                                                      ? null
                                                      : (0, r.jsx)(tr, { user: y })
                                                  : a.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(e3, {})
                                                    : (0, r.jsx)(ts.B, { product: a, className: tI.Ms })
                                              : (0, r.jsx)(tb, {
                                                    user: y,
                                                    product: j ?? w,
                                                    activeBundleSlide: Q,
                                                    isTransitioning: q,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: tI.VG,
                                              children: [
                                                  (0, r.jsx)(t_.R, {
                                                      product: a,
                                                      selectedVariantIndex: N,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: H,
                                                  }),
                                                  (0, r.jsx)(eO, { skuId: w.skuId, tab: x, onTrackClick: H }),
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
                                  children: (0, r.jsxs)(h.jl, {
                                      "data-migration-pending": !0,
                                      className: tI.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: tI.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: tI.do,
                                              children: [
                                                  (0, r.jsx)(A.E, {
                                                      variant: "text-sm/semibold",
                                                      className: tI.Q2,
                                                      children: e_.intl.format(e_.t["78ph4b"], {
                                                          discountOfferAmount: Y,
                                                      }),
                                                  }),
                                                  z?.expiresAt != null && (0, r.jsx)(eU.e, { endDate: z.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
