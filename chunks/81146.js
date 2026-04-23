n.d(t, { default: () => tb });
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
    m = n(990078),
    p = n(462887),
    f = n(231723),
    h = n(935462),
    E = n(408278),
    A = n(972213),
    g = n(834730),
    I = n(430690),
    v = n(821609),
    x = n(318254),
    S = n(825484),
    C = n(534514),
    R = n(247928),
    T = n(331322),
    N = n(97808),
    b = n(778712),
    y = n(652215),
    j = n(359778),
    P = n(245604),
    O = n(460905),
    k = n(736653),
    L = n(775602),
    U = n(793574),
    w = n(688810),
    D = n(139286),
    B = n(262295),
    M = n(320095),
    G = n(963852),
    F = n(763754),
    H = n(20851),
    V = n(44120),
    W = n(725807),
    Y = n(986687),
    z = n(101058),
    $ = n(84540),
    q = n(836602),
    Z = n(576622),
    Q = n(761705),
    J = n(270051),
    K = n(652165),
    X = n(287809),
    ee = n(954571),
    et = n(975571),
    en = n(927578),
    er = n(580630),
    ei = n(803375),
    ea = n(440938),
    el = n(4227),
    es = n(298072),
    eo = n(993408),
    ec = n(640634),
    ed = n(940980);
n(321073);
var eu = n(985018);
let e_ = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return eu.intl.formatToPlainString(eu.t["/0Yndu"], { num: e.bundledProducts?.length });
        let n = e.bundledProducts ?? [],
            r = [],
            i = !1;
        for (let e of n)
            switch (e.type) {
                case d.R.AVATAR_DECORATION:
                    r.push(eu.intl.formatToPlainString(eu.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case d.R.PROFILE_EFFECT:
                    r.push(eu.intl.formatToPlainString(eu.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case d.R.NAMEPLATE:
                    r.push(eu.intl.formatToPlainString(eu.t["2keXky"], { itemName: e.name })), (i = !0);
            }
        if (i) {
            let e = r.join(", ").replace(/, ([^,]*)$/, " & $1");
            return eu.intl.formatToPlainString(eu.t.Ofrqj6, { joinedItems: e });
        }
        let a = r.join(" & ");
        return eu.intl.formatToPlainString(eu.t.Ofrqj6, { joinedItems: a });
    },
    em = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, i.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === d.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let n = e_(e, t);
                    return e.summary.replace("{joinedItems}", n);
                }
                return e.summary;
            }
            switch (e?.type) {
                case d.R.AVATAR_DECORATION:
                    return eu.intl.string(eu.t["3lv7q2"]);
                case d.R.PROFILE_EFFECT:
                    return eu.intl.string(eu.t.VhJL72);
                case d.R.NAMEPLATE:
                    return eu.intl.string(eu.t.ik37EZ);
                case d.R.PROFILE_FRAME:
                    return eu.intl.string(eu.t.fWzWPp);
                case d.R.BUNDLE:
                    return e_(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
var ep = n(740076),
    ef = n(466459),
    eh = n(442759),
    eE = n(780898),
    eA = n(344346),
    eg = n(139136),
    eI = n(623373),
    ev = n(660653),
    ex = n(536572),
    eS = n(885574),
    eC = n(401231);
let eR = (e) => {
    let { className: t, isPartiallyPurchased: n } = e;
    return n
        ? (0, r.jsx)(m.m, {
              position: "top",
              align: "left",
              text: eu.intl.string(eu.t.y1VWkZ),
              children: (0, r.jsxs)("div", {
                  className: l()(eC.GX, t),
                  children: [
                      (0, r.jsx)("span", {
                          className: eC.P0,
                          children: (0, r.jsx)(eS.m, { size: "md", color: "currentColor", className: eC.G }),
                      }),
                      (0, r.jsx)(g.E, { variant: "text-md/semibold", children: eu.intl.string(eu.t.BEjTij) }),
                  ],
              }),
          })
        : (0, r.jsx)(g.E, { variant: "text-md/semibold", className: t, children: eu.intl.string(eu.t["6cfuDj"]) });
};
var eT = n(691540),
    eN = n(857250),
    eb = n(97483),
    ey = n(173936),
    ej = n(957565),
    eP = n(758836);
function eO(e) {
    let { skuId: t, tab: n, onTrackClick: a } = e,
        l = i.useCallback(() => {
            ee.default.track(y.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), a?.(eP.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${y.BVt.COLLECTIBLES_SHOP}${((0, eP.cw))(n) ? `?tab=${n}` : ""}#itemSkuId=${t}`;
            (0, ej.C)(e, () => (0, eT.P0)((0, eN.o)(eu.intl.string(eu.t["L/PwZf"]), eb.Ck.SUCCESS)));
        }, [t, n, a]);
    return (0, r.jsx)(E.K, {
        "aria-label": eu.intl.string(eu.t.WqhZss),
        onClick: l,
        icon: ey.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var ek = n(854818),
    eL = n(177366),
    eU = n(674019);
function ew(e) {
    let { product: t, isDarkText: n = !1, isOrbExclusive: i = !1 } = e,
        a = (function (e, t) {
            if (t) return eu.intl.string(eu.t["0TmQRG"]);
            switch (e) {
                case d.R.AVATAR_DECORATION:
                    return eu.intl.string(eu.t["7v0T9P"]);
                case d.R.PROFILE_EFFECT:
                    return eu.intl.string(eu.t.wR5wOo);
                case d.R.PROFILE_FRAME:
                    return eu.intl.string(eu.t.GWrZOd);
                case d.R.NAMEPLATE:
                    return eu.intl.string(eu.t.x5CoXR);
            }
            return null;
        })(t.type, i);
    return null === a
        ? null
        : (0, r.jsx)(g.E, { variant: "text-xxs/normal", className: l()([eU.kL, n ? eU.ap : eU.aK]), children: a });
}
var eD = n(203312),
    eB = n(878112),
    eM = n(140735),
    eG = n(252955);
let eF = (e) => {
    let {
            price: { amount: t, currency: n },
            className: i,
            variant: a = "heading-md/semibold",
        } = e,
        s = (0, er.RS)(t, n);
    return (0, r.jsxs)(g.E, {
        variant: a,
        className: l()(eG.v, i),
        children: [
            (0, r.jsx)(eM.A, { children: eu.intl.format(eu.t["2CEGln"], { price: s }) }),
            (0, r.jsx)("span", { "aria-hidden": !0, children: s }),
        ],
    });
};
var eH = n(219103),
    eV = n(469215);
function eW(e) {
    let {
            product: t,
            isPremiumUser: n,
            discount: i,
            className: a,
            discountOfferAmount: s,
            hideStrikethroughPrice: o = !1,
            nitroIconType: c,
            nitroIconSize: d = "md",
        } = e,
        u = (0, eo.WD)(t, { isPremiumUser: n, discount: i });
    if (null == u) return null;
    let { defaultPrice: _, showDefaultPriceOnly: m } = u;
    if (m)
        return (0, r.jsx)("div", {
            className: l()(eV.kG, a),
            children: (0, r.jsx)(eH.x, { priceAmount: _.amount, priceCurrency: _.currency }),
        });
    let { showNitroPrice: p, originalPrice: f, finalPrice: h } = u;
    return (0, r.jsxs)("div", {
        className: l()(eV.kG, a),
        children: [
            o ? null : (0, r.jsx)(eF, { price: f, className: eV.q9 }),
            (0, r.jsx)(eH.x, {
                priceAmount: h.amount,
                priceCurrency: h.currency,
                discount: i,
                className: l()({ [eV.q9]: null == s }),
                nitroIconType: p ? c : void 0,
                nitroIconSize: d,
                discountOfferAmount: s,
            }),
        ],
    });
}
var eY = n(403581),
    ez = n(939249),
    e$ = n(532794),
    eq = n(788868),
    eZ = n(447806);
let eQ = (e) => {
    let { text: t, onTrackClick: n } = e,
        { analyticsLocations: a } = (0, w.Ay)(),
        l = i.useRef(null);
    return (0, r.jsx)(ez.D, {
        className: eZ.F,
        innerRef: l,
        onClick: () => {
            n?.(eP.sH.SUBSCRIBE_NOW),
                (0, e$.A)({ subscriptionTier: eq.pe.TIER_2, analyticsLocations: a, returnRef: l });
        },
        children: t,
    });
};
var eJ = n(805961);
function eK(e) {
    let { product: t, onTrackClick: n } = e,
        i = (0, eo.yt)(t, y.lid.PREMIUM_TIER_2);
    if (null == i) return null;
    let a = (0, er.RS)(i.amount, i.currency);
    return (0, r.jsxs)("div", {
        className: eJ.k,
        children: [
            (0, r.jsx)(m.m, {
                text: eu.intl.string(eu.t.MPFyJ5),
                "aria-label": eu.intl.string(eu.t.X3Ekj8),
                children: (0, r.jsx)(eY.t, { size: "md", color: "currentColor", className: eJ.o }),
            }),
            (0, r.jsx)(g.E, {
                variant: "text-xs/medium",
                children: eu.intl.format(eu.t.Sv8iic, {
                    price: a,
                    subscribeNowHook: (e) => (0, r.jsx)(eQ, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
var eX = n(572595),
    e0 = n(450481);
let e1 = (e) => {
    let { product: t, onSuccess: n, onTrackClick: i } = e,
        { handleUseNow: a, isApplying: l } = (0, e0.p)({ product: t, onSuccess: n });
    return (0, r.jsx)(v.$, {
        variant: "primary",
        onClick: () => {
            i?.(eP.sH.USE_NOW), a();
        },
        loading: l,
        text: eu.intl.string(eu.t.MAS7uK),
        fullWidth: !0,
    });
};
var e5 = n(478016),
    e2 = n(661531),
    e6 = n(224016),
    e7 = n(913521);
let e9 = () => {
    let e = [eu.t.E1NP2x, eu.t.kpMomJ, eu.t.xT1Vfn, eu.t.myyAEr, eu.t.zTk8Ul];
    return (0, r.jsxs)("div", {
        className: e7.kL,
        children: [
            (0, r.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: e7.ym,
            }),
            (0, r.jsx)(e6.A, { color: "white" }),
            (0, r.jsx)("div", {
                className: e7.PX,
                children: e.map((e, t) =>
                    (0, r.jsxs)(
                        "div",
                        {
                            className: e7.UJ,
                            children: [
                                (0, r.jsx)(e5.U, { color: e2.A.colors.WHITE }),
                                (0, r.jsx)(g.E, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
                                    children: eu.intl.string(e),
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
    e8 = n(132198),
    e4 = n(83554);
let te = (e) => {
    let { user: t } = e,
        n = en.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: i, ...a } = (0, e3.cf)([q.A], () => q.A.getPendingChanges()),
        l = (0, z.V7)({ userId: t.id, image: i });
    return (0, r.jsx)("div", {
        className: e4.k,
        children: (0, r.jsx)(Y.A, {
            ...a,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, e8._)()],
            canUsePremiumCustomization: n,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
var tt = n(561769);
let tn = (e) => {
    let { skuId: t, overrideVariantIndex: n, className: i } = e,
        a = (0, tt.Vm)(t),
        l = (0, es.Q)(a);
    return null != a && (0, eI.B1)(a)
        ? (0, r.jsx)(g.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: i,
              lineClamp: 1,
              children: a.variants[n ?? l].variantLabel,
          })
        : null;
};
var tr = n(661847),
    ti = n(846957),
    ta = n(818348),
    tl = n(752274);
function ts(e) {
    let { orbPrice: t, isProductDisabled: n, hasSufficientOrbs: i } = e,
        a = n ? eu.intl.string(eu.t.wu4gyV) : eu.intl.string(eu.t.eFNRzU),
        l = n || !i;
    return (0, r.jsxs)("div", {
        className: tl.eg,
        children: [
            (0, r.jsx)("div", {
                className: tl.zR,
                children: (0, r.jsx)(g.E, { variant: "text-xs/normal", className: l ? tl.r9 : void 0, children: a }),
            }),
            (0, r.jsx)(eH.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? tl.r9 : void 0 }),
        ],
    });
}
function to(e) {
    let {
            prices: t,
            isPremiumUser: n,
            discount: i,
            product: a,
            hasSufficientOrbs: l,
            onTrackClick: s,
            isProductDisabled: o,
            discountOfferAmount: c,
        } = e,
        d = null != c;
    return 0 === t.length
        ? null
        : t[0].currency === ta.Yr.DISCORD_ORB
          ? (0, r.jsx)(ts, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: l })
          : (0, r.jsxs)("div", {
                className: tl.eg,
                children: [
                    (0, r.jsxs)("div", {
                        className: tl.pw,
                        children: [
                            (0, r.jsx)(eW, {
                                product: a,
                                discount: i,
                                isPremiumUser: n,
                                hideStrikethroughPrice: !n || d,
                                nitroIconType: "tooltip",
                                nitroIconSize: "xs",
                                discountOfferAmount: c,
                            }),
                            n || d ? null : (0, r.jsx)(eK, { product: a, onTrackClick: s }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === ta.Yr.DISCORD_ORB &&
                        (0, r.jsx)(eH.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !l ? tl.r9 : void 0,
                        }),
                ],
            });
}
var tc = n(139146),
    td = n(929283);
let tu = (e, t) => (e.type === d.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e);
var t_ = n(525723),
    tm = n(212407),
    tp = n(347722),
    tf = n(935094),
    th = n(57020),
    tE = n(61750),
    tA = n(127157);
let tg = (e) => {
        let { item: t, product: n, user: a } = e,
            l = i.useRef(null),
            s = (0, eo.aw)(n),
            { firstAvatarDecoration: o } = (0, eh.f5)(n);
        return t.type === d.R.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: s ? tA.X2 : tA.h1,
                  children: (0, r.jsx)(td.i, { user: a, item: t, isHighlighted: !0 }),
              })
            : t.type === d.R.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: s ? tA.ME : tA.sm,
                    ref: l,
                    children: (0, r.jsx)(eg.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === d.R.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: l,
                      className: tA.Dz,
                      children: (0, r.jsx)(eA.A, {
                          className: tA.M4,
                          nameplate: t,
                          user: a,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: o,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    tI = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: tA.g4,
            children: (0, r.jsx)(I.t, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        s = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        o = `(${i + 1}/${a})`;
                    return (0, r.jsx)(
                        I.q,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: tA.Kg,
                                children: [
                                    (0, r.jsx)(tg, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(g.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: tA.gx,
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
    tv = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, eo.aw)(t)
            ? (0, r.jsx)(tI, { product: t, user: n, activeSlide: i })
            : (0, eP.pQ)(t.skuId)
              ? (0, r.jsx)(ti.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(tg, { item: t.items[0], product: t, user: n })
                : null;
    },
    tx = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(g.E, {
                  variant: "text-sm/normal",
                  className: tA.CU,
                  children: eu.intl.format(eu.t.Q1scdE, {
                      helpdeskArticle: et.A.getArticleURL(y.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    tS = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: s,
                tab: c,
                onClose: u,
                returnRef: f,
                previewingVariantIndexProps: h,
                selectedVariantIndex: E,
                activeBundleSlide: A,
                giftRecipient: I,
                giftingOrigin: N,
                onTrackClick: b,
            } = e,
            { analyticsLocations: j } = (0, w.Ay)(),
            { cardId: P, sessionId: O, tilePosition: L } = (0, ea.uM)() ?? {},
            U = en.Ay.canUseCollectibles(n),
            { previewingVariantIndex: D, handleEntering: B, handleLeaving: M } = h,
            G = tu(t, D),
            F = (0, eI.rb)(t, E);
        o()(null != F, "Selected product should not be null");
        let H = (0, ef.h)(t),
            { isPurchased: Y, isPartiallyOwnedBundle: z } = (0, ef.h)(F),
            { isDisabled: q, disabledReason: Z } = (0, ep.I)(F.skuId),
            X = (0, eo.Zu)({ product: F, isPartiallyOwnedBundle: z, isPurchased: Y }),
            ee = (0, _.bG)([el.A], () => el.A.isClaiming === F?.skuId),
            et = (0, k.Ay)(),
            es = (0, p.M)(et),
            e_ = (0, eo.G0)(F),
            eE = (0, eo.yt)(F, y.lid.DEFAULT),
            eA = eE?.amount === 0,
            { firstAvatarDecoration: eg } = (0, eh.f5)(G ?? F),
            ev = i.useMemo(() => (0, eo.fT)(F, U), [F, U]),
            eS = (0, ex.VG)(t),
            eC = (0, tp.X)(F),
            { enabled: eT } = (0, J.Z)({ location: "collectibles_shop_product_details_modal" }),
            eN = em(F, !1),
            eb = (0, t_.V_)(t),
            ey = null != eb,
            ej = (t.variants?.length ?? 0) > 8,
            eO = (0, ed.W)("CollectiblesShopProductDetailsModal"),
            ek = c === eP.G2.ORBS && s ? tt.Hi.ORBS : eO ? tt.Hi.FIAT : void 0,
            eL = (0, ec.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eU,
                isOrbExclusive: eM,
                hasSufficientOrbs: eG,
            } = (0, th.F)({ product: F, isPremiumUser: U, hasDiscountOffer: ey, prioritizedCurrency: ek }),
            eF = i.useMemo(() => eU.some((e) => e.currency === ta.Yr.DISCORD_ORB), [eU]);
        (0, Q.W)({ disableFetch: !eF });
        let eH = i.useCallback(() => {
            b(eP.sH.BUY_WITH_FIAT),
                (0, V.A)({ skuId: F.skuId, analyticsLocations: j, onClose: (e) => (e ? u() : (0, ta.tE)()) });
        }, [j, u, F.skuId, b]);
        return (
            i.useEffect(() => {
                if (null != eg) return (0, $.p)({ avatarDecoration: eg }), () => (0, $.p)({ avatarDecoration: void 0 });
            }, [eg]),
            (0, r.jsxs)("div", {
                className: tA.qA,
                children: [
                    (0, r.jsx)("div", { className: tA.gn, children: (0, r.jsx)(eD.A, { category: a }) }),
                    (0, r.jsx)(tv, { product: G ?? F, user: n, activeSlide: A }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: tA.h_,
                                children: [
                                    (0, r.jsx)(ew, { product: F, isDarkText: !es, isOrbExclusive: eM }),
                                    (0, r.jsx)(C.D, {
                                        variant: "heading-xl/extrabold",
                                        className: tA.v7,
                                        children: eS,
                                    }),
                                    (0, r.jsx)(g.E, { variant: "text-sm/normal", children: eN }),
                                    (0, r.jsx)(tx, { skuId: F.skuId }),
                                    H.isPurchased || H.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(eR, { className: tA.On, isPartiallyPurchased: z })
                                        : e_
                                          ? (0, r.jsx)(g.E, {
                                                variant: "text-md/semibold",
                                                className: tA.On,
                                                children: eu.intl.string(eu.t.rt69oo),
                                            })
                                          : eT
                                            ? (0, r.jsx)(to, {
                                                  prices: eU,
                                                  product: F,
                                                  isPremiumUser: U,
                                                  discount: ev,
                                                  hasSufficientOrbs: eG,
                                                  isProductDisabled: q,
                                                  discountOfferAmount: eb,
                                                  onTrackClick: b,
                                              })
                                            : eM
                                              ? null
                                              : (0, r.jsxs)("div", {
                                                    className: tA.pw,
                                                    children: [
                                                        (0, r.jsx)(eW, {
                                                            product: F,
                                                            discount: ev,
                                                            isPremiumUser: U,
                                                            hideStrikethroughPrice: !U || ey,
                                                            nitroIconType: "tooltip",
                                                            nitroIconSize: "xs",
                                                            discountOfferAmount: eb,
                                                        }),
                                                        U || ey
                                                            ? null
                                                            : (0, r.jsx)(eK, { product: F, onTrackClick: b }),
                                                    ],
                                                }),
                                ],
                            }),
                            (0, eI.B1)(t) &&
                                (0, r.jsx)(R.M, {
                                    children: (0, r.jsxs)("div", {
                                        className: l()(tA.Oj, { [tA.OJ]: ej }),
                                        children: [
                                            ej &&
                                                (0, r.jsx)(tn, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: D,
                                                    className: tA.L$,
                                                }),
                                            (0, r.jsx)(tr.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: B,
                                                onVariantExit: M,
                                                wrap: !0,
                                            }),
                                            !ej &&
                                                (0, r.jsx)(tn, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: D,
                                                    className: tA.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== Z && (0, r.jsx)(g.E, { variant: "text-xs/normal", className: tA.H$, children: Z }),
                            (0, r.jsx)(T.B, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (e_ && !U && !eA) {
                                        let e;
                                        return (
                                            (e = eu.intl.string(eu.t.sEAnVH)),
                                            (0, r.jsx)(W.A, {
                                                subscriptionTier: eq.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: () => {
                                                    b(eP.sH.UNLOCK_WITH_NITRO), (0, eX.M)();
                                                },
                                                onSubscribeModalClose: () => {
                                                    (0, eX.t)({
                                                        product: F,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: f,
                                                        analyticsLocations: j,
                                                        tab: c,
                                                        giftRecipient: I,
                                                        giftingOrigin: N,
                                                        cardId: P,
                                                        sessionId: O,
                                                        tilePosition: L,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return X
                                        ? Y
                                            ? eC
                                                ? (0, r.jsxs)(S.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(e1, { product: F, onSuccess: u, onTrackClick: b }),
                                                          (0, r.jsx)(eB.A, {
                                                              primary: !0,
                                                              product: F,
                                                              onSuccess: u,
                                                              giftRecipient: I,
                                                              giftingOrigin: N,
                                                              onTrackClick: b,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(e1, { product: F, onSuccess: u, onTrackClick: b })
                                            : e_
                                              ? (0, r.jsx)(v.$, {
                                                    loading: ee,
                                                    loadingStartedLabel: eu.intl.string(eu.t["TYw+9s"]),
                                                    loadingFinishedLabel: eu.intl.string(eu.t.Pg1UP5),
                                                    onClick: async () => {
                                                        b(eP.sH.ADD_TO_COLLECTION),
                                                            await (0, ei.iJ)(F.skuId),
                                                            u(),
                                                            (0, tE.A)({
                                                                product: F,
                                                                analyticsLocations: j,
                                                                purchaseType: eP.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eu.intl.string(eu.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eU.map((e, t) => {
                                                        let n,
                                                            i = 0 === t;
                                                        if (e.currency === ta.Yr.DISCORD_ORB) {
                                                            let t, n, a, l;
                                                            return (
                                                                (t = q
                                                                    ? eu.intl.string(eu.t.cTdr3x)
                                                                    : eu.intl.string(eu.t.zqh7ZM)),
                                                                (n = !eG || q),
                                                                (a = eu.intl.formatToPlainString(eu.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (l = n ? `${a}, ${t}` : a),
                                                                (0, r.jsx)(m.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, r.jsx)(v.$, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            b(eP.sH.BUY_WITH_ORBS),
                                                                                (0, K.B4)({
                                                                                    skuId: F.skuId,
                                                                                    onCheckoutSuccess: (e) => {
                                                                                        let { entitlements: t } = e;
                                                                                        (0, ei.gB)(),
                                                                                            u(),
                                                                                            (0, tE.A)({
                                                                                                product: F,
                                                                                                analyticsLocations: j,
                                                                                                itemConsumed:
                                                                                                    t[0]?.consumed,
                                                                                                purchaseType: eP.gs.ORB,
                                                                                            });
                                                                                    },
                                                                                    analyticsLocations: j,
                                                                                });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": l,
                                                                        text: eu.intl.format(
                                                                            eL ? eu.t.JC15qj : eu.t.lOtBOI,
                                                                            {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(x.C, {
                                                                                        className: tA.fN,
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
                                                                        return eu.intl.string(eu.t.V1AWw0);
                                                                    case d.R.PROFILE_EFFECT:
                                                                        return eu.intl.string(eu.t.kAeDcK);
                                                                    case d.R.NAMEPLATE:
                                                                        return eu.intl.string(eu.t.H3vhqU);
                                                                    case d.R.PROFILE_FRAME:
                                                                        return eu.intl.string(eu.t.BlSW1e);
                                                                    case d.R.AVATAR_DECORATION:
                                                                    default:
                                                                        return eu.intl.string(eu.t.AQ0Veg);
                                                                }
                                                            })(F)),
                                                            ey
                                                                ? (n = eu.intl.formatToPlainString(eu.t["5U5RB5"], {
                                                                      discountOfferAmount: eb,
                                                                  }))
                                                                : eT &&
                                                                  (n = eu.intl.formatToPlainString(eu.t["cNSL/j"], {
                                                                      price: (0, er.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(S.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(v.$, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: eH,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eC &&
                                                                        (0, r.jsx)(eB.A, {
                                                                            primary: i,
                                                                            product: F,
                                                                            onSuccess: u,
                                                                            giftRecipient: I,
                                                                            giftingOrigin: N,
                                                                            onTrackClick: b,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eC
                                          ? (0, r.jsx)(eB.A, {
                                                primary: !0,
                                                product: F,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: I,
                                                giftingOrigin: N,
                                                onTrackClick: b,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, r.jsx)(g.E, {
                                className: l()(tA.ed, !es && tA.un),
                                variant: "text-xxs/normal",
                                children: e_ && !Y ? eu.intl.string(eu.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    tC = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: tA.mV,
            children: (0, r.jsx)(B.A, {
                avatar: (0, r.jsx)(N.eu, {
                    src: t.avatarSrc,
                    size: b._3.SIZE_32,
                    "aria-label": t.name,
                    status: y.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(tA.$L, n),
            }),
        });
    },
    tR = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, eE.Ov)();
        return (0, r.jsx)("div", {
            className: tA.nJ,
            role: "img",
            "aria-label": eu.intl.string(eu.t.SZeUdR),
            children: (0, r.jsxs)(R.M, {
                children: [
                    (0, r.jsx)(tC, { user: a.mallow, innerClassName: tA.ab }),
                    (0, r.jsxs)(g.E, {
                        variant: "text-sm/semibold",
                        className: tA.OS,
                        children: [eu.intl.string(eu.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(tC, { user: a.phibi, innerClassName: tA.e9 }),
                    (0, r.jsx)("div", {
                        className: tA.mV,
                        children: (0, r.jsx)(eA.A, {
                            className: tA.M4,
                            innerClassName: tA.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(tC, { user: a.locke, innerClassName: tA.e9 }),
                    (0, r.jsxs)(g.E, {
                        variant: "text-sm/semibold",
                        className: tA.OS,
                        children: [eu.intl.string(eu.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(tC, { user: a.boom, innerClassName: tA.bD }),
                    (0, r.jsx)(tC, { user: a.cherry, innerClassName: tA.bD }),
                ],
            }),
        });
    },
    tT = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            s = (0, _.bG)([L.A], () => L.A.useReducedMotion),
            o = en.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: c, ...u } = (0, _.cf)([q.A], () => q.A.getPendingChanges()),
            m = (0, z.V7)({ userId: n.id, image: c }),
            p = t.type === d.R.AVATAR_DECORATION,
            [f] = t.items,
            { firstAvatarDecoration: h, firstProfileEffect: E, firstNameplate: A } = (0, eh.f5)(t),
            g = null != E,
            I = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(Y.A, {
                            ...u,
                            pendingAvatar: m,
                            user: n,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: h,
                            pendingProfileEffect: E,
                            disabledInputs: !0,
                            hideMessageInput: !g,
                            hideCustomStatus: !0,
                            hideBioSection: p,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        p && (0, r.jsx)(tN, { user: n }),
                    ],
                }),
            v = (e) => (0, r.jsx)(tR, { user: n, nameplate: e, avatarDecoration: h });
        if (t.type === d.R.BUNDLE) {
            if (!(0, ev.Wb)(t))
                return (0, r.jsx)("div", {
                    className: tA.RA,
                    children: (0, r.jsx)("div", { className: tA.bo, children: I() }),
                });
            {
                let e = i ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !s;
                return n.type === d.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: l()(tA.Zj, a && c ? tA.p2 : ""), children: v(n) })
                    : (0, r.jsx)("div", { className: l()(tA.Ak, a && c ? tA.p2 : ""), children: I() });
            }
        }
        return null != A
            ? (0, r.jsx)("div", { className: tA.Zj, children: v(A) })
            : (0, r.jsx)("div", { className: f?.type === d.R.AVATAR_DECORATION ? tA.RA : tA.Ak, children: I() });
    },
    tN = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, M.rh)({
                    ...(0, G.Ay)({ author: t, channelId: "1337", content: eu.intl.string(eu.t.d5YwK5) }),
                    state: y.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eu.intl.string(eu.t["TN+ZvB"]),
            children: (0, r.jsx)(R.M, {
                children: (0, r.jsxs)(j.Z, {
                    className: tA.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(H.A, { className: tA.G5, author: (0, F.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: tA.lG,
                            children: [
                                (0, r.jsx)(P.U, { size: "md", color: "currentColor", className: tA.hq }),
                                (0, r.jsx)(O.n, { size: "md", color: "currentColor", className: tA.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    tb = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: s,
                returnRef: m,
                analyticsSource: p,
                analyticsLocations: I,
                shouldCheckoutWithOrbs: v,
                tab: x,
                giftRecipient: S,
                giftingOrigin: C,
            } = e,
            R = (0, _.bG)([X.default], () => X.default.getCurrentUser()),
            T = (0, tf.f)(a),
            { previewingVariantIndex: N } = T,
            b = (0, es.Q)(a),
            j = tu(a, N),
            P = (0, eI.rb)(a, b);
        o()(null != P, "Selected product should not be null");
        let { analyticsLocations: O } = (0, w.Ay)([...I, U.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eL.Yr)(P.skuId);
        let k = (0, tm.U1)(s);
        i.useEffect(() => {
            null != R && (0, Z.A)(R.id, R.getAvatarURL(void 0, 80));
        }, [R]);
        let L = i.useMemo(() => (0, eo.V6)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            ee.default.track(y.HAw.OPEN_MODAL, {
                type: y.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: O,
                sku_id: P.skuId,
                product_type: L,
            }),
                (0, ei.RD)(P.skuId);
        }, [p, O, P.skuId, L]);
        let { cardId: B, sessionId: M, tilePosition: G } = (0, ea.uM)() ?? {},
            F = i.useMemo(() => (0, eI.v8)(a), [a]),
            H = (function (e) {
                let { skuId: t, productSkuIds: n, analyticsLocations: r } = e,
                    { cardId: a, sessionId: l } = (0, ea.uM)() ?? {};
                return i.useCallback(
                    (e) => {
                        ee.default.track(y.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
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
            })({ skuId: P.skuId, productSkuIds: F, analyticsLocations: O });
        (0, D.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: P.skuId,
                card_id: B,
                shop_session_id: M,
                position_in_section: G,
                product_sku_ids: F,
                location_stack: O,
            },
        });
        let V = (0, K.o6)(),
            W = t === f.ip.EXITING,
            Y = (0, t_.$R)(a),
            z = Y?.amount,
            $ = null != z && (Y?.discountId === eq.eR || Y?.discountId === eq.Qz),
            { activeSlide: q, isTransitioning: Q } = (function (e) {
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
            })({ slideCount: i.useMemo(() => ((0, eo.aw)(P) ? P.items.length : 0), [P]), intervalMs: 5e3 });
        return null == R
            ? null
            : (0, r.jsx)(w.f5, {
                  value: O,
                  children: (0, r.jsxs)(h.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: tA.CR,
                      returnRef: m,
                      transitionState: t,
                      size: h.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(h.$m, {
                              "data-migration-pending": !0,
                              className: tA.jE,
                              children: [
                                  (0, r.jsx)(tS, {
                                      user: R,
                                      product: a,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: T,
                                      selectedVariantIndex: b,
                                      shouldCheckoutWithOrbs: v,
                                      tab: x,
                                      activeBundleSlide: q,
                                      giftRecipient: S?.id !== R.id ? S : void 0,
                                      giftingOrigin: S?.id !== R.id ? C : void 0,
                                      onTrackClick: H,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          tA.i1,
                                          P.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? tA.bF
                                              : P.type === d.R.AVATAR_DECORATION
                                                ? tA.Jq
                                                : tA.eF,
                                      ),
                                      style: { backgroundImage: `url(${k})` },
                                      children: [
                                          (0, eP.pQ)(a.skuId)
                                              ? a.skuId === eP.Dp.ORB_PROFILE_BADGE
                                                  ? V || W
                                                      ? null
                                                      : (0, r.jsx)(te, { user: R })
                                                  : a.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(e9, {})
                                                    : (0, r.jsx)(ti.B, { product: a, className: tA.Ms })
                                              : (0, r.jsx)(tT, {
                                                    user: R,
                                                    product: j ?? P,
                                                    activeBundleSlide: q,
                                                    isTransitioning: Q,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: tA.VG,
                                              children: [
                                                  (0, r.jsx)(tc.R, {
                                                      product: a,
                                                      selectedVariantIndex: b,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: H,
                                                  }),
                                                  (0, r.jsx)(eO, { skuId: P.skuId, tab: x, onTrackClick: H }),
                                                  (0, r.jsx)(E.K, {
                                                      "aria-label": eu.intl.string(eu.t.cpT0Cq),
                                                      onClick: () => {
                                                          H(eP.sH.CLOSE_DETAIL), n();
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
                          $ &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(h.jl, {
                                      "data-migration-pending": !0,
                                      className: tA.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: tA.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: tA.do,
                                              children: [
                                                  (0, r.jsx)(g.E, {
                                                      variant: "text-sm/semibold",
                                                      className: tA.Q2,
                                                      children: eu.intl.format(eu.t["78ph4b"], {
                                                          discountOfferAmount: z,
                                                      }),
                                                  }),
                                                  Y?.expiresAt != null && (0, r.jsx)(ek.e, { endDate: Y.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
