r.d(t, { default: () => P });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    o = r(462887),
    l = r(192308),
    c = r(821609),
    u = r(663417),
    d = r(123292),
    _ = r(834730),
    f = r(289873);
r(934281), r(499031), r(225055);
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
function y(e, t) {
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
function T() {
    try {
        (0, A.cL)();
    } catch {}
}
function m(e) {
    return e.aborted;
}
function w(e) {
    h.A.increment({ name: I.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function k(e) {
    try {
        return await (0, R.Zo)(e), !0;
    } catch {
        return !1;
    }
}
function F(e, t) {
    let { container: r, config: n, signal: i, onFinish: a, onError: s } = t,
        o = document.createElement(e);
    o.className = v.x;
    let l = !1,
        c = (e) => {
            m(i) || l || ((l = !0), e());
        };
    return (o.onFinish = () => c(a)), (o.onError = () => c(s)), (o.config = n), r.appendChild(o), o;
}
let L = function (e) {
    let { apiUrl: t, sessionToken: r, consentId: n, interviewId: a } = e,
        s = i.useRef(null),
        o = i.useRef(null),
        l = i.useRef(!1),
        [c, u] = i.useReducer(y, "capturing"),
        [d, _] = i.useState({ sessionToken: r, interviewId: a }),
        f = "waiting_for_result" === c,
        p = "error" === c,
        E = "waiting_for_result" === c || "bootstrapping_fallback" === c,
        I = i.useCallback(async () => {
            if (l.current) {
                w("secondary_flow_failed"), u({ type: "CAPTURE_FAILED" });
                return;
            }
            (l.current = !0), u({ type: "FALLBACK_STARTED" });
            try {
                let e = (await (0, R.eb)({ previousInterviewId: d.interviewId })).incode_parameters;
                if (e?.session_token == null || null == e.interview_id) {
                    w("fallback_bootstrap_incomplete"), u({ type: "CAPTURE_FAILED" });
                    return;
                }
                _({ sessionToken: e.session_token, interviewId: e.interview_id }), u({ type: "FALLBACK_READY" });
            } catch (e) {
                w("fallback_bootstrap_failed"), (l.current = !1), u({ type: "CAPTURE_FAILED" });
            }
        }, [d.interviewId]),
        h = i.useCallback(() => {
            (l.current = !1), _({ sessionToken: r, interviewId: a }), u({ type: "RETRY_CAPTURE" });
        }, [r, a]);
    return (
        i.useEffect(() => {
            if (!f) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                (async () => {
                    let e = d.interviewId;
                    if (0 === e.length) {
                        w("missing_interview_id"), m(t) || u({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    let r = await k(e);
                    !m(t) && (r || (w("registration_failed"), u({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [f, d.interviewId]),
        i.useEffect(() => {
            if ("capturing" !== c) return;
            let e = new AbortController(),
                { signal: r } = e,
                i = l.current;
            return (
                (async () => {
                    try {
                        let e;
                        if (
                            (T(),
                            await (0, A.mj)({
                                apiURL: (e = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? e : `${e}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: ["selfie", "onDeviceSelfie"] },
                            }),
                            m(r) || (await (0, C.T7)({ token: d.sessionToken }), m(r)))
                        )
                            return;
                        let a = s.current;
                        if (null == a) throw Error("Incode capture failed to initialize.");
                        let c = () => {
                            let e = i ? { token: d.sessionToken } : g;
                            o.current = F(i ? "incode-flow" : "incode-selfie", {
                                container: a,
                                config: e,
                                signal: r,
                                onFinish: () => {
                                    u({ type: "CAPTURE_COMPLETED" });
                                },
                                onError: () => {
                                    d.interviewId.length > 0
                                        ? (l.current || w("selfie_error_triggered_fallback"), I())
                                        : (w("selfie_capture_error"), u({ type: "CAPTURE_FAILED" }));
                                },
                            });
                        };
                        if (i) c();
                        else {
                            let e = F("incode-consent", {
                                container: a,
                                config: { consentId: n },
                                signal: r,
                                onFinish: () => {
                                    e.parentNode?.removeChild(e), c();
                                },
                                onError: () => {
                                    w("consent_error"), u({ type: "CAPTURE_FAILED" });
                                },
                            });
                            o.current = e;
                        }
                    } catch (e) {
                        if (m(r)) return;
                        w("sdk_init_error"), u({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    e.abort();
                    let t = o.current;
                    t?.parentNode != null && t.parentNode.removeChild(t), (o.current = null), T();
                }
            );
        }, [t, d, c, I, n]),
        { containerRef: s, error: p, waitingForResult: E, retryCapture: h }
    );
};
var b = r(793163),
    D = r(40449),
    N = r(375708),
    x = r(768971);
let P = function (e) {
    let {
            apiUrl: t,
            sessionToken: r,
            consentId: a,
            interviewId: A,
            onClose: C,
            onComplete: I,
            onCancel: h,
            transitionState: R,
        } = e,
        v = i.useRef(!1),
        g = i.useCallback(() => {
            v.current || ((v.current = !0), I(), C());
        }, [I, C]),
        y = (0, o.M)((0, p.Ay)()),
        {
            containerRef: T,
            error: m,
            waitingForResult: w,
            retryCapture: k,
        } = L({ apiUrl: t, sessionToken: r, consentId: a, interviewId: A }),
        F = i.useCallback(() => {
            (0, l.hasModalOpen)(D.SW) && g();
        }, [g]);
    (0, E.dZ)(F);
    let P = m
        ? (0, n.jsx)(c.$, { variant: "secondary", icon: u.f, text: N.intl.string(N.t["/nicWo"]), onClick: k })
        : null != h
          ? (0, n.jsx)(d.Q, { variant: "secondary", text: N.intl.string(N.t["4gTnU0"]), onClick: h })
          : null;
    return (0, n.jsx)(b.A, {
        parentComponent: "IncodeAgeVerificationModal",
        transitionState: R,
        onBackToStart: C,
        footerRightSlot: P,
        children: m
            ? (0, n.jsx)(
                  "div",
                  {
                      className: s()(x.qV, x.eg),
                      children: (0, n.jsx)(_.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          className: x.h5,
                          children: N.intl.string(N.t.c6kn6F),
                      }),
                  },
                  "status",
              )
            : w
              ? (0, n.jsxs)(
                    "div",
                    {
                        className: s()(x.qV, x.eg),
                        children: [
                            (0, n.jsx)(f.y, { type: f.y.Type.SPINNING_CIRCLE }),
                            (0, n.jsx)(_.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: x.h5,
                                children: N.intl.string(N.t.wJVyYR),
                            }),
                        ],
                    },
                    "status",
                )
              : (0, n.jsx)("div", { ref: T, "data-incode-theme": y ? "dark" : "light", className: x.qV }, "capture"),
    });
};
