n.d(t, { Z: () => T });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(399606),
    a = n(481060),
    o = n(100527),
    c = n(182567),
    d = n(78839),
    u = n(63063),
    m = n(74538),
    g = n(821629),
    h = n(346497),
    x = n(409100),
    _ = n(725727),
    p = n(474936),
    E = n(981631),
    C = n(388032),
    f = n(9774);
let T = function (e) {
    let { isFullScreen: t, buttonClassName: s } = e,
        { promotion: T } = (0, _.mq)(),
        N = (0, l.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
    if (!(0, h.Vi)()) return null;
    let S = new Date(T.endDate);
    return (0, i.jsx)(c.O, {
        newLocations: [o.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, i.jsxs)('div', {
            className: r()(f.banner, { [f.bannerFullScreen]: t }),
            children: [
                (0, i.jsx)('div', {
                    className: f.bannerLeftImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: f.image
                    })
                }),
                (0, i.jsxs)('div', {
                    className: f.bannerContent,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(a.X6q, {
                                    variant: 'display-sm',
                                    color: 'always-white',
                                    children: null == N || null == (0, m.he)(N) ? C.intl.string(C.t.xbzNJC) : C.intl.string(C.t['22WZ9P'])
                                }),
                                (0, i.jsx)(a.Text, {
                                    className: f.countdown,
                                    variant: 'text-sm/bold',
                                    children: (0, i.jsx)(g.Z, { endDate: S })
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: C.intl.format(C.t['j/x4GB'], { helpCenterLink: u.Z.getArticleURL(E.BhN.SUMMER_BOGO_2024) })
                                })
                            ]
                        }),
                        (0, i.jsx)(x.Z, {
                            buttonText: C.intl.string(C.t.J61px8),
                            buttonTextClassName: f.subscribeButtonText,
                            subscriptionTier: p.Si.TIER_2,
                            showIcon: !1,
                            className: null != s ? s : f.subscribeButton,
                            forceInverted: !0
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: f.bannerRightImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: f.image
                    })
                })
            ]
        })
    });
};
