n.d(t, { W: () => C });
var i = n(200651),
    r = n(120356),
    s = n.n(r),
    l = n(793030),
    a = n(442837),
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
    _ = n(780525),
    x = n(474936),
    E = n(388032),
    j = n(731670);
let C = (e) => {
    let { isFullScreen: t, analyticsLocations: n } = e,
        r = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        C = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        O = (0, p.M5)(r, x.p9.TIER_0) || (0, p.M5)(r, x.p9.TIER_1),
        S = new Date(_.Lk);
    return (0, i.jsx)(u.O, {
        newLocations: [d.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, i.jsx)('div', {
            className: s()(j.banner, {
                [j.bannerFullScreen]: t,
                [j.staticBanner]: C
            }),
            children: (0, i.jsxs)('div', {
                className: s()(j.bannerContent, { [j.bannerContentSettingsPage]: !t }),
                children: [
                    (0, i.jsx)(l.X6, {
                        variant: 'display-sm',
                        color: 'always-white',
                        children: !0 === O ? E.intl.string(E.t.tY1el5) : E.intl.string(E.t.HaPg8P)
                    }),
                    (0, i.jsx)(l.xv, {
                        className: j.countdown,
                        variant: 'text-sm/bold',
                        children: (0, i.jsx)(h.Z, { endDate: S })
                    }),
                    (0, i.jsx)(l.xv, {
                        variant: 'text-sm/medium',
                        color: 'always-white',
                        children: E.intl.format(E.t.ESckJy, { termsLink: _.Ps })
                    }),
                    (0, i.jsx)(o.gtL, {
                        color: 'white',
                        className: j.bannerButton,
                        buttonShineClassName: j.bannerButtonShine,
                        onClick: () => {
                            (0, m.Z)({
                                analyticsLocations: n,
                                subscriptionTier: x.Si.TIER_2,
                                confirmationFooter: (0, i.jsx)(f.Z, {}),
                                paymentModalBanner: (0, i.jsx)(b.Z, {})
                            });
                        },
                        children: (0, i.jsx)(l.xv, {
                            variant: 'text-sm/medium',
                            color: 'badge-brand-text',
                            children: E.intl.string(E.t.x1s22N)
                        })
                    })
                ]
            })
        })
    });
};
