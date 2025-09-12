i.d(n, { default: () => o }), i(388685);
var e = i(951288),
    a = i(647438),
    s = i(82659),
    l = i(481060),
    r = i(388032);
function o(t) {
    let { transitionState: n, onConfirm: i, onClose: o, onDismiss: c } = t,
        [d, u] = a.useState(!1),
        [h, b] = a.useState(!0),
        [g, p] = a.useState(!0);
    return (0, e.jsx)(s.Modal, {
        transitionState: n,
        onClose: o,
        title: r.intl.string(r.t["6rP+BQ"]),
        subtitle: r.intl.string(r.t["1LuCnZ"]),
        actions: [
            {
                variant: "secondary",
                text: r.intl.string(r.t["ETE/oK"]),
                onClick: () => {
                    c(), o();
                },
                disabled: d,
            },
            {
                text: r.intl.string(r.t["cY+Ooa"]),
                onClick: () => {
                    d || (u(!0), i(h, g), u(!1), o());
                },
                disabled: d,
                loading: d,
            },
        ],
        actionBarInput: (0, e.jsx)(l.XZJ, {
            checked: g,
            onChange: (t) => {
                p(t);
            },
            label: r.intl.string(r.t.KX8WJi),
            labelSize: "small",
        }),
        children: (0, e.jsx)(l.j7V, {
            hideBorder: !0,
            onChange: (t) => {
                b(t);
            },
            value: h,
            children: r.intl.string(r.t["zLb+u7"]),
        }),
    });
}
