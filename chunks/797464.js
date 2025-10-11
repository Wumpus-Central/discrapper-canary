e.d(n, { default: () => r }), e(388685);
var i = e(951288),
    s = e(647438),
    a = e(793030),
    l = e(481060),
    c = e(388032);
function r(t) {
    let { transitionState: n, onConfirm: e, onClose: r, onDismiss: o } = t,
        [d, u] = s.useState(!1),
        [h, b] = s.useState(!0),
        [k, p] = s.useState(!0);
    return (0, i.jsx)(a.Modal, {
        transitionState: n,
        onClose: r,
        title: c.intl.string(c.t["6rP+BQ"]),
        subtitle: c.intl.string(c.t["1LuCnZ"]),
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oK"]),
                onClick: () => {
                    o(), r();
                },
                disabled: d,
            },
            {
                text: c.intl.string(c.t["cY+Ooa"]),
                onClick: () => {
                    d || (u(!0), e(h, k), u(!1), r());
                },
                disabled: d,
                loading: d,
            },
        ],
        actionBarInput: (0, i.jsx)(l.Checkbox, {
            checked: k,
            onChange: (t) => {
                p(t);
            },
            label: c.intl.string(c.t.KX8WJi),
            labelType: "secondary",
        }),
        children: (0, i.jsx)(l.rsf, {
            label: c.intl.string(c.t["zLb+u7"]),
            checked: h,
            onChange: (t) => {
                b(t);
            },
        }),
    });
}
