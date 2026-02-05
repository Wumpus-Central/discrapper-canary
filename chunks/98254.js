n.d(t, { A: () => a });
var i = n(627968),
    s = n(397927),
    r = n(244242);
function a(e) {
    let { node: t } = e,
        { useValue: n, useTitle: a, useSubtitle: l, useOptions: o, fieldLayout: c, clearable: d } = t,
        u = t.setValue,
        _ = a(),
        m = l?.(),
        A = n(),
        g = o();
    return (0, i.jsx)(r.L, {
        children: (0, i.jsx)(s.l6P, {
            selectionMode: "single",
            label: _,
            description: m,
            options: g,
            value: A,
            clearable: d,
            onSelectionChange: u,
            layout: c,
            fullWidth: !0,
        }),
    });
}
