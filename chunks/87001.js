"use strict";
n.d(t, { A: () => $ }), n(323874), n(14289), n(35956), n(596829);
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
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
    E = n(265383),
    g = n(652215);
let A = new c.A("PopoutWindowStore"),
    I = {},
    T = {},
    S = {},
    y = {},
    v = {},
    N = new Set(),
    C = "app-mount",
    R = () => K.emitChange(),
    O = a().debounce(R, 150),
    b = !1;
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
    let t = S[e];
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
    let t = S[e];
    i()(null != t, "Popout window was null during unmount"),
        t.removeEventListener("focus", R),
        t.removeEventListener("blur", R),
        t.removeEventListener("resize", O);
    let n = y[e];
    i()(null != n, "Window root was null while unmounting"),
        n.unmount(),
        delete S[e],
        delete T[e],
        delete v[e],
        delete y[e];
}
function M(e, t, r) {
    let s = e.document,
        a = new URL(t).origin,
        o = new URL(`${window.location.protocol}//${window.location.host}`).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : "";
    if (a !== o && a !== l) return void A.warn("Not injecting stylesheet, unrecognized origin", a);
    let u = s.createElement("link");
    (u.href = t),
        (u.rel = "stylesheet"),
        (u.integrity = r),
        i()(null != s.head, "Document head was null"),
        s.head.appendChild(u);
}
function x(e, t) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) M(t, e.href, e.integrity);
}
function P(e) {
    let t = S[e],
        n = v[e];
    if (null == t) return void A.warn("Failed to open window", e);
    let r = t.document;
    (0, m.a3)(r, R),
        t.addEventListener("focus", R),
        t.addEventListener("blur", R),
        t.addEventListener("resize", O),
        b ? D(e, t) : x(e, t);
    let s = (0, o.createRoot)(r.getElementById(C));
    i()(null != s, "No render target for popout!"), (y[e] = s), s.render(n(e));
}
function k(e) {
    let { key: t, features: n, render: r } = e;
    if (p.isPlatformEmbedded && !h.Ay.supportsFeature(g.BYE.POPOUT_WINDOWS))
        throw Error("Popout windows not supported on this native module version!");
    let i = !0 === n.outOfProcessOverlay,
        s = S[t],
        a = null != s && !s.closed;
    if (a && !i) return p.isPlatformEmbedded ? h.Ay.focus(t) : null != s && s.focus(), !1;
    if (a && i) return A.info("Already has open window, skipping focus"), !1;
    let { defaultWidth: o, defaultHeight: l, defaultAlwaysOnTop: u = !1, ...c } = n,
        f = { ...c, width: o ?? c.width, height: l ?? c.height },
        m = u,
        y = I[t];
    if (null != y) {
        let { width: e, height: t, x: n, y: r, alwaysOnTop: i } = y;
        (m = null != i ? i : u),
            (f = { ...f, width: null != e && 0 !== e ? e : o, height: null != t && 0 !== t ? t : l, left: n, top: r });
    }
    let C = (0, E.A)(f);
    A.info("Opening popout window", { key: t, encodedFeatures: C });
    let R = window.open(g.BVt.POPOUT_WINDOW, t, C);
    if (null == R) return !1;
    try {
        R.windowKey = t;
    } catch (e) {
        throw (
            ((0, d.pj)(e, i ? _.Ue.OutOfProcess : null, {
                extra: {
                    windowKey: t,
                    totalWindowCount: Object.keys(S).length,
                    features: f,
                    encodedFeatures: C,
                    isPlatformEmbedded: p.isPlatformEmbedded,
                },
            }),
            e)
        );
    }
    i ? A.verbose("Opening out of process overlay window", t) : R.focus(),
        (S[t] = R),
        (v[t] = r),
        p.isPlatformEmbedded && (h.Ay.setAlwaysOnTop(t, m), (T[t] = m), h.Ay.isAlwaysOnTop(t).then((e) => (T[t] = e))),
        N.add(t);
}
function U(e) {
    N.has(e) && (P(e), N.delete(e), K.emitChange());
}
function G(e) {
    let t = S[e];
    null != t &&
        (t.closed || L(e),
        w(e),
        setTimeout(() => {
            V(t);
        }, 100),
        K.emitChange());
}
function F(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case g.hK1.LOADED:
                return U(n.key);
            case g.hK1.UNLOADED:
                return G(n.key);
        }
}
function V(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            A.error("Error closing popout window", e);
        }
}
function B(e) {
    let { key: t } = e,
        n = S[t];
    null != n && !n.closed && (L(t), f.default.preventPopoutClose || V(n));
}
function H() {
    for (let e of Object.keys(S)) {
        let t = S[e];
        null != t && V(t);
    }
}
function j(e) {
    let { key: t, alwaysOnTop: n } = e;
    p.isPlatformEmbedded && (h.Ay.setAlwaysOnTop(t, n), (T[t] = n), h.Ay.isAlwaysOnTop(t).then((e) => (T[t] = e)));
}
function Y(e) {
    let { url: t, integrity: n } = e;
    for (let e of Object.values(S)) null == e || e.closed || M(e, t, n);
}
class W extends l.Ay.PersistedStore {
    static displayName = "PopoutWindowStore";
    static persistKey = "PopoutWindowStore";
    initialize(e) {
        this.waitFor(f.default),
            window.addEventListener("message", F),
            window.addEventListener("beforeunload", H),
            (I = e ?? {});
    }
    getWindow(e) {
        return S[e];
    }
    getWindowState(e) {
        return I[e];
    }
    getWindowKeys() {
        return Object.keys(S);
    }
    getWindowOpen(e) {
        let t = S[e];
        return null != t && !t.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!T[e];
    }
    getWindowFocused(e) {
        let t = S[e];
        return t?.document?.hasFocus() ?? !1;
    }
    getWindowVisible(e) {
        let t = S[e];
        return t?.document?.visibilityState === "visible";
    }
    getState() {
        return I;
    }
    isWindowFullyInitialized(e) {
        return null != S[e] && null != y[e] && null != v[e];
    }
    isWindowFullScreen(e) {
        let t = S[e];
        return t?.document?.fullscreenElement?.id === C;
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
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: j,
        LOGOUT: H,
    }),
    $ = K;
