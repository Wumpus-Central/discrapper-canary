(a.d(t, { Z: () => p }), a(388685));
var n = a(255367),
    r = a(73800),
    l = a(120356),
    i = a.n(l),
    s = a(442837),
    o = a(481060),
    c = a(98357),
    d = a(432877),
    u = a(738629),
    m = a(616257);
function p(e) {
    let { devSettingsCategory: t } = e,
        a = (0, s.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], s.pF),
        l = r.useMemo(
            () =>
                a.map((e) => {
                    let [t, a, { label: r }] = e;
                    return (0, n.jsx)(
                        o.j7V,
                        {
                            value: a,
                            onChange: (e) => (0, c.Z)(t, e),
                            hideBorder: !0,
                            className: u.switch,
                            children: r
                        },
                        t
                    );
                }),
            [a]
        );
    return (0, n.jsx)('div', {
        className: i()(m.panel, u.panel),
        children: l
    });
}
