n.d(t, { default: () => te });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    c = n.n(s),
    o = n(110259),
    d = n(575593),
    u = n(334279),
    _ = n(417597),
    m = n(990078),
    p = n(462887),
    h = n(231723),
    f = n(935462),
    E = n(408278),
    A = n(972213),
    v = n(834730),
    I = n(430690),
    g = n(821609),
    S = n(318254),
    x = n(825484),
    R = n(534514),
    T = n(247928),
    N = n(331322),
    C = n(97808),
    y = n(778712),
    b = n(652215),
    j = n(359778),
    P = n(245604),
    O = n(460905),
    k = n(736653),
    L = n(775602),
    U = n(793574),
    w = n(688810),
    D = n(139286),
    B = n(262295),
    M = n(141468),
    G = n(963852),
    F = n(763754),
    H = n(20851),
    V = n(44120),
    W = n(725807),
    Y = n(287070),
    z = n(101058),
    $ = n(84540),
    q = n(836602),
    Z = n(576622),
    Q = n(761705),
    J = n(270051),
    K = n(652165),
    X = n(287809),
    ee = n(954571),
    et = n(975571),
    en = n(927578),
    er = n(580630),
    ei = n(979286),
    ea = n(440938),
    el = n(4227),
    es = n(298072),
    ec = n(993408),
    eo = n(640634),
    ed = n(940980),
    eu = n(495565),
    e_ = n(740076),
    em = n(466459),
    ep = n(442759),
    eh = n(966619),
    ef = n(780898),
    eE = n(512213),
    eA = n(139136),
    ev = n(623373),
    eI = n(660653),
    eg = n(536572),
    eS = n(778992),
    ex = n(49620),
    eR = n(586445),
    eT = n(854818),
    eN = n(177366),
    eC = n(11606),
    ey = n(203312),
    eb = n(878112),
    ej = n(501664),
    eP = n(882342),
    eO = n(572595),
    ek = n(641405),
    eL = n(812016),
    eU = n(184659),
    ew = n(561769),
    eD = n(63574),
    eB = n(364616),
    eM = n(846957),
    eG = n(293477),
    eF = n(139146),
    eH = n(929283),
    eV = n(827066),
    eW = n(525723),
    eY = n(212407),
    ez = n(347722),
    e$ = n(935094),
    eq = n(57020),
    eZ = n(61750),
    eQ = n(758836),
    eJ = n(788868),
    eK = n(818348),
    eX = n(985018),
    e0 = n(127157);
let e1 = (e) => {
        let { item: t, product: n, user: a } = e,
            l = i.useRef(null),
            s = (0, ec.aw)(n),
            { firstAvatarDecoration: c } = (0, ep.f5)(n);
        return t.type === d.R.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: s ? e0.X2 : e0.h1,
                  children: (0, r.jsx)(eH.i, { user: a, item: t, isHighlighted: !0 }),
              })
            : t.type === d.R.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: s ? e0.ME : e0.sm,
                    ref: l,
                    children: (0, r.jsx)(eA.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === d.R.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: l,
                      className: e0.Dz,
                      children: (0, r.jsx)(eE.A, {
                          className: e0.M4,
                          nameplate: t,
                          user: a,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: c,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    e5 = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: e0.g4,
            children: (0, r.jsx)(I.t, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        s = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        c = `(${i + 1}/${a})`;
                    return (0, r.jsx)(
                        I.q,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: e0.Kg,
                                children: [
                                    (0, r.jsx)(e1, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(v.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: e0.gx,
                                        children: [s?.name, " ", c],
                                    }),
                                ],
                            }),
                        },
                        l,
                    );
                }),
            }),
        });
    },
    e2 = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, ec.aw)(t)
            ? (0, r.jsx)(e5, { product: t, user: n, activeSlide: i })
            : (0, eQ.pQ)(t.skuId)
              ? (0, r.jsx)(eM.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(e1, { item: t.items[0], product: t, user: n })
                : null;
    },
    e7 = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(v.E, {
                  variant: "text-sm/normal",
                  className: e0.CU,
                  children: eX.intl.format(eX.t.Q1scdE, {
                      helpdeskArticle: et.A.getArticleURL(b.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    e6 = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: s,
                tab: o,
                onClose: u,
                returnRef: h,
                previewingVariantIndexProps: f,
                selectedVariantIndex: E,
                activeBundleSlide: A,
                giftRecipient: I,
                giftingOrigin: C,
                onTrackClick: y,
            } = e,
            { analyticsLocations: j } = (0, w.Ay)(),
            { cardId: P, sessionId: O, tilePosition: L } = (0, ea.uM)() ?? {},
            U = en.Ay.canUseCollectibles(n),
            { previewingVariantIndex: D, handleEntering: B, handleLeaving: M } = f,
            G = (0, eV.q)(t, D),
            F = (0, ev.rb)(t, E);
        c()(null != F, "Selected product should not be null");
        let H = (0, em.h)(t),
            { isPurchased: Y, isPartiallyOwnedBundle: z } = (0, em.h)(F),
            { isDisabled: q, disabledReason: Z } = (0, e_.I)(F.skuId),
            X = (0, ec.Zu)({ product: F, isPartiallyOwnedBundle: z, isPurchased: Y }),
            ee = (0, _.bG)([el.A], () => el.A.isClaiming === F?.skuId),
            et = (0, k.Ay)(),
            es = (0, p.M)(et),
            eh = (0, ec.G0)(F),
            ef = (0, ec.yt)(F, b.lid.DEFAULT),
            eE = ef?.amount === 0,
            { firstAvatarDecoration: eA } = (0, ep.f5)(G ?? F),
            eI = i.useMemo(() => (0, ec.fT)(F, U), [F, U]),
            eS = (0, eg.VG)(t),
            eR = (0, ez.X)(F),
            { enabled: eT } = (0, J.Z)({ location: "collectibles_shop_product_details_modal" }),
            eN = (0, eu.r)(F, !1),
            eL = (0, eW.V_)(t),
            eU = null != eL,
            eM = (t.variants?.length ?? 0) > 8,
            eF = (0, ed.W)("CollectiblesShopProductDetailsModal"),
            eH = o === eQ.G2.ORBS && s ? ew.Hi.ORBS : eF ? ew.Hi.FIAT : void 0,
            eY = (0, eo.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: e$,
                isOrbExclusive: e1,
                hasSufficientOrbs: e5,
            } = (0, eq.F)({ product: F, isPremiumUser: U, hasDiscountOffer: eU, prioritizedCurrency: eH }),
            e6 = i.useMemo(() => e$.some((e) => e.currency === eK.Yr.DISCORD_ORB), [e$]);
        (0, Q.W)({ disableFetch: !e6 });
        let e8 = i.useCallback(() => {
            y(eQ.sH.BUY_WITH_FIAT),
                (0, V.A)({ skuId: F.skuId, analyticsLocations: j, onClose: (e) => (e ? u() : (0, eK.tE)()) });
        }, [j, u, F.skuId, y]);
        return (
            i.useEffect(() => {
                if (null != eA) return (0, $.p)({ avatarDecoration: eA }), () => (0, $.p)({ avatarDecoration: void 0 });
            }, [eA]),
            (0, r.jsxs)("div", {
                className: e0.qA,
                children: [
                    (0, r.jsx)("div", { className: e0.gn, children: (0, r.jsx)(ey.A, { category: a }) }),
                    (0, r.jsx)(e2, { product: G ?? F, user: n, activeSlide: A }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: e0.h_,
                                children: [
                                    (0, r.jsx)(eC.A, { product: F, isDarkText: !es, isOrbExclusive: e1 }),
                                    (0, r.jsx)(R.D, {
                                        variant: "heading-xl/extrabold",
                                        className: e0.v7,
                                        children: eS,
                                    }),
                                    (0, r.jsx)(v.E, { variant: "text-sm/normal", children: eN }),
                                    (0, r.jsx)(e7, { skuId: F.skuId }),
                                    H.isPurchased || H.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(ex.c, { className: e0.On, isPartiallyPurchased: z })
                                        : eh
                                          ? (0, r.jsx)(v.E, {
                                                variant: "text-md/semibold",
                                                className: e0.On,
                                                children: eX.intl.string(eX.t.rt69oo),
                                            })
                                          : eT
                                            ? (0, r.jsx)(eG.B, {
                                                  prices: e$,
                                                  product: F,
                                                  isPremiumUser: U,
                                                  discount: eI,
                                                  hasSufficientOrbs: e5,
                                                  isProductDisabled: q,
                                                  discountOfferAmount: eL,
                                                  onTrackClick: y,
                                              })
                                            : e1
                                              ? null
                                              : (0, r.jsxs)("div", {
                                                    className: e0.pw,
                                                    children: [
                                                        (0, r.jsx)(ej.A, {
                                                            product: F,
                                                            discount: eI,
                                                            isPremiumUser: U,
                                                            hideStrikethroughPrice: !U || eU,
                                                            nitroIconType: "tooltip",
                                                            nitroIconSize: "xs",
                                                            discountOfferAmount: eL,
                                                        }),
                                                        U || eU
                                                            ? null
                                                            : (0, r.jsx)(eP.A, { product: F, onTrackClick: y }),
                                                    ],
                                                }),
                                ],
                            }),
                            (0, ev.B1)(t) &&
                                (0, r.jsx)(T.M, {
                                    children: (0, r.jsxs)("div", {
                                        className: l()(e0.Oj, { [e0.OJ]: eM }),
                                        children: [
                                            eM &&
                                                (0, r.jsx)(eD.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: D,
                                                    className: e0.L$,
                                                }),
                                            (0, r.jsx)(eB.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: B,
                                                onVariantExit: M,
                                                wrap: !0,
                                            }),
                                            !eM &&
                                                (0, r.jsx)(eD.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: D,
                                                    className: e0.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== Z && (0, r.jsx)(v.E, { variant: "text-xs/normal", className: e0.H$, children: Z }),
                            (0, r.jsx)(N.B, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (eh && !U && !eE) {
                                        let e;
                                        return (
                                            (e = eX.intl.string(eX.t.sEAnVH)),
                                            (0, r.jsx)(W.A, {
                                                subscriptionTier: eJ.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: () => {
                                                    y(eQ.sH.UNLOCK_WITH_NITRO), (0, eO.M)();
                                                },
                                                onSubscribeModalClose: () => {
                                                    (0, eO.t)({
                                                        product: F,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: h,
                                                        analyticsLocations: j,
                                                        tab: o,
                                                        giftRecipient: I,
                                                        giftingOrigin: C,
                                                        cardId: P,
                                                        sessionId: O,
                                                        tilePosition: L,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return X
                                        ? Y
                                            ? eR
                                                ? (0, r.jsxs)(x.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(ek.A, {
                                                              product: F,
                                                              onSuccess: u,
                                                              onTrackClick: y,
                                                          }),
                                                          (0, r.jsx)(eb.A, {
                                                              primary: !0,
                                                              product: F,
                                                              onSuccess: u,
                                                              giftRecipient: I,
                                                              giftingOrigin: C,
                                                              onTrackClick: y,
                                                          }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(ek.A, { product: F, onSuccess: u, onTrackClick: y })
                                            : eh
                                              ? (0, r.jsx)(g.$, {
                                                    loading: ee,
                                                    loadingStartedLabel: eX.intl.string(eX.t["TYw+9s"]),
                                                    loadingFinishedLabel: eX.intl.string(eX.t.Pg1UP5),
                                                    onClick: async () => {
                                                        y(eQ.sH.ADD_TO_COLLECTION),
                                                            await (0, ei.iJ)(F.skuId),
                                                            u(),
                                                            (0, eZ.A)({
                                                                product: F,
                                                                analyticsLocations: j,
                                                                purchaseType: eQ.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eX.intl.string(eX.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: e$.map((e, t) => {
                                                        let n,
                                                            i = 0 === t;
                                                        if (e.currency === eK.Yr.DISCORD_ORB) {
                                                            let t, n, a, l;
                                                            return (
                                                                (t = q
                                                                    ? eX.intl.string(eX.t.cTdr3x)
                                                                    : eX.intl.string(eX.t.zqh7ZM)),
                                                                (n = !e5 || q),
                                                                (a = eX.intl.formatToPlainString(eX.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (l = n ? `${a}, ${t}` : a),
                                                                (0, r.jsx)(m.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, r.jsx)(g.$, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            y(eQ.sH.BUY_WITH_ORBS),
                                                                                (0, K.B4)({
                                                                                    skuId: F.skuId,
                                                                                    onCheckoutSuccess: (e) => {
                                                                                        let { entitlements: t } = e;
                                                                                        (0, ei.gB)(),
                                                                                            u(),
                                                                                            (0, eZ.A)({
                                                                                                product: F,
                                                                                                analyticsLocations: j,
                                                                                                itemConsumed:
                                                                                                    t[0]?.consumed,
                                                                                                purchaseType: eQ.gs.ORB,
                                                                                            });
                                                                                    },
                                                                                    analyticsLocations: j,
                                                                                });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": l,
                                                                        text: eX.intl.format(
                                                                            eY ? eX.t.JC15qj : eX.t.lOtBOI,
                                                                            {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, r.jsx)(S.C, {
                                                                                        className: e0.fN,
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
                                                            (n = ((e) => {
                                                                switch (e.type) {
                                                                    case d.R.BUNDLE:
                                                                        return eX.intl.string(eX.t.V1AWw0);
                                                                    case d.R.PROFILE_EFFECT:
                                                                        return eX.intl.string(eX.t.kAeDcK);
                                                                    case d.R.NAMEPLATE:
                                                                        return eX.intl.string(eX.t.H3vhqU);
                                                                    case d.R.PROFILE_FRAME:
                                                                        return eX.intl.string(eX.t.BlSW1e);
                                                                    case d.R.AVATAR_DECORATION:
                                                                    default:
                                                                        return eX.intl.string(eX.t.AQ0Veg);
                                                                }
                                                            })(F)),
                                                            eU
                                                                ? (n = eX.intl.formatToPlainString(eX.t["5U5RB5"], {
                                                                      discountOfferAmount: eL,
                                                                  }))
                                                                : eT &&
                                                                  (n = eX.intl.formatToPlainString(eX.t["cNSL/j"], {
                                                                      price: (0, er.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(x.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(g.$, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: e8,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eR &&
                                                                        (0, r.jsx)(eb.A, {
                                                                            primary: i,
                                                                            product: F,
                                                                            onSuccess: u,
                                                                            giftRecipient: I,
                                                                            giftingOrigin: C,
                                                                            onTrackClick: y,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eR
                                          ? (0, r.jsx)(eb.A, {
                                                primary: !0,
                                                product: F,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: I,
                                                giftingOrigin: C,
                                                onTrackClick: y,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, r.jsx)(v.E, {
                                className: l()(e0.ed, !es && e0.un),
                                variant: "text-xxs/normal",
                                children: eh && !Y ? eX.intl.string(eX.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    e8 = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: e0.mV,
            children: (0, r.jsx)(B.A, {
                avatar: (0, r.jsx)(C.eu, {
                    src: t.avatarSrc,
                    size: y._3.SIZE_32,
                    "aria-label": t.name,
                    status: b.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(e0.$L, n),
            }),
        });
    },
    e3 = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, ef.Ov)();
        return (0, r.jsx)("div", {
            className: e0.nJ,
            role: "img",
            "aria-label": eX.intl.string(eX.t.SZeUdR),
            children: (0, r.jsxs)(T.M, {
                children: [
                    (0, r.jsx)(e8, { user: a.mallow, innerClassName: e0.ab }),
                    (0, r.jsxs)(v.E, {
                        variant: "text-sm/semibold",
                        className: e0.OS,
                        children: [eX.intl.string(eX.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(e8, { user: a.phibi, innerClassName: e0.e9 }),
                    (0, r.jsx)("div", {
                        className: e0.mV,
                        children: (0, r.jsx)(eE.A, {
                            className: e0.M4,
                            innerClassName: e0.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(e8, { user: a.locke, innerClassName: e0.e9 }),
                    (0, r.jsxs)(v.E, {
                        variant: "text-sm/semibold",
                        className: e0.OS,
                        children: [eX.intl.string(eX.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(e8, { user: a.boom, innerClassName: e0.bD }),
                    (0, r.jsx)(e8, { user: a.cherry, innerClassName: e0.bD }),
                ],
            }),
        });
    },
    e4 = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            s = (0, _.bG)([L.A], () => L.A.useReducedMotion),
            c = en.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: o, ...u } = (0, _.cf)([q.A], () => q.A.getPendingChanges()),
            m = (0, z.V7)({ userId: n.id, image: o }),
            p = t.type === d.R.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: E, firstNameplate: A } = (0, ep.f5)(t),
            v = null != E,
            I = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(Y.A, {
                            ...u,
                            pendingAvatar: m,
                            user: n,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: f,
                            pendingProfileEffect: E,
                            disabledInputs: !0,
                            hideMessageInput: !v,
                            hideCustomStatus: !0,
                            hideBioSection: p,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        p && (0, r.jsx)(e9, { user: n }),
                    ],
                }),
            g = (e) => (0, r.jsx)(e3, { user: n, nameplate: e, avatarDecoration: f });
        if (t.type === d.R.BUNDLE) {
            if (!(0, eI.Wb)(t))
                return (0, r.jsx)("div", {
                    className: e0.RA,
                    children: (0, r.jsx)("div", { className: e0.bo, children: I() }),
                });
            {
                let e = i ?? 0,
                    n = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    o = c?.type !== n?.type && !s;
                return n.type === d.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: l()(e0.Zj, a && o ? e0.p2 : ""), children: g(n) })
                    : (0, r.jsx)("div", { className: l()(e0.Ak, a && o ? e0.p2 : ""), children: I() });
            }
        }
        return null != A
            ? (0, r.jsx)("div", { className: e0.Zj, children: g(A) })
            : (0, r.jsx)("div", { className: h?.type === d.R.AVATAR_DECORATION ? e0.RA : e0.Ak, children: I() });
    },
    e9 = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, M.rh)({
                    ...(0, G.Ay)({ author: t, channelId: "1337", content: eX.intl.string(eX.t.d5YwK5) }),
                    state: b.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eX.intl.string(eX.t["TN+ZvB"]),
            children: (0, r.jsx)(T.M, {
                children: (0, r.jsxs)(j.Z, {
                    className: e0.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(H.A, { className: e0.G5, author: (0, F.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: e0.lG,
                            children: [
                                (0, r.jsx)(P.U, { size: "md", color: "currentColor", className: e0.hq }),
                                (0, r.jsx)(O.n, { size: "md", color: "currentColor", className: e0.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    te = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: a,
                category: s,
                returnRef: m,
                analyticsSource: p,
                analyticsLocations: I,
                shouldCheckoutWithOrbs: g,
                tab: S,
                giftRecipient: x,
                giftingOrigin: R,
            } = e,
            T = (0, _.bG)([X.default], () => X.default.getCurrentUser()),
            N = (0, e$.f)(a),
            { previewingVariantIndex: C } = N,
            y = (0, es.Q)(a),
            j = (0, eV.q)(a, C),
            P = (0, ev.rb)(a, y);
        c()(null != P, "Selected product should not be null");
        let { analyticsLocations: O } = (0, w.Ay)([...I, U.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eN.Yr)(P.skuId);
        let k = (0, eY.U1)(s);
        i.useEffect(() => {
            null != T && (0, Z.A)(T.id, T.getAvatarURL(void 0, 80));
        }, [T]);
        let L = i.useMemo(() => (0, ec.V6)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            ee.default.track(b.HAw.OPEN_MODAL, {
                type: b.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: O,
                sku_id: P.skuId,
                product_type: L,
            }),
                (0, ei.RD)(P.skuId);
        }, [p, O, P.skuId, L]);
        let { cardId: B, sessionId: M, tilePosition: G } = (0, ea.uM)() ?? {},
            F = i.useMemo(() => (0, ev.v8)(a), [a]),
            H = (0, eh.R)({ skuId: P.skuId, productSkuIds: F, analyticsLocations: O });
        (0, D.A)({
            type: o.ImpressionTypes.MODAL,
            name: o.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: P.skuId,
                card_id: B,
                shop_session_id: M,
                position_in_section: G,
                product_sku_ids: F,
                location_stack: O,
            },
        });
        let V = (0, K.o6)(),
            W = t === h.ip.EXITING,
            Y = (0, eW.$R)(a),
            z = Y?.amount,
            $ = null != z && (Y?.discountId === eJ.eR || Y?.discountId === eJ.Qz),
            q = i.useMemo(() => ((0, ec.aw)(P) ? P.items.length : 0), [P]),
            { activeSlide: Q, isTransitioning: J } = (0, eS.X)({ slideCount: q, intervalMs: 5e3 });
        return null == T
            ? null
            : (0, r.jsx)(w.f5, {
                  value: O,
                  children: (0, r.jsxs)(f.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: e0.CR,
                      returnRef: m,
                      transitionState: t,
                      size: f.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(f.$m, {
                              "data-migration-pending": !0,
                              className: e0.jE,
                              children: [
                                  (0, r.jsx)(e6, {
                                      user: T,
                                      product: a,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: N,
                                      selectedVariantIndex: y,
                                      shouldCheckoutWithOrbs: g,
                                      tab: S,
                                      activeBundleSlide: Q,
                                      giftRecipient: x?.id !== T.id ? x : void 0,
                                      giftingOrigin: x?.id !== T.id ? R : void 0,
                                      onTrackClick: H,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          e0.i1,
                                          P.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? e0.bF
                                              : P.type === d.R.AVATAR_DECORATION
                                                ? e0.Jq
                                                : e0.eF,
                                      ),
                                      style: { backgroundImage: `url(${k})` },
                                      children: [
                                          (0, eQ.pQ)(a.skuId)
                                              ? a.skuId === eQ.Dp.ORB_PROFILE_BADGE
                                                  ? V || W
                                                      ? null
                                                      : (0, r.jsx)(eU.z, { user: T })
                                                  : a.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(eL.I, {})
                                                    : (0, r.jsx)(eM.B, { product: a, className: e0.Ms })
                                              : (0, r.jsx)(e4, {
                                                    user: T,
                                                    product: j ?? P,
                                                    activeBundleSlide: Q,
                                                    isTransitioning: J,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: e0.VG,
                                              children: [
                                                  (0, r.jsx)(eF.R, {
                                                      product: a,
                                                      selectedVariantIndex: y,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: H,
                                                  }),
                                                  (0, r.jsx)(eR.V, { skuId: P.skuId, tab: S, onTrackClick: H }),
                                                  (0, r.jsx)(E.K, {
                                                      "aria-label": eX.intl.string(eX.t.cpT0Cq),
                                                      onClick: () => {
                                                          H(eQ.sH.CLOSE_DETAIL), n();
                                                      },
                                                      icon: A.d,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          $ &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(f.jl, {
                                      "data-migration-pending": !0,
                                      className: e0.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: e0.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: e0.do,
                                              children: [
                                                  (0, r.jsx)(v.E, {
                                                      variant: "text-sm/semibold",
                                                      className: e0.Q2,
                                                      children: eX.intl.format(eX.t["78ph4b"], {
                                                          discountOfferAmount: z,
                                                      }),
                                                  }),
                                                  Y?.expiresAt != null && (0, r.jsx)(eT.e, { endDate: Y.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
