n.d(t, { Z: () => m }), n(47120);
var r = n(200651),
    a = n(192379),
    i = n(120356),
    l = n.n(i),
    o = n(442837),
    s = n(481060),
    c = n(98357),
    d = n(432877),
    u = n(897903),
    h = n(841699);
function m(e) {
    let { devSettingsCategory: t } = e,
        n = (0, o.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], o.pF),
        i = a.useMemo(
            () =>
                n.map((e) => {
                    let [t, n, { label: a }] = e;
                    return (0, r.jsx)(
                        s.j7V,
                        {
                            value: n,
                            onChange: (e) => (0, c.Z)(t, e),
                            hideBorder: !0,
                            className: u.switch,
                            children: a
                        },
                        t
                    );
                }),
            [n]
        );
    return (0, r.jsx)('div', {
        className: l()(h.panel, u.panel),
        children: i
    });
}
