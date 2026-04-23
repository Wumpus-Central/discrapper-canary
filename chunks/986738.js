n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(827734),
    a = n(192308),
    s = n(81466),
    r = n(823508),
    o = n(47868),
    c = n(985018);
function d(e) {
    let { className: t, guildId: d } = e,
        u = (0, r.A)();
    return (0, i.jsx)(o.A, {
        className: t,
        icon: (0, i.jsx)(s.C, { size: "custom", color: "currentColor", height: 20, width: 20 }),
        color: l.A.unsafe_rawColors.BRAND_500.css,
        title: c.intl.string(c.t["60lJ0C"]),
        description: c.intl.string(c.t["EYn7/y"]),
        onClick: function () {
            (0, a.openModalLazy)(async () => {
                let { default: e } = await Promise.all([
                    n.e("28136"),
                    n.e("68587"),
                    n.e("51354"),
                    n.e("342"),
                    n.e("84465"),
                ]).then(n.bind(n, 21653));
                return (t) => (0, i.jsx)(e, { ...t, guildId: d });
            }, u);
        },
    });
}
