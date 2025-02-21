n.d(t, { W: () => _ });
var r = n(200651),
    i = n(120356),
    s = n.n(i),
    a = n(793030),
    o = n(442837),
    l = n(481060),
    c = n(100527),
    d = n(182567),
    u = n(963249),
    m = n(594174),
    g = n(74538),
    p = n(821629),
    h = n(114625),
    f = n(780525),
    b = n(474936),
    N = n(388032),
    x = n(276353);
let _ = (e) => {
    let { isFullScreen: t, analyticsLocations: n } = e,
        i = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        _ = g.ZP.isPremiumExactly(i, b.p9.TIER_1),
        E = new Date(f.Lk);
    return (0, r.jsx)(d.O, {
        newLocations: [c.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, r.jsxs)('div', {
            className: s()(x.banner, { [x.bannerFullScreen]: t }),
            children: [
                (0, r.jsx)('div', {
                    className: x.bannerLeftImageContainer,
                    children: (0, r.jsx)(a.xv, {
                        variant: 'code',
                        children: 'LEFT SIDE'
                    })
                }),
                (0, r.jsxs)('div', {
                    className: x.bannerContent,
                    children: [
                        (0, r.jsx)(a.X6, {
                            variant: 'display-sm',
                            color: 'always-white',
                            children: !0 === _ ? N.NW.string(N.t.tY1el5) : N.NW.string(N.t.HaPg8P)
                        }),
                        (0, r.jsx)(a.xv, {
                            className: x.countdown,
                            variant: 'text-sm/bold',
                            children: (0, r.jsx)(p.Z, { endDate: E })
                        }),
                        (0, r.jsx)(a.xv, {
                            variant: 'text-sm/medium',
                            color: 'always-white',
                            children: N.NW.format(N.t.ESckJy, { termsLink: f.Ps })
                        }),
                        (0, r.jsx)(l.gtL, {
                            color: 'white',
                            className: x.bannerButton,
                            buttonShineClassName: x.bannerButtonShine,
                            onClick: () => {
                                (0, u.Z)({
                                    analyticsLocations: n,
                                    subscriptionTier: b.Si.TIER_2,
                                    confirmationFooter: (0, r.jsx)(h.Z, {})
                                });
                            },
                            children: (0, r.jsx)(a.xv, {
                                variant: 'text-sm/medium',
                                color: 'badge-brand-text',
                                children: N.NW.string(N.t.x1s22N)
                            })
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: x.bannerRightImageContainer,
                    children: (0, r.jsx)(a.xv, {
                        variant: 'code',
                        children: 'RIGHT SIDE'
                    })
                })
            ]
        })
    });
};
