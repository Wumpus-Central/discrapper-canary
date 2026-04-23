s.d(e, { default: () => k });
var n = s(627968),
    i = s(64700),
    a = s(311907),
    l = s(691540),
    r = s(857250),
    o = s(97483),
    h = s(830215),
    d = s(631670),
    g = s(146634),
    c = s(836602),
    p = s(828578),
    u = s(870570),
    C = s(287809),
    m = s(446868),
    f = s(652215),
    E = s(985018);
let k = (t) => {
    let { transitionState: e, onClose: s } = t,
        { formState: k, errors: y } = (0, a.cf)([c.A], () => ({
            formState: c.A.getFormState(),
            errors: c.A.getErrors(),
        })),
        b = (0, a.bG)([C.default], () => C.default.getCurrentUser()),
        A = (0, a.bG)([u.A], () => u.A.getAction()),
        R = !m.A.isEmailReverification(A),
        [v, P] = i.useState(!0),
        S = k === f.XlH.SUBMITTING;
    function w(t) {
        return y?.[t]?.[0] ?? "";
    }
    let x = w("email"),
        I = w("password");
    return (0, n.jsx)(g.A, {
        transitionState: e,
        email: b?.email,
        emailError: x,
        passwordError: I,
        submitting: S,
        canResend: v && !S && b?.email != null && 0 === x.length && 0 === I.length,
        canChange: R,
        onChangeEmailClick: function () {
            P(!1);
        },
        onVerify: function (t, e) {
            (0, d._L)({ email: t, password: e }).then((t) => {
                t?.ok ||
                    (t?.body?.username != null
                        ? (0, p.E)()
                        : 0 === I.length &&
                          0 === x.length &&
                          (0, l.P0)((0, r.o)(E.intl.string(E.t.R0RpRX), o.Ck.FAILURE)));
            }),
                P(!0);
        },
        onResend: function () {
            h.A.verifyResend();
        },
        onClose: s,
    });
};
