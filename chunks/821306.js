n.d(t, { A: () => h });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(311907),
    o = n(397927),
    d = n(263834),
    c = n(865116),
    u = n(759136),
    m = n(661251);
function h(e) {
    let { devSettingsCategory: t } = e,
        n = (0, r.bG)([c.Ay], () => c.Ay.allByCategory(t), [t], r.My),
        i = s.useMemo(
            () =>
                n.map((e) => {
                    let [t, n, { label: s }] = e;
                    return (0, a.jsx)(
                        o.dOG,
                        { label: s, description: t, checked: n, onChange: (e) => (0, d.L)(t, e) },
                        t,
                    );
                }),
            [n],
        );
    return (0, a.jsx)("div", { className: l()(m.nd, u.n), children: i });
}
