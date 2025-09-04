n.d(t, { Z: () => s });
var r = n(951288),
    i = n(755721),
    l = n(481060),
    o = n(465919);
function s(e) {
    let { node: t } = e,
        { useValue: n, setValue: s, useTitle: a, useSubtitle: u, useOptions: c } = t,
        d = a(),
        g = null == u ? void 0 : u(),
        f = n(),
        y = c();
    return (0, r.jsx)(l.xJW, {
        title: d,
        className: o.radioContainer,
        children: (0, r.jsxs)("div", {
            className: o.radioContent,
            children: [
                null != g &&
                    (0, r.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
                        children: g,
                    }),
                (0, r.jsx)(i.Gu, {
                    options: y,
                    value: f,
                    onChange: (e) => s(e.value),
                }),
            ],
        }),
    });
}
