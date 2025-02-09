n.d(t, { C: () => b });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(100527),
    u = n(906732),
    c = n(104494),
    d = n(639119),
    f = n(165583),
    _ = n(626135),
    p = n(74538),
    h = n(45521),
    m = n(27733),
    g = n(981631),
    E = n(474936),
    v = n(388032),
    y = n(708960),
    I = n(867250);
let T = () => (0, h.f)(!1),
    b = (e) => {
        var t, n, a;
        let { onLearnMore: h } = e,
            { analyticsLocations: b } = (0, u.ZP)(l.Z.PREMIUM_UPSELL);
        r.useEffect(() => {
            _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                location_section: g.jXE.STICKER_PICKER_UPSELL,
                type: E.cd.STICKER_PICKER_UPSELL,
                location_stack: b
            });
        }, [b]);
        let S = (0, d.N)(),
            A = (0, c.Ng)(),
            N = (null == S ? void 0 : null === (t = S.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === E.Si.TIER_0,
            C = null != S || null != A;
        return (0, i.jsxs)('div', {
            className: s()(y.upsellWrapper, { [y.unifyTrialUpsell]: C }),
            children: [
                C
                    ? (0, i.jsx)(f.ZP, {
                          trialOffer: S,
                          discountOffer: A,
                          onClose: T,
                          type: E.cd.STICKER_PICKER_UPSELL,
                          subscriptionTier: null !== (a = null == S ? void 0 : null === (n = S.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== a ? a : E.Si.TIER_2,
                          children: N
                              ? v.intl.format(v.t.MAGag4, {
                                    planName: (0, p.aq)(E.Xh.PREMIUM_MONTH_TIER_0),
                                    onClick: h
                                })
                              : v.intl.format(v.t.jt7JX1, { onClick: h })
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('img', {
                                  className: y.upsellImage,
                                  src: I,
                                  alt: v.intl.string(v.t.do7AoK)
                              }),
                              (0, i.jsx)(o.Text, {
                                  className: y.upsellTitle,
                                  color: 'header-primary',
                                  variant: 'text-lg/semibold',
                                  children: v.intl.string(v.t.jJG1pq)
                              }),
                              (0, i.jsx)(o.Text, {
                                  className: y.upsellDescription,
                                  variant: 'text-md/normal',
                                  children: v.intl.format(v.t.jt7JX1, { onClick: h })
                              })
                          ]
                      }),
                !C &&
                    (0, i.jsx)(m.Z, {
                        analyticsSection: g.jXE.EXPRESSION_PICKER,
                        buttonText: C ? (N ? v.intl.string(v.t.hz78hI) : v.intl.string(v.t['Gd/XHB'])) : void 0
                    }),
                (0, i.jsx)(o.P3F, {
                    className: y.upsellClose,
                    onClick: T,
                    children: (0, i.jsx)(o.Dio, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            ]
        });
    };
