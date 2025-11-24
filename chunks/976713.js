n.d(t, { Z: () => i });
var r = n(54381),
    l = n(481060);
function i(e) {
    let { node: t } = e,
        { useValue: n, setValue: i, useTitle: o, useSubtitle: a, useOptions: s } = t,
        c = o(),
        u = null == a ? void 0 : a(),
        d = n(),
        f = s();
    return (0, r.jsx)(l.Kqy, {
        padding: {
            left: 12,
            right: 12,
        },
        children: (0, r.jsx)(l.FXm, {
            label: c,
            description: u,
            options: f,
            value: d,
            onChange: (e) => i(e),
        }),
    });
}
