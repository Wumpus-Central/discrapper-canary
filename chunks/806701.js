n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    l = n(481060),
    o = n(388905),
    a = n(661824),
    c = n(720196),
    u = n(981631),
    d = n(388032),
    h = n(25624),
    p = n(971005);
function g(e) {
    let { children: t } = e;
    return (0, r.jsx)('li', {
        className: h.listItem,
        children: (0, r.jsx)(l.Text, {
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
            (0, r.jsx)(o.Ee, {
                src: n(26230),
                className: s()(p.marginBottom20, p.marginTop8)
            }),
            (0, r.jsx)(o.Dx, {
                className: p.marginBottom8,
                children: d.NW.string(d.t['8UcxIy'])
            }),
            (0, r.jsx)(l.Text, {
                variant: 'text-md/normal',
                children: d.NW.string(d.t.O37hMj)
            }),
            (0, r.jsxs)(o.gO, {
                className: s()(p.marginBottom20, p.marginTop20),
                children: [
                    (0, r.jsx)(l.Text, { variant: 'text-sm/normal' }),
                    (0, r.jsxs)('ul', {
                        className: h.listContainer,
                        children: [(0, r.jsx)(g, { children: d.NW.string(d.t.Gj1Zr6) }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(g, { children: d.NW.string(d.t['8C6t3N']) }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(g, { children: d.NW.string(d.t.mToZMD) }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(g, { children: d.NW.string(d.t.TPEvkZ) }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(g, { children: d.NW.string(d.t.H8Y1Li) })]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: h.buttonContainer,
                children: [
                    (0, r.jsx)(o.zx, {
                        onClick: () => t(c.n.PASSWORD),
                        children: d.NW.string(d.t.GgCRqa)
                    }),
                    (0, r.jsx)(o.zx, {
                        color: o.zx.Colors.PRIMARY,
                        onClick: () => i(u.Z5c.LOGIN, { source: 'account_revert' }),
                        children: d.NW.string(d.t['B/yHcX'])
                    })
                ]
            })
        ]
    });
}
