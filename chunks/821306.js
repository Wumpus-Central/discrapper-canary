a.d(t, { A: () => h });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(311907),
    o = a(243721),
    d = a(263834),
    c = a(865116),
    u = a(460281),
    m = a(505206);
function h(e) {
    let { devSettingsCategory: t } = e,
        a = (0, r.bG)([c.Ay], () => c.Ay.allByCategory(t), [t], r.My),
        i = l.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: l }] = e;
                    return (0, n.jsx)(
                        o.d,
                        { label: l, description: t, checked: a, onChange: (e) => (0, d.L)(t, e) },
                        t,
                    );
                }),
            [a],
        );
    return (0, n.jsx)("div", { className: s()(m.nd, u.n), children: i });
}
