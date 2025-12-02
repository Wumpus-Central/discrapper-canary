n.d(t, { Z: () => o });
var r = n(54381),
    i = n(481060),
    a = n(550964);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: s, useSubtitle: l, useOptions: c } = t,
        u = s(),
        d = null == l ? void 0 : l(),
        f = n(),
        p = c();
    return (0, r.jsx)(a.X, {
        children: (0, r.jsx)(i.FXm, {
            label: u,
            description: d,
            options: p,
            value: f,
            onChange: (e) => o(e),
        }),
    });
}
