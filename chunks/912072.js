n.d(t, { Z: () => h }), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(120356),
    i = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(98357),
    d = n(432877),
    u = n(725754),
    m = n(941469);
function h(e) {
    let { devSettingsCategory: t } = e,
        n = (0, o.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], o.pF),
        r = l.useMemo(
            () =>
                n.map((e) => {
                    let [t, n, { label: l }] = e;
                    return (0, a.jsx)(
                        s.j7V,
                        {
                            value: n,
                            onChange: (e) => (0, c.Z)(t, e),
                            hideBorder: !0,
                            className: u.switch,
                            children: l
                        },
                        t
                    );
                }),
            [n]
        );
    return (0, a.jsx)('div', {
        className: i()(m.panel, u.panel),
        children: r
    });
}
