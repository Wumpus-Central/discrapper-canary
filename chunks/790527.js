n.d(t, { Z: () => P });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(355467),
    u = n(100527),
    d = n(906732),
    f = n(688465),
    _ = n(678558),
    p = n(626135),
    h = n(74538),
    m = n(357355),
    g = n(104494),
    E = n(639119),
    b = n(767714),
    y = n(165583),
    O = n(302945),
    v = n(474936),
    I = n(981631),
    T = n(388032),
    S = n(127453),
    A = n(769860);
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
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
        case v.cd.ANIMATED_AVATAR_MODAL_UPSELL:
        case v.cd.ANIMATED_BANNER_MODAL_UPSELL:
        case v.cd.PROFILE_EFFECT_MODAL_UPSELL:
        case v.cd.AVATAR_DECORATION_MODAL_UPSELL:
        case v.cd.FOR_LATER_MODAL_UPSELL:
        case v.cd.VOICE_FILTERS_UPSELL:
        case v.cd.RECENT_AVATARS_ROADBLOCK_UPSELL:
            return !0;
        default:
            return !1;
    }
}
function P(e) {
    var t,
        n,
        a,
        { title: C, type: P, guildBoostProps: w, analyticsSource: D, analyticsLocation: L, body: x, context: k, glowUp: M, modalClassName: j, modalContentClassName: U, artContainerClassName: G, artClassName: B, headerClassName: F, bodyClassName: V, transitionState: Z, onClose: H, onSubscribeClick: Y, onSubscribeFinish: W, onSecondaryClick: K, secondaryCTA: z, secondaryCTAClassName: q, subscribeButtonText: X, showNewBadge: Q = !1, showBetaBadge: J = !1, enableArtBoxShadow: $ = !0, subscriptionTier: ee = v.Si.TIER_2, isLoading: et = !1, hideBackButton: en, backButtonText: er, showEnhancedUpsell: ei, useSubscribeButtonGradient: ea, subscribeButtonClassname: eo, hidePremiumOfferUpsell: es, children: el, LeadingComponent: ec, backgroundElements: eu, smallText: ed = !1, footerClassName: ef } = e,
        e_ = N(e, ['title', 'type', 'guildBoostProps', 'analyticsSource', 'analyticsLocation', 'body', 'context', 'glowUp', 'modalClassName', 'modalContentClassName', 'artContainerClassName', 'artClassName', 'headerClassName', 'bodyClassName', 'transitionState', 'onClose', 'onSubscribeClick', 'onSubscribeFinish', 'onSecondaryClick', 'secondaryCTA', 'secondaryCTAClassName', 'subscribeButtonText', 'showNewBadge', 'showBetaBadge', 'enableArtBoxShadow', 'subscriptionTier', 'isLoading', 'hideBackButton', 'backButtonText', 'showEnhancedUpsell', 'useSubscribeButtonGradient', 'subscribeButtonClassname', 'hidePremiumOfferUpsell', 'children', 'LeadingComponent', 'backgroundElements', 'smallText', 'footerClassName']);
    let ep = null != w,
        eh = (0, E.N)(),
        em = (0, g.Ng)(),
        eg = !es && ((null == eh || null == (t = eh.subscription_trial) ? void 0 : t.sku_id) === ee || (0, g.Wp)(em, ee)) && !ep,
        { analyticsLocations: eE } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_MODAL),
        eb = {
            analyticsLocation: L,
            analyticsLocations: eE,
            analyticsSource: D,
            guildBoostProps: w,
            type: P
        },
        ey = i.useRef(eb);
    i.useEffect(() => {
        ey.current = eb;
    }),
        i.useEffect(() => {
            if (et) return;
            let { analyticsLocation: e, analyticsLocations: t, analyticsSource: n, guildBoostProps: r, type: i } = ey.current;
            ep
                ? p.default.track(I.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(i, ' - Tier ').concat(null == r ? void 0 : r.boostedGuildTier),
                      guild_id: null == r ? void 0 : r.guild.id,
                      channel_id: null == r ? void 0 : r.channelId,
                      location: e,
                      location_stack: t
                  })
                : p.default.track(I.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, h.Wz)(ee)
                  });
        }, [ep, ee, et]);
    let eO = (0, s.e7)([m.Z], () => m.Z.affinities),
        ev = eO.length > 1 && R(P),
        eI = (0, s.e7)([m.Z], () => m.Z.hasFetched);
    i.useEffect(() => {
        eI || c.MH();
    }, [eI]);
    let eT = () => {
            if (ep)
                return (0, r.jsx)(_.Z, {
                    analyticsLocation: L,
                    guild: w.guild,
                    onClose: H
                });
            let e = ei ? T.intl.string(T.t.pj0XBA) : void 0;
            if (eg)
                if (null != eh) {
                    var t, n;
                    e = (0, h.Rt)({
                        intervalType: null == eh || null == (t = eh.subscription_trial) ? void 0 : t.interval,
                        intervalCount: null == eh || null == (n = eh.subscription_trial) ? void 0 : n.interval_count
                    });
                } else null != em && (e = T.intl.formatToPlainString(T.t.bkQ4bG, { percent: em.discount.amount }));
            return (0, r.jsx)(b.Z, {
                className: eo,
                showGradient: ei || ea,
                premiumModalAnalyticsLocation: L,
                subscriptionTier: ee,
                size: l.zxk.Sizes.SMALL,
                color: ei || ea ? l.zxk.Colors.CUSTOM : l.zxk.Colors.GREEN,
                onClick: () => {
                    null == Y || Y(), H();
                },
                onSubscribeModalClose: W,
                textOptions: { textOverride: null != X ? X : e }
            });
        },
        eS = $ ? o()(S.artContainer, S.artContainerBoxShadow, G) : o()(S.artContainer, G),
        eA = null;
    return (
        null != e_.artURL
            ? (eA = (0, r.jsx)('img', {
                  className: o()(B, S.art),
                  alt: '',
                  src: e_.artURL
              }))
            : null != e_.artElement && (eA = e_.artElement),
        (0, r.jsxs)(l.Y0X, {
            className: o()(S.root, !eg && j),
            'aria-label': C,
            transitionState: Z,
            parentComponent: 'PremiumUpsellModal',
            children: [
                null != eA &&
                    (0, r.jsxs)('div', {
                        className: eS,
                        children: [
                            eA,
                            Q
                                ? (0, r.jsx)('img', {
                                      className: S.sparkleBadge,
                                      alt: '',
                                      src: A
                                  })
                                : null
                        ]
                    }),
                (0, r.jsx)(l.hzk, {
                    scrollbarType: 'none',
                    className: o()(ei ? S.enhancedContent : S.content, !eg && U),
                    children: et
                        ? (0, r.jsx)(l.$jN, {})
                        : eg
                          ? (0, r.jsx)(y.ZP, {
                                onClose: H,
                                type: P,
                                subscriptionTier: null != (a = null == eh || null == (n = eh.subscription_trial) ? void 0 : n.sku_id) ? a : v.Si.TIER_2,
                                headingText: C,
                                context: k,
                                analyticsLocationObject: L,
                                discountOffer: em,
                                trialOffer: eh,
                                children: M
                            })
                          : (0, r.jsxs)('div', {
                                className: S.contentContainer,
                                children: [
                                    ec,
                                    (0, r.jsxs)('div', {
                                        className: S.bodyContent,
                                        children: [
                                            (0, r.jsxs)(l.X6q, {
                                                className: o()(S.header, { [S.enhancedHeader]: ei }, F),
                                                variant: 'heading-xl/bold',
                                                children: [C, J ? (0, r.jsx)(f.Z, { className: S.betaTag }) : null]
                                            }),
                                            ev ? (0, r.jsx)(O.Z, { affinities: eO }) : void 0,
                                            el,
                                            (0, r.jsx)(l.Text, {
                                                variant: ed ? 'text-sm/normal' : 'text-md/normal',
                                                className: o()(V, S.subHeader),
                                                children: x
                                            })
                                        ]
                                    })
                                ]
                            })
                }),
                (0, r.jsxs)(l.mzw, {
                    className: o()(S.footer, ef, { [S.enhancedFooter]: ei }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(S.primaryActions, { [S.enhancedPrimaryActions]: ei }),
                            children: [
                                null != z
                                    ? (0, r.jsx)(l.zxk, {
                                          className: o()(S.secondaryAction, q, { [S.enhancedSecondaryAction]: ei }),
                                          onClick: K,
                                          size: l.zxk.Sizes.SMALL,
                                          color: ei ? l.zxk.Colors.CUSTOM : l.zxk.Colors.PRIMARY,
                                          look: l.zxk.Looks.LINK,
                                          children: z
                                      })
                                    : null,
                                eT()
                            ]
                        }),
                        !en &&
                            !ei &&
                            (0, r.jsx)(l.zxk, {
                                onClick: H,
                                size: l.zxk.Sizes.SMALL,
                                color: l.zxk.Colors.PRIMARY,
                                look: l.zxk.Looks.LINK,
                                children: null != er ? er : T.intl.string(T.t['13/7kZ'])
                            })
                    ]
                }),
                ei
                    ? (0, r.jsx)(l.olH, {
                          onClick: H,
                          className: S.closeButton
                      })
                    : null,
                eu
            ]
        })
    );
}
