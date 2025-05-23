n.d(t, {
    F: () => u,
    default: () => d
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(433517),
    a = n(481060),
    o = n(720068),
    s = n(388032),
    c = n(447321);
let u = 'report_to_mod_dont_show_resolve_confirm';
function d(e) {
    let { transitionState: t, onClose: n, handleResolveFlag: d } = e,
        [p, h] = i.useState(!1);
    return (0, r.jsxs)(a.Y0X, {
        transitionState: t,
        children: [
            (0, r.jsxs)(a.xBx, {
                className: c.header,
                children: [
                    (0, r.jsx)(a.olH, {
                        className: c.closeButton,
                        onClick: n
                    }),
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-xl/bold',
                        children: s.intl.string(o.default['8R4eur'])
                    })
                ]
            }),
            (0, r.jsx)(a.hzk, {
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: s.intl.string(o.default.xgOraW)
                })
            }),
            (0, r.jsxs)(a.mzw, {
                className: c.footer,
                children: [
                    (0, r.jsx)(a.XZJ, {
                        value: p,
                        onChange: (e, t) => h(t),
                        children: s.intl.string(o.default['3puq5e'])
                    }),
                    (0, r.jsx)(a.zxk, {
                        onClick: () => {
                            p && l.K.set(u, !0), n(), d();
                        },
                        children: s.intl.string(o.default.ctefOz)
                    })
                ]
            })
        ]
    });
}
