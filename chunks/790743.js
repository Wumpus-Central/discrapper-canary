(n.d(i, { default: () => l }), n(321073));
var a = n(477900),
    e = n(582128),
    s = n(189213),
    r = n(375708);
function l(t) {
    let { transitionState: i, onClose: n, title: l, body: c, cta: o, closeLabel: u, onConfirm: p } = t,
        [d, h] = e.useState(!1);
    async function k() {
        h(!0);
        try {
            (await p(), n());
        } finally {
            h(!1);
        }
    }
    let y = l ?? r.intl.string(r.t.D94rwS),
        C = [];
    return (
        null != u && C.push({ variant: "secondary", text: u, onClick: n }),
        C.push({ variant: "primary", text: o, onClick: k, loading: d }),
        (0, a.jsx)(s.a, { title: y, actions: C, transitionState: i, onClose: n, children: c })
    );
}
