n.d(t, { default: () => eF });
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
    b = n(20851),
    I = n(369496),
    T = n(550111),
    R = n(44120),
    y = n(465794),
    E = n(919395),
    S = n(287070),
    P = n(331402),
    O = n(101058),
    k = n(836602),
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
    $ = n(940980),
    q = n(495565),
    J = n(740076),
    K = n(466459),
    Z = n(442759),
    X = n(623373),
    Y = n(660653),
    Q = n(536572),
    ee = n(778992),
    et = n(49620),
    en = n(586445),
    ea = n(854818),
    er = n(177366),
    ei = n(11606),
    es = n(203312),
    el = n(878112),
    ec = n(501664),
    eo = n(882342),
    ed = n(572595),
    eu = n(641405),
    em = n(812016),
    ep = n(184659),
    e_ = n(561769),
    eh = n(63574),
    ex = n(364616),
    eg = n(846957),
    ef = n(293477),
    ev = n(139146),
    eA = n(929283),
    eC = n(827066),
    eN = n(525723),
    ej = n(212407),
    eb = n(347722),
    eI = n(935094),
    eT = n(57020),
    eR = n(61750),
    ey = n(758836),
    eE = n(652215),
    eS = n(788868),
    eP = n(818348),
    eO = n(985018),
    ek = n(484978);
let ew = (e) => {
        let { item: t, product: n, user: i } = e,
            s = r.useRef(null),
            l = (0, W.aw)(n),
            { firstAvatarDecoration: c } = (0, Z.f5)(n);
        return t.type === o.R.AVATAR_DECORATION
            ? (0, a.jsx)("div", {
                  className: l ? ek.X2 : ek.h1,
                  children: (0, a.jsx)(eA.i, { user: i, item: t, isHighlighted: !0 }),
              })
            : t.type === o.R.PROFILE_EFFECT
              ? (0, a.jsx)("div", {
                    className: l ? ek.ME : ek.sm,
                    ref: s,
                    children: (0, a.jsx)(P.A, {
                        skuId: t.skuId,
                        removeSetHeight: !0,
                        isHighlighted: !0,
                        delayProfileEffectIntro: !0,
                    }),
                })
              : t.type === o.R.NAMEPLATE
                ? (0, a.jsx)("div", {
                      ref: s,
                      className: ek.Dz,
                      children: (0, a.jsx)(T.A, {
                          className: ek.M4,
                          nameplate: t,
                          user: i,
                          nameplatePreviewSize: "large",
                          pendingAvatarDecoration: c,
                          isHighlighted: !0,
                      }),
                  })
                : null;
    },
    eL = (e) => {
        let { product: t, user: n, activeSlide: r = 0 } = e,
            i = t.items.length;
        return (0, a.jsx)("div", {
            className: ek.g4,
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
                                className: ek.Kg,
                                children: [
                                    (0, a.jsx)(ew, { item: e, product: t, user: n }),
                                    (0, a.jsxs)(h.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        className: ek.gx,
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
    eB = (e) => {
        let { product: t, user: n, activeSlide: r } = e;
        return (0, W.aw)(t)
            ? (0, a.jsx)(eL, { product: t, user: n, activeSlide: r })
            : (0, ey.pQ)(t.skuId)
              ? (0, a.jsx)(eg.B, { animationState: "on_hover", product: t })
              : t.items.length > 0
                ? (0, a.jsx)(ew, { item: t.items[0], product: t, user: n })
                : null;
    },
    eD = (e) => {
        let { skuId: t } = e;
        return t === d.j.PREMIUM_TIER_2_3_DAY
            ? (0, a.jsx)(h.Text, {
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
                shouldCheckoutWithOrbs: l,
                tab: d,
                onClose: g,
                returnRef: f,
                previewingVariantIndexProps: A,
                selectedVariantIndex: C,
                activeBundleSlide: N,
            } = e,
            { analyticsLocations: j } = (0, v.Ay)(),
            b = G.Ay.canUseCollectibles(n),
            { previewingVariantIndex: I, handleEntering: T, handleLeaving: S } = A,
            P = (0, eC.q)(t, I),
            O = (0, X.rb)(t, C);
        c()(null != O, "Selected product should not be null");
        let k = (0, K.h)(t),
            { isPurchased: w, isPartiallyOwnedBundle: D } = (0, K.h)(O),
            { isDisabled: U, disabledReason: M } = (0, J.I)(O.skuId),
            z = (0, W.Zu)({ product: O, isPartiallyOwnedBundle: D, isPurchased: w }),
            Y = (0, m.bG)([F.A], () => F.A.isClaiming === O?.skuId),
            ee = (0, x.Ay)(),
            en = (0, _.Mw)(ee),
            ea = (0, W.G0)(O),
            er = (0, W.yt)(O, eE.lid.DEFAULT),
            em = er?.amount === 0,
            { firstAvatarDecoration: ep } = (0, Z.f5)(P ?? O),
            eg = r.useMemo(() => (0, W.fT)(O, b), [O, b]),
            ev = (0, Q.VG)(t),
            eA = (0, eb.X)(O),
            { enabled: ej } = (0, L.Z)({ location: "collectibles_shop_product_details_modal" }),
            eI = (0, q.r)(O, !1),
            ew = (0, eN.V_)(t),
            eL = null != ew,
            eU = (t.variants?.length ?? 0) > 8,
            eM = (0, $.W)("CollectiblesShopProductDetailsModal"),
            eG = d === ey.G2.ORBS && l ? e_.Hi.ORBS : eM ? e_.Hi.FIAT : void 0,
            {
                checkoutEligiblePrices: eV,
                isOrbExclusive: eH,
                hasSufficientOrbs: eF,
            } = (0, eT.F)({ product: O, isPremiumUser: b, hasDiscountOffer: eL, prioritizedCurrency: eG }),
            ez = r.useCallback(
                () =>
                    (0, R.A)({
                        skuId: O.skuId,
                        analyticsLocations: j,
                        variantsReturnStyle: u.g.VARIANTS_GROUP,
                        onClose: (e) => (e ? g() : (0, eP.tE)()),
                    }),
                [j, g, O.skuId],
            );
        return (
            r.useEffect(() => {
                if (null != ep) return (0, E.Dx)(ep), () => (0, E.Dx)(void 0);
            }, [ep]),
            (0, a.jsxs)("div", {
                className: ek.qA,
                children: [
                    (0, a.jsx)("div", { className: ek.gn, children: (0, a.jsx)(es.A, { category: i }) }),
                    (0, a.jsx)(eB, { product: P ?? O, user: n, activeSlide: N }),
                    (0, a.jsxs)("div", {
                        children: [
                            (0, a.jsxs)("div", {
                                className: ek.h_,
                                children: [
                                    (0, a.jsx)(ei.A, { product: O, isDarkText: !en, isOrbExclusive: eH }),
                                    (0, a.jsx)(h.Heading, {
                                        variant: "heading-xl/extrabold",
                                        className: ek.v7,
                                        children: ev,
                                    }),
                                    (0, a.jsx)(h.Text, { variant: "text-sm/normal", children: eI }),
                                    (0, a.jsx)(eD, { skuId: O.skuId }),
                                    k.isPurchased || k.isPartiallyOwnedBundle
                                        ? (0, a.jsx)(et.c, { className: ek.On, isPartiallyPurchased: D })
                                        : ea
                                          ? (0, a.jsx)(h.Text, {
                                                variant: "text-md/semibold",
                                                className: ek.On,
                                                children: eO.intl.string(eO.t.rt69oo),
                                            })
                                          : ej
                                            ? (0, a.jsx)(ef.B, {
                                                  prices: eV,
                                                  product: O,
                                                  isPremiumUser: b,
                                                  discount: eg,
                                                  hasSufficientOrbs: eF,
                                                  isProductDisabled: U,
                                                  discountOfferAmount: ew,
                                              })
                                            : (0, a.jsxs)("div", {
                                                  className: ek.pw,
                                                  children: [
                                                      (0, a.jsx)(ec.A, {
                                                          product: O,
                                                          discount: eg,
                                                          isPremiumUser: b,
                                                          hideStrikethroughPrice: !b || eL,
                                                          nitroIconType: "tooltip",
                                                          nitroIconSize: "xs",
                                                          discountOfferAmount: ew,
                                                      }),
                                                      b || eL ? null : (0, a.jsx)(eo.A, { product: O }),
                                                  ],
                                              }),
                                ],
                            }),
                            (0, X.B1)(t) &&
                                (0, a.jsx)(h.M1G, {
                                    children: (0, a.jsxs)("div", {
                                        className: s()(ek.Oj, { [ek.OJ]: eU }),
                                        children: [
                                            eU &&
                                                (0, a.jsx)(eh.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: I,
                                                    className: ek.L$,
                                                }),
                                            (0, a.jsx)(ex.A, {
                                                skuId: t.skuId,
                                                onVariantEnter: T,
                                                onVariantExit: S,
                                                wrap: !0,
                                            }),
                                            !eU &&
                                                (0, a.jsx)(eh.A, {
                                                    skuId: t.skuId,
                                                    overrideVariantIndex: I,
                                                    className: ek.L$,
                                                }),
                                        ],
                                    }),
                                }),
                            null !== M &&
                                (0, a.jsx)(h.Text, { variant: "text-xs/normal", className: ek.H$, children: M }),
                            (0, a.jsx)(h.BJc, {
                                direction: "vertical",
                                gap: 8,
                                children: (() => {
                                    if (ea && !b && !em) {
                                        let e;
                                        return (
                                            (e = eO.intl.string(eO.t.sEAnVH)),
                                            (0, a.jsx)(y.A, {
                                                subscriptionTier: eS.pe.TIER_2,
                                                fullWidth: !0,
                                                textOptions: { textOverride: e },
                                                onClick: ed.M,
                                                onSubscribeModalClose: () => {
                                                    (0, ed.t)({
                                                        product: O,
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
                                    return z
                                        ? w
                                            ? eA
                                                ? (0, a.jsxs)(h.ButtonGroup, {
                                                      wrap: !1,
                                                      fullWidth: !0,
                                                      children: [
                                                          (0, a.jsx)(eu.A, { product: O, onSuccess: g }),
                                                          (0, a.jsx)(el.A, { primary: !0, product: O, onSuccess: g }),
                                                      ],
                                                  })
                                                : (0, a.jsx)(eu.A, { product: O, onSuccess: g })
                                            : ea
                                              ? (0, a.jsx)(h.Button, {
                                                    loading: Y,
                                                    loadingStartedLabel: eO.intl.string(eO.t["TYw+9s"]),
                                                    loadingFinishedLabel: eO.intl.string(eO.t.Pg1UP5),
                                                    onClick: async () => {
                                                        await (0, H.iJ)(O.skuId),
                                                            g(),
                                                            (0, eR.A)({
                                                                product: O,
                                                                analyticsLocations: j,
                                                                purchaseType: ey.gs.PREMIUM_PURCHASE,
                                                            });
                                                    },
                                                    text: eO.intl.string(eO.t.zp6caO),
                                                    fullWidth: !0,
                                                })
                                              : (0, a.jsx)(a.Fragment, {
                                                    children: eV.map((e, t) => {
                                                        let n,
                                                            r = 0 === t;
                                                        if (e.currency === eP.Yr.DISCORD_ORB) {
                                                            let t, n, i, s;
                                                            return (
                                                                (t = U
                                                                    ? eO.intl.string(eO.t.cTdr3x)
                                                                    : eO.intl.string(eO.t.zqh7ZM)),
                                                                (n = !eF || U),
                                                                (i = eO.intl.formatToPlainString(eO.t.yi41qQ, {
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
                                                                                skuId: O.skuId,
                                                                                onCheckoutSuccess: (e) => {
                                                                                    let { entitlements: t } = e;
                                                                                    (0, H.gB)({
                                                                                        variantsReturnStyle:
                                                                                            u.g.VARIANTS_GROUP,
                                                                                    }),
                                                                                        g(),
                                                                                        (0, eR.A)({
                                                                                            product: O,
                                                                                            analyticsLocations: j,
                                                                                            itemConsumed:
                                                                                                t[0]?.consumed,
                                                                                            purchaseType: ey.gs.ORB,
                                                                                        });
                                                                                },
                                                                                analyticsLocations: j,
                                                                            });
                                                                        },
                                                                        disabled: n,
                                                                        "aria-label": s,
                                                                        text: eO.intl.format(eO.t.lOtBOI, {
                                                                            orbPrice: e.amount,
                                                                            orbIconHook: () =>
                                                                                (0, a.jsx)(h.Cp8, {
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
                                                            (n = (0, W.aw)(O)
                                                                ? eO.intl.string(eO.t.V1AWw0)
                                                                : O.type === o.R.PROFILE_EFFECT
                                                                  ? eO.intl.string(eO.t.kAeDcK)
                                                                  : O.type === o.R.NAMEPLATE
                                                                    ? eO.intl.string(eO.t.H3vhqU)
                                                                    : eO.intl.string(eO.t.AQ0Veg)),
                                                            eL
                                                                ? (n = eO.intl.formatToPlainString(eO.t["5U5RB5"], {
                                                                      discountOfferAmount: ew,
                                                                  }))
                                                                : ej &&
                                                                  (n = eO.intl.formatToPlainString(eO.t["cNSL/j"], {
                                                                      price: (0, V.$g)(e.amount, e.currency),
                                                                  })),
                                                            (0, a.jsxs)(h.ButtonGroup, {
                                                                wrap: !1,
                                                                fullWidth: !0,
                                                                children: [
                                                                    (0, a.jsx)(h.Button, {
                                                                        variant: r ? "primary" : "secondary",
                                                                        onClick: ez,
                                                                        text: n,
                                                                        fullWidth: !0,
                                                                    }),
                                                                    eA &&
                                                                        (0, a.jsx)(el.A, {
                                                                            primary: r,
                                                                            product: O,
                                                                            onSuccess: g,
                                                                        }),
                                                                ],
                                                            })
                                                        );
                                                    }),
                                                })
                                        : eA
                                          ? (0, a.jsx)(el.A, { primary: !0, product: O, onSuccess: g, fullWidth: !0 })
                                          : null;
                                })(),
                            }),
                            (0, a.jsx)(h.Text, {
                                className: s()(ek.ed, !en && ek.un),
                                variant: "text-xxs/normal",
                                children: ea && !w ? eO.intl.string(eO.t.nKdAlO) : null,
                            }),
                        ],
                    }),
                ],
            })
        );
    },
    eM = (e) => {
        let { user: t, innerClassName: n } = e;
        return (0, a.jsx)("div", {
            className: ek.mV,
            children: (0, a.jsx)(A.A, {
                avatar: (0, a.jsx)(h.euF, {
                    src: t.avatarSrc,
                    size: h._3J.SIZE_32,
                    "aria-label": t.name,
                    status: h.clD.ONLINE,
                }),
                name: t.name,
                innerClassName: s()(ek.$L, n),
            }),
        });
    },
    eG = (e) => {
        let { user: t, nameplate: n, avatarDecoration: r } = e,
            i = (0, I.Ov)();
        return (0, a.jsx)("div", {
            className: ek.nJ,
            role: "img",
            "aria-label": eO.intl.string(eO.t.SZeUdR),
            children: (0, a.jsxs)(h.M1G, {
                children: [
                    (0, a.jsx)(eM, { user: i.mallow, innerClassName: ek.ab }),
                    (0, a.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: ek.OS,
                        children: [eO.intl.string(eO.t["yzW/fZ"]), " - 3"],
                    }),
                    (0, a.jsx)(eM, { user: i.phibi, innerClassName: ek.e9 }),
                    (0, a.jsx)("div", {
                        className: ek.mV,
                        children: (0, a.jsx)(T.A, {
                            className: ek.M4,
                            innerClassName: ek.e9,
                            user: t,
                            nameplate: n,
                            showStatus: !0,
                            isHighlighted: !0,
                            skipEffectDisplayName: !0,
                            pendingAvatarDecoration: r,
                        }),
                    }),
                    (0, a.jsx)(eM, { user: i.locke, innerClassName: ek.e9 }),
                    (0, a.jsxs)(h.Text, {
                        variant: "text-sm/semibold",
                        className: ek.OS,
                        children: [eO.intl.string(eO.t["NG43/6"]), " - 12"],
                    }),
                    (0, a.jsx)(eM, { user: i.boom, innerClassName: ek.bD }),
                    (0, a.jsx)(eM, { user: i.cherry, innerClassName: ek.bD }),
                ],
            }),
        });
    },
    eV = (e) => {
        let { product: t, user: n, activeBundleSlide: r, isTransitioning: i } = e,
            l = (0, m.bG)([g.A], () => g.A.useReducedMotion),
            c = G.Ay.canUsePremiumProfileCustomization(n),
            { pendingAvatar: d, ...u } = (0, m.cf)([k.A], () => k.A.getPendingChanges()),
            p = (0, O.V7)({ userId: n.id, image: d }),
            _ = t.type === o.R.AVATAR_DECORATION,
            [h] = t.items,
            { firstAvatarDecoration: x, firstProfileEffect: f, firstNameplate: v } = (0, Z.f5)(t),
            A = null != f,
            C = () =>
                (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(S.A, {
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
                        _ && (0, a.jsx)(eH, { user: n }),
                    ],
                }),
            N = (e) => (0, a.jsx)(eG, { user: n, nameplate: e, avatarDecoration: x });
        if (t.type === o.R.BUNDLE) {
            if (!(0, Y.Wb)(t))
                return (0, a.jsx)("div", {
                    className: ek.RA,
                    children: (0, a.jsx)("div", { className: ek.bo, children: C() }),
                });
            {
                let e = r ?? 0,
                    n = t.items[e],
                    c = t.items[Math.max(0, e - 1)],
                    d = c?.type !== n?.type && !l;
                return n.type === o.R.NAMEPLATE
                    ? (0, a.jsx)("div", { className: s()(ek.Zj, i && d ? ek.p2 : ""), children: N(n) })
                    : (0, a.jsx)("div", { className: s()(ek.Ak, i && d ? ek.p2 : ""), children: C() });
            }
        }
        return null != v
            ? (0, a.jsx)("div", { className: ek.Zj, children: N(v) })
            : (0, a.jsx)("div", { className: h?.type === o.R.AVATAR_DECORATION ? ek.RA : ek.Ak, children: C() });
    },
    eH = (e) => {
        let { user: t } = e,
            n = ((e) => {
                let { author: t } = e;
                return (0, C.rh)({
                    ...(0, N.Ay)({ author: t, channelId: "1337", content: eO.intl.string(eO.t.d5YwK5) }),
                    state: eE.cmJ.SENT,
                    id: "0",
                });
            })({ author: t });
        return (0, a.jsx)("div", {
            role: "img",
            "aria-label": eO.intl.string(eO.t["TN+ZvB"]),
            children: (0, a.jsx)(h.M1G, {
                children: (0, a.jsxs)(h.ZpM, {
                    className: ek.f7,
                    outline: !0,
                    "aria-hidden": !0,
                    children: [
                        (0, a.jsx)(b.A, { className: ek.G5, author: (0, j.p_)(n), message: n }, n.id),
                        (0, a.jsxs)("div", {
                            className: ek.lG,
                            children: [
                                (0, a.jsx)(h.U1e, { size: "md", color: "currentColor", className: ek.hq }),
                                (0, a.jsx)(h.nm2, { size: "md", color: "currentColor", className: ek.hq }),
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
            C = (0, eI.f)(i),
            { previewingVariantIndex: N } = C,
            j = (0, z.Q)(i),
            b = (0, eC.q)(i, N),
            I = (0, X.rb)(i, j);
        c()(null != I, "Selected product should not be null");
        let { analyticsLocations: T } = (0, v.Ay)([..._, f.A.COLLECTIBLES_SHOP_DETAILS_MODAL]);
        (0, er.Yr)(I.skuId);
        let R = (0, ej.U1)(l);
        r.useEffect(() => {
            null != A && (0, w.A)(A.id, A.getAvatarURL(void 0, 80));
        }, [A]);
        let y = r.useMemo(() => (0, W.V6)(i.type, i.skuId), [i.type, i.skuId]);
        r.useEffect(() => {
            U.default.track(eE.HAw.OPEN_MODAL, {
                type: eE.JJy.COLLECTIBLES_SHOP_DETAILS_MODAL,
                source: p,
                location_stack: T,
                sku_id: I.skuId,
                product_type: y,
            }),
                (0, H.RD)(I.skuId);
        }, [p, T, I.skuId, y]);
        let E = (0, B.o6)(),
            S = t === h.ip4.EXITING,
            P = (0, eN.$R)(i),
            O = P?.amount,
            k = null != O && (P?.discountId === eS.eR || P?.discountId === eS.Qz),
            L = r.useMemo(() => ((0, W.aw)(I) ? I.items.length : 0), [I]),
            { activeSlide: M, isTransitioning: G } = (0, ee.X)({ slideCount: L, intervalMs: 5e3 });
        return null == A
            ? null
            : (0, a.jsx)(v.f5, {
                  value: T,
                  children: (0, a.jsxs)(h.EOs, {
                      "data-migration-pending": !0,
                      hideShadow: !0,
                      className: ek.CR,
                      returnRef: u,
                      transitionState: t,
                      size: h.rIJ.DYNAMIC,
                      parentComponent: "CollectiblesShopProductDetailsModal",
                      children: [
                          (0, a.jsxs)(h.$mQ, {
                              "data-migration-pending": !0,
                              className: ek.jE,
                              children: [
                                  (0, a.jsx)(eU, {
                                      user: A,
                                      product: i,
                                      category: l,
                                      onClose: n,
                                      previewingVariantIndexProps: C,
                                      selectedVariantIndex: j,
                                      shouldCheckoutWithOrbs: x,
                                      tab: g,
                                      activeBundleSlide: M,
                                  }),
                                  (0, a.jsxs)("div", {
                                      className: s()(
                                          ek.i1,
                                          I.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                              ? ek.bF
                                              : I.type === o.R.AVATAR_DECORATION
                                                ? ek.Jq
                                                : ek.eF,
                                      ),
                                      style: { backgroundImage: `url(${R})` },
                                      children: [
                                          (0, ey.pQ)(i.skuId)
                                              ? i.skuId === ey.Dp.ORB_PROFILE_BADGE
                                                  ? E || S
                                                      ? null
                                                      : (0, a.jsx)(ep.z, { user: A })
                                                  : i.skuId === d.j.PREMIUM_TIER_2_3_DAY
                                                    ? (0, a.jsx)(em.I, {})
                                                    : (0, a.jsx)(eg.B, { product: i, className: ek.Ms })
                                              : (0, a.jsx)(eV, {
                                                    user: A,
                                                    product: b ?? I,
                                                    activeBundleSlide: M,
                                                    isTransitioning: G,
                                                }),
                                          (0, a.jsxs)("div", {
                                              className: ek.VG,
                                              children: [
                                                  (0, a.jsx)(ev.R, {
                                                      product: i,
                                                      selectedVariantIndex: j,
                                                      variant: "overlay-secondary",
                                                      size: "sm",
                                                  }),
                                                  (0, a.jsx)(en.V, { skuId: I.skuId, tab: g }),
                                                  (0, a.jsx)(h.K0, {
                                                      "aria-label": eO.intl.string(eO.t.cpT0Cq),
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
                          k &&
                              (0, a.jsx)(a.Fragment, {
                                  children: (0, a.jsxs)(h.jlY, {
                                      "data-migration-pending": !0,
                                      className: ek.Hx,
                                      children: [
                                          (0, a.jsx)("img", {
                                              src: "https://cdn.discordapp.com/assets/content/af456efec518d9c43ad1407844e1a8a6c60bf3bd7dc69691437801afd591d0b4.jpeg",
                                              alt: "",
                                              className: ek.OC,
                                          }),
                                          (0, a.jsxs)("div", {
                                              className: ek.do,
                                              children: [
                                                  (0, a.jsx)(h.Text, {
                                                      variant: "text-sm/semibold",
                                                      className: ek.Q2,
                                                      children: eO.intl.format(eO.t["78ph4b"], {
                                                          discountOfferAmount: O,
                                                      }),
                                                  }),
                                                  P?.expiresAt != null && (0, a.jsx)(ea.e, { endDate: P.expiresAt }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                      ],
                  }),
              });
    };
