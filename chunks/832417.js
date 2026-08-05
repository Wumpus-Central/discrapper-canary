n.d(t, { default: () => W });
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
    _ = n(331322),
    I = n(834730),
    p = n(289873);
n(748951), n(737045), n(588816), n(507861);
var E = n(736653),
    A = n(632738),
    g = n(295972),
    C = n(36149),
    F = n(979555),
    T = n(200432),
    R = n(844887),
    v = n(217870),
    y = n(569668),
    k = n(731738),
    h = n(807393),
    b = n(40449),
    w = n(516761),
    m = n(375708),
    L = n(465798);
let N = !1,
    D = { da: "da-DK", fi: "fi-FI", no: "nb-NO" },
    S = {
        showTutorial: !0,
        autoCaptureTimeout: 10,
        captureAttempts: 3,
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
    };
function O(e, t) {
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
function V() {
    try {
        (0, F.cL)();
    } catch {}
}
function P(e) {
    return e.aborted;
}
function x(e) {
    h.A.increment({ name: k.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function M(e) {
    try {
        return await (0, g.Zo)(e), !0;
    } catch {
        return !1;
    }
}
function j(e, t) {
    let { container: n, config: i, signal: r, onFinish: a, onError: l } = t,
        s = document.createElement(e);
    s.className = L.x;
    let o = !1;
    function c(e) {
        P(r) || o || ((o = !0), e());
    }
    return (s.onFinish = () => c(a)), (s.onError = () => c(l)), (s.config = i), n.appendChild(s), s;
}
function U(e, t) {
    return t
        ? []
        : e !== b.VF.ID_VERIFICATION
          ? !0 === S.onDeviceFaceResultsSubmissionEnabled
              ? ["selfie", "onDeviceSelfie"]
              : ["selfie"]
          : [];
}
let q = function (e) {
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
        [_, I] = r.useReducer(O, "capturing"),
        [p, E] = r.useState(!1),
        [A, C] = r.useState(!1),
        [k, h] = r.useState({ sessionToken: n, interviewId: a, consentId: i });
    r.useEffect(() => {
        let e = U(l, s);
        0 !== e.length && (0, v.ZU)((0, v.Dz)({ pipelines: e })).catch(() => {});
    }, []),
        r.useEffect(() => {
            h((e) =>
                e.sessionToken === n && e.interviewId === a && e.consentId === i
                    ? e
                    : ((f.current = !1), { sessionToken: n, interviewId: a, consentId: i }),
            );
        }, [n, a, i]),
        r.useEffect(() => {
            C(!1);
        }, [k.sessionToken, k.interviewId]);
    let L = "waiting_for_result" === _,
        q = "error" === _,
        B = "bootstrapping_fallback" === _,
        G = "waiting_for_result" === _ || "bootstrapping_fallback" === _,
        K = r.useCallback(
            (e) => {
                if ("bootstrapping_fallback" === _) {
                    if ("error" in e) {
                        x("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" });
                        return;
                    }
                    h((t) => ({ sessionToken: e.sessionToken, interviewId: e.interviewId, consentId: t.consentId })),
                        I({ type: "FALLBACK_READY" });
                }
            },
            [_],
        ),
        Q = r.useCallback(async () => {
            if (f.current) {
                x("secondary_flow_failed"), I({ type: "CAPTURE_FAILED" });
                return;
            }
            if (((f.current = !0), I({ type: "FALLBACK_STARTED" }), null != c))
                return void c.onFallbackRequest(k.interviewId);
            try {
                let e = (await (0, g.eb)({ previousInterviewId: k.interviewId })).incode_parameters;
                if (e?.session_token == null || null == e.interview_id || null == e.consent_id) {
                    x("fallback_bootstrap_incomplete"), I({ type: "CAPTURE_FAILED" });
                    return;
                }
                h({ sessionToken: e.session_token, interviewId: e.interview_id, consentId: e.consent_id }),
                    I({ type: "FALLBACK_READY" });
            } catch (e) {
                x("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" });
            }
        }, [k.interviewId, c]),
        W = r.useCallback(() => {
            (f.current = !1), C(!1), h({ sessionToken: n, interviewId: a, consentId: i }), I({ type: "RETRY_CAPTURE" });
        }, [n, a, i]);
    return (
        r.useEffect(() => {
            if (!L) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                (async function () {
                    let e = k.interviewId;
                    if (0 === e.length) {
                        x("missing_interview_id"), P(t) || I({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    if (null != c) return c.onCaptureComplete(e);
                    let n = await M(e);
                    !P(t) && (n || (x("registration_failed"), I({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [L, k.interviewId, c]),
        r.useEffect(() => {
            if ("bootstrapping_fallback" === _) {
                let e = setTimeout(() => {
                    x("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" });
                }, 3e4);
                return () => {
                    clearTimeout(e);
                };
            }
            if (("waiting_for_result" !== _ && !A) || (null != c && "waiting_for_result" === _)) return;
            let e = setTimeout(() => {
                C(!1), x("result_wait_timeout"), I({ type: "VERIFICATION_FAILED" });
            }, 3e4);
            return () => {
                clearTimeout(e);
            };
        }, [_, A, c]),
        r.useEffect(() => {
            var e, n;
            let i, r, a;
            if (!o || "capturing" !== _ || 0 === k.sessionToken.length) return;
            let c = new AbortController(),
                { signal: p } = c,
                A =
                    ((e = f.current ? b.VF.ID_VERIFICATION : l),
                    (n = k.sessionToken),
                    (r = U(e, s)),
                    (a = e === b.VF.FACIAL_AGE_ESTIMATION),
                    s
                        ? {
                              tag: "incode-flow",
                              config: { token: n },
                              wasmPipelines: r,
                              captureFailureReason:
                                  e === b.VF.ID_VERIFICATION ? "id_capture_error" : "selfie_capture_error",
                              requiresManualFinish: !1,
                              allowsIdFallback: a,
                          }
                        : e !== b.VF.ID_VERIFICATION
                          ? {
                                tag: "incode-selfie",
                                config: S,
                                wasmPipelines: r,
                                captureFailureReason: "selfie_capture_error",
                                requiresManualFinish: !0,
                                allowsIdFallback: a,
                            }
                          : {
                                tag: "incode-flow",
                                config: { token: n },
                                wasmPipelines: r,
                                captureFailureReason: "id_capture_error",
                                requiresManualFinish: !1,
                                allowsIdFallback: a,
                            }),
                g = !1;
            function v(e) {
                f.current || x(e), Q();
            }
            return (
                (async function () {
                    try {
                        let n;
                        if (
                            (V(),
                            (function () {
                                if (N) return;
                                N = !0;
                                let e = D[m.intl.currentLocale] ?? m.intl.currentLocale,
                                    t = m.intl.string(w.default["S+mgl0"]),
                                    n = { idv2: { capture: { processing: { uploading: t, verifying: t } } } },
                                    i = (0, y.hU)({ lang: e, translations: { en: n, [e]: n } });
                                i.changeLanguage(e), (0, y.Q5)(i);
                            })(),
                            await (0, F.mj)({
                                apiURL: (n = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? n : `${n}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: A.wasmPipelines },
                            }),
                            P(p) || (await (0, R.T7)({ token: k.sessionToken }), P(p)))
                        )
                            return;
                        let r = u.current;
                        if (null == r) throw Error("Incode capture failed to initialize.");
                        function e() {
                            null != r &&
                                ("incode-selfie" === A.tag &&
                                    (i = (0, T.Ns)((e) => {
                                        "screenOpened" === e.code && e.screen?.endsWith("Exhausted") && (g = !0);
                                    })),
                                (d.current = j(A.tag, {
                                    container: r,
                                    config: A.config,
                                    signal: p,
                                    onFinish: () => {
                                        A.allowsIdFallback && g && !f.current
                                            ? v("selfie_error_triggered_fallback")
                                            : A.requiresManualFinish || A.allowsIdFallback
                                              ? (C(!0),
                                                (async () => {
                                                    try {
                                                        let e = await (0, R.uR)(void 0, p);
                                                        if (P(p)) return;
                                                        C(!1);
                                                        let t =
                                                            e?.action === "rejected" ||
                                                            e?.scoreStatus === "FAIL" ||
                                                            e?.scoreStatus === "MANUAL_FAIL";
                                                        if (A.allowsIdFallback && !f.current && t)
                                                            return void v("result_gate_triggered_fallback");
                                                        I({ type: "CAPTURE_COMPLETED" });
                                                    } catch {
                                                        if (P(p)) return;
                                                        C(!1),
                                                            x("finish_status_error"),
                                                            I({ type: "VERIFICATION_FAILED" });
                                                    }
                                                })())
                                              : I({ type: "CAPTURE_COMPLETED" });
                                    },
                                    onError: () => {
                                        A.allowsIdFallback && k.interviewId.length > 0
                                            ? v("selfie_error_triggered_fallback")
                                            : (x(A.captureFailureReason), I({ type: "CAPTURE_FAILED" }));
                                    },
                                })),
                                E(!0));
                        }
                        if (s) e();
                        else {
                            let t = j("incode-consent", {
                                container: r,
                                config: { consentId: k.consentId },
                                signal: p,
                                onFinish: () => {
                                    t.parentNode?.removeChild(t), e();
                                },
                                onError: () => {
                                    x("consent_error"), I({ type: "CAPTURE_FAILED" });
                                },
                            });
                            (d.current = t), E(!0);
                        }
                    } catch (e) {
                        if (P(p)) return;
                        x("sdk_init_error"), I({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    c.abort(), i?.(), E(!1);
                    let e = d.current;
                    e?.parentNode != null && e.parentNode.removeChild(e), (d.current = null), V();
                }
            );
        }, [t, k, _, Q, l, s, o]),
        {
            containerRef: u,
            error: q,
            waitingForResult: G,
            awaitingFinishStatus: A,
            incodeElementMounted: p,
            retryCapture: W,
            applyFallbackSession: K,
            isAwaitingFallbackSession: B,
        }
    );
};
var B = n(793163),
    G = n(610402),
    K = n(792675),
    Q = n(700129);
let W = function (e) {
    let { onClose: t, onComplete: n, onCancel: a, hideFooter: F, onDeviceIdCapture: T, transitionState: R } = e,
        v = !0 === e.pickerMode ? null : e.initialSession,
        y = !0 === e.pickerMode ? null : e.initialMethod,
        k = r.useRef(!1),
        [h, L] = r.useState(y),
        [N, D] = r.useState(v),
        [S, O] = r.useState(!1),
        V = r.useCallback(async (e) => {
            L(e), O(!1), D(null);
            try {
                let t = await (0, g.D0)(e);
                null == t ? O(!0) : D(t);
            } catch {
                O(!0);
            }
        }, []),
        P = r.useCallback(() => {
            k.current || ((k.current = !0), n(), t());
        }, [n, t]),
        x = (0, o.M)((0, E.Ay)()),
        M = !0 === F,
        j = r.useMemo(() => (M ? { onCaptureComplete: G.Qk, onFallbackRequest: G.qm } : void 0), [M]),
        {
            containerRef: U,
            error: W,
            waitingForResult: Y,
            awaitingFinishStatus: J,
            incodeElementMounted: Z,
            retryCapture: X,
            applyFallbackSession: $,
            isAwaitingFallbackSession: z,
        } = q({
            apiUrl: N?.apiUrl ?? "",
            sessionToken: N?.sessionToken ?? "",
            consentId: N?.consentId ?? "",
            interviewId: N?.interviewId ?? "",
            flow: h ?? void 0,
            onDeviceIdCapture: T,
            enabled: null != h && null != N,
            webviewHost: j,
        });
    r.useEffect(() => {
        if (!M || !z) return;
        let e = window;
        return (
            (e[G.fl] = $),
            () => {
                e[G.fl] === $ && delete e[G.fl];
            }
        );
    }, [M, z, $]);
    let H = W || S,
        ee = r.useCallback(() => {
            S && null != h ? V(h) : X();
        }, [S, h, V, X]),
        et = r.useCallback(() => {
            !F && (0, c.hasModalOpen)(b.SW) && (0, C.Q9)() && P();
        }, [P, F]);
    (0, C.dZ)(et);
    let en = r.useCallback(() => {
            a?.(), t();
        }, [a, t]),
        ei = H
            ? (0, i.jsx)(u.$, { variant: "secondary", icon: d.f, text: m.intl.string(m.t["/nicWo"]), onClick: ee })
            : null != a
              ? (0, i.jsx)(f.Q, { variant: "secondary", text: m.intl.string(m.t["4gTnU0"]), onClick: en })
              : null;
    return null == h
        ? (0, i.jsx)(s.k, {
              transitionState: R,
              onClose: t,
              gradientColor: "blue",
              graphic: { type: "image", src: Q.A },
              title: m.intl.string(w.default.eZvwAe),
              subtitle: m.intl.string(w.default["5yWXmT"]),
              actionBarInput: (0, i.jsx)(f.Q, { variant: "secondary", text: m.intl.string(m.t.fjKFae), onClick: t }),
              children: (0, i.jsxs)(_.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, i.jsx)(A.PQ, {
                          variant: "clickable",
                          title: m.intl.string(w.default.rgXXcW),
                          description: m.intl.string(w.default.fm7qBC),
                          onButtonPress: () => void V(b.VF.FACIAL_AGE_ESTIMATION),
                      }),
                      (0, i.jsx)(A.PQ, {
                          variant: "clickable",
                          title: m.intl.string(w.default["NeVlw/"]),
                          description: m.intl.string(w.default.ARmJ0M),
                          onButtonPress: () => void V(b.VF.ID_VERIFICATION),
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(B.A, {
              parentComponent: "IncodeAgeVerificationModal",
              transitionState: R,
              onBackToStart: t,
              footerRightSlot: ei,
              hideFooter: F,
              children: H
                  ? (0, i.jsx)(
                        "div",
                        {
                            className: l()(K.qV, K.eg),
                            children: (0, i.jsx)(I.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: K.h5,
                                children: m.intl.string(m.t.c6kn6F),
                            }),
                        },
                        "status",
                    )
                  : Y
                    ? (0, i.jsxs)(
                          "div",
                          {
                              className: l()(K.qV, K.eg),
                              children: [
                                  (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                                  (0, i.jsx)(I.E, {
                                      variant: "text-sm/medium",
                                      color: "text-muted",
                                      className: K.h5,
                                      children: m.intl.string(m.t.wJVyYR),
                                  }),
                              ],
                          },
                          "status",
                      )
                    : (0, i.jsxs)(
                          "div",
                          {
                              className: l()(K.yq, { [K.GS]: F }),
                              children: [
                                  (0, i.jsx)("div", {
                                      ref: U,
                                      "data-incode-theme": x ? "dark" : "light",
                                      className: l()(K.qV, { [K.GS]: F }),
                                  }),
                                  !Z || J
                                      ? (0, i.jsx)("div", {
                                            className: K.BT,
                                            children: (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                                        })
                                      : null,
                              ],
                          },
                          "capture",
                      ),
          });
};
