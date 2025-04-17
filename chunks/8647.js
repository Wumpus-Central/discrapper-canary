n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(399606),
    l = n(481060),
    o = n(100527),
    c = n(182567),
    d = n(78839),
    u = n(63063),
    m = n(74538),
    g = n(821629),
    p = n(346497),
    h = n(409100),
    f = n(725727),
    b = n(474936),
    _ = n(981631),
    N = n(388032),
    x = n(669792);
let E = function (e) {
    let { isFullScreen: t, buttonClassName: i } = e,
        { promotion: E } = (0, f.mq)(),
        j = (0, a.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
    if (!(0, p.Vi)()) return null;
    let C = new Date(E.endDate);
    return (0, r.jsx)(c.O, {
        newLocations: [o.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, r.jsxs)('div', {
            className: s()(x.banner, { [x.bannerFullScreen]: t }),
            children: [
                (0, r.jsx)('div', {
                    className: x.bannerLeftImageContainer,
                    children: (0, r.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: x.image
                    })
                }),
                (0, r.jsxs)('div', {
                    className: x.bannerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    variant: 'display-sm',
                                    color: 'always-white',
                                    children: null == j || null == (0, m.he)(j) ? N.NW.string(N.t.xbzNJC) : N.NW.string(N.t['22WZ9P'])
                                }),
                                (0, r.jsx)(l.Text, {
                                    className: x.countdown,
                                    variant: 'text-sm/bold',
                                    children: (0, r.jsx)(g.Z, { endDate: C })
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: N.NW.format(N.t['j/x4GB'], { helpCenterLink: u.Z.getArticleURL(_.BhN.SUMMER_BOGO_2024) })
                                })
                            ]
                        }),
                        (0, r.jsx)(h.Z, {
                            buttonText: N.NW.string(N.t.J61px8),
                            buttonTextClassName: x.subscribeButtonText,
                            subscriptionTier: b.Si.TIER_2,
                            showIcon: !1,
                            className: null != i ? i : x.subscribeButton,
                            forceInverted: !0
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: x.bannerRightImageContainer,
                    children: (0, r.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: x.image
                    })
                })
            ]
        })
    });
};
