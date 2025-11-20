n.d(t, { Z: () => o });
var r = n(54381),
    l = n(755721),
    i = n(481060);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: a, useSubtitle: c, useOptions: s } = t,
        u = a(),
        d = null == c ? void 0 : c(),
        f = n(),
        b = s();
    return (0, r.jsx)(i.Kqy, {
        padding: {
            left: 12,
            right: 12,
        },
        children: (0, r.jsx)(l.Gu, {
            label: u,
            description: d,
            options: b,
            value: f,
            onChange: (e) => o(e.value),
        }),
    });
}
