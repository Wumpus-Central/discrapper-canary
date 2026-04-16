n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(827734),
    s = n(397927),
    a = n(823508),
    r = n(47868),
    o = n(985018);
function d(e) {
    let { className: t, guildId: d } = e,
        c = (0, a.A)();
    return (0, i.jsx)(r.A, {
        className: t,
        icon: (0, i.jsx)(s.CTc, { size: "custom", color: "currentColor", height: 20, width: 20 }),
        color: l.A.unsafe_rawColors.BRAND_500.css,
        title: o.intl.string(o.t["60lJ0C"]),
        description: o.intl.string(o.t["EYn7/y"]),
        onClick: function () {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("68587"), n.e("51354"), n.e("342"), n.e("8316")]).then(
                    n.bind(n, 21653),
                );
                return (t) => (0, i.jsx)(e, { ...t, guildId: d });
            }, c);
        },
    });
}
