s.d(e, { default: () => f });
var n = s(627968),
    i = s(64700),
    a = s(311907),
    l = s(397927),
    r = s(830215),
    o = s(631670),
    h = s(146634),
    d = s(836602),
    g = s(592074),
    p = s(870570),
    u = s(287809),
    c = s(446868),
    m = s(652215),
    C = s(985018);
let f = (t) => {
    let { transitionState: e, onClose: s } = t,
        { formState: f, errors: y } = (0, a.cf)([d.A], () => ({
            formState: d.A.getFormState(),
            errors: d.A.getErrors(),
        })),
        E = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        k = (0, a.bG)([p.A], () => p.A.getAction()),
        A = !c.A.isEmailReverification(k),
        [w, R] = i.useState(!0),
        S = f === m.XlH.SUBMITTING;
    function b(t) {
        return y?.[t]?.[0] ?? "";
    }
    let v = b("email"),
        P = b("password");
    return (0, n.jsx)(h.A, {
        transitionState: e,
        email: E?.email,
        emailError: v,
        passwordError: P,
        submitting: S,
        canResend: w && !S && E?.email != null && 0 === v.length && 0 === P.length,
        canChange: A,
        onChangeEmailClick: function () {
            R(!1);
        },
        onVerify: function (t, e) {
            (0, o.yu)({ email: t, password: e }).then((t) => {
                t?.ok ||
                    (t?.body?.username != null
                        ? (0, g.E)()
                        : 0 === P.length &&
                          0 === v.length &&
                          (0, l.showToast)((0, l.createToast)(C.intl.string(C.t.R0RpRX), l.ToastType.FAILURE)));
            }),
                R(!0);
        },
        onResend: function () {
            r.A.verifyResend();
        },
        onClose: s,
    });
};
