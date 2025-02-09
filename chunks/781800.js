n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(626135),
    s = n(391110),
    l = n(981631),
    o = n(388032),
    c = n(244383);
let d = (e) => {
    let { setIsAllPerksVisible: t, previousComponent: n } = e;
    return (0, i.jsx)(r.gtL, {
        color: r.Ttl.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: r.rHe.SMALL,
        className: c.seeAllPerksButton,
        onClick: () => {
            t(!0),
                a.default.track(l.rMx.NITRO_HOME_NAVIGATION, {
                    current_component: n,
                    next_component: s.MQ.SEE_ALL,
                    interaction_component: 'See All Button'
                });
        },
        children: (0, i.jsxs)('div', {
            className: c.seeAllPerksButtonContent,
            children: [o.intl.string(o.t['37C26e']), (0, i.jsx)(r.Fbu, { color: 'currentColor' })]
        })
    });
};
