t.r(s), t.d(s, { default: () => sf });
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
    x = t(793574),
    h = t(688810),
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
    L = t(536572),
    _ = t(177366),
    T = t(827066),
    O = t(212407),
    y = t(935094),
    P = t(503698),
    D = t.n(P),
    b = t(575593),
    S = t(939249),
    B = t(834730),
    w = t(534514),
    M = t(456839),
    F = t(375708),
    U = t(701180);
let H = (e) => {
        let { name: s, typeLabel: t } = e;
        return (0, r.jsxs)(B.E, {
            variant: "text-sm/medium",
            className: U.mC,
            "aria-live": "polite",
            children: [
                (0, r.jsx)("span", { className: U.kx, children: s }),
                null != t && (0, r.jsx)("span", { className: U.FP, children: t }),
            ],
        });
    },
    G = { [b.R.AVATAR_DECORATION]: !0, [b.R.PROFILE_FRAME]: !0 },
    z = (e) => {
        let { item: s, index: t, isSelected: i, setSelected: a, label: n } = e,
            c = l.useMemo(() => ({ skuId: s.skuId, type: s.type, items: [s] }), [s]),
            d = l.useCallback(() => a(t), [a, t]),
            o = !0 === G[s.type];
        return (0, r.jsx)(S.D, {
            tag: "div",
            role: "radio",
            "aria-checked": i,
            tabIndex: i ? 0 : -1,
            className: D()(U.xn, { [U.Y4]: i, [U.u8]: o }),
            onClick: d,
            "aria-label": n,
            children: (0, r.jsx)("div", { className: U.Yf, children: (0, r.jsx)(M.O, { product: c }) }),
        });
    };
var V = t(442759),
    X = t(344346),
    W = t(139136),
    Z = t(395744),
    K = t(929283),
    Y = t(719201);
let q = (e) => {
        let { item: s, user: t, bundleFirstAvatarDecoration: i } = e;
        switch (s.type) {
            case b.R.AVATAR_DECORATION:
                return (0, r.jsx)("div", {
                    className: Y.h1,
                    children: (0, r.jsx)(K.i, { user: t, item: s, isHighlighted: !0 }),
                });
            case b.R.PROFILE_EFFECT:
                return (0, r.jsx)("div", {
                    className: Y.sm,
                    children: (0, r.jsx)(W.A, {
                        skuId: s.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                });
            case b.R.PROFILE_FRAME:
                return (0, r.jsx)("div", { className: Y.ob, children: (0, r.jsx)(Z.A, { frame: s }) });
            case b.R.NAMEPLATE:
                return (0, r.jsx)("div", {
                    className: Y.Dz,
                    children: (0, r.jsx)(X.A, {
                        className: Y.M4,
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
    },
    $ = (e) => {
        let { user: s, selectedProduct: t, previewingProduct: i, selectedBundleSlide: l } = e,
            a = i ?? t,
            { firstAvatarDecoration: n } = (0, V.f5)(a),
            c = a.items[l] ?? a.items[0];
        return null == c ? null : (0, r.jsx)(q, { item: c, user: s, bundleFirstAvatarDecoration: n });
    };
var J = t(846957);
let Q = (e) => {
    let { selectedProduct: s, previewingProduct: t } = e;
    return (0, r.jsx)(J.B, { product: t ?? s });
};
var ee = t(346055),
    es = t(975571),
    et = t(495565),
    ei = t(740076),
    er = t(661847),
    el = t(758836),
    ea = t(652215),
    en = t(630709);
let ec = (e) => {
        let { skuId: s } = e;
        return (0, el.EZ)(s)
            ? (0, r.jsx)(B.E, {
                  variant: "text-sm/normal",
                  className: en.CU,
                  children: F.intl.format(F.t.Q1scdE, {
                      helpdeskArticle: es.A.getArticleURL(ea.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    ed = (e) => {
        let { productRecord: s, productName: t, selectedProduct: i, previewingVariantIndexProps: l } = e,
            { previewingVariantIndex: a, handleEntering: n, handleLeaving: c } = l,
            d = (0, T.q)(s, a) ?? i,
            o = (0, et.r)(d, !1),
            { disabledReason: u } = (0, ei.I)(i.skuId),
            m = (0, g.Q)(s),
            x = (0, k.B1)(s),
            h = x ? s.variants[a ?? m] : null;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: en.sn,
                    children: [
                        (0, r.jsx)(w.D, { variant: "heading-xl/extrabold", className: en.R_, children: t }),
                        (0, r.jsx)(B.E, { variant: "text-sm/normal", children: o }),
                        (0, r.jsx)(ec, { skuId: d.skuId }),
                        null !== u && (0, r.jsx)(B.E, { variant: "text-xs/normal", className: en.H$, children: u }),
                    ],
                }),
                x &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            null != h &&
                                (0, r.jsx)(B.E, {
                                    variant: "text-xs/medium",
                                    color: "text-subtle",
                                    className: en.a9,
                                    lineClamp: 1,
                                    children: F.intl.format(F.t.EcaRWt, {
                                        value: (0, r.jsx)("span", { className: en.I8, children: h.variantLabel }),
                                    }),
                                }),
                            (0, r.jsx)("div", {
                                className: en._x,
                                children: (0, r.jsx)(ee.M, {
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
    ex = t(993077),
    eh = t(245604),
    eE = t(460905),
    ep = t(262295),
    eA = t(320095),
    ev = t(963852),
    ej = t(763754),
    eI = t(20851),
    eR = t(986687),
    eg = t(101058),
    eN = t(84540),
    ef = t(836602),
    eC = t(428262),
    ek = t(780898),
    eL = t(180129);
let e_ = (e) => {
        let { user: s, innerClassName: t } = e;
        return (0, r.jsx)("div", {
            className: eL.mV,
            children: (0, r.jsx)(ep.A, {
                avatar: (0, r.jsx)(eu.eu, {
                    src: s.avatarSrc,
                    size: em._3.SIZE_32,
                    "aria-label": s.name,
                    status: ea.clD.ONLINE,
                }),
                name: s.name,
                innerClassName: D()(eL.$L, t),
            }),
        });
    },
    eT = (e) => {
        let { user: s, nameplate: t, avatarDecoration: i } = e,
            l = (0, ek.Ov)();
        return (0, r.jsx)("div", {
            className: eL.nJ,
            role: "img",
            "aria-label": F.intl.string(F.t.SZeUdR),
            children: (0, r.jsxs)(ee.M, {
                children: [
                    (0, r.jsx)(e_, { user: l.mallow, innerClassName: eL.ab }),
                    (0, r.jsxs)(B.E, {
                        variant: "text-sm/semibold",
                        className: eL.OS,
                        children: [F.intl.string(F.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(e_, { user: l.phibi, innerClassName: eL.e9 }),
                    (0, r.jsx)("div", {
                        className: eL.mV,
                        children: (0, r.jsx)(X.A, {
                            className: eL.M4,
                            innerClassName: eL.e9,
                            user: s,
                            nameplate: t,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                            hideDecorators: !0,
                        }),
                    }),
                    (0, r.jsx)(e_, { user: l.locke, innerClassName: eL.e9 }),
                    (0, r.jsxs)(B.E, {
                        variant: "text-sm/semibold",
                        className: eL.OS,
                        children: [F.intl.string(F.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(e_, { user: l.boom, innerClassName: eL.bD }),
                    (0, r.jsx)(e_, { user: l.cherry, innerClassName: eL.bD }),
                ],
            }),
        });
    },
    eO = (e) => {
        let { user: s } = e,
            t = ((e) => {
                let { author: s } = e;
                return (0, eA.rh)({
                    ...(0, ev.Ay)({ author: s, channelId: "1337", content: F.intl.string(F.t.d5YwK5) }),
                    state: ea.cmJ.SENT,
                    id: "0",
                });
            })({ author: s });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": F.intl.string(F.t["TN+ZvB"]),
            children: (0, r.jsx)(ee.M, {
                children: (0, r.jsxs)(ex.Z, {
                    className: eL.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(eI.A, { className: eL.G5, author: (0, ej.p_)(t), message: t }, t.id),
                        (0, r.jsxs)("div", {
                            className: eL.lG,
                            children: [
                                (0, r.jsx)(eh.U, { size: "md", color: "currentColor", className: eL.hq }),
                                (0, r.jsx)(eE.n, { size: "md", color: "currentColor", className: eL.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    ey = (e) => {
        let { product: s, user: t, activeBundleSlide: i } = e,
            a = eC.Ay.canUsePremiumProfileCustomization(t),
            { pendingAvatar: n, ...c } = (0, o.cf)([ef.A], () => ef.A.getPendingChanges()),
            d = (0, eg.V7)({ userId: t.id, image: n }),
            u = s.type === b.R.BUNDLE ? s.items[i ?? 0] : void 0,
            m = u?.type ?? s.type,
            x = m === b.R.AVATAR_DECORATION,
            h = m === b.R.PROFILE_EFFECT,
            { firstAvatarDecoration: E, firstProfileEffect: p, firstNameplate: A, firstProfileFrame: v } = (0, V.f5)(s),
            j = u?.type === b.R.AVATAR_DECORATION ? u : E,
            I = u?.type === b.R.PROFILE_EFFECT ? u : p,
            R = u?.type === b.R.PROFILE_FRAME ? u : v,
            g = u?.type === b.R.NAMEPLATE ? u : A;
        if (
            (l.useEffect(() => {
                if (null != j) return (0, eN.p)({ avatarDecoration: j }), () => (0, eN.p)({ avatarDecoration: void 0 });
            }, [j]),
            m === b.R.NAMEPLATE && null != g)
        )
            return (0, r.jsx)("div", {
                className: eL.Zj,
                children: (0, r.jsx)(eT, { user: t, nameplate: g, avatarDecoration: j }),
            });
        return (0, r.jsx)("div", {
            className: x ? eL.RA : eL.hZ,
            children: (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eR.A, {
                        ...c,
                        pendingAvatar: d,
                        user: t,
                        canUsePremiumCustomization: a,
                        pendingAvatarDecoration: j,
                        pendingProfileEffect: I,
                        pendingProfileFrame: R,
                        disabledInputs: !0,
                        hideMessageInput: !h,
                        hideCustomStatus: !0,
                        hideBioSection: x,
                        hideExampleButton: !0,
                        interactive: !1,
                        className: x ? eL.oB : void 0,
                    }),
                    x && (0, r.jsx)(eO, { user: t }),
                ],
            }),
        });
    },
    eP = (e) => {
        let { user: s, selectedProduct: t, previewingProduct: i, selectedBundleSlide: l } = e;
        return (0, r.jsx)(ey, { user: s, product: i ?? t, activeBundleSlide: l });
    };
var eD = t(231540),
    eb = t(184659),
    eS = t(197952);
let eB = (e) => {
        let { user: s, productRecord: t, isClosing: i, isOrbCheckoutModalOpen: l } = e;
        return t.skuId === el.Dp.ORB_PROFILE_BADGE
            ? i || l
                ? null
                : (0, r.jsx)(eb.z, { user: s })
            : (0, el.EZ)(t.skuId)
              ? (0, r.jsx)(eD.I, {})
              : (0, r.jsx)(J.B, { product: t, className: eS.M });
    },
    ew = {
        [eo.COLLECTIBLE]: { LeftPreview: $, Info: ed, RightPreview: eP },
        [eo.BUNDLE]: {
            LeftPreview: $,
            Info: (e) => {
                let { productRecord: s, productName: t, selectedBundleSlide: i, setSelectedBundleSlide: a } = e,
                    n = s.items,
                    c = s.bundledProducts,
                    d = c?.[i]?.name,
                    o = n[i]?.type,
                    u = null != o ? (0, N.Dm)(o) : null,
                    m = F.intl.string(F.t.cTbdgu),
                    x = l.useRef(null),
                    h = l.useCallback(
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
                        let e = x.current;
                        if (null == e || !e.contains(document.activeElement)) return;
                        let s = e.querySelectorAll('[role="radio"]');
                        s[i]?.focus();
                    }, [i]),
                    (0, r.jsxs)("div", {
                        className: U.Qf,
                        children: [
                            (0, r.jsx)(w.D, { variant: "heading-xl/extrabold", className: U.R_, children: t }),
                            (0, r.jsx)(B.E, {
                                variant: "text-sm/normal",
                                color: "text-muted",
                                children: F.intl.format(F.t["1tUCAO"], { count: n.length }),
                            }),
                            (0, r.jsxs)("div", {
                                className: U.hZ,
                                children: [
                                    (0, r.jsx)("div", {
                                        className: U.vg,
                                        children: (0, r.jsx)("div", {
                                            ref: x,
                                            className: U.hK,
                                            role: "radiogroup",
                                            "aria-label": m,
                                            tabIndex: -1,
                                            onKeyDown: h,
                                            children: n.map((e, s) => {
                                                let t = c?.[s]?.name ?? e.skuId;
                                                return (0, r.jsx)(
                                                    z,
                                                    {
                                                        item: e,
                                                        index: s,
                                                        isSelected: s === i,
                                                        setSelected: a,
                                                        label: t,
                                                    },
                                                    e.skuId,
                                                );
                                            }),
                                        }),
                                    }),
                                    null != d && (0, r.jsx)(H, { name: d, typeLabel: u }),
                                ],
                            }),
                        ],
                    })
                );
            },
            RightPreview: eP,
        },
        [eo.EXTERNAL_ORB_BADGE]: { LeftPreview: Q, Info: ed, RightPreview: eB },
        [eo.EXTERNAL_FRACTIONAL_NITRO]: { LeftPreview: Q, Info: ed, RightPreview: eB },
        [eo.EXTERNAL_GENERIC]: { LeftPreview: Q, Info: ed, RightPreview: eB },
    },
    eM = (e) => {
        var s;
        return ew[
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
var eF = t(13875),
    eU = t(110629),
    eH = t(268959),
    eG = t(958942);
let ez = (e) => {
    let { productRecord: s, selectedProduct: t } = e,
        i = (0, eF.Do)("CollectiblesShopProductDetailsModal") && t.type === b.R.PROFILE_FRAME;
    return (0, r.jsx)("div", {
        className: eG.N,
        children: i
            ? (0, r.jsx)(eU.A, { location: "CollectiblesShopProductDetailsModal" })
            : (0, r.jsx)(eH.A, { skuId: s.skuId }),
    });
};
var eV = t(990078),
    eX = t(462887),
    eW = t(821609),
    eZ = t(318254),
    eK = t(825484),
    eY = t(331322),
    eq = t(736653),
    e$ = t(44120),
    eJ = t(465794),
    eQ = t(757036),
    e0 = t(761705),
    e5 = t(580630),
    e1 = t(4227),
    e8 = t(940980),
    e2 = t(466459),
    e4 = t(395068),
    e6 = t(49620),
    e9 = t(878112),
    e7 = t(452255),
    e3 = t(641405),
    se = t(839863),
    ss = t(561769),
    st = t(680262),
    si = t(525723),
    sr = t(347722),
    sl = t(57020),
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
            returnRef: x,
            onClose: h,
            onTrackClick: E,
        } = e,
        { cardId: p, sessionId: v, tilePosition: j } = (0, R.uM)() ?? {},
        g = (0, eQ.L)(sn.PremiumTypes.TIER_2),
        f = (0, N.xM)(s),
        C = (0, eF.Do)("CollectiblesShopProductDetailsModal") && i.type === b.R.PROFILE_FRAME,
        k = eC.Ay.canUseShopDiscounts(s) || C,
        L = (0, e2.h)(t),
        { isPurchased: _, isPartiallyOwnedBundle: T } = (0, e2.h)(i),
        { isDisabled: O } = (0, ei.I)(i.skuId),
        y = (0, N.Zu)({ product: i, isPartiallyOwnedBundle: T, isPurchased: _ }),
        P = (0, o.bG)([e1.A], () => e1.A.isClaiming === i?.skuId),
        S = (0, eq.Ay)(),
        w = (0, eX.M)(S),
        M = (0, N.G0)(i),
        U = (0, N.yt)(i, ea.lid.DEFAULT),
        H = U?.amount === 0,
        G = l.useMemo(() => (0, N.fT)(i, k), [i, k]),
        z = (0, sr.X)(i),
        V = (0, si.V_)(t),
        X = null != V,
        W = (0, e8.W)("CollectiblesShopProductDetailsModal"),
        Z = c === el.G2.ORBS && n ? ss.Hi.ORBS : W ? ss.Hi.FIAT : void 0,
        { checkoutEligiblePrices: K, hasSufficientOrbs: Y } = (0, sl.F)({
            product: i,
            hasShopDiscount: k,
            hasDiscountOffer: X,
            prioritizedCurrency: Z,
        }),
        q = (0, e4.A)({ location: "CollectiblesShopProductDetailsModal", product: i }),
        $ = l.useMemo(() => K.some((e) => e.currency === sc.Yr.DISCORD_ORB), [K]);
    (0, e0.W)({ disableFetch: !$ });
    let J = l.useCallback(() => {
            E(el.sH.BUY_WITH_FIAT),
                (0, e$.A)({ skuId: i.skuId, analyticsLocations: m, onClose: (e) => (e ? h() : (0, sc.tE)()) });
        }, [m, h, i.skuId, E]),
        Q = function (e) {
            let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = (0, r.jsx)(eJ.A, {
                    subscriptionTier: sn.pe.TIER_2,
                    fullWidth: !0,
                    buttonTextOverride: e,
                    onClick: () => {
                        E(el.sH.UNLOCK_WITH_NITRO), (0, e7.M)();
                    },
                    onSubscribeModalClose: () => {
                        (0, e7.t)({
                            product: t,
                            category: a,
                            shouldCheckoutWithOrbs: n,
                            returnRef: x,
                            analyticsLocations: m,
                            tab: c,
                            giftRecipient: d,
                            giftingOrigin: u,
                            cardId: p,
                            sessionId: v,
                            tilePosition: j,
                        });
                    },
                });
            return s ? (0, r.jsx)(se.A, { analyticsLocations: m, children: i }) : i;
        };
    return (0, r.jsxs)("div", {
        className: sd.iw,
        children: [
            L.isPurchased || L.isPartiallyOwnedBundle
                ? (0, r.jsx)(e6.c, { className: sd.On, isPartiallyPurchased: T })
                : M
                  ? (0, r.jsxs)("div", {
                        className: sd.pq,
                        children: [
                            (0, r.jsx)(B.E, { variant: "text-md/semibold", children: F.intl.string(F.t.rt69oo) }),
                            !_ &&
                                (0, r.jsx)(B.E, {
                                    className: D()(sd.ed, !w && sd.un),
                                    variant: "text-xxs/normal",
                                    children: F.intl.string(F.t.nKdAlO),
                                }),
                        ],
                    })
                  : (0, r.jsx)(st.B, {
                        prices: K,
                        product: i,
                        hasShopDiscount: k,
                        discountSource: f,
                        discount: G,
                        hasSufficientOrbs: Y,
                        isProductDisabled: O,
                        discountOfferAmount: V,
                        onTrackClick: E,
                    }),
            (0, r.jsx)(eY.B, {
                direction: "vertical",
                gap: 8,
                children:
                    !M || g || H
                        ? y
                            ? _
                                ? z
                                    ? (0, r.jsxs)(eK.e, {
                                          wrap: !1,
                                          fullWidth: !0,
                                          children: [
                                              (0, r.jsx)(e3.A, { product: i, onSuccess: h, onTrackClick: E }),
                                              (0, r.jsx)(e9.A, {
                                                  primary: !0,
                                                  product: i,
                                                  onSuccess: h,
                                                  giftRecipient: d,
                                                  giftingOrigin: u,
                                                  onTrackClick: E,
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(e3.A, { product: i, onSuccess: h, onTrackClick: E })
                                : q
                                  ? Q(F.intl.string(F.t["9wfL34"]), !0)
                                  : M
                                    ? (0, r.jsx)(eW.$, {
                                          loading: P,
                                          loadingStartedLabel: F.intl.string(F.t["TYw+9s"]),
                                          loadingFinishedLabel: F.intl.string(F.t.Pg1UP5),
                                          onClick: async () => {
                                              E(el.sH.ADD_TO_COLLECTION),
                                                  await (0, I.iJ)(i.skuId),
                                                  h(),
                                                  (0, sa.A)({
                                                      product: i,
                                                      analyticsLocations: m,
                                                      purchaseType: el.gs.PREMIUM_PURCHASE,
                                                  });
                                          },
                                          text: F.intl.string(F.t.zp6caO),
                                          fullWidth: !0,
                                      })
                                    : (0, r.jsx)(r.Fragment, {
                                          children: K.map((e, s) => {
                                              let t,
                                                  a,
                                                  n,
                                                  c,
                                                  o,
                                                  x = 0 === s,
                                                  p =
                                                      e.currency === sc.Yr.DISCORD_ORB
                                                          ? ((t = O
                                                                ? F.intl.string(F.t.cTdr3x)
                                                                : F.intl.string(F.t.zqh7ZM)),
                                                            (a = !Y || O),
                                                            (n = F.intl.formatToPlainString(F.t.yi41qQ, {
                                                                orbPrice: e.amount,
                                                            })),
                                                            (c = a ? `${n}, ${t}` : n),
                                                            (0, r.jsx)(eV.m, {
                                                                position: "top",
                                                                text: t,
                                                                shouldShow: a,
                                                                "aria-label": !1,
                                                                children: (0, r.jsx)(eW.$, {
                                                                    variant: x ? "primary" : "secondary",
                                                                    onClick: () => {
                                                                        E(el.sH.BUY_WITH_ORBS),
                                                                            (0, A.B4)({
                                                                                skuId: i.skuId,
                                                                                onComplete: (e) => {
                                                                                    (0, I.gB)(),
                                                                                        h(),
                                                                                        (0, sa.A)({
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
                                                                    text: F.intl.format(F.t.JC15qj, {
                                                                        orbPrice: e.amount,
                                                                        orbIconHook: () =>
                                                                            (0, r.jsx)(eZ.C, {
                                                                                className: sd.fN,
                                                                                size: "sm",
                                                                                color: "currentColor",
                                                                            }),
                                                                    }),
                                                                    fullWidth: !0,
                                                                }),
                                                            }))
                                                          : ((o = X
                                                                ? F.intl.formatToPlainString(F.t["5U5RB5"], {
                                                                      discountOfferAmount: V,
                                                                  })
                                                                : F.intl.formatToPlainString(F.t["cNSL/j"], {
                                                                      price: (0, e5.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(eK.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(eW.$, {
                                                                        variant: x ? "primary" : "secondary",
                                                                        onClick: J,
                                                                        text: o,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    z &&
                                                                        (0, r.jsx)(e9.A, {
                                                                            primary: x,
                                                                            product: i,
                                                                            onSuccess: h,
                                                                            giftRecipient: d,
                                                                            giftingOrigin: u,
                                                                            onTrackClick: E,
                                                                        }),
                                                                ],
                                                            }));
                                              return (0, r.jsx)(l.Fragment, { children: p }, e.currency);
                                          }),
                                      })
                            : z
                              ? (0, r.jsx)(e9.A, {
                                    primary: !0,
                                    product: i,
                                    onSuccess: h,
                                    fullWidth: !0,
                                    giftRecipient: d,
                                    giftingOrigin: u,
                                    onTrackClick: E,
                                })
                              : null
                        : Q(F.intl.string(F.t.sEAnVH)),
            }),
        ],
    });
};
var su = t(18967);
let sm = (e) => {
    let { productRecord: s, selectedProduct: t, previewingProduct: i, user: l, selectedBundleSlide: a } = e,
        n = eM(s);
    return (0, r.jsxs)("div", {
        className: D()(su.wd, { [su.E7]: null != n.LeftPreview }),
        children: [
            (0, r.jsx)("div", { className: su.dL, children: (0, r.jsx)(ez, { productRecord: s, selectedProduct: t }) }),
            null != n.LeftPreview &&
                (0, r.jsx)("div", {
                    className: su._E,
                    children: (0, r.jsx)(n.LeftPreview, {
                        user: l,
                        selectedProduct: t,
                        previewingProduct: i,
                        productRecord: s,
                        selectedBundleSlide: a,
                    }),
                }),
            (0, r.jsx)("div", { className: su.F_, children: (0, r.jsx)(n.Info, { ...e }) }),
            (0, r.jsx)(so, { ...e }),
        ],
    });
};
var sx = t(408278),
    sh = t(972213),
    sE = t(586445),
    sp = t(139146),
    sA = t(668953),
    sv = t(881636),
    sj = t(428445);
let sI = (e) => {
    let { goPrev: s, goNext: t } = e;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: sj.Y,
                children: (0, r.jsx)(sx.K, {
                    "aria-label": F.intl.string(F.t["3NdvMK"]),
                    onClick: s,
                    icon: sA.f,
                    variant: "overlay-secondary",
                    size: "sm",
                }),
            }),
            (0, r.jsx)("div", {
                className: sj.K,
                children: (0, r.jsx)(sx.K, {
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
            tab: x,
            onClose: h,
            onTrackClick: E,
        } = e,
        p = eM(t),
        A = (0, N.aw)(a),
        v = A ? a.items.length : 0,
        j = l.useCallback(() => {
            v <= 1 || d((e) => (e - 1 + v) % v);
        }, [v, d]),
        I = l.useCallback(() => {
            v <= 1 || d((e) => (e + 1) % v);
        }, [v, d]),
        R = l.useCallback(
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
        g = l.useCallback(() => {
            E(el.sH.CLOSE_DETAIL), h();
        }, [E, h]),
        f = l.useRef(null),
        C = l.useRef(!0);
    return (
        l.useLayoutEffect(() => {
            if (C.current) {
                C.current = !1;
                return;
            }
            let e = f.current;
            null != e && ((e.style.animation = "none"), e.offsetHeight, (e.style.animation = ""));
        }, [c]),
        (0, r.jsxs)("div", {
            className: D()(sR.i1, (0, el.EZ)(a.skuId) ? sR.bF : a.type === b.R.AVATAR_DECORATION ? sR.Jq : sR.eF),
            style: null != m ? { backgroundImage: `url(${m})` } : void 0,
            onKeyDown: R,
            children: [
                (0, r.jsx)("div", {
                    className: sR.KR,
                    ref: f,
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
                A && v > 1 && (0, r.jsx)(sI, { goPrev: j, goNext: I }),
                (0, r.jsxs)("div", {
                    className: sR.VG,
                    children: [
                        (0, r.jsx)(sp.R, {
                            product: t,
                            selectedVariantIndex: n,
                            variant: "overlay-secondary",
                            size: "sm",
                            onTrackClick: E,
                        }),
                        (0, r.jsx)(sE.V, { skuId: a.skuId, tab: x, onTrackClick: E }),
                        (0, r.jsx)(sx.K, {
                            "aria-label": F.intl.string(F.t.cpT0Cq),
                            onClick: g,
                            icon: sh.d,
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
            returnRef: P,
            analyticsSource: D,
            analyticsLocations: b,
            shouldCheckoutWithOrbs: S,
            tab: B,
            giftRecipient: w,
            giftingOrigin: M,
        } = e,
        F = (0, o.bG)([v.default], () => v.default.getCurrentUser()),
        U = (0, y.f)(i),
        { previewingVariantIndex: H } = U,
        G = (0, g.Q)(i),
        z = (0, T.q)(i, H),
        V = (0, k.rb)(i, G);
    n()(null != V, "Selected product should not be null");
    let { analyticsLocations: X } = (0, h.Ay)([...b, x.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
    (0, _.Yr)(V.skuId);
    let W = (0, O.U1)(a),
        [Z, K] = l.useState(0);
    l.useEffect(() => {
        null != F && (0, p.A)(F.id, F.getAvatarURL(void 0, 80));
    }, [F]);
    let Y = l.useMemo(() => (0, N.V6)(i.type, i.skuId), [i.type, i.skuId]);
    l.useEffect(() => {
        j.default.track(ea.HAw.OPEN_MODAL, {
            type: ea.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
            source: D,
            location_stack: X,
            sku_id: V.skuId,
            product_type: Y,
        }),
            (0, I.RD)(V.skuId);
    }, [D, X, V.skuId, Y]);
    let { cardId: q, sessionId: $, tilePosition: J } = (0, R.uM)() ?? {},
        Q = l.useMemo(() => (0, k.v8)(i), [i]),
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
    let es = (0, A.o6)(),
        et = s === u.ip.EXITING,
        ei = (0, f.c)("product_details_modal");
    if (null == F || (i.skuId === d.j.PREMIUM_TIER_2_1_DAY && !ei)) return null;
    let er = (0, L.VG)(i),
        el = {
            user: F,
            productRecord: i,
            productName: er,
            selectedProduct: V,
            previewingProduct: z ?? null,
            category: a,
            selectedVariantIndex: G,
            previewingVariantIndexProps: U,
            selectedBundleSlide: Z,
            setSelectedBundleSlide: K,
            tab: B,
            shouldCheckoutWithOrbs: S,
            giftRecipient: w?.id !== F.id ? w : void 0,
            giftingOrigin: w?.id !== F.id ? M : void 0,
            analyticsLocations: X,
            returnRef: P,
            onClose: t,
            onTrackClick: ee,
        };
    return (0, r.jsx)(h.f5, {
        value: X,
        children: (0, r.jsx)(m.d, {
            returnRef: P,
            transitionState: s,
            onClose: t,
            size: "xl",
            paddingSize: "sm",
            "aria-label": er,
            children: (0, r.jsx)("div", {
                className: sN.C,
                children: (0, r.jsxs)("div", {
                    className: sN.j,
                    children: [
                        (0, r.jsx)(sm, { ...el }),
                        (0, r.jsx)(sg, { ...el, isClosing: et, isOrbCheckoutModalOpen: es, pdpBackground: W }),
                    ],
                }),
            }),
        }),
    });
};
