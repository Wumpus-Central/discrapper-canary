n.d(t, { Z: () => u });
var i = n(255367);
n(73800);
var r = n(755721),
    s = n(481060),
    a = n(626135),
    l = n(391110),
    o = n(981631),
    c = n(388032),
    d = n(614729);
let u = (e) => {
    let { setIsAllPerksVisible: t, previousComponent: n } = e;
    return (0, i.jsx)(s.gtL, {
        color: r.Tt.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: s.rHe.SMALL,
        className: d.seeAllPerksButton,
        onClick: () => {
            (t(!0),
                a.default.track(o.rMx.NITRO_HOME_NAVIGATION, {
                    current_component: n,
                    next_component: l.MQ.SEE_ALL,
                    interaction_component: 'See All Button'
                }));
        },
        children: (0, i.jsxs)('div', {
            className: d.seeAllPerksButtonContent,
            children: [c.intl.string(c.t['37C26e']), (0, i.jsx)(s.Fbu, { color: 'currentColor' })]
        })
    });
};
