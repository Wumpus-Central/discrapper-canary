n.d(t, { default: () => eK });
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
    _ = n(775602),
    v = n(793574),
    g = n(688810),
    A = n(139286),
    C = n(262295),
    j = n(141468),
    N = n(963852),
    I = n(763754),
    b = n(20851),
    R = n(44120),
    T = n(725807),
    k = n(287070),
    E = n(101058),
    O = n(84540),
    S = n(836602),
    P = n(576622),
    y = n(761705),
    L = n(270051),
    w = n(652165),
    B = n(287809),
    M = n(954571),
    U = n(975571),
    D = n(927578),
    H = n(580630),
    V = n(979286),
    G = n(440938),
    F = n(4227),
    z = n(298072),
    W = n(993408),
    $ = n(640634),
    q = n(940980),
    K = n(495565),
    Y = n(740076),
    J = n(466459),
    Z = n(442759),
    X = n(966619),
    Q = n(780898),
    ee = n(512213),
    et = n(139136),
    en = n(623373),
    er = n(660653),
    ea = n(536572),
    ei = n(778992),
    es = n(49620),
    el = n(586445),
    eo = n(854818),
    ec = n(177366),
    ed = n(11606),
    eu = n(203312),
    em = n(878112),
    eh = n(501664),
    ep = n(882342),
    ex = n(572595),
    ef = n(641405),
    e_ = n(812016),
    ev = n(184659),
    eg = n(561769),
    eA = n(63574),
    eC = n(364616),
    ej = n(846957),
    eN = n(293477),
    eI = n(139146),
    eb = n(929283),
    eR = n(827066),
    eT = n(525723),
    ek = n(212407),
    eE = n(347722),
    eO = n(935094),
    eS = n(57020),
    eP = n(61750),
    ey = n(758836),
    eL = n(652215),
    ew = n(788868),
    eB = n(818348),
    eM = n(985018),
    eU = n(316069);
let eD = (e) => {
        let { item: t, product: n, user: i } = e,
            s = a.useRef(null),
            l = (0, W.aw)(n),
            { firstAvatarDecoration: o } = (0, Z.f5)(n);
        return t.type === d.R.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: l ? eU.X2 : eU.h1,
                  children: (0, r.jsx)(eb.i, { user: i, item: t, isHighlighted: !0 }),
              })
            : t.type === d.R.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: l ? eU.ME : eU.sm,
                    ref: s,
                    children: (0, r.jsx)(et.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === d.R.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: s,
                      className: eU.Dz,
                      children: (0, r.jsx)(ee.A, {
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
    eH = (e) => {
        let { product: t, user: n, activeSlide: a = 0 } = e,
            i = t.items.length;
        return (0, r.jsx)("div", {
            className: eU.g4,
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
                                className: eU.Kg,
                                children: [
                                    (0, r.jsx)(eD, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(x.Text, {
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
    eV = (e) => {
        let { product: t, user: n, activeSlide: a } = e;
        return (0, W.aw)(t)
            ? (0, r.jsx)(eH, { product: t, user: n, activeSlide: a })
            : (0, ey.pQ)(t.skuId)
              ? (0, r.jsx)(ej.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(eD, { item: t.items[0], product: t, user: n })
                : null;
    },
    eG = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(x.Text, {
                  variant: "text-sm/normal",
                  className: eU.CU,
                  children: eM.intl.format(eM.t.Q1scdE, {
                      helpdeskArticle: U.A.getArticleURL(eL.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eF = (e) => {
        let {
                product: t,
                user: n,
                category: i,
                shouldCheckoutWithOrbs: l,
                tab: c,
                onClose: u,
                returnRef: _,
                previewingVariantIndexProps: v,
                selectedVariantIndex: A,
                activeBundleSlide: C,
                giftRecipient: j,
                giftingOrigin: N,
                onTrackClick: I,
            } = e,
            { analyticsLocations: b } = (0, g.Ay)(),
            { cardId: k, sessionId: E, tilePosition: S } = (0, G.uM)() ?? {},
            P = D.Ay.canUseCollectibles(n),
            { previewingVariantIndex: B, handleEntering: M, handleLeaving: U } = v,
            z = (0, eR.q)(t, B),
            X = (0, en.rb)(t, A);
        o()(null != X, "Selected product should not be null");
        let Q = (0, J.h)(t),
            { isPurchased: ee, isPartiallyOwnedBundle: et } = (0, J.h)(X),
            { isDisabled: er, disabledReason: ei } = (0, Y.I)(X.skuId),
            el = (0, W.Zu)({ product: X, isPartiallyOwnedBundle: et, isPurchased: ee }),
            eo = (0, m.bG)([F.A], () => F.A.isClaiming === X?.skuId),
            ec = (0, f.Ay)(),
            e_ = (0, p.Mw)(ec),
            ev = (0, W.G0)(X),
            ej = (0, W.yt)(X, eL.lid.DEFAULT),
            eI = ej?.amount === 0,
            { firstAvatarDecoration: eb } = (0, Z.f5)(z ?? X),
            ek = a.useMemo(() => (0, W.fT)(X, P), [X, P]),
            eO = (0, ea.VG)(t),
            eD = (0, eE.X)(X),
            { enabled: eH } = (0, L.Z)({ location: "collectibles_shop_product_details_modal" }),
            eF = (0, K.r)(X, !1),
            ez = (0, eT.V_)(t),
            eW = null != ez,
            e$ = (t.variants?.length ?? 0) > 8,
            eq = (0, q.W)("CollectiblesShopProductDetailsModal"),
            eK = c === ey.G2.ORBS && l ? eg.Hi.ORBS : eq ? eg.Hi.FIAT : void 0,
            eY = (0, $.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eJ,
                isOrbExclusive: eZ,
                hasSufficientOrbs: eX,
            } = (0, eS.F)({ product: X, isPremiumUser: P, hasDiscountOffer: eW, prioritizedCurrency: eK }),
            eQ = a.useMemo(() => eJ.some((e) => e.currency === eB.Yr.DISCORD_ORB), [eJ]);
        (0, y.W)({ disableFetch: !eQ });
        let e0 = a.useCallback(() => {
            I(ey.sH.BUY_WITH_FIAT),
                (0, R.A)({ skuId: X.skuId, analyticsLocations: b, onClose: (e) => (e ? u() : (0, eB.tE)()) });
        }, [b, u, X.skuId, I]);
        return (
            a.useEffect(() => {
                if (null != eb) return (0, O.p)({ avatarDecoration: eb }), () => (0, O.p)({ avatarDecoration: void 0 });
            }, [eb]),
            (0, r.jsxs)("div", {
                className: eU.qA,
                children: [
                    (0, r.jsx)("div", { className: eU.gn, children: (0, r.jsx)(eu.A, { category: i }) }),
                    (0, r.jsx)(eV, { product: z ?? X, user: n, activeSlide: C }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eU.h_,
                                children: [
                                    (0, r.jsx)(ed.A, { product: X, isDarkText: !e_, isOrbExclusive: eZ }),
                                    (0, r.jsx)(x.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eU.v7,
                                        children: eO,
                                    }),
                                    (0, r.jsx)(x.Text, { variant: "text-sm/normal", children: eF }),
                                    (0, r.jsx)(eG, { skuId: X.skuId }),
                                    Q.isPurchased || Q.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(es.c, { className: eU.On, isPartiallyPurchased: et })
                                        : ev
                                          ? (0, r.jsx)(x.Text, {
                                                variant: "text-md/semibold",
                                                className: eU.On,
                                                children: eM.intl.string(eM.t.rt69oo),
                                            })
                                          : eH
                                            ? (0, r.jsx)(eN.B, {
                                                  prices: eJ,
                                                  product: X,
                                                  isPremiumUser: P,
                                                  discount: ek,
                                                  hasSufficientOrbs: eX,
                                                  isProductDisabled: er,
                                                  discountOfferAmount: ez,
                                                  onTrackClick: I,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eU.pw,
                                                  children: [
                                                      (0, r.jsx)(eh.A, {
                                                          product: X,
                                                          discount: ek,
                                                          isPremiumUser: P,
                                                          hideStrikethroughPrice: !P || eW,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: ez,
                                                      }),
                                                      P || eW
                                                          ? null
                                                          : (0, r.jsx)(ep.A, { product: X, onTrackClick: I }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, en.B1)(t) &&
                                (0, r.jsx)(x.M1G, {
                                    children: (0, r.jsxs)("div", {
                                        className: s()(eU.Oj, { [eU.OJ]: e$ }),
                                        children: [
                                            e$ &&
                                                (0, r.jsx)(eA.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: B,
                                                    className: eU.L$,
                                                }),
                                            (0, r.jsx)(eC.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: M,
                                                onVariantExit: U,
                                                wrap: !0,
                                            }),
                                            !e$ &&
                                                (0, r.jsx)(eA.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: B,
                                                    className: eU.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== ei &&
                                (0, r.jsx)(x.Text, { variant: "text-xs/normal", className: eU.H$, children: ei }),
                            (0, r.jsx)(x.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (ev && !P && !eI) {
                                        let e;
                                        return (
                                            (e = eM.intl.string(eM.t.sEAnVH)),
                                            (0, r.jsx)(T.A, {
                                                subscriptionTier: ew.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: () => {
                                                    I(ey.sH.UNLOCK_WITH_NITRO), (0, ex.M)();
                                                },
                                                onSubscribeModalClose: () => {
                                                    (0, ex.t)({
                                                        product: X,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: _,
                                                        analyticsLocations: b,
                                                        tab: c,
                                                        giftRecipient: j,
                                                        giftingOrigin: N,
                                                        cardId: k,
                                                        sessionId: E,
                                                        tilePosition: S,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return el
                                        ? ee
                                            ? eD
                                                ? (0, r.jsxs)(x.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(ef.A, {
                                                              product: X,
                                                              onSuccess: u,
                                                              onTrackClick: I,
                                                          }),
                                                          (0, r.jsx)(em.A, {
                                                              primary: !0,
                                                              product: X,
                                                              onSuccess: u,
                                                              giftRecipient: j,
                                                              giftingOrigin: N,
                                                              onTrackClick: I,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(ef.A, { product: X, onSuccess: u, onTrackClick: I })
                                            : ev
                                              ? (0, r.jsx)(x.Button, {
                                                    loading: eo,
                                                    loadingStartedLabel: eM.intl.string(eM.t["TYw+9s"]),
                                                    loadingFinishedLabel: eM.intl.string(eM.t.Pg1UP5),
                                                    onClick: async () => {
                                                        I(ey.sH.ADD_TO_COLLECTION),
                                                            await (0, V.iJ)(X.skuId),
                                                            u(),
                                                            (0, eP.A)({
                                                                product: X,
                                                                analyticsLocations: b,
                                                                purchaseType: ey.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eM.intl.string(eM.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eJ.map((e, t) => {
                                                        let n,
                                                            a = 0 === t;
                                                        if (e.currency === eB.Yr.DISCORD_ORB) {
                                                            let t, n, i, s;
                                                            return (
                                                                (t = er
                                                                    ? eM.intl.string(eM.t.cTdr3x)
                                                                    : eM.intl.string(eM.t.zqh7ZM)),
                                                                (n = !eX || er),
                                                                (i = eM.intl.formatToPlainString(eM.t.yi41qQ, {
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
                                                                            I(ey.sH.BUY_WITH_ORBS),
                                                                                (0, w.B4)({
                                                                                    skuId: X.skuId,
                                                                                    onCheckoutSuccess: (e) => {
                                                                                        let { entitlements: t } = e;
                                                                                        (0, V.gB)(),
                                                                                            u(),
                                                                                            (0, eP.A)({
                                                                                                product: X,
                                                                                                analyticsLocations: b,
                                                                                                itemConsumed:
                                                                                                    t[0]?.consumed,
                                                                                                purchaseType: ey.gs.ORB,
                                                                                            });
                                                                                    },
                                                                                    analyticsLocations: b,
                                                                                });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": s,
                                                                        text: eM.intl.format(
                                                                            eY ? eM.t.JC15qj : eM.t.lOtBOI,
                                                                            {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(x.Cp8, {
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
                                                            (n = (0, W.aw)(X)
                                                                ? eM.intl.string(eM.t.V1AWw0)
                                                                : X.type === d.R.PROFILE_EFFECT
                                                                  ? eM.intl.string(eM.t.kAeDcK)
                                                                  : X.type === d.R.NAMEPLATE
                                                                    ? eM.intl.string(eM.t.H3vhqU)
                                                                    : eM.intl.string(eM.t.AQ0Veg)),
                                                            eW
                                                                ? (n = eM.intl.formatToPlainString(eM.t["5U5RB5"], {
                                                                      discountOfferAmount: ez,
                                                                  }))
                                                                : eH &&
                                                                  (n = eM.intl.formatToPlainString(eM.t["cNSL/j"], {
                                                                      price: (0, H.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(x.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(x.Button, {
                                                                        variant: a ? "primary" : "secondary",
                                                                        onClick: e0,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eD &&
                                                                        (0, r.jsx)(em.A, {
                                                                            primary: a,
                                                                            product: X,
                                                                            onSuccess: u,
                                                                            giftRecipient: j,
                                                                            giftingOrigin: N,
                                                                            onTrackClick: I,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eD
                                          ? (0, r.jsx)(em.A, {
                                                primary: !0,
                                                product: X,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: j,
                                                giftingOrigin: N,
                                                onTrackClick: I,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, r.jsx)(x.Text, {
                                className: s()(eU.ed, !e_ && eU.un),
                                variant: "text-xxs/normal",
                                children: ev && !ee ? eM.intl.string(eM.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    ez = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eU.mV,
            children: (0, r.jsx)(C.A, {
                avatar: (0, r.jsx)(x.euF, {
                    src: t.avatarSrc,
                    size: x._3J.SIZE_32,
                    "aria-label": t.name,
                    status: x.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: s()(eU.$L, n),
            }),
        });
    },
    eW = (e) => {
        let { user: t, nameplate: n, avatarDecoration: a } = e,
            i = (0, Q.Ov)();
        return (0, r.jsx)("div", {
            className: eU.nJ,
            role: "img",
            "aria-label": eM.intl.string(eM.t.SZeUdR),
            children: (0, r.jsxs)(x.M1G, {
                children: [
                    (0, r.jsx)(ez, { user: i.mallow, innerClassName: eU.ab }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eU.OS,
                        children: [eM.intl.string(eM.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(ez, { user: i.phibi, innerClassName: eU.e9 }),
                    (0, r.jsx)("div", {
                        className: eU.mV,
                        children: (0, r.jsx)(ee.A, {
                            className: eU.M4,
                            innerClassName: eU.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: a,
                        }),
                    }),
                    (0, r.jsx)(ez, { user: i.locke, innerClassName: eU.e9 }),
                    (0, r.jsxs)(x.Text, {
                        variant: "text-sm/semibold",
                        className: eU.OS,
                        children: [eM.intl.string(eM.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(ez, { user: i.boom, innerClassName: eU.bD }),
                    (0, r.jsx)(ez, { user: i.cherry, innerClassName: eU.bD }),
                ],
            }),
        });
    },
    e$ = (e) => {
        let { product: t, user: n, activeBundleSlide: a, isTransitioning: i } = e,
            l = (0, m.bG)([_.A], () => _.A.useReducedMotion),
            o = D.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: c, ...u } = (0, m.cf)([S.A], () => S.A.getPendingChanges()),
            h = (0, E.V7)({ userId: n.id, image: c }),
            p = t.type === d.R.AVATAR_DECORATION,
            [x] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: v, firstNameplate: g } = (0, Z.f5)(t),
            A = null != v,
            C = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(k.A, {
                            ...u,
                            pendingAvatar: h,
                            user: n,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: f,
                            pendingProfileEffect: v,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: p,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        p && (0, r.jsx)(eq, { user: n }),
                    ],
                }),
            j = (e) => (0, r.jsx)(eW, { user: n, nameplate: e, avatarDecoration: f });
        if (t.type === d.R.BUNDLE) {
            if (!(0, er.Wb)(t))
                return (0, r.jsx)("div", {
                    className: eU.RA,
                    children: (0, r.jsx)("div", { className: eU.bo, children: C() }),
                });
            {
                let e = a ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !l;
                return n.type === d.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: s()(eU.Zj, i && c ? eU.p2 : ""), children: j(n) })
                    : (0, r.jsx)("div", { className: s()(eU.Ak, i && c ? eU.p2 : ""), children: C() });
            }
        }
        return null != g
            ? (0, r.jsx)("div", { className: eU.Zj, children: j(g) })
            : (0, r.jsx)("div", { className: x?.type === d.R.AVATAR_DECORATION ? eU.RA : eU.Ak, children: C() });
    },
    eq = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, j.rh)({
                    ...(0, N.Ay)({ author: t, channelId: "1337", content: eM.intl.string(eM.t.d5YwK5) }),
                    state: eL.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eM.intl.string(eM.t["TN+ZvB"]),
            children: (0, r.jsx)(x.M1G, {
                children: (0, r.jsxs)(x.ZpM, {
                    className: eU.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(b.A, { className: eU.G5, author: (0, I.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: eU.lG,
                            children: [
                                (0, r.jsx)(x.U1e, { size: "md", color: "currentColor", className: eU.hq }),
                                (0, r.jsx)(x.nm2, { size: "md", color: "currentColor", className: eU.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eK = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: l,
                returnRef: h,
                analyticsSource: p,
                analyticsLocations: f,
                shouldCheckoutWithOrbs: _,
                tab: C,
                giftRecipient: j,
                giftingOrigin: N,
            } = e,
            I = (0, m.bG)([B.default], () => B.default.getCurrentUser()),
            b = (0, eO.f)(i),
            { previewingVariantIndex: R } = b,
            T = (0, z.Q)(i),
            k = (0, eR.q)(i, R),
            E = (0, en.rb)(i, T);
        o()(null != E, "Selected product should not be null");
        let { analyticsLocations: O } = (0, g.Ay)([...f, v.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ec.Yr)(E.skuId);
        let S = (0, ek.U1)(l);
        a.useEffect(() => {
            null != I && (0, P.A)(I.id, I.getAvatarURL(void 0, 80));
        }, [I]);
        let y = a.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        a.useEffect(() => {
            M.default.track(eL.HAw.OPEN_MODAL, {
                type: eL.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: O,
                sku_id: E.skuId,
                product_type: y,
            }),
                (0, V.RD)(E.skuId);
        }, [p, O, E.skuId, y]);
        let { cardId: L, sessionId: U, tilePosition: D } = (0, G.uM)() ?? {},
            H = a.useMemo(() => (0, en.v8)(i), [i]),
            F = (0, X.R)({ skuId: E.skuId, productSkuIds: H, analyticsLocations: O });
        (0, A.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: E.skuId,
                card_id: L,
                shop_session_id: U,
                position_in_section: D,
                product_sku_ids: H,
                location_stack: O,
            },
        });
        let $ = (0, w.o6)(),
            q = t === x.ip4.EXITING,
            K = (0, eT.$R)(i),
            Y = K?.amount,
            J = null != Y && (K?.discountId === ew.eR || K?.discountId === ew.Qz),
            Z = a.useMemo(() => ((0, W.aw)(E) ? E.items.length : 0), [E]),
            { activeSlide: Q, isTransitioning: ee } = (0, ei.X)({ slideCount: Z, intervalMs: 5e3 });
        return null == I
            ? null
            : (0, r.jsx)(g.f5, {
                  value: O,
                  children: (0, r.jsxs)(x.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eU.CR,
                      returnRef: h,
                      transitionState: t,
                      size: x.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(x.$mQ, {
                              "data-migration-pending": !0,
                              className: eU.jE,
                              children: [
                                  (0, r.jsx)(eF, {
                                      user: I,
                                      product: i,
                                      category: l,
                                      onClose: n,
                                      previewingVariantIndexProps: b,
                                      selectedVariantIndex: T,
                                      shouldCheckoutWithOrbs: _,
                                      tab: C,
                                      activeBundleSlide: Q,
                                      giftRecipient: j?.id !== I.id ? j : void 0,
                                      giftingOrigin: j?.id !== I.id ? N : void 0,
                                      onTrackClick: F,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: s()(
                                          eU.i1,
                                          E.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? eU.bF
                                              : E.type === d.R.AVATAR_DECORATION
                                                ? eU.Jq
                                                : eU.eF,
                                      ),
                                      style: { backgroundImage: `url(${S})` },
                                      children: [
                                          (0, ey.pQ)(i.skuId)
                                              ? i.skuId === ey.Dp.ORB_PROFILE_BADGE
                                                  ? $ || q
                                                      ? null
                                                      : (0, r.jsx)(ev.z, { user: I })
                                                  : i.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(e_.I, {})
                                                    : (0, r.jsx)(ej.B, { product: i, className: eU.Ms })
                                              : (0, r.jsx)(e$, {
                                                    user: I,
                                                    product: k ?? E,
                                                    activeBundleSlide: Q,
                                                    isTransitioning: ee,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eU.VG,
                                              children: [
                                                  (0, r.jsx)(eI.R, {
                                                      product: i,
                                                      selectedVariantIndex: T,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: F,
                                                  }),
                                                  (0, r.jsx)(el.V, { skuId: E.skuId, tab: C, onTrackClick: F }),
                                                  (0, r.jsx)(x.K0, {
                                                      "aria-label": eM.intl.string(eM.t.cpT0Cq),
                                                      onClick: () => {
                                                          F(ey.sH.CLOSE_DETAIL), n();
                                                      },
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
                                      className: eU.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eU.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: eU.do,
                                              children: [
                                                  (0, r.jsx)(x.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eU.Q2,
                                                      children: eM.intl.format(eM.t["78ph4b"], {
                                                          discountOfferAmount: Y,
                                                      }),
                                                  }),
                                                  K?.expiresAt != null && (0, r.jsx)(eo.e, { endDate: K.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
