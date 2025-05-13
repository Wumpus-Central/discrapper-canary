n.d(t, { Z: () => R });
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
    b = n(165583),
    y = n(197115),
    O = n(302945),
    v = n(631771),
    I = n(474936),
    S = n(981631),
    T = n(388032),
    A = n(127453),
    N = n(769860);
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
function R(e) {
    var t,
        n,
        a,
        { title: P, type: R, guildBoostProps: w, analyticsSource: D, analyticsLocation: L, body: x, context: k, glowUp: M, modalClassName: j, modalContentClassName: U, artContainerClassName: G, artClassName: B, headerClassName: F, bodyClassName: V, transitionState: Z, onClose: H, onSubscribeClick: Y, onSubscribeFinish: W, onSecondaryClick: K, secondaryCTA: z, secondaryCTAClassName: q, subscribeButtonText: Q, showNewBadge: X = !1, showBetaBadge: J = !1, enableArtBoxShadow: $ = !0, subscriptionTier: ee = I.Si.TIER_2, isLoading: et = !1, hideBackButton: en, backButtonText: er, showEnhancedUpsell: ei, useSubscribeButtonGradient: ea, subscribeButtonClassname: eo, hidePremiumOfferUpsell: es, children: el, LeadingComponent: ec, backgroundElements: eu, smallText: ed = !1, footerClassName: ef } = e,
        e_ = C(e, ['title', 'type', 'guildBoostProps', 'analyticsSource', 'analyticsLocation', 'body', 'context', 'glowUp', 'modalClassName', 'modalContentClassName', 'artContainerClassName', 'artClassName', 'headerClassName', 'bodyClassName', 'transitionState', 'onClose', 'onSubscribeClick', 'onSubscribeFinish', 'onSecondaryClick', 'secondaryCTA', 'secondaryCTAClassName', 'subscribeButtonText', 'showNewBadge', 'showBetaBadge', 'enableArtBoxShadow', 'subscriptionTier', 'isLoading', 'hideBackButton', 'backButtonText', 'showEnhancedUpsell', 'useSubscribeButtonGradient', 'subscribeButtonClassname', 'hidePremiumOfferUpsell', 'children', 'LeadingComponent', 'backgroundElements', 'smallText', 'footerClassName']);
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
            type: R
        },
        ey = i.useRef(eb);
    i.useEffect(() => {
        ey.current = eb;
    }),
        i.useEffect(() => {
            if (et) return;
            let { analyticsLocation: e, analyticsLocations: t, analyticsSource: n, guildBoostProps: r, type: i } = ey.current;
            ep
                ? p.default.track(S.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(i, ' - Tier ').concat(null == r ? void 0 : r.boostedGuildTier),
                      guild_id: null == r ? void 0 : r.guild.id,
                      channel_id: null == r ? void 0 : r.channelId,
                      location: e,
                      location_stack: t
                  })
                : p.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, h.Wz)(ee)
                  });
        }, [ep, ee, et]);
    let eO = (0, s.e7)([m.Z], () => m.Z.affinities),
        ev = eO.length > 1 && (0, v.Y)(R),
        eI = (0, s.e7)([m.Z], () => m.Z.hasFetched);
    i.useEffect(() => {
        eI || c.MH();
    }, [eI]);
    let eS = () => {
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
            return (0, r.jsx)(y.Z, {
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
                textOptions: { textOverride: null != Q ? Q : e }
            });
        },
        eT = $ ? o()(A.artContainer, A.artContainerBoxShadow, G) : o()(A.artContainer, G),
        eA = null;
    return (
        null != e_.artURL
            ? (eA = (0, r.jsx)('img', {
                  className: o()(B, A.art),
                  alt: '',
                  src: e_.artURL
              }))
            : null != e_.artElement && (eA = e_.artElement),
        (0, r.jsxs)(l.Y0X, {
            className: o()(A.root, !eg && j),
            'aria-label': P,
            transitionState: Z,
            children: [
                null != eA &&
                    (0, r.jsxs)('div', {
                        className: eT,
                        children: [
                            eA,
                            X
                                ? (0, r.jsx)('img', {
                                      className: A.sparkleBadge,
                                      alt: '',
                                      src: N
                                  })
                                : null
                        ]
                    }),
                (0, r.jsx)(l.hzk, {
                    scrollbarType: 'none',
                    className: o()(ei ? A.enhancedContent : A.content, !eg && U),
                    children: et
                        ? (0, r.jsx)(l.$jN, {})
                        : eg
                          ? (0, r.jsx)(b.ZP, {
                                onClose: H,
                                type: R,
                                subscriptionTier: null != (a = null == eh || null == (n = eh.subscription_trial) ? void 0 : n.sku_id) ? a : I.Si.TIER_2,
                                headingText: P,
                                context: k,
                                analyticsLocationObject: L,
                                discountOffer: em,
                                trialOffer: eh,
                                children: M
                            })
                          : (0, r.jsxs)('div', {
                                className: A.contentContainer,
                                children: [
                                    ec,
                                    (0, r.jsxs)('div', {
                                        className: A.bodyContent,
                                        children: [
                                            (0, r.jsxs)(l.X6q, {
                                                className: o()(A.header, { [A.enhancedHeader]: ei }, F),
                                                variant: 'heading-xl/bold',
                                                children: [P, J ? (0, r.jsx)(f.Z, { className: A.betaTag }) : null]
                                            }),
                                            ev ? (0, r.jsx)(O.Z, { affinities: eO }) : void 0,
                                            el,
                                            (0, r.jsx)(l.Text, {
                                                variant: ed ? 'text-sm/normal' : 'text-md/normal',
                                                className: o()(V, A.subHeader),
                                                children: x
                                            })
                                        ]
                                    })
                                ]
                            })
                }),
                (0, r.jsxs)(l.mzw, {
                    className: o()(A.footer, ef, { [A.enhancedFooter]: ei }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(A.primaryActions, { [A.enhancedPrimaryActions]: ei }),
                            children: [
                                null != z
                                    ? (0, r.jsx)(l.zxk, {
                                          className: o()(A.secondaryAction, q, { [A.enhancedSecondaryAction]: ei }),
                                          onClick: K,
                                          size: l.zxk.Sizes.SMALL,
                                          color: ei ? l.zxk.Colors.CUSTOM : l.zxk.Colors.PRIMARY,
                                          look: l.zxk.Looks.LINK,
                                          children: z
                                      })
                                    : null,
                                eS()
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
                          className: A.closeButton
                      })
                    : null,
                eu
            ]
        })
    );
}
