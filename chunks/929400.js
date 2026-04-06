n.d(t, { default: () => eq });
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
    h = n(990078),
    p = n(582754),
    x = n(397927),
    f = n(736653),
    v = n(775602),
    g = n(793574),
    _ = n(688810),
    A = n(139286),
    j = n(262295),
    C = n(141468),
    N = n(963852),
    b = n(763754),
    I = n(20851),
    R = n(44120),
    T = n(725807),
    E = n(287070),
    y = n(101058),
    P = n(84540),
    O = n(836602),
    k = n(576622),
    S = n(761705),
    w = n(270051),
    L = n(652165),
    B = n(287809),
    M = n(954571),
    U = n(975571),
    D = n(927578),
    V = n(580630),
    G = n(979286),
    H = n(440938),
    F = n(4227),
    z = n(298072),
    W = n(993408),
    $ = n(640634),
    q = n(940980),
    J = n(495565),
    K = n(740076),
    Y = n(466459),
    Z = n(442759),
    X = n(780898),
    Q = n(512213),
    ee = n(139136),
    et = n(623373),
    en = n(660653),
    er = n(536572),
    ea = n(778992),
    ei = n(49620),
    es = n(586445),
    el = n(854818),
    eo = n(177366),
    ec = n(11606),
    ed = n(203312),
    eu = n(878112),
    em = n(501664),
    eh = n(882342),
    ep = n(572595),
    ex = n(641405),
    ef = n(812016),
    ev = n(184659),
    eg = n(561769),
    e_ = n(63574),
    eA = n(364616),
    ej = n(846957),
    eC = n(293477),
    eN = n(139146),
    eb = n(929283),
    eI = n(827066),
    eR = n(525723),
    eT = n(212407),
    eE = n(347722),
    ey = n(935094),
    eP = n(57020),
    eO = n(61750),
    ek = n(758836),
    eS = n(652215),
    ew = n(788868),
    eL = n(818348),
    eB = n(985018),
    eM = n(316069);
let eU = (e) => {
        let { item: t, product: n, user: i } = e,
            s = a.useRef(null),
            l = (0, W.aw)(n),
            { firstAvatarDecoration: o } = (0, Z.f5)(n);
        return t.type === d.R.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: l ? eM.X2 : eM.h1,
                  children: (0, r.jsx)(eb.i, { user: i, item: t, isHighlighted: !0 }),
              })
            : t.type === d.R.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: l ? eM.ME : eM.sm,
                    ref: s,
                    children: (0, r.jsx)(ee.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === d.R.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: s,
                      className: eM.Dz,
                      children: (0, r.jsx)(Q.A, {
                          className: eM.M4,
                          nameplate: t,
                          user: i,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: o,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eD = (e) => {
        let { product: t, user: n, activeSlide: a = 0 } = e,
            i = t.items.length;
        return (0, r.jsx)("div", {
            className: eM.g4,
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
                                className: eM.Kg,
                                children: [
                                    (0, r.jsx)(eU, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(x.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eM.gx,
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
    eV = (e) => {
        let { product: t, user: n, activeSlide: a } = e;
        return (0, W.aw)(t)
            ? (0, r.jsx)(eD, { product: t, user: n, activeSlide: a })
            : (0, ek.pQ)(t.skuId)
              ? (0, r.jsx)(ej.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(eU, { item: t.items[0], product: t, user: n })
                : null;
    },
    eG = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(x.Text, {
                  variant: "text-sm/normal",
                  className: eM.CU,
                  children: eB.intl.format(eB.t.Q1scdE, {
                      helpdeskArticle: U.A.getArticleURL(eS.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eH = (e) => {
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
            { analyticsLocations: b } = (0, _.Ay)(),
            { cardId: I, sessionId: E, tilePosition: y } = (0, H.uM)() ?? {},
            O = D.Ay.canUseCollectibles(n),
            { previewingVariantIndex: k, handleEntering: B, handleLeaving: M } = g,
            U = (0, eI.q)(t, k),
            z = (0, et.rb)(t, A);
        o()(null != z, "Selected product should not be null");
        let X = (0, Y.h)(t),
            { isPurchased: Q, isPartiallyOwnedBundle: ee } = (0, Y.h)(z),
            { isDisabled: en, disabledReason: ea } = (0, K.I)(z.skuId),
            es = (0, W.Zu)({ product: z, isPartiallyOwnedBundle: ee, isPurchased: Q }),
            el = (0, m.bG)([F.A], () => F.A.isClaiming === z?.skuId),
            eo = (0, f.Ay)(),
            ef = (0, p.Mw)(eo),
            ev = (0, W.G0)(z),
            ej = (0, W.yt)(z, eS.lid.DEFAULT),
            eN = ej?.amount === 0,
            { firstAvatarDecoration: eb } = (0, Z.f5)(U ?? z),
            eT = a.useMemo(() => (0, W.fT)(z, O), [z, O]),
            ey = (0, er.VG)(t),
            eU = (0, eE.X)(z),
            { enabled: eD } = (0, w.Z)({ location: "collectibles_shop_product_details_modal" }),
            eH = (0, J.r)(z, !1),
            eF = (0, eR.V_)(t),
            ez = null != eF,
            eW = (t.variants?.length ?? 0) > 8,
            e$ = (0, q.W)("CollectiblesShopProductDetailsModal"),
            eq = c === ek.G2.ORBS && l ? eg.Hi.ORBS : e$ ? eg.Hi.FIAT : void 0,
            eJ = (0, $.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eK,
                isOrbExclusive: eY,
                hasSufficientOrbs: eZ,
            } = (0, eP.F)({ product: z, isPremiumUser: O, hasDiscountOffer: ez, prioritizedCurrency: eq }),
            eX = a.useMemo(() => eK.some((e) => e.currency === eL.Yr.DISCORD_ORB), [eK]);
        (0, S.W)({ disableFetch: !eX });
        let eQ = a.useCallback(
            () => (0, R.A)({ skuId: z.skuId, analyticsLocations: b, onClose: (e) => (e ? u() : (0, eL.tE)()) }),
            [b, u, z.skuId],
        );
        return (
            a.useEffect(() => {
                if (null != eb) return (0, P.p)({ avatarDecoration: eb }), () => (0, P.p)({ avatarDecoration: void 0 });
            }, [eb]),
            (0, r.jsxs)("div", {
                className: eM.qA,
                children: [
                    (0, r.jsx)("div", { className: eM.gn, children: (0, r.jsx)(ed.A, { category: i }) }),
                    (0, r.jsx)(eV, { product: U ?? z, user: n, activeSlide: j }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eM.h_,
                                children: [
                                    (0, r.jsx)(ec.A, { product: z, isDarkText: !ef, isOrbExclusive: eY }),
                                    (0, r.jsx)(x.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eM.v7,
                                        children: ey,
                                    }),
                                    (0, r.jsx)(x.Text, { variant: "text-sm/normal", children: eH }),
                                    (0, r.jsx)(eG, { skuId: z.skuId }),
                                    X.isPurchased || X.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(ei.c, { className: eM.On, isPartiallyPurchased: ee })
                                        : ev
                                          ? (0, r.jsx)(x.Text, {
                                                variant: "text-md/semibold",
                                                className: eM.On,
                                                children: eB.intl.string(eB.t.rt69oo),
                                            })
                                          : eD
                                            ? (0, r.jsx)(eC.B, {
                                                  prices: eK,
                                                  product: z,
                                                  isPremiumUser: O,
                                                  discount: eT,
                                                  hasSufficientOrbs: eZ,
                                                  isProductDisabled: en,
                                                  discountOfferAmount: eF,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eM.pw,
                                                  children: [
                                                      (0, r.jsx)(em.A, {
                                                          product: z,
                                                          discount: eT,
                                                          isPremiumUser: O,
                                                          hideStrikethroughPrice: !O || ez,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eF,
                                                      }),
                                                      O || ez ? null : (0, r.jsx)(eh.A, { product: z }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, et.B1)(t) &&
                                (0, r.jsx)(x.M1G, {
                                    children: (0, r.jsxs)("div", {
                                        className: s()(eM.Oj, { [eM.OJ]: eW }),
                                        children: [
                                            eW &&
                                                (0, r.jsx)(e_.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: k,
                                                    className: eM.L$,
                                                }),
                                            (0, r.jsx)(eA.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: B,
                                                onVariantExit: M,
                                                wrap: !0,
                                            }),
                                            !eW &&
                                                (0, r.jsx)(e_.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: k,
                                                    className: eM.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== ea &&
                                (0, r.jsx)(x.Text, { variant: "text-xs/normal", className: eM.H$, children: ea }),
                            (0, r.jsx)(x.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (ev && !O && !eN) {
                                        let e;
                                        return (
                                            (e = eB.intl.string(eB.t.sEAnVH)),
                                            (0, r.jsx)(T.A, {
                                                subscriptionTier: ew.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: ep.M,
                                                onSubscribeModalClose: () => {
                                                    (0, ep.t)({
                                                        product: z,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: v,
                                                        analyticsLocations: b,
                                                        tab: c,
                                                        giftRecipient: C,
                                                        giftingOrigin: N,
                                                        cardId: I,
                                                        sessionId: E,
                                                        tilePosition: y,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return es
                                        ? Q
                                            ? eU
                                                ? (0, r.jsxs)(x.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(ex.A, { product: z, onSuccess: u }),
                                                          (0, r.jsx)(eu.A, {
                                                              primary: !0,
                                                              product: z,
                                                              onSuccess: u,
                                                              giftRecipient: C,
                                                              giftingOrigin: N,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(ex.A, { product: z, onSuccess: u })
                                            : ev
                                              ? (0, r.jsx)(x.Button, {
                                                    loading: el,
                                                    loadingStartedLabel: eB.intl.string(eB.t["TYw+9s"]),
                                                    loadingFinishedLabel: eB.intl.string(eB.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, G.iJ)(z.skuId),
                                                            u(),
                                                            (0, eO.A)({
                                                                product: z,
                                                                analyticsLocations: b,
                                                                purchaseType: ek.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eB.intl.string(eB.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eK.map((e, t) => {
                                                        let n,
                                                            a = 0 === t;
                                                        if (e.currency === eL.Yr.DISCORD_ORB) {
                                                            let t, n, i, s;
                                                            return (
                                                                (t = en
                                                                    ? eB.intl.string(eB.t.cTdr3x)
                                                                    : eB.intl.string(eB.t.zqh7ZM)),
                                                                (n = !eZ || en),
                                                                (i = eB.intl.formatToPlainString(eB.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (s = n ? `${i}, ${t}` : i),
                                                                (0, r.jsx)(h.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, r.jsx)(x.Button, {
                                                                        variant: a ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            (0, L.B4)({
                                                                                skuId: z.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    let { entitlements: t } = e;
                                                                                    (0, G.gB)(),
                                                                                        u(),
                                                                                        (0, eO.A)({
                                                                                            product: z,
                                                                                            analyticsLocations: b,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: ek.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: b,
                                                                            });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": s,
                                                                        text: eB.intl.format(
                                                                            eJ ? eB.t.JC15qj : eB.t.lOtBOI,
                                                                            {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(x.Cp8, {
                                                                                        className: eM.fN,
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
                                                            (n = (0, W.aw)(z)
                                                                ? eB.intl.string(eB.t.V1AWw0)
                                                                : z.type === d.R.PROFILE_EFFECT
                                                                  ? eB.intl.string(eB.t.kAeDcK)
                                                                  : z.type === d.R.NAMEPLATE
                                                                    ? eB.intl.string(eB.t.H3vhqU)
                                                                    : eB.intl.string(eB.t.AQ0Veg)),
                                                            ez
                                                                ? (n = eB.intl.formatToPlainString(eB.t["5U5RB5"], {
                                                                      discountOfferAmount: eF,
                                                                  }))
                                                                : eD &&
                                                                  (n = eB.intl.formatToPlainString(eB.t["cNSL/j"], {
                                                                      price: (0, V.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(x.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(x.Button, {
                                                                        variant: a ? "primary" : "secondary",
                                                                        onClick: eQ,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eU &&
                                                                        (0, r.jsx)(eu.A, {
                                                                            primary: a,
                                                                            product: z,
                                                                            onSuccess: u,
                                                                            giftRecipient: C,
                                                                            giftingOrigin: N,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eU
                                          ? (0, r.jsx)(eu.A, {
                                                primary: !0,
                                                product: z,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: C,
                                                giftingOrigin: N,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, r.jsx)(x.Text, {
                                className: s()(eM.ed, !ef && eM.un),
                                variant: "text-xxs/normal",
                                children: ev && !Q ? eB.intl.string(eB.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eF = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eM.mV,
            children: (0, r.jsx)(j.A, {
                avatar: (0, r.jsx)(x.euF, {
                    src: t.avatarSrc,
                    size: x._3J.SIZE_32,
                    "aria-label": t.name,
                    status: x.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: s()(eM.$L, n),
            }),
        });
    },
    ez = (e) => {
        let { user: t, nameplate: n, avatarDecoration: a } = e,
            i = (0, X.Ov)();
        return (0, r.jsx)("div", {
            className: eM.nJ,
            role: "img",
            "aria-label": eB.intl.string(eB.t.SZeUdR),
            children: (0, r.jsxs)(x.M1G, {
                children: [
                    (0, r.jsx)(eF, { user: i.mallow, innerClassName: eM.ab }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eM.OS,
                        children: [eB.intl.string(eB.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eF, { user: i.phibi, innerClassName: eM.e9 }),
                    (0, r.jsx)("div", {
                        className: eM.mV,
                        children: (0, r.jsx)(Q.A, {
                            className: eM.M4,
                            innerClassName: eM.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: a,
                        }),
                    }),
                    (0, r.jsx)(eF, { user: i.locke, innerClassName: eM.e9 }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eM.OS,
                        children: [eB.intl.string(eB.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eF, { user: i.boom, innerClassName: eM.bD }),
                    (0, r.jsx)(eF, { user: i.cherry, innerClassName: eM.bD }),
                ],
            }),
        });
    },
    eW = (e) => {
        let { product: t, user: n, activeBundleSlide: a, isTransitioning: i } = e,
            l = (0, m.bG)([v.A], () => v.A.useReducedMotion),
            o = D.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: c, ...u } = (0, m.cf)([O.A], () => O.A.getPendingChanges()),
            h = (0, y.V7)({ userId: n.id, image: c }),
            p = t.type === d.R.AVATAR_DECORATION,
            [x] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: g, firstNameplate: _ } = (0, Z.f5)(t),
            A = null != g,
            j = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(E.A, {
                            ...u,
                            pendingAvatar: h,
                            user: n,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: f,
                            pendingProfileEffect: g,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: p,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        p && (0, r.jsx)(e$, { user: n }),
                    ],
                }),
            C = (e) => (0, r.jsx)(ez, { user: n, nameplate: e, avatarDecoration: f });
        if (t.type === d.R.BUNDLE) {
            if (!(0, en.Wb)(t))
                return (0, r.jsx)("div", {
                    className: eM.RA,
                    children: (0, r.jsx)("div", { className: eM.bo, children: j() }),
                });
            {
                let e = a ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !l;
                return n.type === d.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: s()(eM.Zj, i && c ? eM.p2 : ""), children: C(n) })
                    : (0, r.jsx)("div", { className: s()(eM.Ak, i && c ? eM.p2 : ""), children: j() });
            }
        }
        return null != _
            ? (0, r.jsx)("div", { className: eM.Zj, children: C(_) })
            : (0, r.jsx)("div", { className: x?.type === d.R.AVATAR_DECORATION ? eM.RA : eM.Ak, children: j() });
    },
    e$ = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, C.rh)({
                    ...(0, N.Ay)({ author: t, channelId: "1337", content: eB.intl.string(eB.t.d5YwK5) }),
                    state: eS.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eB.intl.string(eB.t["TN+ZvB"]),
            children: (0, r.jsx)(x.M1G, {
                children: (0, r.jsxs)(x.ZpM, {
                    className: eM.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(I.A, { className: eM.G5, author: (0, b.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: eM.lG,
                            children: [
                                (0, r.jsx)(x.U1e, { size: "md", color: "currentColor", className: eM.hq }),
                                (0, r.jsx)(x.nm2, { size: "md", color: "currentColor", className: eM.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eq = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: l,
                returnRef: h,
                analyticsSource: p,
                analyticsLocations: f,
                shouldCheckoutWithOrbs: v,
                tab: j,
                giftRecipient: C,
                giftingOrigin: N,
            } = e,
            b = (0, m.bG)([B.default], () => B.default.getCurrentUser()),
            I = (0, ey.f)(i),
            { previewingVariantIndex: R } = I,
            T = (0, z.Q)(i),
            E = (0, eI.q)(i, R),
            y = (0, et.rb)(i, T);
        o()(null != y, "Selected product should not be null");
        let { analyticsLocations: P } = (0, _.Ay)([...f, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eo.Yr)(y.skuId);
        let O = (0, eT.U1)(l);
        a.useEffect(() => {
            null != b && (0, k.A)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let S = a.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        a.useEffect(() => {
            M.default.track(eS.HAw.OPEN_MODAL, {
                type: eS.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: P,
                sku_id: y.skuId,
                product_type: S,
            }),
                (0, G.RD)(y.skuId);
        }, [p, P, y.skuId, S]);
        let { cardId: w, sessionId: U, tilePosition: D } = (0, H.uM)() ?? {};
        (0, A.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: y.skuId,
                card_id: w,
                shop_session_id: U,
                position_in_section: D,
                product_sku_ids: (0, et.B1)(i) ? i.variants.map((e) => e.skuId) : [i.skuId],
                location_stack: P,
            },
        });
        let V = (0, L.o6)(),
            F = t === x.ip4.EXITING,
            $ = (0, eR.$R)(i),
            q = $?.amount,
            J = null != q && ($?.discountId === ew.eR || $?.discountId === ew.Qz),
            K = a.useMemo(() => ((0, W.aw)(y) ? y.items.length : 0), [y]),
            { activeSlide: Y, isTransitioning: Z } = (0, ea.X)({ slideCount: K, intervalMs: 5e3 });
        return null == b
            ? null
            : (0, r.jsx)(_.f5, {
                  value: P,
                  children: (0, r.jsxs)(x.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eM.CR,
                      returnRef: h,
                      transitionState: t,
                      size: x.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(x.$mQ, {
                              "data-migration-pending": !0,
                              className: eM.jE,
                              children: [
                                  (0, r.jsx)(eH, {
                                      user: b,
                                      product: i,
                                      category: l,
                                      onClose: n,
                                      previewingVariantIndexProps: I,
                                      selectedVariantIndex: T,
                                      shouldCheckoutWithOrbs: v,
                                      tab: j,
                                      activeBundleSlide: Y,
                                      giftRecipient: C?.id !== b.id ? C : void 0,
                                      giftingOrigin: C?.id !== b.id ? N : void 0,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: s()(
                                          eM.i1,
                                          y.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? eM.bF
                                              : y.type === d.R.AVATAR_DECORATION
                                                ? eM.Jq
                                                : eM.eF,
                                      ),
                                      style: { backgroundImage: `url(${O})` },
                                      children: [
                                          (0, ek.pQ)(i.skuId)
                                              ? i.skuId === ek.Dp.ORB_PROFILE_BADGE
                                                  ? V || F
                                                      ? null
                                                      : (0, r.jsx)(ev.z, { user: b })
                                                  : i.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(ef.I, {})
                                                    : (0, r.jsx)(ej.B, { product: i, className: eM.Ms })
                                              : (0, r.jsx)(eW, {
                                                    user: b,
                                                    product: E ?? y,
                                                    activeBundleSlide: Y,
                                                    isTransitioning: Z,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eM.VG,
                                              children: [
                                                  (0, r.jsx)(eN.R, {
                                                      product: i,
                                                      selectedVariantIndex: T,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, r.jsx)(es.V, { skuId: y.skuId, tab: j }),
                                                  (0, r.jsx)(x.K0, {
                                                      "aria-label": eB.intl.string(eB.t.cpT0Cq),
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
                          J &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(x.jlY, {
                                      "data-migration-pending": !0,
                                      className: eM.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eM.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: eM.do,
                                              children: [
                                                  (0, r.jsx)(x.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eM.Q2,
                                                      children: eB.intl.format(eB.t["78ph4b"], {
                                                          discountOfferAmount: q,
                                                      }),
                                                  }),
                                                  $?.expiresAt != null && (0, r.jsx)(el.e, { endDate: $.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
