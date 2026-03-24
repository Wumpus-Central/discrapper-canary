"use strict";
r.d(t, { default: () => eV });
var n = r(627968),
    i = r(64700),
    s = r(503698),
    a = r.n(s),
    l = r(284009),
    c = r.n(l),
    o = r(575593),
    d = r(334279),
    u = r(417597),
    m = r(990078),
    h = r(582754),
    p = r(397927),
    x = r(736653),
    f = r(775602),
    v = r(793574),
    _ = r(688810),
    g = r(262295),
    A = r(141468),
    j = r(963852),
    N = r(763754),
    C = r(20851),
    b = r(369496),
    R = r(550111),
    I = r(44120),
    T = r(465794),
    E = r(287070),
    P = r(331402),
    y = r(101058),
    O = r(84540),
    S = r(836602),
    k = r(576622),
    w = r(151252),
    L = r(652165),
    B = r(287809),
    U = r(954571),
    M = r(975571),
    D = r(927578),
    G = r(580630),
    H = r(979286),
    V = r(4227),
    F = r(298072),
    z = r(993408),
    W = r(940980),
    $ = r(495565),
    q = r(740076),
    J = r(466459),
    K = r(442759),
    Z = r(623373),
    Y = r(660653),
    X = r(536572),
    Q = r(778992),
    ee = r(49620),
    et = r(586445),
    er = r(854818),
    en = r(177366),
    ei = r(11606),
    es = r(203312),
    ea = r(878112),
    el = r(501664),
    ec = r(882342),
    eo = r(572595),
    ed = r(641405),
    eu = r(812016),
    em = r(184659),
    eh = r(561769),
    ep = r(63574),
    ex = r(364616),
    ef = r(846957),
    ev = r(293477),
    e_ = r(139146),
    eg = r(929283),
    eA = r(827066),
    ej = r(525723),
    eN = r(212407),
    eC = r(347722),
    eb = r(935094),
    eR = r(57020),
    eI = r(61750),
    eT = r(758836),
    eE = r(652215),
    eP = r(788868),
    ey = r(818348),
    eO = r(985018),
    eS = r(484978);
let ek = (e) => {
        let { item: t, product: r, user: s } = e,
            a = i.useRef(null),
            l = (0, z.aw)(r),
            { firstAvatarDecoration: c } = (0, K.f5)(r);
        return t.type === o.R.AVATAR_DECORATION
            ? (0, n.jsx)("div", {
                  className: l ? eS.X2 : eS.h1,
                  children: (0, n.jsx)(eg.i, { user: s, item: t, isHighlighted: !0 }),
              })
            : t.type === o.R.PROFILE_EFFECT
              ? (0, n.jsx)("div", {
                    className: l ? eS.ME : eS.sm,
                    ref: a,
                    children: (0, n.jsx)(P.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === o.R.NAMEPLATE
                ? (0, n.jsx)("div", {
                      ref: a,
                      className: eS.Dz,
                      children: (0, n.jsx)(R.A, {
                          className: eS.M4,
                          nameplate: t,
                          user: s,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: c,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    ew = (e) => {
        let { product: t, user: r, activeSlide: i = 0 } = e,
            s = t.items.length;
        return (0, n.jsx)("div", {
            className: eS.g4,
            children: (0, n.jsx)(p.tN_, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        c = `(${i + 1}/${s})`;
                    return (0, n.jsx)(
                        p.q7S,
                        {
                            id: a,
                            children: (0, n.jsxs)("div", {
                                className: eS.Kg,
                                children: [
                                    (0, n.jsx)(ek, { item: e, product: t, user: r }),
                                    (0, n.jsxs)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eS.gx,
                                        children: [l?.name, " ", c],
                                    }),
                                ],
                            }),
                        },
                        a,
                    );
                }),
            }),
        });
    },
    eL = (e) => {
        let { product: t, user: r, activeSlide: i } = e;
        return (0, z.aw)(t)
            ? (0, n.jsx)(ew, { product: t, user: r, activeSlide: i })
            : (0, eT.pQ)(t.skuId)
              ? (0, n.jsx)(ef.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, n.jsx)(ek, { item: t.items[0], product: t, user: r })
                : null;
    },
    eB = (e) => {
        let { skuId: t } = e;
        return t === d.j.PREMIUM_TIER_2_3_DAY
            ? (0, n.jsx)(p.Text, {
                  variant: "text-sm/normal",
                  className: eS.CU,
                  children: eO.intl.format(eO.t.Q1scdE, {
                      helpdeskArticle: M.A.getArticleURL(eE.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eU = (e) => {
        let {
                product: t,
                user: r,
                category: s,
                shouldCheckoutWithOrbs: l,
                tab: d,
                onClose: f,
                returnRef: v,
                previewingVariantIndexProps: g,
                selectedVariantIndex: A,
                activeBundleSlide: j,
            } = e,
            { analyticsLocations: N } = (0, _.Ay)(),
            C = D.Ay.canUseCollectibles(r),
            { previewingVariantIndex: b, handleEntering: R, handleLeaving: E } = g,
            P = (0, eA.q)(t, b),
            y = (0, Z.rb)(t, A);
        c()(null != y, "Selected product should not be null");
        let S = (0, J.h)(t),
            { isPurchased: k, isPartiallyOwnedBundle: B } = (0, J.h)(y),
            { isDisabled: U, disabledReason: M } = (0, q.I)(y.skuId),
            F = (0, z.Zu)({ product: y, isPartiallyOwnedBundle: B, isPurchased: k }),
            Y = (0, u.bG)([V.A], () => V.A.isClaiming === y?.skuId),
            Q = (0, x.Ay)(),
            et = (0, h.Mw)(Q),
            er = (0, z.G0)(y),
            en = (0, z.yt)(y, eE.lid.DEFAULT),
            eu = en?.amount === 0,
            { firstAvatarDecoration: em } = (0, K.f5)(P ?? y),
            ef = i.useMemo(() => (0, z.fT)(y, C), [y, C]),
            e_ = (0, X.VG)(t),
            eg = (0, eC.X)(y),
            { enabled: eN } = (0, w.Z)({ location: "collectibles_shop_product_details_modal" }),
            eb = (0, $.r)(y, !1),
            ek = (0, ej.V_)(t),
            ew = null != ek,
            eU = (t.variants?.length ?? 0) > 8,
            eM = (0, W.W)("CollectiblesShopProductDetailsModal"),
            eD = d === eT.G2.ORBS && l ? eh.Hi.ORBS : eM ? eh.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: eG,
                isOrbExclusive: eH,
                hasSufficientOrbs: eV,
            } = (0, eR.F)({ product: y, isPremiumUser: C, hasDiscountOffer: ew, prioritizedCurrency: eD }),
            eF = i.useCallback(
                () => (0, I.A)({ skuId: y.skuId, analyticsLocations: N, onClose: (e) => (e ? f() : (0, ey.tE)()) }),
                [N, f, y.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != em) return (0, O.p)({ avatarDecoration: em }), () => (0, O.p)({ avatarDecoration: void 0 });
            }, [em]),
            (0, n.jsxs)("div", {
                className: eS.qA,
                children: [
                    (0, n.jsx)("div", { className: eS.gn, children: (0, n.jsx)(es.A, { category: s }) }),
                    (0, n.jsx)(eL, { product: P ?? y, user: r, activeSlide: j }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsxs)("div", {
                                className: eS.h_,
                                children: [
                                    (0, n.jsx)(ei.A, { product: y, isDarkText: !et, isOrbExclusive: eH }),
                                    (0, n.jsx)(p.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eS.v7,
                                        children: e_,
                                    }),
                                    (0, n.jsx)(p.Text, { variant: "text-sm/normal", children: eb }),
                                    (0, n.jsx)(eB, { skuId: y.skuId }),
                                    S.isPurchased || S.isPartiallyOwnedBundle
                                        ? (0, n.jsx)(ee.c, { className: eS.On, isPartiallyPurchased: B })
                                        : er
                                          ? (0, n.jsx)(p.Text, {
                                                variant: "text-md/semibold",
                                                className: eS.On,
                                                children: eO.intl.string(eO.t.rt69oo),
                                            })
                                          : eN
                                            ? (0, n.jsx)(ev.B, {
                                                  prices: eG,
                                                  product: y,
                                                  isPremiumUser: C,
                                                  discount: ef,
                                                  hasSufficientOrbs: eV,
                                                  isProductDisabled: U,
                                                  discountOfferAmount: ek,
                                              })
                                            : (0, n.jsxs)("div", {
                                                  className: eS.pw,
                                                  children: [
                                                      (0, n.jsx)(el.A, {
                                                          product: y,
                                                          discount: ef,
                                                          isPremiumUser: C,
                                                          hideStrikethroughPrice: !C || ew,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: ek,
                                                      }),
                                                      C || ew ? null : (0, n.jsx)(ec.A, { product: y }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, Z.B1)(t) &&
                                (0, n.jsx)(p.M1G, {
                                    children: (0, n.jsxs)("div", {
                                        className: a()(eS.Oj, { [eS.OJ]: eU }),
                                        children: [
                                            eU &&
                                                (0, n.jsx)(ep.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: b,
                                                    className: eS.L$,
                                                }),
                                            (0, n.jsx)(ex.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: R,
                                                onVariantExit: E,
                                                wrap: !0,
                                            }),
                                            !eU &&
                                                (0, n.jsx)(ep.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: b,
                                                    className: eS.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== M &&
                                (0, n.jsx)(p.Text, { variant: "text-xs/normal", className: eS.H$, children: M }),
                            (0, n.jsx)(p.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (er && !C && !eu) {
                                        let e;
                                        return (
                                            (e = eO.intl.string(eO.t.sEAnVH)),
                                            (0, n.jsx)(T.A, {
                                                subscriptionTier: eP.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: eo.M,
                                                onSubscribeModalClose: () => {
                                                    (0, eo.t)({
                                                        product: y,
                                                        category: s,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: v,
                                                        analyticsLocations: N,
                                                        tab: d,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return F
                                        ? k
                                            ? eg
                                                ? (0, n.jsxs)(p.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, n.jsx)(ed.A, { product: y, onSuccess: f }),
                                                          (0, n.jsx)(ea.A, { primary: !0, product: y, onSuccess: f }),
                                                      ],
                                                  })
                                                : (0, n.jsx)(ed.A, { product: y, onSuccess: f })
                                            : er
                                              ? (0, n.jsx)(p.Button, {
                                                    loading: Y,
                                                    loadingStartedLabel: eO.intl.string(eO.t["TYw+9s"]),
                                                    loadingFinishedLabel: eO.intl.string(eO.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, H.iJ)(y.skuId),
                                                            f(),
                                                            (0, eI.A)({
                                                                product: y,
                                                                analyticsLocations: N,
                                                                purchaseType: eT.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eO.intl.string(eO.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, n.jsx)(n.Fragment, {
                                                    children: eG.map((e, t) => {
                                                        let r,
                                                            i = 0 === t;
                                                        if (e.currency === ey.Yr.DISCORD_ORB) {
                                                            let t, r, s, a;
                                                            return (
                                                                (t = U
                                                                    ? eO.intl.string(eO.t.cTdr3x)
                                                                    : eO.intl.string(eO.t.zqh7ZM)),
                                                                (r = !eV || U),
                                                                (s = eO.intl.formatToPlainString(eO.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (a = r ? `${s}, ${t}` : s),
                                                                (0, n.jsx)(m.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: r,
                                                                    "aria-label": !1,
                                                                    children: (0, n.jsx)(p.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            (0, L.B4)({
                                                                                skuId: y.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    let { entitlements: t } = e;
                                                                                    (0, H.gB)(),
                                                                                        f(),
                                                                                        (0, eI.A)({
                                                                                            product: y,
                                                                                            analyticsLocations: N,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: eT.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: N,
                                                                            });
                                                                        },
                                                                        disabled: r,
                                                                        "aria-label": a,
                                                                        text: eO.intl.format(eO.t.lOtBOI, {
                                                                            orbPrice: e.amount,
                                                                            orbIconHook: () =>
                                                                                (0, n.jsx)(p.Cp8, {
                                                                                    className: eS.fN,
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
                                                            (r = (0, z.aw)(y)
                                                                ? eO.intl.string(eO.t.V1AWw0)
                                                                : y.type === o.R.PROFILE_EFFECT
                                                                  ? eO.intl.string(eO.t.kAeDcK)
                                                                  : y.type === o.R.NAMEPLATE
                                                                    ? eO.intl.string(eO.t.H3vhqU)
                                                                    : eO.intl.string(eO.t.AQ0Veg)),
                                                            ew
                                                                ? (r = eO.intl.formatToPlainString(eO.t["5U5RB5"], {
                                                                      discountOfferAmount: ek,
                                                                  }))
                                                                : eN &&
                                                                  (r = eO.intl.formatToPlainString(eO.t["cNSL/j"], {
                                                                      price: (0, G.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, n.jsxs)(p.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, n.jsx)(p.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: eF,
                                                                        text: r,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eg &&
                                                                        (0, n.jsx)(ea.A, {
                                                                            primary: i,
                                                                            product: y,
                                                                            onSuccess: f,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eg
                                          ? (0, n.jsx)(ea.A, { primary: !0, product: y, onSuccess: f, fullWidth: !0 })
                                          : null;
                                })(),
                            }),
                            (0, n.jsx)(p.Text, {
                                className: a()(eS.ed, !et && eS.un),
                                variant: "text-xxs/normal",
                                children: er && !k ? eO.intl.string(eO.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eM = (e) => {
        let { user: t, innerClassName: r } = e;
        return (0, n.jsx)("div", {
            className: eS.mV,
            children: (0, n.jsx)(g.A, {
                avatar: (0, n.jsx)(p.euF, {
                    src: t.avatarSrc,
                    size: p._3J.SIZE_32,
                    "aria-label": t.name,
                    status: p.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: a()(eS.$L, r),
            }),
        });
    },
    eD = (e) => {
        let { user: t, nameplate: r, avatarDecoration: i } = e,
            s = (0, b.Ov)();
        return (0, n.jsx)("div", {
            className: eS.nJ,
            role: "img",
            "aria-label": eO.intl.string(eO.t.SZeUdR),
            children: (0, n.jsxs)(p.M1G, {
                children: [
                    (0, n.jsx)(eM, { user: s.mallow, innerClassName: eS.ab }),
                    (0, n.jsxs)(p.Text, {
                        variant: "text-sm/semibold",
                        className: eS.OS,
                        children: [eO.intl.string(eO.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, n.jsx)(eM, { user: s.phibi, innerClassName: eS.e9 }),
                    (0, n.jsx)("div", {
                        className: eS.mV,
                        children: (0, n.jsx)(R.A, {
                            className: eS.M4,
                            innerClassName: eS.e9,
                            user: t,
                            nameplate: r,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, n.jsx)(eM, { user: s.locke, innerClassName: eS.e9 }),
                    (0, n.jsxs)(p.Text, {
                        variant: "text-sm/semibold",
                        className: eS.OS,
                        children: [eO.intl.string(eO.t["NG43/6"]), " - 12"],
                    }),
                    (0, n.jsx)(eM, { user: s.boom, innerClassName: eS.bD }),
                    (0, n.jsx)(eM, { user: s.cherry, innerClassName: eS.bD }),
                ],
            }),
        });
    },
    eG = (e) => {
        let { product: t, user: r, activeBundleSlide: i, isTransitioning: s } = e,
            l = (0, u.bG)([f.A], () => f.A.useReducedMotion),
            c = D.Ay.canUsePremiumProfileCustomization(r),
            { pendingAvatar: d, ...m } = (0, u.cf)([S.A], () => S.A.getPendingChanges()),
            h = (0, y.V7)({ userId: r.id, image: d }),
            p = t.type === o.R.AVATAR_DECORATION,
            [x] = t.items,
            { firstAvatarDecoration: v, firstProfileEffect: _, firstNameplate: g } = (0, K.f5)(t),
            A = null != _,
            j = () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(E.A, {
                            ...m,
                            pendingAvatar: h,
                            user: r,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: v,
                            pendingProfileEffect: _,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: p,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        p && (0, n.jsx)(eH, { user: r }),
                    ],
                }),
            N = (e) => (0, n.jsx)(eD, { user: r, nameplate: e, avatarDecoration: v });
        if (t.type === o.R.BUNDLE) {
            if (!(0, Y.Wb)(t))
                return (0, n.jsx)("div", {
                    className: eS.RA,
                    children: (0, n.jsx)("div", { className: eS.bo, children: j() }),
                });
            {
                let e = i ?? 0,
                    r = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    d = c?.type !== r?.type && !l;
                return r.type === o.R.NAMEPLATE
                    ? (0, n.jsx)("div", { className: a()(eS.Zj, s && d ? eS.p2 : ""), children: N(r) })
                    : (0, n.jsx)("div", { className: a()(eS.Ak, s && d ? eS.p2 : ""), children: j() });
            }
        }
        return null != g
            ? (0, n.jsx)("div", { className: eS.Zj, children: N(g) })
            : (0, n.jsx)("div", { className: x?.type === o.R.AVATAR_DECORATION ? eS.RA : eS.Ak, children: j() });
    },
    eH = (e) => {
        let { user: t } = e,
            r = ((e) => {
                let { author: t } = e;
                return (0, A.rh)({
                    ...(0, j.Ay)({ author: t, channelId: "1337", content: eO.intl.string(eO.t.d5YwK5) }),
                    state: eE.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, n.jsx)("div", {
            role: "img",
            "aria-label": eO.intl.string(eO.t["TN+ZvB"]),
            children: (0, n.jsx)(p.M1G, {
                children: (0, n.jsxs)(p.ZpM, {
                    className: eS.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, n.jsx)(C.A, { className: eS.G5, author: (0, N.p_)(r), message: r }, r.id),
                        (0, n.jsxs)("div", {
                            className: eS.lG,
                            children: [
                                (0, n.jsx)(p.U1e, { size: "md", color: "currentColor", className: eS.hq }),
                                (0, n.jsx)(p.nm2, { size: "md", color: "currentColor", className: eS.hq }),
                            ],
                        }),
                    ],
                }),
            }),
        });
    },
    eV = (e) => {
        let {
                transitionState: t,
                onClose: r,
                product: s,
                category: l,
                returnRef: m,
                analyticsSource: h,
                analyticsLocations: x,
                shouldCheckoutWithOrbs: f,
                tab: g,
            } = e,
            A = (0, u.bG)([B.default], () => B.default.getCurrentUser()),
            j = (0, eb.f)(s),
            { previewingVariantIndex: N } = j,
            C = (0, F.Q)(s),
            b = (0, eA.q)(s, N),
            R = (0, Z.rb)(s, C);
        c()(null != R, "Selected product should not be null");
        let { analyticsLocations: I } = (0, _.Ay)([...x, v.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.Yr)(R.skuId);
        let T = (0, eN.U1)(l);
        i.useEffect(() => {
            null != A && (0, k.A)(A.id, A.getAvatarURL(void 0, 80));
        }, [A]);
        let E = i.useMemo(() => (0, z.V6)(s.type, s.skuId), [s.type, s.skuId]);
        i.useEffect(() => {
            U.default.track(eE.HAw.OPEN_MODAL, {
                type: eE.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: h,
                location_stack: I,
                sku_id: R.skuId,
                product_type: E,
            }),
                (0, H.RD)(R.skuId);
        }, [h, I, R.skuId, E]);
        let P = (0, L.o6)(),
            y = t === p.ip4.EXITING,
            O = (0, ej.$R)(s),
            S = O?.amount,
            w = null != S && (O?.discountId === eP.eR || O?.discountId === eP.Qz),
            M = i.useMemo(() => ((0, z.aw)(R) ? R.items.length : 0), [R]),
            { activeSlide: D, isTransitioning: G } = (0, Q.X)({ slideCount: M, intervalMs: 5e3 });
        return null == A
            ? null
            : (0, n.jsx)(_.f5, {
                  value: I,
                  children: (0, n.jsxs)(p.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eS.CR,
                      returnRef: m,
                      transitionState: t,
                      size: p.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, n.jsxs)(p.$mQ, {
                              "data-migration-pending": !0,
                              className: eS.jE,
                              children: [
                                  (0, n.jsx)(eU, {
                                      user: A,
                                      product: s,
                                      category: l,
                                      onClose: r,
                                      previewingVariantIndexProps: j,
                                      selectedVariantIndex: C,
                                      shouldCheckoutWithOrbs: f,
                                      tab: g,
                                      activeBundleSlide: D,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: a()(
                                          eS.i1,
                                          R.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                              ? eS.bF
                                              : R.type === o.R.AVATAR_DECORATION
                                                ? eS.Jq
                                                : eS.eF,
                                      ),
                                      style: { backgroundImage: `url(${T})` },
                                      children: [
                                          (0, eT.pQ)(s.skuId)
                                              ? s.skuId === eT.Dp.ORB_PROFILE_BADGE
                                                  ? P || y
                                                      ? null
                                                      : (0, n.jsx)(em.z, { user: A })
                                                  : s.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, n.jsx)(eu.I, {})
                                                    : (0, n.jsx)(ef.B, { product: s, className: eS.Ms })
                                              : (0, n.jsx)(eG, {
                                                    user: A,
                                                    product: b ?? R,
                                                    activeBundleSlide: D,
                                                    isTransitioning: G,
                                                }),
                                          (0, n.jsxs)("div", {
                                              className: eS.VG,
                                              children: [
                                                  (0, n.jsx)(e_.R, {
                                                      product: s,
                                                      selectedVariantIndex: C,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, n.jsx)(et.V, { skuId: R.skuId, tab: g }),
                                                  (0, n.jsx)(p.K0, {
                                                      "aria-label": eO.intl.string(eO.t.cpT0Cq),
                                                      onClick: r,
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
                              (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsxs)(p.jlY, {
                                      "data-migration-pending": !0,
                                      className: eS.Hx,
                                      children: [
                                          (0, n.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eS.OC,
                                          }),
                                          (0, n.jsxs)("div", {
                                              className: eS.do,
                                              children: [
                                                  (0, n.jsx)(p.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eS.Q2,
                                                      children: eO.intl.format(eO.t["78ph4b"], {
                                                          discountOfferAmount: S,
                                                      }),
                                                  }),
                                                  O?.expiresAt != null && (0, n.jsx)(er.e, { endDate: O.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
