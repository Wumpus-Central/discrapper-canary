n.d(t, { default: () => eH });
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(284009),
    o = n.n(s),
    c = n(575593),
    d = n(334279),
    u = n(417597),
    m = n(990078),
    h = n(582754),
    p = n(397927),
    x = n(736653),
    f = n(775602),
    v = n(793574),
    _ = n(688810),
    g = n(262295),
    A = n(141468),
    j = n(963852),
    C = n(763754),
    N = n(20851),
    b = n(369496),
    R = n(550111),
    I = n(44120),
    T = n(465794),
    E = n(287070),
    y = n(331402),
    P = n(101058),
    O = n(84540),
    k = n(836602),
    S = n(576622),
    w = n(151252),
    L = n(652165),
    B = n(287809),
    U = n(954571),
    M = n(975571),
    V = n(927578),
    D = n(580630),
    G = n(979286),
    H = n(4227),
    F = n(298072),
    z = n(993408),
    W = n(940980),
    $ = n(495565),
    q = n(740076),
    J = n(466459),
    K = n(442759),
    Y = n(623373),
    Z = n(660653),
    X = n(536572),
    Q = n(778992),
    ee = n(49620),
    et = n(586445),
    en = n(854818),
    er = n(177366),
    ea = n(11606),
    ei = n(203312),
    el = n(878112),
    es = n(501664),
    eo = n(882342),
    ec = n(572595),
    ed = n(641405),
    eu = n(812016),
    em = n(184659),
    eh = n(561769),
    ep = n(63574),
    ex = n(364616),
    ef = n(846957),
    ev = n(293477),
    e_ = n(139146),
    eg = n(929283),
    eA = n(827066),
    ej = n(525723),
    eC = n(212407),
    eN = n(347722),
    eb = n(935094),
    eR = n(57020),
    eI = n(61750),
    eT = n(758836),
    eE = n(652215),
    ey = n(788868),
    eP = n(818348),
    eO = n(985018),
    ek = n(235980);
let eS = (e) => {
        let { item: t, product: n, user: i } = e,
            l = a.useRef(null),
            s = (0, z.aw)(n),
            { firstAvatarDecoration: o } = (0, K.f5)(n);
        return t.type === c.R.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: s ? ek.X2 : ek.h1,
                  children: (0, r.jsx)(eg.i, { user: i, item: t, isHighlighted: !0 }),
              })
            : t.type === c.R.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: s ? ek.ME : ek.sm,
                    ref: l,
                    children: (0, r.jsx)(y.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === c.R.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: l,
                      className: ek.Dz,
                      children: (0, r.jsx)(R.A, {
                          className: ek.M4,
                          nameplate: t,
                          user: i,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: o,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    ew = (e) => {
        let { product: t, user: n, activeSlide: a = 0 } = e,
            i = t.items.length;
        return (0, r.jsx)("div", {
            className: ek.g4,
            children: (0, r.jsx)(p.tN_, {
                activeSlide: String(a),
                children: t.items.map((e, a) => {
                    let l = String(a),
                        s = null != t.bundledProducts ? t.bundledProducts[a] : void 0,
                        o = `(${a + 1}/${i})`;
                    return (0, r.jsx)(
                        p.q7S,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: ek.Kg,
                                children: [
                                    (0, r.jsx)(eS, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: ek.gx,
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
    eL = (e) => {
        let { product: t, user: n, activeSlide: a } = e;
        return (0, z.aw)(t)
            ? (0, r.jsx)(ew, { product: t, user: n, activeSlide: a })
            : (0, eT.pQ)(t.skuId)
              ? (0, r.jsx)(ef.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(eS, { item: t.items[0], product: t, user: n })
                : null;
    },
    eB = (e) => {
        let { skuId: t } = e;
        return t === d.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(p.Text, {
                  variant: "text-sm/normal",
                  className: ek.CU,
                  children: eO.intl.format(eO.t.Q1scdE, {
                      helpdeskArticle: M.A.getArticleURL(eE.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eU = (e) => {
        let {
                product: t,
                user: n,
                category: i,
                shouldCheckoutWithOrbs: s,
                tab: d,
                onClose: f,
                returnRef: v,
                previewingVariantIndexProps: g,
                selectedVariantIndex: A,
                activeBundleSlide: j,
            } = e,
            { analyticsLocations: C } = (0, _.Ay)(),
            N = V.Ay.canUseCollectibles(n),
            { previewingVariantIndex: b, handleEntering: R, handleLeaving: E } = g,
            y = (0, eA.q)(t, b),
            P = (0, Y.rb)(t, A);
        o()(null != P, "Selected product should not be null");
        let k = (0, J.h)(t),
            { isPurchased: S, isPartiallyOwnedBundle: B } = (0, J.h)(P),
            { isDisabled: U, disabledReason: M } = (0, q.I)(P.skuId),
            F = (0, z.Zu)({ product: P, isPartiallyOwnedBundle: B, isPurchased: S }),
            Z = (0, u.bG)([H.A], () => H.A.isClaiming === P?.skuId),
            Q = (0, x.Ay)(),
            et = (0, h.Mw)(Q),
            en = (0, z.G0)(P),
            er = (0, z.yt)(P, eE.lid.DEFAULT),
            eu = er?.amount === 0,
            { firstAvatarDecoration: em } = (0, K.f5)(y ?? P),
            ef = a.useMemo(() => (0, z.fT)(P, N), [P, N]),
            e_ = (0, X.VG)(t),
            eg = (0, eN.X)(P),
            { enabled: eC } = (0, w.Z)({ location: "collectibles_shop_product_details_modal" }),
            eb = (0, $.r)(P, !1),
            eS = (0, ej.V_)(t),
            ew = null != eS,
            eU = (t.variants?.length ?? 0) > 8,
            eM = (0, W.W)("CollectiblesShopProductDetailsModal"),
            eV = d === eT.G2.ORBS && s ? eh.Hi.ORBS : eM ? eh.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: eD,
                isOrbExclusive: eG,
                hasSufficientOrbs: eH,
            } = (0, eR.F)({ product: P, isPremiumUser: N, hasDiscountOffer: ew, prioritizedCurrency: eV }),
            eF = a.useCallback(
                () => (0, I.A)({ skuId: P.skuId, analyticsLocations: C, onClose: (e) => (e ? f() : (0, eP.tE)()) }),
                [C, f, P.skuId],
            );
        return (
            a.useEffect(() => {
                if (null != em) return (0, O.p)({ avatarDecoration: em }), () => (0, O.p)({ avatarDecoration: void 0 });
            }, [em]),
            (0, r.jsxs)("div", {
                className: ek.qA,
                children: [
                    (0, r.jsx)("div", { className: ek.gn, children: (0, r.jsx)(ei.A, { category: i }) }),
                    (0, r.jsx)(eL, { product: y ?? P, user: n, activeSlide: j }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: ek.h_,
                                children: [
                                    (0, r.jsx)(ea.A, { product: P, isDarkText: !et, isOrbExclusive: eG }),
                                    (0, r.jsx)(p.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: ek.v7,
                                        children: e_,
                                    }),
                                    (0, r.jsx)(p.Text, { variant: "text-sm/normal", children: eb }),
                                    (0, r.jsx)(eB, { skuId: P.skuId }),
                                    k.isPurchased || k.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(ee.c, { className: ek.On, isPartiallyPurchased: B })
                                        : en
                                          ? (0, r.jsx)(p.Text, {
                                                variant: "text-md/semibold",
                                                className: ek.On,
                                                children: eO.intl.string(eO.t.rt69oo),
                                            })
                                          : eC
                                            ? (0, r.jsx)(ev.B, {
                                                  prices: eD,
                                                  product: P,
                                                  isPremiumUser: N,
                                                  discount: ef,
                                                  hasSufficientOrbs: eH,
                                                  isProductDisabled: U,
                                                  discountOfferAmount: eS,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: ek.pw,
                                                  children: [
                                                      (0, r.jsx)(es.A, {
                                                          product: P,
                                                          discount: ef,
                                                          isPremiumUser: N,
                                                          hideStrikethroughPrice: !N || ew,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eS,
                                                      }),
                                                      N || ew ? null : (0, r.jsx)(eo.A, { product: P }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, Y.B1)(t) &&
                                (0, r.jsx)(p.M1G, {
                                    children: (0, r.jsxs)("div", {
                                        className: l()(ek.Oj, { [ek.OJ]: eU }),
                                        children: [
                                            eU &&
                                                (0, r.jsx)(ep.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: b,
                                                    className: ek.L$,
                                                }),
                                            (0, r.jsx)(ex.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: R,
                                                onVariantExit: E,
                                                wrap: !0,
                                            }),
                                            !eU &&
                                                (0, r.jsx)(ep.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: b,
                                                    className: ek.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== M &&
                                (0, r.jsx)(p.Text, { variant: "text-xs/normal", className: ek.H$, children: M }),
                            (0, r.jsx)(p.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (en && !N && !eu) {
                                        let e;
                                        return (
                                            (e = eO.intl.string(eO.t.sEAnVH)),
                                            (0, r.jsx)(T.A, {
                                                subscriptionTier: ey.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: ec.M,
                                                onSubscribeModalClose: () => {
                                                    (0, ec.t)({
                                                        product: P,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: v,
                                                        analyticsLocations: C,
                                                        tab: d,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return F
                                        ? S
                                            ? eg
                                                ? (0, r.jsxs)(p.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(ed.A, { product: P, onSuccess: f }),
                                                          (0, r.jsx)(el.A, { primary: !0, product: P, onSuccess: f }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(ed.A, { product: P, onSuccess: f })
                                            : en
                                              ? (0, r.jsx)(p.Button, {
                                                    loading: Z,
                                                    loadingStartedLabel: eO.intl.string(eO.t["TYw+9s"]),
                                                    loadingFinishedLabel: eO.intl.string(eO.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, G.iJ)(P.skuId),
                                                            f(),
                                                            (0, eI.A)({
                                                                product: P,
                                                                analyticsLocations: C,
                                                                purchaseType: eT.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eO.intl.string(eO.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: eD.map((e, t) => {
                                                        let n,
                                                            a = 0 === t;
                                                        if (e.currency === eP.Yr.DISCORD_ORB) {
                                                            let t, n, i, l;
                                                            return (
                                                                (t = U
                                                                    ? eO.intl.string(eO.t.cTdr3x)
                                                                    : eO.intl.string(eO.t.zqh7ZM)),
                                                                (n = !eH || U),
                                                                (i = eO.intl.formatToPlainString(eO.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (l = n ? `${i}, ${t}` : i),
                                                                (0, r.jsx)(m.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, r.jsx)(p.Button, {
                                                                        variant: a ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            (0, L.B4)({
                                                                                skuId: P.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    let { entitlements: t } = e;
                                                                                    (0, G.gB)(),
                                                                                        f(),
                                                                                        (0, eI.A)({
                                                                                            product: P,
                                                                                            analyticsLocations: C,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: eT.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: C,
                                                                            });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": l,
                                                                        text: eO.intl.format(eO.t.lOtBOI, {
                                                                            orbPrice: e.amount,
                                                                            orbIconHook: () =>
                                                                                (0, r.jsx)(p.Cp8, {
                                                                                    className: ek.fN,
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
                                                            (n = (0, z.aw)(P)
                                                                ? eO.intl.string(eO.t.V1AWw0)
                                                                : P.type === c.R.PROFILE_EFFECT
                                                                  ? eO.intl.string(eO.t.kAeDcK)
                                                                  : P.type === c.R.NAMEPLATE
                                                                    ? eO.intl.string(eO.t.H3vhqU)
                                                                    : eO.intl.string(eO.t.AQ0Veg)),
                                                            ew
                                                                ? (n = eO.intl.formatToPlainString(eO.t["5U5RB5"], {
                                                                      discountOfferAmount: eS,
                                                                  }))
                                                                : eC &&
                                                                  (n = eO.intl.formatToPlainString(eO.t["cNSL/j"], {
                                                                      price: (0, D.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(p.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(p.Button, {
                                                                        variant: a ? "primary" : "secondary",
                                                                        onClick: eF,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eg &&
                                                                        (0, r.jsx)(el.A, {
                                                                            primary: a,
                                                                            product: P,
                                                                            onSuccess: f,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eg
                                          ? (0, r.jsx)(el.A, { primary: !0, product: P, onSuccess: f, fullWidth: !0 })
                                          : null;
                                })(),
                            }),
                            (0, r.jsx)(p.Text, {
                                className: l()(ek.ed, !et && ek.un),
                                variant: "text-xxs/normal",
                                children: en && !S ? eO.intl.string(eO.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eM = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: ek.mV,
            children: (0, r.jsx)(g.A, {
                avatar: (0, r.jsx)(p.euF, {
                    src: t.avatarSrc,
                    size: p._3J.SIZE_32,
                    "aria-label": t.name,
                    status: p.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(ek.$L, n),
            }),
        });
    },
    eV = (e) => {
        let { user: t, nameplate: n, avatarDecoration: a } = e,
            i = (0, b.Ov)();
        return (0, r.jsx)("div", {
            className: ek.nJ,
            role: "img",
            "aria-label": eO.intl.string(eO.t.SZeUdR),
            children: (0, r.jsxs)(p.M1G, {
                children: [
                    (0, r.jsx)(eM, { user: i.mallow, innerClassName: ek.ab }),
                    (0, r.jsxs)(p.Text, {
                        variant: "text-sm/semibold",
                        className: ek.OS,
                        children: [eO.intl.string(eO.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eM, { user: i.phibi, innerClassName: ek.e9 }),
                    (0, r.jsx)("div", {
                        className: ek.mV,
                        children: (0, r.jsx)(R.A, {
                            className: ek.M4,
                            innerClassName: ek.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: a,
                        }),
                    }),
                    (0, r.jsx)(eM, { user: i.locke, innerClassName: ek.e9 }),
                    (0, r.jsxs)(p.Text, {
                        variant: "text-sm/semibold",
                        className: ek.OS,
                        children: [eO.intl.string(eO.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eM, { user: i.boom, innerClassName: ek.bD }),
                    (0, r.jsx)(eM, { user: i.cherry, innerClassName: ek.bD }),
                ],
            }),
        });
    },
    eD = (e) => {
        let { product: t, user: n, activeBundleSlide: a, isTransitioning: i } = e,
            s = (0, u.bG)([f.A], () => f.A.useReducedMotion),
            o = V.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: d, ...m } = (0, u.cf)([k.A], () => k.A.getPendingChanges()),
            h = (0, P.V7)({ userId: n.id, image: d }),
            p = t.type === c.R.AVATAR_DECORATION,
            [x] = t.items,
            { firstAvatarDecoration: v, firstProfileEffect: _, firstNameplate: g } = (0, K.f5)(t),
            A = null != _,
            j = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(E.A, {
                            ...m,
                            pendingAvatar: h,
                            user: n,
                            canUsePremiumCustomization: o,
                            pendingAvatarDecoration: v,
                            pendingProfileEffect: _,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: p,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        p && (0, r.jsx)(eG, { user: n }),
                    ],
                }),
            C = (e) => (0, r.jsx)(eV, { user: n, nameplate: e, avatarDecoration: v });
        if (t.type === c.R.BUNDLE) {
            if (!(0, Z.Wb)(t))
                return (0, r.jsx)("div", {
                    className: ek.RA,
                    children: (0, r.jsx)("div", { className: ek.bo, children: j() }),
                });
            {
                let e = a ?? 0,
                    n = t.items[e],
                    o = t.items[Math.max(0, e - 1)],
                    d = o?.type !== n?.type && !s;
                return n.type === c.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: l()(ek.Zj, i && d ? ek.p2 : ""), children: C(n) })
                    : (0, r.jsx)("div", { className: l()(ek.Ak, i && d ? ek.p2 : ""), children: j() });
            }
        }
        return null != g
            ? (0, r.jsx)("div", { className: ek.Zj, children: C(g) })
            : (0, r.jsx)("div", { className: x?.type === c.R.AVATAR_DECORATION ? ek.RA : ek.Ak, children: j() });
    },
    eG = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, A.rh)({
                    ...(0, j.Ay)({ author: t, channelId: "1337", content: eO.intl.string(eO.t.d5YwK5) }),
                    state: eE.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eO.intl.string(eO.t["TN+ZvB"]),
            children: (0, r.jsx)(p.M1G, {
                children: (0, r.jsxs)(p.ZpM, {
                    className: ek.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(N.A, { className: ek.G5, author: (0, C.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: ek.lG,
                            children: [
                                (0, r.jsx)(p.U1e, { size: "md", color: "currentColor", className: ek.hq }),
                                (0, r.jsx)(p.nm2, { size: "md", color: "currentColor", className: ek.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eH = (e) => {
        let {
                transitionState: t,
                onClose: n,
                product: i,
                category: s,
                returnRef: m,
                analyticsSource: h,
                analyticsLocations: x,
                shouldCheckoutWithOrbs: f,
                tab: g,
            } = e,
            A = (0, u.bG)([B.default], () => B.default.getCurrentUser()),
            j = (0, eb.f)(i),
            { previewingVariantIndex: C } = j,
            N = (0, F.Q)(i),
            b = (0, eA.q)(i, C),
            R = (0, Y.rb)(i, N);
        o()(null != R, "Selected product should not be null");
        let { analyticsLocations: I } = (0, _.Ay)([...x, v.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.Yr)(R.skuId);
        let T = (0, eC.U1)(s);
        a.useEffect(() => {
            null != A && (0, S.A)(A.id, A.getAvatarURL(void 0, 80));
        }, [A]);
        let E = a.useMemo(() => (0, z.V6)(i.type, i.skuId), [i.type, i.skuId]);
        a.useEffect(() => {
            U.default.track(eE.HAw.OPEN_MODAL, {
                type: eE.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: I,
                sku_id: R.skuId,
                product_type: E,
            }),
                (0, G.RD)(R.skuId);
        }, [h, I, R.skuId, E]);
        let y = (0, L.o6)(),
            P = t === p.ip4.EXITING,
            O = (0, ej.$R)(i),
            k = O?.amount,
            w = null != k && (O?.discountId === ey.eR || O?.discountId === ey.Qz),
            M = a.useMemo(() => ((0, z.aw)(R) ? R.items.length : 0), [R]),
            { activeSlide: V, isTransitioning: D } = (0, Q.X)({ slideCount: M, intervalMs: 5e3 });
        return null == A
            ? null
            : (0, r.jsx)(_.f5, {
                  value: I,
                  children: (0, r.jsxs)(p.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: ek.CR,
                      returnRef: m,
                      transitionState: t,
                      size: p.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(p.$mQ, {
                              "data-migration-pending": !0,
                              className: ek.jE,
                              children: [
                                  (0, r.jsx)(eU, {
                                      user: A,
                                      product: i,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: j,
                                      selectedVariantIndex: N,
                                      shouldCheckoutWithOrbs: f,
                                      tab: g,
                                      activeBundleSlide: V,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          ek.i1,
                                          R.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                              ? ek.bF
                                              : R.type === c.R.AVATAR_DECORATION
                                                ? ek.Jq
                                                : ek.eF,
                                      ),
                                      style: { backgroundImage: `url(${T})` },
                                      children: [
                                          (0, eT.pQ)(i.skuId)
                                              ? i.skuId === eT.Dp.ORB_PROFILE_BADGE
                                                  ? y || P
                                                      ? null
                                                      : (0, r.jsx)(em.z, { user: A })
                                                  : i.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(eu.I, {})
                                                    : (0, r.jsx)(ef.B, { product: i, className: ek.Ms })
                                              : (0, r.jsx)(eD, {
                                                    user: A,
                                                    product: b ?? R,
                                                    activeBundleSlide: V,
                                                    isTransitioning: D,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: ek.VG,
                                              children: [
                                                  (0, r.jsx)(e_.R, {
                                                      product: i,
                                                      selectedVariantIndex: N,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, r.jsx)(et.V, { skuId: R.skuId, tab: g }),
                                                  (0, r.jsx)(p.K0, {
                                                      "aria-label": eO.intl.string(eO.t.cpT0Cq),
                                                      onClick: n,
                                                      icon: p.d$L,
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
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(p.jlY, {
                                      "data-migration-pending": !0,
                                      className: ek.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: ek.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: ek.do,
                                              children: [
                                                  (0, r.jsx)(p.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: ek.Q2,
                                                      children: eO.intl.format(eO.t["78ph4b"], {
                                                          discountOfferAmount: k,
                                                      }),
                                                  }),
                                                  O?.expiresAt != null && (0, r.jsx)(en.e, { endDate: O.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
