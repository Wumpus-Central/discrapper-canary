n.d(t, { Z: () => P });
var r = n(200651),
    i = n(192379),
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
    v = n(302945),
    O = n(631771),
    I = n(474936),
    S = n(981631),
    T = n(388032),
    A = n(127453),
    N = n(769860);
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
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
function P(e) {
    var t,
        n,
        a,
        { title: R, type: P, guildBoostProps: w, analyticsSource: D, analyticsLocation: L, body: x, context: M, glowUp: k, modalClassName: j, modalContentClassName: U, artContainerClassName: G, headerClassName: B, bodyClassName: F, transitionState: V, onClose: Z, onSubscribeClick: H, onSubscribeFinish: Y, onSecondaryClick: W, secondaryCTA: K, subscribeButtonText: z, showNewBadge: q = !1, showBetaBadge: Q = !1, enableArtBoxShadow: X = !0, subscriptionTier: J = I.Si.TIER_2, isLoading: $ = !1, hideBackButton: ee, backButtonText: et, showEnhancedUpsell: en, useSubscribeButtonGradient: er, subscribeButtonClassname: ei, hidePremiumOfferUpsell: ea, children: eo, LeadingComponent: es, backgroundElements: el, smallText: ec = !1, footerClassName: eu } = e,
        ed = C(e, ['title', 'type', 'guildBoostProps', 'analyticsSource', 'analyticsLocation', 'body', 'context', 'glowUp', 'modalClassName', 'modalContentClassName', 'artContainerClassName', 'headerClassName', 'bodyClassName', 'transitionState', 'onClose', 'onSubscribeClick', 'onSubscribeFinish', 'onSecondaryClick', 'secondaryCTA', 'subscribeButtonText', 'showNewBadge', 'showBetaBadge', 'enableArtBoxShadow', 'subscriptionTier', 'isLoading', 'hideBackButton', 'backButtonText', 'showEnhancedUpsell', 'useSubscribeButtonGradient', 'subscribeButtonClassname', 'hidePremiumOfferUpsell', 'children', 'LeadingComponent', 'backgroundElements', 'smallText', 'footerClassName']);
    let ef = null != w,
        e_ = (0, E.N)(),
        ep = (0, g.Ng)(),
        eh = !ea && ((null == e_ || null == (t = e_.subscription_trial) ? void 0 : t.sku_id) === J || (0, g.Wp)(ep, J)) && !ef,
        { analyticsLocations: em } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_MODAL),
        eg = {
            analyticsLocation: L,
            analyticsLocations: em,
            analyticsSource: D,
            guildBoostProps: w,
            type: P
        },
        eE = i.useRef(eg);
    i.useEffect(() => {
        eE.current = eg;
    }),
        i.useEffect(() => {
            if ($) return;
            let { analyticsLocation: e, analyticsLocations: t, analyticsSource: n, guildBoostProps: r, type: i } = eE.current;
            ef
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
                      sku_id: (0, h.Wz)(J)
                  });
        }, [ef, J, $]);
    let eb = (0, s.e7)([m.Z], () => m.Z.affinities),
        ey = eb.length > 1 && (0, O.Y)(P),
        ev = (0, s.e7)([m.Z], () => m.Z.hasFetched);
    i.useEffect(() => {
        ev || c.MH();
    }, [ev]);
    let eO = () => {
            if (ef)
                return (0, r.jsx)(_.Z, {
                    analyticsLocation: L,
                    guild: w.guild,
                    onClose: Z
                });
            let e = en ? T.intl.string(T.t.pj0XBA) : void 0;
            if (eh)
                if (null != e_) {
                    var t, n;
                    e = (0, h.Rt)({
                        intervalType: null == e_ || null == (t = e_.subscription_trial) ? void 0 : t.interval,
                        intervalCount: null == e_ || null == (n = e_.subscription_trial) ? void 0 : n.interval_count
                    });
                } else null != ep && (e = T.intl.formatToPlainString(T.t.bkQ4bG, { percent: ep.discount.amount }));
            return (0, r.jsx)(y.Z, {
                className: ei,
                showGradient: en || er,
                premiumModalAnalyticsLocation: L,
                subscriptionTier: J,
                size: l.zxk.Sizes.SMALL,
                color: en || er ? l.zxk.Colors.CUSTOM : l.zxk.Colors.GREEN,
                onClick: () => {
                    null == H || H(), Z();
                },
                onSubscribeModalClose: Y,
                buttonText: null != z ? z : e
            });
        },
        eI = X ? o()(A.artContainer, A.artContainerBoxShadow, G) : o()(A.artContainer, G),
        eS = null;
    return (
        null != ed.artURL
            ? (eS = (0, r.jsx)('img', {
                  className: A.art,
                  alt: '',
                  src: ed.artURL
              }))
            : null != ed.artElement && (eS = ed.artElement),
        (0, r.jsxs)(l.Y0X, {
            className: o()(A.root, !eh && j),
            'aria-label': R,
            transitionState: V,
            children: [
                null != eS &&
                    (0, r.jsxs)('div', {
                        className: eI,
                        children: [
                            eS,
                            q
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
                    className: o()(en ? A.enhancedContent : A.content, !eh && U),
                    children: $
                        ? (0, r.jsx)(l.$jN, {})
                        : eh
                          ? (0, r.jsx)(b.ZP, {
                                onClose: Z,
                                type: P,
                                subscriptionTier: null != (a = null == e_ || null == (n = e_.subscription_trial) ? void 0 : n.sku_id) ? a : I.Si.TIER_2,
                                headingText: R,
                                context: M,
                                analyticsLocationObject: L,
                                discountOffer: ep,
                                trialOffer: e_,
                                children: k
                            })
                          : (0, r.jsxs)('div', {
                                className: A.contentContainer,
                                children: [
                                    es,
                                    (0, r.jsxs)('div', {
                                        className: A.bodyContent,
                                        children: [
                                            (0, r.jsxs)(l.X6q, {
                                                className: o()(A.header, { [A.enhancedHeader]: en }, B),
                                                variant: 'heading-xl/bold',
                                                children: [R, Q ? (0, r.jsx)(f.Z, { className: A.betaTag }) : null]
                                            }),
                                            ey ? (0, r.jsx)(v.Z, { affinities: eb }) : void 0,
                                            eo,
                                            (0, r.jsx)(l.Text, {
                                                variant: ec ? 'text-sm/normal' : 'text-md/normal',
                                                className: o()(F, A.subHeader),
                                                children: x
                                            })
                                        ]
                                    })
                                ]
                            })
                }),
                (0, r.jsxs)(l.mzw, {
                    className: o()(A.footer, eu, { [A.enhancedFooter]: en }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(A.primaryActions, { [A.enhancedPrimaryActions]: en }),
                            children: [
                                null != K
                                    ? (0, r.jsx)(l.zxk, {
                                          className: o()(A.secondaryAction, { [A.enhancedSecondaryAction]: en }),
                                          onClick: W,
                                          size: l.zxk.Sizes.SMALL,
                                          color: en ? l.zxk.Colors.CUSTOM : l.zxk.Colors.PRIMARY,
                                          look: l.zxk.Looks.LINK,
                                          children: K
                                      })
                                    : null,
                                eO()
                            ]
                        }),
                        !ee &&
                            !en &&
                            (0, r.jsx)(l.zxk, {
                                onClick: Z,
                                size: l.zxk.Sizes.SMALL,
                                color: l.zxk.Colors.PRIMARY,
                                look: l.zxk.Looks.LINK,
                                children: null != et ? et : T.intl.string(T.t['13/7kZ'])
                            })
                    ]
                }),
                en
                    ? (0, r.jsx)(l.olH, {
                          onClick: Z,
                          className: A.closeButton
                      })
                    : null,
                el
            ]
        })
    );
}
