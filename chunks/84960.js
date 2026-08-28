s.d(e, { A: () => P });
var i = s(477900),
    l = s(582128),
    a = s(503698),
    t = s.n(a),
    r = s(862482),
    c = s(935462),
    o = s(289873),
    d = s(297264),
    u = s(834730),
    m = s(821609),
    E = s(793574),
    L = s(688810),
    _ = s(611371),
    p = s(944304),
    x = s(174459),
    h = s(158045),
    A = s(10392),
    g = s(82498),
    N = s(286320),
    f = s(724651),
    j = s(732280),
    M = s(725807),
    T = s(511484),
    k = s(811611),
    I = s(579245),
    S = s(778712),
    b = s(375708),
    v = s(135916);
function C(n) {
    let { affinities: e, className: s } = n,
        a = l.useMemo(() => {
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
    let r = e.map((n, s) => (0, i.jsx)(I.n, { affinity: n, applyMask: s !== e.length - 1, size: S._3.SIZE_20 }, n.id));
    return (0, i.jsxs)("div", {
        className: t()(v.kL, s),
        children: [
            (0, i.jsx)("div", { className: v.zc, children: r }),
            (0, i.jsx)("div", {
                className: v.FS,
                children: (0, i.jsx)(u.E, { variant: "text-sm/medium", children: a }),
            }),
        ],
    });
}
var U = s(202541),
    O = s(652215),
    R = s(777133);
function P(n) {
    let {
            title: e,
            type: s,
            guildBoostProps: a,
            analyticsSource: I,
            analyticsLocation: S,
            body: v,
            context: P,
            glowUp: D,
            modalClassName: y,
            modalContentClassName: $,
            artContainerClassName: w,
            artClassName: z,
            headerClassName: V,
            bodyClassName: F,
            transitionState: H,
            onClose: Q,
            onSubscribeClick: G,
            onSubscribeFinish: q,
            onSecondaryClick: W,
            secondaryCTA: X,
            secondaryCTAClassName: B,
            subscribeButtonText: J,
            showNewBadge: Y = !1,
            showBetaBadge: Z = !1,
            enableArtBoxShadow: K = !0,
            subscriptionTier: nn = U.pe.TIER_2,
            isLoading: ne = !1,
            hideBackButton: ns,
            backButtonText: ni,
            showEnhancedUpsell: nl,
            useSubscribeButtonGradient: na,
            subscribeButtonClassname: nt,
            hidePremiumOfferUpsell: nr,
            children: nc,
            LeadingComponent: no,
            backgroundElements: nd,
            smallText: nu = !1,
            footerClassName: nm,
            ...nE
        } = n,
        nL = null != a,
        n_ = (0, j.V)(),
        np = (0, f.O)(),
        nx = !nr && (n_?.subscriptionTrial?.skuId === nn || (0, T.U9)(np, nn)) && !nL,
        { analyticsLocations: nh } = (0, L.Ay)(E.A.PREMIUM_UPSELL_MODAL),
        nA = { analyticsLocation: S, analyticsLocations: nh, analyticsSource: I, guildBoostProps: a, type: s },
        ng = l.useRef(nA);
    l.useEffect(() => {
        ng.current = nA;
    }),
        l.useEffect(() => {
            if (ne) return;
            let {
                analyticsLocation: n,
                analyticsLocations: e,
                analyticsSource: s,
                guildBoostProps: i,
                type: l,
            } = ng.current;
            nL
                ? x.default.track(O.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${l} - Tier ${i?.boostedGuildTier}`,
                      guild_id: i?.guild.id,
                      channel_id: i?.channelId,
                      location: n,
                      location_stack: e,
                  })
                : (x.default.track(O.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: l,
                      source: s,
                      location: n,
                      location_stack: e,
                      sku_id: (0, h.mH)(nn),
                  }),
                  (0, A.sq)(O.U7l.PREMIUM_UPSELL_VIEWED, e, () => (0, g.uq)(l)));
        }, [nL, nn, ne]);
    let nN = (0, N.b)(),
        nf =
            nN.length > 1 &&
            (function (n) {
                switch (n) {
                    case U.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case U.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case U.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case U.e.AVATAR_DECORATION_MODAL_UPSELL:
                    case U.e.FOR_LATER_MODAL_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(s),
        nj = K ? t()(R.JS, R.OV, w) : t()(R.JS, w),
        nM = null;
    return (
        null != nE.artURL
            ? (nM = (0, i.jsx)("img", { className: t()(z, R.Qw), alt: "", src: nE.artURL }))
            : null != nE.artElement && (nM = nE.artElement),
        (0, i.jsxs)(c.EO, {
            "data-migration-pending": !0,
            className: t()(R.zr, !nx && y),
            "aria-label": e,
            transitionState: H,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != nM &&
                    (0, i.jsxs)("div", {
                        className: nj,
                        children: [
                            nM,
                            Y
                                ? (0, i.jsx)("img", { className: R.CI, alt: "", src: "/assets/4fa3a10f129d5e31.png" })
                                : null,
                        ],
                    }),
                (0, i.jsx)(c.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: t()(nl ? R.es : R.Qs, !nx && $),
                    children: ne
                        ? (0, i.jsx)(o.y, {})
                        : nx
                          ? (0, i.jsx)(k.Ay, {
                                onClose: Q,
                                type: s,
                                subscriptionTier: n_?.subscriptionTrial?.skuId ?? U.pe.TIER_2,
                                headingText: e,
                                context: P,
                                analyticsLocationObject: S,
                                discountOffer: np,
                                trialOffer: n_,
                                children: D,
                            })
                          : (0, i.jsxs)("div", {
                                className: R.hQ,
                                children: [
                                    no,
                                    (0, i.jsxs)("div", {
                                        className: R.kQ,
                                        children: [
                                            (0, i.jsxs)(d.D, {
                                                className: t()(R.wx, { [R.k]: nl }, V),
                                                variant: "heading-xl/bold",
                                                children: [e, Z ? (0, i.jsx)(_.A, { className: R.TN }) : null],
                                            }),
                                            nf ? (0, i.jsx)(C, { affinities: nN }) : void 0,
                                            nc,
                                            (0, i.jsx)(u.E, {
                                                variant: nu ? "text-sm/normal" : "text-md/normal",
                                                className: t()(F, R.uI),
                                                children: v,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, i.jsxs)(c.jl, {
                    "data-migration-pending": !0,
                    className: t()(R.qr, nm, { [R.I$]: nl }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: t()(R.E3, { [R.Q_]: nl }),
                            children: [
                                null != X
                                    ? (0, i.jsx)(r.$n, {
                                          "data-migration-pending": !0,
                                          className: t()(R.Dc, B, { [R.HZ]: nl }),
                                          onClick: W,
                                          size: r.$n.Sizes.SMALL,
                                          color: nl ? r.$n.Colors.CUSTOM : r.$n.Colors.PRIMARY,
                                          look: r.$n.Looks.LINK,
                                          children: X,
                                      })
                                    : null,
                                (function () {
                                    if (nL)
                                        return (0, i.jsx)(p.A, { analyticsLocation: S, guild: a.guild, onClose: Q });
                                    let n = nl ? b.intl.string(b.t.pj0XBN) : void 0;
                                    return (
                                        nx &&
                                            (null != n_
                                                ? (n = (0, h.FY)({
                                                      intervalType: n_?.subscriptionTrial?.interval,
                                                      intervalCount: n_?.subscriptionTrial?.intervalCount,
                                                  }))
                                                : null != np &&
                                                  (n = b.intl.formatToPlainString(b.t.bkQ4bH, {
                                                      percent: np.discount.amount,
                                                  }))),
                                        (0, i.jsx)(M.A, {
                                            className: nt,
                                            showGradient: nl || na,
                                            premiumModalAnalyticsLocation: S,
                                            subscriptionTier: nn,
                                            size: r.$n.Sizes.SMALL,
                                            color: nl || na ? r.$n.Colors.CUSTOM : r.$n.Colors.GREEN,
                                            onClick: () => {
                                                G?.(), Q();
                                            },
                                            onSubscribeModalClose: q,
                                            textOptions: { textOverride: J ?? n },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !ns &&
                            !nl &&
                            (0, i.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: null != ni ? ni : b.intl.string(b.t["13/7kX"]),
                                onClick: Q,
                            }),
                    ],
                }),
                nl ? (0, i.jsx)(c.s_, { "data-migration-pending": !0, onClick: Q, className: R.b }) : null,
                nd,
            ],
        })
    );
}
