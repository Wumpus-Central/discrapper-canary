n.d(t, { Z: () => o });
var r = n(951288),
    l = n(755721);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: i, useSubtitle: a, useOptions: s } = t,
        c = i(),
        u = null == a ? void 0 : a(),
        d = n(),
        f = s();
    return (0, r.jsx)(l.Gu, {
        label: c,
        description: u,
        options: f,
        value: d,
        onChange: (e) => o(e.value),
    });
}
