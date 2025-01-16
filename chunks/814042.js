r.d(n, {
    C: function () {
        return S;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(481060),
    u = r(100527),
    c = r(906732),
    d = r(104494),
    f = r(639119),
    _ = r(165583),
    h = r(626135),
    p = r(74538),
    m = r(45521),
    g = r(27733),
    E = r(981631),
    v = r(474936),
    I = r(388032),
    T = r(812126),
    b = r(867250);
let y = () => (0, m.f)(!1),
    S = (e) => {
        var n, r, s;
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
            N = (0, d.Ng)(),
            C = (null == A ? void 0 : null === (n = A.subscription_trial) || void 0 === n ? void 0 : n.sku_id) === v.Si.TIER_0,
            R = null != A || null != N;
        return (0, i.jsxs)('div', {
            className: o()(T.upsellWrapper, { [T.unifyTrialUpsell]: R }),
            children: [
                R
                    ? (0, i.jsx)(_.ZP, {
                          trialOffer: A,
                          discountOffer: N,
                          onClose: y,
                          type: v.cd.STICKER_PICKER_UPSELL,
                          subscriptionTier: null !== (s = null == A ? void 0 : null === (r = A.subscription_trial) || void 0 === r ? void 0 : r.sku_id) && void 0 !== s ? s : v.Si.TIER_2,
                          children: C
                              ? I.intl.format(I.t.MAGag4, {
                                    planName: (0, p.aq)(v.Xh.PREMIUM_MONTH_TIER_0),
                                    onClick: m
                                })
                              : I.intl.format(I.t.jt7JX1, { onClick: m })
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)('img', {
                                  className: T.upsellImage,
                                  src: b,
                                  alt: I.intl.string(I.t.do7AoK)
                              }),
                              (0, i.jsx)(l.Text, {
                                  className: T.upsellTitle,
                                  color: 'header-primary',
                                  variant: 'text-lg/semibold',
                                  children: I.intl.string(I.t.jJG1pq)
                              }),
                              (0, i.jsx)(l.Text, {
                                  className: T.upsellDescription,
                                  variant: 'text-md/normal',
                                  children: I.intl.format(I.t.jt7JX1, { onClick: m })
                              })
                          ]
                      }),
                !R &&
                    (0, i.jsx)(g.Z, {
                        analyticsSection: E.jXE.EXPRESSION_PICKER,
                        buttonText: R ? (C ? I.intl.string(I.t.hz78hI) : I.intl.string(I.t['Gd/XHB'])) : void 0
                    }),
                (0, i.jsx)(l.Clickable, {
                    className: T.upsellClose,
                    onClick: y,
                    children: (0, i.jsx)(l.XSmallIcon, {
                        size: 'md',
                        color: 'currentColor'
                    })
                })
            ]
        });
    };
