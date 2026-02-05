"use strict";
n.d(t, { A: () => z }), n(323874), n(14289), n(35956), n(596829);
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(507240),
    l = n(311907),
    u = n(73153),
    c = n(626584),
    d = n(777334),
    _ = n(41984),
    f = n(111162),
    p = n(723702),
    h = n(837921),
    m = n(475815),
    g = n(265383),
    E = n(652215);
let A = new c.A("PopoutWindowStore"),
    I = {},
    T = {},
    y = {},
    S = {},
    v = {},
    C = new Set(),
    b = "app-mount",
    N = () => K.emitChange(),
    R = s().debounce(N, 150),
    O = !1;
function D(e, t) {
    let n = t.document,
        r = n.head;
    for (let e of (i()(null != r, "Body for popout window is null!"), document.querySelectorAll("style"))) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
}
function L(e) {
    let t = y[e];
    null == t ||
        t.closed ||
        (I[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!p.isPlatformEmbedded && T[e],
        });
}
function w(e) {
    A.info("Unmounting popout window", e);
    let t = y[e];
    i()(null != t, "Popout window was null during unmount"),
        t.removeEventListener("focus", N),
        t.removeEventListener("blur", N),
        t.removeEventListener("resize", R);
    let n = S[e];
    i()(null != n, "Window root was null while unmounting"),
        n.unmount(),
        delete y[e],
        delete T[e],
        delete v[e],
        delete S[e];
}
function x(e, t, r) {
    let a = e.document,
        s = new URL(t).origin,
        o = new URL(`${window.location.protocol}//${window.location.host}`).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : "";
    if (s !== o && s !== l) return void A.warn("Not injecting stylesheet, unrecognized origin", s);
    let u = a.createElement("link");
    (u.href = t),
        (u.rel = "stylesheet"),
        (u.integrity = r),
        i()(null != a.head, "Document head was null"),
        a.head.appendChild(u);
}
function P(e, t) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) x(t, e.href, e.integrity);
}
function M(e) {
    let t = y[e],
        n = v[e];
    if (null == t) return void A.warn("Failed to open window", e);
    let r = t.document;
    (0, m.a3)(r, N),
        t.addEventListener("focus", N),
        t.addEventListener("blur", N),
        t.addEventListener("resize", R),
        O ? D(e, t) : P(e, t);
    let a = (0, o.createRoot)(r.getElementById(b));
    i()(null != a, "No render target for popout!"), (S[e] = a), a.render(n(e));
}
function k(e) {
    let { key: t, features: n, render: r } = e;
    if (p.isPlatformEmbedded && !h.Ay.supportsFeature(E.BYE.POPOUT_WINDOWS))
        throw Error("Popout windows not supported on this native module version!");
    let i = !0 === n.outOfProcessOverlay,
        a = y[t],
        s = null != a && !a.closed;
    if (s && !i) return p.isPlatformEmbedded ? h.Ay.focus(t) : null != a && a.focus(), !1;
    if (s && i) return A.info("Already has open window, skipping focus"), !1;
    let { defaultWidth: o, defaultHeight: l, defaultAlwaysOnTop: u = !1, ...c } = n,
        f = { ...c, width: o ?? c.width, height: l ?? c.height },
        m = u,
        S = I[t];
    if (null != S) {
        let { width: e, height: t, x: n, y: r, alwaysOnTop: i } = S;
        (m = null != i ? i : u),
            (f = { ...f, width: null != e && 0 !== e ? e : o, height: null != t && 0 !== t ? t : l, left: n, top: r });
    }
    let b = (0, g.A)(f);
    A.info("Opening popout window", { key: t, encodedFeatures: b });
    let N = window.open(E.BVt.POPOUT_WINDOW, t, b);
    try {
        N.windowKey = t;
    } catch (e) {
        throw (
            ((0, d.pj)(e, i ? _.Ue.OutOfProcess : null, {
                extra: {
                    windowKey: t,
                    totalWindowCount: Object.keys(y).length,
                    features: f,
                    encodedFeatures: b,
                    isPlatformEmbedded: p.isPlatformEmbedded,
                },
            }),
            e)
        );
    }
    i ? A.verbose("Opening out of process overlay window", t) : N?.focus(),
        (y[t] = N),
        (v[t] = r),
        p.isPlatformEmbedded && (h.Ay.setAlwaysOnTop(t, m), (T[t] = m), h.Ay.isAlwaysOnTop(t).then((e) => (T[t] = e))),
        C.add(t);
}
function U(e) {
    C.has(e) && (M(e), C.delete(e), K.emitChange());
}
function G(e) {
    let t = y[e];
    null != t &&
        (t.closed || L(e),
        w(e),
        setTimeout(() => {
            F(t);
        }, 100),
        K.emitChange());
}
function V(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case E.hK1.LOADED:
                return U(n.key);
            case E.hK1.UNLOADED:
                return G(n.key);
        }
}
function F(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            A.error("Error closing popout window", e);
        }
}
function B(e) {
    let { key: t } = e,
        n = y[t];
    null != n && !n.closed && (L(t), f.default.preventPopoutClose || F(n));
}
function j() {
    for (let e of Object.keys(y)) {
        let t = y[e];
        null != t && F(t);
    }
}
function H(e) {
    let { key: t, alwaysOnTop: n } = e;
    p.isPlatformEmbedded && (h.Ay.setAlwaysOnTop(t, n), (T[t] = n), h.Ay.isAlwaysOnTop(t).then((e) => (T[t] = e)));
}
function Y(e) {
    let { url: t, integrity: n } = e;
    for (let e of Object.values(y)) null == e || e.closed || x(e, t, n);
}
class W extends l.Ay.PersistedStore {
    static displayName = "PopoutWindowStore";
    static persistKey = "PopoutWindowStore";
    initialize(e) {
        this.waitFor(f.default),
            window.addEventListener("message", V),
            window.addEventListener("beforeunload", j),
            (I = e ?? {});
    }
    getWindow(e) {
        return y[e];
    }
    getWindowState(e) {
        return I[e];
    }
    getWindowKeys() {
        return Object.keys(y);
    }
    getWindowOpen(e) {
        let t = y[e];
        return null != t && !t.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!T[e];
    }
    getWindowFocused(e) {
        let t = y[e];
        return t?.document?.hasFocus() ?? !1;
    }
    getWindowVisible(e) {
        let t = y[e];
        return t?.document?.visibilityState === "visible";
    }
    getState() {
        return I;
    }
    isWindowFullyInitialized(e) {
        return null != y[e] && null != S[e] && null != v[e];
    }
    isWindowFullScreen(e) {
        let t = y[e];
        return t?.document?.fullscreenElement?.id === b;
    }
    unmountWindow(e) {
        return (
            this.isWindowFullyInitialized(e) || A.warn(`Attempted to unmount partially initialized window ${e}`), G(e)
        );
    }
}
let K = new W(u.h, {
        POPOUT_WINDOW_OPEN: k,
        POPOUT_WINDOW_ADD_STYLESHEET: Y,
        POPOUT_WINDOW_CLOSE: B,
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: H,
        LOGOUT: j,
    }),
    z = K;
