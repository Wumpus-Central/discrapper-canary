n.d(t, { W: () => j });
var r = n(200651),
    i = n(120356),
    s = n.n(i),
    a = n(793030),
    l = n(442837),
    o = n(481060),
    c = n(607070),
    d = n(100527),
    u = n(182567),
    m = n(963249),
    g = n(594174),
    p = n(111361),
    h = n(821629),
    f = n(114625),
    b = n(72623),
    N = n(780525),
    x = n(474936),
    _ = n(388032),
    E = n(731670);
let j = (e) => {
    let { isFullScreen: t, analyticsLocations: n } = e,
        i = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        j = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        O = (0, p.M5)(i, x.p9.TIER_0) || (0, p.M5)(i, x.p9.TIER_1),
        C = new Date(N.Lk);
    return (0, r.jsx)(u.O, {
        newLocations: [d.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, r.jsx)('div', {
            className: s()(E.banner, {
                [E.bannerFullScreen]: t,
                [E.staticBanner]: j
            }),
            children: (0, r.jsxs)('div', {
                className: s()(E.bannerContent, { [E.bannerContentSettingsPage]: !t }),
                children: [
                    (0, r.jsx)(a.X6, {
                        variant: 'display-sm',
                        color: 'always-white',
                        children: !0 === O ? _.NW.string(_.t.tY1el5) : _.NW.string(_.t.HaPg8P)
                    }),
                    (0, r.jsx)(a.xv, {
                        className: E.countdown,
                        variant: 'text-sm/bold',
                        children: (0, r.jsx)(h.Z, { endDate: C })
                    }),
                    (0, r.jsx)(a.xv, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: _.NW.format(_.t.ESckJy, { termsLink: N.Ps })
                    }),
                    (0, r.jsx)(o.gtL, {
                        color: 'white',
                        className: E.bannerButton,
                        buttonShineClassName: E.bannerButtonShine,
                        onClick: () => {
                            (0, m.Z)({
                                analyticsLocations: n,
                                subscriptionTier: x.Si.TIER_2,
                                confirmationFooter: (0, r.jsx)(f.Z, {}),
                                paymentModalBanner: (0, r.jsx)(b.Z, {})
                            });
                        },
                        children: (0, r.jsx)(a.xv, {
                            variant: 'text-sm/medium',
                            color: 'badge-brand-text',
                            children: _.NW.string(_.t.x1s22N)
                        })
                    })
                ]
            })
        })
    });
};
