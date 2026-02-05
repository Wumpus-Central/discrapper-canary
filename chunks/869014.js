"use strict";
n.d(t, { A: () => w });
var r = n(439372),
    i = n(626584),
    a = n(87001),
    s = n(531685),
    o = n(365971),
    l = n(777334),
    u = n(41984),
    c = n(589051),
    d = n(833551),
    _ = n(395011),
    f = n(392164);
let p = new i.A("OverlayWindowRAFManager"),
    h = window.requestAnimationFrame.bind(window),
    m = new Set([u.Ue.OutOfProcess, u.Ue.OutOfProcessLimitedInteraction]),
    g = new Set([u.AR.OVERLAY_CRASHED, u.AR.OVERLAY_CRASHED_DISABLED]);
function E(e) {
    for (let t of Object.values(d.default.getTrackedGames()))
        if (!(!m.has(t.overlayMethod) || g.has(t.state)) && (!e || t.state === u.AR.OVERLAY_RENDERING)) return !0;
    return !1;
}
let A = null,
    I = !1,
    T = !1,
    y = {},
    S = (e, t) => {
        y[e] = t;
    },
    v = (e) => {
        delete y[e];
    },
    C = () => {
        y = {};
    },
    b = () =>
        Object.entries(y).map((e) => {
            let [t, n] = e;
            return { timeoutId: Number(t), callback: n };
        }),
    N = (e) => {
        try {
            let t = a.A.getWindow(f.f);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (A = "OverlayNotAvailable"), h(e);
            if (!T) return (A = "MainWindowFocused"), h(e);
            if (!E(!0)) return (A = "NoOverlayRendering"), h(e);
            let n = null !== _.A.getFocusedRunningGame(),
                r = s.A.isFocused((0, o.Q2)(t));
            if ((s.A.isFocused() && p.error("Main window is reported as focused when it should not be!"), n || r)) {
                A = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let r = t.requestAnimationFrame((t) => {
                    v(r), e(t);
                });
                return S(r, e), r;
            }
        } catch (e) {
            p.error("RAF redirect failed, falling back to original. Cause:", e),
                (0, l.pj)(e, d.default.getOverlayMethod(_.A.getTargetPID()));
        }
        return (A = "None"), h(e);
    };
function R() {
    return !s.A.isFocused() || !s.A.isVisible();
}
function O() {
    let e = a.A.getWindow(f.f),
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    b().forEach((n) => {
        let { timeoutId: r, callback: i } = n;
        t && e.cancelAnimationFrame(r), h(i);
    }),
        C();
}
function D(e) {
    if (e === T) return;
    let t = !e && T;
    (T = e), t && O();
}
class L extends r.A {
    _initialize() {
        D(R());
    }
    _terminate() {
        window.requestAnimationFrame = h;
    }
    getLastRAFCallbackReason() {
        return A;
    }
    handleUpdateOverlayMethod() {
        let { enabled: e } = (0, c.wG)("OverlayWindowRAFManager");
        if (!(!e || __OVERLAY__)) {
            if (!I && !E(!1)) {
                (window.requestAnimationFrame = h), (A = "NoOverlayRendering"), O();
                return;
            }
            p.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = N);
        }
    }
    handleWindowStateChage() {
        D(R());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === u.x7.OverlayRafManagerForceEnabled &&
            ((I = t), t ? (window.requestAnimationFrame = N) : T || ((window.requestAnimationFrame = h), O()));
    }
    actions = {
        OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
        WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
        WINDOW_FOCUS: this.handleWindowStateChage,
        OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
    };
}
let w = new L();
