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
    N = n(981631),
    x = n(388032),
    _ = n(669792);
let E = function (e) {
    let { isFullScreen: t, buttonClassName: i } = e,
        { promotion: E } = (0, f.mq)(),
        j = (0, a.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
    if (!(0, p.Vi)()) return null;
    let O = new Date(E.endDate);
    return (0, r.jsx)(c.O, {
        newLocations: [o.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, r.jsxs)('div', {
            className: s()(_.banner, { [_.bannerFullScreen]: t }),
            children: [
                (0, r.jsx)('div', {
                    className: _.bannerLeftImageContainer,
                    children: (0, r.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: _.image
                    })
                }),
                (0, r.jsxs)('div', {
                    className: _.bannerContent,
                    children: [
                        (0, r.jsxs)('div', {
                            children: [
                                (0, r.jsx)(l.X6q, {
                                    variant: 'display-sm',
                                    color: 'always-white',
                                    children: null == j || null == (0, m.he)(j) ? x.NW.string(x.t.xbzNJC) : x.NW.string(x.t['22WZ9P'])
                                }),
                                (0, r.jsx)(l.Text, {
                                    className: _.countdown,
                                    variant: 'text-sm/bold',
                                    children: (0, r.jsx)(g.Z, { endDate: O })
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: x.NW.format(x.t['j/x4GB'], { helpCenterLink: u.Z.getArticleURL(N.BhN.SUMMER_BOGO_2024) })
                                })
                            ]
                        }),
                        (0, r.jsx)(h.Z, {
                            buttonText: x.NW.string(x.t.J61px8),
                            buttonTextClassName: _.subscribeButtonText,
                            subscriptionTier: b.Si.TIER_2,
                            showIcon: !1,
                            className: null != i ? i : _.subscribeButton,
                            forceInverted: !0
                        })
                    ]
                }),
                (0, r.jsx)('div', {
                    className: _.bannerRightImageContainer,
                    children: (0, r.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: _.image
                    })
                })
            ]
        })
    });
};
