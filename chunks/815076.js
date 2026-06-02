t.r(s), t.d(s, { default: () => sg });
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
    A = t(287809),
    j = t(174459),
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
    P = t(503698),
    b = t.n(P),
    D = t(939249),
    S = t(534514),
    B = t(834730),
    M = t(14702),
    w = t(375708),
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
        className: b()(F.xn, { [F.Y4]: i }),
        onClick: d,
        "aria-label": n,
        children: (0, l.jsx)("div", { className: F.Yf, children: (0, l.jsx)(M.O, { product: c }) }),
    });
};
var H = t(575593),
    G = t(442759),
    z = t(344346),
    V = t(139136),
    X = t(395744),
    K = t(929283),
    W = t(719201);
let Z = (e) => {
    let { item: s, user: t, bundleFirstAvatarDecoration: i } = e;
    switch (s.type) {
        case H.R.AVATAR_DECORATION:
            return (0, l.jsx)("div", {
                className: W.h1,
                children: (0, l.jsx)(K.i, { user: t, item: s, isHighlighted: !0 }),
            });
        case H.R.PROFILE_EFFECT:
            return (0, l.jsx)("div", {
                className: W.sm,
                children: (0, l.jsx)(V.A, {
                    skuId: s.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case H.R.PROFILE_FRAME:
            return (0, l.jsx)("div", { className: W.ob, children: (0, l.jsx)(X.A, { frame: s }) });
        case H.R.NAMEPLATE:
            return (0, l.jsx)("div", {
                className: W.Dz,
                children: (0, l.jsx)(z.A, {
                    className: W.M4,
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
                  children: w.intl.format(w.t.Q1scdE, {
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
                                    children: w.intl.format(w.t.EcaRWt, {
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
    eA = t(986687),
    ej = t(101058),
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
                innerClassName: b()(ef.$L, t),
            }),
        });
    },
    ek = (e) => {
        let { user: s, nameplate: t, avatarDecoration: i } = e,
            r = (0, eR.Ov)();
        return (0, l.jsx)("div", {
            className: ef.nJ,
            role: "img",
            "aria-label": w.intl.string(w.t.SZeUdR),
            children: (0, l.jsxs)($.M, {
                children: [
                    (0, l.jsx)(eC, { user: r.mallow, innerClassName: ef.ab }),
                    (0, l.jsxs)(B.E, {
                        variant: "text-sm/semibold",
                        className: ef.OS,
                        children: [w.intl.string(w.t["yzW/fZ"]), " - 3"],
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
                        children: [w.intl.string(w.t["NG43/6"]), " - 12"],
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
                    ...(0, eE.Ay)({ author: s, channelId: "1337", content: w.intl.string(w.t.d5YwK5) }),
                    state: ei.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, l.jsx)("div", {
            role: "img",
            "aria-label": w.intl.string(w.t["TN+ZvB"]),
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
            d = (0, ej.V7)({ userId: t.id, image: n }),
            u = s.type === H.R.BUNDLE ? s.items[i ?? 0] : void 0,
            m = u?.type ?? s.type,
            x = m === H.R.AVATAR_DECORATION,
            h = m === H.R.PROFILE_EFFECT,
            { firstAvatarDecoration: E, firstProfileEffect: p, firstNameplate: v, firstProfileFrame: A } = (0, G.f5)(s),
            j = u?.type === H.R.AVATAR_DECORATION ? u : E,
            I = u?.type === H.R.PROFILE_EFFECT ? u : p,
            g = u?.type === H.R.PROFILE_FRAME ? u : A,
            N = u?.type === H.R.NAMEPLATE ? u : v;
        r.useEffect(() => {
            if (null != j) return (0, eI.p)({ avatarDecoration: j }), () => (0, eI.p)({ avatarDecoration: void 0 });
        }, [j]);
        let R = () =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(eA.A, {
                        ...c,
                        pendingAvatar: d,
                        user: t,
                        canUsePremiumCustomization: a,
                        pendingAvatarDecoration: j,
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
                children: (0, l.jsx)(ek, { user: t, nameplate: N, avatarDecoration: j }),
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
    eP = t(197952);
let eb = (e) => {
        let { user: s, productRecord: t, isClosing: i, isOrbCheckoutModalOpen: r } = e;
        return t.skuId === et.Dp.ORB_PROFILE_BADGE
            ? i || r
                ? null
                : (0, l.jsx)(ey.z, { user: s })
            : (0, et.EZ)(t.skuId)
              ? (0, l.jsx)(eO.I, {})
              : (0, l.jsx)(Y.B, { product: t, className: eP.M });
    },
    eD = {
        [en.COLLECTIBLE]: {
            LeftPreview: (e) => {
                let { user: s, selectedProduct: t, previewingProduct: i } = e,
                    r = i ?? t,
                    { firstAvatarDecoration: a } = (0, G.f5)(r),
                    [n] = r.items;
                return null == n ? null : (0, l.jsx)(Z, { item: n, user: s, bundleFirstAvatarDecoration: a });
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
                    u = w.intl.string(w.t.cTbdgu),
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
                                        children: w.intl.format(w.t["1tUCAO"], { count: n.length }),
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
        [en.EXTERNAL_ORB_BADGE]: { LeftPreview: q, Info: ea, RightPreview: eb },
        [en.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: q, Info: ea, RightPreview: eb },
        [en.EXTERNAL_GENERIC]: { LeftPreview: q, Info: ea, RightPreview: eb },
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
    eM = t(110629),
    ew = t(268959),
    eF = t(958942);
let eU = (e) => {
    let { productRecord: s, selectedProduct: t } = e,
        i = (0, eB.Do)("CollectiblesShopProductDetailsModal") && t.type === H.R.PROFILE_FRAME;
    return (0, l.jsx)("div", {
        className: eF.N,
        children: i
            ? (0, l.jsx)(eM.A, { location: "CollectiblesShopProductDetailsModal" })
            : (0, l.jsx)(ew.A, { skuId: s.skuId }),
    });
};
var eH = t(990078),
    eG = t(462887),
    ez = t(821609),
    eV = t(318254),
    eX = t(825484),
    eK = t(331322),
    eW = t(736653),
    eZ = t(44120),
    eY = t(465794),
    eq = t(757036),
    e$ = t(761705),
    eJ = t(580630),
    eQ = t(4227),
    e0 = t(640634),
    e1 = t(940980),
    e5 = t(466459),
    e2 = t(395068),
    e8 = t(49620),
    e4 = t(878112),
    e6 = t(452255),
    e7 = t(641405),
    e9 = t(561769),
    e3 = t(680262),
    se = t(525723),
    ss = t(347722),
    st = t(57020),
    si = t(61750),
    sl = t(788868),
    sr = t(818348),
    sa = t(237309);
let sn = (e) => {
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
            onTrackClick: A,
        } = e,
        { cardId: j, sessionId: N, tilePosition: f } = (0, g.uM)() ?? {},
        C = (0, eq.L)(sl.PremiumTypes.TIER_2),
        k = (0, R.xM)(s),
        _ = (0, eB.Do)("CollectiblesShopProductDetailsModal") && i.type === H.R.PROFILE_FRAME,
        L = eN.Ay.canUseShopDiscounts(s) || _,
        T = (0, e5.h)(t),
        { isPurchased: O, isPartiallyOwnedBundle: y } = (0, e5.h)(i),
        { isDisabled: P } = (0, ee.I)(i.skuId),
        D = (0, R.Zu)({ product: i, isPartiallyOwnedBundle: y, isPurchased: O }),
        S = (0, o.bG)([eQ.A], () => eQ.A.isClaiming === i?.skuId),
        M = (0, eW.Ay)(),
        F = (0, eG.M)(M),
        U = (0, R.G0)(i),
        G = (0, R.yt)(i, ei.lid.DEFAULT),
        z = G?.amount === 0,
        V = r.useMemo(() => (0, R.fT)(i, L), [i, L]),
        X = (0, ss.X)(i),
        K = (0, se.V_)(t),
        W = null != K,
        Z = (0, e1.W)("CollectiblesShopProductDetailsModal"),
        Y = c === et.G2.ORBS && n ? e9.Hi.ORBS : Z ? e9.Hi.FIAT : void 0,
        q = (0, e0.l)("collectibles_shop_product_details_modal"),
        { checkoutEligiblePrices: $, hasSufficientOrbs: J } = (0, st.F)({
            product: i,
            hasShopDiscount: L,
            hasDiscountOffer: W,
            prioritizedCurrency: Y,
        }),
        Q = (0, e2.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        es = r.useMemo(() => $.some((e) => e.currency === sr.Yr.DISCORD_ORB), [$]);
    (0, e$.W)({ disableFetch: !es });
    let el = r.useCallback(() => {
            A(et.sH.BUY_WITH_FIAT),
                (0, eZ.A)({ skuId: i.skuId, analyticsLocations: m, onClose: (e) => (e ? p() : (0, sr.tE)()) });
        }, [m, p, i.skuId, A]),
        er = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = (0, l.jsx)(eY.A, {
                    subscriptionTier: sl.pe.TIER_2,
                    fullWidth: !0,
                    buttonTextOverride: e,
                    onClick: () => {
                        A(et.sH.UNLOCK_WITH_NITRO), (0, e6.M)();
                    },
                    onSubscribeModalClose: () => {
                        (0, e6.t)({
                            product: t,
                            category: a,
                            shouldCheckoutWithOrbs: n,
                            returnRef: E,
                            analyticsLocations: m,
                            tab: c,
                            giftRecipient: d,
                            giftingOrigin: u,
                            cardId: j,
                            sessionId: N,
                            tilePosition: f,
                        });
                    },
                });
            return s ? (0, l.jsx)(h.f5, { value: [...m, x.A.PROFILE_FRAMES_EA_MARKETING], children: i }) : i;
        };
    return (0, l.jsxs)("div", {
        className: sa.iw,
        children: [
            T.isPurchased || T.isPartiallyOwnedBundle
                ? (0, l.jsx)(e8.c, { className: sa.On, isPartiallyPurchased: y })
                : U
                  ? (0, l.jsxs)("div", {
                        className: sa.pq,
                        children: [
                            (0, l.jsx)(B.E, { variant: "text-md/semibold", children: w.intl.string(w.t.rt69oo) }),
                            !O &&
                                (0, l.jsx)(B.E, {
                                    className: b()(sa.ed, !F && sa.un),
                                    variant: "text-xxs/normal",
                                    children: w.intl.string(w.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, l.jsx)(e3.B, {
                        prices: $,
                        product: i,
                        hasShopDiscount: L,
                        discountSource: k,
                        discount: V,
                        hasSufficientOrbs: J,
                        isProductDisabled: P,
                        discountOfferAmount: K,
                        onTrackClick: A,
                    }),
            (0, l.jsx)(eK.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !U || C || z
                        ? D
                            ? O
                                ? X
                                    ? (0, l.jsxs)(eX.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, l.jsx)(e7.A, { product: i, onSuccess: p, onTrackClick: A }),
                                              (0, l.jsx)(e4.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: p,
                                                  giftRecipient: d,
                                                  giftingOrigin: u,
                                                  onTrackClick: A,
                                              }),
                                          ],
                                      })
                                    : (0, l.jsx)(e7.A, { product: i, onSuccess: p, onTrackClick: A })
                                : Q
                                  ? er(w.intl.string(w.t.IvmZVF), !0)
                                  : U
                                    ? (0, l.jsx)(ez.$, {
                                          loading: S,
                                          loadingStartedLabel: w.intl.string(w.t["TYw+9s"]),
                                          loadingFinishedLabel: w.intl.string(w.t.Pg1UP5),
                                          onClick: async () => {
                                              A(et.sH.ADD_TO_COLLECTION),
                                                  await (0, I.iJ)(i.skuId),
                                                  p(),
                                                  (0, si.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: et.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: w.intl.string(w.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, l.jsx)(l.Fragment, {
                                          children: $.map((e, s) => {
                                              let t,
                                                  a,
                                                  n,
                                                  c,
                                                  o,
                                                  x = 0 === s,
                                                  h =
                                                      e.currency === sr.Yr.DISCORD_ORB
                                                          ? ((t = P
                                                                ? w.intl.string(w.t.cTdr3x)
                                                                : w.intl.string(w.t.zqh7ZM)),
                                                            (a = !J || P),
                                                            (n = w.intl.formatToPlainString(w.t.yi41qQ, {
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
                                                                        A(et.sH.BUY_WITH_ORBS),
                                                                            (0, v.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, I.gB)(),
                                                                                        p(),
                                                                                        (0, si.A)({
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
                                                                    text: w.intl.format(q ? w.t.JC15qj : w.t.lOtBOI, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, l.jsx)(eV.C, {
                                                                                className: sa.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((o = W
                                                                ? w.intl.formatToPlainString(w.t["5U5RB5"], {
                                                                      discountOfferAmount: K,
                                                                  })
                                                                : w.intl.formatToPlainString(w.t["cNSL/j"], {
                                                                      price: (0, eJ.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, l.jsxs)(eX.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, l.jsx)(ez.$, {
                                                                        variant: x ? "primary" : "secondary",
                                                                        onClick: el,
                                                                        text: o,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    X &&
                                                                        (0, l.jsx)(e4.A, {
                                                                            primary: x,
                                                                            product: i,
                                                                            onSuccess: p,
                                                                            giftRecipient: d,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: A,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, l.jsx)(r.Fragment, { children: h }, e.currency);
                                          }),
                                      })
                            : X
                              ? (0, l.jsx)(e4.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: p,
                                    fullWidth: !0,
                                    giftRecipient: d,
                                    giftingOrigin: u,
                                    onTrackClick: A,
                                })
                              : null
                        : er(w.intl.string(w.t.sEAnVH)),
            }),
        ],
    });
};
var sc = t(18967);
let sd = (e) => {
    let { productRecord: s, selectedProduct: t, previewingProduct: i, user: r } = e,
        a = eS(s);
    return (0, l.jsxs)("div", {
        className: b()(sc.wd, { [sc.E7]: null != a.LeftPreview }),
        children: [
            (0, l.jsx)("div", { className: sc.dL, children: (0, l.jsx)(eU, { productRecord: s, selectedProduct: t }) }),
            null != a.LeftPreview &&
                (0, l.jsx)("div", {
                    className: sc._E,
                    children: (0, l.jsx)(a.LeftPreview, {
                        user: r,
                        selectedProduct: t,
                        previewingProduct: i,
                        productRecord: s,
                    }),
                }),
            (0, l.jsx)("div", { className: sc.F_, children: (0, l.jsx)(a.Info, { ...e }) }),
            (0, l.jsx)(sn, { ...e }),
        ],
    });
};
var so = t(408278),
    su = t(972213),
    sm = t(586445),
    sx = t(139146),
    sh = t(668953),
    sE = t(881636),
    sp = t(428445);
let sv = (e) => {
    let { goPrev: s, goNext: t } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: sp.Y,
                children: (0, l.jsx)(so.K, {
                    "aria-label": w.intl.string(w.t["3NdvMK"]),
                    onClick: s,
                    icon: sh.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, l.jsx)("div", {
                className: sp.K,
                children: (0, l.jsx)(so.K, {
                    "aria-label": w.intl.string(w.t.RYIeOX),
                    onClick: t,
                    icon: sE.u,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
        ],
    });
};
var sA = t(742441);
let sj = (e) => {
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
        A = v ? a.items.length : 0,
        j = r.useCallback(() => {
            A <= 1 || d((e) => (e - 1 + A) % A);
        }, [A, d]),
        I = r.useCallback(() => {
            A <= 1 || d((e) => (e + 1) % A);
        }, [A, d]),
        g = r.useCallback(
            (e) => {
                if (A <= 1) return;
                let s = e.target;
                "INPUT" === s.tagName ||
                    "TEXTAREA" === s.tagName ||
                    s.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), j())
                        : "ArrowRight" === e.key && (e.preventDefault(), I()));
            },
            [A, j, I],
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
            className: b()(sA.i1, (0, et.EZ)(a.skuId) ? sA.bF : a.type === H.R.AVATAR_DECORATION ? sA.Jq : sA.eF),
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
                v && A > 1 && (0, l.jsx)(sv, { goPrev: j, goNext: I }),
                (0, l.jsxs)("div", {
                    className: sA.VG,
                    children: [
                        (0, l.jsx)(sx.R, {
                            product: t,
                            selectedVariantIndex: n,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        (0, l.jsx)(sm.V, { skuId: a.skuId, tab: x, onTrackClick: E }),
                        (0, l.jsx)(so.K, {
                            "aria-label": w.intl.string(w.t.cpT0Cq),
                            onClick: N,
                            icon: su.d,
                            variant: "overlay-secondary",
                            size: "sm",
                        }),
                    ],
                }),
            ],
        })
    );
};
var sI = t(460510);
let sg = (e) => {
    let {
            transitionState: s,
            onClose: t,
            product: i,
            category: a,
            returnRef: P,
            analyticsSource: b,
            analyticsLocations: D,
            shouldCheckoutWithOrbs: S,
            tab: B,
            giftRecipient: M,
            giftingOrigin: w,
        } = e,
        F = (0, o.bG)([A.default], () => A.default.getCurrentUser()),
        U = (0, y.f)(i),
        { previewingVariantIndex: H } = U,
        G = (0, N.Q)(i),
        z = (0, T.q)(i, H),
        V = (0, k.rb)(i, G);
    n()(null != V, "Selected product should not be null");
    let { analyticsLocations: X } = (0, h.Ay)([...D, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, L.Yr)(V.skuId);
    let K = (0, O.U1)(a),
        [W, Z] = r.useState(0);
    r.useEffect(() => {
        null != F && (0, p.A)(F.id, F.getAvatarURL(void 0, 80));
    }, [F]);
    let Y = r.useMemo(() => (0, R.V6)(i.type, i.skuId), [i.type, i.skuId]);
    r.useEffect(() => {
        j.default.track(ei.HAw.OPEN_MODAL, {
            type: ei.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: b,
            location_stack: X,
            sku_id: V.skuId,
            product_type: Y,
        }),
            (0, I.RD)(V.skuId);
    }, [b, X, V.skuId, Y]);
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
            selectedBundleSlide: W,
            setSelectedBundleSlide: Z,
            tab: B,
            shouldCheckoutWithOrbs: S,
            giftRecipient: M?.id !== F.id ? M : void 0,
            giftingOrigin: M?.id !== F.id ? w : void 0,
            analyticsLocations: X,
            returnRef: P,
            onClose: t,
            onTrackClick: ee,
        };
    return (0, l.jsx)(h.f5, {
        value: X,
        children: (0, l.jsx)(m.d, {
            returnRef: P,
            transitionState: s,
            onClose: t,
            size: "xl",
            paddingSize: "sm",
            "aria-label": er,
            children: (0, l.jsx)("div", {
                className: sI.C,
                children: (0, l.jsxs)("div", {
                    className: sI.j,
                    children: [
                        (0, l.jsx)(sd, { ...ea }),
                        (0, l.jsx)(sj, { ...ea, isClosing: et, isOrbCheckoutModalOpen: es, pdpBackground: K }),
                    ],
                }),
            }),
        }),
    });
};
