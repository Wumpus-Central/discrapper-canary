n.d(i, { default: () => r }), n(321073);
var a = n(627968),
    e = n(64700),
    s = n(189213),
    l = n(375708);
function r(t) {
    let { transitionState: i, onClose: n, title: r, body: c, cta: o, closeLabel: u, onConfirm: d } = t,
        [p, h] = e.useState(!1);
    async function k() {
        h(!0);
        try {
            await d(), n();
        } finally {
            h(!1);
        }
    }
    let y = r ?? l.intl.string(l.t.D94rwS),
        C = [];
    return (
        null != u && C.push({ variant: "secondary", text: u, onClick: n }),
        C.push({ variant: "primary", text: o, onClick: k, loading: p }),
        (0, a.jsx)(s.Modal, { title: y, actions: C, transitionState: i, onClose: n, children: c })
    );
}
