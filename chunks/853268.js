n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    o = n(600164),
    a = n(388905),
    c = n(262437),
    d = n(232186);
function u(e) {
    let { value: t, onChange: n, subText: r, muted: u, marginTopStyle: h } = e;
    return (0, i.jsx)(o.Z, {
        className: null != h ? h : d.marginTop20,
        align: o.Z.Align.CENTER,
        children: (0, i.jsx)(l.Checkbox, {
            value: t,
            type: l.Checkbox.Types.INVERTED,
            onChange: (e, t) => n(t),
            className: c.checkbox,
            children: (0, i.jsx)(a.i_, {
                className: s()({ [c.subText]: !u }),
                children: r
            })
        })
    });
}
