n.d(t, { A: () => x }), n(896048);
var r = n(439372),
    i = n(626584),
    a = n(87001),
    s = n(531685),
    o = n(365971),
    l = n(777334),
    c = n(41984),
    u = n(589051),
    d = n(833551),
    f = n(395011),
    p = n(392164);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = new i.A("OverlayWindowRAFManager"),
    m = window.requestAnimationFrame.bind(window),
    g = new Set([c.Ue.OutOfProcess, c.Ue.OutOfProcessLimitedInteraction]),
    E = new Set([c.AR.OVERLAY_CRASHED, c.AR.OVERLAY_CRASHED_DISABLED]);
function b(e) {
    for (let t of Object.values(d.default.getTrackedGames()))
        if (!(!g.has(t.overlayMethod) || E.has(t.state)) && (!e || t.state === c.AR.OVERLAY_RENDERING)) return !0;
    return !1;
}
let y = null,
    O = !1,
    A = !1,
    v = {},
    S = (e, t) => {
        v[e] = t;
    },
    I = (e) => {
        delete v[e];
    },
    T = () => {
        v = {};
    },
    C = () =>
        Object.entries(v).map((e) => {
            let [t, n] = e;
            return {
                timeoutId: Number(t),
                callback: n,
            };
        }),
    N = (e) => {
        try {
            let t = a.A.getWindow(p.f);
            if (null == t || "function" != typeof t.requestAnimationFrame) return (y = "OverlayNotAvailable"), m(e);
            if (!A) return (y = "MainWindowFocused"), m(e);
            if (!b(!0)) return (y = "NoOverlayRendering"), m(e);
            let n = null !== f.A.getFocusedRunningGame(),
                r = s.A.isFocused((0, o.Q2)(t));
            if ((s.A.isFocused() && h.error("Main window is reported as focused when it should not be!"), n || r)) {
                y = n ? "OverlayGameFocused" : "OverlayWindowFocused";
                let r = t.requestAnimationFrame((t) => {
                    I(r), e(t);
                });
                return S(r, e), r;
            }
        } catch (e) {
            h.error("RAF redirect failed, falling back to original. Cause:", e),
                (0, l.pj)(e, d.default.getOverlayMethod(f.A.getTargetPID()));
        }
        return (y = "None"), m(e);
    };
function R() {
    return !s.A.isFocused() || !s.A.isVisible();
}
function w() {
    let e = a.A.getWindow(p.f),
        t = null != e && "function" == typeof e.cancelAnimationFrame;
    C().forEach((n) => {
        let { timeoutId: r, callback: i } = n;
        t && e.cancelAnimationFrame(r), m(i);
    }),
        T();
}
function P(e) {
    if (e === A) return;
    let t = !e && A;
    (A = e), t && w();
}
class D extends r.A {
    _initialize() {
        P(R());
    }
    _terminate() {
        window.requestAnimationFrame = m;
    }
    getLastRAFCallbackReason() {
        return y;
    }
    handleUpdateOverlayMethod() {
        let { enabled: e } = (0, u.wG)("OverlayWindowRAFManager");
        if (!(!e || __OVERLAY__)) {
            if (!O && !b(!1)) {
                (window.requestAnimationFrame = m), (y = "NoOverlayRendering"), w();
                return;
            }
            h.info("Patching window RAF to use overlay window"), (window.requestAnimationFrame = N);
        }
    }
    handleWindowStateChage() {
        P(R());
    }
    handleOverlayRenderDebugMode(e) {
        let { enabled: t, mode: n } = e;
        n === c.x7.OverlayRafManagerForceEnabled &&
            ((O = t), t ? (window.requestAnimationFrame = N) : A || ((window.requestAnimationFrame = m), w()));
    }
    constructor(...e) {
        super(...e),
            _(this, "actions", {
                OVERLAY_UPDATE_OVERLAY_METHOD: this.handleUpdateOverlayMethod,
                WINDOW_VISIBILITY_CHANGE: this.handleWindowStateChage,
                WINDOW_FOCUS: this.handleWindowStateChage,
                OVERLAY_RENDER_DEBUG_MODE: this.handleOverlayRenderDebugMode,
            });
    }
}
let x = new D();
