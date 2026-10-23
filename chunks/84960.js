s.d(e, { A: () => D });
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
    _ = s(688810),
    p = s(611371),
    x = s(944304),
    L = s(763827),
    g = s(174459),
    h = s(927578),
    A = s(10392),
    N = s(82498),
    f = s(286320),
    j = s(724651),
    M = s(732280),
    k = s(725807),
    I = s(511484),
    T = s(811611),
    v = s(579245),
    S = s(778712),
    b = s(105292),
    C = s(135916);
function U(n) {
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
    let r = e.map((n, s) => (0, i.jsx)(v.n, { affinity: n, applyMask: s !== e.length - 1, size: S._3.SIZE_20 }, n.id));
    return (0, i.jsxs)("div", {
        className: t()(C.kL, s),
        children: [
            (0, i.jsx)("div", { className: C.zc, children: r }),
            (0, i.jsx)("div", {
                className: C.FS,
                children: (0, i.jsx)(u.E, { variant: "text-sm/medium", children: a }),
            }),
        ],
    });
}
var O = s(202541),
    P = s(652215),
    R = s(777133);
function D(n) {
    let {
            title: e,
            type: s,
            guildBoostProps: a,
            analyticsSource: v,
            analyticsLocation: S,
            body: C,
            context: D,
            glowUp: y,
            modalClassName: $,
            modalContentClassName: w,
            artContainerClassName: z,
            artClassName: V,
            headerClassName: F,
            bodyClassName: H,
            transitionState: Q,
            onClose: G,
            onSubscribeClick: q,
            onSubscribeFinish: W,
            onSecondaryClick: X,
            secondaryCTA: B,
            secondaryCTAClassName: J,
            subscribeButtonText: Y,
            showNewBadge: Z = !1,
            showBetaBadge: K = !1,
            enableArtBoxShadow: nn = !0,
            subscriptionTier: ne = O.pe.TIER_2,
            isLoading: ns = !1,
            hideBackButton: ni,
            backButtonText: nl,
            showEnhancedUpsell: na,
            useSubscribeButtonGradient: nt,
            subscribeButtonClassname: nr,
            hidePremiumOfferUpsell: nc,
            children: no,
            LeadingComponent: nd,
            backgroundElements: nu,
            smallText: nm = !1,
            footerClassName: nE,
            ...n_
        } = n,
        np = null != a,
        nx = (0, M.V)(),
        nL = (0, j.O)(),
        ng = !nc && (nx?.subscriptionTrial?.skuId === ne || (0, I.U9)(nL, ne)) && !np,
        { analyticsLocations: nh } = (0, _.Ay)(E.A.PREMIUM_UPSELL_MODAL),
        nA = { analyticsLocation: S, analyticsLocations: nh, analyticsSource: v, guildBoostProps: a, type: s },
        nN = l.useRef(nA);
    (l.useEffect(() => {
        nN.current = nA;
    }),
        l.useEffect(() => {
            if (ns) return;
            let {
                analyticsLocation: n,
                analyticsLocations: e,
                analyticsSource: s,
                guildBoostProps: i,
                type: l,
            } = nN.current;
            np
                ? g.default.track(P.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${l} - Tier ${i?.boostedGuildTier}`,
                      guild_id: i?.guild.id,
                      channel_id: i?.channelId,
                      location: n,
                      location_stack: e,
                  })
                : (g.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: l,
                      source: s,
                      location: n,
                      location_stack: e,
                      sku_id: (0, h.mH)(ne),
                      voice_guild_id: L.A.getGuildId() ?? null,
                  }),
                  (0, A.sq)(P.U7l.PREMIUM_UPSELL_VIEWED, e, () => (0, N.uq)(l)));
        }, [np, ne, ns]));
    let nf = (0, f.b)(),
        nj =
            nf.length > 1 &&
            (function (n) {
                switch (n) {
                    case O.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case O.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case O.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case O.e.AVATAR_DECORATION_MODAL_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(s),
        nM = nn ? t()(R.JS, R.OV, z) : t()(R.JS, z),
        nk = null;
    return (
        null != n_.artURL
            ? (nk = (0, i.jsx)("img", { className: t()(V, R.Qw), alt: "", src: n_.artURL }))
            : null != n_.artElement && (nk = n_.artElement),
        (0, i.jsxs)(c.EO, {
            "data-migration-pending": !0,
            className: t()(R.zr, !ng && $),
            "aria-label": e,
            transitionState: Q,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != nk &&
                    (0, i.jsxs)("div", {
                        className: nM,
                        children: [
                            nk,
                            Z
                                ? (0, i.jsx)("img", { className: R.CI, alt: "", src: "/assets/4fa3a10f129d5e31.png" })
                                : null,
                        ],
                    }),
                (0, i.jsx)(c.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: t()(na ? R.es : R.Qs, !ng && w),
                    children: ns
                        ? (0, i.jsx)(o.y, {})
                        : ng
                          ? (0, i.jsx)(T.Ay, {
                                onClose: G,
                                type: s,
                                subscriptionTier: nx?.subscriptionTrial?.skuId ?? O.pe.TIER_2,
                                headingText: e,
                                context: D,
                                analyticsLocationObject: S,
                                discountOffer: nL,
                                trialOffer: nx,
                                children: y,
                            })
                          : (0, i.jsxs)("div", {
                                className: R.hQ,
                                children: [
                                    nd,
                                    (0, i.jsxs)("div", {
                                        className: R.kQ,
                                        children: [
                                            (0, i.jsxs)(d.D, {
                                                className: t()(R.wx, { [R.k]: na }, F),
                                                variant: "heading-xl/bold",
                                                children: [e, K ? (0, i.jsx)(p.A, { className: R.TN }) : null],
                                            }),
                                            nj ? (0, i.jsx)(U, { affinities: nf }) : void 0,
                                            no,
                                            (0, i.jsx)(u.E, {
                                                variant: nm ? "text-sm/normal" : "text-md/normal",
                                                className: t()(H, R.uI),
                                                children: C,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, i.jsxs)(c.jl, {
                    "data-migration-pending": !0,
                    className: t()(R.qr, nE, { [R.I$]: na }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: t()(R.E3, { [R.Q_]: na }),
                            children: [
                                null != B
                                    ? (0, i.jsx)(r.$n, {
                                          "data-migration-pending": !0,
                                          className: t()(R.Dc, J, { [R.HZ]: na }),
                                          onClick: X,
                                          size: r.$n.Sizes.SMALL,
                                          color: na ? r.$n.Colors.CUSTOM : r.$n.Colors.PRIMARY,
                                          look: r.$n.Looks.LINK,
                                          children: B,
                                      })
                                    : null,
                                (function () {
                                    if (np)
                                        return (0, i.jsx)(x.A, { analyticsLocation: S, guild: a.guild, onClose: G });
                                    let n = na ? b.intl.string(b.t.pj0XBN) : void 0;
                                    return (
                                        ng &&
                                            (null != nx
                                                ? (n = (0, h.FY)({
                                                      intervalType: nx?.subscriptionTrial?.interval,
                                                      intervalCount: nx?.subscriptionTrial?.intervalCount,
                                                  }))
                                                : null != nL &&
                                                  (n = b.intl.formatToPlainString(b.t.bkQ4bH, {
                                                      percent: nL.discount.amount,
                                                  }))),
                                        (0, i.jsx)(k.A, {
                                            className: nr,
                                            showGradient: na || nt,
                                            premiumModalAnalyticsLocation: S,
                                            subscriptionTier: ne,
                                            size: r.$n.Sizes.SMALL,
                                            color: na || nt ? r.$n.Colors.CUSTOM : r.$n.Colors.GREEN,
                                            onClick: () => {
                                                (q?.(), G());
                                            },
                                            onSubscribeModalClose: W,
                                            textOptions: { textOverride: Y ?? n },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !ni &&
                            !na &&
                            (0, i.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: null != nl ? nl : b.intl.string(b.t["13/7kX"]),
                                onClick: G,
                            }),
                    ],
                }),
                na ? (0, i.jsx)(c.s_, { "data-migration-pending": !0, onClick: G, className: R.b }) : null,
                nu,
            ],
        })
    );
}
