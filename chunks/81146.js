s.d(t, { default: () => tD });
var i = s(627968),
    n = s(64700),
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
    N = s(834730),
    R = s(430690),
    E = s(821609),
    v = s(318254),
    _ = s(825484),
    I = s(534514),
    f = s(247928),
    C = s(331322),
    O = s(97808),
    T = s(778712),
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
    K = s(101058),
    q = s(84540),
    Z = s(836602),
    J = s(903209),
    Y = s(761705),
    Q = s(371446),
    X = s(652165),
    ee = s(287809),
    et = s(174459),
    es = s(975571),
    ei = s(428262),
    en = s(580630),
    er = s(859040),
    el = s(440938),
    ea = s(4227),
    ec = s(298072),
    eo = s(993408),
    ed = s(640634),
    eu = s(940980),
    em = s(503089),
    eh = s(13875);
s(321073);
var ex = s(375708);
let ep = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return ex.intl.formatToPlainString(ex.t["/0Yndu"], { num: e.bundledProducts?.length });
        let s = e.bundledProducts ?? [],
            i = [],
            n = !1;
        for (let e of s)
            switch (e.type) {
                case d.R.AVATAR_DECORATION:
                    i.push(ex.intl.formatToPlainString(ex.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case d.R.PROFILE_EFFECT:
                    i.push(ex.intl.formatToPlainString(ex.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case d.R.NAMEPLATE:
                    i.push(ex.intl.formatToPlainString(ex.t["2keXky"], { itemName: e.name })), (n = !0);
            }
        if (n) {
            let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
            return ex.intl.formatToPlainString(ex.t.Ofrqj6, { joinedItems: e });
        }
        let r = i.join(" & ");
        return ex.intl.formatToPlainString(ex.t.Ofrqj6, { joinedItems: r });
    },
    eA = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, n.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === d.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let s = ep(e, t);
                    return e.summary.replace("{joinedItems}", s);
                }
                return e.summary;
            }
            switch (e?.type) {
                case d.R.AVATAR_DECORATION:
                    return ex.intl.string(ex.t["3lv7q2"]);
                case d.R.PROFILE_EFFECT:
                    return ex.intl.string(ex.t.VhJL72);
                case d.R.NAMEPLATE:
                    return ex.intl.string(ex.t.ik37EZ);
                case d.R.PROFILE_FRAME:
                    return ex.intl.string(ex.t.fWzWPp);
                case d.R.BUNDLE:
                    return ep(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
var eg = s(740076),
    ej = s(466459),
    eN = s(442759),
    eR = s(395068),
    eE = s(780898),
    ev = s(344346),
    e_ = s(139136),
    eI = s(395744),
    ef = s(623373),
    eC = s(660653),
    eO = s(536572),
    eT = s(885574),
    ek = s(401231);
let eb = (e) => {
    let { className: t, isPartiallyPurchased: s } = e;
    return s
        ? (0, i.jsx)(h.m, {
              position: "top",
              align: "left",
              text: ex.intl.string(ex.t.y1VWkZ),
              children: (0, i.jsxs)("div", {
                  className: l()(ek.GX, t),
                  children: [
                      (0, i.jsx)("span", {
                          className: ek.P0,
                          children: (0, i.jsx)(eT.m, { size: "md", color: "currentColor", className: ek.G }),
                      }),
                      (0, i.jsx)(N.E, { variant: "text-md/semibold", children: ex.intl.string(ex.t.BEjTij) }),
                  ],
              }),
          })
        : (0, i.jsx)(N.E, { variant: "text-md/semibold", className: t, children: ex.intl.string(ex.t["6cfuDj"]) });
};
var eS = s(691540),
    eP = s(857250),
    ey = s(97483),
    eD = s(173936),
    eL = s(957565),
    eB = s(758836);
function eM(e) {
    let { skuId: t, tab: s, onTrackClick: r } = e,
        l = n.useCallback(() => {
            et.default.track(k.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), r?.(eB.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${k.BVt.COLLECTIBLES_SHOP}${((0, eB.cw))(s) ? `?tab=${s}` : ""}#itemSkuId=${t}`;
            (0, eL.C)(e, () => (0, eS.P0)((0, eP.o)(ex.intl.string(ex.t["L/PwZf"]), ey.Ck.SUCCESS)));
        }, [t, s, r]);
    return (0, i.jsx)(g.K, {
        "aria-label": ex.intl.string(ex.t.WqhZss),
        onClick: l,
        icon: eD.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var eU = s(854818),
    eH = s(177366),
    eF = s(674019);
function eG(e) {
    let { product: t, isDarkText: s = !1, isOrbExclusive: n = !1 } = e,
        r = (function (e, t) {
            if (t) return ex.intl.string(ex.t["0TmQRG"]);
            switch (e) {
                case d.R.AVATAR_DECORATION:
                    return ex.intl.string(ex.t["7v0T9P"]);
                case d.R.PROFILE_EFFECT:
                    return ex.intl.string(ex.t.wR5wOo);
                case d.R.PROFILE_FRAME:
                    return ex.intl.string(ex.t.GWrZOd);
                case d.R.NAMEPLATE:
                    return ex.intl.string(ex.t.x5CoXR);
            }
            return null;
        })(t.type, n);
    return null === r
        ? null
        : (0, i.jsx)(N.E, { variant: "text-xxs/normal", className: l()([eF.kL, s ? eF.ap : eF.aK]), children: r });
}
var eV = s(203312),
    ew = s(878112),
    eW = s(140735),
    ez = s(252955);
let e$ = (e) => {
    let {
            price: { amount: t, currency: s },
            className: n,
            variant: r = "heading-md/semibold",
        } = e,
        a = (0, en.RS)(t, s);
    return (0, i.jsxs)(N.E, {
        variant: r,
        className: l()(ez.v, n),
        children: [
            (0, i.jsx)(eW.A, { children: ex.intl.format(ex.t["2CEGln"], { price: a }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: a }),
        ],
    });
};
var eK = s(219103),
    eq = s(469215);
function eZ(e) {
    let {
            product: t,
            hasShopDiscount: s,
            discountSource: n,
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
        return (0, i.jsx)("div", {
            className: l()(eq.kG, a),
            children: (0, i.jsx)(eK.x, { priceAmount: h.amount, priceCurrency: h.currency }),
        });
    let { showDiscountPrice: p, originalPrice: A, finalPrice: g } = m;
    return (0, i.jsxs)("div", {
        className: l()(eq.kG, a),
        children: [
            o ? null : (0, i.jsx)(e$, { price: A, className: eq.q9 }),
            (0, i.jsx)(eK.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: r,
                className: l()({ [eq.q9]: null == c }),
                discountIconConfig: p && null != d ? { displayMode: d, source: n ?? eo.D0.NITRO, size: u } : void 0,
                discountOfferAmount: c,
            }),
        ],
    });
}
var eJ = s(403581),
    eY = s(939249),
    eQ = s(532794),
    eX = s(788868),
    e0 = s(447806);
let e1 = (e) => {
    let { text: t, onTrackClick: s } = e,
        { analyticsLocations: r } = (0, B.Ay)(),
        l = n.useRef(null);
    return (0, i.jsx)(eY.D, {
        className: e0.F,
        innerRef: l,
        onClick: () => {
            s?.(eB.sH.SUBSCRIBE_NOW),
                (0, eQ.A)({ subscriptionTier: eX.pe.TIER_2, analyticsLocations: r, returnRef: l });
        },
        children: t,
    });
};
var e5 = s(805961);
function e7(e) {
    let { product: t, onTrackClick: s } = e,
        n = (0, eo.yt)(t, k.lid.PREMIUM_TIER_2);
    if (null == n) return null;
    let r = (0, en.RS)(n.amount, n.currency);
    return (0, i.jsxs)("div", {
        className: e5.k,
        children: [
            (0, i.jsx)(h.m, {
                text: ex.intl.string(ex.t.MPFyJ5),
                "aria-label": ex.intl.string(ex.t.X3Ekj8),
                children: (0, i.jsx)(eJ.t, { size: "md", color: "currentColor", className: e5.o }),
            }),
            (0, i.jsx)(N.E, {
                variant: "text-xs/medium",
                children: ex.intl.format(ex.t.Sv8iic, {
                    price: r,
                    subscribeNowHook: (e) => (0, i.jsx)(e1, { text: e, onTrackClick: s }),
                }),
            }),
        ],
    });
}
var e4 = s(572595),
    e2 = s(450481);
let e3 = (e) => {
    let { product: t, onSuccess: s, onTrackClick: n } = e,
        { handleUseNow: r, isApplying: l } = (0, e2.p)({ product: t, onSuccess: s });
    return (0, i.jsx)(E.$, {
        variant: "primary",
        onClick: () => {
            n?.(eB.sH.USE_NOW), r();
        },
        loading: l,
        text: ex.intl.string(ex.t.MAS7uK),
        fullWidth: !0,
    });
};
var e8 = s(478016),
    e9 = s(661531),
    e6 = s(224016),
    te = s(913521);
let tt = () => {
    let e = [ex.t.E1NP2x, ex.t.kpMomJ, ex.t.xT1Vfn, ex.t.myyAEr, ex.t.zTk8Ul];
    return (0, i.jsxs)("div", {
        className: te.kL,
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: te.ym,
            }),
            (0, i.jsx)(e6.A, { color: "white" }),
            (0, i.jsx)("div", {
                className: te.PX,
                children: e.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: te.UJ,
                            children: [
                                (0, i.jsx)(e8.U, { color: e9.A.colors.WHITE }),
                                (0, i.jsx)(N.E, {
                                    variant: "text-sm/medium",
                                    color: "always-white",
                                    children: ex.intl.string(e),
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
var ts = s(110629),
    ti = s(17928),
    tn = s(576052),
    tr = s(83554);
let tl = (e) => {
    let { user: t } = e,
        s = ei.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: n, ...r } = (0, ti.cf)([Z.A], () => Z.A.getPendingChanges()),
        l = (0, K.V7)({ userId: t.id, image: n });
    return (0, i.jsx)("div", {
        className: tr.k,
        children: (0, i.jsx)($.A, {
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
var ta = s(561769);
let tc = (e) => {
    let { skuId: t, overrideVariantIndex: s, className: n } = e,
        r = (0, ta.Vm)(t),
        l = (0, ec.Q)(r);
    return null != r && (0, ef.B1)(r)
        ? (0, i.jsx)(N.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: n,
              lineClamp: 1,
              children: r.variants[s ?? l].variantLabel,
          })
        : null;
};
var to = s(661847),
    td = s(846957),
    tu = s(818348),
    tm = s(752274);
function th(e) {
    let { orbPrice: t, isProductDisabled: s, hasSufficientOrbs: n } = e,
        r = s ? ex.intl.string(ex.t.wu4gyV) : ex.intl.string(ex.t.eFNRzU),
        l = s || !n;
    return (0, i.jsxs)("div", {
        className: tm.eg,
        children: [
            (0, i.jsx)("div", {
                className: tm.zR,
                children: (0, i.jsx)(N.E, { variant: "text-xs/normal", className: l ? tm.r9 : void 0, children: r }),
            }),
            (0, i.jsx)(eK.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? tm.r9 : void 0 }),
        ],
    });
}
function tx(e) {
    let {
            prices: t,
            hasShopDiscount: s,
            discountSource: n,
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
        : t[0].currency === tu.Yr.DISCORD_ORB
          ? (0, i.jsx)(th, { orbPrice: t[0], isProductDisabled: o, hasSufficientOrbs: a })
          : (0, i.jsxs)("div", {
                className: tm.eg,
                children: [
                    (0, i.jsxs)("div", {
                        className: tm.pw,
                        children: [
                            (0, i.jsx)(eZ, {
                                product: l,
                                discount: r,
                                hasShopDiscount: s,
                                discountSource: n,
                                hideStrikethroughPrice: !s || u,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: d,
                            }),
                            s || u ? null : (0, i.jsx)(e7, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === tu.Yr.DISCORD_ORB &&
                        (0, i.jsx)(eK.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: o || !a ? tm.r9 : void 0,
                        }),
                ],
            });
}
var tp = s(139146),
    tA = s(929283);
let tg = (e, t) => (e.type === d.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e);
var tj = s(525723),
    tN = s(212407),
    tR = s(347722),
    tE = s(935094),
    tv = s(57020),
    t_ = s(61750),
    tI = s(127157);
let tf = (e) => {
        let { item: t, product: s, user: n } = e,
            r = (0, eo.aw)(s),
            { firstAvatarDecoration: l } = (0, eN.f5)(s);
        switch (t.type) {
            case d.R.AVATAR_DECORATION:
                return (0, i.jsx)("div", {
                    className: r ? tI.X2 : tI.h1,
                    children: (0, i.jsx)(tA.i, { user: n, item: t, isHighlighted: !0 }),
                });
            case d.R.PROFILE_EFFECT:
                return (0, i.jsx)("div", {
                    className: r ? tI.ME : tI.sm,
                    children: (0, i.jsx)(e_.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case d.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: tI.ob, children: (0, i.jsx)(eI.A, { frame: t }) });
            case d.R.NAMEPLATE:
                return (0, i.jsx)("div", {
                    className: tI.Dz,
                    children: (0, i.jsx)(ev.A, {
                        className: tI.M4,
                        nameplate: t,
                        user: n,
                        nameplatePreviewSize: "large",
                        pendingAvatarDecoration: l,
                        isHighlighted: !0,
                        hideDecorators: !0,
                    }),
                });
            default:
                return null;
        }
    },
    tC = (e) => {
        let { product: t, user: s, activeSlide: n = 0 } = e,
            r = t.items.length;
        return (0, i.jsx)("div", {
            className: tI.g4,
            children: (0, i.jsx)(R.t, {
                activeSlide: String(n),
                children: t.items.map((e, n) => {
                    let l = String(n),
                        a = null != t.bundledProducts ? t.bundledProducts[n] : void 0,
                        c = `(${n + 1}/${r})`;
                    return (0, i.jsx)(
                        R.q,
                        {
                            id: l,
                            children: (0, i.jsxs)("div", {
                                className: tI.Kg,
                                children: [
                                    (0, i.jsx)(tf, { item: e, product: t, user: s }),
                                    (0, i.jsxs)(N.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: tI.gx,
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
    tO = (e) => {
        let { product: t, user: s, activeSlide: n } = e;
        return (0, eo.aw)(t)
            ? (0, i.jsx)(tC, { product: t, user: s, activeSlide: n })
            : (0, eB.pQ)(t.skuId)
              ? (0, i.jsx)(td.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, i.jsx)(tf, { item: t.items[0], product: t, user: s })
                : null;
    },
    tT = (e) => {
        let { skuId: t } = e;
        return (0, eB.EZ)(t)
            ? (0, i.jsx)(N.E, {
                  variant: "text-sm/normal",
                  className: tI.CU,
                  children: ex.intl.format(ex.t.Q1scdE, {
                      helpdeskArticle: es.A.getArticleURL(k.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    tk = (e) => {
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
                giftRecipient: R,
                giftingOrigin: O,
                onTrackClick: T,
            } = e,
            { analyticsLocations: b } = (0, B.Ay)(),
            { cardId: S, sessionId: P, tilePosition: D } = (0, el.uM)() ?? {},
            M = (0, z.L)(eX.PremiumTypes.TIER_2),
            U = (0, eo.xM)(s),
            { previewingVariantIndex: H, handleEntering: F, handleLeaving: G } = A,
            V = tg(t, H),
            $ = (0, ef.rb)(t, g);
        c()(null != $, "Selected product should not be null");
        let K = (0, eh.Do)("CollectiblesShopProductDetailsModal") && $.type === d.R.PROFILE_FRAME,
            Z = ei.Ay.canUseShopDiscounts(s) || K,
            J = (0, ej.h)(t),
            { isPurchased: ee, isPartiallyOwnedBundle: et } = (0, ej.h)($),
            { isDisabled: es, disabledReason: ec } = (0, eg.I)($.skuId),
            em = (0, eo.Zu)({ product: $, isPartiallyOwnedBundle: et, isPurchased: ee }),
            ep = (0, m.bG)([ea.A], () => ea.A.isClaiming === $?.skuId),
            eE = (0, y.Ay)(),
            ev = (0, x.M)(eE),
            e_ = (0, eo.G0)($),
            eI = (0, eo.yt)($, k.lid.DEFAULT),
            eC = eI?.amount === 0,
            { firstAvatarDecoration: eT } = (0, eN.f5)(V ?? $),
            ek = n.useMemo(() => (0, eo.fT)($, Z), [$, Z]),
            eS = (0, eO.VG)(t),
            eP = (0, tR.X)($),
            { enabled: ey } = (0, Q.Z)({ location: "collectibles_shop_product_details_modal" }),
            eD = eA($, !1),
            eL = (0, tj.V_)(t),
            eM = null != eL,
            eU = (t.variants?.length ?? 0) > 8,
            eH = (0, eu.W)("CollectiblesShopProductDetailsModal"),
            eF = o === eB.G2.ORBS && a ? ta.Hi.ORBS : eH ? ta.Hi.FIAT : void 0,
            eW = (0, ed.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: ez,
                isOrbExclusive: e$,
                hasSufficientOrbs: eK,
            } = (0, tv.F)({ product: $, hasShopDiscount: Z, hasDiscountOffer: eM, prioritizedCurrency: eF }),
            eq = (0, eR.A)({ location: "CollectiblesShopProductDetailsModal", product: $ }),
            eJ = n.useMemo(() => ez.some((e) => e.currency === tu.Yr.DISCORD_ORB), [ez]);
        (0, Y.W)({ disableFetch: !eJ });
        let eY = n.useCallback(() => {
            T(eB.sH.BUY_WITH_FIAT),
                (0, w.A)({ skuId: $.skuId, analyticsLocations: b, onClose: (e) => (e ? u() : (0, tu.tE)()) });
        }, [b, u, $.skuId, T]);
        n.useEffect(() => {
            if (null != eT) return (0, q.p)({ avatarDecoration: eT }), () => (0, q.p)({ avatarDecoration: void 0 });
        }, [eT]);
        let eQ = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                s = (0, i.jsx)(W.A, {
                    subscriptionTier: eX.pe.TIER_2,
                    fullWidth: !0,
                    buttonTextOverride: e,
                    onClick: () => {
                        T(eB.sH.UNLOCK_WITH_NITRO), (0, e4.M)();
                    },
                    onSubscribeModalClose: () => {
                        (0, e4.t)({
                            product: $,
                            category: r,
                            shouldCheckoutWithOrbs: a,
                            returnRef: p,
                            analyticsLocations: b,
                            tab: o,
                            giftRecipient: R,
                            giftingOrigin: O,
                            cardId: S,
                            sessionId: P,
                            tilePosition: D,
                        });
                    },
                });
            return t ? (0, i.jsx)(B.f5, { value: [...b, L.A.PROFILE_FRAMES_EA_MARKETING], children: s }) : s;
        };
        return (0, i.jsxs)("div", {
            className: tI.qA,
            children: [
                (0, i.jsx)("div", { className: tI.gn, children: (0, i.jsx)(eV.A, { category: r }) }),
                (0, i.jsx)(tO, { product: V ?? $, user: s, activeSlide: j }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: tI.h_,
                            children: [
                                K
                                    ? (0, i.jsx)("div", {
                                          className: tI.LM,
                                          children: (0, i.jsx)(ts.A, {
                                              location: "CollectiblesShopProductDetailsModal",
                                          }),
                                      })
                                    : (0, i.jsx)(eG, { product: $, isDarkText: !ev, isOrbExclusive: e$ }),
                                (0, i.jsx)(I.D, { variant: "heading-xl/extrabold", className: tI.v7, children: eS }),
                                (0, i.jsx)(N.E, { variant: "text-sm/normal", children: eD }),
                                (0, i.jsx)(tT, { skuId: $.skuId }),
                                J.isPurchased || J.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(eb, { className: tI.On, isPartiallyPurchased: et })
                                    : e_
                                      ? (0, i.jsx)(N.E, {
                                            variant: "text-md/semibold",
                                            className: tI.On,
                                            children: ex.intl.string(ex.t.rt69oo),
                                        })
                                      : ey
                                        ? (0, i.jsx)(tx, {
                                              prices: ez,
                                              product: $,
                                              hasShopDiscount: Z,
                                              discountSource: U,
                                              discount: ek,
                                              hasSufficientOrbs: eK,
                                              isProductDisabled: es,
                                              discountOfferAmount: eL,
                                              onTrackClick: T,
                                          })
                                        : e$
                                          ? null
                                          : (0, i.jsxs)("div", {
                                                className: tI.pw,
                                                children: [
                                                    (0, i.jsx)(eZ, {
                                                        product: $,
                                                        discount: ek,
                                                        hasShopDiscount: Z,
                                                        discountSource: U,
                                                        hideStrikethroughPrice: !Z || eM,
                                                        discountIconDisplayMode: "tooltip",
                                                        discountIconSize: "xs",
                                                        discountOfferAmount: eL,
                                                    }),
                                                    Z || eM ? null : (0, i.jsx)(e7, { product: $, onTrackClick: T }),
                                                ],
                                            }),
                            ],
                        }),
                        (0, ef.B1)(t) &&
                            (0, i.jsx)(f.M, {
                                children: (0, i.jsxs)("div", {
                                    className: l()(tI.Oj, { [tI.OJ]: eU }),
                                    children: [
                                        eU &&
                                            (0, i.jsx)(tc, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: H,
                                                className: tI.L$,
                                            }),
                                        (0, i.jsx)(to.A, {
                                            skuId: t.skuId,
                                            onVariantEnter: F,
                                            onVariantExit: G,
                                            wrap: !0,
                                        }),
                                        !eU &&
                                            (0, i.jsx)(tc, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: H,
                                                className: tI.L$,
                                            }),
                                    ],
                                }),
                            }),
                        null !== ec && (0, i.jsx)(N.E, { variant: "text-xs/normal", className: tI.H$, children: ec }),
                        (0, i.jsx)(C.B, {
                            direction: "vertical",
                            gap: 8,
                            children:
                                !e_ || M || eC
                                    ? em
                                        ? ee
                                            ? eP
                                                ? (0, i.jsxs)(_.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, i.jsx)(e3, { product: $, onSuccess: u, onTrackClick: T }),
                                                          (0, i.jsx)(ew.A, {
                                                              primary: !0,
                                                              product: $,
                                                              onSuccess: u,
                                                              giftRecipient: R,
                                                              giftingOrigin: O,
                                                              onTrackClick: T,
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(e3, { product: $, onSuccess: u, onTrackClick: T })
                                            : eq
                                              ? eQ(ex.intl.string(ex.t.IvmZVF), !0)
                                              : e_
                                                ? (0, i.jsx)(E.$, {
                                                      loading: ep,
                                                      loadingStartedLabel: ex.intl.string(ex.t["TYw+9s"]),
                                                      loadingFinishedLabel: ex.intl.string(ex.t.Pg1UP5),
                                                      onClick: async () => {
                                                          T(eB.sH.ADD_TO_COLLECTION),
                                                              await (0, er.iJ)($.skuId),
                                                              u(),
                                                              (0, t_.A)({
                                                                  product: $,
                                                                  analyticsLocations: b,
                                                                  purchaseType: eB.gs.PREMIUM_PURCHASE,
                                                              });
                                                      },
                                                      text: ex.intl.string(ex.t.zp6caO),
                                                      fullWidth: !0,
                                                  })
                                                : (0, i.jsx)(i.Fragment, {
                                                      children: ez.map((e, t) => {
                                                          let s,
                                                              n = 0 === t;
                                                          if (e.currency === tu.Yr.DISCORD_ORB) {
                                                              let t, s, r, l;
                                                              return (
                                                                  (t = es
                                                                      ? ex.intl.string(ex.t.cTdr3x)
                                                                      : ex.intl.string(ex.t.zqh7ZM)),
                                                                  (s = !eK || es),
                                                                  (r = ex.intl.formatToPlainString(ex.t.yi41qQ, {
                                                                      orbPrice: e.amount,
                                                                  })),
                                                                  (l = s ? `${r}, ${t}` : r),
                                                                  (0, i.jsx)(h.m, {
                                                                      position: "top",
                                                                      text: t,
                                                                      shouldShow: s,
                                                                      "aria-label": !1,
                                                                      children: (0, i.jsx)(E.$, {
                                                                          variant: n ? "primary" : "secondary",
                                                                          onClick: () => {
                                                                              T(eB.sH.BUY_WITH_ORBS),
                                                                                  (0, X.B4)({
                                                                                      skuId: $.skuId,
                                                                                      onComplete: (e) => {
                                                                                          (0, er.gB)(),
                                                                                              u(),
                                                                                              (0, t_.A)({
                                                                                                  product: $,
                                                                                                  analyticsLocations: b,
                                                                                                  itemConsumed:
                                                                                                      e
                                                                                                          ?.entitlements?.[0]
                                                                                                          ?.consumed,
                                                                                                  purchaseType:
                                                                                                      eB.gs.ORB,
                                                                                              });
                                                                                      },
                                                                                      analyticsLocations: b,
                                                                                  });
                                                                          },
                                                                          disabled: s,
                                                                          "aria-label": l,
                                                                          text: ex.intl.format(
                                                                              eW ? ex.t.JC15qj : ex.t.lOtBOI,
                                                                              {
                                                                                  orbPrice: e.amount,
                                                                                  orbIconHook: () =>
                                                                                      (0, i.jsx)(v.C, {
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
                                                                      case d.R.BUNDLE:
                                                                          return ex.intl.string(ex.t.V1AWw0);
                                                                      case d.R.PROFILE_EFFECT:
                                                                          return ex.intl.string(ex.t.kAeDcK);
                                                                      case d.R.NAMEPLATE:
                                                                          return ex.intl.string(ex.t.H3vhqU);
                                                                      case d.R.PROFILE_FRAME:
                                                                          return ex.intl.string(ex.t.BlSW1e);
                                                                      case d.R.AVATAR_DECORATION:
                                                                      default:
                                                                          return ex.intl.string(ex.t.AQ0Veg);
                                                                  }
                                                              })($)),
                                                              eM
                                                                  ? (s = ex.intl.formatToPlainString(ex.t["5U5RB5"], {
                                                                        discountOfferAmount: eL,
                                                                    }))
                                                                  : ey &&
                                                                    (s = ex.intl.formatToPlainString(ex.t["cNSL/j"], {
                                                                        price: (0, en.$g)(e.amount, e.currency),
                                                                    })),
                                                              (0, i.jsxs)(_.e, {
                                                                  wrap: !1,
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, i.jsx)(E.$, {
                                                                          variant: n ? "primary" : "secondary",
                                                                          onClick: eY,
                                                                          text: s,
                                                                          fullWidth: !0,
                                                                      }),
                                                                      eP &&
                                                                          (0, i.jsx)(ew.A, {
                                                                              primary: n,
                                                                              product: $,
                                                                              onSuccess: u,
                                                                              giftRecipient: R,
                                                                              giftingOrigin: O,
                                                                              onTrackClick: T,
                                                                          }),
                                                                  ],
                                                              })
                                                          );
                                                      }),
                                                  })
                                        : eP
                                          ? (0, i.jsx)(ew.A, {
                                                primary: !0,
                                                product: $,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: R,
                                                giftingOrigin: O,
                                                onTrackClick: T,
                                            })
                                          : null
                                    : eQ(ex.intl.string(ex.t.sEAnVH)),
                        }),
                        (0, i.jsx)(N.E, {
                            className: l()(tI.ed, !ev && tI.un),
                            variant: "text-xxs/normal",
                            children: e_ && !ee ? ex.intl.string(ex.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    tb = (e) => {
        let { user: t, innerClassName: s } = e;
        return (0, i.jsx)("div", {
            className: tI.mV,
            children: (0, i.jsx)(U.A, {
                avatar: (0, i.jsx)(O.eu, {
                    src: t.avatarSrc,
                    size: T._3.SIZE_32,
                    "aria-label": t.name,
                    status: k.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(tI.$L, s),
            }),
        });
    },
    tS = (e) => {
        let { user: t, nameplate: s, avatarDecoration: n } = e,
            r = (0, eE.Ov)();
        return (0, i.jsx)("div", {
            className: tI.nJ,
            role: "img",
            "aria-label": ex.intl.string(ex.t.SZeUdR),
            children: (0, i.jsxs)(f.M, {
                children: [
                    (0, i.jsx)(tb, { user: r.mallow, innerClassName: tI.ab }),
                    (0, i.jsxs)(N.E, {
                        variant: "text-sm/semibold",
                        className: tI.OS,
                        children: [ex.intl.string(ex.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, i.jsx)(tb, { user: r.phibi, innerClassName: tI.e9 }),
                    (0, i.jsx)("div", {
                        className: tI.mV,
                        children: (0, i.jsx)(ev.A, {
                            className: tI.M4,
                            innerClassName: tI.e9,
                            user: t,
                            nameplate: s,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: n,
                            hideDecorators: !0,
                        }),
                    }),
                    (0, i.jsx)(tb, { user: r.locke, innerClassName: tI.e9 }),
                    (0, i.jsxs)(N.E, {
                        variant: "text-sm/semibold",
                        className: tI.OS,
                        children: [ex.intl.string(ex.t["NG43/6"]), " - 12"],
                    }),
                    (0, i.jsx)(tb, { user: r.boom, innerClassName: tI.bD }),
                    (0, i.jsx)(tb, { user: r.cherry, innerClassName: tI.bD }),
                ],
            }),
        });
    },
    tP = (e) => {
        let { product: t, user: s, activeBundleSlide: n, isTransitioning: r } = e,
            a = (0, m.bG)([D.A], () => D.A.useReducedMotion),
            c = ei.Ay.canUsePremiumProfileCustomization(s),
            { pendingAvatar: o, ...u } = (0, m.cf)([Z.A], () => Z.A.getPendingChanges()),
            h = (0, K.V7)({ userId: s.id, image: o }),
            x = t.type === d.R.AVATAR_DECORATION,
            [p] = t.items,
            {
                firstAvatarDecoration: A,
                firstProfileEffect: g,
                firstNameplate: j,
                firstProfileFrame: N,
            } = (0, eN.f5)(t),
            R = null != g,
            E = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)($.A, {
                            ...u,
                            pendingAvatar: h,
                            user: s,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: A,
                            pendingProfileEffect: g,
                            pendingProfileFrame: N,
                            disabledInputs: !0,
                            hideMessageInput: !R,
                            hideCustomStatus: !0,
                            hideBioSection: x,
                            hideExampleButton: !0,
                            interactive: !1,
                            containerClassName: x ? tI.Bb : void 0,
                        }),
                        x && (0, i.jsx)(ty, { user: s }),
                    ],
                }),
            v = (e) => (0, i.jsx)(tS, { user: s, nameplate: e, avatarDecoration: A });
        if (t.type === d.R.BUNDLE) {
            if (!(0, eC.Wb)(t))
                return (0, i.jsx)("div", {
                    className: tI.RA,
                    children: (0, i.jsx)("div", { className: tI.bo, children: E() }),
                });
            {
                let e = n ?? 0,
                    s = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    o = c?.type !== s?.type && !a;
                return s.type === d.R.NAMEPLATE
                    ? (0, i.jsx)("div", { className: l()(tI.Zj, r && o ? tI.p2 : ""), children: v(s) })
                    : (0, i.jsx)("div", { className: l()(tI.Ak, r && o ? tI.p2 : ""), children: E() });
            }
        }
        return null != j
            ? (0, i.jsx)("div", { className: tI.Zj, children: v(j) })
            : (0, i.jsx)("div", { className: p?.type === d.R.AVATAR_DECORATION ? tI.RA : tI.Ak, children: E() });
    },
    ty = (e) => {
        let { user: t } = e,
            s = ((e) => {
                let { author: t } = e;
                return (0, H.rh)({
                    ...(0, F.Ay)({ author: t, channelId: "1337", content: ex.intl.string(ex.t.d5YwK5) }),
                    state: k.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": ex.intl.string(ex.t["TN+ZvB"]),
            children: (0, i.jsx)(f.M, {
                children: (0, i.jsxs)(b.Z, {
                    className: tI.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(V.A, { className: tI.G5, author: (0, G.p_)(s), message: s }, s.id),
                        (0, i.jsxs)("div", {
                            className: tI.lG,
                            children: [
                                (0, i.jsx)(S.U, { size: "md", color: "currentColor", className: tI.hq }),
                                (0, i.jsx)(P.n, { size: "md", color: "currentColor", className: tI.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    tD = (e) => {
        let {
                transitionState: t,
                onClose: s,
                product: r,
                category: a,
                returnRef: h,
                analyticsSource: x,
                analyticsLocations: R,
                shouldCheckoutWithOrbs: E,
                tab: v,
                giftRecipient: _,
                giftingOrigin: I,
            } = e,
            f = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            C = (0, tE.f)(r),
            { previewingVariantIndex: O } = C,
            T = (0, ec.Q)(r),
            b = tg(r, O),
            S = (0, ef.rb)(r, T);
        c()(null != S, "Selected product should not be null");
        let { analyticsLocations: P } = (0, B.Ay)([...R, L.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eH.Yr)(S.skuId);
        let y = (0, tN.U1)(a);
        n.useEffect(() => {
            null != f && (0, J.A)(f.id, f.getAvatarURL(void 0, 80));
        }, [f]);
        let D = n.useMemo(() => (0, eo.V6)(r.type, r.skuId), [r.type, r.skuId]);
        n.useEffect(() => {
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
            G = n.useMemo(() => (0, ef.v8)(r), [r]),
            V = (function (e) {
                let { skuId: t, productSkuIds: s, analyticsLocations: i } = e,
                    { cardId: r, sessionId: l } = (0, el.uM)() ?? {};
                return n.useCallback(
                    (e) => {
                        et.default.track(k.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                            sku_id: t,
                            cta: e,
                            shop_session_id: l,
                            card_id: r,
                            product_sku_ids: s,
                            location_stack: i,
                        });
                    },
                    [t, i, r, s, l],
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
            z = (0, tj.$R)(r),
            $ = z?.amount,
            K = null != $ && (z?.discountId === eX.eR || z?.discountId === eX.Qz),
            { activeSlide: q, isTransitioning: Z } = (function (e) {
                let { slideCount: t, intervalMs: s = 3e3 } = e,
                    [i, r] = (0, n.useState)(0),
                    [l, a] = (0, n.useState)(!1),
                    c = (0, n.useCallback)(
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
                    (0, n.useEffect)(() => {
                        if (t <= 1) return;
                        let e = setInterval(() => {
                            c((i + 1) % t);
                        }, s);
                        return () => clearInterval(e);
                    }, [t, s, i, c]),
                    { activeSlide: i, isTransitioning: l }
                );
            })({ slideCount: n.useMemo(() => ((0, eo.aw)(S) ? S.items.length : 0), [S]), intervalMs: 5e3 }),
            Y = (0, em.c)("product_details_modal");
        return null != f && (r.skuId !== u.j.PREMIUM_TIER_2_1_DAY || Y)
            ? (0, i.jsx)(B.f5, {
                  value: P,
                  children: (0, i.jsxs)(A.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: tI.CR,
                      returnRef: h,
                      transitionState: t,
                      size: A.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, i.jsxs)(A.$m, {
                              "data-migration-pending": !0,
                              className: tI.jE,
                              children: [
                                  (0, i.jsx)(tk, {
                                      user: f,
                                      product: r,
                                      category: a,
                                      onClose: s,
                                      previewingVariantIndexProps: C,
                                      selectedVariantIndex: T,
                                      shouldCheckoutWithOrbs: E,
                                      tab: v,
                                      activeBundleSlide: q,
                                      giftRecipient: _?.id !== f.id ? _ : void 0,
                                      giftingOrigin: _?.id !== f.id ? I : void 0,
                                      onTrackClick: V,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: l()(
                                          tI.i1,
                                          (0, eB.EZ)(S.skuId)
                                              ? tI.bF
                                              : S.type === d.R.AVATAR_DECORATION
                                                ? tI.Jq
                                                : tI.eF,
                                      ),
                                      style: { backgroundImage: `url(${y})` },
                                      children: [
                                          (0, eB.pQ)(r.skuId)
                                              ? r.skuId === eB.Dp.ORB_PROFILE_BADGE
                                                  ? w || W
                                                      ? null
                                                      : (0, i.jsx)(tl, { user: f })
                                                  : (0, eB.EZ)(r.skuId)
                                                    ? (0, i.jsx)(tt, {})
                                                    : (0, i.jsx)(td.B, { product: r, className: tI.Ms })
                                              : (0, i.jsx)(tP, {
                                                    user: f,
                                                    product: b ?? S,
                                                    activeBundleSlide: q,
                                                    isTransitioning: Z,
                                                }),
                                          (0, i.jsxs)("div", {
                                              className: tI.VG,
                                              children: [
                                                  (0, i.jsx)(tp.R, {
                                                      product: r,
                                                      selectedVariantIndex: T,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: V,
                                                  }),
                                                  (0, i.jsx)(eM, { skuId: S.skuId, tab: v, onTrackClick: V }),
                                                  (0, i.jsx)(g.K, {
                                                      "aria-label": ex.intl.string(ex.t.cpT0Cq),
                                                      onClick: () => {
                                                          V(eB.sH.CLOSE_DETAIL), s();
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
                          K &&
                              (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsxs)(A.jl, {
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
                                                  (0, i.jsx)(N.E, {
                                                      variant: "text-sm/semibold",
                                                      className: tI.Q2,
                                                      children: ex.intl.format(ex.t["78ph4b"], {
                                                          discountOfferAmount: $,
                                                      }),
                                                  }),
                                                  z?.expiresAt != null && (0, i.jsx)(eU.e, { endDate: z.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              })
            : null;
    };
