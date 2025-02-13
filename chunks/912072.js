n.d(t, { Z: () => m }), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(98357),
    d = n(432877),
    u = n(273902),
    h = n(658951);
function m(e) {
    let { devSettingsCategory: t } = e,
        n = (0, o.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], o.pF),
        l = r.useMemo(
            () =>
                n.map((e) => {
                    let [t, n, { label: r }] = e;
                    return (0, a.jsx)(
                        s.j7V,
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
        className: i()(h.panel, u.panel),
        children: l
    });
}
