n.d(t, { Z: () => d });
var r = n(951288);
n(647438);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(600164),
    a = n(388905),
    c = n(285722),
    u = n(197571);
function d(e) {
    let { value: t, onChange: n, subText: i, muted: d, marginTopStyle: h, subtextClassName: f } = e;
    return (0, r.jsx)(s.Z, {
        className: null != h ? h : u.marginTop20,
        align: s.Z.Align.CENTER,
        children: (0, r.jsx)(o.XZJ, {
            value: t,
            type: o.XZJ.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, r.jsx)(a.i_, {
                className: l()(f, { [c.subText]: !d }),
                children: i,
            }),
        }),
    });
}
