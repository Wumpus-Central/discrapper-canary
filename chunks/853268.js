n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    o = n(481060),
    a = n(600164),
    s = n(388905),
    c = n(256478),
    u = n(20493);
function d(e) {
    let { value: t, onChange: n, subText: i, muted: d, marginTopStyle: h, subtextClassName: g } = e;
    return (0, r.jsx)(a.Z, {
        className: null != h ? h : u.marginTop20,
        align: a.Z.Align.CENTER,
        children: (0, r.jsx)(o.XZJ, {
            value: t,
            type: o.XZJ.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, r.jsx)(s.i_, {
                className: l()(g, { [c.subText]: !d }),
                children: i
            })
        })
    });
}
