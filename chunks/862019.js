"use strict";
n.d(t, {
    DL: () => eS,
    Mk: () => P,
    XF: () => J,
    bv: () => em,
    iB: () => eN,
    s9: () => e_,
    we: () => eh,
    zR: () => el,
});
var r,
    i = n(64700),
    a = n(357786),
    s = n(627968),
    o = n(84157),
    l = n(340287),
    u = n(879821);
let c = "data-floating-ui-focusable",
    d = "active",
    _ = "selected",
    f = "ArrowLeft",
    h = "ArrowRight",
    p = "ArrowUp",
    g = "ArrowDown",
    E = { ...(r || (r = n.t(i, 2))) },
    A = !1,
    I = 0,
    T = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + I++;
function y() {
    let [e, t] = i.useState(() => (A ? T() : void 0));
    return (
        (0, a.OS)(() => {
            null == e && t(T());
        }, []),
        i.useEffect(() => {
            A = !0;
        }, []),
        e
    );
}
let S = E.useId || y;
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
let C = i.createContext(null),
    b = i.createContext(null),
    N = () => {
        var e;
        return (null == (e = i.useContext(C)) ? void 0 : e.id) || null;
    },
    R = () => i.useContext(b);
function O(e) {
    return "data-floating-ui-" + e;
}
function D(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
}
let L = O("safe-polygon");
function w(e, t, n) {
    if (n && !(0, a.Go)(n)) return 0;
    if ("number" == typeof e) return e;
    if ("function" == typeof e) {
        let n = e();
        return "number" == typeof n ? n : null == n ? void 0 : n[t];
    }
    return null == e ? void 0 : e[t];
}
function x(e) {
    return "function" == typeof e ? e() : e;
}
function P(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, dataRef: s, events: l, elements: u } = e,
        { enabled: c = !0, delay: d = 0, handleClose: _ = null, mouseOnly: f = !1, restMs: h = 0, move: p = !0 } = t,
        g = R(),
        E = N(),
        A = (0, a.SE)(_),
        I = (0, a.SE)(d),
        T = (0, a.SE)(n),
        y = (0, a.SE)(h),
        S = i.useRef(),
        v = i.useRef(-1),
        C = i.useRef(),
        b = i.useRef(-1),
        O = i.useRef(!0),
        P = i.useRef(!1),
        M = i.useRef(() => {}),
        k = i.useRef(!1),
        U = (0, a.Jt)(() => {
            var e;
            let t = null == (e = s.current.openEvent) ? void 0 : e.type;
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
            t || (D(v), D(b), (O.current = !0), (k.current = !1));
        }
    }, [c, l]),
        i.useEffect(() => {
            if (!c || !A.current || !n) return;
            function e(e) {
                U() && r(!1, e, "hover");
            }
            let t = (0, a.YE)(u.floating).documentElement;
            return (
                t.addEventListener("mouseleave", e),
                () => {
                    t.removeEventListener("mouseleave", e);
                }
            );
        }, [u.floating, n, r, c, A, U]);
    let G = i.useCallback(
            function (e, t, n) {
                void 0 === t && (t = !0), void 0 === n && (n = "hover");
                let i = w(I.current, "close", S.current);
                i && !C.current
                    ? (D(v), (v.current = window.setTimeout(() => r(!1, e, n), i)))
                    : t && (D(v), r(!1, e, n));
            },
            [I, r],
        ),
        F = (0, a.Jt)(() => {
            M.current(), (C.current = void 0);
        }),
        V = (0, a.Jt)(() => {
            if (P.current) {
                let e = (0, a.YE)(u.floating).body;
                (e.style.pointerEvents = ""), e.removeAttribute(L), (P.current = !1);
            }
        }),
        B = (0, a.Jt)(() => !!s.current.openEvent && ["click", "mousedown"].includes(s.current.openEvent.type));
    i.useEffect(() => {
        if (c && (0, o.vq)(u.domReference)) {
            let r = u.domReference,
                a = u.floating;
            return (
                n && r.addEventListener("mouseleave", i),
                p && r.addEventListener("mousemove", e, { once: !0 }),
                r.addEventListener("mouseenter", e),
                r.addEventListener("mouseleave", t),
                a &&
                    (a.addEventListener("mouseleave", i),
                    a.addEventListener("mouseenter", l),
                    a.addEventListener("mouseleave", d)),
                () => {
                    n && r.removeEventListener("mouseleave", i),
                        p && r.removeEventListener("mousemove", e),
                        r.removeEventListener("mouseenter", e),
                        r.removeEventListener("mouseleave", t),
                        a &&
                            (a.removeEventListener("mouseleave", i),
                            a.removeEventListener("mouseenter", l),
                            a.removeEventListener("mouseleave", d));
                }
            );
        }
        function e(e) {
            if ((D(v), (O.current = !1), (f && !(0, a.Go)(S.current)) || (x(y.current) > 0 && !w(I.current, "open"))))
                return;
            let t = w(I.current, "open", S.current);
            t
                ? (v.current = window.setTimeout(() => {
                      T.current || r(!0, e, "hover");
                  }, t))
                : n || r(!0, e, "hover");
        }
        function t(e) {
            if (B()) return void V();
            M.current();
            let t = (0, a.YE)(u.floating);
            if ((D(b), (k.current = !1), A.current && s.current.floatingContext)) {
                n || D(v),
                    (C.current = A.current({
                        ...s.current.floatingContext,
                        tree: g,
                        x: e.clientX,
                        y: e.clientY,
                        onClose() {
                            V(), F(), B() || G(e, !0, "safe-polygon");
                        },
                    }));
                let r = C.current;
                t.addEventListener("mousemove", r),
                    (M.current = () => {
                        t.removeEventListener("mousemove", r);
                    });
                return;
            }
            ("touch" === S.current && (0, a.gR)(u.floating, e.relatedTarget)) || G(e);
        }
        function i(e) {
            B() ||
                (s.current.floatingContext &&
                    (null == A.current ||
                        A.current({
                            ...s.current.floatingContext,
                            tree: g,
                            x: e.clientX,
                            y: e.clientY,
                            onClose() {
                                V(), F(), B() || G(e);
                            },
                        })(e)));
        }
        function l() {
            D(v);
        }
        function d(e) {
            B() || G(e, !1);
        }
    }, [u, c, e, f, p, G, F, V, r, n, T, g, I, A, s, B, y]),
        (0, a.OS)(() => {
            var e, t;
            if (c && n && null != (e = A.current) && null != (e = e.__options) && e.blockPointerEvents && U()) {
                P.current = !0;
                let e = u.floating;
                if ((0, o.vq)(u.domReference) && e) {
                    let n = (0, a.YE)(u.floating).body;
                    n.setAttribute(L, "");
                    let r = u.domReference,
                        i =
                            null == g ||
                            null == (t = g.nodesRef.current.find((e) => e.id === E)) ||
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
        }, [c, n, E, u, g, A, U]),
        (0, a.OS)(() => {
            n || ((S.current = void 0), (k.current = !1), F(), V());
        }, [n, F, V]),
        i.useEffect(
            () => () => {
                F(), D(v), D(b), V();
            },
            [c, u.domReference, F, V],
        );
    let j = i.useMemo(() => {
        function e(e) {
            S.current = e.pointerType;
        }
        return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove(e) {
                let { nativeEvent: t } = e;
                function i() {
                    O.current || T.current || r(!0, t, "hover");
                }
                (f && !(0, a.Go)(S.current)) ||
                    n ||
                    0 === x(y.current) ||
                    (k.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                    (D(b),
                    "touch" === S.current ? i() : ((k.current = !0), (b.current = window.setTimeout(i, x(y.current)))));
            },
        };
    }, [f, r, n, T, y]);
    return i.useMemo(() => (c ? { reference: j } : {}), [c, j]);
}
let M = null,
    k = 0;
function U(e, t) {
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
function G(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function F(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
let V = { inert: new WeakMap(), "aria-hidden": new WeakMap(), none: new WeakMap() };
function B(e) {
    return "inert" === e ? V.inert : "aria-hidden" === e ? V["aria-hidden"] : V.none;
}
let j = new WeakSet(),
    H = null,
    Y = 0,
    W = (e) => e && (e.host || W(e.parentNode)),
    K = (e, t) =>
        t
            .map((t) => {
                if (e.contains(t)) return t;
                let n = W(t);
                return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
function $(e, t, n, r) {
    let i = "data-floating-ui-inert",
        a = r ? "inert" : n ? "aria-hidden" : null,
        s = K(t, e),
        o = new Set(),
        l = new Set(s),
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
                        let t = a ? e.getAttribute(a) : null,
                            n = null !== t && "false" !== t,
                            r = B(a),
                            s = (r.get(e) || 0) + 1,
                            o = (c.get(e) || 0) + 1;
                        r.set(e, s),
                            c.set(e, o),
                            u.push(e),
                            1 === s && n && j.add(e),
                            1 === o && e.setAttribute(i, ""),
                            !n && a && e.setAttribute(a, "inert" === a ? "" : "true");
                    }
            });
    }
    return (
        s.forEach(d),
        _(t),
        o.clear(),
        Y++,
        () => {
            u.forEach((e) => {
                let t = B(a),
                    n = (t.get(e) || 0) - 1,
                    r = (c.get(e) || 0) - 1;
                t.set(e, n),
                    c.set(e, r),
                    n || (!j.has(e) && a && e.removeAttribute(a), j.delete(e)),
                    r || e.removeAttribute(i);
            }),
                --Y ||
                    ((V.inert = new WeakMap()),
                    (V["aria-hidden"] = new WeakMap()),
                    (V.none = new WeakMap()),
                    (j = new WeakSet()),
                    (H = {}));
        }
    );
}
let z = {
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
    q = i.forwardRef(function (e, t) {
        let [n, r] = i.useState();
        (0, a.OS)(() => {
            (0, a.nr)() && r("button");
        }, []);
        let o = { ref: t, tabIndex: 0, role: n, "aria-hidden": !n || void 0, [O("focus-guard")]: "", style: z };
        return (0, s.jsx)("span", { ...e, ...o });
    }),
    X = i.createContext(null),
    Z = O("portal");
function Q(e) {
    void 0 === e && (e = {});
    let { id: t, root: n } = e,
        r = S(),
        s = ee(),
        [l, u] = i.useState(null),
        c = i.useRef(null);
    return (
        (0, a.OS)(
            () => () => {
                null == l || l.remove(),
                    queueMicrotask(() => {
                        c.current = null;
                    });
            },
            [l],
        ),
        (0, a.OS)(() => {
            if (!r || c.current) return;
            let e = t ? document.getElementById(t) : null;
            if (!e) return;
            let n = document.createElement("div");
            (n.id = r), n.setAttribute(Z, ""), e.appendChild(n), (c.current = n), u(n);
        }, [t, r]),
        (0, a.OS)(() => {
            if (null === n || !r || c.current) return;
            let e = n || (null == s ? void 0 : s.portalNode);
            e && !(0, o.Ll)(e) && (e = e.current), (e = e || document.body);
            let i = null;
            t && (((i = document.createElement("div")).id = t), e.appendChild(i));
            let a = document.createElement("div");
            (a.id = r), a.setAttribute(Z, ""), (e = i || e).appendChild(a), (c.current = a), u(a);
        }, [t, n, r, s]),
        l
    );
}
function J(e) {
    let { children: t, id: n, root: r, preserveTabOrder: o = !0 } = e,
        u = Q({ id: n, root: r }),
        [c, d] = i.useState(null),
        _ = i.useRef(null),
        f = i.useRef(null),
        h = i.useRef(null),
        p = i.useRef(null),
        g = null == c ? void 0 : c.modal,
        E = null == c ? void 0 : c.open,
        A = !!c && !c.modal && c.open && o && !!(r || u);
    return (
        i.useEffect(() => {
            if (u && o && !g)
                return (
                    u.addEventListener("focusin", e, !0),
                    u.addEventListener("focusout", e, !0),
                    () => {
                        u.removeEventListener("focusin", e, !0), u.removeEventListener("focusout", e, !0);
                    }
                );
            function e(e) {
                u && (0, a.Qp)(e) && ("focusin" === e.type ? a.yV : a.N)(u);
            }
        }, [u, o, g]),
        i.useEffect(() => {
            !u || E || (0, a.yV)(u);
        }, [E, u]),
        (0, s.jsxs)(X.Provider, {
            value: i.useMemo(
                () => ({
                    preserveTabOrder: o,
                    beforeOutsideRef: _,
                    afterOutsideRef: f,
                    beforeInsideRef: h,
                    afterInsideRef: p,
                    portalNode: u,
                    setFocusManagerState: d,
                }),
                [o, u],
            ),
            children: [
                A &&
                    u &&
                    (0, s.jsx)(q, {
                        "data-type": "outside",
                        ref: _,
                        onFocus: (e) => {
                            if ((0, a.Qp)(e, u)) {
                                var t;
                                null == (t = h.current) || t.focus();
                            } else {
                                let e = c ? c.domReference : null,
                                    t = (0, a.XJ)(e);
                                null == t || t.focus();
                            }
                        },
                    }),
                A && u && (0, s.jsx)("span", { "aria-owns": u.id, style: z }),
                u && l.createPortal(t, u),
                A &&
                    u &&
                    (0, s.jsx)(q, {
                        "data-type": "outside",
                        ref: f,
                        onFocus: (e) => {
                            if ((0, a.Qp)(e, u)) {
                                var t;
                                null == (t = p.current) || t.focus();
                            } else {
                                let t = c ? c.domReference : null,
                                    n = (0, a.vF)(t);
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
let ee = () => i.useContext(X),
    et = 20,
    en = null;
function er() {
    en = en.filter((e) => e.isConnected);
}
let ei = 0,
    ea = "--floating-ui-scrollbar-width";
function es() {
    let e = (0, a.uo)(),
        t = /iP(hone|ad|od)|iOS/.test(e) || ("MacIntel" === e && navigator.maxTouchPoints > 1),
        n = document.body.style,
        r =
            Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft
                ? "paddingLeft"
                : "paddingRight",
        i = window.innerWidth - document.documentElement.clientWidth,
        s = n.left ? parseFloat(n.left) : window.scrollX,
        o = n.top ? parseFloat(n.top) : window.scrollY;
    if (((n.overflow = "hidden"), n.setProperty(ea, i + "px"), i && (n[r] = i + "px"), t)) {
        var l, u;
        let e = (null == (l = window.visualViewport) ? void 0 : l.offsetLeft) || 0;
        Object.assign(n, {
            position: "fixed",
            top: -(o - Math.floor((null == (u = window.visualViewport) ? void 0 : u.offsetTop) || 0)) + "px",
            left: -(s - Math.floor(e)) + "px",
            right: "0",
        });
    }
    return () => {
        Object.assign(n, { overflow: "", [r]: "" }),
            n.removeProperty(ea),
            t && (Object.assign(n, { position: "", top: "", left: "", right: "" }), window.scrollTo(s, o));
    };
}
let eo = () => {},
    el = i.forwardRef(function (e, t) {
        let { lockScroll: n = !1, ...r } = e;
        return (
            (0, a.OS)(() => {
                if (n)
                    return (
                        1 == ++ei && (eo = es()),
                        () => {
                            0 == --ei && eo();
                        }
                    );
            }, [n]),
            (0, s.jsx)("div", {
                ref: t,
                ...r,
                style: { position: "fixed", overflow: "auto", top: 0, right: 0, bottom: 0, left: 0, ...r.style },
            })
        );
    }),
    eu = { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
    ec = { pointerdown: "onPointerDownCapture", mousedown: "onMouseDownCapture", click: "onClickCapture" },
    ed = (e) => {
        var t, n;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
    };
function e_(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, elements: s, dataRef: l } = e,
        {
            enabled: u = !0,
            escapeKey: c = !0,
            outsidePress: d = !0,
            outsidePressEvent: _ = "pointerdown",
            referencePress: f = !1,
            referencePressEvent: h = "pointerdown",
            ancestorScroll: p = !1,
            bubbles: g,
            capture: E,
        } = t,
        A = R(),
        I = (0, a.Jt)("function" == typeof d ? d : () => !1),
        T = "function" == typeof d ? I : d,
        y = i.useRef(!1),
        { escapeKey: S, outsidePress: v } = ed(g),
        { escapeKey: C, outsidePress: b } = ed(E),
        N = i.useRef(!1),
        D = (0, a.Jt)((e) => {
            var t;
            if (!n || !u || !c || "Escape" !== e.key || N.current) return;
            let i = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                s = A ? (0, a.CM)(A.nodesRef.current, i) : [];
            if (!S && (e.stopPropagation(), s.length > 0)) {
                let e = !0;
                if (
                    (s.forEach((t) => {
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
            r(!1, (0, a.O_)(e) ? e.nativeEvent : e, "escape-key");
        }),
        L = (0, a.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                D(e), null == (t = (0, a.EW)(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = (0, a.EW)(e)) || t.addEventListener("keydown", n);
        }),
        w = (0, a.Jt)((e) => {
            var t;
            let n = l.current.insideReactTree;
            l.current.insideReactTree = !1;
            let i = y.current;
            if (((y.current = !1), ("click" === _ && i) || n || ("function" == typeof T && !T(e)))) return;
            let u = (0, a.EW)(e),
                c = "[" + O("inert") + "]",
                d = (0, a.YE)(s.floating).querySelectorAll(c),
                f = (0, o.vq)(u) ? u : null;
            for (; f && !(0, o.eu)(f); ) {
                let e = (0, o.$4)(f);
                if ((0, o.eu)(e) || !(0, o.vq)(e)) break;
                f = e;
            }
            if (
                d.length &&
                (0, o.vq)(u) &&
                !(0, a.tZ)(u) &&
                !(0, a.gR)(u, s.floating) &&
                Array.from(d).every((e) => !(0, a.gR)(f, e))
            )
                return;
            if ((0, o.sb)(u) && M) {
                let t = (0, o.eu)(u),
                    n = (0, o.L9)(u),
                    r = /auto|scroll/,
                    i = t || r.test(n.overflowX),
                    a = t || r.test(n.overflowY),
                    s = i && u.clientWidth > 0 && u.scrollWidth > u.clientWidth,
                    l = a && u.clientHeight > 0 && u.scrollHeight > u.clientHeight,
                    c = "rtl" === n.direction,
                    d = l && (c ? e.offsetX <= u.offsetWidth - u.clientWidth : e.offsetX > u.clientWidth),
                    _ = s && e.offsetY > u.clientHeight;
                if (d || _) return;
            }
            let h = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                p =
                    A &&
                    (0, a.CM)(A.nodesRef.current, h).some((t) => {
                        var n;
                        return (0, a.F2)(e, null == (n = t.context) ? void 0 : n.elements.floating);
                    });
            if ((0, a.F2)(e, s.floating) || (0, a.F2)(e, s.domReference) || p) return;
            let g = A ? (0, a.CM)(A.nodesRef.current, h) : [];
            if (g.length > 0) {
                let e = !0;
                if (
                    (g.forEach((t) => {
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
        x = (0, a.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                w(e), null == (t = (0, a.EW)(e)) || t.removeEventListener(_, n);
            };
            null == (t = (0, a.EW)(e)) || t.addEventListener(_, n);
        });
    i.useEffect(() => {
        if (!n || !u) return;
        (l.current.__escapeKeyBubbles = S), (l.current.__outsidePressBubbles = v);
        let e = -1;
        function t(e) {
            r(!1, e, "ancestor-scroll");
        }
        function i() {
            window.clearTimeout(e), (N.current = !0);
        }
        function d() {
            e = window.setTimeout(
                () => {
                    N.current = !1;
                },
                5 * !!(0, o.Tc)(),
            );
        }
        let f = (0, a.YE)(s.floating);
        c &&
            (f.addEventListener("keydown", C ? L : D, C),
            f.addEventListener("compositionstart", i),
            f.addEventListener("compositionend", d)),
            T && f.addEventListener(_, b ? x : w, b);
        let h = [];
        return (
            p &&
                ((0, o.vq)(s.domReference) && (h = (0, o.v9)(s.domReference)),
                (0, o.vq)(s.floating) && (h = h.concat((0, o.v9)(s.floating))),
                !(0, o.vq)(s.reference) &&
                    s.reference &&
                    s.reference.contextElement &&
                    (h = h.concat((0, o.v9)(s.reference.contextElement)))),
            (h = h.filter((e) => {
                var t;
                return e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport);
            })).forEach((e) => {
                e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
                c &&
                    (f.removeEventListener("keydown", C ? L : D, C),
                    f.removeEventListener("compositionstart", i),
                    f.removeEventListener("compositionend", d)),
                    T && f.removeEventListener(_, b ? x : w, b),
                    h.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, s, c, T, _, n, r, p, u, S, v, D, C, L, w, b, x]),
        i.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, T, _]);
    let P = i.useMemo(
            () => ({
                onKeyDown: D,
                ...(f && {
                    [eu[h]]: (e) => {
                        r(!1, e.nativeEvent, "reference-press");
                    },
                    ...("click" !== h && {
                        onClick(e) {
                            r(!1, e.nativeEvent, "reference-press");
                        },
                    }),
                }),
            }),
            [D, r, f, h],
        ),
        M = i.useMemo(
            () => ({
                onKeyDown: D,
                onMouseDown() {
                    y.current = !0;
                },
                onMouseUp() {
                    y.current = !0;
                },
                [ec[_]]: () => {
                    l.current.insideReactTree = !0;
                },
            }),
            [D, _, l],
        );
    return i.useMemo(() => (u ? { reference: P, floating: M } : {}), [u, P, M]);
}
function ef(e) {
    let { open: t = !1, onOpenChange: n, elements: r } = e,
        s = S(),
        o = i.useRef({}),
        [l] = i.useState(() => v()),
        u = null != N(),
        [c, d] = i.useState(r.reference),
        _ = (0, a.Jt)((e, t, r) => {
            (o.current.openEvent = e ? t : void 0),
                l.emit("openchange", { open: e, event: t, reason: r, nested: u }),
                null == n || n(e, t, r);
        }),
        f = i.useMemo(() => ({ setPositionReference: d }), []),
        h = i.useMemo(
            () => ({ reference: c || r.reference || null, floating: r.floating || null, domReference: r.reference }),
            [c, r.reference, r.floating],
        );
    return i.useMemo(
        () => ({ dataRef: o, open: t, onOpenChange: _, elements: h, events: l, floatingId: s, refs: f }),
        [t, _, h, l, s, f],
    );
}
function eh(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        n = ef({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
        r = e.rootContext || n,
        s = r.elements,
        [l, c] = i.useState(null),
        [d, _] = i.useState(null),
        f = (null == s ? void 0 : s.domReference) || l,
        h = i.useRef(null),
        p = R();
    (0, a.OS)(() => {
        f && (h.current = f);
    }, [f]);
    let g = (0, u.we)({ ...e, elements: { ...s, ...(d && { reference: d }) } }),
        E = i.useCallback(
            (e) => {
                let t = (0, o.vq)(e)
                    ? {
                          getBoundingClientRect: () => e.getBoundingClientRect(),
                          getClientRects: () => e.getClientRects(),
                          contextElement: e,
                      }
                    : e;
                _(t), g.refs.setReference(t);
            },
            [g.refs],
        ),
        A = i.useCallback(
            (e) => {
                ((0, o.vq)(e) || null === e) && ((h.current = e), c(e)),
                    ((0, o.vq)(g.refs.reference.current) ||
                        null === g.refs.reference.current ||
                        (null !== e && !(0, o.vq)(e))) &&
                        g.refs.setReference(e);
            },
            [g.refs],
        ),
        I = i.useMemo(() => ({ ...g.refs, setReference: A, setPositionReference: E, domReference: h }), [g.refs, A, E]),
        T = i.useMemo(() => ({ ...g.elements, domReference: f }), [g.elements, f]),
        y = i.useMemo(() => ({ ...g, ...r, refs: I, elements: T, nodeId: t }), [g, I, T, t, r]);
    return (
        (0, a.OS)(() => {
            r.dataRef.current.floatingContext = y;
            let e = null == p ? void 0 : p.nodesRef.current.find((e) => e.id === t);
            e && (e.context = y);
        }),
        i.useMemo(() => ({ ...g, context: y, refs: I, elements: T }), [g, I, T, y])
    );
}
function ep(e, t, n) {
    let r = new Map(),
        i = "item" === n,
        a = e;
    if (i && e) {
        let { [d]: t, [_]: n, ...r } = e;
        a = r;
    }
    return {
        ...("floating" === n && { tabIndex: -1, [c]: "" }),
        ...a,
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
                            let [n, a] = t;
                            if (!(i && [d, _].includes(n)))
                                if (0 === n.indexOf("on")) {
                                    if ((r.has(n) || r.set(n, []), "function" == typeof a)) {
                                        var s;
                                        null == (s = r.get(n)) || s.push(a),
                                            (e[n] = function () {
                                                for (var e, t = arguments.length, i = Array(t), a = 0; a < t; a++)
                                                    i[a] = arguments[a];
                                                return null == (e = r.get(n))
                                                    ? void 0
                                                    : e.map((e) => e(...i)).find((e) => void 0 !== e);
                                            });
                                    }
                                } else e[n] = a;
                        }),
                    e
                ),
                {},
            ),
    };
}
function em(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        n = e.map((e) => (null == e ? void 0 : e.floating)),
        r = e.map((e) => (null == e ? void 0 : e.item)),
        a = i.useCallback((t) => ep(t, e, "reference"), t),
        s = i.useCallback((t) => ep(t, e, "floating"), n),
        o = i.useCallback((t) => ep(t, e, "item"), r);
    return i.useMemo(() => ({ getReferenceProps: a, getFloatingProps: s, getItemProps: o }), [a, s, o]);
}
let eg = "Escape";
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
let eA = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function eI(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function eT(e, t) {
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
function ey(e, t) {
    void 0 === t && (t = {});
    let {
            open: n,
            elements: { floating: r },
        } = e,
        { duration: s = 250 } = t,
        o = ("number" == typeof s ? s : s.close) || 0,
        [u, c] = i.useState("unmounted"),
        d = eT(n, o);
    return (
        d || "close" !== u || c("unmounted"),
        (0, a.OS)(() => {
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
    let { initial: n = { opacity: 0 }, open: r, close: s, common: o, duration: l = 250 } = t,
        u = e.placement,
        c = u.split("-")[0],
        d = i.useMemo(() => ({ side: c, placement: u }), [c, u]),
        _ = "number" == typeof l,
        f = (_ ? l : l.open) || 0,
        h = (_ ? l : l.close) || 0,
        [p, g] = i.useState(() => ({ ...eI(o, d), ...eI(n, d) })),
        { isMounted: E, status: A } = ey(e, { duration: l }),
        I = (0, a.SE)(n),
        T = (0, a.SE)(r),
        y = (0, a.SE)(s),
        S = (0, a.SE)(o);
    return (
        (0, a.OS)(() => {
            let e = eI(I.current, d),
                t = eI(y.current, d),
                n = eI(S.current, d),
                r = eI(T.current, d) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
            if (
                ("initial" === A && g((t) => ({ transitionProperty: t.transitionProperty, ...n, ...e })),
                "open" === A &&
                    g({
                        transitionProperty: Object.keys(r).map(eA).join(","),
                        transitionDuration: f + "ms",
                        ...n,
                        ...r,
                    }),
                "close" === A)
            ) {
                let r = t || e;
                g({ transitionProperty: Object.keys(r).map(eA).join(","), transitionDuration: h + "ms", ...n, ...r });
            }
        }, [h, y, I, T, S, f, A, d]),
        { isMounted: E, styles: p }
    );
}
function ev(e, t, n) {
    return (
        void 0 === n && (n = !0),
        e
            .filter((e) => {
                var r;
                return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
            })
            .flatMap((t) => [t, ...ev(e, t.id, n)])
    );
}
function eC(e, t) {
    let [n, r] = e,
        i = !1,
        a = t.length;
    for (let e = 0, s = a - 1; e < a; s = e++) {
        let [a, o] = t[e] || [0, 0],
            [l, u] = t[s] || [0, 0];
        o >= r != u >= r && n <= ((l - a) * (r - o)) / (u - o) + a && (i = !i);
    }
    return i;
}
function eb(e, t) {
    return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function eN(e) {
    void 0 === e && (e = {});
    let { buffer: t = 0.5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e,
        i = { current: -1 },
        a = !1,
        s = null,
        l = null,
        u = "u" > typeof performance ? performance.now() : 0;
    function c(e, t) {
        let n = performance.now(),
            r = n - u;
        if (null === s || null === l || 0 === r) return (s = e), (l = t), (u = n), null;
        let i = e - s,
            a = t - l,
            o = Math.sqrt(i * i + a * a) / r;
        return (s = e), (l = t), (u = n), o;
    }
    let d = (e) => {
        let { x: n, y: s, placement: l, elements: u, onClose: d, nodeId: _, tree: f } = e;
        return function (e) {
            function h() {
                D(i), d();
            }
            if ((D(i), !u.domReference || !u.floating || null == l || null == n || null == s)) return;
            let { clientX: p, clientY: g } = e,
                E = [p, g],
                A = G(e),
                I = "mouseleave" === e.type,
                T = U(u.floating, A),
                y = U(u.domReference, A),
                S = u.domReference.getBoundingClientRect(),
                v = u.floating.getBoundingClientRect(),
                C = l.split("-")[0],
                b = n > v.right - v.width / 2,
                N = s > v.bottom - v.height / 2,
                R = eb(E, S),
                O = v.width > S.width,
                L = v.height > S.height,
                w = (O ? S : v).left,
                x = (O ? S : v).right,
                P = (L ? S : v).top,
                M = (L ? S : v).bottom;
            if (T && ((a = !0), !I)) return;
            if ((y && (a = !1), y && !I)) {
                a = !0;
                return;
            }
            if (
                (I && (0, o.vq)(e.relatedTarget) && U(u.floating, e.relatedTarget)) ||
                (f && ev(f.nodesRef.current, _).length)
            )
                return;
            if (
                ("top" === C && s >= S.bottom - 1) ||
                ("bottom" === C && s <= S.top + 1) ||
                ("left" === C && n >= S.right - 1) ||
                ("right" === C && n <= S.left + 1)
            )
                return h();
            let k = [];
            switch (C) {
                case "top":
                    k = [
                        [w, S.top + 1],
                        [w, v.bottom - 1],
                        [x, v.bottom - 1],
                        [x, S.top + 1],
                    ];
                    break;
                case "bottom":
                    k = [
                        [w, v.top + 1],
                        [w, S.bottom - 1],
                        [x, S.bottom - 1],
                        [x, v.top + 1],
                    ];
                    break;
                case "left":
                    k = [
                        [v.right - 1, M],
                        [v.right - 1, P],
                        [S.left + 1, P],
                        [S.left + 1, M],
                    ];
                    break;
                case "right":
                    k = [
                        [S.right - 1, M],
                        [S.right - 1, P],
                        [v.left + 1, P],
                        [v.left + 1, M],
                    ];
            }
            function F(e) {
                let [n, r] = e;
                switch (C) {
                    case "top":
                        return [
                            [O ? n + t / 2 : b ? n + 4 * t : n - 4 * t, r + t + 1],
                            [O ? n - t / 2 : b ? n + 4 * t : n - 4 * t, r + t + 1],
                            [v.left, b || O ? v.bottom - t : v.top],
                            [v.right, b ? (O ? v.bottom - t : v.top) : v.bottom - t],
                        ];
                    case "bottom":
                        return [
                            [O ? n + t / 2 : b ? n + 4 * t : n - 4 * t, r - t],
                            [O ? n - t / 2 : b ? n + 4 * t : n - 4 * t, r - t],
                            [v.left, b || O ? v.top + t : v.bottom],
                            [v.right, b ? (O ? v.top + t : v.bottom) : v.top + t],
                        ];
                    case "left": {
                        let e = [n + t + 1, L ? r + t / 2 : N ? r + 4 * t : r - 4 * t],
                            i = [n + t + 1, L ? r - t / 2 : N ? r + 4 * t : r - 4 * t];
                        return [
                            [N || L ? v.right - t : v.left, v.top],
                            [N ? (L ? v.right - t : v.left) : v.right - t, v.bottom],
                            e,
                            i,
                        ];
                    }
                    case "right":
                        return [
                            [n - t, L ? r + t / 2 : N ? r + 4 * t : r - 4 * t],
                            [n - t, L ? r - t / 2 : N ? r + 4 * t : r - 4 * t],
                            [N || L ? v.left + t : v.right, v.top],
                            [N ? (L ? v.left + t : v.right) : v.left + t, v.bottom],
                        ];
                }
            }
            if (!eC([p, g], k)) {
                if (a && !R) return h();
                if (!I && r) {
                    let t = c(e.clientX, e.clientY),
                        n = 0.1;
                    if (null !== t && t < n) return h();
                }
                eC([p, g], F([n, s])) ? !a && r && (i.current = window.setTimeout(h, 40)) : h();
            }
        };
    };
    return (d.__options = { blockPointerEvents: n }), d;
}
