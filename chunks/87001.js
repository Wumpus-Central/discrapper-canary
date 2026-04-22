"use strict";
n.d(t, { A: () => x }), n(323874), n(14289), n(35956), n(596829);
var r = n(284009),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(507240),
    l = n(311907),
    u = n(73153),
    d = n(626584),
    c = n(777334),
    _ = n(41984),
    f = n(111162),
    E = n(723702),
    h = n(837921),
    p = n(475815),
    m = n(265383),
    g = n(652215);
let A = new d.A("PopoutWindowStore"),
    I = {},
    T = {},
    S = {},
    y = {},
    N = {},
    O = new Set(),
    R = "app-mount",
    v = () => k.emitChange(),
    C = a().debounce(v, 150);
function b(e) {
    let t = S[e];
    null == t ||
        t.closed ||
        (I[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!E.isPlatformEmbedded && T[e],
        });
}
function D(e, t, r) {
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
function L(e) {
    let t = S[e];
    if (null != t) {
        let n, r;
        t.closed || b(e),
            A.info("Unmounting popout window", e),
            (n = S[e]),
            i()(null != n, "Popout window was null during unmount"),
            n.removeEventListener("focus", v),
            n.removeEventListener("blur", v),
            n.removeEventListener("resize", C),
            (r = y[e]),
            i()(null != r, "Window root was null while unmounting"),
            r.unmount(),
            delete S[e],
            delete T[e],
            delete N[e],
            delete y[e],
            setTimeout(() => {
                M(t);
            }, 100),
            k.emitChange();
    }
}
function w(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case g.hK1.LOADED:
                var r;
                return (
                    (r = n.key),
                    void (
                        O.has(r) &&
                        (!(function (e) {
                            let t = S[e],
                                n = N[e];
                            if (null == t) return A.warn("Failed to open window", e);
                            let r = t.document;
                            (0, p.a3)(r, v),
                                t.addEventListener("focus", v),
                                t.addEventListener("blur", v),
                                t.addEventListener("resize", C);
                            for (let e of document.querySelectorAll('link[rel="stylesheet"]'))
                                D(t, e.href, e.integrity);
                            let s = (0, o.createRoot)(r.getElementById(R));
                            i()(null != s, "No render target for popout!"), (y[e] = s), s.render(n(e));
                        })(r),
                        O.delete(r),
                        k.emitChange())
                    )
                );
            case g.hK1.UNLOADED:
                return L(n.key);
        }
}
function M(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            A.error("Error closing popout window", e);
        }
}
function P() {
    for (let e of Object.keys(S)) {
        let t = S[e];
        null != t && M(t);
    }
}
class U extends l.Ay.PersistedStore {
    static displayName = "PopoutWindowStore";
    static persistKey = "PopoutWindowStore";
    initialize(e) {
        this.waitFor(f.default),
            window.addEventListener("message", w),
            window.addEventListener("beforeunload", P),
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
        return null != S[e] && null != y[e] && null != N[e];
    }
    isWindowFullScreen(e) {
        let t = S[e];
        return t?.document?.fullscreenElement?.id === R;
    }
    unmountWindow(e) {
        return (
            this.isWindowFullyInitialized(e) || A.warn(`Attempted to unmount partially initialized window ${e}`), L(e)
        );
    }
}
let k = new U(u.h, {
        POPOUT_WINDOW_OPEN: function (e) {
            let { key: t, features: n, render: r } = e;
            if (E.isPlatformEmbedded && !h.Ay.supportsFeature(g.BYE.POPOUT_WINDOWS))
                throw Error("Popout windows not supported on this native module version!");
            let i = !0 === n.outOfProcessOverlay,
                s = S[t],
                a = null != s && !s.closed;
            if (a && !i) return E.isPlatformEmbedded ? h.Ay.focus(t) : null != s && s.focus(), !1;
            if (a && i) return A.info("Already has open window, skipping focus"), !1;
            let { defaultWidth: o, defaultHeight: l, defaultAlwaysOnTop: u = !1, ...d } = n,
                f = { ...d, width: o ?? d.width, height: l ?? d.height },
                p = u,
                y = I[t];
            if (null != y) {
                let { width: e, height: t, x: n, y: r, alwaysOnTop: i } = y;
                (p = null != i ? i : u),
                    (f = {
                        ...f,
                        width: null != e && 0 !== e ? e : o,
                        height: null != t && 0 !== t ? t : l,
                        left: n,
                        top: r,
                    });
            }
            let R = (0, m.A)(f);
            A.info("Opening popout window", { key: t, encodedFeatures: R });
            let v = window.open(g.BVt.POPOUT_WINDOW, t, R);
            if (null == v) return !1;
            try {
                v.windowKey = t;
            } catch (e) {
                throw (
                    ((0, c.pj)(e, i ? _.Ue.OutOfProcess : null, {
                        extra: {
                            windowKey: t,
                            totalWindowCount: Object.keys(S).length,
                            features: f,
                            encodedFeatures: R,
                            isPlatformEmbedded: E.isPlatformEmbedded,
                        },
                    }),
                    e)
                );
            }
            i ? A.verbose("Opening out of process overlay window", t) : v.focus(),
                (S[t] = v),
                (N[t] = r),
                E.isPlatformEmbedded &&
                    (h.Ay.setAlwaysOnTop(t, p), (T[t] = p), h.Ay.isAlwaysOnTop(t).then((e) => (T[t] = e))),
                O.add(t);
        },
        POPOUT_WINDOW_ADD_STYLESHEET: function (e) {
            let { url: t, integrity: n } = e;
            for (let e of Object.values(S)) null == e || e.closed || D(e, t, n);
        },
        POPOUT_WINDOW_CLOSE: function (e) {
            let { key: t } = e,
                n = S[t];
            null != n && !n.closed && (b(t), f.default.preventPopoutClose || M(n));
        },
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function (e) {
            let { key: t, alwaysOnTop: n } = e;
            E.isPlatformEmbedded &&
                (h.Ay.setAlwaysOnTop(t, n), (T[t] = n), h.Ay.isAlwaysOnTop(t).then((e) => (T[t] = e)));
        },
        LOGOUT: P,
    }),
    x = k;
