n.d(t, { Z: () => w });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(755721),
    c = n(481060),
    u = n(355467),
    d = n(100527),
    f = n(906732),
    _ = n(688465),
    p = n(678558),
    h = n(626135),
    m = n(74538),
    g = n(357355),
    E = n(622909),
    b = n(639119),
    y = n(767714),
    O = n(230916),
    v = n(165583),
    I = n(302945),
    T = n(474936),
    S = n(981631),
    A = n(388032),
    C = n(144867),
    N = n(769860);
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function D(e) {
    switch (e) {
        case T.cd.ANIMATED_AVATAR_MODAL_UPSELL:
        case T.cd.ANIMATED_BANNER_MODAL_UPSELL:
        case T.cd.PROFILE_EFFECT_MODAL_UPSELL:
        case T.cd.AVATAR_DECORATION_MODAL_UPSELL:
        case T.cd.FOR_LATER_MODAL_UPSELL:
        case T.cd.VOICE_FILTERS_UPSELL:
        case T.cd.RECENT_AVATARS_ROADBLOCK_UPSELL:
            return !0;
        default:
            return !1;
    }
}
function w(e) {
    var t,
        n,
        a,
        {
            title: P,
            type: w,
            guildBoostProps: L,
            analyticsSource: x,
            analyticsLocation: M,
            body: k,
            context: j,
            glowUp: U,
            modalClassName: G,
            modalContentClassName: B,
            artContainerClassName: Z,
            artClassName: F,
            headerClassName: V,
            bodyClassName: H,
            transitionState: Y,
            onClose: W,
            onSubscribeClick: K,
            onSubscribeFinish: z,
            onSecondaryClick: q,
            secondaryCTA: X,
            secondaryCTAClassName: Q,
            subscribeButtonText: J,
            showNewBadge: $ = !1,
            showBetaBadge: ee = !1,
            enableArtBoxShadow: et = !0,
            subscriptionTier: en = T.Si.TIER_2,
            isLoading: er = !1,
            hideBackButton: ei,
            backButtonText: ea,
            showEnhancedUpsell: eo,
            useSubscribeButtonGradient: es,
            subscribeButtonClassname: el,
            hidePremiumOfferUpsell: ec,
            children: eu,
            LeadingComponent: ed,
            backgroundElements: ef,
            smallText: e_ = !1,
            footerClassName: ep,
        } = e,
        eh = R(e, [
            "title",
            "type",
            "guildBoostProps",
            "analyticsSource",
            "analyticsLocation",
            "body",
            "context",
            "glowUp",
            "modalClassName",
            "modalContentClassName",
            "artContainerClassName",
            "artClassName",
            "headerClassName",
            "bodyClassName",
            "transitionState",
            "onClose",
            "onSubscribeClick",
            "onSubscribeFinish",
            "onSecondaryClick",
            "secondaryCTA",
            "secondaryCTAClassName",
            "subscribeButtonText",
            "showNewBadge",
            "showBetaBadge",
            "enableArtBoxShadow",
            "subscriptionTier",
            "isLoading",
            "hideBackButton",
            "backButtonText",
            "showEnhancedUpsell",
            "useSubscribeButtonGradient",
            "subscribeButtonClassname",
            "hidePremiumOfferUpsell",
            "children",
            "LeadingComponent",
            "backgroundElements",
            "smallText",
            "footerClassName",
        ]);
    let em = null != L,
        eg = (0, b.N)(),
        eE = (0, E.N)(),
        eb =
            !ec &&
            ((null == eg || null == (t = eg.subscription_trial) ? void 0 : t.sku_id) === en || (0, O.Wp)(eE, en)) &&
            !em,
        { analyticsLocations: ey } = (0, f.ZP)(d.Z.PREMIUM_UPSELL_MODAL),
        eO = {
            analyticsLocation: M,
            analyticsLocations: ey,
            analyticsSource: x,
            guildBoostProps: L,
            type: w,
        },
        ev = i.useRef(eO);
    i.useEffect(() => {
        ev.current = eO;
    }),
        i.useEffect(() => {
            if (er) return;
            let {
                analyticsLocation: e,
                analyticsLocations: t,
                analyticsSource: n,
                guildBoostProps: r,
                type: i,
            } = ev.current;
            em
                ? h.default.track(S.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: "".concat(i, " - Tier ").concat(null == r ? void 0 : r.boostedGuildTier),
                      guild_id: null == r ? void 0 : r.guild.id,
                      channel_id: null == r ? void 0 : r.channelId,
                      location: e,
                      location_stack: t,
                  })
                : h.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, m.Wz)(en),
                  });
        }, [em, en, er]);
    let eI = (0, s.e7)([g.Z], () => g.Z.affinities),
        eT = eI.length > 1 && D(w),
        eS = (0, s.e7)([g.Z], () => g.Z.hasFetched);
    i.useEffect(() => {
        eS || u.MH();
    }, [eS]);
    let eA = () => {
            if (em)
                return (0, r.jsx)(p.Z, {
                    analyticsLocation: M,
                    guild: L.guild,
                    onClose: W,
                });
            let e = eo ? A.intl.string(A.t.pj0XBN) : void 0;
            if (eb)
                if (null != eg) {
                    var t, n;
                    e = (0, m.Rt)({
                        intervalType: null == eg || null == (t = eg.subscription_trial) ? void 0 : t.interval,
                        intervalCount: null == eg || null == (n = eg.subscription_trial) ? void 0 : n.interval_count,
                    });
                } else null != eE && (e = A.intl.formatToPlainString(A.t.bkQ4bH, { percent: eE.discount.amount }));
            return (0, r.jsx)(y.Z, {
                className: el,
                showGradient: eo || es,
                premiumModalAnalyticsLocation: M,
                subscriptionTier: en,
                size: l.zx.Sizes.SMALL,
                color: eo || es ? l.zx.Colors.CUSTOM : l.zx.Colors.GREEN,
                onClick: () => {
                    null == K || K(), W();
                },
                onSubscribeModalClose: z,
                textOptions: { textOverride: null != J ? J : e },
            });
        },
        eC = et ? o()(C.artContainer, C.artContainerBoxShadow, Z) : o()(C.artContainer, Z),
        eN = null;
    return (
        null != eh.artURL
            ? (eN = (0, r.jsx)("img", {
                  className: o()(F, C.art),
                  alt: "",
                  src: eh.artURL,
              }))
            : null != eh.artElement && (eN = eh.artElement),
        (0, r.jsxs)(c.Y0X, {
            "data-migration-pending": !0,
            className: o()(C.root, !eb && G),
            "aria-label": P,
            transitionState: Y,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eN &&
                    (0, r.jsxs)("div", {
                        className: eC,
                        children: [
                            eN,
                            $
                                ? (0, r.jsx)("img", {
                                      className: C.sparkleBadge,
                                      alt: "",
                                      src: N,
                                  })
                                : null,
                        ],
                    }),
                (0, r.jsx)(c.hzk, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: o()(eo ? C.enhancedContent : C.content, !eb && B),
                    children: er
                        ? (0, r.jsx)(c.$jN, {})
                        : eb
                          ? (0, r.jsx)(v.ZP, {
                                onClose: W,
                                type: w,
                                subscriptionTier:
                                    null != (a = null == eg || null == (n = eg.subscription_trial) ? void 0 : n.sku_id)
                                        ? a
                                        : T.Si.TIER_2,
                                headingText: P,
                                context: j,
                                analyticsLocationObject: M,
                                discountOffer: eE,
                                trialOffer: eg,
                                children: U,
                            })
                          : (0, r.jsxs)("div", {
                                className: C.contentContainer,
                                children: [
                                    ed,
                                    (0, r.jsxs)("div", {
                                        className: C.bodyContent,
                                        children: [
                                            (0, r.jsxs)(c.Heading, {
                                                className: o()(C.header, { [C.enhancedHeader]: eo }, V),
                                                variant: "heading-xl/bold",
                                                children: [P, ee ? (0, r.jsx)(_.Z, { className: C.betaTag }) : null],
                                            }),
                                            eT ? (0, r.jsx)(I.Z, { affinities: eI }) : void 0,
                                            eu,
                                            (0, r.jsx)(c.Text, {
                                                variant: e_ ? "text-sm/normal" : "text-md/normal",
                                                className: o()(H, C.subHeader),
                                                children: k,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, r.jsxs)(c.mzw, {
                    "data-migration-pending": !0,
                    className: o()(C.footer, ep, { [C.enhancedFooter]: eo }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: o()(C.primaryActions, { [C.enhancedPrimaryActions]: eo }),
                            children: [
                                null != X
                                    ? (0, r.jsx)(l.zx, {
                                          "data-migration-pending": !0,
                                          className: o()(C.secondaryAction, Q, { [C.enhancedSecondaryAction]: eo }),
                                          onClick: q,
                                          size: l.zx.Sizes.SMALL,
                                          color: eo ? l.zx.Colors.CUSTOM : l.zx.Colors.PRIMARY,
                                          look: l.zx.Looks.LINK,
                                          children: X,
                                      })
                                    : null,
                                eA(),
                            ],
                        }),
                        !ei &&
                            !eo &&
                            (0, r.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != ea ? ea : A.intl.string(A.t["13/7kX"]),
                                onClick: W,
                            }),
                    ],
                }),
                eo
                    ? (0, r.jsx)(c.olH, {
                          "data-migration-pending": !0,
                          onClick: W,
                          className: C.closeButton,
                      })
                    : null,
                ef,
            ],
        })
    );
}
