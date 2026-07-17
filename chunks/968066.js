t.d(r, { jP: () => ej, Rf: () => eu, oK: () => ex, r6: () => ep, MR: () => ed });
var i,
    a = t(627968),
    n = t(64700),
    l = t(503698),
    s = t.n(l),
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
    E = t(580630),
    A = t(526292);
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
    G = t(375708),
    k = t(756974);
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
        n = r?.assetVariant === I.Y.LARGE_TILTED;
    if (null == r || null == e || 0 === e.length) return null;
    let l = (0, O.gc)(t),
        o = r?.gradient,
        d =
            null != o && null != o.colors && o.colors.length >= 2
                ? (0, O.K5)({ gradient: o.colors, angle: o.angle ?? void 0 })
                : void 0,
        u = (0, O.x)(l, d);
    return (0, a.jsxs)("div", {
        className: k.kL,
        style: u,
        children: [
            (0, a.jsxs)("div", {
                className: k.V_,
                children: [
                    (0, a.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: G.intl.string(G.t.OEtqpm),
                    }),
                    (0, a.jsx)(p.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: G.intl.formatToPlainString(G.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, a.jsx)("div", {
                    className: k.R3,
                    children: (0, a.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: s()(k.my, { [k.R_]: n }),
                    }),
                }),
        ],
    });
}
var B = t(422936),
    U = t(234419),
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
    Z = t(707259),
    X = t(378874);
let J = function (e) {
    let { isGift: r = !1, discountOffer: t, priceOptions: i, isApplicationHome: n = !1 } = e,
        l = (0, c.bG)([W.A], () => W.A.get(z.gD.PREMIUM_GROUP_MONTH)),
        u = (0, V.N1)(z.gD.PREMIUM_GROUP_MONTH),
        x = (0, m.q)((0, j.Ay)());
    if (null == l) return (0, a.jsx)(K.y, { type: K.y.Type.PULSING_ELLIPSIS, className: X.xB });
    let h = (0, R.sS)(l, i, !1, r),
        g = z.WT.MONTH;
    if (null != t && null != u) {
        let e = t.discount.userUsageLimit;
        return (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)("hr", { className: s()(Z.vI, { [Z.oE]: n }) }),
                (0, a.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    children: [
                        (0, a.jsxs)(d.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: Z.Yc,
                            children: [
                                (0, a.jsx)(o.D, {
                                    variant: n ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: G.intl.format($.default.rCpGVA, {
                                        discountedPrice: u,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, a.jsx)(p.E, {
                                    variant: n ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: G.intl.format($.default["4b2ByP"], { regularPrice: h }),
                                }),
                            ],
                        }),
                        (0, a.jsx)(q.R, {
                            text: G.intl.formatToPlainString($.default.GEwdVw, {
                                percent: t.discount.amount,
                                discountOfferAmount: t.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, a.jsx)("hr", { className: s()(Z.yF, { [Z.oE]: n }) }),
            ],
        });
    }
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsxs)("div", {
                children: [
                    (0, a.jsx)(p.E, {
                        variant: "heading-xxl/extrabold",
                        color: x ? "text-strong" : "text-overlay-light",
                        tag: "span",
                        children: h,
                    }),
                    (0, a.jsxs)(p.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, R.FJ)(g)],
                    }),
                ],
            }),
            (0, a.jsx)(o.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: G.intl.string($.default["R+dzZw"]),
            }),
            (0, a.jsx)("hr", { className: Z.yF }),
        ],
    });
};
var Q = t(860839),
    ee = t(549996),
    er = t(985216);
function et() {
    let e = (0, ee.c)(y.C.PLAN_SELECT_CARD_BANNER),
        r =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        t = (0, M.T)(r?.asset);
    return null == r || "" === r.body
        ? null
        : (0, a.jsxs)("div", {
              className: er.kL,
              children: [
                  null != t && (0, a.jsx)("img", { alt: "", className: er.Sl, src: t }),
                  (0, a.jsx)(p.E, {
                      variant: "text-md/normal",
                      color: "text-default",
                      className: er.rf,
                      children: r.body,
                  }),
              ],
          });
}
var ei = t(765516),
    ea = t(88001),
    en = t(115599),
    el = t(232266),
    es = t(243002),
    eo = t(241988);
function ec(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, a.jsx)(d.B, { direction: "vertical", gap: 0, className: en.tierCardStack, children: r })
        : (0, a.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: en.tierCardStack,
              children: [
                  (0, a.jsx)(d.B, { direction: "vertical", gap: 0, className: en.tierCardStackContent, children: r }),
                  (0, a.jsx)("div", { className: en.footer, children: t }),
              ],
          });
}
function ed(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: n = !1,
            priceOptions: l,
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
        E = (0, Y.Lj)(R, f),
        A = null != E,
        y = (0, m.q)((0, j.Ay)()),
        { showGiftPrice: I } = _.A.useConfig({ location: `PremiumTier0Card${n ? "" : " - DO NOT USE"}` }),
        b = P.useConfig({ location: "PremiumTier0Card" }),
        M = u ? G.intl.string(G.t.tUbSDK) : G.intl.string(G.t["t9uG/o"]),
        S = (0, a.jsxs)(ec, {
            footer: r,
            children: [
                A && (0, a.jsx)(q.R, { text: E, className: en.pill }),
                (0, a.jsx)(o.D, {
                    variant: "display-md",
                    color: y ? "text-strong" : "text-overlay-light",
                    className: en.cardTitle,
                    children: M,
                }),
                (!n || I) &&
                    (0, a.jsx)(ei.A, {
                        isGift: n,
                        premiumTier: z.PremiumTypes.TIER_0,
                        offerType: z.Vk.PREMIUM_TRIAL,
                        offerTierMatchesCard: f === z.pe.TIER_0,
                        showYearlyPrice: t,
                        priceOptions: l,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: en.priceHeader,
                    }),
                (0, a.jsx)("hr", { className: en.divider }),
                (0, a.jsx)(Q.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        O = s()(en.card, en.tier0, i, { [en.pillMargin]: !d && A });
    return !n && ((0, V.hm)(N) || null != C || b)
        ? (0, a.jsx)("div", { className: O, children: S })
        : (0, a.jsx)(x.h, { color: "nitro-green", className: O, children: S });
}
var eu =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function em(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: l = !1 } = e,
        s = (0, V.N1)(z.gD.PREMIUM_YEAR_TIER_2),
        o = n.useMemo(() => {
            try {
                let e = (0, R.y8)(z.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, E.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == s || null == o
        ? null
        : (0, a.jsxs)("div", {
              className: en.annualDiscountBanner,
              children: [
                  (0, a.jsxs)("div", {
                      className: en.annualDiscountBannerText,
                      children: [
                          (0, a.jsx)(p.E, {
                              variant: l ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: G.intl.format(G.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, a.jsx)(p.E, {
                              variant: l ? "text-xs/normal" : "text-sm/normal",
                              children: G.intl.format(G.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, a.jsx)(q.R, { text: G.intl.formatToPlainString(G.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function ex(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = Q.Nz.DEFAULT,
            className: n,
            isGift: l = !1,
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
        E = (0, c.bG)([v.default], () => v.default.getCurrentUser()),
        P = (0, U.V)(),
        y = P?.subscription_trial?.sku_id,
        I = R?.hasActiveTrial ? E?.premiumType : null,
        b = R?.planIdFromItems === z.gD.PREMIUM_YEAR_TIER_2,
        M = (0, B.O)(),
        S = (0, B.p)(),
        O = (0, A.k5)(),
        k = null != y || null != I ? z.Vk.PREMIUM_TRIAL : null != M || O ? z.Vk.PREMIUM_DISCOUNT : null,
        w = (0, m.q)((0, j.Ay)()),
        H = null != S && !l,
        F = !l && null != M && (0, V.hm)(M),
        K = !l && O && b && k === z.Vk.PREMIUM_DISCOUNT,
        W = (0, Y.rm)(O, I, l ? null : M, P, y),
        $ = (0, L.Sq)() && !l && null == k,
        { showGiftPrice: Z } = _.A.useConfig({ location: `PremiumTier2Card${l ? "" : " - DO NOT USE"}` }),
        X = null != r || p ? (0, a.jsxs)(a.Fragment, { children: [r, p && (0, a.jsx)(D, {})] }) : null,
        J = d && !l,
        ee = (0, a.jsxs)(ec, {
            footer: X,
            children: [
                f &&
                    !H &&
                    !K &&
                    (0, a.jsx)(function () {
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                !F &&
                                    (0, a.jsxs)(a.Fragment, {
                                        children: [
                                            (0, a.jsx)("img", { src: es, alt: "", className: s()(en.bigCloud, en[h]) }),
                                            (0, a.jsx)("img", {
                                                src: el,
                                                alt: "",
                                                className: s()(en.smallCloud, en[h]),
                                            }),
                                        ],
                                    }),
                                (!F || null != r) &&
                                    (0, a.jsx)("img", {
                                        src: eo,
                                        alt: "",
                                        className: s()(en.wumpus, en[h], {
                                            [en.withAnnualDiscountBanner]: F,
                                            [en.noGiftPrice]: l && !Z,
                                        }),
                                    }),
                            ],
                        });
                    }, {}),
                N &&
                    !F &&
                    (0, a.jsx)(q.R, {
                        text:
                            W ??
                            ($
                                ? G.intl.formatToPlainString(G.t["4SEnCZ"], { months: 1 })
                                : G.intl.string(G.t["6bEcYr"])),
                        className: en.pill,
                    }),
                (0, a.jsx)(o.D, {
                    variant: "display-md",
                    color: w ? "text-strong" : "text-overlay-light",
                    className: en.cardTitle,
                    children: G.intl.string(G.t.lG6a5x),
                }),
                (!l || Z) &&
                    (0, a.jsx)(ei.A, {
                        isGift: l,
                        premiumTier: z.PremiumTypes.TIER_2,
                        offerType: k,
                        offerTierMatchesCard: y === z.pe.TIER_2 || (0, V.U9)(M, z.pe.TIER_2),
                        showYearlyPrice: t && !F,
                        priceOptions: u,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: en.priceHeader,
                    }),
                F
                    ? (0, a.jsx)(em, { discountOffer: M, priceOptions: u, isGift: l, narrowLayout: C })
                    : (0, a.jsx)("hr", { className: en.divider }),
                (0, a.jsx)(Q.ZP, {
                    featureSet: i,
                    isModal: d,
                    isGift: l,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        F || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : en.firstFeatureItemContainer,
                }),
                J && (0, a.jsx)(et, {}),
            ],
        }),
        er = s()(en.card, n, { [en.withGiftBanner]: p });
    return H
        ? (0, a.jsx)("div", { className: er, children: ee })
        : (0, a.jsx)(x.h, { color: "nitro-pink", className: er, children: ee });
}
function ep(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: n } = e,
        l = (0, m.q)((0, j.Ay)()),
        c = (0, B.p)(),
        d = (0, a.jsxs)(ec, {
            footer: t,
            children: [
                (0, a.jsxs)("div", {
                    className: en.cardHeader,
                    children: [
                        (0, a.jsx)(o.D, {
                            variant: "display-md",
                            color: l ? "text-strong" : "text-overlay-light",
                            className: en.cardTitle,
                            children: G.intl.string($.default.eSKiXk),
                        }),
                        (0, a.jsx)(q.R, {
                            text: G.intl.string(G.t.oW0eUd),
                            className: en.betaPill,
                            disableGradient: null != c,
                        }),
                    ],
                }),
                (0, a.jsx)(J, { discountOffer: c, priceOptions: n, isApplicationHome: i }),
                (0, a.jsx)(Q.Lg, { isApplicationHome: i }),
            ],
        });
    return null != c
        ? (0, a.jsx)(x.h, { color: "nitro-pink", className: s()(en.card, r), children: d })
        : (0, a.jsx)("div", { className: s()(en.card, en.borderGradient, r), children: d });
}
function eh(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: n, narrowLayout: l } = e,
        o = r === z.pe.TIER_2,
        c = (0, B.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, F.$)({
            subscriptionTier: r,
            variantOverride: o && null == c ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, a.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        j = (0, a.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(en.tierCardStack, { [en.premiumCardHover]: !t }),
            children: (0, a.jsx)(o ? ex : ed, {
                className: s()(en.applicationHomeCard, { [en.narrow]: l }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, a.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: s()(en.tierCardStack, n),
        children: p
            ? j
            : (0, a.jsx)(H.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, a.jsx)(h.D, { onClick: r, className: en.tierCardStack, children: j });
                  },
              }),
    });
}
function eg(e) {
    let { isReducedMotion: r, className: t } = e,
        i = (0, B.p)(),
        n =
            null != i
                ? G.intl.format($.default["7j70dP"], {
                      percent: i.discount?.amount,
                      premiumGroupProductName: (0, ea.DP)(),
                  })
                : G.intl.string(G.t["2pG5Ga"]),
        l = (0, a.jsx)(u.$, {
            size: "md",
            fullWidth: !0,
            icon: g.t,
            text: n,
            variant: null != i ? "expressive" : "secondary",
        }),
        o = (0, a.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(en.tierCardStack, { [en.premiumCardHover]: !r }),
            children: (0, a.jsx)(ep, {
                className: s()(en.applicationHomeCard, en.narrow),
                ctaButton: l,
                isApplicationHome: !0,
            }),
        });
    return (0, a.jsx)(H.A, {
        subscriptionTier: z.pe.TIER_2,
        initialPlanId: z.gD.PREMIUM_GROUP_MONTH,
        children: (e) => {
            let { onClick: r } = e;
            return (0, a.jsx)(d.B, {
                direction: "vertical",
                gap: 0,
                className: s()(en.tierCardStack, t),
                children: (0, a.jsx)(h.D, { onClick: r, className: en.tierCardStack, children: o }),
            });
        },
    });
}
function ej(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, C.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, Q.pw)(r),
        l = (0, c.bG)([f.Ay], () => f.Ay.useReducedMotion),
        d = (0, w.PA)();
    return (0, a.jsx)(C.f5, {
        value: i,
        children: (0, a.jsxs)("div", {
            className: s()(en.premiumCardsContainer, t),
            children: [
                (0, a.jsx)(o.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: en.premiumCardsHeader,
                    children: G.intl.string(G.t.vLz3Zs),
                }),
                (0, a.jsxs)("div", {
                    ref: n,
                    className: en.premiumCards,
                    children: [
                        (0, a.jsx)(eh, {
                            subscriptionTier: z.pe.TIER_0,
                            isReducedMotion: l,
                            className: en.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, a.jsx)(eh, {
                            subscriptionTier: z.pe.TIER_2,
                            isReducedMotion: l,
                            className: en.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, a.jsx)(eg, { isReducedMotion: l, className: en.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
