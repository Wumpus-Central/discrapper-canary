n.d(t, { default: () => eq });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(284009),
    c = n.n(l),
    o = n(110259),
    d = n(575593),
    u = n(334279),
    m = n(417597),
    p = n(990078),
    _ = n(582754),
    h = n(397927),
    x = n(736653),
    f = n(775602),
    g = n(793574),
    v = n(688810),
    A = n(139286),
    C = n(262295),
    I = n(141468),
    T = n(963852),
    j = n(763754),
    R = n(20851),
    N = n(44120),
    b = n(725807),
    E = n(287070),
    k = n(101058),
    O = n(84540),
    y = n(836602),
    S = n(576622),
    P = n(761705),
    L = n(270051),
    w = n(652165),
    B = n(287809),
    M = n(954571),
    D = n(975571),
    U = n(927578),
    V = n(580630),
    H = n(979286),
    F = n(440938),
    G = n(4227),
    z = n(298072),
    W = n(993408),
    $ = n(640634),
    K = n(940980),
    q = n(495565),
    J = n(740076),
    Y = n(466459),
    Z = n(442759),
    X = n(966619),
    Q = n(780898),
    ee = n(512213),
    et = n(139136),
    en = n(623373),
    ea = n(660653),
    er = n(536572),
    ei = n(778992),
    es = n(49620),
    el = n(586445),
    ec = n(854818),
    eo = n(177366),
    ed = n(11606),
    eu = n(203312),
    em = n(878112),
    ep = n(501664),
    e_ = n(882342),
    eh = n(572595),
    ex = n(641405),
    ef = n(812016),
    eg = n(184659),
    ev = n(561769),
    eA = n(63574),
    eC = n(364616),
    eI = n(846957),
    eT = n(293477),
    ej = n(139146),
    eR = n(929283),
    eN = n(827066),
    eb = n(525723),
    eE = n(212407),
    ek = n(347722),
    eO = n(935094),
    ey = n(57020),
    eS = n(61750),
    eP = n(758836),
    eL = n(652215),
    ew = n(788868),
    eB = n(818348),
    eM = n(985018),
    eD = n(127157);
let eU = (e) => {
        let { item: t, product: n, user: i } = e,
            s = r.useRef(null),
            l = (0, W.aw)(n),
            { firstAvatarDecoration: c } = (0, Z.f5)(n);
        return t.type === d.R.AVATAR_DECORATION
            ? (0, a.jsx)("div", {
                  className: l ? eD.X2 : eD.h1,
                  children: (0, a.jsx)(eR.i, { user: i, item: t, isHighlighted: !0 }),
              })
            : t.type === d.R.PROFILE_EFFECT
              ? (0, a.jsx)("div", {
                    className: l ? eD.ME : eD.sm,
                    ref: s,
                    children: (0, a.jsx)(et.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === d.R.NAMEPLATE
                ? (0, a.jsx)("div", {
                      ref: s,
                      className: eD.Dz,
                      children: (0, a.jsx)(ee.A, {
                          className: eD.M4,
                          nameplate: t,
                          user: i,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: c,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eV = (e) => {
        let { product: t, user: n, activeSlide: r = 0 } = e,
            i = t.items.length;
        return (0, a.jsx)("div", {
            className: eD.g4,
            children: (0, a.jsx)(h.tN_, {
                activeSlide: String(r),
                children: t.items.map((e, r) => {
                    let s = String(r),
                        l = null != t.bundledProducts ? t.bundledProducts[r] : void 0,
                        c = `(${r + 1}/${i})`;
                    return (0, a.jsx)(
                        h.q7S,
                        {
                            id: s,
                            children: (0, a.jsxs)("div", {
                                className: eD.Kg,
                                children: [
                                    (0, a.jsx)(eU, { item: e, product: t, user: n }),
                                    (0, a.jsxs)(h.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eD.gx,
                                        children: [l?.name, " ", c],
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
        let { product: t, user: n, activeSlide: r } = e;
        return (0, W.aw)(t)
            ? (0, a.jsx)(eV, { product: t, user: n, activeSlide: r })
            : (0, eP.pQ)(t.skuId)
              ? (0, a.jsx)(eI.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, a.jsx)(eU, { item: t.items[0], product: t, user: n })
                : null;
    },
    eF = (e) => {
        let { skuId: t } = e;
        return t === u.j.PREMIUM_TIER_2_3_DAY
            ? (0, a.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  className: eD.CU,
                  children: eM.intl.format(eM.t.Q1scdE, {
                      helpdeskArticle: D.A.getArticleURL(eL.MVz.FRACTIONAL_PREMIUM_ABOUT),
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
                tab: o,
                onClose: u,
                returnRef: f,
                previewingVariantIndexProps: g,
                selectedVariantIndex: A,
                activeBundleSlide: C,
                giftRecipient: I,
                giftingOrigin: T,
                onTrackClick: j,
            } = e,
            { analyticsLocations: R } = (0, v.Ay)(),
            { cardId: E, sessionId: k, tilePosition: y } = (0, F.uM)() ?? {},
            S = U.Ay.canUseCollectibles(n),
            { previewingVariantIndex: B, handleEntering: M, handleLeaving: D } = g,
            z = (0, eN.q)(t, B),
            X = (0, en.rb)(t, A);
        c()(null != X, "Selected product should not be null");
        let Q = (0, Y.h)(t),
            { isPurchased: ee, isPartiallyOwnedBundle: et } = (0, Y.h)(X),
            { isDisabled: ea, disabledReason: ei } = (0, J.I)(X.skuId),
            el = (0, W.Zu)({ product: X, isPartiallyOwnedBundle: et, isPurchased: ee }),
            ec = (0, m.bG)([G.A], () => G.A.isClaiming === X?.skuId),
            eo = (0, x.Ay)(),
            ef = (0, _.Mw)(eo),
            eg = (0, W.G0)(X),
            eI = (0, W.yt)(X, eL.lid.DEFAULT),
            ej = eI?.amount === 0,
            { firstAvatarDecoration: eR } = (0, Z.f5)(z ?? X),
            eE = r.useMemo(() => (0, W.fT)(X, S), [X, S]),
            eO = (0, er.VG)(t),
            eU = (0, ek.X)(X),
            { enabled: eV } = (0, L.Z)({ location: "collectibles_shop_product_details_modal" }),
            eG = (0, q.r)(X, !1),
            ez = (0, eb.V_)(t),
            eW = null != ez,
            e$ = (t.variants?.length ?? 0) > 8,
            eK = (0, K.W)("CollectiblesShopProductDetailsModal"),
            eq = o === eP.G2.ORBS && l ? ev.Hi.ORBS : eK ? ev.Hi.FIAT : void 0,
            eJ = (0, $.l)("collectibles_shop_product_details_modal"),
            {
                checkoutEligiblePrices: eY,
                isOrbExclusive: eZ,
                hasSufficientOrbs: eX,
            } = (0, ey.F)({ product: X, isPremiumUser: S, hasDiscountOffer: eW, prioritizedCurrency: eq }),
            eQ = r.useMemo(() => eY.some((e) => e.currency === eB.Yr.DISCORD_ORB), [eY]);
        (0, P.W)({ disableFetch: !eQ });
        let e0 = r.useCallback(() => {
            j(eP.sH.BUY_WITH_FIAT),
                (0, N.A)({ skuId: X.skuId, analyticsLocations: R, onClose: (e) => (e ? u() : (0, eB.tE)()) });
        }, [R, u, X.skuId, j]);
        return (
            r.useEffect(() => {
                if (null != eR) return (0, O.p)({ avatarDecoration: eR }), () => (0, O.p)({ avatarDecoration: void 0 });
            }, [eR]),
            (0, a.jsxs)("div", {
                className: eD.qA,
                children: [
                    (0, a.jsx)("div", { className: eD.gn, children: (0, a.jsx)(eu.A, { category: i }) }),
                    (0, a.jsx)(eH, { product: z ?? X, user: n, activeSlide: C }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsxs)("div", {
                                className: eD.h_,
                                children: [
                                    (0, a.jsx)(ed.A, { product: X, isDarkText: !ef, isOrbExclusive: eZ }),
                                    (0, a.jsx)(h.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eD.v7,
                                        children: eO,
                                    }),
                                    (0, a.jsx)(h.Text, { variant: "text-sm/normal", children: eG }),
                                    (0, a.jsx)(eF, { skuId: X.skuId }),
                                    Q.isPurchased || Q.isPartiallyOwnedBundle
                                        ? (0, a.jsx)(es.c, { className: eD.On, isPartiallyPurchased: et })
                                        : eg
                                          ? (0, a.jsx)(h.Text, {
                                                variant: "text-md/semibold",
                                                className: eD.On,
                                                children: eM.intl.string(eM.t.rt69oo),
                                            })
                                          : eV
                                            ? (0, a.jsx)(eT.B, {
                                                  prices: eY,
                                                  product: X,
                                                  isPremiumUser: S,
                                                  discount: eE,
                                                  hasSufficientOrbs: eX,
                                                  isProductDisabled: ea,
                                                  discountOfferAmount: ez,
                                                  onTrackClick: j,
                                              })
                                            : eZ
                                              ? null
                                              : (0, a.jsxs)("div", {
                                                    className: eD.pw,
                                                    children: [
                                                        (0, a.jsx)(ep.A, {
                                                            product: X,
                                                            discount: eE,
                                                            isPremiumUser: S,
                                                            hideStrikethroughPrice: !S || eW,
                                                            nitroIconType: "tooltip",
                                                            nitroIconSize: "xs",
                                                            discountOfferAmount: ez,
                                                        }),
                                                        S || eW
                                                            ? null
                                                            : (0, a.jsx)(e_.A, { product: X, onTrackClick: j }),
                                                    ],
                                                }),
                                ],
                            }),
                            (0, en.B1)(t) &&
                                (0, a.jsx)(h.M1G, {
                                    children: (0, a.jsxs)("div", {
                                        className: s()(eD.Oj, { [eD.OJ]: e$ }),
                                        children: [
                                            e$ &&
                                                (0, a.jsx)(eA.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: B,
                                                    className: eD.L$,
                                                }),
                                            (0, a.jsx)(eC.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: M,
                                                onVariantExit: D,
                                                wrap: !0,
                                            }),
                                            !e$ &&
                                                (0, a.jsx)(eA.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: B,
                                                    className: eD.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== ei &&
                                (0, a.jsx)(h.Text, { variant: "text-xs/normal", className: eD.H$, children: ei }),
                            (0, a.jsx)(h.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (eg && !S && !ej) {
                                        let e;
                                        return (
                                            (e = eM.intl.string(eM.t.sEAnVH)),
                                            (0, a.jsx)(b.A, {
                                                subscriptionTier: ew.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: () => {
                                                    j(eP.sH.UNLOCK_WITH_NITRO), (0, eh.M)();
                                                },
                                                onSubscribeModalClose: () => {
                                                    (0, eh.t)({
                                                        product: X,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: f,
                                                        analyticsLocations: R,
                                                        tab: o,
                                                        giftRecipient: I,
                                                        giftingOrigin: T,
                                                        cardId: E,
                                                        sessionId: k,
                                                        tilePosition: y,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return el
                                        ? ee
                                            ? eU
                                                ? (0, a.jsxs)(h.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, a.jsx)(ex.A, {
                                                              product: X,
                                                              onSuccess: u,
                                                              onTrackClick: j,
                                                          }),
                                                          (0, a.jsx)(em.A, {
                                                              primary: !0,
                                                              product: X,
                                                              onSuccess: u,
                                                              giftRecipient: I,
                                                              giftingOrigin: T,
                                                              onTrackClick: j,
                                                          }),
                                                      ],
                                                  })
                                                : (0, a.jsx)(ex.A, { product: X, onSuccess: u, onTrackClick: j })
                                            : eg
                                              ? (0, a.jsx)(h.Button, {
                                                    loading: ec,
                                                    loadingStartedLabel: eM.intl.string(eM.t["TYw+9s"]),
                                                    loadingFinishedLabel: eM.intl.string(eM.t.Pg1UP5),
                                                    onClick: async () => {
                                                        j(eP.sH.ADD_TO_COLLECTION),
                                                            await (0, H.iJ)(X.skuId),
                                                            u(),
                                                            (0, eS.A)({
                                                                product: X,
                                                                analyticsLocations: R,
                                                                purchaseType: eP.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eM.intl.string(eM.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, a.jsx)(a.Fragment, {
                                                    children: eY.map((e, t) => {
                                                        let n,
                                                            r = 0 === t;
                                                        if (e.currency === eB.Yr.DISCORD_ORB) {
                                                            let t, n, i, s;
                                                            return (
                                                                (t = ea
                                                                    ? eM.intl.string(eM.t.cTdr3x)
                                                                    : eM.intl.string(eM.t.zqh7ZM)),
                                                                (n = !eX || ea),
                                                                (i = eM.intl.formatToPlainString(eM.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (s = n ? `${i}, ${t}` : i),
                                                                (0, a.jsx)(p.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, a.jsx)(h.Button, {
                                                                        variant: r ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            j(eP.sH.BUY_WITH_ORBS),
                                                                                (0, w.B4)({
                                                                                    skuId: X.skuId,
                                                                                    onCheckoutSuccess: (e) => {
                                                                                        let { entitlements: t } = e;
                                                                                        (0, H.gB)(),
                                                                                            u(),
                                                                                            (0, eS.A)({
                                                                                                product: X,
                                                                                                analyticsLocations: R,
                                                                                                itemConsumed:
                                                                                                    t[0]?.consumed,
                                                                                                purchaseType: eP.gs.ORB,
                                                                                            });
                                                                                    },
                                                                                    analyticsLocations: R,
                                                                                });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": s,
                                                                        text: eM.intl.format(
                                                                            eJ ? eM.t.JC15qj : eM.t.lOtBOI,
                                                                            {
                                                                                orbPrice: e.amount,
                                                                                orbIconHook: () =>
                                                                                    (0, a.jsx)(h.Cp8, {
                                                                                        className: eD.fN,
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
                                                                        return eM.intl.string(eM.t.V1AWw0);
                                                                    case d.R.PROFILE_EFFECT:
                                                                        return eM.intl.string(eM.t.kAeDcK);
                                                                    case d.R.NAMEPLATE:
                                                                        return eM.intl.string(eM.t.H3vhqU);
                                                                    case d.R.PROFILE_FRAME:
                                                                        return eM.intl.string(eM.t.BlSW1e);
                                                                    case d.R.AVATAR_DECORATION:
                                                                    default:
                                                                        return eM.intl.string(eM.t.AQ0Veg);
                                                                }
                                                            })(X)),
                                                            eW
                                                                ? (n = eM.intl.formatToPlainString(eM.t["5U5RB5"], {
                                                                      discountOfferAmount: ez,
                                                                  }))
                                                                : eV &&
                                                                  (n = eM.intl.formatToPlainString(eM.t["cNSL/j"], {
                                                                      price: (0, V.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, a.jsxs)(h.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, a.jsx)(h.Button, {
                                                                        variant: r ? "primary" : "secondary",
                                                                        onClick: e0,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eU &&
                                                                        (0, a.jsx)(em.A, {
                                                                            primary: r,
                                                                            product: X,
                                                                            onSuccess: u,
                                                                            giftRecipient: I,
                                                                            giftingOrigin: T,
                                                                            onTrackClick: j,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eU
                                          ? (0, a.jsx)(em.A, {
                                                primary: !0,
                                                product: X,
                                                onSuccess: u,
                                                fullWidth: !0,
                                                giftRecipient: I,
                                                giftingOrigin: T,
                                                onTrackClick: j,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, a.jsx)(h.Text, {
                                className: s()(eD.ed, !ef && eD.un),
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
        let { user: t, innerClassName: n } = e;
        return (0, a.jsx)("div", {
            className: eD.mV,
            children: (0, a.jsx)(C.A, {
                avatar: (0, a.jsx)(h.euF, {
                    src: t.avatarSrc,
                    size: h._3J.SIZE_32,
                    "aria-label": t.name,
                    status: h.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: s()(eD.$L, n),
            }),
        });
    },
    eW = (e) => {
        let { user: t, nameplate: n, avatarDecoration: r } = e,
            i = (0, Q.Ov)();
        return (0, a.jsx)("div", {
            className: eD.nJ,
            role: "img",
            "aria-label": eM.intl.string(eM.t.SZeUdR),
            children: (0, a.jsxs)(h.M1G, {
                children: [
                    (0, a.jsx)(ez, { user: i.mallow, innerClassName: eD.ab }),
                    (0, a.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: eD.OS,
                        children: [eM.intl.string(eM.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, a.jsx)(ez, { user: i.phibi, innerClassName: eD.e9 }),
                    (0, a.jsx)("div", {
                        className: eD.mV,
                        children: (0, a.jsx)(ee.A, {
                            className: eD.M4,
                            innerClassName: eD.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: r,
                        }),
                    }),
                    (0, a.jsx)(ez, { user: i.locke, innerClassName: eD.e9 }),
                    (0, a.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: eD.OS,
                        children: [eM.intl.string(eM.t["NG43/6"]), " - 12"],
                    }),
                    (0, a.jsx)(ez, { user: i.boom, innerClassName: eD.bD }),
                    (0, a.jsx)(ez, { user: i.cherry, innerClassName: eD.bD }),
                ],
            }),
        });
    },
    e$ = (e) => {
        let { product: t, user: n, activeBundleSlide: r, isTransitioning: i } = e,
            l = (0, m.bG)([f.A], () => f.A.useReducedMotion),
            c = U.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: o, ...u } = (0, m.cf)([y.A], () => y.A.getPendingChanges()),
            p = (0, k.V7)({ userId: n.id, image: o }),
            _ = t.type === d.R.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: x, firstProfileEffect: g, firstNameplate: v } = (0, Z.f5)(t),
            A = null != g,
            C = () =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(E.A, {
                            ...u,
                            pendingAvatar: p,
                            user: n,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: x,
                            pendingProfileEffect: g,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: _,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        _ && (0, a.jsx)(eK, { user: n }),
                    ],
                }),
            I = (e) => (0, a.jsx)(eW, { user: n, nameplate: e, avatarDecoration: x });
        if (t.type === d.R.BUNDLE) {
            if (!(0, ea.Wb)(t))
                return (0, a.jsx)("div", {
                    className: eD.RA,
                    children: (0, a.jsx)("div", { className: eD.bo, children: C() }),
                });
            {
                let e = r ?? 0,
                    n = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    o = c?.type !== n?.type && !l;
                return n.type === d.R.NAMEPLATE
                    ? (0, a.jsx)("div", { className: s()(eD.Zj, i && o ? eD.p2 : ""), children: I(n) })
                    : (0, a.jsx)("div", { className: s()(eD.Ak, i && o ? eD.p2 : ""), children: C() });
            }
        }
        return null != v
            ? (0, a.jsx)("div", { className: eD.Zj, children: I(v) })
            : (0, a.jsx)("div", { className: h?.type === d.R.AVATAR_DECORATION ? eD.RA : eD.Ak, children: C() });
    },
    eK = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, I.rh)({
                    ...(0, T.Ay)({ author: t, channelId: "1337", content: eM.intl.string(eM.t.d5YwK5) }),
                    state: eL.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, a.jsx)("div", {
            role: "img",
            "aria-label": eM.intl.string(eM.t["TN+ZvB"]),
            children: (0, a.jsx)(h.M1G, {
                children: (0, a.jsxs)(h.ZpM, {
                    className: eD.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, a.jsx)(R.A, { className: eD.G5, author: (0, j.p_)(n), message: n }, n.id),
                        (0, a.jsxs)("div", {
                            className: eD.lG,
                            children: [
                                (0, a.jsx)(h.U1e, { size: "md", color: "currentColor", className: eD.hq }),
                                (0, a.jsx)(h.nm2, { size: "md", color: "currentColor", className: eD.hq }),
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
                returnRef: p,
                analyticsSource: _,
                analyticsLocations: x,
                shouldCheckoutWithOrbs: f,
                tab: C,
                giftRecipient: I,
                giftingOrigin: T,
            } = e,
            j = (0, m.bG)([B.default], () => B.default.getCurrentUser()),
            R = (0, eO.f)(i),
            { previewingVariantIndex: N } = R,
            b = (0, z.Q)(i),
            E = (0, eN.q)(i, N),
            k = (0, en.rb)(i, b);
        c()(null != k, "Selected product should not be null");
        let { analyticsLocations: O } = (0, v.Ay)([...x, g.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, eo.Yr)(k.skuId);
        let y = (0, eE.U1)(l);
        r.useEffect(() => {
            null != j && (0, S.A)(j.id, j.getAvatarURL(void 0, 80));
        }, [j]);
        let P = r.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            M.default.track(eL.HAw.OPEN_MODAL, {
                type: eL.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: _,
                location_stack: O,
                sku_id: k.skuId,
                product_type: P,
            }),
                (0, H.RD)(k.skuId);
        }, [_, O, k.skuId, P]);
        let { cardId: L, sessionId: D, tilePosition: U } = (0, F.uM)() ?? {},
            V = r.useMemo(() => (0, en.v8)(i), [i]),
            G = (0, X.R)({ skuId: k.skuId, productSkuIds: V, analyticsLocations: O });
        (0, A.A)({
            type: o.ImpressionTypes.MODAL,
            name: o.ImpressionNames.SHOP_PRODUCT_DETAIL,
            properties: {
                sku_id: k.skuId,
                card_id: L,
                shop_session_id: D,
                position_in_section: U,
                product_sku_ids: V,
                location_stack: O,
            },
        });
        let $ = (0, w.o6)(),
            K = t === h.ip4.EXITING,
            q = (0, eb.$R)(i),
            J = q?.amount,
            Y = null != J && (q?.discountId === ew.eR || q?.discountId === ew.Qz),
            Z = r.useMemo(() => ((0, W.aw)(k) ? k.items.length : 0), [k]),
            { activeSlide: Q, isTransitioning: ee } = (0, ei.X)({ slideCount: Z, intervalMs: 5e3 });
        return null == j
            ? null
            : (0, a.jsx)(v.f5, {
                  value: O,
                  children: (0, a.jsxs)(h.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eD.CR,
                      returnRef: p,
                      transitionState: t,
                      size: h.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, a.jsxs)(h.$mQ, {
                              "data-migration-pending": !0,
                              className: eD.jE,
                              children: [
                                  (0, a.jsx)(eG, {
                                      user: j,
                                      product: i,
                                      category: l,
                                      onClose: n,
                                      previewingVariantIndexProps: R,
                                      selectedVariantIndex: b,
                                      shouldCheckoutWithOrbs: f,
                                      tab: C,
                                      activeBundleSlide: Q,
                                      giftRecipient: I?.id !== j.id ? I : void 0,
                                      giftingOrigin: I?.id !== j.id ? T : void 0,
                                      onTrackClick: G,
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: s()(
                                          eD.i1,
                                          k.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                              ? eD.bF
                                              : k.type === d.R.AVATAR_DECORATION
                                                ? eD.Jq
                                                : eD.eF,
                                      ),
                                      style: { backgroundImage: `url(${y})` },
                                      children: [
                                          (0, eP.pQ)(i.skuId)
                                              ? i.skuId === eP.Dp.ORB_PROFILE_BADGE
                                                  ? $ || K
                                                      ? null
                                                      : (0, a.jsx)(eg.z, { user: j })
                                                  : i.skuId === u.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, a.jsx)(ef.I, {})
                                                    : (0, a.jsx)(eI.B, { product: i, className: eD.Ms })
                                              : (0, a.jsx)(e$, {
                                                    user: j,
                                                    product: E ?? k,
                                                    activeBundleSlide: Q,
                                                    isTransitioning: ee,
                                                }),
                                          (0, a.jsxs)("div", {
                                              className: eD.VG,
                                              children: [
                                                  (0, a.jsx)(ej.R, {
                                                      product: i,
                                                      selectedVariantIndex: b,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                      onTrackClick: G,
                                                  }),
                                                  (0, a.jsx)(el.V, { skuId: k.skuId, tab: C, onTrackClick: G }),
                                                  (0, a.jsx)(h.K0, {
                                                      "aria-label": eM.intl.string(eM.t.cpT0Cq),
                                                      onClick: () => {
                                                          G(eP.sH.CLOSE_DETAIL), n();
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
                              (0, a.jsx)(a.Fragment, {
                                  children: (0, a.jsxs)(h.jlY, {
                                      "data-migration-pending": !0,
                                      className: eD.Hx,
                                      children: [
                                          (0, a.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eD.OC,
                                          }),
                                          (0, a.jsxs)("div", {
                                              className: eD.do,
                                              children: [
                                                  (0, a.jsx)(h.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eD.Q2,
                                                      children: eM.intl.format(eM.t["78ph4b"], {
                                                          discountOfferAmount: J,
                                                      }),
                                                  }),
                                                  q?.expiresAt != null && (0, a.jsx)(ec.e, { endDate: q.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
