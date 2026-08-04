n.d(t, { default: () => J });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    l = n.n(a),
    s = n(772707),
    o = n(462887),
    c = n(192308),
    u = n(821609),
    d = n(663417),
    f = n(123292),
    p = n(331322),
    _ = n(834730),
    I = n(289873);
n(748951), n(737045), n(588816), n(507861);
var E = n(736653),
    A = n(632738),
    g = n(295972),
    C = n(36149),
    v = n(979555),
    y = n(200432),
    R = n(844887),
    T = n(217870),
    F = n(569668),
    h = n(731738),
    b = n(807393),
    k = n(40449),
    m = n(465798);
let w = { showTutorial: !0, autoCaptureTimeout: 10, captureAttempts: 3 },
    L = { en: { idv2: { capture: { processing: { uploading: "Processing", verifying: "Processing" } } } } },
    D = !1,
    N = {
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
    S = {
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
function P(e, t) {
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
function O() {
    try {
        (0, v.cL)();
    } catch {}
}
function x(e) {
    return e.aborted;
}
function V(e) {
    b.A.increment({ name: h.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function M(e) {
    try {
        return await (0, g.Zo)(e), !0;
    } catch {
        return !1;
    }
}
function U(e, t) {
    let { container: n, config: i, signal: r, onFinish: a, onError: l } = t,
        s = document.createElement(e);
    s.className = m.x;
    let o = !1;
    function c(e) {
        x(r) || o || ((o = !0), e());
    }
    return (s.onFinish = () => c(a)), (s.onError = () => c(l)), (s.config = i), n.appendChild(s), s;
}
function j(e, t) {
    return e !== k.VF.ID_VERIFICATION
        ? !0 === N.onDeviceFaceResultsSubmissionEnabled
            ? ["selfie", "onDeviceSelfie"]
            : ["selfie"]
        : t
          ? ["idCapture"]
          : [];
}
let q = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: i,
            interviewId: a,
            flow: l = k.VF.FACIAL_AGE_ESTIMATION,
            onDeviceIdCapture: s = !1,
            enabled: o = !0,
            webviewHost: c,
        } = e,
        u = r.useRef(null),
        d = r.useRef(null),
        f = r.useRef(!1),
        [p, _] = r.useReducer(P, "capturing"),
        [I, E] = r.useState(!1),
        [A, C] = r.useState(!1),
        [h, b] = r.useState({ sessionToken: n, interviewId: a });
    r.useEffect(() => {
        let e = j(l, s);
        0 !== e.length && (0, T.ZU)((0, T.Dz)({ pipelines: e })).catch(() => {});
    }, []),
        r.useEffect(() => {
            b((e) =>
                e.sessionToken === n && e.interviewId === a
                    ? e
                    : ((f.current = !1), { sessionToken: n, interviewId: a }),
            );
        }, [n, a]),
        r.useEffect(() => {
            C(!1);
        }, [h.sessionToken, h.interviewId]);
    let m = "waiting_for_result" === p,
        w = "error" === p,
        q = "bootstrapping_fallback" === p,
        B = "waiting_for_result" === p || "bootstrapping_fallback" === p,
        W = r.useCallback(
            (e) => {
                if ("bootstrapping_fallback" === p) {
                    if ("error" in e) {
                        V("fallback_bootstrap_failed"), (f.current = !1), _({ type: "CAPTURE_FAILED" });
                        return;
                    }
                    b({ sessionToken: e.sessionToken, interviewId: e.interviewId }), _({ type: "FALLBACK_READY" });
                }
            },
            [p],
        ),
        G = r.useCallback(async () => {
            if (f.current) {
                V("secondary_flow_failed"), _({ type: "CAPTURE_FAILED" });
                return;
            }
            if (((f.current = !0), _({ type: "FALLBACK_STARTED" }), null != c))
                return void c.onFallbackRequest(h.interviewId);
            try {
                let e = (await (0, g.eb)({ previousInterviewId: h.interviewId })).incode_parameters;
                if (e?.session_token == null || null == e.interview_id) {
                    V("fallback_bootstrap_incomplete"), _({ type: "CAPTURE_FAILED" });
                    return;
                }
                b({ sessionToken: e.session_token, interviewId: e.interview_id }), _({ type: "FALLBACK_READY" });
            } catch (e) {
                V("fallback_bootstrap_failed"), (f.current = !1), _({ type: "CAPTURE_FAILED" });
            }
        }, [h.interviewId, c]),
        K = r.useCallback(() => {
            (f.current = !1), C(!1), b({ sessionToken: n, interviewId: a }), _({ type: "RETRY_CAPTURE" });
        }, [n, a]);
    return (
        r.useEffect(() => {
            if (!m) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                (async function () {
                    let e = h.interviewId;
                    if (0 === e.length) {
                        V("missing_interview_id"), x(t) || _({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    if (null != c) return c.onCaptureComplete(e);
                    let n = await M(e);
                    !x(t) && (n || (V("registration_failed"), _({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [m, h.interviewId, c]),
        r.useEffect(() => {
            if ("bootstrapping_fallback" === p) {
                let e = setTimeout(() => {
                    V("fallback_bootstrap_failed"), (f.current = !1), _({ type: "CAPTURE_FAILED" });
                }, 3e4);
                return () => {
                    clearTimeout(e);
                };
            }
            if (("waiting_for_result" !== p && !A) || (null != c && "waiting_for_result" === p)) return;
            let e = setTimeout(() => {
                C(!1), V("result_wait_timeout"), _({ type: "VERIFICATION_FAILED" });
            }, 3e4);
            return () => {
                clearTimeout(e);
            };
        }, [p, A, c]),
        r.useEffect(() => {
            var e, n;
            let r, a;
            if (!o || "capturing" !== p || 0 === h.sessionToken.length) return;
            let c = new AbortController(),
                { signal: I } = c,
                A = f.current,
                g =
                    ((e = A ? k.VF.ID_VERIFICATION : l),
                    (n = h.sessionToken),
                    (a = j(e, s)),
                    e !== k.VF.ID_VERIFICATION
                        ? {
                              tag: "incode-selfie",
                              config: N,
                              wasmPipelines: a,
                              captureFailureReason: "selfie_capture_error",
                              requiresManualFinish: !0,
                          }
                        : s
                          ? {
                                tag: "incode-id",
                                config: S,
                                wasmPipelines: a,
                                captureFailureReason: "id_capture_error",
                                requiresManualFinish: !0,
                            }
                          : {
                                tag: "incode-flow",
                                config: { token: n },
                                wasmPipelines: a,
                                captureFailureReason: "id_capture_error",
                                requiresManualFinish: !1,
                            }),
                T = !1;
            function b(e) {
                f.current || V(e), G();
            }
            return (
                (async function () {
                    try {
                        let n;
                        if (
                            (O(),
                            D || ((D = !0), (0, F.Q5)((0, F.hU)({ translations: L }))),
                            await (0, v.mj)({
                                apiURL: (n = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? n : `${n}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: g.wasmPipelines },
                            }),
                            x(I) || (await (0, R.T7)({ token: h.sessionToken }), x(I)))
                        )
                            return;
                        let a = u.current;
                        if (null == a) throw Error("Incode capture failed to initialize.");
                        function e() {
                            null != a &&
                                ("incode-selfie" === g.tag &&
                                    (r = (0, y.Ns)((e) => {
                                        "screenOpened" === e.code && e.screen?.endsWith("Exhausted") && (T = !0);
                                    })),
                                (d.current = U(g.tag, {
                                    container: a,
                                    config: g.config,
                                    signal: I,
                                    onFinish: () => {
                                        "incode-selfie" === g.tag && T && !f.current
                                            ? b("selfie_error_triggered_fallback")
                                            : g.requiresManualFinish
                                              ? (C(!0),
                                                (async () => {
                                                    try {
                                                        let e = await (0, R.uR)(void 0, I);
                                                        if (x(I)) return;
                                                        C(!1);
                                                        let t =
                                                            e?.action === "rejected" ||
                                                            e?.scoreStatus === "FAIL" ||
                                                            e?.scoreStatus === "MANUAL_FAIL";
                                                        if ("incode-selfie" === g.tag && !f.current && t)
                                                            return void b("result_gate_triggered_fallback");
                                                        _({ type: "CAPTURE_COMPLETED" });
                                                    } catch {
                                                        if (x(I)) return;
                                                        C(!1),
                                                            V("finish_status_error"),
                                                            _({ type: "VERIFICATION_FAILED" });
                                                    }
                                                })())
                                              : _({ type: "CAPTURE_COMPLETED" });
                                    },
                                    onError: () => {
                                        "incode-selfie" === g.tag && h.interviewId.length > 0
                                            ? b("selfie_error_triggered_fallback")
                                            : (V(g.captureFailureReason), _({ type: "CAPTURE_FAILED" }));
                                    },
                                })),
                                E(!0));
                        }
                        if (A) e();
                        else {
                            let t = U("incode-consent", {
                                container: a,
                                config: { consentId: i },
                                signal: I,
                                onFinish: () => {
                                    t.parentNode?.removeChild(t), e();
                                },
                                onError: () => {
                                    V("consent_error"), _({ type: "CAPTURE_FAILED" });
                                },
                            });
                            (d.current = t), E(!0);
                        }
                    } catch (e) {
                        if (x(I)) return;
                        V("sdk_init_error"), _({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    c.abort(), r?.(), E(!1);
                    let e = d.current;
                    e?.parentNode != null && e.parentNode.removeChild(e), (d.current = null), O();
                }
            );
        }, [t, h, p, G, i, l, s, o]),
        {
            containerRef: u,
            error: w,
            waitingForResult: B,
            awaitingFinishStatus: A,
            incodeElementMounted: I,
            retryCapture: K,
            applyFallbackSession: W,
            isAwaitingFallbackSession: q,
        }
    );
};
var B = n(793163),
    W = n(610402),
    G = n(516761),
    K = n(375708),
    Q = n(792675),
    Y = n(700129);
let J = function (e) {
    let { onClose: t, onComplete: n, onCancel: a, hideFooter: v, onDeviceIdCapture: y, transitionState: R } = e,
        T = !0 === e.pickerMode ? null : e.initialSession,
        F = !0 === e.pickerMode ? null : e.initialMethod,
        h = r.useRef(!1),
        [b, m] = r.useState(F),
        [w, L] = r.useState(T),
        [D, N] = r.useState(!1),
        S = r.useCallback(async (e) => {
            m(e), N(!1), L(null);
            try {
                let t = await (0, g.D0)(e);
                null == t ? N(!0) : L(t);
            } catch {
                N(!0);
            }
        }, []),
        P = r.useCallback(() => {
            h.current || ((h.current = !0), n(), t());
        }, [n, t]),
        O = (0, o.M)((0, E.Ay)()),
        x = !0 === v,
        V = r.useMemo(() => (x ? { onCaptureComplete: W.Qk, onFallbackRequest: W.qm } : void 0), [x]),
        {
            containerRef: M,
            error: U,
            waitingForResult: j,
            awaitingFinishStatus: J,
            incodeElementMounted: Z,
            retryCapture: X,
            applyFallbackSession: $,
            isAwaitingFallbackSession: z,
        } = q({
            apiUrl: w?.apiUrl ?? "",
            sessionToken: w?.sessionToken ?? "",
            consentId: w?.consentId ?? "",
            interviewId: w?.interviewId ?? "",
            flow: b ?? void 0,
            onDeviceIdCapture: y,
            enabled: null != b && null != w,
            webviewHost: V,
        });
    r.useEffect(() => {
        if (!x || !z) return;
        let e = window;
        return (
            (e[W.fl] = $),
            () => {
                e[W.fl] === $ && delete e[W.fl];
            }
        );
    }, [x, z, $]);
    let H = U || D,
        ee = r.useCallback(() => {
            D && null != b ? S(b) : X();
        }, [D, b, S, X]),
        et = r.useCallback(() => {
            !v && (0, c.hasModalOpen)(k.SW) && (0, C.Q9)() && P();
        }, [P, v]);
    (0, C.dZ)(et);
    let en = r.useCallback(() => {
            a?.(), t();
        }, [a, t]),
        ei = H
            ? (0, i.jsx)(u.$, { variant: "secondary", icon: d.f, text: K.intl.string(K.t["/nicWo"]), onClick: ee })
            : null != a
              ? (0, i.jsx)(f.Q, { variant: "secondary", text: K.intl.string(K.t["4gTnU0"]), onClick: en })
              : null;
    return null == b
        ? (0, i.jsx)(s.k, {
              transitionState: R,
              onClose: t,
              gradientColor: "blue",
              graphic: { type: "image", src: Y.A },
              title: K.intl.string(G.default.eZvwAe),
              subtitle: K.intl.string(G.default["5yWXmT"]),
              actionBarInput: (0, i.jsx)(f.Q, { variant: "secondary", text: K.intl.string(K.t.fjKFae), onClick: t }),
              children: (0, i.jsxs)(p.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, i.jsx)(A.PQ, {
                          variant: "clickable",
                          title: K.intl.string(G.default.rgXXcW),
                          description: K.intl.string(G.default.fm7qBC),
                          onButtonPress: () => void S(k.VF.FACIAL_AGE_ESTIMATION),
                      }),
                      (0, i.jsx)(A.PQ, {
                          variant: "clickable",
                          title: K.intl.string(G.default["NeVlw/"]),
                          description: K.intl.string(G.default.ARmJ0M),
                          onButtonPress: () => void S(k.VF.ID_VERIFICATION),
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(B.A, {
              parentComponent: "IncodeAgeVerificationModal",
              transitionState: R,
              onBackToStart: t,
              footerRightSlot: ei,
              hideFooter: v,
              children: H
                  ? (0, i.jsx)(
                        "div",
                        {
                            className: l()(Q.qV, Q.eg),
                            children: (0, i.jsx)(_.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: Q.h5,
                                children: K.intl.string(K.t.c6kn6F),
                            }),
                        },
                        "status",
                    )
                  : j
                    ? (0, i.jsxs)(
                          "div",
                          {
                              className: l()(Q.qV, Q.eg),
                              children: [
                                  (0, i.jsx)(I.y, { type: I.y.Type.SPINNING_CIRCLE }),
                                  (0, i.jsx)(_.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      className: Q.h5,
                                      children: K.intl.string(K.t.wJVyYR),
                                  }),
                              ],
                          },
                          "status",
                      )
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: l()(Q.yq, { [Q.GS]: v }),
                              children: [
                                  (0, i.jsx)("div", {
                                      ref: M,
                                      "data-incode-theme": O ? "dark" : "light",
                                      className: l()(Q.qV, { [Q.GS]: v }),
                                  }),
                                  !Z || J
                                      ? (0, i.jsx)("div", {
                                            className: Q.BT,
                                            children: (0, i.jsx)(I.y, { type: I.y.Type.SPINNING_CIRCLE }),
                                        })
                                      : null,
                              ],
                          },
                          "capture",
                      ),
          });
};
