t.r(s), t.d(s, { default: () => sC });
var i,
    r = t(627968),
    l = t(64700),
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
    I = t(287809),
    v = t(174459),
    R = t(859040),
    g = t(440938),
    j = t(298072),
    N = t(993408),
    k = t(503089),
    C = t(966619),
    _ = t(623373),
    f = t(536572),
    T = t(177366),
    O = t(827066),
    L = t(212407),
    D = t(935094),
    P = t(503698),
    b = t.n(P),
    y = t(939249),
    S = t(534514),
    M = t(834730),
    B = t(14702),
    F = t(375708),
    w = t(701180);
let U = (e) => {
    let { item: s, index: t, isSelected: i, setSelected: a, label: n } = e,
        c = l.useMemo(() => ({ skuId: s.skuId, type: s.type, items: [s] }), [s]),
        d = l.useCallback(() => a(t), [a, t]);
    return (0, r.jsx)(y.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        tabIndex: i ? 0 : -1,
        className: b()(w.xn, { [w.Y4]: i }),
        onClick: d,
        "aria-label": n,
        children: (0, r.jsx)(B.O, { product: c }),
    });
};
var H = t(575593),
    G = t(442759),
    V = t(344346),
    z = t(139136),
    X = t(395744),
    K = t(929283),
    W = t(719201);
let Z = (e) => {
    let { item: s, user: t, bundleFirstAvatarDecoration: i } = e;
    switch (s.type) {
        case H.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: W.h1,
                children: (0, r.jsx)(K.i, { user: t, item: s, isHighlighted: !0 }),
            });
        case H.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: W.sm,
                children: (0, r.jsx)(z.A, {
                    skuId: s.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case H.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: W.ob, children: (0, r.jsx)(X.A, { frame: s }) });
        case H.R.NAMEPLATE:
            return (0, r.jsx)("div", {
                className: W.Dz,
                children: (0, r.jsx)(V.A, {
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
var q = t(846957);
let Y = (e) => {
    let { selectedProduct: s, previewingProduct: t } = e;
    return (0, r.jsx)(q.B, { product: t ?? s });
};
var $ = t(247928),
    J = t(975571),
    Q = t(13875),
    ee = t(495565),
    es = t(740076),
    et = t(110629),
    ei = t(63574),
    er = t(661847),
    el = t(758836),
    ea = t(652215),
    en = t(630709);
let ec = (e) => {
        let { skuId: s } = e;
        return (0, el.EZ)(s)
            ? (0, r.jsx)(M.E, {
                  variant: "text-sm/normal",
                  className: en.CU,
                  children: F.intl.format(F.t.Q1scdE, {
                      helpdeskArticle: J.A.getArticleURL(ea.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    ed = (e) => {
        let { productRecord: s, productName: t, selectedProduct: i, previewingVariantIndexProps: l } = e,
            { previewingVariantIndex: a, handleEntering: n, handleLeaving: c } = l,
            d = (0, O.q)(s, a) ?? i,
            o = (0, ee.r)(d, !1),
            { disabledReason: u } = (0, es.I)(i.skuId),
            m = (0, _.B1)(s),
            h = (0, Q.Do)("CollectiblesShopProductDetailsModal") && i.type === H.R.PROFILE_FRAME;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: en.sn,
                    children: [
                        h &&
                            (0, r.jsx)("div", {
                                className: en.$l,
                                children: (0, r.jsx)(et.A, { location: "CollectiblesShopProductDetailsModal" }),
                            }),
                        (0, r.jsx)(S.D, { variant: "heading-xl/extrabold", className: en.R_, children: t }),
                        (0, r.jsx)(M.E, { variant: "text-sm/normal", children: o }),
                        (0, r.jsx)(ec, { skuId: d.skuId }),
                        null !== u && (0, r.jsx)(M.E, { variant: "text-xs/normal", className: en.H$, children: u }),
                    ],
                }),
                m &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(ei.A, { skuId: s.skuId, overrideVariantIndex: a, className: en.a9 }),
                            (0, r.jsx)("div", {
                                className: en._x,
                                children: (0, r.jsx)($.M, {
                                    children: (0, r.jsx)(er.A, {
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
var eo =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    eu = t(97808),
    em = t(778712),
    eh = t(359778),
    ex = t(245604),
    eE = t(460905),
    ep = t(262295),
    eA = t(320095),
    eI = t(963852),
    ev = t(763754),
    eR = t(20851),
    eg = t(986687),
    ej = t(101058),
    eN = t(84540),
    ek = t(836602),
    eC = t(428262),
    e_ = t(780898),
    ef = t(180129);
let eT = (e) => {
        let { user: s, innerClassName: t } = e;
        return (0, r.jsx)("div", {
            className: ef.mV,
            children: (0, r.jsx)(ep.A, {
                avatar: (0, r.jsx)(eu.eu, {
                    src: s.avatarSrc,
                    size: em._3.SIZE_32,
                    "aria-label": s.name,
                    status: ea.clD.ONLINE,
                }),
                name: s.name,
                innerClassName: b()(ef.$L, t),
            }),
        });
    },
    eO = (e) => {
        let { user: s, nameplate: t, avatarDecoration: i } = e,
            l = (0, e_.Ov)();
        return (0, r.jsx)("div", {
            className: ef.nJ,
            role: "img",
            "aria-label": F.intl.string(F.t.SZeUdR),
            children: (0, r.jsxs)($.M, {
                children: [
                    (0, r.jsx)(eT, { user: l.mallow, innerClassName: ef.ab }),
                    (0, r.jsxs)(M.E, {
                        variant: "text-sm/semibold",
                        className: ef.OS,
                        children: [F.intl.string(F.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eT, { user: l.phibi, innerClassName: ef.e9 }),
                    (0, r.jsx)("div", {
                        className: ef.mV,
                        children: (0, r.jsx)(V.A, {
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
                    (0, r.jsx)(eT, { user: l.locke, innerClassName: ef.e9 }),
                    (0, r.jsxs)(M.E, {
                        variant: "text-sm/semibold",
                        className: ef.OS,
                        children: [F.intl.string(F.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eT, { user: l.boom, innerClassName: ef.bD }),
                    (0, r.jsx)(eT, { user: l.cherry, innerClassName: ef.bD }),
                ],
            }),
        });
    },
    eL = (e) => {
        let { user: s } = e,
            t = ((e) => {
                let { author: s } = e;
                return (0, eA.rh)({
                    ...(0, eI.Ay)({ author: s, channelId: "1337", content: F.intl.string(F.t.d5YwK5) }),
                    state: ea.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": F.intl.string(F.t["TN+ZvB"]),
            children: (0, r.jsx)($.M, {
                children: (0, r.jsxs)(eh.Z, {
                    className: ef.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(eR.A, { className: ef.G5, author: (0, ev.p_)(t), message: t }, t.id),
                        (0, r.jsxs)("div", {
                            className: ef.lG,
                            children: [
                                (0, r.jsx)(ex.U, { size: "md", color: "currentColor", className: ef.hq }),
                                (0, r.jsx)(eE.n, { size: "md", color: "currentColor", className: ef.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eD = (e) => {
        let { product: s, user: t, activeBundleSlide: i } = e,
            a = eC.Ay.canUsePremiumProfileCustomization(t),
            { pendingAvatar: n, ...c } = (0, o.cf)([ek.A], () => ek.A.getPendingChanges()),
            d = (0, ej.V7)({ userId: t.id, image: n }),
            u = s.type === H.R.BUNDLE ? s.items[i ?? 0] : void 0,
            m = u?.type ?? s.type,
            h = m === H.R.AVATAR_DECORATION,
            { firstAvatarDecoration: x, firstProfileEffect: E, firstNameplate: p, firstProfileFrame: A } = (0, G.f5)(s),
            I = u?.type === H.R.AVATAR_DECORATION ? u : x,
            v = u?.type === H.R.PROFILE_EFFECT ? u : E,
            R = u?.type === H.R.PROFILE_FRAME ? u : A,
            g = u?.type === H.R.NAMEPLATE ? u : p;
        if (
            (l.useEffect(() => {
                if (null != I) return (0, eN.p)({ avatarDecoration: I }), () => (0, eN.p)({ avatarDecoration: void 0 });
            }, [I]),
            m === H.R.NAMEPLATE && null != g)
        )
            return (0, r.jsx)("div", {
                className: ef.Zj,
                children: (0, r.jsx)(eO, { user: t, nameplate: g, avatarDecoration: I }),
            });
        return (0, r.jsx)("div", {
            className: h ? ef.RA : ef.hZ,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eg.A, {
                        ...c,
                        pendingAvatar: d,
                        user: t,
                        canUsePremiumCustomization: a,
                        pendingAvatarDecoration: I,
                        pendingProfileEffect: v,
                        pendingProfileFrame: R,
                        disabledInputs: !0,
                        hideMessageInput: null == v,
                        hideCustomStatus: !0,
                        hideBioSection: h,
                        hideExampleButton: !0,
                        interactive: !1,
                        containerClassName: h ? ef.Bb : void 0,
                    }),
                    h && (0, r.jsx)(eL, { user: t }),
                ],
            }),
        });
    },
    eP = (e) => {
        let { user: s, selectedProduct: t, previewingProduct: i, selectedBundleSlide: l } = e;
        return (0, r.jsx)(eD, { user: s, product: i ?? t, activeBundleSlide: l });
    };
var eb = t(231540),
    ey = t(184659),
    eS = t(197952);
let eM = (e) => {
        let { user: s, productRecord: t, isClosing: i, isOrbCheckoutModalOpen: l } = e;
        return t.skuId === el.Dp.ORB_PROFILE_BADGE
            ? i || l
                ? null
                : (0, r.jsx)(ey.z, { user: s })
            : (0, el.EZ)(t.skuId)
              ? (0, r.jsx)(eb.I, {})
              : (0, r.jsx)(q.B, { product: t, className: eS.M });
    },
    eB = {
        [eo.COLLECTIBLE]: {
            LeftPreview: (e) => {
                let { user: s, selectedProduct: t, previewingProduct: i } = e,
                    l = i ?? t,
                    { firstAvatarDecoration: a } = (0, G.f5)(l),
                    [n] = l.items;
                return null == n ? null : (0, r.jsx)(Z, { item: n, user: s, bundleFirstAvatarDecoration: a });
            },
            Info: ed,
            RightPreview: eP,
        },
        [eo.BUNDLE]: {
            LeftPreview: null,
            Info: (e) => {
                let { productRecord: s, productName: t, selectedBundleSlide: i, setSelectedBundleSlide: a } = e,
                    n = s.items,
                    c = s.bundledProducts,
                    d = n[i],
                    o = c?.[i],
                    u = F.intl.string(F.t.cTbdgu),
                    m = o?.name,
                    h = l.useRef(null),
                    x = l.useCallback(
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
                    l.useEffect(() => {
                        let e = h.current;
                        if (null == e || !e.contains(document.activeElement)) return;
                        let s = e.querySelectorAll('[role="radio"]');
                        s[i]?.focus();
                    }, [i]),
                    (0, r.jsxs)("div", {
                        className: w.Qf,
                        children: [
                            (0, r.jsxs)("div", {
                                className: w.KI,
                                children: [
                                    (0, r.jsx)(S.D, { variant: "heading-xl/extrabold", className: w.R_, children: t }),
                                    (0, r.jsx)(M.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        children: F.intl.format(F.t["1tUCAO"], { count: n.length }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(M.E, {
                                variant: "text-xs/medium",
                                color: "text-subtle",
                                className: w.a9,
                                children: u,
                            }),
                            (0, r.jsx)("div", {
                                className: w.vg,
                                children: (0, r.jsx)("div", {
                                    ref: h,
                                    className: w.hK,
                                    role: "radiogroup",
                                    "aria-label": u,
                                    tabIndex: -1,
                                    onKeyDown: x,
                                    children: n.map((e, s) => {
                                        let t = c?.[s]?.name ?? e.skuId;
                                        return (0, r.jsx)(
                                            U,
                                            { item: e, index: s, isSelected: s === i, setSelected: a, label: t },
                                            e.skuId,
                                        );
                                    }),
                                }),
                            }),
                            null != d &&
                                null != m &&
                                (0, r.jsxs)("div", {
                                    className: w.G8,
                                    "aria-live": "polite",
                                    children: [
                                        (0, r.jsx)(S.D, {
                                            variant: "heading-md/semibold",
                                            className: w.dT,
                                            children: m,
                                        }),
                                        o?.summary != null &&
                                            (0, r.jsx)(M.E, {
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
            RightPreview: eP,
        },
        [eo.EXTERNAL_ORB_BADGE]: { LeftPreview: Y, Info: ed, RightPreview: eM },
        [eo.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: Y, Info: ed, RightPreview: eM },
        [eo.EXTERNAL_GENERIC]: { LeftPreview: Y, Info: ed, RightPreview: eM },
    },
    eF = (e) => {
        var s;
        return eB[
            ((s = e),
            (0, el.pQ)(s.skuId)
                ? s.skuId === el.Dp.ORB_PROFILE_BADGE
                    ? "EXTERNAL_ORB_BADGE"
                    : (0, el.EZ)(s.skuId)
                      ? "EXTERNAL_FRACTIONAL_NITRO"
                      : "EXTERNAL_GENERIC"
                : (0, N.aw)(s)
                  ? "BUNDLE"
                  : "COLLECTIBLE")
        ];
    };
var ew = t(268959),
    eU = t(958942);
let eH = (e) => {
    let { productRecord: s, selectedProduct: t } = e,
        i = (0, Q.Do)("CollectiblesShopProductDetailsModal") && t.type === H.R.PROFILE_FRAME;
    return (0, r.jsx)("div", { className: eU.N, children: !i && (0, r.jsx)(ew.A, { skuId: s.skuId }) });
};
var eG = t(990078),
    eV = t(462887),
    ez = t(821609),
    eX = t(318254),
    eK = t(825484),
    eW = t(331322),
    eZ = t(736653),
    eq = t(44120),
    eY = t(465794),
    e$ = t(757036),
    eJ = t(761705),
    eQ = t(371446),
    e0 = t(580630),
    e1 = t(4227),
    e5 = t(640634),
    e4 = t(940980),
    e7 = t(466459),
    e2 = t(395068),
    e6 = t(49620),
    e8 = t(878112),
    e9 = t(366174),
    e3 = t(337817),
    se = t(452255),
    ss = t(641405),
    st = t(561769),
    si = t(293477),
    sr = t(525723),
    sl = t(347722),
    sa = t(57020),
    sn = t(61750),
    sc = t(788868),
    sd = t(818348),
    so = t(237309);
let su = (e) => {
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
            onTrackClick: I,
        } = e,
        { cardId: v, sessionId: j, tilePosition: k } = (0, g.uM)() ?? {},
        C = (0, e$.L)(sc.PremiumTypes.TIER_2),
        _ = (0, N.xM)(s),
        f = (0, Q.Do)("CollectiblesShopProductDetailsModal") && i.type === H.R.PROFILE_FRAME,
        T = eC.Ay.canUseShopDiscounts(s) || f,
        O = (0, e7.h)(t),
        { isPurchased: L, isPartiallyOwnedBundle: D } = (0, e7.h)(i),
        { isDisabled: P } = (0, es.I)(i.skuId),
        y = (0, N.Zu)({ product: i, isPartiallyOwnedBundle: D, isPurchased: L }),
        S = (0, o.bG)([e1.A], () => e1.A.isClaiming === i?.skuId),
        B = (0, eZ.Ay)(),
        w = (0, eV.M)(B),
        U = (0, N.G0)(i),
        G = (0, N.yt)(i, ea.lid.DEFAULT),
        V = G?.amount === 0,
        z = l.useMemo(() => (0, N.fT)(i, T), [i, T]),
        X = (0, sl.X)(i),
        { enabled: K } = (0, eQ.Z)({ location: "collectibles_shop_product_details_modal" }),
        W = (0, sr.V_)(t),
        Z = null != W,
        q = (0, e4.W)("CollectiblesShopProductDetailsModal"),
        Y = c === el.G2.ORBS && n ? st.Hi.ORBS : q ? st.Hi.FIAT : void 0,
        $ = (0, e5.l)("collectibles_shop_product_details_modal"),
        {
            checkoutEligiblePrices: J,
            isOrbExclusive: ee,
            hasSufficientOrbs: et,
        } = (0, sa.F)({ product: i, hasShopDiscount: T, hasDiscountOffer: Z, prioritizedCurrency: Y }),
        ei = (0, e2.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        er = l.useMemo(() => J.some((e) => e.currency === sd.Yr.DISCORD_ORB), [J]);
    (0, eJ.W)({ disableFetch: !er });
    let en = l.useCallback(() => {
            I(el.sH.BUY_WITH_FIAT),
                (0, eq.A)({ skuId: i.skuId, analyticsLocations: m, onClose: (e) => (e ? p() : (0, sd.tE)()) });
        }, [m, p, i.skuId, I]),
        ec = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = (0, r.jsx)(eY.A, {
                    subscriptionTier: sc.pe.TIER_2,
                    fullWidth: !0,
                    buttonTextOverride: e,
                    onClick: () => {
                        I(el.sH.UNLOCK_WITH_NITRO), (0, se.M)();
                    },
                    onSubscribeModalClose: () => {
                        (0, se.t)({
                            product: t,
                            category: a,
                            shouldCheckoutWithOrbs: n,
                            returnRef: E,
                            analyticsLocations: m,
                            tab: c,
                            giftRecipient: d,
                            giftingOrigin: u,
                            cardId: v,
                            sessionId: j,
                            tilePosition: k,
                        });
                    },
                });
            return s ? (0, r.jsx)(x.f5, { value: [...m, h.A.PROFILE_FRAMES_EA_MARKETING], children: i }) : i;
        };
    return (0, r.jsxs)("div", {
        className: so.iw,
        children: [
            O.isPurchased || O.isPartiallyOwnedBundle
                ? (0, r.jsx)(e6.c, { className: so.On, isPartiallyPurchased: D })
                : U
                  ? (0, r.jsxs)("div", {
                        className: so.pq,
                        children: [
                            (0, r.jsx)(M.E, { variant: "text-md/semibold", children: F.intl.string(F.t.rt69oo) }),
                            !L &&
                                (0, r.jsx)(M.E, {
                                    className: b()(so.ed, !w && so.un),
                                    variant: "text-xxs/normal",
                                    children: F.intl.string(F.t.nKdAlO),
                                }),
                        ],
                    })
                  : K
                    ? (0, r.jsx)(si.B, {
                          prices: J,
                          product: i,
                          hasShopDiscount: T,
                          discountSource: _,
                          discount: z,
                          hasSufficientOrbs: et,
                          isProductDisabled: P,
                          discountOfferAmount: W,
                          onTrackClick: I,
                      })
                    : ee
                      ? null
                      : (0, r.jsxs)("div", {
                            className: so.pw,
                            children: [
                                (0, r.jsx)(e9.A, {
                                    product: i,
                                    discount: z,
                                    hasShopDiscount: T,
                                    discountSource: _,
                                    hideStrikethroughPrice: !T || Z,
                                    discountIconDisplayMode: "tooltip",
                                    discountIconSize: "xs",
                                    discountOfferAmount: W,
                                }),
                                T || Z ? null : (0, r.jsx)(e3.A, { product: i, onTrackClick: I }),
                            ],
                        }),
            (0, r.jsx)(eW.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !U || C || V
                        ? y
                            ? L
                                ? X
                                    ? (0, r.jsxs)(eK.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(ss.A, { product: i, onSuccess: p, onTrackClick: I }),
                                              (0, r.jsx)(e8.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: p,
                                                  giftRecipient: d,
                                                  giftingOrigin: u,
                                                  onTrackClick: I,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(ss.A, { product: i, onSuccess: p, onTrackClick: I })
                                : ei
                                  ? ec(F.intl.string(F.t.IvmZVF), !0)
                                  : U
                                    ? (0, r.jsx)(ez.$, {
                                          loading: S,
                                          loadingStartedLabel: F.intl.string(F.t["TYw+9s"]),
                                          loadingFinishedLabel: F.intl.string(F.t.Pg1UP5),
                                          onClick: async () => {
                                              I(el.sH.ADD_TO_COLLECTION),
                                                  await (0, R.iJ)(i.skuId),
                                                  p(),
                                                  (0, sn.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: el.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: F.intl.string(F.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, r.jsx)(r.Fragment, {
                                          children: J.map((e, s) => {
                                              let t,
                                                  a,
                                                  n,
                                                  c,
                                                  o,
                                                  h = 0 === s,
                                                  x =
                                                      e.currency === sd.Yr.DISCORD_ORB
                                                          ? ((t = P
                                                                ? F.intl.string(F.t.cTdr3x)
                                                                : F.intl.string(F.t.zqh7ZM)),
                                                            (a = !et || P),
                                                            (n = F.intl.formatToPlainString(F.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = a ? `${n}, ${t}` : n),
                                                            (0, r.jsx)(eG.m, {
                                                                position: "top",
                                                                text: t,
                                                                shouldShow: a,
                                                                "aria-label": !1,
                                                                children: (0, r.jsx)(ez.$, {
                                                                    variant: h ? "primary" : "secondary",
                                                                    onClick: () => {
                                                                        I(el.sH.BUY_WITH_ORBS),
                                                                            (0, A.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, R.gB)(),
                                                                                        p(),
                                                                                        (0, sn.A)({
                                                                                            product: i,
                                                                                            analyticsLocations: m,
                                                                                            itemConsumed:
                                                                                                e?.entitlements?.[0]
                                                                                                    ?.consumed,
                                                                                            purchaseType: el.gs.ORB,
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
                                                                            (0, r.jsx)(eX.C, {
                                                                                className: so.fN,
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
                                                                      discountOfferAmount: W,
                                                                  }))
                                                                : K &&
                                                                  (o = F.intl.formatToPlainString(F.t["cNSL/j"], {
                                                                      price: (0, e0.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(eK.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(ez.$, {
                                                                        variant: h ? "primary" : "secondary",
                                                                        onClick: en,
                                                                        text: o,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    X &&
                                                                        (0, r.jsx)(e8.A, {
                                                                            primary: h,
                                                                            product: i,
                                                                            onSuccess: p,
                                                                            giftRecipient: d,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: I,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, r.jsx)(l.Fragment, { children: x }, e.currency);
                                          }),
                                      })
                            : X
                              ? (0, r.jsx)(e8.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: p,
                                    fullWidth: !0,
                                    giftRecipient: d,
                                    giftingOrigin: u,
                                    onTrackClick: I,
                                })
                              : null
                        : ec(F.intl.string(F.t.sEAnVH)),
            }),
        ],
    });
};
var sm = t(18967);
let sh = (e) => {
    let { productRecord: s, selectedProduct: t, previewingProduct: i, user: l } = e,
        a = eF(s);
    return (0, r.jsxs)("div", {
        className: sm.wd,
        children: [
            (0, r.jsx)(eH, { productRecord: s, selectedProduct: t }),
            null != a.LeftPreview &&
                (0, r.jsx)("div", {
                    className: sm._E,
                    children: (0, r.jsx)(a.LeftPreview, {
                        user: l,
                        selectedProduct: t,
                        previewingProduct: i,
                        productRecord: s,
                    }),
                }),
            (0, r.jsx)("div", { className: sm.F_, children: (0, r.jsx)(a.Info, { ...e }) }),
            (0, r.jsx)(su, { ...e }),
        ],
    });
};
var sx = t(408278),
    sE = t(972213),
    sp = t(586445),
    sA = t(139146),
    sI = t(668953),
    sv = t(881636),
    sR = t(428445);
let sg = (e) => {
    let { goPrev: s, goNext: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: sR.Y,
                children: (0, r.jsx)(sx.K, {
                    "aria-label": F.intl.string(F.t["3NdvMK"]),
                    onClick: s,
                    icon: sI.f,
                    variant: "overlay-secondary",
                    size: "md",
                }),
            }),
            (0, r.jsx)("div", {
                className: sR.K,
                children: (0, r.jsx)(sx.K, {
                    "aria-label": F.intl.string(F.t.RYIeOX),
                    onClick: t,
                    icon: sv.u,
                    variant: "overlay-secondary",
                    size: "md",
                }),
            }),
        ],
    });
};
var sj = t(742441);
let sN = (e) => {
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
        p = eF(t),
        A = (0, N.aw)(a),
        I = A ? a.items.length : 0,
        v = l.useCallback(() => {
            I <= 1 || d((e) => (e - 1 + I) % I);
        }, [I, d]),
        R = l.useCallback(() => {
            I <= 1 || d((e) => (e + 1) % I);
        }, [I, d]),
        g = l.useCallback(
            (e) => {
                if (I <= 1) return;
                let s = e.target;
                "INPUT" === s.tagName ||
                    "TEXTAREA" === s.tagName ||
                    s.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), v())
                        : "ArrowRight" === e.key && (e.preventDefault(), R()));
            },
            [I, v, R],
        ),
        j = l.useCallback(() => {
            E(el.sH.CLOSE_DETAIL), x();
        }, [E, x]);
    return (0, r.jsxs)("div", {
        className: b()(sj.i1, (0, el.EZ)(a.skuId) ? sj.bF : a.type === H.R.AVATAR_DECORATION ? sj.Jq : sj.eF),
        style: null != m ? { backgroundImage: `url(${m})` } : void 0,
        onKeyDown: g,
        children: [
            (0, r.jsx)("div", {
                className: sj.KR,
                children: (0, r.jsx)(p.RightPreview, {
                    user: s,
                    productRecord: t,
                    selectedProduct: a,
                    previewingProduct: i,
                    selectedBundleSlide: c,
                    isClosing: o,
                    isOrbCheckoutModalOpen: u,
                }),
            }),
            A && I > 1 && (0, r.jsx)(sg, { goPrev: v, goNext: R }),
            (0, r.jsxs)("div", {
                className: sj.VG,
                children: [
                    (0, r.jsx)(sA.R, {
                        product: t,
                        selectedVariantIndex: n,
                        variant: "overlay-secondary",
                        size: "sm",
                        onTrackClick: E,
                    }),
                    (0, r.jsx)(sp.V, { skuId: a.skuId, tab: h, onTrackClick: E }),
                    (0, r.jsx)(sx.K, {
                        "aria-label": F.intl.string(F.t.cpT0Cq),
                        onClick: j,
                        icon: sE.d,
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                ],
            }),
        ],
    });
};
var sk = t(460510);
let sC = (e) => {
    let {
            transitionState: s,
            onClose: t,
            product: i,
            category: a,
            returnRef: P,
            analyticsSource: b,
            analyticsLocations: y,
            shouldCheckoutWithOrbs: S,
            tab: M,
            giftRecipient: B,
            giftingOrigin: F,
        } = e,
        w = (0, o.bG)([I.default], () => I.default.getCurrentUser()),
        U = (0, D.f)(i),
        { previewingVariantIndex: H } = U,
        G = (0, j.Q)(i),
        V = (0, O.q)(i, H),
        z = (0, _.rb)(i, G);
    n()(null != z, "Selected product should not be null");
    let { analyticsLocations: X } = (0, x.Ay)([...y, h.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, T.Yr)(z.skuId);
    let K = (0, L.U1)(a),
        [W, Z] = l.useState(0);
    l.useEffect(() => {
        null != w && (0, p.A)(w.id, w.getAvatarURL(void 0, 80));
    }, [w]);
    let q = l.useMemo(() => (0, N.V6)(i.type, i.skuId), [i.type, i.skuId]);
    l.useEffect(() => {
        v.default.track(ea.HAw.OPEN_MODAL, {
            type: ea.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: b,
            location_stack: X,
            sku_id: z.skuId,
            product_type: q,
        }),
            (0, R.RD)(z.skuId);
    }, [b, X, z.skuId, q]);
    let { cardId: Y, sessionId: $, tilePosition: J } = (0, g.uM)() ?? {},
        Q = l.useMemo(() => (0, _.v8)(i), [i]),
        ee = (0, C.R)({ skuId: z.skuId, productSkuIds: Q, analyticsLocations: X });
    (0, E.A)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
        properties: {
            sku_id: z.skuId,
            card_id: Y,
            shop_session_id: $,
            position_in_section: J,
            product_sku_ids: Q,
            location_stack: X,
        },
    });
    let es = (0, A.o6)(),
        et = s === u.ip.EXITING,
        ei = (0, k.c)("product_details_modal");
    if (null == w || (i.skuId === d.j.PREMIUM_TIER_2_1_DAY && !ei)) return null;
    let er = (0, f.VG)(i),
        el = {
            user: w,
            productRecord: i,
            productName: er,
            selectedProduct: z,
            previewingProduct: V ?? null,
            category: a,
            selectedVariantIndex: G,
            previewingVariantIndexProps: U,
            selectedBundleSlide: W,
            setSelectedBundleSlide: Z,
            tab: M,
            shouldCheckoutWithOrbs: S,
            giftRecipient: B?.id !== w.id ? B : void 0,
            giftingOrigin: B?.id !== w.id ? F : void 0,
            analyticsLocations: X,
            returnRef: P,
            onClose: t,
            onTrackClick: ee,
        };
    return (0, r.jsx)(x.f5, {
        value: X,
        children: (0, r.jsx)(m.d, {
            returnRef: P,
            transitionState: s,
            onClose: t,
            size: "xl",
            paddingSize: "sm",
            "aria-label": er,
            children: (0, r.jsx)("div", {
                className: sk.C,
                children: (0, r.jsxs)("div", {
                    className: sk.j,
                    children: [
                        (0, r.jsx)(sh, { ...el }),
                        (0, r.jsx)(sN, { ...el, isClosing: et, isOrbCheckoutModalOpen: es, pdpBackground: K }),
                    ],
                }),
            }),
        }),
    });
};
