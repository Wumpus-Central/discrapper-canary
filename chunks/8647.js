var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(399606),
    l = n(481060),
    o = n(100527),
    c = n(182567),
    d = n(78839),
    u = n(63063),
    m = n(74538),
    g = n(276800),
    h = n(346497),
    p = n(409100),
    x = n(725727),
    f = n(474936),
    _ = n(981631),
    E = n(388032),
    C = n(261871);
t.Z = function (e) {
    let { isFullScreen: t, buttonClassName: r } = e,
        { promotion: T } = (0, x.mq)(),
        S = (0, a.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
    if (!(0, h.Vi)()) return null;
    let b = new Date(T.endDate);
    return (0, i.jsx)(c.O, {
        newLocations: [o.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, i.jsxs)('div', {
            className: s()(C.banner, { [C.bannerFullScreen]: t }),
            children: [
                (0, i.jsx)('div', {
                    className: C.bannerLeftImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: C.image
                    })
                }),
                (0, i.jsxs)('div', {
                    className: C.bannerContent,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: 'display-sm',
                                    color: 'always-white',
                                    children: null == S || null == (0, m.he)(S) ? E.intl.string(E.t.xbzNJC) : E.intl.string(E.t['22WZ9P'])
                                }),
                                (0, i.jsx)(l.Text, {
                                    className: C.countdown,
                                    variant: 'text-sm/bold',
                                    children: (0, i.jsx)(g.Z, { endDate: b })
                                }),
                                (0, i.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: E.intl.format(E.t['j/x4GB'], { helpCenterLink: u.Z.getArticleURL(_.BhN.SUMMER_BOGO_2024) })
                                })
                            ]
                        }),
                        (0, i.jsx)(p.Z, {
                            buttonText: E.intl.string(E.t.J61px8),
                            buttonTextClassName: C.subscribeButtonText,
                            subscriptionTier: f.Si.TIER_2,
                            showIcon: !1,
                            className: null != r ? r : C.subscribeButton,
                            forceInverted: !0
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: C.bannerRightImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: C.image
                    })
                })
            ]
        })
    });
};
