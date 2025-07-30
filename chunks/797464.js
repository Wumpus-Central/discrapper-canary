(i.d(n, { default: () => o }), i(388685));
var e = i(255367),
    a = i(73800),
    s = i(82659),
    r = i(481060),
    l = i(388032);
function o(t) {
    let { transitionState: n, onConfirm: i, onClose: o, onDismiss: d } = t,
        [c, u] = a.useState(!1),
        [h, p] = a.useState(!0),
        [g, x] = a.useState(!0);
    return (0, e.jsx)(s.Modal, {
        transitionState: n,
        onClose: o,
        title: l.intl.string(l.t['6rP+BQ']),
        subtitle: l.intl.string(l.t['1LuCnZ']),
        actions: [
            {
                variant: 'secondary',
                text: l.intl.string(l.t['ETE/oK']),
                onClick: () => {
                    (d(), o());
                },
                disabled: c
            },
            {
                text: l.intl.string(l.t['cY+Ooa']),
                onClick: () => {
                    c || (u(!0), i(h, g), u(!1), o());
                },
                disabled: c,
                loading: c
            }
        ],
        actionBarInput: (0, e.jsx)(r.XZJ, {
            value: g,
            type: r.XZJ.Types.INVERTED,
            onChange: (t, n) => {
                x(n);
            },
            children: (0, e.jsx)(r.Text, {
                tag: 'span',
                variant: 'text-sm/normal',
                children: l.intl.string(l.t.KX8WJi)
            })
        }),
        children: (0, e.jsx)(r.j7V, {
            hideBorder: !0,
            onChange: (t) => {
                p(t);
            },
            value: h,
            children: l.intl.string(l.t['zLb+u7'])
        })
    });
}
