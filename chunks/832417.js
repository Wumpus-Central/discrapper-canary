n.d(t, { default: () => Q });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    l = n.n(a),
    s = n(462887),
    o = n(192308),
    c = n(821609),
    u = n(663417),
    d = n(123292),
    f = n(772707),
    _ = n(331322),
    I = n(834730),
    p = n(289873);
(n(11414), n(250216), n(691869), n(66580));
var A = n(736653),
    E = n(632738),
    g = n(295972),
    C = n(36149),
    F = n(979555),
    b = n(200432),
    h = n(844887),
    v = n(995489),
    T = n(677085),
    k = n(731738),
    y = n(807393),
    R = n(40449),
    m = n(418528),
    w = n(105292),
    L = n(77825);
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
function V(e, t) {
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
function O() {
    try {
        (0, F.cL)();
    } catch {}
}
function x(e) {
    return e.aborted;
}
function P(e) {
    y.A.increment({ name: k.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function j(e) {
    try {
        return (await (0, g.Zo)(e), !0);
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
        x(r) || o || ((o = !0), e());
    }
    return ((s.onFinish = () => c(a)), (s.onError = () => c(l)), (s.config = i), n.appendChild(s), s);
}
function U(e, t) {
    return t
        ? []
        : e !== R.VF.ID_VERIFICATION
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
            flow: l = R.VF.FACIAL_AGE_ESTIMATION,
            onDeviceIdCapture: s = !1,
            enabled: o = !0,
            webviewHost: c,
        } = e,
        u = r.useRef(null),
        d = r.useRef(null),
        f = r.useRef(!1),
        [_, I] = r.useReducer(V, "capturing"),
        [p, A] = r.useState(!1),
        [E, C] = r.useState(!1),
        [k, y] = r.useState({ sessionToken: n, interviewId: a, consentId: i });
    (r.useEffect(() => {
        let e = U(l, s);
        0 !== e.length && (0, v.ZU)((0, v.Dz)({ pipelines: e })).catch(() => {});
    }, []),
        r.useEffect(() => {
            y((e) =>
                e.sessionToken === n && e.interviewId === a && e.consentId === i
                    ? e
                    : ((f.current = !1), { sessionToken: n, interviewId: a, consentId: i }),
            );
        }, [n, a, i]),
        r.useEffect(() => {
            C(!1);
        }, [k.sessionToken, k.interviewId]));
    let L = "waiting_for_result" === _,
        B = "error" === _,
        q = "fallback_available" === _,
        K = "bootstrapping_fallback" === _,
        G = "waiting_for_result" === _ || "bootstrapping_fallback" === _,
        W = r.useCallback(
            (e) => {
                if ("bootstrapping_fallback" === _) {
                    if ("error" in e) {
                        (P("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" }));
                        return;
                    }
                    (y((t) => ({ sessionToken: e.sessionToken, interviewId: e.interviewId, consentId: t.consentId })),
                        I({ type: "FALLBACK_READY" }));
                }
            },
            [_],
        ),
        Q = r.useCallback(async () => {
            if (!f.current) {
                if (((f.current = !0), I({ type: "FALLBACK_STARTED" }), null != c))
                    return void c.onFallbackRequest(k.interviewId);
                try {
                    let e = (await (0, g.eb)({ previousInterviewId: k.interviewId })).incode_parameters;
                    if (e?.session_token == null || null == e.interview_id || null == e.consent_id) {
                        (P("fallback_bootstrap_incomplete"), I({ type: "CAPTURE_FAILED" }));
                        return;
                    }
                    (y({ sessionToken: e.session_token, interviewId: e.interview_id, consentId: e.consent_id }),
                        I({ type: "FALLBACK_READY" }));
                } catch (e) {
                    (P("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" }));
                }
            }
        }, [k.interviewId, c]),
        Y = r.useCallback(() => {
            ((f.current = !1),
                C(!1),
                y({ sessionToken: n, interviewId: a, consentId: i }),
                I({ type: "RETRY_CAPTURE" }));
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
                        (P("missing_interview_id"), x(t) || I({ type: "VERIFICATION_FAILED" }));
                        return;
                    }
                    if (null != c) return c.onCaptureComplete(e);
                    let n = await j(e);
                    !x(t) && (n || (P("registration_failed"), I({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [L, k.interviewId, c]),
        r.useEffect(() => {
            if ("bootstrapping_fallback" === _) {
                let e = setTimeout(() => {
                    (P("fallback_bootstrap_failed"), (f.current = !1), I({ type: "CAPTURE_FAILED" }));
                }, 3e4);
                return () => {
                    clearTimeout(e);
                };
            }
            if ("waiting_for_result" !== _ && !E) return;
            let e = setTimeout(() => {
                (C(!1), P("result_wait_timeout"), I({ type: "VERIFICATION_FAILED" }));
            }, 3e4);
            return () => {
                clearTimeout(e);
            };
        }, [_, E]),
        r.useEffect(() => {
            var e, n;
            let i, r, a;
            if (!o || "capturing" !== _ || 0 === k.sessionToken.length) return;
            let c = new AbortController(),
                { signal: p } = c,
                E =
                    ((e = f.current ? R.VF.ID_VERIFICATION : l),
                    (n = k.sessionToken),
                    (r = U(e, s)),
                    (a = e === R.VF.FACIAL_AGE_ESTIMATION),
                    s
                        ? {
                              tag: "incode-flow",
                              config: { token: n },
                              wasmPipelines: r,
                              captureFailureReason:
                                  e === R.VF.ID_VERIFICATION ? "id_capture_error" : "selfie_capture_error",
                              requiresManualFinish: !1,
                              allowsIdFallback: a,
                          }
                        : e !== R.VF.ID_VERIFICATION
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
                (f.current || P(e), C(!1), I({ type: "FALLBACK_AVAILABLE" }));
            }
            return (
                (async function () {
                    try {
                        let n;
                        if (
                            (O(),
                            (function () {
                                if (N) return;
                                N = !0;
                                let e = D[w.intl.currentLocale] ?? w.intl.currentLocale,
                                    t = w.intl.string(m.default["S+mgl0"]),
                                    n = { idv2: { capture: { processing: { uploading: t, verifying: t } } } },
                                    i = (0, T.hU)({ lang: e, translations: { en: n, [e]: n } });
                                (i.changeLanguage(e), (0, T.Q5)(i));
                            })(),
                            await (0, F.mj)({
                                apiURL: (n = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? n : `${n}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: E.wasmPipelines },
                            }),
                            x(p) || (await (0, h.T7)({ token: k.sessionToken }), x(p)))
                        )
                            return;
                        let r = u.current;
                        if (null == r) throw Error("Incode capture failed to initialize.");
                        function e() {
                            null != r &&
                                ("incode-selfie" === E.tag &&
                                    (i = (0, b.Ns)((e) => {
                                        "screenOpened" === e.code && e.screen?.endsWith("Exhausted") && (g = !0);
                                    })),
                                (d.current = M(E.tag, {
                                    container: r,
                                    config: E.config,
                                    signal: p,
                                    onFinish: () => {
                                        E.allowsIdFallback && g && !f.current
                                            ? v("selfie_error_triggered_fallback")
                                            : E.requiresManualFinish || E.allowsIdFallback
                                              ? (C(!0),
                                                (async () => {
                                                    try {
                                                        let e = await (0, h.uR)(void 0, p);
                                                        if (x(p)) return;
                                                        let t =
                                                            e?.action === "rejected" ||
                                                            e?.scoreStatus === "FAIL" ||
                                                            e?.scoreStatus === "MANUAL_FAIL";
                                                        if (E.allowsIdFallback && !f.current && t)
                                                            return void v("result_gate_triggered_fallback");
                                                        (C(!1), I({ type: "CAPTURE_COMPLETED" }));
                                                    } catch {
                                                        if (x(p)) return;
                                                        (C(!1),
                                                            P("finish_status_error"),
                                                            I({ type: "VERIFICATION_FAILED" }));
                                                    }
                                                })())
                                              : I({ type: "CAPTURE_COMPLETED" });
                                    },
                                    onError: () => {
                                        E.allowsIdFallback && k.interviewId.length > 0
                                            ? v("selfie_error_triggered_fallback")
                                            : (P(E.captureFailureReason), I({ type: "CAPTURE_FAILED" }));
                                    },
                                })),
                                A(!0));
                        }
                        if (s) e();
                        else {
                            let t = M("incode-consent", {
                                container: r,
                                config: { consentId: k.consentId },
                                signal: p,
                                onFinish: () => {
                                    (t.parentNode?.removeChild(t), e());
                                },
                                onError: () => {
                                    (P("consent_error"), I({ type: "CAPTURE_FAILED" }));
                                },
                            });
                            ((d.current = t), A(!0));
                        }
                    } catch (e) {
                        if (x(p)) return;
                        (P("sdk_init_error"), I({ type: "CAPTURE_FAILED" }));
                    }
                })(),
                () => {
                    (c.abort(), i?.(), A(!1));
                    let e = d.current;
                    (e?.parentNode != null && e.parentNode.removeChild(e), (d.current = null), O());
                }
            );
        }, [t, k, _, l, s, o]),
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
    G = n(603494),
    W = n(700129);
let Q = function (e) {
    let { onClose: t, onComplete: n, onCancel: a, hideFooter: F, onDeviceIdCapture: b, transitionState: h } = e,
        v = !0 === e.pickerMode ? null : e.initialSession,
        T = !0 === e.pickerMode ? null : e.initialMethod,
        k = r.useRef(!1),
        [y, L] = r.useState(T),
        [N, D] = r.useState(v),
        [S, V] = r.useState(!1),
        O = r.useCallback(async (e) => {
            (L(e), V(!1), D(null));
            try {
                let t = await (0, g.D0)(e);
                null == t ? V(!0) : D(t);
            } catch {
                V(!0);
            }
        }, []),
        x = r.useCallback(() => {
            k.current || ((k.current = !0), n(), t());
        }, [n, t]),
        P = (0, s.M)((0, A.Ay)()),
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
            flow: y ?? void 0,
            onDeviceIdCapture: b,
            enabled: null != y && null != N,
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
            S && null != y ? O(y) : Z();
        }, [S, y, O, Z]),
        ei = r.useCallback(() => {
            !F && (0, o.hasModalOpen)(R.SW) && (0, C.Q9)() && x();
        }, [x, F]);
    (0, C.dZ)(ei);
    let er = r.useCallback(() => {
            (a?.(), t());
        }, [a, t]),
        ea = null;
    return (H ||
        ee ||
        (et
            ? (ea = (0, i.jsx)(c.$, {
                  variant: "secondary",
                  icon: u.RefreshIcon,
                  text: w.intl.string(w.t["/nicWo"]),
                  onClick: en,
              }))
            : null != a &&
              (ea = (0, i.jsx)(d.Q, { variant: "secondary", text: w.intl.string(w.t["4gTnU0"]), onClick: er }))),
    null == y)
        ? (0, i.jsx)(f.k, {
              transitionState: h,
              onClose: t,
              gradientColor: "blue",
              graphic: { type: "image", src: W.A },
              title: w.intl.string(m.default.eZvwAe),
              subtitle: w.intl.string(m.default["5yWXmT"]),
              actionBarInput: (0, i.jsx)(d.Q, { variant: "secondary", text: w.intl.string(w.t.fjKFae), onClick: t }),
              children: (0, i.jsxs)(_.B, {
                  direction: "vertical",
                  gap: 8,
                  children: [
                      (0, i.jsx)(E.PQ, {
                          variant: "clickable",
                          title: w.intl.string(m.default.rgXXcW),
                          description: w.intl.string(m.default.fm7qBC),
                          onButtonPress: () => {
                              O(R.VF.FACIAL_AGE_ESTIMATION);
                          },
                      }),
                      (0, i.jsx)(E.PQ, {
                          variant: "clickable",
                          title: w.intl.string(m.default["NeVlw/"]),
                          description: w.intl.string(m.default.ARmJ0M),
                          onButtonPress: () => {
                              O(R.VF.ID_VERIFICATION);
                          },
                      }),
                  ],
              }),
          })
        : (0, i.jsx)(q.A, {
              parentComponent: "IncodeAgeVerificationModal",
              transitionState: h,
              onBackToStart: t,
              footerRightSlot: ea,
              hideFooter: F,
              children: et
                  ? (0, i.jsx)(
                        "div",
                        {
                            className: l()(G.qV, G.eg),
                            children: (0, i.jsx)(I.E, {
                                variant: "body-sm/medium",
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
                                          variant: "body-md/medium",
                                          color: "text-default",
                                          className: G.h5,
                                          children: w.intl.string(ee ? m.default["s+qGhK"] : m.default["Ae/g7X"]),
                                      }),
                                      (0, i.jsx)(c.$, {
                                          variant: "primary",
                                          text: w.intl.string(m.default.eVjNWp),
                                          loading: ee,
                                          onClick: () => {
                                              $();
                                          },
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
                                        variant: "body-sm/medium",
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
