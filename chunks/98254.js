n.d(t, { A: () => r });
var i = n(627968),
    s = n(397927),
    a = n(791498),
    l = n(244242);
function r(e) {
    let { node: t } = e,
        { useValue: n, useTitle: r, useSubtitle: o, useOptions: c, clearable: d } = t,
        u = t.setValue,
        _ = r(),
        m = o?.(),
        A = n(),
        g = c(),
        h = (0, a.q)(t);
    return (0, i.jsx)(l.L, {
        children: (0, i.jsx)(s.l6P, {
            selectionMode: "single",
            label: _,
            description: m,
            options: g,
            value: A,
            clearable: d,
            onSelectionChange: (e) => {
                h(), u(e);
            },
            layout: "horizontal-responsive",
            fullWidth: !0,
        }),
    });
}
