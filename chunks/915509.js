(n.d(t, { Z: () => s }), n(953529), n(388685));
var r = n(255367),
    l = n(73800),
    a = n(481060),
    i = n(313201),
    o = n(388032),
    c = n(98847);
function s(e) {
    let { errorText: t, title: n, description: s, transitionState: d, onCancel: u, onConfirm: p, children: m } = e,
        g = (0, i.Dt)(),
        [b, h] = l.useState(!1),
        x = l.useCallback(async () => {
            h(!0);
            try {
                await p();
            } catch (e) {
                throw e;
            } finally {
                h(!1);
            }
        }, [p]);
    return (0, r.jsxs)(a.Y0X, {
        className: c.modal,
        transitionState: d,
        'aria-labelledby': g,
        size: a.CgR.SMALL,
        parentComponent: 'FormFieldEditModal',
        children: [
            (0, r.jsxs)(a.hzk, {
                className: c.modalContent,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-md/semibold',
                        id: g,
                        children: n
                    }),
                    null != s && '' !== s
                        ? (0, r.jsx)(a.Text, {
                              variant: 'text-sm/normal',
                              color: 'header-secondary',
                              className: c.description,
                              children: s
                          })
                        : null,
                    (0, r.jsx)('div', {
                        className: c.body,
                        children: m
                    }),
                    null != t && '' !== t
                        ? (0, r.jsx)(a.Text, {
                              className: c.errorText,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: t
                          })
                        : null
                ]
            }),
            (0, r.jsx)(a.mzw, {
                children: (0, r.jsxs)(a.hE2, {
                    size: 'sm',
                    justify: 'end',
                    children: [
                        (0, r.jsx)(a.zxk, {
                            variant: 'secondary',
                            onClick: u,
                            text: o.intl.string(o.t['ETE/oK'])
                        }),
                        (0, r.jsx)(a.zxk, {
                            loading: b,
                            variant: 'primary',
                            onClick: x,
                            text: o.intl.string(o.t.R3BPHx)
                        })
                    ]
                })
            })
        ]
    });
}
