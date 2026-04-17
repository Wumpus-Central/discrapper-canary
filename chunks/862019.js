"use strict";
n.d(t, {
    $c: () => D,
    DL: () => ek,
    Mk: () => U,
    P6: () => L,
    R1: () => R,
    XF: () => es,
    bv: () => eb,
    fI: () => b,
    iB: () => eV,
    s3: () => em,
    s9: () => eN,
    we: () => eR,
    zR: () => eT,
});
var r,
    i = n(64700),
    s = n(357786),
    a = n(627968),
    o = n(84157),
    l = n(111975),
    u = n(340287),
    c = n(879821);
let d = "data-floating-ui-focusable",
    _ = "active",
    f = "selected",
    p = "ArrowLeft",
    h = "ArrowRight",
    m = "ArrowUp",
    E = "ArrowDown",
    g = { ...(r || (r = n.t(i, 2))) },
    A = !1,
    I = 0,
    T = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + I++;
function S() {
    let [e, t] = i.useState(() => (A ? T() : void 0));
    return (
        (0, s.OS)(() => {
            null == e && t(T());
        }, []),
        i.useEffect(() => {
            A = !0;
        }, []),
        e
    );
}
let y = g.useId || S;
function v() {
    let e = new Map();
    return {
        emit(t, n) {
            var r;
            null == (r = e.get(t)) || r.forEach((e) => e(n));
        },
        on(t, n) {
            e.has(t) || e.set(t, new Set()), e.get(t).add(n);
        },
        off(t, n) {
            var r;
            null == (r = e.get(t)) || r.delete(n);
        },
    };
}
let N = i.createContext(null),
    C = i.createContext(null),
    R = () => {
        var e;
        return (null == (e = i.useContext(N)) ? void 0 : e.id) || null;
    },
    O = () => i.useContext(C);
function b(e) {
    let t = y(),
        n = O(),
        r = R(),
        i = e || r;
    return (
        (0, s.OS)(() => {
            if (!t) return;
            let e = { id: t, parentId: i };
            return (
                null == n || n.addNode(e),
                () => {
                    null == n || n.removeNode(e);
                }
            );
        }, [n, t, i]),
        t
    );
}
function D(e) {
    let { children: t, id: n } = e,
        r = R();
    return (0, a.jsx)(N.Provider, { value: i.useMemo(() => ({ id: n, parentId: r }), [n, r]), children: t });
}
function L(e) {
    let { children: t } = e,
        n = i.useRef([]),
        r = i.useCallback((e) => {
            n.current = [...n.current, e];
        }, []),
        s = i.useCallback((e) => {
            n.current = n.current.filter((t) => t !== e);
        }, []),
        [o] = i.useState(() => v());
    return (0, a.jsx)(C.Provider, {
        value: i.useMemo(() => ({ nodesRef: n, addNode: r, removeNode: s, events: o }), [r, s, o]),
        children: t,
    });
}
function w(e) {
    return "data-floating-ui-" + e;
}
function M(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
}
let P = w("safe-polygon");
function x(e, t, n) {
    if (n && !(0, s.Go)(n)) return 0;
    if ("number" == typeof e) return e;
    if ("function" == typeof e) {
        let n = e();
        return "number" == typeof n ? n : null == n ? void 0 : n[t];
    }
    return null == e ? void 0 : e[t];
}
function k(e) {
    return "function" == typeof e ? e() : e;
}
function U(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, dataRef: a, events: l, elements: u } = e,
        { enabled: c = !0, delay: d = 0, handleClose: _ = null, mouseOnly: f = !1, restMs: p = 0, move: h = !0 } = t,
        m = O(),
        E = R(),
        g = (0, s.SE)(_),
        A = (0, s.SE)(d),
        I = (0, s.SE)(n),
        T = (0, s.SE)(p),
        S = i.useRef(),
        y = i.useRef(-1),
        v = i.useRef(),
        N = i.useRef(-1),
        C = i.useRef(!0),
        b = i.useRef(!1),
        D = i.useRef(() => {}),
        L = i.useRef(!1),
        w = (0, s.Jt)(() => {
            var e;
            let t = null == (e = a.current.openEvent) ? void 0 : e.type;
            return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t;
        });
    i.useEffect(() => {
        if (c)
            return (
                l.on("openchange", e),
                () => {
                    l.off("openchange", e);
                }
            );
        function e(e) {
            let { open: t } = e;
            t || (M(y), M(N), (C.current = !0), (L.current = !1));
        }
    }, [c, l]),
        i.useEffect(() => {
            if (!c || !g.current || !n) return;
            function e(e) {
                w() && r(!1, e, "hover");
            }
            let t = (0, s.YE)(u.floating).documentElement;
            return (
                t.addEventListener("mouseleave", e),
                () => {
                    t.removeEventListener("mouseleave", e);
                }
            );
        }, [u.floating, n, r, c, g, w]);
    let U = i.useCallback(
            function (e, t, n) {
                void 0 === t && (t = !0), void 0 === n && (n = "hover");
                let i = x(A.current, "close", S.current);
                i && !v.current
                    ? (M(y), (y.current = window.setTimeout(() => r(!1, e, n), i)))
                    : t && (M(y), r(!1, e, n));
            },
            [A, r],
        ),
        G = (0, s.Jt)(() => {
            D.current(), (v.current = void 0);
        }),
        F = (0, s.Jt)(() => {
            if (b.current) {
                let e = (0, s.YE)(u.floating).body;
                (e.style.pointerEvents = ""), e.removeAttribute(P), (b.current = !1);
            }
        }),
        V = (0, s.Jt)(() => !!a.current.openEvent && ["click", "mousedown"].includes(a.current.openEvent.type));
    i.useEffect(() => {
        if (c && (0, o.vq)(u.domReference)) {
            let r = u.domReference,
                s = u.floating;
            return (
                n && r.addEventListener("mouseleave", i),
                h && r.addEventListener("mousemove", e, { once: !0 }),
                r.addEventListener("mouseenter", e),
                r.addEventListener("mouseleave", t),
                s &&
                    (s.addEventListener("mouseleave", i),
                    s.addEventListener("mouseenter", l),
                    s.addEventListener("mouseleave", d)),
                () => {
                    n && r.removeEventListener("mouseleave", i),
                        h && r.removeEventListener("mousemove", e),
                        r.removeEventListener("mouseenter", e),
                        r.removeEventListener("mouseleave", t),
                        s &&
                            (s.removeEventListener("mouseleave", i),
                            s.removeEventListener("mouseenter", l),
                            s.removeEventListener("mouseleave", d));
                }
            );
        }
        function e(e) {
            if ((M(y), (C.current = !1), (f && !(0, s.Go)(S.current)) || (k(T.current) > 0 && !x(A.current, "open"))))
                return;
            let t = x(A.current, "open", S.current);
            t
                ? (y.current = window.setTimeout(() => {
                      I.current || r(!0, e, "hover");
                  }, t))
                : n || r(!0, e, "hover");
        }
        function t(e) {
            if (V()) return void F();
            D.current();
            let t = (0, s.YE)(u.floating);
            if ((M(N), (L.current = !1), g.current && a.current.floatingContext)) {
                n || M(y),
                    (v.current = g.current({
                        ...a.current.floatingContext,
                        tree: m,
                        x: e.clientX,
                        y: e.clientY,
                        onClose() {
                            F(), G(), V() || U(e, !0, "safe-polygon");
                        },
                    }));
                let r = v.current;
                t.addEventListener("mousemove", r),
                    (D.current = () => {
                        t.removeEventListener("mousemove", r);
                    });
                return;
            }
            ("touch" === S.current && (0, s.gR)(u.floating, e.relatedTarget)) || U(e);
        }
        function i(e) {
            V() ||
                (a.current.floatingContext &&
                    (null == g.current ||
                        g.current({
                            ...a.current.floatingContext,
                            tree: m,
                            x: e.clientX,
                            y: e.clientY,
                            onClose() {
                                F(), G(), V() || U(e);
                            },
                        })(e)));
        }
        function l() {
            M(y);
        }
        function d(e) {
            V() || U(e, !1);
        }
    }, [u, c, e, f, h, U, G, F, r, n, I, m, A, g, a, V, T]),
        (0, s.OS)(() => {
            var e, t;
            if (c && n && null != (e = g.current) && null != (e = e.__options) && e.blockPointerEvents && w()) {
                b.current = !0;
                let e = u.floating;
                if ((0, o.vq)(u.domReference) && e) {
                    let n = (0, s.YE)(u.floating).body;
                    n.setAttribute(P, "");
                    let r = u.domReference,
                        i =
                            null == m ||
                            null == (t = m.nodesRef.current.find((e) => e.id === E)) ||
                            null == (t = t.context)
                                ? void 0
                                : t.elements.floating;
                    return (
                        i && (i.style.pointerEvents = ""),
                        (n.style.pointerEvents = "none"),
                        (r.style.pointerEvents = "auto"),
                        (e.style.pointerEvents = "auto"),
                        () => {
                            (n.style.pointerEvents = ""), (r.style.pointerEvents = ""), (e.style.pointerEvents = "");
                        }
                    );
                }
            }
        }, [c, n, E, u, m, g, w]),
        (0, s.OS)(() => {
            n || ((S.current = void 0), (L.current = !1), G(), F());
        }, [n, G, F]),
        i.useEffect(
            () => () => {
                G(), M(y), M(N), F();
            },
            [c, u.domReference, G, F],
        );
    let B = i.useMemo(() => {
        function e(e) {
            S.current = e.pointerType;
        }
        return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove(e) {
                let { nativeEvent: t } = e;
                function i() {
                    C.current || I.current || r(!0, t, "hover");
                }
                (f && !(0, s.Go)(S.current)) ||
                    n ||
                    0 === k(T.current) ||
                    (L.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                    (M(N),
                    "touch" === S.current ? i() : ((L.current = !0), (N.current = window.setTimeout(i, k(T.current)))));
            },
        };
    }, [f, r, n, I, T]);
    return i.useMemo(() => (c ? { reference: B } : {}), [c, B]);
}
let G = null,
    F = 0;
function V(e, t) {
    void 0 === t && (t = {});
    let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
    r && cancelAnimationFrame(F);
    let s = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
    i ? s() : (F = requestAnimationFrame(s));
}
function B(e, t) {
    if (!e || !t) return !1;
    let n = null == t.getRootNode ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && (0, o.Ng)(n)) {
        let n = t;
        for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
        }
    }
    return !1;
}
function H(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function j(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
let Y = { inert: new WeakMap(), "aria-hidden": new WeakMap(), none: new WeakMap() };
function W(e) {
    return "inert" === e ? Y.inert : "aria-hidden" === e ? Y["aria-hidden"] : Y.none;
}
let K = new WeakSet(),
    $ = {},
    z = 0,
    q = () => "u" > typeof HTMLElement && "inert" in HTMLElement.prototype,
    Z = (e) => e && (e.host || Z(e.parentNode)),
    X = (e, t) =>
        t
            .map((t) => {
                if (e.contains(t)) return t;
                let n = Z(t);
                return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
function Q(e, t, n, r) {
    let i = "data-floating-ui-inert",
        s = r ? "inert" : n ? "aria-hidden" : null,
        a = X(t, e),
        l = new Set(),
        u = new Set(a),
        c = [];
    $[i] || ($[i] = new WeakMap());
    let d = $[i];
    function _(e) {
        !(!e || l.has(e)) && (l.add(e), e.parentNode && _(e.parentNode));
    }
    function f(e) {
        !e ||
            u.has(e) ||
            [].forEach.call(e.children, (e) => {
                if ("script" !== (0, o.mq)(e))
                    if (l.has(e)) f(e);
                    else {
                        let t = s ? e.getAttribute(s) : null,
                            n = null !== t && "false" !== t,
                            r = W(s),
                            a = (r.get(e) || 0) + 1,
                            o = (d.get(e) || 0) + 1;
                        r.set(e, a),
                            d.set(e, o),
                            c.push(e),
                            1 === a && n && K.add(e),
                            1 === o && e.setAttribute(i, ""),
                            !n && s && e.setAttribute(s, "inert" === s ? "" : "true");
                    }
            });
    }
    return (
        a.forEach(_),
        f(t),
        l.clear(),
        z++,
        () => {
            c.forEach((e) => {
                let t = W(s),
                    n = (t.get(e) || 0) - 1,
                    r = (d.get(e) || 0) - 1;
                t.set(e, n),
                    d.set(e, r),
                    n || (!K.has(e) && s && e.removeAttribute(s), K.delete(e)),
                    r || e.removeAttribute(i);
            }),
                --z ||
                    ((Y.inert = new WeakMap()),
                    (Y["aria-hidden"] = new WeakMap()),
                    (Y.none = new WeakMap()),
                    (K = new WeakSet()),
                    ($ = {}));
        }
    );
}
function J(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let r = j(e[0]).body;
    return Q(e.concat(Array.from(r.querySelectorAll('[aria-live],[role="status"],output'))), r, t, n);
}
let ee = {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "fixed",
        whiteSpace: "nowrap",
        width: "1px",
        top: 0,
        left: 0,
    },
    et = i.forwardRef(function (e, t) {
        let [n, r] = i.useState();
        (0, s.OS)(() => {
            (0, s.nr)() && r("button");
        }, []);
        let o = { ref: t, tabIndex: 0, role: n, "aria-hidden": !n || void 0, [w("focus-guard")]: "", style: ee };
        return (0, a.jsx)("span", { ...e, ...o });
    }),
    en = i.createContext(null),
    er = w("portal");
function ei(e) {
    void 0 === e && (e = {});
    let { id: t, root: n } = e,
        r = y(),
        a = ea(),
        [l, u] = i.useState(null),
        c = i.useRef(null);
    return (
        (0, s.OS)(
            () => () => {
                null == l || l.remove(),
                    queueMicrotask(() => {
                        c.current = null;
                    });
            },
            [l],
        ),
        (0, s.OS)(() => {
            if (!r || c.current) return;
            let e = t ? document.getElementById(t) : null;
            if (!e) return;
            let n = document.createElement("div");
            (n.id = r), n.setAttribute(er, ""), e.appendChild(n), (c.current = n), u(n);
        }, [t, r]),
        (0, s.OS)(() => {
            if (null === n || !r || c.current) return;
            let e = n || (null == a ? void 0 : a.portalNode);
            e && !(0, o.Ll)(e) && (e = e.current), (e = e || document.body);
            let i = null;
            t && (((i = document.createElement("div")).id = t), e.appendChild(i));
            let s = document.createElement("div");
            (s.id = r), s.setAttribute(er, ""), (e = i || e).appendChild(s), (c.current = s), u(s);
        }, [t, n, r, a]),
        l
    );
}
function es(e) {
    let { children: t, id: n, root: r, preserveTabOrder: o = !0 } = e,
        l = ei({ id: n, root: r }),
        [c, d] = i.useState(null),
        _ = i.useRef(null),
        f = i.useRef(null),
        p = i.useRef(null),
        h = i.useRef(null),
        m = null == c ? void 0 : c.modal,
        E = null == c ? void 0 : c.open,
        g = !!c && !c.modal && c.open && o && !!(r || l);
    return (
        i.useEffect(() => {
            if (l && o && !m)
                return (
                    l.addEventListener("focusin", e, !0),
                    l.addEventListener("focusout", e, !0),
                    () => {
                        l.removeEventListener("focusin", e, !0), l.removeEventListener("focusout", e, !0);
                    }
                );
            function e(e) {
                l && (0, s.Qp)(e) && ("focusin" === e.type ? s.yV : s.N)(l);
            }
        }, [l, o, m]),
        i.useEffect(() => {
            !l || E || (0, s.yV)(l);
        }, [E, l]),
        (0, a.jsxs)(en.Provider, {
            value: i.useMemo(
                () => ({
                    preserveTabOrder: o,
                    beforeOutsideRef: _,
                    afterOutsideRef: f,
                    beforeInsideRef: p,
                    afterInsideRef: h,
                    portalNode: l,
                    setFocusManagerState: d,
                }),
                [o, l],
            ),
            children: [
                g &&
                    l &&
                    (0, a.jsx)(et, {
                        "data-type": "outside",
                        ref: _,
                        onFocus: (e) => {
                            if ((0, s.Qp)(e, l)) {
                                var t;
                                null == (t = p.current) || t.focus();
                            } else {
                                let e = c ? c.domReference : null,
                                    t = (0, s.XJ)(e);
                                null == t || t.focus();
                            }
                        },
                    }),
                g && l && (0, a.jsx)("span", { "aria-owns": l.id, style: ee }),
                l && u.createPortal(t, l),
                g &&
                    l &&
                    (0, a.jsx)(et, {
                        "data-type": "outside",
                        ref: f,
                        onFocus: (e) => {
                            if ((0, s.Qp)(e, l)) {
                                var t;
                                null == (t = h.current) || t.focus();
                            } else {
                                let t = c ? c.domReference : null,
                                    n = (0, s.vF)(t);
                                null == n || n.focus(),
                                    (null == c ? void 0 : c.closeOnFocusOut) &&
                                        (null == c || c.onOpenChange(!1, e.nativeEvent, "focus-out"));
                            }
                        },
                    }),
            ],
        })
    );
}
let ea = () => i.useContext(en);
function eo(e) {
    return i.useMemo(
        () => (t) => {
            e.forEach((e) => {
                e && (e.current = t);
            });
        },
        e,
    );
}
let el = 20,
    eu = [];
function ec() {
    eu = eu.filter((e) => e.isConnected);
}
function ed(e) {
    ec(), e && "body" !== (0, o.mq)(e) && (eu.push(e), eu.length > el && (eu = eu.slice(-20)));
}
function e_() {
    return ec(), eu[eu.length - 1];
}
function ef(e) {
    let t = (0, s.kQ)();
    return (0, l.AO)(e, t) ? e : (0, l.Kr)(e, t)[0] || e;
}
function ep(e, t) {
    var n;
    if (!t.current.includes("floating") && !(null != (n = e.getAttribute("role")) && n.includes("dialog"))) return;
    let r = (0, s.kQ)(),
        i = (0, l.nq)(e, r).filter((e) => {
            let t = e.getAttribute("data-tabindex") || "";
            return (0, l.AO)(e, r) || (e.hasAttribute("data-tabindex") && !t.startsWith("-"));
        }),
        a = e.getAttribute("tabindex");
    t.current.includes("floating") || 0 === i.length
        ? "0" !== a && e.setAttribute("tabindex", "0")
        : ("-1" !== a || (e.hasAttribute("data-tabindex") && "-1" !== e.getAttribute("data-tabindex"))) &&
          (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
let eh = i.forwardRef(function (e, t) {
    return (0, a.jsx)("button", { ...e, type: "button", ref: t, tabIndex: -1, style: ee });
});
function em(e) {
    let {
            context: t,
            children: n,
            disabled: r = !1,
            order: u = ["content"],
            guards: c = !0,
            initialFocus: d = 0,
            returnFocus: _ = !0,
            restoreFocus: f = !1,
            modal: p = !0,
            visuallyHiddenDismiss: h = !1,
            closeOnFocusOut: m = !0,
            outsideElementsInert: E = !1,
            getInsideElements: g = () => [],
        } = e,
        {
            open: A,
            onOpenChange: I,
            events: T,
            dataRef: S,
            elements: { domReference: y, floating: v },
        } = t,
        N = (0, s.Jt)(() => {
            var e;
            return null == (e = S.current.floatingContext) ? void 0 : e.nodeId;
        }),
        C = (0, s.Jt)(g),
        R = "number" == typeof d && d < 0,
        b = (0, s.WZ)(y) && R,
        D = q(),
        L = !D || c,
        P = !L || (D && E),
        x = (0, s.SE)(u),
        k = (0, s.SE)(d),
        U = (0, s.SE)(_),
        G = O(),
        F = ea(),
        B = i.useRef(null),
        H = i.useRef(null),
        j = i.useRef(!1),
        Y = i.useRef(!1),
        W = i.useRef(-1),
        K = i.useRef(-1),
        $ = null != F,
        z = (0, s.nd)(v),
        Z = (0, s.Jt)(function (e) {
            return void 0 === e && (e = z), e ? (0, l.Kr)(e, (0, s.kQ)()) : [];
        }),
        X = (0, s.Jt)((e) => {
            let t = Z(e);
            return x.current
                .map((e) => (y && "reference" === e ? y : z && "floating" === e ? z : t))
                .filter(Boolean)
                .flat();
        });
    i.useEffect(() => {
        if (r || !p) return;
        function e(e) {
            if ("Tab" === e.key) {
                (0, s.gR)(z, (0, s.RS)((0, s.YE)(z))) && 0 === Z().length && !b && (0, s.jo)(e);
                let t = X(),
                    n = (0, s.EW)(e);
                "reference" === x.current[0] && n === y && ((0, s.jo)(e), e.shiftKey ? V(t[t.length - 1]) : V(t[1])),
                    "floating" === x.current[1] && n === z && e.shiftKey && ((0, s.jo)(e), V(t[0]));
            }
        }
        let t = (0, s.YE)(z);
        return (
            t.addEventListener("keydown", e),
            () => {
                t.removeEventListener("keydown", e);
            }
        );
    }, [r, y, z, p, x, b, Z, X]),
        i.useEffect(() => {
            if (!r && v)
                return (
                    v.addEventListener("focusin", e),
                    () => {
                        v.removeEventListener("focusin", e);
                    }
                );
            function e(e) {
                let t = (0, s.EW)(e),
                    n = Z().indexOf(t);
                -1 !== n && (W.current = n);
            }
        }, [r, v, Z]),
        i.useEffect(() => {
            if (r || !m) return;
            function e() {
                (Y.current = !0),
                    setTimeout(() => {
                        Y.current = !1;
                    });
            }
            function t(e) {
                let t = e.relatedTarget,
                    n = e.currentTarget,
                    r = (0, s.EW)(e);
                queueMicrotask(() => {
                    let i = N(),
                        a = !(
                            (0, s.gR)(y, t) ||
                            (0, s.gR)(v, t) ||
                            (0, s.gR)(t, v) ||
                            (0, s.gR)(null == F ? void 0 : F.portalNode, t) ||
                            (null != t && t.hasAttribute(w("focus-guard"))) ||
                            (G &&
                                ((0, s.CM)(G.nodesRef.current, i).find((e) => {
                                    var n, r;
                                    return (
                                        (0, s.gR)(null == (n = e.context) ? void 0 : n.elements.floating, t) ||
                                        (0, s.gR)(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                                    );
                                }) ||
                                    (0, s.$4)(G.nodesRef.current, i).find((e) => {
                                        var n, r, i;
                                        return (
                                            [
                                                null == (n = e.context) ? void 0 : n.elements.floating,
                                                (0, s.nd)(null == (r = e.context) ? void 0 : r.elements.floating),
                                            ].includes(t) ||
                                            (null == (i = e.context) ? void 0 : i.elements.domReference) === t
                                        );
                                    })))
                        );
                    if (
                        (n === y && z && ep(z, x),
                        f && n !== y && !(null != r && r.isConnected) && (0, s.RS)((0, s.YE)(z)) === (0, s.YE)(z).body)
                    ) {
                        (0, o.sb)(z) && z.focus();
                        let e = W.current,
                            t = Z(),
                            n = t[e] || t[t.length - 1] || z;
                        (0, o.sb)(n) && n.focus();
                    }
                    if (S.current.insideReactTree) {
                        S.current.insideReactTree = !1;
                        return;
                    }
                    (b || !p) && t && a && !Y.current && t !== e_() && ((j.current = !0), I(!1, e, "focus-out"));
                });
            }
            let n = !!(!G && F);
            function i() {
                M(K),
                    (S.current.insideReactTree = !0),
                    (K.current = window.setTimeout(() => {
                        S.current.insideReactTree = !1;
                    }));
            }
            if (v && (0, o.sb)(y))
                return (
                    y.addEventListener("focusout", t),
                    y.addEventListener("pointerdown", e),
                    v.addEventListener("focusout", t),
                    n && v.addEventListener("focusout", i, !0),
                    () => {
                        y.removeEventListener("focusout", t),
                            y.removeEventListener("pointerdown", e),
                            v.removeEventListener("focusout", t),
                            n && v.removeEventListener("focusout", i, !0);
                    }
                );
        }, [r, y, v, z, p, G, F, I, m, f, Z, b, N, x, S]);
    let Q = i.useRef(null),
        en = i.useRef(null),
        er = eo([Q, null == F ? void 0 : F.beforeInsideRef]),
        ei = eo([en, null == F ? void 0 : F.afterInsideRef]);
    function es(e) {
        return !r && h && p
            ? (0, a.jsx)(eh, {
                  ref: "start" === e ? B : H,
                  onClick: (e) => I(!1, e.nativeEvent),
                  children: "string" == typeof h ? h : "Dismiss",
              })
            : null;
    }
    i.useEffect(() => {
        var e, t;
        if (r || !v) return;
        let n = Array.from(
                (null == F || null == (e = F.portalNode) ? void 0 : e.querySelectorAll("[" + w("portal") + "]")) || [],
            ),
            i = [
                v,
                null ==
                    (t = (G ? (0, s.$4)(G.nodesRef.current, N()) : []).find((e) => {
                        var t;
                        return (0, s.WZ)((null == (t = e.context) ? void 0 : t.elements.domReference) || null);
                    })) || null == (t = t.context)
                    ? void 0
                    : t.elements.domReference,
                ...n,
                ...C(),
                B.current,
                H.current,
                Q.current,
                en.current,
                null == F ? void 0 : F.beforeOutsideRef.current,
                null == F ? void 0 : F.afterOutsideRef.current,
                x.current.includes("reference") || b ? y : null,
            ].filter((e) => null != e),
            a = p || b ? J(i, !P, P) : J(i);
        return () => {
            a();
        };
    }, [r, y, v, p, x, F, b, L, P, G, N, C]),
        (0, s.OS)(() => {
            if (r || !(0, o.sb)(z)) return;
            let e = (0, s.YE)(z),
                t = (0, s.RS)(e);
            queueMicrotask(() => {
                let e = X(z),
                    n = k.current,
                    r = ("number" == typeof n ? e[n] : n.current) || z,
                    i = (0, s.gR)(z, t);
                R || i || !A || V(r, { preventScroll: r === z });
            });
        }, [r, A, z, R, X, k]),
        (0, s.OS)(() => {
            if (r || !z) return;
            let e = (0, s.YE)(z);
            function t(e) {
                let { reason: t, event: n, nested: r } = e;
                if (
                    (["hover", "safe-polygon"].includes(t) && "mouseleave" === n.type && (j.current = !0),
                    "outside-press" === t)
                )
                    if (r) j.current = !1;
                    else if ((0, s.YF)(n) || (0, s.Pg)(n)) j.current = !1;
                    else {
                        let e = !1;
                        document.createElement("div").focus({
                            get preventScroll() {
                                return (e = !0), !1;
                            },
                        }),
                            e ? (j.current = !1) : (j.current = !0);
                    }
            }
            ed((0, s.RS)(e)), T.on("openchange", t);
            let n = e.createElement("span");
            function i() {
                if ("boolean" == typeof U.current) {
                    let e = y || e_();
                    return e && e.isConnected ? e : n;
                }
                return U.current.current || n;
            }
            return (
                n.setAttribute("tabindex", "-1"),
                n.setAttribute("aria-hidden", "true"),
                Object.assign(n.style, ee),
                $ && y && y.insertAdjacentElement("afterend", n),
                () => {
                    T.off("openchange", t);
                    let r = (0, s.RS)(e),
                        a =
                            (0, s.gR)(v, r) ||
                            (G &&
                                (0, s.CM)(G.nodesRef.current, N(), !1).some((e) => {
                                    var t;
                                    return (0, s.gR)(null == (t = e.context) ? void 0 : t.elements.floating, r);
                                })),
                        l = i();
                    queueMicrotask(() => {
                        let t = ef(l);
                        U.current &&
                            !j.current &&
                            (0, o.sb)(t) &&
                            (t === r || r === e.body || a) &&
                            t.focus({ preventScroll: !0 }),
                            n.remove();
                    });
                }
            );
        }, [r, v, z, U, S, T, G, $, y, N]),
        i.useEffect(
            () => (
                queueMicrotask(() => {
                    j.current = !1;
                }),
                () => {
                    queueMicrotask(ec);
                }
            ),
            [r],
        ),
        (0, s.OS)(() => {
            if (!r && F)
                return (
                    F.setFocusManagerState({ modal: p, closeOnFocusOut: m, open: A, onOpenChange: I, domReference: y }),
                    () => {
                        F.setFocusManagerState(null);
                    }
                );
        }, [r, F, p, A, I, m, y]),
        (0, s.OS)(() => {
            r || (z && ep(z, x));
        }, [r, z, x]);
    let el = !r && L && (!p || !b) && ($ || p);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            el &&
                (0, a.jsx)(et, {
                    "data-type": "inside",
                    ref: er,
                    onFocus: (e) => {
                        if (p) {
                            let e = X();
                            V("reference" === u[0] ? e[0] : e[e.length - 1]);
                        } else if (null != F && F.preserveTabOrder && F.portalNode)
                            if (((j.current = !1), (0, s.Qp)(e, F.portalNode))) {
                                let e = (0, s.vF)(y);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = F.beforeOutsideRef.current) || t.focus();
                            }
                    },
                }),
            !b && es("start"),
            n,
            es("end"),
            el &&
                (0, a.jsx)(et, {
                    "data-type": "inside",
                    ref: ei,
                    onFocus: (e) => {
                        if (p) V(X()[0]);
                        else if (null != F && F.preserveTabOrder && F.portalNode)
                            if ((m && (j.current = !0), (0, s.Qp)(e, F.portalNode))) {
                                let e = (0, s.XJ)(y);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = F.afterOutsideRef.current) || t.focus();
                            }
                    },
                }),
        ],
    });
}
let eE = 0,
    eg = "--floating-ui-scrollbar-width";
function eA() {
    let e = (0, s.uo)(),
        t = /iP(hone|ad|od)|iOS/.test(e) || ("MacIntel" === e && navigator.maxTouchPoints > 1),
        n = document.body.style,
        r =
            Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft
                ? "paddingLeft"
                : "paddingRight",
        i = window.innerWidth - document.documentElement.clientWidth,
        a = n.left ? parseFloat(n.left) : window.scrollX,
        o = n.top ? parseFloat(n.top) : window.scrollY;
    if (((n.overflow = "hidden"), n.setProperty(eg, i + "px"), i && (n[r] = i + "px"), t)) {
        var l, u;
        let e = (null == (l = window.visualViewport) ? void 0 : l.offsetLeft) || 0;
        Object.assign(n, {
            position: "fixed",
            top: -(o - Math.floor((null == (u = window.visualViewport) ? void 0 : u.offsetTop) || 0)) + "px",
            left: -(a - Math.floor(e)) + "px",
            right: "0",
        });
    }
    return () => {
        Object.assign(n, { overflow: "", [r]: "" }),
            n.removeProperty(eg),
            t && (Object.assign(n, { position: "", top: "", left: "", right: "" }), window.scrollTo(a, o));
    };
}
let eI = () => {},
    eT = i.forwardRef(function (e, t) {
        let { lockScroll: n = !1, ...r } = e;
        return (
            (0, s.OS)(() => {
                if (n)
                    return (
                        1 == ++eE && (eI = eA()),
                        () => {
                            0 == --eE && eI();
                        }
                    );
            }, [n]),
            (0, a.jsx)("div", {
                ref: t,
                ...r,
                style: { position: "fixed", overflow: "auto", top: 0, right: 0, bottom: 0, left: 0, ...r.style },
            })
        );
    }),
    eS = { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
    ey = { pointerdown: "onPointerDownCapture", mousedown: "onMouseDownCapture", click: "onClickCapture" },
    ev = (e) => {
        var t, n;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
    };
function eN(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, elements: a, dataRef: l } = e,
        {
            enabled: u = !0,
            escapeKey: c = !0,
            outsidePress: d = !0,
            outsidePressEvent: _ = "pointerdown",
            referencePress: f = !1,
            referencePressEvent: p = "pointerdown",
            ancestorScroll: h = !1,
            bubbles: m,
            capture: E,
        } = t,
        g = O(),
        A = (0, s.Jt)("function" == typeof d ? d : () => !1),
        I = "function" == typeof d ? A : d,
        T = i.useRef(!1),
        { escapeKey: S, outsidePress: y } = ev(m),
        { escapeKey: v, outsidePress: N } = ev(E),
        C = i.useRef(!1),
        R = (0, s.Jt)((e) => {
            var t;
            if (!n || !u || !c || "Escape" !== e.key || C.current) return;
            let i = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                a = g ? (0, s.CM)(g.nodesRef.current, i) : [];
            if (!S && (e.stopPropagation(), a.length > 0)) {
                let e = !0;
                if (
                    (a.forEach((t) => {
                        var n;
                        if (null != (n = t.context) && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
                            e = !1;
                            return;
                        }
                    }),
                    !e)
                )
                    return;
            }
            r(!1, (0, s.O_)(e) ? e.nativeEvent : e, "escape-key");
        }),
        b = (0, s.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                R(e), null == (t = (0, s.EW)(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = (0, s.EW)(e)) || t.addEventListener("keydown", n);
        }),
        D = (0, s.Jt)((e) => {
            var t;
            let n = l.current.insideReactTree;
            l.current.insideReactTree = !1;
            let i = T.current;
            if (((T.current = !1), ("click" === _ && i) || n || ("function" == typeof I && !I(e)))) return;
            let u = (0, s.EW)(e),
                c = "[" + w("inert") + "]",
                d = (0, s.YE)(a.floating).querySelectorAll(c),
                f = (0, o.vq)(u) ? u : null;
            for (; f && !(0, o.eu)(f); ) {
                let e = (0, o.$4)(f);
                if ((0, o.eu)(e) || !(0, o.vq)(e)) break;
                f = e;
            }
            if (
                d.length &&
                (0, o.vq)(u) &&
                !(0, s.tZ)(u) &&
                !(0, s.gR)(u, a.floating) &&
                Array.from(d).every((e) => !(0, s.gR)(f, e))
            )
                return;
            if ((0, o.sb)(u) && P) {
                let t = (0, o.eu)(u),
                    n = (0, o.L9)(u),
                    r = /auto|scroll/,
                    i = t || r.test(n.overflowX),
                    s = t || r.test(n.overflowY),
                    a = i && u.clientWidth > 0 && u.scrollWidth > u.clientWidth,
                    l = s && u.clientHeight > 0 && u.scrollHeight > u.clientHeight,
                    c = "rtl" === n.direction,
                    d = l && (c ? e.offsetX <= u.offsetWidth - u.clientWidth : e.offsetX > u.clientWidth),
                    _ = a && e.offsetY > u.clientHeight;
                if (d || _) return;
            }
            let p = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                h =
                    g &&
                    (0, s.CM)(g.nodesRef.current, p).some((t) => {
                        var n;
                        return (0, s.F2)(e, null == (n = t.context) ? void 0 : n.elements.floating);
                    });
            if ((0, s.F2)(e, a.floating) || (0, s.F2)(e, a.domReference) || h) return;
            let m = g ? (0, s.CM)(g.nodesRef.current, p) : [];
            if (m.length > 0) {
                let e = !0;
                if (
                    (m.forEach((t) => {
                        var n;
                        if (null != (n = t.context) && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
                            e = !1;
                            return;
                        }
                    }),
                    !e)
                )
                    return;
            }
            r(!1, e, "outside-press");
        }),
        L = (0, s.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                D(e), null == (t = (0, s.EW)(e)) || t.removeEventListener(_, n);
            };
            null == (t = (0, s.EW)(e)) || t.addEventListener(_, n);
        });
    i.useEffect(() => {
        if (!n || !u) return;
        (l.current.__escapeKeyBubbles = S), (l.current.__outsidePressBubbles = y);
        let e = -1;
        function t(e) {
            r(!1, e, "ancestor-scroll");
        }
        function i() {
            window.clearTimeout(e), (C.current = !0);
        }
        function d() {
            e = window.setTimeout(
                () => {
                    C.current = !1;
                },
                5 * !!(0, o.Tc)(),
            );
        }
        let f = (0, s.YE)(a.floating);
        c &&
            (f.addEventListener("keydown", v ? b : R, v),
            f.addEventListener("compositionstart", i),
            f.addEventListener("compositionend", d)),
            I && f.addEventListener(_, N ? L : D, N);
        let p = [];
        return (
            h &&
                ((0, o.vq)(a.domReference) && (p = (0, o.v9)(a.domReference)),
                (0, o.vq)(a.floating) && (p = p.concat((0, o.v9)(a.floating))),
                !(0, o.vq)(a.reference) &&
                    a.reference &&
                    a.reference.contextElement &&
                    (p = p.concat((0, o.v9)(a.reference.contextElement)))),
            (p = p.filter((e) => {
                var t;
                return e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport);
            })).forEach((e) => {
                e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
                c &&
                    (f.removeEventListener("keydown", v ? b : R, v),
                    f.removeEventListener("compositionstart", i),
                    f.removeEventListener("compositionend", d)),
                    I && f.removeEventListener(_, N ? L : D, N),
                    p.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, a, c, I, _, n, r, h, u, S, y, R, v, b, D, N, L]),
        i.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, I, _]);
    let M = i.useMemo(
            () => ({
                onKeyDown: R,
                ...(f && {
                    [eS[p]]: (e) => {
                        r(!1, e.nativeEvent, "reference-press");
                    },
                    ...("click" !== p && {
                        onClick(e) {
                            r(!1, e.nativeEvent, "reference-press");
                        },
                    }),
                }),
            }),
            [R, r, f, p],
        ),
        P = i.useMemo(
            () => ({
                onKeyDown: R,
                onMouseDown() {
                    T.current = !0;
                },
                onMouseUp() {
                    T.current = !0;
                },
                [ey[_]]: () => {
                    l.current.insideReactTree = !0;
                },
            }),
            [R, _, l],
        );
    return i.useMemo(() => (u ? { reference: M, floating: P } : {}), [u, M, P]);
}
function eC(e) {
    let { open: t = !1, onOpenChange: n, elements: r } = e,
        a = y(),
        o = i.useRef({}),
        [l] = i.useState(() => v()),
        u = null != R(),
        [c, d] = i.useState(r.reference),
        _ = (0, s.Jt)((e, t, r) => {
            (o.current.openEvent = e ? t : void 0),
                l.emit("openchange", { open: e, event: t, reason: r, nested: u }),
                null == n || n(e, t, r);
        }),
        f = i.useMemo(() => ({ setPositionReference: d }), []),
        p = i.useMemo(
            () => ({ reference: c || r.reference || null, floating: r.floating || null, domReference: r.reference }),
            [c, r.reference, r.floating],
        );
    return i.useMemo(
        () => ({ dataRef: o, open: t, onOpenChange: _, elements: p, events: l, floatingId: a, refs: f }),
        [t, _, p, l, a, f],
    );
}
function eR(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        n = eC({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
        r = e.rootContext || n,
        a = r.elements,
        [l, u] = i.useState(null),
        [d, _] = i.useState(null),
        f = (null == a ? void 0 : a.domReference) || l,
        p = i.useRef(null),
        h = O();
    (0, s.OS)(() => {
        f && (p.current = f);
    }, [f]);
    let m = (0, c.we)({ ...e, elements: { ...a, ...(d && { reference: d }) } }),
        E = i.useCallback(
            (e) => {
                let t = (0, o.vq)(e)
                    ? {
                          getBoundingClientRect: () => e.getBoundingClientRect(),
                          getClientRects: () => e.getClientRects(),
                          contextElement: e,
                      }
                    : e;
                _(t), m.refs.setReference(t);
            },
            [m.refs],
        ),
        g = i.useCallback(
            (e) => {
                ((0, o.vq)(e) || null === e) && ((p.current = e), u(e)),
                    ((0, o.vq)(m.refs.reference.current) ||
                        null === m.refs.reference.current ||
                        (null !== e && !(0, o.vq)(e))) &&
                        m.refs.setReference(e);
            },
            [m.refs],
        ),
        A = i.useMemo(() => ({ ...m.refs, setReference: g, setPositionReference: E, domReference: p }), [m.refs, g, E]),
        I = i.useMemo(() => ({ ...m.elements, domReference: f }), [m.elements, f]),
        T = i.useMemo(() => ({ ...m, ...r, refs: A, elements: I, nodeId: t }), [m, A, I, t, r]);
    return (
        (0, s.OS)(() => {
            r.dataRef.current.floatingContext = T;
            let e = null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
            e && (e.context = T);
        }),
        i.useMemo(() => ({ ...m, context: T, refs: A, elements: I }), [m, A, I, T])
    );
}
function eO(e, t, n) {
    let r = new Map(),
        i = "item" === n,
        s = e;
    if (i && e) {
        let { [_]: t, [f]: n, ...r } = e;
        s = r;
    }
    return {
        ...("floating" === n && { tabIndex: -1, [d]: "" }),
        ...s,
        ...t
            .map((t) => {
                let r = t ? t[n] : null;
                return "function" == typeof r ? (e ? r(e) : null) : r;
            })
            .concat(e)
            .reduce(
                (e, t) => (
                    t &&
                        Object.entries(t).forEach((t) => {
                            let [n, s] = t;
                            if (!(i && [_, f].includes(n)))
                                if (0 === n.indexOf("on")) {
                                    if ((r.has(n) || r.set(n, []), "function" == typeof s)) {
                                        var a;
                                        null == (a = r.get(n)) || a.push(s),
                                            (e[n] = function () {
                                                for (var e, t = arguments.length, i = Array(t), s = 0; s < t; s++)
                                                    i[s] = arguments[s];
                                                return null == (e = r.get(n))
                                                    ? void 0
                                                    : e.map((e) => e(...i)).find((e) => void 0 !== e);
                                            });
                                    }
                                } else e[n] = s;
                        }),
                    e
                ),
                {},
            ),
    };
}
function eb(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        n = e.map((e) => (null == e ? void 0 : e.floating)),
        r = e.map((e) => (null == e ? void 0 : e.item)),
        s = i.useCallback((t) => eO(t, e, "reference"), t),
        a = i.useCallback((t) => eO(t, e, "floating"), n),
        o = i.useCallback((t) => eO(t, e, "item"), r);
    return i.useMemo(() => ({ getReferenceProps: s, getFloatingProps: a, getItemProps: o }), [s, a, o]);
}
let eD = "Escape";
function eL(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n;
    }
}
let ew = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function eM(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function eP(e, t) {
    let [n, r] = i.useState(e);
    return (
        e && !n && r(!0),
        i.useEffect(() => {
            if (!e && n) {
                let e = setTimeout(() => r(!1), t);
                return () => clearTimeout(e);
            }
        }, [e, n, t]),
        n
    );
}
function ex(e, t) {
    void 0 === t && (t = {});
    let {
            open: n,
            elements: { floating: r },
        } = e,
        { duration: a = 250 } = t,
        o = ("number" == typeof a ? a : a.close) || 0,
        [l, c] = i.useState("unmounted"),
        d = eP(n, o);
    return (
        d || "close" !== l || c("unmounted"),
        (0, s.OS)(() => {
            if (r) {
                if (n) {
                    c("initial");
                    let e = requestAnimationFrame(() => {
                        u.flushSync(() => {
                            c("open");
                        });
                    });
                    return () => {
                        cancelAnimationFrame(e);
                    };
                }
                c("close");
            }
        }, [n, r]),
        { isMounted: d, status: l }
    );
}
function ek(e, t) {
    void 0 === t && (t = {});
    let { initial: n = { opacity: 0 }, open: r, close: a, common: o, duration: l = 250 } = t,
        u = e.placement,
        c = u.split("-")[0],
        d = i.useMemo(() => ({ side: c, placement: u }), [c, u]),
        _ = "number" == typeof l,
        f = (_ ? l : l.open) || 0,
        p = (_ ? l : l.close) || 0,
        [h, m] = i.useState(() => ({ ...eM(o, d), ...eM(n, d) })),
        { isMounted: E, status: g } = ex(e, { duration: l }),
        A = (0, s.SE)(n),
        I = (0, s.SE)(r),
        T = (0, s.SE)(a),
        S = (0, s.SE)(o);
    return (
        (0, s.OS)(() => {
            let e = eM(A.current, d),
                t = eM(T.current, d),
                n = eM(S.current, d),
                r = eM(I.current, d) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
            if (
                ("initial" === g && m((t) => ({ transitionProperty: t.transitionProperty, ...n, ...e })),
                "open" === g &&
                    m({
                        transitionProperty: Object.keys(r).map(ew).join(","),
                        transitionDuration: f + "ms",
                        ...n,
                        ...r,
                    }),
                "close" === g)
            ) {
                let r = t || e;
                m({ transitionProperty: Object.keys(r).map(ew).join(","), transitionDuration: p + "ms", ...n, ...r });
            }
        }, [p, T, A, I, S, f, g, d]),
        { isMounted: E, styles: h }
    );
}
function eU(e, t, n) {
    return (
        void 0 === n && (n = !0),
        e
            .filter((e) => {
                var r;
                return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
            })
            .flatMap((t) => [t, ...eU(e, t.id, n)])
    );
}
function eG(e, t) {
    let [n, r] = e,
        i = !1,
        s = t.length;
    for (let e = 0, a = s - 1; e < s; a = e++) {
        let [s, o] = t[e] || [0, 0],
            [l, u] = t[a] || [0, 0];
        o >= r != u >= r && n <= ((l - s) * (r - o)) / (u - o) + s && (i = !i);
    }
    return i;
}
function eF(e, t) {
    return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function eV(e) {
    void 0 === e && (e = {});
    let { buffer: t = 0.5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e,
        i = { current: -1 },
        s = !1,
        a = null,
        l = null,
        u = "u" > typeof performance ? performance.now() : 0;
    function c(e, t) {
        let n = performance.now(),
            r = n - u;
        if (null === a || null === l || 0 === r) return (a = e), (l = t), (u = n), null;
        let i = e - a,
            s = t - l,
            o = Math.sqrt(i * i + s * s) / r;
        return (a = e), (l = t), (u = n), o;
    }
    let d = (e) => {
        let { x: n, y: a, placement: l, elements: u, onClose: d, nodeId: _, tree: f } = e;
        return function (e) {
            function p() {
                M(i), d();
            }
            if ((M(i), !u.domReference || !u.floating || null == l || null == n || null == a)) return;
            let { clientX: h, clientY: m } = e,
                E = [h, m],
                g = H(e),
                A = "mouseleave" === e.type,
                I = B(u.floating, g),
                T = B(u.domReference, g),
                S = u.domReference.getBoundingClientRect(),
                y = u.floating.getBoundingClientRect(),
                v = l.split("-")[0],
                N = n > y.right - y.width / 2,
                C = a > y.bottom - y.height / 2,
                R = eF(E, S),
                O = y.width > S.width,
                b = y.height > S.height,
                D = (O ? S : y).left,
                L = (O ? S : y).right,
                w = (b ? S : y).top,
                P = (b ? S : y).bottom;
            if (I && ((s = !0), !A)) return;
            if ((T && (s = !1), T && !A)) {
                s = !0;
                return;
            }
            if (
                (A && (0, o.vq)(e.relatedTarget) && B(u.floating, e.relatedTarget)) ||
                (f && eU(f.nodesRef.current, _).length)
            )
                return;
            if (
                ("top" === v && a >= S.bottom - 1) ||
                ("bottom" === v && a <= S.top + 1) ||
                ("left" === v && n >= S.right - 1) ||
                ("right" === v && n <= S.left + 1)
            )
                return p();
            let x = [];
            switch (v) {
                case "top":
                    x = [
                        [D, S.top + 1],
                        [D, y.bottom - 1],
                        [L, y.bottom - 1],
                        [L, S.top + 1],
                    ];
                    break;
                case "bottom":
                    x = [
                        [D, y.top + 1],
                        [D, S.bottom - 1],
                        [L, S.bottom - 1],
                        [L, y.top + 1],
                    ];
                    break;
                case "left":
                    x = [
                        [y.right - 1, P],
                        [y.right - 1, w],
                        [S.left + 1, w],
                        [S.left + 1, P],
                    ];
                    break;
                case "right":
                    x = [
                        [S.right - 1, P],
                        [S.right - 1, w],
                        [y.left + 1, w],
                        [y.left + 1, P],
                    ];
            }
            function k(e) {
                let [n, r] = e;
                switch (v) {
                    case "top":
                        return [
                            [O ? n + t / 2 : N ? n + 4 * t : n - 4 * t, r + t + 1],
                            [O ? n - t / 2 : N ? n + 4 * t : n - 4 * t, r + t + 1],
                            [y.left, N || O ? y.bottom - t : y.top],
                            [y.right, N ? (O ? y.bottom - t : y.top) : y.bottom - t],
                        ];
                    case "bottom":
                        return [
                            [O ? n + t / 2 : N ? n + 4 * t : n - 4 * t, r - t],
                            [O ? n - t / 2 : N ? n + 4 * t : n - 4 * t, r - t],
                            [y.left, N || O ? y.top + t : y.bottom],
                            [y.right, N ? (O ? y.top + t : y.bottom) : y.top + t],
                        ];
                    case "left": {
                        let e = [n + t + 1, b ? r + t / 2 : C ? r + 4 * t : r - 4 * t],
                            i = [n + t + 1, b ? r - t / 2 : C ? r + 4 * t : r - 4 * t];
                        return [
                            [C || b ? y.right - t : y.left, y.top],
                            [C ? (b ? y.right - t : y.left) : y.right - t, y.bottom],
                            e,
                            i,
                        ];
                    }
                    case "right":
                        return [
                            [n - t, b ? r + t / 2 : C ? r + 4 * t : r - 4 * t],
                            [n - t, b ? r - t / 2 : C ? r + 4 * t : r - 4 * t],
                            [C || b ? y.left + t : y.right, y.top],
                            [C ? (b ? y.left + t : y.right) : y.left + t, y.bottom],
                        ];
                }
            }
            if (!eG([h, m], x)) {
                if (s && !R) return p();
                if (!A && r) {
                    let t = c(e.clientX, e.clientY),
                        n = 0.1;
                    if (null !== t && t < n) return p();
                }
                eG([h, m], k([n, a])) ? !s && r && (i.current = window.setTimeout(p, 40)) : p();
            }
        };
    };
    return (d.__options = { blockPointerEvents: n }), d;
}
