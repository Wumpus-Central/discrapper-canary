s.d(e, { A: () => y });
var i = s(477900),
    l = s(582128),
    a = s(503698),
    t = s.n(a),
    r = s(862482),
    c = s(935462),
    o = s(289873),
    d = s(534514),
    u = s(834730),
    m = s(821609),
    E = s(793574),
    _ = s(688810),
    p = s(611371),
    L = s(944304),
    g = s(495867),
    h = s(129230),
    x = s(879610),
    A = s(739053),
    N = s(82498),
    f = s(589152),
    j = s(423814),
    M = s(77528),
    b = s(725807),
    k = s(511484),
    I = s(811611),
    T = s(579245),
    v = s(778712),
    S = s(792996),
    C = s(135916);
function U(n) {
    let { affinities: e, className: s } = n,
        a = l.useMemo(() => {
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
    let r = e.map((n, s) => (0, i.jsx)(T.n, { affinity: n, applyMask: s !== e.length - 1, size: v._3.SIZE_20 }, n.id));
    return (0, i.jsxs)("div", {
        className: t()(C.kL, s),
        children: [
            (0, i.jsx)("div", { className: C.zc, children: r }),
            (0, i.jsx)("div", {
                className: C.FS,
                children: (0, i.jsx)(u.E, { variant: "body-sm/medium", children: a }),
            }),
        ],
    });
}
var O = s(682901),
    P = s(652215),
    R = s(777133);
function y(n) {
    let {
            title: e,
            type: s,
            guildBoostProps: a,
            analyticsSource: T,
            analyticsLocation: v,
            body: C,
            context: y,
            glowUp: D,
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
        nL = (0, M.V)(),
        ng = (0, j.O)(),
        nh = !nc && (nL?.subscriptionTrial?.skuId === ne || (0, k.U9)(ng, ne)) && !np,
        { analyticsLocations: nx } = (0, _.Ay)(E.A.PREMIUM_UPSELL_MODAL),
        nA = { analyticsLocation: v, analyticsLocations: nx, analyticsSource: T, guildBoostProps: a, type: s },
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
                ? h.default.track(P.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${l} - Tier ${i?.boostedGuildTier}`,
                      guild_id: i?.guild.id,
                      channel_id: i?.channelId,
                      location: n,
                      location_stack: e,
                  })
                : (h.default.track(P.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: l,
                      source: s,
                      location: n,
                      location_stack: e,
                      sku_id: (0, x.mH)(ne),
                      voice_guild_id: g.A.getGuildId() ?? null,
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
        nb = null;
    return (
        null != n_.artURL
            ? (nb = (0, i.jsx)("img", { className: t()(V, R.Qw), alt: "", src: n_.artURL }))
            : null != n_.artElement && (nb = n_.artElement),
        (0, i.jsxs)(c.EO, {
            "data-migration-pending": !0,
            className: t()(R.zr, !nh && $),
            "aria-label": e,
            transitionState: Q,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != nb &&
                    (0, i.jsxs)("div", {
                        className: nM,
                        children: [
                            nb,
                            Z
                                ? (0, i.jsx)("img", { className: R.CI, alt: "", src: "/assets/4fa3a10f129d5e31.png" })
                                : null,
                        ],
                    }),
                (0, i.jsx)(c.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: t()(na ? R.es : R.Qs, !nh && w),
                    children: ns
                        ? (0, i.jsx)(o.y, {})
                        : nh
                          ? (0, i.jsx)(I.Ay, {
                                onClose: G,
                                type: s,
                                subscriptionTier: nL?.subscriptionTrial?.skuId ?? O.pe.TIER_2,
                                headingText: e,
                                context: y,
                                analyticsLocationObject: v,
                                discountOffer: ng,
                                trialOffer: nL,
                                children: D,
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
                                                variant: "heading-xl/semibold",
                                                children: [e, K ? (0, i.jsx)(p.A, { className: R.TN }) : null],
                                            }),
                                            nj ? (0, i.jsx)(U, { affinities: nf }) : void 0,
                                            no,
                                            (0, i.jsx)(u.E, {
                                                variant: nm ? "body-sm/normal" : "body-md/normal",
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
                                        return (0, i.jsx)(L.A, { analyticsLocation: v, guild: a.guild, onClose: G });
                                    let n = na ? S.intl.string(S.t.pj0XBN) : void 0;
                                    return (
                                        nh &&
                                            (null != nL
                                                ? (n = (0, x.FY)({
                                                      intervalType: nL?.subscriptionTrial?.interval,
                                                      intervalCount: nL?.subscriptionTrial?.intervalCount,
                                                  }))
                                                : null != ng &&
                                                  (n = S.intl.formatToPlainString(S.t.bkQ4bH, {
                                                      percent: ng.discount.amount,
                                                  }))),
                                        (0, i.jsx)(b.A, {
                                            className: nr,
                                            showGradient: na || nt,
                                            premiumModalAnalyticsLocation: v,
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
                                text: null != nl ? nl : S.intl.string(S.t["13/7kX"]),
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
