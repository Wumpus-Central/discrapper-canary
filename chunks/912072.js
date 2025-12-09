n.d(t, { Z: () => p }), n(388685);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(98357),
    d = n(432877),
    u = n(344832),
    m = n(451429);
function p(e) {
    let { devSettingsCategory: t } = e,
        n = (0, s.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], s.pF),
        i = r.useMemo(
            () =>
                n.map((e) => {
                    let [t, n, { label: r }] = e;
                    return (0, a.jsx)(
                        o.rsf,
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
        className: l()(m.panel, u.panel),
        children: i,
    });
}
