n.d(t, { A: () => B });
var i = n(439372),
    r = n(626584),
    a = n(384077),
    s = n(567249),
    l = n(531685),
    o = n(365971),
    d = n(777334),
    c = n(41984),
    u = n(296027),
    _ = n(233741),
    E = n(392164);
let A = new r.A("OverlayWindowRAFManager"),
    h = window.requestAnimationFrame.bind(window),
    f = window.cancelAnimationFrame.bind(window),
    I = new Set([c.Ue.OutOfProcess, c.Ue.OutOfProcessLimitedInteraction]),
    p = new Set([c.AR.OVERLAY_CRASHED, c.AR.OVERLAY_CRASHED_DISABLED]);
function m(e) {
    for (let t of Object.values(u.default.getTrackedGames()))
        if (!(!I.has(t.overlayMethod) || p.has(t.state)) && (!e || t.state === c.AR.OVERLAY_RENDERING)) return !0;
    return !1;
}
let T = null,
    g = !1,
    S = !1,
    N = !1,
    C = -1,
    O = new Map();
function R(e, t) {
    let n = O.get(e);
    null != n && (O.delete(e), n.callback(t));
}
function L(e) {
    if (null == e.overlayFrameId) return;
    let t = e.overlayWindow?.deref();
    if (null != t)
        try {
            t.cancelAnimationFrame(e.overlayFrameId);
        } catch (e) {
            A.warn("Unable to cancel overlay RAF callback", e);
        }
}
function y(e) {
    if (null == e) return;
    let t = O.get(e);
    null == t ? f(e) : (O.delete(e), L(t), null != t.mainFrameId && f(t.mainFrameId));
}
function D(e, t, n) {
    let i = n.performance.timeOrigin - performance.timeOrigin;
    ((t.overlayWindow = new WeakRef(n)),
        (t.overlayFrameId = n.requestAnimationFrame((t) => R(e, t + i))),
        (t.mainFrameId = null));
}
function b(e, t) {
    let n = C--,
        i = { callback: e, overlayWindow: null, overlayFrameId: null, mainFrameId: null };
    return (D(n, i, t), O.set(n, i), n);
}
function v(e) {
    if (!N) return h(e);
    let t = C--;
    return (O.set(t, { callback: e, overlayWindow: null, overlayFrameId: null, mainFrameId: h((e) => R(t, e)) }), t);
}
function P() {
    let e = s.A.getWindow(E.f);
    return null == e || "function" != typeof e.requestAnimationFrame ? null : e;
}
function M(e) {
    try {
        let t = P();
        if (null == t) return ((T = "OverlayNotAvailable"), v(e));
        if (N && !l.A.isVisible()) return ((T = "MainWindowHidden"), b(e, t));
        if (!S) return ((T = "MainWindowFocused"), v(e));
        if (!m(!0)) return ((T = "NoOverlayRendering"), v(e));
        let n = null !== _.A.getFocusedRunningGame(),
            i = l.A.isFocused((0, o.Q2)(t));
        if ((l.A.isFocused() && A.error("Main window is reported as focused when it should not be!"), n || i))
            return ((T = n ? "OverlayGameFocused" : "OverlayWindowFocused"), b(e, t));
    } catch (e) {
        (A.error("RAF redirect failed, falling back to original. Cause:", e),
            (0, d.pj)(e, u.default.getOverlayMethod(_.A.getTargetPID())));
    }
    return ((T = "None"), v(e));
}
function U() {
    ((N = (0, a.ZT)("overlay_window_raf_manager")),
        (window.requestAnimationFrame = M),
        (window.cancelAnimationFrame = y));
}
function w() {
    return !l.A.isFocused() || !l.A.isVisible();
}
function G() {
    O.forEach((e, t) => {
        null != e.overlayFrameId && (L(e), (e.overlayFrameId = null), (e.mainFrameId = h((e) => R(t, e))));
    });
}
function x() {
    if (!N || l.A.isVisible() || window.requestAnimationFrame !== M) return;
    let e = P();
    null != e &&
        O.forEach((t, n) => {
            null != t.mainFrameId && (f(t.mainFrameId), D(n, t, e));
        });
}
function k(e) {
    if (e === S) return;
    let t = !e && S;
    ((S = e), t && G());
}
class F extends i.A {
    _initialize() {
        k(w());
    }
    _terminate() {
        ((window.requestAnimationFrame = h), G());
    }
    getLastRAFCallbackReason() {
        return T;
    }
    handleUpdateOverlayMethod() {
        if (!__OVERLAY__) {
            if (!g && !m(!1)) {
                ((window.requestAnimationFrame = h), (T = "NoOverlayRendering"), G());
                return;
            }
            (A.info("Patching window RAF to use overlay window"), U(), x());
        }
    }
    handleWindowStateChage() {
        (k(w()), x());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === c.x7.OverlayRafManagerForceEnabled && ((g = t), t ? U() : S || ((window.requestAnimationFrame = h), G()));
    }
    actions = {
        OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
        WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
        WINDOW_FOCUS: this.handleWindowStateChage,
        OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
    };
}
let B = new F();
