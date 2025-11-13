let r, i, a, o;
n.d(t, {
    A: () => f,
    C: () => E,
    D: () => d,
    E: () => h,
    a: () => Y,
    b: () => p,
    d: () => _,
    e: () => F,
    i: () => B,
    r: () => W,
    s: () => e$,
});
var s = n(555256),
    l = Object.defineProperty,
    c = (e, t, n) =>
        t in e
            ? l(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
              })
            : (e[t] = n),
    u = (e, t, n) => c(e, "symbol" != typeof t ? t + "" : t, n);
let d = 360,
    f = "ul-app",
    _ = "#e6e6e6",
    p = "#bd282a",
    h = 1030,
    m = () => {
        try {
            return window.parent.Intercom;
        } catch {
            return null;
        }
    },
    g = [
        Object.freeze(
            Object.defineProperty(
                {
                    __proto__: null,
                    disable: () => {
                        let e = m();
                        e &&
                            ((e.ul_wasVisible = !!document.querySelector("iframe.intercom-launcher-frame")),
                            e.ul_wasVisible && e("update", { hide_default_launcher: !0 }));
                    },
                    enable: () => {
                        let e = m();
                        e && (e.ul_wasVisible && e("update", { hide_default_launcher: !1 }), delete e.ul_wasVisible);
                    },
                },
                Symbol.toStringTag,
                { value: "Module" },
            ),
        ),
    ];
class E {
    static disable() {
        g.forEach((e) => e.disable());
    }
    static enable() {
        g.forEach((e) => e.enable());
    }
}
let b = "ul-view-sdk-script",
    y = ["ios", "android"],
    O = "visitors",
    v = "environments";
async function I(e, t) {
    var n, r, i;
    let { shouldDropOnRateLimit: a, ...o } = t;
    o.headers = Object.assign((0, s.g)(window.UserLeap), o.headers);
    let l = await (0, s.s)(e, {
        ...o,
        shouldDropOnRateLimit: a,
    });
    if (l.ok) {
        let e = null == (n = l.headers) ? void 0 : n.get("Authorization"),
            t = e ? e.split(" ") : void 0,
            i = t && 2 === t.length ? t[1] : void 0,
            a = null == (r = l.headers) ? void 0 : r.get("x-ul-visitor-id");
        if (window.UserLeap.userId && a === window.UserLeap.visitorId) {
            let e = s.l.getItemObject("sprig.anon.env.vid.map");
            e &&
                e[window.UserLeap.envId] === a &&
                (delete e[window.UserLeap.envId], s.l.setItemObject("sprig.anon.env.vid.map", e));
        }
        i &&
            a &&
            (a !== window.UserLeap.visitorId || window.UserLeap.token !== i) &&
            (T("token", i),
            T("vid", a),
            s.e.emit(s.S.VisitorIDUpdated, { visitorId: a }),
            (window.UserLeap.token = i),
            (window.UserLeap.visitorId = a));
    }
    return null != (i = l.json) && i.logMessage && console.warn(`[Sprig] ${l.json.logMessage}`), l;
}
function T(e, t) {
    let n = s.l.getItemObject("userleap.ids"),
        r = n[window.UserLeap.envId];
    r ? (r[e] = t) : (r = { [e]: t }), (n[window.UserLeap.envId] = r), s.l.setItemObject("userleap.ids", n);
}
function S() {
    return window.previewMode ? "0" : (window.UserLeap.visitorId ?? "");
}
function A(e, t, n) {
    let r = [window.UserLeap._API_URL, "sdk", e];
    return (
        t &&
            t.forEach((e) => {
                r.push(e), e === v ? r.push(window.UserLeap.envId) : e === O && r.push(S());
            }),
        n && r.push(n),
        r.join("/")
    );
}
let C = async (e, t, r) => {
    var i, a, o;
    let {
            context: l,
            delay: c,
            forceBrandedLogo: u,
            endCard: d,
            isFeedback: f = !1,
            heatmap: _,
            locale: p,
            previewMode: h,
            productConfig: m,
            questions: g,
            responseGroupUid: y,
            surveyId: O,
            uuid: v,
            vid: I,
            sessionReplay: T,
            studyType: S,
        } = e,
        A = (0, s.g)(window.UserLeap),
        C = R(A),
        P = N(A);
    if (T)
        if (C)
            s.e.emit(s.S.ReplayCapture, {
                responseGroupUid: y,
                hasQuestions: !!(null != g && g.length),
                surveyId: O,
                uploadId: T.uploadId,
                replayType: T.replayDurationType ?? "before",
                seconds: T.replayDurationSeconds,
                generateVideoUploadUrlPayload: {
                    mediaRecordingUid: (0, s.v)(),
                    mediaType: "screen",
                    questionId: 1,
                    responseGroupUid: y,
                    surveyId: O,
                    updatedAt: new Date().toISOString(),
                    visitorId: window.UserLeap.visitorId,
                    isReplay: !0,
                },
            });
        else {
            if (!s.m.replay)
                return (
                    window.UserLeap.reportError("displayQuestions", Error("Replay module not registered")),
                    {
                        success: !1,
                        message: "Replay module not registered",
                        surveyState: "no survey",
                    }
                );
            s.m.replay.scheduleOrCaptureReplay({
                responseGroupId: y,
                surveyId: O,
                visitorId: I,
                replayParams: T,
                completeUploadHeaders: A,
                apiUrl: window.UserLeap._API_URL,
                triggerTimestamp: Date.now(),
                isStandalone: 0 === g.length,
            });
        }
    if (_) {
        if (!s.m.replay)
            return (
                window.UserLeap.reportError("displayQuestions", Error("Replay module not registered")),
                {
                    success: !1,
                    message: "Replay module not registered",
                    surveyState: "no survey",
                }
            );
        let { eventId: e, replayParams: t, responseGroupUid: n, surveyId: i } = _;
        await s.m.replay.initializeReplay({
            maxReplayDurationSeconds: 300,
            maxInflightRequests: window.UserLeap.maxInflightReplayRequests,
            teardownAfter: !0,
            apiUrl: window.UserLeap._API_URL,
            replaySettings: r,
        }),
            s.m.replay.tryReplayAction(() => {
                var r;
                return null == (r = s.m.replay)
                    ? void 0
                    : r.scheduleCapture({
                          apiUrl: window.UserLeap._API_URL,
                          completeUploadHeaders: A,
                          eventId: e,
                          isHeatmap: !0,
                          replayParams: t,
                          responseGroupId: n,
                          surveyId: i,
                          triggerTimestamp: Date.now(),
                          visitorId: I,
                      });
            }, "Error in scheduling/capturing replay");
    }
    if (null == I || !(null != g && g.length))
        return (
            s.b.info("CannotDisplaySurvey", { vid: I }),
            {
                success: !1,
                message: "[Sprig] no survey found",
                surveyState: "no survey",
            }
        );
    if (window.UserLeap.container) {
        s.b.info("AlreadyDisplayingSurvey");
        let e = "[Sprig] (ERR-409) Found an existing Survey container, aborting rendering of this survey";
        return (
            console.warn(e),
            {
                success: !1,
                message: e,
                surveyState: "no survey",
            }
        );
    }
    if (I !== window.UserLeap.visitorId && v !== window.UserLeap.visitorId && !window.previewMode) {
        let e = "Attempted to display survey to a different visitor";
        return (
            window.UserLeap.reportError("DisplaySurvey", Error(e)),
            {
                success: !1,
                message: e,
                surveyState: "no survey",
            }
        );
    }
    s.b.info("ShowingSurvey", { surveyId: O }),
        null == (i = s.m.replay) ||
            i.RecordSurveyShown({
                id: O,
                userAgent: window.navigator.userAgent,
            }),
        E.disable(),
        s.e.emit(s.S.SurveyWillPresent, {
            name: s.S.SurveyWillPresent,
            "survey.id": O,
        });
    let D,
        M,
        k,
        U,
        G = document.createElement("div"),
        B = (e) => {
            let { "view.version": t } = e;
            t !== A["x-ul-sdk-version"] && x(), s.e.removeListener("verify.view.version", B);
        };
    s.e.on("verify.view.version", B),
        (window.UserLeap.useMobileStyling = P),
        (0, s.h)(A)
            ? ((D = "ul-direct-embeded-frame"),
              (M = document.head),
              (k = window),
              (U = !1),
              (() => {
                  let e = (0, s.g)(window.UserLeap),
                      t = R(e),
                      n = window.UserLeap.forceDirectEmbed,
                      r = "web" === e["userleap-platform"];
                  return t || (n && r);
              })() &&
                  (w(O, f),
                  (G.id = D),
                  window.UserLeap.container.appendChild(G),
                  L(),
                  s.e.emit(s.S.SurveyLifeCycle, { state: "presented" }),
                  s.e.emit(s.S.SurveyPresented, {
                      name: s.S.SurveyPresented,
                      "survey.id": O,
                  })))
            : ({
                  frameId: D,
                  contentWinDocHead: M,
                  contentWindow: k,
                  hasOverlay: U,
                  iframe: G,
              } = j({
                  productConfig: m,
                  useMobileStyling: P,
                  surveyId: O,
                  isFeedback: f,
              })),
        (window.UserLeap.frameId = D);
    let Z = {
        apiURL: window.UserLeap._API_URL,
        cards: g,
        configureExitOnOverlayClick: (e) => {
            s.e.once(s.S.CloseSurveyOnOverlayClick, e);
        },
        context: l,
        endCard: d,
        envId: window.UserLeap.envId,
        eventEmitFn: s.e.emit.bind(s.e),
        fontFamily: window.UserLeap.fontFamily,
        fontFamilyURL: window.UserLeap.fontFamilyURL,
        forceBrandedLogo: u,
        frame: G,
        headers: A,
        locale: p,
        mobileSDKVersion: window.UserLeap.mobileSDKVersion,
        previewKey: s.l.getItem("sprig.previewKey"),
        previewMode: h,
        productConfig: {
            framePosition: null == m ? void 0 : m.framePosition,
            desktopDisplay: null == m ? void 0 : m.desktopDisplay,
            placement: null == m ? void 0 : m.placement,
        },
        responseGroupUid: y,
        startingQuestionIdx: null == (a = window.UserLeap.config) ? void 0 : a.startingQuestionIdx,
        studyType: S,
        styleNonce: window.UserLeap.styleNonce,
        surveyId: O,
        tabTitle: document.title,
        trackPageViewUrl: t,
        ulEvents: s.E,
        upchunkLibraryURL: window.UserLeap.upchunkLibraryURL,
        useMobileStyling: P,
        userId: v,
        viewDocument: null == k ? void 0 : k.document,
        viewWindow: k,
        visitorAttributes: {
            externalUserId: window.UserLeap.userId,
            email: window.UserLeap.email,
        },
        ...window.UserLeap._config,
    };
    null != (o = window.UserLeap._config) &&
        o.startingQuestionIdx &&
        (window.UserLeap._config = {
            ...window.UserLeap._config,
            startingQuestionIdx: null,
        }),
        (Z.customStyles = (f ? window.UserLeap.feedbackCustomStyles : window.UserLeap.customStyles) ?? m.customStyles),
        k && (k.__cfg = Z);
    let F = window.UserLeap.viewSDKURL ? window.UserLeap.viewSDKURL : Z.path,
        V = document.getElementById(b);
    V && V.remove();
    let H = (function () {
            let e = document.createElement("script");
            return window.UserLeap.nonce && e.setAttribute("nonce", window.UserLeap.nonce), (e.id = b), e;
        })(),
        Y = () => {
            window.UserLeap.container && Object.assign(window.UserLeap.container.style, { display: "flex" });
        };
    if ("web-npm" === Z.installationMethod || "web-npm-bundled" === Z.installationMethod) {
        let { default: e } = await n.e("47832").then(n.bind(n, 773341));
        e.configure(Z), U && window.UserLeap.container && Y();
    } else
        F &&
            ((H.src = F),
            U &&
                H.addEventListener("load", () => {
                    window.UserLeap.container && Y();
                }),
            null == k ||
                k.addEventListener(
                    "error",
                    (e) => {
                        e.target instanceof HTMLScriptElement &&
                            e.target.src === F &&
                            window.UserLeap.reportError("loadFrameScript", Error("Frame script failed to load"));
                    },
                    {
                        capture: !0,
                        once: !0,
                    },
                ));
    null == M || M.appendChild(H);
    let W = {
        success: !0,
        surveyState: "ready",
        surveyId: O,
        responseGroupUid: y,
    };
    return window.UserLeap.isMobileSDK && c && (W.delay = c), W;
};
function N(e) {
    var t;
    if (void 0 !== window.UserLeap.useMobileStyling) return window.UserLeap.useMobileStyling;
    let n = (null == (t = window.UserLeap.windowDimensions) ? void 0 : t.width) ?? document.body.clientWidth;
    return R(e) || (n > 10 && n < 500);
}
function R(e) {
    return y.includes(e["userleap-platform"]);
}
let P = "ul-frame";
window.UserLeap &&
    window.Sprig &&
    (window.Sprig._gtm ? (window.Sprig = window.UserLeap) : (window.UserLeap = window.Sprig)),
    window.UserLeap || (window.UserLeap = window.Sprig),
    window.Sprig || (window.Sprig = window.UserLeap);
let D = "0px",
    w = (e, t, n) => {
        (window.UserLeap.container = document.createElement("div")),
            (window.UserLeap.container.className = "ul-container" + (t ? " ul-container-feedback" : "")),
            e && (window.UserLeap.container.dataset.studyId = e.toString());
        let r = K();
        n && r && !window.UserLeap.useMobileStyling
            ? r.appendChild(window.UserLeap.container)
            : document.body.appendChild(window.UserLeap.container);
    },
    x = (e, t) => {
        var n;
        G();
        let r = window.UserLeap.container;
        if (r)
            try {
                null == (n = r.parentNode) || n.removeChild(r),
                    (window.UserLeap.container = null),
                    T("trackStartUrl", null),
                    s.e.emit(s.S.SurveyLifeCycle, { state: "dismissed" }),
                    s.e.emit(s.S.SurveyClosed, {
                        name: s.S.SurveyClosed,
                        initiator: e,
                        "survey.id": parseInt(r.dataset.studyId),
                        ...(t && { studyType: t }),
                    });
            } catch (t) {
                console.warn(`[Sprig] (ERR-412) Error removing UserLeap container by ${e} ` + r),
                    t instanceof Error && window.UserLeap.reportError("dismissActiveSurvey", t);
            }
    },
    L = () => {
        s.e.once(s.S.SurveyWillClose, ({ initiator: e, studyType: t }) => {
            s.e.removeAllListeners(s.S.CloseSurveyOnOverlayClick), x(e, t);
        });
    },
    M = (e, t, n, r) => {
        var i, a;
        let o,
            s = {
                position: "fixed",
                bottom: "0px",
                right: D,
                border: 0,
                backgroundColor: "rgba(0,0,0,0)",
                zIndex: 2147483646,
                transition: "height 0.2s ease-in-out",
                maxWidth: "100%",
            },
            l = Object.assign({}, t, window.UserLeap),
            { desktopDisplay: c } = t || {},
            u = "center-modal" === c;
        u && (l.framePosition = "center");
        let d = !1;
        if (n)
            null != (i = window.UserLeap.windowDimensions) && i.width
                ? (s.width = `${window.UserLeap.windowDimensions.width}px`)
                : (s.width = "100%"),
                null != (a = window.UserLeap.windowDimensions) && a.height
                    ? (s.maxHeight = window.UserLeap.windowDimensions.height - 20 + "px")
                    : window.UserLeap.maxHeight
                      ? (s.maxHeight = window.UserLeap.maxHeight)
                      : (s.maxHeight = document.body.clientHeight - 20 + "px"),
                ["light", "dark"].includes(l.overlayStyleMobile) && (d = !0);
        else {
            (s.width = "360px"), (s.maxHeight = window.UserLeap.maxHeight || "66vh");
            let e = () => {
                (d = !0),
                    (o = {
                        margin: "auto",
                        position: "static",
                    });
            };
            if (r)
                u
                    ? e()
                    : (o = {
                          position: "relative",
                          height: "300px",
                      });
            else
                switch (l.framePosition) {
                    case "bottomLeft":
                        o = { left: D };
                        break;
                    case "topLeft":
                        o = {
                            left: D,
                            top: 0,
                        };
                        break;
                    case "topRight":
                        o = { top: 0 };
                        break;
                    case "center":
                        e();
                }
        }
        return (
            d &&
                ((e, t) => {
                    let n = {
                            position: "fixed",
                            overflow: "auto",
                            top: "0px",
                            left: "0px",
                            display: "none",
                            height: "100%",
                            width: "100%",
                            transition: "background-color 0.3s ease-out",
                            zIndex: 2147483646,
                        },
                        r = t ? e.overlayStyleMobile : e.overlayStyle;
                    (n["background-color"] = "light" === r ? "rgba(255,255,255, 0.95)" : "rgba(0,0,0,0.9)"),
                        t || (n.margin = "auto"),
                        window.UserLeap.container && Object.assign(window.UserLeap.container.style, n);
                })(l, n),
            Object.assign(e.style, s, o),
            d
        );
    },
    j = ({ productConfig: e, useMobileStyling: t, surveyId: n, isFeedback: r }) => {
        var i, a;
        let o = P,
            l = r && "slider" === e.desktopDisplay;
        w(n, r, l), U();
        let c = document.createElement("iframe");
        (c.id = o), c.setAttribute("title", "Sprig User Feedback Dialog");
        let u = M(c, e, t, r);
        L();
        let d = !1;
        c.setHeight = (e) => {
            (parseInt(c.style.height) == e && d) ||
                ((d = !0),
                (c.style.height = `${e}px`),
                s.e.emit(s.S.SurveyHeight, {
                    name: s.S.SurveyHeight,
                    contentFrameHeight: e,
                    "survey.id": n,
                }));
        };
        let f = !1;
        (c.setWidth = (e) => {
            (parseInt(c.style.width) == e && f) ||
                ((f = !0),
                (c.style.width = `${e}px`),
                s.e.emit(s.S.SurveyWidth, {
                    name: s.S.SurveyWidth,
                    contentFrameWidth: e,
                    "survey.id": n,
                }));
        }),
            null == (i = window.UserLeap.container) || i.appendChild(c),
            e &&
                (t ? e.exitOnOverlayClickMobile : e.exitOnOverlayClick) &&
                window.UserLeap.container &&
                (window.UserLeap.container.onclick = () => {
                    s.e.emit(s.S.CloseSurveyOnOverlayClick);
                }),
            s.e.emit(s.S.SurveyLifeCycle, { state: "presented" }),
            s.e.emit(s.S.SurveyPresented, {
                name: s.S.SurveyPresented,
                "survey.id": n,
            });
        let _ = null == (a = c.contentWindow) ? void 0 : a.document;
        if (
            _ &&
            (_.open("text/html", "replace"), _.write("<!doctype html><head></head><body></body></html>"), _.close(), !t)
        ) {
            let e = _.body;
            (e.style.display = "flex"), (e.style.alignItems = "center");
        }
        return {
            frameId: o,
            contentWinDocHead: null == _ ? void 0 : _.head,
            contentWindow: c.contentWindow,
            hasOverlay: u,
            iframe: c,
        };
    },
    k = {
        [s.S.SurveyFadingOut]: () => {
            window.UserLeap.container &&
                Object.assign(window.UserLeap.container.style, { "background-color": "rgba(0,0,0,0)" });
        },
    },
    U = () => {
        Object.entries(k).forEach(([e, t]) => {
            s.e.on(e, t);
        });
    },
    G = () => {
        Object.entries(k).forEach(([e, t]) => {
            s.e.off(e, t);
        });
    },
    B = (e) => !!e && e.nodeType === Node.ELEMENT_NODE,
    Z = (e) => e instanceof HTMLElement || e instanceof SVGElement,
    F = ({ document: e, elementId: t, styleString: n, nonce: r }) => {
        let i = e.getElementById(t);
        if (i) return void (i.textContent = n);
        let a = e.createElement("style");
        r && (a.nonce = r), (a.textContent = n), (a.id = t), e.head.appendChild(a);
    },
    V = (e, t) => {
        let n = t.querySelector(".sprig-question-body");
        if (!B(n)) return e;
        let r = n.scrollHeight;
        return r < 100 ? e : e - (r - 100);
    },
    H = (e, t) => {
        let n = t.querySelector(e);
        if (!B(n)) return 0;
        let r = getComputedStyle(n);
        return (
            parseFloat(r.paddingLeft) +
            parseFloat(r.paddingRight) +
            (parseFloat(r.marginLeft) + parseFloat(r.marginRight)) +
            (parseFloat(r.borderLeftWidth) + parseFloat(r.borderRightWidth))
        );
    },
    Y = (e, t, n) => {
        let r = e.querySelector(".ul-card__container"),
            i = e.querySelector(".ul-app"),
            a = 600,
            o = 360,
            s = 0;
        if (B(r) && B(i)) {
            let l = r.querySelector(".ul-card--matrix_grid"),
                c = !l && t && n;
            try {
                c && (i.style.width = "360px"),
                    (a =
                        r.clientHeight +
                        ((e) => {
                            let t = e.querySelector(".sprig-question-body"),
                                n = e.querySelector(".ul-card"),
                                r = e.querySelector(".ul-card-main-content"),
                                i = e.querySelector(".ul-footer"),
                                a = e.querySelector(".sprig-container"),
                                o = 0;
                            return (
                                B(n) && (o += n.scrollHeight - n.clientHeight),
                                B(r) && (o += r.scrollHeight - r.clientHeight),
                                B(t) && (o += t.scrollHeight - t.clientHeight),
                                B(i) && B(a) && 0 === a.clientHeight && (o += i.clientHeight),
                                o
                            );
                        })(e));
                let t = getComputedStyle(r);
                s = a;
                let n = parseFloat(t.marginTop) + parseFloat(t.marginBottom);
                (a += n + (parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth))),
                    l && (o = l.scrollWidth + H(".ul-card__container", e) + H(".sprig-question-body", e));
            } finally {
                c && i.style.removeProperty("width");
            }
        }
        return [a + 1, o, V(s, e)];
    },
    W = (e) => {
        let t = e.querySelector(".ul-card__container");
        t && (t.scrollTop = 0);
    },
    K = () => J,
    z = () => document.getElementById("sprig-feedback-container"),
    q = () => document.getElementById("sprig-feedback-loading-animation"),
    X = () => !!document.getElementById(P),
    Q = !1,
    J = null,
    $ = null,
    ee = !1,
    et = null,
    en = null,
    er = ["bottom-left", "bottom-right", "center-left", "center-right"],
    ei = () => {
        var e;
        let t = window.UserLeap.container;
        return (
            (null == (e = null == t ? void 0 : t.parentElement) ? void 0 : e.id) === "sprig-feedback-loading-container"
        );
    },
    ea = () => document.getElementById("sprig-feedback-error-container"),
    eo = () => {
        if (!J) return 0;
        let e = null == J ? void 0 : J.clientWidth,
            t = window.getComputedStyle(J);
        return e + parseInt(t.borderRightWidth || "0") + parseInt(t.borderLeftWidth || "0");
    },
    es = (e) => {
        let t = z();
        t &&
            (null != en && en.endsWith("right")
                ? (t.style.right = `${e}px`)
                : null != en && en.endsWith("left") && (t.style.left = `${e}px`));
    },
    el = () => !!(J && (ei() || ea())) && (s.e.off(s.S.SurveyAppeared, ec), eu(), es(-eo()), !0),
    ec = () => {
        if (!J || !$) return;
        let e = q();
        e && e.remove(), (J.style.height = "auto"), (J.style.width = "auto"), ($.disabled = !1), (ee = !1);
    },
    eu = () => {
        if (J && !q()) {
            let e = (() => {
                if (q()) return;
                let e = document.createElement("div");
                return (
                    (e.className = "ul-loading-spinner-container"),
                    (e.id = "sprig-feedback-loading-animation"),
                    (e.role = "progressbar"),
                    e.setAttribute("aria-live", "polite"),
                    e.setAttribute("aria-busy", "true"),
                    e.setAttribute("aria-label", "Processing..."),
                    (e.innerHTML = `
    <div class="ul-loading-spinner">
      <div class="first"></div>
      <div class="second"></div>
      <div class="third"></div>
      <div class="fourth"></div>
    </div>
  `),
                    e
                );
            })();
            e && ((J.style.height = "300px"), (J.style.width = "360px"), J.appendChild(e));
        }
    },
    ed = () => {
        J && $ && (es(0), ($.disabled = !0), (ee = !0));
    },
    ef = async (e, t, n) => {
        let {
            buttonTheme: r,
            customStyles: i,
            eventId: a,
            placement: o,
            desktopDisplay: l,
            feedbackLabel: c,
            surveyUuid: u,
            surveyId: d,
        } = e;
        window.UserLeap.feedbackCustomStyles = void 0;
        let f = z();
        if (f) {
            if (!t && a === et) return;
            f.remove(), s.e.off(s.E.SURVEY_FADING_OUT, el);
        }
        (et = a),
            F({
                document,
                elementId: "sprig-feedback-style",
                styleString:
                    '.ul-loading-spinner-container{font-size:1.8rem;flex-grow:1;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.ul-loading-spinner{display:inline-block;position:relative;width:6rem;height:6rem}.ul-loading-spinner div{box-sizing:border-box;display:block;position:absolute;width:80%;height:80%;margin:5px;border:5px solid #152e3e;border-radius:50%;animation:lds-ring 1.2s cubic-bezier(.5,0,.5,1) infinite;border-color:#152e3e transparent transparent transparent}.ul-loading-spinner .first{animation-delay:-.45s}.ul-loading-spinner .second{animation-delay:-.3s}.ul-loading-spinner .third{animation-delay:-.15s}@keyframes lds-ring{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.fade-in-transition{animation:fadeIn .4s ease-in}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}#sprig-feedback-button{border-left:0;border-radius:0 8px 8px 0;display:grid;padding:8px;text-align:center;transition:all ease-in-out 1s;z-index:inherit}#sprig-feedback-button:hover{cursor:pointer}.sprig-feedback-button-label{writing-mode:vertical-lr;text-orientation:sideways}.sprig-feedback-button-right{transform:rotate(180deg)}.sprig-feedback-button-bottom{align-self:flex-end;margin-bottom:20px}.sprig-feedback-button-light{background:#efefee;color:#000;border:1px solid #e2e3e1}.sprig-feedback-button-dark{background:#000;color:#fff;border:1px solid #000000}#sprig-feedback-container{display:flex;align-items:center;position:fixed;transition:right .2s linear,left .2s linear;z-index:2147483646}.sprig-feedback-container-left{flex-flow:row-reverse}.sprig-feedback-container-center{top:50%;transform:translateY(-50%)}.sprig-feedback-container-bottom{bottom:0%;margin-bottom:15px}.sprig-feedback-loading-container{align-items:center;background-color:#fff;border:2px solid var(--feedback-border);display:flex;max-height:90vh;max-width:90vw;min-width:0px}.sprig-feedback-loading-container-left{border-left:none;border-radius:0 8px 8px 0}.sprig-feedback-loading-container-right{border-right:none;border-radius:8px 0 0 8px}#sprig-feedback-error-container{margin:auto;text-align:center;width:360px}.sprig-feedback-error-text{font-weight:400;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}#sprig-feedback-loading-container .ul-container{position:relative;max-height:inherit}#sprig-feedback-loading-animation{position:absolute}.sprig-feedback-loading-container-previews iframe{max-height:inherit!important}',
                nonce: window.UserLeap.styleNonce,
            }),
            F({
                document,
                elementId: "ul-custom-style",
                styleString: i ?? "",
                nonce: window.UserLeap.styleNonce,
            }),
            (Q = "center-modal" === l),
            (en = o);
        let [_, p] = o.split("-");
        ((e) => {
            if (z() || !er.includes(e)) return;
            let [t, n] = e.split("-"),
                r = document.createElement("div");
            (r.id = "sprig-feedback-container"),
                r.classList.add(`sprig-feedback-container-${n}`, `sprig-feedback-container-${t}`),
                document.body.appendChild(r);
        })(o),
            (f = z()),
            ($ = document.createElement("button"));
        let h = document.createElement("div");
        (h.className = "sprig-feedback-button-label"),
            (h.innerText = c),
            $.appendChild(h),
            ($.id = "sprig-feedback-button"),
            $.classList.add(
                `sprig-feedback-button-${p}`,
                `sprig-feedback-button-${_}`,
                `sprig-feedback-button-${r}`,
                "fade-in-transition",
            ),
            s.e.on(s.E.SURVEY_FADING_OUT, el),
            $.addEventListener("click", async () => {
                let e = document.getElementById("sprig-feedback-error-container");
                if (X() || ea()) {
                    if (el()) {
                        s.e.emit(s.S.SurveyCloseRequested, {
                            name: s.S.SurveyCloseRequested,
                            initiator: s.D.FeedbackClosed,
                            studyType: "feedbackButton",
                            "survey.id": d,
                        }),
                            s.e.emit(s.S.SurveyWillClose, {
                                name: s.S.SurveyWillClose,
                                initiator: s.D.FeedbackClosed,
                                studyType: "feedbackButton",
                                "survey.id": d,
                            });
                        let t = z();
                        e && t && (t.remove(), (et = null), (J = null));
                    }
                    return;
                }
                if ((N((0, s.g)(window.UserLeap)) || ee || ed(), t))
                    return J && J.classList.add("sprig-feedback-loading-container-previews"), await C(t), void ec();
                let r = await (async (e) => {
                    let t = await I(A("1", [O], "startFeedbackStudy"), {
                        body: JSON.stringify({ surveyUuid: e }),
                        method: "POST",
                    });
                    return t.ok ? t.json : null;
                })(u);
                if (r)
                    s.e.once(s.S.SurveyAppeared, ec),
                        C(
                            {
                                ...r,
                                studyType: "feedbackButton",
                            },
                            n,
                        );
                else if (J) {
                    let e = e_();
                    J.appendChild(e), ec(), (J.style.height = "300px"), (J.style.width = "360px");
                }
            }),
            null == f || f.appendChild($),
            s.e.emit(s.S.FeedbackButtonLoaded, {
                name: s.S.FeedbackButtonLoaded,
                "survey.id": d,
            });
        let {
            useMobileStyling: m,
            _config: { border: g },
        } = window.UserLeap;
        if (Q || m) es(0);
        else {
            let e = document.createElement("div");
            (e.id = "sprig-feedback-loading-container"),
                (e.className = `sprig-feedback-loading-container sprig-feedback-loading-container-${p}`),
                e.style.setProperty("--feedback-border", g),
                (J = e),
                eu(),
                null == f || f.appendChild(e),
                es(-eo());
        }
        window.UserLeap._config.isOnQuestionsTab &&
            t &&
            !ei() &&
            J &&
            (ed(), eu(), J && J.classList.add("sprig-feedback-loading-container-previews"), C(t), ec());
    },
    e_ = () => {
        let e = document.createElement("div");
        (e.id = "sprig-feedback-error-container"),
            (e.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  <circle cx="20" cy="20" r="14.5" stroke="#B0B5B7" stroke-width="3"/>
  <path d="M20 12L20 21.6" stroke="#B0B5B7" stroke-width="3" stroke-linecap="round"/>
  <circle cx="19.9984" cy="27.6" r="1.6" fill="#B0B5B7"/>
  </svg>`);
        let t = document.createElement("h3");
        return (
            (t.className = "sprig-feedback-error-text"),
            (t.innerText = "There was an error while loading the survey"),
            e.appendChild(t),
            e
        );
    },
    ep = new (class {
        constructor() {
            u(this, "_ldData", {});
        }
        getAllLaunchDarklyVariations() {
            return this._ldData;
        }
        setLDFlagsVariations(e) {
            try {
                return (
                    !(!e || "object" != typeof e || Array.isArray(e)) &&
                    (Object.keys(this._ldData).forEach((e) => {
                        delete this._ldData[e];
                    }),
                    Object.keys(e).forEach((t) => (this._ldData[`!launch_darkly_${t}`] = (e[t] ?? 0) + 1)),
                    !0)
                );
            } catch (e) {
                return (
                    e instanceof Error && window.UserLeap.reportError("setAllLDFlagsVariations", e),
                    console.warn("[Sprig] An issue had occured when setting LaunchDarkly flags and variations."),
                    !1
                );
            }
        }
    })();
Object.freeze(ep);
let eh = new (class {
    constructor() {
        u(this, "_optimizelyData", {});
    }
    setOptimizelyExperiment(e, t = !0) {
        if (!e || "object" != typeof e) return !1;
        let { experiments: n } = e;
        try {
            return (
                t &&
                    Object.keys(this._optimizelyData).map((e) => {
                        delete this._optimizelyData[e];
                    }),
                n &&
                    n.map((e) => {
                        let { id: t, variation: n } = e,
                            r = this.transformExperimentId(t);
                        n && "string" == typeof n && (this._optimizelyData[r] = n);
                    }),
                !0
            );
        } catch (e) {
            return e instanceof Error && window.UserLeap.reportError("setOptimizelyExperiment", e), !1;
        }
    }
    getAllOptimizelyExperiments() {
        return this._optimizelyData;
    }
    getOptimizelyVariationName(e) {
        return this._optimizelyData[this.transformExperimentId(e)];
    }
    transformExperimentId(e) {
        return "!optimizely_experiments_" + e;
    }
    getAndSetWebOptimizelyExperiments() {
        var e;
        try {
            if (window && window.optimizely && "function" == typeof window.optimizely.get) {
                let t = null == (e = window.optimizely.get("state")) ? void 0 : e.getExperimentStates({ isActive: !0 });
                if (t) {
                    let e = Object.keys(t).map((e) => {
                        var n, r;
                        return null != (n = t[e].variation) && n.name
                            ? {
                                  id: e,
                                  variation: null == (r = t[e].variation) ? void 0 : r.name,
                              }
                            : {
                                  id: e,
                                  variation: "Original",
                              };
                    });
                    return this.setOptimizelyExperiment({ experiments: e }, !1), !0;
                }
            }
            return !1;
        } catch (e) {
            return e instanceof Error && window.UserLeap.reportError("getAndSetWebOptimizely", e), !1;
        }
    }
})();
Object.freeze(eh);
class em {
    constructor(e, t) {
        u(this, "paused"),
            u(this, "queue"),
            u(this, "ul"),
            (this.ul = e),
            (this.paused = !1),
            (this.queue = []),
            this.flush(t);
    }
    flush(e) {
        let t = e.length;
        if (t) for (let n = 0; n < t; n++) this.push(e[n]);
    }
    isPaused() {
        return this.paused;
    }
    pause() {
        this.paused = !0;
    }
    unpause() {
        this.paused = !1;
        let e = this.queue.slice();
        this.empty(), this.flush(e);
    }
    push(e) {
        if (this.paused) this.queue.push(e);
        else if (e instanceof Function) e();
        else {
            let t = Array.prototype.slice.call(e, 1),
                n = e[0],
                r = this.ul[n];
            r instanceof Function
                ? r.apply(this.ul, t)
                : n && console.warn("[Sprig] (ERR-100) No valid UserLeap action called", n);
        }
    }
    perform(e) {
        if (this.paused) {
            let t = () => {},
                n = new Promise(function (n) {
                    t = function () {
                        n(e());
                    };
                });
            return this.queue.push(t), n;
        }
        return e();
    }
    empty() {
        this.queue.length = 0;
    }
}
let eg = (e) => {
        let t = 0,
            n = e.firstElementChild;
        for (; n; ) (t += eg(n)), n.shadowRoot && (t += eg(n.shadowRoot)), (n = n.nextElementSibling), t++;
        return t;
    },
    eE = () => {
        r.report(eg(document.body)), i.report(document.documentElement.innerHTML.length);
    },
    eb = (e, t) => {
        let n = performance.now();
        document.hidden
            ? setTimeout(() => eb(e, t), e)
            : setTimeout(() => {
                  let r = performance.now() - n;
                  t.report(r / 1000), setTimeout(() => eb(e, t), e);
              }, 0);
    },
    ey,
    eO,
    ev,
    eI,
    eT = {},
    eS = (e, t = 1) => {
        let { name: n } = e;
        eT[n] = (eT[n] || 0) + t;
    },
    eA = (e) => {
        let t = 1;
        return (
            e.childNodes.forEach((e) => {
                t += eA(e);
            }),
            t
        );
    },
    eC = (e) => {
        let t = 0;
        return (
            e.forEach((e) => {
                t += eA(e);
            }),
            t
        );
    },
    eN = (e) => {
        switch (e.type) {
            case "childList":
                return eS(ey, eC(e.addedNodes)), void eS(eO, eC(e.removedNodes));
            case "attributes":
                return void eS(ev);
            case "characterData":
                return void eS(eI);
        }
    },
    eR = (e) => e.forEach(eN),
    eP = () => {
        ey.report(eT[ey.name] || 0),
            eO.report(eT[eO.name] || 0),
            ev.report(eT[ev.name] || 0),
            eI.report(eT[eI.name] || 0),
            (eT = {});
    },
    eD = (e = 1000) => {
        (ey = (0, s.r)("sdk_mutations_nodes_added")),
            (eO = (0, s.r)("sdk_mutations_nodes_removed")),
            (ev = (0, s.r)("sdk_mutations_attributes_changed")),
            (eI = (0, s.r)("sdk_mutations_character_data")),
            new MutationObserver(eR).observe(document, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0,
            }),
            setInterval(eP, e);
    },
    ew = ({ isWeb: e, reportingIntervalSeconds: t, thresholds: n, postMetrics: a }) => {
        (0, s.i)(n, (e, t) => {
            var n, r;
            if (null != (n = s.m.replay) && n.isReplayRecording()) {
                let n = `Value: ${e} on ${t.metric} violated threshold of ${t.type} ${t.value}`;
                null == (r = s.m.replay) || r.disableRecording("Threshold violated", Error(n), { reportError: !1 }),
                    window.UserLeap.reportError(
                        "Sdk Performance Metric threshold violated",
                        Error("Sdk Performance Metric threshold violated"),
                        {
                            metricName: t.metric,
                            type: t.type,
                            value: t.value,
                        },
                        { metricName: t.metric },
                    ),
                    (0, s.k)();
            }
        }),
            (0, s.j)({
                reportingIntervalSeconds: t,
                postMetrics: a,
            }),
            e &&
                (((e = 1000) => {
                    eb(e, (0, s.r)("sdk_event_queue_latency_seconds"));
                })(),
                ((e = 10000) => {
                    (r = (0, s.r)("sdk_dom_nodes_count")),
                        (i = (0, s.r)("sdk_page_html_characters")),
                        eE(),
                        setInterval(eE, e);
                })(),
                eD());
    },
    ex = "test",
    eL = ["popState", "pushState", "replaceState"],
    eM = {},
    ej = "!email",
    ek = "pageUrl",
    eU = window.location.href;
function eG(e) {
    var t, n;
    let { pageUrlEvents: r, interactiveEvents: i, dismissOnPageChange: a, platform: o } = window.UserLeap._config;
    if (o && "web" !== o) return;
    eU !== window.location.href &&
        s.b.navigation("LocationChange", {
            from: eU,
            to: window.location.href,
        }),
        (eU = window.location.href);
    let l = eV().trackStartUrl,
        c = l ? String(l) : null;
    r && eY(window.location.href),
        i && (eF(), eZ()),
        K() &&
            (() => {
                if (ei()) return;
                let e = z();
                e && ((0, s.c)(et) || (e.remove(), (et = null), (J = null)));
            })(),
        s.a.getItem("sprig.isCapturingHeatmap") &&
            (null == (n = null == (t = s.m.replay) ? void 0 : t.checkPendingHeatmapsUrl()) ||
                n.then((e) => {
                    var t;
                    e && (null == (t = s.m.replay) || t.uploadReadyPendingCaptures(!0));
                })),
        !ei() &&
            a &&
            c &&
            c !== window.location.href &&
            e &&
            eL.includes(e.type) &&
            window.UserLeap("dismissActiveSurvey", s.D.PageChange);
}
let eB = { capture: !0 },
    eZ = () => {
        let e = window.UserLeap._config.interactiveEvents
                .filter((e) => (0, s.p)(e, window.location.href))
                .map((e) => {
                    let { name: t, properties: n } = e,
                        { selector: r, innerText: i } = n;
                    return r
                        ? (e) => {
                              if (Z(e.target))
                                  try {
                                      e.target.closest(r) && window.UserLeap("track", t);
                                  } catch {}
                              return !1;
                          }
                        : (e) => (Z(e.target) && e.target.innerText === i && window.UserLeap("track", t), !1);
                }),
            t = (t) => e.forEach((e) => e(t));
        (window.UserLeap._config.interactiveEventsHandler = t), window.addEventListener("click", t, eB);
    },
    eF = () => {
        window.UserLeap._config.interactiveEventsHandler &&
            window.removeEventListener("click", window.UserLeap._config.interactiveEventsHandler, eB),
            delete window.UserLeap._config.interactiveEventsHandler;
    };
function eV() {
    let e = s.l.getItemObject("userleap.ids");
    return (e && e[window.UserLeap.envId]) || {};
}
function eH() {
    if (window.previewMode) return;
    let e = s.l.getItemObject("sprig.anon.env.vid.map") || {},
        t = e[window.UserLeap.envId];
    (window.UserLeap.visitorId = t || (0, s.v)()),
        s.b.info("NewVid", { vid: window.UserLeap.visitorId }),
        T("vid", window.UserLeap.visitorId),
        t || ((e[window.UserLeap.envId] = window.UserLeap.visitorId), s.l.setItemObject("sprig.anon.env.vid.map", e)),
        s.e.emit(s.S.VisitorIDUpdated, { visitorId: window.UserLeap.visitorId });
}
function eY(e, t, n, r) {
    var i, a;
    try {
        if (e.endsWith("mock_snippet.html")) return;
        s.b.info("PageView", { url: e });
        let o =
            null == (i = null == document ? void 0 : document.querySelector('meta[name="description"]'))
                ? void 0
                : i.getAttribute("content");
        null == (a = s.m.replay) ||
            a.RecordPageView({
                ...(o && { description: o }),
                url: e,
                referrer: document.referrer,
                pageTitle: document.title,
            });
        let l = window.UserLeap._config.pageUrlEvents,
            c = !1;
        if (l && l.length) for (let t = 0; t < l.length && !(c = (0, s.p)(l[t], e)); t++);
        if (!c) return;
        window.UserLeap.debugMode && console.info("[DEBUG] Sprig trackPageView", e);
        let u = { url: e };
        r && (u.trackPageView = !0), window.UserLeap._queue.push(["track", ek, t, u, n]);
    } catch (t) {
        t instanceof Error && ((t.stack = e), window.UserLeap.reportError("trackPageView", t)),
            console.warn("[Sprig] (ERR-428) Failed to track page view", t);
    }
}
function eW() {
    let e,
        t,
        n =
            "Backbone" in window && window.Backbone && window.Backbone.history
                ? window.Backbone.history
                : window.history;
    "pushState" in n &&
        ((e = n.pushState),
        (n.pushState = function (...t) {
            let n = e.apply(this, t),
                r = new Event("pushState");
            return window.dispatchEvent(r), eG(r), n;
        })),
        "replaceState" in n &&
            ((t = n.replaceState),
            (n.replaceState = function (...e) {
                let n = t.apply(this, e),
                    r = new Event("replaceState");
                return window.dispatchEvent(r), eG(r), n;
            })),
        ["hashchange", "popstate"].forEach((e) => window.addEventListener(e, eG, !0));
}
async function eK(e, t) {
    let n = S();
    e && !t && (window.UserLeap._config.mode = ex);
    let r = N((0, s.g)(window.UserLeap)),
        i = await I(
            (function (e) {
                let t = new URL(A("1", [v], "questions"));
                return (
                    Object.entries(e || {}).forEach(([e, n]) => {
                        n && t.searchParams.append(e, String(n));
                    }),
                    t.toString()
                );
            })({
                desktopDisplay: window.UserLeap._config.desktopDisplay,
                isMobile: r,
                previewLanguage: window.UserLeap._config.previewLanguage,
                surveyid: null == e ? void 0 : e.surveyId,
                surveytemplateid: null == e ? void 0 : e.surveyTemplateId,
                vid: n,
            }),
            { shouldDropOnRateLimit: !0 },
        );
    if (!i.ok)
        return (
            i.reportError &&
                i.error &&
                (console.warn("[Sprig] (ERR-414) Failed to request questions from the server", i.error),
                window.UserLeap.reportError("getQuestions", i.error)),
            {
                success: !1,
                surveyState: "no survey",
            }
        );
    if ((i.json.delay && (await (0, s.q)(i.json.delay)), !i.json.isFeedback)) return C(i.json, o, a);
    {
        let { feedbackLabel: t, productConfig: n, surveyUuid: r, feedbackCustomStyles: a } = i.json,
            { buttonTheme: o, placement: s, desktopDisplay: l } = n;
        ef(
            {
                customStyles: a,
                buttonTheme: o,
                desktopDisplay: l,
                eventId: 0,
                feedbackLabel: t,
                placement: s,
                surveyUuid: r,
                surveyId: null == e ? void 0 : e.surveyId,
            },
            i.json,
        );
    }
}
function ez(e) {
    if (!e) return;
    (window.UserLeap._config = e), e.mute && window.UserLeap._queue.pause();
    let { interactiveEvents: t, pageUrlEvents: n, dismissOnPageChange: r } = e;
    t &&
        (function (e) {
            let t = e.length;
            for (; t; ) {
                let n = Math.floor(Math.random() * t),
                    r = e[(t -= 1)];
                (e[t] = e[n]), (e[n] = r);
            }
        })(t),
        (t || n || r) && (eW(), eG());
}
let eq = function (e) {
    if (!window.UserLeap) return;
    let t = async (t = {}) => {
            var n, r, i, l, c;
            let { userId: u, anonymousId: d, metadata: f = {}, properties: _, showSurveyCallback: p } = t,
                { eventName: h } = t;
            if ((window.UserLeap.debugMode && h !== ek && console.info("[DEBUG] Sprig track", t), "test" === e.mode))
                return;
            let m = s.l.getItem("sprig.previewKey") ?? void 0;
            if (e.requireUserIdForTracking && !window.UserLeap.userId && !u) {
                let e = "[Sprig] - Skipping tracking without userId";
                return (
                    console.warn(e),
                    {
                        success: !1,
                        message: e,
                        surveyState: "no survey",
                    }
                );
            }
            if (!h || 0 === h.trim().length) {
                let e = "[Sprig] - Invalid event name " + (h = h ? String(h) : "");
                return (
                    console.warn(e),
                    {
                        success: !1,
                        message: e,
                        surveyState: "no survey",
                    }
                );
            }
            let g = o ?? window.location.href;
            f.url || (f.url = g),
                T("trackStartUrl", g),
                null != (r = null == (n = window.UserLeap) ? void 0 : n._config) &&
                    r.optimizelyEnabled &&
                    (R((0, s.g)(window.UserLeap)) || eh.getAndSetWebOptimizelyExperiments(),
                    (f.optimizelyExperiments = Object.assign({}, eh.getAllOptimizelyExperiments()))),
                null != (l = null == (i = window.UserLeap) ? void 0 : i._config) &&
                    l.launchDarklyEnabled &&
                    (f.launchDarklyFlags = ep.getAllLaunchDarklyVariations()),
                u && (window.UserLeap.userId = u),
                d && (window.UserLeap.partnerAnonymousId = d),
                _ && (f.eventProperties = _),
                null == (c = s.m.replay) ||
                    c.RecordEvent({
                        name: h,
                        url: f.url,
                    }),
                s.b.info("TrackEvent", { eventName: h });
            let E =
                window.UserLeap.delayingSurvey || X()
                    ? await I(A("1", [O], "events/batch"), {
                          body: JSON.stringify({
                              events: [
                                  {
                                      event: h,
                                      metadata: f,
                                  },
                              ],
                              previewKey: m,
                          }),
                          method: "POST",
                          shouldDropOnRateLimit: !0,
                      })
                    : await I(A("1", [O], "events"), {
                          body: JSON.stringify({
                              event: h,
                              metadata: f,
                              previewKey: m,
                          }),
                          method: "POST",
                          shouldDropOnRateLimit: !0,
                      });
            if (!E.ok) {
                let e = "[Sprig] (ERR-421) Failed to track event";
                return (
                    E.reportError &&
                        (console.warn(e, E.error), E.error && window.UserLeap.reportError("track", E.error)),
                    {
                        success: !1,
                        message: e,
                        error: E.error,
                        surveyState: "no survey",
                    }
                );
            }
            u && T("uid", u), d && T("aid", d);
            let b = E.json;
            b.invalidPreviewKey && s.l.removeItem("sprig.previewKey");
            let y = f.trackPageView ? f.url : void 0;
            return (
                null != b && b.feedbackButton && ef(b.feedbackButton, void 0, y),
                (await (async function (e, t) {
                    var n, r;
                    let i = !0;
                    return (
                        !(
                            t &&
                            null != (n = null == e ? void 0 : e.json) &&
                            n.surveyId &&
                            ((window.UserLeap.delayingSurvey = !0),
                            (i = await t(e.json.surveyId)),
                            (window.UserLeap.delayingSurvey = !1),
                            !i)
                        ) &&
                        (null != (r = null == e ? void 0 : e.json) &&
                            r.delay &&
                            !window.UserLeap.isMobileSDK &&
                            ((window.UserLeap.delayingSurvey = !0),
                            await (0, s.q)(e.json.delay),
                            (window.UserLeap.delayingSurvey = !1)),
                        i)
                    );
                })(E, p))
                    ? !(function (e) {
                          if (!window.UserLeap._config.dismissOnPageChange) return !0;
                          let t = new URL(e),
                              n = new URL(o ?? window.location.href);
                          return t.hostname === n.hostname && t.pathname === n.pathname;
                      })(g)
                        ? {
                              success: !1,
                              message: "Study should not be displayed after page navigation",
                              surveyState: "no survey",
                          }
                        : C(b, y, a)
                    : {
                          success: !1,
                          message: "[Sprig] Callback returned false, aborting rendering of survey",
                          surveyState: "no survey",
                      }
            );
        },
        n = (e, t) => {
            var n;
            let r = null == (n = null == e ? void 0 : e.querySelector(`[id="${P}"]`)) ? void 0 : n.contentDocument;
            r &&
                F({
                    document: r,
                    elementId: "ul-custom-style",
                    styleString: t,
                });
        },
        r = {
            displaySurvey: async (e) => (
                console.warn(
                    "[Sprig] displaySurvey should only be used to debug your studies; not intended for production usage.",
                ),
                window.UserLeap("dismissActiveSurvey", s.D.Override),
                eK({ surveyId: e }, !0)
            ),
            _previewSurvey(e) {
                window.UserLeap("dismissActiveSurvey", s.D.Override), eK({ surveyTemplateId: e }, !1);
            },
            _reviewSurvey(e) {
                window.UserLeap("dismissActiveSurvey", s.D.Override), eK({ surveyId: e }, !1);
            },
            previewSurvey(e) {
                r._previewSurvey(e);
            },
            reviewSurvey(e) {
                r._reviewSurvey(e);
            },
            mute() {
                window.UserLeap._queue.pause();
            },
            unmute() {
                window.UserLeap._queue.unpause();
            },
            setVisitorToken() {
                console.warn("[Sprig] setVisitorToken is deprecated.");
            },
            dismissActiveSurvey(e = s.D.API) {
                window.UserLeap.container &&
                    (e === s.D.Closed && window.Sprig.trackHistory && window.Sprig.trackHistory({ event: "closed" }),
                    s.e.emit(s.S.SurveyCloseRequested, {
                        name: s.S.SurveyCloseRequested,
                        initiator: e,
                        "survey.id": parseInt(window.UserLeap.container.dataset.studyId),
                    }),
                    s.e.emit(s.S.SurveyWillClose, {
                        name: s.S.SurveyWillClose,
                        initiator: e,
                        "survey.id": parseInt(window.UserLeap.container.dataset.studyId),
                    }));
            },
            async setAttribute(e, t) {
                if (!e || (!t && 0 !== t && !1 !== t)) {
                    let e = "[Sprig] - Disregarding empty attribute / value provided";
                    return (
                        console.warn(e),
                        {
                            success: !1,
                            message: e,
                        }
                    );
                }
                return this.setAttributes({ [e]: t });
            },
            async setAttributes(e) {
                if (null == e || 0 === Object.keys(e).length) {
                    let e = "[Sprig] - Disregarding empty attributes provided";
                    return (
                        console.warn(e),
                        {
                            success: !1,
                            message: e,
                        }
                    );
                }
                return this.identifyAndSetAttributes({ attributes: e });
            },
            async identifyAndSetAttributes(t) {
                let n;
                if (
                    (window.UserLeap.debugMode && console.info("[DEBUG] Sprig identifyAndSetAttributes", t),
                    "test" === e.mode)
                )
                    return;
                if (null === t || "object" != typeof t || !(t.userId || t.anonymousId || t.attributes)) {
                    let e = "[Sprig] - Disregarding empty payload provided";
                    return (
                        console.warn(e),
                        {
                            success: !1,
                            message: e,
                        }
                    );
                }
                let { userId: r, anonymousId: i, attributes: a } = t;
                if (e.requireUserIdForTracking && !window.UserLeap.userId && !r) {
                    let e = "[Sprig] - Skipping tracking without userId";
                    return (
                        console.warn(e),
                        {
                            success: !1,
                            message: e,
                        }
                    );
                }
                if (a)
                    for (let e of (a.email && !a[ej] && ((a[ej] = a.email), delete a.email), Object.keys(a)))
                        a[e] === eM[e] && delete a[e];
                if (
                    !(
                        (a && 0 !== Object.keys(a).length) ||
                        (r && window.UserLeap.userId !== r) ||
                        (i && window.UserLeap.partnerAnonymousId !== i)
                    )
                )
                    return { success: !0 };
                let o = {};
                return (
                    r && (o.userId = window.UserLeap.userId = r),
                    i && (o.partnerAnonymousId = window.UserLeap.partnerAnonymousId = i),
                    a && Object.keys(a).length > 0
                        ? (n = await I(A("1", [v, O], "attributes"), {
                              body: JSON.stringify(a),
                              method: "PUT",
                          })).ok
                            ? Object.assign(eM, a)
                            : n.reportError &&
                              (console.warn("[Sprig] (ERR-432) identifyAndSetAttributes failed", n.error),
                              n.error && window.UserLeap.reportError("identifyAndSetAttributes", n.error))
                        : (n = await I(A("1", [v, O]), {
                              body: JSON.stringify(o),
                              method: "PUT",
                          })),
                    a && a[ej] && (window.UserLeap.email = a[ej]),
                    n.ok && (r && T("uid", r), i && T("aid", i)),
                    { success: !!n.ok }
                );
            },
            async removeAttributes(t) {
                if ((window.UserLeap.debugMode && console.info("[DEBUG] Sprig removeAttributes", t), "test" === e.mode))
                    return;
                if (null == t || 0 === t.length) {
                    let e = "[Sprig] - Disregarding empty attributes provided";
                    return (
                        console.warn(e),
                        {
                            success: !1,
                            message: e,
                        }
                    );
                }
                if (e.requireUserIdForTracking && !window.UserLeap.userId) {
                    let e = "[Sprig] - Skipping tracking without userId";
                    return (
                        console.warn(e),
                        {
                            success: !1,
                            message: e,
                        }
                    );
                }
                let n = await I(A("1", [v, O], "attributes"), {
                    body: JSON.stringify({ delete: t }),
                    method: "DELETE",
                });
                return (
                    !n.ok &&
                        n.reportError &&
                        (console.warn("[Sprig] (ERR-433) Remove attributes failed", n.error),
                        n.error && window.UserLeap.reportError("removeAttributes", n.error)),
                    { success: !!n.ok }
                );
            },
            async addSurveyListener(e) {
                s.e.on(s.S.SurveyLifeCycle, e);
            },
            async removeSurveyListener(e) {
                s.e.removeListener(s.S.SurveyLifeCycle, e);
            },
            async addListener(e, t) {
                s.e.on(e, t);
            },
            async removeListener(e, t) {
                s.e.removeListener(e, t);
            },
            async removeAllListeners() {
                s.e.removeAllListeners();
            },
            setPreviewKey(e) {
                e && "string" == typeof e && s.l.isStorageAvailable && e && s.l.setItem("sprig.previewKey", e);
            },
            async setUserId(t) {
                var n;
                if ((window.UserLeap.debugMode && console.info("[DEBUG] Sprig setUserId", t), null == t)) {
                    let e = `[Sprig] - Invalid userId ${t}`;
                    return (
                        console.warn(e),
                        {
                            success: !1,
                            message: e,
                        }
                    );
                }
                if ("test" === e.mode || t === window.UserLeap.userId) return;
                window.UserLeap.userId = t;
                let r = window.UserLeap.visitorId,
                    i = await I(A("1", [v, O]), {
                        body: JSON.stringify({ userId: t }),
                        method: "PUT",
                    });
                i.ok
                    ? (r !== window.UserLeap.visitorId && (null == (n = s.m.replay) || n.clearUserReplayData()),
                      T("uid", t))
                    : i.reportError &&
                      (console.warn("[Sprig] (ERR-420) Failed to set user id", i.error),
                      i.error && window.UserLeap.reportError("setUserId", i.error));
            },
            async setPartnerAnonymousId(e) {
                if ((window.UserLeap.debugMode && console.info("[DEBUG] Sprig setPartnerAnonymousId", e), null == e)) {
                    let t = `[Sprig] - Invalid partnerAnonymousId ${e}`;
                    return (
                        console.warn(t),
                        {
                            success: !1,
                            message: t,
                        }
                    );
                }
                return (window.UserLeap.partnerAnonymousId = e), T("aid", e), { success: !0 };
            },
            track: async (e, n, r = {}, i) =>
                t({
                    eventName: e,
                    properties: n,
                    metadata: r,
                    showSurveyCallback: i,
                }),
            identifyAndTrack: async (e) => await t(e),
            trackPageView(e, t, n, r = !0) {
                (o = e), eY(e, t, n, r);
            },
            applyFeedbackStyles({ button: e = "", view: t = "" }) {
                (window.UserLeap.feedbackCustomStyles = t),
                    document.getElementById("sprig-feedback-style") &&
                        F({
                            document,
                            elementId: "ul-custom-style",
                            styleString: e,
                            nonce: window.UserLeap.styleNonce,
                        }),
                    n(document.querySelector(".ul-container-feedback"), t);
            },
            applyStyles(e) {
                (window.UserLeap.customStyles = e), n(window.UserLeap.container, e);
            },
            setWindowDimensions(e, t) {
                var n, r;
                let i = "string" == typeof e ? parseInt(e, 10) : e,
                    a = "string" == typeof t ? parseInt(t, 10) : t;
                isNaN(i) ||
                    isNaN(a) ||
                    (window.UserLeap.windowDimensions = {
                        width: i,
                        height: a,
                    });
                let o = (0, s.g)(window.UserLeap),
                    l = N(o),
                    c = "web" === o["userleap-platform"];
                if (!window.UserLeap.frameId) return;
                let u = document.getElementById(window.UserLeap.frameId);
                u &&
                    (window.UserLeap.useMobileStyling &&
                        (null != (n = window.UserLeap.windowDimensions) &&
                            n.width &&
                            (u.style.width = `${window.UserLeap.windowDimensions.width}px`),
                        null != (r = window.UserLeap.windowDimensions) &&
                            r.height &&
                            (u.style.maxHeight = window.UserLeap.windowDimensions.height - 20 + "px"),
                        u.contentDocument &&
                            (u.style.height = String(Y(u.contentDocument, c && !l, (0, s.h)(o))[0]) + "px")),
                    s.e.emit(s.S.SurveyDimensions, {
                        name: s.S.SurveyDimensions,
                        contentFrameWidth: u.clientWidth,
                        contentFrameHeight: u.clientHeight,
                        "survey.id": parseInt(window.UserLeap.container.dataset.studyId),
                    }));
            },
            logoutUser() {
                var e;
                window.UserLeap.debugMode && console.info("[DEBUG] Sprig logout"),
                    s.b.info("LogOut", {
                        vid: window.UserLeap.visitorId,
                        userId: window.UserLeap.userId,
                    }),
                    (window.UserLeap.visitorId = null),
                    (window.UserLeap.userId = null),
                    (window.UserLeap.partnerAnonymousId = null),
                    (window.UserLeap.token = null),
                    (window.UserLeap.email = null),
                    s.l.removeItem("userleap.ids"),
                    window.UserLeap._queue.isPaused() && window.UserLeap._queue.empty(),
                    eH(),
                    null == (e = s.m.replay) || e.clearUserReplayData(),
                    window.UserLeap._queue.unpause();
            },
            teardown() {
                ["hashchange", "popstate"].forEach((e) => window.removeEventListener(e, eG, !0)),
                    window.UserLeap._config.interactiveEvents && eF(),
                    window.UserLeap("dismissActiveSurvey", s.D.API),
                    delete window.UserLeap,
                    delete window.Sprig,
                    delete window._Sprig;
            },
            integrateOptimizely(e, t = !0) {
                var n, r;
                if (null != (r = null == (n = window.UserLeap) ? void 0 : n._config) && r.optimizelyEnabled)
                    try {
                        let n = "string" == typeof e ? JSON.parse(e) : e;
                        eh.setOptimizelyExperiment(n, t);
                    } catch (e) {
                        console.warn("[Sprig] Error with integrating Optimizely data"),
                            e instanceof Error && window.UserLeap.reportError("integrateOptimizely", e);
                    }
                else console.warn("[SPRIG] Optimizely integration is currently not enabled for your product.");
            },
            integrateOptimizelyClient(e) {
                var t, n;
                if (!(null != (n = null == (t = window.UserLeap) ? void 0 : t._config) && n.optimizelyEnabled))
                    return void console.warn(
                        "[SPRIG] Optimizely integration is currently not enabled for your product.",
                    );
                e.notificationCenter.addNotificationListener(
                    "ACTIVATE:experiment, user_id,attributes, variation, event",
                    ({ experiment: e, variation: t }) => {
                        let n = {
                            experiments: [
                                {
                                    id: e.id,
                                    variation: t.key,
                                },
                            ],
                        };
                        window.UserLeap("integrateOptimizely", n, !1);
                    },
                );
            },
            importLaunchDarklyData(e) {
                var t, n;
                null != (n = null == (t = window.UserLeap) ? void 0 : t._config) && n.launchDarklyEnabled
                    ? ep.setLDFlagsVariations(e)
                    : console.warn("[SPRIG] LaunchDarkly integration is currently not enabled for your product.");
            },
            setVisitorAttribute: (e, t) => (
                console.warn("[Sprig] setVisitorAttribute is deprecated. Please use setAttribute"), r.setAttribute(e, t)
            ),
            setEmail: async (e) => r.setAttribute(ej, e),
            setVisitorEmail: async (e) => (
                console.warn("[Sprig] setVisitorEmail is deprecated. Please use setEmail"), r.setEmail(e)
            ),
            _generateVideoUploadUrl: async (e) =>
                (async function (e) {
                    var t;
                    if (!e) return;
                    let n = `${window.UserLeap._API_URL}/2/environments/integrations/upload`;
                    try {
                        let r = await fetch(n, {
                            method: "POST",
                            cache: "no-cache",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(e),
                        });
                        if (r.ok) {
                            let e = await r.json();
                            return null == (t = null == e ? void 0 : e.upload) ? void 0 : t.url;
                        }
                        return null;
                    } catch (e) {
                        console.warn("[Sprig] Error with generating video upload url"),
                            e instanceof Error && window.UserLeap.reportError("generateVideoUploadUrl", e);
                    }
                })(e),
            _reportMetric(e, t) {
                (0, s.d)(e, t);
            },
            _completeSessionReplay: async ({ surveyId: e, responseGroupUuid: t, eventDigest: n }) => {
                var r;
                return s.m.replay
                    ? null == (r = s.m.replay)
                        ? void 0
                        : r._completeSessionReplay({
                              surveyId: e,
                              responseGroupUuid: t,
                              eventDigest: n,
                              headers: (0, s.g)(window.UserLeap),
                          })
                    : (window.UserLeap.reportError("_completeSessionReplay", Error("Replay module not registered")),
                      !1);
            },
            pauseReplayRecording() {
                var e, t, n, r;
                (null != (t = null == (e = s.m.replay) ? void 0 : e.isReplayPaused) && t.call(e)) ||
                    null == (r = null == (n = s.m.replay) ? void 0 : n.recordReplayPaused) ||
                    r.call(n);
            },
            resumeReplayRecording() {
                var e, t, n, r, i, a;
                null != (t = null == (e = s.m.replay) ? void 0 : e.isReplayPaused) &&
                    t.call(e) &&
                    (null == (r = null == (n = s.m.replay) ? void 0 : n.recordReplayResumed) || r.call(n),
                    null == (a = null == (i = s.m.replay) ? void 0 : i.recordFullSnapshot) || a.call(i));
            },
        };
    Object.assign(window.UserLeap, r);
};
async function eX(e, t, n = {}, r = {}) {
    let i = window.__cfg && window.__cfg.mode,
        a = S(),
        l = window.UserLeap.envId,
        c = window.document.documentElement,
        u = {
            mode: i,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            clientWidth: c.clientWidth,
            clientHeight: c.clientHeight,
            location: o ?? window.location.href,
            language: window.navigator.language,
            ...n,
        },
        d = {
            action: e,
            breadcrumbs: s.b.breadcrumbs,
            err: {
                message: `${null == t ? void 0 : t.name} - ${null == t ? void 0 : t.message}`,
                stack: null == t ? void 0 : t.stack,
            },
            meta: u,
            vid: a,
            envId: l,
            ...r,
        };
    (
        await I(A("1", null, "errors"), {
            method: "POST",
            headers: { "x-ul-error": window.btoa(`userleap-${Date.now()}-error`) },
            body: JSON.stringify(d),
            shouldDropOnRateLimit: !0,
        })
    ).ok || console.warn("[Sprig] (ERR-444) Failed to report error to API", t);
}
function eQ(e = {}) {
    var t;
    null == (t = window.SprigLoggerCallback) || t.call(window, "Initializing Sprig");
    let n = new URLSearchParams(window.location.search).get("sprigPreviewKey") ?? "";
    async function r() {
        var t, n, r, i, o;
        if (window.UserLeap.loaded) return;
        if (
            (null == (t = window.SprigLoggerCallback) || t.call(window, "Loading Sprig"),
            (window.UserLeap.reportError = eX),
            (window.UserLeap.loaded = !0),
            (window.UserLeap._config = Object.assign({}, e, window.UserLeap.config)),
            (window.UserLeap.delayingSurvey = !1),
            window.UserLeap._config && "object" == typeof window.UserLeap._config)
        )
            for (let e in window.UserLeap._config) window.UserLeap[e] = window.UserLeap._config[e];
        if (!window.UserLeap.envId) {
            if (!window.UserLeap.appId) throw Error("Missing Environment id");
            window.UserLeap.envId = window.UserLeap.appId;
        }
        window.UserLeap.debugMode && console.info("[DEBUG] Sprig debug mode enabled");
        let l = eV(),
            c = window.UserLeap.sampleRate,
            u = l.sampled;
        if (c) {
            if ((null === u && T("sampled", (u = Math.random() < c)), !u)) return;
        } else null !== u && T("sampled", null);
        window.UserLeap._API_URL || (window.UserLeap._API_URL = "https://api.sprig.com");
        let d = [...window.UserLeap._queue];
        (window.UserLeap._queue = new em(window.UserLeap, [])), window.UserLeap._queue.pause();
        for (let e = 0; e < d.length; e++) window.UserLeap._queue.push(d[e]);
        let f = l.token;
        f
            ? ((window.UserLeap.token = f),
              (window.UserLeap.visitorId = l.vid ?? null),
              (window.UserLeap.userId = l.uid ?? null),
              (window.UserLeap.partnerAnonymousId = l.aid ?? null))
            : eH();
        let _ = R((0, s.g)(window.UserLeap));
        null == (n = window.SprigLoggerCallback) || n.call(window, "Sprig fetching config");
        let p = await (async function (e) {
            var t, n;
            let r = (0, s.g)(window.UserLeap);
            document.addEventListener("securitypolicyviolation", s.n);
            let i = await (0, s.s)(A("1", [v], "config"), { headers: r });
            if ((document.removeEventListener("securitypolicyviolation", s.n), !i.ok))
                return (
                    null == (t = window.SprigLoggerCallback) || t.call(window, "Sprig config fetch failed"),
                    i.reportError &&
                        (console.warn("[Sprig] (ERR-422) Failed to load configuration", i.error),
                        i.error && window.UserLeap.reportError("applyRemoteConfig", i.error)),
                    (0, s.o)("Disabled: failed to fetch configuration"),
                    e
                );
            let a = i.json;
            return null != a && a.disabled
                ? (null == (n = window.SprigLoggerCallback) || n.call(window, "Sprig config fetch disabled"),
                  (0, s.o)(`Disabled: ${a.disabled}`),
                  { disabled: a.disabled })
                : Object.assign({}, a, e);
        })(e);
        null == (r = window.SprigLoggerCallback) || r.call(window, "Sprig fetched config"),
            ew({
                isWeb: !_,
                reportingIntervalSeconds:
                    p.metricsReportingEnabled || p.mobileMetricsReportingEnabled
                        ? p.metricsReportingIntervalSeconds
                        : 0,
                thresholds: p.metricThresholds,
                postMetrics: async (e) => {
                    var t;
                    await I(A("1", [v], "metrics"), {
                        body: e,
                        method: "POST",
                        headers: { "x-ul-replay-enabled": `${!!(null != (t = s.m.replay) && t.isReplayRecording())}` },
                        shouldDropOnRateLimit: !0,
                    });
                },
            });
        let h = p.alwaysOnReplay
            ? {
                  userAgent: window.navigator.userAgent,
                  surveyId: p.alwaysOnReplay.surveyId,
                  responseGroupUuid: p.alwaysOnReplay.responseGroupUuid,
                  sdkVersion: "2.34.0",
                  maxDurationSeconds: p.alwaysOnReplay.maxDurationSeconds,
              }
            : void 0;
        await (null == (i = s.m.replay)
            ? void 0
            : i.initializeReplay({
                  maxReplayDurationSeconds: p.maxReplayDurationSeconds,
                  maxInflightRequests: window.UserLeap.maxInflightReplayRequests ?? 2,
                  replaySettings: p.replaySettings,
                  apiUrl: window.UserLeap._API_URL,
                  alwaysOnConfig: h,
              })),
            (a = p.replaySettings),
            eq(p),
            await ez(p),
            window.UserLeap._queue.unpause(),
            null == (o = window.SprigLoggerCallback) || o.call(window, "SdkReady"),
            s.e.emit(s.S.SDKReady, {
                mobileMetricsReportingEnabled: !!p.mobileMetricsReportingEnabled,
                metricsReportingInterval: p.metricsReportingIntervalSeconds || 0,
                metricsThresholds: p.metricThresholds || [],
                maxMobileReplayDurationSeconds: p.maxMobileReplayDurationSeconds,
                mobileReplaySettings: p.mobileReplaySettings,
            }),
            s.e.emit(s.S.VisitorIDUpdated, { visitorId: window.UserLeap.visitorId }),
            s.e.on(s.S.VisitorIDUpdated, () => {
                for (let e in eM) delete eM[e];
            });
    }
    (window.UserLeap.UPDATES = s.E),
        window.UserLeap("setPreviewKey", n),
        "complete" === document.readyState
            ? r()
            : window.attachEvent
              ? window.attachEvent("onload", r)
              : window.addEventListener(
                    "load",
                    () => {
                        r();
                    },
                    !1,
                );
}
class eJ {
    constructor() {
        u(this, "UPDATES", s.E);
    }
    displaySurvey(e) {
        window.Sprig("displaySurvey", e);
    }
    mute() {
        window.Sprig("mute");
    }
    unmute() {
        window.Sprig("unmute");
    }
    dismissActiveSurvey() {
        window.Sprig("dismissActiveSurvey");
    }
    setAttribute(e, t) {
        window.Sprig("setAttribute", e, t);
    }
    setAttributes(e) {
        window.Sprig("setAttributes", e);
    }
    identifyAndSetAttributes(e) {
        window.Sprig("identifyAndSetAttributes", e);
    }
    removeAttributes(e) {
        window.Sprig("removeAttributes", e);
    }
    addListener(e, t) {
        window.Sprig("addListener", e, t);
    }
    removeListener(e, t) {
        window.Sprig("removeListener", e, t);
    }
    removeAllListeners() {
        window.Sprig("removeAllListeners");
    }
    setEmail(e) {
        window.Sprig("setAttribute", "!email", e);
    }
    setUserId(e) {
        window.Sprig("setUserId", e);
    }
    setPartnerAnonymousId(e) {
        window.Sprig("setPartnerAnonymousId", e);
    }
    track(e, t = {}, n = {}) {
        window.Sprig("track", e, t, n);
    }
    identifyAndTrack(e) {
        window.Sprig("identifyAndTrack", e);
    }
    trackPageView(e, t, n) {
        window.Sprig("trackPageView", e, t, n);
    }
    applyStyles(e) {
        window.Sprig("applyStyles", e);
    }
    setWindowDimensions(e, t) {
        window.Sprig("setWindowDimensions", e, t);
    }
    logoutUser() {
        window.Sprig("logoutUser");
    }
    teardown() {
        window.Sprig("teardown");
    }
    pauseReplayRecording() {
        window.Sprig("pauseReplayRecording");
    }
    resumeReplayRecording() {
        window.Sprig("resumeReplayRecording");
    }
}
let e$ = {
    configure: (e) => {
        if (!e.envId && !e.environmentId)
            throw Error("Initialization Error: Sprig configure requires an environmentId");
        if ((e.envId || (e.envId = e.environmentId ?? ""), (e.installationMethod = "web-npm"), window.Sprig))
            return window.Sprig;
        (window.Sprig = function () {
            window.Sprig._queue.push(arguments);
        }),
            Object.getOwnPropertyNames(eJ.prototype).map((e) => {
                "constructor" !== e && (window.Sprig[e] = eJ.prototype[e]);
            });
        let t = window.Sprig;
        return (t.appId = e.envId), (t._queue = []), (window.UserLeap = t), eQ(e), window.Sprig;
    },
};
e$.configure;
