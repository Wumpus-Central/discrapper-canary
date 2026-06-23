"use strict";
n.d(t, { A: () => R });
var i = n(439372),
    r = n(626584),
    s = n(567249),
    a = n(531685),
    o = n(365971),
    l = n(777334),
    u = n(41984),
    c = n(296027),
    d = n(489277),
    _ = n(392164);
let h = new r.A("OverlayWindowRAFManager"),
    f = window.requestAnimationFrame.bind(window),
    p = new Set([u.Ue.OutOfProcess, u.Ue.OutOfProcessLimitedInteraction]),
    E = new Set([u.AR.OVERLAY_CRASHED, u.AR.OVERLAY_CRASHED_DISABLED]);
function m(e) {
    for (let t of Object.values(c.default.getTrackedGames()))
        if (!(!p.has(t.overlayMethod) || E.has(t.state)) && (!e || t.state === u.AR.OVERLAY_RENDERING)) return !0;
    return !1;
}
let g = null,
    A = !1,
    I = !1,
    T = {};
function S(e) {
    try {
        let t = s.A.getWindow(_.f);
        if (null == t || "function" != typeof t.requestAnimationFrame) return (g = "OverlayNotAvailable"), f(e);
        if (!I) return (g = "MainWindowFocused"), f(e);
        if (!m(!0)) return (g = "NoOverlayRendering"), f(e);
        let n = null !== d.A.getFocusedRunningGame(),
            i = a.A.isFocused((0, o.Q2)(t));
        if ((a.A.isFocused() && h.error("Main window is reported as focused when it should not be!"), n || i)) {
            g = n ? "OverlayGameFocused" : "OverlayWindowFocused";
            let i = t.requestAnimationFrame((t) => {
                delete T[i], e(t);
            });
            return (T[i] = e), i;
        }
    } catch (e) {
        h.error("RAF redirect failed, falling back to original. Cause:", e),
            (0, l.pj)(e, c.default.getOverlayMethod(d.A.getTargetPID()));
    }
    return (g = "None"), f(e);
}
function y() {
    return !a.A.isFocused() || !a.A.isVisible();
}
function C() {
    let e = s.A.getWindow(_.f),
        t = !1;
    try {
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    } catch (e) {
        h.warn("Unable to access overlay window cancelAnimationFrame, falling back to main window RAF callbacks", e);
    }
    Object.entries(T)
        .map((e) => {
            let [t, n] = e;
            return { timeoutId: Number(t), callback: n };
        })
        .forEach((n) => {
            let { timeoutId: i, callback: r } = n;
            if (t && null != e)
                try {
                    e.cancelAnimationFrame(i);
                } catch (e) {
                    (t = !1),
                        h.warn("Unable to cancel overlay RAF callback, continuing with main window RAF callbacks", e);
                }
            f(r);
        }),
        (T = {});
}
function N(e) {
    if (e === I) return;
    let t = !e && I;
    (I = e), t && C();
}
class v extends i.A {
    _initialize() {
        N(y());
    }
    _terminate() {
        window.requestAnimationFrame = f;
    }
    getLastRAFCallbackReason() {
        return g;
    }
    handleUpdateOverlayMethod() {
        if (!__OVERLAY__) {
            if (!A && !m(!1)) {
                (window.requestAnimationFrame = f), (g = "NoOverlayRendering"), C();
                return;
            }
            h.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = S);
        }
    }
    handleWindowStateChage() {
        N(y());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === u.x7.OverlayRafManagerForceEnabled &&
            ((A = t), t ? (window.requestAnimationFrame = S) : I || ((window.requestAnimationFrame = f), C()));
    }
    actions = {
        OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
        WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
        WINDOW_FOCUS: this.handleWindowStateChage,
        OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
    };
}
let R = new v();
