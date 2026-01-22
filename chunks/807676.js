n.d(t, { A: () => d });
var r = n(627968);
n(64700);
var i = n(421380),
    a = n(397927),
    s = n(954571),
    o = n(322631),
    l = n(652215),
    c = n(985018),
    u = n(70338);
let d = (e) => {
    let { setIsAllPerksVisible: t, previousComponent: n } = e;
    return (0, r.jsx)(a.wLn, {
        "data-migration-pending": !0,
        color: i.XD.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: a._Jd.SMALL,
        className: u.Wg,
        onClick: () => {
            t(!0),
                s.default.track(l.HAw.NITRO_HOME_NAVIGATION, {
                    current_component: n,
                    next_component: o.A2.SEE_ALL,
                    interaction_component: "See All Button",
                });
        },
        children: (0, r.jsxs)("div", {
            className: u.zB,
            children: [c.intl.string(c.t["37C26f"]), (0, r.jsx)(a._BQ, { color: "currentColor" })],
        }),
    });
};
