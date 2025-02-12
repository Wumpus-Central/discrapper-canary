l.d(n, { Z: () => u }), l(47120);
var t = l(200651),
    a = l(192379),
    r = l(120356),
    i = l.n(r),
    o = l(481060),
    s = l(313201),
    c = l(388032),
    d = l(157073);
function u(e) {
    let { errorText: n, title: l, description: r, transitionState: u, onCancel: m, onConfirm: x, children: h } = e,
        g = (0, s.Dt)(),
        [p, _] = a.useState(!1),
        b = a.useCallback(async () => {
            _(!0);
            try {
                await x();
            } catch (e) {
                throw e;
            } finally {
                _(!1);
            }
        }, [x]);
    return (0, t.jsxs)(o.Y0X, {
        className: d.modal,
        transitionState: u,
        'aria-labelledby': g,
        size: o.CgR.SMALL,
        children: [
            (0, t.jsxs)(o.hzk, {
                className: d.modalContent,
                children: [
                    (0, t.jsx)(o.X6q, {
                        variant: 'heading-md/semibold',
                        id: g,
                        children: l
                    }),
                    null != r && '' !== r
                        ? (0, t.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              className: d.description,
                              children: r
                          })
                        : null,
                    (0, t.jsx)('div', {
                        className: d.body,
                        children: h
                    }),
                    null != n && '' !== n
                        ? (0, t.jsx)(o.Text, {
                              className: d.errorText,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: n
                          })
                        : null
                ]
            }),
            (0, t.jsxs)(o.mzw, {
                children: [
                    (0, t.jsx)(o.zxk, {
                        submitting: p,
                        className: d.button,
                        size: o.zxk.Sizes.SMALL,
                        color: o.zxk.Colors.BRAND,
                        onClick: b,
                        children: c.intl.string(c.t.R3BPHx)
                    }),
                    (0, t.jsx)(o.zxk, {
                        className: i()(d.cancelButton, d.button),
                        size: o.zxk.Sizes.SMALL,
                        color: o.zxk.Colors.PRIMARY,
                        onClick: m,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
