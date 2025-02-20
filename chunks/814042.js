n.d(t, { C: () => S });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(100527),
    c = n(906732),
    u = n(104494),
    d = n(639119),
    f = n(165583),
    p = n(626135),
    _ = n(74538),
    h = n(45521),
    m = n(27733),
    g = n(981631),
    E = n(474936),
    v = n(388032),
    b = n(702461),
    y = n(867250);
let O = () => (0, h.f)(!1),
    S = (e) => {
        var t, n, o;
        let { onLearnMore: h } = e,
            { analyticsLocations: S } = (0, c.ZP)(l.Z.PREMIUM_UPSELL);
        i.useEffect(() => {
            p.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                location_section: g.jXE.STICKER_PICKER_UPSELL,
                type: E.cd.STICKER_PICKER_UPSELL,
                location_stack: S
            });
        }, [S]);
        let I = (0, d.N)(),
            T = (0, u.Ng)(),
            N = (null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === E.Si.TIER_0,
            A = null != I || null != T;
        return (0, r.jsxs)('div', {
            className: a()(b.upsellWrapper, { [b.unifyTrialUpsell]: A }),
            children: [
                A
                    ? (0, r.jsx)(f.ZP, {
                          trialOffer: I,
                          discountOffer: T,
                          onClose: O,
                          type: E.cd.STICKER_PICKER_UPSELL,
                          subscriptionTier: null !== (o = null == I ? void 0 : null === (n = I.subscription_trial) || void 0 === n ? void 0 : n.sku_id) && void 0 !== o ? o : E.Si.TIER_2,
                          children: N
                              ? v.NW.format(v.t.MAGag4, {
                                    planName: (0, _.aq)(E.Xh.PREMIUM_MONTH_TIER_0),
                                    onClick: h
                                })
                              : v.NW.format(v.t.jt7JX1, { onClick: h })
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('img', {
                                  className: b.upsellImage,
                                  src: y,
                                  alt: v.NW.string(v.t.do7AoK)
                              }),
                              (0, r.jsx)(s.Text, {
                                  className: b.upsellTitle,
                                  color: 'header-primary',
                                  variant: 'text-lg/semibold',
                                  children: v.NW.string(v.t.jJG1pq)
                              }),
                              (0, r.jsx)(s.Text, {
                                  className: b.upsellDescription,
                                  variant: 'text-md/normal',
                                  children: v.NW.format(v.t.jt7JX1, { onClick: h })
                              })
                          ]
                      }),
                !A &&
                    (0, r.jsx)(m.Z, {
                        analyticsSection: g.jXE.EXPRESSION_PICKER,
                        buttonText: A ? (N ? v.NW.string(v.t.hz78hI) : v.NW.string(v.t['Gd/XHB'])) : void 0
                    }),
                (0, r.jsx)(s.P3F, {
                    className: b.upsellClose,
                    onClick: O,
                    children: (0, r.jsx)(s.Dio, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            ]
        });
    };
