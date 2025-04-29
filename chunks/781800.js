n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(626135),
    l = n(391110),
    a = n(981631),
    o = n(388032),
    c = n(614729);
let d = (e) => {
    let { setIsAllPerksVisible: t, previousComponent: n } = e;
    return (0, i.jsx)(r.gtL, {
        color: r.Ttl.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: r.rHe.SMALL,
        className: c.seeAllPerksButton,
        onClick: () => {
            t(!0),
                s.default.track(a.rMx.NITRO_HOME_NAVIGATION, {
                    current_component: n,
                    next_component: l.MQ.SEE_ALL,
                    interaction_component: 'See All Button'
                });
        },
        children: (0, i.jsxs)('div', {
            className: c.seeAllPerksButtonContent,
            children: [o.intl.string(o.t['37C26e']), (0, i.jsx)(r.Fbu, { color: 'currentColor' })]
        })
    });
};
