n.d(t, { default: () => G });
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
    p = n(331322),
    f = n(834730),
    _ = n(289873);
n(238819), n(743601), n(107439), n(740737);
var E = n(736653),
    A = n(632738),
    C = n(295972),
    g = n(36149),
    v = n(448026),
    T = n(651386),
    h = n(277262),
    F = n(731738),
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
function N(e, t) {
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
function L() {
    try {
        (0, v.cL)();
    } catch {}
}
function D(e) {
    return e.aborted;
}
function x(e) {
    R.A.increment({ name: F.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function P(e) {
    try {
        return await (0, C.Zo)(e), !0;
    } catch {
        return !1;
    }
}
function V(e, t) {
    let { container: n, config: r, signal: i, onFinish: a, onError: s } = t,
        l = document.createElement(e);
    l.className = m.x;
    let o = !1,
        c = (e) => {
            D(i) || o || ((o = !0), e());
        };
    return (l.onFinish = () => c(a)), (l.onError = () => c(s)), (l.config = r), n.appendChild(l), l;
}
function S(e, t) {
    return e !== y.VF.ID_VERIFICATION ? ["selfie", "onDeviceSelfie"] : t ? ["idCapture"] : [];
}
let j = function (e) {
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
        [I, p] = i.useReducer(N, "capturing"),
        [f, _] = i.useState(!1),
        [E, A] = i.useState({ sessionToken: n, interviewId: a });
    i.useEffect(() => {
        let e = S(s, l);
        0 !== e.length && (0, h.ZU)((0, h.Dz)({ pipelines: e })).catch(() => {});
    }, []),
        i.useEffect(() => {
            A((e) =>
                e.sessionToken === n && e.interviewId === a
                    ? e
                    : ((d.current = !1), { sessionToken: n, interviewId: a }),
            );
        }, [n, a]);
    let g = "waiting_for_result" === I,
        F = "error" === I,
        R = "waiting_for_result" === I || "bootstrapping_fallback" === I,
        m = i.useCallback(async () => {
            if (d.current) {
                x("secondary_flow_failed"), p({ type: "CAPTURE_FAILED" });
                return;
            }
            (d.current = !0), p({ type: "FALLBACK_STARTED" });
            try {
                let e = (await (0, C.eb)({ previousInterviewId: E.interviewId })).incode_parameters;
                if (e?.session_token == null || null == e.interview_id) {
                    x("fallback_bootstrap_incomplete"), p({ type: "CAPTURE_FAILED" });
                    return;
                }
                A({ sessionToken: e.session_token, interviewId: e.interview_id }), p({ type: "FALLBACK_READY" });
            } catch (e) {
                x("fallback_bootstrap_failed"), (d.current = !1), p({ type: "CAPTURE_FAILED" });
            }
        }, [E.interviewId]),
        w = i.useCallback(() => {
            (d.current = !1), A({ sessionToken: n, interviewId: a }), p({ type: "RETRY_CAPTURE" });
        }, [n, a]);
    return (
        i.useEffect(() => {
            if (!g) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                (async () => {
                    let e = E.interviewId;
                    if (0 === e.length) {
                        x("missing_interview_id"), D(t) || p({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    let n = await P(e);
                    !D(t) && (n || (x("registration_failed"), p({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [g, E.interviewId]),
        i.useEffect(() => {
            var e, n;
            let i;
            if (!o || "capturing" !== I) return;
            let a = new AbortController(),
                { signal: f } = a,
                A = d.current,
                C =
                    ((e = A ? y.VF.ID_VERIFICATION : s),
                    (n = E.sessionToken),
                    (i = S(e, l)),
                    e !== y.VF.ID_VERIFICATION
                        ? {
                              tag: "incode-selfie",
                              config: k,
                              wasmPipelines: i,
                              captureFailureReason: "selfie_capture_error",
                          }
                        : l
                          ? { tag: "incode-id", config: b, wasmPipelines: i, captureFailureReason: "id_capture_error" }
                          : {
                                tag: "incode-flow",
                                config: { token: n },
                                wasmPipelines: i,
                                captureFailureReason: "id_capture_error",
                            });
            return (
                (async () => {
                    try {
                        let e;
                        if (
                            (L(),
                            await (0, v.mj)({
                                apiURL: (e = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? e : `${e}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: C.wasmPipelines },
                            }),
                            D(f) || (await (0, T.T7)({ token: E.sessionToken }), D(f)))
                        )
                            return;
                        let n = c.current;
                        if (null == n) throw Error("Incode capture failed to initialize.");
                        let i = () => {
                            (u.current = V(C.tag, {
                                container: n,
                                config: C.config,
                                signal: f,
                                onFinish: () => {
                                    p({ type: "CAPTURE_COMPLETED" });
                                },
                                onError: () => {
                                    "incode-selfie" === C.tag && E.interviewId.length > 0
                                        ? (d.current || x("selfie_error_triggered_fallback"), m())
                                        : (x(C.captureFailureReason), p({ type: "CAPTURE_FAILED" }));
                                },
                            })),
                                _(!0);
                        };
                        if (A) i();
                        else {
                            let e = V("incode-consent", {
                                container: n,
                                config: { consentId: r },
                                signal: f,
                                onFinish: () => {
                                    e.parentNode?.removeChild(e), i();
                                },
                                onError: () => {
                                    x("consent_error"), p({ type: "CAPTURE_FAILED" });
                                },
                            });
                            (u.current = e), _(!0);
                        }
                    } catch (e) {
                        if (D(f)) return;
                        x("sdk_init_error"), p({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    a.abort(), _(!1);
                    let e = u.current;
                    e?.parentNode != null && e.parentNode.removeChild(e), (u.current = null), L();
                }
            );
        }, [t, E, I, m, r, s, l, o]),
        { containerRef: c, error: F, waitingForResult: R, incodeElementMounted: f, retryCapture: w }
    );
};
var O = n(793163),
    U = n(516761),
    B = n(375708),
    M = n(768971),
    W = n(700129);
let G = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: a,
            interviewId: v,
            initialMethod: T,
            onClose: h,
            onComplete: F,
            onCancel: R,
            hideFooter: m,
            onDeviceIdCapture: w,
            transitionState: k,
        } = e,
        b = i.useRef(!1),
        N = T === y.VF.FACIAL_AGE_ESTIMATION || T === y.VF.ID_VERIFICATION ? T : null,
        [L, D] = i.useState(N),
        [x, P] = i.useState(null != N ? { sessionToken: n, consentId: a, interviewId: v } : null),
        [V, S] = i.useState(!1),
        G = i.useCallback(async (e) => {
            D(e), S(!1), P(null);
            try {
                let {
                    session_token: t,
                    consent_id: n,
                    interview_id: r,
                } = (await (0, C.uf)({ method: e, vendor: y.XM.INCODE })).incode_parameters ?? {};
                null == t || null == n || null == r ? S(!0) : P({ sessionToken: t, consentId: n, interviewId: r });
            } catch {
                S(!0);
            }
        }, []),
        K = i.useCallback(() => {
            b.current || ((b.current = !0), F(), h());
        }, [F, h]),
        q = (0, o.M)((0, E.Ay)()),
        {
            containerRef: Y,
            error: Q,
            waitingForResult: X,
            incodeElementMounted: Z,
            retryCapture: $,
        } = j({
            apiUrl: t,
            sessionToken: x?.sessionToken ?? n,
            consentId: x?.consentId ?? a,
            interviewId: x?.interviewId ?? v,
            flow: L ?? void 0,
            onDeviceIdCapture: w,
            enabled: null != L && null != x,
        }),
        z = Q || V,
        J = i.useCallback(() => {
            V && null != L ? G(L) : $();
        }, [V, L, G, $]),
        H = i.useCallback(() => {
            (0, c.hasModalOpen)(y.SW) && K();
        }, [K]);
    (0, g.dZ)(H);
    let ee = z
        ? (0, r.jsx)(u.$, { variant: "secondary", icon: d.f, text: B.intl.string(B.t["/nicWo"]), onClick: J })
        : null != R
          ? (0, r.jsx)(I.Q, { variant: "secondary", text: B.intl.string(B.t["4gTnU0"]), onClick: R })
          : null;
    return null == L
        ? (0, r.jsx)(l.k, {
              transitionState: k,
              onClose: h,
              gradientColor: "blue",
              graphic: { type: "image", src: W.A },
              title: B.intl.string(U.default.eZvwAe),
              subtitle: B.intl.string(U.default["5yWXmT"]),
              actionBarInput: (0, r.jsx)(I.Q, { variant: "secondary", text: B.intl.string(B.t.fjKFae), onClick: h }),
              children: (0, r.jsxs)(p.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, r.jsx)(A.PQ, {
                          variant: "clickable",
                          title: B.intl.string(U.default.rgXXcW),
                          description: B.intl.string(U.default.fm7qBC),
                          onButtonPress: () => void G(y.VF.FACIAL_AGE_ESTIMATION),
                      }),
                      (0, r.jsx)(A.PQ, {
                          variant: "clickable",
                          title: B.intl.string(U.default["NeVlw/"]),
                          description: B.intl.string(U.default.ARmJ0M),
                          onButtonPress: () => void G(y.VF.ID_VERIFICATION),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(O.A, {
              parentComponent: "IncodeAgeVerificationModal",
              transitionState: k,
              onBackToStart: h,
              footerRightSlot: ee,
              hideFooter: m,
              children: z
                  ? (0, r.jsx)(
                        "div",
                        {
                            className: s()(M.qV, M.eg),
                            children: (0, r.jsx)(f.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: M.h5,
                                children: B.intl.string(B.t.c6kn6F),
                            }),
                        },
                        "status",
                    )
                  : X
                    ? (0, r.jsxs)(
                          "div",
                          {
                              className: s()(M.qV, M.eg),
                              children: [
                                  (0, r.jsx)(_.y, { type: _.y.Type.SPINNING_CIRCLE }),
                                  (0, r.jsx)(f.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      className: M.h5,
                                      children: B.intl.string(B.t.wJVyYR),
                                  }),
                              ],
                          },
                          "status",
                      )
                    : (0, r.jsxs)(
                          "div",
                          {
                              className: M.yq,
                              children: [
                                  (0, r.jsx)("div", {
                                      ref: Y,
                                      "data-incode-theme": q ? "dark" : "light",
                                      className: M.qV,
                                  }),
                                  Z
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: M.BT,
                                            children: (0, r.jsx)(_.y, { type: _.y.Type.SPINNING_CIRCLE }),
                                        }),
                              ],
                          },
                          "capture",
                      ),
          });
};
