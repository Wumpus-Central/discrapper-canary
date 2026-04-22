"use strict";
n.d(t, { A: () => v });
var r = n(439372),
    i = n(626584),
    s = n(87001),
    a = n(531685),
    o = n(365971),
    l = n(777334),
    u = n(41984),
    d = n(833551),
    c = n(395011),
    _ = n(392164);
let f = new i.A("OverlayWindowRAFManager"),
    E = window.requestAnimationFrame.bind(window),
    h = new Set([u.Ue.OutOfProcess, u.Ue.OutOfProcessLimitedInteraction]),
    p = new Set([u.AR.OVERLAY_CRASHED, u.AR.OVERLAY_CRASHED_DISABLED]);
function m(e) {
    for (let t of Object.values(d.default.getTrackedGames()))
        if (!(!h.has(t.overlayMethod) || p.has(t.state)) && (!e || t.state === u.AR.OVERLAY_RENDERING)) return !0;
    return !1;
}
let g = null,
    A = !1,
    I = !1,
    T = {},
    S = (e) => {
        try {
            let t = s.A.getWindow(_.f);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (g = "OverlayNotAvailable"), E(e);
            if (!I) return (g = "MainWindowFocused"), E(e);
            if (!m(!0)) return (g = "NoOverlayRendering"), E(e);
            let n = null !== c.A.getFocusedRunningGame(),
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
                (0, l.pj)(e, d.default.getOverlayMethod(c.A.getTargetPID()));
        }
        return (g = "None"), E(e);
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
            E(i);
        }),
        (T = {});
}
function O(e) {
    if (e === I) return;
    let t = !e && I;
    (I = e), t && N();
}
class R extends r.A {
    _initialize() {
        O(y());
    }
    _terminate() {
        window.requestAnimationFrame = E;
    }
    getLastRAFCallbackReason() {
        return g;
    }
    handleUpdateOverlayMethod() {
        if (!__OVERLAY__) {
            if (!A && !m(!1)) {
                (window.requestAnimationFrame = E), (g = "NoOverlayRendering"), N();
                return;
            }
            f.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = S);
        }
    }
    handleWindowStateChage() {
        O(y());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === u.x7.OverlayRafManagerForceEnabled &&
            ((A = t), t ? (window.requestAnimationFrame = S) : I || ((window.requestAnimationFrame = E), N()));
    }
    actions = {
        OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
        WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
        WINDOW_FOCUS: this.handleWindowStateChage,
        OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
    };
}
let v = new R();
