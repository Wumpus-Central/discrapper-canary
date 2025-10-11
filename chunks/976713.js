n.d(t, { Z: () => i });
var r = n(951288),
    l = n(755721),
    o = n(550964);
function i(e) {
    let { node: t } = e,
        { useValue: n, setValue: i, useTitle: a, useSubtitle: s, useOptions: c } = t,
        u = a(),
        d = null == s ? void 0 : s(),
        f = n(),
        m = c();
    return (0, r.jsx)(o.X, {
        children: (0, r.jsx)(l.Gu, {
            label: u,
            description: d,
            options: m,
            value: f,
            onChange: (e) => i(e.value),
        }),
    });
}
