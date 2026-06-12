s.d(n, { A: () => R });
var i = s(627968),
    a = s(64700),
    l = s(503698),
    t = s.n(l),
    r = s(862482),
    c = s(935462),
    o = s(289873),
    d = s(534514),
    u = s(834730),
    m = s(821609),
    _ = s(793574),
    L = s(688810),
    E = s(611371),
    p = s(944304),
    x = s(174459),
    h = s(428262),
    A = s(286320),
    g = s(422936),
    N = s(234419),
    j = s(725807),
    f = s(410516),
    k = s(811611),
    M = s(579245),
    S = s(778712),
    b = s(375708),
    v = s(677865);
function T(e) {
    let { affinities: n, className: s } = e,
        l = a.useMemo(() => {
            if (n.length > 1) {
                var e;
                return b.intl.formatToPlainString(b.t.HaVk0X, {
                    username: null != (e = n[0]).globalName ? e.globalName : e.username,
                    numFriends: n.length - 1,
                });
            }
            return "";
        }, [n]);
    if (n.length <= 1) return null;
    let r = n.map((e, s) => (0, i.jsx)(M.n, { affinity: e, applyMask: s !== n.length - 1, size: S._3.SIZE_20 }, e.id));
    return (0, i.jsxs)("div", {
        className: t()(v.kL, s),
        children: [
            (0, i.jsx)("div", { className: v.zc, children: r }),
            (0, i.jsx)("div", {
                className: v.FS,
                children: (0, i.jsx)(u.E, { variant: "text-sm/medium", children: l }),
            }),
        ],
    });
}
var C = s(788868),
    O = s(652215),
    I = s(535192);
function R(e) {
    let {
            title: n,
            type: s,
            guildBoostProps: l,
            analyticsSource: M,
            analyticsLocation: S,
            body: v,
            context: R,
            glowUp: U,
            modalClassName: P,
            modalContentClassName: D,
            artContainerClassName: y,
            artClassName: $,
            headerClassName: w,
            bodyClassName: z,
            transitionState: F,
            onClose: V,
            onSubscribeClick: H,
            onSubscribeFinish: Q,
            onSecondaryClick: G,
            secondaryCTA: X,
            secondaryCTAClassName: B,
            subscribeButtonText: J,
            showNewBadge: W = !1,
            showBetaBadge: Y = !1,
            enableArtBoxShadow: Z = !0,
            subscriptionTier: q = C.pe.TIER_2,
            isLoading: K = !1,
            hideBackButton: ee,
            backButtonText: en,
            showEnhancedUpsell: es,
            useSubscribeButtonGradient: ei,
            subscribeButtonClassname: ea,
            hidePremiumOfferUpsell: el,
            children: et,
            LeadingComponent: er,
            backgroundElements: ec,
            smallText: eo = !1,
            footerClassName: ed,
            ...eu
        } = e,
        em = null != l,
        e_ = (0, N.V)(),
        eL = (0, g.O)(),
        eE = !el && (e_?.subscription_trial?.sku_id === q || (0, f.U9)(eL, q)) && !em,
        { analyticsLocations: ep } = (0, L.Ay)(_.A.PREMIUM_UPSELL_MODAL),
        ex = { analyticsLocation: S, analyticsLocations: ep, analyticsSource: M, guildBoostProps: l, type: s },
        eh = a.useRef(ex);
    a.useEffect(() => {
        eh.current = ex;
    }),
        a.useEffect(() => {
            if (K) return;
            let {
                analyticsLocation: e,
                analyticsLocations: n,
                analyticsSource: s,
                guildBoostProps: i,
                type: a,
            } = eh.current;
            em
                ? x.default.track(O.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${a} - Tier ${i?.boostedGuildTier}`,
                      guild_id: i?.guild.id,
                      channel_id: i?.channelId,
                      location: e,
                      location_stack: n,
                  })
                : x.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: a,
                      source: s,
                      location: e,
                      location_stack: n,
                      sku_id: (0, h.mH)(q),
                  });
        }, [em, q, K]);
    let eA = (0, A.b)(),
        eg =
            eA.length > 1 &&
            (function (e) {
                switch (e) {
                    case C.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case C.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case C.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case C.e.AVATAR_DECORATION_MODAL_UPSELL:
                    case C.e.FOR_LATER_MODAL_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(s),
        eN = Z ? t()(I.JS, I.OV, y) : t()(I.JS, y),
        ej = null;
    return (
        null != eu.artURL
            ? (ej = (0, i.jsx)("img", { className: t()($, I.Qw), alt: "", src: eu.artURL }))
            : null != eu.artElement && (ej = eu.artElement),
        (0, i.jsxs)(c.EO, {
            "data-migration-pending": !0,
            className: t()(I.zr, !eE && P),
            "aria-label": n,
            transitionState: F,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != ej &&
                    (0, i.jsxs)("div", {
                        className: eN,
                        children: [
                            ej,
                            W
                                ? (0, i.jsx)("img", { className: I.CI, alt: "", src: "/assets/4fa3a10f129d5e31.png" })
                                : null,
                        ],
                    }),
                (0, i.jsx)(c.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: t()(es ? I.es : I.Qs, !eE && D),
                    children: K
                        ? (0, i.jsx)(o.y, {})
                        : eE
                          ? (0, i.jsx)(k.Ay, {
                                onClose: V,
                                type: s,
                                subscriptionTier: e_?.subscription_trial?.sku_id ?? C.pe.TIER_2,
                                headingText: n,
                                context: R,
                                analyticsLocationObject: S,
                                discountOffer: eL,
                                trialOffer: e_,
                                children: U,
                            })
                          : (0, i.jsxs)("div", {
                                className: I.hQ,
                                children: [
                                    er,
                                    (0, i.jsxs)("div", {
                                        className: I.kQ,
                                        children: [
                                            (0, i.jsxs)(d.D, {
                                                className: t()(I.wx, { [I.k]: es }, w),
                                                variant: "heading-xl/bold",
                                                children: [n, Y ? (0, i.jsx)(E.A, { className: I.TN }) : null],
                                            }),
                                            eg ? (0, i.jsx)(T, { affinities: eA }) : void 0,
                                            et,
                                            (0, i.jsx)(u.E, {
                                                variant: eo ? "text-sm/normal" : "text-md/normal",
                                                className: t()(z, I.uI),
                                                children: v,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, i.jsxs)(c.jl, {
                    "data-migration-pending": !0,
                    className: t()(I.qr, ed, { [I.I$]: es }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: t()(I.E3, { [I.Q_]: es }),
                            children: [
                                null != X
                                    ? (0, i.jsx)(r.$n, {
                                          "data-migration-pending": !0,
                                          className: t()(I.Dc, B, { [I.HZ]: es }),
                                          onClick: G,
                                          size: r.$n.Sizes.SMALL,
                                          color: es ? r.$n.Colors.CUSTOM : r.$n.Colors.PRIMARY,
                                          look: r.$n.Looks.LINK,
                                          children: X,
                                      })
                                    : null,
                                (() => {
                                    if (em)
                                        return (0, i.jsx)(p.A, { analyticsLocation: S, guild: l.guild, onClose: V });
                                    let e = es ? b.intl.string(b.t.pj0XBN) : void 0;
                                    return (
                                        eE &&
                                            (null != e_
                                                ? (e = (0, h.FY)({
                                                      intervalType: e_?.subscription_trial?.interval,
                                                      intervalCount: e_?.subscription_trial?.interval_count,
                                                  }))
                                                : null != eL &&
                                                  (e = b.intl.formatToPlainString(b.t.bkQ4bH, {
                                                      percent: eL.discount.amount,
                                                  }))),
                                        (0, i.jsx)(j.A, {
                                            className: ea,
                                            showGradient: es || ei,
                                            premiumModalAnalyticsLocation: S,
                                            subscriptionTier: q,
                                            size: r.$n.Sizes.SMALL,
                                            color: es || ei ? r.$n.Colors.CUSTOM : r.$n.Colors.GREEN,
                                            onClick: () => {
                                                H?.(), V();
                                            },
                                            onSubscribeModalClose: Q,
                                            textOptions: { textOverride: J ?? e },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !ee &&
                            !es &&
                            (0, i.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: null != en ? en : b.intl.string(b.t["13/7kX"]),
                                onClick: V,
                            }),
                    ],
                }),
                es ? (0, i.jsx)(c.s_, { "data-migration-pending": !0, onClick: V, className: I.b }) : null,
                ec,
            ],
        })
    );
}
