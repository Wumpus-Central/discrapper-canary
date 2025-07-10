(r.d(t, { Z: () => s }), r(953529), r(388685));
var n = r(255367),
    a = r(73800),
    i = r(481060),
    o = r(313201),
    l = r(388032),
    c = r(98847);
function s(e) {
    let { errorText: t, title: r, description: s, transitionState: d, onCancel: u, onConfirm: b, children: p } = e,
        m = (0, o.Dt)(),
        [y, _] = a.useState(!1),
        g = a.useCallback(async () => {
            _(!0);
            try {
                await b();
            } catch (e) {
                throw e;
            } finally {
                _(!1);
            }
        }, [b]);
    return (0, n.jsxs)(i.Y0X, {
        className: c.modal,
        transitionState: d,
        'aria-labelledby': m,
        size: i.CgR.SMALL,
        parentComponent: 'FormFieldEditModal',
        children: [
            (0, n.jsxs)(i.hzk, {
                className: c.modalContent,
                children: [
                    (0, n.jsx)(i.X6q, {
                        variant: 'heading-md/semibold',
                        id: m,
                        children: r
                    }),
                    null != s && '' !== s
                        ? (0, n.jsx)(i.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              className: c.description,
                              children: s
                          })
                        : null,
                    (0, n.jsx)('div', {
                        className: c.body,
                        children: p
                    }),
                    null != t && '' !== t
                        ? (0, n.jsx)(i.Text, {
                              className: c.errorText,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: t
                          })
                        : null
                ]
            }),
            (0, n.jsx)(i.mzw, {
                children: (0, n.jsxs)(i.hE2, {
                    size: 'sm',
                    justify: 'end',
                    children: [
                        (0, n.jsx)(i.zxk, {
                            variant: 'secondary',
                            onClick: u,
                            text: l.intl.string(l.t['ETE/oK'])
                        }),
                        (0, n.jsx)(i.zxk, {
                            loading: y,
                            variant: 'primary',
                            onClick: g,
                            text: l.intl.string(l.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
