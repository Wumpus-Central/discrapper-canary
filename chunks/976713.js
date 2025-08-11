n.d(t, { Z: () => o });
var i = n(255367),
    l = n(481060),
    s = n(424189);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: a, useSubtitle: r, useOptions: u } = t,
        c = a(),
        d = null == r ? void 0 : r(),
        f = n(),
        g = u();
    return (0, i.jsx)(l.xJW, {
        title: c,
        className: s.radioContainer,
        children: (0, i.jsxs)("div", {
            className: s.radioContent,
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
