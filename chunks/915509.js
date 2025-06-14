n.d(t, { Z: () => u }), n(953529), n(388685);
var r = n(255367),
    a = n(73800),
    o = n(120356),
    i = n.n(o),
    l = n(481060),
    c = n(313201),
    s = n(388032),
    d = n(98847);
function u(e) {
    let { errorText: t, title: n, description: o, transitionState: u, onCancel: b, onConfirm: p, children: m } = e,
        _ = (0, c.Dt)(),
        [g, y] = a.useState(!1),
        x = a.useCallback(async () => {
            y(!0);
            try {
                await p();
            } catch (e) {
                throw e;
            } finally {
                y(!1);
            }
        }, [p]);
    return (0, r.jsxs)(l.Y0X, {
        className: d.modal,
        transitionState: u,
        'aria-labelledby': _,
        size: l.CgR.SMALL,
        parentComponent: 'FormFieldEditModal',
        children: [
            (0, r.jsxs)(l.hzk, {
                className: d.modalContent,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'heading-md/semibold',
                        id: _,
                        children: n
                    }),
                    null != o && '' !== o
                        ? (0, r.jsx)(l.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              className: d.description,
                              children: o
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: d.body,
                        children: m
                    }),
                    null != t && '' !== t
                        ? (0, r.jsx)(l.Text, {
                              className: d.errorText,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: t
                          })
                        : null
                ]
            }),
            (0, r.jsxs)(l.mzw, {
                children: [
                    (0, r.jsx)(l.zxk, {
                        submitting: g,
                        className: d.button,
                        size: l.zxk.Sizes.SMALL,
                        color: l.zxk.Colors.BRAND,
                        onClick: x,
                        children: s.intl.string(s.t.R3BPHx)
                    }),
                    (0, r.jsx)(l.zxk, {
                        className: i()(d.cancelButton, d.button),
                        size: l.zxk.Sizes.SMALL,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: b,
                        children: s.intl.string(s.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
