n.d(t, { Z: () => i });
var r = n(951288),
    o = n(755721),
    l = n(550964);
function i(e) {
    let { node: t } = e,
        { useValue: n, setValue: i, useTitle: a, useSubtitle: c, useOptions: s } = t,
        u = a(),
        d = null == c ? void 0 : c(),
        f = n(),
        b = s();
    return (0, r.jsx)(l.X, {
        children: (0, r.jsx)(o.Gu, {
            label: u,
            description: d,
            options: b,
            value: f,
            onChange: (e) => i(e.value),
        }),
    });
}
