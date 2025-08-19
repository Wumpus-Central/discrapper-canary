n.d(t, { Z: () => o });
var i = n(951288),
    l = n(481060),
    r = n(465919);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: s, useSubtitle: a, useOptions: u } = t,
        c = s(),
        d = null == a ? void 0 : a(),
        f = n(),
        g = u();
    return (0, i.jsx)(l.xJW, {
        title: c,
        className: r.radioContainer,
        children: (0, i.jsxs)("div", {
            className: r.radioContent,
            children: [
                null != d &&
                    (0, i.jsx)(l.R94, {
                        type: l.geA.DESCRIPTION,
                        children: d,
                    }),
                (0, i.jsx)(l.FXm, {
                    options: g,
                    value: f,
                    onChange: (e) => o(e.value),
                }),
            ],
        }),
    });
}
