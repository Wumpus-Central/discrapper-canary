n.d(t, { W: () => E });
var r = n(200651),
    i = n(120356),
    s = n.n(i),
    a = n(793030),
    l = n(442837),
    o = n(481060),
    c = n(100527),
    d = n(182567),
    u = n(963249),
    m = n(594174),
    g = n(74538),
    p = n(821629),
    h = n(114625),
    f = n(711896),
    b = n(780525),
    N = n(474936),
    x = n(388032),
    _ = n(276353);
let E = (e) => {
    let { isFullScreen: t, analyticsLocations: n } = e,
        i = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        E = g.ZP.isPremiumExactly(i, N.p9.TIER_1),
        j = new Date(b.Lk);
    return (0, r.jsx)(d.O, {
        newLocations: [c.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, r.jsxs)('div', {
            className: s()(_.banner, { [_.bannerFullScreen]: t }),
            children: [
                (0, r.jsx)('div', {
                    className: _.bannerLeftImageContainer,
                    children: (0, r.jsx)(a.xv, {
                        variant: 'code',
                        children: 'LEFT SIDE'
                    })
                }),
                (0, r.jsxs)('div', {
                    className: _.bannerContent,
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'display-sm',
                            color: 'always-white',
                            children: !0 === E ? x.NW.string(x.t.tY1el5) : x.NW.string(x.t.HaPg8P)
                        }),
                        (0, r.jsx)(a.xv, {
                            className: _.countdown,
                            variant: 'text-sm/bold',
                            children: (0, r.jsx)(p.Z, { endDate: j })
                        }),
                        (0, r.jsx)(a.xv, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: x.NW.format(x.t.ESckJy, { termsLink: b.Ps })
                        }),
                        (0, r.jsx)(o.gtL, {
                            color: 'white',
                            className: _.bannerButton,
                            buttonShineClassName: _.bannerButtonShine,
                            onClick: () => {
                                (0, u.Z)({
                                    analyticsLocations: n,
                                    subscriptionTier: N.Si.TIER_2,
                                    confirmationFooter: (0, r.jsx)(h.Z, {}),
                                    planSelectBanner: (0, r.jsx)(f.Z, {})
                                });
                            },
                            children: (0, r.jsx)(a.xv, {
                                variant: 'text-sm/medium',
                                color: 'badge-brand-text',
                                children: x.NW.string(x.t.x1s22N)
                            })
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: _.bannerRightImageContainer,
                    children: (0, r.jsx)(a.xv, {
                        variant: 'code',
                        children: 'RIGHT SIDE'
                    })
                })
            ]
        })
    });
};
