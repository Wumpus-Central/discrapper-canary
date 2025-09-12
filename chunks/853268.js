n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    s = n(755721),
    a = n(600164),
    o = n(388905),
    c = n(285722),
    u = n(197571);
function d(e) {
    let { value: t, onChange: n, subText: i, muted: d, marginTopStyle: h, subtextClassName: p } = e;
    return (0, r.jsx)(a.Z, {
        className: null != h ? h : u.marginTop20,
        align: a.Z.Align.CENTER,
        children: (0, r.jsx)(s.$q, {
            value: t,
            type: s.M0.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, r.jsx)(o.i_, {
                className: l()(p, { [c.subText]: !d }),
                children: i,
            }),
        }),
    });
}
