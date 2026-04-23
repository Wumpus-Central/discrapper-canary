"use strict";
n.d(t, { A: () => O });
var r = n(439372),
    i = n(626584),
    s = n(87001),
    a = n(531685),
    o = n(365971),
    l = n(777334),
    u = n(41984),
    c = n(833551),
    d = n(395011),
    _ = n(392164);
let f = new i.A("OverlayWindowRAFManager"),
    p = window.requestAnimationFrame.bind(window),
    h = new Set([u.Ue.OutOfProcess, u.Ue.OutOfProcessLimitedInteraction]),
    E = new Set([u.AR.OVERLAY_CRASHED, u.AR.OVERLAY_CRASHED_DISABLED]);
function m(e) {
    for (let t of Object.values(c.default.getTrackedGames()))
        if (!(!h.has(t.overlayMethod) || E.has(t.state)) && (!e || t.state === u.AR.OVERLAY_RENDERING)) return !0;
    return !1;
}
let g = null,
    A = !1,
    I = !1,
    T = {},
    S = (e) => {
        try {
            let t = s.A.getWindow(_.f);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (g = "OverlayNotAvailable"), p(e);
            if (!I) return (g = "MainWindowFocused"), p(e);
            if (!m(!0)) return (g = "NoOverlayRendering"), p(e);
            let n = null !== d.A.getFocusedRunningGame(),
                r = a.A.isFocused((0, o.Q2)(t));
            if ((a.A.isFocused() && f.error("Main window is reported as focused when it should not be!"), n || r)) {
                g = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let r = t.requestAnimationFrame((t) => {
                    delete T[r], e(t);
                });
                return (T[r] = e), r;
            }
        } catch (e) {
            f.error("RAF redirect failed, falling back to original. Cause:", e),
                (0, l.pj)(e, c.default.getOverlayMethod(d.A.getTargetPID()));
        }
        return (g = "None"), p(e);
    };
function y() {
    return !a.A.isFocused() || !a.A.isVisible();
}
function N() {
    let e = s.A.getWindow(_.f),
        t = !1;
    try {
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    } catch (e) {
        f.warn("Unable to access overlay window cancelAnimationFrame, falling back to main window RAF callbacks", e);
    }
    Object.entries(T)
        .map((e) => {
            let [t, n] = e;
            return { timeoutId: Number(t), callback: n };
        })
        .forEach((n) => {
            let { timeoutId: r, callback: i } = n;
            if (t && null != e)
                try {
                    e.cancelAnimationFrame(r);
                } catch (e) {
                    (t = !1),
                        f.warn("Unable to cancel overlay RAF callback, continuing with main window RAF callbacks", e);
                }
            p(i);
        }),
        (T = {});
}
function v(e) {
    if (e === I) return;
    let t = !e && I;
    (I = e), t && N();
}
class C extends r.A {
    _initialize() {
        v(y());
    }
    _terminate() {
        window.requestAnimationFrame = p;
    }
    getLastRAFCallbackReason() {
        return g;
    }
    handleUpdateOverlayMethod() {
        if (!__OVERLAY__) {
            if (!A && !m(!1)) {
                (window.requestAnimationFrame = p), (g = "NoOverlayRendering"), N();
                return;
            }
            f.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = S);
        }
    }
    handleWindowStateChage() {
        v(y());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === u.x7.OverlayRafManagerForceEnabled &&
            ((A = t), t ? (window.requestAnimationFrame = S) : I || ((window.requestAnimationFrame = p), N()));
    }
    actions = {
        OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
        WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
        WINDOW_FOCUS: this.handleWindowStateChage,
        OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
    };
}
let O = new C();
