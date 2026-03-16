n.d(t, { A: () => A, S: () => g });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(158954),
    o = n(311907),
    d = n(139033),
    c = n(397927),
    u = n(830215),
    _ = n(287809),
    m = n(985018);
function g(e) {
    return u.A.verifyResend()
        .then(() => {
            (0, d.A)({ title: m.intl.string(m.t.LykQYk), subtitle: m.intl.format(m.t.azKEPy, { email: e.email }) });
        })
        .catch((e) => {
            let { body: t } = e,
                n = m.intl.string(m.t.XcrQN5);
            null != t && t.email && (n = t.email),
                (0, c.qfG)((e) =>
                    (0, i.jsx)(r.Modal, {
                        actions: [{ variant: "primary", text: m.intl.string(m.t.BddRzS), onClick: e.onClose }],
                        title: m.intl.string(m.t.VbTh0E),
                        subtitle: n,
                        ...e,
                    }),
                );
        });
}
function A(e) {
    let { size: t, variant: n } = e,
        l = (0, o.bG)([_.default], () => _.default.getCurrentUser());
    a()(null != l, "ResendEmailVerificationButton: currentUser cannot be undefined");
    let [r, d] = s.useState(!1),
        u = s.useCallback(() => {
            d(!0), g(l).then(() => d(!1));
        }, [l]);
    return (0, i.jsx)(c.Button, { size: t, variant: n, onClick: u, text: m.intl.string(m.t.lm1UKt), disabled: r });
}
