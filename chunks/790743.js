i.d(a, { default: () => l }), i(321073);
var n = i(627968),
    s = i(64700),
    e = i(158954),
    r = i(985018);
function l(t) {
    let { transitionState: a, onClose: i, title: l, body: c, cta: o, closeLabel: u, onConfirm: d } = t,
        [p, h] = s.useState(!1),
        k = async () => {
            h(!0);
            try {
                await d(), i();
            } finally {
                h(!1);
            }
        },
        y = l ?? r.intl.string(r.t.D94rwS),
        C = [];
    return (
        null != u && C.push({ variant: "secondary", text: u, onClick: i }),
        C.push({ variant: "primary", text: o, onClick: k, loading: p }),
        (0, n.jsx)(e.Modal, { title: y, actions: C, transitionState: a, onClose: i, children: c })
    );
}
