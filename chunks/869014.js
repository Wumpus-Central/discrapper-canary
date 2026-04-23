"use strict";
n.d(t, { A: () => y });
var i = n(439372),
    r = n(626584),
    s = n(567249),
    a = n(531685),
    o = n(365971),
    l = n(777334),
    d = n(41984),
    _ = n(833551),
    u = n(489277),
    c = n(392164);
let E = new r.A("OverlayWindowRAFManager"),
    h = window.requestAnimationFrame.bind(window),
    m = new Set([d.Ue.OutOfProcess, d.Ue.OutOfProcessLimitedInteraction]),
    f = new Set([d.AR.OVERLAY_CRASHED, d.AR.OVERLAY_CRASHED_DISABLED]);
function g(e) {
    for (let t of Object.values(_.default.getTrackedGames()))
        if (!(!m.has(t.overlayMethod) || f.has(t.state)) && (!e || t.state === d.AR.OVERLAY_RENDERING)) return !0;
    return !1;
}
let p = null,
    A = !1,
    I = !1,
    T = {},
    S = (e) => {
        try {
            let t = s.A.getWindow(c.f);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (p = "OverlayNotAvailable"), h(e);
            if (!I) return (p = "MainWindowFocused"), h(e);
            if (!g(!0)) return (p = "NoOverlayRendering"), h(e);
            let n = null !== u.A.getFocusedRunningGame(),
                i = a.A.isFocused((0, o.Q2)(t));
            if ((a.A.isFocused() && E.error("Main window is reported as focused when it should not be!"), n || i)) {
                p = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let i = t.requestAnimationFrame((t) => {
                    delete T[i], e(t);
                });
                return (T[i] = e), i;
            }
        } catch (e) {
            E.error("RAF redirect failed, falling back to original. Cause:", e),
                (0, l.pj)(e, _.default.getOverlayMethod(u.A.getTargetPID()));
        }
        return (p = "None"), h(e);
    };
function N() {
    return !a.A.isFocused() || !a.A.isVisible();
}
function C() {
    let e = s.A.getWindow(c.f),
        t = !1;
    try {
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    } catch (e) {
        E.warn("Unable to access overlay window cancelAnimationFrame, falling back to main window RAF callbacks", e);
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
                        E.warn("Unable to cancel overlay RAF callback, continuing with main window RAF callbacks", e);
                }
            h(r);
        }),
        (T = {});
}
function R(e) {
    if (e === I) return;
    let t = !e && I;
    (I = e), t && C();
}
class O extends i.A {
    _initialize() {
        R(N());
    }
    _terminate() {
        window.requestAnimationFrame = h;
    }
    getLastRAFCallbackReason() {
        return p;
    }
    handleUpdateOverlayMethod() {
        if (!__OVERLAY__) {
            if (!A && !g(!1)) {
                (window.requestAnimationFrame = h), (p = "NoOverlayRendering"), C();
                return;
            }
            E.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = S);
        }
    }
    handleWindowStateChage() {
        R(N());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === d.x7.OverlayRafManagerForceEnabled &&
            ((A = t), t ? (window.requestAnimationFrame = S) : I || ((window.requestAnimationFrame = h), C()));
    }
    actions = {
        OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
        WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
        WINDOW_FOCUS: this.handleWindowStateChage,
        OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
    };
}
let y = new O();
