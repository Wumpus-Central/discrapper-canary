n.d(t, { Z: () => C });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(481060),
    u = n(355467),
    c = n(100527),
    d = n(906732),
    f = n(678558),
    _ = n(626135),
    p = n(74538),
    h = n(357355),
    m = n(104494),
    g = n(639119),
    E = n(165583),
    v = n(197115),
    y = n(302945),
    I = n(631771),
    T = n(474936),
    b = n(981631),
    S = n(388032),
    A = n(619346),
    N = n(769860);
function C(e) {
    var t, n, a;
    let { title: C, type: R, guildBoostProps: O, analyticsSource: D, analyticsLocation: L, body: x, context: P, glowUp: w, modalClassName: M, modalContentClassName: k, artContainerClassName: U, headerClassName: G, bodyClassName: B, transitionState: Z, onClose: F, onSubscribeClick: V, onSubscribeFinish: j, onSecondaryClick: H, secondaryCTA: Y, subscribeButtonText: W, showNewBadge: K = !1, enableArtBoxShadow: z = !0, subscriptionTier: q = T.Si.TIER_2, isLoading: Q = !1, hideBackButton: X, backButtonText: J, showEnhancedUpsell: $, useSubscribeButtonGradient: ee, subscribeButtonClassname: et, hidePremiumOfferUpsell: en, children: ei, LeadingComponent: er, ...ea } = e,
        es = null != O,
        eo = (0, g.N)(),
        el = (0, m.Ng)(),
        eu = !en && ((null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === q || (0, m.Wp)(el, q)) && !es,
        { analyticsLocations: ec } = (0, d.ZP)(c.Z.PREMIUM_UPSELL_MODAL),
        ed = {
            analyticsLocation: L,
            analyticsLocations: ec,
            analyticsSource: D,
            guildBoostProps: O,
            type: R
        },
        ef = r.useRef(ed);
    r.useEffect(() => {
        ef.current = ed;
    }),
        r.useEffect(() => {
            if (Q) return;
            let { analyticsLocation: e, analyticsLocations: t, analyticsSource: n, guildBoostProps: i, type: r } = ef.current;
            es
                ? _.default.track(b.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(r, ' - Tier ').concat(null == i ? void 0 : i.boostedGuildTier),
                      guild_id: null == i ? void 0 : i.guild.id,
                      channel_id: null == i ? void 0 : i.channelId,
                      location: e,
                      location_stack: t
                  })
                : _.default.track(b.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: r,
                      source: n,
                      location: e,
                      location_stack: t,
                      sku_id: (0, p.Wz)(q)
                  });
        }, [es, q, Q]);
    let e_ = (0, o.e7)([h.Z], () => h.Z.affinities),
        ep = e_.length > 1 && (0, I.Y)(R),
        eh = (0, o.e7)([h.Z], () => h.Z.hasFetched);
    r.useEffect(() => {
        eh || u.MH();
    }, [eh]);
    let em = () => {
            if (es)
                return (0, i.jsx)(f.Z, {
                    analyticsLocation: L,
                    guild: O.guild,
                    onClose: F
                });
            let e = $ ? S.intl.string(S.t.pj0XBA) : void 0;
            if (eu) {
                if (null != eo) {
                    var t, n;
                    e = (0, p.Rt)({
                        intervalType: null == eo ? void 0 : null === (t = eo.subscription_trial) || void 0 === t ? void 0 : t.interval,
                        intervalCount: null == eo ? void 0 : null === (n = eo.subscription_trial) || void 0 === n ? void 0 : n.interval_count
                    });
                } else null != el && (e = S.intl.formatToPlainString(S.t.bkQ4bG, { percent: el.discount.amount }));
            }
            return (0, i.jsx)(v.Z, {
                className: et,
                showGradient: $ || ee,
                premiumModalAnalyticsLocation: L,
                subscriptionTier: q,
                size: l.zxk.Sizes.SMALL,
                color: $ || ee ? l.zxk.Colors.CUSTOM : l.zxk.Colors.GREEN,
                onClick: () => {
                    null == V || V(), F();
                },
                onSubscribeModalClose: j,
                buttonText: null != W ? W : e
            });
        },
        eg = z ? s()(A.artContainer, A.artContainerBoxShadow, U) : s()(A.artContainer, U),
        eE = null;
    return (
        null != ea.artURL
            ? (eE = (0, i.jsx)('img', {
                  className: A.art,
                  alt: '',
                  src: ea.artURL
              }))
            : null != ea.artElement && (eE = ea.artElement),
        (0, i.jsxs)(l.Y0X, {
            className: s()(A.root, !eu && M),
            'aria-label': C,
            transitionState: Z,
            children: [
                null != eE &&
                    (0, i.jsxs)('div', {
                        className: eg,
                        children: [
                            eE,
                            K
                                ? (0, i.jsx)('img', {
                                      className: A.sparkleBadge,
                                      alt: '',
                                      src: N
                                  })
                                : null
                        ]
                    }),
                (0, i.jsx)(l.hzk, {
                    scrollbarType: 'none',
                    className: s()($ ? A.enhancedContent : A.content, !eu && k),
                    children: Q
                        ? (0, i.jsx)(l.$jN, {})
                        : (0, i.jsx)(i.Fragment, {
                              children: eu
                                  ? (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsx)(E.ZP, {
                                            onClose: F,
                                            type: R,
                                            subscriptionTier: null !== (a = null == eo ? void 0 : null === (n = eo.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : T.Si.TIER_2,
                                            headingText: C,
                                            context: P,
                                            analyticsLocationObject: L,
                                            discountOffer: el,
                                            trialOffer: eo,
                                            children: w
                                        })
                                    })
                                  : (0, i.jsxs)('div', {
                                        className: A.contentContainer,
                                        children: [
                                            er,
                                            (0, i.jsxs)('div', {
                                                className: A.bodyContent,
                                                children: [
                                                    (0, i.jsx)(l.X6q, {
                                                        className: s()(A.header, { [A.enhancedHeader]: $ }, G),
                                                        variant: 'heading-xl/bold',
                                                        children: C
                                                    }),
                                                    ep ? (0, i.jsx)(y.Z, { affinities: e_ }) : void 0,
                                                    ei,
                                                    (0, i.jsx)(l.Text, {
                                                        variant: 'text-md/normal',
                                                        className: s()(B, A.subHeader),
                                                        children: x
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                          })
                }),
                (0, i.jsxs)(l.mzw, {
                    className: s()(A.footer, { [A.enhancedFooter]: $ }),
                    children: [
                        (0, i.jsxs)('div', {
                            className: s()(A.primaryActions, { [A.enhancedPrimaryActions]: $ }),
                            children: [
                                null != Y
                                    ? (0, i.jsx)(l.zxk, {
                                          className: s()(A.secondaryAction, { [A.enhancedSecondaryAction]: $ }),
                                          onClick: H,
                                          size: l.zxk.Sizes.SMALL,
                                          color: $ ? l.zxk.Colors.CUSTOM : l.zxk.Colors.PRIMARY,
                                          look: l.zxk.Looks.LINK,
                                          children: Y
                                      })
                                    : null,
                                em()
                            ]
                        }),
                        !X &&
                            !$ &&
                            (0, i.jsx)(l.zxk, {
                                onClick: F,
                                size: l.zxk.Sizes.SMALL,
                                color: l.zxk.Colors.PRIMARY,
                                look: l.zxk.Looks.LINK,
                                children: null != J ? J : S.intl.string(S.t['13/7kZ'])
                            })
                    ]
                }),
                $
                    ? (0, i.jsx)(l.olH, {
                          onClick: F,
                          className: A.closeButton
                      })
                    : null
            ]
        })
    );
}
