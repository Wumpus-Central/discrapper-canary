n.d(t, {
    F: () => c,
    default: () => u
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(481060),
    a = n(776571),
    o = n(388032),
    s = n(584299);
let c = 'report_to_mod_dont_show_resolve_confirm';
function u(e) {
    let { transitionState: t, onClose: n, handleResolveFlag: u } = e,
        [d, p] = i.useState(!1);
    return (0, r.jsxs)(l.Y0X, {
        transitionState: t,
        children: [
            (0, r.jsxs)(l.xBx, {
                className: s.header,
                children: [
                    (0, r.jsx)(l.olH, { className: s.closeButton }),
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-xl/bold',
                        children: o.intl.string(a.default['8R4eur'])
                    })
                ]
            }),
            (0, r.jsx)(l.hzk, {
                children: (0, r.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    children: o.intl.string(a.default.xgOraW)
                })
            }),
            (0, r.jsxs)(l.mzw, {
                className: s.footer,
                children: [
                    (0, r.jsx)(l.XZJ, {
                        value: d,
                        onChange: (e, t) => p(t),
                        children: o.intl.string(a.default['3puq5e'])
                    }),
                    (0, r.jsx)(l.zxk, {
                        onClick: () => {
                            d && localStorage.setItem(c, 'true'), n(), u();
                        },
                        children: o.intl.string(a.default.ctefOz)
                    })
                ]
            })
        ]
    });
}
