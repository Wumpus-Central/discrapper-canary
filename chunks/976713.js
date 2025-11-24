n.d(t, { Z: () => o });
var r = n(54381),
    l = n(481060),
    i = n(550964);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: a, useSubtitle: s, useOptions: c } = t,
        u = a(),
        d = null == s ? void 0 : s(),
        f = n(),
        p = c();
    return (0, r.jsx)(i.X, {
        children: (0, r.jsx)(l.FXm, {
            label: u,
            description: d,
            options: p,
            value: f,
            onChange: (e) => o(e),
        }),
    });
}
