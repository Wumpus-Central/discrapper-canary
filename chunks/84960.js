s.d(e, { A: () => R });
var i = s(627968),
    a = s(64700),
    l = s(503698),
    t = s.n(l),
    r = s(862482),
    c = s(935462),
    o = s(289873),
    d = s(297264),
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
    f = s(725807),
    j = s(410516),
    k = s(811611),
    M = s(579245),
    S = s(778712),
    b = s(375708),
    v = s(677865);
function T(n) {
    let { affinities: e, className: s } = n,
        l = a.useMemo(() => {
            if (e.length > 1) {
                var n;
                return b.intl.formatToPlainString(b.t.HaVk0X, {
                    username: null != (n = e[0]).globalName ? n.globalName : n.username,
                    numFriends: e.length - 1,
                });
            }
            return "";
        }, [e]);
    if (e.length <= 1) return null;
    let r = e.map((n, s) => (0, i.jsx)(M.n, { affinity: n, applyMask: s !== e.length - 1, size: S._3.SIZE_20 }, n.id));
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
var C = s(202541),
    O = s(652215),
    I = s(535192);
function R(n) {
    let {
            title: e,
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
            hideBackButton: nn,
            backButtonText: ne,
            showEnhancedUpsell: ns,
            useSubscribeButtonGradient: ni,
            subscribeButtonClassname: na,
            hidePremiumOfferUpsell: nl,
            children: nt,
            LeadingComponent: nr,
            backgroundElements: nc,
            smallText: no = !1,
            footerClassName: nd,
            ...nu
        } = n,
        nm = null != l,
        n_ = (0, N.V)(),
        nL = (0, g.O)(),
        nE = !nl && (n_?.subscription_trial?.sku_id === q || (0, j.U9)(nL, q)) && !nm,
        { analyticsLocations: np } = (0, L.Ay)(_.A.PREMIUM_UPSELL_MODAL),
        nx = { analyticsLocation: S, analyticsLocations: np, analyticsSource: M, guildBoostProps: l, type: s },
        nh = a.useRef(nx);
    a.useEffect(() => {
        nh.current = nx;
    }),
        a.useEffect(() => {
            if (K) return;
            let {
                analyticsLocation: n,
                analyticsLocations: e,
                analyticsSource: s,
                guildBoostProps: i,
                type: a,
            } = nh.current;
            nm
                ? x.default.track(O.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${a} - Tier ${i?.boostedGuildTier}`,
                      guild_id: i?.guild.id,
                      channel_id: i?.channelId,
                      location: n,
                      location_stack: e,
                  })
                : x.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: a,
                      source: s,
                      location: n,
                      location_stack: e,
                      sku_id: (0, h.mH)(q),
                  });
        }, [nm, q, K]);
    let nA = (0, A.b)(),
        ng =
            nA.length > 1 &&
            (function (n) {
                switch (n) {
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
        nN = Z ? t()(I.JS, I.OV, y) : t()(I.JS, y),
        nf = null;
    return (
        null != nu.artURL
            ? (nf = (0, i.jsx)("img", { className: t()($, I.Qw), alt: "", src: nu.artURL }))
            : null != nu.artElement && (nf = nu.artElement),
        (0, i.jsxs)(c.EO, {
            "data-migration-pending": !0,
            className: t()(I.zr, !nE && P),
            "aria-label": e,
            transitionState: F,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != nf &&
                    (0, i.jsxs)("div", {
                        className: nN,
                        children: [
                            nf,
                            W
                                ? (0, i.jsx)("img", { className: I.CI, alt: "", src: "/assets/4fa3a10f129d5e31.png" })
                                : null,
                        ],
                    }),
                (0, i.jsx)(c.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: t()(ns ? I.es : I.Qs, !nE && D),
                    children: K
                        ? (0, i.jsx)(o.y, {})
                        : nE
                          ? (0, i.jsx)(k.Ay, {
                                onClose: V,
                                type: s,
                                subscriptionTier: n_?.subscription_trial?.sku_id ?? C.pe.TIER_2,
                                headingText: e,
                                context: R,
                                analyticsLocationObject: S,
                                discountOffer: nL,
                                trialOffer: n_,
                                children: U,
                            })
                          : (0, i.jsxs)("div", {
                                className: I.hQ,
                                children: [
                                    nr,
                                    (0, i.jsxs)("div", {
                                        className: I.kQ,
                                        children: [
                                            (0, i.jsxs)(d.D, {
                                                className: t()(I.wx, { [I.k]: ns }, w),
                                                variant: "heading-xl/bold",
                                                children: [e, Y ? (0, i.jsx)(E.A, { className: I.TN }) : null],
                                            }),
                                            ng ? (0, i.jsx)(T, { affinities: nA }) : void 0,
                                            nt,
                                            (0, i.jsx)(u.E, {
                                                variant: no ? "text-sm/normal" : "text-md/normal",
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
                    className: t()(I.qr, nd, { [I.I$]: ns }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: t()(I.E3, { [I.Q_]: ns }),
                            children: [
                                null != X
                                    ? (0, i.jsx)(r.$n, {
                                          "data-migration-pending": !0,
                                          className: t()(I.Dc, B, { [I.HZ]: ns }),
                                          onClick: G,
                                          size: r.$n.Sizes.SMALL,
                                          color: ns ? r.$n.Colors.CUSTOM : r.$n.Colors.PRIMARY,
                                          look: r.$n.Looks.LINK,
                                          children: X,
                                      })
                                    : null,
                                (function () {
                                    if (nm)
                                        return (0, i.jsx)(p.A, { analyticsLocation: S, guild: l.guild, onClose: V });
                                    let n = ns ? b.intl.string(b.t.pj0XBN) : void 0;
                                    return (
                                        nE &&
                                            (null != n_
                                                ? (n = (0, h.FY)({
                                                      intervalType: n_?.subscription_trial?.interval,
                                                      intervalCount: n_?.subscription_trial?.interval_count,
                                                  }))
                                                : null != nL &&
                                                  (n = b.intl.formatToPlainString(b.t.bkQ4bH, {
                                                      percent: nL.discount.amount,
                                                  }))),
                                        (0, i.jsx)(f.A, {
                                            className: na,
                                            showGradient: ns || ni,
                                            premiumModalAnalyticsLocation: S,
                                            subscriptionTier: q,
                                            size: r.$n.Sizes.SMALL,
                                            color: ns || ni ? r.$n.Colors.CUSTOM : r.$n.Colors.GREEN,
                                            onClick: () => {
                                                H?.(), V();
                                            },
                                            onSubscribeModalClose: Q,
                                            textOptions: { textOverride: J ?? n },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !nn &&
                            !ns &&
                            (0, i.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: null != ne ? ne : b.intl.string(b.t["13/7kX"]),
                                onClick: V,
                            }),
                    ],
                }),
                ns ? (0, i.jsx)(c.s_, { "data-migration-pending": !0, onClick: V, className: I.b }) : null,
                nc,
            ],
        })
    );
}
