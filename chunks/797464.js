a.d(e, { default: () => u }), a(47120);
var n = a(200651),
    o = a(192379),
    s = a(120356),
    l = a.n(s),
    i = a(481060),
    r = a(313201),
    d = a(388032),
    c = a(957684);
function u(t) {
    let { transitionState: e, onConfirm: a, onClose: s, onDismiss: u } = t,
        [m, h] = o.useState(!1),
        [g, x] = o.useState(!0),
        [N, b] = o.useState(!0),
        p = (0, r.Dt)(),
        C = () => {
            u(), s();
        };
    return (0, n.jsxs)(i.Y0X, {
        transitionState: e,
        'aria-labelledby': p,
        size: i.CgR.SMALL,
        children: [
            (0, n.jsxs)(i.hzk, {
                className: c.modalContent,
                children: [
                    (0, n.jsx)(i.olH, {
                        onClick: C,
                        className: c.closeButton
                    }),
                    (0, n.jsx)(i.X6q, {
                        id: p,
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: c.__invalid_modalTitle,
                        children: d.NW.string(d.t['6rP+BQ'])
                    }),
                    (0, n.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: c.modalBody,
                        children: d.NW.string(d.t['1LuCnZ'])
                    }),
                    (0, n.jsx)(i.j7V, {
                        hideBorder: !0,
                        onChange: (t) => {
                            x(t);
                        },
                        className: l()(c.modalBody, c.toggle),
                        value: g,
                        children: d.NW.string(d.t['zLb+u7'])
                    })
                ]
            }),
            (0, n.jsxs)(i.mzw, {
                children: [
                    (0, n.jsx)(i.zxk, {
                        type: 'submit',
                        color: i.zxk.Colors.BRAND,
                        onClick: () => {
                            m || (h(!0), a(g, N), h(!1), s());
                        },
                        submitting: m,
                        children: d.NW.string(d.t['cY+Ooa'])
                    }),
                    (0, n.jsx)(i.zxk, {
                        type: 'submit',
                        color: i.zxk.Colors.TRANSPARENT,
                        grow: !0,
                        look: i.iLD.LINK,
                        onClick: C,
                        submitting: m,
                        className: c.cancelButton,
                        children: d.NW.string(d.t['ETE/oK'])
                    }),
                    (0, n.jsx)(i.XZJ, {
                        value: N,
                        type: i.XZJ.Types.INVERTED,
                        onChange: (t, e) => {
                            b(e);
                        },
                        children: (0, n.jsx)(i.Text, {
                            tag: 'span',
                            variant: 'text-sm/normal',
                            children: d.NW.string(d.t.KX8WJi)
                        })
                    })
                ]
            })
        ]
    });
}
