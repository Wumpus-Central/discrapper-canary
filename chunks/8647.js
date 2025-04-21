n.d(t, { Z: () => j });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(399606),
    a = n(481060),
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
    x = n(388032),
    E = n(669792);
let j = function (e) {
    let { isFullScreen: t, buttonClassName: r } = e,
        { promotion: j } = (0, f.mq)(),
        C = (0, l.e7)([d.ZP], () => d.ZP.getPremiumTypeSubscription());
    if (!(0, p.Vi)()) return null;
    let O = new Date(j.endDate);
    return (0, i.jsx)(c.O, {
        newLocations: [o.Z.PREMIUM_MARKETING_PAGE_BANNER],
        children: (0, i.jsxs)('div', {
            className: s()(E.banner, { [E.bannerFullScreen]: t }),
            children: [
                (0, i.jsx)('div', {
                    className: E.bannerLeftImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(277698) : n(144823),
                        className: E.image
                    })
                }),
                (0, i.jsxs)('div', {
                    className: E.bannerContent,
                    children: [
                        (0, i.jsxs)('div', {
                            children: [
                                (0, i.jsx)(a.X6q, {
                                    variant: 'display-sm',
                                    color: 'always-white',
                                    children: null == C || null == (0, m.he)(C) ? x.intl.string(x.t.xbzNJC) : x.intl.string(x.t['22WZ9P'])
                                }),
                                (0, i.jsx)(a.Text, {
                                    className: E.countdown,
                                    variant: 'text-sm/bold',
                                    children: (0, i.jsx)(g.Z, { endDate: O })
                                }),
                                (0, i.jsx)(a.Text, {
                                    variant: 'text-sm/medium',
                                    color: 'always-white',
                                    children: x.intl.format(x.t['j/x4GB'], { helpCenterLink: u.Z.getArticleURL(_.BhN.SUMMER_BOGO_2024) })
                                })
                            ]
                        }),
                        (0, i.jsx)(h.Z, {
                            buttonText: x.intl.string(x.t.J61px8),
                            buttonTextClassName: E.subscribeButtonText,
                            subscriptionTier: b.Si.TIER_2,
                            showIcon: !1,
                            className: null != r ? r : E.subscribeButton,
                            forceInverted: !0
                        })
                    ]
                }),
                (0, i.jsx)('div', {
                    className: E.bannerRightImageContainer,
                    children: (0, i.jsx)('img', {
                        alt: '',
                        src: t ? n(10501) : n(485978),
                        className: E.image
                    })
                })
            ]
        })
    });
};
