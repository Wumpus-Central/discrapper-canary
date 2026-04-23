t.d(n, { A: () => D });
var a = t(627968),
    s = t(64700),
    i = t(503698),
    l = t.n(i),
    r = t(862482),
    c = t(935462),
    o = t(289873),
    d = t(534514),
    _ = t(834730),
    u = t(821609),
    m = t(793574),
    p = t(688810),
    x = t(611371),
    A = t(721923),
    L = t(954571),
    h = t(927578),
    f = t(286320),
    g = t(422936),
    E = t(234419),
    C = t(725807),
    N = t(511484),
    b = t(811611),
    j = t(224850),
    k = t(778712),
    M = t(985018),
    S = t(677865);
function v(e) {
    let { affinities: n, className: t } = e,
        i = s.useMemo(() => {
            if (n.length > 1) {
                var e;
                return M.intl.formatToPlainString(M.t.HaVk0X, {
                    username: null != (e = n[0]).globalName ? e.globalName : e.username,
                    numFriends: n.length - 1,
                });
            }
            return "";
        }, [n]);
    if (n.length <= 1) return null;
    let r = n.map((e, t) => (0, a.jsx)(j.n, { affinity: e, applyMask: t !== n.length - 1, size: k._3.SIZE_20 }, e.id));
    return (0, a.jsxs)("div", {
        className: l()(S.kL, t),
        children: [
            (0, a.jsx)("div", { className: S.zc, children: r }),
            (0, a.jsx)("div", {
                className: S.FS,
                children: (0, a.jsx)(_.E, { variant: "text-sm/medium", children: i }),
            }),
        ],
    });
}
var T = t(788868),
    I = t(652215),
    y = t(535192);
function D(e) {
    let {
            title: n,
            type: t,
            guildBoostProps: i,
            analyticsSource: j,
            analyticsLocation: k,
            body: S,
            context: D,
            glowUp: O,
            modalClassName: U,
            modalContentClassName: P,
            artContainerClassName: R,
            artClassName: w,
            headerClassName: $,
            bodyClassName: z,
            transitionState: H,
            onClose: Q,
            onSubscribeClick: B,
            onSubscribeFinish: F,
            onSecondaryClick: V,
            secondaryCTA: q,
            secondaryCTAClassName: G,
            subscribeButtonText: X,
            showNewBadge: J = !1,
            showBetaBadge: Z = !1,
            enableArtBoxShadow: W = !0,
            subscriptionTier: Y = T.pe.TIER_2,
            isLoading: K = !1,
            hideBackButton: ee,
            backButtonText: en,
            showEnhancedUpsell: et,
            useSubscribeButtonGradient: ea,
            subscribeButtonClassname: es,
            hidePremiumOfferUpsell: ei,
            children: el,
            LeadingComponent: er,
            backgroundElements: ec,
            smallText: eo = !1,
            footerClassName: ed,
            ...e_
        } = e,
        eu = null != i,
        em = (0, E.V)(),
        ep = (0, g.O)(),
        ex = !ei && (em?.subscription_trial?.sku_id === Y || (0, N.U9)(ep, Y)) && !eu,
        { analyticsLocations: eA } = (0, p.Ay)(m.A.PREMIUM_UPSELL_MODAL),
        eL = { analyticsLocation: k, analyticsLocations: eA, analyticsSource: j, guildBoostProps: i, type: t },
        eh = s.useRef(eL);
    s.useEffect(() => {
        eh.current = eL;
    }),
        s.useEffect(() => {
            if (K) return;
            let {
                analyticsLocation: e,
                analyticsLocations: n,
                analyticsSource: t,
                guildBoostProps: a,
                type: s,
            } = eh.current;
            eu
                ? L.default.track(I.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${s} - Tier ${a?.boostedGuildTier}`,
                      guild_id: a?.guild.id,
                      channel_id: a?.channelId,
                      location: e,
                      location_stack: n,
                  })
                : L.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: s,
                      source: t,
                      location: e,
                      location_stack: n,
                      sku_id: (0, h.mH)(Y),
                  });
        }, [eu, Y, K]);
    let ef = (0, f.b)(),
        eg =
            ef.length > 1 &&
            (function (e) {
                switch (e) {
                    case T.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case T.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case T.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case T.e.AVATAR_DECORATION_MODAL_UPSELL:
                    case T.e.FOR_LATER_MODAL_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(t),
        eE = W ? l()(y.JS, y.OV, R) : l()(y.JS, R),
        eC = null;
    return (
        null != e_.artURL
            ? (eC = (0, a.jsx)("img", { className: l()(w, y.Qw), alt: "", src: e_.artURL }))
            : null != e_.artElement && (eC = e_.artElement),
        (0, a.jsxs)(c.EO, {
            "data-migration-pending": !0,
            className: l()(y.zr, !ex && U),
            "aria-label": n,
            transitionState: H,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eC &&
                    (0, a.jsxs)("div", {
                        className: eE,
                        children: [
                            eC,
                            J
                                ? (0, a.jsx)("img", { className: y.CI, alt: "", src: "/assets/4fa3a10f129d5e31.png" })
                                : null,
                        ],
                    }),
                (0, a.jsx)(c.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: l()(et ? y.es : y.Qs, !ex && P),
                    children: K
                        ? (0, a.jsx)(o.y, {})
                        : ex
                          ? (0, a.jsx)(b.Ay, {
                                onClose: Q,
                                type: t,
                                subscriptionTier: em?.subscription_trial?.sku_id ?? T.pe.TIER_2,
                                headingText: n,
                                context: D,
                                analyticsLocationObject: k,
                                discountOffer: ep,
                                trialOffer: em,
                                children: O,
                            })
                          : (0, a.jsxs)("div", {
                                className: y.hQ,
                                children: [
                                    er,
                                    (0, a.jsxs)("div", {
                                        className: y.kQ,
                                        children: [
                                            (0, a.jsxs)(d.D, {
                                                className: l()(y.wx, { [y.k]: et }, $),
                                                variant: "heading-xl/bold",
                                                children: [n, Z ? (0, a.jsx)(x.A, { className: y.TN }) : null],
                                            }),
                                            eg ? (0, a.jsx)(v, { affinities: ef }) : void 0,
                                            el,
                                            (0, a.jsx)(_.E, {
                                                variant: eo ? "text-sm/normal" : "text-md/normal",
                                                className: l()(z, y.uI),
                                                children: S,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, a.jsxs)(c.jl, {
                    "data-migration-pending": !0,
                    className: l()(y.qr, ed, { [y.I$]: et }),
                    children: [
                        (0, a.jsxs)("div", {
                            className: l()(y.E3, { [y.Q_]: et }),
                            children: [
                                null != q
                                    ? (0, a.jsx)(r.$n, {
                                          "data-migration-pending": !0,
                                          className: l()(y.Dc, G, { [y.HZ]: et }),
                                          onClick: V,
                                          size: r.$n.Sizes.SMALL,
                                          color: et ? r.$n.Colors.CUSTOM : r.$n.Colors.PRIMARY,
                                          look: r.$n.Looks.LINK,
                                          children: q,
                                      })
                                    : null,
                                (() => {
                                    if (eu)
                                        return (0, a.jsx)(A.A, { analyticsLocation: k, guild: i.guild, onClose: Q });
                                    let e = et ? M.intl.string(M.t.pj0XBN) : void 0;
                                    return (
                                        ex &&
                                            (null != em
                                                ? (e = (0, h.FY)({
                                                      intervalType: em?.subscription_trial?.interval,
                                                      intervalCount: em?.subscription_trial?.interval_count,
                                                  }))
                                                : null != ep &&
                                                  (e = M.intl.formatToPlainString(M.t.bkQ4bH, {
                                                      percent: ep.discount.amount,
                                                  }))),
                                        (0, a.jsx)(C.A, {
                                            className: es,
                                            showGradient: et || ea,
                                            premiumModalAnalyticsLocation: k,
                                            subscriptionTier: Y,
                                            size: r.$n.Sizes.SMALL,
                                            color: et || ea ? r.$n.Colors.CUSTOM : r.$n.Colors.GREEN,
                                            onClick: () => {
                                                B?.(), Q();
                                            },
                                            onSubscribeModalClose: F,
                                            textOptions: { textOverride: X ?? e },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !ee &&
                            !et &&
                            (0, a.jsx)(u.$, {
                                variant: "secondary",
                                size: "sm",
                                text: null != en ? en : M.intl.string(M.t["13/7kX"]),
                                onClick: Q,
                            }),
                    ],
                }),
                et ? (0, a.jsx)(c.s_, { "data-migration-pending": !0, onClick: Q, className: y.b }) : null,
                ec,
            ],
        })
    );
}
