n.d(t, { Z: () => x }), n(388685);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    s = n(442837),
    o = n(481060),
    c = n(98357),
    d = n(432877),
    u = n(274254),
    m = n(482479);
function x(e) {
    let { devSettingsCategory: t } = e,
        n = (0, s.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], s.pF),
        l = r.useMemo(
            () =>
                n.map((e) => {
                    let [t, n, { label: r }] = e;
                    return (0, a.jsx)(
                        o.j7V,
                        {
                            value: n,
                            onChange: (e) => (0, c.Z)(t, e),
                            hideBorder: !0,
                            className: u.switch,
                            children: r
                        },
                        t
                    );
                }),
            [n]
        );
    return (0, a.jsx)('div', {
        className: i()(m.panel, u.panel),
        children: l
    });
}
