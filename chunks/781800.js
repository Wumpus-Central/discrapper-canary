n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var i = n(755721),
    a = n(481060),
    o = n(626135),
    s = n(391110),
    l = n(981631),
    c = n(388032),
    u = n(184388);
let d = (e) => {
    let { setIsAllPerksVisible: t, previousComponent: n } = e;
    return (0, r.jsx)(a.gtL, {
        "data-migration-pending": !0,
        color: i.Tt.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: a.rHe.SMALL,
        className: u.seeAllPerksButton,
        onClick: () => {
            t(!0),
                o.default.track(l.rMx.NITRO_HOME_NAVIGATION, {
                    current_component: n,
                    next_component: s.MQ.SEE_ALL,
                    interaction_component: "See All Button",
                });
        },
        children: (0, r.jsxs)("div", {
            className: u.seeAllPerksButtonContent,
            children: [c.intl.string(c.t["37C26f"]), (0, r.jsx)(a.Fbu, { color: "currentColor" })],
        }),
    });
};
