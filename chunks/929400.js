a.d(t, { default: () => eq });
var n = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(284009),
    o = a.n(l),
    c = a(110259),
    d = a(575593),
    u = a(334279),
    m = a(417597),
    p = a(990078),
    _ = a(582754),
    h = a(397927),
    x = a(736653),
    f = a(775602),
    g = a(793574),
    v = a(688810),
    A = a(139286),
    C = a(262295),
    I = a(141468),
    j = a(963852),
    T = a(763754),
    b = a(20851),
    N = a(44120),
    R = a(725807),
    k = a(287070),
    E = a(101058),
    y = a(84540),
    O = a(836602),
    S = a(576622),
    P = a(761705),
    w = a(270051),
    L = a(652165),
    B = a(287809),
    M = a(954571),
    U = a(975571),
    D = a(927578),
    V = a(580630),
    H = a(979286),
    G = a(440938),
    F = a(4227),
    z = a(298072),
    W = a(993408),
    $ = a(640634),
    K = a(940980),
    q = a(495565),
    J = a(740076),
    Y = a(466459),
    Z = a(442759),
    Q = a(966619),
    X = a(780898),
    ee = a(512213),
    et = a(139136),
    ea = a(623373),
    en = a(660653),
    er = a(536572),
    ei = a(778992),
    es = a(49620),
    el = a(586445),
    eo = a(854818),
    ec = a(177366),
    ed = a(11606),
    eu = a(203312),
    em = a(878112),
    ep = a(501664),
    e_ = a(882342),
    eh = a(572595),
    ex = a(641405),
    ef = a(812016),
    eg = a(184659),
    ev = a(561769),
    eA = a(63574),
    eC = a(364616),
    eI = a(846957),
    ej = a(293477),
    eT = a(139146),
    eb = a(929283),
    eN = a(827066),
    eR = a(525723),
    ek = a(212407),
    eE = a(347722),
    ey = a(935094),
    eO = a(57020),
    eS = a(61750),
    eP = a(758836),
    ew = a(652215),
    eL = a(788868),
    eB = a(818348),
    eM = a(985018),
    eU = a(316069);
let eD = (e) => {
        let { item: t, product: a, user: i } = e,
            s = r.useRef(null),
            l = (0, W.aw)(a),
            { firstAvatarDecoration: o } = (0, Z.f5)(a);
        return t.type === d.R.AVATAR_DECORATION
            ? (0, n.jsx)("div", {
                  className: l ? eU.X2 : eU.h1,
                  children: (0, n.jsx)(eb.i, { user: i, item: t, isHighlighted: !0 }),
              })
            : t.type === d.R.PROFILE_EFFECT
              ? (0, n.jsx)("div", {
                    className: l ? eU.ME : eU.sm,
                    ref: s,
                    children: (0, n.jsx)(et.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === d.R.NAMEPLATE
                ? (0, n.jsx)("div", {
                      ref: s,
                      className: eU.Dz,
                      children: (0, n.jsx)(ee.A, {
                          className: eU.M4,
                          nameplate: t,
                          user: i,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: o,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eV = (e) => {
        let { product: t, user: a, activeSlide: r = 0 } = e,
            i = t.items.length;
        return (0, n.jsx)("div", {
            className: eU.g4,
            children: (0, n.jsx)(h.tN_, {
                activeSlide: String(r),
                children: t.items.map((e, r) => {
                    let s = String(r),
                        l = null != t.bundledProducts ? t.bundledProducts[r] : void 0,
                        o = `(${r + 1}/${i})`;
                    return (0, n.jsx)(
                        h.q7S,
                        {
                            id: s,
                            children: (0, n.jsxs)("div", {
                                className: eU.Kg,
                                children: [
                                    (0, n.jsx)(eD, { item: e, product: t, user: a }),
                                    (0, n.jsxs)(h.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eU.gx,
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
    eH = (e) => {
        let { product: t, user: a, activeSlide: r } = e;
        return (0, W.aw)(t)
            ? (0, n.jsx)(eV, { product: t, user: a, activeSlide: r })
            : (0, eP.pQ)(t.skuId)
              ? (0, n.jsx)(eI.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, n.jsx)(eD, { item: t.items[0], product: t, user: a })
                : null;
    },
    eG = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, n.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  className: eU.CU,
                  children: eM.intl.format(eM.t.Q1scdE, {
                      helpdeskArticle: U.A.getArticleURL(ew.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eF = (e) => {
        let {
                product: t,
                user: a,
                category: i,
                shouldCheckoutWithOrbs: l,
                tab: c,
                onClose: u,
                returnRef: f,
                previewingVariantIndexProps: g,
                selectedVariantIndex: A,
                activeBundleSlide: C,
                giftRecipient: I,
                giftingOrigin: j,
                onTrackClick: T,
            } = e,
            { analyticsLocations: b } = (0, v.Ay)(),
            { cardId: k, sessionId: E, tilePosition: O } = (0, G.uM)() ?? {},
            S = D.Ay.canUseCollectibles(a),
            { previewingVariantIndex: B, handleEntering: M, handleLeaving: U } = g,
            z = (0, eN.q)(t, B),
            Q = (0, ea.rb)(t, A);
        o()(null != Q, "Selected product should not be null");
        let X = (0, Y.h)(t),
            { isPurchased: ee, isPartiallyOwnedBundle: et } = (0, Y.h)(Q),
            { isDisabled: en, disabledReason: ei } = (0, J.I)(Q.skuId),
            el = (0, W.Zu)({ product: Q, isPartiallyOwnedBundle: et, isPurchased: ee }),
            eo = (0, m.bG)([F.A], () => F.A.isClaiming === Q?.skuId),
            ec = (0, x.Ay)(),
            ef = (0, _.Mw)(ec),
            eg = (0, W.G0)(Q),
            eI = (0, W.yt)(Q, ew.lid.DEFAULT),
            eT = eI?.amount === 0,
            { firstAvatarDecoration: eb } = (0, Z.f5)(z ?? Q),
            ek = r.useMemo(() => (0, W.fT)(Q, S), [Q, S]),
            ey = (0, er.VG)(t),
            eD = (0, eE.X)(Q),
            { enabled: eV } = (0, w.Z)({ location: "collectibles_shop_product_details_modal" }),
            eF = (0, q.r)(Q, !1),
            ez = (0, eR.V_)(t),
            eW = null != ez,
            e$ = (t.variants?.length ?? 0) > 8,
            eK = (0, K.W)("CollectiblesShopProductDetailsModal"),
            eq = c === eP.G2.ORBS && l ? ev.Hi.ORBS : eK ? ev.Hi.FIAT : void 0,
            eJ = (0, $.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eY,
                isOrbExclusive: eZ,
                hasSufficientOrbs: eQ,
            } = (0, eO.F)({ product: Q, isPremiumUser: S, hasDiscountOffer: eW, prioritizedCurrency: eq }),
            eX = r.useMemo(() => eY.some((e) => e.currency === eB.Yr.DISCORD_ORB), [eY]);
        (0, P.W)({ disableFetch: !eX });
        let e0 = r.useCallback(() => {
            T(eP.sH.BUY_WITH_FIAT),
                (0, N.A)({ skuId: Q.skuId, analyticsLocations: b, onClose: (e) => (e ? u() : (0, eB.tE)()) });
        }, [b, u, Q.skuId, T]);
        return (
            r.useEffect(() => {
                if (null != eb) return (0, y.p)({ avatarDecoration: eb }), () => (0, y.p)({ avatarDecoration: void 0 });
            }, [eb]),
            (0, n.jsxs)("div", {
                className: eU.qA,
                children: [
                    (0, n.jsx)("div", { className: eU.gn, children: (0, n.jsx)(eu.A, { category: i }) }),
                    (0, n.jsx)(eH, { product: z ?? Q, user: a, activeSlide: C }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsxs)("div", {
                                className: eU.h_,
                                children: [
                                    (0, n.jsx)(ed.A, { product: Q, isDarkText: !ef, isOrbExclusive: eZ }),
                                    (0, n.jsx)(h.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eU.v7,
                                        children: ey,
                                    }),
                                    (0, n.jsx)(h.Text, { variant: "text-sm/normal", children: eF }),
                                    (0, n.jsx)(eG, { skuId: Q.skuId }),
                                    X.isPurchased || X.isPartiallyOwnedBundle
                                        ? (0, n.jsx)(es.c, { className: eU.On, isPartiallyPurchased: et })
                                        : eg
                                          ? (0, n.jsx)(h.Text, {
                                                variant: "text-md/semibold",
                                                className: eU.On,
                                                children: eM.intl.string(eM.t.rt69oo),
                                            })
                                          : eV
                                            ? (0, n.jsx)(ej.B, {
                                                  prices: eY,
                                                  product: Q,
                                                  isPremiumUser: S,
                                                  discount: ek,
                                                  hasSufficientOrbs: eQ,
                                                  isProductDisabled: en,
                                                  discountOfferAmount: ez,
                                                  onTrackClick: T,
                                              })
                                            : eZ
                                              ? null
                                              : (0, n.jsxs)("div", {
                                                    className: eU.pw,
                                                    children: [
                                                        (0, n.jsx)(ep.A, {
                                                            product: Q,
                                                            discount: ek,
                                                            isPremiumUser: S,
                                                            hideStrikethroughPrice: !S || eW,
                                                            nitroIconType: "tooltip",
                                                            nitroIconSize: "xs",
                                                            discountOfferAmount: ez,
                                                        }),
                                                        S || eW
                                                            ? null
                                                            : (0, n.jsx)(e_.A, { product: Q, onTrackClick: T }),
                                                    ],
                                                }),
                                ],
                            }),
                            (0, ea.B1)(t) &&
                                (0, n.jsx)(h.M1G, {
                                    children: (0, n.jsxs)("div", {
                                        className: s()(eU.Oj, { [eU.OJ]: e$ }),
                                        children: [
                                            e$ &&
                                                (0, n.jsx)(eA.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: B,
                                                    className: eU.L$,
                                                }),
                                            (0, n.jsx)(eC.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: M,
                                                onVariantExit: U,
                                                wrap: !0,
                                            }),
                                            !e$ &&
                                                (0, n.jsx)(eA.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: B,
                                                    className: eU.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== ei &&
                                (0, n.jsx)(h.Text, { variant: "text-xs/normal", className: eU.H$, children: ei }),
                            (0, n.jsx)(h.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (eg && !S && !eT) {
                                        let e;
                                        return (
                                            (e = eM.intl.string(eM.t.sEAnVH)),
                                            (0, n.jsx)(R.A, {
                                                subscriptionTier: eL.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: () => {
                                                    T(eP.sH.UNLOCK_WITH_NITRO), (0, eh.M)();
                                                },
                                                onSubscribeModalClose: () => {
                                                    (0, eh.t)({
                                                        product: Q,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: f,
                                                        analyticsLocations: b,
                                                        tab: c,
                                                        giftRecipient: I,
                                                        giftingOrigin: j,
                                                        cardId: k,
                                                        sessionId: E,
                                                        tilePosition: O,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return el
                                        ? ee
                                            ? eD
                                                ? (0, n.jsxs)(h.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, n.jsx)(ex.A, {
                                                              product: Q,
                                                              onSuccess: u,
                                                              onTrackClick: T,
                                                          }),
                                                          (0, n.jsx)(em.A, {
                                                              primary: !0,
                                                              product: Q,
                                                              onSuccess: u,
                                                              giftRecipient: I,
                                                              giftingOrigin: j,
                                                              onTrackClick: T,
                                                          }),
                                                      ],
                                                  })
                                                : (0, n.jsx)(ex.A, { product: Q, onSuccess: u, onTrackClick: T })
                                            : eg
                                              ? (0, n.jsx)(h.Button, {
                                                    loading: eo,
                                                    loadingStartedLabel: eM.intl.string(eM.t["TYw+9s"]),
                                                    loadingFinishedLabel: eM.intl.string(eM.t.Pg1UP5),
                                                    onClick: async () => {
                                                        T(eP.sH.ADD_TO_COLLECTION),
                                                            await (0, H.iJ)(Q.skuId),
                                                            u(),
                                                            (0, eS.A)({
                                                                product: Q,
                                                                analyticsLocations: b,
                                                                purchaseType: eP.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eM.intl.string(eM.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, n.jsx)(n.Fragment, {
                                                    children: eY.map((e, t) => {
                                                        let a,
                                                            r = 0 === t;
                                                        if (e.currency === eB.Yr.DISCORD_ORB) {
                                                            let t, a, i, s;
                                                            return (
                                                                (t = en
                                                                    ? eM.intl.string(eM.t.cTdr3x)
                                                                    : eM.intl.string(eM.t.zqh7ZM)),
                                                                (a = !eQ || en),
                                                                (i = eM.intl.formatToPlainString(eM.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (s = a ? `${i}, ${t}` : i),
                                                                (0, n.jsx)(p.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: a,
                                                                    "aria-label": !1,
                                                                    children: (0, n.jsx)(h.Button, {
                                                                        variant: r ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            T(eP.sH.BUY_WITH_ORBS),
                                                                                (0, L.B4)({
                                                                                    skuId: Q.skuId,
                                                                                    onCheckoutSuccess: (e) => {
                                                                                        let { entitlements: t } = e;
                                                                                        (0, H.gB)(),
                                                                                            u(),
                                                                                            (0, eS.A)({
                                                                                                product: Q,
                                                                                                analyticsLocations: b,
                                                                                                itemConsumed:
                                                                                                    t[0]?.consumed,
                                                                                                purchaseType: eP.gs.ORB,
                                                                                            });
                                                                                    },
                                                                                    analyticsLocations: b,
                                                                                });
                                                                        },
                                                                        disabled: a,
                                                                        "aria-label": s,
                                                                        text: eM.intl.format(
                                                                            eJ ? eM.t.JC15qj : eM.t.lOtBOI,
                                                                            {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, n.jsx)(h.Cp8, {
                                                                                        className: eU.fN,
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
                                                            (a = (0, W.aw)(Q)
                                                                ? eM.intl.string(eM.t.V1AWw0)
                                                                : Q.type === d.R.PROFILE_EFFECT
                                                                  ? eM.intl.string(eM.t.kAeDcK)
                                                                  : Q.type === d.R.NAMEPLATE
                                                                    ? eM.intl.string(eM.t.H3vhqU)
                                                                    : eM.intl.string(eM.t.AQ0Veg)),
                                                            eW
                                                                ? (a = eM.intl.formatToPlainString(eM.t["5U5RB5"], {
                                                                      discountOfferAmount: ez,
                                                                  }))
                                                                : eV &&
                                                                  (a = eM.intl.formatToPlainString(eM.t["cNSL/j"], {
                                                                      price: (0, V.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, n.jsxs)(h.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, n.jsx)(h.Button, {
                                                                        variant: r ? "primary" : "secondary",
                                                                        onClick: e0,
                                                                        text: a,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eD &&
                                                                        (0, n.jsx)(em.A, {
                                                                            primary: r,
                                                                            product: Q,
                                                                            onSuccess: u,
                                                                            giftRecipient: I,
                                                                            giftingOrigin: j,
                                                                            onTrackClick: T,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eD
                                          ? (0, n.jsx)(em.A, {
                                                primary: !0,
                                                product: Q,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: I,
                                                giftingOrigin: j,
                                                onTrackClick: T,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, n.jsx)(h.Text, {
                                className: s()(eU.ed, !ef && eU.un),
                                variant: "text-xxs/normal",
                                children: eg && !ee ? eM.intl.string(eM.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    ez = (e) => {
        let { user: t, innerClassName: a } = e;
        return (0, n.jsx)("div", {
            className: eU.mV,
            children: (0, n.jsx)(C.A, {
                avatar: (0, n.jsx)(h.euF, {
                    src: t.avatarSrc,
                    size: h._3J.SIZE_32,
                    "aria-label": t.name,
                    status: h.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: s()(eU.$L, a),
            }),
        });
    },
    eW = (e) => {
        let { user: t, nameplate: a, avatarDecoration: r } = e,
            i = (0, X.Ov)();
        return (0, n.jsx)("div", {
            className: eU.nJ,
            role: "img",
            "aria-label": eM.intl.string(eM.t.SZeUdR),
            children: (0, n.jsxs)(h.M1G, {
                children: [
                    (0, n.jsx)(ez, { user: i.mallow, innerClassName: eU.ab }),
                    (0, n.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: eU.OS,
                        children: [eM.intl.string(eM.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, n.jsx)(ez, { user: i.phibi, innerClassName: eU.e9 }),
                    (0, n.jsx)("div", {
                        className: eU.mV,
                        children: (0, n.jsx)(ee.A, {
                            className: eU.M4,
                            innerClassName: eU.e9,
                            user: t,
                            nameplate: a,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: r,
                        }),
                    }),
                    (0, n.jsx)(ez, { user: i.locke, innerClassName: eU.e9 }),
                    (0, n.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: eU.OS,
                        children: [eM.intl.string(eM.t["NG43/6"]), " - 12"],
                    }),
                    (0, n.jsx)(ez, { user: i.boom, innerClassName: eU.bD }),
                    (0, n.jsx)(ez, { user: i.cherry, innerClassName: eU.bD }),
                ],
            }),
        });
    },
    e$ = (e) => {
        let { product: t, user: a, activeBundleSlide: r, isTransitioning: i } = e,
            l = (0, m.bG)([f.A], () => f.A.useReducedMotion),
            o = D.Ay.canUsePremiumProfileCustomization(a),
            { pendingAvatar: c, ...u } = (0, m.cf)([O.A], () => O.A.getPendingChanges()),
            p = (0, E.V7)({ userId: a.id, image: c }),
            _ = t.type === d.R.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: x, firstProfileEffect: g, firstNameplate: v } = (0, Z.f5)(t),
            A = null != g,
            C = () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(k.A, {
                            ...u,
                            pendingAvatar: p,
                            user: a,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: x,
                            pendingProfileEffect: g,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: _,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        _ && (0, n.jsx)(eK, { user: a }),
                    ],
                }),
            I = (e) => (0, n.jsx)(eW, { user: a, nameplate: e, avatarDecoration: x });
        if (t.type === d.R.BUNDLE) {
            if (!(0, en.Wb)(t))
                return (0, n.jsx)("div", {
                    className: eU.RA,
                    children: (0, n.jsx)("div", { className: eU.bo, children: C() }),
                });
            {
                let e = r ?? 0,
                    a = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== a?.type && !l;
                return a.type === d.R.NAMEPLATE
                    ? (0, n.jsx)("div", { className: s()(eU.Zj, i && c ? eU.p2 : ""), children: I(a) })
                    : (0, n.jsx)("div", { className: s()(eU.Ak, i && c ? eU.p2 : ""), children: C() });
            }
        }
        return null != v
            ? (0, n.jsx)("div", { className: eU.Zj, children: I(v) })
            : (0, n.jsx)("div", { className: h?.type === d.R.AVATAR_DECORATION ? eU.RA : eU.Ak, children: C() });
    },
    eK = (e) => {
        let { user: t } = e,
            a = ((e) => {
                let { author: t } = e;
                return (0, I.rh)({
                    ...(0, j.Ay)({ author: t, channelId: "1337", content: eM.intl.string(eM.t.d5YwK5) }),
                    state: ew.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, n.jsx)("div", {
            role: "img",
            "aria-label": eM.intl.string(eM.t["TN+ZvB"]),
            children: (0, n.jsx)(h.M1G, {
                children: (0, n.jsxs)(h.ZpM, {
                    className: eU.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, n.jsx)(b.A, { className: eU.G5, author: (0, T.p_)(a), message: a }, a.id),
                        (0, n.jsxs)("div", {
                            className: eU.lG,
                            children: [
                                (0, n.jsx)(h.U1e, { size: "md", color: "currentColor", className: eU.hq }),
                                (0, n.jsx)(h.nm2, { size: "md", color: "currentColor", className: eU.hq }),
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
                onClose: a,
                product: i,
                category: l,
                returnRef: p,
                analyticsSource: _,
                analyticsLocations: x,
                shouldCheckoutWithOrbs: f,
                tab: C,
                giftRecipient: I,
                giftingOrigin: j,
            } = e,
            T = (0, m.bG)([B.default], () => B.default.getCurrentUser()),
            b = (0, ey.f)(i),
            { previewingVariantIndex: N } = b,
            R = (0, z.Q)(i),
            k = (0, eN.q)(i, N),
            E = (0, ea.rb)(i, R);
        o()(null != E, "Selected product should not be null");
        let { analyticsLocations: y } = (0, v.Ay)([...x, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ec.Yr)(E.skuId);
        let O = (0, ek.U1)(l);
        r.useEffect(() => {
            null != T && (0, S.A)(T.id, T.getAvatarURL(void 0, 80));
        }, [T]);
        let P = r.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            M.default.track(ew.HAw.OPEN_MODAL, {
                type: ew.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: _,
                location_stack: y,
                sku_id: E.skuId,
                product_type: P,
            }),
                (0, H.RD)(E.skuId);
        }, [_, y, E.skuId, P]);
        let { cardId: w, sessionId: U, tilePosition: D } = (0, G.uM)() ?? {},
            V = r.useMemo(() => (0, ea.v8)(i), [i]),
            F = (0, Q.R)({ skuId: E.skuId, productSkuIds: V, analyticsLocations: y });
        (0, A.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: E.skuId,
                card_id: w,
                shop_session_id: U,
                position_in_section: D,
                product_sku_ids: V,
                location_stack: y,
            },
        });
        let $ = (0, L.o6)(),
            K = t === h.ip4.EXITING,
            q = (0, eR.$R)(i),
            J = q?.amount,
            Y = null != J && (q?.discountId === eL.eR || q?.discountId === eL.Qz),
            Z = r.useMemo(() => ((0, W.aw)(E) ? E.items.length : 0), [E]),
            { activeSlide: X, isTransitioning: ee } = (0, ei.X)({ slideCount: Z, intervalMs: 5e3 });
        return null == T
            ? null
            : (0, n.jsx)(v.f5, {
                  value: y,
                  children: (0, n.jsxs)(h.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eU.CR,
                      returnRef: p,
                      transitionState: t,
                      size: h.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, n.jsxs)(h.$mQ, {
                              "data-migration-pending": !0,
                              className: eU.jE,
                              children: [
                                  (0, n.jsx)(eF, {
                                      user: T,
                                      product: i,
                                      category: l,
                                      onClose: a,
                                      previewingVariantIndexProps: b,
                                      selectedVariantIndex: R,
                                      shouldCheckoutWithOrbs: f,
                                      tab: C,
                                      activeBundleSlide: X,
                                      giftRecipient: I?.id !== T.id ? I : void 0,
                                      giftingOrigin: I?.id !== T.id ? j : void 0,
                                      onTrackClick: F,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: s()(
                                          eU.i1,
                                          E.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? eU.bF
                                              : E.type === d.R.AVATAR_DECORATION
                                                ? eU.Jq
                                                : eU.eF,
                                      ),
                                      style: { backgroundImage: `url(${O})` },
                                      children: [
                                          (0, eP.pQ)(i.skuId)
                                              ? i.skuId === eP.Dp.ORB_PROFILE_BADGE
                                                  ? $ || K
                                                      ? null
                                                      : (0, n.jsx)(eg.z, { user: T })
                                                  : i.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, n.jsx)(ef.I, {})
                                                    : (0, n.jsx)(eI.B, { product: i, className: eU.Ms })
                                              : (0, n.jsx)(e$, {
                                                    user: T,
                                                    product: k ?? E,
                                                    activeBundleSlide: X,
                                                    isTransitioning: ee,
                                                }),
                                          (0, n.jsxs)("div", {
                                              className: eU.VG,
                                              children: [
                                                  (0, n.jsx)(eT.R, {
                                                      product: i,
                                                      selectedVariantIndex: R,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: F,
                                                  }),
                                                  (0, n.jsx)(el.V, { skuId: E.skuId, tab: C, onTrackClick: F }),
                                                  (0, n.jsx)(h.K0, {
                                                      "aria-label": eM.intl.string(eM.t.cpT0Cq),
                                                      onClick: () => {
                                                          F(eP.sH.CLOSE_DETAIL), a();
                                                      },
                                                      icon: h.d$L,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          Y &&
                              (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsxs)(h.jlY, {
                                      "data-migration-pending": !0,
                                      className: eU.Hx,
                                      children: [
                                          (0, n.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eU.OC,
                                          }),
                                          (0, n.jsxs)("div", {
                                              className: eU.do,
                                              children: [
                                                  (0, n.jsx)(h.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eU.Q2,
                                                      children: eM.intl.format(eM.t["78ph4b"], {
                                                          discountOfferAmount: J,
                                                      }),
                                                  }),
                                                  q?.expiresAt != null && (0, n.jsx)(eo.e, { endDate: q.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
