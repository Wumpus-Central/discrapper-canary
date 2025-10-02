e.d(n, { default: () => c }), e(388685);
var i = e(951288),
    s = e(647438),
    a = e(793030),
    l = e(481060),
    r = e(388032);
function c(t) {
    let { transitionState: n, onConfirm: e, onClose: c, onDismiss: o } = t,
        [d, u] = s.useState(!1),
        [h, b] = s.useState(!0),
        [p, g] = s.useState(!0);
    return (0, i.jsx)(a.Modal, {
        transitionState: n,
        onClose: c,
        title: r.intl.string(r.t["6rP+BQ"]),
        subtitle: r.intl.string(r.t["1LuCnZ"]),
        actions: [
            {
                variant: "secondary",
                text: r.intl.string(r.t["ETE/oK"]),
                onClick: () => {
                    o(), c();
                },
                disabled: d,
            },
            {
                text: r.intl.string(r.t["cY+Ooa"]),
                onClick: () => {
                    d || (u(!0), e(h, p), u(!1), c());
                },
                disabled: d,
                loading: d,
            },
        ],
        actionBarInput: (0, i.jsx)(l.XZJ, {
            checked: p,
            onChange: (t) => {
                g(t);
            },
            label: r.intl.string(r.t.KX8WJi),
            labelType: "secondary",
        }),
        children: (0, i.jsx)(l.rsf, {
            label: r.intl.string(r.t["zLb+u7"]),
            checked: h,
            onChange: (t) => {
                b(t);
            },
        }),
    });
}
