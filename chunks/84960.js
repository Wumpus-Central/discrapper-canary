s.d(n, { A: () => D });
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
    x = s(763827),
    A = s(174459),
    g = s(158045),
    h = s(10392),
    N = s(82498),
    f = s(286320),
    j = s(724651),
    M = s(732280),
    T = s(725807),
    k = s(511484),
    I = s(811611),
    S = s(579245),
    v = s(778712),
    b = s(375708),
    C = s(135916);
function U(e) {
    let { affinities: n, className: s } = e,
        a = l.useMemo(() => {
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
    let r = n.map((e, s) => (0, i.jsx)(S.n, { affinity: e, applyMask: s !== n.length - 1, size: v._3.SIZE_20 }, e.id));
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
    R = s(652215),
    P = s(777133);
function D(e) {
    let {
            title: n,
            type: s,
            guildBoostProps: a,
            analyticsSource: S,
            analyticsLocation: v,
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
            enableArtBoxShadow: ee = !0,
            subscriptionTier: en = O.pe.TIER_2,
            isLoading: es = !1,
            hideBackButton: ei,
            backButtonText: el,
            showEnhancedUpsell: ea,
            useSubscribeButtonGradient: et,
            subscribeButtonClassname: er,
            hidePremiumOfferUpsell: ec,
            children: eo,
            LeadingComponent: ed,
            backgroundElements: eu,
            smallText: em = !1,
            footerClassName: eE,
            ...eL
        } = e,
        e_ = null != a,
        ep = (0, M.V)(),
        ex = (0, j.O)(),
        eA = !ec && (ep?.subscriptionTrial?.skuId === en || (0, k.U9)(ex, en)) && !e_,
        { analyticsLocations: eg } = (0, L.Ay)(E.A.PREMIUM_UPSELL_MODAL),
        eh = { analyticsLocation: v, analyticsLocations: eg, analyticsSource: S, guildBoostProps: a, type: s },
        eN = l.useRef(eh);
    (l.useEffect(() => {
        eN.current = eh;
    }),
        l.useEffect(() => {
            if (es) return;
            let {
                analyticsLocation: e,
                analyticsLocations: n,
                analyticsSource: s,
                guildBoostProps: i,
                type: l,
            } = eN.current;
            e_
                ? A.default.track(R.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: `${l} - Tier ${i?.boostedGuildTier}`,
                      guild_id: i?.guild.id,
                      channel_id: i?.channelId,
                      location: e,
                      location_stack: n,
                  })
                : (A.default.track(R.HAw.PREMIUM_UPSELL_VIEWED, {
                      type: l,
                      source: s,
                      location: e,
                      location_stack: n,
                      sku_id: (0, g.mH)(en),
                      voice_guild_id: x.A.getGuildId() ?? null,
                  }),
                  (0, h.sq)(R.U7l.PREMIUM_UPSELL_VIEWED, n, () => (0, N.uq)(l)));
        }, [e_, en, es]));
    let ef = (0, f.b)(),
        ej =
            ef.length > 1 &&
            (function (e) {
                switch (e) {
                    case O.e.ANIMATED_AVATAR_MODAL_UPSELL:
                    case O.e.ANIMATED_BANNER_MODAL_UPSELL:
                    case O.e.PROFILE_EFFECT_MODAL_UPSELL:
                    case O.e.AVATAR_DECORATION_MODAL_UPSELL:
                    case O.e.FOR_LATER_MODAL_UPSELL:
                        return !0;
                    default:
                        return !1;
                }
            })(s),
        eM = ee ? t()(P.JS, P.OV, z) : t()(P.JS, z),
        eT = null;
    return (
        null != eL.artURL
            ? (eT = (0, i.jsx)("img", { className: t()(V, P.Qw), alt: "", src: eL.artURL }))
            : null != eL.artElement && (eT = eL.artElement),
        (0, i.jsxs)(c.EO, {
            "data-migration-pending": !0,
            className: t()(P.zr, !eA && $),
            "aria-label": n,
            transitionState: Q,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eT &&
                    (0, i.jsxs)("div", {
                        className: eM,
                        children: [
                            eT,
                            Z
                                ? (0, i.jsx)("img", { className: P.CI, alt: "", src: "/assets/4fa3a10f129d5e31.png" })
                                : null,
                        ],
                    }),
                (0, i.jsx)(c.$m, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: t()(ea ? P.es : P.Qs, !eA && w),
                    children: es
                        ? (0, i.jsx)(o.y, {})
                        : eA
                          ? (0, i.jsx)(I.Ay, {
                                onClose: G,
                                type: s,
                                subscriptionTier: ep?.subscriptionTrial?.skuId ?? O.pe.TIER_2,
                                headingText: n,
                                context: D,
                                analyticsLocationObject: v,
                                discountOffer: ex,
                                trialOffer: ep,
                                children: y,
                            })
                          : (0, i.jsxs)("div", {
                                className: P.hQ,
                                children: [
                                    ed,
                                    (0, i.jsxs)("div", {
                                        className: P.kQ,
                                        children: [
                                            (0, i.jsxs)(d.D, {
                                                className: t()(P.wx, { [P.k]: ea }, F),
                                                variant: "heading-xl/bold",
                                                children: [n, K ? (0, i.jsx)(_.A, { className: P.TN }) : null],
                                            }),
                                            ej ? (0, i.jsx)(U, { affinities: ef }) : void 0,
                                            eo,
                                            (0, i.jsx)(u.E, {
                                                variant: em ? "text-sm/normal" : "text-md/normal",
                                                className: t()(H, P.uI),
                                                children: C,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, i.jsxs)(c.jl, {
                    "data-migration-pending": !0,
                    className: t()(P.qr, eE, { [P.I$]: ea }),
                    children: [
                        (0, i.jsxs)("div", {
                            className: t()(P.E3, { [P.Q_]: ea }),
                            children: [
                                null != B
                                    ? (0, i.jsx)(r.$n, {
                                          "data-migration-pending": !0,
                                          className: t()(P.Dc, J, { [P.HZ]: ea }),
                                          onClick: X,
                                          size: r.$n.Sizes.SMALL,
                                          color: ea ? r.$n.Colors.CUSTOM : r.$n.Colors.PRIMARY,
                                          look: r.$n.Looks.LINK,
                                          children: B,
                                      })
                                    : null,
                                (function () {
                                    if (e_)
                                        return (0, i.jsx)(p.A, { analyticsLocation: v, guild: a.guild, onClose: G });
                                    let e = ea ? b.intl.string(b.t.pj0XBN) : void 0;
                                    return (
                                        eA &&
                                            (null != ep
                                                ? (e = (0, g.FY)({
                                                      intervalType: ep?.subscriptionTrial?.interval,
                                                      intervalCount: ep?.subscriptionTrial?.intervalCount,
                                                  }))
                                                : null != ex &&
                                                  (e = b.intl.formatToPlainString(b.t.bkQ4bH, {
                                                      percent: ex.discount.amount,
                                                  }))),
                                        (0, i.jsx)(T.A, {
                                            className: er,
                                            showGradient: ea || et,
                                            premiumModalAnalyticsLocation: v,
                                            subscriptionTier: en,
                                            size: r.$n.Sizes.SMALL,
                                            color: ea || et ? r.$n.Colors.CUSTOM : r.$n.Colors.GREEN,
                                            onClick: () => {
                                                (q?.(), G());
                                            },
                                            onSubscribeModalClose: W,
                                            textOptions: { textOverride: Y ?? e },
                                        })
                                    );
                                })(),
                            ],
                        }),
                        !ei &&
                            !ea &&
                            (0, i.jsx)(m.$, {
                                variant: "secondary",
                                size: "sm",
                                text: null != el ? el : b.intl.string(b.t["13/7kX"]),
                                onClick: G,
                            }),
                    ],
                }),
                ea ? (0, i.jsx)(c.s_, { "data-migration-pending": !0, onClick: G, className: P.b }) : null,
                eu,
            ],
        })
    );
}
