n.d(t, { A: () => h, S: () => A });
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(189213),
    o = n(311907),
    d = n(139033),
    u = n(192308),
    c = n(821609),
    g = n(830215),
    m = n(287809),
    _ = n(985018);
function A(e) {
    return g.A.verifyResend()
        .then(() => {
            (0, d.A)({ title: _.intl.string(_.t.LykQYk), subtitle: _.intl.format(_.t.azKEPy, { email: e.email }) });
        })
        .catch((e) => {
            let { body: t } = e,
                n = _.intl.string(_.t.XcrQN5);
            null != t && t.email && (n = t.email),
                (0, u.openModal)((e) =>
                    (0, i.jsx)(r.Modal, {
                        actions: [{ variant: "primary", text: _.intl.string(_.t.BddRzS), onClick: e.onClose }],
                        title: _.intl.string(_.t.VbTh0E),
                        subtitle: n,
                        ...e,
                    }),
                );
        });
}
function h(e) {
    let { size: t, variant: n } = e,
        l = (0, o.bG)([m.default], () => m.default.getCurrentUser());
    a()(null != l, "ResendEmailVerificationButton: currentUser cannot be undefined");
    let [r, d] = s.useState(!1),
        u = s.useCallback(() => {
            d(!0), A(l).then(() => d(!1));
        }, [l]);
    return (0, i.jsx)(c.$, { size: t, variant: n, onClick: u, text: _.intl.string(_.t.lm1UKt), disabled: r });
}
