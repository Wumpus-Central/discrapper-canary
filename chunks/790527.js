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
    p = n(688465),
    _ = n(678558),
    m = n(626135),
    h = n(74538),
    g = n(357355),
    E = n(622909),
    b = n(639119),
    y = n(767714),
    O = n(230916),
    v = n(165583),
    S = n(302945),
    I = n(474936),
    T = n(981631),
    A = n(388032),
    C = n(144867),
    N = n(769860);
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
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
        case I.cd.ANIMATED_AVATAR_MODAL_UPSELL:
        case I.cd.ANIMATED_BANNER_MODAL_UPSELL:
        case I.cd.PROFILE_EFFECT_MODAL_UPSELL:
        case I.cd.AVATAR_DECORATION_MODAL_UPSELL:
        case I.cd.FOR_LATER_MODAL_UPSELL:
        case I.cd.VOICE_FILTERS_UPSELL:
        case I.cd.RECENT_AVATARS_ROADBLOCK_UPSELL:
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
            title: R,
            type: w,
            guildBoostProps: x,
            analyticsSource: L,
            analyticsLocation: j,
            body: M,
            context: k,
            glowUp: U,
            modalClassName: G,
            modalContentClassName: Z,
            artContainerClassName: B,
            artClassName: F,
            headerClassName: V,
            bodyClassName: H,
            transitionState: Y,
            onClose: W,
            onSubscribeClick: K,
            onSubscribeFinish: z,
            onSecondaryClick: q,
            secondaryCTA: Q,
            secondaryCTAClassName: X,
            subscribeButtonText: J,
            showNewBadge: $ = !1,
            showBetaBadge: ee = !1,
            enableArtBoxShadow: et = !0,
            subscriptionTier: en = I.Si.TIER_2,
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
            smallText: ep = !1,
            footerClassName: e_,
        } = e,
        em = P(e, [
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
    let eh = null != x,
        eg = (0, b.N)(),
        eE = (0, E.N)(),
        eb =
            !ec &&
            ((null == eg || null == (t = eg.subscription_trial) ? void 0 : t.sku_id) === en || (0, O.Wp)(eE, en)) &&
            !eh,
        { analyticsLocations: ey } = (0, f.ZP)(d.Z.PREMIUM_UPSELL_MODAL),
        eO = {
            analyticsLocation: j,
            analyticsLocations: ey,
            analyticsSource: L,
            guildBoostProps: x,
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
            eh
                ? m.default.track(T.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: "".concat(i, " - Tier ").concat(null == r ? void 0 : r.boostedGuildTier),
                      guild_id: null == r ? void 0 : r.guild.id,
                      channel_id: null == r ? void 0 : r.channelId,
                      location: e,
                      location_stack: t,
                  })
                : m.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, h.Wz)(en),
                  });
        }, [eh, en, er]);
    let eS = (0, s.e7)([g.Z], () => g.Z.affinities),
        eI = eS.length > 1 && D(w),
        eT = (0, s.e7)([g.Z], () => g.Z.hasFetched);
    i.useEffect(() => {
        eT || u.MH();
    }, [eT]);
    let eA = () => {
            if (eh)
                return (0, r.jsx)(_.Z, {
                    analyticsLocation: j,
                    guild: x.guild,
                    onClose: W,
                });
            let e = eo ? A.intl.string(A.t.pj0XBN) : void 0;
            if (eb)
                if (null != eg) {
                    var t, n;
                    e = (0, h.Rt)({
                        intervalType: null == eg || null == (t = eg.subscription_trial) ? void 0 : t.interval,
                        intervalCount: null == eg || null == (n = eg.subscription_trial) ? void 0 : n.interval_count,
                    });
                } else null != eE && (e = A.intl.formatToPlainString(A.t.bkQ4bH, { percent: eE.discount.amount }));
            return (0, r.jsx)(y.Z, {
                className: el,
                showGradient: eo || es,
                premiumModalAnalyticsLocation: j,
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
        eC = et ? o()(C.artContainer, C.artContainerBoxShadow, B) : o()(C.artContainer, B),
        eN = null;
    return (
        null != em.artURL
            ? (eN = (0, r.jsx)("img", {
                  className: o()(F, C.art),
                  alt: "",
                  src: em.artURL,
              }))
            : null != em.artElement && (eN = em.artElement),
        (0, r.jsxs)(c.Y0X, {
            "data-migration-pending": !0,
            className: o()(C.root, !eb && G),
            "aria-label": R,
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
                    className: o()(eo ? C.enhancedContent : C.content, !eb && Z),
                    children: er
                        ? (0, r.jsx)(c.$jN, {})
                        : eb
                          ? (0, r.jsx)(v.ZP, {
                                onClose: W,
                                type: w,
                                subscriptionTier:
                                    null != (a = null == eg || null == (n = eg.subscription_trial) ? void 0 : n.sku_id)
                                        ? a
                                        : I.Si.TIER_2,
                                headingText: R,
                                context: k,
                                analyticsLocationObject: j,
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
                                                children: [R, ee ? (0, r.jsx)(p.Z, { className: C.betaTag }) : null],
                                            }),
                                            eI ? (0, r.jsx)(S.Z, { affinities: eS }) : void 0,
                                            eu,
                                            (0, r.jsx)(c.Text, {
                                                variant: ep ? "text-sm/normal" : "text-md/normal",
                                                className: o()(H, C.subHeader),
                                                children: M,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, r.jsxs)(c.mzw, {
                    "data-migration-pending": !0,
                    className: o()(C.footer, e_, { [C.enhancedFooter]: eo }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: o()(C.primaryActions, { [C.enhancedPrimaryActions]: eo }),
                            children: [
                                null != Q
                                    ? (0, r.jsx)(l.zx, {
                                          "data-migration-pending": !0,
                                          className: o()(C.secondaryAction, X, { [C.enhancedSecondaryAction]: eo }),
                                          onClick: q,
                                          size: l.zx.Sizes.SMALL,
                                          color: eo ? l.zx.Colors.CUSTOM : l.zx.Colors.PRIMARY,
                                          look: l.zx.Looks.LINK,
                                          children: Q,
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
