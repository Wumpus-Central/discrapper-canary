n.d(t, { Z: () => D });
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
    h = n(626135),
    m = n(74538),
    g = n(357355),
    E = n(622909),
    b = n(639119),
    y = n(767714),
    O = n(230916),
    v = n(165583),
    S = n(302945),
    I = n(474936),
    T = n(981631),
    C = n(388032),
    A = n(509716),
    N = n(769860);
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function R(e) {
    switch (e) {
        case I.cd.ANIMATED_AVATAR_MODAL_UPSELL:
        case I.cd.ANIMATED_BANNER_MODAL_UPSELL:
        case I.cd.PROFILE_EFFECT_MODAL_UPSELL:
        case I.cd.AVATAR_DECORATION_MODAL_UPSELL:
        case I.cd.FOR_LATER_MODAL_UPSELL:
        case I.cd.VOICE_FILTERS_UPSELL:
            return !0;
        default:
            return !1;
    }
}
function D(e) {
    var t,
        n,
        a,
        {
            title: w,
            type: D,
            guildBoostProps: x,
            analyticsSource: L,
            analyticsLocation: j,
            body: M,
            context: k,
            glowUp: U,
            modalClassName: G,
            modalContentClassName: Z,
            artContainerClassName: F,
            artClassName: B,
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
        eh = P(e, [
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
    let em = null != x,
        eg = (0, b.N)(),
        eE = (0, E.N)(),
        eb =
            !ec &&
            ((null == eg || null == (t = eg.subscription_trial) ? void 0 : t.sku_id) === en || (0, O.Wp)(eE, en)) &&
            !em,
        { analyticsLocations: ey } = (0, f.ZP)(d.Z.PREMIUM_UPSELL_MODAL),
        eO = {
            analyticsLocation: j,
            analyticsLocations: ey,
            analyticsSource: L,
            guildBoostProps: x,
            type: D,
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
                ? h.default.track(T.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: "".concat(i, " - Tier ").concat(null == r ? void 0 : r.boostedGuildTier),
                      guild_id: null == r ? void 0 : r.guild.id,
                      channel_id: null == r ? void 0 : r.channelId,
                      location: e,
                      location_stack: t,
                  })
                : h.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, m.Wz)(en),
                  });
        }, [em, en, er]);
    let eS = (0, s.e7)([g.Z], () => g.Z.affinities),
        eI = eS.length > 1 && R(D),
        eT = (0, s.e7)([g.Z], () => g.Z.hasFetched);
    i.useEffect(() => {
        eT || u.MH();
    }, [eT]);
    let eC = () => {
            if (em)
                return (0, r.jsx)(_.Z, {
                    analyticsLocation: j,
                    guild: x.guild,
                    onClose: W,
                });
            let e = eo ? C.intl.string(C.t.pj0XBN) : void 0;
            if (eb)
                if (null != eg) {
                    var t, n;
                    e = (0, m.Rt)({
                        intervalType: null == eg || null == (t = eg.subscription_trial) ? void 0 : t.interval,
                        intervalCount: null == eg || null == (n = eg.subscription_trial) ? void 0 : n.interval_count,
                    });
                } else null != eE && (e = C.intl.formatToPlainString(C.t.bkQ4bH, { percent: eE.discount.amount }));
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
        eA = et ? o()(A.artContainer, A.artContainerBoxShadow, F) : o()(A.artContainer, F),
        eN = null;
    return (
        null != eh.artURL
            ? (eN = (0, r.jsx)("img", {
                  className: o()(B, A.art),
                  alt: "",
                  src: eh.artURL,
              }))
            : null != eh.artElement && (eN = eh.artElement),
        (0, r.jsxs)(c.Y0X, {
            "data-migration-pending": !0,
            className: o()(A.root, !eb && G),
            "aria-label": w,
            transitionState: Y,
            parentComponent: "PremiumUpsellModal",
            children: [
                null != eN &&
                    (0, r.jsxs)("div", {
                        className: eA,
                        children: [
                            eN,
                            $
                                ? (0, r.jsx)("img", {
                                      className: A.sparkleBadge,
                                      alt: "",
                                      src: N,
                                  })
                                : null,
                        ],
                    }),
                (0, r.jsx)(c.hzk, {
                    "data-migration-pending": !0,
                    scrollbarType: "none",
                    className: o()(eo ? A.enhancedContent : A.content, !eb && Z),
                    children: er
                        ? (0, r.jsx)(c.$jN, {})
                        : eb
                          ? (0, r.jsx)(v.ZP, {
                                onClose: W,
                                type: D,
                                subscriptionTier:
                                    null != (a = null == eg || null == (n = eg.subscription_trial) ? void 0 : n.sku_id)
                                        ? a
                                        : I.Si.TIER_2,
                                headingText: w,
                                context: k,
                                analyticsLocationObject: j,
                                discountOffer: eE,
                                trialOffer: eg,
                                children: U,
                            })
                          : (0, r.jsxs)("div", {
                                className: A.contentContainer,
                                children: [
                                    ed,
                                    (0, r.jsxs)("div", {
                                        className: A.bodyContent,
                                        children: [
                                            (0, r.jsxs)(c.Heading, {
                                                className: o()(A.header, { [A.enhancedHeader]: eo }, V),
                                                variant: "heading-xl/bold",
                                                children: [w, ee ? (0, r.jsx)(p.Z, { className: A.betaTag }) : null],
                                            }),
                                            eI ? (0, r.jsx)(S.Z, { affinities: eS }) : void 0,
                                            eu,
                                            (0, r.jsx)(c.Text, {
                                                variant: ep ? "text-sm/normal" : "text-md/normal",
                                                className: o()(H, A.subHeader),
                                                children: M,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                }),
                (0, r.jsxs)(c.mzw, {
                    "data-migration-pending": !0,
                    className: o()(A.footer, e_, { [A.enhancedFooter]: eo }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: o()(A.primaryActions, { [A.enhancedPrimaryActions]: eo }),
                            children: [
                                null != Q
                                    ? (0, r.jsx)(l.zx, {
                                          "data-migration-pending": !0,
                                          className: o()(A.secondaryAction, X, { [A.enhancedSecondaryAction]: eo }),
                                          onClick: q,
                                          size: l.zx.Sizes.SMALL,
                                          color: eo ? l.zx.Colors.CUSTOM : l.zx.Colors.PRIMARY,
                                          look: l.zx.Looks.LINK,
                                          children: Q,
                                      })
                                    : null,
                                eC(),
                            ],
                        }),
                        !ei &&
                            !eo &&
                            (0, r.jsx)(c.Button, {
                                variant: "secondary",
                                size: "sm",
                                text: null != ea ? ea : C.intl.string(C.t["13/7kX"]),
                                onClick: W,
                            }),
                    ],
                }),
                eo
                    ? (0, r.jsx)(c.olH, {
                          "data-migration-pending": !0,
                          onClick: W,
                          className: A.closeButton,
                      })
                    : null,
                ef,
            ],
        })
    );
}
