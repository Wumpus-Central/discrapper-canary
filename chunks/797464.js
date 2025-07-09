(n.d(a, { default: () => u }), n(388685));
var e = n(255367),
    l = n(73800),
    o = n(120356),
    s = n.n(o),
    i = n(755721),
    r = n(481060),
    d = n(313201),
    c = n(388032),
    m = n(957684);
function u(t) {
    let { transitionState: a, onConfirm: n, onClose: o, onDismiss: u } = t,
        [g, h] = l.useState(!1),
        [x, p] = l.useState(!0),
        [b, C] = l.useState(!0),
        j = (0, d.Dt)(),
        y = () => {
            (u(), o());
        };
    return (0, e.jsxs)(r.Y0X, {
        transitionState: a,
        'aria-labelledby': j,
        size: r.CgR.SMALL,
        parentComponent: 'HamModal',
        children: [
            (0, e.jsxs)(r.hzk, {
                className: m.modalContent,
                children: [
                    (0, e.jsx)(r.olH, {
                        onClick: y,
                        className: m.closeButton
                    }),
                    (0, e.jsx)(r.X6q, {
                        id: j,
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: m.__invalid_modalTitle,
                        children: c.intl.string(c.t['6rP+BQ'])
                    }),
                    (0, e.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: m.modalBody,
                        children: c.intl.string(c.t['1LuCnZ'])
                    }),
                    (0, e.jsx)(r.j7V, {
                        hideBorder: !0,
                        onChange: (t) => {
                            p(t);
                        },
                        className: s()(m.modalBody, m.toggle),
                        value: x,
                        children: c.intl.string(c.t['zLb+u7'])
                    })
                ]
            }),
            (0, e.jsxs)(r.mzw, {
                children: [
                    (0, e.jsx)(r.zxk, {
                        variant: 'primary',
                        text: c.intl.string(c.t['cY+Ooa']),
                        type: 'submit',
                        onClick: () => {
                            g || (h(!0), n(x, b), h(!1), o());
                        },
                        loading: g
                    }),
                    (0, e.jsx)(i.zx, {
                        type: 'submit',
                        color: i.zx.Colors.TRANSPARENT,
                        grow: !0,
                        look: i.iL.LINK,
                        onClick: y,
                        submitting: g,
                        className: m.cancelButton,
                        children: c.intl.string(c.t['ETE/oK'])
                    }),
                    (0, e.jsx)(r.XZJ, {
                        value: b,
                        type: r.XZJ.Types.INVERTED,
                        onChange: (t, a) => {
                            C(a);
                        },
                        children: (0, e.jsx)(r.Text, {
                            tag: 'span',
                            variant: 'text-sm/normal',
                            children: c.intl.string(c.t.KX8WJi)
                        })
                    })
                ]
            })
        ]
    });
}
