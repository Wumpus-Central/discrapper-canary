(n.d(t, { Z: () => m }), n(953529), n(388685));
var l = n(255367),
    r = n(73800),
    o = n(120356),
    a = n.n(o),
    i = n(755721),
    c = n(481060),
    s = n(313201),
    d = n(388032),
    u = n(98847);
function m(e) {
    let { errorText: t, title: n, description: o, transitionState: m, onCancel: p, onConfirm: b, children: g } = e,
        h = (0, s.Dt)(),
        [x, _] = r.useState(!1),
        f = r.useCallback(async () => {
            _(!0);
            try {
                await b();
            } catch (e) {
                throw e;
            } finally {
                _(!1);
            }
        }, [b]);
    return (0, l.jsxs)(c.Y0X, {
        className: u.modal,
        transitionState: m,
        'aria-labelledby': h,
        size: c.CgR.SMALL,
        parentComponent: 'FormFieldEditModal',
        children: [
            (0, l.jsxs)(c.hzk, {
                className: u.modalContent,
                children: [
                    (0, l.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        id: h,
                        children: n
                    }),
                    null != o && '' !== o
                        ? (0, l.jsx)(c.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              className: u.description,
                              children: o
                          })
                        : null,
                    (0, l.jsx)('div', {
                        className: u.body,
                        children: g
                    }),
                    null != t && '' !== t
                        ? (0, l.jsx)(c.Text, {
                              className: u.errorText,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: t
                          })
                        : null
                ]
            }),
            (0, l.jsxs)(c.mzw, {
                children: [
                    (0, l.jsx)(i.zx, {
                        submitting: x,
                        className: u.button,
                        size: i.zx.Sizes.SMALL,
                        color: i.zx.Colors.BRAND,
                        onClick: f,
                        children: d.intl.string(d.t.R3BPHx)
                    }),
                    (0, l.jsx)(i.zx, {
                        className: a()(u.cancelButton, u.button),
                        size: i.zx.Sizes.SMALL,
                        color: i.zx.Colors.PRIMARY,
                        onClick: p,
                        children: d.intl.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
