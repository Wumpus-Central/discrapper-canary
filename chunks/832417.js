n.d(t, { default: () => M });
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
    _ = n(834730),
    f = n(289873);
n(934281), n(590327), n(499031), n(225055);
var A = n(736653),
    E = n(632738),
    C = n(295972),
    g = n(36149),
    v = n(744425),
    T = n(347989),
    h = n(731738),
    F = n(807393),
    m = n(40449),
    R = n(898638);
let w = { showTutorial: !0, autoCaptureTimeout: 10, captureAttempts: 3 },
    y = {
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
    k = {
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
function b(e, t) {
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
        (0, v.cL)();
    } catch {}
}
function L(e) {
    return e.aborted;
}
function D(e) {
    F.A.increment({ name: h.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function P(e) {
    try {
        return await (0, C.Zo)(e), !0;
    } catch {
        return !1;
    }
}
function x(e, t) {
    let { container: n, config: r, signal: i, onFinish: a, onError: s } = t,
        l = document.createElement(e);
    l.className = R.x;
    let o = !1,
        c = (e) => {
            L(i) || o || ((o = !0), e());
        };
    return (l.onFinish = () => c(a)), (l.onError = () => c(s)), (l.config = r), n.appendChild(l), l;
}
let S = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: r,
            interviewId: a,
            flow: s = m.VF.FACIAL_AGE_ESTIMATION,
            onDeviceIdCapture: l = !1,
            enabled: o = !0,
        } = e,
        c = i.useRef(null),
        u = i.useRef(null),
        d = i.useRef(!1),
        [I, p] = i.useReducer(b, "capturing"),
        [_, f] = i.useState(!1),
        [A, E] = i.useState({ sessionToken: n, interviewId: a });
    i.useEffect(() => {
        E((e) =>
            e.sessionToken === n && e.interviewId === a ? e : ((d.current = !1), { sessionToken: n, interviewId: a }),
        );
    }, [n, a]);
    let g = "waiting_for_result" === I,
        h = "error" === I,
        F = "waiting_for_result" === I || "bootstrapping_fallback" === I,
        R = i.useCallback(async () => {
            if (d.current) {
                D("secondary_flow_failed"), p({ type: "CAPTURE_FAILED" });
                return;
            }
            (d.current = !0), p({ type: "FALLBACK_STARTED" });
            try {
                let e = (await (0, C.eb)({ previousInterviewId: A.interviewId })).incode_parameters;
                if (e?.session_token == null || null == e.interview_id) {
                    D("fallback_bootstrap_incomplete"), p({ type: "CAPTURE_FAILED" });
                    return;
                }
                E({ sessionToken: e.session_token, interviewId: e.interview_id }), p({ type: "FALLBACK_READY" });
            } catch (e) {
                D("fallback_bootstrap_failed"), (d.current = !1), p({ type: "CAPTURE_FAILED" });
            }
        }, [A.interviewId]),
        w = i.useCallback(() => {
            (d.current = !1), E({ sessionToken: n, interviewId: a }), p({ type: "RETRY_CAPTURE" });
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
                        D("missing_interview_id"), L(t) || p({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    let n = await P(e);
                    !L(t) && (n || (D("registration_failed"), p({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [g, A.interviewId]),
        i.useEffect(() => {
            var e, n;
            if (!o || "capturing" !== I) return;
            let i = new AbortController(),
                { signal: a } = i,
                _ = d.current,
                E =
                    ((e = _ ? m.VF.ID_VERIFICATION : s),
                    (n = A.sessionToken),
                    e !== m.VF.ID_VERIFICATION
                        ? {
                              tag: "incode-selfie",
                              config: y,
                              wasmPipelines: ["selfie", "onDeviceSelfie"],
                              captureFailureReason: "selfie_capture_error",
                          }
                        : l
                          ? {
                                tag: "incode-id",
                                config: k,
                                wasmPipelines: ["idCapture"],
                                captureFailureReason: "id_capture_error",
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
                            (N(),
                            await (0, v.mj)({
                                apiURL: (e = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? e : `${e}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: E.wasmPipelines },
                            }),
                            L(a) || (await (0, T.T7)({ token: A.sessionToken }), L(a)))
                        )
                            return;
                        let n = c.current;
                        if (null == n) throw Error("Incode capture failed to initialize.");
                        let i = () => {
                            (u.current = x(E.tag, {
                                container: n,
                                config: E.config,
                                signal: a,
                                onFinish: () => {
                                    p({ type: "CAPTURE_COMPLETED" });
                                },
                                onError: () => {
                                    "incode-selfie" === E.tag && A.interviewId.length > 0
                                        ? (d.current || D("selfie_error_triggered_fallback"), R())
                                        : (D(E.captureFailureReason), p({ type: "CAPTURE_FAILED" }));
                                },
                            })),
                                f(!0);
                        };
                        if (_) i();
                        else {
                            let e = x("incode-consent", {
                                container: n,
                                config: { consentId: r },
                                signal: a,
                                onFinish: () => {
                                    e.parentNode?.removeChild(e), i();
                                },
                                onError: () => {
                                    D("consent_error"), p({ type: "CAPTURE_FAILED" });
                                },
                            });
                            (u.current = e), f(!0);
                        }
                    } catch (e) {
                        if (L(a)) return;
                        D("sdk_init_error"), p({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    i.abort(), f(!1);
                    let e = u.current;
                    e?.parentNode != null && e.parentNode.removeChild(e), (u.current = null), N();
                }
            );
        }, [t, A, I, R, r, s, l, o]),
        { containerRef: c, error: h, waitingForResult: F, incodeElementMounted: _, retryCapture: w }
    );
};
var V = n(793163),
    j = n(516761),
    O = n(375708),
    U = n(768971),
    B = n(700129);
let M = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: a,
            interviewId: v,
            initialMethod: T,
            onClose: h,
            onComplete: F,
            onCancel: R,
            hideFooter: w,
            onDeviceIdCapture: y,
            transitionState: k,
        } = e,
        b = i.useRef(!1),
        N = T === m.VF.FACIAL_AGE_ESTIMATION || T === m.VF.ID_VERIFICATION ? T : null,
        [L, D] = i.useState(N),
        [P, x] = i.useState(null != N ? { sessionToken: n, consentId: a, interviewId: v } : null),
        [M, W] = i.useState(!1),
        G = i.useCallback(async (e) => {
            D(e), W(!1), x(null);
            try {
                let {
                    session_token: t,
                    consent_id: n,
                    interview_id: r,
                } = (await (0, C.uf)({ method: e, vendor: m.XM.INCODE })).incode_parameters ?? {};
                null == t || null == n || null == r ? W(!0) : x({ sessionToken: t, consentId: n, interviewId: r });
            } catch {
                W(!0);
            }
        }, []),
        K = i.useCallback(() => {
            b.current || ((b.current = !0), F(), h());
        }, [F, h]),
        q = (0, o.M)((0, A.Ay)()),
        {
            containerRef: Y,
            error: Q,
            waitingForResult: X,
            incodeElementMounted: Z,
            retryCapture: $,
        } = S({
            apiUrl: t,
            sessionToken: P?.sessionToken ?? n,
            consentId: P?.consentId ?? a,
            interviewId: P?.interviewId ?? v,
            flow: L ?? void 0,
            onDeviceIdCapture: y,
            enabled: null != L && null != P,
        }),
        J = Q || M,
        z = i.useCallback(() => {
            M && null != L ? G(L) : $();
        }, [M, L, G, $]),
        H = i.useCallback(() => {
            (0, c.hasModalOpen)(m.SW) && K();
        }, [K]);
    (0, g.dZ)(H);
    let ee = J
        ? (0, r.jsx)(u.$, { variant: "secondary", icon: d.f, text: O.intl.string(O.t["/nicWo"]), onClick: z })
        : null != R
          ? (0, r.jsx)(I.Q, { variant: "secondary", text: O.intl.string(O.t["4gTnU0"]), onClick: R })
          : null;
    return null == L
        ? (0, r.jsx)(l.k, {
              transitionState: k,
              onClose: h,
              gradientColor: "blue",
              graphic: { type: "image", src: B.A },
              title: O.intl.string(j.default.eZvwAe),
              subtitle: O.intl.string(j.default["5yWXmT"]),
              actionBarInput: (0, r.jsx)(I.Q, { variant: "secondary", text: O.intl.string(O.t.fjKFae), onClick: h }),
              children: (0, r.jsxs)(p.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, r.jsx)(E.PQ, {
                          variant: "clickable",
                          title: O.intl.string(j.default.rgXXcW),
                          description: O.intl.string(j.default.fm7qBC),
                          onButtonPress: () => void G(m.VF.FACIAL_AGE_ESTIMATION),
                      }),
                      (0, r.jsx)(E.PQ, {
                          variant: "clickable",
                          title: O.intl.string(j.default["NeVlw/"]),
                          description: O.intl.string(j.default.ARmJ0M),
                          onButtonPress: () => void G(m.VF.ID_VERIFICATION),
                      }),
                  ],
              }),
          })
        : (0, r.jsx)(V.A, {
              parentComponent: "IncodeAgeVerificationModal",
              transitionState: k,
              onBackToStart: h,
              footerRightSlot: ee,
              hideFooter: w,
              children: J
                  ? (0, r.jsx)(
                        "div",
                        {
                            className: s()(U.qV, U.eg),
                            children: (0, r.jsx)(_.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: U.h5,
                                children: O.intl.string(O.t.c6kn6F),
                            }),
                        },
                        "status",
                    )
                  : X
                    ? (0, r.jsxs)(
                          "div",
                          {
                              className: s()(U.qV, U.eg),
                              children: [
                                  (0, r.jsx)(f.y, { type: f.y.Type.SPINNING_CIRCLE }),
                                  (0, r.jsx)(_.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      className: U.h5,
                                      children: O.intl.string(O.t.wJVyYR),
                                  }),
                              ],
                          },
                          "status",
                      )
                    : (0, r.jsxs)(
                          "div",
                          {
                              className: U.yq,
                              children: [
                                  (0, r.jsx)("div", {
                                      ref: Y,
                                      "data-incode-theme": q ? "dark" : "light",
                                      className: U.qV,
                                  }),
                                  Z
                                      ? null
                                      : (0, r.jsx)("div", {
                                            className: U.BT,
                                            children: (0, r.jsx)(f.y, { type: f.y.Type.SPINNING_CIRCLE }),
                                        }),
                              ],
                          },
                          "capture",
                      ),
          });
};
