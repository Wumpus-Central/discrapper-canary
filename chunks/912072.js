n.d(t, { Z: () => p }), n(388685);
var a = n(54381),
    l = n(473749),
    r = n(120356),
    i = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(98357),
    d = n(432877),
    u = n(551986),
    m = n(866403);
function p(e) {
    let { devSettingsCategory: t } = e,
        n = (0, s.e7)([d.ZP], () => d.ZP.allByCategory(t), [t], s.pF),
        r = l.useMemo(
            () =>
                n.map((e) => {
                    let [t, n, { label: l }] = e;
                    return (0, a.jsx)(
                        o.rsf,
                        {
                            label: l,
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
        children: r,
    });
}
