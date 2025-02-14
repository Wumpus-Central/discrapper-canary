n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var s = n(481060),
    r = n(626135),
    l = n(391110),
    a = n(981631),
    o = n(388032),
    c = n(391251);
let d = (e) => {
    let { setIsAllPerksVisible: t, previousComponent: n } = e;
    return (0, i.jsx)(s.gtL, {
        color: s.Ttl.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: s.rHe.SMALL,
        className: c.seeAllPerksButton,
        onClick: () => {
            t(!0),
                r.default.track(a.rMx.NITRO_HOME_NAVIGATION, {
                    current_component: n,
                    next_component: l.MQ.SEE_ALL,
                    interaction_component: 'See All Button'
                });
        },
        children: (0, i.jsxs)('div', {
            className: c.seeAllPerksButtonContent,
            children: [o.intl.string(o.t['37C26e']), (0, i.jsx)(s.Fbu, { color: 'currentColor' })]
        })
    });
};
