r.d(t, { default: () => L });
var n = r(627968),
    i = r(64700),
    a = r(503698),
    s = r.n(a),
    l = r(462887),
    c = r(192308),
    o = r(821609),
    u = r(663417),
    d = r(123292),
    f = r(834730),
    p = r(289873);
r(711319);
var E = r(736653),
    h = r(36149),
    C = r(47822),
    _ = r(904926),
    g = r(731738),
    m = r(807393),
    y = r(295972);
let A = {
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
function I(e, t) {
    switch (t.type) {
        case "CAPTURE_COMPLETED":
            return "waiting_for_result";
        case "VERIFICATION_FAILED":
        case "CAPTURE_FAILED":
            return "error";
        case "RETRY_CAPTURE":
            return "capturing";
    }
}
function R() {
    try {
        (0, C.cL)();
    } catch {}
}
function v(e) {
    return e.aborted;
}
function T(e) {
    m.A.increment({ name: g.K.INCODE_VERIFICATION_FAILED, tags: [`reason:${e}`] });
}
async function w(e) {
    try {
        return await (0, y.Zo)(e), !0;
    } catch {
        return !1;
    }
}
let F = function (e) {
    let { apiUrl: t, sessionToken: r, interviewId: n } = e,
        a = i.useRef(null),
        s = i.useRef(null),
        [l, c] = i.useReducer(I, "capturing"),
        o = "waiting_for_result" === l,
        u = "error" === l,
        d = "waiting_for_result" === l,
        f = i.useCallback(() => {
            c({ type: "RETRY_CAPTURE" });
        }, []);
    return (
        i.useEffect(() => {
            if (!o) return;
            let e = new AbortController(),
                { signal: t } = e;
            return (
                (async () => {
                    if (0 === n.length) {
                        T("missing_interview_id"), v(t) || c({ type: "VERIFICATION_FAILED" });
                        return;
                    }
                    let e = await w(n);
                    !v(t) && (e || (T("registration_failed"), c({ type: "VERIFICATION_FAILED" })));
                })(),
                () => {
                    e.abort();
                }
            );
        }, [o, n]),
        i.useEffect(() => {
            if ("capturing" !== l) return;
            let e = new AbortController(),
                { signal: n } = e,
                i = !1;
            return (
                (async () => {
                    try {
                        let e;
                        if (
                            (R(),
                            await (0, C.mj)({
                                apiURL: (e = t.endsWith("/") ? t.slice(0, -1) : t).endsWith("/0") ? e : `${e}/0`,
                                encryption: { mgf1: "sha256" },
                                wasm: { pipelines: ["selfie", "onDeviceSelfie"] },
                            }),
                            v(n) || (await (0, _.T7)({ token: r }), v(n)))
                        )
                            return;
                        let l = a.current;
                        if (null == l) throw Error("Incode selfie capture failed to initialize.");
                        let o = document.createElement("incode-selfie");
                        if (
                            ((o.style.display = "block"),
                            (o.style.height = "100%"),
                            (o.style.width = "100%"),
                            (o.onFinish = () => {
                                v(n) || i || ((i = !0), c({ type: "CAPTURE_COMPLETED" }));
                            }),
                            (o.onError = () => {
                                v(n) || (T("selfie_capture_error"), c({ type: "CAPTURE_FAILED" }));
                            }),
                            (o.config = A),
                            v(n))
                        )
                            return;
                        l.appendChild(o), (s.current = o);
                    } catch (e) {
                        if (v(n)) return;
                        T("sdk_init_error"), c({ type: "CAPTURE_FAILED" });
                    }
                })(),
                () => {
                    e.abort();
                    let t = s.current;
                    t?.parentNode != null && t.parentNode.removeChild(t), (s.current = null), R();
                }
            );
        }, [t, r, l]),
        { containerRef: a, error: u, waitingForResult: d, retryCapture: f }
    );
};
var k = r(793163),
    N = r(40449),
    b = r(375708),
    x = r(768971);
let L = function (e) {
    let { apiUrl: t, sessionToken: r, interviewId: a, onClose: C, onComplete: _, onCancel: g, transitionState: m } = e,
        y = i.useRef(!1),
        A = i.useCallback(() => {
            y.current || ((y.current = !0), _(), C());
        }, [_, C]),
        I = (0, l.M)((0, E.Ay)()),
        {
            containerRef: R,
            error: v,
            waitingForResult: T,
            retryCapture: w,
        } = F({ apiUrl: t, sessionToken: r, interviewId: a }),
        L = i.useCallback(() => {
            (0, c.hasModalOpen)(N.SW) && A();
        }, [A]);
    (0, h.dZ)(L);
    let D = v
        ? (0, n.jsx)(o.$, { variant: "secondary", icon: u.f, text: b.intl.string(b.t["/nicWo"]), onClick: w })
        : null != g
          ? (0, n.jsx)(d.Q, { variant: "secondary", text: b.intl.string(b.t["4gTnU0"]), onClick: g })
          : null;
    return (0, n.jsx)(k.A, {
        parentComponent: "IncodeAgeVerificationModal",
        transitionState: m,
        onBackToStart: C,
        footerRightSlot: D,
        children: v
            ? (0, n.jsx)(
                  "div",
                  {
                      className: s()(x.qV, x.eg),
                      children: (0, n.jsx)(f.E, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          className: x.h5,
                          children: b.intl.string(b.t.c6kn6F),
                      }),
                  },
                  "status",
              )
            : T
              ? (0, n.jsxs)(
                    "div",
                    {
                        className: s()(x.qV, x.eg),
                        children: [
                            (0, n.jsx)(p.y, { type: p.y.Type.SPINNING_CIRCLE }),
                            (0, n.jsx)(f.E, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                className: x.h5,
                                children: b.intl.string(b.t.wJVyYR),
                            }),
                        ],
                    },
                    "status",
                )
              : (0, n.jsx)("div", { ref: R, "data-incode-theme": I ? "dark" : "light", className: x.qV }, "capture"),
    });
};
