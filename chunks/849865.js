e.d(i, { Email: () => E });
var r = e(529058),
    a = e(287822),
    s = e(748922),
    n = e(898159),
    l = e(898369),
    o = e(188043),
    d = e(787146),
    u = e(138326),
    m = e(296767),
    p = e(915192),
    v = e(119621);
function c(t) {
    return "invalidEmail" === t ? "verification.errors.emailInvalid" : "serverError" === t ? "email.serverError" : t;
}
var g = ({ config: t, manager: i, onFinish: e, onError: n }) => {
        let { t: m } = (0, r.n)(),
            [g, E] = (0, s.u)(
                () => {
                    if (i) return i;
                    if (!t) throw Error("Email config is required");
                    return (0, v.k)({ config: t });
                },
                { manageLifecycle: !i },
            ),
            [h, f] = (0, a.p)("");
        (0, s.c)({ status: g.status, onFinish: e, onError: n, error: "error" === g.status ? g.error : void 0 });
        let O = "inputting" === g.status ? (g.prefilledEmail ?? "") : "";
        if (
            ((0, a._)(() => {
                if (O) {
                    let t = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(O.trim());
                    f(O.trim()), E.setEmail(O.trim(), t);
                }
            }, [O, E]),
            "idle" === g.status ||
                "loadingPrefill" === g.status ||
                "inputting" === g.status ||
                "submitting" === g.status ||
                "sendingInitialOtp" === g.status)
        ) {
            let t =
                    "idle" === g.status ||
                    "loadingPrefill" === g.status ||
                    "submitting" === g.status ||
                    "sendingInitialOtp" === g.status,
                i = "inputting" === g.status && g.emailError ? m(c(g.emailError)) : void 0,
                e = "inputting" === g.status && g.validationErrors?.email ? m(c(g.validationErrors.email)) : void 0,
                r = "inputting" !== g.status || g.isValid;
            return (0, a.v)(
                o.t,
                {
                    className: "IncodeEmailPage",
                    title: m("email.verify"),
                    subtitle: m("email.willSendCode"),
                    children: [
                        (0, a.v)(p.t, {
                            value: h,
                            emailError: i ?? e,
                            disabled: t,
                            required: !0,
                            onEmailChange: (t, i) => {
                                E.setEmail(t, i), f(t);
                            },
                            onBlur: () => {
                                E.validateEmail();
                            },
                        }),
                        (0, a.v)(l.r, {}),
                        (0, a.v)(d.t, {
                            onClick: () => E.submit(),
                            disabled: !r,
                            isLoading: t,
                            "data-testid": "email-submit",
                            children: m("common.continue"),
                        }),
                    ],
                },
                "email-input",
            );
        }
        if (
            "awaitingOtp" === g.status ||
            "verifyingOtp" === g.status ||
            "otpError" === g.status ||
            "resendingOtp" === g.status
        ) {
            var b;
            let t = "verifyingOtp" === g.status,
                i = "otpError" === g.status,
                e = "awaitingOtp" === g.status,
                r = "resendingOtp" === g.status,
                s = e || i || t;
            return (0, a.v)(
                o.t,
                {
                    className: "IncodeEmailPage IncodeEmailOtpPage",
                    title: m("otp.enterCodeEmail"),
                    children: (0, a.v)(u.t, {
                        value: g.otpCode,
                        otpLength: g.otpLength,
                        resendTimer: s ? g.resendTimer : 0,
                        canResend: !!s && g.canResend,
                        error: i ? m("serverError" === (b = g.otpError) ? "email.serverError" : b) : void 0,
                        validationError:
                            "otpValidationErrors" in g && g.otpValidationErrors?.otp
                                ? m("otp.incompleteCode", { length: g.otpLength })
                                : void 0,
                        isValid: !("isOtpValid" in g) || g.isOtpValid,
                        isLoading: t,
                        disabled: r || t,
                        onSubmit: (t) => E.submitOtp(t),
                        onChange: (t) => E.setOtpCode(t),
                        onValidate: () => E.validateOtp(),
                        onResend: () => E.resendOtp(),
                        onBack: () => E.back(),
                        backLinkText: "otp.changeEmail",
                    }),
                },
                "email-otp",
            );
        }
        return (0, s.s)(g), null;
    },
    E = ({ config: t, manager: i, onFinish: e, onError: r }) =>
        (0, a.v)(n.t, { children: t || i ? (0, a.v)(g, { config: t, manager: i, onFinish: e, onError: r }) : null });
(0, m.t)(E, "incode-email");
