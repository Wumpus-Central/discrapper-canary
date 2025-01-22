r.d(n, {
    C: function () {
        return S;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(481060),
    u = r(100527),
    c = r(906732),
    d = r(104494),
    f = r(639119),
    p = r(165583),
    h = r(626135),
    _ = r(74538),
    m = r(45521),
    g = r(27733),
    E = r(981631),
    v = r(474936),
    y = r(388032),
    b = r(812126),
    I = r(867250);
let T = () => (0, m.f)(!1),
    S = (e) => {
        var n, r, o;
        let { onLearnMore: m } = e,
            { analyticsLocations: S } = (0, c.ZP)(u.Z.PREMIUM_UPSELL);
        a.useEffect(() => {
            h.default.track(E.rMx.PREMIUM_UPSELL_VIEWED, {
                location_section: E.jXE.STICKER_PICKER_UPSELL,
                type: v.cd.STICKER_PICKER_UPSELL,
                location_stack: S
            });
        }, [S]);
        let A = (0, f.N)(),
            C = (0, d.Ng)(),
            N = (null == A ? void 0 : null === (n = A.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === v.Si.TIER_0,
            R = null != A || null != C;
        return (0, i.jsxs)('div', {
            className: s()(b.upsellWrapper, { [b.unifyTrialUpsell]: R }),
            children: [
                R
                    ? (0, i.jsx)(p.ZP, {
                          trialOffer: A,
                          discountOffer: C,
                          onClose: T,
                          type: v.cd.STICKER_PICKER_UPSELL,
                          subscriptionTier: null !== (o = null == A ? void 0 : null === (r = A.subscription_trial) || void 0 === r ? void 0 : r.sku_id) && void 0 !== o ? o : v.Si.TIER_2,
                          children: N
                              ? y.intl.format(y.t.MAGag4, {
                                    planName: (0, _.aq)(v.Xh.PREMIUM_MONTH_TIER_0),
                                    onClick: m
                                })
                              : y.intl.format(y.t.jt7JX1, { onClick: m })
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('img', {
                                  className: b.upsellImage,
                                  src: I,
                                  alt: y.intl.string(y.t.do7AoK)
                              }),
                              (0, i.jsx)(l.Text, {
                                  className: b.upsellTitle,
                                  color: 'header-primary',
                                  variant: 'text-lg/semibold',
                                  children: y.intl.string(y.t.jJG1pq)
                              }),
                              (0, i.jsx)(l.Text, {
                                  className: b.upsellDescription,
                                  variant: 'text-md/normal',
                                  children: y.intl.format(y.t.jt7JX1, { onClick: m })
                              })
                          ]
                      }),
                !R &&
                    (0, i.jsx)(g.Z, {
                        analyticsSection: E.jXE.EXPRESSION_PICKER,
                        buttonText: R ? (N ? y.intl.string(y.t.hz78hI) : y.intl.string(y.t['Gd/XHB'])) : void 0
                    }),
                (0, i.jsx)(l.Clickable, {
                    className: b.upsellClose,
                    onClick: T,
                    children: (0, i.jsx)(l.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            ]
        });
    };
