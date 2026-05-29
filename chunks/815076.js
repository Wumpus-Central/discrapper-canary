t.r(s), t.d(s, { default: () => sf });
var i,
    l = t(627968),
    r = t(64700),
    a = t(284009),
    n = t.n(a),
    c = t(562708),
    d = t(334279),
    o = t(702841),
    u = t(231723),
    m = t(224640),
    h = t(793574),
    x = t(688810),
    E = t(139286),
    p = t(903209),
    A = t(652165),
    v = t(287809),
    j = t(174459),
    I = t(859040),
    R = t(440938),
    g = t(298072),
    N = t(993408),
    f = t(503089),
    C = t(966619),
    k = t(623373),
    _ = t(536572),
    T = t(177366),
    L = t(827066),
    O = t(212407),
    P = t(935094),
    D = t(503698),
    y = t.n(D),
    b = t(939249),
    S = t(534514),
    B = t(834730),
    M = t(14702),
    F = t(375708),
    w = t(701180);
let U = (e) => {
    let { item: s, index: t, isSelected: i, setSelected: a, label: n } = e,
        c = r.useMemo(() => ({ skuId: s.skuId, type: s.type, items: [s] }), [s]),
        d = r.useCallback(() => a(t), [a, t]);
    return (0, l.jsx)(b.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: y()(w.xn, { [w.Y4]: i }),
        onClick: d,
        "aria-label": n,
        children: (0, l.jsx)("div", { className: w.Yf, children: (0, l.jsx)(M.O, { product: c }) }),
    });
};
var H = t(575593),
    G = t(442759),
    V = t(344346),
    z = t(139136),
    W = t(395744),
    X = t(929283),
    K = t(719201);
let Z = (e) => {
    let { item: s, user: t, bundleFirstAvatarDecoration: i } = e;
    switch (s.type) {
        case H.R.AVATAR_DECORATION:
            return (0, l.jsx)("div", {
                className: K.h1,
                children: (0, l.jsx)(X.i, { user: t, item: s, isHighlighted: !0 }),
            });
        case H.R.PROFILE_EFFECT:
            return (0, l.jsx)("div", {
                className: K.sm,
                children: (0, l.jsx)(z.A, {
                    skuId: s.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case H.R.PROFILE_FRAME:
            return (0, l.jsx)("div", { className: K.ob, children: (0, l.jsx)(W.A, { frame: s }) });
        case H.R.NAMEPLATE:
            return (0, l.jsx)("div", {
                className: K.Dz,
                children: (0, l.jsx)(V.A, {
                    className: K.M4,
                    nameplate: s,
                    user: t,
                    nameplatePreviewSize: "large",
                    pendingAvatarDecoration: i,
                    isHighlighted: !0,
                    hideDecorators: !0,
                }),
            });
        default:
            return null;
    }
};
var Y = t(846957);
let q = (e) => {
    let { selectedProduct: s, previewingProduct: t } = e;
    return (0, l.jsx)(Y.B, { product: t ?? s });
};
var $ = t(247928),
    J = t(975571),
    Q = t(495565),
    ee = t(740076),
    es = t(661847),
    et = t(758836),
    ei = t(652215),
    el = t(630709);
let er = (e) => {
        let { skuId: s } = e;
        return (0, et.EZ)(s)
            ? (0, l.jsx)(B.E, {
                  variant: "text-sm/normal",
                  className: el.CU,
                  children: F.intl.format(F.t.Q1scdE, {
                      helpdeskArticle: J.A.getArticleURL(ei.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    ea = (e) => {
        let { productRecord: s, productName: t, selectedProduct: i, previewingVariantIndexProps: r } = e,
            { previewingVariantIndex: a, handleEntering: n, handleLeaving: c } = r,
            d = (0, L.q)(s, a) ?? i,
            o = (0, Q.r)(d, !1),
            { disabledReason: u } = (0, ee.I)(i.skuId),
            m = (0, g.Q)(s),
            h = (0, k.B1)(s),
            x = h ? s.variants[a ?? m] : null;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsxs)("div", {
                    className: el.sn,
                    children: [
                        (0, l.jsx)(S.D, { variant: "heading-xl/extrabold", className: el.R_, children: t }),
                        (0, l.jsx)(B.E, { variant: "text-sm/normal", children: o }),
                        (0, l.jsx)(er, { skuId: d.skuId }),
                        null !== u && (0, l.jsx)(B.E, { variant: "text-xs/normal", className: el.H$, children: u }),
                    ],
                }),
                h &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            null != x &&
                                (0, l.jsx)(B.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: el.a9,
                                    lineClamp: 1,
                                    children: F.intl.format(F.t.EcaRWt, {
                                        value: (0, l.jsx)("span", { className: el.I8, children: x.variantLabel }),
                                    }),
                                }),
                            (0, l.jsx)("div", {
                                className: el._x,
                                children: (0, l.jsx)($.M, {
                                    children: (0, l.jsx)(es.A, {
                                        skuId: s.skuId,
                                        onVariantEnter: n,
                                        onVariantExit: c,
                                        wrap: !0,
                                    }),
                                }),
                            }),
                        ],
                    }),
            ],
        });
    };
var en =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    ec = t(97808),
    ed = t(778712),
    eo = t(359778),
    eu = t(245604),
    em = t(460905),
    eh = t(262295),
    ex = t(320095),
    eE = t(963852),
    ep = t(763754),
    eA = t(20851),
    ev = t(986687),
    ej = t(101058),
    eI = t(84540),
    eR = t(836602),
    eg = t(428262),
    eN = t(780898),
    ef = t(180129);
let eC = (e) => {
        let { user: s, innerClassName: t } = e;
        return (0, l.jsx)("div", {
            className: ef.mV,
            children: (0, l.jsx)(eh.A, {
                avatar: (0, l.jsx)(ec.eu, {
                    src: s.avatarSrc,
                    size: ed._3.SIZE_32,
                    "aria-label": s.name,
                    status: ei.clD.ONLINE,
                }),
                name: s.name,
                innerClassName: y()(ef.$L, t),
            }),
        });
    },
    ek = (e) => {
        let { user: s, nameplate: t, avatarDecoration: i } = e,
            r = (0, eN.Ov)();
        return (0, l.jsx)("div", {
            className: ef.nJ,
            role: "img",
            "aria-label": F.intl.string(F.t.SZeUdR),
            children: (0, l.jsxs)($.M, {
                children: [
                    (0, l.jsx)(eC, { user: r.mallow, innerClassName: ef.ab }),
                    (0, l.jsxs)(B.E, {
                        variant: "text-sm/semibold",
                        className: ef.OS,
                        children: [F.intl.string(F.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, l.jsx)(eC, { user: r.phibi, innerClassName: ef.e9 }),
                    (0, l.jsx)("div", {
                        className: ef.mV,
                        children: (0, l.jsx)(V.A, {
                            className: ef.M4,
                            innerClassName: ef.e9,
                            user: s,
                            nameplate: t,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                            hideDecorators: !0,
                        }),
                    }),
                    (0, l.jsx)(eC, { user: r.locke, innerClassName: ef.e9 }),
                    (0, l.jsxs)(B.E, {
                        variant: "text-sm/semibold",
                        className: ef.OS,
                        children: [F.intl.string(F.t["NG43/6"]), " - 12"],
                    }),
                    (0, l.jsx)(eC, { user: r.boom, innerClassName: ef.bD }),
                    (0, l.jsx)(eC, { user: r.cherry, innerClassName: ef.bD }),
                ],
            }),
        });
    },
    e_ = (e) => {
        let { user: s } = e,
            t = ((e) => {
                let { author: s } = e;
                return (0, ex.rh)({
                    ...(0, eE.Ay)({ author: s, channelId: "1337", content: F.intl.string(F.t.d5YwK5) }),
                    state: ei.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, l.jsx)("div", {
            role: "img",
            "aria-label": F.intl.string(F.t["TN+ZvB"]),
            children: (0, l.jsx)($.M, {
                children: (0, l.jsxs)(eo.Z, {
                    className: ef.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, l.jsx)(eA.A, { className: ef.G5, author: (0, ep.p_)(t), message: t }, t.id),
                        (0, l.jsxs)("div", {
                            className: ef.lG,
                            children: [
                                (0, l.jsx)(eu.U, { size: "md", color: "currentColor", className: ef.hq }),
                                (0, l.jsx)(em.n, { size: "md", color: "currentColor", className: ef.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eT = (e) => {
        let { product: s, user: t, activeBundleSlide: i } = e,
            a = eg.Ay.canUsePremiumProfileCustomization(t),
            { pendingAvatar: n, ...c } = (0, o.cf)([eR.A], () => eR.A.getPendingChanges()),
            d = (0, ej.V7)({ userId: t.id, image: n }),
            u = s.type === H.R.BUNDLE ? s.items[i ?? 0] : void 0,
            m = u?.type ?? s.type,
            h = m === H.R.AVATAR_DECORATION,
            { firstAvatarDecoration: x, firstProfileEffect: E, firstNameplate: p, firstProfileFrame: A } = (0, G.f5)(s),
            v = u?.type === H.R.AVATAR_DECORATION ? u : x,
            j = u?.type === H.R.PROFILE_EFFECT ? u : E,
            I = u?.type === H.R.PROFILE_FRAME ? u : A,
            R = u?.type === H.R.NAMEPLATE ? u : p;
        r.useEffect(() => {
            if (null != v) return (0, eI.p)({ avatarDecoration: v }), () => (0, eI.p)({ avatarDecoration: void 0 });
        }, [v]);
        let g = () =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(ev.A, {
                        ...c,
                        pendingAvatar: d,
                        user: t,
                        canUsePremiumCustomization: a,
                        pendingAvatarDecoration: v,
                        pendingProfileEffect: j,
                        pendingProfileFrame: I,
                        disabledInputs: !0,
                        hideMessageInput: !0,
                        hideCustomStatus: !0,
                        hideBioSection: h,
                        hideExampleButton: !0,
                        interactive: !1,
                        containerClassName: h ? ef.Bb : void 0,
                    }),
                    h && (0, l.jsx)(e_, { user: t }),
                ],
            });
        if (m === H.R.NAMEPLATE && null != R)
            return (0, l.jsx)("div", {
                className: ef.Zj,
                children: (0, l.jsx)(ek, { user: t, nameplate: R, avatarDecoration: v }),
            });
        return m === H.R.PROFILE_EFFECT && null != j
            ? (0, l.jsx)("div", { className: ef.YL, children: (0, l.jsx)("div", { className: ef.V9, children: g() }) })
            : (0, l.jsx)("div", { className: h ? ef.RA : ef.hZ, children: g() });
    },
    eL = (e) => {
        let { user: s, selectedProduct: t, previewingProduct: i, selectedBundleSlide: r } = e;
        return (0, l.jsx)(eT, { user: s, product: i ?? t, activeBundleSlide: r });
    };
var eO = t(231540),
    eP = t(184659),
    eD = t(197952);
let ey = (e) => {
        let { user: s, productRecord: t, isClosing: i, isOrbCheckoutModalOpen: r } = e;
        return t.skuId === et.Dp.ORB_PROFILE_BADGE
            ? i || r
                ? null
                : (0, l.jsx)(eP.z, { user: s })
            : (0, et.EZ)(t.skuId)
              ? (0, l.jsx)(eO.I, {})
              : (0, l.jsx)(Y.B, { product: t, className: eD.M });
    },
    eb = {
        [en.COLLECTIBLE]: {
            LeftPreview: (e) => {
                let { user: s, selectedProduct: t, previewingProduct: i } = e,
                    r = i ?? t,
                    { firstAvatarDecoration: a } = (0, G.f5)(r),
                    [n] = r.items;
                return null == n ? null : (0, l.jsx)(Z, { item: n, user: s, bundleFirstAvatarDecoration: a });
            },
            Info: ea,
            RightPreview: eL,
        },
        [en.BUNDLE]: {
            LeftPreview: null,
            Info: (e) => {
                let { productRecord: s, productName: t, selectedBundleSlide: i, setSelectedBundleSlide: a } = e,
                    n = s.items,
                    c = s.bundledProducts,
                    d = n[i],
                    o = c?.[i],
                    u = F.intl.string(F.t.cTbdgu),
                    m = o?.name,
                    h = r.useRef(null),
                    x = r.useCallback(
                        (e) => {
                            n.length <= 1 ||
                                ("ArrowLeft" === e.key || "ArrowUp" === e.key
                                    ? (e.preventDefault(), a((e) => (e - 1 + n.length) % n.length))
                                    : "ArrowRight" === e.key || "ArrowDown" === e.key
                                      ? (e.preventDefault(), a((e) => (e + 1) % n.length))
                                      : "Home" === e.key
                                        ? (e.preventDefault(), a(0))
                                        : "End" === e.key && (e.preventDefault(), a(n.length - 1)));
                        },
                        [n.length, a],
                    );
                return (
                    r.useEffect(() => {
                        let e = h.current;
                        if (null == e || !e.contains(document.activeElement)) return;
                        let s = e.querySelectorAll('[role="radio"]');
                        s[i]?.focus();
                    }, [i]),
                    (0, l.jsxs)("div", {
                        className: w.Qf,
                        children: [
                            (0, l.jsxs)("div", {
                                className: w.KI,
                                children: [
                                    (0, l.jsx)(S.D, { variant: "heading-xl/extrabold", className: w.R_, children: t }),
                                    (0, l.jsx)(B.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: F.intl.format(F.t["1tUCAO"], { count: n.length }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(B.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                className: w.a9,
                                children: u,
                            }),
                            (0, l.jsx)("div", {
                                className: w.vg,
                                children: (0, l.jsx)("div", {
                                    ref: h,
                                    className: w.hK,
                                    role: "radiogroup",
                                    "aria-label": u,
                                    tabIndex: -1,
                                    onKeyDown: x,
                                    children: n.map((e, s) => {
                                        let t = c?.[s]?.name ?? e.skuId;
                                        return (0, l.jsx)(
                                            U,
                                            { item: e, index: s, isSelected: s === i, setSelected: a, label: t },
                                            e.skuId,
                                        );
                                    }),
                                }),
                            }),
                            null != d &&
                                null != m &&
                                (0, l.jsxs)("div", {
                                    className: w.G8,
                                    "aria-live": "polite",
                                    children: [
                                        (0, l.jsx)(S.D, {
                                            variant: "heading-md/semibold",
                                            className: w.dT,
                                            children: m,
                                        }),
                                        o?.summary != null &&
                                            (0, l.jsx)(B.E, {
                                                variant: "text-xs/medium",
                                                color: "text-subtle",
                                                children: o.summary,
                                            }),
                                    ],
                                }),
                        ],
                    })
                );
            },
            RightPreview: eL,
        },
        [en.EXTERNAL_ORB_BADGE]: { LeftPreview: q, Info: ea, RightPreview: ey },
        [en.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: q, Info: ea, RightPreview: ey },
        [en.EXTERNAL_GENERIC]: { LeftPreview: q, Info: ea, RightPreview: ey },
    },
    eS = (e) => {
        var s;
        return eb[
            ((s = e),
            (0, et.pQ)(s.skuId)
                ? s.skuId === et.Dp.ORB_PROFILE_BADGE
                    ? "EXTERNAL_ORB_BADGE"
                    : (0, et.EZ)(s.skuId)
                      ? "EXTERNAL_FRACTIONAL_NITRO"
                      : "EXTERNAL_GENERIC"
                : (0, N.aw)(s)
                  ? "BUNDLE"
                  : "COLLECTIBLE")
        ];
    };
var eB = t(13875),
    eM = t(110629),
    eF = t(268959),
    ew = t(958942);
let eU = (e) => {
    let { productRecord: s, selectedProduct: t } = e,
        i = (0, eB.Do)("CollectiblesShopProductDetailsModal") && t.type === H.R.PROFILE_FRAME;
    return (0, l.jsx)("div", {
        className: ew.N,
        children: i
            ? (0, l.jsx)(eM.A, { location: "CollectiblesShopProductDetailsModal" })
            : (0, l.jsx)(eF.A, { skuId: s.skuId }),
    });
};
var eH = t(990078),
    eG = t(462887),
    eV = t(821609),
    ez = t(318254),
    eW = t(825484),
    eX = t(331322),
    eK = t(736653),
    eZ = t(44120),
    eY = t(465794),
    eq = t(757036),
    e$ = t(761705),
    eJ = t(371446),
    eQ = t(580630),
    e0 = t(4227),
    e1 = t(640634),
    e5 = t(940980),
    e4 = t(466459),
    e7 = t(395068),
    e2 = t(49620),
    e8 = t(878112),
    e6 = t(366174),
    e9 = t(337817),
    e3 = t(452255),
    se = t(641405),
    ss = t(561769),
    st = t(293477),
    si = t(525723),
    sl = t(347722),
    sr = t(57020),
    sa = t(61750),
    sn = t(788868),
    sc = t(818348),
    sd = t(237309);
let so = (e) => {
    let {
            user: s,
            productRecord: t,
            selectedProduct: i,
            category: a,
            shouldCheckoutWithOrbs: n,
            tab: c,
            giftRecipient: d,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: E,
            onClose: p,
            onTrackClick: v,
        } = e,
        { cardId: j, sessionId: g, tilePosition: f } = (0, R.uM)() ?? {},
        C = (0, eq.L)(sn.PremiumTypes.TIER_2),
        k = (0, N.xM)(s),
        _ = (0, eB.Do)("CollectiblesShopProductDetailsModal") && i.type === H.R.PROFILE_FRAME,
        T = eg.Ay.canUseShopDiscounts(s) || _,
        L = (0, e4.h)(t),
        { isPurchased: O, isPartiallyOwnedBundle: P } = (0, e4.h)(i),
        { isDisabled: D } = (0, ee.I)(i.skuId),
        b = (0, N.Zu)({ product: i, isPartiallyOwnedBundle: P, isPurchased: O }),
        S = (0, o.bG)([e0.A], () => e0.A.isClaiming === i?.skuId),
        M = (0, eK.Ay)(),
        w = (0, eG.M)(M),
        U = (0, N.G0)(i),
        G = (0, N.yt)(i, ei.lid.DEFAULT),
        V = G?.amount === 0,
        z = r.useMemo(() => (0, N.fT)(i, T), [i, T]),
        W = (0, sl.X)(i),
        { enabled: X } = (0, eJ.Z)({ location: "collectibles_shop_product_details_modal" }),
        K = (0, si.V_)(t),
        Z = null != K,
        Y = (0, e5.W)("CollectiblesShopProductDetailsModal"),
        q = c === et.G2.ORBS && n ? ss.Hi.ORBS : Y ? ss.Hi.FIAT : void 0,
        $ = (0, e1.l)("collectibles_shop_product_details_modal"),
        {
            checkoutEligiblePrices: J,
            isOrbExclusive: Q,
            hasSufficientOrbs: es,
        } = (0, sr.F)({ product: i, hasShopDiscount: T, hasDiscountOffer: Z, prioritizedCurrency: q }),
        el = (0, e7.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        er = r.useMemo(() => J.some((e) => e.currency === sc.Yr.DISCORD_ORB), [J]);
    (0, e$.W)({ disableFetch: !er });
    let ea = r.useCallback(() => {
            v(et.sH.BUY_WITH_FIAT),
                (0, eZ.A)({ skuId: i.skuId, analyticsLocations: m, onClose: (e) => (e ? p() : (0, sc.tE)()) });
        }, [m, p, i.skuId, v]),
        en = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = (0, l.jsx)(eY.A, {
                    subscriptionTier: sn.pe.TIER_2,
                    fullWidth: !0,
                    buttonTextOverride: e,
                    onClick: () => {
                        v(et.sH.UNLOCK_WITH_NITRO), (0, e3.M)();
                    },
                    onSubscribeModalClose: () => {
                        (0, e3.t)({
                            product: t,
                            category: a,
                            shouldCheckoutWithOrbs: n,
                            returnRef: E,
                            analyticsLocations: m,
                            tab: c,
                            giftRecipient: d,
                            giftingOrigin: u,
                            cardId: j,
                            sessionId: g,
                            tilePosition: f,
                        });
                    },
                });
            return s ? (0, l.jsx)(x.f5, { value: [...m, h.A.PROFILE_FRAMES_EA_MARKETING], children: i }) : i;
        };
    return (0, l.jsxs)("div", {
        className: sd.iw,
        children: [
            L.isPurchased || L.isPartiallyOwnedBundle
                ? (0, l.jsx)(e2.c, { className: sd.On, isPartiallyPurchased: P })
                : U
                  ? (0, l.jsxs)("div", {
                        className: sd.pq,
                        children: [
                            (0, l.jsx)(B.E, { variant: "text-md/semibold", children: F.intl.string(F.t.rt69oo) }),
                            !O &&
                                (0, l.jsx)(B.E, {
                                    className: y()(sd.ed, !w && sd.un),
                                    variant: "text-xxs/normal",
                                    children: F.intl.string(F.t.nKdAlO),
                                }),
                        ],
                    })
                  : X
                    ? (0, l.jsx)(st.B, {
                          prices: J,
                          product: i,
                          hasShopDiscount: T,
                          discountSource: k,
                          discount: z,
                          hasSufficientOrbs: es,
                          isProductDisabled: D,
                          discountOfferAmount: K,
                          onTrackClick: v,
                      })
                    : Q
                      ? null
                      : (0, l.jsxs)("div", {
                            className: sd.pw,
                            children: [
                                (0, l.jsx)(e6.A, {
                                    product: i,
                                    discount: z,
                                    hasShopDiscount: T,
                                    discountSource: k,
                                    hideStrikethroughPrice: !T || Z,
                                    discountIconDisplayMode: "tooltip",
                                    discountIconSize: "xs",
                                    discountOfferAmount: K,
                                }),
                                T || Z ? null : (0, l.jsx)(e9.A, { product: i, onTrackClick: v }),
                            ],
                        }),
            (0, l.jsx)(eX.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !U || C || V
                        ? b
                            ? O
                                ? W
                                    ? (0, l.jsxs)(eW.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, l.jsx)(se.A, { product: i, onSuccess: p, onTrackClick: v }),
                                              (0, l.jsx)(e8.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: p,
                                                  giftRecipient: d,
                                                  giftingOrigin: u,
                                                  onTrackClick: v,
                                              }),
                                          ],
                                      })
                                    : (0, l.jsx)(se.A, { product: i, onSuccess: p, onTrackClick: v })
                                : el
                                  ? en(F.intl.string(F.t.IvmZVF), !0)
                                  : U
                                    ? (0, l.jsx)(eV.$, {
                                          loading: S,
                                          loadingStartedLabel: F.intl.string(F.t["TYw+9s"]),
                                          loadingFinishedLabel: F.intl.string(F.t.Pg1UP5),
                                          onClick: async () => {
                                              v(et.sH.ADD_TO_COLLECTION),
                                                  await (0, I.iJ)(i.skuId),
                                                  p(),
                                                  (0, sa.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: et.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: F.intl.string(F.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, l.jsx)(l.Fragment, {
                                          children: J.map((e, s) => {
                                              let t,
                                                  a,
                                                  n,
                                                  c,
                                                  o,
                                                  h = 0 === s,
                                                  x =
                                                      e.currency === sc.Yr.DISCORD_ORB
                                                          ? ((t = D
                                                                ? F.intl.string(F.t.cTdr3x)
                                                                : F.intl.string(F.t.zqh7ZM)),
                                                            (a = !es || D),
                                                            (n = F.intl.formatToPlainString(F.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = a ? `${n}, ${t}` : n),
                                                            (0, l.jsx)(eH.m, {
                                                                position: "top",
                                                                text: t,
                                                                shouldShow: a,
                                                                "aria-label": !1,
                                                                children: (0, l.jsx)(eV.$, {
                                                                    variant: h ? "primary" : "secondary",
                                                                    onClick: () => {
                                                                        v(et.sH.BUY_WITH_ORBS),
                                                                            (0, A.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, I.gB)(),
                                                                                        p(),
                                                                                        (0, sa.A)({
                                                                                            product: i,
                                                                                            analyticsLocations: m,
                                                                                            itemConsumed:
                                                                                                e?.entitlements?.[0]
                                                                                                    ?.consumed,
                                                                                            purchaseType: et.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: m,
                                                                            });
                                                                    },
                                                                    disabled: a,
                                                                    "aria-label": c,
                                                                    text: F.intl.format($ ? F.t.JC15qj : F.t.lOtBOI, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, l.jsx)(ez.C, {
                                                                                className: sd.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((o = (() => {
                                                                switch (i.type) {
                                                                    case H.R.BUNDLE:
                                                                        return F.intl.string(F.t.V1AWw0);
                                                                    case H.R.PROFILE_EFFECT:
                                                                        return F.intl.string(F.t.kAeDcK);
                                                                    case H.R.NAMEPLATE:
                                                                        return F.intl.string(F.t.H3vhqU);
                                                                    case H.R.PROFILE_FRAME:
                                                                        return F.intl.string(F.t.BlSW1e);
                                                                    case H.R.AVATAR_DECORATION:
                                                                    default:
                                                                        return F.intl.string(F.t.AQ0Veg);
                                                                }
                                                            })()),
                                                            Z
                                                                ? (o = F.intl.formatToPlainString(F.t["5U5RB5"], {
                                                                      discountOfferAmount: K,
                                                                  }))
                                                                : X &&
                                                                  (o = F.intl.formatToPlainString(F.t["cNSL/j"], {
                                                                      price: (0, eQ.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, l.jsxs)(eW.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, l.jsx)(eV.$, {
                                                                        variant: h ? "primary" : "secondary",
                                                                        onClick: ea,
                                                                        text: o,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    W &&
                                                                        (0, l.jsx)(e8.A, {
                                                                            primary: h,
                                                                            product: i,
                                                                            onSuccess: p,
                                                                            giftRecipient: d,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: v,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, l.jsx)(r.Fragment, { children: x }, e.currency);
                                          }),
                                      })
                            : W
                              ? (0, l.jsx)(e8.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: p,
                                    fullWidth: !0,
                                    giftRecipient: d,
                                    giftingOrigin: u,
                                    onTrackClick: v,
                                })
                              : null
                        : en(F.intl.string(F.t.sEAnVH)),
            }),
        ],
    });
};
var su = t(18967);
let sm = (e) => {
    let { productRecord: s, selectedProduct: t, previewingProduct: i, user: r } = e,
        a = eS(s);
    return (0, l.jsxs)("div", {
        className: y()(su.wd, { [su.E7]: null != a.LeftPreview }),
        children: [
            (0, l.jsx)("div", { className: su.dL, children: (0, l.jsx)(eU, { productRecord: s, selectedProduct: t }) }),
            null != a.LeftPreview &&
                (0, l.jsx)("div", {
                    className: su._E,
                    children: (0, l.jsx)(a.LeftPreview, {
                        user: r,
                        selectedProduct: t,
                        previewingProduct: i,
                        productRecord: s,
                    }),
                }),
            (0, l.jsx)("div", { className: su.F_, children: (0, l.jsx)(a.Info, { ...e }) }),
            (0, l.jsx)(so, { ...e }),
        ],
    });
};
var sh = t(408278),
    sx = t(972213),
    sE = t(586445),
    sp = t(139146),
    sA = t(668953),
    sv = t(881636),
    sj = t(428445);
let sI = (e) => {
    let { goPrev: s, goNext: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: sj.Y,
                children: (0, l.jsx)(sh.K, {
                    "aria-label": F.intl.string(F.t["3NdvMK"]),
                    onClick: s,
                    icon: sA.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, l.jsx)("div", {
                className: sj.K,
                children: (0, l.jsx)(sh.K, {
                    "aria-label": F.intl.string(F.t.RYIeOX),
                    onClick: t,
                    icon: sv.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
};
var sR = t(742441);
let sg = (e) => {
    let {
            user: s,
            productRecord: t,
            previewingProduct: i,
            selectedProduct: a,
            selectedVariantIndex: n,
            selectedBundleSlide: c,
            setSelectedBundleSlide: d,
            isClosing: o,
            isOrbCheckoutModalOpen: u,
            pdpBackground: m,
            tab: h,
            onClose: x,
            onTrackClick: E,
        } = e,
        p = eS(t),
        A = (0, N.aw)(a),
        v = A ? a.items.length : 0,
        j = r.useCallback(() => {
            v <= 1 || d((e) => (e - 1 + v) % v);
        }, [v, d]),
        I = r.useCallback(() => {
            v <= 1 || d((e) => (e + 1) % v);
        }, [v, d]),
        R = r.useCallback(
            (e) => {
                if (v <= 1) return;
                let s = e.target;
                "INPUT" === s.tagName ||
                    "TEXTAREA" === s.tagName ||
                    s.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), j())
                        : "ArrowRight" === e.key && (e.preventDefault(), I()));
            },
            [v, j, I],
        ),
        g = r.useCallback(() => {
            E(et.sH.CLOSE_DETAIL), x();
        }, [E, x]),
        f = r.useRef(null),
        C = r.useRef(!0);
    return (
        r.useLayoutEffect(() => {
            if (C.current) {
                C.current = !1;
                return;
            }
            let e = f.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [c]),
        (0, l.jsxs)("div", {
            className: y()(sR.i1, (0, et.EZ)(a.skuId) ? sR.bF : a.type === H.R.AVATAR_DECORATION ? sR.Jq : sR.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: R,
            children: [
                (0, l.jsx)("div", {
                    className: sR.KR,
                    ref: f,
                    children: (0, l.jsx)(p.RightPreview, {
                        user: s,
                        productRecord: t,
                        selectedProduct: a,
                        previewingProduct: i,
                        selectedBundleSlide: c,
                        isClosing: o,
                        isOrbCheckoutModalOpen: u,
                    }),
                }),
                A && v > 1 && (0, l.jsx)(sI, { goPrev: j, goNext: I }),
                (0, l.jsxs)("div", {
                    className: sR.VG,
                    children: [
                        (0, l.jsx)(sp.R, {
                            product: t,
                            selectedVariantIndex: n,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        (0, l.jsx)(sE.V, { skuId: a.skuId, tab: h, onTrackClick: E }),
                        (0, l.jsx)(sh.K, {
                            "aria-label": F.intl.string(F.t.cpT0Cq),
                            onClick: g,
                            icon: sx.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
};
var sN = t(460510);
let sf = (e) => {
    let {
            transitionState: s,
            onClose: t,
            product: i,
            category: a,
            returnRef: D,
            analyticsSource: y,
            analyticsLocations: b,
            shouldCheckoutWithOrbs: S,
            tab: B,
            giftRecipient: M,
            giftingOrigin: F,
        } = e,
        w = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        U = (0, P.f)(i),
        { previewingVariantIndex: H } = U,
        G = (0, g.Q)(i),
        V = (0, L.q)(i, H),
        z = (0, k.rb)(i, G);
    n()(null != z, "Selected product should not be null");
    let { analyticsLocations: W } = (0, x.Ay)([...b, h.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, T.Yr)(z.skuId);
    let X = (0, O.U1)(a),
        [K, Z] = r.useState(0);
    r.useEffect(() => {
        null != w && (0, p.A)(w.id, w.getAvatarURL(void 0, 80));
    }, [w]);
    let Y = r.useMemo(() => (0, N.V6)(i.type, i.skuId), [i.type, i.skuId]);
    r.useEffect(() => {
        j.default.track(ei.HAw.OPEN_MODAL, {
            type: ei.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: y,
            location_stack: W,
            sku_id: z.skuId,
            product_type: Y,
        }),
            (0, I.RD)(z.skuId);
    }, [y, W, z.skuId, Y]);
    let { cardId: q, sessionId: $, tilePosition: J } = (0, R.uM)() ?? {},
        Q = r.useMemo(() => (0, k.v8)(i), [i]),
        ee = (0, C.R)({ skuId: z.skuId, productSkuIds: Q, analyticsLocations: W });
    (0, E.A)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
        properties: {
            sku_id: z.skuId,
            card_id: q,
            shop_session_id: $,
            position_in_section: J,
            product_sku_ids: Q,
            location_stack: W,
        },
    });
    let es = (0, A.o6)(),
        et = s === u.ip.EXITING,
        el = (0, f.c)("product_details_modal");
    if (null == w || (i.skuId === d.j.PREMIUM_TIER_2_1_DAY && !el)) return null;
    let er = (0, _.VG)(i),
        ea = {
            user: w,
            productRecord: i,
            productName: er,
            selectedProduct: z,
            previewingProduct: V ?? null,
            category: a,
            selectedVariantIndex: G,
            previewingVariantIndexProps: U,
            selectedBundleSlide: K,
            setSelectedBundleSlide: Z,
            tab: B,
            shouldCheckoutWithOrbs: S,
            giftRecipient: M?.id !== w.id ? M : void 0,
            giftingOrigin: M?.id !== w.id ? F : void 0,
            analyticsLocations: W,
            returnRef: D,
            onClose: t,
            onTrackClick: ee,
        };
    return (0, l.jsx)(x.f5, {
        value: W,
        children: (0, l.jsx)(m.d, {
            returnRef: D,
            transitionState: s,
            onClose: t,
            size: "xl",
            paddingSize: "sm",
            "aria-label": er,
            children: (0, l.jsx)("div", {
                className: sN.C,
                children: (0, l.jsxs)("div", {
                    className: sN.j,
                    children: [
                        (0, l.jsx)(sm, { ...ea }),
                        (0, l.jsx)(sg, { ...ea, isClosing: et, isOrbCheckoutModalOpen: es, pdpBackground: X }),
                    ],
                }),
            }),
        }),
    });
};
