a.d(t, { default: () => eF });
var n = a(627968),
    r = a(64700),
    i = a(503698),
    s = a.n(i),
    l = a(284009),
    c = a.n(l),
    o = a(575593),
    d = a(334279),
    u = a(417597),
    m = a(990078),
    p = a(582754),
    _ = a(397927),
    h = a(736653),
    x = a(775602),
    f = a(793574),
    g = a(688810),
    v = a(262295),
    A = a(141468),
    C = a(963852),
    j = a(763754),
    N = a(20851),
    b = a(369496),
    I = a(550111),
    T = a(44120),
    R = a(465794),
    y = a(919395),
    E = a(287070),
    P = a(331402),
    S = a(101058),
    O = a(836602),
    k = a(576622),
    w = a(151252),
    L = a(652165),
    B = a(287809),
    M = a(954571),
    U = a(975571),
    D = a(927578),
    G = a(580630),
    V = a(979286),
    F = a(4227),
    H = a(298072),
    z = a(993408),
    W = a(940980),
    $ = a(495565),
    q = a(740076),
    J = a(466459),
    K = a(442759),
    Z = a(623373),
    Y = a(660653),
    X = a(536572),
    Q = a(778992),
    ee = a(49620),
    et = a(586445),
    ea = a(854818),
    en = a(177366),
    er = a(11606),
    ei = a(203312),
    es = a(878112),
    el = a(501664),
    ec = a(882342),
    eo = a(572595),
    ed = a(641405),
    eu = a(812016),
    em = a(184659),
    ep = a(561769),
    e_ = a(63574),
    eh = a(364616),
    ex = a(846957),
    ef = a(293477),
    eg = a(139146),
    ev = a(929283),
    eA = a(827066),
    eC = a(525723),
    ej = a(212407),
    eN = a(347722),
    eb = a(935094),
    eI = a(57020),
    eT = a(61750),
    eR = a(758836),
    ey = a(652215),
    eE = a(788868),
    eP = a(818348),
    eS = a(985018),
    eO = a(235980);
let ek = (e) => {
        let { item: t, product: a, user: i } = e,
            s = r.useRef(null),
            l = (0, z.aw)(a),
            { firstAvatarDecoration: c } = (0, K.f5)(a);
        return t.type === o.R.AVATAR_DECORATION
            ? (0, n.jsx)("div", {
                  className: l ? eO.X2 : eO.h1,
                  children: (0, n.jsx)(ev.i, { user: i, item: t, isHighlighted: !0 }),
              })
            : t.type === o.R.PROFILE_EFFECT
              ? (0, n.jsx)("div", {
                    className: l ? eO.ME : eO.sm,
                    ref: s,
                    children: (0, n.jsx)(P.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === o.R.NAMEPLATE
                ? (0, n.jsx)("div", {
                      ref: s,
                      className: eO.Dz,
                      children: (0, n.jsx)(I.A, {
                          className: eO.M4,
                          nameplate: t,
                          user: i,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: c,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    ew = (e) => {
        let { product: t, user: a, activeSlide: r = 0 } = e,
            i = t.items.length;
        return (0, n.jsx)("div", {
            className: eO.g4,
            children: (0, n.jsx)(_.tN_, {
                activeSlide: String(r),
                children: t.items.map((e, r) => {
                    let s = String(r),
                        l = null != t.bundledProducts ? t.bundledProducts[r] : void 0,
                        c = `(${r + 1}/${i})`;
                    return (0, n.jsx)(
                        _.q7S,
                        {
                            id: s,
                            children: (0, n.jsxs)("div", {
                                className: eO.Kg,
                                children: [
                                    (0, n.jsx)(ek, { item: e, product: t, user: a }),
                                    (0, n.jsxs)(_.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eO.gx,
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
    eL = (e) => {
        let { product: t, user: a, activeSlide: r } = e;
        return (0, z.aw)(t)
            ? (0, n.jsx)(ew, { product: t, user: a, activeSlide: r })
            : (0, eR.pQ)(t.skuId)
              ? (0, n.jsx)(ex.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, n.jsx)(ek, { item: t.items[0], product: t, user: a })
                : null;
    },
    eB = (e) => {
        let { skuId: t } = e;
        return t === d.j.PREMIUM_TIER_2_3_DAY
            ? (0, n.jsx)(_.Text, {
                  variant: "text-sm/normal",
                  className: eO.CU,
                  children: eS.intl.format(eS.t.Q1scdE, {
                      helpdeskArticle: U.A.getArticleURL(ey.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eM = (e) => {
        let {
                product: t,
                user: a,
                category: i,
                shouldCheckoutWithOrbs: l,
                tab: d,
                onClose: x,
                returnRef: f,
                previewingVariantIndexProps: v,
                selectedVariantIndex: A,
                activeBundleSlide: C,
            } = e,
            { analyticsLocations: j } = (0, g.Ay)(),
            N = D.Ay.canUseCollectibles(a),
            { previewingVariantIndex: b, handleEntering: I, handleLeaving: E } = v,
            P = (0, eA.q)(t, b),
            S = (0, Z.rb)(t, A);
        c()(null != S, "Selected product should not be null");
        let O = (0, J.h)(t),
            { isPurchased: k, isPartiallyOwnedBundle: B } = (0, J.h)(S),
            { isDisabled: M, disabledReason: U } = (0, q.I)(S.skuId),
            H = (0, z.Zu)({ product: S, isPartiallyOwnedBundle: B, isPurchased: k }),
            Y = (0, u.bG)([F.A], () => F.A.isClaiming === S?.skuId),
            Q = (0, h.Ay)(),
            et = (0, p.Mw)(Q),
            ea = (0, z.G0)(S),
            en = (0, z.yt)(S, ey.lid.DEFAULT),
            eu = en?.amount === 0,
            { firstAvatarDecoration: em } = (0, K.f5)(P ?? S),
            ex = r.useMemo(() => (0, z.fT)(S, N), [S, N]),
            eg = (0, X.VG)(t),
            ev = (0, eN.X)(S),
            { enabled: ej } = (0, w.Z)({ location: "collectibles_shop_product_details_modal" }),
            eb = (0, $.r)(S, !1),
            ek = (0, eC.V_)(t),
            ew = null != ek,
            eM = (t.variants?.length ?? 0) > 8,
            eU = (0, W.W)("CollectiblesShopProductDetailsModal"),
            eD = d === eR.G2.ORBS && l ? ep.Hi.ORBS : eU ? ep.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: eG,
                isOrbExclusive: eV,
                hasSufficientOrbs: eF,
            } = (0, eI.F)({ product: S, isPremiumUser: N, hasDiscountOffer: ew, prioritizedCurrency: eD }),
            eH = r.useCallback(
                () => (0, T.A)({ skuId: S.skuId, analyticsLocations: j, onClose: (e) => (e ? x() : (0, eP.tE)()) }),
                [j, x, S.skuId],
            );
        return (
            r.useEffect(() => {
                if (null != em) return (0, y.Dx)(em), () => (0, y.Dx)(void 0);
            }, [em]),
            (0, n.jsxs)("div", {
                className: eO.qA,
                children: [
                    (0, n.jsx)("div", { className: eO.gn, children: (0, n.jsx)(ei.A, { category: i }) }),
                    (0, n.jsx)(eL, { product: P ?? S, user: a, activeSlide: C }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsxs)("div", {
                                className: eO.h_,
                                children: [
                                    (0, n.jsx)(er.A, { product: S, isDarkText: !et, isOrbExclusive: eV }),
                                    (0, n.jsx)(_.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eO.v7,
                                        children: eg,
                                    }),
                                    (0, n.jsx)(_.Text, { variant: "text-sm/normal", children: eb }),
                                    (0, n.jsx)(eB, { skuId: S.skuId }),
                                    O.isPurchased || O.isPartiallyOwnedBundle
                                        ? (0, n.jsx)(ee.c, { className: eO.On, isPartiallyPurchased: B })
                                        : ea
                                          ? (0, n.jsx)(_.Text, {
                                                variant: "text-md/semibold",
                                                className: eO.On,
                                                children: eS.intl.string(eS.t.rt69oo),
                                            })
                                          : ej
                                            ? (0, n.jsx)(ef.B, {
                                                  prices: eG,
                                                  product: S,
                                                  isPremiumUser: N,
                                                  discount: ex,
                                                  hasSufficientOrbs: eF,
                                                  isProductDisabled: M,
                                                  discountOfferAmount: ek,
                                              })
                                            : (0, n.jsxs)("div", {
                                                  className: eO.pw,
                                                  children: [
                                                      (0, n.jsx)(el.A, {
                                                          product: S,
                                                          discount: ex,
                                                          isPremiumUser: N,
                                                          hideStrikethroughPrice: !N || ew,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: ek,
                                                      }),
                                                      N || ew ? null : (0, n.jsx)(ec.A, { product: S }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, Z.B1)(t) &&
                                (0, n.jsx)(_.M1G, {
                                    children: (0, n.jsxs)("div", {
                                        className: s()(eO.Oj, { [eO.OJ]: eM }),
                                        children: [
                                            eM &&
                                                (0, n.jsx)(e_.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: b,
                                                    className: eO.L$,
                                                }),
                                            (0, n.jsx)(eh.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: I,
                                                onVariantExit: E,
                                                wrap: !0,
                                            }),
                                            !eM &&
                                                (0, n.jsx)(e_.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: b,
                                                    className: eO.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== U &&
                                (0, n.jsx)(_.Text, { variant: "text-xs/normal", className: eO.H$, children: U }),
                            (0, n.jsx)(_.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (ea && !N && !eu) {
                                        let e;
                                        return (
                                            (e = eS.intl.string(eS.t.sEAnVH)),
                                            (0, n.jsx)(R.A, {
                                                subscriptionTier: eE.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: eo.M,
                                                onSubscribeModalClose: () => {
                                                    (0, eo.t)({
                                                        product: S,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: f,
                                                        analyticsLocations: j,
                                                        tab: d,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return H
                                        ? k
                                            ? ev
                                                ? (0, n.jsxs)(_.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, n.jsx)(ed.A, { product: S, onSuccess: x }),
                                                          (0, n.jsx)(es.A, { primary: !0, product: S, onSuccess: x }),
                                                      ],
                                                  })
                                                : (0, n.jsx)(ed.A, { product: S, onSuccess: x })
                                            : ea
                                              ? (0, n.jsx)(_.Button, {
                                                    loading: Y,
                                                    loadingStartedLabel: eS.intl.string(eS.t["TYw+9s"]),
                                                    loadingFinishedLabel: eS.intl.string(eS.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, V.iJ)(S.skuId),
                                                            x(),
                                                            (0, eT.A)({
                                                                product: S,
                                                                analyticsLocations: j,
                                                                purchaseType: eR.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eS.intl.string(eS.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, n.jsx)(n.Fragment, {
                                                    children: eG.map((e, t) => {
                                                        let a,
                                                            r = 0 === t;
                                                        if (e.currency === eP.Yr.DISCORD_ORB) {
                                                            let t, a, i, s;
                                                            return (
                                                                (t = M
                                                                    ? eS.intl.string(eS.t.cTdr3x)
                                                                    : eS.intl.string(eS.t.zqh7ZM)),
                                                                (a = !eF || M),
                                                                (i = eS.intl.formatToPlainString(eS.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (s = a ? `${i}, ${t}` : i),
                                                                (0, n.jsx)(m.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: a,
                                                                    "aria-label": !1,
                                                                    children: (0, n.jsx)(_.Button, {
                                                                        variant: r ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            (0, L.B4)({
                                                                                skuId: S.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    let { entitlements: t } = e;
                                                                                    (0, V.gB)(),
                                                                                        x(),
                                                                                        (0, eT.A)({
                                                                                            product: S,
                                                                                            analyticsLocations: j,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: eR.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: j,
                                                                            });
                                                                        },
                                                                        disabled: a,
                                                                        "aria-label": s,
                                                                        text: eS.intl.format(eS.t.lOtBOI, {
                                                                            orbPrice: e.amount,
                                                                            orbIconHook: () =>
                                                                                (0, n.jsx)(_.Cp8, {
                                                                                    className: eO.fN,
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
                                                            (a = (0, z.aw)(S)
                                                                ? eS.intl.string(eS.t.V1AWw0)
                                                                : S.type === o.R.PROFILE_EFFECT
                                                                  ? eS.intl.string(eS.t.kAeDcK)
                                                                  : S.type === o.R.NAMEPLATE
                                                                    ? eS.intl.string(eS.t.H3vhqU)
                                                                    : eS.intl.string(eS.t.AQ0Veg)),
                                                            ew
                                                                ? (a = eS.intl.formatToPlainString(eS.t["5U5RB5"], {
                                                                      discountOfferAmount: ek,
                                                                  }))
                                                                : ej &&
                                                                  (a = eS.intl.formatToPlainString(eS.t["cNSL/j"], {
                                                                      price: (0, G.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, n.jsxs)(_.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, n.jsx)(_.Button, {
                                                                        variant: r ? "primary" : "secondary",
                                                                        onClick: eH,
                                                                        text: a,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    ev &&
                                                                        (0, n.jsx)(es.A, {
                                                                            primary: r,
                                                                            product: S,
                                                                            onSuccess: x,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : ev
                                          ? (0, n.jsx)(es.A, { primary: !0, product: S, onSuccess: x, fullWidth: !0 })
                                          : null;
                                })(),
                            }),
                            (0, n.jsx)(_.Text, {
                                className: s()(eO.ed, !et && eO.un),
                                variant: "text-xxs/normal",
                                children: ea && !k ? eS.intl.string(eS.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eU = (e) => {
        let { user: t, innerClassName: a } = e;
        return (0, n.jsx)("div", {
            className: eO.mV,
            children: (0, n.jsx)(v.A, {
                avatar: (0, n.jsx)(_.euF, {
                    src: t.avatarSrc,
                    size: _._3J.SIZE_32,
                    "aria-label": t.name,
                    status: _.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: s()(eO.$L, a),
            }),
        });
    },
    eD = (e) => {
        let { user: t, nameplate: a, avatarDecoration: r } = e,
            i = (0, b.Ov)();
        return (0, n.jsx)("div", {
            className: eO.nJ,
            role: "img",
            "aria-label": eS.intl.string(eS.t.SZeUdR),
            children: (0, n.jsxs)(_.M1G, {
                children: [
                    (0, n.jsx)(eU, { user: i.mallow, innerClassName: eO.ab }),
                    (0, n.jsxs)(_.Text, {
                        variant: "text-sm/semibold",
                        className: eO.OS,
                        children: [eS.intl.string(eS.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, n.jsx)(eU, { user: i.phibi, innerClassName: eO.e9 }),
                    (0, n.jsx)("div", {
                        className: eO.mV,
                        children: (0, n.jsx)(I.A, {
                            className: eO.M4,
                            innerClassName: eO.e9,
                            user: t,
                            nameplate: a,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: r,
                        }),
                    }),
                    (0, n.jsx)(eU, { user: i.locke, innerClassName: eO.e9 }),
                    (0, n.jsxs)(_.Text, {
                        variant: "text-sm/semibold",
                        className: eO.OS,
                        children: [eS.intl.string(eS.t["NG43/6"]), " - 12"],
                    }),
                    (0, n.jsx)(eU, { user: i.boom, innerClassName: eO.bD }),
                    (0, n.jsx)(eU, { user: i.cherry, innerClassName: eO.bD }),
                ],
            }),
        });
    },
    eG = (e) => {
        let { product: t, user: a, activeBundleSlide: r, isTransitioning: i } = e,
            l = (0, u.bG)([x.A], () => x.A.useReducedMotion),
            c = D.Ay.canUsePremiumProfileCustomization(a),
            { pendingAvatar: d, ...m } = (0, u.cf)([O.A], () => O.A.getPendingChanges()),
            p = (0, S.V7)({ userId: a.id, image: d }),
            _ = t.type === o.R.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: g, firstNameplate: v } = (0, K.f5)(t),
            A = null != g,
            C = () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(E.A, {
                            ...m,
                            pendingAvatar: p,
                            user: a,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: f,
                            pendingProfileEffect: g,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: _,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        _ && (0, n.jsx)(eV, { user: a }),
                    ],
                }),
            j = (e) => (0, n.jsx)(eD, { user: a, nameplate: e, avatarDecoration: f });
        if (t.type === o.R.BUNDLE) {
            if (!(0, Y.Wb)(t))
                return (0, n.jsx)("div", {
                    className: eO.RA,
                    children: (0, n.jsx)("div", { className: eO.bo, children: C() }),
                });
            {
                let e = r ?? 0,
                    a = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    d = c?.type !== a?.type && !l;
                return a.type === o.R.NAMEPLATE
                    ? (0, n.jsx)("div", { className: s()(eO.Zj, i && d ? eO.p2 : ""), children: j(a) })
                    : (0, n.jsx)("div", { className: s()(eO.Ak, i && d ? eO.p2 : ""), children: C() });
            }
        }
        return null != v
            ? (0, n.jsx)("div", { className: eO.Zj, children: j(v) })
            : (0, n.jsx)("div", { className: h?.type === o.R.AVATAR_DECORATION ? eO.RA : eO.Ak, children: C() });
    },
    eV = (e) => {
        let { user: t } = e,
            a = ((e) => {
                let { author: t } = e;
                return (0, A.rh)({
                    ...(0, C.Ay)({ author: t, channelId: "1337", content: eS.intl.string(eS.t.d5YwK5) }),
                    state: ey.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, n.jsx)("div", {
            role: "img",
            "aria-label": eS.intl.string(eS.t["TN+ZvB"]),
            children: (0, n.jsx)(_.M1G, {
                children: (0, n.jsxs)(_.ZpM, {
                    className: eO.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, n.jsx)(N.A, { className: eO.G5, author: (0, j.p_)(a), message: a }, a.id),
                        (0, n.jsxs)("div", {
                            className: eO.lG,
                            children: [
                                (0, n.jsx)(_.U1e, { size: "md", color: "currentColor", className: eO.hq }),
                                (0, n.jsx)(_.nm2, { size: "md", color: "currentColor", className: eO.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eF = (e) => {
        let {
                transitionState: t,
                onClose: a,
                product: i,
                category: l,
                returnRef: m,
                analyticsSource: p,
                analyticsLocations: h,
                shouldCheckoutWithOrbs: x,
                tab: v,
            } = e,
            A = (0, u.bG)([B.default], () => B.default.getCurrentUser()),
            C = (0, eb.f)(i),
            { previewingVariantIndex: j } = C,
            N = (0, H.Q)(i),
            b = (0, eA.q)(i, j),
            I = (0, Z.rb)(i, N);
        c()(null != I, "Selected product should not be null");
        let { analyticsLocations: T } = (0, g.Ay)([...h, f.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.Yr)(I.skuId);
        let R = (0, ej.U1)(l);
        r.useEffect(() => {
            null != A && (0, k.A)(A.id, A.getAvatarURL(void 0, 80));
        }, [A]);
        let y = r.useMemo(() => (0, z.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            M.default.track(ey.HAw.OPEN_MODAL, {
                type: ey.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: T,
                sku_id: I.skuId,
                product_type: y,
            }),
                (0, V.RD)(I.skuId);
        }, [p, T, I.skuId, y]);
        let E = (0, L.o6)(),
            P = t === _.ip4.EXITING,
            S = (0, eC.$R)(i),
            O = S?.amount,
            w = null != O && (S?.discountId === eE.eR || S?.discountId === eE.Qz),
            U = r.useMemo(() => ((0, z.aw)(I) ? I.items.length : 0), [I]),
            { activeSlide: D, isTransitioning: G } = (0, Q.X)({ slideCount: U, intervalMs: 5e3 });
        return null == A
            ? null
            : (0, n.jsx)(g.f5, {
                  value: T,
                  children: (0, n.jsxs)(_.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eO.CR,
                      returnRef: m,
                      transitionState: t,
                      size: _.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, n.jsxs)(_.$mQ, {
                              "data-migration-pending": !0,
                              className: eO.jE,
                              children: [
                                  (0, n.jsx)(eM, {
                                      user: A,
                                      product: i,
                                      category: l,
                                      onClose: a,
                                      previewingVariantIndexProps: C,
                                      selectedVariantIndex: N,
                                      shouldCheckoutWithOrbs: x,
                                      tab: v,
                                      activeBundleSlide: D,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: s()(
                                          eO.i1,
                                          I.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                              ? eO.bF
                                              : I.type === o.R.AVATAR_DECORATION
                                                ? eO.Jq
                                                : eO.eF,
                                      ),
                                      style: { backgroundImage: `url(${R})` },
                                      children: [
                                          (0, eR.pQ)(i.skuId)
                                              ? i.skuId === eR.Dp.ORB_PROFILE_BADGE
                                                  ? E || P
                                                      ? null
                                                      : (0, n.jsx)(em.z, { user: A })
                                                  : i.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, n.jsx)(eu.I, {})
                                                    : (0, n.jsx)(ex.B, { product: i, className: eO.Ms })
                                              : (0, n.jsx)(eG, {
                                                    user: A,
                                                    product: b ?? I,
                                                    activeBundleSlide: D,
                                                    isTransitioning: G,
                                                }),
                                          (0, n.jsxs)("div", {
                                              className: eO.VG,
                                              children: [
                                                  (0, n.jsx)(eg.R, {
                                                      product: i,
                                                      selectedVariantIndex: N,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, n.jsx)(et.V, { skuId: I.skuId, tab: v }),
                                                  (0, n.jsx)(_.K0, {
                                                      "aria-label": eS.intl.string(eS.t.cpT0Cq),
                                                      onClick: a,
                                                      icon: _.d$L,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          w &&
                              (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsxs)(_.jlY, {
                                      "data-migration-pending": !0,
                                      className: eO.Hx,
                                      children: [
                                          (0, n.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eO.OC,
                                          }),
                                          (0, n.jsxs)("div", {
                                              className: eO.do,
                                              children: [
                                                  (0, n.jsx)(_.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eO.Q2,
                                                      children: eS.intl.format(eS.t["78ph4b"], {
                                                          discountOfferAmount: O,
                                                      }),
                                                  }),
                                                  S?.expiresAt != null && (0, n.jsx)(ea.e, { endDate: S.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
