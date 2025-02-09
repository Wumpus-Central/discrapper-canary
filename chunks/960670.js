e.d(n, { default: () => o }), e(47120);
var c = e(200651),
    i = e(192379),
    r = e(481060),
    a = e(388032),
    s = e(271553);
function o(t) {
    let { header: n, body: e, onSubmit: o, ...l } = t,
        [d, h] = i.useState(!1);
    return (0, c.jsxs)(r.ConfirmModal, {
        header: n,
        confirmText: a.intl.string(a.t['26C4oq']),
        cancelText: a.intl.string(a.t['ETE/oK']),
        onConfirm: () => {
            o(null, d);
        },
        ...l,
        children: [
            (0, c.jsx)(r.Text, {
                variant: 'text-md/normal',
                children: e
            }),
            (0, c.jsx)(r.XZJ, {
                type: r.XZJ.Types.INVERTED,
                value: d,
                onChange: () => h((t) => !t),
                className: s.checkbox,
                children: (0, c.jsx)(r.Text, {
                    variant: 'text-md/normal',
                    children: a.intl.string(a.t.bq3JXl)
                })
            })
        ]
    });
}
