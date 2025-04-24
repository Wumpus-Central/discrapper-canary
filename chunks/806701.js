n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    s = n(481060),
    o = n(388905),
    a = n(661824),
    c = n(720196),
    u = n(981631),
    d = n(388032),
    h = n(578605),
    g = n(20493);
function p(e) {
    let { children: t } = e;
    return (0, r.jsx)('li', {
        className: h.listItem,
        children: (0, r.jsx)(s.Text, {
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
                className: l()(g.marginBottom20, g.marginTop8)
            }),
            (0, r.jsx)(o.Dx, {
                className: g.marginBottom8,
                children: d.intl.string(d.t['8UcxIy'])
            }),
            (0, r.jsx)(s.Text, {
                variant: 'text-md/normal',
                children: d.intl.string(d.t.O37hMj)
            }),
            (0, r.jsxs)(o.gO, {
                className: l()(g.marginBottom20, g.marginTop20),
                children: [
                    (0, r.jsx)(s.Text, { variant: 'text-sm/normal' }),
                    (0, r.jsxs)('ul', {
                        className: h.listContainer,
                        children: [(0, r.jsx)(p, { children: d.intl.string(d.t.Gj1Zr6) }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(p, { children: d.intl.string(d.t['8C6t3N']) }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(p, { children: d.intl.string(d.t.mToZMD) }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(p, { children: d.intl.string(d.t.TPEvkZ) }), (0, r.jsx)(a.Z, {}), (0, r.jsx)(p, { children: d.intl.string(d.t.H8Y1Li) })]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: h.buttonContainer,
                children: [
                    (0, r.jsx)(o.zx, {
                        onClick: () => t(c.n.PASSWORD),
                        children: d.intl.string(d.t.GgCRqa)
                    }),
                    (0, r.jsx)(o.zx, {
                        color: o.zx.Colors.PRIMARY,
                        onClick: () => i(u.Z5c.LOGIN, { source: 'account_revert' }),
                        children: d.intl.string(d.t['B/yHcX'])
                    })
                ]
            })
        ]
    });
}
