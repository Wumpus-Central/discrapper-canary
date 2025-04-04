n.d(t, { C: () => I });
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
    _ = n(626135),
    p = n(74538),
    h = n(45521),
    m = n(27733),
    g = n(981631),
    E = n(474936),
    b = n(388032),
    y = n(397101),
    v = n(867250);
let O = () => (0, h.f)(!1),
    I = (e) => {
        var t, n, o;
        let { onLearnMore: h } = e,
            { analyticsLocations: I } = (0, c.ZP)(l.Z.PREMIUM_UPSELL);
        i.useEffect(() => {
            _.default.track(g.rMx.PREMIUM_UPSELL_VIEWED, {
                location_section: g.jXE.STICKER_PICKER_UPSELL,
                type: E.cd.STICKER_PICKER_UPSELL,
                location_stack: I
            });
        }, [I]);
        let S = (0, d.N)(),
            T = (0, u.Ng)(),
            N = (null == S || null == (t = S.subscription_trial) ? void 0 : t.sku_id) === E.Si.TIER_0,
            A = null != S || null != T;
        return (0, r.jsxs)('div', {
            className: a()(y.upsellWrapper, { [y.unifyTrialUpsell]: A }),
            children: [
                A
                    ? (0, r.jsx)(f.ZP, {
                          trialOffer: S,
                          discountOffer: T,
                          onClose: O,
                          type: E.cd.STICKER_PICKER_UPSELL,
                          subscriptionTier: null != (o = null == S || null == (n = S.subscription_trial) ? void 0 : n.sku_id) ? o : E.Si.TIER_2,
                          children: N
                              ? b.NW.format(b.t.MAGag4, {
                                    planName: (0, p.aq)(E.Xh.PREMIUM_MONTH_TIER_0),
                                    onClick: h
                                })
                              : b.NW.format(b.t.jt7JX1, { onClick: h })
                      })
                    : (0, r.jsxs)(r.Fragment, {
                          children: [
                              (0, r.jsx)('img', {
                                  className: y.upsellImage,
                                  src: v,
                                  alt: b.NW.string(b.t.do7AoK)
                              }),
                              (0, r.jsx)(s.Text, {
                                  className: y.upsellTitle,
                                  color: 'header-primary',
                                  variant: 'text-lg/semibold',
                                  children: b.NW.string(b.t.jJG1pq)
                              }),
                              (0, r.jsx)(s.Text, {
                                  className: y.upsellDescription,
                                  variant: 'text-md/normal',
                                  children: b.NW.format(b.t.jt7JX1, { onClick: h })
                              })
                          ]
                      }),
                !A &&
                    (0, r.jsx)(m.Z, {
                        analyticsSection: g.jXE.EXPRESSION_PICKER,
                        buttonText: A ? (N ? b.NW.string(b.t.hz78hI) : b.NW.string(b.t['Gd/XHB'])) : void 0
                    }),
                (0, r.jsx)(s.P3F, {
                    className: y.upsellClose,
                    onClick: O,
                    children: (0, r.jsx)(s.Dio, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            ]
        });
    };
