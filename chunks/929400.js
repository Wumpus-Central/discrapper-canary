n.d(t, { default: () => te });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    o = n.n(s),
    c = n(110259),
    d = n(575593),
    u = n(334279),
    _ = n(417597),
    m = n(990078),
    p = n(462887),
    h = n(231723),
    f = n(935462),
    E = n(408278),
    A = n(972213),
    g = n(834730),
    I = n(430690),
    v = n(821609),
    S = n(318254),
    x = n(825484),
    T = n(534514),
    R = n(247928),
    C = n(331322),
    N = n(97808),
    y = n(778712),
    b = n(652215),
    O = n(359778),
    P = n(245604),
    j = n(460905),
    k = n(736653),
    L = n(775602),
    U = n(793574),
    w = n(688810),
    D = n(139286),
    M = n(262295),
    B = n(141468),
    G = n(963852),
    F = n(763754),
    H = n(20851),
    V = n(44120),
    Y = n(725807),
    W = n(287070),
    z = n(101058),
    q = n(84540),
    $ = n(836602),
    K = n(576622),
    Z = n(761705),
    Q = n(270051),
    J = n(652165),
    X = n(287809),
    ee = n(954571),
    et = n(975571),
    en = n(927578),
    ei = n(580630),
    er = n(979286),
    ea = n(440938),
    el = n(4227),
    es = n(298072),
    eo = n(993408),
    ec = n(640634),
    ed = n(940980),
    eu = n(495565),
    e_ = n(740076),
    em = n(466459),
    ep = n(442759),
    eh = n(966619),
    ef = n(780898),
    eE = n(512213),
    eA = n(139136),
    eg = n(623373),
    eI = n(660653),
    ev = n(536572),
    eS = n(778992),
    ex = n(49620),
    eT = n(586445),
    eR = n(854818),
    eC = n(177366),
    eN = n(11606),
    ey = n(203312),
    eb = n(878112),
    eO = n(501664),
    eP = n(882342),
    ej = n(572595),
    ek = n(641405),
    eL = n(812016),
    eU = n(184659),
    ew = n(561769),
    eD = n(63574),
    eM = n(364616),
    eB = n(846957),
    eG = n(293477),
    eF = n(139146),
    eH = n(929283),
    eV = n(827066),
    eY = n(525723),
    eW = n(212407),
    ez = n(347722),
    eq = n(935094),
    e$ = n(57020),
    eK = n(61750),
    eZ = n(758836),
    eQ = n(788868),
    eJ = n(818348),
    eX = n(985018),
    e0 = n(127157);
let e1 = (e) => {
        let { item: t, product: n, user: a } = e,
            l = r.useRef(null),
            s = (0, eo.aw)(n),
            { firstAvatarDecoration: o } = (0, ep.f5)(n);
        return t.type === d.R.AVATAR_DECORATION
            ? (0, i.jsx)("div", {
                  className: s ? e0.X2 : e0.h1,
                  children: (0, i.jsx)(eH.i, { user: a, item: t, isHighlighted: !0 }),
              })
            : t.type === d.R.PROFILE_EFFECT
              ? (0, i.jsx)("div", {
                    className: s ? e0.ME : e0.sm,
                    ref: l,
                    children: (0, i.jsx)(eA.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === d.R.NAMEPLATE
                ? (0, i.jsx)("div", {
                      ref: l,
                      className: e0.Dz,
                      children: (0, i.jsx)(eE.A, {
                          className: e0.M4,
                          nameplate: t,
                          user: a,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: o,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    e5 = (e) => {
        let { product: t, user: n, activeSlide: r = 0 } = e,
            a = t.items.length;
        return (0, i.jsx)("div", {
            className: e0.g4,
            children: (0, i.jsx)(I.t, {
                activeSlide: String(r),
                children: t.items.map((e, r) => {
                    let l = String(r),
                        s = null != t.bundledProducts ? t.bundledProducts[r] : void 0,
                        o = `(${r + 1}/${a})`;
                    return (0, i.jsx)(
                        I.q,
                        {
                            id: l,
                            children: (0, i.jsxs)("div", {
                                className: e0.Kg,
                                children: [
                                    (0, i.jsx)(e1, { item: e, product: t, user: n }),
                                    (0, i.jsxs)(g.E, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: e0.gx,
                                        children: [s?.name, " ", o],
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
        let { product: t, user: n, activeSlide: r } = e;
        return (0, eo.aw)(t)
            ? (0, i.jsx)(e5, { product: t, user: n, activeSlide: r })
            : (0, eZ.pQ)(t.skuId)
              ? (0, i.jsx)(eB.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, i.jsx)(e1, { item: t.items[0], product: t, user: n })
                : null;
    },
    e7 = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, i.jsx)(g.E, {
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
                tab: c,
                onClose: u,
                returnRef: h,
                previewingVariantIndexProps: f,
                selectedVariantIndex: E,
                activeBundleSlide: A,
                giftRecipient: I,
                giftingOrigin: N,
                onTrackClick: y,
            } = e,
            { analyticsLocations: O } = (0, w.Ay)(),
            { cardId: P, sessionId: j, tilePosition: L } = (0, ea.uM)() ?? {},
            U = en.Ay.canUseCollectibles(n),
            { previewingVariantIndex: D, handleEntering: M, handleLeaving: B } = f,
            G = (0, eV.q)(t, D),
            F = (0, eg.rb)(t, E);
        o()(null != F, "Selected product should not be null");
        let H = (0, em.h)(t),
            { isPurchased: W, isPartiallyOwnedBundle: z } = (0, em.h)(F),
            { isDisabled: $, disabledReason: K } = (0, e_.I)(F.skuId),
            X = (0, eo.Zu)({ product: F, isPartiallyOwnedBundle: z, isPurchased: W }),
            ee = (0, _.bG)([el.A], () => el.A.isClaiming === F?.skuId),
            et = (0, k.Ay)(),
            es = (0, p.M)(et),
            eh = (0, eo.G0)(F),
            ef = (0, eo.yt)(F, b.lid.DEFAULT),
            eE = ef?.amount === 0,
            { firstAvatarDecoration: eA } = (0, ep.f5)(G ?? F),
            eI = r.useMemo(() => (0, eo.fT)(F, U), [F, U]),
            eS = (0, ev.VG)(t),
            eT = (0, ez.X)(F),
            { enabled: eR } = (0, Q.Z)({ location: "collectibles_shop_product_details_modal" }),
            eC = (0, eu.r)(F, !1),
            eL = (0, eY.V_)(t),
            eU = null != eL,
            eB = (t.variants?.length ?? 0) > 8,
            eF = (0, ed.W)("CollectiblesShopProductDetailsModal"),
            eH = c === eZ.G2.ORBS && s ? ew.Hi.ORBS : eF ? ew.Hi.FIAT : void 0,
            eW = (0, ec.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eq,
                isOrbExclusive: e1,
                hasSufficientOrbs: e5,
            } = (0, e$.F)({ product: F, isPremiumUser: U, hasDiscountOffer: eU, prioritizedCurrency: eH }),
            e6 = r.useMemo(() => eq.some((e) => e.currency === eJ.Yr.DISCORD_ORB), [eq]);
        (0, Z.W)({ disableFetch: !e6 });
        let e8 = r.useCallback(() => {
            y(eZ.sH.BUY_WITH_FIAT),
                (0, V.A)({ skuId: F.skuId, analyticsLocations: O, onClose: (e) => (e ? u() : (0, eJ.tE)()) });
        }, [O, u, F.skuId, y]);
        return (
            r.useEffect(() => {
                if (null != eA) return (0, q.p)({ avatarDecoration: eA }), () => (0, q.p)({ avatarDecoration: void 0 });
            }, [eA]),
            (0, i.jsxs)("div", {
                className: e0.qA,
                children: [
                    (0, i.jsx)("div", { className: e0.gn, children: (0, i.jsx)(ey.A, { category: a }) }),
                    (0, i.jsx)(e2, { product: G ?? F, user: n, activeSlide: A }),
                    (0, i.jsxs)("div", {
                        children: [
                            (0, i.jsxs)("div", {
                                className: e0.h_,
                                children: [
                                    (0, i.jsx)(eN.A, { product: F, isDarkText: !es, isOrbExclusive: e1 }),
                                    (0, i.jsx)(T.D, {
                                        variant: "heading-xl/extrabold",
                                        className: e0.v7,
                                        children: eS,
                                    }),
                                    (0, i.jsx)(g.E, { variant: "text-sm/normal", children: eC }),
                                    (0, i.jsx)(e7, { skuId: F.skuId }),
                                    H.isPurchased || H.isPartiallyOwnedBundle
                                        ? (0, i.jsx)(ex.c, { className: e0.On, isPartiallyPurchased: z })
                                        : eh
                                          ? (0, i.jsx)(g.E, {
                                                variant: "text-md/semibold",
                                                className: e0.On,
                                                children: eX.intl.string(eX.t.rt69oo),
                                            })
                                          : eR
                                            ? (0, i.jsx)(eG.B, {
                                                  prices: eq,
                                                  product: F,
                                                  isPremiumUser: U,
                                                  discount: eI,
                                                  hasSufficientOrbs: e5,
                                                  isProductDisabled: $,
                                                  discountOfferAmount: eL,
                                                  onTrackClick: y,
                                              })
                                            : e1
                                              ? null
                                              : (0, i.jsxs)("div", {
                                                    className: e0.pw,
                                                    children: [
                                                        (0, i.jsx)(eO.A, {
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
                                                            : (0, i.jsx)(eP.A, { product: F, onTrackClick: y }),
                                                    ],
                                                }),
                                ],
                            }),
                            (0, eg.B1)(t) &&
                                (0, i.jsx)(R.M, {
                                    children: (0, i.jsxs)("div", {
                                        className: l()(e0.Oj, { [e0.OJ]: eB }),
                                        children: [
                                            eB &&
                                                (0, i.jsx)(eD.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: D,
                                                    className: e0.L$,
                                                }),
                                            (0, i.jsx)(eM.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: M,
                                                onVariantExit: B,
                                                wrap: !0,
                                            }),
                                            !eB &&
                                                (0, i.jsx)(eD.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: D,
                                                    className: e0.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== K && (0, i.jsx)(g.E, { variant: "text-xs/normal", className: e0.H$, children: K }),
                            (0, i.jsx)(C.B, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (eh && !U && !eE) {
                                        let e;
                                        return (
                                            (e = eX.intl.string(eX.t.sEAnVH)),
                                            (0, i.jsx)(Y.A, {
                                                subscriptionTier: eQ.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: () => {
                                                    y(eZ.sH.UNLOCK_WITH_NITRO), (0, ej.M)();
                                                },
                                                onSubscribeModalClose: () => {
                                                    (0, ej.t)({
                                                        product: F,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: h,
                                                        analyticsLocations: O,
                                                        tab: c,
                                                        giftRecipient: I,
                                                        giftingOrigin: N,
                                                        cardId: P,
                                                        sessionId: j,
                                                        tilePosition: L,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return X
                                        ? W
                                            ? eT
                                                ? (0, i.jsxs)(x.e, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, i.jsx)(ek.A, {
                                                              product: F,
                                                              onSuccess: u,
                                                              onTrackClick: y,
                                                          }),
                                                          (0, i.jsx)(eb.A, {
                                                              primary: !0,
                                                              product: F,
                                                              onSuccess: u,
                                                              giftRecipient: I,
                                                              giftingOrigin: N,
                                                              onTrackClick: y,
                                                          }),
                                                      ],
                                                  })
                                                : (0, i.jsx)(ek.A, { product: F, onSuccess: u, onTrackClick: y })
                                            : eh
                                              ? (0, i.jsx)(v.$, {
                                                    loading: ee,
                                                    loadingStartedLabel: eX.intl.string(eX.t["TYw+9s"]),
                                                    loadingFinishedLabel: eX.intl.string(eX.t.Pg1UP5),
                                                    onClick: async () => {
                                                        y(eZ.sH.ADD_TO_COLLECTION),
                                                            await (0, er.iJ)(F.skuId),
                                                            u(),
                                                            (0, eK.A)({
                                                                product: F,
                                                                analyticsLocations: O,
                                                                purchaseType: eZ.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eX.intl.string(eX.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, i.jsx)(i.Fragment, {
                                                    children: eq.map((e, t) => {
                                                        let n,
                                                            r = 0 === t;
                                                        if (e.currency === eJ.Yr.DISCORD_ORB) {
                                                            let t, n, a, l;
                                                            return (
                                                                (t = $
                                                                    ? eX.intl.string(eX.t.cTdr3x)
                                                                    : eX.intl.string(eX.t.zqh7ZM)),
                                                                (n = !e5 || $),
                                                                (a = eX.intl.formatToPlainString(eX.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (l = n ? `${a}, ${t}` : a),
                                                                (0, i.jsx)(m.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, i.jsx)(v.$, {
                                                                        variant: r ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            y(eZ.sH.BUY_WITH_ORBS),
                                                                                (0, J.B4)({
                                                                                    skuId: F.skuId,
                                                                                    onCheckoutSuccess: (e) => {
                                                                                        let { entitlements: t } = e;
                                                                                        (0, er.gB)(),
                                                                                            u(),
                                                                                            (0, eK.A)({
                                                                                                product: F,
                                                                                                analyticsLocations: O,
                                                                                                itemConsumed:
                                                                                                    t[0]?.consumed,
                                                                                                purchaseType: eZ.gs.ORB,
                                                                                            });
                                                                                    },
                                                                                    analyticsLocations: O,
                                                                                });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": l,
                                                                        text: eX.intl.format(
                                                                            eW ? eX.t.JC15qj : eX.t.lOtBOI,
                                                                            {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, i.jsx)(S.C, {
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
                                                                : eR &&
                                                                  (n = eX.intl.formatToPlainString(eX.t["cNSL/j"], {
                                                                      price: (0, ei.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, i.jsxs)(x.e, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, i.jsx)(v.$, {
                                                                        variant: r ? "primary" : "secondary",
                                                                        onClick: e8,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eT &&
                                                                        (0, i.jsx)(eb.A, {
                                                                            primary: r,
                                                                            product: F,
                                                                            onSuccess: u,
                                                                            giftRecipient: I,
                                                                            giftingOrigin: N,
                                                                            onTrackClick: y,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eT
                                          ? (0, i.jsx)(eb.A, {
                                                primary: !0,
                                                product: F,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: I,
                                                giftingOrigin: N,
                                                onTrackClick: y,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, i.jsx)(g.E, {
                                className: l()(e0.ed, !es && e0.un),
                                variant: "text-xxs/normal",
                                children: eh && !W ? eX.intl.string(eX.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    e8 = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, i.jsx)("div", {
            className: e0.mV,
            children: (0, i.jsx)(M.A, {
                avatar: (0, i.jsx)(N.eu, {
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
        let { user: t, nameplate: n, avatarDecoration: r } = e,
            a = (0, ef.Ov)();
        return (0, i.jsx)("div", {
            className: e0.nJ,
            role: "img",
            "aria-label": eX.intl.string(eX.t.SZeUdR),
            children: (0, i.jsxs)(R.M, {
                children: [
                    (0, i.jsx)(e8, { user: a.mallow, innerClassName: e0.ab }),
                    (0, i.jsxs)(g.E, {
                        variant: "text-sm/semibold",
                        className: e0.OS,
                        children: [eX.intl.string(eX.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, i.jsx)(e8, { user: a.phibi, innerClassName: e0.e9 }),
                    (0, i.jsx)("div", {
                        className: e0.mV,
                        children: (0, i.jsx)(eE.A, {
                            className: e0.M4,
                            innerClassName: e0.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: r,
                        }),
                    }),
                    (0, i.jsx)(e8, { user: a.locke, innerClassName: e0.e9 }),
                    (0, i.jsxs)(g.E, {
                        variant: "text-sm/semibold",
                        className: e0.OS,
                        children: [eX.intl.string(eX.t["NG43/6"]), " - 12"],
                    }),
                    (0, i.jsx)(e8, { user: a.boom, innerClassName: e0.bD }),
                    (0, i.jsx)(e8, { user: a.cherry, innerClassName: e0.bD }),
                ],
            }),
        });
    },
    e4 = (e) => {
        let { product: t, user: n, activeBundleSlide: r, isTransitioning: a } = e,
            s = (0, _.bG)([L.A], () => L.A.useReducedMotion),
            o = en.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: c, ...u } = (0, _.cf)([$.A], () => $.A.getPendingChanges()),
            m = (0, z.V7)({ userId: n.id, image: c }),
            p = t.type === d.R.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: E, firstNameplate: A } = (0, ep.f5)(t),
            g = null != E,
            I = () =>
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(W.A, {
                            ...u,
                            pendingAvatar: m,
                            user: n,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: f,
                            pendingProfileEffect: E,
                            disabledInputs: !0,
                            hideMessageInput: !g,
                            hideCustomStatus: !0,
                            hideBioSection: p,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        p && (0, i.jsx)(e9, { user: n }),
                    ],
                }),
            v = (e) => (0, i.jsx)(e3, { user: n, nameplate: e, avatarDecoration: f });
        if (t.type === d.R.BUNDLE) {
            if (!(0, eI.Wb)(t))
                return (0, i.jsx)("div", {
                    className: e0.RA,
                    children: (0, i.jsx)("div", { className: e0.bo, children: I() }),
                });
            {
                let e = r ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    c = o?.type !== n?.type && !s;
                return n.type === d.R.NAMEPLATE
                    ? (0, i.jsx)("div", { className: l()(e0.Zj, a && c ? e0.p2 : ""), children: v(n) })
                    : (0, i.jsx)("div", { className: l()(e0.Ak, a && c ? e0.p2 : ""), children: I() });
            }
        }
        return null != A
            ? (0, i.jsx)("div", { className: e0.Zj, children: v(A) })
            : (0, i.jsx)("div", { className: h?.type === d.R.AVATAR_DECORATION ? e0.RA : e0.Ak, children: I() });
    },
    e9 = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, B.rh)({
                    ...(0, G.Ay)({ author: t, channelId: "1337", content: eX.intl.string(eX.t.d5YwK5) }),
                    state: b.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, i.jsx)("div", {
            role: "img",
            "aria-label": eX.intl.string(eX.t["TN+ZvB"]),
            children: (0, i.jsx)(R.M, {
                children: (0, i.jsxs)(O.Z, {
                    className: e0.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, i.jsx)(H.A, { className: e0.G5, author: (0, F.p_)(n), message: n }, n.id),
                        (0, i.jsxs)("div", {
                            className: e0.lG,
                            children: [
                                (0, i.jsx)(P.U, { size: "md", color: "currentColor", className: e0.hq }),
                                (0, i.jsx)(j.n, { size: "md", color: "currentColor", className: e0.hq }),
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
                shouldCheckoutWithOrbs: v,
                tab: S,
                giftRecipient: x,
                giftingOrigin: T,
            } = e,
            R = (0, _.bG)([X.default], () => X.default.getCurrentUser()),
            C = (0, eq.f)(a),
            { previewingVariantIndex: N } = C,
            y = (0, es.Q)(a),
            O = (0, eV.q)(a, N),
            P = (0, eg.rb)(a, y);
        o()(null != P, "Selected product should not be null");
        let { analyticsLocations: j } = (0, w.Ay)([...I, U.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eC.Yr)(P.skuId);
        let k = (0, eW.U1)(s);
        r.useEffect(() => {
            null != R && (0, K.A)(R.id, R.getAvatarURL(void 0, 80));
        }, [R]);
        let L = r.useMemo(() => (0, eo.V6)(a.type, a.skuId), [a.type, a.skuId]);
        r.useEffect(() => {
            ee.default.track(b.HAw.OPEN_MODAL, {
                type: b.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: j,
                sku_id: P.skuId,
                product_type: L,
            }),
                (0, er.RD)(P.skuId);
        }, [p, j, P.skuId, L]);
        let { cardId: M, sessionId: B, tilePosition: G } = (0, ea.uM)() ?? {},
            F = r.useMemo(() => (0, eg.v8)(a), [a]),
            H = (0, eh.R)({ skuId: P.skuId, productSkuIds: F, analyticsLocations: j });
        (0, D.A)({
            type: c.ImpressionTypes.MODAL,
            name: c.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: P.skuId,
                card_id: M,
                shop_session_id: B,
                position_in_section: G,
                product_sku_ids: F,
                location_stack: j,
            },
        });
        let V = (0, J.o6)(),
            Y = t === h.ip.EXITING,
            W = (0, eY.$R)(a),
            z = W?.amount,
            q = null != z && (W?.discountId === eQ.eR || W?.discountId === eQ.Qz),
            $ = r.useMemo(() => ((0, eo.aw)(P) ? P.items.length : 0), [P]),
            { activeSlide: Z, isTransitioning: Q } = (0, eS.X)({ slideCount: $, intervalMs: 5e3 });
        return null == R
            ? null
            : (0, i.jsx)(w.f5, {
                  value: j,
                  children: (0, i.jsxs)(f.EO, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: e0.CR,
                      returnRef: m,
                      transitionState: t,
                      size: f.rI.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, i.jsxs)(f.$m, {
                              "data-migration-pending": !0,
                              className: e0.jE,
                              children: [
                                  (0, i.jsx)(e6, {
                                      user: R,
                                      product: a,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: C,
                                      selectedVariantIndex: y,
                                      shouldCheckoutWithOrbs: v,
                                      tab: S,
                                      activeBundleSlide: Z,
                                      giftRecipient: x?.id !== R.id ? x : void 0,
                                      giftingOrigin: x?.id !== R.id ? T : void 0,
                                      onTrackClick: H,
                                  }),
                                  (0, i.jsxs)("div", {
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
                                          (0, eZ.pQ)(a.skuId)
                                              ? a.skuId === eZ.Dp.ORB_PROFILE_BADGE
                                                  ? V || Y
                                                      ? null
                                                      : (0, i.jsx)(eU.z, { user: R })
                                                  : a.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, i.jsx)(eL.I, {})
                                                    : (0, i.jsx)(eB.B, { product: a, className: e0.Ms })
                                              : (0, i.jsx)(e4, {
                                                    user: R,
                                                    product: O ?? P,
                                                    activeBundleSlide: Z,
                                                    isTransitioning: Q,
                                                }),
                                          (0, i.jsxs)("div", {
                                              className: e0.VG,
                                              children: [
                                                  (0, i.jsx)(eF.R, {
                                                      product: a,
                                                      selectedVariantIndex: y,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: H,
                                                  }),
                                                  (0, i.jsx)(eT.V, { skuId: P.skuId, tab: S, onTrackClick: H }),
                                                  (0, i.jsx)(E.K, {
                                                      "aria-label": eX.intl.string(eX.t.cpT0Cq),
                                                      onClick: () => {
                                                          H(eZ.sH.CLOSE_DETAIL), n();
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
                          q &&
                              (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsxs)(f.jl, {
                                      "data-migration-pending": !0,
                                      className: e0.Hx,
                                      children: [
                                          (0, i.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: e0.OC,
                                          }),
                                          (0, i.jsxs)("div", {
                                              className: e0.do,
                                              children: [
                                                  (0, i.jsx)(g.E, {
                                                      variant: "text-sm/semibold",
                                                      className: e0.Q2,
                                                      children: eX.intl.format(eX.t["78ph4b"], {
                                                          discountOfferAmount: z,
                                                      }),
                                                  }),
                                                  W?.expiresAt != null && (0, i.jsx)(eR.e, { endDate: W.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
