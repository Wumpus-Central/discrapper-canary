n.d(t, { default: () => eV });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(284009),
    c = n.n(s),
    o = n(575593),
    d = n(334279),
    u = n(635358),
    m = n(417597),
    x = n(990078),
    h = n(582754),
    p = n(397927),
    f = n(736653),
    A = n(775602),
    _ = n(793574),
    v = n(688810),
    g = n(262295),
    j = n(141468),
    N = n(963852),
    R = n(763754),
    b = n(20851),
    C = n(369496),
    I = n(550111),
    T = n(44120),
    E = n(465794),
    P = n(919395),
    S = n(287070),
    O = n(331402),
    k = n(101058),
    y = n(836602),
    B = n(576622),
    L = n(151252),
    w = n(652165),
    U = n(287809),
    D = n(954571),
    M = n(975571),
    G = n(927578),
    V = n(580630),
    H = n(979286),
    F = n(4227),
    z = n(298072),
    $ = n(993408),
    q = n(495565),
    W = n(740076),
    J = n(645178),
    K = n(466459),
    Y = n(442759),
    Z = n(623373),
    X = n(660653),
    Q = n(778992),
    ee = n(49620),
    et = n(586445),
    en = n(854818),
    er = n(177366),
    ei = n(11606),
    ea = n(203312),
    el = n(878112),
    es = n(501664),
    ec = n(882342),
    eo = n(572595),
    ed = n(641405),
    eu = n(812016),
    em = n(184659),
    ex = n(63574),
    eh = n(364616),
    ep = n(846957),
    ef = n(293477),
    eA = n(139146),
    e_ = n(929283),
    ev = n(827066),
    eg = n(525723),
    ej = n(212407),
    eN = n(347722),
    eR = n(935094),
    eb = n(57020),
    eC = n(61750),
    eI = n(758836),
    eT = n(652215),
    eE = n(788868),
    eP = n(818348),
    eS = n(985018),
    eO = n(484978);
let ek = (e) => {
        let { item: t, product: n, user: a } = e,
            l = i.useRef(null),
            s = (0, $.aw)(n),
            { firstAvatarDecoration: c } = (0, Y.f5)(n);
        return t.type === o.R.AVATAR_DECORATION
            ? (0, r.jsx)("div", {
                  className: s ? eO.X2 : eO.h1,
                  children: (0, r.jsx)(e_.i, { user: a, item: t, isHighlighted: !0 }),
              })
            : t.type === o.R.PROFILE_EFFECT
              ? (0, r.jsx)("div", {
                    className: s ? eO.ME : eO.sm,
                    ref: l,
                    children: (0, r.jsx)(O.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === o.R.NAMEPLATE
                ? (0, r.jsx)("div", {
                      ref: l,
                      className: eO.Dz,
                      children: (0, r.jsx)(I.A, {
                          className: eO.M4,
                          nameplate: t,
                          showPlaceholderUser: !0,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: c,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    ey = (e) => {
        let { product: t, user: n, activeSlide: i = 0 } = e,
            a = t.items.length;
        return (0, r.jsx)("div", {
            className: eO.g4,
            children: (0, r.jsx)(p.tN_, {
                activeSlide: String(i),
                children: t.items.map((e, i) => {
                    let l = String(i),
                        s = null != t.bundledProducts ? t.bundledProducts[i] : void 0,
                        c = `(${i + 1}/${a})`;
                    return (0, r.jsx)(
                        p.q7S,
                        {
                            id: l,
                            children: (0, r.jsxs)("div", {
                                className: eO.Kg,
                                children: [
                                    (0, r.jsx)(ek, { item: e, product: t, user: n }),
                                    (0, r.jsxs)(p.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: eO.gx,
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
    eB = (e) => {
        let { product: t, user: n, activeSlide: i } = e;
        return (0, $.aw)(t)
            ? (0, r.jsx)(ey, { product: t, user: n, activeSlide: i })
            : (0, eI.pQ)(t.skuId)
              ? (0, r.jsx)(ep.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, r.jsx)(ek, { item: t.items[0], product: t, user: n })
                : null;
    },
    eL = (e) => {
        let { skuId: t } = e;
        return t === d.j.PREMIUM_TIER_2_3_DAY
            ? (0, r.jsx)(p.Text, {
                  variant: "text-sm/normal",
                  className: eO.CU,
                  children: eS.intl.format(eS.t.Q1scdE, {
                      helpdeskArticle: M.A.getArticleURL(eT.MVz.FRACTIONAL_PREMIUM_ABOUT),
                  }),
              })
            : null;
    },
    ew = (e) => {
        let {
                product: t,
                user: n,
                category: a,
                shouldCheckoutWithOrbs: s,
                onClose: d,
                returnRef: A,
                previewingVariantIndexProps: _,
                selectedVariantIndex: g,
                activeBundleSlide: j,
            } = e,
            { analyticsLocations: N } = (0, v.Ay)(),
            R = G.Ay.canUseCollectibles(n),
            { previewingVariantIndex: b, handleEntering: C, handleLeaving: I } = _,
            S = (0, ev.q)(t, b),
            O = (0, Z.rb)(t, g);
        c()(null != O, "Selected product should not be null");
        let k = (0, K.h)(t),
            { isPurchased: y, isPartiallyOwnedBundle: B } = (0, K.h)(O),
            { isDisabled: U, disabledReason: D } = (0, W.I)(O.skuId),
            M = (0, $.Zu)({ product: O, isPartiallyOwnedBundle: B, isPurchased: y }),
            z = (0, m.bG)([F.A], () => F.A.isClaiming === O?.skuId),
            X = (0, f.Ay)(),
            Q = (0, h.Mw)(X),
            et = (0, $.G0)(O),
            en = (0, $.yt)(O, eT.lid.DEFAULT),
            er = en?.amount === 0,
            { firstAvatarDecoration: eu } = (0, Y.f5)(S ?? O),
            em = i.useMemo(() => (0, $.fT)(O, R), [O, R]),
            ep = (0, J.dH)(O),
            eA = (0, eN.X)(O),
            { enabled: e_ } = (0, L.Z)({ location: "collectibles_shop_product_details_modal" }),
            ej = (0, q.r)(O, !1),
            eR = (0, eg.V_)(t),
            ek = null != eR,
            ey = (t.variants?.length ?? 0) > 8,
            {
                checkoutEligiblePrices: ew,
                isOrbExclusive: eU,
                hasSufficientOrbs: eD,
            } = (0, eb.F)({ product: O, isPremiumUser: R, hasDiscountOffer: ek }),
            eM = i.useCallback(
                () =>
                    (0, T.A)({
                        skuId: O.skuId,
                        analyticsLocations: N,
                        variantsReturnStyle: u.g.VARIANTS_GROUP,
                        onClose: (e) => (e ? d() : (0, eP.tE)()),
                    }),
                [N, d, O.skuId],
            );
        return (
            i.useEffect(() => {
                if (null != eu) return (0, P.Dx)(eu), () => (0, P.Dx)(void 0);
            }, [eu]),
            (0, r.jsxs)("div", {
                className: eO.qA,
                children: [
                    (0, r.jsx)("div", { className: eO.gn, children: (0, r.jsx)(ea.A, { category: a }) }),
                    (0, r.jsx)(eB, { product: S ?? O, user: n, activeSlide: j }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsxs)("div", {
                                className: eO.h_,
                                children: [
                                    (0, r.jsx)(ei.A, { product: O, isDarkText: !Q, isOrbExclusive: eU }),
                                    (0, r.jsx)(p.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: eO.v7,
                                        children: ep,
                                    }),
                                    (0, r.jsx)(p.Text, { variant: "text-sm/normal", children: ej }),
                                    (0, r.jsx)(eL, { skuId: O.skuId }),
                                    k.isPurchased || k.isPartiallyOwnedBundle
                                        ? (0, r.jsx)(ee.c, { className: eO.On, isPartiallyPurchased: B })
                                        : et
                                          ? (0, r.jsx)(p.Text, {
                                                variant: "text-md/semibold",
                                                className: eO.On,
                                                children: eS.intl.string(eS.t.rt69oo),
                                            })
                                          : e_
                                            ? (0, r.jsx)(ef.B, {
                                                  prices: ew,
                                                  product: O,
                                                  isPremiumUser: R,
                                                  discount: em,
                                                  hasSufficientOrbs: eD,
                                                  isProductDisabled: U,
                                                  discountOfferAmount: eR,
                                              })
                                            : (0, r.jsxs)("div", {
                                                  className: eO.pw,
                                                  children: [
                                                      (0, r.jsx)(es.A, {
                                                          product: O,
                                                          discount: em,
                                                          isPremiumUser: R,
                                                          hideStrikethroughPrice: !R || ek,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: eR,
                                                      }),
                                                      R || ek ? null : (0, r.jsx)(ec.A, { product: O }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, Z.B1)(t) &&
                                (0, r.jsx)(p.M1G, {
                                    children: (0, r.jsxs)("div", {
                                        className: l()(eO.Oj, { [eO.OJ]: ey }),
                                        children: [
                                            ey &&
                                                (0, r.jsx)(ex.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: b,
                                                    className: eO.L$,
                                                }),
                                            (0, r.jsx)(eh.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: C,
                                                onVariantExit: I,
                                                wrap: !0,
                                            }),
                                            !ey &&
                                                (0, r.jsx)(ex.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: b,
                                                    className: eO.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== D &&
                                (0, r.jsx)(p.Text, { variant: "text-xs/normal", className: eO.H$, children: D }),
                            (0, r.jsx)(p.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (et && !R && !er) {
                                        let e;
                                        return (
                                            (e = eS.intl.string(eS.t.sEAnVH)),
                                            (0, r.jsx)(E.A, {
                                                subscriptionTier: eE.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: eo.M,
                                                onSubscribeModalClose: () => {
                                                    (0, eo.t)({
                                                        product: O,
                                                        category: a,
                                                        shouldCheckoutWithOrbs: s,
                                                        returnRef: A,
                                                        analyticsLocations: N,
                                                    });
                                                },
                                            })
                                        );
                                    }
                                    return M
                                        ? y
                                            ? eA
                                                ? (0, r.jsxs)(p.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, r.jsx)(ed.A, { product: O, onSuccess: d }),
                                                          (0, r.jsx)(el.A, { primary: !0, product: O, onSuccess: d }),
                                                      ],
                                                  })
                                                : (0, r.jsx)(ed.A, { product: O, onSuccess: d })
                                            : et
                                              ? (0, r.jsx)(p.Button, {
                                                    loading: z,
                                                    loadingStartedLabel: eS.intl.string(eS.t["TYw+9s"]),
                                                    loadingFinishedLabel: eS.intl.string(eS.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, H.iJ)(O.skuId),
                                                            d(),
                                                            (0, eC.A)({
                                                                product: O,
                                                                analyticsLocations: N,
                                                                purchaseType: eI.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eS.intl.string(eS.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, r.jsx)(r.Fragment, {
                                                    children: ew.map((e, t) => {
                                                        let n,
                                                            i = 0 === t;
                                                        if (e.currency === eP.Yr.DISCORD_ORB) {
                                                            let t, n, a, l;
                                                            return (
                                                                (t = U
                                                                    ? eS.intl.string(eS.t.cTdr3x)
                                                                    : eS.intl.string(eS.t.zqh7ZM)),
                                                                (n = !eD || U),
                                                                (a = eS.intl.formatToPlainString(eS.t.yi41qQ, {
                                                                    orbPrice: e.amount,
                                                                })),
                                                                (l = n ? `${a}, ${t}` : a),
                                                                (0, r.jsx)(x.m, {
                                                                    position: "top",
                                                                    text: t,
                                                                    shouldShow: n,
                                                                    "aria-label": !1,
                                                                    children: (0, r.jsx)(p.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: () => {
                                                                            (0, w.B4)({
                                                                                skuId: O.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    let { entitlements: t } = e;
                                                                                    (0, H.gB)({
                                                                                        variantsReturnStyle:
                                                                                            u.g.VARIANTS_GROUP,
                                                                                    }),
                                                                                        d(),
                                                                                        (0, eC.A)({
                                                                                            product: O,
                                                                                            analyticsLocations: N,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: eI.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: N,
                                                                            });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": l,
                                                                        text: eS.intl.format(eS.t.lOtBOI, {
                                                                            orbPrice: e.amount,
                                                                            orbIconHook: () =>
                                                                                (0, r.jsx)(p.Cp8, {
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
                                                            (n = (0, $.aw)(O)
                                                                ? eS.intl.string(eS.t.V1AWw0)
                                                                : O.type === o.R.PROFILE_EFFECT
                                                                  ? eS.intl.string(eS.t.kAeDcK)
                                                                  : O.type === o.R.NAMEPLATE
                                                                    ? eS.intl.string(eS.t.H3vhqU)
                                                                    : eS.intl.string(eS.t.AQ0Veg)),
                                                            ek
                                                                ? (n = eS.intl.formatToPlainString(eS.t["5U5RB5"], {
                                                                      discountOfferAmount: eR,
                                                                  }))
                                                                : e_ &&
                                                                  (n = eS.intl.formatToPlainString(eS.t["cNSL/j"], {
                                                                      price: (0, V.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, r.jsxs)(p.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, r.jsx)(p.Button, {
                                                                        variant: i ? "primary" : "secondary",
                                                                        onClick: eM,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eA &&
                                                                        (0, r.jsx)(el.A, {
                                                                            primary: i,
                                                                            product: O,
                                                                            onSuccess: d,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eA
                                          ? (0, r.jsx)(el.A, { primary: !0, product: O, onSuccess: d, fullWidth: !0 })
                                          : null;
                                })(),
                            }),
                            (0, r.jsx)(p.Text, {
                                className: l()(eO.ed, !Q && eO.un),
                                variant: "text-xxs/normal",
                                children: et && !y ? eS.intl.string(eS.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eU = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, r.jsx)("div", {
            className: eO.mV,
            children: (0, r.jsx)(g.A, {
                avatar: (0, r.jsx)(p.euF, {
                    src: t.avatarSrc,
                    size: p._3J.SIZE_32,
                    "aria-label": t.name,
                    status: p.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: l()(eO.$L, n),
            }),
        });
    },
    eD = (e) => {
        let { user: t, nameplate: n, avatarDecoration: i } = e,
            a = (0, C.Ov)();
        return (0, r.jsx)("div", {
            className: eO.nJ,
            role: "img",
            "aria-label": eS.intl.string(eS.t.SZeUdR),
            children: (0, r.jsxs)(p.M1G, {
                children: [
                    (0, r.jsx)(eU, { user: a.mallow, innerClassName: eO.ab }),
                    (0, r.jsxs)(p.Text, {
                        variant: "text-sm/semibold",
                        className: eO.OS,
                        children: [eS.intl.string(eS.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, r.jsx)(eU, { user: a.phibi, innerClassName: eO.e9 }),
                    (0, r.jsx)("div", {
                        className: eO.mV,
                        children: (0, r.jsx)(I.A, {
                            className: eO.M4,
                            innerClassName: eO.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: i,
                        }),
                    }),
                    (0, r.jsx)(eU, { user: a.locke, innerClassName: eO.e9 }),
                    (0, r.jsxs)(p.Text, {
                        variant: "text-sm/semibold",
                        className: eO.OS,
                        children: [eS.intl.string(eS.t["NG43/6"]), " - 12"],
                    }),
                    (0, r.jsx)(eU, { user: a.boom, innerClassName: eO.bD }),
                    (0, r.jsx)(eU, { user: a.cherry, innerClassName: eO.bD }),
                ],
            }),
        });
    },
    eM = (e) => {
        let { product: t, user: n, activeBundleSlide: i, isTransitioning: a } = e,
            s = (0, m.bG)([A.A], () => A.A.useReducedMotion),
            c = G.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: d, ...u } = (0, m.cf)([y.A], () => y.A.getPendingChanges()),
            x = (0, k.V7)({ userId: n.id, image: d }),
            h = t.type === o.R.AVATAR_DECORATION,
            [p] = t.items,
            { firstAvatarDecoration: f, firstProfileEffect: _, firstNameplate: v } = (0, Y.f5)(t),
            g = null != _,
            j = () =>
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(S.A, {
                            ...u,
                            pendingAvatar: x,
                            user: n,
                            canUsePremiumCustomization: c,
                            pendingAvatarDecoration: f,
                            pendingProfileEffect: _,
                            disabledInputs: !0,
                            hideMessageInput: !g,
                            hideCustomStatus: !0,
                            hideBioSection: h,
                            hideExampleButton: !0,
                            interactive: !1,
                        }),
                        h && (0, r.jsx)(eG, { user: n }),
                    ],
                }),
            N = (e) => (0, r.jsx)(eD, { user: n, nameplate: e, avatarDecoration: f });
        if (t.type === o.R.BUNDLE) {
            if (!(0, X.Wb)(t))
                return (0, r.jsx)("div", {
                    className: eO.RA,
                    children: (0, r.jsx)("div", { className: eO.bo, children: j() }),
                });
            {
                let e = i ?? 0,
                    n = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    d = c?.type !== n?.type && !s;
                return n.type === o.R.NAMEPLATE
                    ? (0, r.jsx)("div", { className: l()(eO.Zj, a && d ? eO.p2 : ""), children: N(n) })
                    : (0, r.jsx)("div", { className: l()(eO.Ak, a && d ? eO.p2 : ""), children: j() });
            }
        }
        return null != v
            ? (0, r.jsx)("div", { className: eO.Zj, children: N(v) })
            : (0, r.jsx)("div", { className: p?.type === o.R.AVATAR_DECORATION ? eO.RA : eO.Ak, children: j() });
    },
    eG = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, j.rh)({
                    ...(0, N.Ay)({ author: t, channelId: "1337", content: eS.intl.string(eS.t.d5YwK5) }),
                    state: eT.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, r.jsx)("div", {
            role: "img",
            "aria-label": eS.intl.string(eS.t["TN+ZvB"]),
            children: (0, r.jsx)(p.M1G, {
                children: (0, r.jsxs)(p.ZpM, {
                    className: eO.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, r.jsx)(b.A, { className: eO.G5, author: (0, R.p_)(n), message: n }, n.id),
                        (0, r.jsxs)("div", {
                            className: eO.lG,
                            children: [
                                (0, r.jsx)(p.U1e, { size: "md", color: "currentColor", className: eO.hq }),
                                (0, r.jsx)(p.nm2, { size: "md", color: "currentColor", className: eO.hq }),
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
                product: a,
                category: s,
                returnRef: u,
                analyticsSource: x,
                analyticsLocations: h,
                shouldCheckoutWithOrbs: f,
                tab: A,
            } = e,
            g = (0, m.bG)([U.default], () => U.default.getCurrentUser()),
            j = (0, eR.f)(a),
            { previewingVariantIndex: N } = j,
            R = (0, z.Q)(a),
            b = (0, ev.q)(a, N),
            C = (0, Z.rb)(a, R);
        c()(null != C, "Selected product should not be null");
        let { analyticsLocations: I } = (0, v.Ay)([...h, _.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.Yr)(C.skuId);
        let T = (0, ej.U1)(s);
        i.useEffect(() => {
            null != g && (0, B.A)(g.id, g.getAvatarURL(void 0, 80));
        }, [g]);
        let E = i.useMemo(() => (0, $.V6)(a.type, a.skuId), [a.type, a.skuId]);
        i.useEffect(() => {
            D.default.track(eT.HAw.OPEN_MODAL, {
                type: eT.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: x,
                location_stack: I,
                sku_id: C.skuId,
                product_type: E,
            }),
                (0, H.RD)(C.skuId);
        }, [x, I, C.skuId, E]);
        let P = (0, w.o6)(),
            S = t === p.ip4.EXITING,
            O = (0, eg.$R)(a),
            k = O?.amount,
            y = null != k && (O?.discountId === eE.eR || O?.discountId === eE.Qz),
            L = i.useMemo(() => ((0, $.aw)(C) ? C.items.length : 0), [C]),
            { activeSlide: M, isTransitioning: G } = (0, Q.X)({ slideCount: L, intervalMs: 5e3 });
        return null == g
            ? null
            : (0, r.jsx)(v.f5, {
                  value: I,
                  children: (0, r.jsxs)(p.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: eO.CR,
                      returnRef: u,
                      transitionState: t,
                      size: p.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, r.jsxs)(p.$mQ, {
                              "data-migration-pending": !0,
                              className: eO.jE,
                              children: [
                                  (0, r.jsx)(ew, {
                                      user: g,
                                      product: a,
                                      category: s,
                                      onClose: n,
                                      previewingVariantIndexProps: j,
                                      selectedVariantIndex: R,
                                      shouldCheckoutWithOrbs: f,
                                      activeBundleSlide: M,
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: l()(
                                          eO.i1,
                                          C.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                              ? eO.bF
                                              : C.type === o.R.AVATAR_DECORATION
                                                ? eO.Jq
                                                : eO.eF,
                                      ),
                                      style: { backgroundImage: `url(${T})` },
                                      children: [
                                          (0, eI.pQ)(a.skuId)
                                              ? a.skuId === eI.Dp.ORB_PROFILE_BADGE
                                                  ? P || S
                                                      ? null
                                                      : (0, r.jsx)(em.z, { user: g })
                                                  : a.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, r.jsx)(eu.I, {})
                                                    : (0, r.jsx)(ep.B, { product: a, className: eO.Ms })
                                              : (0, r.jsx)(eM, {
                                                    user: g,
                                                    product: b ?? C,
                                                    activeBundleSlide: M,
                                                    isTransitioning: G,
                                                }),
                                          (0, r.jsxs)("div", {
                                              className: eO.VG,
                                              children: [
                                                  (0, r.jsx)(eA.R, {
                                                      product: a,
                                                      selectedVariantIndex: R,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, r.jsx)(et.V, { skuId: C.skuId, tab: A }),
                                                  (0, r.jsx)(p.K0, {
                                                      "aria-label": eS.intl.string(eS.t.cpT0Cq),
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
                          y &&
                              (0, r.jsx)(r.Fragment, {
                                  children: (0, r.jsxs)(p.jlY, {
                                      "data-migration-pending": !0,
                                      className: eO.Hx,
                                      children: [
                                          (0, r.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: eO.OC,
                                          }),
                                          (0, r.jsxs)("div", {
                                              className: eO.do,
                                              children: [
                                                  (0, r.jsx)(p.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: eO.Q2,
                                                      children: eS.intl.format(eS.t["78ph4b"], {
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
