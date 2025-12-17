n.d(t, { default: () => d });
var r = n(54381);
n(473749);
var i = n(120356),
    s = n.n(i),
    a = n(755721),
    l = n(600164),
    o = n(388905),
    c = n(500365),
    u = n(478411);
function d(e) {
    let { value: t, onChange: n, subText: i, muted: d, marginTopStyle: h, subtextClassName: f } = e;
    return (0, r.jsx)(l.Z, {
        className: null != h ? h : u.marginTop20,
        align: l.Z.Align.CENTER,
        children: (0, r.jsx)(a.$q, {
            value: t,
            type: a.M0.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, r.jsx)(o.i_, {
                className: s()(f, { [c.subText]: !d }),
                children: i,
            }),
        }),
    });
}
