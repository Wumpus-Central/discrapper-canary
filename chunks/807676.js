n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var s = n(421380),
    r = n(397927),
    a = n(954571),
    l = n(322631),
    o = n(652215),
    c = n(985018),
    d = n(520089);
let u = (e) => {
    let { setIsAllPerksVisible: t, previousComponent: n } = e;
    return (0, i.jsx)(r.wLn, {
        "data-migration-pending": !0,
        color: s.XD.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: r._Jd.SMALL,
        className: d.Wg,
        onClick: () => {
            t(!0),
                a.default.track(o.HAw.NITRO_HOME_NAVIGATION, {
                    current_component: n,
                    next_component: l.A2.SEE_ALL,
                    interaction_component: "See All Button",
                });
        },
        children: (0, i.jsxs)("div", {
            className: d.zB,
            children: [c.intl.string(c.t["37C26f"]), (0, i.jsx)(r._BQ, { color: "currentColor" })],
        }),
    });
};
