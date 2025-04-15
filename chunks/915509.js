n.d(t, { Z: () => u }), n(953529), n(388685);
var r = n(200651),
    a = n(192379),
    o = n(120356),
    i = n.n(o),
    c = n(481060),
    l = n(313201),
    s = n(388032),
    d = n(98847);
function u(e) {
    let { errorText: t, title: n, description: o, transitionState: u, onCancel: b, onConfirm: p, children: m } = e,
        _ = (0, l.Dt)(),
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
    return (0, r.jsxs)(c.Y0X, {
        className: d.modal,
        transitionState: u,
        'aria-labelledby': _,
        size: c.CgR.SMALL,
        children: [
            (0, r.jsxs)(c.hzk, {
                className: d.modalContent,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-md/semibold',
                        id: _,
                        children: n
                    }),
                    null != o && '' !== o
                        ? (0, r.jsx)(c.Text, {
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
                        ? (0, r.jsx)(c.Text, {
                              className: d.errorText,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: t
                          })
                        : null
                ]
            }),
            (0, r.jsxs)(c.mzw, {
                children: [
                    (0, r.jsx)(c.zxk, {
                        submitting: g,
                        className: d.button,
                        size: c.zxk.Sizes.SMALL,
                        color: c.zxk.Colors.BRAND,
                        onClick: x,
                        children: s.NW.string(s.t.R3BPHx)
                    }),
                    (0, r.jsx)(c.zxk, {
                        className: i()(d.cancelButton, d.button),
                        size: c.zxk.Sizes.SMALL,
                        color: c.zxk.Colors.PRIMARY,
                        onClick: b,
                        children: s.NW.string(s.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
