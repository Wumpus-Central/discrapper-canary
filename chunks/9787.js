n.d(t, {
    NI: () => Q,
    YF: () => q,
    bQ: () => K,
});
var r,
    i = n(647438),
    a = n(71448);
n(951288);
var o = n(274676);
n(603113);
var s = n(863785);
let l = "data-floating-ui-focusable",
    c = "active",
    u = "selected",
    d = "ArrowLeft",
    f = "ArrowRight",
    _ = "ArrowUp",
    p = "ArrowDown",
    h = { ...(r || (r = n.t(i, 2))) },
    m = !1,
    g = 0,
    E = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + g++;
function b() {
    let [e, t] = i.useState(() => (m ? E() : void 0));
    return (
        (0, a.Xj)(() => {
            null == e && t(E());
        }, []),
        i.useEffect(() => {
            m = !0;
        }, []),
        e
    );
}
let y = h.useId || b;
function O() {
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
    I = i.createContext(null),
    T = () => {
        var e;
        return (null == (e = i.useContext(v)) ? void 0 : e.id) || null;
    },
    S = () => i.useContext(I);
function A(e) {
    return "data-floating-ui-" + e;
}
let C = null,
    N = 0;
function R(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
let P = {
    inert: new WeakMap(),
    "aria-hidden": new WeakMap(),
    none: new WeakMap(),
};
function w(e) {
    return "inert" === e ? P.inert : "aria-hidden" === e ? P["aria-hidden"] : P.none;
}
let D = new WeakSet(),
    L = null,
    x = 0,
    M = (e) => e && (e.host || M(e.parentNode)),
    j = (e, t) =>
        t
            .map((t) => {
                if (e.contains(t)) return t;
                let n = M(t);
                return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
function k(e, t, n, r) {
    let i = "data-floating-ui-inert",
        a = r ? "inert" : n ? "aria-hidden" : null,
        o = j(t, e),
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
                            r = w(a),
                            o = (r.get(e) || 0) + 1,
                            s = (u.get(e) || 0) + 1;
                        r.set(e, o),
                            u.set(e, s),
                            c.push(e),
                            1 === o && n && D.add(e),
                            1 === s && e.setAttribute(i, ""),
                            !n && a && e.setAttribute(a, "inert" === a ? "" : "true");
                    }
            });
    }
    return (
        o.forEach(d),
        f(t),
        s.clear(),
        x++,
        () => {
            c.forEach((e) => {
                let t = w(a),
                    n = (t.get(e) || 0) - 1,
                    r = (u.get(e) || 0) - 1;
                t.set(e, n),
                    u.set(e, r),
                    n || (!D.has(e) && a && e.removeAttribute(a), D.delete(e)),
                    r || e.removeAttribute(i);
            }),
                --x ||
                    ((P.inert = new WeakMap()),
                    (P["aria-hidden"] = new WeakMap()),
                    (P.none = new WeakMap()),
                    (D = new WeakSet()),
                    (L = {}));
        }
    );
}
let U = null,
    G = null,
    B = () => React.useContext(U),
    Z = 20,
    F = null;
function V() {
    F = F.filter((e) => e.isConnected);
}
let H = {
        pointerdown: "onPointerDown",
        mousedown: "onMouseDown",
        click: "onClick",
    },
    Y = {
        pointerdown: "onPointerDownCapture",
        mousedown: "onMouseDownCapture",
        click: "onClickCapture",
    },
    W = (e) => {
        var t, n;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
    };
function K(e, t) {
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
        E = S(),
        b = (0, a.iW)("function" == typeof d ? d : () => !1),
        y = "function" == typeof d ? b : d,
        O = i.useRef(!1),
        { escapeKey: v, outsidePress: I } = W(m),
        { escapeKey: T, outsidePress: C } = W(g),
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
                u = "[" + A("inert") + "]",
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
            if ((0, o.Re)(c) && x) {
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
            y && _.addEventListener(f, C ? D : w, C);
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
                    y && _.removeEventListener(f, C ? D : w, C),
                    p.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, s, u, y, f, n, r, h, c, v, I, R, T, P, w, C, D]),
        i.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, y, f]);
    let L = i.useMemo(
            () => ({
                onKeyDown: R,
                ...(_ && {
                    [H[p]]: (e) => {
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
        x = i.useMemo(
            () => ({
                onKeyDown: R,
                onMouseDown() {
                    O.current = !0;
                },
                onMouseUp() {
                    O.current = !0;
                },
                [Y[f]]: () => {
                    l.current.insideReactTree = !0;
                },
            }),
            [R, f, l],
        );
    return i.useMemo(
        () =>
            c
                ? {
                      reference: L,
                      floating: x,
                  }
                : {},
        [c, L, x],
    );
}
function z(e) {
    let { open: t = !1, onOpenChange: n, elements: r } = e,
        o = y(),
        s = i.useRef({}),
        [l] = i.useState(() => O()),
        c = null != T(),
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
function q(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        n = z({
            ...e,
            elements: {
                reference: null,
                floating: null,
                ...e.elements,
            },
        }),
        r = e.rootContext || n,
        l = r.elements,
        [c, u] = i.useState(null),
        [d, f] = i.useState(null),
        _ = (null == l ? void 0 : l.domReference) || c,
        p = i.useRef(null),
        h = S();
    (0, a.Xj)(() => {
        _ && (p.current = _);
    }, [_]);
    let m = (0, s.YF)({
            ...e,
            elements: {
                ...l,
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
function X(e, t, n) {
    let r = new Map(),
        i = "item" === n,
        a = e;
    if (i && e) {
        let { [c]: t, [u]: n, ...r } = e;
        a = r;
    }
    return {
        ...("floating" === n && {
            tabIndex: -1,
            [l]: "",
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
                            if (!(i && [c, u].includes(n)))
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
function Q(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        n = e.map((e) => (null == e ? void 0 : e.floating)),
        r = e.map((e) => (null == e ? void 0 : e.item)),
        a = i.useCallback((t) => X(t, e, "reference"), t),
        o = i.useCallback((t) => X(t, e, "floating"), n),
        s = i.useCallback((t) => X(t, e, "item"), r);
    return i.useMemo(
        () => ({
            getReferenceProps: a,
            getFloatingProps: o,
            getItemProps: s,
        }),
        [a, o, s],
    );
}
let J = "Escape";
function $(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n;
    }
}
function ee(e, t) {
    let [n, r] = React.useState(e);
    return (
        e && !n && r(!0),
        React.useEffect(() => {
            if (!e && n) {
                let e = setTimeout(() => r(!1), t);
                return () => clearTimeout(e);
            }
        }, [e, n, t]),
        n
    );
}
