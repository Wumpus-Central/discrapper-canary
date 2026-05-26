t.r(s), t.d(s, { default: () => s_ });
var i,
    r = t(627968),
    l = t(64700),
    a = t(284009),
    n = t.n(a),
    d = t(562708),
    c = t(334279),
    o = t(702841),
    u = t(231723),
    m = t(224640),
    x = t(793574),
    h = t(688810),
    p = t(139286),
    E = t(84540),
    A = t(903209),
    I = t(652165),
    j = t(287809),
    v = t(174459),
    g = t(859040),
    N = t(440938),
    R = t(298072),
    C = t(993408),
    _ = t(503089),
    k = t(442759),
    T = t(966619),
    O = t(623373),
    f = t(536572),
    L = t(177366),
    P = t(827066),
    D = t(212407),
    b = t(935094),
    y = t(503698),
    S = t.n(y),
    B = t(939249),
    M = t(534514),
    F = t(834730),
    w = t(14702),
    U = t(375708),
    H = t(701180);
let G = (e) => {
    let { item: s, index: t, isSelected: i, setSelected: a, label: n } = e,
        d = l.useMemo(() => ({ skuId: s.skuId, type: s.type, items: [s] }), [s]),
        c = l.useCallback(() => a(t), [a, t]);
    return (0, r.jsx)(B.D, {
        tag: "div",
        role: "radio",
        "aria-checked": i,
        className: S()(H.xn, { [H.Y4]: i }),
        onClick: c,
        "aria-label": n,
        children: (0, r.jsx)(w.O, { product: d }),
    });
};
var V = t(575593),
    z = t(344346),
    X = t(139136),
    W = t(395744),
    Z = t(929283),
    K = t(719201);
let q = (e) => {
    let { item: s, user: t, bundleFirstAvatarDecoration: i } = e;
    switch (s.type) {
        case V.R.AVATAR_DECORATION:
            return (0, r.jsx)("div", {
                className: K.h1,
                children: (0, r.jsx)(Z.i, { user: t, item: s, isHighlighted: !0 }),
            });
        case V.R.PROFILE_EFFECT:
            return (0, r.jsx)("div", {
                className: K.sm,
                children: (0, r.jsx)(X.A, {
                    skuId: s.skuId,
                    removeSetHeight: !0,
                    isHighlighted: !0,
                    delayProfileEffectIntro: !0,
                }),
            });
        case V.R.PROFILE_FRAME:
            return (0, r.jsx)("div", { className: K.ob, children: (0, r.jsx)(W.A, { frame: s }) });
        case V.R.NAMEPLATE:
            return (0, r.jsx)("div", {
                className: K.Dz,
                children: (0, r.jsx)(z.A, {
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
let $ = (e) => {
    let { selectedProduct: s, previewingProduct: t } = e;
    return (0, r.jsx)(Y.B, { product: t ?? s });
};
var J = t(247928),
    Q = t(975571),
    ee = t(13875),
    es = t(495565),
    et = t(740076),
    ei = t(110629),
    er = t(63574),
    el = t(661847),
    ea = t(758836),
    en = t(652215),
    ed = t(630709);
let ec = (e) => {
        let { skuId: s } = e;
        return (0, ea.EZ)(s)
            ? (0, r.jsx)(F.E, {
                  variant: "text-sm/normal",
                  className: ed.CU,
                  children: U.intl.format(U.t.Q1scdE, {
                      helpdeskArticle: Q.A.getArticleURL(en.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eo = (e) => {
        let { productRecord: s, productName: t, selectedProduct: i, previewingVariantIndexProps: l } = e,
            { previewingVariantIndex: a, handleEntering: n, handleLeaving: d } = l,
            c = (0, P.q)(s, a) ?? i,
            o = (0, es.r)(c, !1),
            { disabledReason: u } = (0, et.I)(i.skuId),
            m = (0, O.B1)(s),
            x = (0, ee.Do)("CollectiblesShopProductDetailsModal") && i.type === V.R.PROFILE_FRAME;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: ed.sn,
                    children: [
                        x &&
                            (0, r.jsx)("div", {
                                className: ed.$l,
                                children: (0, r.jsx)(ei.A, { location: "CollectiblesShopProductDetailsModal" }),
                            }),
                        (0, r.jsx)(M.D, { variant: "heading-xl/extrabold", className: ed.R_, children: t }),
                        (0, r.jsx)(F.E, { variant: "text-sm/normal", children: o }),
                        (0, r.jsx)(ec, { skuId: c.skuId }),
                        null !== u && (0, r.jsx)(F.E, { variant: "text-xs/normal", className: ed.H$, children: u }),
                    ],
                }),
                m &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(er.A, { skuId: s.skuId, overrideVariantIndex: a, className: ed.a9 }),
                            (0, r.jsx)("div", {
                                className: ed._x,
                                children: (0, r.jsx)(J.M, {
                                    children: (0, r.jsx)(el.A, {
                                        skuId: s.skuId,
                                        onVariantEnter: n,
                                        onVariantExit: d,
                                        wrap: !0,
                                    }),
                                }),
                            }),
                        ],
                    }),
            ],
        });
    };
var eu =
        (((i = {}).COLLECTIBLE = "COLLECTIBLE"),
        (i.BUNDLE = "BUNDLE"),
        (i.EXTERNAL_ORB_BADGE = "EXTERNAL_ORB_BADGE"),
        (i.EXTERNAL_FRACTIONAL_NITRO = "EXTERNAL_FRACTIONAL_NITRO"),
        (i.EXTERNAL_GENERIC = "EXTERNAL_GENERIC"),
        i),
    em = t(97808),
    ex = t(778712),
    eh = t(359778),
    ep = t(245604),
    eE = t(460905),
    eA = t(262295),
    eI = t(320095),
    ej = t(963852),
    ev = t(763754),
    eg = t(20851),
    eN = t(986687),
    eR = t(101058),
    eC = t(836602),
    e_ = t(428262),
    ek = t(780898),
    eT = t(180129);
let eO = (e) => {
        let { user: s, innerClassName: t } = e;
        return (0, r.jsx)("div", {
            className: eT.mV,
            children: (0, r.jsx)(eA.A, {
                avatar: (0, r.jsx)(em.eu, {
                    src: s.avatarSrc,
                    size: ex._3.SIZE_32,
                    "aria-label": s.name,
                    status: en.clD.ONLINE,
                }),
                name: s.name,
                innerClassName: S()(eT.$L, t),
            }),
        });
    },
    ef = (e) => {
        let { user: s, nameplate: t, avatarDecoration: i } = e,
            l = (0, ek.Ov)();
        return (0, r.jsx)("div", {
            className: eT.nJ,
            role: "img",
            "aria-label": U.intl.string(U.t.SZeUdR),
            children: (0, r.jsxs)(J.M, {
                children: [
                    (0, r.jsx)(eO, { user: l.mallow, innerClassName: eT.ab }),
                    (0, r.jsxs)(F.E, {
                        variant: "text-sm/semibold",
                        className: eT.OS,
                        children: [U.intl.string(U.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eO, { user: l.phibi, innerClassName: eT.e9 }),
                    (0, r.jsx)("div", {
                        className: eT.mV,
                        children: (0, r.jsx)(z.A, {
                            className: eT.M4,
                            innerClassName: eT.e9,
                            user: s,
                            nameplate: t,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                            hideDecorators: !0,
                        }),
                    }),
                    (0, r.jsx)(eO, { user: l.locke, innerClassName: eT.e9 }),
                    (0, r.jsxs)(F.E, {
                        variant: "text-sm/semibold",
                        className: eT.OS,
                        children: [U.intl.string(U.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eO, { user: l.boom, innerClassName: eT.bD }),
                    (0, r.jsx)(eO, { user: l.cherry, innerClassName: eT.bD }),
                ],
            }),
        });
    },
    eL = (e) => {
        let { user: s } = e,
            t = ((e) => {
                let { author: s } = e;
                return (0, eI.rh)({
                    ...(0, ej.Ay)({ author: s, channelId: "1337", content: U.intl.string(U.t.d5YwK5) }),
                    state: en.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": U.intl.string(U.t["TN+ZvB"]),
            children: (0, r.jsx)(J.M, {
                children: (0, r.jsxs)(eh.Z, {
                    className: eT.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(eg.A, { className: eT.G5, author: (0, ev.p_)(t), message: t }, t.id),
                        (0, r.jsxs)("div", {
                            className: eT.lG,
                            children: [
                                (0, r.jsx)(ep.U, { size: "md", color: "currentColor", className: eT.hq }),
                                (0, r.jsx)(eE.n, { size: "md", color: "currentColor", className: eT.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eP = (e) => {
        let { product: s, user: t, activeBundleSlide: i } = e,
            l = e_.Ay.canUsePremiumProfileCustomization(t),
            { pendingAvatar: a, ...n } = (0, o.cf)([eC.A], () => eC.A.getPendingChanges()),
            d = (0, eR.V7)({ userId: t.id, image: a }),
            c = s.type === V.R.BUNDLE ? s.items[i ?? 0] : void 0,
            u = c?.type ?? s.type,
            m = u === V.R.AVATAR_DECORATION,
            { firstAvatarDecoration: x, firstProfileEffect: h, firstNameplate: p, firstProfileFrame: E } = (0, k.f5)(s),
            A = null != h;
        if (u === V.R.NAMEPLATE && null != p)
            return (0, r.jsx)("div", {
                className: eT.Zj,
                children: (0, r.jsx)(ef, { user: t, nameplate: p, avatarDecoration: x }),
            });
        return (0, r.jsx)("div", {
            className: m ? eT.RA : eT.hZ,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eN.A, {
                        ...n,
                        pendingAvatar: d,
                        user: t,
                        canUsePremiumCustomization: l,
                        pendingAvatarDecoration: x,
                        pendingProfileEffect: h,
                        pendingProfileFrame: E,
                        disabledInputs: !0,
                        hideMessageInput: !A,
                        hideCustomStatus: !0,
                        hideBioSection: m,
                        hideExampleButton: !0,
                        interactive: !1,
                        containerClassName: m ? eT.Bb : void 0,
                    }),
                    m && (0, r.jsx)(eL, { user: t }),
                ],
            }),
        });
    },
    eD = (e) => {
        let { user: s, selectedProduct: t, previewingProduct: i, selectedBundleSlide: l } = e;
        return (0, r.jsx)(eP, { user: s, product: i ?? t, activeBundleSlide: l });
    };
var eb = t(231540),
    ey = t(184659),
    eS = t(197952);
let eB = (e) => {
        let { user: s, productRecord: t, isClosing: i, isOrbCheckoutModalOpen: l } = e;
        return t.skuId === ea.Dp.ORB_PROFILE_BADGE
            ? i || l
                ? null
                : (0, r.jsx)(ey.z, { user: s })
            : (0, ea.EZ)(t.skuId)
              ? (0, r.jsx)(eb.I, {})
              : (0, r.jsx)(Y.B, { product: t, className: eS.M });
    },
    eM = {
        [eu.COLLECTIBLE]: {
            LeftPreview: (e) => {
                let { user: s, selectedProduct: t, previewingProduct: i } = e,
                    l = i ?? t,
                    { firstAvatarDecoration: a } = (0, k.f5)(l),
                    [n] = l.items;
                return null == n ? null : (0, r.jsx)(q, { item: n, user: s, bundleFirstAvatarDecoration: a });
            },
            Info: eo,
            RightPreview: eD,
        },
        [eu.BUNDLE]: {
            LeftPreview: null,
            Info: (e) => {
                let { productRecord: s, productName: t, selectedBundleSlide: i, setSelectedBundleSlide: l } = e,
                    a = s.items,
                    n = s.bundledProducts,
                    d = a[i],
                    c = n?.[i],
                    o = U.intl.string(U.t.cTbdgu),
                    u = c?.name;
                return (0, r.jsxs)("div", {
                    className: H.Qf,
                    children: [
                        (0, r.jsxs)("div", {
                            className: H.KI,
                            children: [
                                (0, r.jsx)(M.D, { variant: "heading-xl/extrabold", className: H.R_, children: t }),
                                (0, r.jsx)(F.E, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: U.intl.format(U.t["1tUCAO"], { count: a.length }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(F.E, {
                            variant: "text-xs/medium",
                            color: "text-subtle",
                            className: H.a9,
                            children: o,
                        }),
                        (0, r.jsx)("div", {
                            className: H.vg,
                            children: (0, r.jsx)("div", {
                                className: H.hK,
                                role: "radiogroup",
                                "aria-label": o,
                                children: a.map((e, s) => {
                                    let t = n?.[s]?.name ?? e.skuId;
                                    return (0, r.jsx)(
                                        G,
                                        { item: e, index: s, isSelected: s === i, setSelected: l, label: t },
                                        e.skuId,
                                    );
                                }),
                            }),
                        }),
                        null != d &&
                            null != u &&
                            (0, r.jsxs)("div", {
                                className: H.G8,
                                "aria-live": "polite",
                                children: [
                                    (0, r.jsx)(M.D, { variant: "heading-md/semibold", className: H.dT, children: u }),
                                    c?.summary != null &&
                                        (0, r.jsx)(F.E, {
                                            variant: "text-xs/medium",
                                            color: "text-subtle",
                                            children: c.summary,
                                        }),
                                ],
                            }),
                    ],
                });
            },
            RightPreview: eD,
        },
        [eu.EXTERNAL_ORB_BADGE]: { LeftPreview: $, Info: eo, RightPreview: eB },
        [eu.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: $, Info: eo, RightPreview: eB },
        [eu.EXTERNAL_GENERIC]: { LeftPreview: $, Info: eo, RightPreview: eB },
    },
    eF = (e) => {
        var s;
        return eM[
            ((s = e),
            (0, ea.pQ)(s.skuId)
                ? s.skuId === ea.Dp.ORB_PROFILE_BADGE
                    ? "EXTERNAL_ORB_BADGE"
                    : (0, ea.EZ)(s.skuId)
                      ? "EXTERNAL_FRACTIONAL_NITRO"
                      : "EXTERNAL_GENERIC"
                : (0, C.aw)(s)
                  ? "BUNDLE"
                  : "COLLECTIBLE")
        ];
    };
var ew = t(268959),
    eU = t(958942);
let eH = (e) => {
    let { productRecord: s, selectedProduct: t } = e,
        i = (0, ee.Do)("CollectiblesShopProductDetailsModal") && t.type === V.R.PROFILE_FRAME;
    return (0, r.jsx)("div", { className: eU.N, children: !i && (0, r.jsx)(ew.A, { skuId: s.skuId }) });
};
var eG = t(990078),
    eV = t(462887),
    ez = t(821609),
    eX = t(318254),
    eW = t(825484),
    eZ = t(331322),
    eK = t(736653),
    eq = t(44120),
    eY = t(465794),
    e$ = t(757036),
    eJ = t(761705),
    eQ = t(371446),
    e0 = t(580630),
    e5 = t(4227),
    e4 = t(640634),
    e1 = t(940980),
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
    sd = t(788868),
    sc = t(818348),
    so = t(237309);
let su = (e) => {
    let {
            user: s,
            productRecord: t,
            selectedProduct: i,
            category: a,
            shouldCheckoutWithOrbs: n,
            tab: d,
            giftRecipient: c,
            giftingOrigin: u,
            analyticsLocations: m,
            returnRef: p,
            onClose: E,
            onTrackClick: A,
        } = e,
        { cardId: j, sessionId: v, tilePosition: R } = (0, N.uM)() ?? {},
        _ = (0, e$.L)(sd.PremiumTypes.TIER_2),
        k = (0, C.xM)(s),
        T = (0, ee.Do)("CollectiblesShopProductDetailsModal") && i.type === V.R.PROFILE_FRAME,
        O = e_.Ay.canUseShopDiscounts(s) || T,
        f = (0, e7.h)(t),
        { isPurchased: L, isPartiallyOwnedBundle: P } = (0, e7.h)(i),
        { isDisabled: D } = (0, et.I)(i.skuId),
        b = (0, C.Zu)({ product: i, isPartiallyOwnedBundle: P, isPurchased: L }),
        y = (0, o.bG)([e5.A], () => e5.A.isClaiming === i?.skuId),
        B = (0, eK.Ay)(),
        M = (0, eV.M)(B),
        w = (0, C.G0)(i),
        H = (0, C.yt)(i, en.lid.DEFAULT),
        G = H?.amount === 0,
        z = l.useMemo(() => (0, C.fT)(i, O), [i, O]),
        X = (0, sl.X)(i),
        { enabled: W } = (0, eQ.Z)({ location: "collectibles_shop_product_details_modal" }),
        Z = (0, sr.V_)(t),
        K = null != Z,
        q = (0, e1.W)("CollectiblesShopProductDetailsModal"),
        Y = d === ea.G2.ORBS && n ? st.Hi.ORBS : q ? st.Hi.FIAT : void 0,
        $ = (0, e4.l)("collectibles_shop_product_details_modal"),
        {
            checkoutEligiblePrices: J,
            isOrbExclusive: Q,
            hasSufficientOrbs: es,
        } = (0, sa.F)({ product: i, hasShopDiscount: O, hasDiscountOffer: K, prioritizedCurrency: Y }),
        ei = (0, e2.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        er = l.useMemo(() => J.some((e) => e.currency === sc.Yr.DISCORD_ORB), [J]);
    (0, eJ.W)({ disableFetch: !er });
    let el = l.useCallback(() => {
            A(ea.sH.BUY_WITH_FIAT),
                (0, eq.A)({ skuId: i.skuId, analyticsLocations: m, onClose: (e) => (e ? E() : (0, sc.tE)()) });
        }, [m, E, i.skuId, A]),
        ed = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = (0, r.jsx)(eY.A, {
                    subscriptionTier: sd.pe.TIER_2,
                    fullWidth: !0,
                    buttonTextOverride: e,
                    onClick: () => {
                        A(ea.sH.UNLOCK_WITH_NITRO), (0, se.M)();
                    },
                    onSubscribeModalClose: () => {
                        (0, se.t)({
                            product: t,
                            category: a,
                            shouldCheckoutWithOrbs: n,
                            returnRef: p,
                            analyticsLocations: m,
                            tab: d,
                            giftRecipient: c,
                            giftingOrigin: u,
                            cardId: j,
                            sessionId: v,
                            tilePosition: R,
                        });
                    },
                });
            return s ? (0, r.jsx)(h.f5, { value: [...m, x.A.PROFILE_FRAMES_EA_MARKETING], children: i }) : i;
        };
    return (0, r.jsxs)("div", {
        className: so.iw,
        children: [
            f.isPurchased || f.isPartiallyOwnedBundle
                ? (0, r.jsx)(e6.c, { className: so.On, isPartiallyPurchased: P })
                : w
                  ? (0, r.jsxs)("div", {
                        className: so.pq,
                        children: [
                            (0, r.jsx)(F.E, { variant: "text-md/semibold", children: U.intl.string(U.t.rt69oo) }),
                            !L &&
                                (0, r.jsx)(F.E, {
                                    className: S()(so.ed, !M && so.un),
                                    variant: "text-xxs/normal",
                                    children: U.intl.string(U.t.nKdAlO),
                                }),
                        ],
                    })
                  : W
                    ? (0, r.jsx)(si.B, {
                          prices: J,
                          product: i,
                          hasShopDiscount: O,
                          discountSource: k,
                          discount: z,
                          hasSufficientOrbs: es,
                          isProductDisabled: D,
                          discountOfferAmount: Z,
                          onTrackClick: A,
                      })
                    : Q
                      ? null
                      : (0, r.jsxs)("div", {
                            className: so.pw,
                            children: [
                                (0, r.jsx)(e9.A, {
                                    product: i,
                                    discount: z,
                                    hasShopDiscount: O,
                                    discountSource: k,
                                    hideStrikethroughPrice: !O || K,
                                    discountIconDisplayMode: "tooltip",
                                    discountIconSize: "xs",
                                    discountOfferAmount: Z,
                                }),
                                O || K ? null : (0, r.jsx)(e3.A, { product: i, onTrackClick: A }),
                            ],
                        }),
            (0, r.jsx)(eZ.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !w || _ || G
                        ? b
                            ? L
                                ? X
                                    ? (0, r.jsxs)(eW.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(ss.A, { product: i, onSuccess: E, onTrackClick: A }),
                                              (0, r.jsx)(e8.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: E,
                                                  giftRecipient: c,
                                                  giftingOrigin: u,
                                                  onTrackClick: A,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(ss.A, { product: i, onSuccess: E, onTrackClick: A })
                                : ei
                                  ? ed(U.intl.string(U.t.IvmZVF), !0)
                                  : w
                                    ? (0, r.jsx)(ez.$, {
                                          loading: y,
                                          loadingStartedLabel: U.intl.string(U.t["TYw+9s"]),
                                          loadingFinishedLabel: U.intl.string(U.t.Pg1UP5),
                                          onClick: async () => {
                                              A(ea.sH.ADD_TO_COLLECTION),
                                                  await (0, g.iJ)(i.skuId),
                                                  E(),
                                                  (0, sn.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: ea.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: U.intl.string(U.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, r.jsx)(r.Fragment, {
                                          children: J.map((e, s) => {
                                              let t,
                                                  a,
                                                  n,
                                                  d,
                                                  o,
                                                  x = 0 === s,
                                                  h =
                                                      e.currency === sc.Yr.DISCORD_ORB
                                                          ? ((t = D
                                                                ? U.intl.string(U.t.cTdr3x)
                                                                : U.intl.string(U.t.zqh7ZM)),
                                                            (a = !es || D),
                                                            (n = U.intl.formatToPlainString(U.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (d = a ? `${n}, ${t}` : n),
                                                            (0, r.jsx)(eG.m, {
                                                                position: "top",
                                                                text: t,
                                                                shouldShow: a,
                                                                "aria-label": !1,
                                                                children: (0, r.jsx)(ez.$, {
                                                                    variant: x ? "primary" : "secondary",
                                                                    onClick: () => {
                                                                        A(ea.sH.BUY_WITH_ORBS),
                                                                            (0, I.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, g.gB)(),
                                                                                        E(),
                                                                                        (0, sn.A)({
                                                                                            product: i,
                                                                                            analyticsLocations: m,
                                                                                            itemConsumed:
                                                                                                e?.entitlements?.[0]
                                                                                                    ?.consumed,
                                                                                            purchaseType: ea.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: m,
                                                                            });
                                                                    },
                                                                    disabled: a,
                                                                    "aria-label": d,
                                                                    text: U.intl.format($ ? U.t.JC15qj : U.t.lOtBOI, {
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
                                                                    case V.R.BUNDLE:
                                                                        return U.intl.string(U.t.V1AWw0);
                                                                    case V.R.PROFILE_EFFECT:
                                                                        return U.intl.string(U.t.kAeDcK);
                                                                    case V.R.NAMEPLATE:
                                                                        return U.intl.string(U.t.H3vhqU);
                                                                    case V.R.PROFILE_FRAME:
                                                                        return U.intl.string(U.t.BlSW1e);
                                                                    case V.R.AVATAR_DECORATION:
                                                                    default:
                                                                        return U.intl.string(U.t.AQ0Veg);
                                                                }
                                                            })()),
                                                            K
                                                                ? (o = U.intl.formatToPlainString(U.t["5U5RB5"], {
                                                                      discountOfferAmount: Z,
                                                                  }))
                                                                : W &&
                                                                  (o = U.intl.formatToPlainString(U.t["cNSL/j"], {
                                                                      price: (0, e0.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(eW.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(ez.$, {
                                                                        variant: x ? "primary" : "secondary",
                                                                        onClick: el,
                                                                        text: o,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    X &&
                                                                        (0, r.jsx)(e8.A, {
                                                                            primary: x,
                                                                            product: i,
                                                                            onSuccess: E,
                                                                            giftRecipient: c,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: A,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, r.jsx)(l.Fragment, { children: h }, e.currency);
                                          }),
                                      })
                            : X
                              ? (0, r.jsx)(e8.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: E,
                                    fullWidth: !0,
                                    giftRecipient: c,
                                    giftingOrigin: u,
                                    onTrackClick: A,
                                })
                              : null
                        : ed(U.intl.string(U.t.sEAnVH)),
            }),
        ],
    });
};
var sm = t(18967);
let sx = (e) => {
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
var sh = t(408278),
    sp = t(972213),
    sE = t(586445),
    sA = t(139146),
    sI = t(668953),
    sj = t(881636),
    sv = t(428445);
let sg = (e) => {
    let { goPrev: s, goNext: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: sv.Y,
                children: (0, r.jsx)(sh.K, {
                    "aria-label": U.intl.string(U.t["3NdvMK"]),
                    onClick: s,
                    icon: sI.f,
                    variant: "overlay-secondary",
                    size: "md",
                }),
            }),
            (0, r.jsx)("div", {
                className: sv.K,
                children: (0, r.jsx)(sh.K, {
                    "aria-label": U.intl.string(U.t.RYIeOX),
                    onClick: t,
                    icon: sj.u,
                    variant: "overlay-secondary",
                    size: "md",
                }),
            }),
        ],
    });
};
var sN = t(742441);
let sR = (e) => {
    let {
            user: s,
            productRecord: t,
            previewingProduct: i,
            selectedProduct: a,
            selectedVariantIndex: n,
            selectedBundleSlide: d,
            setSelectedBundleSlide: c,
            isClosing: o,
            isOrbCheckoutModalOpen: u,
            pdpBackground: m,
            tab: x,
            onClose: h,
            onTrackClick: p,
        } = e,
        E = eF(t),
        A = (0, C.aw)(a),
        I = A ? a.items.length : 0,
        j = l.useCallback(() => {
            I <= 1 || c((e) => (e - 1 + I) % I);
        }, [I, c]),
        v = l.useCallback(() => {
            I <= 1 || c((e) => (e + 1) % I);
        }, [I, c]),
        g = l.useCallback(
            (e) => {
                if (I <= 1) return;
                let s = e.target;
                "INPUT" === s.tagName ||
                    "TEXTAREA" === s.tagName ||
                    s.isContentEditable ||
                    ("ArrowLeft" === e.key
                        ? (e.preventDefault(), j())
                        : "ArrowRight" === e.key && (e.preventDefault(), v()));
            },
            [I, j, v],
        ),
        N = l.useCallback(() => {
            p(ea.sH.CLOSE_DETAIL), h();
        }, [p, h]);
    return (0, r.jsxs)("div", {
        className: S()(sN.i1, (0, ea.EZ)(a.skuId) ? sN.bF : a.type === V.R.AVATAR_DECORATION ? sN.Jq : sN.eF),
        style: null != m ? { backgroundImage: `url(${m})` } : void 0,
        onKeyDown: g,
        children: [
            (0, r.jsx)("div", {
                className: sN.KR,
                children: (0, r.jsx)(E.RightPreview, {
                    user: s,
                    productRecord: t,
                    selectedProduct: a,
                    previewingProduct: i,
                    selectedBundleSlide: d,
                    isClosing: o,
                    isOrbCheckoutModalOpen: u,
                }),
            }),
            A && I > 1 && (0, r.jsx)(sg, { goPrev: j, goNext: v }),
            (0, r.jsxs)("div", {
                className: sN.VG,
                children: [
                    (0, r.jsx)(sA.R, {
                        product: t,
                        selectedVariantIndex: n,
                        variant: "overlay-secondary",
                        size: "sm",
                        onTrackClick: p,
                    }),
                    (0, r.jsx)(sE.V, { skuId: a.skuId, tab: x, onTrackClick: p }),
                    (0, r.jsx)(sh.K, {
                        "aria-label": U.intl.string(U.t.cpT0Cq),
                        onClick: N,
                        icon: sp.d,
                        variant: "overlay-secondary",
                        size: "sm",
                    }),
                ],
            }),
        ],
    });
};
var sC = t(460510);
let s_ = (e) => {
    let {
            transitionState: s,
            onClose: t,
            product: i,
            category: a,
            returnRef: y,
            analyticsSource: S,
            analyticsLocations: B,
            shouldCheckoutWithOrbs: M,
            tab: F,
            giftRecipient: w,
            giftingOrigin: U,
        } = e,
        H = (0, o.bG)([j.default], () => j.default.getCurrentUser()),
        G = (0, b.f)(i),
        { previewingVariantIndex: V } = G,
        z = (0, R.Q)(i),
        X = (0, P.q)(i, V),
        W = (0, O.rb)(i, z);
    n()(null != W, "Selected product should not be null");
    let { analyticsLocations: Z } = (0, h.Ay)([...B, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, L.Yr)(W.skuId);
    let K = (0, D.U1)(a),
        { firstAvatarDecoration: q } = (0, k.f5)(X ?? W);
    l.useEffect(() => {
        null != H && (0, A.A)(H.id, H.getAvatarURL(void 0, 80));
    }, [H]),
        l.useEffect(() => {
            if (null != q) return (0, E.p)({ avatarDecoration: q }), () => (0, E.p)({ avatarDecoration: void 0 });
        }, [q]);
    let Y = l.useMemo(() => (0, C.V6)(i.type, i.skuId), [i.type, i.skuId]);
    l.useEffect(() => {
        v.default.track(en.HAw.OPEN_MODAL, {
            type: en.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: S,
            location_stack: Z,
            sku_id: W.skuId,
            product_type: Y,
        }),
            (0, g.RD)(W.skuId);
    }, [S, Z, W.skuId, Y]);
    let { cardId: $, sessionId: J, tilePosition: Q } = (0, N.uM)() ?? {},
        ee = l.useMemo(() => (0, O.v8)(i), [i]),
        es = (0, T.R)({ skuId: W.skuId, productSkuIds: ee, analyticsLocations: Z });
    (0, p.A)({
        type: d.ImpressionTypes.MODAL,
        name: d.ImpressionNames.SHOP_PRODUCT_DETAIL,
        properties: {
            sku_id: W.skuId,
            card_id: $,
            shop_session_id: J,
            position_in_section: Q,
            product_sku_ids: ee,
            location_stack: Z,
        },
    });
    let et = (0, I.o6)(),
        ei = s === u.ip.EXITING,
        [er, el] = l.useState(0),
        ea = (0, C.aw)(W) ? Math.min(er, Math.max(0, W.items.length - 1)) : 0,
        ed = (0, _.c)("product_details_modal");
    if (null == H || (i.skuId === c.j.PREMIUM_TIER_2_1_DAY && !ed)) return null;
    let ec = (0, f.VG)(i),
        eo = {
            user: H,
            productRecord: i,
            productName: ec,
            selectedProduct: W,
            previewingProduct: X ?? null,
            category: a,
            selectedVariantIndex: z,
            previewingVariantIndexProps: G,
            selectedBundleSlide: ea,
            setSelectedBundleSlide: el,
            tab: F,
            shouldCheckoutWithOrbs: M,
            giftRecipient: w?.id !== H.id ? w : void 0,
            giftingOrigin: w?.id !== H.id ? U : void 0,
            analyticsLocations: Z,
            returnRef: y,
            onClose: t,
            onTrackClick: es,
        };
    return (0, r.jsx)(h.f5, {
        value: Z,
        children: (0, r.jsx)(m.d, {
            returnRef: y,
            transitionState: s,
            onClose: t,
            size: "xl",
            paddingSize: "sm",
            "aria-label": ec,
            children: (0, r.jsx)("div", {
                className: sC.C,
                children: (0, r.jsxs)("div", {
                    className: sC.j,
                    children: [
                        (0, r.jsx)(sx, { ...eo }),
                        (0, r.jsx)(sR, { ...eo, isClosing: ei, isOrbCheckoutModalOpen: et, pdpBackground: K }),
                    ],
                }),
            }),
        }),
    });
};
