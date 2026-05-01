s.d(t, { default: () => tP });
var i = s(627968),
    n = s(64700),
    r = s(503698),
    l = s.n(r),
    a = s(284009),
    c = s.n(a),
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
    R = s(534514),
    C = s(247928),
    k = s(331322),
    _ = s(97808),
    O = s(778712),
    T = s(652215),
    S = s(359778),
    b = s(245604),
    y = s(460905),
    P = s(736653),
    D = s(775602),
    L = s(793574),
    M = s(688810),
    B = s(139286),
    F = s(262295),
    U = s(320095),
    w = s(963852),
    H = s(763754),
    V = s(20851),
    W = s(44120),
    z = s(465794),
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
    el = s(440938),
    ea = s(4227),
    ec = s(298072),
    ed = s(993408),
    eo = s(640634),
    eu = s(940980),
    em = s(13875);
s(321073);
var ex = s(985018);
let eh = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (t) return ex.intl.formatToPlainString(ex.t["/0Yndu"], { num: e.bundledProducts?.length });
        let s = e.bundledProducts ?? [],
            i = [],
            n = !1;
        for (let e of s)
            switch (e.type) {
                case o.R.AVATAR_DECORATION:
                    i.push(ex.intl.formatToPlainString(ex.t.Ntv9Jt, { itemName: e.name }));
                    break;
                case o.R.PROFILE_EFFECT:
                    i.push(ex.intl.formatToPlainString(ex.t["3Y8q7a"], { itemName: e.name }));
                    break;
                case o.R.NAMEPLATE:
                    i.push(ex.intl.formatToPlainString(ex.t["2keXky"], { itemName: e.name })), (n = !0);
            }
        if (n) {
            let e = i.join(", ").replace(/, ([^,]*)$/, " & $1");
            return ex.intl.formatToPlainString(ex.t.Ofrqj6, { joinedItems: e });
        }
        let r = i.join(" & ");
        return ex.intl.formatToPlainString(ex.t.Ofrqj6, { joinedItems: r });
    },
    ep = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (0, n.useMemo)(() => {
            if (null != e && null != e.summary && "" !== e.summary) {
                if (e.type === o.R.BUNDLE && e.summary.includes("{joinedItems}")) {
                    let s = eh(e, t);
                    return e.summary.replace("{joinedItems}", s);
                }
                return e.summary;
            }
            switch (e?.type) {
                case o.R.AVATAR_DECORATION:
                    return ex.intl.string(ex.t["3lv7q2"]);
                case o.R.PROFILE_EFFECT:
                    return ex.intl.string(ex.t.VhJL72);
                case o.R.NAMEPLATE:
                    return ex.intl.string(ex.t.ik37EZ);
                case o.R.PROFILE_FRAME:
                    return ex.intl.string(ex.t.fWzWPp);
                case o.R.BUNDLE:
                    return eh(e, t);
                default:
                    return "";
            }
        }, [e, t]);
    };
var ej = s(740076),
    eg = s(466459),
    eA = s(442759),
    ev = s(395068),
    eE = s(780898),
    eI = s(344346),
    eN = s(139136),
    ef = s(395744),
    eR = s(623373),
    eC = s(660653),
    ek = s(536572),
    e_ = s(885574),
    eO = s(401231);
let eT = (e) => {
    let { className: t, isPartiallyPurchased: s } = e;
    return s
        ? (0, i.jsx)(x.m, {
              position: "top",
              align: "left",
              text: ex.intl.string(ex.t.y1VWkZ),
              children: (0, i.jsxs)("div", {
                  className: l()(eO.GX, t),
                  children: [
                      (0, i.jsx)("span", {
                          className: eO.P0,
                          children: (0, i.jsx)(e_.m, { size: "md", color: "currentColor", className: eO.G }),
                      }),
                      (0, i.jsx)(v.E, { variant: "text-md/semibold", children: ex.intl.string(ex.t.BEjTij) }),
                  ],
              }),
          })
        : (0, i.jsx)(v.E, { variant: "text-md/semibold", className: t, children: ex.intl.string(ex.t["6cfuDj"]) });
};
var eS = s(691540),
    eb = s(857250),
    ey = s(97483),
    eP = s(173936),
    eD = s(957565),
    eL = s(758836);
function eM(e) {
    let { skuId: t, tab: s, onTrackClick: r } = e,
        l = n.useCallback(() => {
            et.default.track(T.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }), r?.(eL.sH.COPY_LINK);
            let e = `${location.protocol}//${location.host}${T.BVt.COLLECTIBLES_SHOP}${((0, eL.cw))(s) ? `?tab=${s}` : ""}#itemSkuId=${t}`;
            (0, eD.C)(e, () => (0, eS.P0)((0, eb.o)(ex.intl.string(ex.t["L/PwZf"]), ey.Ck.SUCCESS)));
        }, [t, s, r]);
    return (0, i.jsx)(g.K, {
        "aria-label": ex.intl.string(ex.t.WqhZss),
        onClick: l,
        icon: eP.q,
        variant: "overlay-secondary",
        size: "sm",
    });
}
var eB = s(854818),
    eF = s(177366),
    eU = s(674019);
function ew(e) {
    let { product: t, isDarkText: s = !1, isOrbExclusive: n = !1 } = e,
        r = (function (e, t) {
            if (t) return ex.intl.string(ex.t["0TmQRG"]);
            switch (e) {
                case o.R.AVATAR_DECORATION:
                    return ex.intl.string(ex.t["7v0T9P"]);
                case o.R.PROFILE_EFFECT:
                    return ex.intl.string(ex.t.wR5wOo);
                case o.R.PROFILE_FRAME:
                    return ex.intl.string(ex.t.GWrZOd);
                case o.R.NAMEPLATE:
                    return ex.intl.string(ex.t.x5CoXR);
            }
            return null;
        })(t.type, n);
    return null === r
        ? null
        : (0, i.jsx)(v.E, { variant: "text-xxs/normal", className: l()([eU.kL, s ? eU.ap : eU.aK]), children: r });
}
var eH = s(203312),
    eV = s(878112),
    eW = s(140735),
    ez = s(252955);
let e$ = (e) => {
    let {
            price: { amount: t, currency: s },
            className: n,
            variant: r = "heading-md/semibold",
        } = e,
        a = (0, en.RS)(t, s);
    return (0, i.jsxs)(v.E, {
        variant: r,
        className: l()(ez.v, n),
        children: [
            (0, i.jsx)(eW.A, { children: ex.intl.format(ex.t["2CEGln"], { price: a }) }),
            (0, i.jsx)("span", { "aria-hidden": !0, children: a }),
        ],
    });
};
var eG = s(219103),
    eq = s(469215);
function eY(e) {
    let {
            product: t,
            hasShopDiscount: s,
            discountSource: n,
            discount: r,
            className: a,
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
            className: l()(eq.kG, a),
            children: (0, i.jsx)(eG.x, { priceAmount: x.amount, priceCurrency: x.currency }),
        });
    let { showDiscountPrice: p, originalPrice: j, finalPrice: g } = m;
    return (0, i.jsxs)("div", {
        className: l()(eq.kG, a),
        children: [
            d ? null : (0, i.jsx)(e$, { price: j, className: eq.q9 }),
            (0, i.jsx)(eG.x, {
                priceAmount: g.amount,
                priceCurrency: g.currency,
                discount: r,
                className: l()({ [eq.q9]: null == c }),
                discountIconConfig: p && null != o ? { displayMode: o, source: n ?? ed.D0.NITRO, size: u } : void 0,
                discountOfferAmount: c,
            }),
        ],
    });
}
var eZ = s(403581),
    eJ = s(939249),
    eK = s(532794),
    eQ = s(788868),
    eX = s(447806);
let e0 = (e) => {
    let { text: t, onTrackClick: s } = e,
        { analyticsLocations: r } = (0, M.Ay)(),
        l = n.useRef(null);
    return (0, i.jsx)(eJ.D, {
        className: eX.F,
        innerRef: l,
        onClick: () => {
            s?.(eL.sH.SUBSCRIBE_NOW),
                (0, eK.A)({ subscriptionTier: eQ.pe.TIER_2, analyticsLocations: r, returnRef: l });
        },
        children: t,
    });
};
var e1 = s(805961);
function e5(e) {
    let { product: t, onTrackClick: s } = e,
        n = (0, ed.yt)(t, T.lid.PREMIUM_TIER_2);
    if (null == n) return null;
    let r = (0, en.RS)(n.amount, n.currency);
    return (0, i.jsxs)("div", {
        className: e1.k,
        children: [
            (0, i.jsx)(x.m, {
                text: ex.intl.string(ex.t.MPFyJ5),
                "aria-label": ex.intl.string(ex.t.X3Ekj8),
                children: (0, i.jsx)(eZ.t, { size: "md", color: "currentColor", className: e1.o }),
            }),
            (0, i.jsx)(v.E, {
                variant: "text-xs/medium",
                children: ex.intl.format(ex.t.Sv8iic, {
                    price: r,
                    subscribeNowHook: (e) => (0, i.jsx)(e0, { text: e, onTrackClick: s }),
                }),
            }),
        ],
    });
}
var e7 = s(572595),
    e3 = s(450481);
let e2 = (e) => {
    let { product: t, onSuccess: s, onTrackClick: n } = e,
        { handleUseNow: r, isApplying: l } = (0, e3.p)({ product: t, onSuccess: s });
    return (0, i.jsx)(I.$, {
        variant: "primary",
        onClick: () => {
            n?.(eL.sH.USE_NOW), r();
        },
        loading: l,
        text: ex.intl.string(ex.t.MAS7uK),
        fullWidth: !0,
    });
};
var e8 = s(478016),
    e4 = s(661531),
    e9 = s(224016),
    e6 = s(913521);
let te = () => {
    let e = [ex.t.E1NP2x, ex.t.kpMomJ, ex.t.xT1Vfn, ex.t.myyAEr, ex.t.zTk8Ul];
    return (0, i.jsxs)("div", {
        className: e6.kL,
        children: [
            (0, i.jsx)("img", {
                src: "https://cdn.discordapp.com/assets/content/81644099db353c3ea7cefa334f8d298d06b768a68a349de663d2151fd01eddc7.png",
                alt: "",
                className: e6.ym,
            }),
            (0, i.jsx)(e9.A, { color: "white" }),
            (0, i.jsx)("div", {
                className: e6.PX,
                children: e.map((e, t) =>
                    (0, i.jsxs)(
                        "div",
                        {
                            className: e6.UJ,
                            children: [
                                (0, i.jsx)(e8.U, { color: e4.A.colors.WHITE }),
                                (0, i.jsx)(v.E, {
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
var tt = s(110629),
    ts = s(17928),
    ti = s(132198),
    tn = s(83554);
let tr = (e) => {
    let { user: t } = e,
        s = ei.Ay.canUsePremiumProfileCustomization(t),
        { pendingAvatar: n, ...r } = (0, ts.cf)([Z.A], () => Z.A.getPendingChanges()),
        l = (0, q.V7)({ userId: t.id, image: n });
    return (0, i.jsx)("div", {
        className: tn.k,
        children: (0, i.jsx)(G.A, {
            ...r,
            pendingAvatar: l,
            user: t,
            pendingBadges: [(0, ti._)()],
            canUsePremiumCustomization: s,
            disabledInputs: !0,
            hideExampleButton: !0,
        }),
    });
};
var tl = s(561769);
let ta = (e) => {
    let { skuId: t, overrideVariantIndex: s, className: n } = e,
        r = (0, tl.Vm)(t),
        l = (0, ec.Q)(r);
    return null != r && (0, eR.B1)(r)
        ? (0, i.jsx)(v.E, {
              variant: "text-xs/medium",
              color: "text-subtle",
              className: n,
              lineClamp: 1,
              children: r.variants[s ?? l].variantLabel,
          })
        : null;
};
var tc = s(661847),
    td = s(846957),
    to = s(818348),
    tu = s(752274);
function tm(e) {
    let { orbPrice: t, isProductDisabled: s, hasSufficientOrbs: n } = e,
        r = s ? ex.intl.string(ex.t.wu4gyV) : ex.intl.string(ex.t.eFNRzU),
        l = s || !n;
    return (0, i.jsxs)("div", {
        className: tu.eg,
        children: [
            (0, i.jsx)("div", {
                className: tu.zR,
                children: (0, i.jsx)(v.E, { variant: "text-xs/normal", className: l ? tu.r9 : void 0, children: r }),
            }),
            (0, i.jsx)(eG.x, { priceAmount: t.amount, priceCurrency: t.currency, className: l ? tu.r9 : void 0 }),
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
            isProductDisabled: d,
            discountOfferAmount: o,
        } = e,
        u = null != o;
    return 0 === t.length
        ? null
        : t[0].currency === to.Yr.DISCORD_ORB
          ? (0, i.jsx)(tm, { orbPrice: t[0], isProductDisabled: d, hasSufficientOrbs: a })
          : (0, i.jsxs)("div", {
                className: tu.eg,
                children: [
                    (0, i.jsxs)("div", {
                        className: tu.pw,
                        children: [
                            (0, i.jsx)(eY, {
                                product: l,
                                discount: r,
                                hasShopDiscount: s,
                                discountSource: n,
                                hideStrikethroughPrice: !s || u,
                                discountIconDisplayMode: "tooltip",
                                discountIconSize: "xs",
                                discountOfferAmount: o,
                            }),
                            s || u ? null : (0, i.jsx)(e5, { product: l, onTrackClick: c }),
                        ],
                    }),
                    t.length > 1 &&
                        t[1].currency === to.Yr.DISCORD_ORB &&
                        (0, i.jsx)(eG.x, {
                            priceAmount: t[1].amount,
                            priceCurrency: t[1].currency,
                            className: d || !a ? tu.r9 : void 0,
                        }),
                ],
            });
}
var th = s(139146),
    tp = s(929283);
let tj = (e, t) => (e.type === o.R.VARIANTS_GROUP ? (null != t ? e.variants?.[t] : void 0) : e);
var tg = s(525723),
    tA = s(212407),
    tv = s(347722),
    tE = s(935094),
    tI = s(57020),
    tN = s(61750),
    tf = s(127157);
let tR = (e) => {
        let { item: t, product: s, user: n } = e,
            r = (0, ed.aw)(s),
            { firstAvatarDecoration: l } = (0, eA.f5)(s);
        switch (t.type) {
            case o.R.AVATAR_DECORATION:
                return (0, i.jsx)("div", {
                    className: r ? tf.X2 : tf.h1,
                    children: (0, i.jsx)(tp.i, { user: n, item: t, isHighlighted: !0 }),
                });
            case o.R.PROFILE_EFFECT:
                return (0, i.jsx)("div", {
                    className: r ? tf.ME : tf.sm,
                    children: (0, i.jsx)(eN.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case o.R.PROFILE_FRAME:
                return (0, i.jsx)("div", { className: tf.ob, children: (0, i.jsx)(ef.A, { frame: t }) });
            case o.R.NAMEPLATE:
                return (0, i.jsx)("div", {
                    className: tf.Dz,
                    children: (0, i.jsx)(eI.A, {
                        className: tf.M4,
                        nameplate: t,
                        user: n,
                        nameplatePreviewSize: "large",
                        pendingAvatarDecoration: l,
                        isHighlighted: !0,
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
            className: tf.g4,
            children: (0, i.jsx)(E.t, {
                activeSlide: String(n),
                children: t.items.map((e, n) => {
                    let l = String(n),
                        a = null != t.bundledProducts ? t.bundledProducts[n] : void 0,
                        c = `(${n + 1}/${r})`;
                    return (0, i.jsx)(
                        E.q,
                        {
                            id: l,
                            children: (0, i.jsxs)("div", {
                                className: tf.Kg,
                                children: [
                                    (0, i.jsx)(tR, { item: e, product: t, user: s }),
                                    (0, i.jsxs)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: tf.gx,
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
    tk = (e) => {
        let { product: t, user: s, activeSlide: n } = e;
        return (0, ed.aw)(t)
            ? (0, i.jsx)(tC, { product: t, user: s, activeSlide: n })
            : (0, eL.pQ)(t.skuId)
              ? (0, i.jsx)(td.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, i.jsx)(tR, { item: t.items[0], product: t, user: s })
                : null;
    },
    t_ = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, i.jsx)(v.E, {
                  variant: "text-sm/normal",
                  className: tf.CU,
                  children: ex.intl.format(ex.t.Q1scdE, {
                      helpdeskArticle: es.A.getArticleURL(T.MVz.FRACTIONAL_PREMIUM_ABOUT),
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
            { cardId: b, sessionId: y, tilePosition: D } = (0, el.uM)() ?? {},
            L = (0, $.L)(eQ.PremiumTypes.TIER_2),
            B = (0, ed.xM)(s),
            { previewingVariantIndex: F, handleEntering: U, handleLeaving: w } = j,
            H = tj(t, F),
            V = (0, eR.rb)(t, g);
        c()(null != V, "Selected product should not be null");
        let G = (0, em.Do)("CollectiblesShopProductDetailsModal") && V.type === o.R.PROFILE_FRAME,
            q = ei.Ay.canUseShopDiscounts(s) || G,
            Z = (0, eg.h)(t),
            { isPurchased: J, isPartiallyOwnedBundle: ee } = (0, eg.h)(V),
            { isDisabled: et, disabledReason: es } = (0, ej.I)(V.skuId),
            ec = (0, ed.Zu)({ product: V, isPartiallyOwnedBundle: ee, isPurchased: J }),
            eh = (0, m.bG)([ea.A], () => ea.A.isClaiming === V?.skuId),
            eE = (0, P.Ay)(),
            eI = (0, h.M)(eE),
            eN = (0, ed.G0)(V),
            ef = (0, ed.yt)(V, T.lid.DEFAULT),
            eC = ef?.amount === 0,
            { firstAvatarDecoration: e_ } = (0, eA.f5)(H ?? V),
            eO = n.useMemo(() => (0, ed.fT)(V, q), [V, q]),
            eS = (0, ek.VG)(t),
            eb = (0, tv.X)(V),
            { enabled: ey } = (0, Q.Z)({ location: "collectibles_shop_product_details_modal" }),
            eP = ep(V, !1),
            eD = (0, tg.V_)(t),
            eM = null != eD,
            eB = (t.variants?.length ?? 0) > 8,
            eF = (0, eu.W)("CollectiblesShopProductDetailsModal"),
            eU = d === eL.G2.ORBS && a ? tl.Hi.ORBS : eF ? tl.Hi.FIAT : void 0,
            eW = (0, eo.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: ez,
                isOrbExclusive: e$,
                hasSufficientOrbs: eG,
            } = (0, tI.F)({ product: V, hasShopDiscount: q, hasDiscountOffer: eM, prioritizedCurrency: eU }),
            eq = (0, ev.A)({ location: "CollectiblesShopProductDetailsModal", product: V }),
            eZ = n.useMemo(() => ez.some((e) => e.currency === to.Yr.DISCORD_ORB), [ez]);
        (0, K.W)({ disableFetch: !eZ });
        let eJ = n.useCallback(() => {
            O(eL.sH.BUY_WITH_FIAT),
                (0, W.A)({ skuId: V.skuId, analyticsLocations: S, onClose: (e) => (e ? u() : (0, to.tE)()) });
        }, [S, u, V.skuId, O]);
        n.useEffect(() => {
            if (null != e_) return (0, Y.p)({ avatarDecoration: e_ }), () => (0, Y.p)({ avatarDecoration: void 0 });
        }, [e_]);
        let eK = (e) =>
            (0, i.jsx)(z.A, {
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
                        analyticsLocations: S,
                        tab: d,
                        giftRecipient: E,
                        giftingOrigin: _,
                        cardId: b,
                        sessionId: y,
                        tilePosition: D,
                    });
                },
            });
        return (0, i.jsxs)("div", {
            className: tf.qA,
            children: [
                (0, i.jsx)("div", { className: tf.gn, children: (0, i.jsx)(eH.A, { category: r }) }),
                (0, i.jsx)(tk, { product: H ?? V, user: s, activeSlide: A }),
                (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsxs)("div", {
                            className: tf.h_,
                            children: [
                                G
                                    ? (0, i.jsx)("div", {
                                          className: tf.LM,
                                          children: (0, i.jsx)(tt.A, {
                                              location: "CollectiblesShopProductDetailsModal",
                                          }),
                                      })
                                    : (0, i.jsx)(ew, { product: V, isDarkText: !eI, isOrbExclusive: e$ }),
                                (0, i.jsx)(R.D, { variant: "heading-xl/extrabold", className: tf.v7, children: eS }),
                                (0, i.jsx)(v.E, { variant: "text-sm/normal", children: eP }),
                                (0, i.jsx)(t_, { skuId: V.skuId }),
                                Z.isPurchased || Z.isPartiallyOwnedBundle
                                    ? (0, i.jsx)(eT, { className: tf.On, isPartiallyPurchased: ee })
                                    : eN
                                      ? (0, i.jsx)(v.E, {
                                            variant: "text-md/semibold",
                                            className: tf.On,
                                            children: ex.intl.string(ex.t.rt69oo),
                                        })
                                      : ey
                                        ? (0, i.jsx)(tx, {
                                              prices: ez,
                                              product: V,
                                              hasShopDiscount: q,
                                              discountSource: B,
                                              discount: eO,
                                              hasSufficientOrbs: eG,
                                              isProductDisabled: et,
                                              discountOfferAmount: eD,
                                              onTrackClick: O,
                                          })
                                        : e$
                                          ? null
                                          : (0, i.jsxs)("div", {
                                                className: tf.pw,
                                                children: [
                                                    (0, i.jsx)(eY, {
                                                        product: V,
                                                        discount: eO,
                                                        hasShopDiscount: q,
                                                        discountSource: B,
                                                        hideStrikethroughPrice: !q || eM,
                                                        discountIconDisplayMode: "tooltip",
                                                        discountIconSize: "xs",
                                                        discountOfferAmount: eD,
                                                    }),
                                                    q || eM ? null : (0, i.jsx)(e5, { product: V, onTrackClick: O }),
                                                ],
                                            }),
                            ],
                        }),
                        (0, eR.B1)(t) &&
                            (0, i.jsx)(C.M, {
                                children: (0, i.jsxs)("div", {
                                    className: l()(tf.Oj, { [tf.OJ]: eB }),
                                    children: [
                                        eB &&
                                            (0, i.jsx)(ta, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: F,
                                                className: tf.L$,
                                            }),
                                        (0, i.jsx)(tc.A, {
                                            skuId: t.skuId,
                                            onVariantEnter: U,
                                            onVariantExit: w,
                                            wrap: !0,
                                        }),
                                        !eB &&
                                            (0, i.jsx)(ta, {
                                                skuId: t.skuId,
                                                overrideVariantIndex: F,
                                                className: tf.L$,
                                            }),
                                    ],
                                }),
                            }),
                        null !== es && (0, i.jsx)(v.E, { variant: "text-xs/normal", className: tf.H$, children: es }),
                        (0, i.jsx)(k.B, {
                            direction: "vertical",
                            gap: 8,
                            children:
                                !eN || L || eC
                                    ? ec
                                        ? J
                                            ? eb
                                                ? (0, i.jsxs)(f.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, i.jsx)(e2, { product: V, onSuccess: u, onTrackClick: O }),
                                                          (0, i.jsx)(eV.A, {
                                                              primary: !0,
                                                              product: V,
                                                              onSuccess: u,
                                                              giftRecipient: E,
                                                              giftingOrigin: _,
                                                              onTrackClick: O,
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(e2, { product: V, onSuccess: u, onTrackClick: O })
                                            : eq
                                              ? eK(ex.intl.string(ex.t.sEAnVH))
                                              : eN
                                                ? (0, i.jsx)(I.$, {
                                                      loading: eh,
                                                      loadingStartedLabel: ex.intl.string(ex.t["TYw+9s"]),
                                                      loadingFinishedLabel: ex.intl.string(ex.t.Pg1UP5),
                                                      onClick: async () => {
                                                          O(eL.sH.ADD_TO_COLLECTION),
                                                              await (0, er.iJ)(V.skuId),
                                                              u(),
                                                              (0, tN.A)({
                                                                  product: V,
                                                                  analyticsLocations: S,
                                                                  purchaseType: eL.gs.PREMIUM_PURCHASE,
                                                              });
                                                      },
                                                      text: ex.intl.string(ex.t.zp6caO),
                                                      fullWidth: !0,
                                                  })
                                                : (0, i.jsx)(i.Fragment, {
                                                      children: ez.map((e, t) => {
                                                          let s,
                                                              n = 0 === t;
                                                          if (e.currency === to.Yr.DISCORD_ORB) {
                                                              let t, s, r, l;
                                                              return (
                                                                  (t = et
                                                                      ? ex.intl.string(ex.t.cTdr3x)
                                                                      : ex.intl.string(ex.t.zqh7ZM)),
                                                                  (s = !eG || et),
                                                                  (r = ex.intl.formatToPlainString(ex.t.yi41qQ, {
                                                                      orbPrice: e.amount,
                                                                  })),
                                                                  (l = s ? `${r}, ${t}` : r),
                                                                  (0, i.jsx)(x.m, {
                                                                      position: "top",
                                                                      text: t,
                                                                      shouldShow: s,
                                                                      "aria-label": !1,
                                                                      children: (0, i.jsx)(I.$, {
                                                                          variant: n ? "primary" : "secondary",
                                                                          onClick: () => {
                                                                              O(eL.sH.BUY_WITH_ORBS),
                                                                                  (0, X.B4)({
                                                                                      skuId: V.skuId,
                                                                                      onCheckoutSuccess: (e) => {
                                                                                          let { entitlements: t } = e;
                                                                                          (0, er.gB)(),
                                                                                              u(),
                                                                                              (0, tN.A)({
                                                                                                  product: V,
                                                                                                  analyticsLocations: S,
                                                                                                  itemConsumed:
                                                                                                      t[0]?.consumed,
                                                                                                  purchaseType:
                                                                                                      eL.gs.ORB,
                                                                                              });
                                                                                      },
                                                                                      analyticsLocations: S,
                                                                                  });
                                                                          },
                                                                          disabled: s,
                                                                          "aria-label": l,
                                                                          text: ex.intl.format(
                                                                              eW ? ex.t.JC15qj : ex.t.lOtBOI,
                                                                              {
                                                                                  orbPrice: e.amount,
                                                                                  orbIconHook: () =>
                                                                                      (0, i.jsx)(N.C, {
                                                                                          className: tf.fN,
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
                                                                          return ex.intl.string(ex.t.V1AWw0);
                                                                      case o.R.PROFILE_EFFECT:
                                                                          return ex.intl.string(ex.t.kAeDcK);
                                                                      case o.R.NAMEPLATE:
                                                                          return ex.intl.string(ex.t.H3vhqU);
                                                                      case o.R.PROFILE_FRAME:
                                                                          return ex.intl.string(ex.t.BlSW1e);
                                                                      case o.R.AVATAR_DECORATION:
                                                                      default:
                                                                          return ex.intl.string(ex.t.AQ0Veg);
                                                                  }
                                                              })(V)),
                                                              eM
                                                                  ? (s = ex.intl.formatToPlainString(ex.t["5U5RB5"], {
                                                                        discountOfferAmount: eD,
                                                                    }))
                                                                  : ey &&
                                                                    (s = ex.intl.formatToPlainString(ex.t["cNSL/j"], {
                                                                        price: (0, en.$g)(e.amount, e.currency),
                                                                    })),
                                                              (0, i.jsxs)(f.e, {
                                                                  wrap: !1,
                                                                  fullWidth: !0,
                                                                  children: [
                                                                      (0, i.jsx)(I.$, {
                                                                          variant: n ? "primary" : "secondary",
                                                                          onClick: eJ,
                                                                          text: s,
                                                                          fullWidth: !0,
                                                                      }),
                                                                      eb &&
                                                                          (0, i.jsx)(eV.A, {
                                                                              primary: n,
                                                                              product: V,
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
                                        : eb
                                          ? (0, i.jsx)(eV.A, {
                                                primary: !0,
                                                product: V,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: E,
                                                giftingOrigin: _,
                                                onTrackClick: O,
                                            })
                                          : null
                                    : eK(ex.intl.string(ex.t.sEAnVH)),
                        }),
                        (0, i.jsx)(v.E, {
                            className: l()(tf.ed, !eI && tf.un),
                            variant: "text-xxs/normal",
                            children: eN && !J ? ex.intl.string(ex.t.nKdAlO) : null,
                        }),
                    ],
                }),
            ],
        });
    },
    tT = (e) => {
        let { user: t, innerClassName: s } = e;
        return (0, i.jsx)("div", {
            className: tf.mV,
            children: (0, i.jsx)(F.A, {
                avatar: (0, i.jsx)(_.eu, {
                    src: t.avatarSrc,
                    size: O._3.SIZE_32,
                    "aria-label": t.name,
                    status: T.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(tf.$L, s),
            }),
        });
    },
    tS = (e) => {
        let { user: t, nameplate: s, avatarDecoration: n } = e,
            r = (0, eE.Ov)();
        return (0, i.jsx)("div", {
            className: tf.nJ,
            role: "img",
            "aria-label": ex.intl.string(ex.t.SZeUdR),
            children: (0, i.jsxs)(C.M, {
                children: [
                    (0, i.jsx)(tT, { user: r.mallow, innerClassName: tf.ab }),
                    (0, i.jsxs)(v.E, {
                        variant: "text-sm/semibold",
                        className: tf.OS,
                        children: [ex.intl.string(ex.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, i.jsx)(tT, { user: r.phibi, innerClassName: tf.e9 }),
                    (0, i.jsx)("div", {
                        className: tf.mV,
                        children: (0, i.jsx)(eI.A, {
                            className: tf.M4,
                            innerClassName: tf.e9,
                            user: t,
                            nameplate: s,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: n,
                        }),
                    }),
                    (0, i.jsx)(tT, { user: r.locke, innerClassName: tf.e9 }),
                    (0, i.jsxs)(v.E, {
                        variant: "text-sm/semibold",
                        className: tf.OS,
                        children: [ex.intl.string(ex.t["NG43/6"]), " - 12"],
                    }),
                    (0, i.jsx)(tT, { user: r.boom, innerClassName: tf.bD }),
                    (0, i.jsx)(tT, { user: r.cherry, innerClassName: tf.bD }),
                ],
            }),
        });
    },
    tb = (e) => {
        let { product: t, user: s, activeBundleSlide: n, isTransitioning: r } = e,
            a = (0, m.bG)([D.A], () => D.A.useReducedMotion),
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
            } = (0, eA.f5)(t),
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
                            containerClassName: h ? tf.Bb : void 0,
                        }),
                        h && (0, i.jsx)(ty, { user: s }),
                    ],
                }),
            N = (e) => (0, i.jsx)(tS, { user: s, nameplate: e, avatarDecoration: j });
        if (t.type === o.R.BUNDLE) {
            if (!(0, eC.Wb)(t))
                return (0, i.jsx)("div", {
                    className: tf.RA,
                    children: (0, i.jsx)("div", { className: tf.bo, children: I() }),
                });
            {
                let e = n ?? 0,
                    s = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    d = c?.type !== s?.type && !a;
                return s.type === o.R.NAMEPLATE
                    ? (0, i.jsx)("div", { className: l()(tf.Zj, r && d ? tf.p2 : ""), children: N(s) })
                    : (0, i.jsx)("div", { className: l()(tf.Ak, r && d ? tf.p2 : ""), children: I() });
            }
        }
        return null != A
            ? (0, i.jsx)("div", { className: tf.Zj, children: N(A) })
            : (0, i.jsx)("div", { className: p?.type === o.R.AVATAR_DECORATION ? tf.RA : tf.Ak, children: I() });
    },
    ty = (e) => {
        let { user: t } = e,
            s = ((e) => {
                let { author: t } = e;
                return (0, U.rh)({
                    ...(0, w.Ay)({ author: t, channelId: "1337", content: ex.intl.string(ex.t.d5YwK5) }),
                    state: T.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": ex.intl.string(ex.t["TN+ZvB"]),
            children: (0, i.jsx)(C.M, {
                children: (0, i.jsxs)(S.Z, {
                    className: tf.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(V.A, { className: tf.G5, author: (0, H.p_)(s), message: s }, s.id),
                        (0, i.jsxs)("div", {
                            className: tf.lG,
                            children: [
                                (0, i.jsx)(b.U, { size: "md", color: "currentColor", className: tf.hq }),
                                (0, i.jsx)(y.n, { size: "md", color: "currentColor", className: tf.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    tP = (e) => {
        let {
                transitionState: t,
                onClose: s,
                product: r,
                category: a,
                returnRef: x,
                analyticsSource: h,
                analyticsLocations: E,
                shouldCheckoutWithOrbs: I,
                tab: N,
                giftRecipient: f,
                giftingOrigin: R,
            } = e,
            C = (0, m.bG)([ee.default], () => ee.default.getCurrentUser()),
            k = (0, tE.f)(r),
            { previewingVariantIndex: _ } = k,
            O = (0, ec.Q)(r),
            S = tj(r, _),
            b = (0, eR.rb)(r, O);
        c()(null != b, "Selected product should not be null");
        let { analyticsLocations: y } = (0, M.Ay)([...E, L.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eF.Yr)(b.skuId);
        let P = (0, tA.U1)(a);
        n.useEffect(() => {
            null != C && (0, J.A)(C.id, C.getAvatarURL(void 0, 80));
        }, [C]);
        let D = n.useMemo(() => (0, ed.V6)(r.type, r.skuId), [r.type, r.skuId]);
        n.useEffect(() => {
            et.default.track(T.HAw.OPEN_MODAL, {
                type: T.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: y,
                sku_id: b.skuId,
                product_type: D,
            }),
                (0, er.RD)(b.skuId);
        }, [h, y, b.skuId, D]);
        let { cardId: F, sessionId: U, tilePosition: w } = (0, el.uM)() ?? {},
            H = n.useMemo(() => (0, eR.v8)(r), [r]),
            V = (function (e) {
                let { skuId: t, productSkuIds: s, analyticsLocations: i } = e,
                    { cardId: r, sessionId: l } = (0, el.uM)() ?? {};
                return n.useCallback(
                    (e) => {
                        et.default.track(T.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
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
            })({ skuId: b.skuId, productSkuIds: H, analyticsLocations: y });
        (0, B.A)({
            type: d.ImpressionTypes.MODAL,
            name: d.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: b.skuId,
                card_id: F,
                shop_session_id: U,
                position_in_section: w,
                product_sku_ids: H,
                location_stack: y,
            },
        });
        let W = (0, X.o6)(),
            z = t === p.ip.EXITING,
            $ = (0, tg.$R)(r),
            G = $?.amount,
            q = null != G && ($?.discountId === eQ.eR || $?.discountId === eQ.Qz),
            { activeSlide: Y, isTransitioning: Z } = (function (e) {
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
            })({ slideCount: n.useMemo(() => ((0, ed.aw)(b) ? b.items.length : 0), [b]), intervalMs: 5e3 });
        return null == C
            ? null
            : (0, i.jsx)(M.f5, {
                  value: y,
                  children: (0, i.jsxs)(j.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: tf.CR,
                      returnRef: x,
                      transitionState: t,
                      size: j.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, i.jsxs)(j.$m, {
                              "data-migration-pending": !0,
                              className: tf.jE,
                              children: [
                                  (0, i.jsx)(tO, {
                                      user: C,
                                      product: r,
                                      category: a,
                                      onClose: s,
                                      previewingVariantIndexProps: k,
                                      selectedVariantIndex: O,
                                      shouldCheckoutWithOrbs: I,
                                      tab: N,
                                      activeBundleSlide: Y,
                                      giftRecipient: f?.id !== C.id ? f : void 0,
                                      giftingOrigin: f?.id !== C.id ? R : void 0,
                                      onTrackClick: V,
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: l()(
                                          tf.i1,
                                          b.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? tf.bF
                                              : b.type === o.R.AVATAR_DECORATION
                                                ? tf.Jq
                                                : tf.eF,
                                      ),
                                      style: { backgroundImage: `url(${P})` },
                                      children: [
                                          (0, eL.pQ)(r.skuId)
                                              ? r.skuId === eL.Dp.ORB_PROFILE_BADGE
                                                  ? W || z
                                                      ? null
                                                      : (0, i.jsx)(tr, { user: C })
                                                  : r.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, i.jsx)(te, {})
                                                    : (0, i.jsx)(td.B, { product: r, className: tf.Ms })
                                              : (0, i.jsx)(tb, {
                                                    user: C,
                                                    product: S ?? b,
                                                    activeBundleSlide: Y,
                                                    isTransitioning: Z,
                                                }),
                                          (0, i.jsxs)("div", {
                                              className: tf.VG,
                                              children: [
                                                  (0, i.jsx)(th.R, {
                                                      product: r,
                                                      selectedVariantIndex: O,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: V,
                                                  }),
                                                  (0, i.jsx)(eM, { skuId: b.skuId, tab: N, onTrackClick: V }),
                                                  (0, i.jsx)(g.K, {
                                                      "aria-label": ex.intl.string(ex.t.cpT0Cq),
                                                      onClick: () => {
                                                          V(eL.sH.CLOSE_DETAIL), s();
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
                                      className: tf.Hx,
                                      children: [
                                          (0, i.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: tf.OC,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: tf.do,
                                              children: [
                                                  (0, i.jsx)(v.E, {
                                                      variant: "text-sm/semibold",
                                                      className: tf.Q2,
                                                      children: ex.intl.format(ex.t["78ph4b"], {
                                                          discountOfferAmount: G,
                                                      }),
                                                  }),
                                                  $?.expiresAt != null && (0, i.jsx)(eB.e, { endDate: $.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
