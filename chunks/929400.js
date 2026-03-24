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
    p = r(582754),
    f = r(397927),
    h = r(736653),
    x = r(775602),
    v = r(793574),
    g = r(688810),
    _ = r(262295),
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
    ep = r(561769),
    ef = r(63574),
    eh = r(364616),
    ex = r(846957),
    ev = r(293477),
    eg = r(139146),
    e_ = r(929283),
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
                  children: (0, n.jsx)(e_.i, { user: s, item: t, isHighlighted: !0 }),
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
            children: (0, n.jsx)(f.tN_, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let a = String(i),
                        l = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        c = `(${i + 1}/${s})`;
                    return (0, n.jsx)(
                        f.q7S,
                        {
                            id: a,
                            children: (0, n.jsxs)("div", {
                                className: eS.Kg,
                                children: [
                                    (0, n.jsx)(ek, { item: e, product: t, user: r }),
                                    (0, n.jsxs)(f.Text, {
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
              ? (0, n.jsx)(ex.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, n.jsx)(ek, { item: t.items[0], product: t, user: r })
                : null;
    },
    eB = (e) => {
        let { skuId: t } = e;
        return t === d.j.PREMIUM_TIER_2_3_DAY
            ? (0, n.jsx)(f.Text, {
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
                onClose: x,
                returnRef: v,
                previewingVariantIndexProps: _,
                selectedVariantIndex: A,
                activeBundleSlide: j,
                giftRecipient: N,
                giftingOrigin: C,
            } = e,
            { analyticsLocations: b } = (0, g.Ay)(),
            R = D.Ay.canUseCollectibles(r),
            { previewingVariantIndex: E, handleEntering: P, handleLeaving: y } = _,
            S = (0, eA.q)(t, E),
            k = (0, Z.rb)(t, A);
        c()(null != k, "Selected product should not be null");
        let B = (0, J.h)(t),
            { isPurchased: U, isPartiallyOwnedBundle: M } = (0, J.h)(k),
            { isDisabled: F, disabledReason: Y } = (0, q.I)(k.skuId),
            Q = (0, z.Zu)({ product: k, isPartiallyOwnedBundle: M, isPurchased: U }),
            et = (0, u.bG)([V.A], () => V.A.isClaiming === k?.skuId),
            er = (0, h.Ay)(),
            en = (0, p.Mw)(er),
            eu = (0, z.G0)(k),
            em = (0, z.yt)(k, eE.lid.DEFAULT),
            ex = em?.amount === 0,
            { firstAvatarDecoration: eg } = (0, K.f5)(S ?? k),
            e_ = i.useMemo(() => (0, z.fT)(k, R), [k, R]),
            eN = (0, X.VG)(t),
            eb = (0, eC.X)(k),
            { enabled: ek } = (0, w.Z)({ location: "collectibles_shop_product_details_modal" }),
            ew = (0, $.r)(k, !1),
            eU = (0, ej.V_)(t),
            eM = null != eU,
            eD = (t.variants?.length ?? 0) > 8,
            eG = (0, W.W)("CollectiblesShopProductDetailsModal"),
            eH = d === eT.G2.ORBS && l ? ep.Hi.ORBS : eG ? ep.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: eV,
                isOrbExclusive: eF,
                hasSufficientOrbs: ez,
            } = (0, eR.F)({ product: k, isPremiumUser: R, hasDiscountOffer: eM, prioritizedCurrency: eH }),
            eW = i.useCallback(
                () => (0, I.A)({ skuId: k.skuId, analyticsLocations: b, onClose: (e) => (e ? x() : (0, ey.tE)()) }),
                [b, x, k.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != eg) return (0, O.p)({ avatarDecoration: eg }), () => (0, O.p)({ avatarDecoration: void 0 });
            }, [eg]),
            (0, n.jsxs)("div", {
                className: eS.qA,
                children: [
                    (0, n.jsx)("div", { className: eS.gn, children: (0, n.jsx)(es.A, { category: s }) }),
                    (0, n.jsx)(eL, { product: S ?? k, user: r, activeSlide: j }),
                    (0, n.jsxs)("div", {
                        children: [
                            (0, n.jsxs)("div", {
                                className: eS.h_,
                                children: [
                                    (0, n.jsx)(ei.A, { product: k, isDarkText: !en, isOrbExclusive: eF }),
                                    (0, n.jsx)(f.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eS.v7,
                                        children: eN,
                                    }),
                                    (0, n.jsx)(f.Text, { variant: "text-sm/normal", children: ew }),
                                    (0, n.jsx)(eB, { skuId: k.skuId }),
                                    B.isPurchased || B.isPartiallyOwnedBundle
                                        ? (0, n.jsx)(ee.c, { className: eS.On, isPartiallyPurchased: M })
                                        : eu
                                          ? (0, n.jsx)(f.Text, {
                                                variant: "text-md/semibold",
                                                className: eS.On,
                                                children: eO.intl.string(eO.t.rt69oo),
                                            })
                                          : ek
                                            ? (0, n.jsx)(ev.B, {
                                                  prices: eV,
                                                  product: k,
                                                  isPremiumUser: R,
                                                  discount: e_,
                                                  hasSufficientOrbs: ez,
                                                  isProductDisabled: F,
                                                  discountOfferAmount: eU,
                                              })
                                            : (0, n.jsxs)("div", {
                                                  className: eS.pw,
                                                  children: [
                                                      (0, n.jsx)(el.A, {
                                                          product: k,
                                                          discount: e_,
                                                          isPremiumUser: R,
                                                          hideStrikethroughPrice: !R || eM,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eU,
                                                      }),
                                                      R || eM ? null : (0, n.jsx)(ec.A, { product: k }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, Z.B1)(t) &&
                                (0, n.jsx)(f.M1G, {
                                    children: (0, n.jsxs)("div", {
                                        className: a()(eS.Oj, { [eS.OJ]: eD }),
                                        children: [
                                            eD &&
                                                (0, n.jsx)(ef.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: E,
                                                    className: eS.L$,
                                                }),
                                            (0, n.jsx)(eh.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: P,
                                                onVariantExit: y,
                                                wrap: !0,
                                            }),
                                            !eD &&
                                                (0, n.jsx)(ef.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: E,
                                                    className: eS.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== Y &&
                                (0, n.jsx)(f.Text, { variant: "text-xs/normal", className: eS.H$, children: Y }),
                            (0, n.jsx)(f.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (eu && !R && !ex) {
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
                                                        product: k,
                                                        category: s,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: v,
                                                        analyticsLocations: b,
                                                        tab: d,
                                                        giftRecipient: N,
                                                        giftingOrigin: C,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return Q
                                        ? U
                                            ? eb
                                                ? (0, n.jsxs)(f.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, n.jsx)(ed.A, { product: k, onSuccess: x }),
                                                          (0, n.jsx)(ea.A, {
                                                              primary: !0,
                                                              product: k,
                                                              onSuccess: x,
                                                              giftRecipient: N,
                                                              giftingOrigin: C,
                                                          }),
                                                      ],
                                                  })
                                                : (0, n.jsx)(ed.A, { product: k, onSuccess: x })
                                            : eu
                                              ? (0, n.jsx)(f.Button, {
                                                    loading: et,
                                                    loadingStartedLabel: eO.intl.string(eO.t["TYw+9s"]),
                                                    loadingFinishedLabel: eO.intl.string(eO.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, H.iJ)(k.skuId),
                                                            x(),
                                                            (0, eI.A)({
                                                                product: k,
                                                                analyticsLocations: b,
                                                                purchaseType: eT.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eO.intl.string(eO.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, n.jsx)(n.Fragment, {
                                                    children: eV.map((e, t) => {
                                                        let r,
                                                            i = 0 === t;
                                                        if (e.currency === ey.Yr.DISCORD_ORB) {
                                                            let t, r, s, a;
                                                            return (
                                                                (t = F
                                                                    ? eO.intl.string(eO.t.cTdr3x)
                                                                    : eO.intl.string(eO.t.zqh7ZM)),
                                                                (r = !ez || F),
                                                                (s = eO.intl.formatToPlainString(eO.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (a = r ? `${s}, ${t}` : s),
                                                                (0, n.jsx)(m.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: r,
                                                                    "aria-label": !1,
                                                                    children: (0, n.jsx)(f.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            (0, L.B4)({
                                                                                skuId: k.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    let { entitlements: t } = e;
                                                                                    (0, H.gB)(),
                                                                                        x(),
                                                                                        (0, eI.A)({
                                                                                            product: k,
                                                                                            analyticsLocations: b,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: eT.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: b,
                                                                            });
                                                                        },
                                                                        disabled: r,
                                                                        "aria-label": a,
                                                                        text: eO.intl.format(eO.t.lOtBOI, {
                                                                            orbPrice: e.amount,
                                                                            orbIconHook: () =>
                                                                                (0, n.jsx)(f.Cp8, {
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
                                                            (r = (0, z.aw)(k)
                                                                ? eO.intl.string(eO.t.V1AWw0)
                                                                : k.type === o.R.PROFILE_EFFECT
                                                                  ? eO.intl.string(eO.t.kAeDcK)
                                                                  : k.type === o.R.NAMEPLATE
                                                                    ? eO.intl.string(eO.t.H3vhqU)
                                                                    : eO.intl.string(eO.t.AQ0Veg)),
                                                            eM
                                                                ? (r = eO.intl.formatToPlainString(eO.t["5U5RB5"], {
                                                                      discountOfferAmount: eU,
                                                                  }))
                                                                : ek &&
                                                                  (r = eO.intl.formatToPlainString(eO.t["cNSL/j"], {
                                                                      price: (0, G.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, n.jsxs)(f.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, n.jsx)(f.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: eW,
                                                                        text: r,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eb &&
                                                                        (0, n.jsx)(ea.A, {
                                                                            primary: i,
                                                                            product: k,
                                                                            onSuccess: x,
                                                                            giftRecipient: N,
                                                                            giftingOrigin: C,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eb
                                          ? (0, n.jsx)(ea.A, {
                                                primary: !0,
                                                product: k,
                                                onSuccess: x,
                                                fullWidth: !0,
                                                giftRecipient: N,
                                                giftingOrigin: C,
                                            })
                                          : null;
                                })(),
                            }),
                            (0, n.jsx)(f.Text, {
                                className: a()(eS.ed, !en && eS.un),
                                variant: "text-xxs/normal",
                                children: eu && !U ? eO.intl.string(eO.t.nKdAlO) : null,
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
            children: (0, n.jsx)(_.A, {
                avatar: (0, n.jsx)(f.euF, {
                    src: t.avatarSrc,
                    size: f._3J.SIZE_32,
                    "aria-label": t.name,
                    status: f.clD.ONLINE,
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
            children: (0, n.jsxs)(f.M1G, {
                children: [
                    (0, n.jsx)(eM, { user: s.mallow, innerClassName: eS.ab }),
                    (0, n.jsxs)(f.Text, {
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
                    (0, n.jsxs)(f.Text, {
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
            l = (0, u.bG)([x.A], () => x.A.useReducedMotion),
            c = D.Ay.canUsePremiumProfileCustomization(r),
            { pendingAvatar: d, ...m } = (0, u.cf)([S.A], () => S.A.getPendingChanges()),
            p = (0, y.V7)({ userId: r.id, image: d }),
            f = t.type === o.R.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: v, firstProfileEffect: g, firstNameplate: _ } = (0, K.f5)(t),
            A = null != g,
            j = () =>
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(E.A, {
                            ...m,
                            pendingAvatar: p,
                            user: r,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: v,
                            pendingProfileEffect: g,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: f,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        f && (0, n.jsx)(eH, { user: r }),
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
        return null != _
            ? (0, n.jsx)("div", { className: eS.Zj, children: N(_) })
            : (0, n.jsx)("div", { className: h?.type === o.R.AVATAR_DECORATION ? eS.RA : eS.Ak, children: j() });
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
            children: (0, n.jsx)(f.M1G, {
                children: (0, n.jsxs)(f.ZpM, {
                    className: eS.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, n.jsx)(C.A, { className: eS.G5, author: (0, N.p_)(r), message: r }, r.id),
                        (0, n.jsxs)("div", {
                            className: eS.lG,
                            children: [
                                (0, n.jsx)(f.U1e, { size: "md", color: "currentColor", className: eS.hq }),
                                (0, n.jsx)(f.nm2, { size: "md", color: "currentColor", className: eS.hq }),
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
                analyticsSource: p,
                analyticsLocations: h,
                shouldCheckoutWithOrbs: x,
                tab: _,
                giftRecipient: A,
                giftingOrigin: j,
            } = e,
            N = (0, u.bG)([B.default], () => B.default.getCurrentUser()),
            C = (0, eb.f)(s),
            { previewingVariantIndex: b } = C,
            R = (0, F.Q)(s),
            I = (0, eA.q)(s, b),
            T = (0, Z.rb)(s, R);
        c()(null != T, "Selected product should not be null");
        let { analyticsLocations: E } = (0, g.Ay)([...h, v.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, en.Yr)(T.skuId);
        let P = (0, eN.U1)(l);
        i.useEffect(() => {
            null != N && (0, k.A)(N.id, N.getAvatarURL(void 0, 80));
        }, [N]);
        let y = i.useMemo(() => (0, z.V6)(s.type, s.skuId), [s.type, s.skuId]);
        i.useEffect(() => {
            U.default.track(eE.HAw.OPEN_MODAL, {
                type: eE.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: E,
                sku_id: T.skuId,
                product_type: y,
            }),
                (0, H.RD)(T.skuId);
        }, [p, E, T.skuId, y]);
        let O = (0, L.o6)(),
            S = t === f.ip4.EXITING,
            w = (0, ej.$R)(s),
            M = w?.amount,
            D = null != M && (w?.discountId === eP.eR || w?.discountId === eP.Qz),
            G = i.useMemo(() => ((0, z.aw)(T) ? T.items.length : 0), [T]),
            { activeSlide: V, isTransitioning: W } = (0, Q.X)({ slideCount: G, intervalMs: 5e3 });
        return null == N
            ? null
            : (0, n.jsx)(g.f5, {
                  value: E,
                  children: (0, n.jsxs)(f.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eS.CR,
                      returnRef: m,
                      transitionState: t,
                      size: f.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, n.jsxs)(f.$mQ, {
                              "data-migration-pending": !0,
                              className: eS.jE,
                              children: [
                                  (0, n.jsx)(eU, {
                                      user: N,
                                      product: s,
                                      category: l,
                                      onClose: r,
                                      previewingVariantIndexProps: C,
                                      selectedVariantIndex: R,
                                      shouldCheckoutWithOrbs: x,
                                      tab: _,
                                      activeBundleSlide: V,
                                      giftRecipient: A,
                                      giftingOrigin: j,
                                  }),
                                  (0, n.jsxs)("div", {
                                      className: a()(
                                          eS.i1,
                                          T.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                              ? eS.bF
                                              : T.type === o.R.AVATAR_DECORATION
                                                ? eS.Jq
                                                : eS.eF,
                                      ),
                                      style: { backgroundImage: `url(${P})` },
                                      children: [
                                          (0, eT.pQ)(s.skuId)
                                              ? s.skuId === eT.Dp.ORB_PROFILE_BADGE
                                                  ? O || S
                                                      ? null
                                                      : (0, n.jsx)(em.z, { user: N })
                                                  : s.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, n.jsx)(eu.I, {})
                                                    : (0, n.jsx)(ex.B, { product: s, className: eS.Ms })
                                              : (0, n.jsx)(eG, {
                                                    user: N,
                                                    product: I ?? T,
                                                    activeBundleSlide: V,
                                                    isTransitioning: W,
                                                }),
                                          (0, n.jsxs)("div", {
                                              className: eS.VG,
                                              children: [
                                                  (0, n.jsx)(eg.R, {
                                                      product: s,
                                                      selectedVariantIndex: R,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, n.jsx)(et.V, { skuId: T.skuId, tab: _ }),
                                                  (0, n.jsx)(f.K0, {
                                                      "aria-label": eO.intl.string(eO.t.cpT0Cq),
                                                      onClick: r,
                                                      icon: f.d$L,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                              ],
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                          D &&
                              (0, n.jsx)(n.Fragment, {
                                  children: (0, n.jsxs)(f.jlY, {
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
                                                  (0, n.jsx)(f.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eS.Q2,
                                                      children: eO.intl.format(eO.t["78ph4b"], {
                                                          discountOfferAmount: M,
                                                      }),
                                                  }),
                                                  w?.expiresAt != null && (0, n.jsx)(er.e, { endDate: w.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
