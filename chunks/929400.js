n.d(t, { default: () => e$ });
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
    E = n(725807),
    T = n(287070),
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
    $ = n(940980),
    q = n(495565),
    J = n(740076),
    K = n(466459),
    Y = n(442759),
    Z = n(780898),
    X = n(512213),
    Q = n(139136),
    ee = n(623373),
    et = n(660653),
    en = n(536572),
    er = n(778992),
    ea = n(49620),
    ei = n(586445),
    es = n(854818),
    el = n(177366),
    eo = n(11606),
    ec = n(203312),
    ed = n(878112),
    eu = n(501664),
    em = n(882342),
    eh = n(572595),
    ep = n(641405),
    ex = n(812016),
    ef = n(184659),
    ev = n(561769),
    eg = n(63574),
    e_ = n(364616),
    eA = n(846957),
    ej = n(293477),
    eC = n(139146),
    eN = n(929283),
    eb = n(827066),
    eI = n(525723),
    eR = n(212407),
    eE = n(347722),
    eT = n(935094),
    ey = n(57020),
    eP = n(61750),
    eO = n(758836),
    ek = n(652215),
    eS = n(788868),
    ew = n(818348),
    eL = n(985018),
    eB = n(316069);
let eM = (e) => {
        let { item: t, product: n, user: i } = e,
            s = a.useRef(null),
            l = (0, W.aw)(n),
            { firstAvatarDecoration: o } = (0, Y.f5)(n);
        return t.type === d.R.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: l ? eB.X2 : eB.h1,
                  children: (0, r.jsx)(eN.i, { user: i, item: t, isHighlighted: !0 }),
              })
            : t.type === d.R.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: l ? eB.ME : eB.sm,
                    ref: s,
                    children: (0, r.jsx)(Q.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === d.R.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: s,
                      className: eB.Dz,
                      children: (0, r.jsx)(X.A, {
                          className: eB.M4,
                          nameplate: t,
                          user: i,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: o,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eU = (e) => {
        let { product: t, user: n, activeSlide: a = 0 } = e,
            i = t.items.length;
        return (0, r.jsx)("div", {
            className: eB.g4,
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
                                className: eB.Kg,
                                children: [
                                    (0, r.jsx)(eM, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(x.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eB.gx,
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
    eD = (e) => {
        let { product: t, user: n, activeSlide: a } = e;
        return (0, W.aw)(t)
            ? (0, r.jsx)(eU, { product: t, user: n, activeSlide: a })
            : (0, eO.pQ)(t.skuId)
              ? (0, r.jsx)(eA.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(eM, { item: t.items[0], product: t, user: n })
                : null;
    },
    eV = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(x.Text, {
                  variant: "text-sm/normal",
                  className: eB.CU,
                  children: eL.intl.format(eL.t.Q1scdE, {
                      helpdeskArticle: U.A.getArticleURL(ek.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eG = (e) => {
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
            { cardId: I, sessionId: T, tilePosition: y } = (0, H.uM)() ?? {},
            O = D.Ay.canUseCollectibles(n),
            { previewingVariantIndex: k, handleEntering: B, handleLeaving: M } = g,
            U = (0, eb.q)(t, k),
            z = (0, ee.rb)(t, A);
        o()(null != z, "Selected product should not be null");
        let Z = (0, K.h)(t),
            { isPurchased: X, isPartiallyOwnedBundle: Q } = (0, K.h)(z),
            { isDisabled: et, disabledReason: er } = (0, J.I)(z.skuId),
            ei = (0, W.Zu)({ product: z, isPartiallyOwnedBundle: Q, isPurchased: X }),
            es = (0, m.bG)([F.A], () => F.A.isClaiming === z?.skuId),
            el = (0, f.Ay)(),
            ex = (0, p.Mw)(el),
            ef = (0, W.G0)(z),
            eA = (0, W.yt)(z, ek.lid.DEFAULT),
            eC = eA?.amount === 0,
            { firstAvatarDecoration: eN } = (0, Y.f5)(U ?? z),
            eR = a.useMemo(() => (0, W.fT)(z, O), [z, O]),
            eT = (0, en.VG)(t),
            eM = (0, eE.X)(z),
            { enabled: eU } = (0, w.Z)({ location: "collectibles_shop_product_details_modal" }),
            eG = (0, q.r)(z, !1),
            eH = (0, eI.V_)(t),
            eF = null != eH,
            ez = (t.variants?.length ?? 0) > 8,
            eW = (0, $.W)("CollectiblesShopProductDetailsModal"),
            e$ = c === eO.G2.ORBS && l ? ev.Hi.ORBS : eW ? ev.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: eq,
                isOrbExclusive: eJ,
                hasSufficientOrbs: eK,
            } = (0, ey.F)({ product: z, isPremiumUser: O, hasDiscountOffer: eF, prioritizedCurrency: e$ }),
            eY = a.useMemo(() => eq.some((e) => e.currency === ew.Yr.DISCORD_ORB), [eq]);
        (0, S.W)({ disableFetch: !eY });
        let eZ = a.useCallback(
            () => (0, R.A)({ skuId: z.skuId, analyticsLocations: b, onClose: (e) => (e ? u() : (0, ew.tE)()) }),
            [b, u, z.skuId],
        );
        return (
            a.useEffect(() => {
                if (null != eN) return (0, P.p)({ avatarDecoration: eN }), () => (0, P.p)({ avatarDecoration: void 0 });
            }, [eN]),
            (0, r.jsxs)("div", {
                className: eB.qA,
                children: [
                    (0, r.jsx)("div", { className: eB.gn, children: (0, r.jsx)(ec.A, { category: i }) }),
                    (0, r.jsx)(eD, { product: U ?? z, user: n, activeSlide: j }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eB.h_,
                                children: [
                                    (0, r.jsx)(eo.A, { product: z, isDarkText: !ex, isOrbExclusive: eJ }),
                                    (0, r.jsx)(x.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eB.v7,
                                        children: eT,
                                    }),
                                    (0, r.jsx)(x.Text, { variant: "text-sm/normal", children: eG }),
                                    (0, r.jsx)(eV, { skuId: z.skuId }),
                                    Z.isPurchased || Z.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(ea.c, { className: eB.On, isPartiallyPurchased: Q })
                                        : ef
                                          ? (0, r.jsx)(x.Text, {
                                                variant: "text-md/semibold",
                                                className: eB.On,
                                                children: eL.intl.string(eL.t.rt69oo),
                                            })
                                          : eU
                                            ? (0, r.jsx)(ej.B, {
                                                  prices: eq,
                                                  product: z,
                                                  isPremiumUser: O,
                                                  discount: eR,
                                                  hasSufficientOrbs: eK,
                                                  isProductDisabled: et,
                                                  discountOfferAmount: eH,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eB.pw,
                                                  children: [
                                                      (0, r.jsx)(eu.A, {
                                                          product: z,
                                                          discount: eR,
                                                          isPremiumUser: O,
                                                          hideStrikethroughPrice: !O || eF,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eH,
                                                      }),
                                                      O || eF ? null : (0, r.jsx)(em.A, { product: z }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, ee.B1)(t) &&
                                (0, r.jsx)(x.M1G, {
                                    children: (0, r.jsxs)("div", {
                                        className: s()(eB.Oj, { [eB.OJ]: ez }),
                                        children: [
                                            ez &&
                                                (0, r.jsx)(eg.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: k,
                                                    className: eB.L$,
                                                }),
                                            (0, r.jsx)(e_.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: B,
                                                onVariantExit: M,
                                                wrap: !0,
                                            }),
                                            !ez &&
                                                (0, r.jsx)(eg.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: k,
                                                    className: eB.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== er &&
                                (0, r.jsx)(x.Text, { variant: "text-xs/normal", className: eB.H$, children: er }),
                            (0, r.jsx)(x.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (ef && !O && !eC) {
                                        let e;
                                        return (
                                            (e = eL.intl.string(eL.t.sEAnVH)),
                                            (0, r.jsx)(E.A, {
                                                subscriptionTier: eS.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: eh.M,
                                                onSubscribeModalClose: () => {
                                                    (0, eh.t)({
                                                        product: z,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: v,
                                                        analyticsLocations: b,
                                                        tab: c,
                                                        giftRecipient: C,
                                                        giftingOrigin: N,
                                                        cardId: I,
                                                        sessionId: T,
                                                        tilePosition: y,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return ei
                                        ? X
                                            ? eM
                                                ? (0, r.jsxs)(x.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(ep.A, { product: z, onSuccess: u }),
                                                          (0, r.jsx)(ed.A, {
                                                              primary: !0,
                                                              product: z,
                                                              onSuccess: u,
                                                              giftRecipient: C,
                                                              giftingOrigin: N,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(ep.A, { product: z, onSuccess: u })
                                            : ef
                                              ? (0, r.jsx)(x.Button, {
                                                    loading: es,
                                                    loadingStartedLabel: eL.intl.string(eL.t["TYw+9s"]),
                                                    loadingFinishedLabel: eL.intl.string(eL.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, G.iJ)(z.skuId),
                                                            u(),
                                                            (0, eP.A)({
                                                                product: z,
                                                                analyticsLocations: b,
                                                                purchaseType: eO.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eL.intl.string(eL.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eq.map((e, t) => {
                                                        let n,
                                                            a = 0 === t;
                                                        if (e.currency === ew.Yr.DISCORD_ORB) {
                                                            let t, n, i, s;
                                                            return (
                                                                (t = et
                                                                    ? eL.intl.string(eL.t.cTdr3x)
                                                                    : eL.intl.string(eL.t.zqh7ZM)),
                                                                (n = !eK || et),
                                                                (i = eL.intl.formatToPlainString(eL.t.yi41qQ, {
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
                                                                                        (0, eP.A)({
                                                                                            product: z,
                                                                                            analyticsLocations: b,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: eO.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: b,
                                                                            });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": s,
                                                                        text: eL.intl.format(eL.t.lOtBOI, {
                                                                            orbPrice: e.amount,
                                                                            orbIconHook: () =>
                                                                                (0, r.jsx)(x.Cp8, {
                                                                                    className: eB.fN,
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
                                                            (n = (0, W.aw)(z)
                                                                ? eL.intl.string(eL.t.V1AWw0)
                                                                : z.type === d.R.PROFILE_EFFECT
                                                                  ? eL.intl.string(eL.t.kAeDcK)
                                                                  : z.type === d.R.NAMEPLATE
                                                                    ? eL.intl.string(eL.t.H3vhqU)
                                                                    : eL.intl.string(eL.t.AQ0Veg)),
                                                            eF
                                                                ? (n = eL.intl.formatToPlainString(eL.t["5U5RB5"], {
                                                                      discountOfferAmount: eH,
                                                                  }))
                                                                : eU &&
                                                                  (n = eL.intl.formatToPlainString(eL.t["cNSL/j"], {
                                                                      price: (0, V.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(x.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(x.Button, {
                                                                        variant: a ? "primary" : "secondary",
                                                                        onClick: eZ,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eM &&
                                                                        (0, r.jsx)(ed.A, {
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
                                        : eM
                                          ? (0, r.jsx)(ed.A, {
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
                                className: s()(eB.ed, !ex && eB.un),
                                variant: "text-xxs/normal",
                                children: ef && !X ? eL.intl.string(eL.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eH = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eB.mV,
            children: (0, r.jsx)(j.A, {
                avatar: (0, r.jsx)(x.euF, {
                    src: t.avatarSrc,
                    size: x._3J.SIZE_32,
                    "aria-label": t.name,
                    status: x.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: s()(eB.$L, n),
            }),
        });
    },
    eF = (e) => {
        let { user: t, nameplate: n, avatarDecoration: a } = e,
            i = (0, Z.Ov)();
        return (0, r.jsx)("div", {
            className: eB.nJ,
            role: "img",
            "aria-label": eL.intl.string(eL.t.SZeUdR),
            children: (0, r.jsxs)(x.M1G, {
                children: [
                    (0, r.jsx)(eH, { user: i.mallow, innerClassName: eB.ab }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eB.OS,
                        children: [eL.intl.string(eL.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eH, { user: i.phibi, innerClassName: eB.e9 }),
                    (0, r.jsx)("div", {
                        className: eB.mV,
                        children: (0, r.jsx)(X.A, {
                            className: eB.M4,
                            innerClassName: eB.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: a,
                        }),
                    }),
                    (0, r.jsx)(eH, { user: i.locke, innerClassName: eB.e9 }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eB.OS,
                        children: [eL.intl.string(eL.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eH, { user: i.boom, innerClassName: eB.bD }),
                    (0, r.jsx)(eH, { user: i.cherry, innerClassName: eB.bD }),
                ],
            }),
        });
    },
    ez = (e) => {
        let { product: t, user: n, activeBundleSlide: a, isTransitioning: i } = e,
            l = (0, m.bG)([v.A], () => v.A.useReducedMotion),
            o = D.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: c, ...u } = (0, m.cf)([O.A], () => O.A.getPendingChanges()),
            h = (0, y.V7)({ userId: n.id, image: c }),
            p = t.type === d.R.AVATAR_DECORATION,
            [x] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: g, firstNameplate: _ } = (0, Y.f5)(t),
            A = null != g,
            j = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(T.A, {
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
                        p && (0, r.jsx)(eW, { user: n }),
                    ],
                }),
            C = (e) => (0, r.jsx)(eF, { user: n, nameplate: e, avatarDecoration: f });
        if (t.type === d.R.BUNDLE) {
            if (!(0, et.Wb)(t))
                return (0, r.jsx)("div", {
                    className: eB.RA,
                    children: (0, r.jsx)("div", { className: eB.bo, children: j() }),
                });
            {
                let e = a ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !l;
                return n.type === d.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: s()(eB.Zj, i && c ? eB.p2 : ""), children: C(n) })
                    : (0, r.jsx)("div", { className: s()(eB.Ak, i && c ? eB.p2 : ""), children: j() });
            }
        }
        return null != _
            ? (0, r.jsx)("div", { className: eB.Zj, children: C(_) })
            : (0, r.jsx)("div", { className: x?.type === d.R.AVATAR_DECORATION ? eB.RA : eB.Ak, children: j() });
    },
    eW = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, C.rh)({
                    ...(0, N.Ay)({ author: t, channelId: "1337", content: eL.intl.string(eL.t.d5YwK5) }),
                    state: ek.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eL.intl.string(eL.t["TN+ZvB"]),
            children: (0, r.jsx)(x.M1G, {
                children: (0, r.jsxs)(x.ZpM, {
                    className: eB.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(I.A, { className: eB.G5, author: (0, b.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: eB.lG,
                            children: [
                                (0, r.jsx)(x.U1e, { size: "md", color: "currentColor", className: eB.hq }),
                                (0, r.jsx)(x.nm2, { size: "md", color: "currentColor", className: eB.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    e$ = (e) => {
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
            I = (0, eT.f)(i),
            { previewingVariantIndex: R } = I,
            E = (0, z.Q)(i),
            T = (0, eb.q)(i, R),
            y = (0, ee.rb)(i, E);
        o()(null != y, "Selected product should not be null");
        let { analyticsLocations: P } = (0, _.Ay)([...f, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, el.Yr)(y.skuId);
        let O = (0, eR.U1)(l);
        a.useEffect(() => {
            null != b && (0, k.A)(b.id, b.getAvatarURL(void 0, 80));
        }, [b]);
        let S = a.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        a.useEffect(() => {
            M.default.track(ek.HAw.OPEN_MODAL, {
                type: ek.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
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
                product_sku_ids: (0, ee.B1)(i) ? i.variants.map((e) => e.skuId) : [i.skuId],
                location_stack: P,
            },
        });
        let V = (0, L.o6)(),
            F = t === x.ip4.EXITING,
            $ = (0, eI.$R)(i),
            q = $?.amount,
            J = null != q && ($?.discountId === eS.eR || $?.discountId === eS.Qz),
            K = a.useMemo(() => ((0, W.aw)(y) ? y.items.length : 0), [y]),
            { activeSlide: Y, isTransitioning: Z } = (0, er.X)({ slideCount: K, intervalMs: 5e3 });
        return null == b
            ? null
            : (0, r.jsx)(_.f5, {
                  value: P,
                  children: (0, r.jsxs)(x.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eB.CR,
                      returnRef: h,
                      transitionState: t,
                      size: x.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(x.$mQ, {
                              "data-migration-pending": !0,
                              className: eB.jE,
                              children: [
                                  (0, r.jsx)(eG, {
                                      user: b,
                                      product: i,
                                      category: l,
                                      onClose: n,
                                      previewingVariantIndexProps: I,
                                      selectedVariantIndex: E,
                                      shouldCheckoutWithOrbs: v,
                                      tab: j,
                                      activeBundleSlide: Y,
                                      giftRecipient: C?.id !== b.id ? C : void 0,
                                      giftingOrigin: C?.id !== b.id ? N : void 0,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: s()(
                                          eB.i1,
                                          y.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? eB.bF
                                              : y.type === d.R.AVATAR_DECORATION
                                                ? eB.Jq
                                                : eB.eF,
                                      ),
                                      style: { backgroundImage: `url(${O})` },
                                      children: [
                                          (0, eO.pQ)(i.skuId)
                                              ? i.skuId === eO.Dp.ORB_PROFILE_BADGE
                                                  ? V || F
                                                      ? null
                                                      : (0, r.jsx)(ef.z, { user: b })
                                                  : i.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(ex.I, {})
                                                    : (0, r.jsx)(eA.B, { product: i, className: eB.Ms })
                                              : (0, r.jsx)(ez, {
                                                    user: b,
                                                    product: T ?? y,
                                                    activeBundleSlide: Y,
                                                    isTransitioning: Z,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eB.VG,
                                              children: [
                                                  (0, r.jsx)(eC.R, {
                                                      product: i,
                                                      selectedVariantIndex: E,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, r.jsx)(ei.V, { skuId: y.skuId, tab: j }),
                                                  (0, r.jsx)(x.K0, {
                                                      "aria-label": eL.intl.string(eL.t.cpT0Cq),
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
                                      className: eB.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eB.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: eB.do,
                                              children: [
                                                  (0, r.jsx)(x.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eB.Q2,
                                                      children: eL.intl.format(eL.t["78ph4b"], {
                                                          discountOfferAmount: q,
                                                      }),
                                                  }),
                                                  $?.expiresAt != null && (0, r.jsx)(es.e, { endDate: $.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
