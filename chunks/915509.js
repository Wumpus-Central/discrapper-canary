(n.d(t, { Z: () => b }), n(953529), n(388685));
var r = n(255367),
    a = n(73800),
    o = n(120356),
    i = n.n(o),
    l = n(755721),
    c = n(481060),
    s = n(313201),
    d = n(388032),
    u = n(98847);
function b(e) {
    let { errorText: t, title: n, description: o, transitionState: b, onCancel: p, onConfirm: m, children: _ } = e,
        g = (0, s.Dt)(),
        [y, x] = a.useState(!1),
        h = a.useCallback(async () => {
            x(!0);
            try {
                await m();
            } catch (e) {
                throw e;
            } finally {
                x(!1);
            }
        }, [m]);
    return (0, r.jsxs)(c.Y0X, {
        className: u.modal,
        transitionState: b,
        'aria-labelledby': g,
        size: c.CgR.SMALL,
        parentComponent: 'FormFieldEditModal',
        children: [
            (0, r.jsxs)(c.hzk, {
                className: u.modalContent,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        id: g,
                        children: n
                    }),
                    null != o && '' !== o
                        ? (0, r.jsx)(c.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              className: u.description,
                              children: o
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: u.body,
                        children: _
                    }),
                    null != t && '' !== t
                        ? (0, r.jsx)(c.Text, {
                              className: u.errorText,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: t
                          })
                        : null
                ]
            }),
            (0, r.jsxs)(c.mzw, {
                children: [
                    (0, r.jsx)(l.zx, {
                        submitting: y,
                        className: u.button,
                        size: l.zx.Sizes.SMALL,
                        color: l.zx.Colors.BRAND,
                        onClick: h,
                        children: d.intl.string(d.t.R3BPHx)
                    }),
                    (0, r.jsx)(l.zx, {
                        className: i()(u.cancelButton, u.button),
                        size: l.zx.Sizes.SMALL,
                        color: l.zx.Colors.PRIMARY,
                        onClick: p,
                        children: d.intl.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
