s.d(e, { default: () => f }), s(896048);
var n = s(627968),
    i = s(64700),
    l = s(311907),
    a = s(397927),
    r = s(830215),
    o = s(631670),
    h = s(146634),
    d = s(592074),
    u = s(870570),
    g = s(752319),
    p = s(287809),
    c = s(446868),
    m = s(652215),
    C = s(985018);
let f = (t) => {
    let { transitionState: e, onClose: s } = t,
        f = (0, l.bG)([g.A], () => g.A.getErrors()),
        y = (0, l.bG)([g.A], () => g.A.getFormState()),
        v = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        E = (0, l.bG)([u.A], () => u.A.getAction()),
        b = !c.A.isEmailReverification(E),
        [k, A] = i.useState(!0),
        w = y === m.XlH.SUBMITTING;
    function P(t) {
        var e, s;
        return null != (e = null == f || null == (s = f[t]) ? void 0 : s[0]) ? e : "";
    }
    let R = P("email"),
        S = P("password");
    return (0, n.jsx)(h.A, {
        transitionState: e,
        email: null == v ? void 0 : v.email,
        emailError: R,
        passwordError: S,
        submitting: w,
        canResend: k && !w && (null == v ? void 0 : v.email) != null && 0 === R.length && 0 === S.length,
        canChange: b,
        onChangeEmailClick: function () {
            A(!1);
        },
        onVerify: function (t, e) {
            (0, o.yu)({
                email: t,
                password: e,
            }).then((t) => {
                if (!(null == t ? void 0 : t.ok)) {
                    var e;
                    (null == t || null == (e = t.body) ? void 0 : e.username) != null
                        ? (0, d.E)()
                        : 0 === S.length &&
                          0 === R.length &&
                          (0, a.showToast)((0, a.createToast)(C.intl.string(C.t.R0RpRX), a.ToastType.FAILURE));
                }
            }),
                A(!0);
        },
        onResend: function () {
            r.A.verifyResend();
        },
        onClose: s,
    });
};
