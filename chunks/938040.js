r.d(e, { Y: () => I, phoneMachine: () => O });
var n = r(871178),
    o = r(768672),
    i = r(368499),
    a = r(288052),
    s = r(168056),
    d = r(269511);
function p(t, e) {
    return t.status === e ? "invalidPhone" : "serverError";
}
async function c(t) {
    let e = await o.t.get(a.t.getPhone, { signal: t });
    if (!e.ok) throw Error(`GET ${a.t.getPhone} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function l(t) {
    let e = await o.t.get(a.t.startInfo, { signal: t });
    if (!e.ok) throw Error(`GET ${a.t.startInfo} failed: ${e.status} ${e.statusText}`);
    return e.data;
}
async function g(t, e) {
    try {
        return (await o.t.post(a.t.phone, { phone: t.phone, optInGranted: t.optInGranted }, { signal: e })).data;
    } catch (t) {
        throw Error(p(t, 400));
    }
}
async function h(t, e) {
    try {
        return (await o.t.post(a.t.phoneInstant, { phone: t.phone, optInGranted: t.optInGranted }, { signal: e })).data;
    } catch (t) {
        throw Error(p(t, 400));
    }
}
async function u(t) {
    try {
        await o.t.get(`${a.t.sendSmsOtp}?communicationchannel=SMS`, { signal: t });
    } catch (t) {
        throw Error(p(t));
    }
}
async function m(t, e) {
    try {
        return (await o.t.get(`${a.t.compareOtp}?code=${t}&channel=SMS`, { signal: e })).data;
    } catch (t) {
        throw Error(p(t));
    }
}
function f(t) {
    return t instanceof Error ? t.message : String(t);
}
function E(t) {
    return 0 !== t.phone.trim().length && t.isValid ? {} : { phone: "invalidPhone" };
}
let O = (0, s.t)({
    types: { context: {}, events: {}, input: {} },
    actors: {
        fetchPhone: (0, s.a)(async ({ signal: t }) => c(t)),
        fetchStartInfo: (0, s.a)(async ({ signal: t }) => l(t)),
        submitPhone: (0, s.a)(async ({ input: t, signal: e }) =>
            t.isInstantVerify
                ? h({ phone: t.phone, optInGranted: t.optInGranted }, e)
                : g({ phone: t.phone, optInGranted: t.optInGranted }, e),
        ),
        sendOtp: (0, s.a)(async ({ signal: t }) => u(t)),
        verifyOtp: (0, s.a)(async ({ input: t, signal: e }) => m(t.code, e)),
        resendTimer: (0, s.i)(({ input: t, sendBack: e }) => {
            let r = n.t.getInstance(),
                o = t.seconds;
            if (o <= 0) return () => {};
            let i = r.setInterval(() => {
                e({ type: "TICK" }), (o -= 1) <= 0 && r.clearInterval(i);
            }, 1e3);
            return () => r.clearInterval(i);
        }),
    },
    actions: {
        setStartInfo: (0, s.r)(({ event: t }) => {
            let e = t.output;
            return { startInfo: e, countryCode: e.ipIsoCode, phonePrefix: e.phonePrefix };
        }),
        setPrefilledPhone: (0, s.r)(({ event: t }) => {
            let e = t.output.phone;
            return { prefilledPhone: e, phone: e };
        }),
        setPhone: (0, s.r)(({ event: t }) => ({
            phone: t.phone,
            isValid: t.isValid,
            phoneError: void 0,
            validationErrors: void 0,
        })),
        validatePhoneField: (0, s.r)(({ context: t }) => {
            let e = E(t);
            return { validationErrors: e.phone ? e : void 0 };
        }),
        computeValidationResult: (0, s.r)(({ context: t }) => {
            let e = E(t);
            return { validationErrors: e.phone ? e : void 0 };
        }),
        setPhoneError: (0, s.r)(({ event: t }) => ({ phoneError: f(t.error) })),
        setOptInGranted: (0, s.r)(({ event: t }) => ({ optInGranted: t.granted })),
        setError: (0, s.r)(({ event: t }) => ({ error: f(t.error) })),
        clearError: (0, s.r)({ error: () => void 0 }),
        clearPhoneError: (0, s.r)({ phoneError: () => void 0 }),
        setOtpCode: (0, s.r)(({ event: t }) => ({ otpCode: t.code, otpError: void 0, otpValidationErrors: void 0 })),
        validateOtpField: (0, s.r)(({ context: t }) => {
            let e = (0, d.n)(t.otpCode);
            return { otpValidationErrors: e.otp ? e : void 0 };
        }),
        setOtpError: (0, s.r)(({ context: t, event: e }) => ({
            otpError: f(e.error),
            attemptsRemaining: t.attemptsRemaining - 1,
        })),
        setOtpRequestError: (0, s.r)(({ event: t }) => ({ otpError: f(t.error) })),
        clearOtpError: (0, s.r)({ otpError: () => void 0, otpCode: () => "", otpValidationErrors: () => void 0 }),
        startResendTimer: (0, s.r)({ resendTimer: () => 30, resendTimerActive: () => !0 }),
        tickResendTimer: (0, s.r)(({ context: t }) => {
            let e = Math.max(0, t.resendTimer - 1);
            return { resendTimer: e, resendTimerActive: e > 0 };
        }),
        resetContext: (0, s.r)(({ context: t }) => ({
            config: t.config,
            phone: "",
            isValid: !1,
            phoneError: void 0,
            validationErrors: void 0,
            countryCode: "",
            phonePrefix: "",
            prefilledPhone: void 0,
            optInGranted: !1,
            startInfo: void 0,
            error: void 0,
            otpCode: "",
            otpError: void 0,
            otpValidationErrors: void 0,
            attemptsRemaining: t.config.maxOtpAttempts ?? 3,
            resendTimer: 0,
            resendTimerActive: !1,
        })),
    },
    guards: {
        hasPrefill: ({ context: t }) => t.config.prefill,
        hasOtpVerification: ({ context: t }) => t.config.otpVerification,
        hasNoValidationErrors: ({ context: t }) => !t.validationErrors || 0 === Object.keys(t.validationErrors).length,
        hasAttemptsRemaining: ({ context: t }) => t.attemptsRemaining > 1,
        hasCompleteOtp: ({ context: t }) => (0, d.r)(t.otpCode),
        canResend: ({ context: t }) => !t.resendTimerActive,
    },
}).createMachine({
    id: "phone",
    initial: "idle",
    context: ({ input: t }) => ({
        config: t.config,
        phone: "",
        isValid: !1,
        phoneError: void 0,
        validationErrors: void 0,
        countryCode: "",
        phonePrefix: "",
        prefilledPhone: void 0,
        optInGranted: !1,
        startInfo: void 0,
        error: void 0,
        otpCode: "",
        otpError: void 0,
        otpValidationErrors: void 0,
        attemptsRemaining: t.config.maxOtpAttempts ?? 3,
        resendTimer: 0,
        resendTimerActive: !1,
    }),
    states: {
        idle: { on: { LOAD: [{ target: "loadingPrefill", guard: "hasPrefill" }, { target: "loadingStartInfo" }] } },
        loadingPrefill: {
            invoke: {
                id: "fetchPhone",
                src: "fetchPhone",
                onDone: { target: "loadingStartInfo", actions: "setPrefilledPhone" },
                onError: { target: "loadingStartInfo" },
            },
        },
        loadingStartInfo: {
            invoke: {
                id: "fetchStartInfo",
                src: "fetchStartInfo",
                onDone: { target: "inputting", actions: "setStartInfo" },
                onError: { target: "inputting" },
            },
        },
        inputting: {
            on: {
                PHONE_CHANGED: { actions: "setPhone" },
                OPT_IN_CHANGED: { actions: "setOptInGranted" },
                VALIDATE_PHONE: { actions: "validatePhoneField" },
                SUBMIT: { target: "validatingSubmit" },
            },
        },
        validatingSubmit: {
            entry: "computeValidationResult",
            always: [
                { guard: "hasNoValidationErrors", target: "submitting", actions: "clearPhoneError" },
                { target: "inputting" },
            ],
        },
        submitting: {
            invoke: {
                id: "submitPhone",
                src: "submitPhone",
                input: ({ context: t }) => ({
                    phone: t.phone,
                    optInGranted: t.config.optinEnabled ? t.optInGranted : void 0,
                    isInstantVerify: t.config.isInstantVerify ?? !1,
                }),
                onDone: [{ target: "sendingInitialOtp", guard: "hasOtpVerification" }, { target: "finished" }],
                onError: { target: "inputting", actions: "setPhoneError" },
            },
        },
        sendingInitialOtp: {
            invoke: {
                id: "sendOtp",
                src: "sendOtp",
                onDone: { target: "awaitingOtp", actions: "startResendTimer" },
                onError: { target: "otpError", actions: ["setOtpRequestError", "startResendTimer"] },
            },
        },
        resendingOtp: {
            invoke: {
                id: "sendOtp",
                src: "sendOtp",
                onDone: { target: "awaitingOtp", actions: "startResendTimer" },
                onError: { target: "otpError", actions: ["setOtpRequestError", "startResendTimer"] },
            },
        },
        awaitingOtp: {
            invoke: { id: "resendTimer", src: "resendTimer", input: ({ context: t }) => ({ seconds: t.resendTimer }) },
            on: {
                TICK: { actions: "tickResendTimer" },
                OTP_CHANGED: { actions: "setOtpCode" },
                VALIDATE_OTP: { actions: "validateOtpField" },
                VERIFY_OTP: [{ guard: "hasCompleteOtp", target: "verifyingOtp" }, { actions: "validateOtpField" }],
                RESEND_OTP: { target: "resendingOtp", guard: "canResend" },
                BACK: { target: "inputting" },
            },
        },
        verifyingOtp: {
            invoke: {
                id: "verifyOtp",
                src: "verifyOtp",
                input: ({ context: t }) => ({ code: t.otpCode }),
                onDone: [
                    { target: "finished", guard: ({ event: t }) => !0 === t.output.success },
                    {
                        target: "otpError",
                        guard: "hasAttemptsRemaining",
                        actions: (0, s.r)(({ context: t }) => ({
                            otpError: "otp.errorv2",
                            attemptsRemaining: t.attemptsRemaining - 1,
                        })),
                    },
                    { target: "error", actions: (0, s.r)({ error: () => "Maximum OTP attempts exceeded" }) },
                ],
                onError: [
                    { target: "otpError", guard: "hasAttemptsRemaining", actions: "setOtpError" },
                    { target: "error", actions: "setError" },
                ],
            },
        },
        otpError: {
            invoke: { id: "resendTimer", src: "resendTimer", input: ({ context: t }) => ({ seconds: t.resendTimer }) },
            on: {
                TICK: { actions: "tickResendTimer" },
                OTP_CHANGED: { target: "awaitingOtp", actions: "setOtpCode" },
                VALIDATE_OTP: { actions: "validateOtpField" },
                RESEND_OTP: { target: "resendingOtp", guard: "canResend" },
                BACK: { target: "inputting" },
            },
        },
        finished: { type: "final" },
        error: { on: { RESET: { target: "idle", actions: "resetContext" } } },
    },
});
function v(t) {
    let { value: e } = t;
    if ("string" == typeof e)
        switch (e) {
            case "idle":
            case "inputting":
            case "validatingSubmit":
                return "phoneNumber.verify.default";
            case "loadingPrefill":
            case "loadingStartInfo":
                return "phoneNumber.verify.loading";
            case "submitting":
                return t.context?.config?.isInstantVerify ? "phoneNumber.SNA.loading" : "phoneNumber.verify.loading";
            case "sendingInitialOtp":
            case "resendingOtp":
            case "awaitingOtp":
                return "phoneNumber.OTP.typing";
            case "verifyingOtp":
                return "phoneNumber.OTP.processing";
            case "otpError":
            case "error":
                return "phoneNumber.OTP.error";
            case "finished":
                return "phoneNumber.success";
            default:
                return;
        }
}
function T(t) {
    let { context: e } = t;
    return t.matches("idle")
        ? { status: "idle" }
        : t.matches("loadingPrefill")
          ? { status: "loadingPrefill" }
          : t.matches("loadingStartInfo")
            ? {
                  status: "loadingStartInfo",
                  prefilledPhone: e.prefilledPhone,
                  otpVerification: e.config.otpVerification,
                  optinEnabled: e.config.optinEnabled ?? !1,
              }
            : t.matches("inputting")
              ? {
                    status: "inputting",
                    countryCode: e.countryCode,
                    phonePrefix: e.phonePrefix,
                    prefilledPhone: e.prefilledPhone,
                    phoneError: e.phoneError,
                    validationErrors: e.validationErrors,
                    isValid: 0 === Object.keys(e.validationErrors ?? {}).length,
                    otpVerification: e.config.otpVerification,
                    optinEnabled: e.config.optinEnabled ?? !1,
                }
              : t.matches("submitting")
                ? { status: "submitting" }
                : t.matches("resendingOtp")
                  ? { status: "resendingOtp", otpCode: e.otpCode, otpLength: 6 }
                  : t.matches("sendingInitialOtp")
                    ? { status: "sendingInitialOtp" }
                    : t.matches("awaitingOtp")
                      ? {
                            status: "awaitingOtp",
                            resendTimer: e.resendTimer,
                            canResend: !e.resendTimerActive,
                            attemptsRemaining: e.attemptsRemaining,
                            otpCode: e.otpCode,
                            otpLength: 6,
                            otpValidationErrors: e.otpValidationErrors,
                            isOtpValid: 0 === Object.keys(e.otpValidationErrors ?? {}).length,
                        }
                      : t.matches("verifyingOtp")
                        ? {
                              status: "verifyingOtp",
                              resendTimer: e.resendTimer,
                              canResend: !e.resendTimerActive,
                              otpCode: e.otpCode,
                              otpLength: 6,
                          }
                        : t.matches("otpError")
                          ? {
                                status: "otpError",
                                otpError: e.otpError ?? "otp.errorv2",
                                attemptsRemaining: e.attemptsRemaining,
                                resendTimer: e.resendTimer,
                                canResend: !e.resendTimerActive,
                                otpCode: e.otpCode,
                                otpLength: 6,
                                otpValidationErrors: e.otpValidationErrors,
                                isOtpValid: 0 === Object.keys(e.otpValidationErrors ?? {}).length,
                            }
                          : t.matches("finished")
                            ? { status: "finished" }
                            : t.matches("error")
                              ? { status: "error", error: e.error ?? "An error occurred" }
                              : { status: "idle" };
}
function P({ actor: t, trackElementClicked: e }) {
    return {
        load() {
            t.send({ type: "LOAD" });
        },
        setPhoneNumber(e, r) {
            t.send({ type: "PHONE_CHANGED", phone: e, isValid: r });
        },
        validatePhone() {
            t.send({ type: "VALIDATE_PHONE" });
        },
        setOptInGranted(e) {
            t.send({ type: "OPT_IN_CHANGED", granted: e });
        },
        submit() {
            e?.("submit"), t.send({ type: "SUBMIT" });
        },
        setOtpCode(e) {
            t.send({ type: "OTP_CHANGED", code: e });
        },
        validateOtp() {
            t.send({ type: "VALIDATE_OTP" });
        },
        submitOtp(r) {
            e?.("submitOtp"), t.send({ type: "OTP_CHANGED", code: r }), t.send({ type: "VERIFY_OTP" });
        },
        resendOtp() {
            e?.("resendOtp"), t.send({ type: "RESEND_OTP" });
        },
        back() {
            e?.("back"), t.send({ type: "BACK" });
        },
        reset() {
            t.send({ type: "RESET" });
        },
    };
}
function I(t) {
    return (0, s.l)({
        actor: (0, s.s)(O, { input: { config: t.config } }).start(),
        mapState: T,
        createApi: P,
        instrumentation: (0, i.s)(i.n.phone, { getEventScreenName: v }),
    });
}
