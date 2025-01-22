r.d(n, {
    Z: function () {
        return R;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(442837),
    u = r(481060),
    c = r(355467),
    d = r(100527),
    f = r(906732),
    p = r(678558),
    h = r(626135),
    _ = r(74538),
    m = r(357355),
    g = r(104494),
    E = r(639119),
    v = r(165583),
    y = r(197115),
    b = r(302945),
    I = r(631771),
    T = r(474936),
    S = r(981631),
    A = r(388032),
    C = r(913197),
    N = r(769860);
function R(e) {
    var n, r, o;
    let { title: R, type: O, guildBoostProps: D, analyticsSource: x, analyticsLocation: L, body: w, context: P, glowUp: M, modalClassName: k, modalContentClassName: U, artContainerClassName: B, headerClassName: G, bodyClassName: Z, transitionState: F, onClose: V, onSubscribeClick: j, onSubscribeFinish: H, onSecondaryClick: Y, secondaryCTA: W, subscribeButtonText: K, showNewBadge: z = !1, enableArtBoxShadow: q = !0, subscriptionTier: Q = T.Si.TIER_2, isLoading: X = !1, hideBackButton: J, backButtonText: $, showEnhancedUpsell: ee, useSubscribeButtonGradient: et, subscribeButtonClassname: en, hidePremiumOfferUpsell: er, children: ei, LeadingComponent: ea, ...eo } = e,
        es = null != D,
        el = (0, E.N)(),
        eu = (0, g.Ng)(),
        ec = !er && ((null == el ? void 0 : null === (n = el.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === Q || (0, g.Wp)(eu, Q)) && !es,
        { analyticsLocations: ed } = (0, f.ZP)(d.Z.PREMIUM_UPSELL_MODAL),
        ef = {
            analyticsLocation: L,
            analyticsLocations: ed,
            analyticsSource: x,
            guildBoostProps: D,
            type: O
        },
        ep = a.useRef(ef);
    a.useEffect(() => {
        ep.current = ef;
    }),
        a.useEffect(() => {
            if (X) return;
            let { analyticsLocation: e, analyticsLocations: n, analyticsSource: r, guildBoostProps: i, type: a } = ep.current;
            es
                ? h.default.track(S.rMx.PREMIUM_GUILD_UPSELL_VIEWED, {
                      type: ''.concat(a, ' - Tier ').concat(null == i ? void 0 : i.boostedGuildTier),
                      guild_id: null == i ? void 0 : i.guild.id,
                      channel_id: null == i ? void 0 : i.channelId,
                      location: e,
                      location_stack: n
                  })
                : h.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                      type: a,
                      source: r,
                      location: e,
                      location_stack: n,
                      sku_id: (0, _.Wz)(Q)
                  });
        }, [es, Q, X]);
    let eh = (0, l.e7)([m.Z], () => m.Z.affinities),
        e_ = eh.length > 1 && (0, I.YN)(O),
        em = (0, l.e7)([m.Z], () => m.Z.hasFetched);
    a.useEffect(() => {
        !em && c.MH();
    }, [em]);
    let eg = () => {
            if (es)
                return (0, i.jsx)(p.Z, {
                    analyticsLocation: L,
                    guild: D.guild,
                    onClose: V
                });
            let e = ee ? A.intl.string(A.t.pj0XBA) : void 0;
            if (ec) {
                if (null != el) {
                    var n, r;
                    e = (0, _.Rt)({
                        intervalType: null == el ? void 0 : null === (n = el.subscription_trial) || void 0 === n ? void 0 : n.interval,
                        intervalCount: null == el ? void 0 : null === (r = el.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                    });
                } else null != eu && (e = A.intl.formatToPlainString(A.t.bkQ4bG, { percent: eu.discount.amount }));
            }
            return (0, i.jsx)(y.Z, {
                className: en,
                showGradient: ee || et,
                premiumModalAnalyticsLocation: L,
                subscriptionTier: Q,
                size: u.Button.Sizes.SMALL,
                color: ee || et ? u.Button.Colors.CUSTOM : u.Button.Colors.GREEN,
                onClick: () => {
                    null == j || j(), V();
                },
                onSubscribeModalClose: H,
                buttonText: null != K ? K : e
            });
        },
        eE = q ? s()(C.artContainer, C.artContainerBoxShadow, B) : s()(C.artContainer, B),
        ev = null;
    return (
        null != eo.artURL
            ? (ev = (0, i.jsx)('img', {
                  className: C.art,
                  alt: '',
                  src: eo.artURL
              }))
            : null != eo.artElement && (ev = eo.artElement),
        (0, i.jsxs)(u.ModalRoot, {
            className: s()(C.root, !ec && k),
            'aria-label': R,
            transitionState: F,
            children: [
                null != ev &&
                    (0, i.jsxs)('div', {
                        className: eE,
                        children: [
                            ev,
                            z
                                ? (0, i.jsx)('img', {
                                      className: C.sparkleBadge,
                                      alt: '',
                                      src: N
                                  })
                                : null
                        ]
                    }),
                (0, i.jsx)(u.ModalContent, {
                    scrollbarType: 'none',
                    className: s()(ee ? C.enhancedContent : C.content, !ec && U),
                    children: X
                        ? (0, i.jsx)(u.Spinner, {})
                        : (0, i.jsx)(i.Fragment, {
                              children: ec
                                  ? (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsx)(v.ZP, {
                                            onClose: V,
                                            type: O,
                                            subscriptionTier: null !== (o = null == el ? void 0 : null === (r = el.subscription_trial) || void 0 === r ? void 0 : r.sku_id) && void 0 !== o ? o : T.Si.TIER_2,
                                            headingText: R,
                                            context: P,
                                            analyticsLocationObject: L,
                                            discountOffer: eu,
                                            trialOffer: el,
                                            children: M
                                        })
                                    })
                                  : (0, i.jsxs)('div', {
                                        className: C.contentContainer,
                                        children: [
                                            ea,
                                            (0, i.jsxs)('div', {
                                                className: C.bodyContent,
                                                children: [
                                                    (0, i.jsx)(u.Heading, {
                                                        className: s()(C.header, { [C.enhancedHeader]: ee }, G),
                                                        variant: 'heading-xl/bold',
                                                        children: R
                                                    }),
                                                    e_ ? (0, i.jsx)(b.Z, { affinities: eh }) : void 0,
                                                    ei,
                                                    (0, i.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        className: s()(Z, C.subHeader),
                                                        children: w
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                          })
                }),
                (0, i.jsxs)(u.ModalFooter, {
                    className: s()(C.footer, { [C.enhancedFooter]: ee }),
                    children: [
                        (0, i.jsxs)('div', {
                            className: s()(C.primaryActions, { [C.enhancedPrimaryActions]: ee }),
                            children: [
                                null != W
                                    ? (0, i.jsx)(u.Button, {
                                          className: s()(C.secondaryAction, { [C.enhancedSecondaryAction]: ee }),
                                          onClick: Y,
                                          size: u.Button.Sizes.SMALL,
                                          color: ee ? u.Button.Colors.CUSTOM : u.Button.Colors.PRIMARY,
                                          look: u.Button.Looks.LINK,
                                          children: W
                                      })
                                    : null,
                                eg()
                            ]
                        }),
                        !J &&
                            !ee &&
                            (0, i.jsx)(u.Button, {
                                onClick: V,
                                size: u.Button.Sizes.SMALL,
                                color: u.Button.Colors.PRIMARY,
                                look: u.Button.Looks.LINK,
                                children: null != $ ? $ : A.intl.string(A.t['13/7kZ'])
                            })
                    ]
                }),
                ee
                    ? (0, i.jsx)(u.ModalCloseButton, {
                          onClick: V,
                          className: C.closeButton
                      })
                    : null
            ]
        })
    );
}
