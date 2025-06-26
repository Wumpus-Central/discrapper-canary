n.d(t, {
    F: () => u,
    default: () => d
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(433517),
    o = n(481060),
    a = n(130883),
    s = n(388032),
    c = n(584299);
let u = 'report_to_mod_dont_show_resolve_confirm';
function d(e) {
    let { transitionState: t, onClose: n, handleResolveFlag: d } = e,
        [p, h] = i.useState(!1);
    return (0, r.jsxs)(o.Y0X, {
        transitionState: t,
        parentComponent: 'ModeratorReportResolveConfirmModal',
        children: [
            (0, r.jsxs)(o.xBx, {
                className: c.header,
                children: [
                    (0, r.jsx)(o.olH, {
                        className: c.closeButton,
                        onClick: n
                    }),
                    (0, r.jsx)(o.X6q, {
                        variant: 'heading-xl/bold',
                        children: s.intl.string(a.default['8R4eur'])
                    })
                ]
            }),
            (0, r.jsx)(o.hzk, {
                children: (0, r.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: s.intl.string(a.default.xgOraW)
                })
            }),
            (0, r.jsxs)(o.mzw, {
                className: c.footer,
                children: [
                    (0, r.jsx)(o.XZJ, {
                        value: p,
                        onChange: (e, t) => h(t),
                        children: s.intl.string(a.default['3puq5e'])
                    }),
                    (0, r.jsx)(o.zxk, {
                        onClick: () => {
                            p && l.K.set(u, !0), n(), d();
                        },
                        children: s.intl.string(a.default.ctefOz)
                    })
                ]
            })
        ]
    });
}
