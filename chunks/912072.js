n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(98357),
    d = n(432877),
    u = n(725754),
    m = n(941469);
function h(e) {
    let { devSettingsCategory: t } = e,
        n = (0, o.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], o.pF),
        l = a.useMemo(
            () =>
                n.map((e) => {
                    let [t, n, { label: a }] = e;
                    return (0, r.jsx)(
                        s.FormSwitch,
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
        className: i()(m.panel, u.panel),
        children: l
    });
}
