t.d(n, { A: () => v });
var a = t(627968),
    i = t(64700),
    s = t(503698),
    r = t.n(s),
    l = t(862482),
    c = t(935462),
    o = t(289873),
    _ = t(534514),
    d = t(834730),
    u = t(821609),
    m = t(793574),
    p = t(688810),
    L = t(611371),
    A = t(721923),
    h = t(954571),
    x = t(927578),
    E = t(286320),
    g = t(422936),
    f = t(234419),
    b = t(725807),
    C = t(511484),
    N = t(811611),
    S = t(224850),
    j = t(778712),
    M = t(985018),
    k = t(677865);
function O(e) {
    let { affinities: n, className: t } = e,
        s = i.useMemo(() => {
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
    let l = n.map((e, t) => (0, a.jsx)(S.n, { affinity: e, applyMask: t !== n.length - 1, size: j._3.SIZE_20 }, e.id));
    return (0, a.jsxs)("div", {
        className: r()(k.kL, t),
        children: [
            (0, a.jsx)("div", { className: k.zc, children: l }),
            (0, a.jsx)("div", {
                className: k.FS,
                children: (0, a.jsx)(d.E, { variant: "text-sm/medium", children: s }),
            }),
        ],
    });
}
var T = t(788868),
    I = t(652215),
    U = t(535192);
function v(e) {
    let {
            title: n,
            type: t,
            guildBoostProps: s,
            analyticsSource: S,
            analyticsLocation: j,
            body: k,
            context: v,
            glowUp: D,
            modalClassName: R,
            modalContentClassName: y,
            artContainerClassName: P,
            artClassName: $,
            headerClassName: w,
            bodyClassName: z,
            transitionState: Q,
            onClose: B,
            onSubscribeClick: H,
            onSubscribeFinish: V,
            onSecondaryClick: F,
            secondaryCTA: G,
            secondaryCTAClassName: q,
            subscribeButtonText: Z,
            showNewBadge: J = !1,
            showBetaBadge: K = !1,
            enableArtBoxShadow: W = !0,
            subscriptionTier: X = T.pe.TIER_2,
            isLoading: Y = !1,
            hideBackButton: ee,
            backButtonText: en,
            showEnhancedUpsell: et,
            useSubscribeButtonGradient: ea,
            subscribeButtonClassname: ei,
            hidePremiumOfferUpsell: es,
            children: er,
            LeadingComponent: el,
            backgroundElements: ec,
            smallText: eo = !1,
            footerClassName: e_,
            ...ed
        } = e,
        eu = null != s,
        em = (0, f.V)(),
        ep = (0, g.O)(),
        eL = !es && (em?.subscription_trial?.sku_id === X || (0, C.U9)(ep, X)) && !eu,
        { analyticsLocations: eA } = (0, p.Ay)(m.A.PREMIUM_UPSELL_MODAL),
        eh = { analyticsLocation: j, analyticsLocations: eA, analyticsSource: S, guildBoostProps: s, type: t },
        ex = i.useRef(eh);
    i.useEffect(() => {
        ex.current = eh;
    }),
        i.useEffect(() => {
            if (Y) return;
            let {
                analyticsLocation: e,
                analyticsLocations: n,
                analyticsSource: t,
                guildBoostProps: a,
                type: i,
            } = ex.current;
            eu
                ? h.default.track(I.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${i} - Tier ${a?.boostedGuildTier}`,
                      guild_id: a?.guild.id,
                      channel_id: a?.channelId,
                      location: e,
                      location_stack: n,
                  })
                : h.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: t,
                      location: e,
                      location_stack: n,
                      sku_id: (0, x.mH)(X),
                  });
        }, [eu, X, Y]);
    let eE = (0, E.b)(),
        eg =
            eE.length > 1 &&
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
        ef = W ? r()(U.JS, U.OV, P) : r()(U.JS, P),
        eb = null;
    return (
        null != ed.artURL
            ? (eb = (0, a.jsx)("img", { className: r()($, U.Qw), alt: "", src: ed.artURL }))
            : null != ed.artElement && (eb = ed.artElement),
        (0, a.jsxs)(c.EO, {
            "data-migration-pending": !0,
            className: r()(U.zr, !eL && R),
            "aria-label": n,
            transitionState: Q,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eb &&
                    (0, a.jsxs)("div", {
                        className: ef,
                        children: [
                            eb,
                            J
                                ? (0, a.jsx)("img", { className: U.CI, alt: "", src: "/assets/4fa3a10f129d5e31.png" })
                                : null,
                        ],
                    }),
                (0, a.jsx)(c.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: r()(et ? U.es : U.Qs, !eL && y),
                    children: Y
                        ? (0, a.jsx)(o.y, {})
                        : eL
                          ? (0, a.jsx)(N.Ay, {
                                onClose: B,
                                type: t,
                                subscriptionTier: em?.subscription_trial?.sku_id ?? T.pe.TIER_2,
                                headingText: n,
                                context: v,
                                analyticsLocationObject: j,
                                discountOffer: ep,
                                trialOffer: em,
                                children: D,
                            })
                          : (0, a.jsxs)("div", {
                                className: U.hQ,
                                children: [
                                    el,
                                    (0, a.jsxs)("div", {
                                        className: U.kQ,
                                        children: [
                                            (0, a.jsxs)(_.D, {
                                                className: r()(U.wx, { [U.k]: et }, w),
                                                variant: "heading-xl/bold",
                                                children: [n, K ? (0, a.jsx)(L.A, { className: U.TN }) : null],
                                            }),
                                            eg ? (0, a.jsx)(O, { affinities: eE }) : void 0,
                                            er,
                                            (0, a.jsx)(d.E, {
                                                variant: eo ? "text-sm/normal" : "text-md/normal",
                                                className: r()(z, U.uI),
                                                children: k,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, a.jsxs)(c.jl, {
                    "data-migration-pending": !0,
                    className: r()(U.qr, e_, { [U.I$]: et }),
                    children: [
                        (0, a.jsxs)("div", {
                            className: r()(U.E3, { [U.Q_]: et }),
                            children: [
                                null != G
                                    ? (0, a.jsx)(l.$n, {
                                          "data-migration-pending": !0,
                                          className: r()(U.Dc, q, { [U.HZ]: et }),
                                          onClick: F,
                                          size: l.$n.Sizes.SMALL,
                                          color: et ? l.$n.Colors.CUSTOM : l.$n.Colors.PRIMARY,
                                          look: l.$n.Looks.LINK,
                                          children: G,
                                      })
                                    : null,
                                (() => {
                                    if (eu)
                                        return (0, a.jsx)(A.A, { analyticsLocation: j, guild: s.guild, onClose: B });
                                    let e = et ? M.intl.string(M.t.pj0XBN) : void 0;
                                    return (
                                        eL &&
                                            (null != em
                                                ? (e = (0, x.FY)({
                                                      intervalType: em?.subscription_trial?.interval,
                                                      intervalCount: em?.subscription_trial?.interval_count,
                                                  }))
                                                : null != ep &&
                                                  (e = M.intl.formatToPlainString(M.t.bkQ4bH, {
                                                      percent: ep.discount.amount,
                                                  }))),
                                        (0, a.jsx)(b.A, {
                                            className: ei,
                                            showGradient: et || ea,
                                            premiumModalAnalyticsLocation: j,
                                            subscriptionTier: X,
                                            size: l.$n.Sizes.SMALL,
                                            color: et || ea ? l.$n.Colors.CUSTOM : l.$n.Colors.GREEN,
                                            onClick: () => {
                                                H?.(), B();
                                            },
                                            onSubscribeModalClose: V,
                                            textOptions: { textOverride: Z ?? e },
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
                                onClick: B,
                            }),
                    ],
                }),
                et ? (0, a.jsx)(c.s_, { "data-migration-pending": !0, onClick: B, className: U.b }) : null,
                ec,
            ],
        })
    );
}
