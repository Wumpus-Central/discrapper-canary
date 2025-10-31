n.d(t, {
    NI: () => J,
    YF: () => X,
    Y_: () => ea,
    bQ: () => z,
});
var r,
    i = n(647438),
    a = n(71448);
n(951288);
var o = n(274676),
    s = n(603113),
    l = n(863785);
let c = "data-floating-ui-focusable",
    u = "active",
    d = "selected",
    f = "ArrowLeft",
    _ = "ArrowRight",
    p = "ArrowUp",
    h = "ArrowDown",
    m = { ...(r || (r = n.t(i, 2))) },
    g = !1,
    E = 0,
    b = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + E++;
function y() {
    let [e, t] = i.useState(() => (g ? b() : void 0));
    return (
        (0, a.Xj)(() => {
            null == e && t(b());
        }, []),
        i.useEffect(() => {
            g = !0;
        }, []),
        e
    );
}
let O = m.useId || y;
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
let I = i.createContext(null),
    T = i.createContext(null),
    S = () => {
        var e;
        return (null == (e = i.useContext(I)) ? void 0 : e.id) || null;
    },
    A = () => i.useContext(T);
function C(e) {
    return "data-floating-ui-" + e;
}
let N = null,
    R = 0;
function P(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
let w = {
    inert: new WeakMap(),
    "aria-hidden": new WeakMap(),
    none: new WeakMap(),
};
function D(e) {
    return "inert" === e ? w.inert : "aria-hidden" === e ? w["aria-hidden"] : w.none;
}
let x = new WeakSet(),
    L = null,
    M = 0,
    j = (e) => e && (e.host || j(e.parentNode)),
    k = (e, t) =>
        t
            .map((t) => {
                if (e.contains(t)) return t;
                let n = j(t);
                return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
function U(e, t, n, r) {
    let i = "data-floating-ui-inert",
        a = r ? "inert" : n ? "aria-hidden" : null,
        o = k(t, e),
        s = new Set(),
        l = new Set(o),
        c = [];
    L[i] || (L[i] = new WeakMap());
    let u = L[i];
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
                            r = D(a),
                            o = (r.get(e) || 0) + 1,
                            s = (u.get(e) || 0) + 1;
                        r.set(e, o),
                            u.set(e, s),
                            c.push(e),
                            1 === o && n && x.add(e),
                            1 === s && e.setAttribute(i, ""),
                            !n && a && e.setAttribute(a, "inert" === a ? "" : "true");
                    }
            });
    }
    return (
        o.forEach(d),
        f(t),
        s.clear(),
        M++,
        () => {
            c.forEach((e) => {
                let t = D(a),
                    n = (t.get(e) || 0) - 1,
                    r = (u.get(e) || 0) - 1;
                t.set(e, n),
                    u.set(e, r),
                    n || (!x.has(e) && a && e.removeAttribute(a), x.delete(e)),
                    r || e.removeAttribute(i);
            }),
                --M ||
                    ((w.inert = new WeakMap()),
                    (w["aria-hidden"] = new WeakMap()),
                    (w.none = new WeakMap()),
                    (x = new WeakSet()),
                    (L = {}));
        }
    );
}
let G = null,
    B = null,
    Z = () => React.useContext(G),
    F = 20,
    V = null;
function H() {
    V = V.filter((e) => e.isConnected);
}
let Y = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick",
    },
    W = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture",
    },
    K = (e) => {
        var t, n;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
    };
function z(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, elements: s, dataRef: l } = e,
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
        E = A(),
        b = (0, a.iW)("function" == typeof d ? d : () => !1),
        y = "function" == typeof d ? b : d,
        O = i.useRef(!1),
        { escapeKey: v, outsidePress: I } = K(m),
        { escapeKey: T, outsidePress: S } = K(g),
        N = i.useRef(!1),
        R = (0, a.iW)((e) => {
            var t;
            if (!n || !c || !u || "Escape" !== e.key || N.current) return;
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
        w = (0, a.iW)((e) => {
            var t;
            let n = l.current.insideReactTree;
            l.current.insideReactTree = !1;
            let i = O.current;
            if (((O.current = !1), ("click" === f && i) || n || ("function" == typeof y && !y(e)))) return;
            let c = (0, a.U9)(e),
                u = "[" + C("inert") + "]",
                d = (0, a.Me)(s.floating).querySelectorAll(u),
                _ = (0, o.kK)(c) ? c : null;
            for (; _ && !(0, o.Py)(_); ) {
                let e = (0, o.Ow)(_);
                if ((0, o.Py)(e) || !(0, o.kK)(e)) break;
                _ = e;
            }
            if (
                d.length &&
                (0, o.kK)(c) &&
                !(0, a.ex)(c) &&
                !(0, a.r3)(c, s.floating) &&
                Array.from(d).every((e) => !(0, a.r3)(_, e))
            )
                return;
            if ((0, o.Re)(c) && L) {
                let t = (0, o.Py)(c),
                    n = (0, o.Dx)(c),
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
            let p = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                h =
                    E &&
                    (0, a.El)(E.nodesRef.current, p).some((t) => {
                        var n;
                        return (0, a.Pe)(e, null == (n = t.context) ? void 0 : n.elements.floating);
                    });
            if ((0, a.Pe)(e, s.floating) || (0, a.Pe)(e, s.domReference) || h) return;
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
        D = (0, a.iW)((e) => {
            var t;
            let n = () => {
                var t;
                w(e), null == (t = (0, a.U9)(e)) || t.removeEventListener(f, n);
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
            window.clearTimeout(e), (N.current = !0);
        }
        function d() {
            e = window.setTimeout(
                () => {
                    N.current = !1;
                },
                5 * !!(0, o.Pf)(),
            );
        }
        let _ = (0, a.Me)(s.floating);
        u &&
            (_.addEventListener("keydown", T ? P : R, T),
            _.addEventListener("compositionstart", i),
            _.addEventListener("compositionend", d)),
            y && _.addEventListener(f, S ? D : w, S);
        let p = [];
        return (
            h &&
                ((0, o.kK)(s.domReference) && (p = (0, o.Kx)(s.domReference)),
                (0, o.kK)(s.floating) && (p = p.concat((0, o.Kx)(s.floating))),
                !(0, o.kK)(s.reference) &&
                    s.reference &&
                    s.reference.contextElement &&
                    (p = p.concat((0, o.Kx)(s.reference.contextElement)))),
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
                    y && _.removeEventListener(f, S ? D : w, S),
                    p.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, s, u, y, f, n, r, h, c, v, I, R, T, P, w, S, D]),
        i.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, y, f]);
    let x = i.useMemo(
            () => ({
                onKeyDown: R,
                ...(_ && {
                    [Y[p]]: (e) => {
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
                [W[f]]: () => {
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
function q(e) {
    let { open: t = !1, onOpenChange: n, elements: r } = e,
        o = O(),
        s = i.useRef({}),
        [l] = i.useState(() => v()),
        c = null != S(),
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
function X(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        n = q({
            ...e,
            elements: {
                reference: null,
                floating: null,
                ...e.elements,
            },
        }),
        r = e.rootContext || n,
        s = r.elements,
        [c, u] = i.useState(null),
        [d, f] = i.useState(null),
        _ = (null == s ? void 0 : s.domReference) || c,
        p = i.useRef(null),
        h = A();
    (0, a.Xj)(() => {
        _ && (p.current = _);
    }, [_]);
    let m = (0, l.YF)({
            ...e,
            elements: {
                ...s,
                ...(d && { reference: d }),
            },
        }),
        g = i.useCallback(
            (e) => {
                let t = (0, o.kK)(e)
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
                ((0, o.kK)(e) || null === e) && ((p.current = e), u(e)),
                    ((0, o.kK)(m.refs.reference.current) ||
                        null === m.refs.reference.current ||
                        (null !== e && !(0, o.kK)(e))) &&
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
function Q(e, t, n) {
    let r = new Map(),
        i = "item" === n,
        a = e;
    if (i && e) {
        let { [u]: t, [d]: n, ...r } = e;
        a = r;
    }
    return {
        ...("floating" === n && {
            tabIndex: -1,
            [c]: "",
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
                            if (!(i && [u, d].includes(n)))
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
function J(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        n = e.map((e) => (null == e ? void 0 : e.floating)),
        r = e.map((e) => (null == e ? void 0 : e.item)),
        a = i.useCallback((t) => Q(t, e, "reference"), t),
        o = i.useCallback((t) => Q(t, e, "floating"), n),
        s = i.useCallback((t) => Q(t, e, "item"), r);
    return i.useMemo(
        () => ({
            getReferenceProps: a,
            getFloatingProps: o,
            getItemProps: s,
        }),
        [a, o, s],
    );
}
let $ = "Escape";
function ee(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n;
    }
}
let et = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function en(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function er(e, t) {
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
function ei(e, t) {
    void 0 === t && (t = {});
    let {
            open: n,
            elements: { floating: r },
        } = e,
        { duration: o = 250 } = t,
        l = ("number" == typeof o ? o : o.close) || 0,
        [c, u] = i.useState("unmounted"),
        d = er(n, l);
    return (
        d || "close" !== c || u("unmounted"),
        (0, a.Xj)(() => {
            if (r) {
                if (n) {
                    u("initial");
                    let e = requestAnimationFrame(() => {
                        s.flushSync(() => {
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
function ea(e, t) {
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
            ...en(s, d),
            ...en(n, d),
        })),
        { isMounted: g, status: E } = ei(e, { duration: l }),
        b = (0, a.II)(n),
        y = (0, a.II)(r),
        O = (0, a.II)(o),
        v = (0, a.II)(s);
    return (
        (0, a.Xj)(() => {
            let e = en(b.current, d),
                t = en(O.current, d),
                n = en(v.current, d),
                r = en(y.current, d) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
            if (
                ("initial" === E &&
                    m((t) => ({
                        transitionProperty: t.transitionProperty,
                        ...n,
                        ...e,
                    })),
                "open" === E &&
                    m({
                        transitionProperty: Object.keys(r).map(et).join(","),
                        transitionDuration: _ + "ms",
                        ...n,
                        ...r,
                    }),
                "close" === E)
            ) {
                let r = t || e;
                m({
                    transitionProperty: Object.keys(r).map(et).join(","),
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
