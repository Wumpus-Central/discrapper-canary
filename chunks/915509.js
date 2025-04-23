n.d(t, { Z: () => u }), n(953529), n(388685);
var l = n(200651),
    r = n(192379),
    o = n(120356),
    a = n.n(o),
    i = n(481060),
    c = n(313201),
    s = n(388032),
    d = n(98847);
function u(e) {
    let { errorText: t, title: n, description: o, transitionState: u, onCancel: m, onConfirm: p, children: b } = e,
        g = (0, c.Dt)(),
        [h, x] = r.useState(!1),
        _ = r.useCallback(async () => {
            x(!0);
            try {
                await p();
            } catch (e) {
                throw e;
            } finally {
                x(!1);
            }
        }, [p]);
    return (0, l.jsxs)(i.Y0X, {
        className: d.modal,
        transitionState: u,
        'aria-labelledby': g,
        size: i.CgR.SMALL,
        children: [
            (0, l.jsxs)(i.hzk, {
                className: d.modalContent,
                children: [
                    (0, l.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        id: g,
                        children: n
                    }),
                    null != o && '' !== o
                        ? (0, l.jsx)(i.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              className: d.description,
                              children: o
                          })
                        : null,
                    (0, l.jsx)('div', {
                        className: d.body,
                        children: b
                    }),
                    null != t && '' !== t
                        ? (0, l.jsx)(i.Text, {
                              className: d.errorText,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: t
                          })
                        : null
                ]
            }),
            (0, l.jsxs)(i.mzw, {
                children: [
                    (0, l.jsx)(i.zxk, {
                        submitting: h,
                        className: d.button,
                        size: i.zxk.Sizes.SMALL,
                        color: i.zxk.Colors.BRAND,
                        onClick: _,
                        children: s.intl.string(s.t.R3BPHx)
                    }),
                    (0, l.jsx)(i.zxk, {
                        className: a()(d.cancelButton, d.button),
                        size: i.zxk.Sizes.SMALL,
                        color: i.zxk.Colors.PRIMARY,
                        onClick: m,
                        children: s.intl.string(s.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
