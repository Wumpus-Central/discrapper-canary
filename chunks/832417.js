n.d(t, { default: () => K });
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
n(683590), n(896984), n(737952), n(348292);
var E = n(736653),
    A = n(632738),
    C = n(295972),
    g = n(36149),
    R = n(448026),
    y = n(354331),
    F = n(651386),
    T = n(277262),
    v = n(731738),
    h = n(807393),
    b = n(40449),
    k = n(465798);
let m = { showTutorial: !0, autoCaptureTimeout: 10, captureAttempts: 3 },
    w = {
        ...m,
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
    L = {
        ...m,
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
function D(e, t) {
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
        (0, R.cL)();
    } catch {}
}
function S(e) {
    return e.aborted;
}
function P(e) {
    h.A.increment({ name: v.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function O(e) {
    try {
        return await (0, C.Zo)(e), !0;
    } catch {
        return !1;
    }
}
function x(e, t) {
    let { container: n, config: i, signal: r, onFinish: a, onError: l } = t,
        s = document.createElement(e);
    s.className = k.x;
    let o = !1;
    function c(e) {
        S(r) || o || ((o = !0), e());
    }
    return (s.onFinish = () => c(a)), (s.onError = () => c(l)), (s.config = i), n.appendChild(s), s;
}
function V(e, t) {
    return e !== b.VF.ID_VERIFICATION
        ? !0 === w.onDeviceFaceResultsSubmissionEnabled
            ? ["selfie", "onDeviceSelfie"]
            : ["selfie"]
        : t
          ? ["idCapture"]
          : [];
}
let M = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: i,
            interviewId: a,
            flow: l = b.VF.FACIAL_AGE_ESTIMATION,
            onDeviceIdCapture: s = !1,
            enabled: o = !0,
            webviewHost: c,
        } = e,
        u = r.useRef(null),
        d = r.useRef(null),
        f = r.useRef(!1),
        [p, _] = r.useReducer(D, "capturing"),
        [I, E] = r.useState(!1),
        [A, g] = r.useState(!1),
        [v, h] = r.useState({ sessionToken: n, interviewId: a });
    r.useEffect(() => {
        let e = V(l, s);
        0 !== e.length && (0, T.ZU)((0, T.Dz)({ pipelines: e })).catch(() => {});
    }, []),
        r.useEffect(() => {
            h((e) =>
                e.sessionToken === n && e.interviewId === a
                    ? e
                    : ((f.current = !1), { sessionToken: n, interviewId: a }),
            );
        }, [n, a]),
        r.useEffect(() => {
            g(!1);
        }, [v.sessionToken, v.interviewId]);
    let k = "waiting_for_result" === p,
        m = "error" === p,
        M = "bootstrapping_fallback" === p,
        j = "waiting_for_result" === p || "bootstrapping_fallback" === p,
        U = r.useCallback(
            (e) => {
                if ("bootstrapping_fallback" === p) {
                    if ("error" in e) {
                        P("fallback_bootstrap_failed"), (f.current = !1), _({ type: "CAPTURE_FAILED" });
                        return;
                    }
                    h({ sessionToken: e.sessionToken, interviewId: e.interviewId }), _({ type: "FALLBACK_READY" });
                }
            },
            [p],
        ),
        q = r.useCallback(async () => {
            if (f.current) {
                P("secondary_flow_failed"), _({ type: "CAPTURE_FAILED" });
                return;
            }
            if (((f.current = !0), _({ type: "FALLBACK_STARTED" }), null != c))
                return void c.onFallbackRequest(v.interviewId);
            try {
                let e = (await (0, C.eb)({ previousInterviewId: v.interviewId })).incode_parameters;
                if (e?.session_token == null || null == e.interview_id) {
                    P("fallback_bootstrap_incomplete"), _({ type: "CAPTURE_FAILED" });
                    return;
                }
                h({ sessionToken: e.session_token, interviewId: e.interview_id }), _({ type: "FALLBACK_READY" });
            } catch (e) {
                P("fallback_bootstrap_failed"), (f.current = !1), _({ type: "CAPTURE_FAILED" });
            }
        }, [v.interviewId, c]),
        B = r.useCallback(() => {
            (f.current = !1), g(!1), h({ sessionToken: n, interviewId: a }), _({ type: "RETRY_CAPTURE" });
        }, [n, a]);
    return (
        r.useEffect(() => {
            if (!k) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                (async function () {
                    let e = v.interviewId;
                    if (0 === e.length) {
                        P("missing_interview_id"), S(t) || _({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    if (null != c) return c.onCaptureComplete(e);
                    let n = await O(e);
                    !S(t) && (n || (P("registration_failed"), _({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [k, v.interviewId, c]),
        r.useEffect(() => {
            if ("bootstrapping_fallback" === p) {
                let e = setTimeout(() => {
                    P("fallback_bootstrap_failed"), (f.current = !1), _({ type: "CAPTURE_FAILED" });
                }, 3e4);
                return () => {
                    clearTimeout(e);
                };
            }
            if (("waiting_for_result" !== p && !A) || (null != c && "waiting_for_result" === p)) return;
            let e = setTimeout(() => {
                g(!1), P("result_wait_timeout"), _({ type: "VERIFICATION_FAILED" });
            }, 3e4);
            return () => {
                clearTimeout(e);
            };
        }, [p, A, c]),
        r.useEffect(() => {
            var e, n;
            let r, a;
            if (!o || "capturing" !== p) return;
            let c = new AbortController(),
                { signal: I } = c,
                A = f.current,
                C =
                    ((e = A ? b.VF.ID_VERIFICATION : l),
                    (n = v.sessionToken),
                    (a = V(e, s)),
                    e !== b.VF.ID_VERIFICATION
                        ? {
                              tag: "incode-selfie",
                              config: w,
                              wasmPipelines: a,
                              captureFailureReason: "selfie_capture_error",
                              requiresManualFinish: !0,
                          }
                        : s
                          ? {
                                tag: "incode-id",
                                config: L,
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
            function h(e) {
                f.current || P(e), q();
            }
            return (
                (async function () {
                    try {
                        let n;
                        if (
                            (N(),
                            await (0, R.mj)({
                                apiURL: (n = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? n : `${n}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: C.wasmPipelines },
                            }),
                            S(I) || (await (0, F.T7)({ token: v.sessionToken }), S(I)))
                        )
                            return;
                        let a = u.current;
                        if (null == a) throw Error("Incode capture failed to initialize.");
                        function e() {
                            null != a &&
                                ("incode-selfie" === C.tag &&
                                    (r = (0, y.Ns)((e) => {
                                        "screenOpened" === e.code && e.screen?.endsWith("Exhausted") && (T = !0);
                                    })),
                                (d.current = x(C.tag, {
                                    container: a,
                                    config: C.config,
                                    signal: I,
                                    onFinish: () => {
                                        "incode-selfie" === C.tag && T && !f.current
                                            ? h("selfie_error_triggered_fallback")
                                            : C.requiresManualFinish
                                              ? (g(!0),
                                                (async () => {
                                                    try {
                                                        let e = await (0, F.uR)(void 0, I);
                                                        if (S(I)) return;
                                                        g(!1);
                                                        let t =
                                                            e?.action === "rejected" ||
                                                            e?.scoreStatus === "FAIL" ||
                                                            e?.scoreStatus === "MANUAL_FAIL";
                                                        if ("incode-selfie" === C.tag && !f.current && t)
                                                            return void h("result_gate_triggered_fallback");
                                                        _({ type: "CAPTURE_COMPLETED" });
                                                    } catch {
                                                        if (S(I)) return;
                                                        g(!1),
                                                            P("finish_status_error"),
                                                            _({ type: "VERIFICATION_FAILED" });
                                                    }
                                                })())
                                              : _({ type: "CAPTURE_COMPLETED" });
                                    },
                                    onError: () => {
                                        "incode-selfie" === C.tag && v.interviewId.length > 0
                                            ? h("selfie_error_triggered_fallback")
                                            : (P(C.captureFailureReason), _({ type: "CAPTURE_FAILED" }));
                                    },
                                })),
                                E(!0));
                        }
                        if (A) e();
                        else {
                            let t = x("incode-consent", {
                                container: a,
                                config: { consentId: i },
                                signal: I,
                                onFinish: () => {
                                    t.parentNode?.removeChild(t), e();
                                },
                                onError: () => {
                                    P("consent_error"), _({ type: "CAPTURE_FAILED" });
                                },
                            });
                            (d.current = t), E(!0);
                        }
                    } catch (e) {
                        if (S(I)) return;
                        P("sdk_init_error"), _({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    c.abort(), r?.(), E(!1);
                    let e = d.current;
                    e?.parentNode != null && e.parentNode.removeChild(e), (d.current = null), N();
                }
            );
        }, [t, v, p, q, i, l, s, o]),
        {
            containerRef: u,
            error: m,
            waitingForResult: j,
            awaitingFinishStatus: A,
            incodeElementMounted: I,
            retryCapture: B,
            applyFallbackSession: U,
            isAwaitingFallbackSession: M,
        }
    );
};
var j = n(793163),
    U = n(610402),
    q = n(516761),
    B = n(375708),
    W = n(792675),
    G = n(700129);
let K = function (e) {
    let { onClose: t, onComplete: n, onCancel: a, hideFooter: R, onDeviceIdCapture: y, transitionState: F } = e,
        T = !0 === e.pickerMode ? null : e.initialSession,
        v = !0 === e.pickerMode ? null : e.initialMethod,
        h = r.useRef(!1),
        [k, m] = r.useState(v),
        [w, L] = r.useState(T),
        [D, N] = r.useState(!1),
        S = r.useCallback(async (e) => {
            m(e), N(!1), L(null);
            try {
                let t = await (0, C.D0)(e);
                null == t ? N(!0) : L(t);
            } catch {
                N(!0);
            }
        }, []),
        P = r.useCallback(() => {
            h.current || ((h.current = !0), n(), t());
        }, [n, t]),
        O = (0, o.M)((0, E.Ay)()),
        x = !0 === R,
        V = r.useMemo(() => (x ? { onCaptureComplete: U.Qk, onFallbackRequest: U.qm } : void 0), [x]),
        {
            containerRef: K,
            error: Q,
            waitingForResult: Y,
            awaitingFinishStatus: J,
            incodeElementMounted: Z,
            retryCapture: X,
            applyFallbackSession: $,
            isAwaitingFallbackSession: z,
        } = M({
            apiUrl: w?.apiUrl ?? "",
            sessionToken: w?.sessionToken ?? "",
            consentId: w?.consentId ?? "",
            interviewId: w?.interviewId ?? "",
            flow: k ?? void 0,
            onDeviceIdCapture: y,
            enabled: null != k && null != w,
            webviewHost: V,
        });
    r.useEffect(() => {
        if (!x || !z) return;
        let e = window;
        return (
            (e[U.fl] = $),
            () => {
                e[U.fl] === $ && delete e[U.fl];
            }
        );
    }, [x, z, $]);
    let H = Q || D,
        ee = r.useCallback(() => {
            D && null != k ? S(k) : X();
        }, [D, k, S, X]),
        et = r.useCallback(() => {
            !R && (0, c.hasModalOpen)(b.SW) && (0, g.Q9)() && P();
        }, [P, R]);
    (0, g.dZ)(et);
    let en = r.useCallback(() => {
            a?.(), t();
        }, [a, t]),
        ei = H
            ? (0, i.jsx)(u.$, { variant: "secondary", icon: d.f, text: B.intl.string(B.t["/nicWo"]), onClick: ee })
            : null != a
              ? (0, i.jsx)(f.Q, { variant: "secondary", text: B.intl.string(B.t["4gTnU0"]), onClick: en })
              : null;
    return null == k
        ? (0, i.jsx)(s.k, {
              transitionState: F,
              onClose: t,
              gradientColor: "blue",
              graphic: { type: "image", src: G.A },
              title: B.intl.string(q.default.eZvwAe),
              subtitle: B.intl.string(q.default["5yWXmT"]),
              actionBarInput: (0, i.jsx)(f.Q, { variant: "secondary", text: B.intl.string(B.t.fjKFae), onClick: t }),
              children: (0, i.jsxs)(p.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, i.jsx)(A.PQ, {
                          variant: "clickable",
                          title: B.intl.string(q.default.rgXXcW),
                          description: B.intl.string(q.default.fm7qBC),
                          onButtonPress: () => void S(b.VF.FACIAL_AGE_ESTIMATION),
                      }),
                      (0, i.jsx)(A.PQ, {
                          variant: "clickable",
                          title: B.intl.string(q.default["NeVlw/"]),
                          description: B.intl.string(q.default.ARmJ0M),
                          onButtonPress: () => void S(b.VF.ID_VERIFICATION),
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(j.A, {
              parentComponent: "IncodeAgeVerificationModal",
              transitionState: F,
              onBackToStart: t,
              footerRightSlot: ei,
              hideFooter: R,
              children: H
                  ? (0, i.jsx)(
                        "div",
                        {
                            className: l()(W.qV, W.eg),
                            children: (0, i.jsx)(_.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: W.h5,
                                children: B.intl.string(B.t.c6kn6F),
                            }),
                        },
                        "status",
                    )
                  : Y
                    ? (0, i.jsxs)(
                          "div",
                          {
                              className: l()(W.qV, W.eg),
                              children: [
                                  (0, i.jsx)(I.y, { type: I.y.Type.SPINNING_CIRCLE }),
                                  (0, i.jsx)(_.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      className: W.h5,
                                      children: B.intl.string(B.t.wJVyYR),
                                  }),
                              ],
                          },
                          "status",
                      )
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: l()(W.yq, { [W.GS]: R }),
                              children: [
                                  (0, i.jsx)("div", {
                                      ref: K,
                                      "data-incode-theme": O ? "dark" : "light",
                                      className: l()(W.qV, { [W.GS]: R }),
                                  }),
                                  !Z || J
                                      ? (0, i.jsx)("div", {
                                            className: W.BT,
                                            children: (0, i.jsx)(I.y, { type: I.y.Type.SPINNING_CIRCLE }),
                                        })
                                      : null,
                              ],
                          },
                          "capture",
                      ),
          });
};
