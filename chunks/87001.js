n.d(t, {
    A: () => ee,
}),
    n(896048),
    n(693327),
    n(554719),
    n(680155),
    n(323874),
    n(14289),
    n(35956),
    n(596829),
    n(65821);
var r,
    i = n(284009),
    a = n.n(i),
    s = n(735438),
    o = n.n(s),
    l = n(507240),
    c = n(311907),
    u = n(73153),
    d = n(626584),
    f = n(777334),
    p = n(41984),
    _ = n(111162),
    h = n(723702),
    m = n(837921),
    g = n(475815),
    E = n(265383),
    b = n(652215);

function y(e, t, n) {
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

function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}

function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = I(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function I(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let T = new d.A("PopoutWindowStore"),
    C = {},
    N = {},
    R = {},
    w = {},
    P = {},
    D = new Set(),
    x = "app-mount",
    L = () => J.emitChange(),
    j = o().debounce(L, 150),
    M = !1;

function k(e, t) {
    let n = t.document,
        r = n.head;
    for (let e of (a()(null != r, "Body for popout window is null!"), document.querySelectorAll("style"))) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) {
        let t = n.importNode(e, !0);
        r.appendChild(t);
    }
}

function U(e) {
    let t = R[e];
    null == t ||
        t.closed ||
        (C[e] = {
            x: t.screenX,
            y: t.screenY,
            width: t.innerWidth,
            height: t.innerHeight,
            alwaysOnTop: !!h.isPlatformEmbedded && N[e],
        });
}

function G(e) {
    T.info("Unmounting popout window", e);
    let t = R[e];
    a()(null != t, "Popout window was null during unmount"),
        t.removeEventListener("focus", L),
        t.removeEventListener("blur", L),
        t.removeEventListener("resize", j);
    let n = w[e];
    a()(null != n, "Window root was null while unmounting"),
        n.unmount(),
        delete R[e],
        delete N[e],
        delete P[e],
        delete w[e];
}

function V(e, t, r) {
    let i = e.document,
        s = new URL(t).origin,
        o = new URL("".concat(window.location.protocol, "//").concat(window.location.host)).origin,
        l = URL.canParse(n.p) ? new URL(n.p).origin : "";
    if (s !== o && s !== l) return void T.warn("Not injecting stylesheet, unrecognized origin", s);
    let c = i.createElement("link");
    (c.href = t),
        (c.rel = "stylesheet"),
        (c.integrity = r),
        a()(null != i.head, "Document head was null"),
        i.head.appendChild(c);
}

function F(e, t) {
    for (let e of document.querySelectorAll('link[rel="stylesheet"]')) V(t, e.href, e.integrity);
}

function B(e) {
    let t = R[e],
        n = P[e];
    if (null == t) return void T.warn("Failed to open window", e);
    let r = t.document;
    (0, g.a3)(r, L),
        t.addEventListener("focus", L),
        t.addEventListener("blur", L),
        t.addEventListener("resize", j),
        M ? k(e, t) : F(e, t);
    let i = (0, l.createRoot)(r.getElementById(x));
    a()(null != i, "No render target for popout!"), (w[e] = i), i.render(n(e));
}

function H(e) {
    let { key: t, features: n, render: r } = e;
    if (h.isPlatformEmbedded && !m.Ay.supportsFeature(b.BYE.POPOUT_WINDOWS))
        throw Error("Popout windows not supported on this native module version!");
    let i = !0 === n.outOfProcessOverlay,
        a = R[t],
        s = null != a && !a.closed;
    if (s && !i) return h.isPlatformEmbedded ? m.Ay.focus(t) : null != a && a.focus(), !1;
    if (s && i) return T.info("Already has open window, skipping focus"), !1;
    let { defaultWidth: o, defaultHeight: l, defaultAlwaysOnTop: c = !1 } = n,
        u = S(n, ["defaultWidth", "defaultHeight", "defaultAlwaysOnTop"]),
        d = v(O({}, u), {
            width: null != o ? o : u.width,
            height: null != l ? l : u.height,
        }),
        _ = c,
        g = C[t];
    if (null != g) {
        let { width: e, height: t, x: n, y: r, alwaysOnTop: i } = g;
        (_ = null != i ? i : c),
            (d = v(O({}, d), {
                width: null != e && 0 !== e ? e : o,
                height: null != t && 0 !== t ? t : l,
                left: n,
                top: r,
            }));
    }
    let y = (0, E.A)(d);
    T.info("Opening popout window", {
        key: t,
        encodedFeatures: y,
    });
    let A = window.open(b.BVt.POPOUT_WINDOW, t, y);
    try {
        A.windowKey = t;
    } catch (e) {
        throw (
            ((0, f.pj)(e, i ? p.Ue.OutOfProcess : null, {
                extra: {
                    windowKey: t,
                    totalWindowCount: Object.keys(R).length,
                    features: d,
                    encodedFeatures: y,
                    isPlatformEmbedded: h.isPlatformEmbedded,
                },
            }),
            e)
        );
    }
    i ? T.verbose("Opening out of process overlay window", t) : null == A || A.focus(),
        (R[t] = A),
        (P[t] = r),
        h.isPlatformEmbedded && (m.Ay.setAlwaysOnTop(t, _), (N[t] = _), m.Ay.isAlwaysOnTop(t).then((e) => (N[t] = e))),
        D.add(t);
}

function Y(e) {
    D.has(e) && (B(e), D.delete(e), J.emitChange());
}

function W(e) {
    let t = R[e];
    null != t &&
        (t.closed || U(e),
        G(e),
        setTimeout(() => {
            z(t);
        }, 100),
        J.emitChange());
}

function K(e) {
    let { data: t } = e;
    if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
    let n = t.discordPopoutEvent;
    if (null != n.key)
        switch (n.type) {
            case b.hK1.LOADED:
                return Y(n.key);
            case b.hK1.UNLOADED:
                return W(n.key);
        }
}

function z(e) {
    if (null != e && !e.closed)
        try {
            e.close();
        } catch (e) {
            T.error("Error closing popout window", e);
        }
}

function q(e) {
    let { key: t } = e,
        n = R[t];
    null != n && !n.closed && (U(t), _.default.preventPopoutClose || z(n));
}

function X() {
    for (let e of Object.keys(R)) {
        let t = R[e];
        null != t && z(t);
    }
}

function Z(e) {
    let { key: t, alwaysOnTop: n } = e;
    h.isPlatformEmbedded && (m.Ay.setAlwaysOnTop(t, n), (N[t] = n), m.Ay.isAlwaysOnTop(t).then((e) => (N[t] = e)));
}

function Q(e) {
    let { url: t, integrity: n } = e;
    for (let e of Object.values(R)) null == e || e.closed || V(e, t, n);
}
class $ extends (r = c.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(_.default),
            window.addEventListener("message", K),
            window.addEventListener("beforeunload", X),
            (C = null != e ? e : {});
    }
    getWindow(e) {
        return R[e];
    }
    getWindowState(e) {
        return C[e];
    }
    getWindowKeys() {
        return Object.keys(R);
    }
    getWindowOpen(e) {
        let t = R[e];
        return null != t && !t.closed;
    }
    getIsAlwaysOnTop(e) {
        return !!N[e];
    }
    getWindowFocused(e) {
        var t, n;
        let r = R[e];
        return null != (t = null == r || null == (n = r.document) ? void 0 : n.hasFocus()) && t;
    }
    getWindowVisible(e) {
        var t;
        let n = R[e];
        return (null == n || null == (t = n.document) ? void 0 : t.visibilityState) === "visible";
    }
    getState() {
        return C;
    }
    isWindowFullyInitialized(e) {
        return null != R[e] && null != w[e] && null != P[e];
    }
    isWindowFullScreen(e) {
        var t, n;
        let r = R[e];
        return (null == r || null == (n = r.document) || null == (t = n.fullscreenElement) ? void 0 : t.id) === x;
    }
    unmountWindow(e) {
        return (
            this.isWindowFullyInitialized(e) || T.warn("Attempted to unmount partially initialized window ".concat(e)),
            W(e)
        );
    }
}
y($, "displayName", "PopoutWindowStore"), y($, "persistKey", "PopoutWindowStore");
let J = new $(u.h, {
        POPOUT_WINDOW_OPEN: H,
        POPOUT_WINDOW_ADD_STYLESHEET: Q,
        POPOUT_WINDOW_CLOSE: q,
        POPOUT_WINDOW_SET_ALWAYS_ON_TOP: Z,
        LOGOUT: X,
    }),
    ee = J;
