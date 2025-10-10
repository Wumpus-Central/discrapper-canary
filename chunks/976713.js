n.d(t, { Z: () => a });
var r = n(951288),
    l = n(755721),
    o = n(481060),
    i = n(465919);
function a(e) {
    let { node: t } = e,
        { useValue: n, setValue: a, useTitle: s, useSubtitle: c, useOptions: u } = t,
        d = s(),
        f = null == c ? void 0 : c(),
        m = n(),
        b = u();
    return (0, r.jsx)(o.xJW, {
        title: d,
        className: i.radioContainer,
        children: (0, r.jsxs)("div", {
            className: i.radioContent,
            children: [
                null != f &&
                    (0, r.jsx)(o.R94, {
                        type: o.geA.DESCRIPTION,
                        children: f,
                    }),
                (0, r.jsx)(l.Gu, {
                    options: b,
                    value: m,
                    onChange: (e) => a(e.value),
                }),
            ],
        }),
    });
}
