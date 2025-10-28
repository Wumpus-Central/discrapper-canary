n.d(t, { Z: () => p }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(98357),
    d = n(432877),
    u = n(344832),
    m = n(451429);
function p(e) {
    let { devSettingsCategory: t } = e,
        n = (0, o.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], o.pF),
        l = r.useMemo(
            () =>
                n.map((e) => {
                    let [t, n, { label: r }] = e;
                    return (0, a.jsx)(
                        s.rsf,
                        {
                            label: r,
                            description: t,
                            checked: n,
                            onChange: (e) => (0, c.Z)(t, e),
                        },
                        t,
                    );
                }),
            [n],
        );
    return (0, a.jsx)("div", {
        className: i()(m.panel, u.panel),
        children: l,
    });
}
