"use strict";
n.d(t, { A: () => L });
var r = n(439372),
    i = n(626584),
    a = n(87001),
    s = n(531685),
    o = n(365971),
    l = n(777334),
    u = n(41984),
    c = n(833551),
    d = n(395011),
    _ = n(392164);
let f = new i.A("OverlayWindowRAFManager"),
    p = window.requestAnimationFrame.bind(window),
    h = new Set([u.Ue.OutOfProcess, u.Ue.OutOfProcessLimitedInteraction]),
    m = new Set([u.AR.OVERLAY_CRASHED, u.AR.OVERLAY_CRASHED_DISABLED]);
function g(e) {
    for (let t of Object.values(c.default.getTrackedGames()))
        if (!(!h.has(t.overlayMethod) || m.has(t.state)) && (!e || t.state === u.AR.OVERLAY_RENDERING)) return !0;
    return !1;
}
let E = null,
    A = !1,
    I = !1,
    T = {},
    S = (e, t) => {
        T[e] = t;
    },
    y = (e) => {
        delete T[e];
    },
    v = () => {
        T = {};
    },
    C = () =>
        Object.entries(T).map((e) => {
            let [t, n] = e;
            return { timeoutId: Number(t), callback: n };
        }),
    N = (e) => {
        try {
            let t = a.A.getWindow(_.f);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (E = "OverlayNotAvailable"), p(e);
            if (!I) return (E = "MainWindowFocused"), p(e);
            if (!g(!0)) return (E = "NoOverlayRendering"), p(e);
            let n = null !== d.A.getFocusedRunningGame(),
                r = s.A.isFocused((0, o.Q2)(t));
            if ((s.A.isFocused() && f.error("Main window is reported as focused when it should not be!"), n || r)) {
                E = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let r = t.requestAnimationFrame((t) => {
                    y(r), e(t);
                });
                return S(r, e), r;
            }
        } catch (e) {
            f.error("RAF redirect failed, falling back to original. Cause:", e),
                (0, l.pj)(e, c.default.getOverlayMethod(d.A.getTargetPID()));
        }
        return (E = "None"), p(e);
    };
function b() {
    return !s.A.isFocused() || !s.A.isVisible();
}
function R() {
    let e = a.A.getWindow(_.f),
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    C().forEach((n) => {
        let { timeoutId: r, callback: i } = n;
        t && e.cancelAnimationFrame(r), p(i);
    }),
        v();
}
function O(e) {
    if (e === I) return;
    let t = !e && I;
    (I = e), t && R();
}
class D extends r.A {
    _initialize() {
        O(b());
    }
    _terminate() {
        window.requestAnimationFrame = p;
    }
    getLastRAFCallbackReason() {
        return E;
    }
    handleUpdateOverlayMethod() {
        if (!__OVERLAY__) {
            if (!A && !g(!1)) {
                (window.requestAnimationFrame = p), (E = "NoOverlayRendering"), R();
                return;
            }
            f.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = N);
        }
    }
    handleWindowStateChage() {
        O(b());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === u.x7.OverlayRafManagerForceEnabled &&
            ((A = t), t ? (window.requestAnimationFrame = N) : I || ((window.requestAnimationFrame = p), R()));
    }
    actions = {
        OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
        WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
        WINDOW_FOCUS: this.handleWindowStateChage,
        OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
    };
}
let L = new D();
