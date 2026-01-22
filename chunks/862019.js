n.d(t, {
    DL: () => eA,
    Mk: () => x,
    XF: () => $,
    bv: () => eh,
    iB: () => eT,
    s9: () => ed,
    we: () => ep,
    zR: () => eo,
});
var r,
    i = n(64700),
    a = n(357786),
    s = n(627968),
    o = n(84157),
    l = n(340287),
    c = n(879821);
let u = "data-floating-ui-focusable",
    d = "active",
    f = "selected",
    p = "ArrowLeft",
    _ = "ArrowRight",
    h = "ArrowUp",
    m = "ArrowDown",
    g = { ...(r || (r = n.t(i, 2))) },
    E = !1,
    b = 0,
    y = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + b++;
function O() {
    let [e, t] = i.useState(() => (E ? y() : void 0));
    return (
        (0, a.OS)(() => {
            null == e && t(y());
        }, []),
        i.useEffect(() => {
            E = !0;
        }, []),
        e
    );
}
let A = g.useId || O;
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
let S = i.createContext(null),
    I = i.createContext(null),
    T = () => {
        var e;
        return (null == (e = i.useContext(S)) ? void 0 : e.id) || null;
    },
    C = () => i.useContext(I);
function N(e) {
    return "data-floating-ui-" + e;
}
function R(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
}
let w = N("safe-polygon");
function P(e, t, n) {
    if (n && !(0, a.Go)(n)) return 0;
    if ("number" == typeof e) return e;
    if ("function" == typeof e) {
        let n = e();
        return "number" == typeof n ? n : null == n ? void 0 : n[t];
    }
    return null == e ? void 0 : e[t];
}
function D(e) {
    return "function" == typeof e ? e() : e;
}
function x(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, dataRef: s, events: l, elements: c } = e,
        { enabled: u = !0, delay: d = 0, handleClose: f = null, mouseOnly: p = !1, restMs: _ = 0, move: h = !0 } = t,
        m = C(),
        g = T(),
        E = (0, a.SE)(f),
        b = (0, a.SE)(d),
        y = (0, a.SE)(n),
        O = (0, a.SE)(_),
        A = i.useRef(),
        v = i.useRef(-1),
        S = i.useRef(),
        I = i.useRef(-1),
        N = i.useRef(!0),
        x = i.useRef(!1),
        L = i.useRef(() => {}),
        j = i.useRef(!1),
        M = (0, a.Jt)(() => {
            var e;
            let t = null == (e = s.current.openEvent) ? void 0 : e.type;
            return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t;
        });
    i.useEffect(() => {
        if (u)
            return (
                l.on("openchange", e),
                () => {
                    l.off("openchange", e);
                }
            );
        function e(e) {
            let { open: t } = e;
            t || (R(v), R(I), (N.current = !0), (j.current = !1));
        }
    }, [u, l]),
        i.useEffect(() => {
            if (!u || !E.current || !n) return;
            function e(e) {
                M() && r(!1, e, "hover");
            }
            let t = (0, a.YE)(c.floating).documentElement;
            return (
                t.addEventListener("mouseleave", e),
                () => {
                    t.removeEventListener("mouseleave", e);
                }
            );
        }, [c.floating, n, r, u, E, M]);
    let k = i.useCallback(
            function (e, t, n) {
                void 0 === t && (t = !0), void 0 === n && (n = "hover");
                let i = P(b.current, "close", A.current);
                i && !S.current
                    ? (R(v), (v.current = window.setTimeout(() => r(!1, e, n), i)))
                    : t && (R(v), r(!1, e, n));
            },
            [b, r],
        ),
        U = (0, a.Jt)(() => {
            L.current(), (S.current = void 0);
        }),
        G = (0, a.Jt)(() => {
            if (x.current) {
                let e = (0, a.YE)(c.floating).body;
                (e.style.pointerEvents = ""), e.removeAttribute(w), (x.current = !1);
            }
        }),
        V = (0, a.Jt)(() => !!s.current.openEvent && ["click", "mousedown"].includes(s.current.openEvent.type));
    i.useEffect(() => {
        if (u && (0, o.vq)(c.domReference)) {
            let r = c.domReference,
                a = c.floating;
            return (
                n && r.addEventListener("mouseleave", i),
                h && r.addEventListener("mousemove", e, { once: !0 }),
                r.addEventListener("mouseenter", e),
                r.addEventListener("mouseleave", t),
                a &&
                    (a.addEventListener("mouseleave", i),
                    a.addEventListener("mouseenter", l),
                    a.addEventListener("mouseleave", d)),
                () => {
                    n && r.removeEventListener("mouseleave", i),
                        h && r.removeEventListener("mousemove", e),
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
            if ((R(v), (N.current = !1), (p && !(0, a.Go)(A.current)) || (D(O.current) > 0 && !P(b.current, "open"))))
                return;
            let t = P(b.current, "open", A.current);
            t
                ? (v.current = window.setTimeout(() => {
                      y.current || r(!0, e, "hover");
                  }, t))
                : n || r(!0, e, "hover");
        }
        function t(e) {
            if (V()) return void G();
            L.current();
            let t = (0, a.YE)(c.floating);
            if ((R(I), (j.current = !1), E.current && s.current.floatingContext)) {
                n || R(v),
                    (S.current = E.current({
                        ...s.current.floatingContext,
                        tree: m,
                        x: e.clientX,
                        y: e.clientY,
                        onClose() {
                            G(), U(), V() || k(e, !0, "safe-polygon");
                        },
                    }));
                let r = S.current;
                t.addEventListener("mousemove", r),
                    (L.current = () => {
                        t.removeEventListener("mousemove", r);
                    });
                return;
            }
            ("touch" === A.current && (0, a.gR)(c.floating, e.relatedTarget)) || k(e);
        }
        function i(e) {
            V() ||
                (s.current.floatingContext &&
                    (null == E.current ||
                        E.current({
                            ...s.current.floatingContext,
                            tree: m,
                            x: e.clientX,
                            y: e.clientY,
                            onClose() {
                                G(), U(), V() || k(e);
                            },
                        })(e)));
        }
        function l() {
            R(v);
        }
        function d(e) {
            V() || k(e, !1);
        }
    }, [c, u, e, p, h, k, U, G, r, n, y, m, b, E, s, V, O]),
        (0, a.OS)(() => {
            var e, t;
            if (u && n && null != (e = E.current) && null != (e = e.__options) && e.blockPointerEvents && M()) {
                x.current = !0;
                let e = c.floating;
                if ((0, o.vq)(c.domReference) && e) {
                    let n = (0, a.YE)(c.floating).body;
                    n.setAttribute(w, "");
                    let r = c.domReference,
                        i =
                            null == m ||
                            null == (t = m.nodesRef.current.find((e) => e.id === g)) ||
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
        }, [u, n, g, c, m, E, M]),
        (0, a.OS)(() => {
            n || ((A.current = void 0), (j.current = !1), U(), G());
        }, [n, U, G]),
        i.useEffect(
            () => () => {
                U(), R(v), R(I), G();
            },
            [u, c.domReference, U, G],
        );
    let F = i.useMemo(() => {
        function e(e) {
            A.current = e.pointerType;
        }
        return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove(e) {
                let { nativeEvent: t } = e;
                function i() {
                    N.current || y.current || r(!0, t, "hover");
                }
                (p && !(0, a.Go)(A.current)) ||
                    n ||
                    0 === D(O.current) ||
                    (j.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                    (R(I),
                    "touch" === A.current ? i() : ((j.current = !0), (I.current = window.setTimeout(i, D(O.current)))));
            },
        };
    }, [p, r, n, y, O]);
    return i.useMemo(() => (u ? { reference: F } : {}), [u, F]);
}
let L = null,
    j = 0;
function M(e, t) {
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
function k(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function U(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
let G = {
    inert: new WeakMap(),
    "aria-hidden": new WeakMap(),
    none: new WeakMap(),
};
function V(e) {
    return "inert" === e ? G.inert : "aria-hidden" === e ? G["aria-hidden"] : G.none;
}
let F = new WeakSet(),
    B = null,
    H = 0,
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
        a = r ? "inert" : n ? "aria-hidden" : null,
        s = W(t, e),
        o = new Set(),
        l = new Set(s),
        c = [];
    B[i] || (B[i] = new WeakMap());
    let u = B[i];
    function d(e) {
        !(!e || o.has(e)) && (o.add(e), e.parentNode && d(e.parentNode));
    }
    function f(e) {
        !e ||
            l.has(e) ||
            [].forEach.call(e.children, (e) => {
                if ("script" !== getNodeName(e))
                    if (o.has(e)) f(e);
                    else {
                        let t = a ? e.getAttribute(a) : null,
                            n = null !== t && "false" !== t,
                            r = V(a),
                            s = (r.get(e) || 0) + 1,
                            o = (u.get(e) || 0) + 1;
                        r.set(e, s),
                            u.set(e, o),
                            c.push(e),
                            1 === s && n && F.add(e),
                            1 === o && e.setAttribute(i, ""),
                            !n && a && e.setAttribute(a, "inert" === a ? "" : "true");
                    }
            });
    }
    return (
        s.forEach(d),
        f(t),
        o.clear(),
        H++,
        () => {
            c.forEach((e) => {
                let t = V(a),
                    n = (t.get(e) || 0) - 1,
                    r = (u.get(e) || 0) - 1;
                t.set(e, n),
                    u.set(e, r),
                    n || (!F.has(e) && a && e.removeAttribute(a), F.delete(e)),
                    r || e.removeAttribute(i);
            }),
                --H ||
                    ((G.inert = new WeakMap()),
                    (G["aria-hidden"] = new WeakMap()),
                    (G.none = new WeakMap()),
                    (F = new WeakSet()),
                    (B = {}));
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
        let o = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [N("focus-guard")]: "",
            style: z,
        };
        return (0, s.jsx)("span", {
            ...e,
            ...o,
        });
    }),
    X = i.createContext(null),
    Z = N("portal");
function Q(e) {
    void 0 === e && (e = {});
    let { id: t, root: n } = e,
        r = A(),
        s = J(),
        [l, c] = i.useState(null),
        u = i.useRef(null);
    return (
        (0, a.OS)(
            () => () => {
                null == l || l.remove(),
                    queueMicrotask(() => {
                        u.current = null;
                    });
            },
            [l],
        ),
        (0, a.OS)(() => {
            if (!r || u.current) return;
            let e = t ? document.getElementById(t) : null;
            if (!e) return;
            let n = document.createElement("div");
            (n.id = r), n.setAttribute(Z, ""), e.appendChild(n), (u.current = n), c(n);
        }, [t, r]),
        (0, a.OS)(() => {
            if (null === n || !r || u.current) return;
            let e = n || (null == s ? void 0 : s.portalNode);
            e && !(0, o.Ll)(e) && (e = e.current), (e = e || document.body);
            let i = null;
            t && (((i = document.createElement("div")).id = t), e.appendChild(i));
            let a = document.createElement("div");
            (a.id = r), a.setAttribute(Z, ""), (e = i || e).appendChild(a), (u.current = a), c(a);
        }, [t, n, r, s]),
        l
    );
}
function $(e) {
    let { children: t, id: n, root: r, preserveTabOrder: o = !0 } = e,
        c = Q({
            id: n,
            root: r,
        }),
        [u, d] = i.useState(null),
        f = i.useRef(null),
        p = i.useRef(null),
        _ = i.useRef(null),
        h = i.useRef(null),
        m = null == u ? void 0 : u.modal,
        g = null == u ? void 0 : u.open,
        E = !!u && !u.modal && u.open && o && !!(r || c);
    return (
        i.useEffect(() => {
            if (c && o && !m)
                return (
                    c.addEventListener("focusin", e, !0),
                    c.addEventListener("focusout", e, !0),
                    () => {
                        c.removeEventListener("focusin", e, !0), c.removeEventListener("focusout", e, !0);
                    }
                );
            function e(e) {
                c && (0, a.Qp)(e) && ("focusin" === e.type ? a.yV : a.N)(c);
            }
        }, [c, o, m]),
        i.useEffect(() => {
            !c || g || (0, a.yV)(c);
        }, [g, c]),
        (0, s.jsxs)(X.Provider, {
            value: i.useMemo(
                () => ({
                    preserveTabOrder: o,
                    beforeOutsideRef: f,
                    afterOutsideRef: p,
                    beforeInsideRef: _,
                    afterInsideRef: h,
                    portalNode: c,
                    setFocusManagerState: d,
                }),
                [o, c],
            ),
            children: [
                E &&
                    c &&
                    (0, s.jsx)(q, {
                        "data-type": "outside",
                        ref: f,
                        onFocus: (e) => {
                            if ((0, a.Qp)(e, c)) {
                                var t;
                                null == (t = _.current) || t.focus();
                            } else {
                                let e = u ? u.domReference : null,
                                    t = (0, a.XJ)(e);
                                null == t || t.focus();
                            }
                        },
                    }),
                E &&
                    c &&
                    (0, s.jsx)("span", {
                        "aria-owns": c.id,
                        style: z,
                    }),
                c && l.createPortal(t, c),
                E &&
                    c &&
                    (0, s.jsx)(q, {
                        "data-type": "outside",
                        ref: p,
                        onFocus: (e) => {
                            if ((0, a.Qp)(e, c)) {
                                var t;
                                null == (t = h.current) || t.focus();
                            } else {
                                let t = u ? u.domReference : null,
                                    n = (0, a.vF)(t);
                                null == n || n.focus(),
                                    (null == u ? void 0 : u.closeOnFocusOut) &&
                                        (null == u || u.onOpenChange(!1, e.nativeEvent, "focus-out"));
                            }
                        },
                    }),
            ],
        })
    );
}
let J = () => i.useContext(X),
    ee = 20,
    et = null;
function en() {
    et = et.filter((e) => e.isConnected);
}
let er = 0,
    ei = "--floating-ui-scrollbar-width";
function ea() {
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
    if (((n.overflow = "hidden"), n.setProperty(ei, i + "px"), i && (n[r] = i + "px"), t)) {
        var l, c;
        let e = (null == (l = window.visualViewport) ? void 0 : l.offsetLeft) || 0;
        Object.assign(n, {
            position: "fixed",
            top: -(o - Math.floor((null == (c = window.visualViewport) ? void 0 : c.offsetTop) || 0)) + "px",
            left: -(s - Math.floor(e)) + "px",
            right: "0",
        });
    }
    return () => {
        Object.assign(n, {
            overflow: "",
            [r]: "",
        }),
            n.removeProperty(ei),
            t &&
                (Object.assign(n, {
                    position: "",
                    top: "",
                    left: "",
                    right: "",
                }),
                window.scrollTo(s, o));
    };
}
let es = () => {},
    eo = i.forwardRef(function (e, t) {
        let { lockScroll: n = !1, ...r } = e;
        return (
            (0, a.OS)(() => {
                if (n)
                    return (
                        1 == ++er && (es = ea()),
                        () => {
                            0 == --er && es();
                        }
                    );
            }, [n]),
            (0, s.jsx)("div", {
                ref: t,
                ...r,
                style: {
                    position: "fixed",
                    overflow: "auto",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...r.style,
                },
            })
        );
    }),
    el = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick",
    },
    ec = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture",
    },
    eu = (e) => {
        var t, n;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
    };
function ed(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, elements: s, dataRef: l } = e,
        {
            enabled: c = !0,
            escapeKey: u = !0,
            outsidePress: d = !0,
            outsidePressEvent: f = "pointerdown",
            referencePress: p = !1,
            referencePressEvent: _ = "pointerdown",
            ancestorScroll: h = !1,
            bubbles: m,
            capture: g,
        } = t,
        E = C(),
        b = (0, a.Jt)("function" == typeof d ? d : () => !1),
        y = "function" == typeof d ? b : d,
        O = i.useRef(!1),
        { escapeKey: A, outsidePress: v } = eu(m),
        { escapeKey: S, outsidePress: I } = eu(g),
        T = i.useRef(!1),
        R = (0, a.Jt)((e) => {
            var t;
            if (!n || !c || !u || "Escape" !== e.key || T.current) return;
            let i = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                s = E ? (0, a.CM)(E.nodesRef.current, i) : [];
            if (!A && (e.stopPropagation(), s.length > 0)) {
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
        w = (0, a.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                R(e), null == (t = (0, a.EW)(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = (0, a.EW)(e)) || t.addEventListener("keydown", n);
        }),
        P = (0, a.Jt)((e) => {
            var t;
            let n = l.current.insideReactTree;
            l.current.insideReactTree = !1;
            let i = O.current;
            if (((O.current = !1), ("click" === f && i) || n || ("function" == typeof y && !y(e)))) return;
            let c = (0, a.EW)(e),
                u = "[" + N("inert") + "]",
                d = (0, a.YE)(s.floating).querySelectorAll(u),
                p = (0, o.vq)(c) ? c : null;
            for (; p && !(0, o.eu)(p); ) {
                let e = (0, o.$4)(p);
                if ((0, o.eu)(e) || !(0, o.vq)(e)) break;
                p = e;
            }
            if (
                d.length &&
                (0, o.vq)(c) &&
                !(0, a.tZ)(c) &&
                !(0, a.gR)(c, s.floating) &&
                Array.from(d).every((e) => !(0, a.gR)(p, e))
            )
                return;
            if ((0, o.sb)(c) && L) {
                let t = (0, o.eu)(c),
                    n = (0, o.L9)(c),
                    r = /auto|scroll/,
                    i = t || r.test(n.overflowX),
                    a = t || r.test(n.overflowY),
                    s = i && c.clientWidth > 0 && c.scrollWidth > c.clientWidth,
                    l = a && c.clientHeight > 0 && c.scrollHeight > c.clientHeight,
                    u = "rtl" === n.direction,
                    d = l && (u ? e.offsetX <= c.offsetWidth - c.clientWidth : e.offsetX > c.clientWidth),
                    f = s && e.offsetY > c.clientHeight;
                if (d || f) return;
            }
            let _ = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                h =
                    E &&
                    (0, a.CM)(E.nodesRef.current, _).some((t) => {
                        var n;
                        return (0, a.F2)(e, null == (n = t.context) ? void 0 : n.elements.floating);
                    });
            if ((0, a.F2)(e, s.floating) || (0, a.F2)(e, s.domReference) || h) return;
            let m = E ? (0, a.CM)(E.nodesRef.current, _) : [];
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
        D = (0, a.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                P(e), null == (t = (0, a.EW)(e)) || t.removeEventListener(f, n);
            };
            null == (t = (0, a.EW)(e)) || t.addEventListener(f, n);
        });
    i.useEffect(() => {
        if (!n || !c) return;
        (l.current.__escapeKeyBubbles = A), (l.current.__outsidePressBubbles = v);
        let e = -1;
        function t(e) {
            r(!1, e, "ancestor-scroll");
        }
        function i() {
            window.clearTimeout(e), (T.current = !0);
        }
        function d() {
            e = window.setTimeout(
                () => {
                    T.current = !1;
                },
                5 * !!(0, o.Tc)(),
            );
        }
        let p = (0, a.YE)(s.floating);
        u &&
            (p.addEventListener("keydown", S ? w : R, S),
            p.addEventListener("compositionstart", i),
            p.addEventListener("compositionend", d)),
            y && p.addEventListener(f, I ? D : P, I);
        let _ = [];
        return (
            h &&
                ((0, o.vq)(s.domReference) && (_ = (0, o.v9)(s.domReference)),
                (0, o.vq)(s.floating) && (_ = _.concat((0, o.v9)(s.floating))),
                !(0, o.vq)(s.reference) &&
                    s.reference &&
                    s.reference.contextElement &&
                    (_ = _.concat((0, o.v9)(s.reference.contextElement)))),
            (_ = _.filter((e) => {
                var t;
                return e !== (null == (t = p.defaultView) ? void 0 : t.visualViewport);
            })).forEach((e) => {
                e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
                u &&
                    (p.removeEventListener("keydown", S ? w : R, S),
                    p.removeEventListener("compositionstart", i),
                    p.removeEventListener("compositionend", d)),
                    y && p.removeEventListener(f, I ? D : P, I),
                    _.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, s, u, y, f, n, r, h, c, A, v, R, S, w, P, I, D]),
        i.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, y, f]);
    let x = i.useMemo(
            () => ({
                onKeyDown: R,
                ...(p && {
                    [el[_]]: (e) => {
                        r(!1, e.nativeEvent, "reference-press");
                    },
                    ...("click" !== _ && {
                        onClick(e) {
                            r(!1, e.nativeEvent, "reference-press");
                        },
                    }),
                }),
            }),
            [R, r, p, _],
        ),
        L = i.useMemo(
            () => ({
                onKeyDown: R,
                onMouseDown() {
                    O.current = !0;
                },
                onMouseUp() {
                    O.current = !0;
                },
                [ec[f]]: () => {
                    l.current.insideReactTree = !0;
                },
            }),
            [R, f, l],
        );
    return i.useMemo(
        () =>
            c
                ? {
                      reference: x,
                      floating: L,
                  }
                : {},
        [c, x, L],
    );
}
function ef(e) {
    let { open: t = !1, onOpenChange: n, elements: r } = e,
        s = A(),
        o = i.useRef({}),
        [l] = i.useState(() => v()),
        c = null != T(),
        [u, d] = i.useState(r.reference),
        f = (0, a.Jt)((e, t, r) => {
            (o.current.openEvent = e ? t : void 0),
                l.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: c,
                }),
                null == n || n(e, t, r);
        }),
        p = i.useMemo(() => ({ setPositionReference: d }), []),
        _ = i.useMemo(
            () => ({
                reference: u || r.reference || null,
                floating: r.floating || null,
                domReference: r.reference,
            }),
            [u, r.reference, r.floating],
        );
    return i.useMemo(
        () => ({
            dataRef: o,
            open: t,
            onOpenChange: f,
            elements: _,
            events: l,
            floatingId: s,
            refs: p,
        }),
        [t, f, _, l, s, p],
    );
}
function ep(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        n = ef({
            ...e,
            elements: {
                reference: null,
                floating: null,
                ...e.elements,
            },
        }),
        r = e.rootContext || n,
        s = r.elements,
        [l, u] = i.useState(null),
        [d, f] = i.useState(null),
        p = (null == s ? void 0 : s.domReference) || l,
        _ = i.useRef(null),
        h = C();
    (0, a.OS)(() => {
        p && (_.current = p);
    }, [p]);
    let m = (0, c.we)({
            ...e,
            elements: {
                ...s,
                ...(d && { reference: d }),
            },
        }),
        g = i.useCallback(
            (e) => {
                let t = (0, o.vq)(e)
                    ? {
                          getBoundingClientRect: () => e.getBoundingClientRect(),
                          getClientRects: () => e.getClientRects(),
                          contextElement: e,
                      }
                    : e;
                f(t), m.refs.setReference(t);
            },
            [m.refs],
        ),
        E = i.useCallback(
            (e) => {
                ((0, o.vq)(e) || null === e) && ((_.current = e), u(e)),
                    ((0, o.vq)(m.refs.reference.current) ||
                        null === m.refs.reference.current ||
                        (null !== e && !(0, o.vq)(e))) &&
                        m.refs.setReference(e);
            },
            [m.refs],
        ),
        b = i.useMemo(
            () => ({
                ...m.refs,
                setReference: E,
                setPositionReference: g,
                domReference: _,
            }),
            [m.refs, E, g],
        ),
        y = i.useMemo(
            () => ({
                ...m.elements,
                domReference: p,
            }),
            [m.elements, p],
        ),
        O = i.useMemo(
            () => ({
                ...m,
                ...r,
                refs: b,
                elements: y,
                nodeId: t,
            }),
            [m, b, y, t, r],
        );
    return (
        (0, a.OS)(() => {
            r.dataRef.current.floatingContext = O;
            let e = null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
            e && (e.context = O);
        }),
        i.useMemo(
            () => ({
                ...m,
                context: O,
                refs: b,
                elements: y,
            }),
            [m, b, y, O],
        )
    );
}
function e_(e, t, n) {
    let r = new Map(),
        i = "item" === n,
        a = e;
    if (i && e) {
        let { [d]: t, [f]: n, ...r } = e;
        a = r;
    }
    return {
        ...("floating" === n && {
            tabIndex: -1,
            [u]: "",
        }),
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
                            if (!(i && [d, f].includes(n)))
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
function eh(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        n = e.map((e) => (null == e ? void 0 : e.floating)),
        r = e.map((e) => (null == e ? void 0 : e.item)),
        a = i.useCallback((t) => e_(t, e, "reference"), t),
        s = i.useCallback((t) => e_(t, e, "floating"), n),
        o = i.useCallback((t) => e_(t, e, "item"), r);
    return i.useMemo(
        () => ({
            getReferenceProps: a,
            getFloatingProps: s,
            getItemProps: o,
        }),
        [a, s, o],
    );
}
let em = "Escape";
function eg(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n;
    }
}
let eE = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function eb(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function ey(e, t) {
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
function eO(e, t) {
    void 0 === t && (t = {});
    let {
            open: n,
            elements: { floating: r },
        } = e,
        { duration: s = 250 } = t,
        o = ("number" == typeof s ? s : s.close) || 0,
        [c, u] = i.useState("unmounted"),
        d = ey(n, o);
    return (
        d || "close" !== c || u("unmounted"),
        (0, a.OS)(() => {
            if (r) {
                if (n) {
                    u("initial");
                    let e = requestAnimationFrame(() => {
                        l.flushSync(() => {
                            u("open");
                        });
                    });
                    return () => {
                        cancelAnimationFrame(e);
                    };
                }
                u("close");
            }
        }, [n, r]),
        {
            isMounted: d,
            status: c,
        }
    );
}
function eA(e, t) {
    void 0 === t && (t = {});
    let { initial: n = { opacity: 0 }, open: r, close: s, common: o, duration: l = 250 } = t,
        c = e.placement,
        u = c.split("-")[0],
        d = i.useMemo(
            () => ({
                side: u,
                placement: c,
            }),
            [u, c],
        ),
        f = "number" == typeof l,
        p = (f ? l : l.open) || 0,
        _ = (f ? l : l.close) || 0,
        [h, m] = i.useState(() => ({
            ...eb(o, d),
            ...eb(n, d),
        })),
        { isMounted: g, status: E } = eO(e, { duration: l }),
        b = (0, a.SE)(n),
        y = (0, a.SE)(r),
        O = (0, a.SE)(s),
        A = (0, a.SE)(o);
    return (
        (0, a.OS)(() => {
            let e = eb(b.current, d),
                t = eb(O.current, d),
                n = eb(A.current, d),
                r = eb(y.current, d) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
            if (
                ("initial" === E &&
                    m((t) => ({
                        transitionProperty: t.transitionProperty,
                        ...n,
                        ...e,
                    })),
                "open" === E &&
                    m({
                        transitionProperty: Object.keys(r).map(eE).join(","),
                        transitionDuration: p + "ms",
                        ...n,
                        ...r,
                    }),
                "close" === E)
            ) {
                let r = t || e;
                m({
                    transitionProperty: Object.keys(r).map(eE).join(","),
                    transitionDuration: _ + "ms",
                    ...n,
                    ...r,
                });
            }
        }, [_, O, b, y, A, p, E, d]),
        {
            isMounted: g,
            styles: h,
        }
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
function eS(e, t) {
    let [n, r] = e,
        i = !1,
        a = t.length;
    for (let e = 0, s = a - 1; e < a; s = e++) {
        let [a, o] = t[e] || [0, 0],
            [l, c] = t[s] || [0, 0];
        o >= r != c >= r && n <= ((l - a) * (r - o)) / (c - o) + a && (i = !i);
    }
    return i;
}
function eI(e, t) {
    return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function eT(e) {
    void 0 === e && (e = {});
    let { buffer: t = 0.5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e,
        i = { current: -1 },
        a = !1,
        s = null,
        l = null,
        c = "u" > typeof performance ? performance.now() : 0;
    function u(e, t) {
        let n = performance.now(),
            r = n - c;
        if (null === s || null === l || 0 === r) return (s = e), (l = t), (c = n), null;
        let i = e - s,
            a = t - l,
            o = Math.sqrt(i * i + a * a) / r;
        return (s = e), (l = t), (c = n), o;
    }
    let d = (e) => {
        let { x: n, y: s, placement: l, elements: c, onClose: d, nodeId: f, tree: p } = e;
        return function (e) {
            function _() {
                R(i), d();
            }
            if ((R(i), !c.domReference || !c.floating || null == l || null == n || null == s)) return;
            let { clientX: h, clientY: m } = e,
                g = [h, m],
                E = k(e),
                b = "mouseleave" === e.type,
                y = M(c.floating, E),
                O = M(c.domReference, E),
                A = c.domReference.getBoundingClientRect(),
                v = c.floating.getBoundingClientRect(),
                S = l.split("-")[0],
                I = n > v.right - v.width / 2,
                T = s > v.bottom - v.height / 2,
                C = eI(g, A),
                N = v.width > A.width,
                w = v.height > A.height,
                P = (N ? A : v).left,
                D = (N ? A : v).right,
                x = (w ? A : v).top,
                L = (w ? A : v).bottom;
            if (y && ((a = !0), !b)) return;
            if ((O && (a = !1), O && !b)) {
                a = !0;
                return;
            }
            if (
                (b && (0, o.vq)(e.relatedTarget) && M(c.floating, e.relatedTarget)) ||
                (p && ev(p.nodesRef.current, f).length)
            )
                return;
            if (
                ("top" === S && s >= A.bottom - 1) ||
                ("bottom" === S && s <= A.top + 1) ||
                ("left" === S && n >= A.right - 1) ||
                ("right" === S && n <= A.left + 1)
            )
                return _();
            let j = [];
            switch (S) {
                case "top":
                    j = [
                        [P, A.top + 1],
                        [P, v.bottom - 1],
                        [D, v.bottom - 1],
                        [D, A.top + 1],
                    ];
                    break;
                case "bottom":
                    j = [
                        [P, v.top + 1],
                        [P, A.bottom - 1],
                        [D, A.bottom - 1],
                        [D, v.top + 1],
                    ];
                    break;
                case "left":
                    j = [
                        [v.right - 1, L],
                        [v.right - 1, x],
                        [A.left + 1, x],
                        [A.left + 1, L],
                    ];
                    break;
                case "right":
                    j = [
                        [A.right - 1, L],
                        [A.right - 1, x],
                        [v.left + 1, x],
                        [v.left + 1, L],
                    ];
            }
            function U(e) {
                let [n, r] = e;
                switch (S) {
                    case "top":
                        return [
                            [N ? n + t / 2 : I ? n + 4 * t : n - 4 * t, r + t + 1],
                            [N ? n - t / 2 : I ? n + 4 * t : n - 4 * t, r + t + 1],
                            [v.left, I || N ? v.bottom - t : v.top],
                            [v.right, I ? (N ? v.bottom - t : v.top) : v.bottom - t],
                        ];
                    case "bottom":
                        return [
                            [N ? n + t / 2 : I ? n + 4 * t : n - 4 * t, r - t],
                            [N ? n - t / 2 : I ? n + 4 * t : n - 4 * t, r - t],
                            [v.left, I || N ? v.top + t : v.bottom],
                            [v.right, I ? (N ? v.top + t : v.bottom) : v.top + t],
                        ];
                    case "left": {
                        let e = [n + t + 1, w ? r + t / 2 : T ? r + 4 * t : r - 4 * t],
                            i = [n + t + 1, w ? r - t / 2 : T ? r + 4 * t : r - 4 * t];
                        return [
                            [T || w ? v.right - t : v.left, v.top],
                            [T ? (w ? v.right - t : v.left) : v.right - t, v.bottom],
                            e,
                            i,
                        ];
                    }
                    case "right":
                        return [
                            [n - t, w ? r + t / 2 : T ? r + 4 * t : r - 4 * t],
                            [n - t, w ? r - t / 2 : T ? r + 4 * t : r - 4 * t],
                            [T || w ? v.left + t : v.right, v.top],
                            [T ? (w ? v.left + t : v.right) : v.left + t, v.bottom],
                        ];
                }
            }
            if (!eS([h, m], j)) {
                if (a && !C) return _();
                if (!b && r) {
                    let t = u(e.clientX, e.clientY),
                        n = 0.1;
                    if (null !== t && t < n) return _();
                }
                eS([h, m], U([n, s])) ? !a && r && (i.current = window.setTimeout(_, 40)) : _();
            }
        };
    };
    return (d.__options = { blockPointerEvents: n }), d;
}
