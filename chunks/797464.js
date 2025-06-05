e.d(n, { default: () => m }), e(388685);
var a = e(255367),
    o = e(73800),
    l = e(120356),
    s = e.n(l),
    i = e(481060),
    r = e(313201),
    d = e(388032),
    c = e(957684);
function m(t) {
    let { transitionState: n, onConfirm: e, onClose: l, onDismiss: m } = t,
        [u, h] = o.useState(!1),
        [g, x] = o.useState(!0),
        [p, b] = o.useState(!0),
        C = (0, r.Dt)(),
        k = () => {
            m(), l();
        };
    return (0, a.jsxs)(i.Y0X, {
        transitionState: n,
        'aria-labelledby': C,
        size: i.CgR.SMALL,
        parentComponent: 'HamModal',
        children: [
            (0, a.jsxs)(i.hzk, {
                className: c.modalContent,
                children: [
                    (0, a.jsx)(i.olH, {
                        onClick: k,
                        className: c.closeButton
                    }),
                    (0, a.jsx)(i.X6q, {
                        id: C,
                        variant: 'heading-lg/extrabold',
                        color: 'header-primary',
                        className: c.__invalid_modalTitle,
                        children: d.intl.string(d.t['6rP+BQ'])
                    }),
                    (0, a.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: c.modalBody,
                        children: d.intl.string(d.t['1LuCnZ'])
                    }),
                    (0, a.jsx)(i.j7V, {
                        hideBorder: !0,
                        onChange: (t) => {
                            x(t);
                        },
                        className: s()(c.modalBody, c.toggle),
                        value: g,
                        children: d.intl.string(d.t['zLb+u7'])
                    })
                ]
            }),
            (0, a.jsxs)(i.mzw, {
                children: [
                    (0, a.jsx)(i.zxk, {
                        type: 'submit',
                        color: i.zxk.Colors.BRAND,
                        onClick: () => {
                            u || (h(!0), e(g, p), h(!1), l());
                        },
                        submitting: u,
                        children: d.intl.string(d.t['cY+Ooa'])
                    }),
                    (0, a.jsx)(i.zxk, {
                        type: 'submit',
                        color: i.zxk.Colors.TRANSPARENT,
                        grow: !0,
                        look: i.iLD.LINK,
                        onClick: k,
                        submitting: u,
                        className: c.cancelButton,
                        children: d.intl.string(d.t['ETE/oK'])
                    }),
                    (0, a.jsx)(i.XZJ, {
                        value: p,
                        type: i.XZJ.Types.INVERTED,
                        onChange: (t, n) => {
                            b(n);
                        },
                        children: (0, a.jsx)(i.Text, {
                            tag: 'span',
                            variant: 'text-sm/normal',
                            children: d.intl.string(d.t.KX8WJi)
                        })
                    })
                ]
            })
        ]
    });
}
