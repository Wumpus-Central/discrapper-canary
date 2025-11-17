n.d(t, {
    NI: () => ed,
    XI: () => x,
    YF: () => ec,
    Y_: () => eE,
    bQ: () => es,
    xp: () => ev,
    y0: () => er,
});
var r,
    i = n(473749),
    a = n(733387),
    o = n(54381),
    s = n(274676),
    l = n(24156),
    c = n(998976);
let u = "data-floating-ui-focusable",
    d = "active",
    f = "selected",
    _ = "ArrowLeft",
    p = "ArrowRight",
    h = "ArrowUp",
    m = "ArrowDown",
    g = { ...(r || (r = n.t(i, 2))) },
    E = !1,
    b = 0,
    y = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + b++;
function O() {
    let [e, t] = i.useState(() => (E ? y() : void 0));
    return (
        (0, a.Xj)(() => {
            null == e && t(y());
        }, []),
        i.useEffect(() => {
            E = !0;
        }, []),
        e
    );
}
let v = g.useId || O;
function I() {
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
let T = i.createContext(null),
    S = i.createContext(null),
    A = () => {
        var e;
        return (null == (e = i.useContext(T)) ? void 0 : e.id) || null;
    },
    C = () => i.useContext(S);
function N(e) {
    return "data-floating-ui-" + e;
}
function R(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
}
let P = N("safe-polygon");
function D(e, t, n) {
    if (n && !(0, a.r)(n)) return 0;
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
function x(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, dataRef: o, events: l, elements: c } = e,
        { enabled: u = !0, delay: d = 0, handleClose: f = null, mouseOnly: _ = !1, restMs: p = 0, move: h = !0 } = t,
        m = C(),
        g = A(),
        E = (0, a.II)(f),
        b = (0, a.II)(d),
        y = (0, a.II)(n),
        O = (0, a.II)(p),
        v = i.useRef(),
        I = i.useRef(-1),
        T = i.useRef(),
        S = i.useRef(-1),
        N = i.useRef(!0),
        x = i.useRef(!1),
        L = i.useRef(() => {}),
        M = i.useRef(!1),
        k = (0, a.iW)(() => {
            var e;
            let t = null == (e = o.current.openEvent) ? void 0 : e.type;
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
            t || (R(I), R(S), (N.current = !0), (M.current = !1));
        }
    }, [u, l]),
        i.useEffect(() => {
            if (!u || !E.current || !n) return;
            function e(e) {
                k() && r(!1, e, "hover");
            }
            let t = (0, a.Me)(c.floating).documentElement;
            return (
                t.addEventListener("mouseleave", e),
                () => {
                    t.removeEventListener("mouseleave", e);
                }
            );
        }, [c.floating, n, r, u, E, k]);
    let j = i.useCallback(
            function (e, t, n) {
                void 0 === t && (t = !0), void 0 === n && (n = "hover");
                let i = D(b.current, "close", v.current);
                i && !T.current
                    ? (R(I), (I.current = window.setTimeout(() => r(!1, e, n), i)))
                    : t && (R(I), r(!1, e, n));
            },
            [b, r],
        ),
        U = (0, a.iW)(() => {
            L.current(), (T.current = void 0);
        }),
        G = (0, a.iW)(() => {
            if (x.current) {
                let e = (0, a.Me)(c.floating).body;
                (e.style.pointerEvents = ""), e.removeAttribute(P), (x.current = !1);
            }
        }),
        B = (0, a.iW)(() => !!o.current.openEvent && ["click", "mousedown"].includes(o.current.openEvent.type));
    i.useEffect(() => {
        if (u && (0, s.kK)(c.domReference)) {
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
            if ((R(I), (N.current = !1), (_ && !(0, a.r)(v.current)) || (w(O.current) > 0 && !D(b.current, "open"))))
                return;
            let t = D(b.current, "open", v.current);
            t
                ? (I.current = window.setTimeout(() => {
                      y.current || r(!0, e, "hover");
                  }, t))
                : n || r(!0, e, "hover");
        }
        function t(e) {
            if (B()) return void G();
            L.current();
            let t = (0, a.Me)(c.floating);
            if ((R(S), (M.current = !1), E.current && o.current.floatingContext)) {
                n || R(I),
                    (T.current = E.current({
                        ...o.current.floatingContext,
                        tree: m,
                        x: e.clientX,
                        y: e.clientY,
                        onClose() {
                            G(), U(), B() || j(e, !0, "safe-polygon");
                        },
                    }));
                let r = T.current;
                t.addEventListener("mousemove", r),
                    (L.current = () => {
                        t.removeEventListener("mousemove", r);
                    });
                return;
            }
            ("touch" === v.current && (0, a.r3)(c.floating, e.relatedTarget)) || j(e);
        }
        function i(e) {
            !B() &&
                o.current.floatingContext &&
                (null == E.current ||
                    E.current({
                        ...o.current.floatingContext,
                        tree: m,
                        x: e.clientX,
                        y: e.clientY,
                        onClose() {
                            G(), U(), B() || j(e);
                        },
                    })(e));
        }
        function l() {
            R(I);
        }
        function d(e) {
            B() || j(e, !1);
        }
    }, [c, u, e, _, h, j, U, G, r, n, y, m, b, E, o, B, O]),
        (0, a.Xj)(() => {
            var e, t;
            if (u && n && null != (e = E.current) && null != (e = e.__options) && e.blockPointerEvents && k()) {
                x.current = !0;
                let e = c.floating;
                if ((0, s.kK)(c.domReference) && e) {
                    let n = (0, a.Me)(c.floating).body;
                    n.setAttribute(P, "");
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
        }, [u, n, g, c, m, E, k]),
        (0, a.Xj)(() => {
            n || ((v.current = void 0), (M.current = !1), U(), G());
        }, [n, U, G]),
        i.useEffect(
            () => () => {
                U(), R(I), R(S), G();
            },
            [u, c.domReference, U, G],
        );
    let Z = i.useMemo(() => {
        function e(e) {
            v.current = e.pointerType;
        }
        return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove(e) {
                let { nativeEvent: t } = e;
                function i() {
                    N.current || y.current || r(!0, t, "hover");
                }
                (!_ || (0, a.r)(v.current)) &&
                    !n &&
                    0 !== w(O.current) &&
                    ((M.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                        (R(S),
                        "touch" === v.current
                            ? i()
                            : ((M.current = !0), (S.current = window.setTimeout(i, w(O.current))))));
            },
        };
    }, [_, r, n, y, O]);
    return i.useMemo(() => (u ? { reference: Z } : {}), [u, Z]);
}
let L = null,
    M = 0;
function k(e, t) {
    if (!e || !t) return !1;
    let n = null == t.getRootNode ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && (0, s.Zq)(n)) {
        let n = t;
        for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
        }
    }
    return !1;
}
function j(e) {
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
function B(e) {
    return "inert" === e ? G.inert : "aria-hidden" === e ? G["aria-hidden"] : G.none;
}
let Z = new WeakSet(),
    F = null,
    V = 0,
    H = (e) => e && (e.host || H(e.parentNode)),
    Y = (e, t) =>
        t
            .map((t) => {
                if (e.contains(t)) return t;
                let n = H(t);
                return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
function W(e, t, n, r) {
    let i = "data-floating-ui-inert",
        a = r ? "inert" : n ? "aria-hidden" : null,
        o = Y(t, e),
        s = new Set(),
        l = new Set(o),
        c = [];
    F[i] || (F[i] = new WeakMap());
    let u = F[i];
    function d(e) {
        !(!e || s.has(e)) && (s.add(e), e.parentNode && d(e.parentNode));
    }
    function f(e) {
        !e ||
            l.has(e) ||
            [].forEach.call(e.children, (e) => {
                if ("script" !== getNodeName(e))
                    if (s.has(e)) f(e);
                    else {
                        let t = a ? e.getAttribute(a) : null,
                            n = null !== t && "false" !== t,
                            r = B(a),
                            o = (r.get(e) || 0) + 1,
                            s = (u.get(e) || 0) + 1;
                        r.set(e, o),
                            u.set(e, s),
                            c.push(e),
                            1 === o && n && Z.add(e),
                            1 === s && e.setAttribute(i, ""),
                            !n && a && e.setAttribute(a, "inert" === a ? "" : "true");
                    }
            });
    }
    return (
        o.forEach(d),
        f(t),
        s.clear(),
        V++,
        () => {
            c.forEach((e) => {
                let t = B(a),
                    n = (t.get(e) || 0) - 1,
                    r = (u.get(e) || 0) - 1;
                t.set(e, n),
                    u.set(e, r),
                    n || (!Z.has(e) && a && e.removeAttribute(a), Z.delete(e)),
                    r || e.removeAttribute(i);
            }),
                --V ||
                    ((G.inert = new WeakMap()),
                    (G["aria-hidden"] = new WeakMap()),
                    (G.none = new WeakMap()),
                    (Z = new WeakSet()),
                    (F = {}));
        }
    );
}
let K = null,
    z = null,
    q = () => React.useContext(K),
    X = 20,
    Q = null;
function J() {
    Q = Q.filter((e) => e.isConnected);
}
let $ = 0,
    ee = "--floating-ui-scrollbar-width";
function et() {
    let e = (0, a.Xf)(),
        t = /iP(hone|ad|od)|iOS/.test(e) || ("MacIntel" === e && navigator.maxTouchPoints > 1),
        n = document.body.style,
        r =
            Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft
                ? "paddingLeft"
                : "paddingRight",
        i = window.innerWidth - document.documentElement.clientWidth,
        o = n.left ? parseFloat(n.left) : window.scrollX,
        s = n.top ? parseFloat(n.top) : window.scrollY;
    if (((n.overflow = "hidden"), n.setProperty(ee, i + "px"), i && (n[r] = i + "px"), t)) {
        var l, c;
        let e = (null == (l = window.visualViewport) ? void 0 : l.offsetLeft) || 0;
        Object.assign(n, {
            position: "fixed",
            top: -(s - Math.floor((null == (c = window.visualViewport) ? void 0 : c.offsetTop) || 0)) + "px",
            left: -(o - Math.floor(e)) + "px",
            right: "0",
        });
    }
    return () => {
        Object.assign(n, {
            overflow: "",
            [r]: "",
        }),
            n.removeProperty(ee),
            t &&
                (Object.assign(n, {
                    position: "",
                    top: "",
                    left: "",
                    right: "",
                }),
                window.scrollTo(o, s));
    };
}
let en = () => {},
    er = i.forwardRef(function (e, t) {
        let { lockScroll: n = !1, ...r } = e;
        return (
            (0, a.Xj)(() => {
                if (n)
                    return (
                        1 == ++$ && (en = et()),
                        () => {
                            0 == --$ && en();
                        }
                    );
            }, [n]),
            (0, o.jsx)("div", {
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
    ei = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick",
    },
    ea = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture",
    },
    eo = (e) => {
        var t, n;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
    };
function es(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, elements: o, dataRef: l } = e,
        {
            enabled: c = !0,
            escapeKey: u = !0,
            outsidePress: d = !0,
            outsidePressEvent: f = "pointerdown",
            referencePress: _ = !1,
            referencePressEvent: p = "pointerdown",
            ancestorScroll: h = !1,
            bubbles: m,
            capture: g,
        } = t,
        E = C(),
        b = (0, a.iW)("function" == typeof d ? d : () => !1),
        y = "function" == typeof d ? b : d,
        O = i.useRef(!1),
        { escapeKey: v, outsidePress: I } = eo(m),
        { escapeKey: T, outsidePress: S } = eo(g),
        A = i.useRef(!1),
        R = (0, a.iW)((e) => {
            var t;
            if (!n || !c || !u || "Escape" !== e.key || A.current) return;
            let i = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                o = E ? (0, a.El)(E.nodesRef.current, i) : [];
            if (!v && (e.stopPropagation(), o.length > 0)) {
                let e = !0;
                if (
                    (o.forEach((t) => {
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
            r(!1, (0, a.MM)(e) ? e.nativeEvent : e, "escape-key");
        }),
        P = (0, a.iW)((e) => {
            var t;
            let n = () => {
                var t;
                R(e), null == (t = (0, a.U9)(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = (0, a.U9)(e)) || t.addEventListener("keydown", n);
        }),
        D = (0, a.iW)((e) => {
            var t;
            let n = l.current.insideReactTree;
            l.current.insideReactTree = !1;
            let i = O.current;
            if (((O.current = !1), ("click" === f && i) || n || ("function" == typeof y && !y(e)))) return;
            let c = (0, a.U9)(e),
                u = "[" + N("inert") + "]",
                d = (0, a.Me)(o.floating).querySelectorAll(u),
                _ = (0, s.kK)(c) ? c : null;
            for (; _ && !(0, s.Py)(_); ) {
                let e = (0, s.Ow)(_);
                if ((0, s.Py)(e) || !(0, s.kK)(e)) break;
                _ = e;
            }
            if (
                d.length &&
                (0, s.kK)(c) &&
                !(0, a.ex)(c) &&
                !(0, a.r3)(c, o.floating) &&
                Array.from(d).every((e) => !(0, a.r3)(_, e))
            )
                return;
            if ((0, s.Re)(c) && L) {
                let t = (0, s.Py)(c),
                    n = (0, s.Dx)(c),
                    r = /auto|scroll/,
                    i = t || r.test(n.overflowX),
                    a = t || r.test(n.overflowY),
                    o = i && c.clientWidth > 0 && c.scrollWidth > c.clientWidth,
                    l = a && c.clientHeight > 0 && c.scrollHeight > c.clientHeight,
                    u = "rtl" === n.direction,
                    d = l && (u ? e.offsetX <= c.offsetWidth - c.clientWidth : e.offsetX > c.clientWidth),
                    f = o && e.offsetY > c.clientHeight;
                if (d || f) return;
            }
            let p = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                h =
                    E &&
                    (0, a.El)(E.nodesRef.current, p).some((t) => {
                        var n;
                        return (0, a.Pe)(e, null == (n = t.context) ? void 0 : n.elements.floating);
                    });
            if ((0, a.Pe)(e, o.floating) || (0, a.Pe)(e, o.domReference) || h) return;
            let m = E ? (0, a.El)(E.nodesRef.current, p) : [];
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
        w = (0, a.iW)((e) => {
            var t;
            let n = () => {
                var t;
                D(e), null == (t = (0, a.U9)(e)) || t.removeEventListener(f, n);
            };
            null == (t = (0, a.U9)(e)) || t.addEventListener(f, n);
        });
    i.useEffect(() => {
        if (!n || !c) return;
        (l.current.__escapeKeyBubbles = v), (l.current.__outsidePressBubbles = I);
        let e = -1;
        function t(e) {
            r(!1, e, "ancestor-scroll");
        }
        function i() {
            window.clearTimeout(e), (A.current = !0);
        }
        function d() {
            e = window.setTimeout(
                () => {
                    A.current = !1;
                },
                5 * !!(0, s.Pf)(),
            );
        }
        let _ = (0, a.Me)(o.floating);
        u &&
            (_.addEventListener("keydown", T ? P : R, T),
            _.addEventListener("compositionstart", i),
            _.addEventListener("compositionend", d)),
            y && _.addEventListener(f, S ? w : D, S);
        let p = [];
        return (
            h &&
                ((0, s.kK)(o.domReference) && (p = (0, s.Kx)(o.domReference)),
                (0, s.kK)(o.floating) && (p = p.concat((0, s.Kx)(o.floating))),
                !(0, s.kK)(o.reference) &&
                    o.reference &&
                    o.reference.contextElement &&
                    (p = p.concat((0, s.Kx)(o.reference.contextElement)))),
            (p = p.filter((e) => {
                var t;
                return e !== (null == (t = _.defaultView) ? void 0 : t.visualViewport);
            })).forEach((e) => {
                e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
                u &&
                    (_.removeEventListener("keydown", T ? P : R, T),
                    _.removeEventListener("compositionstart", i),
                    _.removeEventListener("compositionend", d)),
                    y && _.removeEventListener(f, S ? w : D, S),
                    p.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, o, u, y, f, n, r, h, c, v, I, R, T, P, D, S, w]),
        i.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, y, f]);
    let x = i.useMemo(
            () => ({
                onKeyDown: R,
                ...(_ && {
                    [ei[p]]: (e) => {
                        r(!1, e.nativeEvent, "reference-press");
                    },
                    ...("click" !== p && {
                        onClick(e) {
                            r(!1, e.nativeEvent, "reference-press");
                        },
                    }),
                }),
            }),
            [R, r, _, p],
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
                [ea[f]]: () => {
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
function el(e) {
    let { open: t = !1, onOpenChange: n, elements: r } = e,
        o = v(),
        s = i.useRef({}),
        [l] = i.useState(() => I()),
        c = null != A(),
        [u, d] = i.useState(r.reference),
        f = (0, a.iW)((e, t, r) => {
            (s.current.openEvent = e ? t : void 0),
                l.emit("openchange", {
                    open: e,
                    event: t,
                    reason: r,
                    nested: c,
                }),
                null == n || n(e, t, r);
        }),
        _ = i.useMemo(() => ({ setPositionReference: d }), []),
        p = i.useMemo(
            () => ({
                reference: u || r.reference || null,
                floating: r.floating || null,
                domReference: r.reference,
            }),
            [u, r.reference, r.floating],
        );
    return i.useMemo(
        () => ({
            dataRef: s,
            open: t,
            onOpenChange: f,
            elements: p,
            events: l,
            floatingId: o,
            refs: _,
        }),
        [t, f, p, l, o, _],
    );
}
function ec(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        n = el({
            ...e,
            elements: {
                reference: null,
                floating: null,
                ...e.elements,
            },
        }),
        r = e.rootContext || n,
        o = r.elements,
        [l, u] = i.useState(null),
        [d, f] = i.useState(null),
        _ = (null == o ? void 0 : o.domReference) || l,
        p = i.useRef(null),
        h = C();
    (0, a.Xj)(() => {
        _ && (p.current = _);
    }, [_]);
    let m = (0, c.YF)({
            ...e,
            elements: {
                ...o,
                ...(d && { reference: d }),
            },
        }),
        g = i.useCallback(
            (e) => {
                let t = (0, s.kK)(e)
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
                ((0, s.kK)(e) || null === e) && ((p.current = e), u(e)),
                    ((0, s.kK)(m.refs.reference.current) ||
                        null === m.refs.reference.current ||
                        (null !== e && !(0, s.kK)(e))) &&
                        m.refs.setReference(e);
            },
            [m.refs],
        ),
        b = i.useMemo(
            () => ({
                ...m.refs,
                setReference: E,
                setPositionReference: g,
                domReference: p,
            }),
            [m.refs, E, g],
        ),
        y = i.useMemo(
            () => ({
                ...m.elements,
                domReference: _,
            }),
            [m.elements, _],
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
        (0, a.Xj)(() => {
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
function eu(e, t, n) {
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
                                        var o;
                                        null == (o = r.get(n)) || o.push(a),
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
function ed(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        n = e.map((e) => (null == e ? void 0 : e.floating)),
        r = e.map((e) => (null == e ? void 0 : e.item)),
        a = i.useCallback((t) => eu(t, e, "reference"), t),
        o = i.useCallback((t) => eu(t, e, "floating"), n),
        s = i.useCallback((t) => eu(t, e, "item"), r);
    return i.useMemo(
        () => ({
            getReferenceProps: a,
            getFloatingProps: o,
            getItemProps: s,
        }),
        [a, o, s],
    );
}
let ef = "Escape";
function e_(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n;
    }
}
let ep = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function eh(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function em(e, t) {
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
function eg(e, t) {
    void 0 === t && (t = {});
    let {
            open: n,
            elements: { floating: r },
        } = e,
        { duration: o = 250 } = t,
        s = ("number" == typeof o ? o : o.close) || 0,
        [c, u] = i.useState("unmounted"),
        d = em(n, s);
    return (
        d || "close" !== c || u("unmounted"),
        (0, a.Xj)(() => {
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
function eE(e, t) {
    void 0 === t && (t = {});
    let { initial: n = { opacity: 0 }, open: r, close: o, common: s, duration: l = 250 } = t,
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
        _ = (f ? l : l.open) || 0,
        p = (f ? l : l.close) || 0,
        [h, m] = i.useState(() => ({
            ...eh(s, d),
            ...eh(n, d),
        })),
        { isMounted: g, status: E } = eg(e, { duration: l }),
        b = (0, a.II)(n),
        y = (0, a.II)(r),
        O = (0, a.II)(o),
        v = (0, a.II)(s);
    return (
        (0, a.Xj)(() => {
            let e = eh(b.current, d),
                t = eh(O.current, d),
                n = eh(v.current, d),
                r = eh(y.current, d) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
            if (
                ("initial" === E &&
                    m((t) => ({
                        transitionProperty: t.transitionProperty,
                        ...n,
                        ...e,
                    })),
                "open" === E &&
                    m({
                        transitionProperty: Object.keys(r).map(ep).join(","),
                        transitionDuration: _ + "ms",
                        ...n,
                        ...r,
                    }),
                "close" === E)
            ) {
                let r = t || e;
                m({
                    transitionProperty: Object.keys(r).map(ep).join(","),
                    transitionDuration: p + "ms",
                    ...n,
                    ...r,
                });
            }
        }, [p, O, b, y, v, _, E, d]),
        {
            isMounted: g,
            styles: h,
        }
    );
}
function eb(e, t, n) {
    return (
        void 0 === n && (n = !0),
        e
            .filter((e) => {
                var r;
                return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
            })
            .flatMap((t) => [t, ...eb(e, t.id, n)])
    );
}
function ey(e, t) {
    let [n, r] = e,
        i = !1,
        a = t.length;
    for (let e = 0, o = a - 1; e < a; o = e++) {
        let [a, s] = t[e] || [0, 0],
            [l, c] = t[o] || [0, 0];
        s >= r != c >= r && n <= ((l - a) * (r - s)) / (c - s) + a && (i = !i);
    }
    return i;
}
function eO(e, t) {
    return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function ev(e) {
    void 0 === e && (e = {});
    let { buffer: t = 0.5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e,
        i = { current: -1 },
        a = !1,
        o = null,
        l = null,
        c = "undefined" != typeof performance ? performance.now() : 0;
    function u(e, t) {
        let n = performance.now(),
            r = n - c;
        if (null === o || null === l || 0 === r) return (o = e), (l = t), (c = n), null;
        let i = e - o,
            a = t - l,
            s = Math.sqrt(i * i + a * a) / r;
        return (o = e), (l = t), (c = n), s;
    }
    let d = (e) => {
        let { x: n, y: o, placement: l, elements: c, onClose: d, nodeId: f, tree: _ } = e;
        return function (e) {
            function p() {
                R(i), d();
            }
            if ((R(i), !c.domReference || !c.floating || null == l || null == n || null == o)) return;
            let { clientX: h, clientY: m } = e,
                g = [h, m],
                E = j(e),
                b = "mouseleave" === e.type,
                y = k(c.floating, E),
                O = k(c.domReference, E),
                v = c.domReference.getBoundingClientRect(),
                I = c.floating.getBoundingClientRect(),
                T = l.split("-")[0],
                S = n > I.right - I.width / 2,
                A = o > I.bottom - I.height / 2,
                C = eO(g, v),
                N = I.width > v.width,
                P = I.height > v.height,
                D = (N ? v : I).left,
                w = (N ? v : I).right,
                x = (P ? v : I).top,
                L = (P ? v : I).bottom;
            if (y && ((a = !0), !b)) return;
            if ((O && (a = !1), O && !b)) {
                a = !0;
                return;
            }
            if (
                (b && (0, s.kK)(e.relatedTarget) && k(c.floating, e.relatedTarget)) ||
                (_ && eb(_.nodesRef.current, f).length)
            )
                return;
            if (
                ("top" === T && o >= v.bottom - 1) ||
                ("bottom" === T && o <= v.top + 1) ||
                ("left" === T && n >= v.right - 1) ||
                ("right" === T && n <= v.left + 1)
            )
                return p();
            let M = [];
            switch (T) {
                case "top":
                    M = [
                        [D, v.top + 1],
                        [D, I.bottom - 1],
                        [w, I.bottom - 1],
                        [w, v.top + 1],
                    ];
                    break;
                case "bottom":
                    M = [
                        [D, I.top + 1],
                        [D, v.bottom - 1],
                        [w, v.bottom - 1],
                        [w, I.top + 1],
                    ];
                    break;
                case "left":
                    M = [
                        [I.right - 1, L],
                        [I.right - 1, x],
                        [v.left + 1, x],
                        [v.left + 1, L],
                    ];
                    break;
                case "right":
                    M = [
                        [v.right - 1, L],
                        [v.right - 1, x],
                        [I.left + 1, x],
                        [I.left + 1, L],
                    ];
            }
            function U(e) {
                let [n, r] = e;
                switch (T) {
                    case "top":
                        return [
                            [N ? n + t / 2 : S ? n + 4 * t : n - 4 * t, r + t + 1],
                            [N ? n - t / 2 : S ? n + 4 * t : n - 4 * t, r + t + 1],
                            [I.left, S || N ? I.bottom - t : I.top],
                            [I.right, S ? (N ? I.bottom - t : I.top) : I.bottom - t],
                        ];
                    case "bottom":
                        return [
                            [N ? n + t / 2 : S ? n + 4 * t : n - 4 * t, r - t],
                            [N ? n - t / 2 : S ? n + 4 * t : n - 4 * t, r - t],
                            [I.left, S || N ? I.top + t : I.bottom],
                            [I.right, S ? (N ? I.top + t : I.bottom) : I.top + t],
                        ];
                    case "left": {
                        let e = [n + t + 1, P ? r + t / 2 : A ? r + 4 * t : r - 4 * t],
                            i = [n + t + 1, P ? r - t / 2 : A ? r + 4 * t : r - 4 * t];
                        return [
                            [A || P ? I.right - t : I.left, I.top],
                            [A ? (P ? I.right - t : I.left) : I.right - t, I.bottom],
                            e,
                            i,
                        ];
                    }
                    case "right":
                        return [
                            [n - t, P ? r + t / 2 : A ? r + 4 * t : r - 4 * t],
                            [n - t, P ? r - t / 2 : A ? r + 4 * t : r - 4 * t],
                            [A || P ? I.left + t : I.right, I.top],
                            [A ? (P ? I.left + t : I.right) : I.left + t, I.bottom],
                        ];
                }
            }
            if (!ey([h, m], M)) {
                if (a && !C) return p();
                if (!b && r) {
                    let t = u(e.clientX, e.clientY),
                        n = 0.1;
                    if (null !== t && t < n) return p();
                }
                ey([h, m], U([n, o])) ? !a && r && (i.current = window.setTimeout(p, 40)) : p();
            }
        };
    };
    return (d.__options = { blockPointerEvents: n }), d;
}
