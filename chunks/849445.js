t.d(r, { jP: () => ef, Rf: () => em, oK: () => ep, r6: () => eh, MR: () => eu });
var i,
    l = t(477900),
    n = t(582128),
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
    T = t(287809),
    v = t(166403),
    R = t(158045),
    A = t(580630),
    E = t(526292),
    _ = t(664504),
    P = t(877624),
    y = t(978656),
    I = t(951305),
    b = t(807098),
    M = t(412260),
    S = t(380619),
    G = t(375708),
    O = t(197350);
function k() {
    let { claimableRewards: e } = (0, I.Pv)(),
        r = (0, c.bG)([M.A], () => {
            let e = M.A.getMarketingComponentByType(P.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        t = (0, b.T)(r?.bannerAsset),
        i = (0, b.T)(r?.avatarAsset),
        n = r?.assetVariant === y.Y.LARGE_TILTED;
    if (null == r || null == e || 0 === e.length) return null;
    let a = (0, S.gc)(t),
        o = r?.gradient,
        d =
            null != o && null != o.colors && o.colors.length >= 2
                ? (0, S.K5)({ gradient: o.colors, angle: o.angle ?? void 0 })
                : void 0,
        u = (0, S.x)(a, d);
    return (0, l.jsxs)("div", {
        className: O.kL,
        style: u,
        children: [
            (0, l.jsxs)("div", {
                className: O.V_,
                children: [
                    (0, l.jsx)(p.E, {
                        variant: "text-md/bold",
                        color: "text-overlay-light",
                        children: G.intl.string(G.t.OEtqpm),
                    }),
                    (0, l.jsx)(p.E, {
                        variant: "text-md/medium",
                        color: "text-overlay-light",
                        children: G.intl.formatToPlainString(G.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != i &&
                (0, l.jsx)("div", {
                    className: O.R3,
                    children: (0, l.jsx)("img", {
                        alt: "gift promotion reward",
                        src: i,
                        className: s()(O.my, { [O.R_]: n }),
                    }),
                }),
        ],
    });
}
var D = t(724651),
    B = t(732280),
    U = t(862990),
    w = t(35587),
    L = t(783420),
    H = t(204413),
    F = t(410516),
    V = t(774774),
    Y = t(289873),
    K = t(97352),
    W = t(795269),
    q = t(202541),
    z = t(466919),
    $ = t(184659),
    Z = t(268514);
let X = function (e) {
    let { isGift: r = !1, discountOffer: t, priceOptions: i, isApplicationHome: n = !1 } = e,
        a = (0, c.bG)([K.A], () => K.A.get(q.gD.PREMIUM_GROUP_MONTH)),
        u = (0, F.N1)(q.gD.PREMIUM_GROUP_MONTH),
        x = (0, m.q)((0, j.Ay)());
    if (null == a) return (0, l.jsx)(Y.y, { type: Y.y.Type.PULSING_ELLIPSIS, className: Z.xB });
    let h = (0, R.sS)(a, i, !1, r),
        g = q.WT.MONTH;
    if (null != t && null != u) {
        let e = t.discount.userUsageLimit;
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("hr", { className: s()($.vI, { [$.oE]: n }) }),
                (0, l.jsxs)(d.B, {
                    direction: "horizontal",
                    align: "center",
                    justify: "space-between",
                    gap: 12,
                    fullWidth: !1,
                    children: [
                        (0, l.jsxs)(d.B, {
                            direction: "vertical",
                            gap: 4,
                            fullWidth: !1,
                            className: $.Yc,
                            children: [
                                (0, l.jsx)(o.D, {
                                    variant: n ? "heading-md/semibold" : "heading-sm/semibold",
                                    color: "text-strong",
                                    children: G.intl.format(z.default.rCpGVA, {
                                        discountedPrice: u,
                                        discountInterval: e,
                                    }),
                                }),
                                (0, l.jsx)(p.E, {
                                    variant: n ? "text-sm/medium" : "text-xs/medium",
                                    color: "text-muted",
                                    children: G.intl.format(z.default["4b2ByP"], { regularPrice: h }),
                                }),
                            ],
                        }),
                        (0, l.jsx)(W.R, {
                            text: G.intl.formatToPlainString(z.default.GEwdVw, {
                                percent: t.discount.amount,
                                discountOfferAmount: t.discount.amount,
                            }),
                        }),
                    ],
                }),
                (0, l.jsx)("hr", { className: s()($.yF, { [$.oE]: n }) }),
            ],
        });
    }
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)("div", {
                children: [
                    (0, l.jsx)(p.E, {
                        variant: "heading-xxl/extrabold",
                        color: x ? "text-strong" : "text-overlay-light",
                        tag: "span",
                        children: h,
                    }),
                    (0, l.jsxs)(p.E, {
                        variant: "text-xs/medium",
                        tag: "span",
                        color: "text-muted",
                        children: ["/", (0, R.FJ)(g)],
                    }),
                ],
            }),
            (0, l.jsx)(o.D, {
                variant: "heading-md/semibold",
                color: "text-muted",
                children: G.intl.string(z.default["R+dzZw"]),
            }),
            (0, l.jsx)("hr", { className: $.yF }),
        ],
    });
};
var J = t(860839),
    Q = t(349288),
    ee = t(549996),
    er = t(637706),
    et = t(954824);
function ei() {
    let e = (0, ee.c)(P.C.PLAN_SELECT_CARD_BANNER),
        r =
            null != e && "planSelectCardBanner" === e.properties.properties.oneofKind
                ? e.properties.properties.planSelectCardBanner
                : null,
        t = (0, b.T)(r?.asset);
    if (null == r || "" === r.body) return null;
    let i = (0, er.C)(r.helpArticle, "");
    return (0, l.jsxs)("div", {
        className: et.kL,
        children: [
            null != t && (0, l.jsx)("img", { alt: "", className: et.Sl, src: t }),
            (0, l.jsxs)(p.E, {
                variant: "text-md/normal",
                color: "text-default",
                className: et.rf,
                children: [
                    r.body,
                    null != i &&
                        (0, l.jsxs)(l.Fragment, {
                            children: ["\xa0", (0, l.jsx)(Q.Anchor, { href: i.url, children: i.linkText })],
                        }),
                ],
            }),
        ],
    });
}
var el = t(765516),
    en = t(88001),
    ea = t(984295),
    es = t(232266),
    eo = t(243002),
    ec = t(241988);
function ed(e) {
    let { children: r, footer: t } = e;
    return null == t
        ? (0, l.jsx)(d.B, { direction: "vertical", gap: 0, className: ea.tierCardStack, children: r })
        : (0, l.jsxs)(d.B, {
              direction: "vertical",
              justify: "space-between",
              gap: 0,
              className: ea.tierCardStack,
              children: [
                  (0, l.jsx)(d.B, { direction: "vertical", gap: 0, className: ea.tierCardStackContent, children: r }),
                  (0, l.jsx)("div", { className: ea.footer, children: t }),
              ],
          });
}
function eu(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            className: i,
            isGift: n = !1,
            priceOptions: a,
            isApplicationHome: d = !1,
            useShortTitle: u = !1,
        } = e,
        p = (0, c.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        h = (0, c.bG)([T.default], () => T.default.getCurrentUser()),
        g = (0, B.V)(),
        f = g?.subscription_trial?.sku_id,
        N = p?.hasActiveTrial ? h?.premiumType : null,
        C = (0, V.Lj)(N, f),
        R = null != C,
        A = (0, m.q)((0, j.Ay)()),
        { showGiftPrice: E } = _.A.useConfig({ location: `PremiumTier0Card${n ? "" : " - DO NOT USE"}` }),
        P = u ? G.intl.string(G.t.tUbSDK) : G.intl.string(G.t["t9uG/o"]),
        y = (0, l.jsxs)(ed, {
            footer: r,
            children: [
                R && (0, l.jsx)(W.R, { text: C, className: ea.pill }),
                (0, l.jsx)(o.D, {
                    variant: "display-md",
                    color: A ? "text-strong" : "text-overlay-light",
                    className: ea.cardTitle,
                    children: P,
                }),
                (!n || E) &&
                    (0, l.jsx)(el.A, {
                        isGift: n,
                        premiumTier: q.PremiumTypes.TIER_0,
                        offerType: q.Vk.PREMIUM_TRIAL,
                        offerTierMatchesCard: f === q.pe.TIER_0,
                        showYearlyPrice: t,
                        priceOptions: a,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: ea.priceHeader,
                    }),
                (0, l.jsx)("hr", { className: ea.divider }),
                (0, l.jsx)(J.nH, { enablePremiumBrandRefresh: !0, isApplicationHome: d }),
            ],
        }),
        I = s()(ea.card, ea.tier0, i, { [ea.pillMargin]: !d && R });
    return n
        ? (0, l.jsx)(x.h, { color: "nitro-green", className: I, children: y })
        : (0, l.jsx)("div", { className: I, children: y });
}
var em =
    (((i = {}).IN_CARD = "inCard"),
    (i.OUTER_CORNER = "outerCorner"),
    (i.INSIDE_CORNER = "insideCorner"),
    (i.GIFT_SELECTION_MODAL = "giftSelectionModal"),
    i);
function ex(e) {
    let { discountOffer: r, priceOptions: t, isGift: i, narrowLayout: a = !1 } = e,
        s = (0, F.N1)(q.gD.PREMIUM_YEAR_TIER_2),
        o = n.useMemo(() => {
            try {
                let e = (0, R.y8)(q.gD.PREMIUM_YEAR_TIER_2, !1, i, t);
                return (0, A.$g)(e.amount, e.currency);
            } catch {
                return null;
            }
        }, [i, t]);
    return null == s || null == o
        ? null
        : (0, l.jsxs)("div", {
              className: ea.annualDiscountBanner,
              children: [
                  (0, l.jsxs)("div", {
                      className: ea.annualDiscountBannerText,
                      children: [
                          (0, l.jsx)(p.E, {
                              variant: a ? "text-sm/semibold" : "text-md/semibold",
                              color: "text-overlay-light",
                              children: G.intl.format(G.t["TCFNZ/"], { discountedPrice: s }),
                          }),
                          (0, l.jsx)(p.E, {
                              variant: a ? "text-xs/normal" : "text-sm/normal",
                              children: G.intl.format(G.t.aUTlph, { regularPrice: o }),
                          }),
                      ],
                  }),
                  (0, l.jsx)(W.R, { text: G.intl.formatToPlainString(G.t.v5WSns, { percent: r.discount.amount }) }),
              ],
          });
}
function ep(e) {
    let {
            ctaButton: r,
            showYearlyPrice: t,
            featureSet: i = J.Nz.DEFAULT,
            className: n,
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
        R = (0, c.bG)([v.A], () => v.A.getPremiumTypeSubscription()),
        A = (0, c.bG)([T.default], () => T.default.getCurrentUser()),
        P = (0, B.V)(),
        y = P?.subscription_trial?.sku_id,
        I = R?.hasActiveTrial ? A?.premiumType : null,
        b = R?.planIdFromItems === q.gD.PREMIUM_YEAR_TIER_2,
        M = (0, D.O)(),
        S = (0, D.p)(),
        O = (0, E.k5)(),
        U = null != y || null != I ? q.Vk.PREMIUM_TRIAL : null != M || O ? q.Vk.PREMIUM_DISCOUNT : null,
        L = (0, m.q)((0, j.Ay)()),
        H = null != S && !a,
        Y = !a && null != M && (0, F.hm)(M),
        K = !a && O && b && U === q.Vk.PREMIUM_DISCOUNT,
        z = (0, V.rm)(O, I, a ? null : M, P, y),
        $ = (0, w.Sq)() && !a && null == U,
        { showGiftPrice: Z } = _.A.useConfig({ location: `PremiumTier2Card${a ? "" : " - DO NOT USE"}` }),
        X = null != r || p ? (0, l.jsxs)(l.Fragment, { children: [r, p && (0, l.jsx)(k, {})] }) : null,
        Q = d && !a,
        ee = (0, l.jsxs)(ed, {
            footer: X,
            children: [
                f &&
                    !H &&
                    !K &&
                    (0, l.jsx)(function () {
                        return (0, l.jsxs)(l.Fragment, {
                            children: [
                                !Y &&
                                    (0, l.jsxs)(l.Fragment, {
                                        children: [
                                            (0, l.jsx)("img", { src: eo, alt: "", className: s()(ea.bigCloud, ea[h]) }),
                                            (0, l.jsx)("img", {
                                                src: es,
                                                alt: "",
                                                className: s()(ea.smallCloud, ea[h]),
                                            }),
                                        ],
                                    }),
                                (!Y || null != r) &&
                                    (0, l.jsx)("img", {
                                        src: ec,
                                        alt: "",
                                        className: s()(ea.wumpus, ea[h], {
                                            [ea.withAnnualDiscountBanner]: Y,
                                            [ea.noGiftPrice]: a && !Z,
                                        }),
                                    }),
                            ],
                        });
                    }, {}),
                N &&
                    !Y &&
                    (0, l.jsx)(W.R, {
                        text:
                            z ??
                            ($
                                ? G.intl.formatToPlainString(G.t["4SEnCZ"], { months: 1 })
                                : G.intl.string(G.t["6bEcYr"])),
                        className: ea.pill,
                    }),
                (0, l.jsx)(o.D, {
                    variant: "display-md",
                    color: L ? "text-strong" : "text-overlay-light",
                    className: ea.cardTitle,
                    children: G.intl.string(G.t.lG6a5x),
                }),
                (!a || Z) &&
                    (0, l.jsx)(el.A, {
                        isGift: a,
                        premiumTier: q.PremiumTypes.TIER_2,
                        offerType: U,
                        offerTierMatchesCard: y === q.pe.TIER_2 || (0, F.U9)(M, q.pe.TIER_2),
                        showYearlyPrice: t && !Y,
                        priceOptions: u,
                        enablePremiumBrandRefresh: !0,
                        headingVariant: "text-md/medium",
                        headingColor: "text-strong",
                        headerClassName: ea.priceHeader,
                    }),
                Y
                    ? (0, l.jsx)(ex, { discountOffer: M, priceOptions: u, isGift: a, narrowLayout: C })
                    : (0, l.jsx)("hr", { className: ea.divider }),
                (0, l.jsx)(J.ZP, {
                    featureSet: i,
                    isModal: d,
                    isGift: a,
                    enablePremiumBrandRefresh: !0,
                    isApplicationHome: g,
                    firstFeatureItemClassName:
                        Y || ("inCard" !== h && "giftSelectionModal" !== h) ? void 0 : ea.firstFeatureItemContainer,
                }),
                Q && (0, l.jsx)(ei, {}),
            ],
        }),
        er = s()(ea.card, n, { [ea.withGiftBanner]: p });
    return H
        ? (0, l.jsx)("div", { className: er, children: ee })
        : (0, l.jsx)(x.h, { color: "nitro-pink", className: er, children: ee });
}
function eh(e) {
    let { className: r, ctaButton: t, isApplicationHome: i, priceOptions: n } = e,
        a = (0, m.q)((0, j.Ay)()),
        c = (0, D.p)(),
        d = (0, l.jsxs)(ed, {
            footer: t,
            children: [
                (0, l.jsxs)("div", {
                    className: ea.cardHeader,
                    children: [
                        (0, l.jsx)(o.D, {
                            variant: "display-md",
                            color: a ? "text-strong" : "text-overlay-light",
                            className: ea.cardTitle,
                            children: G.intl.string(z.default.eSKiXk),
                        }),
                        (0, l.jsx)(W.R, {
                            text: G.intl.string(G.t.oW0eUd),
                            className: ea.betaPill,
                            disableGradient: null != c,
                        }),
                    ],
                }),
                (0, l.jsx)(X, { discountOffer: c, priceOptions: n, isApplicationHome: i }),
                (0, l.jsx)(J.Lg, { isApplicationHome: i }),
            ],
        });
    return null != c
        ? (0, l.jsx)(x.h, { color: "nitro-pink", className: s()(ea.card, r), children: d })
        : (0, l.jsx)("div", { className: s()(ea.card, ea.borderGradient, r), children: d });
}
function eg(e) {
    let { subscriptionTier: r, isReducedMotion: t, tierCardProps: i, className: n, narrowLayout: a } = e,
        o = r === q.pe.TIER_2,
        c = (0, D.p)(),
        { subscribeButtonProps: m, subscriptionTier: x } = (0, H.$)({
            subscriptionTier: r,
            variantOverride: o && null == c ? "expressive" : "secondary",
        }),
        { disabled: p } = m,
        g = (0, l.jsx)(u.$, { size: "md", fullWidth: !0, ...m, disabled: p }),
        j = (0, l.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(ea.tierCardStack, { [ea.premiumCardHover]: !t }),
            children: (0, l.jsx)(o ? ep : eu, {
                className: s()(ea.applicationHomeCard, { [ea.narrow]: a }),
                ctaButton: g,
                showYearlyPrice: !0,
                isApplicationHome: !0,
                ...i,
            }),
        });
    return (0, l.jsx)(d.B, {
        direction: "vertical",
        gap: 0,
        className: s()(ea.tierCardStack, n),
        children: p
            ? j
            : (0, l.jsx)(L.A, {
                  subscriptionTier: x,
                  children: (e) => {
                      let { onClick: r } = e;
                      return (0, l.jsx)(h.D, { onClick: r, className: ea.tierCardStack, children: j });
                  },
              }),
    });
}
function ej(e) {
    let { isReducedMotion: r, className: t } = e,
        i = (0, D.p)(),
        n =
            null != i
                ? G.intl.format(z.default["7j70dP"], {
                      percent: i.discount?.amount,
                      premiumGroupProductName: (0, en.DP)(),
                  })
                : G.intl.string(G.t["2pG5Ga"]),
        a = (0, l.jsx)(u.$, {
            size: "md",
            fullWidth: !0,
            icon: g.t,
            text: n,
            variant: null != i ? "expressive" : "secondary",
        }),
        o = (0, l.jsx)(d.B, {
            direction: "vertical",
            gap: 0,
            className: s()(ea.tierCardStack, { [ea.premiumCardHover]: !r }),
            children: (0, l.jsx)(eh, {
                className: s()(ea.applicationHomeCard, ea.narrow),
                ctaButton: a,
                isApplicationHome: !0,
            }),
        });
    return (0, l.jsx)(L.A, {
        subscriptionTier: q.pe.TIER_2,
        initialPlanId: q.gD.PREMIUM_GROUP_MONTH,
        children: (e) => {
            let { onClick: r } = e;
            return (0, l.jsx)(d.B, {
                direction: "vertical",
                gap: 0,
                className: s()(ea.tierCardStack, t),
                children: (0, l.jsx)(h.D, { onClick: r, className: ea.tierCardStack, children: o }),
            });
        },
    });
}
function ef(e) {
    let { innerRef: r, className: t } = e,
        { analyticsLocations: i } = (0, C.Ay)(N.A.PREMIUM_MARKETING_TIER_CARD),
        n = (0, J.pw)(r),
        a = (0, c.bG)([f.Ay], () => f.Ay.useReducedMotion),
        d = (0, U.PA)();
    return (0, l.jsx)(C.f5, {
        value: i,
        children: (0, l.jsxs)("div", {
            className: s()(ea.premiumCardsContainer, t),
            children: [
                (0, l.jsx)(o.D, {
                    variant: "display-md",
                    color: "text-strong",
                    className: ea.premiumCardsHeader,
                    children: G.intl.string(G.t.vLz3Zs),
                }),
                (0, l.jsxs)("div", {
                    ref: n,
                    className: ea.premiumCards,
                    children: [
                        (0, l.jsx)(eg, {
                            subscriptionTier: q.pe.TIER_0,
                            isReducedMotion: a,
                            className: ea.tier0CardOrder,
                            narrowLayout: d,
                        }),
                        (0, l.jsx)(eg, {
                            subscriptionTier: q.pe.TIER_2,
                            isReducedMotion: a,
                            className: ea.tier2CardOrder,
                            tierCardProps: { wumpusPosition: d ? "insideCorner" : "outerCorner", showPill: !d },
                            narrowLayout: d,
                        }),
                        d && (0, l.jsx)(ej, { isReducedMotion: a, className: ea.premiumGroupCardOrder }),
                    ],
                }),
            ],
        }),
    });
}
