n.d(t, { default: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    s = n.n(i),
    l = n(755721),
    a = n(600164),
    o = n(388905),
    c = n(285722),
    u = n(197571);
function d(e) {
    let { value: t, onChange: n, subText: i, muted: d, marginTopStyle: h, subtextClassName: g } = e;
    return (0, r.jsx)(a.Z, {
        className: null != h ? h : u.marginTop20,
        align: a.Z.Align.CENTER,
        children: (0, r.jsx)(l.$q, {
            value: t,
            type: l.M0.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, r.jsx)(o.i_, {
                className: s()(g, { [c.subText]: !d }),
                children: i,
            }),
        }),
    });
}
