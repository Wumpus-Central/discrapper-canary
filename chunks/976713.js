n.d(t, { Z: () => o });
var r = n(54381),
    i = n(481060),
    a = n(550964);
function o(e) {
    let { node: t } = e,
        { useValue: n, setValue: o, useTitle: s, useSubtitle: l, useOptions: c, useBadge: u } = t,
        d = s(),
        f = null == l ? void 0 : l(),
        p = n(),
        _ = c(),
        m = null == u ? void 0 : u();
    return (0, r.jsx)(a.X, {
        children: (0, r.jsx)(i.FXm, {
            label: d,
            description: f,
            options: _,
            value: p,
            badge: m,
            onChange: (e) => o(e),
        }),
    });
}
