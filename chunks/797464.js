e.d(n, { default: () => o }), e(388685);
var i = e(951288),
    a = e(647438),
    s = e(793030),
    l = e(481060),
    r = e(388032);
function o(t) {
    let { transitionState: n, onConfirm: e, onClose: o, onDismiss: c } = t,
        [d, u] = a.useState(!1),
        [h, p] = a.useState(!0),
        [b, g] = a.useState(!0);
    return (0, i.jsx)(s.Modal, {
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
                    d || (u(!0), e(h, b), u(!1), o());
                },
                disabled: d,
                loading: d,
            },
        ],
        actionBarInput: (0, i.jsx)(l.XZJ, {
            checked: b,
            onChange: (t) => {
                g(t);
            },
            label: r.intl.string(r.t.KX8WJi),
            labelType: "secondary",
        }),
        children: (0, i.jsx)(l.j7V, {
            hideBorder: !0,
            onChange: (t) => {
                p(t);
            },
            value: h,
            children: r.intl.string(r.t["zLb+u7"]),
        }),
    });
}
