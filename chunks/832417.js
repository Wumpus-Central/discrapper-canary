r.d(t, { default: () => x });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(462887),
    o = r(192308),
    c = r(821609),
    u = r(663417),
    d = r(123292),
    _ = r(834730),
    f = r(289873);
r(934281), r(499031);
var p = r(736653),
    E = r(36149),
    A = r(744425),
    C = r(347989),
    I = r(731738),
    h = r(807393),
    R = r(295972),
    v = r(898638);
let g = {
    showTutorial: !0,
    showPreview: !1,
    assistedOnboarding: !1,
    enableFaceRecording: !1,
    autoCaptureTimeout: 10,
    captureAttempts: 3,
    validateLenses: !0,
    validateFaceMask: !0,
    validateHeadCover: !0,
    validateClosedEyes: !0,
    validateBrightness: !0,
    deepsightLiveness: "SINGLE_FRAME",
    onDeviceFaceResultsSubmissionEnabled: !0,
};
function w(e, t) {
    switch (t.type) {
        case "CAPTURE_COMPLETED":
            return "waiting_for_result";
        case "FALLBACK_STARTED":
            return "bootstrapping_fallback";
        case "VERIFICATION_FAILED":
        case "CAPTURE_FAILED":
            return "error";
        case "FALLBACK_READY":
        case "RETRY_CAPTURE":
            return "capturing";
    }
}
function y() {
    try {
        (0, A.cL)();
    } catch {}
}
function T(e) {
    return e.aborted;
}
function m(e) {
    h.A.increment({ name: I.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function k(e) {
    try {
        return await (0, R.Zo)(e), !0;
    } catch {
        return !1;
    }
}
let b = function (e) {
    let { apiUrl: t, sessionToken: r, interviewId: n } = e,
        a = i.useRef(null),
        s = i.useRef(null),
        l = i.useRef(!1),
        [o, c] = i.useReducer(w, "capturing"),
        [u, d] = i.useState({ sessionToken: r, interviewId: n }),
        _ = "waiting_for_result" === o,
        f = "error" === o,
        p = "waiting_for_result" === o || "bootstrapping_fallback" === o,
        E = i.useCallback(async () => {
            if (l.current) {
                m("secondary_flow_failed"), c({ type: "CAPTURE_FAILED" });
                return;
            }
            (l.current = !0), c({ type: "FALLBACK_STARTED" });
            try {
                let e = (await (0, R.eb)({ previousInterviewId: u.interviewId })).incode_parameters;
                if (e?.session_token == null || null == e.interview_id) {
                    m("fallback_bootstrap_incomplete"), c({ type: "CAPTURE_FAILED" });
                    return;
                }
                d({ sessionToken: e.session_token, interviewId: e.interview_id }), c({ type: "FALLBACK_READY" });
            } catch (e) {
                m("fallback_bootstrap_failed"), (l.current = !1), c({ type: "CAPTURE_FAILED" });
            }
        }, [u.interviewId]),
        I = i.useCallback(() => {
            (l.current = !1), d({ sessionToken: r, interviewId: n }), c({ type: "RETRY_CAPTURE" });
        }, [r, n]);
    return (
        i.useEffect(() => {
            if (!_) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                (async () => {
                    let e = u.interviewId;
                    if (0 === e.length) {
                        m("missing_interview_id"), T(t) || c({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    let r = await k(e);
                    !T(t) && (r || (m("registration_failed"), c({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [_, u.interviewId]),
        i.useEffect(() => {
            if ("capturing" !== o) return;
            let e = new AbortController(),
                { signal: r } = e,
                n = l.current;
            return (
                (async () => {
                    try {
                        let e;
                        if (
                            (y(),
                            await (0, A.mj)({
                                apiURL: (e = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? e : `${e}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: ["selfie", "onDeviceSelfie"] },
                            }),
                            T(r) || (await (0, C.T7)({ token: u.sessionToken }), T(r)))
                        )
                            return;
                        let i = a.current;
                        if (null == i) throw Error("Incode capture failed to initialize.");
                        let o = n ? { token: u.sessionToken } : g;
                        s.current = (function (e, t) {
                            let { container: r, config: n, signal: i, onFinish: a, onError: s } = t,
                                l = document.createElement(e);
                            l.className = v.x;
                            let o = !1,
                                c = (e) => {
                                    T(i) || o || ((o = !0), e());
                                };
                            return (
                                (l.onFinish = () => c(a)), (l.onError = () => c(s)), (l.config = n), r.appendChild(l), l
                            );
                        })(n ? "incode-flow" : "incode-selfie", {
                            container: i,
                            config: o,
                            signal: r,
                            onFinish: () => {
                                c({ type: "CAPTURE_COMPLETED" });
                            },
                            onError: () => {
                                u.interviewId.length > 0
                                    ? (l.current || m("selfie_error_triggered_fallback"), E())
                                    : (m("selfie_capture_error"), c({ type: "CAPTURE_FAILED" }));
                            },
                        });
                    } catch (e) {
                        if (T(r)) return;
                        m("sdk_init_error"), c({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    e.abort();
                    let t = s.current;
                    t?.parentNode != null && t.parentNode.removeChild(t), (s.current = null), y();
                }
            );
        }, [t, u, o, E]),
        { containerRef: a, error: f, waitingForResult: p, retryCapture: I }
    );
};
var L = r(793163),
    F = r(40449),
    D = r(375708),
    N = r(768971);
let x = function (e) {
    let { apiUrl: t, sessionToken: r, interviewId: a, onClose: A, onComplete: C, onCancel: I, transitionState: h } = e,
        R = i.useRef(!1),
        v = i.useCallback(() => {
            R.current || ((R.current = !0), C(), A());
        }, [C, A]),
        g = (0, l.M)((0, p.Ay)()),
        {
            containerRef: w,
            error: y,
            waitingForResult: T,
            retryCapture: m,
        } = b({ apiUrl: t, sessionToken: r, interviewId: a }),
        k = i.useCallback(() => {
            (0, o.hasModalOpen)(F.SW) && v();
        }, [v]);
    (0, E.dZ)(k);
    let x = y
        ? (0, n.jsx)(c.$, { variant: "secondary", icon: u.f, text: D.intl.string(D.t["/nicWo"]), onClick: m })
        : null != I
          ? (0, n.jsx)(d.Q, { variant: "secondary", text: D.intl.string(D.t["4gTnU0"]), onClick: I })
          : null;
    return (0, n.jsx)(L.A, {
        parentComponent: "IncodeAgeVerificationModal",
        transitionState: h,
        onBackToStart: A,
        footerRightSlot: x,
        children: y
            ? (0, n.jsx)(
                  "div",
                  {
                      className: s()(N.qV, N.eg),
                      children: (0, n.jsx)(_.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          className: N.h5,
                          children: D.intl.string(D.t.c6kn6F),
                      }),
                  },
                  "status",
              )
            : T
              ? (0, n.jsxs)(
                    "div",
                    {
                        className: s()(N.qV, N.eg),
                        children: [
                            (0, n.jsx)(f.y, { type: f.y.Type.SPINNING_CIRCLE }),
                            (0, n.jsx)(_.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: N.h5,
                                children: D.intl.string(D.t.wJVyYR),
                            }),
                        ],
                    },
                    "status",
                )
              : (0, n.jsx)("div", { ref: w, "data-incode-theme": g ? "dark" : "light", className: N.qV }, "capture"),
    });
};
