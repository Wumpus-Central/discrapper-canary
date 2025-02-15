n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(481060),
    o = n(600164),
    s = n(388905),
    c = n(167669),
    d = n(483938);
function u(e) {
    let { value: t, onChange: n, subText: r, muted: u, marginTopStyle: h } = e;
    return (0, i.jsx)(o.Z, {
        className: null != h ? h : d.marginTop20,
        align: o.Z.Align.CENTER,
        children: (0, i.jsx)(l.XZJ, {
            value: t,
            type: l.XZJ.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, i.jsx)(s.i_, {
                className: a()({ [c.subText]: !u }),
                children: r
            })
        })
    });
}
