t.d(n, {
    Z: function () {
        return u;
    }
}),
    t(47120);
var l = t(200651),
    a = t(192379),
    o = t(120356),
    r = t.n(o),
    i = t(481060),
    s = t(313201),
    c = t(388032),
    d = t(945330);
function u(e) {
    let { errorText: n, title: t, description: o, transitionState: u, onCancel: f, onConfirm: m, children: g } = e,
        h = (0, s.Dt)(),
        [p, x] = a.useState(!1),
        C = a.useCallback(async () => {
            x(!0);
            try {
                await m();
            } catch (e) {
                throw e;
            } finally {
                x(!1);
            }
        }, [m]);
    return (0, l.jsxs)(i.ModalRoot, {
        className: d.modal,
        transitionState: u,
        'aria-labelledby': h,
        size: i.ModalSize.SMALL,
        children: [
            (0, l.jsxs)(i.ModalContent, {
                className: d.modalContent,
                children: [
                    (0, l.jsx)(i.Heading, {
                        variant: 'heading-md/semibold',
                        id: h,
                        children: t
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
                        children: g
                    }),
                    null != n && '' !== n
                        ? (0, l.jsx)(i.Text, {
                              className: d.errorText,
                              variant: 'text-xs/normal',
                              color: 'text-danger',
                              children: n
                          })
                        : null
                ]
            }),
            (0, l.jsxs)(i.ModalFooter, {
                children: [
                    (0, l.jsx)(i.Button, {
                        submitting: p,
                        className: d.button,
                        size: i.Button.Sizes.SMALL,
                        color: i.Button.Colors.BRAND,
                        onClick: C,
                        children: c.intl.string(c.t.R3BPHx)
                    }),
                    (0, l.jsx)(i.Button, {
                        className: r()(d.cancelButton, d.button),
                        size: i.Button.Sizes.SMALL,
                        color: i.Button.Colors.PRIMARY,
                        onClick: f,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
