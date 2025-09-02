i.d(n, { default: () => d }), i(388685);
var e = i(951288),
    a = i(647438),
    s = i(82659),
    r = i(755721),
    l = i(481060),
    o = i(388032);
function d(t) {
    let { transitionState: n, onConfirm: i, onClose: d, onDismiss: c } = t,
        [u, h] = a.useState(!1),
        [p, g] = a.useState(!0),
        [x, C] = a.useState(!0);
    return (0, e.jsx)(s.Modal, {
        transitionState: n,
        onClose: d,
        title: o.intl.string(o.t["6rP+BQ"]),
        subtitle: o.intl.string(o.t["1LuCnZ"]),
        actions: [
            {
                variant: "secondary",
                text: o.intl.string(o.t["ETE/oK"]),
                onClick: () => {
                    c(), d();
                },
                disabled: u,
            },
            {
                text: o.intl.string(o.t["cY+Ooa"]),
                onClick: () => {
                    u || (h(!0), i(p, x), h(!1), d());
                },
                disabled: u,
                loading: u,
            },
        ],
        actionBarInput: (0, e.jsx)(r.$q, {
            value: x,
            type: r.M0.INVERTED,
            onChange: (t, n) => {
                C(n);
            },
            children: (0, e.jsx)(l.Text, {
                tag: "span",
                variant: "text-sm/normal",
                children: o.intl.string(o.t.KX8WJi),
            }),
        }),
        children: (0, e.jsx)(l.j7V, {
            hideBorder: !0,
            onChange: (t) => {
                g(t);
            },
            value: p,
            children: o.intl.string(o.t["zLb+u7"]),
        }),
    });
}
