"use strict";
n.d(t, {
    DL: () => eS,
    Mk: () => M,
    XF: () => Q,
    bv: () => eh,
    iB: () => eC,
    s9: () => ed,
    we: () => ef,
    zR: () => eo,
});
var r,
    i = n(64700),
    s = n(357786),
    a = n(627968),
    o = n(84157),
    l = n(340287),
    u = n(879821);
let c = "data-floating-ui-focusable",
    d = "active",
    _ = "selected",
    f = "ArrowLeft",
    p = "ArrowRight",
    h = "ArrowUp",
    m = "ArrowDown",
    E = { ...(r || (r = n.t(i, 2))) },
    g = !1,
    A = 0,
    I = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + A++;
function T() {
    let [e, t] = i.useState(() => (g ? I() : void 0));
    return (
        (0, s.OS)(() => {
            null == e && t(I());
        }, []),
        i.useEffect(() => {
            g = !0;
        }, []),
        e
    );
}
let S = E.useId || T;
function y() {
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
let v = i.createContext(null),
    N = i.createContext(null),
    C = () => {
        var e;
        return (null == (e = i.useContext(v)) ? void 0 : e.id) || null;
    },
    R = () => i.useContext(N);
function O(e) {
    return "data-floating-ui-" + e;
}
function b(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
}
let D = O("safe-polygon");
function L(e, t, n) {
    if (n && !(0, s.Go)(n)) return 0;
    if ("number" == typeof e) return e;
    if ("function" == typeof e) {
        let n = e();
        return "number" == typeof n ? n : null == n ? void 0 : n[t];
    }
    return null == e ? void 0 : e[t];
}
function w(e) {
    return "function" == typeof e ? e() : e;
}
function M(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, dataRef: a, events: l, elements: u } = e,
        { enabled: c = !0, delay: d = 0, handleClose: _ = null, mouseOnly: f = !1, restMs: p = 0, move: h = !0 } = t,
        m = R(),
        E = C(),
        g = (0, s.SE)(_),
        A = (0, s.SE)(d),
        I = (0, s.SE)(n),
        T = (0, s.SE)(p),
        S = i.useRef(),
        y = i.useRef(-1),
        v = i.useRef(),
        N = i.useRef(-1),
        O = i.useRef(!0),
        M = i.useRef(!1),
        x = i.useRef(() => {}),
        P = i.useRef(!1),
        k = (0, s.Jt)(() => {
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
            t || (b(y), b(N), (O.current = !0), (P.current = !1));
        }
    }, [c, l]),
        i.useEffect(() => {
            if (!c || !g.current || !n) return;
            function e(e) {
                k() && r(!1, e, "hover");
            }
            let t = (0, s.YE)(u.floating).documentElement;
            return (
                t.addEventListener("mouseleave", e),
                () => {
                    t.removeEventListener("mouseleave", e);
                }
            );
        }, [u.floating, n, r, c, g, k]);
    let U = i.useCallback(
            function (e, t, n) {
                void 0 === t && (t = !0), void 0 === n && (n = "hover");
                let i = L(A.current, "close", S.current);
                i && !v.current
                    ? (b(y), (y.current = window.setTimeout(() => r(!1, e, n), i)))
                    : t && (b(y), r(!1, e, n));
            },
            [A, r],
        ),
        G = (0, s.Jt)(() => {
            x.current(), (v.current = void 0);
        }),
        F = (0, s.Jt)(() => {
            if (M.current) {
                let e = (0, s.YE)(u.floating).body;
                (e.style.pointerEvents = ""), e.removeAttribute(D), (M.current = !1);
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
            if ((b(y), (O.current = !1), (f && !(0, s.Go)(S.current)) || (w(T.current) > 0 && !L(A.current, "open"))))
                return;
            let t = L(A.current, "open", S.current);
            t
                ? (y.current = window.setTimeout(() => {
                      I.current || r(!0, e, "hover");
                  }, t))
                : n || r(!0, e, "hover");
        }
        function t(e) {
            if (V()) return void F();
            x.current();
            let t = (0, s.YE)(u.floating);
            if ((b(N), (P.current = !1), g.current && a.current.floatingContext)) {
                n || b(y),
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
                    (x.current = () => {
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
            b(y);
        }
        function d(e) {
            V() || U(e, !1);
        }
    }, [u, c, e, f, h, U, G, F, r, n, I, m, A, g, a, V, T]),
        (0, s.OS)(() => {
            var e, t;
            if (c && n && null != (e = g.current) && null != (e = e.__options) && e.blockPointerEvents && k()) {
                M.current = !0;
                let e = u.floating;
                if ((0, o.vq)(u.domReference) && e) {
                    let n = (0, s.YE)(u.floating).body;
                    n.setAttribute(D, "");
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
        }, [c, n, E, u, m, g, k]),
        (0, s.OS)(() => {
            n || ((S.current = void 0), (P.current = !1), G(), F());
        }, [n, G, F]),
        i.useEffect(
            () => () => {
                G(), b(y), b(N), F();
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
                    O.current || I.current || r(!0, t, "hover");
                }
                (f && !(0, s.Go)(S.current)) ||
                    n ||
                    0 === w(T.current) ||
                    (P.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                    (b(N),
                    "touch" === S.current ? i() : ((P.current = !0), (N.current = window.setTimeout(i, w(T.current)))));
            },
        };
    }, [f, r, n, I, T]);
    return i.useMemo(() => (c ? { reference: B } : {}), [c, B]);
}
let x = null,
    P = 0;
function k(e, t) {
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
function U(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function G(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
let F = { inert: new WeakMap(), "aria-hidden": new WeakMap(), none: new WeakMap() };
function V(e) {
    return "inert" === e ? F.inert : "aria-hidden" === e ? F["aria-hidden"] : F.none;
}
let B = new WeakSet(),
    H = null,
    j = 0,
    Y = (e) => e && (e.host || Y(e.parentNode)),
    W = (e, t) =>
        t
            .map((t) => {
                if (e.contains(t)) return t;
                let n = Y(t);
                return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
function K(e, t, n, r) {
    let i = "data-floating-ui-inert",
        s = r ? "inert" : n ? "aria-hidden" : null,
        a = W(t, e),
        o = new Set(),
        l = new Set(a),
        u = [];
    H[i] || (H[i] = new WeakMap());
    let c = H[i];
    function d(e) {
        !(!e || o.has(e)) && (o.add(e), e.parentNode && d(e.parentNode));
    }
    function _(e) {
        !e ||
            l.has(e) ||
            [].forEach.call(e.children, (e) => {
                if ("script" !== getNodeName(e))
                    if (o.has(e)) _(e);
                    else {
                        let t = s ? e.getAttribute(s) : null,
                            n = null !== t && "false" !== t,
                            r = V(s),
                            a = (r.get(e) || 0) + 1,
                            o = (c.get(e) || 0) + 1;
                        r.set(e, a),
                            c.set(e, o),
                            u.push(e),
                            1 === a && n && B.add(e),
                            1 === o && e.setAttribute(i, ""),
                            !n && s && e.setAttribute(s, "inert" === s ? "" : "true");
                    }
            });
    }
    return (
        a.forEach(d),
        _(t),
        o.clear(),
        j++,
        () => {
            u.forEach((e) => {
                let t = V(s),
                    n = (t.get(e) || 0) - 1,
                    r = (c.get(e) || 0) - 1;
                t.set(e, n),
                    c.set(e, r),
                    n || (!B.has(e) && s && e.removeAttribute(s), B.delete(e)),
                    r || e.removeAttribute(i);
            }),
                --j ||
                    ((F.inert = new WeakMap()),
                    (F["aria-hidden"] = new WeakMap()),
                    (F.none = new WeakMap()),
                    (B = new WeakSet()),
                    (H = {}));
        }
    );
}
let $ = {
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
    z = i.forwardRef(function (e, t) {
        let [n, r] = i.useState();
        (0, s.OS)(() => {
            (0, s.nr)() && r("button");
        }, []);
        let o = { ref: t, tabIndex: 0, role: n, "aria-hidden": !n || void 0, [O("focus-guard")]: "", style: $ };
        return (0, a.jsx)("span", { ...e, ...o });
    }),
    q = i.createContext(null),
    Z = O("portal");
function X(e) {
    void 0 === e && (e = {});
    let { id: t, root: n } = e,
        r = S(),
        a = J(),
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
            (n.id = r), n.setAttribute(Z, ""), e.appendChild(n), (c.current = n), u(n);
        }, [t, r]),
        (0, s.OS)(() => {
            if (null === n || !r || c.current) return;
            let e = n || (null == a ? void 0 : a.portalNode);
            e && !(0, o.Ll)(e) && (e = e.current), (e = e || document.body);
            let i = null;
            t && (((i = document.createElement("div")).id = t), e.appendChild(i));
            let s = document.createElement("div");
            (s.id = r), s.setAttribute(Z, ""), (e = i || e).appendChild(s), (c.current = s), u(s);
        }, [t, n, r, a]),
        l
    );
}
function Q(e) {
    let { children: t, id: n, root: r, preserveTabOrder: o = !0 } = e,
        u = X({ id: n, root: r }),
        [c, d] = i.useState(null),
        _ = i.useRef(null),
        f = i.useRef(null),
        p = i.useRef(null),
        h = i.useRef(null),
        m = null == c ? void 0 : c.modal,
        E = null == c ? void 0 : c.open,
        g = !!c && !c.modal && c.open && o && !!(r || u);
    return (
        i.useEffect(() => {
            if (u && o && !m)
                return (
                    u.addEventListener("focusin", e, !0),
                    u.addEventListener("focusout", e, !0),
                    () => {
                        u.removeEventListener("focusin", e, !0), u.removeEventListener("focusout", e, !0);
                    }
                );
            function e(e) {
                u && (0, s.Qp)(e) && ("focusin" === e.type ? s.yV : s.N)(u);
            }
        }, [u, o, m]),
        i.useEffect(() => {
            !u || E || (0, s.yV)(u);
        }, [E, u]),
        (0, a.jsxs)(q.Provider, {
            value: i.useMemo(
                () => ({
                    preserveTabOrder: o,
                    beforeOutsideRef: _,
                    afterOutsideRef: f,
                    beforeInsideRef: p,
                    afterInsideRef: h,
                    portalNode: u,
                    setFocusManagerState: d,
                }),
                [o, u],
            ),
            children: [
                g &&
                    u &&
                    (0, a.jsx)(z, {
                        "data-type": "outside",
                        ref: _,
                        onFocus: (e) => {
                            if ((0, s.Qp)(e, u)) {
                                var t;
                                null == (t = p.current) || t.focus();
                            } else {
                                let e = c ? c.domReference : null,
                                    t = (0, s.XJ)(e);
                                null == t || t.focus();
                            }
                        },
                    }),
                g && u && (0, a.jsx)("span", { "aria-owns": u.id, style: $ }),
                u && l.createPortal(t, u),
                g &&
                    u &&
                    (0, a.jsx)(z, {
                        "data-type": "outside",
                        ref: f,
                        onFocus: (e) => {
                            if ((0, s.Qp)(e, u)) {
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
let J = () => i.useContext(q),
    ee = 20,
    et = null;
function en() {
    et = et.filter((e) => e.isConnected);
}
let er = 0,
    ei = "--floating-ui-scrollbar-width";
function es() {
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
    if (((n.overflow = "hidden"), n.setProperty(ei, i + "px"), i && (n[r] = i + "px"), t)) {
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
            n.removeProperty(ei),
            t && (Object.assign(n, { position: "", top: "", left: "", right: "" }), window.scrollTo(a, o));
    };
}
let ea = () => {},
    eo = i.forwardRef(function (e, t) {
        let { lockScroll: n = !1, ...r } = e;
        return (
            (0, s.OS)(() => {
                if (n)
                    return (
                        1 == ++er && (ea = es()),
                        () => {
                            0 == --er && ea();
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
    el = { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
    eu = { pointerdown: "onPointerDownCapture", mousedown: "onMouseDownCapture", click: "onClickCapture" },
    ec = (e) => {
        var t, n;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
    };
function ed(e, t) {
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
        g = R(),
        A = (0, s.Jt)("function" == typeof d ? d : () => !1),
        I = "function" == typeof d ? A : d,
        T = i.useRef(!1),
        { escapeKey: S, outsidePress: y } = ec(m),
        { escapeKey: v, outsidePress: N } = ec(E),
        C = i.useRef(!1),
        b = (0, s.Jt)((e) => {
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
        D = (0, s.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                b(e), null == (t = (0, s.EW)(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = (0, s.EW)(e)) || t.addEventListener("keydown", n);
        }),
        L = (0, s.Jt)((e) => {
            var t;
            let n = l.current.insideReactTree;
            l.current.insideReactTree = !1;
            let i = T.current;
            if (((T.current = !1), ("click" === _ && i) || n || ("function" == typeof I && !I(e)))) return;
            let u = (0, s.EW)(e),
                c = "[" + O("inert") + "]",
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
            if ((0, o.sb)(u) && x) {
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
        w = (0, s.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                L(e), null == (t = (0, s.EW)(e)) || t.removeEventListener(_, n);
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
            (f.addEventListener("keydown", v ? D : b, v),
            f.addEventListener("compositionstart", i),
            f.addEventListener("compositionend", d)),
            I && f.addEventListener(_, N ? w : L, N);
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
                    (f.removeEventListener("keydown", v ? D : b, v),
                    f.removeEventListener("compositionstart", i),
                    f.removeEventListener("compositionend", d)),
                    I && f.removeEventListener(_, N ? w : L, N),
                    p.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, a, c, I, _, n, r, h, u, S, y, b, v, D, L, N, w]),
        i.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, I, _]);
    let M = i.useMemo(
            () => ({
                onKeyDown: b,
                ...(f && {
                    [el[p]]: (e) => {
                        r(!1, e.nativeEvent, "reference-press");
                    },
                    ...("click" !== p && {
                        onClick(e) {
                            r(!1, e.nativeEvent, "reference-press");
                        },
                    }),
                }),
            }),
            [b, r, f, p],
        ),
        x = i.useMemo(
            () => ({
                onKeyDown: b,
                onMouseDown() {
                    T.current = !0;
                },
                onMouseUp() {
                    T.current = !0;
                },
                [eu[_]]: () => {
                    l.current.insideReactTree = !0;
                },
            }),
            [b, _, l],
        );
    return i.useMemo(() => (u ? { reference: M, floating: x } : {}), [u, M, x]);
}
function e_(e) {
    let { open: t = !1, onOpenChange: n, elements: r } = e,
        a = S(),
        o = i.useRef({}),
        [l] = i.useState(() => y()),
        u = null != C(),
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
function ef(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        n = e_({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
        r = e.rootContext || n,
        a = r.elements,
        [l, c] = i.useState(null),
        [d, _] = i.useState(null),
        f = (null == a ? void 0 : a.domReference) || l,
        p = i.useRef(null),
        h = R();
    (0, s.OS)(() => {
        f && (p.current = f);
    }, [f]);
    let m = (0, u.we)({ ...e, elements: { ...a, ...(d && { reference: d }) } }),
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
                ((0, o.vq)(e) || null === e) && ((p.current = e), c(e)),
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
function ep(e, t, n) {
    let r = new Map(),
        i = "item" === n,
        s = e;
    if (i && e) {
        let { [d]: t, [_]: n, ...r } = e;
        s = r;
    }
    return {
        ...("floating" === n && { tabIndex: -1, [c]: "" }),
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
                            if (!(i && [d, _].includes(n)))
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
function eh(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        n = e.map((e) => (null == e ? void 0 : e.floating)),
        r = e.map((e) => (null == e ? void 0 : e.item)),
        s = i.useCallback((t) => ep(t, e, "reference"), t),
        a = i.useCallback((t) => ep(t, e, "floating"), n),
        o = i.useCallback((t) => ep(t, e, "item"), r);
    return i.useMemo(() => ({ getReferenceProps: s, getFloatingProps: a, getItemProps: o }), [s, a, o]);
}
let em = "Escape";
function eE(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n;
    }
}
let eg = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function eA(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function eI(e, t) {
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
function eT(e, t) {
    void 0 === t && (t = {});
    let {
            open: n,
            elements: { floating: r },
        } = e,
        { duration: a = 250 } = t,
        o = ("number" == typeof a ? a : a.close) || 0,
        [u, c] = i.useState("unmounted"),
        d = eI(n, o);
    return (
        d || "close" !== u || c("unmounted"),
        (0, s.OS)(() => {
            if (r) {
                if (n) {
                    c("initial");
                    let e = requestAnimationFrame(() => {
                        l.flushSync(() => {
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
        { isMounted: d, status: u }
    );
}
function eS(e, t) {
    void 0 === t && (t = {});
    let { initial: n = { opacity: 0 }, open: r, close: a, common: o, duration: l = 250 } = t,
        u = e.placement,
        c = u.split("-")[0],
        d = i.useMemo(() => ({ side: c, placement: u }), [c, u]),
        _ = "number" == typeof l,
        f = (_ ? l : l.open) || 0,
        p = (_ ? l : l.close) || 0,
        [h, m] = i.useState(() => ({ ...eA(o, d), ...eA(n, d) })),
        { isMounted: E, status: g } = eT(e, { duration: l }),
        A = (0, s.SE)(n),
        I = (0, s.SE)(r),
        T = (0, s.SE)(a),
        S = (0, s.SE)(o);
    return (
        (0, s.OS)(() => {
            let e = eA(A.current, d),
                t = eA(T.current, d),
                n = eA(S.current, d),
                r = eA(I.current, d) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
            if (
                ("initial" === g && m((t) => ({ transitionProperty: t.transitionProperty, ...n, ...e })),
                "open" === g &&
                    m({
                        transitionProperty: Object.keys(r).map(eg).join(","),
                        transitionDuration: f + "ms",
                        ...n,
                        ...r,
                    }),
                "close" === g)
            ) {
                let r = t || e;
                m({ transitionProperty: Object.keys(r).map(eg).join(","), transitionDuration: p + "ms", ...n, ...r });
            }
        }, [p, T, A, I, S, f, g, d]),
        { isMounted: E, styles: h }
    );
}
function ey(e, t, n) {
    return (
        void 0 === n && (n = !0),
        e
            .filter((e) => {
                var r;
                return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
            })
            .flatMap((t) => [t, ...ey(e, t.id, n)])
    );
}
function ev(e, t) {
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
function eN(e, t) {
    return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function eC(e) {
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
                b(i), d();
            }
            if ((b(i), !u.domReference || !u.floating || null == l || null == n || null == a)) return;
            let { clientX: h, clientY: m } = e,
                E = [h, m],
                g = U(e),
                A = "mouseleave" === e.type,
                I = k(u.floating, g),
                T = k(u.domReference, g),
                S = u.domReference.getBoundingClientRect(),
                y = u.floating.getBoundingClientRect(),
                v = l.split("-")[0],
                N = n > y.right - y.width / 2,
                C = a > y.bottom - y.height / 2,
                R = eN(E, S),
                O = y.width > S.width,
                D = y.height > S.height,
                L = (O ? S : y).left,
                w = (O ? S : y).right,
                M = (D ? S : y).top,
                x = (D ? S : y).bottom;
            if (I && ((s = !0), !A)) return;
            if ((T && (s = !1), T && !A)) {
                s = !0;
                return;
            }
            if (
                (A && (0, o.vq)(e.relatedTarget) && k(u.floating, e.relatedTarget)) ||
                (f && ey(f.nodesRef.current, _).length)
            )
                return;
            if (
                ("top" === v && a >= S.bottom - 1) ||
                ("bottom" === v && a <= S.top + 1) ||
                ("left" === v && n >= S.right - 1) ||
                ("right" === v && n <= S.left + 1)
            )
                return p();
            let P = [];
            switch (v) {
                case "top":
                    P = [
                        [L, S.top + 1],
                        [L, y.bottom - 1],
                        [w, y.bottom - 1],
                        [w, S.top + 1],
                    ];
                    break;
                case "bottom":
                    P = [
                        [L, y.top + 1],
                        [L, S.bottom - 1],
                        [w, S.bottom - 1],
                        [w, y.top + 1],
                    ];
                    break;
                case "left":
                    P = [
                        [y.right - 1, x],
                        [y.right - 1, M],
                        [S.left + 1, M],
                        [S.left + 1, x],
                    ];
                    break;
                case "right":
                    P = [
                        [S.right - 1, x],
                        [S.right - 1, M],
                        [y.left + 1, M],
                        [y.left + 1, x],
                    ];
            }
            function G(e) {
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
                        let e = [n + t + 1, D ? r + t / 2 : C ? r + 4 * t : r - 4 * t],
                            i = [n + t + 1, D ? r - t / 2 : C ? r + 4 * t : r - 4 * t];
                        return [
                            [C || D ? y.right - t : y.left, y.top],
                            [C ? (D ? y.right - t : y.left) : y.right - t, y.bottom],
                            e,
                            i,
                        ];
                    }
                    case "right":
                        return [
                            [n - t, D ? r + t / 2 : C ? r + 4 * t : r - 4 * t],
                            [n - t, D ? r - t / 2 : C ? r + 4 * t : r - 4 * t],
                            [C || D ? y.left + t : y.right, y.top],
                            [C ? (D ? y.left + t : y.right) : y.left + t, y.bottom],
                        ];
                }
            }
            if (!ev([h, m], P)) {
                if (s && !R) return p();
                if (!A && r) {
                    let t = c(e.clientX, e.clientY),
                        n = 0.1;
                    if (null !== t && t < n) return p();
                }
                ev([h, m], G([n, a])) ? !s && r && (i.current = window.setTimeout(p, 40)) : p();
            }
        };
    };
    return (d.__options = { blockPointerEvents: n }), d;
}
