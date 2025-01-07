r.d(n, {
    Z: function () {
        return R;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(442837),
    u = r(481060),
    c = r(355467),
    d = r(100527),
    f = r(906732),
    _ = r(678558),
    h = r(626135),
    p = r(74538),
    m = r(357355),
    g = r(104494),
    E = r(639119),
    v = r(165583),
    I = r(197115),
    T = r(302945),
    b = r(631771),
    y = r(474936),
    S = r(981631),
    A = r(388032),
    N = r(913197),
    C = r(769860);
function R(e) {
    var n, r, s;
    let { title: R, type: O, guildBoostProps: D, analyticsSource: L, analyticsLocation: x, body: w, context: P, glowUp: M, modalClassName: k, modalContentClassName: U, artContainerClassName: B, headerClassName: G, bodyClassName: Z, transitionState: F, onClose: V, onSubscribeClick: j, onSubscribeFinish: H, onSecondaryClick: Y, secondaryCTA: W, subscribeButtonText: K, showNewBadge: z = !1, enableArtBoxShadow: q = !0, subscriptionTier: Q = y.Si.TIER_2, isLoading: X = !1, hideBackButton: J, backButtonText: $, showEnhancedUpsell: ee, useSubscribeButtonGradient: et, subscribeButtonClassname: en, hidePremiumOfferUpsell: er, children: ei, LeadingComponent: ea, ...es } = e,
        eo = null != D,
        el = (0, E.N)(),
        eu = (0, g.Ng)(),
        ec = !er && ((null == el ? void 0 : null === (n = el.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === Q || (0, g.Wp)(eu, Q)) && !eo,
        { analyticsLocations: ed } = (0, f.ZP)(d.Z.PREMIUM_UPSELL_MODAL),
        ef = {
            analyticsLocation: x,
            analyticsLocations: ed,
            analyticsSource: L,
            guildBoostProps: D,
            type: O
        },
        e_ = a.useRef(ef);
    a.useEffect(() => {
        e_.current = ef;
    }),
        a.useEffect(() => {
            if (X) return;
            let { analyticsLocation: e, analyticsLocations: n, analyticsSource: r, guildBoostProps: i, type: a } = e_.current;
            eo
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
                      sku_id: (0, p.Wz)(Q)
                  });
        }, [eo, Q, X]);
    let eh = (0, l.e7)([m.Z], () => m.Z.affinities),
        ep = eh.length > 1 && (0, b.YN)(O),
        em = (0, l.e7)([m.Z], () => m.Z.hasFetched);
    a.useEffect(() => {
        !em && c.MH();
    }, [em]);
    let eg = () => {
            if (eo)
                return (0, i.jsx)(_.Z, {
                    analyticsLocation: x,
                    guild: D.guild,
                    onClose: V
                });
            let e = ee ? A.intl.string(A.t.pj0XBA) : void 0;
            if (ec) {
                if (null != el) {
                    var n, r;
                    e = (0, p.Rt)({
                        intervalType: null == el ? void 0 : null === (n = el.subscription_trial) || void 0 === n ? void 0 : n.interval,
                        intervalCount: null == el ? void 0 : null === (r = el.subscription_trial) || void 0 === r ? void 0 : r.interval_count
                    });
                } else null != eu && (e = A.intl.formatToPlainString(A.t.bkQ4bG, { percent: eu.discount.amount }));
            }
            return (0, i.jsx)(I.Z, {
                className: en,
                showGradient: ee || et,
                premiumModalAnalyticsLocation: x,
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
        eE = q ? o()(N.artContainer, N.artContainerBoxShadow, B) : o()(N.artContainer, B),
        ev = null;
    return (
        null != es.artURL
            ? (ev = (0, i.jsx)('img', {
                  className: N.art,
                  alt: '',
                  src: es.artURL
              }))
            : null != es.artElement && (ev = es.artElement),
        (0, i.jsxs)(u.ModalRoot, {
            className: o()(N.root, !ec && k),
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
                                      className: N.sparkleBadge,
                                      alt: '',
                                      src: C
                                  })
                                : null
                        ]
                    }),
                (0, i.jsx)(u.ModalContent, {
                    scrollbarType: 'none',
                    className: o()(ee ? N.enhancedContent : N.content, !ec && U),
                    children: X
                        ? (0, i.jsx)(u.Spinner, {})
                        : (0, i.jsx)(i.Fragment, {
                              children: ec
                                  ? (0, i.jsx)(i.Fragment, {
                                        children: (0, i.jsx)(v.ZP, {
                                            onClose: V,
                                            type: O,
                                            subscriptionTier: null !== (s = null == el ? void 0 : null === (r = el.subscription_trial) || void 0 === r ? void 0 : r.sku_id) && void 0 !== s ? s : y.Si.TIER_2,
                                            headingText: R,
                                            context: P,
                                            analyticsLocationObject: x,
                                            discountOffer: eu,
                                            trialOffer: el,
                                            children: M
                                        })
                                    })
                                  : (0, i.jsxs)('div', {
                                        className: N.contentContainer,
                                        children: [
                                            ea,
                                            (0, i.jsxs)('div', {
                                                className: N.bodyContent,
                                                children: [
                                                    (0, i.jsx)(u.Heading, {
                                                        className: o()(N.header, { [N.enhancedHeader]: ee }, G),
                                                        variant: 'heading-xl/bold',
                                                        children: R
                                                    }),
                                                    ep ? (0, i.jsx)(T.Z, { affinities: eh }) : void 0,
                                                    ei,
                                                    (0, i.jsx)(u.Text, {
                                                        variant: 'text-md/normal',
                                                        className: o()(Z, N.subHeader),
                                                        children: w
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                          })
                }),
                (0, i.jsxs)(u.ModalFooter, {
                    className: o()(N.footer, { [N.enhancedFooter]: ee }),
                    children: [
                        (0, i.jsxs)('div', {
                            className: o()(N.primaryActions, { [N.enhancedPrimaryActions]: ee }),
                            children: [
                                null != W
                                    ? (0, i.jsx)(u.Button, {
                                          className: o()(N.secondaryAction, { [N.enhancedSecondaryAction]: ee }),
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
                          className: N.closeButton
                      })
                    : null
            ]
        })
    );
}
