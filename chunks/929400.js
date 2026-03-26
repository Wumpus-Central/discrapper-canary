"use strict";
r.d(t, { default: () => eW });
var n = r(627968),
    i = r(64700),
    s = r(503698),
    a = r.n(s),
    l = r(284009),
    c = r.n(l),
    o = r(110259),
    d = r(575593),
    u = r(334279),
    m = r(417597),
    p = r(990078),
    h = r(582754),
    f = r(397927),
    x = r(736653),
    v = r(775602),
    _ = r(793574),
    g = r(688810),
    A = r(139286),
    j = r(262295),
    N = r(141468),
    C = r(963852),
    I = r(763754),
    R = r(20851),
    b = r(44120),
    T = r(465794),
    E = r(287070),
    P = r(101058),
    y = r(84540),
    O = r(836602),
    S = r(576622),
    k = r(151252),
    w = r(652165),
    L = r(287809),
    B = r(954571),
    U = r(975571),
    M = r(927578),
    D = r(580630),
    G = r(979286),
    H = r(440938),
    V = r(4227),
    F = r(298072),
    z = r(993408),
    W = r(940980),
    $ = r(495565),
    q = r(740076),
    J = r(466459),
    K = r(442759),
    Z = r(780898),
    Y = r(512213),
    X = r(139136),
    Q = r(623373),
    ee = r(660653),
    et = r(536572),
    er = r(778992),
    en = r(49620),
    ei = r(586445),
    es = r(854818),
    ea = r(177366),
    el = r(11606),
    ec = r(203312),
    eo = r(878112),
    ed = r(501664),
    eu = r(882342),
    em = r(572595),
    ep = r(641405),
    eh = r(812016),
    ef = r(184659),
    ex = r(561769),
    ev = r(63574),
    e_ = r(364616),
    eg = r(846957),
    eA = r(293477),
    ej = r(139146),
    eN = r(929283),
    eC = r(827066),
    eI = r(525723),
    eR = r(212407),
    eb = r(347722),
    eT = r(935094),
    eE = r(57020),
    eP = r(61750),
    ey = r(758836),
    eO = r(652215),
    eS = r(788868),
    ek = r(818348),
    ew = r(985018),
    eL = r(316069);
let eB = (e) => {
        let { item: t, product: r, user: s } = e,
            a = i.useRef(null),
            l = (0, z.aw)(r),
            { firstAvatarDecoration: c } = (0, K.f5)(r);
        return t.type === d.R.AVATAR_DECORATION
            ? (0, n.jsx)("div", {
                  className: l ? eL.X2 : eL.h1,
                  children: (0, n.jsx)(eN.i, { user: s, item: t, isHighlighted: !0 }),
              })
            : t.type === d.R.PROFILE_EFFECT
              ? (0, n.jsx)("div", {
                    className: l ? eL.ME : eL.sm,
                    ref: a,
                    children: (0, n.jsx)(X.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === d.R.NAMEPLATE
                ? (0, n.jsx)("div", {
                      ref: a,
                      className: eL.Dz,
                      children: (0, n.jsx)(Y.A, {
                          className: eL.M4,
                          nameplate: t,
                          user: s,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: c,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eU = (e) => {
        let { product: t, user: r, activeSlide: i = 0 } = e,
            s = t.items.length;
        return (0, n.jsx)("div", {
            className: eL.g4,
            children: (0, n.jsx)(f.tN_, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        c = `(${i + 1}/${s})`;
                    return (0, n.jsx)(
                        f.q7S,
                        {
                            id: a,
                            children: (0, n.jsxs)("div", {
                                className: eL.Kg,
                                children: [
                                    (0, n.jsx)(eB, { item: e, product: t, user: r }),
                                    (0, n.jsxs)(f.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eL.gx,
                                        children: [l?.name, " ", c],
                                    }),
                                ],
                            }),
                        },
                        a,
                    );
                }),
            }),
        });
    },
    eM = (e) => {
        let { product: t, user: r, activeSlide: i } = e;
        return (0, z.aw)(t)
            ? (0, n.jsx)(eU, { product: t, user: r, activeSlide: i })
            : (0, ey.pQ)(t.skuId)
              ? (0, n.jsx)(eg.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, n.jsx)(eB, { item: t.items[0], product: t, user: r })
                : null;
    },
    eD = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, n.jsx)(f.Text, {
                  variant: "text-sm/normal",
                  className: eL.CU,
                  children: ew.intl.format(ew.t.Q1scdE, {
                      helpdeskArticle: U.A.getArticleURL(eO.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eG = (e) => {
        let {
                product: t,
                user: r,
                category: s,
                shouldCheckoutWithOrbs: l,
                tab: o,
                onClose: u,
                returnRef: v,
                previewingVariantIndexProps: _,
                selectedVariantIndex: A,
                activeBundleSlide: j,
                giftRecipient: N,
                giftingOrigin: C,
            } = e,
            { analyticsLocations: I } = (0, g.Ay)(),
            { cardId: R, sessionId: E, tilePosition: P } = (0, H.uM)() ?? {},
            O = M.Ay.canUseCollectibles(r),
            { previewingVariantIndex: S, handleEntering: L, handleLeaving: B } = _,
            U = (0, eC.q)(t, S),
            F = (0, Q.rb)(t, A);
        c()(null != F, "Selected product should not be null");
        let Z = (0, J.h)(t),
            { isPurchased: Y, isPartiallyOwnedBundle: X } = (0, J.h)(F),
            { isDisabled: ee, disabledReason: er } = (0, q.I)(F.skuId),
            ei = (0, z.Zu)({ product: F, isPartiallyOwnedBundle: X, isPurchased: Y }),
            es = (0, m.bG)([V.A], () => V.A.isClaiming === F?.skuId),
            ea = (0, x.Ay)(),
            eh = (0, h.Mw)(ea),
            ef = (0, z.G0)(F),
            eg = (0, z.yt)(F, eO.lid.DEFAULT),
            ej = eg?.amount === 0,
            { firstAvatarDecoration: eN } = (0, K.f5)(U ?? F),
            eR = i.useMemo(() => (0, z.fT)(F, O), [F, O]),
            eT = (0, et.VG)(t),
            eB = (0, eb.X)(F),
            { enabled: eU } = (0, k.Z)({ location: "collectibles_shop_product_details_modal" }),
            eG = (0, $.r)(F, !1),
            eH = (0, eI.V_)(t),
            eV = null != eH,
            eF = (t.variants?.length ?? 0) > 8,
            ez = (0, W.W)("CollectiblesShopProductDetailsModal"),
            eW = o === ey.G2.ORBS && l ? ex.Hi.ORBS : ez ? ex.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: e$,
                isOrbExclusive: eq,
                hasSufficientOrbs: eJ,
            } = (0, eE.F)({ product: F, isPremiumUser: O, hasDiscountOffer: eV, prioritizedCurrency: eW }),
            eK = i.useCallback(
                () => (0, b.A)({ skuId: F.skuId, analyticsLocations: I, onClose: (e) => (e ? u() : (0, ek.tE)()) }),
                [I, u, F.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != eN) return (0, y.p)({ avatarDecoration: eN }), () => (0, y.p)({ avatarDecoration: void 0 });
            }, [eN]),
            (0, n.jsxs)("div", {
                className: eL.qA,
                children: [
                    (0, n.jsx)("div", { className: eL.gn, children: (0, n.jsx)(ec.A, { category: s }) }),
                    (0, n.jsx)(eM, { product: U ?? F, user: r, activeSlide: j }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsxs)("div", {
                                className: eL.h_,
                                children: [
                                    (0, n.jsx)(el.A, { product: F, isDarkText: !eh, isOrbExclusive: eq }),
                                    (0, n.jsx)(f.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eL.v7,
                                        children: eT,
                                    }),
                                    (0, n.jsx)(f.Text, { variant: "text-sm/normal", children: eG }),
                                    (0, n.jsx)(eD, { skuId: F.skuId }),
                                    Z.isPurchased || Z.isPartiallyOwnedBundle
                                        ? (0, n.jsx)(en.c, { className: eL.On, isPartiallyPurchased: X })
                                        : ef
                                          ? (0, n.jsx)(f.Text, {
                                                variant: "text-md/semibold",
                                                className: eL.On,
                                                children: ew.intl.string(ew.t.rt69oo),
                                            })
                                          : eU
                                            ? (0, n.jsx)(eA.B, {
                                                  prices: e$,
                                                  product: F,
                                                  isPremiumUser: O,
                                                  discount: eR,
                                                  hasSufficientOrbs: eJ,
                                                  isProductDisabled: ee,
                                                  discountOfferAmount: eH,
                                              })
                                            : (0, n.jsxs)("div", {
                                                  className: eL.pw,
                                                  children: [
                                                      (0, n.jsx)(ed.A, {
                                                          product: F,
                                                          discount: eR,
                                                          isPremiumUser: O,
                                                          hideStrikethroughPrice: !O || eV,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eH,
                                                      }),
                                                      O || eV ? null : (0, n.jsx)(eu.A, { product: F }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, Q.B1)(t) &&
                                (0, n.jsx)(f.M1G, {
                                    children: (0, n.jsxs)("div", {
                                        className: a()(eL.Oj, { [eL.OJ]: eF }),
                                        children: [
                                            eF &&
                                                (0, n.jsx)(ev.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: S,
                                                    className: eL.L$,
                                                }),
                                            (0, n.jsx)(e_.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: L,
                                                onVariantExit: B,
                                                wrap: !0,
                                            }),
                                            !eF &&
                                                (0, n.jsx)(ev.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: S,
                                                    className: eL.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== er &&
                                (0, n.jsx)(f.Text, { variant: "text-xs/normal", className: eL.H$, children: er }),
                            (0, n.jsx)(f.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (ef && !O && !ej) {
                                        let e;
                                        return (
                                            (e = ew.intl.string(ew.t.sEAnVH)),
                                            (0, n.jsx)(T.A, {
                                                subscriptionTier: eS.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: em.M,
                                                onSubscribeModalClose: () => {
                                                    (0, em.t)({
                                                        product: F,
                                                        category: s,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: v,
                                                        analyticsLocations: I,
                                                        tab: o,
                                                        giftRecipient: N,
                                                        giftingOrigin: C,
                                                        cardId: R,
                                                        sessionId: E,
                                                        tilePosition: P,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return ei
                                        ? Y
                                            ? eB
                                                ? (0, n.jsxs)(f.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, n.jsx)(ep.A, { product: F, onSuccess: u }),
                                                          (0, n.jsx)(eo.A, {
                                                              primary: !0,
                                                              product: F,
                                                              onSuccess: u,
                                                              giftRecipient: N,
                                                              giftingOrigin: C,
                                                          }),
                                                      ],
                                                  })
                                                : (0, n.jsx)(ep.A, { product: F, onSuccess: u })
                                            : ef
                                              ? (0, n.jsx)(f.Button, {
                                                    loading: es,
                                                    loadingStartedLabel: ew.intl.string(ew.t["TYw+9s"]),
                                                    loadingFinishedLabel: ew.intl.string(ew.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, G.iJ)(F.skuId),
                                                            u(),
                                                            (0, eP.A)({
                                                                product: F,
                                                                analyticsLocations: I,
                                                                purchaseType: ey.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: ew.intl.string(ew.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, n.jsx)(n.Fragment, {
                                                    children: e$.map((e, t) => {
                                                        let r,
                                                            i = 0 === t;
                                                        if (e.currency === ek.Yr.DISCORD_ORB) {
                                                            let t, r, s, a;
                                                            return (
                                                                (t = ee
                                                                    ? ew.intl.string(ew.t.cTdr3x)
                                                                    : ew.intl.string(ew.t.zqh7ZM)),
                                                                (r = !eJ || ee),
                                                                (s = ew.intl.formatToPlainString(ew.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (a = r ? `${s}, ${t}` : s),
                                                                (0, n.jsx)(p.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: r,
                                                                    "aria-label": !1,
                                                                    children: (0, n.jsx)(f.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            (0, w.B4)({
                                                                                skuId: F.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    let { entitlements: t } = e;
                                                                                    (0, G.gB)(),
                                                                                        u(),
                                                                                        (0, eP.A)({
                                                                                            product: F,
                                                                                            analyticsLocations: I,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: ey.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: I,
                                                                            });
                                                                        },
                                                                        disabled: r,
                                                                        "aria-label": a,
                                                                        text: ew.intl.format(ew.t.lOtBOI, {
                                                                            orbPrice: e.amount,
                                                                            orbIconHook: () =>
                                                                                (0, n.jsx)(f.Cp8, {
                                                                                    className: eL.fN,
                                                                                    size: "sm",
                                                                                    color: "currentColor",
                                                                                }),
                                                                        }),
                                                                        fullWidth: !0,
                                                                    }),
                                                                })
                                                            );
                                                        }
                                                        return (
                                                            (r = (0, z.aw)(F)
                                                                ? ew.intl.string(ew.t.V1AWw0)
                                                                : F.type === d.R.PROFILE_EFFECT
                                                                  ? ew.intl.string(ew.t.kAeDcK)
                                                                  : F.type === d.R.NAMEPLATE
                                                                    ? ew.intl.string(ew.t.H3vhqU)
                                                                    : ew.intl.string(ew.t.AQ0Veg)),
                                                            eV
                                                                ? (r = ew.intl.formatToPlainString(ew.t["5U5RB5"], {
                                                                      discountOfferAmount: eH,
                                                                  }))
                                                                : eU &&
                                                                  (r = ew.intl.formatToPlainString(ew.t["cNSL/j"], {
                                                                      price: (0, D.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, n.jsxs)(f.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, n.jsx)(f.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: eK,
                                                                        text: r,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eB &&
                                                                        (0, n.jsx)(eo.A, {
                                                                            primary: i,
                                                                            product: F,
                                                                            onSuccess: u,
                                                                            giftRecipient: N,
                                                                            giftingOrigin: C,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eB
                                          ? (0, n.jsx)(eo.A, {
                                                primary: !0,
                                                product: F,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: N,
                                                giftingOrigin: C,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, n.jsx)(f.Text, {
                                className: a()(eL.ed, !eh && eL.un),
                                variant: "text-xxs/normal",
                                children: ef && !Y ? ew.intl.string(ew.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eH = (e) => {
        let { user: t, innerClassName: r } = e;
        return (0, n.jsx)("div", {
            className: eL.mV,
            children: (0, n.jsx)(j.A, {
                avatar: (0, n.jsx)(f.euF, {
                    src: t.avatarSrc,
                    size: f._3J.SIZE_32,
                    "aria-label": t.name,
                    status: f.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(eL.$L, r),
            }),
        });
    },
    eV = (e) => {
        let { user: t, nameplate: r, avatarDecoration: i } = e,
            s = (0, Z.Ov)();
        return (0, n.jsx)("div", {
            className: eL.nJ,
            role: "img",
            "aria-label": ew.intl.string(ew.t.SZeUdR),
            children: (0, n.jsxs)(f.M1G, {
                children: [
                    (0, n.jsx)(eH, { user: s.mallow, innerClassName: eL.ab }),
                    (0, n.jsxs)(f.Text, {
                        variant: "text-sm/semibold",
                        className: eL.OS,
                        children: [ew.intl.string(ew.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, n.jsx)(eH, { user: s.phibi, innerClassName: eL.e9 }),
                    (0, n.jsx)("div", {
                        className: eL.mV,
                        children: (0, n.jsx)(Y.A, {
                            className: eL.M4,
                            innerClassName: eL.e9,
                            user: t,
                            nameplate: r,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, n.jsx)(eH, { user: s.locke, innerClassName: eL.e9 }),
                    (0, n.jsxs)(f.Text, {
                        variant: "text-sm/semibold",
                        className: eL.OS,
                        children: [ew.intl.string(ew.t["NG43/6"]), " - 12"],
                    }),
                    (0, n.jsx)(eH, { user: s.boom, innerClassName: eL.bD }),
                    (0, n.jsx)(eH, { user: s.cherry, innerClassName: eL.bD }),
                ],
            }),
        });
    },
    eF = (e) => {
        let { product: t, user: r, activeBundleSlide: i, isTransitioning: s } = e,
            l = (0, m.bG)([v.A], () => v.A.useReducedMotion),
            c = M.Ay.canUsePremiumProfileCustomization(r),
            { pendingAvatar: o, ...u } = (0, m.cf)([O.A], () => O.A.getPendingChanges()),
            p = (0, P.V7)({ userId: r.id, image: o }),
            h = t.type === d.R.AVATAR_DECORATION,
            [f] = t.items,
            { firstAvatarDecoration: x, firstProfileEffect: _, firstNameplate: g } = (0, K.f5)(t),
            A = null != _,
            j = () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(E.A, {
                            ...u,
                            pendingAvatar: p,
                            user: r,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: x,
                            pendingProfileEffect: _,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: h,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        h && (0, n.jsx)(ez, { user: r }),
                    ],
                }),
            N = (e) => (0, n.jsx)(eV, { user: r, nameplate: e, avatarDecoration: x });
        if (t.type === d.R.BUNDLE) {
            if (!(0, ee.Wb)(t))
                return (0, n.jsx)("div", {
                    className: eL.RA,
                    children: (0, n.jsx)("div", { className: eL.bo, children: j() }),
                });
            {
                let e = i ?? 0,
                    r = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    o = c?.type !== r?.type && !l;
                return r.type === d.R.NAMEPLATE
                    ? (0, n.jsx)("div", { className: a()(eL.Zj, s && o ? eL.p2 : ""), children: N(r) })
                    : (0, n.jsx)("div", { className: a()(eL.Ak, s && o ? eL.p2 : ""), children: j() });
            }
        }
        return null != g
            ? (0, n.jsx)("div", { className: eL.Zj, children: N(g) })
            : (0, n.jsx)("div", { className: f?.type === d.R.AVATAR_DECORATION ? eL.RA : eL.Ak, children: j() });
    },
    ez = (e) => {
        let { user: t } = e,
            r = ((e) => {
                let { author: t } = e;
                return (0, N.rh)({
                    ...(0, C.Ay)({ author: t, channelId: "1337", content: ew.intl.string(ew.t.d5YwK5) }),
                    state: eO.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, n.jsx)("div", {
            role: "img",
            "aria-label": ew.intl.string(ew.t["TN+ZvB"]),
            children: (0, n.jsx)(f.M1G, {
                children: (0, n.jsxs)(f.ZpM, {
                    className: eL.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, n.jsx)(R.A, { className: eL.G5, author: (0, I.p_)(r), message: r }, r.id),
                        (0, n.jsxs)("div", {
                            className: eL.lG,
                            children: [
                                (0, n.jsx)(f.U1e, { size: "md", color: "currentColor", className: eL.hq }),
                                (0, n.jsx)(f.nm2, { size: "md", color: "currentColor", className: eL.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eW = (e) => {
        let {
                transitionState: t,
                onClose: r,
                product: s,
                category: l,
                returnRef: p,
                analyticsSource: h,
                analyticsLocations: x,
                shouldCheckoutWithOrbs: v,
                tab: j,
                giftRecipient: N,
                giftingOrigin: C,
            } = e,
            I = (0, m.bG)([L.default], () => L.default.getCurrentUser()),
            R = (0, eT.f)(s),
            { previewingVariantIndex: b } = R,
            T = (0, F.Q)(s),
            E = (0, eC.q)(s, b),
            P = (0, Q.rb)(s, T);
        c()(null != P, "Selected product should not be null");
        let { analyticsLocations: y } = (0, g.Ay)([...x, _.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ea.Yr)(P.skuId);
        let O = (0, eR.U1)(l);
        i.useEffect(() => {
            null != I && (0, S.A)(I.id, I.getAvatarURL(void 0, 80));
        }, [I]);
        let k = i.useMemo(() => (0, z.V6)(s.type, s.skuId), [s.type, s.skuId]);
        i.useEffect(() => {
            B.default.track(eO.HAw.OPEN_MODAL, {
                type: eO.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: y,
                sku_id: P.skuId,
                product_type: k,
            }),
                (0, G.RD)(P.skuId);
        }, [h, y, P.skuId, k]);
        let { cardId: U, sessionId: M, tilePosition: D } = (0, H.uM)() ?? {};
        (0, A.A)({
            type: o.ImpressionTypes.MODAL,
            name: o.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: P.skuId,
                card_id: U,
                shop_session_id: M,
                position_in_section: D,
                product_sku_ids: (0, Q.B1)(s) ? s.variants.map((e) => e.skuId) : [s.skuId],
                location_stack: y,
            },
        });
        let V = (0, w.o6)(),
            W = t === f.ip4.EXITING,
            $ = (0, eI.$R)(s),
            q = $?.amount,
            J = null != q && ($?.discountId === eS.eR || $?.discountId === eS.Qz),
            K = i.useMemo(() => ((0, z.aw)(P) ? P.items.length : 0), [P]),
            { activeSlide: Z, isTransitioning: Y } = (0, er.X)({ slideCount: K, intervalMs: 5e3 });
        return null == I
            ? null
            : (0, n.jsx)(g.f5, {
                  value: y,
                  children: (0, n.jsxs)(f.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eL.CR,
                      returnRef: p,
                      transitionState: t,
                      size: f.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, n.jsxs)(f.$mQ, {
                              "data-migration-pending": !0,
                              className: eL.jE,
                              children: [
                                  (0, n.jsx)(eG, {
                                      user: I,
                                      product: s,
                                      category: l,
                                      onClose: r,
                                      previewingVariantIndexProps: R,
                                      selectedVariantIndex: T,
                                      shouldCheckoutWithOrbs: v,
                                      tab: j,
                                      activeBundleSlide: Z,
                                      giftRecipient: N,
                                      giftingOrigin: C,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: a()(
                                          eL.i1,
                                          P.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? eL.bF
                                              : P.type === d.R.AVATAR_DECORATION
                                                ? eL.Jq
                                                : eL.eF,
                                      ),
                                      style: { backgroundImage: `url(${O})` },
                                      children: [
                                          (0, ey.pQ)(s.skuId)
                                              ? s.skuId === ey.Dp.ORB_PROFILE_BADGE
                                                  ? V || W
                                                      ? null
                                                      : (0, n.jsx)(ef.z, { user: I })
                                                  : s.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, n.jsx)(eh.I, {})
                                                    : (0, n.jsx)(eg.B, { product: s, className: eL.Ms })
                                              : (0, n.jsx)(eF, {
                                                    user: I,
                                                    product: E ?? P,
                                                    activeBundleSlide: Z,
                                                    isTransitioning: Y,
                                                }),
                                          (0, n.jsxs)("div", {
                                              className: eL.VG,
                                              children: [
                                                  (0, n.jsx)(ej.R, {
                                                      product: s,
                                                      selectedVariantIndex: T,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, n.jsx)(ei.V, { skuId: P.skuId, tab: j }),
                                                  (0, n.jsx)(f.K0, {
                                                      "aria-label": ew.intl.string(ew.t.cpT0Cq),
                                                      onClick: r,
                                                      icon: f.d$L,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          J &&
                              (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsxs)(f.jlY, {
                                      "data-migration-pending": !0,
                                      className: eL.Hx,
                                      children: [
                                          (0, n.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eL.OC,
                                          }),
                                          (0, n.jsxs)("div", {
                                              className: eL.do,
                                              children: [
                                                  (0, n.jsx)(f.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eL.Q2,
                                                      children: ew.intl.format(ew.t["78ph4b"], {
                                                          discountOfferAmount: q,
                                                      }),
                                                  }),
                                                  $?.expiresAt != null && (0, n.jsx)(es.e, { endDate: $.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
