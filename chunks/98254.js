n.d(t, { A: () => l });
var i = n(627968),
    s = n(397927),
    a = n(244242);
function l(e) {
    let { node: t } = e,
        { useValue: n, useTitle: l, useSubtitle: r, useOptions: o, clearable: c } = t,
        d = t.setValue,
        u = l(),
        _ = r?.(),
        m = n(),
        A = o();
    return (0, i.jsx)(a.L, {
        children: (0, i.jsx)(s.l6P, {
            selectionMode: "single",
            label: u,
            description: _,
            options: A,
            value: m,
            clearable: c,
            onSelectionChange: d,
            layout: "horizontal-responsive",
            fullWidth: !0,
        }),
    });
}
