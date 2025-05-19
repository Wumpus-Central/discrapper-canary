n.d(t, { Z: () => m });
var r = n(255367);
n(73800);
var i = n(120356),
    l = n.n(i),
    a = n(481060),
    o = n(388905),
    s = n(661824),
    c = n(720196),
    u = n(981631),
    d = n(388032),
    g = n(578605),
    h = n(20493);
function p(e) {
    let { children: t } = e;
    return (0, r.jsx)('li', {
        className: g.listItem,
        children: (0, r.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-normal',
            children: t
        })
    });
}
function m(e) {
    let { setSlide: t, transitionTo: i } = e;
    return (0, r.jsxs)('div', {
        children: [
            (0, r.jsx)(o.Ee, {
                src: n(26230),
                className: l()(h.marginBottom20, h.marginTop8)
            }),
            (0, r.jsx)(o.Dx, {
                className: h.marginBottom8,
                children: d.intl.string(d.t['8UcxIy'])
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: d.intl.string(d.t.O37hMj)
            }),
            (0, r.jsxs)(o.gO, {
                className: l()(h.marginBottom20, h.marginTop20),
                children: [
                    (0, r.jsx)(a.Text, { variant: 'text-sm/normal' }),
                    (0, r.jsxs)('ul', {
                        className: g.listContainer,
                        children: [(0, r.jsx)(p, { children: d.intl.string(d.t.Gj1Zr6) }), (0, r.jsx)(s.Z, {}), (0, r.jsx)(p, { children: d.intl.string(d.t['8C6t3N']) }), (0, r.jsx)(s.Z, {}), (0, r.jsx)(p, { children: d.intl.string(d.t.mToZMD) }), (0, r.jsx)(s.Z, {}), (0, r.jsx)(p, { children: d.intl.string(d.t.TPEvkZ) }), (0, r.jsx)(s.Z, {}), (0, r.jsx)(p, { children: d.intl.string(d.t.H8Y1Li) })]
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: g.buttonContainer,
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
