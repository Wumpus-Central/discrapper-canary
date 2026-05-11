n.d(e, { A: () => f, S: () => p });
var i = n(627968),
    l = n(64700),
    a = n(284009),
    r = n.n(a),
    s = n(189213),
    u = n(17928),
    c = n(139033),
    d = n(192308),
    o = n(821609),
    b = n(830215),
    h = n(287809),
    k = n(375708);
function p(t) {
    return b.A.verifyResend()
        .then(() => {
            (0, c.A)({ title: k.intl.string(k.t.LykQYk), subtitle: k.intl.format(k.t.azKEPy, { email: t.email }) });
        })
        .catch((t) => {
            let { body: e } = t,
                n = k.intl.string(k.t.XcrQN5);
            null != e && e.email && (n = e.email),
                (0, d.openModal)((t) =>
                    (0, i.jsx)(s.Modal, {
                        actions: [{ variant: "primary", text: k.intl.string(k.t.BddRzS), onClick: t.onClose }],
                        title: k.intl.string(k.t.VbTh0E),
                        subtitle: n,
                        ...t,
                    }),
                );
        });
}
function f(t) {
    let { size: e, variant: n } = t,
        a = (0, u.bG)([h.default], () => h.default.getCurrentUser());
    r()(null != a, "ResendEmailVerificationButton: currentUser cannot be undefined");
    let [s, c] = l.useState(!1),
        d = l.useCallback(() => {
            c(!0), p(a).then(() => c(!1));
        }, [a]);
    return (0, i.jsx)(o.$, { size: e, variant: n, onClick: d, text: k.intl.string(k.t.lm1UKt), disabled: s });
}
