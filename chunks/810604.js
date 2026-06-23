"use strict";
n.d(t, { jP: () => eh, Rf: () => eo, oK: () => eu, r6: () => ec, MR: () => ea });
var i,
    r = n(627968),
    s = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(534514),
    u = n(17928),
    c = n(331322),
    d = n(821609),
    _ = n(462887),
    h = n(315629),
    f = n(834730),
    p = n(939249),
    E = n(403581),
    m = n(736653),
    g = n(775602),
    A = n(793574),
    I = n(688810),
    T = n(287809),
    S = n(166403),
    y = n(428262),
    C = n(580630),
    N = n(526292);
let v = (0, n(945810).mj)({
    name: "2026-06-nitro-basic-card-color",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var R = n(442123),
    O = n(877624),
    b = n(978656),
    D = n(937008),
    L = n(807098),
    w = n(374200),
    M = n(380619),
    P = n(375708),
    x = n(756974);
function k() {
    let { claimableRewards: e } = (0, D.Pv)(),
        t = (0, u.bG)([w.A], () => {
            let e = w.A.getMarketingComponentByType(O.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        n = (0, L.T)(t?.bannerAsset),
        i = (0, L.T)(t?.avatarAsset),
        s = t?.assetVariant === b.Y.LARGE_TILTED;
    if (null == t || null == e || 0 === e.length) return null;
    let a = (0, M.gc)(n),
        l = t?.gradient,
        c =
            null != l && null != l.colors && l.colors.length >= 2
                ? (0, M.K5)({ gradient: l.colors, angle: l.angle ?? void 0 })
                : void 0,
        d = (0, M.x)(a, c);
    return (0, r.jsxs)("div", {
        className: x.kL,
        style: d,
        children: [
            (0, r.jsxs)("div", {
                className: x.V_,
                children: [
                    (0, r.jsx)(f.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: P.intl.string(P.t.OEtqpm),
                    }),
                    (0, r.jsx)(f.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: P.intl.formatToPlainString(P.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, r.jsx)("div", {
                    className: x.R3,
                    children: (0, r.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: o()(x.my, { [x.R_]: s }),
                    }),
                }),
        ],
    });
}
var U = n(422936),
    G = n(234419),
    F = n(862990),
    V = n(783420),
    B = n(204413),
    j = n(410516),
    H = n(774774),
    Y = n(289873),
    W = n(97352),
    K = n(795269),
    $ = n(788868),
    z = n(466919),
    q = n(707259),
    Z = n(378874);
let X = function (e) {
    let { isGift: t = !1, discountOffer: n, priceOptions: i, isApplicationHome: s = !1 } = e,
        a = (0, u.bG)([W.A], () => W.A.get($.gD.PREMIUM_GROUP_MONTH)),
        d = (0, j.N1)($.gD.PREMIUM_GROUP_MONTH),
        h = (0, _.q)((0, m.Ay)());
    if (null == a) return (0, r.jsx)(Y.y, { type: Y.y.Type.PULSING_ELLIPSIS, className: Z.xB });
    let p = (0, y.sS)(a, i, !1, t),
        E = $.WT.MONTH;
    if (null != n && null != d) {
        let e = n.discount.userUsageLimit;
        return (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)("hr", { className: o()(q.vI, { [q.oE]: s }) }),
                (0, r.jsxs)(c.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    children: [
                        (0, r.jsxs)(c.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: q.Yc,
                            children: [
                                (0, r.jsx)(l.D, {
                                    variant: s ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: P.intl.format(z.default.rCpGVA, {
                                        discountedPrice: d,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, r.jsx)(f.E, {
                                    variant: s ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: P.intl.format(z.default["4b2ByP"], { regularPrice: p }),
                                }),
                            ],
                        }),
                        (0, r.jsx)(K.R, {
                            text: P.intl.formatToPlainString(z.default.GEwdVw, {
                                percent: n.discount.amount,
                                discountOfferAmount: n.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, r.jsx)("hr", { className: o()(q.yF, { [q.oE]: s }) }),
            ],
        });
    }
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(f.E, {
                        variant: "heading-xxl/extrabold",
                        color: h ? "text-strong" : "always-white",
                        tag: "span",
                        children: p,
                    }),
                    (0, r.jsxs)(f.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, y.FJ)(E)],
                    }),
                ],
            }),
            (0, r.jsx)(l.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: P.intl.string(z.default["R+dzZw"]),
            }),
            (0, r.jsx)("hr", { className: q.yF }),
        ],
    });
};
var Q = n(860839),
    J = n(765516),
    ee = n(88001),
    et = n(115599),
    en = n(232266),
    ei = n(243002),
    er = n(241988);
function es(e) {
    let { children: t, footer: n } = e;
    return null == n
        ? (0, r.jsx)(c.B, { direction: "vertical", gap: 0, className: et.tierCardStack, children: t })
        : (0, r.jsxs)(c.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: et.tierCardStack,
              children: [
                  (0, r.jsx)(c.B, { direction: "vertical", gap: 0, className: et.tierCardStackContent, children: t }),
                  (0, r.jsx)("div", { className: et.footer, children: n }),
              ],
          });
}
function ea(e) {
    let {
            ctaButton: t,
            showYearlyPrice: n,
            className: i,
            isGift: s = !1,
            priceOptions: a,
            isApplicationHome: c = !1,
            useShortTitle: d = !1,
        } = e,
        f = (0, u.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        p = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        E = (0, G.V)(),
        g = E?.subscription_trial?.sku_id,
        A = (0, U.O)(),
        I = (0, U.p)(),
        y = f?.hasActiveTrial ? p?.premiumType : null,
        C = (0, H.Lj)(y, g),
        N = null != C,
        O = (0, _.q)((0, m.Ay)()),
        { showGiftPrice: b } = R.A.useConfig({ location: `PremiumTier0Card${s ? "" : " - DO NOT USE"}` }),
        D = v.useConfig({ location: "PremiumTier0Card" }),
        L = d ? P.intl.string(P.t.tUbSDK) : P.intl.string(P.t["t9uG/o"]),
        w = (0, r.jsxs)(es, {
            footer: t,
            children: [
                N && (0, r.jsx)(K.R, { text: C, className: et.pill }),
                (0, r.jsx)(l.D, {
                    variant: "display-md",
                    color: O ? "text-strong" : "always-white",
                    className: et.cardTitle,
                    children: L,
                }),
                (!s || b) &&
                    (0, r.jsx)(J.A, {
                        isGift: s,
                        premiumTier: $.PremiumTypes.TIER_0,
                        offerType: $.Vk.PREMIUM_TRIAL,
                        offerTierMatchesCard: g === $.pe.TIER_0,
                        showYearlyPrice: n,
                        priceOptions: a,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: et.priceHeader,
                    }),
                (0, r.jsx)("hr", { className: et.divider }),
                (0, r.jsx)(Q.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: c }),
            ],
        }),
        M = o()(et.card, et.tier0, i, { [et.pillMargin]: !c && N });
    return !s && ((0, j.hm)(A) || null != I || D)
        ? (0, r.jsx)("div", { className: M, children: w })
        : (0, r.jsx)(h.h, { color: "nitro-green", className: M, children: w });
}
var eo =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function el(e) {
    let { discountOffer: t, priceOptions: n, isGift: i, narrowLayout: a = !1 } = e,
        o = (0, j.N1)($.gD.PREMIUM_YEAR_TIER_2),
        l = s.useMemo(() => {
            try {
                let e = (0, y.y8)($.gD.PREMIUM_YEAR_TIER_2, !1, i, n);
                return (0, C.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, n]);
    return null == o || null == l
        ? null
        : (0, r.jsxs)("div", {
              className: et.annualDiscountBanner,
              children: [
                  (0, r.jsxs)("div", {
                      className: et.annualDiscountBannerText,
                      children: [
                          (0, r.jsx)(f.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "always-white",
                              children: P.intl.format(P.t["TCFNZ/"], { discountedPrice: o }),
                          }),
                          (0, r.jsx)(f.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: P.intl.format(P.t.aUTlph, { regularPrice: l }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(K.R, { text: P.intl.formatToPlainString(P.t.v5WSns, { percent: t.discount.amount }) }),
              ],
          });
}
function eu(e) {
    let {
            ctaButton: t,
            showYearlyPrice: n,
            featureSet: i = Q.Nz.DEFAULT,
            className: s,
            isGift: a = !1,
            isModal: c = !1,
            priceOptions: d,
            showPromotionalGiftBanner: f = !1,
            wumpusPosition: p = "inCard",
            isApplicationHome: E = !1,
            showWumpus: g = !0,
            showPill: A = !0,
            narrowLayout: I = !1,
        } = e,
        y = (0, u.bG)([S.A], () => S.A.getPremiumTypeSubscription()),
        C = (0, u.bG)([T.default], () => T.default.getCurrentUser()),
        v = (0, G.V)(),
        O = v?.subscription_trial?.sku_id,
        b = y?.hasActiveTrial ? C?.premiumType : null,
        D = y?.planIdFromItems === $.gD.PREMIUM_YEAR_TIER_2,
        L = (0, U.O)(),
        w = (0, U.p)(),
        M = (0, N.k5)(),
        x = null != O || null != b ? $.Vk.PREMIUM_TRIAL : null != L || M ? $.Vk.PREMIUM_DISCOUNT : null,
        F = (0, _.q)((0, m.Ay)()),
        V = null != w && !a,
        B = !a && null != L && (0, j.hm)(L),
        Y = !a && M && D && x === $.Vk.PREMIUM_DISCOUNT,
        W = (0, H.rm)(M, b, a ? null : L, v, O),
        { showGiftPrice: z } = R.A.useConfig({ location: `PremiumTier2Card${a ? "" : " - DO NOT USE"}` }),
        q = null != t || f ? (0, r.jsxs)(r.Fragment, { children: [t, f && (0, r.jsx)(k, {})] }) : null,
        Z = (0, r.jsxs)(es, {
            footer: q,
            children: [
                g &&
                    !V &&
                    !Y &&
                    (0, r.jsx)(
                        () =>
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    !B &&
                                        (0, r.jsxs)(r.Fragment, {
                                            children: [
                                                (0, r.jsx)("img", {
                                                    src: ei,
                                                    alt: "",
                                                    className: o()(et.bigCloud, et[p]),
                                                }),
                                                (0, r.jsx)("img", {
                                                    src: en,
                                                    alt: "",
                                                    className: o()(et.smallCloud, et[p]),
                                                }),
                                            ],
                                        }),
                                    (!B || null != t) &&
                                        (0, r.jsx)("img", {
                                            src: er,
                                            alt: "",
                                            className: o()(et.wumpus, et[p], {
                                                [et.withAnnualDiscountBanner]: B,
                                                [et.noGiftPrice]: a && !z,
                                            }),
                                        }),
                                ],
                            }),
                        {},
                    ),
                A && !B && (0, r.jsx)(K.R, { text: W ?? P.intl.string(P.t["6bEcYr"]), className: et.pill }),
                (0, r.jsx)(l.D, {
                    variant: "display-md",
                    color: F ? "text-strong" : "always-white",
                    className: et.cardTitle,
                    children: P.intl.string(P.t.lG6a5x),
                }),
                (!a || z) &&
                    (0, r.jsx)(J.A, {
                        isGift: a,
                        premiumTier: $.PremiumTypes.TIER_2,
                        offerType: x,
                        offerTierMatchesCard: O === $.pe.TIER_2 || (0, j.U9)(L, $.pe.TIER_2),
                        showYearlyPrice: n && !B,
                        priceOptions: d,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: et.priceHeader,
                    }),
                B
                    ? (0, r.jsx)(el, { discountOffer: L, priceOptions: d, isGift: a, narrowLayout: I })
                    : (0, r.jsx)("hr", { className: et.divider }),
                (0, r.jsx)(Q.ZP, {
                    featureSet: i,
                    isModal: c,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: E,
                    firstFeatureItemClassName:
                        B || ("inCard" !== p && "giftSelectionModal" !== p) ? void 0 : et.firstFeatureItemContainer,
                }),
            ],
        }),
        X = o()(et.card, s, { [et.withGiftBanner]: f });
    return V
        ? (0, r.jsx)("div", { className: X, children: Z })
        : (0, r.jsx)(h.h, { color: "nitro-pink", className: X, children: Z });
}
function ec(e) {
    let { className: t, ctaButton: n, isApplicationHome: i, priceOptions: s } = e,
        a = (0, _.q)((0, m.Ay)()),
        u = (0, U.p)(),
        c = (0, r.jsxs)(es, {
            footer: n,
            children: [
                (0, r.jsxs)("div", {
                    className: et.cardHeader,
                    children: [
                        (0, r.jsx)(l.D, {
                            variant: "display-md",
                            color: a ? "text-strong" : "always-white",
                            className: et.cardTitle,
                            children: P.intl.string(z.default.eSKiXk),
                        }),
                        (0, r.jsx)(K.R, {
                            text: P.intl.string(P.t.oW0eUd),
                            className: et.betaPill,
                            disableGradient: null != u,
                        }),
                    ],
                }),
                (0, r.jsx)(X, { discountOffer: u, priceOptions: s, isApplicationHome: i }),
                (0, r.jsx)(Q.Lg, { isApplicationHome: i }),
            ],
        });
    return null != u
        ? (0, r.jsx)(h.h, { color: "nitro-pink", className: o()(et.card, t), children: c })
        : (0, r.jsx)("div", { className: o()(et.card, et.borderGradient, t), children: c });
}
let ed = (e) => {
        let { subscriptionTier: t, isReducedMotion: n, tierCardProps: i, className: s, narrowLayout: a } = e,
            l = t === $.pe.TIER_2,
            u = (0, U.p)(),
            { subscribeButtonProps: _, subscriptionTier: h } = (0, B.$)({
                subscriptionTier: t,
                variantOverride: l && null == u ? "expressive" : "secondary",
            }),
            { disabled: f } = _,
            E = (0, r.jsx)(d.$, { size: "md", fullWidth: !0, ..._, disabled: f }),
            m = (0, r.jsx)(c.B, {
                direction: "vertical",
                gap: 0,
                className: o()(et.tierCardStack, { [et.premiumCardHover]: !n }),
                children: (0, r.jsx)(l ? eu : ea, {
                    className: o()(et.applicationHomeCard, { [et.narrow]: a }),
                    ctaButton: E,
                    showYearlyPrice: !0,
                    isApplicationHome: !0,
                    ...i,
                }),
            });
        return (0, r.jsx)(c.B, {
            direction: "vertical",
            gap: 0,
            className: o()(et.tierCardStack, s),
            children: f
                ? m
                : (0, r.jsx)(V.A, {
                      subscriptionTier: h,
                      children: (e) => {
                          let { onClick: t } = e;
                          return (0, r.jsx)(p.D, { onClick: t, className: et.tierCardStack, children: m });
                      },
                  }),
        });
    },
    e_ = (e) => {
        let { isReducedMotion: t, className: n } = e,
            i = (0, U.p)(),
            s =
                null != i
                    ? P.intl.format(z.default["7j70dP"], {
                          percent: i.discount?.amount,
                          premiumGroupProductName: (0, ee.DP)(),
                      })
                    : P.intl.string(P.t["2pG5Ga"]),
            a = (0, r.jsx)(d.$, {
                size: "md",
                fullWidth: !0,
                icon: E.t,
                text: s,
                variant: null != i ? "expressive" : "secondary",
            }),
            l = (0, r.jsx)(c.B, {
                direction: "vertical",
                gap: 0,
                className: o()(et.tierCardStack, { [et.premiumCardHover]: !t }),
                children: (0, r.jsx)(ec, {
                    className: o()(et.applicationHomeCard, et.narrow),
                    ctaButton: a,
                    isApplicationHome: !0,
                }),
            });
        return (0, r.jsx)(V.A, {
            subscriptionTier: $.pe.TIER_2,
            initialPlanId: $.gD.PREMIUM_GROUP_MONTH,
            children: (e) => {
                let { onClick: t } = e;
                return (0, r.jsx)(c.B, {
                    direction: "vertical",
                    gap: 0,
                    className: o()(et.tierCardStack, n),
                    children: (0, r.jsx)(p.D, { onClick: t, className: et.tierCardStack, children: l }),
                });
            },
        });
    };
function eh(e) {
    let { innerRef: t, className: n } = e,
        { analyticsLocations: i } = (0, I.Ay)(A.A.PREMIUM_MARKETING_TIER_CARD),
        s = (0, Q.pw)(t),
        a = (0, u.bG)([g.Ay], () => g.Ay.useReducedMotion),
        c = (0, F.PA)();
    return (0, r.jsx)(I.f5, {
        value: i,
        children: (0, r.jsxs)("div", {
            className: o()(et.premiumCardsContainer, n),
            children: [
                (0, r.jsx)(l.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: et.premiumCardsHeader,
                    children: P.intl.string(P.t.vLz3Zs),
                }),
                (0, r.jsxs)("div", {
                    ref: s,
                    className: et.premiumCards,
                    children: [
                        (0, r.jsx)(ed, {
                            subscriptionTier: $.pe.TIER_0,
                            isReducedMotion: a,
                            className: et.tier0CardOrder,
                            narrowLayout: c,
                        }),
                        (0, r.jsx)(ed, {
                            subscriptionTier: $.pe.TIER_2,
                            isReducedMotion: a,
                            className: et.tier2CardOrder,
                            tierCardProps: { wumpusPosition: c ? "insideCorner" : "outerCorner", showPill: !c },
                            narrowLayout: c,
                        }),
                        c && (0, r.jsx)(e_, { isReducedMotion: a, className: et.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
