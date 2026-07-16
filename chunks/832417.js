n.d(t, { default: () => W });
var r = n(627968),
    i = n(64700),
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
n(238819), n(743601), n(107439), n(740737);
var A = n(736653),
    E = n(632738),
    C = n(295972),
    g = n(36149),
    F = n(448026),
    h = n(651386),
    v = n(277262),
    T = n(731738),
    R = n(807393),
    y = n(40449),
    m = n(898638);
let w = { showTutorial: !0, autoCaptureTimeout: 10, captureAttempts: 3 },
    k = {
        ...w,
        showPreview: !1,
        assistedOnboarding: !1,
        enableFaceRecording: !1,
        validateLenses: !0,
        validateFaceMask: !0,
        validateHeadCover: !0,
        validateClosedEyes: !0,
        validateBrightness: !0,
        deepsightLiveness: "SINGLE_FRAME",
        onDeviceFaceResultsSubmissionEnabled: !0,
    },
    b = {
        ...w,
        enableId: !0,
        enablePassport: !0,
        deviceWallet: !1,
        onlyFront: !1,
        onlyBack: !1,
        barcodeCapture: !1,
        fetchAdditionalPage: !1,
        secondId: !1,
        thirdId: !1,
        deviceIdleTimeout: 60,
        manualUploadIdCapture: !1,
        digitalIdsUpload: !1,
        showDocumentChooserScreen: !0,
        enableIdRecording: !1,
        usSmartCapture: !1,
        perCountryPerDocOverrides: {},
    };
function L(e, t) {
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
function N() {
    try {
        (0, F.cL)();
    } catch {}
}
function D(e) {
    return e.aborted;
}
function P(e) {
    R.A.increment({ name: T.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function x(e) {
    try {
        return await (0, C.Zo)(e), !0;
    } catch {
        return !1;
    }
}
function S(e, t) {
    let { container: n, config: r, signal: i, onFinish: a, onError: s } = t,
        l = document.createElement(e);
    l.className = m.x;
    let o = !1,
        c = (e) => {
            D(i) || o || ((o = !0), e());
        };
    return (l.onFinish = () => c(a)), (l.onError = () => c(s)), (l.config = r), n.appendChild(l), l;
}
function V(e, t) {
    return e !== y.VF.ID_VERIFICATION ? ["selfie", "onDeviceSelfie"] : t ? ["idCapture"] : [];
}
let O = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: r,
            interviewId: a,
            flow: s = y.VF.FACIAL_AGE_ESTIMATION,
            onDeviceIdCapture: l = !1,
            enabled: o = !0,
        } = e,
        c = i.useRef(null),
        u = i.useRef(null),
        d = i.useRef(!1),
        [I, _] = i.useReducer(L, "capturing"),
        [f, p] = i.useState(!1),
        [A, E] = i.useState({ sessionToken: n, interviewId: a });
    i.useEffect(() => {
        let e = V(s, l);
        0 !== e.length && (0, v.ZU)((0, v.Dz)({ pipelines: e })).catch(() => {});
    }, []),
        i.useEffect(() => {
            E((e) =>
                e.sessionToken === n && e.interviewId === a
                    ? e
                    : ((d.current = !1), { sessionToken: n, interviewId: a }),
            );
        }, [n, a]);
    let g = "waiting_for_result" === I,
        T = "error" === I,
        R = "waiting_for_result" === I || "bootstrapping_fallback" === I,
        m = i.useCallback(async () => {
            if (d.current) {
                P("secondary_flow_failed"), _({ type: "CAPTURE_FAILED" });
                return;
            }
            (d.current = !0), _({ type: "FALLBACK_STARTED" });
            try {
                let e = (await (0, C.eb)({ previousInterviewId: A.interviewId })).incode_parameters;
                if (e?.session_token == null || null == e.interview_id) {
                    P("fallback_bootstrap_incomplete"), _({ type: "CAPTURE_FAILED" });
                    return;
                }
                E({ sessionToken: e.session_token, interviewId: e.interview_id }), _({ type: "FALLBACK_READY" });
            } catch (e) {
                P("fallback_bootstrap_failed"), (d.current = !1), _({ type: "CAPTURE_FAILED" });
            }
        }, [A.interviewId]),
        w = i.useCallback(() => {
            (d.current = !1), E({ sessionToken: n, interviewId: a }), _({ type: "RETRY_CAPTURE" });
        }, [n, a]);
    return (
        i.useEffect(() => {
            if (!g) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                (async () => {
                    let e = A.interviewId;
                    if (0 === e.length) {
                        P("missing_interview_id"), D(t) || _({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    let n = await x(e);
                    !D(t) && (n || (P("registration_failed"), _({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [g, A.interviewId]),
        i.useEffect(() => {
            var e, n;
            let i;
            if (!o || "capturing" !== I) return;
            let a = new AbortController(),
                { signal: f } = a,
                E = d.current,
                C =
                    ((e = E ? y.VF.ID_VERIFICATION : s),
                    (n = A.sessionToken),
                    (i = V(e, l)),
                    e !== y.VF.ID_VERIFICATION
                        ? {
                              tag: "incode-selfie",
                              config: k,
                              wasmPipelines: i,
                              captureFailureReason: "selfie_capture_error",
                              requiresManualFinish: !0,
                          }
                        : l
                          ? {
                                tag: "incode-id",
                                config: b,
                                wasmPipelines: i,
                                captureFailureReason: "id_capture_error",
                                requiresManualFinish: !0,
                            }
                          : {
                                tag: "incode-flow",
                                config: { token: n },
                                wasmPipelines: i,
                                captureFailureReason: "id_capture_error",
                                requiresManualFinish: !1,
                            });
            return (
                (async () => {
                    try {
                        let e;
                        if (
                            (N(),
                            await (0, F.mj)({
                                apiURL: (e = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? e : `${e}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: C.wasmPipelines },
                            }),
                            D(f) || (await (0, h.T7)({ token: A.sessionToken }), D(f)))
                        )
                            return;
                        let n = c.current;
                        if (null == n) throw Error("Incode capture failed to initialize.");
                        let i = () => {
                            (u.current = S(C.tag, {
                                container: n,
                                config: C.config,
                                signal: f,
                                onFinish: () => {
                                    C.requiresManualFinish
                                        ? (async () => {
                                              try {
                                                  let e = await (0, h.uR)(void 0, f);
                                                  if (D(f)) return;
                                                  (e?.action !== "rejected" &&
                                                      e?.scoreStatus !== "FAIL" &&
                                                      e?.scoreStatus !== "MANUAL_FAIL") ||
                                                  "incode-selfie" !== C.tag ||
                                                  d.current
                                                      ? _({ type: "CAPTURE_COMPLETED" })
                                                      : (P("result_gate_triggered_fallback"), m());
                                              } catch {
                                                  D(f) ||
                                                      (P("finish_status_error"), _({ type: "VERIFICATION_FAILED" }));
                                              }
                                          })()
                                        : _({ type: "CAPTURE_COMPLETED" });
                                },
                                onError: () => {
                                    "incode-selfie" === C.tag && A.interviewId.length > 0
                                        ? (d.current || P("selfie_error_triggered_fallback"), m())
                                        : (P(C.captureFailureReason), _({ type: "CAPTURE_FAILED" }));
                                },
                            })),
                                p(!0);
                        };
                        if (E) i();
                        else {
                            let e = S("incode-consent", {
                                container: n,
                                config: { consentId: r },
                                signal: f,
                                onFinish: () => {
                                    e.parentNode?.removeChild(e), i();
                                },
                                onError: () => {
                                    P("consent_error"), _({ type: "CAPTURE_FAILED" });
                                },
                            });
                            (u.current = e), p(!0);
                        }
                    } catch (e) {
                        if (D(f)) return;
                        P("sdk_init_error"), _({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    a.abort(), p(!1);
                    let e = u.current;
                    e?.parentNode != null && e.parentNode.removeChild(e), (u.current = null), N();
                }
            );
        }, [t, A, I, m, r, s, l, o]),
        { containerRef: c, error: T, waitingForResult: R, incodeElementMounted: f, retryCapture: w }
    );
};
var j = n(793163),
    M = n(516761),
    U = n(375708),
    B = n(768971),
    q = n(700129);
let W = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: a,
            interviewId: F,
            initialMethod: h,
            onClose: v,
            onComplete: T,
            onCancel: R,
            hideFooter: m,
            onDeviceIdCapture: w,
            transitionState: k,
        } = e,
        b = i.useRef(!1),
        L = h === y.VF.FACIAL_AGE_ESTIMATION || h === y.VF.ID_VERIFICATION ? h : null,
        [N, D] = i.useState(L),
        [P, x] = i.useState(null != L ? { sessionToken: n, consentId: a, interviewId: F } : null),
        [S, V] = i.useState(!1),
        W = i.useCallback(async (e) => {
            D(e), V(!1), x(null);
            try {
                let {
                    session_token: t,
                    consent_id: n,
                    interview_id: r,
                } = (await (0, C.uf)({ method: e, vendor: y.XM.INCODE })).incode_parameters ?? {};
                null == t || null == n || null == r ? V(!0) : x({ sessionToken: t, consentId: n, interviewId: r });
            } catch {
                V(!0);
            }
        }, []),
        G = i.useCallback(() => {
            b.current || ((b.current = !0), T(), v());
        }, [T, v]),
        K = (0, o.M)((0, A.Ay)()),
        {
            containerRef: Y,
            error: Q,
            waitingForResult: X,
            incodeElementMounted: Z,
            retryCapture: $,
        } = O({
            apiUrl: t,
            sessionToken: P?.sessionToken ?? n,
            consentId: P?.consentId ?? a,
            interviewId: P?.interviewId ?? F,
            flow: N ?? void 0,
            onDeviceIdCapture: w,
            enabled: null != N && null != P,
        }),
        z = Q || S,
        J = i.useCallback(() => {
            S && null != N ? W(N) : $();
        }, [S, N, W, $]),
        H = i.useCallback(() => {
            (0, c.hasModalOpen)(y.SW) && G();
        }, [G]);
    (0, g.dZ)(H);
    let ee = z
        ? (0, r.jsx)(u.$, { variant: "secondary", icon: d.f, text: U.intl.string(U.t["/nicWo"]), onClick: J })
        : null != R
          ? (0, r.jsx)(I.Q, { variant: "secondary", text: U.intl.string(U.t["4gTnU0"]), onClick: R })
          : null;
    return null == N
        ? (0, r.jsx)(l.k, {
              transitionState: k,
              onClose: v,
              gradientColor: "blue",
              graphic: { type: "image", src: q.A },
              title: U.intl.string(M.default.eZvwAe),
              subtitle: U.intl.string(M.default["5yWXmT"]),
              actionBarInput: (0, r.jsx)(I.Q, { variant: "secondary", text: U.intl.string(U.t.fjKFae), onClick: v }),
              children: (0, r.jsxs)(_.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, r.jsx)(E.PQ, {
                          variant: "clickable",
                          title: U.intl.string(M.default.rgXXcW),
                          description: U.intl.string(M.default.fm7qBC),
                          onButtonPress: () => void W(y.VF.FACIAL_AGE_ESTIMATION),
                      }),
                      (0, r.jsx)(E.PQ, {
                          variant: "clickable",
                          title: U.intl.string(M.default["NeVlw/"]),
                          description: U.intl.string(M.default.ARmJ0M),
                          onButtonPress: () => void W(y.VF.ID_VERIFICATION),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(j.A, {
              parentComponent: "IncodeAgeVerificationModal",
              transitionState: k,
              onBackToStart: v,
              footerRightSlot: ee,
              hideFooter: m,
              children: z
                  ? (0, r.jsx)(
                        "div",
                        {
                            className: s()(B.qV, B.eg),
                            children: (0, r.jsx)(f.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: B.h5,
                                children: U.intl.string(U.t.c6kn6F),
                            }),
                        },
                        "status",
                    )
                  : X
                    ? (0, r.jsxs)(
                          "div",
                          {
                              className: s()(B.qV, B.eg),
                              children: [
                                  (0, r.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                                  (0, r.jsx)(f.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      className: B.h5,
                                      children: U.intl.string(U.t.wJVyYR),
                                  }),
                              ],
                          },
                          "status",
                      )
                    : (0, r.jsxs)(
                          "div",
                          {
                              className: B.yq,
                              children: [
                                  (0, r.jsx)("div", {
                                      ref: Y,
                                      "data-incode-theme": K ? "dark" : "light",
                                      className: B.qV,
                                  }),
                                  Z
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: B.BT,
                                            children: (0, r.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                                        }),
                              ],
                          },
                          "capture",
                      ),
          });
};
