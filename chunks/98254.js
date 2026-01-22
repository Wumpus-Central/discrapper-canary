n.d(t, {
    A: () => s,
});
var r = n(627968),
    i = n(397927),
    a = n(244242);

function s(e) {
    let { node: t } = e,
        { useValue: n, useTitle: s, useSubtitle: o, useOptions: l, fieldLayout: c, clearable: u } = t,
        d = t.setValue,
        f = s(),
        p = null == o ? void 0 : o(),
        _ = n(),
        h = l();
    return (0, r.jsx)(a.L, {
        children: (0, r.jsx)(i.l6P, {
            selectionMode: "single",
            label: f,
            description: p,
            options: h,
            value: _,
            clearable: u,
            onSelectionChange: d,
            layout: c,
            fullWidth: !0,
        }),
    });
}
