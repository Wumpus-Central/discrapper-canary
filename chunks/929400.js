n.d(t, { default: () => eV });
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(284009),
    c = n.n(l),
    o = n(575593),
    d = n(334279),
    u = n(635358),
    m = n(417597),
    p = n(990078),
    _ = n(582754),
    h = n(397927),
    x = n(736653),
    g = n(775602),
    f = n(793574),
    v = n(688810),
    A = n(262295),
    C = n(141468),
    N = n(963852),
    j = n(763754),
    I = n(20851),
    b = n(369496),
    T = n(550111),
    R = n(44120),
    y = n(465794),
    E = n(919395),
    P = n(287070),
    S = n(331402),
    k = n(101058),
    O = n(836602),
    w = n(576622),
    L = n(151252),
    B = n(652165),
    D = n(287809),
    U = n(954571),
    M = n(975571),
    G = n(927578),
    V = n(580630),
    H = n(979286),
    F = n(4227),
    z = n(298072),
    W = n(993408),
    $ = n(495565),
    q = n(740076),
    J = n(466459),
    K = n(442759),
    Z = n(623373),
    X = n(660653),
    Y = n(536572),
    Q = n(778992),
    ee = n(49620),
    et = n(586445),
    en = n(854818),
    ea = n(177366),
    er = n(11606),
    ei = n(203312),
    es = n(878112),
    el = n(501664),
    ec = n(882342),
    eo = n(572595),
    ed = n(641405),
    eu = n(812016),
    em = n(184659),
    ep = n(63574),
    e_ = n(364616),
    eh = n(846957),
    ex = n(293477),
    eg = n(139146),
    ef = n(929283),
    ev = n(827066),
    eA = n(525723),
    eC = n(212407),
    eN = n(347722),
    ej = n(935094),
    eI = n(57020),
    eb = n(61750),
    eT = n(758836),
    eR = n(652215),
    ey = n(788868),
    eE = n(818348),
    eP = n(985018),
    eS = n(235980);
let ek = (e) => {
        let { item: t, product: n, user: i } = e,
            s = r.useRef(null),
            l = (0, W.aw)(n),
            { firstAvatarDecoration: c } = (0, K.f5)(n);
        return t.type === o.R.AVATAR_DECORATION
            ? (0, a.jsx)("div", {
                  className: l ? eS.X2 : eS.h1,
                  children: (0, a.jsx)(ef.i, { user: i, item: t, isHighlighted: !0 }),
              })
            : t.type === o.R.PROFILE_EFFECT
              ? (0, a.jsx)("div", {
                    className: l ? eS.ME : eS.sm,
                    ref: s,
                    children: (0, a.jsx)(S.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === o.R.NAMEPLATE
                ? (0, a.jsx)("div", {
                      ref: s,
                      className: eS.Dz,
                      children: (0, a.jsx)(T.A, {
                          className: eS.M4,
                          nameplate: t,
                          user: i,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: c,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eO = (e) => {
        let { product: t, user: n, activeSlide: r = 0 } = e,
            i = t.items.length;
        return (0, a.jsx)("div", {
            className: eS.g4,
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
                                className: eS.Kg,
                                children: [
                                    (0, a.jsx)(ek, { item: e, product: t, user: n }),
                                    (0, a.jsxs)(h.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eS.gx,
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
    ew = (e) => {
        let { product: t, user: n, activeSlide: r } = e;
        return (0, W.aw)(t)
            ? (0, a.jsx)(eO, { product: t, user: n, activeSlide: r })
            : (0, eT.pQ)(t.skuId)
              ? (0, a.jsx)(eh.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, a.jsx)(ek, { item: t.items[0], product: t, user: n })
                : null;
    },
    eL = (e) => {
        let { skuId: t } = e;
        return t === d.j.PREMIUM_TIER_2_3_DAY
            ? (0, a.jsx)(h.Text, {
                  variant: "text-sm/normal",
                  className: eS.CU,
                  children: eP.intl.format(eP.t.Q1scdE, {
                      helpdeskArticle: M.A.getArticleURL(eR.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    eB = (e) => {
        let {
                product: t,
                user: n,
                category: i,
                shouldCheckoutWithOrbs: l,
                onClose: d,
                returnRef: g,
                previewingVariantIndexProps: f,
                selectedVariantIndex: A,
                activeBundleSlide: C,
            } = e,
            { analyticsLocations: N } = (0, v.Ay)(),
            j = G.Ay.canUseCollectibles(n),
            { previewingVariantIndex: I, handleEntering: b, handleLeaving: T } = f,
            P = (0, ev.q)(t, I),
            S = (0, Z.rb)(t, A);
        c()(null != S, "Selected product should not be null");
        let k = (0, J.h)(t),
            { isPurchased: O, isPartiallyOwnedBundle: w } = (0, J.h)(S),
            { isDisabled: D, disabledReason: U } = (0, q.I)(S.skuId),
            M = (0, W.Zu)({ product: S, isPartiallyOwnedBundle: w, isPurchased: O }),
            z = (0, m.bG)([F.A], () => F.A.isClaiming === S?.skuId),
            X = (0, x.Ay)(),
            Q = (0, _.Mw)(X),
            et = (0, W.G0)(S),
            en = (0, W.yt)(S, eR.lid.DEFAULT),
            ea = en?.amount === 0,
            { firstAvatarDecoration: eu } = (0, K.f5)(P ?? S),
            em = r.useMemo(() => (0, W.fT)(S, j), [S, j]),
            eh = (0, Y.VG)(t),
            eg = (0, eN.X)(S),
            { enabled: ef } = (0, L.Z)({ location: "collectibles_shop_product_details_modal" }),
            eC = (0, $.r)(S, !1),
            ej = (0, eA.V_)(t),
            ek = null != ej,
            eO = (t.variants?.length ?? 0) > 8,
            {
                checkoutEligiblePrices: eB,
                isOrbExclusive: eD,
                hasSufficientOrbs: eU,
            } = (0, eI.F)({ product: S, isPremiumUser: j, hasDiscountOffer: ek }),
            eM = r.useCallback(
                () =>
                    (0, R.A)({
                        skuId: S.skuId,
                        analyticsLocations: N,
                        variantsReturnStyle: u.g.VARIANTS_GROUP,
                        onClose: (e) => (e ? d() : (0, eE.tE)()),
                    }),
                [N, d, S.skuId],
            );
        return (
            r.useEffect(() => {
                if (null != eu) return (0, E.Dx)(eu), () => (0, E.Dx)(void 0);
            }, [eu]),
            (0, a.jsxs)("div", {
                className: eS.qA,
                children: [
                    (0, a.jsx)("div", { className: eS.gn, children: (0, a.jsx)(ei.A, { category: i }) }),
                    (0, a.jsx)(ew, { product: P ?? S, user: n, activeSlide: C }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsxs)("div", {
                                className: eS.h_,
                                children: [
                                    (0, a.jsx)(er.A, { product: S, isDarkText: !Q, isOrbExclusive: eD }),
                                    (0, a.jsx)(h.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eS.v7,
                                        children: eh,
                                    }),
                                    (0, a.jsx)(h.Text, { variant: "text-sm/normal", children: eC }),
                                    (0, a.jsx)(eL, { skuId: S.skuId }),
                                    k.isPurchased || k.isPartiallyOwnedBundle
                                        ? (0, a.jsx)(ee.c, { className: eS.On, isPartiallyPurchased: w })
                                        : et
                                          ? (0, a.jsx)(h.Text, {
                                                variant: "text-md/semibold",
                                                className: eS.On,
                                                children: eP.intl.string(eP.t.rt69oo),
                                            })
                                          : ef
                                            ? (0, a.jsx)(ex.B, {
                                                  prices: eB,
                                                  product: S,
                                                  isPremiumUser: j,
                                                  discount: em,
                                                  hasSufficientOrbs: eU,
                                                  isProductDisabled: D,
                                                  discountOfferAmount: ej,
                                              })
                                            : (0, a.jsxs)("div", {
                                                  className: eS.pw,
                                                  children: [
                                                      (0, a.jsx)(el.A, {
                                                          product: S,
                                                          discount: em,
                                                          isPremiumUser: j,
                                                          hideStrikethroughPrice: !j || ek,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: ej,
                                                      }),
                                                      j || ek ? null : (0, a.jsx)(ec.A, { product: S }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, Z.B1)(t) &&
                                (0, a.jsx)(h.M1G, {
                                    children: (0, a.jsxs)("div", {
                                        className: s()(eS.Oj, { [eS.OJ]: eO }),
                                        children: [
                                            eO &&
                                                (0, a.jsx)(ep.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: I,
                                                    className: eS.L$,
                                                }),
                                            (0, a.jsx)(e_.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: b,
                                                onVariantExit: T,
                                                wrap: !0,
                                            }),
                                            !eO &&
                                                (0, a.jsx)(ep.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: I,
                                                    className: eS.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== U &&
                                (0, a.jsx)(h.Text, { variant: "text-xs/normal", className: eS.H$, children: U }),
                            (0, a.jsx)(h.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (et && !j && !ea) {
                                        let e;
                                        return (
                                            (e = eP.intl.string(eP.t.sEAnVH)),
                                            (0, a.jsx)(y.A, {
                                                subscriptionTier: ey.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: eo.M,
                                                onSubscribeModalClose: () => {
                                                    (0, eo.t)({
                                                        product: S,
                                                        category: i,
                                                        shouldCheckoutWithOrbs: l,
                                                        returnRef: g,
                                                        analyticsLocations: N,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return M
                                        ? O
                                            ? eg
                                                ? (0, a.jsxs)(h.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, a.jsx)(ed.A, { product: S, onSuccess: d }),
                                                          (0, a.jsx)(es.A, { primary: !0, product: S, onSuccess: d }),
                                                      ],
                                                  })
                                                : (0, a.jsx)(ed.A, { product: S, onSuccess: d })
                                            : et
                                              ? (0, a.jsx)(h.Button, {
                                                    loading: z,
                                                    loadingStartedLabel: eP.intl.string(eP.t["TYw+9s"]),
                                                    loadingFinishedLabel: eP.intl.string(eP.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, H.iJ)(S.skuId),
                                                            d(),
                                                            (0, eb.A)({
                                                                product: S,
                                                                analyticsLocations: N,
                                                                purchaseType: eT.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eP.intl.string(eP.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, a.jsx)(a.Fragment, {
                                                    children: eB.map((e, t) => {
                                                        let n,
                                                            r = 0 === t;
                                                        if (e.currency === eE.Yr.DISCORD_ORB) {
                                                            let t, n, i, s;
                                                            return (
                                                                (t = D
                                                                    ? eP.intl.string(eP.t.cTdr3x)
                                                                    : eP.intl.string(eP.t.zqh7ZM)),
                                                                (n = !eU || D),
                                                                (i = eP.intl.formatToPlainString(eP.t.yi41qQ, {
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
                                                                            (0, B.B4)({
                                                                                skuId: S.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    let { entitlements: t } = e;
                                                                                    (0, H.gB)({
                                                                                        variantsReturnStyle:
                                                                                            u.g.VARIANTS_GROUP,
                                                                                    }),
                                                                                        d(),
                                                                                        (0, eb.A)({
                                                                                            product: S,
                                                                                            analyticsLocations: N,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: eT.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: N,
                                                                            });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": s,
                                                                        text: eP.intl.format(eP.t.lOtBOI, {
                                                                            orbPrice: e.amount,
                                                                            orbIconHook: () =>
                                                                                (0, a.jsx)(h.Cp8, {
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
                                                            (n = (0, W.aw)(S)
                                                                ? eP.intl.string(eP.t.V1AWw0)
                                                                : S.type === o.R.PROFILE_EFFECT
                                                                  ? eP.intl.string(eP.t.kAeDcK)
                                                                  : S.type === o.R.NAMEPLATE
                                                                    ? eP.intl.string(eP.t.H3vhqU)
                                                                    : eP.intl.string(eP.t.AQ0Veg)),
                                                            ek
                                                                ? (n = eP.intl.formatToPlainString(eP.t["5U5RB5"], {
                                                                      discountOfferAmount: ej,
                                                                  }))
                                                                : ef &&
                                                                  (n = eP.intl.formatToPlainString(eP.t["cNSL/j"], {
                                                                      price: (0, V.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, a.jsxs)(h.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, a.jsx)(h.Button, {
                                                                        variant: r ? "primary" : "secondary",
                                                                        onClick: eM,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eg &&
                                                                        (0, a.jsx)(es.A, {
                                                                            primary: r,
                                                                            product: S,
                                                                            onSuccess: d,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eg
                                          ? (0, a.jsx)(es.A, { primary: !0, product: S, onSuccess: d, fullWidth: !0 })
                                          : null;
                                })(),
                            }),
                            (0, a.jsx)(h.Text, {
                                className: s()(eS.ed, !Q && eS.un),
                                variant: "text-xxs/normal",
                                children: et && !O ? eP.intl.string(eP.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eD = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, a.jsx)("div", {
            className: eS.mV,
            children: (0, a.jsx)(A.A, {
                avatar: (0, a.jsx)(h.euF, {
                    src: t.avatarSrc,
                    size: h._3J.SIZE_32,
                    "aria-label": t.name,
                    status: h.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: s()(eS.$L, n),
            }),
        });
    },
    eU = (e) => {
        let { user: t, nameplate: n, avatarDecoration: r } = e,
            i = (0, b.Ov)();
        return (0, a.jsx)("div", {
            className: eS.nJ,
            role: "img",
            "aria-label": eP.intl.string(eP.t.SZeUdR),
            children: (0, a.jsxs)(h.M1G, {
                children: [
                    (0, a.jsx)(eD, { user: i.mallow, innerClassName: eS.ab }),
                    (0, a.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: eS.OS,
                        children: [eP.intl.string(eP.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, a.jsx)(eD, { user: i.phibi, innerClassName: eS.e9 }),
                    (0, a.jsx)("div", {
                        className: eS.mV,
                        children: (0, a.jsx)(T.A, {
                            className: eS.M4,
                            innerClassName: eS.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: r,
                        }),
                    }),
                    (0, a.jsx)(eD, { user: i.locke, innerClassName: eS.e9 }),
                    (0, a.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: eS.OS,
                        children: [eP.intl.string(eP.t["NG43/6"]), " - 12"],
                    }),
                    (0, a.jsx)(eD, { user: i.boom, innerClassName: eS.bD }),
                    (0, a.jsx)(eD, { user: i.cherry, innerClassName: eS.bD }),
                ],
            }),
        });
    },
    eM = (e) => {
        let { product: t, user: n, activeBundleSlide: r, isTransitioning: i } = e,
            l = (0, m.bG)([g.A], () => g.A.useReducedMotion),
            c = G.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: d, ...u } = (0, m.cf)([O.A], () => O.A.getPendingChanges()),
            p = (0, k.V7)({ userId: n.id, image: d }),
            _ = t.type === o.R.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: x, firstProfileEffect: f, firstNameplate: v } = (0, K.f5)(t),
            A = null != f,
            C = () =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(P.A, {
                            ...u,
                            pendingAvatar: p,
                            user: n,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: x,
                            pendingProfileEffect: f,
                            disabledInputs: !0,
                            hideMessageInput: !A,
                            hideCustomStatus: !0,
                            hideBioSection: _,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        _ && (0, a.jsx)(eG, { user: n }),
                    ],
                }),
            N = (e) => (0, a.jsx)(eU, { user: n, nameplate: e, avatarDecoration: x });
        if (t.type === o.R.BUNDLE) {
            if (!(0, X.Wb)(t))
                return (0, a.jsx)("div", {
                    className: eS.RA,
                    children: (0, a.jsx)("div", { className: eS.bo, children: C() }),
                });
            {
                let e = r ?? 0,
                    n = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    d = c?.type !== n?.type && !l;
                return n.type === o.R.NAMEPLATE
                    ? (0, a.jsx)("div", { className: s()(eS.Zj, i && d ? eS.p2 : ""), children: N(n) })
                    : (0, a.jsx)("div", { className: s()(eS.Ak, i && d ? eS.p2 : ""), children: C() });
            }
        }
        return null != v
            ? (0, a.jsx)("div", { className: eS.Zj, children: N(v) })
            : (0, a.jsx)("div", { className: h?.type === o.R.AVATAR_DECORATION ? eS.RA : eS.Ak, children: C() });
    },
    eG = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, C.rh)({
                    ...(0, N.Ay)({ author: t, channelId: "1337", content: eP.intl.string(eP.t.d5YwK5) }),
                    state: eR.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, a.jsx)("div", {
            role: "img",
            "aria-label": eP.intl.string(eP.t["TN+ZvB"]),
            children: (0, a.jsx)(h.M1G, {
                children: (0, a.jsxs)(h.ZpM, {
                    className: eS.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, a.jsx)(I.A, { className: eS.G5, author: (0, j.p_)(n), message: n }, n.id),
                        (0, a.jsxs)("div", {
                            className: eS.lG,
                            children: [
                                (0, a.jsx)(h.U1e, { size: "md", color: "currentColor", className: eS.hq }),
                                (0, a.jsx)(h.nm2, { size: "md", color: "currentColor", className: eS.hq }),
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
                onClose: n,
                product: i,
                category: l,
                returnRef: u,
                analyticsSource: p,
                analyticsLocations: _,
                shouldCheckoutWithOrbs: x,
                tab: g,
            } = e,
            A = (0, m.bG)([D.default], () => D.default.getCurrentUser()),
            C = (0, ej.f)(i),
            { previewingVariantIndex: N } = C,
            j = (0, z.Q)(i),
            I = (0, ev.q)(i, N),
            b = (0, Z.rb)(i, j);
        c()(null != b, "Selected product should not be null");
        let { analyticsLocations: T } = (0, v.Ay)([..._, f.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, ea.Yr)(b.skuId);
        let R = (0, eC.U1)(l);
        r.useEffect(() => {
            null != A && (0, w.A)(A.id, A.getAvatarURL(void 0, 80));
        }, [A]);
        let y = r.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            U.default.track(eR.HAw.OPEN_MODAL, {
                type: eR.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: T,
                sku_id: b.skuId,
                product_type: y,
            }),
                (0, H.RD)(b.skuId);
        }, [p, T, b.skuId, y]);
        let E = (0, B.o6)(),
            P = t === h.ip4.EXITING,
            S = (0, eA.$R)(i),
            k = S?.amount,
            O = null != k && (S?.discountId === ey.eR || S?.discountId === ey.Qz),
            L = r.useMemo(() => ((0, W.aw)(b) ? b.items.length : 0), [b]),
            { activeSlide: M, isTransitioning: G } = (0, Q.X)({ slideCount: L, intervalMs: 5e3 });
        return null == A
            ? null
            : (0, a.jsx)(v.f5, {
                  value: T,
                  children: (0, a.jsxs)(h.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eS.CR,
                      returnRef: u,
                      transitionState: t,
                      size: h.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, a.jsxs)(h.$mQ, {
                              "data-migration-pending": !0,
                              className: eS.jE,
                              children: [
                                  (0, a.jsx)(eB, {
                                      user: A,
                                      product: i,
                                      category: l,
                                      onClose: n,
                                      previewingVariantIndexProps: C,
                                      selectedVariantIndex: j,
                                      shouldCheckoutWithOrbs: x,
                                      activeBundleSlide: M,
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: s()(
                                          eS.i1,
                                          b.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                              ? eS.bF
                                              : b.type === o.R.AVATAR_DECORATION
                                                ? eS.Jq
                                                : eS.eF,
                                      ),
                                      style: { backgroundImage: `url(${R})` },
                                      children: [
                                          (0, eT.pQ)(i.skuId)
                                              ? i.skuId === eT.Dp.ORB_PROFILE_BADGE
                                                  ? E || P
                                                      ? null
                                                      : (0, a.jsx)(em.z, { user: A })
                                                  : i.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, a.jsx)(eu.I, {})
                                                    : (0, a.jsx)(eh.B, { product: i, className: eS.Ms })
                                              : (0, a.jsx)(eM, {
                                                    user: A,
                                                    product: I ?? b,
                                                    activeBundleSlide: M,
                                                    isTransitioning: G,
                                                }),
                                          (0, a.jsxs)("div", {
                                              className: eS.VG,
                                              children: [
                                                  (0, a.jsx)(eg.R, {
                                                      product: i,
                                                      selectedVariantIndex: j,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, a.jsx)(et.V, { skuId: b.skuId, tab: g }),
                                                  (0, a.jsx)(h.K0, {
                                                      "aria-label": eP.intl.string(eP.t.cpT0Cq),
                                                      onClick: n,
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
                          O &&
                              (0, a.jsx)(a.Fragment, {
                                  children: (0, a.jsxs)(h.jlY, {
                                      "data-migration-pending": !0,
                                      className: eS.Hx,
                                      children: [
                                          (0, a.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eS.OC,
                                          }),
                                          (0, a.jsxs)("div", {
                                              className: eS.do,
                                              children: [
                                                  (0, a.jsx)(h.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eS.Q2,
                                                      children: eP.intl.format(eP.t["78ph4b"], {
                                                          discountOfferAmount: k,
                                                      }),
                                                  }),
                                                  S?.expiresAt != null && (0, a.jsx)(en.e, { endDate: S.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
