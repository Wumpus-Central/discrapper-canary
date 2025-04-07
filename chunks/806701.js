n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    l = n(388905),
    s = n(661824),
    c = n(720196),
    u = n(981631),
    d = n(388032),
    p = n(578605),
    g = n(20493);
function h(e) {
    let { children: t } = e;
    return (0, r.jsx)('li', {
        className: p.listItem,
        children: (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-normal',
            children: t
        })
    });
}
function f(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(l.Ee, {
                src: n(26230),
                className: o()(g.marginBottom20, g.marginTop8)
            }),
            (0, r.jsx)(l.Dx, {
                className: g.marginBottom8,
                children: d.NW.string(d.t['8UcxIy'])
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: d.NW.string(d.t.O37hMj)
            }),
            (0, r.jsxs)(l.gO, {
                className: o()(g.marginBottom20, g.marginTop20),
                children: [
                    (0, r.jsx)(a.Text, { variant: 'text-sm/normal' }),
                    (0, r.jsxs)('ul', {
                        className: p.listContainer,
                        children: [(0, r.jsx)(h, { children: d.NW.string(d.t.Gj1Zr6) }), (0, r.jsx)(s.Z, {}), (0, r.jsx)(h, { children: d.NW.string(d.t['8C6t3N']) }), (0, r.jsx)(s.Z, {}), (0, r.jsx)(h, { children: d.NW.string(d.t.mToZMD) }), (0, r.jsx)(s.Z, {}), (0, r.jsx)(h, { children: d.NW.string(d.t.TPEvkZ) }), (0, r.jsx)(s.Z, {}), (0, r.jsx)(h, { children: d.NW.string(d.t.H8Y1Li) })]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: p.buttonContainer,
                children: [
                    (0, r.jsx)(l.zx, {
                        onClick: () => t(c.n.PASSWORD),
                        children: d.NW.string(d.t.GgCRqa)
                    }),
                    (0, r.jsx)(l.zx, {
                        color: l.zx.Colors.PRIMARY,
                        onClick: () => i(u.Z5c.LOGIN),
                        children: d.NW.string(d.t['B/yHcX'])
                    })
                ]
            })
        ]
    });
}
