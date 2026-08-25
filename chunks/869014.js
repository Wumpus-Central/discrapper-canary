"use strict";
n.d(t, { A: () => L });
var i = n(439372),
    r = n(626584),
    a = n(567249),
    s = n(531685),
    l = n(365971),
    o = n(777334),
    d = n(41984),
    c = n(296027),
    u = n(489277),
    _ = n(392164);
let E = new r.A("OverlayWindowRAFManager"),
    A = window.requestAnimationFrame.bind(window),
    h = new Set([d.Ue.OutOfProcess, d.Ue.OutOfProcessLimitedInteraction]),
    I = new Set([d.AR.OVERLAY_CRASHED, d.AR.OVERLAY_CRASHED_DISABLED]);
function f(e) {
    for (let t of Object.values(c.default.getTrackedGames()))
        if (!(!h.has(t.overlayMethod) || I.has(t.state)) && (!e || t.state === d.AR.OVERLAY_RENDERING)) return !0;
    return !1;
}
let p = null,
    T = !1,
    m = !1,
    g = {};
function S(e) {
    try {
        let t = a.A.getWindow(_.f);
        if (null == t || "function" != typeof t.requestAnimationFrame) return (p = "OverlayNotAvailable"), A(e);
        if (!m) return (p = "MainWindowFocused"), A(e);
        if (!f(!0)) return (p = "NoOverlayRendering"), A(e);
        let n = null !== u.A.getFocusedRunningGame(),
            i = s.A.isFocused((0, l.Q2)(t));
        if ((s.A.isFocused() && E.error("Main window is reported as focused when it should not be!"), n || i)) {
            p = n ? "OverlayGameFocused" : "OverlayWindowFocused";
            let i = t.requestAnimationFrame((t) => {
                delete g[i], e(t);
            });
            return (g[i] = e), i;
        }
    } catch (e) {
        E.error("RAF redirect failed, falling back to original. Cause:", e),
            (0, o.pj)(e, c.default.getOverlayMethod(u.A.getTargetPID()));
    }
    return (p = "None"), A(e);
}
function N() {
    return !s.A.isFocused() || !s.A.isVisible();
}
function C() {
    let e = a.A.getWindow(_.f),
        t = !1;
    try {
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    } catch (e) {
        E.warn("Unable to access overlay window cancelAnimationFrame, falling back to main window RAF callbacks", e);
    }
    Object.entries(g)
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
                        E.warn("Unable to cancel overlay RAF callback, continuing with main window RAF callbacks", e);
                }
            A(r);
        }),
        (g = {});
}
function O(e) {
    if (e === m) return;
    let t = !e && m;
    (m = e), t && C();
}
class R extends i.A {
    _initialize() {
        O(N());
    }
    _terminate() {
        window.requestAnimationFrame = A;
    }
    getLastRAFCallbackReason() {
        return p;
    }
    handleUpdateOverlayMethod() {
        if (!__OVERLAY__) {
            if (!T && !f(!1)) {
                (window.requestAnimationFrame = A), (p = "NoOverlayRendering"), C();
                return;
            }
            E.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = S);
        }
    }
    handleWindowStateChage() {
        O(N());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === d.x7.OverlayRafManagerForceEnabled &&
            ((T = t), t ? (window.requestAnimationFrame = S) : m || ((window.requestAnimationFrame = A), C()));
    }
    actions = {
        OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
        WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
        WINDOW_FOCUS: this.handleWindowStateChage,
        OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
    };
}
let L = new R();
