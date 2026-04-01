n.d(t, { default: () => eW });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(284009),
    o = n.n(l),
    c = n(110259),
    d = n(575593),
    u = n(334279),
    m = n(417597),
    p = n(990078),
    h = n(582754),
    x = n(397927),
    f = n(736653),
    v = n(775602),
    g = n(793574),
    _ = n(688810),
    A = n(139286),
    j = n(262295),
    C = n(141468),
    N = n(963852),
    I = n(763754),
    b = n(20851),
    R = n(44120),
    T = n(725807),
    E = n(287070),
    y = n(101058),
    P = n(84540),
    O = n(836602),
    k = n(576622),
    S = n(270051),
    w = n(652165),
    L = n(287809),
    B = n(954571),
    M = n(975571),
    U = n(927578),
    V = n(580630),
    D = n(979286),
    G = n(440938),
    H = n(4227),
    F = n(298072),
    z = n(993408),
    W = n(940980),
    $ = n(495565),
    q = n(740076),
    K = n(466459),
    J = n(442759),
    Y = n(780898),
    Z = n(512213),
    X = n(139136),
    Q = n(623373),
    ee = n(660653),
    et = n(536572),
    en = n(778992),
    er = n(49620),
    ea = n(586445),
    ei = n(854818),
    es = n(177366),
    el = n(11606),
    eo = n(203312),
    ec = n(878112),
    ed = n(501664),
    eu = n(882342),
    em = n(572595),
    ep = n(641405),
    eh = n(812016),
    ex = n(184659),
    ef = n(561769),
    ev = n(63574),
    eg = n(364616),
    e_ = n(846957),
    eA = n(293477),
    ej = n(139146),
    eC = n(929283),
    eN = n(827066),
    eI = n(525723),
    eb = n(212407),
    eR = n(347722),
    eT = n(935094),
    eE = n(57020),
    ey = n(61750),
    eP = n(758836),
    eO = n(652215),
    ek = n(788868),
    eS = n(818348),
    ew = n(985018),
    eL = n(316069);
let eB = (e) => {
        let { item: t, product: n, user: i } = e,
            s = a.useRef(null),
            l = (0, z.aw)(n),
            { firstAvatarDecoration: o } = (0, J.f5)(n);
        return t.type === d.R.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: l ? eL.X2 : eL.h1,
                  children: (0, r.jsx)(eC.i, { user: i, item: t, isHighlighted: !0 }),
              })
            : t.type === d.R.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: l ? eL.ME : eL.sm,
                    ref: s,
                    children: (0, r.jsx)(X.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === d.R.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: s,
                      className: eL.Dz,
                      children: (0, r.jsx)(Z.A, {
                          className: eL.M4,
                          nameplate: t,
                          user: i,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: o,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eM = (e) => {
        let { product: t, user: n, activeSlide: a = 0 } = e,
            i = t.items.length;
        return (0, r.jsx)("div", {
            className: eL.g4,
            children: (0, r.jsx)(x.tN_, {
                activeSlide: String(a),
                children: t.items.map((e, a) => {
                    let s = String(a),
                        l = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
                        o = `(${a + 1}/${i})`;
                    return (0, r.jsx)(
                        x.q7S,
                        {
                            id: s,
                            children: (0, r.jsxs)("div", {
                                className: eL.Kg,
                                children: [
                                    (0, r.jsx)(eB, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(x.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eL.gx,
                                        children: [l?.name, " ", o],
                                    }),
                                ],
                            }),
                        },
                        s,
                    );
                }),
            }),
        });
    },
    eU = (e) => {
        let { product: t, user: n, activeSlide: a } = e;
        return (0, z.aw)(t)
            ? (0, r.jsx)(eM, { product: t, user: n, activeSlide: a })
            : (0, eP.pQ)(t.skuId)
              ? (0, r.jsx)(e_.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(eB, { item: t.items[0], product: t, user: n })
                : null;
    },
    eV = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(x.Text, {
                  variant: "text-sm/normal",
                  className: eL.CU,
                  children: ew.intl.format(ew.t.Q1scdE, {
                      helpdeskArticle: M.A.getArticleURL(eO.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eD = (e) => {
        let {
                product: t,
                user: n,
                category: i,
                shouldCheckoutWithOrbs: l,
                tab: c,
                onClose: u,
                returnRef: v,
                previewingVariantIndexProps: g,
                selectedVariantIndex: A,
                activeBundleSlide: j,
                giftRecipient: C,
                giftingOrigin: N,
            } = e,
            { analyticsLocations: I } = (0, _.Ay)(),
            { cardId: b, sessionId: E, tilePosition: y } = (0, G.uM)() ?? {},
            O = U.Ay.canUseCollectibles(n),
            { previewingVariantIndex: k, handleEntering: L, handleLeaving: B } = g,
            M = (0, eN.q)(t, k),
            F = (0, Q.rb)(t, A);
        o()(null != F, "Selected product should not be null");
        let Y = (0, K.h)(t),
            { isPurchased: Z, isPartiallyOwnedBundle: X } = (0, K.h)(F),
            { isDisabled: ee, disabledReason: en } = (0, q.I)(F.skuId),
            ea = (0, z.Zu)({ product: F, isPartiallyOwnedBundle: X, isPurchased: Z }),
            ei = (0, m.bG)([H.A], () => H.A.isClaiming === F?.skuId),
            es = (0, f.Ay)(),
            eh = (0, h.Mw)(es),
            ex = (0, z.G0)(F),
            e_ = (0, z.yt)(F, eO.lid.DEFAULT),
            ej = e_?.amount === 0,
            { firstAvatarDecoration: eC } = (0, J.f5)(M ?? F),
            eb = a.useMemo(() => (0, z.fT)(F, O), [F, O]),
            eT = (0, et.VG)(t),
            eB = (0, eR.X)(F),
            { enabled: eM } = (0, S.Z)({ location: "collectibles_shop_product_details_modal" }),
            eD = (0, $.r)(F, !1),
            eG = (0, eI.V_)(t),
            eH = null != eG,
            eF = (t.variants?.length ?? 0) > 8,
            ez = (0, W.W)("CollectiblesShopProductDetailsModal"),
            eW = c === eP.G2.ORBS && l ? ef.Hi.ORBS : ez ? ef.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: e$,
                isOrbExclusive: eq,
                hasSufficientOrbs: eK,
            } = (0, eE.F)({ product: F, isPremiumUser: O, hasDiscountOffer: eH, prioritizedCurrency: eW }),
            eJ = a.useCallback(
                () => (0, R.A)({ skuId: F.skuId, analyticsLocations: I, onClose: (e) => (e ? u() : (0, eS.tE)()) }),
                [I, u, F.skuId],
            );
        return (
            a.useEffect(() => {
                if (null != eC) return (0, P.p)({ avatarDecoration: eC }), () => (0, P.p)({ avatarDecoration: void 0 });
            }, [eC]),
            (0, r.jsxs)("div", {
                className: eL.qA,
                children: [
                    (0, r.jsx)("div", { className: eL.gn, children: (0, r.jsx)(eo.A, { category: i }) }),
                    (0, r.jsx)(eU, { product: M ?? F, user: n, activeSlide: j }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eL.h_,
                                children: [
                                    (0, r.jsx)(el.A, { product: F, isDarkText: !eh, isOrbExclusive: eq }),
                                    (0, r.jsx)(x.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eL.v7,
                                        children: eT,
                                    }),
                                    (0, r.jsx)(x.Text, { variant: "text-sm/normal", children: eD }),
                                    (0, r.jsx)(eV, { skuId: F.skuId }),
                                    Y.isPurchased || Y.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(er.c, { className: eL.On, isPartiallyPurchased: X })
                                        : ex
                                          ? (0, r.jsx)(x.Text, {
                                                variant: "text-md/semibold",
                                                className: eL.On,
                                                children: ew.intl.string(ew.t.rt69oo),
                                            })
                                          : eM
                                            ? (0, r.jsx)(eA.B, {
                                                  prices: e$,
                                                  product: F,
                                                  isPremiumUser: O,
                                                  discount: eb,
                                                  hasSufficientOrbs: eK,
                                                  isProductDisabled: ee,
                                                  discountOfferAmount: eG,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eL.pw,
                                                  children: [
                                                      (0, r.jsx)(ed.A, {
                                                          product: F,
                                                          discount: eb,
                                                          isPremiumUser: O,
                                                          hideStrikethroughPrice: !O || eH,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eG,
                                                      }),
                                                      O || eH ? null : (0, r.jsx)(eu.A, { product: F }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, Q.B1)(t) &&
                                (0, r.jsx)(x.M1G, {
                                    children: (0, r.jsxs)("div", {
                                        className: s()(eL.Oj, { [eL.OJ]: eF }),
                                        children: [
                                            eF &&
                                                (0, r.jsx)(ev.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: k,
                                                    className: eL.L$,
                                                }),
                                            (0, r.jsx)(eg.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: L,
                                                onVariantExit: B,
                                                wrap: !0,
                                            }),
                                            !eF &&
                                                (0, r.jsx)(ev.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: k,
                                                    className: eL.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== en &&
                                (0, r.jsx)(x.Text, { variant: "text-xs/normal", className: eL.H$, children: en }),
                            (0, r.jsx)(x.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (ex && !O && !ej) {
                                        let e;
                                        return (
                                            (e = ew.intl.string(ew.t.sEAnVH)),
                                            (0, r.jsx)(T.A, {
                                                subscriptionTier: ek.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: em.M,
                                                onSubscribeModalClose: () => {
                                                    (0, em.t)({
                                                        product: F,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: v,
                                                        analyticsLocations: I,
                                                        tab: c,
                                                        giftRecipient: C,
                                                        giftingOrigin: N,
                                                        cardId: b,
                                                        sessionId: E,
                                                        tilePosition: y,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return ea
                                        ? Z
                                            ? eB
                                                ? (0, r.jsxs)(x.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(ep.A, { product: F, onSuccess: u }),
                                                          (0, r.jsx)(ec.A, {
                                                              primary: !0,
                                                              product: F,
                                                              onSuccess: u,
                                                              giftRecipient: C,
                                                              giftingOrigin: N,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(ep.A, { product: F, onSuccess: u })
                                            : ex
                                              ? (0, r.jsx)(x.Button, {
                                                    loading: ei,
                                                    loadingStartedLabel: ew.intl.string(ew.t["TYw+9s"]),
                                                    loadingFinishedLabel: ew.intl.string(ew.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, D.iJ)(F.skuId),
                                                            u(),
                                                            (0, ey.A)({
                                                                product: F,
                                                                analyticsLocations: I,
                                                                purchaseType: eP.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: ew.intl.string(ew.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: e$.map((e, t) => {
                                                        let n,
                                                            a = 0 === t;
                                                        if (e.currency === eS.Yr.DISCORD_ORB) {
                                                            let t, n, i, s;
                                                            return (
                                                                (t = ee
                                                                    ? ew.intl.string(ew.t.cTdr3x)
                                                                    : ew.intl.string(ew.t.zqh7ZM)),
                                                                (n = !eK || ee),
                                                                (i = ew.intl.formatToPlainString(ew.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (s = n ? `${i}, ${t}` : i),
                                                                (0, r.jsx)(p.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, r.jsx)(x.Button, {
                                                                        variant: a ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            (0, w.B4)({
                                                                                skuId: F.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    let { entitlements: t } = e;
                                                                                    (0, D.gB)(),
                                                                                        u(),
                                                                                        (0, ey.A)({
                                                                                            product: F,
                                                                                            analyticsLocations: I,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: eP.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: I,
                                                                            });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": s,
                                                                        text: ew.intl.format(ew.t.lOtBOI, {
                                                                            orbPrice: e.amount,
                                                                            orbIconHook: () =>
                                                                                (0, r.jsx)(x.Cp8, {
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
                                                            (n = (0, z.aw)(F)
                                                                ? ew.intl.string(ew.t.V1AWw0)
                                                                : F.type === d.R.PROFILE_EFFECT
                                                                  ? ew.intl.string(ew.t.kAeDcK)
                                                                  : F.type === d.R.NAMEPLATE
                                                                    ? ew.intl.string(ew.t.H3vhqU)
                                                                    : ew.intl.string(ew.t.AQ0Veg)),
                                                            eH
                                                                ? (n = ew.intl.formatToPlainString(ew.t["5U5RB5"], {
                                                                      discountOfferAmount: eG,
                                                                  }))
                                                                : eM &&
                                                                  (n = ew.intl.formatToPlainString(ew.t["cNSL/j"], {
                                                                      price: (0, V.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(x.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(x.Button, {
                                                                        variant: a ? "primary" : "secondary",
                                                                        onClick: eJ,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eB &&
                                                                        (0, r.jsx)(ec.A, {
                                                                            primary: a,
                                                                            product: F,
                                                                            onSuccess: u,
                                                                            giftRecipient: C,
                                                                            giftingOrigin: N,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eB
                                          ? (0, r.jsx)(ec.A, {
                                                primary: !0,
                                                product: F,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: C,
                                                giftingOrigin: N,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, r.jsx)(x.Text, {
                                className: s()(eL.ed, !eh && eL.un),
                                variant: "text-xxs/normal",
                                children: ex && !Z ? ew.intl.string(ew.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eG = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eL.mV,
            children: (0, r.jsx)(j.A, {
                avatar: (0, r.jsx)(x.euF, {
                    src: t.avatarSrc,
                    size: x._3J.SIZE_32,
                    "aria-label": t.name,
                    status: x.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: s()(eL.$L, n),
            }),
        });
    },
    eH = (e) => {
        let { user: t, nameplate: n, avatarDecoration: a } = e,
            i = (0, Y.Ov)();
        return (0, r.jsx)("div", {
            className: eL.nJ,
            role: "img",
            "aria-label": ew.intl.string(ew.t.SZeUdR),
            children: (0, r.jsxs)(x.M1G, {
                children: [
                    (0, r.jsx)(eG, { user: i.mallow, innerClassName: eL.ab }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eL.OS,
                        children: [ew.intl.string(ew.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eG, { user: i.phibi, innerClassName: eL.e9 }),
                    (0, r.jsx)("div", {
                        className: eL.mV,
                        children: (0, r.jsx)(Z.A, {
                            className: eL.M4,
                            innerClassName: eL.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: a,
                        }),
                    }),
                    (0, r.jsx)(eG, { user: i.locke, innerClassName: eL.e9 }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eL.OS,
                        children: [ew.intl.string(ew.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eG, { user: i.boom, innerClassName: eL.bD }),
                    (0, r.jsx)(eG, { user: i.cherry, innerClassName: eL.bD }),
                ],
            }),
        });
    },
    eF = (e) => {
        let { product: t, user: n, activeBundleSlide: a, isTransitioning: i } = e,
            l = (0, m.bG)([v.A], () => v.A.useReducedMotion),
            o = U.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: c, ...u } = (0, m.cf)([O.A], () => O.A.getPendingChanges()),
            p = (0, y.V7)({ userId: n.id, image: c }),
            h = t.type === d.R.AVATAR_DECORATION,
            [x] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: g, firstNameplate: _ } = (0, J.f5)(t),
            A = null != g,
            j = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(E.A, {
                            ...u,
                            pendingAvatar: p,
                            user: n,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: f,
                            pendingProfileEffect: g,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: h,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        h && (0, r.jsx)(ez, { user: n }),
                    ],
                }),
            C = (e) => (0, r.jsx)(eH, { user: n, nameplate: e, avatarDecoration: f });
        if (t.type === d.R.BUNDLE) {
            if (!(0, ee.Wb)(t))
                return (0, r.jsx)("div", {
                    className: eL.RA,
                    children: (0, r.jsx)("div", { className: eL.bo, children: j() }),
                });
            {
                let e = a ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !l;
                return n.type === d.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: s()(eL.Zj, i && c ? eL.p2 : ""), children: C(n) })
                    : (0, r.jsx)("div", { className: s()(eL.Ak, i && c ? eL.p2 : ""), children: j() });
            }
        }
        return null != _
            ? (0, r.jsx)("div", { className: eL.Zj, children: C(_) })
            : (0, r.jsx)("div", { className: x?.type === d.R.AVATAR_DECORATION ? eL.RA : eL.Ak, children: j() });
    },
    ez = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, C.rh)({
                    ...(0, N.Ay)({ author: t, channelId: "1337", content: ew.intl.string(ew.t.d5YwK5) }),
                    state: eO.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": ew.intl.string(ew.t["TN+ZvB"]),
            children: (0, r.jsx)(x.M1G, {
                children: (0, r.jsxs)(x.ZpM, {
                    className: eL.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(b.A, { className: eL.G5, author: (0, I.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: eL.lG,
                            children: [
                                (0, r.jsx)(x.U1e, { size: "md", color: "currentColor", className: eL.hq }),
                                (0, r.jsx)(x.nm2, { size: "md", color: "currentColor", className: eL.hq }),
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
                onClose: n,
                product: i,
                category: l,
                returnRef: p,
                analyticsSource: h,
                analyticsLocations: f,
                shouldCheckoutWithOrbs: v,
                tab: j,
                giftRecipient: C,
                giftingOrigin: N,
            } = e,
            I = (0, m.bG)([L.default], () => L.default.getCurrentUser()),
            b = (0, eT.f)(i),
            { previewingVariantIndex: R } = b,
            T = (0, F.Q)(i),
            E = (0, eN.q)(i, R),
            y = (0, Q.rb)(i, T);
        o()(null != y, "Selected product should not be null");
        let { analyticsLocations: P } = (0, _.Ay)([...f, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, es.Yr)(y.skuId);
        let O = (0, eb.U1)(l);
        a.useEffect(() => {
            null != I && (0, k.A)(I.id, I.getAvatarURL(void 0, 80));
        }, [I]);
        let S = a.useMemo(() => (0, z.V6)(i.type, i.skuId), [i.type, i.skuId]);
        a.useEffect(() => {
            B.default.track(eO.HAw.OPEN_MODAL, {
                type: eO.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: P,
                sku_id: y.skuId,
                product_type: S,
            }),
                (0, D.RD)(y.skuId);
        }, [h, P, y.skuId, S]);
        let { cardId: M, sessionId: U, tilePosition: V } = (0, G.uM)() ?? {};
        (0, A.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: y.skuId,
                card_id: M,
                shop_session_id: U,
                position_in_section: V,
                product_sku_ids: (0, Q.B1)(i) ? i.variants.map((e) => e.skuId) : [i.skuId],
                location_stack: P,
            },
        });
        let H = (0, w.o6)(),
            W = t === x.ip4.EXITING,
            $ = (0, eI.$R)(i),
            q = $?.amount,
            K = null != q && ($?.discountId === ek.eR || $?.discountId === ek.Qz),
            J = a.useMemo(() => ((0, z.aw)(y) ? y.items.length : 0), [y]),
            { activeSlide: Y, isTransitioning: Z } = (0, en.X)({ slideCount: J, intervalMs: 5e3 });
        return null == I
            ? null
            : (0, r.jsx)(_.f5, {
                  value: P,
                  children: (0, r.jsxs)(x.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eL.CR,
                      returnRef: p,
                      transitionState: t,
                      size: x.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(x.$mQ, {
                              "data-migration-pending": !0,
                              className: eL.jE,
                              children: [
                                  (0, r.jsx)(eD, {
                                      user: I,
                                      product: i,
                                      category: l,
                                      onClose: n,
                                      previewingVariantIndexProps: b,
                                      selectedVariantIndex: T,
                                      shouldCheckoutWithOrbs: v,
                                      tab: j,
                                      activeBundleSlide: Y,
                                      giftRecipient: C?.id !== I.id ? C : void 0,
                                      giftingOrigin: C?.id !== I.id ? N : void 0,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: s()(
                                          eL.i1,
                                          y.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? eL.bF
                                              : y.type === d.R.AVATAR_DECORATION
                                                ? eL.Jq
                                                : eL.eF,
                                      ),
                                      style: { backgroundImage: `url(${O})` },
                                      children: [
                                          (0, eP.pQ)(i.skuId)
                                              ? i.skuId === eP.Dp.ORB_PROFILE_BADGE
                                                  ? H || W
                                                      ? null
                                                      : (0, r.jsx)(ex.z, { user: I })
                                                  : i.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(eh.I, {})
                                                    : (0, r.jsx)(e_.B, { product: i, className: eL.Ms })
                                              : (0, r.jsx)(eF, {
                                                    user: I,
                                                    product: E ?? y,
                                                    activeBundleSlide: Y,
                                                    isTransitioning: Z,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eL.VG,
                                              children: [
                                                  (0, r.jsx)(ej.R, {
                                                      product: i,
                                                      selectedVariantIndex: T,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, r.jsx)(ea.V, { skuId: y.skuId, tab: j }),
                                                  (0, r.jsx)(x.K0, {
                                                      "aria-label": ew.intl.string(ew.t.cpT0Cq),
                                                      onClick: n,
                                                      icon: x.d$L,
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
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(x.jlY, {
                                      "data-migration-pending": !0,
                                      className: eL.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eL.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: eL.do,
                                              children: [
                                                  (0, r.jsx)(x.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eL.Q2,
                                                      children: ew.intl.format(ew.t["78ph4b"], {
                                                          discountOfferAmount: q,
                                                      }),
                                                  }),
                                                  $?.expiresAt != null && (0, r.jsx)(ei.e, { endDate: $.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
