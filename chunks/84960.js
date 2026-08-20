s.d(e, { A: () => R });
var i = s(477900),
    a = s(582128),
    l = s(503698),
    t = s.n(l),
    r = s(862482),
    c = s(935462),
    o = s(289873),
    d = s(297264),
    u = s(834730),
    m = s(821609),
    L = s(793574),
    E = s(688810),
    p = s(611371),
    x = s(944304),
    _ = s(174459),
    h = s(158045),
    A = s(286320),
    g = s(724651),
    N = s(732280),
    f = s(725807),
    j = s(511484),
    T = s(811611),
    k = s(579245),
    M = s(778712),
    S = s(375708),
    b = s(135916);
function v(n) {
    let { affinities: e, className: s } = n,
        l = a.useMemo(() => {
            if (e.length > 1) {
                var n;
                return S.intl.formatToPlainString(S.t.HaVk0X, {
                    username: null != (n = e[0]).globalName ? n.globalName : n.username,
                    numFriends: e.length - 1,
                });
            }
            return "";
        }, [e]);
    if (e.length <= 1) return null;
    let r = e.map((n, s) => (0, i.jsx)(k.n, { affinity: n, applyMask: s !== e.length - 1, size: M._3.SIZE_20 }, n.id));
    return (0, i.jsxs)("div", {
        className: t()(b.kL, s),
        children: [
            (0, i.jsx)("div", { className: b.zc, children: r }),
            (0, i.jsx)("div", {
                className: b.FS,
                children: (0, i.jsx)(u.E, { variant: "text-sm/medium", children: l }),
            }),
        ],
    });
}
var C = s(202541),
    I = s(652215),
    O = s(777133);
function R(n) {
    let {
            title: e,
            type: s,
            guildBoostProps: l,
            analyticsSource: k,
            analyticsLocation: M,
            body: b,
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
        nL = (0, N.V)(),
        nE = (0, g.O)(),
        np = !nl && (nL?.subscriptionTrial?.skuId === q || (0, j.U9)(nE, q)) && !nm,
        { analyticsLocations: nx } = (0, E.Ay)(L.A.PREMIUM_UPSELL_MODAL),
        n_ = { analyticsLocation: M, analyticsLocations: nx, analyticsSource: k, guildBoostProps: l, type: s },
        nh = a.useRef(n_);
    a.useEffect(() => {
        nh.current = n_;
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
                ? _.default.track(I.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${a} - Tier ${i?.boostedGuildTier}`,
                      guild_id: i?.guild.id,
                      channel_id: i?.channelId,
                      location: n,
                      location_stack: e,
                  })
                : _.default.track(I.HAw.PREMIUM_UPSELL_VIEWED, {
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
        nN = Z ? t()(O.JS, O.OV, y) : t()(O.JS, y),
        nf = null;
    return (
        null != nu.artURL
            ? (nf = (0, i.jsx)("img", { className: t()($, O.Qw), alt: "", src: nu.artURL }))
            : null != nu.artElement && (nf = nu.artElement),
        (0, i.jsxs)(c.EO, {
            "data-migration-pending": !0,
            className: t()(O.zr, !np && P),
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
                                ? (0, i.jsx)("img", { className: O.CI, alt: "", src: "/assets/4fa3a10f129d5e31.png" })
                                : null,
                        ],
                    }),
                (0, i.jsx)(c.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: t()(ns ? O.es : O.Qs, !np && D),
                    children: K
                        ? (0, i.jsx)(o.y, {})
                        : np
                          ? (0, i.jsx)(T.Ay, {
                                onClose: V,
                                type: s,
                                subscriptionTier: nL?.subscriptionTrial?.skuId ?? C.pe.TIER_2,
                                headingText: e,
                                context: R,
                                analyticsLocationObject: M,
                                discountOffer: nE,
                                trialOffer: nL,
                                children: U,
                            })
                          : (0, i.jsxs)("div", {
                                className: O.hQ,
                                children: [
                                    nr,
                                    (0, i.jsxs)("div", {
                                        className: O.kQ,
                                        children: [
                                            (0, i.jsxs)(d.D, {
                                                className: t()(O.wx, { [O.k]: ns }, w),
                                                variant: "heading-xl/bold",
                                                children: [e, Y ? (0, i.jsx)(p.A, { className: O.TN }) : null],
                                            }),
                                            ng ? (0, i.jsx)(v, { affinities: nA }) : void 0,
                                            nt,
                                            (0, i.jsx)(u.E, {
                                                variant: no ? "text-sm/normal" : "text-md/normal",
                                                className: t()(z, O.uI),
                                                children: b,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, i.jsxs)(c.jl, {
                    "data-migration-pending": !0,
                    className: t()(O.qr, nd, { [O.I$]: ns }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: t()(O.E3, { [O.Q_]: ns }),
                            children: [
                                null != X
                                    ? (0, i.jsx)(r.$n, {
                                          "data-migration-pending": !0,
                                          className: t()(O.Dc, B, { [O.HZ]: ns }),
                                          onClick: G,
                                          size: r.$n.Sizes.SMALL,
                                          color: ns ? r.$n.Colors.CUSTOM : r.$n.Colors.PRIMARY,
                                          look: r.$n.Looks.LINK,
                                          children: X,
                                      })
                                    : null,
                                (function () {
                                    if (nm)
                                        return (0, i.jsx)(x.A, { analyticsLocation: M, guild: l.guild, onClose: V });
                                    let n = ns ? S.intl.string(S.t.pj0XBN) : void 0;
                                    return (
                                        np &&
                                            (null != nL
                                                ? (n = (0, h.FY)({
                                                      intervalType: nL?.subscriptionTrial?.interval,
                                                      intervalCount: nL?.subscriptionTrial?.intervalCount,
                                                  }))
                                                : null != nE &&
                                                  (n = S.intl.formatToPlainString(S.t.bkQ4bH, {
                                                      percent: nE.discount.amount,
                                                  }))),
                                        (0, i.jsx)(f.A, {
                                            className: na,
                                            showGradient: ns || ni,
                                            premiumModalAnalyticsLocation: M,
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
                                text: null != ne ? ne : S.intl.string(S.t["13/7kX"]),
                                onClick: V,
                            }),
                    ],
                }),
                ns ? (0, i.jsx)(c.s_, { "data-migration-pending": !0, onClick: V, className: O.b }) : null,
                nc,
            ],
        })
    );
}
