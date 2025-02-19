n.d(t, { W: () => x });
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
    h = n(780525),
    f = n(474936),
    b = n(388032),
    N = n(276353);
let x = (e) => {
    let { isFullScreen: t, analyticsLocations: n } = e,
        i = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        x = g.ZP.isPremiumExactly(i, f.p9.TIER_1),
        _ = new Date(h.Lk);
    return (0, r.jsx)(d.O, {
        newLocations: [c.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, r.jsxs)('div', {
            className: s()(N.banner, { [N.bannerFullScreen]: t }),
            children: [
                (0, r.jsx)('div', {
                    className: N.bannerLeftImageContainer,
                    children: (0, r.jsx)(a.xv, {
                        variant: 'code',
                        children: 'LEFT SIDE'
                    })
                }),
                (0, r.jsxs)('div', {
                    className: N.bannerContent,
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'display-sm',
                            color: 'always-white',
                            children: !0 === x ? b.NW.string(b.t.tY1el5) : b.NW.string(b.t.HaPg8P)
                        }),
                        (0, r.jsx)(a.xv, {
                            className: N.countdown,
                            variant: 'text-sm/bold',
                            children: (0, r.jsx)(p.Z, { endDate: _ })
                        }),
                        (0, r.jsx)(a.xv, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: b.NW.format(b.t.ESckJy, { termsLink: h.Ps })
                        }),
                        (0, r.jsx)(o.gtL, {
                            color: 'white',
                            className: N.bannerButton,
                            buttonShineClassName: N.bannerButtonShine,
                            onClick: () => {
                                (0, u.Z)({
                                    analyticsLocations: n,
                                    subscriptionTier: f.Si.TIER_2,
                                    onSubscriptionConfirmation: () => {}
                                });
                            },
                            children: (0, r.jsx)(a.xv, {
                                variant: 'text-sm/medium',
                                color: 'badge-brand-text',
                                children: b.NW.string(b.t.x1s22N)
                            })
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: N.bannerRightImageContainer,
                    children: (0, r.jsx)(a.xv, {
                        variant: 'code',
                        children: 'RIGHT SIDE'
                    })
                })
            ]
        })
    });
};
