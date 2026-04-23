n.d(e, { A: () => b, S: () => k });
var i = n(627968),
    a = n(64700),
    l = n(284009),
    r = n.n(l),
    s = n(189213),
    d = n(17928),
    o = n(139033),
    u = n(192308),
    c = n(821609),
    m = n(830215),
    f = n(287809),
    g = n(985018);
function k(t) {
    return m.A.verifyResend()
        .then(() => {
            (0, o.A)({ title: g.intl.string(g.t.LykQYk), subtitle: g.intl.format(g.t.azKEPy, { email: t.email }) });
        })
        .catch((t) => {
            let { body: e } = t,
                n = g.intl.string(g.t.XcrQN5);
            null != e && e.email && (n = e.email),
                (0, u.openModal)((t) =>
                    (0, i.jsx)(s.Modal, {
                        actions: [{ variant: "primary", text: g.intl.string(g.t.BddRzS), onClick: t.onClose }],
                        title: g.intl.string(g.t.VbTh0E),
                        subtitle: n,
                        ...t,
                    }),
                );
        });
}
function b(t) {
    let { size: e, variant: n } = t,
        l = (0, d.bG)([f.default], () => f.default.getCurrentUser());
    r()(null != l, "ResendEmailVerificationButton: currentUser cannot be undefined");
    let [s, o] = a.useState(!1),
        u = a.useCallback(() => {
            o(!0), k(l).then(() => o(!1));
        }, [l]);
    return (0, i.jsx)(c.$, { size: e, variant: n, onClick: u, text: g.intl.string(g.t.lm1UKt), disabled: s });
}
