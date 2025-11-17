e.d(n, { default: () => r }), e(388685);
var i = e(54381),
    s = e(473749),
    a = e(793030),
    l = e(481060),
    c = e(388032);
function r(t) {
    let { transitionState: n, onConfirm: e, onClose: r, onDismiss: o } = t,
        [d, u] = s.useState(!1),
        [b, h] = s.useState(!0),
        [C, k] = s.useState(!0);
    return (0, i.jsx)(a.Modal, {
        transitionState: n,
        onClose: r,
        title: c.intl.string(c.t["6rP+Bd"]),
        subtitle: c.intl.string(c.t["1LuCnS"]),
        actions: [
            {
                variant: "secondary",
                text: c.intl.string(c.t["ETE/oC"]),
                onClick: () => {
                    o(), r();
                },
                disabled: d,
            },
            {
                text: c.intl.string(c.t["cY+Oob"]),
                onClick: () => {
                    d || (u(!0), e(b, C), u(!1), r());
                },
                disabled: d,
                loading: d,
            },
        ],
        actionBarInput: (0, i.jsx)(l.Checkbox, {
            checked: C,
            onChange: (t) => {
                k(t);
            },
            label: c.intl.string(c.t.KX8WJm),
            labelType: "secondary",
        }),
        children: (0, i.jsx)(l.rsf, {
            label: c.intl.string(c.t["zLb+ux"]),
            checked: b,
            onChange: (t) => {
                h(t);
            },
        }),
    });
}
