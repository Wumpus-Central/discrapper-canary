n.d(t, { default: () => U });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(772707),
    o = n(462887),
    c = n(192308),
    u = n(821609),
    d = n(663417),
    I = n(123292),
    _ = n(331322),
    f = n(834730),
    p = n(289873);
n(934281), n(499031), n(225055);
var E = n(736653),
    A = n(632738),
    C = n(295972),
    g = n(36149),
    v = n(744425),
    T = n(347989),
    F = n(731738),
    h = n(807393),
    R = n(40449),
    w = n(898638);
let y = {
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
function m(e, t) {
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
function k() {
    try {
        (0, v.cL)();
    } catch {}
}
function b(e) {
    return e.aborted;
}
function N(e) {
    h.A.increment({ name: F.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function L(e) {
    try {
        return await (0, C.Zo)(e), !0;
    } catch {
        return !1;
    }
}
function x(e, t) {
    let { container: n, config: i, signal: r, onFinish: a, onError: s } = t,
        l = document.createElement(e);
    l.className = w.x;
    let o = !1,
        c = (e) => {
            b(r) || o || ((o = !0), e());
        };
    return (l.onFinish = () => c(a)), (l.onError = () => c(s)), (l.config = i), n.appendChild(l), l;
}
let D = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: i,
            interviewId: a,
            flow: s = R.VF.FACIAL_AGE_ESTIMATION,
            enabled: l = !0,
        } = e,
        o = r.useRef(null),
        c = r.useRef(null),
        u = r.useRef(!1),
        [d, I] = r.useReducer(m, "capturing"),
        [_, f] = r.useState(!1),
        [p, E] = r.useState({ sessionToken: n, interviewId: a });
    r.useEffect(() => {
        E((e) =>
            e.sessionToken === n && e.interviewId === a ? e : ((u.current = !1), { sessionToken: n, interviewId: a }),
        );
    }, [n, a]);
    let A = "waiting_for_result" === d,
        g = "error" === d,
        F = "waiting_for_result" === d || "bootstrapping_fallback" === d,
        h = r.useCallback(async () => {
            if (u.current) {
                N("secondary_flow_failed"), I({ type: "CAPTURE_FAILED" });
                return;
            }
            (u.current = !0), I({ type: "FALLBACK_STARTED" });
            try {
                let e = (await (0, C.eb)({ previousInterviewId: p.interviewId })).incode_parameters;
                if (e?.session_token == null || null == e.interview_id) {
                    N("fallback_bootstrap_incomplete"), I({ type: "CAPTURE_FAILED" });
                    return;
                }
                E({ sessionToken: e.session_token, interviewId: e.interview_id }), I({ type: "FALLBACK_READY" });
            } catch (e) {
                N("fallback_bootstrap_failed"), (u.current = !1), I({ type: "CAPTURE_FAILED" });
            }
        }, [p.interviewId]),
        w = r.useCallback(() => {
            (u.current = !1), E({ sessionToken: n, interviewId: a }), I({ type: "RETRY_CAPTURE" });
        }, [n, a]);
    return (
        r.useEffect(() => {
            if (!A) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                (async () => {
                    let e = p.interviewId;
                    if (0 === e.length) {
                        N("missing_interview_id"), b(t) || I({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    let n = await L(e);
                    !b(t) && (n || (N("registration_failed"), I({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [A, p.interviewId]),
        r.useEffect(() => {
            var e, n;
            if (!l || "capturing" !== d) return;
            let r = new AbortController(),
                { signal: a } = r,
                _ = u.current,
                E =
                    ((e = _ ? R.VF.ID_VERIFICATION : s),
                    (n = p.sessionToken),
                    e !== R.VF.ID_VERIFICATION
                        ? {
                              tag: "incode-selfie",
                              config: y,
                              wasmPipelines: ["selfie", "onDeviceSelfie"],
                              captureFailureReason: "selfie_capture_error",
                          }
                        : {
                              tag: "incode-flow",
                              config: { token: n },
                              wasmPipelines: [],
                              captureFailureReason: "id_capture_error",
                          });
            return (
                (async () => {
                    try {
                        let e;
                        if (
                            (k(),
                            await (0, v.mj)({
                                apiURL: (e = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? e : `${e}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: E.wasmPipelines },
                            }),
                            b(a) || (await (0, T.T7)({ token: p.sessionToken }), b(a)))
                        )
                            return;
                        let n = o.current;
                        if (null == n) throw Error("Incode capture failed to initialize.");
                        let r = () => {
                            (c.current = x(E.tag, {
                                container: n,
                                config: E.config,
                                signal: a,
                                onFinish: () => {
                                    I({ type: "CAPTURE_COMPLETED" });
                                },
                                onError: () => {
                                    "incode-selfie" === E.tag && p.interviewId.length > 0
                                        ? (u.current || N("selfie_error_triggered_fallback"), h())
                                        : (N(E.captureFailureReason), I({ type: "CAPTURE_FAILED" }));
                                },
                            })),
                                f(!0);
                        };
                        if (_) r();
                        else {
                            let e = x("incode-consent", {
                                container: n,
                                config: { consentId: i },
                                signal: a,
                                onFinish: () => {
                                    e.parentNode?.removeChild(e), r();
                                },
                                onError: () => {
                                    N("consent_error"), I({ type: "CAPTURE_FAILED" });
                                },
                            });
                            (c.current = e), f(!0);
                        }
                    } catch (e) {
                        if (b(a)) return;
                        N("sdk_init_error"), I({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    r.abort(), f(!1);
                    let e = c.current;
                    e?.parentNode != null && e.parentNode.removeChild(e), (c.current = null), k();
                }
            );
        }, [t, p, d, h, i, s, l]),
        { containerRef: o, error: g, waitingForResult: F, incodeElementMounted: _, retryCapture: w }
    );
};
var P = n(793163),
    V = n(516761),
    S = n(375708),
    j = n(768971),
    O = n(700129);
let U = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: a,
            interviewId: v,
            initialMethod: T,
            onClose: F,
            onComplete: h,
            onCancel: w,
            hideFooter: y,
            transitionState: m,
        } = e,
        k = r.useRef(!1),
        b = T === R.VF.FACIAL_AGE_ESTIMATION || T === R.VF.ID_VERIFICATION ? T : null,
        [N, L] = r.useState(b),
        [x, U] = r.useState(null != b ? { sessionToken: n, consentId: a, interviewId: v } : null),
        [B, M] = r.useState(!1),
        G = r.useCallback(async (e) => {
            L(e), M(!1), U(null);
            try {
                let {
                    session_token: t,
                    consent_id: n,
                    interview_id: i,
                } = (await (0, C.uf)({ method: e, vendor: R.XM.INCODE })).incode_parameters ?? {};
                null == t || null == n || null == i ? M(!0) : U({ sessionToken: t, consentId: n, interviewId: i });
            } catch {
                M(!0);
            }
        }, []),
        K = r.useCallback(() => {
            k.current || ((k.current = !0), h(), F());
        }, [h, F]),
        W = (0, o.M)((0, E.Ay)()),
        {
            containerRef: q,
            error: Y,
            waitingForResult: Q,
            incodeElementMounted: X,
            retryCapture: Z,
        } = D({
            apiUrl: t,
            sessionToken: x?.sessionToken ?? n,
            consentId: x?.consentId ?? a,
            interviewId: x?.interviewId ?? v,
            flow: N ?? void 0,
            enabled: null != N && null != x,
        }),
        $ = Y || B,
        J = r.useCallback(() => {
            B && null != N ? G(N) : Z();
        }, [B, N, G, Z]),
        z = r.useCallback(() => {
            (0, c.hasModalOpen)(R.SW) && K();
        }, [K]);
    (0, g.dZ)(z);
    let H = $
        ? (0, i.jsx)(u.$, { variant: "secondary", icon: d.f, text: S.intl.string(S.t["/nicWo"]), onClick: J })
        : null != w
          ? (0, i.jsx)(I.Q, { variant: "secondary", text: S.intl.string(S.t["4gTnU0"]), onClick: w })
          : null;
    return null == N
        ? (0, i.jsx)(l.k, {
              transitionState: m,
              onClose: F,
              gradientColor: "blue",
              graphic: { type: "image", src: O.A },
              title: S.intl.string(V.default.eZvwAe),
              subtitle: S.intl.string(V.default["5yWXmT"]),
              actionBarInput: (0, i.jsx)(I.Q, { variant: "secondary", text: S.intl.string(S.t.fjKFae), onClick: F }),
              children: (0, i.jsxs)(_.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, i.jsx)(A.PQ, {
                          variant: "clickable",
                          title: S.intl.string(V.default.rgXXcW),
                          description: S.intl.string(V.default.fm7qBC),
                          onButtonPress: () => void G(R.VF.FACIAL_AGE_ESTIMATION),
                      }),
                      (0, i.jsx)(A.PQ, {
                          variant: "clickable",
                          title: S.intl.string(V.default["NeVlw/"]),
                          description: S.intl.string(V.default.ARmJ0M),
                          onButtonPress: () => void G(R.VF.ID_VERIFICATION),
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(P.A, {
              parentComponent: "IncodeAgeVerificationModal",
              transitionState: m,
              onBackToStart: F,
              footerRightSlot: H,
              hideFooter: y,
              children: $
                  ? (0, i.jsx)(
                        "div",
                        {
                            className: s()(j.qV, j.eg),
                            children: (0, i.jsx)(f.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: j.h5,
                                children: S.intl.string(S.t.c6kn6F),
                            }),
                        },
                        "status",
                    )
                  : Q
                    ? (0, i.jsxs)(
                          "div",
                          {
                              className: s()(j.qV, j.eg),
                              children: [
                                  (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                                  (0, i.jsx)(f.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      className: j.h5,
                                      children: S.intl.string(S.t.wJVyYR),
                                  }),
                              ],
                          },
                          "status",
                      )
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: j.yq,
                              children: [
                                  (0, i.jsx)("div", {
                                      ref: q,
                                      "data-incode-theme": W ? "dark" : "light",
                                      className: j.qV,
                                  }),
                                  X
                                      ? null
                                      : (0, i.jsx)("div", {
                                            className: j.BT,
                                            children: (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                                        }),
                              ],
                          },
                          "capture",
                      ),
          });
};
