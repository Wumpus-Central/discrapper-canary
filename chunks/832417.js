n.d(t, { default: () => Q });
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
var A = n(736653),
    E = n(632738),
    g = n(295972),
    C = n(36149),
    F = n(979555),
    v = n(200432),
    T = n(844887),
    h = n(217870),
    k = n(569668),
    R = n(731738),
    b = n(807393),
    y = n(40449),
    m = n(516761),
    w = n(375708),
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
function x(e, t) {
    switch (t.type) {
        case "CAPTURE_COMPLETED":
            return "waiting_for_result";
        case "FALLBACK_AVAILABLE":
            return "fallback_available";
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
function O(e) {
    return e.aborted;
}
function P(e) {
    b.A.increment({ name: R.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function j(e) {
    try {
        return await (0, g.Zo)(e), !0;
    } catch {
        return !1;
    }
}
function M(e, t) {
    let { container: n, config: i, signal: r, onFinish: a, onError: l } = t,
        s = document.createElement(e);
    s.className = L.x;
    let o = !1;
    function c(e) {
        O(r) || o || ((o = !0), e());
    }
    return (s.onFinish = () => c(a)), (s.onError = () => c(l)), (s.config = i), n.appendChild(s), s;
}
function U(e, t) {
    return t
        ? []
        : e !== y.VF.ID_VERIFICATION
          ? !0 === S.onDeviceFaceResultsSubmissionEnabled
              ? ["selfie", "onDeviceSelfie"]
              : ["selfie"]
          : [];
}
let B = function (e) {
    let {
            apiUrl: t,
            sessionToken: n,
            consentId: i,
            interviewId: a,
            flow: l = y.VF.FACIAL_AGE_ESTIMATION,
            onDeviceIdCapture: s = !1,
            enabled: o = !0,
            webviewHost: c,
        } = e,
        u = r.useRef(null),
        d = r.useRef(null),
        f = r.useRef(!1),
        [_, I] = r.useReducer(x, "capturing"),
        [p, A] = r.useState(!1),
        [E, C] = r.useState(!1),
        [R, b] = r.useState({ sessionToken: n, interviewId: a, consentId: i });
    r.useEffect(() => {
        let e = U(l, s);
        0 !== e.length && (0, h.ZU)((0, h.Dz)({ pipelines: e })).catch(() => {});
    }, []),
        r.useEffect(() => {
            b((e) =>
                e.sessionToken === n && e.interviewId === a && e.consentId === i
                    ? e
                    : ((f.current = !1), { sessionToken: n, interviewId: a, consentId: i }),
            );
        }, [n, a, i]),
        r.useEffect(() => {
            C(!1);
        }, [R.sessionToken, R.interviewId]);
    let L = "waiting_for_result" === _,
        B = "error" === _,
        q = "fallback_available" === _,
        K = "bootstrapping_fallback" === _,
        G = "waiting_for_result" === _ || "bootstrapping_fallback" === _,
        W = r.useCallback(
            (e) => {
                if ("bootstrapping_fallback" === _) {
                    if ("error" in e) {
                        P("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" });
                        return;
                    }
                    b((t) => ({ sessionToken: e.sessionToken, interviewId: e.interviewId, consentId: t.consentId })),
                        I({ type: "FALLBACK_READY" });
                }
            },
            [_],
        ),
        Q = r.useCallback(async () => {
            if (!f.current) {
                if (((f.current = !0), I({ type: "FALLBACK_STARTED" }), null != c))
                    return void c.onFallbackRequest(R.interviewId);
                try {
                    let e = (await (0, g.eb)({ previousInterviewId: R.interviewId })).incode_parameters;
                    if (e?.session_token == null || null == e.interview_id || null == e.consent_id) {
                        P("fallback_bootstrap_incomplete"), I({ type: "CAPTURE_FAILED" });
                        return;
                    }
                    b({ sessionToken: e.session_token, interviewId: e.interview_id, consentId: e.consent_id }),
                        I({ type: "FALLBACK_READY" });
                } catch (e) {
                    P("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" });
                }
            }
        }, [R.interviewId, c]),
        Y = r.useCallback(() => {
            (f.current = !1), C(!1), b({ sessionToken: n, interviewId: a, consentId: i }), I({ type: "RETRY_CAPTURE" });
        }, [n, a, i]);
    return (
        r.useEffect(() => {
            if (!L) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                (async function () {
                    let e = R.interviewId;
                    if (0 === e.length) {
                        P("missing_interview_id"), O(t) || I({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    if (null != c) return c.onCaptureComplete(e);
                    let n = await j(e);
                    !O(t) && (n || (P("registration_failed"), I({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [L, R.interviewId, c]),
        r.useEffect(() => {
            if ("bootstrapping_fallback" === _) {
                let e = setTimeout(() => {
                    P("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" });
                }, 3e4);
                return () => {
                    clearTimeout(e);
                };
            }
            if (("waiting_for_result" !== _ && !E) || (null != c && "waiting_for_result" === _)) return;
            let e = setTimeout(() => {
                C(!1), P("result_wait_timeout"), I({ type: "VERIFICATION_FAILED" });
            }, 3e4);
            return () => {
                clearTimeout(e);
            };
        }, [_, E, c]),
        r.useEffect(() => {
            var e, n;
            let i, r, a;
            if (!o || "capturing" !== _ || 0 === R.sessionToken.length) return;
            let c = new AbortController(),
                { signal: p } = c,
                E =
                    ((e = f.current ? y.VF.ID_VERIFICATION : l),
                    (n = R.sessionToken),
                    (r = U(e, s)),
                    (a = e === y.VF.FACIAL_AGE_ESTIMATION),
                    s
                        ? {
                              tag: "incode-flow",
                              config: { token: n },
                              wasmPipelines: r,
                              captureFailureReason:
                                  e === y.VF.ID_VERIFICATION ? "id_capture_error" : "selfie_capture_error",
                              requiresManualFinish: !1,
                              allowsIdFallback: a,
                          }
                        : e !== y.VF.ID_VERIFICATION
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
            function h(e) {
                f.current || P(e), C(!1), I({ type: "FALLBACK_AVAILABLE" });
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
                                let e = D[w.intl.currentLocale] ?? w.intl.currentLocale,
                                    t = w.intl.string(m.default["S+mgl0"]),
                                    n = { idv2: { capture: { processing: { uploading: t, verifying: t } } } },
                                    i = (0, k.hU)({ lang: e, translations: { en: n, [e]: n } });
                                i.changeLanguage(e), (0, k.Q5)(i);
                            })(),
                            await (0, F.mj)({
                                apiURL: (n = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? n : `${n}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: E.wasmPipelines },
                            }),
                            O(p) || (await (0, T.T7)({ token: R.sessionToken }), O(p)))
                        )
                            return;
                        let r = u.current;
                        if (null == r) throw Error("Incode capture failed to initialize.");
                        function e() {
                            null != r &&
                                ("incode-selfie" === E.tag &&
                                    (i = (0, v.Ns)((e) => {
                                        "screenOpened" === e.code && e.screen?.endsWith("Exhausted") && (g = !0);
                                    })),
                                (d.current = M(E.tag, {
                                    container: r,
                                    config: E.config,
                                    signal: p,
                                    onFinish: () => {
                                        E.allowsIdFallback && g && !f.current
                                            ? h("selfie_error_triggered_fallback")
                                            : E.requiresManualFinish || E.allowsIdFallback
                                              ? (C(!0),
                                                (async () => {
                                                    try {
                                                        let e = await (0, T.uR)(void 0, p);
                                                        if (O(p)) return;
                                                        let t =
                                                            e?.action === "rejected" ||
                                                            e?.scoreStatus === "FAIL" ||
                                                            e?.scoreStatus === "MANUAL_FAIL";
                                                        if (E.allowsIdFallback && !f.current && t)
                                                            return void h("result_gate_triggered_fallback");
                                                        C(!1), I({ type: "CAPTURE_COMPLETED" });
                                                    } catch {
                                                        if (O(p)) return;
                                                        C(!1),
                                                            P("finish_status_error"),
                                                            I({ type: "VERIFICATION_FAILED" });
                                                    }
                                                })())
                                              : I({ type: "CAPTURE_COMPLETED" });
                                    },
                                    onError: () => {
                                        E.allowsIdFallback && R.interviewId.length > 0
                                            ? h("selfie_error_triggered_fallback")
                                            : (P(E.captureFailureReason), I({ type: "CAPTURE_FAILED" }));
                                    },
                                })),
                                A(!0));
                        }
                        if (s) e();
                        else {
                            let t = M("incode-consent", {
                                container: r,
                                config: { consentId: R.consentId },
                                signal: p,
                                onFinish: () => {
                                    t.parentNode?.removeChild(t), e();
                                },
                                onError: () => {
                                    P("consent_error"), I({ type: "CAPTURE_FAILED" });
                                },
                            });
                            (d.current = t), A(!0);
                        }
                    } catch (e) {
                        if (O(p)) return;
                        P("sdk_init_error"), I({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    c.abort(), i?.(), A(!1);
                    let e = d.current;
                    e?.parentNode != null && e.parentNode.removeChild(e), (d.current = null), V();
                }
            );
        }, [t, R, _, l, s, o]),
        {
            containerRef: u,
            error: B,
            waitingForResult: G,
            awaitingFinishStatus: E,
            incodeElementMounted: p,
            retryCapture: Y,
            continueWithIdFallback: Q,
            applyFallbackSession: W,
            isFallbackAvailable: q,
            isAwaitingFallbackSession: K,
        }
    );
};
var q = n(793163),
    K = n(610402),
    G = n(792675),
    W = n(700129);
let Q = function (e) {
    let { onClose: t, onComplete: n, onCancel: a, hideFooter: F, onDeviceIdCapture: v, transitionState: T } = e,
        h = !0 === e.pickerMode ? null : e.initialSession,
        k = !0 === e.pickerMode ? null : e.initialMethod,
        R = r.useRef(!1),
        [b, L] = r.useState(k),
        [N, D] = r.useState(h),
        [S, x] = r.useState(!1),
        V = r.useCallback(async (e) => {
            L(e), x(!1), D(null);
            try {
                let t = await (0, g.D0)(e);
                null == t ? x(!0) : D(t);
            } catch {
                x(!0);
            }
        }, []),
        O = r.useCallback(() => {
            R.current || ((R.current = !0), n(), t());
        }, [n, t]),
        P = (0, o.M)((0, A.Ay)()),
        j = !0 === F,
        M = r.useMemo(() => (j ? { onCaptureComplete: K.Qk, onFallbackRequest: K.qm } : void 0), [j]),
        {
            containerRef: U,
            error: Q,
            waitingForResult: Y,
            awaitingFinishStatus: J,
            incodeElementMounted: X,
            retryCapture: Z,
            continueWithIdFallback: $,
            applyFallbackSession: z,
            isFallbackAvailable: H,
            isAwaitingFallbackSession: ee,
        } = B({
            apiUrl: N?.apiUrl ?? "",
            sessionToken: N?.sessionToken ?? "",
            consentId: N?.consentId ?? "",
            interviewId: N?.interviewId ?? "",
            flow: b ?? void 0,
            onDeviceIdCapture: v,
            enabled: null != b && null != N,
            webviewHost: M,
        });
    r.useEffect(() => {
        if (!j || !ee) return;
        let e = window;
        return (
            (e[K.fl] = z),
            () => {
                e[K.fl] === z && delete e[K.fl];
            }
        );
    }, [j, ee, z]);
    let et = Q || S,
        en = r.useCallback(() => {
            S && null != b ? V(b) : Z();
        }, [S, b, V, Z]),
        ei = r.useCallback(() => {
            !F && (0, c.hasModalOpen)(y.SW) && (0, C.Q9)() && O();
        }, [O, F]);
    (0, C.dZ)(ei);
    let er = r.useCallback(() => {
            a?.(), t();
        }, [a, t]),
        ea = null;
    return (H ||
        ee ||
        (et
            ? (ea = (0, i.jsx)(u.$, {
                  variant: "secondary",
                  icon: d.f,
                  text: w.intl.string(w.t["/nicWo"]),
                  onClick: en,
              }))
            : null != a &&
              (ea = (0, i.jsx)(f.Q, { variant: "secondary", text: w.intl.string(w.t["4gTnU0"]), onClick: er }))),
    null == b)
        ? (0, i.jsx)(s.k, {
              transitionState: T,
              onClose: t,
              gradientColor: "blue",
              graphic: { type: "image", src: W.A },
              title: w.intl.string(m.default.eZvwAe),
              subtitle: w.intl.string(m.default["5yWXmT"]),
              actionBarInput: (0, i.jsx)(f.Q, { variant: "secondary", text: w.intl.string(w.t.fjKFae), onClick: t }),
              children: (0, i.jsxs)(_.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, i.jsx)(E.PQ, {
                          variant: "clickable",
                          title: w.intl.string(m.default.rgXXcW),
                          description: w.intl.string(m.default.fm7qBC),
                          onButtonPress: () => void V(y.VF.FACIAL_AGE_ESTIMATION),
                      }),
                      (0, i.jsx)(E.PQ, {
                          variant: "clickable",
                          title: w.intl.string(m.default["NeVlw/"]),
                          description: w.intl.string(m.default.ARmJ0M),
                          onButtonPress: () => void V(y.VF.ID_VERIFICATION),
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(q.A, {
              parentComponent: "IncodeAgeVerificationModal",
              transitionState: T,
              onBackToStart: t,
              footerRightSlot: ea,
              hideFooter: F,
              children: et
                  ? (0, i.jsx)(
                        "div",
                        {
                            className: l()(G.qV, G.eg),
                            children: (0, i.jsx)(I.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: G.h5,
                                children: w.intl.string(w.t.c6kn6F),
                            }),
                        },
                        "status",
                    )
                  : H || ee
                    ? (0, i.jsx)(
                          "div",
                          {
                              className: l()(G.qV, G.eg),
                              children: (0, i.jsxs)(_.B, {
                                  direction: "vertical",
                                  gap: 24,
                                  align: "center",
                                  children: [
                                      (0, i.jsx)(I.E, {
                                          variant: "text-md/medium",
                                          color: "text-default",
                                          className: G.h5,
                                          children: w.intl.string(ee ? m.default["s+qGhK"] : m.default["Ae/g7X"]),
                                      }),
                                      (0, i.jsx)(u.$, {
                                          variant: "primary",
                                          text: w.intl.string(m.default.eVjNWp),
                                          loading: ee,
                                          onClick: () => void $(),
                                      }),
                                  ],
                              }),
                          },
                          "status",
                      )
                    : Y
                      ? (0, i.jsxs)(
                            "div",
                            {
                                className: l()(G.qV, G.eg),
                                children: [
                                    (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                                    (0, i.jsx)(I.E, {
                                        variant: "text-sm/medium",
                                        color: "text-muted",
                                        className: G.h5,
                                        children: w.intl.string(w.t.wJVyYR),
                                    }),
                                ],
                            },
                            "status",
                        )
                      : (0, i.jsxs)(
                            "div",
                            {
                                className: l()(G.yq, { [G.GS]: F }),
                                children: [
                                    (0, i.jsx)("div", {
                                        ref: U,
                                        "data-incode-theme": P ? "dark" : "light",
                                        className: l()(G.qV, { [G.GS]: F }),
                                    }),
                                    !X || J
                                        ? (0, i.jsx)("div", {
                                              className: G.BT,
                                              children: (0, i.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                                          })
                                        : null,
                                ],
                            },
                            "capture",
                        ),
          });
};
