t.r(s), t.d(s, { default: () => sN });
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
    x = t(793574),
    h = t(688810),
    E = t(139286),
    p = t(903209),
    v = t(652165),
    j = t(287809),
    A = t(174459),
    I = t(859040),
    g = t(440938),
    N = t(298072),
    R = t(993408),
    f = t(503089),
    C = t(966619),
    k = t(623373),
    _ = t(536572),
    L = t(177366),
    T = t(827066),
    O = t(212407),
    y = t(935094),
    b = t(503698),
    P = t.n(b),
    D = t(939249),
    S = t(534514),
    B = t(834730),
    w = t(14702),
    M = t(375708),
    F = t(701180);
let U = (e) => {
    let { item: s, index: t, isSelected: i, setSelected: a, label: n } = e,
        c = r.useMemo(() => ({ skuId: s.skuId, type: s.type, items: [s] }), [s]),
        d = r.useCallback(() => a(t), [a, t]);
    return (0, l.jsx)(D.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: P()(F.xn, { [F.Y4]: i }),
        onClick: d,
        "aria-label": n,
        children: (0, l.jsx)("div", { className: F.Yf, children: (0, l.jsx)(w.O, { product: c }) }),
    });
};
var H = t(575593),
    G = t(442759),
    z = t(344346),
    V = t(139136),
    X = t(395744),
    W = t(929283),
    K = t(719201);
let Y = (e) => {
    let { item: s, user: t, bundleFirstAvatarDecoration: i } = e;
    switch (s.type) {
        case H.R.AVATAR_DECORATION:
            return (0, l.jsx)("div", {
                className: K.h1,
                children: (0, l.jsx)(W.i, { user: t, item: s, isHighlighted: !0 }),
            });
        case H.R.PROFILE_EFFECT:
            return (0, l.jsx)("div", {
                className: K.sm,
                children: (0, l.jsx)(V.A, {
                    skuId: s.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case H.R.PROFILE_FRAME:
            return (0, l.jsx)("div", { className: K.ob, children: (0, l.jsx)(X.A, { frame: s }) });
        case H.R.NAMEPLATE:
            return (0, l.jsx)("div", {
                className: K.Dz,
                children: (0, l.jsx)(z.A, {
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
var Z = t(846957);
let q = (e) => {
    let { selectedProduct: s, previewingProduct: t } = e;
    return (0, l.jsx)(Z.B, { product: t ?? s });
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
                  children: M.intl.format(M.t.Q1scdE, {
                      helpdeskArticle: J.A.getArticleURL(ei.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    ea = (e) => {
        let { productRecord: s, productName: t, selectedProduct: i, previewingVariantIndexProps: r } = e,
            { previewingVariantIndex: a, handleEntering: n, handleLeaving: c } = r,
            d = (0, T.q)(s, a) ?? i,
            o = (0, Q.r)(d, !1),
            { disabledReason: u } = (0, ee.I)(i.skuId),
            m = (0, N.Q)(s),
            x = (0, k.B1)(s),
            h = x ? s.variants[a ?? m] : null;
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
                x &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            null != h &&
                                (0, l.jsx)(B.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: el.a9,
                                    lineClamp: 1,
                                    children: M.intl.format(M.t.EcaRWt, {
                                        value: (0, l.jsx)("span", { className: el.I8, children: h.variantLabel }),
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
    ex = t(262295),
    eh = t(320095),
    eE = t(963852),
    ep = t(763754),
    ev = t(20851),
    ej = t(986687),
    eA = t(101058),
    eI = t(84540),
    eg = t(836602),
    eN = t(428262),
    eR = t(780898),
    ef = t(180129);
let eC = (e) => {
        let { user: s, innerClassName: t } = e;
        return (0, l.jsx)("div", {
            className: ef.mV,
            children: (0, l.jsx)(ex.A, {
                avatar: (0, l.jsx)(ec.eu, {
                    src: s.avatarSrc,
                    size: ed._3.SIZE_32,
                    "aria-label": s.name,
                    status: ei.clD.ONLINE,
                }),
                name: s.name,
                innerClassName: P()(ef.$L, t),
            }),
        });
    },
    ek = (e) => {
        let { user: s, nameplate: t, avatarDecoration: i } = e,
            r = (0, eR.Ov)();
        return (0, l.jsx)("div", {
            className: ef.nJ,
            role: "img",
            "aria-label": M.intl.string(M.t.SZeUdR),
            children: (0, l.jsxs)($.M, {
                children: [
                    (0, l.jsx)(eC, { user: r.mallow, innerClassName: ef.ab }),
                    (0, l.jsxs)(B.E, {
                        variant: "text-sm/semibold",
                        className: ef.OS,
                        children: [M.intl.string(M.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, l.jsx)(eC, { user: r.phibi, innerClassName: ef.e9 }),
                    (0, l.jsx)("div", {
                        className: ef.mV,
                        children: (0, l.jsx)(z.A, {
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
                        children: [M.intl.string(M.t["NG43/6"]), " - 12"],
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
                return (0, eh.rh)({
                    ...(0, eE.Ay)({ author: s, channelId: "1337", content: M.intl.string(M.t.d5YwK5) }),
                    state: ei.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, l.jsx)("div", {
            role: "img",
            "aria-label": M.intl.string(M.t["TN+ZvB"]),
            children: (0, l.jsx)($.M, {
                children: (0, l.jsxs)(eo.Z, {
                    className: ef.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, l.jsx)(ev.A, { className: ef.G5, author: (0, ep.p_)(t), message: t }, t.id),
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
    eL = (e) => {
        let { product: s, user: t, activeBundleSlide: i } = e,
            a = eN.Ay.canUsePremiumProfileCustomization(t),
            { pendingAvatar: n, ...c } = (0, o.cf)([eg.A], () => eg.A.getPendingChanges()),
            d = (0, eA.V7)({ userId: t.id, image: n }),
            u = s.type === H.R.BUNDLE ? s.items[i ?? 0] : void 0,
            m = u?.type ?? s.type,
            x = m === H.R.AVATAR_DECORATION,
            h = m === H.R.PROFILE_EFFECT,
            { firstAvatarDecoration: E, firstProfileEffect: p, firstNameplate: v, firstProfileFrame: j } = (0, G.f5)(s),
            A = u?.type === H.R.AVATAR_DECORATION ? u : E,
            I = u?.type === H.R.PROFILE_EFFECT ? u : p,
            g = u?.type === H.R.PROFILE_FRAME ? u : j,
            N = u?.type === H.R.NAMEPLATE ? u : v;
        r.useEffect(() => {
            if (null != A) return (0, eI.p)({ avatarDecoration: A }), () => (0, eI.p)({ avatarDecoration: void 0 });
        }, [A]);
        let R = () =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(ej.A, {
                        ...c,
                        pendingAvatar: d,
                        user: t,
                        canUsePremiumCustomization: a,
                        pendingAvatarDecoration: A,
                        pendingProfileEffect: I,
                        pendingProfileFrame: g,
                        disabledInputs: !0,
                        hideMessageInput: !h || null != u,
                        hideCustomStatus: !0,
                        hideBioSection: x,
                        hideExampleButton: !0,
                        interactive: !1,
                        containerClassName: x ? ef.Bb : void 0,
                    }),
                    x && (0, l.jsx)(e_, { user: t }),
                ],
            });
        if (m === H.R.NAMEPLATE && null != N)
            return (0, l.jsx)("div", {
                className: ef.Zj,
                children: (0, l.jsx)(ek, { user: t, nameplate: N, avatarDecoration: A }),
            });
        return h && null != u && null != I
            ? (0, l.jsx)("div", { className: ef.YL, children: (0, l.jsx)("div", { className: ef.V9, children: R() }) })
            : (0, l.jsx)("div", { className: x ? ef.RA : ef.hZ, children: R() });
    },
    eT = (e) => {
        let { user: s, selectedProduct: t, previewingProduct: i, selectedBundleSlide: r } = e;
        return (0, l.jsx)(eL, { user: s, product: i ?? t, activeBundleSlide: r });
    };
var eO = t(231540),
    ey = t(184659),
    eb = t(197952);
let eP = (e) => {
        let { user: s, productRecord: t, isClosing: i, isOrbCheckoutModalOpen: r } = e;
        return t.skuId === et.Dp.ORB_PROFILE_BADGE
            ? i || r
                ? null
                : (0, l.jsx)(ey.z, { user: s })
            : (0, et.EZ)(t.skuId)
              ? (0, l.jsx)(eO.I, {})
              : (0, l.jsx)(Z.B, { product: t, className: eb.M });
    },
    eD = {
        [en.COLLECTIBLE]: {
            LeftPreview: (e) => {
                let { user: s, selectedProduct: t, previewingProduct: i } = e,
                    r = i ?? t,
                    { firstAvatarDecoration: a } = (0, G.f5)(r),
                    [n] = r.items;
                return null == n ? null : (0, l.jsx)(Y, { item: n, user: s, bundleFirstAvatarDecoration: a });
            },
            Info: ea,
            RightPreview: eT,
        },
        [en.BUNDLE]: {
            LeftPreview: null,
            Info: (e) => {
                let { productRecord: s, productName: t, selectedBundleSlide: i, setSelectedBundleSlide: a } = e,
                    n = s.items,
                    c = s.bundledProducts,
                    d = n[i],
                    o = c?.[i],
                    u = M.intl.string(M.t.cTbdgu),
                    m = o?.name,
                    x = r.useRef(null),
                    h = r.useCallback(
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
                        let e = x.current;
                        if (null == e || !e.contains(document.activeElement)) return;
                        let s = e.querySelectorAll('[role="radio"]');
                        s[i]?.focus();
                    }, [i]),
                    (0, l.jsxs)("div", {
                        className: F.Qf,
                        children: [
                            (0, l.jsxs)("div", {
                                className: F.KI,
                                children: [
                                    (0, l.jsx)(S.D, { variant: "heading-xl/extrabold", className: F.R_, children: t }),
                                    (0, l.jsx)(B.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: M.intl.format(M.t["1tUCAO"], { count: n.length }),
                                    }),
                                ],
                            }),
                            (0, l.jsx)(B.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                className: F.a9,
                                children: u,
                            }),
                            (0, l.jsx)("div", {
                                className: F.vg,
                                children: (0, l.jsx)("div", {
                                    ref: x,
                                    className: F.hK,
                                    role: "radiogroup",
                                    "aria-label": u,
                                    tabIndex: -1,
                                    onKeyDown: h,
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
                                    className: F.G8,
                                    "aria-live": "polite",
                                    children: [
                                        (0, l.jsx)(S.D, {
                                            variant: "heading-md/semibold",
                                            className: F.dT,
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
            RightPreview: eT,
        },
        [en.EXTERNAL_ORB_BADGE]: { LeftPreview: q, Info: ea, RightPreview: eP },
        [en.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: q, Info: ea, RightPreview: eP },
        [en.EXTERNAL_GENERIC]: { LeftPreview: q, Info: ea, RightPreview: eP },
    },
    eS = (e) => {
        var s;
        return eD[
            ((s = e),
            (0, et.pQ)(s.skuId)
                ? s.skuId === et.Dp.ORB_PROFILE_BADGE
                    ? "EXTERNAL_ORB_BADGE"
                    : (0, et.EZ)(s.skuId)
                      ? "EXTERNAL_FRACTIONAL_NITRO"
                      : "EXTERNAL_GENERIC"
                : (0, R.aw)(s)
                  ? "BUNDLE"
                  : "COLLECTIBLE")
        ];
    };
var eB = t(13875),
    ew = t(110629),
    eM = t(268959),
    eF = t(958942);
let eU = (e) => {
    let { productRecord: s, selectedProduct: t } = e,
        i = (0, eB.Do)("CollectiblesShopProductDetailsModal") && t.type === H.R.PROFILE_FRAME;
    return (0, l.jsx)("div", {
        className: eF.N,
        children: i
            ? (0, l.jsx)(ew.A, { location: "CollectiblesShopProductDetailsModal" })
            : (0, l.jsx)(eM.A, { skuId: s.skuId }),
    });
};
var eH = t(990078),
    eG = t(462887),
    ez = t(821609),
    eV = t(318254),
    eX = t(825484),
    eW = t(331322),
    eK = t(736653),
    eY = t(44120),
    eZ = t(465794),
    eq = t(757036),
    e$ = t(761705),
    eJ = t(580630),
    eQ = t(4227),
    e0 = t(640634),
    e1 = t(940980),
    e5 = t(466459),
    e8 = t(395068),
    e2 = t(49620),
    e4 = t(878112),
    e6 = t(452255),
    e9 = t(641405),
    e7 = t(839863),
    e3 = t(561769),
    se = t(680262),
    ss = t(525723),
    st = t(347722),
    si = t(57020),
    sl = t(61750),
    sr = t(788868),
    sa = t(818348),
    sn = t(237309);
let sc = (e) => {
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
            returnRef: x,
            onClose: h,
            onTrackClick: E,
        } = e,
        { cardId: p, sessionId: j, tilePosition: A } = (0, g.uM)() ?? {},
        N = (0, eq.L)(sr.PremiumTypes.TIER_2),
        f = (0, R.xM)(s),
        C = (0, eB.Do)("CollectiblesShopProductDetailsModal") && i.type === H.R.PROFILE_FRAME,
        k = eN.Ay.canUseShopDiscounts(s) || C,
        _ = (0, e5.h)(t),
        { isPurchased: L, isPartiallyOwnedBundle: T } = (0, e5.h)(i),
        { isDisabled: O } = (0, ee.I)(i.skuId),
        y = (0, R.Zu)({ product: i, isPartiallyOwnedBundle: T, isPurchased: L }),
        b = (0, o.bG)([eQ.A], () => eQ.A.isClaiming === i?.skuId),
        D = (0, eK.Ay)(),
        S = (0, eG.M)(D),
        w = (0, R.G0)(i),
        F = (0, R.yt)(i, ei.lid.DEFAULT),
        U = F?.amount === 0,
        G = r.useMemo(() => (0, R.fT)(i, k), [i, k]),
        z = (0, st.X)(i),
        V = (0, ss.V_)(t),
        X = null != V,
        W = (0, e1.W)("CollectiblesShopProductDetailsModal"),
        K = c === et.G2.ORBS && n ? e3.Hi.ORBS : W ? e3.Hi.FIAT : void 0,
        Y = (0, e0.l)("collectibles_shop_product_details_modal"),
        { checkoutEligiblePrices: Z, hasSufficientOrbs: q } = (0, si.F)({
            product: i,
            hasShopDiscount: k,
            hasDiscountOffer: X,
            prioritizedCurrency: K,
        }),
        $ = (0, e8.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        J = r.useMemo(() => Z.some((e) => e.currency === sa.Yr.DISCORD_ORB), [Z]);
    (0, e$.W)({ disableFetch: !J });
    let Q = r.useCallback(() => {
            E(et.sH.BUY_WITH_FIAT),
                (0, eY.A)({ skuId: i.skuId, analyticsLocations: m, onClose: (e) => (e ? h() : (0, sa.tE)()) });
        }, [m, h, i.skuId, E]),
        es = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = (0, l.jsx)(eZ.A, {
                    subscriptionTier: sr.pe.TIER_2,
                    fullWidth: !0,
                    buttonTextOverride: e,
                    onClick: () => {
                        E(et.sH.UNLOCK_WITH_NITRO), (0, e6.M)();
                    },
                    onSubscribeModalClose: () => {
                        (0, e6.t)({
                            product: t,
                            category: a,
                            shouldCheckoutWithOrbs: n,
                            returnRef: x,
                            analyticsLocations: m,
                            tab: c,
                            giftRecipient: d,
                            giftingOrigin: u,
                            cardId: p,
                            sessionId: j,
                            tilePosition: A,
                        });
                    },
                });
            return s ? (0, l.jsx)(e7.A, { analyticsLocations: m, children: i }) : i;
        };
    return (0, l.jsxs)("div", {
        className: sn.iw,
        children: [
            _.isPurchased || _.isPartiallyOwnedBundle
                ? (0, l.jsx)(e2.c, { className: sn.On, isPartiallyPurchased: T })
                : w
                  ? (0, l.jsxs)("div", {
                        className: sn.pq,
                        children: [
                            (0, l.jsx)(B.E, { variant: "text-md/semibold", children: M.intl.string(M.t.rt69oo) }),
                            !L &&
                                (0, l.jsx)(B.E, {
                                    className: P()(sn.ed, !S && sn.un),
                                    variant: "text-xxs/normal",
                                    children: M.intl.string(M.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, l.jsx)(se.B, {
                        prices: Z,
                        product: i,
                        hasShopDiscount: k,
                        discountSource: f,
                        discount: G,
                        hasSufficientOrbs: q,
                        isProductDisabled: O,
                        discountOfferAmount: V,
                        onTrackClick: E,
                    }),
            (0, l.jsx)(eW.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !w || N || U
                        ? y
                            ? L
                                ? z
                                    ? (0, l.jsxs)(eX.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, l.jsx)(e9.A, { product: i, onSuccess: h, onTrackClick: E }),
                                              (0, l.jsx)(e4.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: h,
                                                  giftRecipient: d,
                                                  giftingOrigin: u,
                                                  onTrackClick: E,
                                              }),
                                          ],
                                      })
                                    : (0, l.jsx)(e9.A, { product: i, onSuccess: h, onTrackClick: E })
                                : $
                                  ? es(M.intl.string(M.t["9wfL34"]), !0)
                                  : w
                                    ? (0, l.jsx)(ez.$, {
                                          loading: b,
                                          loadingStartedLabel: M.intl.string(M.t["TYw+9s"]),
                                          loadingFinishedLabel: M.intl.string(M.t.Pg1UP5),
                                          onClick: async () => {
                                              E(et.sH.ADD_TO_COLLECTION),
                                                  await (0, I.iJ)(i.skuId),
                                                  h(),
                                                  (0, sl.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: et.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: M.intl.string(M.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, l.jsx)(l.Fragment, {
                                          children: Z.map((e, s) => {
                                              let t,
                                                  a,
                                                  n,
                                                  c,
                                                  o,
                                                  x = 0 === s,
                                                  p =
                                                      e.currency === sa.Yr.DISCORD_ORB
                                                          ? ((t = O
                                                                ? M.intl.string(M.t.cTdr3x)
                                                                : M.intl.string(M.t.zqh7ZM)),
                                                            (a = !q || O),
                                                            (n = M.intl.formatToPlainString(M.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = a ? `${n}, ${t}` : n),
                                                            (0, l.jsx)(eH.m, {
                                                                position: "top",
                                                                text: t,
                                                                shouldShow: a,
                                                                "aria-label": !1,
                                                                children: (0, l.jsx)(ez.$, {
                                                                    variant: x ? "primary" : "secondary",
                                                                    onClick: () => {
                                                                        E(et.sH.BUY_WITH_ORBS),
                                                                            (0, v.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, I.gB)(),
                                                                                        h(),
                                                                                        (0, sl.A)({
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
                                                                    text: M.intl.format(Y ? M.t.JC15qj : M.t.lOtBOI, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, l.jsx)(eV.C, {
                                                                                className: sn.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((o = X
                                                                ? M.intl.formatToPlainString(M.t["5U5RB5"], {
                                                                      discountOfferAmount: V,
                                                                  })
                                                                : M.intl.formatToPlainString(M.t["cNSL/j"], {
                                                                      price: (0, eJ.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, l.jsxs)(eX.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, l.jsx)(ez.$, {
                                                                        variant: x ? "primary" : "secondary",
                                                                        onClick: Q,
                                                                        text: o,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    z &&
                                                                        (0, l.jsx)(e4.A, {
                                                                            primary: x,
                                                                            product: i,
                                                                            onSuccess: h,
                                                                            giftRecipient: d,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: E,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, l.jsx)(r.Fragment, { children: p }, e.currency);
                                          }),
                                      })
                            : z
                              ? (0, l.jsx)(e4.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: h,
                                    fullWidth: !0,
                                    giftRecipient: d,
                                    giftingOrigin: u,
                                    onTrackClick: E,
                                })
                              : null
                        : es(M.intl.string(M.t.sEAnVH)),
            }),
        ],
    });
};
var sd = t(18967);
let so = (e) => {
    let { productRecord: s, selectedProduct: t, previewingProduct: i, user: r } = e,
        a = eS(s);
    return (0, l.jsxs)("div", {
        className: P()(sd.wd, { [sd.E7]: null != a.LeftPreview }),
        children: [
            (0, l.jsx)("div", { className: sd.dL, children: (0, l.jsx)(eU, { productRecord: s, selectedProduct: t }) }),
            null != a.LeftPreview &&
                (0, l.jsx)("div", {
                    className: sd._E,
                    children: (0, l.jsx)(a.LeftPreview, {
                        user: r,
                        selectedProduct: t,
                        previewingProduct: i,
                        productRecord: s,
                    }),
                }),
            (0, l.jsx)("div", { className: sd.F_, children: (0, l.jsx)(a.Info, { ...e }) }),
            (0, l.jsx)(sc, { ...e }),
        ],
    });
};
var su = t(408278),
    sm = t(972213),
    sx = t(586445),
    sh = t(139146),
    sE = t(668953),
    sp = t(881636),
    sv = t(428445);
let sj = (e) => {
    let { goPrev: s, goNext: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: sv.Y,
                children: (0, l.jsx)(su.K, {
                    "aria-label": M.intl.string(M.t["3NdvMK"]),
                    onClick: s,
                    icon: sE.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, l.jsx)("div", {
                className: sv.K,
                children: (0, l.jsx)(su.K, {
                    "aria-label": M.intl.string(M.t.RYIeOX),
                    onClick: t,
                    icon: sp.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
};
var sA = t(742441);
let sI = (e) => {
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
            tab: x,
            onClose: h,
            onTrackClick: E,
        } = e,
        p = eS(t),
        v = (0, R.aw)(a),
        j = v ? a.items.length : 0,
        A = r.useCallback(() => {
            j <= 1 || d((e) => (e - 1 + j) % j);
        }, [j, d]),
        I = r.useCallback(() => {
            j <= 1 || d((e) => (e + 1) % j);
        }, [j, d]),
        g = r.useCallback(
            (e) => {
                if (j <= 1) return;
                let s = e.target;
                "INPUT" === s.tagName ||
                    "TEXTAREA" === s.tagName ||
                    s.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), A())
                        : "ArrowRight" === e.key && (e.preventDefault(), I()));
            },
            [j, A, I],
        ),
        N = r.useCallback(() => {
            E(et.sH.CLOSE_DETAIL), h();
        }, [E, h]),
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
            className: P()(sA.i1, (0, et.EZ)(a.skuId) ? sA.bF : a.type === H.R.AVATAR_DECORATION ? sA.Jq : sA.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: g,
            children: [
                (0, l.jsx)("div", {
                    className: sA.KR,
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
                v && j > 1 && (0, l.jsx)(sj, { goPrev: A, goNext: I }),
                (0, l.jsxs)("div", {
                    className: sA.VG,
                    children: [
                        (0, l.jsx)(sh.R, {
                            product: t,
                            selectedVariantIndex: n,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        (0, l.jsx)(sx.V, { skuId: a.skuId, tab: x, onTrackClick: E }),
                        (0, l.jsx)(su.K, {
                            "aria-label": M.intl.string(M.t.cpT0Cq),
                            onClick: N,
                            icon: sm.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
};
var sg = t(460510);
let sN = (e) => {
    let {
            transitionState: s,
            onClose: t,
            product: i,
            category: a,
            returnRef: b,
            analyticsSource: P,
            analyticsLocations: D,
            shouldCheckoutWithOrbs: S,
            tab: B,
            giftRecipient: w,
            giftingOrigin: M,
        } = e,
        F = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
        U = (0, y.f)(i),
        { previewingVariantIndex: H } = U,
        G = (0, N.Q)(i),
        z = (0, T.q)(i, H),
        V = (0, k.rb)(i, G);
    n()(null != V, "Selected product should not be null");
    let { analyticsLocations: X } = (0, h.Ay)([...D, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, L.Yr)(V.skuId);
    let W = (0, O.U1)(a),
        [K, Y] = r.useState(0);
    r.useEffect(() => {
        null != F && (0, p.A)(F.id, F.getAvatarURL(void 0, 80));
    }, [F]);
    let Z = r.useMemo(() => (0, R.V6)(i.type, i.skuId), [i.type, i.skuId]);
    r.useEffect(() => {
        A.default.track(ei.HAw.OPEN_MODAL, {
            type: ei.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: P,
            location_stack: X,
            sku_id: V.skuId,
            product_type: Z,
        }),
            (0, I.RD)(V.skuId);
    }, [P, X, V.skuId, Z]);
    let { cardId: q, sessionId: $, tilePosition: J } = (0, g.uM)() ?? {},
        Q = r.useMemo(() => (0, k.v8)(i), [i]),
        ee = (0, C.R)({ skuId: V.skuId, productSkuIds: Q, analyticsLocations: X });
    (0, E.A)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
        properties: {
            sku_id: V.skuId,
            card_id: q,
            shop_session_id: $,
            position_in_section: J,
            product_sku_ids: Q,
            location_stack: X,
        },
    });
    let es = (0, v.o6)(),
        et = s === u.ip.EXITING,
        el = (0, f.c)("product_details_modal");
    if (null == F || (i.skuId === d.j.PREMIUM_TIER_2_1_DAY && !el)) return null;
    let er = (0, _.VG)(i),
        ea = {
            user: F,
            productRecord: i,
            productName: er,
            selectedProduct: V,
            previewingProduct: z ?? null,
            category: a,
            selectedVariantIndex: G,
            previewingVariantIndexProps: U,
            selectedBundleSlide: K,
            setSelectedBundleSlide: Y,
            tab: B,
            shouldCheckoutWithOrbs: S,
            giftRecipient: w?.id !== F.id ? w : void 0,
            giftingOrigin: w?.id !== F.id ? M : void 0,
            analyticsLocations: X,
            returnRef: b,
            onClose: t,
            onTrackClick: ee,
        };
    return (0, l.jsx)(h.f5, {
        value: X,
        children: (0, l.jsx)(m.d, {
            returnRef: b,
            transitionState: s,
            onClose: t,
            size: "xl",
            paddingSize: "sm",
            "aria-label": er,
            children: (0, l.jsx)("div", {
                className: sg.C,
                children: (0, l.jsxs)("div", {
                    className: sg.j,
                    children: [
                        (0, l.jsx)(so, { ...ea }),
                        (0, l.jsx)(sI, { ...ea, isClosing: et, isOrbCheckoutModalOpen: es, pdpBackground: W }),
                    ],
                }),
            }),
        }),
    });
};
