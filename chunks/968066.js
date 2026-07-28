t.d(r, { jP: () => eN, Rf: () => ex, oK: () => eh, r6: () => eg, MR: () => em });
var i,
    n = t(477900),
    l = t(582128),
    a = t(503698),
    s = t.n(a),
    o = t(297264),
    c = t(17928),
    d = t(331322),
    u = t(821609),
    m = t(462887),
    x = t(315629),
    p = t(834730),
    h = t(939249),
    g = t(403581),
    j = t(736653),
    f = t(775602),
    N = t(793574),
    C = t(688810),
    v = t(287809),
    T = t(166403),
    R = t(428262),
    A = t(580630),
    E = t(526292);
let P = (0, t(945810).mj)({
    name: "2026-06-nitro-basic-card-color",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var _ = t(664504),
    y = t(877624),
    I = t(978656),
    b = t(951305),
    M = t(807098),
    S = t(412260),
    O = t(380619),
    k = t(375708),
    G = t(197350);
function D() {
    let { claimableRewards: e } = (0, b.Pv)(),
        r = (0, c.bG)([S.A], () => {
            let e = S.A.getMarketingComponentByType(y.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        t = (0, M.T)(r?.bannerAsset),
        i = (0, M.T)(r?.avatarAsset),
        l = r?.assetVariant === I.Y.LARGE_TILTED;
    if (null == r || null == e || 0 === e.length) return null;
    let a = (0, O.gc)(t),
        o = r?.gradient,
        d =
            null != o && null != o.colors && o.colors.length >= 2
                ? (0, O.K5)({ gradient: o.colors, angle: o.angle ?? void 0 })
                : void 0,
        u = (0, O.x)(a, d);
    return (0, n.jsxs)("div", {
        className: G.kL,
        style: u,
        children: [
            (0, n.jsxs)("div", {
                className: G.V_,
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: k.intl.string(k.t.OEtqpm),
                    }),
                    (0, n.jsx)(p.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: k.intl.formatToPlainString(k.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, n.jsx)("div", {
                    className: G.R3,
                    children: (0, n.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: s()(G.my, { [G.R_]: l }),
                    }),
                }),
        ],
    });
}
var B = t(422936),
    U = t(732280),
    w = t(862990),
    L = t(35587),
    H = t(783420),
    F = t(204413),
    V = t(410516),
    Y = t(774774),
    K = t(289873),
    W = t(97352),
    q = t(795269),
    z = t(202541),
    $ = t(466919),
    Z = t(184659),
    X = t(268514);
let J = function (e) {
    let { isGift: r = !1, discountOffer: t, priceOptions: i, isApplicationHome: l = !1 } = e,
        a = (0, c.bG)([W.A], () => W.A.get(z.gD.PREMIUM_GROUP_MONTH)),
        u = (0, V.N1)(z.gD.PREMIUM_GROUP_MONTH),
        x = (0, m.q)((0, j.Ay)());
    if (null == a) return (0, n.jsx)(K.y, { type: K.y.Type.PULSING_ELLIPSIS, className: X.xB });
    let h = (0, R.sS)(a, i, !1, r),
        g = z.WT.MONTH;
    if (null != t && null != u) {
        let e = t.discount.userUsageLimit;
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)("hr", { className: s()(Z.vI, { [Z.oE]: l }) }),
                (0, n.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    children: [
                        (0, n.jsxs)(d.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: Z.Yc,
                            children: [
                                (0, n.jsx)(o.D, {
                                    variant: l ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: k.intl.format($.default.rCpGVA, {
                                        discountedPrice: u,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, n.jsx)(p.E, {
                                    variant: l ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: k.intl.format($.default["4b2ByP"], { regularPrice: h }),
                                }),
                            ],
                        }),
                        (0, n.jsx)(q.R, {
                            text: k.intl.formatToPlainString($.default.GEwdVw, {
                                percent: t.discount.amount,
                                discountOfferAmount: t.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, n.jsx)("hr", { className: s()(Z.yF, { [Z.oE]: l }) }),
            ],
        });
    }
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)("div", {
                children: [
                    (0, n.jsx)(p.E, {
                        variant: "heading-xxl/extrabold",
                        color: x ? "text-strong" : "text-overlay-light",
                        tag: "span",
                        children: h,
                    }),
                    (0, n.jsxs)(p.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, R.FJ)(g)],
                    }),
                ],
            }),
            (0, n.jsx)(o.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: k.intl.string($.default["R+dzZw"]),
            }),
            (0, n.jsx)("hr", { className: Z.yF }),
        ],
    });
};
var Q = t(860839),
    ee = t(349288),
    er = t(549996),
    et = t(637706),
    ei = t(954824);
function en() {
    let e = (0, er.c)(y.C.PLAN_SELECT_CARD_BANNER),
        r =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        t = (0, M.T)(r?.asset);
    if (null == r || "" === r.body) return null;
    let i = (0, et.C)(r.helpArticle, "");
    return (0, n.jsxs)("div", {
        className: ei.kL,
        children: [
            null != t && (0, n.jsx)("img", { alt: "", className: ei.Sl, src: t }),
            (0, n.jsxs)(p.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: ei.rf,
                children: [
                    r.body,
                    null != i &&
                        (0, n.jsxs)(n.Fragment, {
                            children: ["\xa0", (0, n.jsx)(ee.Anchor, { href: i.url, children: i.linkText })],
                        }),
                ],
            }),
        ],
    });
}
var el = t(765516),
    ea = t(88001),
    es = t(984295),
    eo = t(232266),
    ec = t(243002),
    ed = t(241988);
function eu(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: es.tierCardStack, children: r })
        : (0, n.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: es.tierCardStack,
              children: [
                  (0, n.jsx)(d.B, { direction: "vertical", gap: 0, className: es.tierCardStackContent, children: r }),
                  (0, n.jsx)("div", { className: es.footer, children: t }),
              ],
          });
}
function em(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: l = !1,
            priceOptions: a,
            isApplicationHome: d = !1,
            useShortTitle: u = !1,
        } = e,
        p = (0, c.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        h = (0, c.bG)([v.default], () => v.default.getCurrentUser()),
        g = (0, U.V)(),
        f = g?.subscription_trial?.sku_id,
        N = (0, B.O)(),
        C = (0, B.p)(),
        R = p?.hasActiveTrial ? h?.premiumType : null,
        A = (0, Y.Lj)(R, f),
        E = null != A,
        y = (0, m.q)((0, j.Ay)()),
        { showGiftPrice: I } = _.A.useConfig({ location: `PremiumTier0Card${l ? "" : " - DO NOT USE"}` }),
        b = P.useConfig({ location: "PremiumTier0Card" }),
        M = u ? k.intl.string(k.t.tUbSDK) : k.intl.string(k.t["t9uG/o"]),
        S = (0, n.jsxs)(eu, {
            footer: r,
            children: [
                E && (0, n.jsx)(q.R, { text: A, className: es.pill }),
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: y ? "text-strong" : "text-overlay-light",
                    className: es.cardTitle,
                    children: M,
                }),
                (!l || I) &&
                    (0, n.jsx)(el.A, {
                        isGift: l,
                        premiumTier: z.PremiumTypes.TIER_0,
                        offerType: z.Vk.PREMIUM_TRIAL,
                        offerTierMatchesCard: f === z.pe.TIER_0,
                        showYearlyPrice: t,
                        priceOptions: a,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: es.priceHeader,
                    }),
                (0, n.jsx)("hr", { className: es.divider }),
                (0, n.jsx)(Q.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        O = s()(es.card, es.tier0, i, { [es.pillMargin]: !d && E });
    return !l && ((0, V.hm)(N) || null != C || b)
        ? (0, n.jsx)("div", { className: O, children: S })
        : (0, n.jsx)(x.h, { color: "nitro-green", className: O, children: S });
}
var ex =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function ep(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: a = !1 } = e,
        s = (0, V.N1)(z.gD.PREMIUM_YEAR_TIER_2),
        o = l.useMemo(() => {
            try {
                let e = (0, R.y8)(z.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, A.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == s || null == o
        ? null
        : (0, n.jsxs)("div", {
              className: es.annualDiscountBanner,
              children: [
                  (0, n.jsxs)("div", {
                      className: es.annualDiscountBannerText,
                      children: [
                          (0, n.jsx)(p.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: k.intl.format(k.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, n.jsx)(p.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: k.intl.format(k.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, n.jsx)(q.R, { text: k.intl.formatToPlainString(k.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function eh(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = Q.Nz.DEFAULT,
            className: l,
            isGift: a = !1,
            isModal: d = !1,
            priceOptions: u,
            showPromotionalGiftBanner: p = !1,
            wumpusPosition: h = "inCard",
            isApplicationHome: g = !1,
            showWumpus: f = !0,
            showPill: N = !0,
            narrowLayout: C = !1,
        } = e,
        R = (0, c.bG)([T.A], () => T.A.getPremiumTypeSubscription()),
        A = (0, c.bG)([v.default], () => v.default.getCurrentUser()),
        P = (0, U.V)(),
        y = P?.subscription_trial?.sku_id,
        I = R?.hasActiveTrial ? A?.premiumType : null,
        b = R?.planIdFromItems === z.gD.PREMIUM_YEAR_TIER_2,
        M = (0, B.O)(),
        S = (0, B.p)(),
        O = (0, E.k5)(),
        G = null != y || null != I ? z.Vk.PREMIUM_TRIAL : null != M || O ? z.Vk.PREMIUM_DISCOUNT : null,
        w = (0, m.q)((0, j.Ay)()),
        H = null != S && !a,
        F = !a && null != M && (0, V.hm)(M),
        K = !a && O && b && G === z.Vk.PREMIUM_DISCOUNT,
        W = (0, Y.rm)(O, I, a ? null : M, P, y),
        $ = (0, L.Sq)() && !a && null == G,
        { showGiftPrice: Z } = _.A.useConfig({ location: `PremiumTier2Card${a ? "" : " - DO NOT USE"}` }),
        X = null != r || p ? (0, n.jsxs)(n.Fragment, { children: [r, p && (0, n.jsx)(D, {})] }) : null,
        J = d && !a,
        ee = (0, n.jsxs)(eu, {
            footer: X,
            children: [
                f &&
                    !H &&
                    !K &&
                    (0, n.jsx)(function () {
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                !F &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)("img", { src: ec, alt: "", className: s()(es.bigCloud, es[h]) }),
                                            (0, n.jsx)("img", {
                                                src: eo,
                                                alt: "",
                                                className: s()(es.smallCloud, es[h]),
                                            }),
                                        ],
                                    }),
                                (!F || null != r) &&
                                    (0, n.jsx)("img", {
                                        src: ed,
                                        alt: "",
                                        className: s()(es.wumpus, es[h], {
                                            [es.withAnnualDiscountBanner]: F,
                                            [es.noGiftPrice]: a && !Z,
                                        }),
                                    }),
                            ],
                        });
                    }, {}),
                N &&
                    !F &&
                    (0, n.jsx)(q.R, {
                        text:
                            W ??
                            ($
                                ? k.intl.formatToPlainString(k.t["4SEnCZ"], { months: 1 })
                                : k.intl.string(k.t["6bEcYr"])),
                        className: es.pill,
                    }),
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: w ? "text-strong" : "text-overlay-light",
                    className: es.cardTitle,
                    children: k.intl.string(k.t.lG6a5x),
                }),
                (!a || Z) &&
                    (0, n.jsx)(el.A, {
                        isGift: a,
                        premiumTier: z.PremiumTypes.TIER_2,
                        offerType: G,
                        offerTierMatchesCard: y === z.pe.TIER_2 || (0, V.U9)(M, z.pe.TIER_2),
                        showYearlyPrice: t && !F,
                        priceOptions: u,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: es.priceHeader,
                    }),
                F
                    ? (0, n.jsx)(ep, { discountOffer: M, priceOptions: u, isGift: a, narrowLayout: C })
                    : (0, n.jsx)("hr", { className: es.divider }),
                (0, n.jsx)(Q.ZP, {
                    featureSet: i,
                    isModal: d,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        F || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : es.firstFeatureItemContainer,
                }),
                J && (0, n.jsx)(en, {}),
            ],
        }),
        er = s()(es.card, l, { [es.withGiftBanner]: p });
    return H
        ? (0, n.jsx)("div", { className: er, children: ee })
        : (0, n.jsx)(x.h, { color: "nitro-pink", className: er, children: ee });
}
function eg(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: l } = e,
        a = (0, m.q)((0, j.Ay)()),
        c = (0, B.p)(),
        d = (0, n.jsxs)(eu, {
            footer: t,
            children: [
                (0, n.jsxs)("div", {
                    className: es.cardHeader,
                    children: [
                        (0, n.jsx)(o.D, {
                            variant: "display-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: es.cardTitle,
                            children: k.intl.string($.default.eSKiXk),
                        }),
                        (0, n.jsx)(q.R, {
                            text: k.intl.string(k.t.oW0eUd),
                            className: es.betaPill,
                            disableGradient: null != c,
                        }),
                    ],
                }),
                (0, n.jsx)(J, { discountOffer: c, priceOptions: l, isApplicationHome: i }),
                (0, n.jsx)(Q.Lg, { isApplicationHome: i }),
            ],
        });
    return null != c
        ? (0, n.jsx)(x.h, { color: "nitro-pink", className: s()(es.card, r), children: d })
        : (0, n.jsx)("div", { className: s()(es.card, es.borderGradient, r), children: d });
}
function ej(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: l, narrowLayout: a } = e,
        o = r === z.pe.TIER_2,
        c = (0, B.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, F.$)({
            subscriptionTier: r,
            variantOverride: o && null == c ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, n.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        j = (0, n.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(es.tierCardStack, { [es.premiumCardHover]: !t }),
            children: (0, n.jsx)(o ? eh : em, {
                className: s()(es.applicationHomeCard, { [es.narrow]: a }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, n.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: s()(es.tierCardStack, l),
        children: p
            ? j
            : (0, n.jsx)(H.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, n.jsx)(h.D, { onClick: r, className: es.tierCardStack, children: j });
                  },
              }),
    });
}
function ef(e) {
    let { isReducedMotion: r, className: t } = e,
        i = (0, B.p)(),
        l =
            null != i
                ? k.intl.format($.default["7j70dP"], {
                      percent: i.discount?.amount,
                      premiumGroupProductName: (0, ea.DP)(),
                  })
                : k.intl.string(k.t["2pG5Ga"]),
        a = (0, n.jsx)(u.$, {
            size: "md",
            fullWidth: !0,
            icon: g.t,
            text: l,
            variant: null != i ? "expressive" : "secondary",
        }),
        o = (0, n.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(es.tierCardStack, { [es.premiumCardHover]: !r }),
            children: (0, n.jsx)(eg, {
                className: s()(es.applicationHomeCard, es.narrow),
                ctaButton: a,
                isApplicationHome: !0,
            }),
        });
    return (0, n.jsx)(H.A, {
        subscriptionTier: z.pe.TIER_2,
        initialPlanId: z.gD.PREMIUM_GROUP_MONTH,
        children: (e) => {
            let { onClick: r } = e;
            return (0, n.jsx)(d.B, {
                direction: "vertical",
                gap: 0,
                className: s()(es.tierCardStack, t),
                children: (0, n.jsx)(h.D, { onClick: r, className: es.tierCardStack, children: o }),
            });
        },
    });
}
function eN(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, C.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        l = (0, Q.pw)(r),
        a = (0, c.bG)([f.Ay], () => f.Ay.useReducedMotion),
        d = (0, w.PA)();
    return (0, n.jsx)(C.f5, {
        value: i,
        children: (0, n.jsxs)("div", {
            className: s()(es.premiumCardsContainer, t),
            children: [
                (0, n.jsx)(o.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: es.premiumCardsHeader,
                    children: k.intl.string(k.t.vLz3Zs),
                }),
                (0, n.jsxs)("div", {
                    ref: l,
                    className: es.premiumCards,
                    children: [
                        (0, n.jsx)(ej, {
                            subscriptionTier: z.pe.TIER_0,
                            isReducedMotion: a,
                            className: es.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, n.jsx)(ej, {
                            subscriptionTier: z.pe.TIER_2,
                            isReducedMotion: a,
                            className: es.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, n.jsx)(ef, { isReducedMotion: a, className: es.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
