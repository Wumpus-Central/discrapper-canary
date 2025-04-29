n.d(t, { Z: () => P });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function P(e) {
    var t,
        n,
        o,
        { title: R, type: P, guildBoostProps: w, analyticsSource: D, analyticsLocation: L, body: x, context: M, glowUp: k, modalClassName: j, modalContentClassName: U, artContainerClassName: G, headerClassName: B, bodyClassName: V, transitionState: F, onClose: Z, onSubscribeClick: H, onSubscribeFinish: Y, onSecondaryClick: W, secondaryCTA: K, secondaryCTAClassName: z, subscribeButtonText: q, showNewBadge: Q = !1, showBetaBadge: X = !1, enableArtBoxShadow: J = !0, subscriptionTier: $ = I.Si.TIER_2, isLoading: ee = !1, hideBackButton: et, backButtonText: en, showEnhancedUpsell: er, useSubscribeButtonGradient: ei, subscribeButtonClassname: eo, hidePremiumOfferUpsell: ea, children: es, LeadingComponent: el, backgroundElements: ec, smallText: eu = !1, footerClassName: ed } = e,
        ef = C(e, ['title', 'type', 'guildBoostProps', 'analyticsSource', 'analyticsLocation', 'body', 'context', 'glowUp', 'modalClassName', 'modalContentClassName', 'artContainerClassName', 'headerClassName', 'bodyClassName', 'transitionState', 'onClose', 'onSubscribeClick', 'onSubscribeFinish', 'onSecondaryClick', 'secondaryCTA', 'secondaryCTAClassName', 'subscribeButtonText', 'showNewBadge', 'showBetaBadge', 'enableArtBoxShadow', 'subscriptionTier', 'isLoading', 'hideBackButton', 'backButtonText', 'showEnhancedUpsell', 'useSubscribeButtonGradient', 'subscribeButtonClassname', 'hidePremiumOfferUpsell', 'children', 'LeadingComponent', 'backgroundElements', 'smallText', 'footerClassName']);
    let e_ = null != w,
        ep = (0, E.N)(),
        eh = (0, g.Ng)(),
        em = !ea && ((null == ep || null == (t = ep.subscription_trial) ? void 0 : t.sku_id) === $ || (0, g.Wp)(eh, $)) && !e_,
        { analyticsLocations: eg } = (0, d.ZP)(u.Z.PREMIUM_UPSELL_MODAL),
        eE = {
            analyticsLocation: L,
            analyticsLocations: eg,
            analyticsSource: D,
            guildBoostProps: w,
            type: P
        },
        eb = i.useRef(eE);
    i.useEffect(() => {
        eb.current = eE;
    }),
        i.useEffect(() => {
            if (ee) return;
            let { analyticsLocation: e, analyticsLocations: t, analyticsSource: n, guildBoostProps: r, type: i } = eb.current;
            e_
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
                      sku_id: (0, h.Wz)($)
                  });
        }, [e_, $, ee]);
    let ey = (0, s.e7)([m.Z], () => m.Z.affinities),
        eO = ey.length > 1 && (0, v.Y)(P),
        ev = (0, s.e7)([m.Z], () => m.Z.hasFetched);
    i.useEffect(() => {
        ev || c.MH();
    }, [ev]);
    let eI = () => {
            if (e_)
                return (0, r.jsx)(_.Z, {
                    analyticsLocation: L,
                    guild: w.guild,
                    onClose: Z
                });
            let e = er ? T.intl.string(T.t.pj0XBA) : void 0;
            if (em)
                if (null != ep) {
                    var t, n;
                    e = (0, h.Rt)({
                        intervalType: null == ep || null == (t = ep.subscription_trial) ? void 0 : t.interval,
                        intervalCount: null == ep || null == (n = ep.subscription_trial) ? void 0 : n.interval_count
                    });
                } else null != eh && (e = T.intl.formatToPlainString(T.t.bkQ4bG, { percent: eh.discount.amount }));
            return (0, r.jsx)(y.Z, {
                className: eo,
                showGradient: er || ei,
                premiumModalAnalyticsLocation: L,
                subscriptionTier: $,
                size: l.zxk.Sizes.SMALL,
                color: er || ei ? l.zxk.Colors.CUSTOM : l.zxk.Colors.GREEN,
                onClick: () => {
                    null == H || H(), Z();
                },
                onSubscribeModalClose: Y,
                buttonText: null != q ? q : e
            });
        },
        eS = J ? a()(A.artContainer, A.artContainerBoxShadow, G) : a()(A.artContainer, G),
        eT = null;
    return (
        null != ef.artURL
            ? (eT = (0, r.jsx)('img', {
                  className: A.art,
                  alt: '',
                  src: ef.artURL
              }))
            : null != ef.artElement && (eT = ef.artElement),
        (0, r.jsxs)(l.Y0X, {
            className: a()(A.root, !em && j),
            'aria-label': R,
            transitionState: F,
            children: [
                null != eT &&
                    (0, r.jsxs)('div', {
                        className: eS,
                        children: [
                            eT,
                            Q
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
                    className: a()(er ? A.enhancedContent : A.content, !em && U),
                    children: ee
                        ? (0, r.jsx)(l.$jN, {})
                        : em
                          ? (0, r.jsx)(b.ZP, {
                                onClose: Z,
                                type: P,
                                subscriptionTier: null != (o = null == ep || null == (n = ep.subscription_trial) ? void 0 : n.sku_id) ? o : I.Si.TIER_2,
                                headingText: R,
                                context: M,
                                analyticsLocationObject: L,
                                discountOffer: eh,
                                trialOffer: ep,
                                children: k
                            })
                          : (0, r.jsxs)('div', {
                                className: A.contentContainer,
                                children: [
                                    el,
                                    (0, r.jsxs)('div', {
                                        className: A.bodyContent,
                                        children: [
                                            (0, r.jsxs)(l.X6q, {
                                                className: a()(A.header, { [A.enhancedHeader]: er }, B),
                                                variant: 'heading-xl/bold',
                                                children: [R, X ? (0, r.jsx)(f.Z, { className: A.betaTag }) : null]
                                            }),
                                            eO ? (0, r.jsx)(O.Z, { affinities: ey }) : void 0,
                                            es,
                                            (0, r.jsx)(l.Text, {
                                                variant: eu ? 'text-sm/normal' : 'text-md/normal',
                                                className: a()(V, A.subHeader),
                                                children: x
                                            })
                                        ]
                                    })
                                ]
                            })
                }),
                (0, r.jsxs)(l.mzw, {
                    className: a()(A.footer, ed, { [A.enhancedFooter]: er }),
                    children: [
                        (0, r.jsxs)('div', {
                            className: a()(A.primaryActions, { [A.enhancedPrimaryActions]: er }),
                            children: [
                                null != K
                                    ? (0, r.jsx)(l.zxk, {
                                          className: a()(A.secondaryAction, z, { [A.enhancedSecondaryAction]: er }),
                                          onClick: W,
                                          size: l.zxk.Sizes.SMALL,
                                          color: er ? l.zxk.Colors.CUSTOM : l.zxk.Colors.PRIMARY,
                                          look: l.zxk.Looks.LINK,
                                          children: K
                                      })
                                    : null,
                                eI()
                            ]
                        }),
                        !et &&
                            !er &&
                            (0, r.jsx)(l.zxk, {
                                onClick: Z,
                                size: l.zxk.Sizes.SMALL,
                                color: l.zxk.Colors.PRIMARY,
                                look: l.zxk.Looks.LINK,
                                children: null != en ? en : T.intl.string(T.t['13/7kZ'])
                            })
                    ]
                }),
                er
                    ? (0, r.jsx)(l.olH, {
                          onClick: Z,
                          className: A.closeButton
                      })
                    : null,
                ec
            ]
        })
    );
}
