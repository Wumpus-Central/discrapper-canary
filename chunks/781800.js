var i = n(200651);
n(192379);
var s = n(481060),
    r = n(626135),
    a = n(391110),
    l = n(981631),
    o = n(388032),
    c = n(368549);
t.Z = (e) => {
    let { setIsAllPerksVisible: t, previousComponent: n } = e;
    return (0, i.jsx)(s.ShinyButton, {
        color: s.ButtonColors.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: s.ShineSizes.SMALL,
        className: c.seeAllPerksButton,
        onClick: () => {
            t(!0),
                r.default.track(l.rMx.NITRO_HOME_NAVIGATION, {
                    current_component: n,
                    next_component: a.MQ.SEE_ALL,
                    interaction_component: 'See All Button'
                });
        },
        children: (0, i.jsxs)('div', {
            className: c.seeAllPerksButtonContent,
            children: [o.intl.string(o.t['37C26e']), (0, i.jsx)(s.ChevronSmallRightIcon, { color: 'currentColor' })]
        })
    });
};
