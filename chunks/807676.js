n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(421380),
    l = n(397927),
    s = n(954571),
    a = n(322631),
    o = n(652215),
    c = n(985018),
    d = n(520089);
let u = (e) => {
    let { setIsAllPerksVisible: t, previousComponent: n } = e;
    return (0, r.jsx)(l.wLn, {
        "data-migration-pending": !0,
        color: i.XD.CUSTOM,
        onlyShineOnHover: !0,
        shineSize: l._Jd.SMALL,
        className: d.Wg,
        onClick: () => {
            t(!0),
                s.default.track(o.HAw.NITRO_HOME_NAVIGATION, {
                    current_component: n,
                    next_component: a.A2.SEE_ALL,
                    interaction_component: "See All Button",
                });
        },
        children: (0, r.jsxs)("div", {
            className: d.zB,
            children: [
                c.intl.string(c.t["37C26f"]),
                (0, r.jsx)(l._BQ, {
                    color: "currentColor",
                }),
            ],
        }),
    });
};
