n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(388905),
    s = n(661824),
    c = n(720196),
    d = n(981631),
    u = n(388032),
    h = n(114969),
    _ = n(232186);
function g(e) {
    let { children: t } = e;
    return (0, i.jsx)('li', {
        className: h.listItem,
        children: (0, i.jsx)(a.Text, {
            variant: 'text-sm/medium',
            color: 'text-normal',
            children: t
        })
    });
}
function p(e) {
    let { setSlide: t, transitionTo: r } = e;
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(o.Ee, {
                src: n(26230),
                className: l()(_.marginBottom20, _.marginTop8)
            }),
            (0, i.jsx)(o.Dx, {
                className: _.marginBottom8,
                children: u.intl.string(u.t['8UcxIy'])
            }),
            (0, i.jsx)(a.Text, {
                variant: 'text-md/normal',
                children: u.intl.string(u.t.O37hMj)
            }),
            (0, i.jsxs)(o.gO, {
                className: l()(_.marginBottom20, _.marginTop20),
                children: [
                    (0, i.jsx)(a.Text, { variant: 'text-sm/normal' }),
                    (0, i.jsxs)('ul', {
                        className: h.listContainer,
                        children: [(0, i.jsx)(g, { children: u.intl.string(u.t.Gj1Zr6) }), (0, i.jsx)(s.Z, {}), (0, i.jsx)(g, { children: u.intl.string(u.t['8C6t3N']) }), (0, i.jsx)(s.Z, {}), (0, i.jsx)(g, { children: u.intl.string(u.t.mToZMD) }), (0, i.jsx)(s.Z, {}), (0, i.jsx)(g, { children: u.intl.string(u.t.TPEvkZ) }), (0, i.jsx)(s.Z, {}), (0, i.jsx)(g, { children: u.intl.string(u.t.H8Y1Li) })]
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: h.buttonContainer,
                children: [
                    (0, i.jsx)(o.zx, {
                        onClick: () => t(c.n.PASSWORD),
                        children: u.intl.string(u.t.GgCRqa)
                    }),
                    (0, i.jsx)(o.zx, {
                        color: o.zx.Colors.PRIMARY,
                        onClick: () => r(d.Z5c.LOGIN),
                        children: u.intl.string(u.t['B/yHcX'])
                    })
                ]
            })
        ]
    });
}
