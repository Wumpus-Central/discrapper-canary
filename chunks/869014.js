n.d(t, { A: () => M });
var i = n(439372),
    r = n(626584),
    a = n(567249),
    s = n(531685),
    l = n(365971),
    o = n(777334),
    d = n(41984),
    c = n(296027),
    u = n(233741),
    _ = n(392164);
let E = new r.A("OverlayWindowRAFManager"),
    A = window.requestAnimationFrame.bind(window),
    h = window.cancelAnimationFrame.bind(window),
    f = new Set([d.Ue.OutOfProcess, d.Ue.OutOfProcessLimitedInteraction]),
    I = new Set([d.AR.OVERLAY_CRASHED, d.AR.OVERLAY_CRASHED_DISABLED]);
function p(e) {
    for (let t of Object.values(c.default.getTrackedGames()))
        if (!(!f.has(t.overlayMethod) || I.has(t.state)) && (!e || t.state === d.AR.OVERLAY_RENDERING)) return !0;
    return !1;
}
let T = null,
    m = !1,
    g = !1,
    S = -1,
    N = new Map();
function C(e, t) {
    let n = N.get(e);
    null != n && (N.delete(e), n.callback(t));
}
function O(e) {
    if (null == e.overlayFrameId) return;
    let t = e.overlayWindow.deref();
    if (null != t)
        try {
            t.cancelAnimationFrame(e.overlayFrameId);
        } catch (e) {
            E.warn("Unable to cancel overlay RAF callback", e);
        }
}
function R(e) {
    if (null == e) return;
    let t = N.get(e);
    null == t ? h(e) : (N.delete(e), O(t), null != t.mainFrameId && h(t.mainFrameId));
}
function L(e) {
    try {
        let t = a.A.getWindow(_.f);
        if (null == t || "function" != typeof t.requestAnimationFrame) return ((T = "OverlayNotAvailable"), A(e));
        if (!g) return ((T = "MainWindowFocused"), A(e));
        if (!p(!0)) return ((T = "NoOverlayRendering"), A(e));
        let n = null !== u.A.getFocusedRunningGame(),
            i = s.A.isFocused((0, l.Q2)(t));
        if ((s.A.isFocused() && E.error("Main window is reported as focused when it should not be!"), n || i)) {
            T = n ? "OverlayGameFocused" : "OverlayWindowFocused";
            let i = S--,
                r = t.performance.timeOrigin - performance.timeOrigin,
                a = t.requestAnimationFrame((e) => C(i, e + r));
            return (N.set(i, { callback: e, overlayWindow: new WeakRef(t), overlayFrameId: a, mainFrameId: null }), i);
        }
    } catch (e) {
        (E.error("RAF redirect failed, falling back to original. Cause:", e),
            (0, o.pj)(e, c.default.getOverlayMethod(u.A.getTargetPID())));
    }
    return ((T = "None"), A(e));
}
function y() {
    return !s.A.isFocused() || !s.A.isVisible();
}
function D() {
    N.forEach((e, t) => {
        null != e.overlayFrameId && (O(e), (e.overlayFrameId = null), (e.mainFrameId = A((e) => C(t, e))));
    });
}
function v(e) {
    if (e === g) return;
    let t = !e && g;
    ((g = e), t && D());
}
class b extends i.A {
    _initialize() {
        v(y());
    }
    _terminate() {
        ((window.requestAnimationFrame = A), D());
    }
    getLastRAFCallbackReason() {
        return T;
    }
    handleUpdateOverlayMethod() {
        if (!__OVERLAY__) {
            if (!m && !p(!1)) {
                ((window.requestAnimationFrame = A), (T = "NoOverlayRendering"), D());
                return;
            }
            (E.info("Patching window RAF to use overlay window"),
                (window.requestAnimationFrame = L),
                (window.cancelAnimationFrame = R));
        }
    }
    handleWindowStateChage() {
        v(y());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === d.x7.OverlayRafManagerForceEnabled &&
            ((m = t),
            t
                ? ((window.requestAnimationFrame = L), (window.cancelAnimationFrame = R))
                : g || ((window.requestAnimationFrame = A), D()));
    }
    actions = {
        OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
        WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
        WINDOW_FOCUS: this.handleWindowStateChage,
        OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
    };
}
let M = new b();
