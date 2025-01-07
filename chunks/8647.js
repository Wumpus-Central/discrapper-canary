var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(399606),
    l = n(481060),
    o = n(100527),
    c = n(182567),
    d = n(78839),
    u = n(63063),
    g = n(74538),
    m = n(276800),
    f = n(346497),
    p = n(409100),
    _ = n(725727),
    h = n(474936),
    x = n(981631),
    E = n(388032),
    b = n(261871);
t.Z = function (e) {
    let { isFullScreen: t, buttonClassName: r } = e,
        { promotion: C } = (0, _.mq)(),
        v = (0, s.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
    if (!(0, f.Vi)()) return null;
    let T = new Date(C.endDate);
    return (0, i.jsx)(c.O, {
        newLocations: [o.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, i.jsxs)('div', {
            className: a()(b.banner, { [b.bannerFullScreen]: t }),
            children: [
                (0, i.jsx)('div', {
                    className: b.bannerLeftImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: b.image
                    })
                }),
                (0, i.jsxs)('div', {
                    className: b.bannerContent,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: 'display-sm',
                                    color: 'always-white',
                                    children: null == v || null == (0, g.he)(v) ? E.intl.string(E.t.xbzNJC) : E.intl.string(E.t['22WZ9P'])
                                }),
                                (0, i.jsx)(l.Text, {
                                    className: b.countdown,
                                    variant: 'text-sm/bold',
                                    children: (0, i.jsx)(m.Z, { endDate: T })
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: E.intl.format(E.t['j/x4GB'], { helpCenterLink: u.Z.getArticleURL(x.BhN.SUMMER_BOGO_2024) })
                                })
                            ]
                        }),
                        (0, i.jsx)(p.Z, {
                            buttonText: E.intl.string(E.t.J61px8),
                            buttonTextClassName: b.subscribeButtonText,
                            subscriptionTier: h.Si.TIER_2,
                            showIcon: !1,
                            className: null != r ? r : b.subscribeButton,
                            forceInverted: !0
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: b.bannerRightImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: b.image
                    })
                })
            ]
        })
    });
};
