n.d(t, { Z: () => R });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(355467),
    u = n(100527),
    d = n(906732),
    f = n(678558),
    _ = n(626135),
    p = n(74538),
    h = n(357355),
    g = n(104494),
    m = n(639119),
    E = n(165583),
    v = n(197115),
    b = n(302945),
    y = n(631771),
    O = n(474936),
    S = n(981631),
    I = n(388032),
    T = n(988600),
    N = n(769860);
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function R(e) {
    var t,
        n,
        o,
        { title: C, type: R, guildBoostProps: P, analyticsSource: D, analyticsLocation: w, body: L, context: x, glowUp: M, modalClassName: k, modalContentClassName: j, artContainerClassName: U, headerClassName: G, bodyClassName: B, transitionState: V, onClose: F, onSubscribeClick: Z, onSubscribeFinish: H, onSecondaryClick: W, secondaryCTA: Y, subscribeButtonText: K, showNewBadge: z = !1, enableArtBoxShadow: q = !0, subscriptionTier: Q = O.Si.TIER_2, isLoading: X = !1, hideBackButton: J, backButtonText: $, showEnhancedUpsell: ee, useSubscribeButtonGradient: et, subscribeButtonClassname: en, hidePremiumOfferUpsell: er, children: ei, LeadingComponent: eo, backgroundElements: ea, smallText: es = !1, footerClassName: el } = e,
        ec = A(e, ['title', 'type', 'guildBoostProps', 'analyticsSource', 'analyticsLocation', 'body', 'context', 'glowUp', 'modalClassName', 'modalContentClassName', 'artContainerClassName', 'headerClassName', 'bodyClassName', 'transitionState', 'onClose', 'onSubscribeClick', 'onSubscribeFinish', 'onSecondaryClick', 'secondaryCTA', 'subscribeButtonText', 'showNewBadge', 'enableArtBoxShadow', 'subscriptionTier', 'isLoading', 'hideBackButton', 'backButtonText', 'showEnhancedUpsell', 'useSubscribeButtonGradient', 'subscribeButtonClassname', 'hidePremiumOfferUpsell', 'children', 'LeadingComponent', 'backgroundElements', 'smallText', 'footerClassName']);
    let eu = null != P,
        ed = (0, m.N)(),
        ef = (0, g.Ng)(),
        e_ = !er && ((null == ed ? void 0 : null === (t = ed.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === Q || (0, g.Wp)(ef, Q)) && !eu,
        { analyticsLocations: ep } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_MODAL),
        eh = {
            analyticsLocation: w,
            analyticsLocations: ep,
            analyticsSource: D,
            guildBoostProps: P,
            type: R
        },
        eg = i.useRef(eh);
    i.useEffect(() => {
        eg.current = eh;
    }),
        i.useEffect(() => {
            if (X) return;
            let { analyticsLocation: e, analyticsLocations: t, analyticsSource: n, guildBoostProps: r, type: i } = eg.current;
            eu
                ? _.default.track(S.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(i, ' - Tier ').concat(null == r ? void 0 : r.boostedGuildTier),
                      guild_id: null == r ? void 0 : r.guild.id,
                      channel_id: null == r ? void 0 : r.channelId,
                      location: e,
                      location_stack: t
                  })
                : _.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: i,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, p.Wz)(Q)
                  });
        }, [eu, Q, X]);
    let em = (0, s.e7)([h.Z], () => h.Z.affinities),
        eE = em.length > 1 && (0, y.Y)(R),
        ev = (0, s.e7)([h.Z], () => h.Z.hasFetched);
    i.useEffect(() => {
        ev || c.MH();
    }, [ev]);
    let eb = () => {
            if (eu)
                return (0, r.jsx)(f.Z, {
                    analyticsLocation: w,
                    guild: P.guild,
                    onClose: F
                });
            let e = ee ? I.NW.string(I.t.pj0XBA) : void 0;
            if (e_) {
                if (null != ed) {
                    var t, n;
                    e = (0, p.Rt)({
                        intervalType: null == ed ? void 0 : null === (t = ed.subscription_trial) || void 0 === t ? void 0 : t.interval,
                        intervalCount: null == ed ? void 0 : null === (n = ed.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                    });
                } else null != ef && (e = I.NW.formatToPlainString(I.t.bkQ4bG, { percent: ef.discount.amount }));
            }
            return (0, r.jsx)(v.Z, {
                className: en,
                showGradient: ee || et,
                premiumModalAnalyticsLocation: w,
                subscriptionTier: Q,
                size: l.zxk.Sizes.SMALL,
                color: ee || et ? l.zxk.Colors.CUSTOM : l.zxk.Colors.GREEN,
                onClick: () => {
                    null == Z || Z(), F();
                },
                onSubscribeModalClose: H,
                buttonText: null != K ? K : e
            });
        },
        ey = q ? a()(T.artContainer, T.artContainerBoxShadow, U) : a()(T.artContainer, U),
        eO = null;
    return (
        null != ec.artURL
            ? (eO = (0, r.jsx)('img', {
                  className: T.art,
                  alt: '',
                  src: ec.artURL
              }))
            : null != ec.artElement && (eO = ec.artElement),
        (0, r.jsxs)(l.Y0X, {
            className: a()(T.root, !e_ && k),
            'aria-label': C,
            transitionState: V,
            children: [
                null != eO &&
                    (0, r.jsxs)('div', {
                        className: ey,
                        children: [
                            eO,
                            z
                                ? (0, r.jsx)('img', {
                                      className: T.sparkleBadge,
                                      alt: '',
                                      src: N
                                  })
                                : null
                        ]
                    }),
                (0, r.jsx)(l.hzk, {
                    scrollbarType: 'none',
                    className: a()(ee ? T.enhancedContent : T.content, !e_ && j),
                    children: X
                        ? (0, r.jsx)(l.$jN, {})
                        : e_
                          ? (0, r.jsx)(E.ZP, {
                                onClose: F,
                                type: R,
                                subscriptionTier: null !== (o = null == ed ? void 0 : null === (n = ed.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== o ? o : O.Si.TIER_2,
                                headingText: C,
                                context: x,
                                analyticsLocationObject: w,
                                discountOffer: ef,
                                trialOffer: ed,
                                children: M
                            })
                          : (0, r.jsxs)('div', {
                                className: T.contentContainer,
                                children: [
                                    eo,
                                    (0, r.jsxs)('div', {
                                        className: T.bodyContent,
                                        children: [
                                            (0, r.jsx)(l.X6q, {
                                                className: a()(T.header, { [T.enhancedHeader]: ee }, G),
                                                variant: 'heading-xl/bold',
                                                children: C
                                            }),
                                            eE ? (0, r.jsx)(b.Z, { affinities: em }) : void 0,
                                            ei,
                                            (0, r.jsx)(l.Text, {
                                                variant: es ? 'text-sm/normal' : 'text-md/normal',
                                                className: a()(B, T.subHeader),
                                                children: L
                                            })
                                        ]
                                    })
                                ]
                            })
                }),
                (0, r.jsxs)(l.mzw, {
                    className: a()(T.footer, el, { [T.enhancedFooter]: ee }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(T.primaryActions, { [T.enhancedPrimaryActions]: ee }),
                            children: [
                                null != Y
                                    ? (0, r.jsx)(l.zxk, {
                                          className: a()(T.secondaryAction, { [T.enhancedSecondaryAction]: ee }),
                                          onClick: W,
                                          size: l.zxk.Sizes.SMALL,
                                          color: ee ? l.zxk.Colors.CUSTOM : l.zxk.Colors.PRIMARY,
                                          look: l.zxk.Looks.LINK,
                                          children: Y
                                      })
                                    : null,
                                eb()
                            ]
                        }),
                        !J &&
                            !ee &&
                            (0, r.jsx)(l.zxk, {
                                onClick: F,
                                size: l.zxk.Sizes.SMALL,
                                color: l.zxk.Colors.PRIMARY,
                                look: l.zxk.Looks.LINK,
                                children: null != $ ? $ : I.NW.string(I.t['13/7kZ'])
                            })
                    ]
                }),
                ee
                    ? (0, r.jsx)(l.olH, {
                          onClick: F,
                          className: T.closeButton
                      })
                    : null,
                ea
            ]
        })
    );
}
