n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    a = n(600164),
    o = n(388905),
    c = n(256478),
    u = n(20493);
function d(e) {
    let { value: t, onChange: n, subText: i, muted: d, marginTopStyle: h, subtextClassName: p } = e;
    return (0, r.jsx)(a.Z, {
        className: null != h ? h : u.marginTop20,
        align: a.Z.Align.CENTER,
        children: (0, r.jsx)(s.XZJ, {
            value: t,
            type: s.XZJ.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, r.jsx)(o.i_, {
                className: l()(p, { [c.subText]: !d }),
                children: i
            })
        })
    });
}
