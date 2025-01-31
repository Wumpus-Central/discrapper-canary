e.d(n, { default: () => u }), e(47120);
var a = e(200651),
    l = e(192379),
    o = e(120356),
    s = e.n(o),
    i = e(481060),
    r = e(313201),
    d = e(388032),
    c = e(821643);
function u(t) {
    let { transitionState: n, onConfirm: e, onClose: o, onDismiss: u } = t,
        [m, h] = l.useState(!1),
        [g, x] = l.useState(!0),
        [b, p] = l.useState(!0),
        C = (0, r.Dt)(),
        k = () => {
            u(), o();
        };
    return (0, a.jsxs)(i.Y0X, {
        transitionState: n,
        'aria-labelledby': C,
        size: i.CgR.SMALL,
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
                            !m && (h(!0), e(g, b), h(!1), o());
                        },
                        submitting: m,
                        children: d.intl.string(d.t['cY+Ooa'])
                    }),
                    (0, a.jsx)(i.zxk, {
                        type: 'submit',
                        color: i.zxk.Colors.TRANSPARENT,
                        grow: !0,
                        look: i.iLD.LINK,
                        onClick: k,
                        submitting: m,
                        className: c.cancelButton,
                        children: d.intl.string(d.t['ETE/oK'])
                    }),
                    (0, a.jsx)(i.XZJ, {
                        value: b,
                        type: i.XZJ.Types.INVERTED,
                        onChange: (t, n) => {
                            p(n);
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
