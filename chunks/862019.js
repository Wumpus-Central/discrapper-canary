"use strict";
n.d(t, {
    $c: () => y,
    DL: () => ef,
    Mk: () => D,
    P6: () => N,
    R1: () => T,
    XF: () => W,
    bv: () => ec,
    fI: () => S,
    iB: () => eh,
    s3: () => J,
    s9: () => eo,
    we: () => el,
    zR: () => er,
});
var r,
    i = n(64700),
    s = n(357786),
    a = n(627968),
    o = n(84157),
    l = n(111975),
    u = n(340287),
    c = n(879821);
let d = "active",
    _ = "selected",
    f = { ...(r || (r = n.t(i, 2))) },
    p = !1,
    h = 0,
    E = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + h++,
    m =
        f.useId ||
        function () {
            let [e, t] = i.useState(() => (p ? E() : void 0));
            return (
                (0, s.OS)(() => {
                    null == e && t(E());
                }, []),
                i.useEffect(() => {
                    p = !0;
                }, []),
                e
            );
        };
function g() {
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
let A = i.createContext(null),
    I = i.createContext(null),
    T = () => {
        var e;
        return (null == (e = i.useContext(A)) ? void 0 : e.id) || null;
    };
function S(e) {
    let t = m(),
        n = i.useContext(I),
        r = T(),
        a = e || r;
    return (
        (0, s.OS)(() => {
            if (!t) return;
            let e = { id: t, parentId: a };
            return (
                null == n || n.addNode(e),
                () => {
                    null == n || n.removeNode(e);
                }
            );
        }, [n, t, a]),
        t
    );
}
function y(e) {
    let { children: t, id: n } = e,
        r = T();
    return (0, a.jsx)(A.Provider, { value: i.useMemo(() => ({ id: n, parentId: r }), [n, r]), children: t });
}
function N(e) {
    let { children: t } = e,
        n = i.useRef([]),
        r = i.useCallback((e) => {
            n.current = [...n.current, e];
        }, []),
        s = i.useCallback((e) => {
            n.current = n.current.filter((t) => t !== e);
        }, []),
        [o] = i.useState(() => g());
    return (0, a.jsx)(I.Provider, {
        value: i.useMemo(() => ({ nodesRef: n, addNode: r, removeNode: s, events: o }), [r, s, o]),
        children: t,
    });
}
function v(e) {
    return "data-floating-ui-" + e;
}
function C(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
}
let O = v("safe-polygon");
function R(e, t, n) {
    if (n && !(0, s.Go)(n)) return 0;
    if ("number" == typeof e) return e;
    if ("function" == typeof e) {
        let n = e();
        return "number" == typeof n ? n : null == n ? void 0 : n[t];
    }
    return null == e ? void 0 : e[t];
}
function b(e) {
    return "function" == typeof e ? e() : e;
}
function D(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, dataRef: a, events: l, elements: u } = e,
        { enabled: c = !0, delay: d = 0, handleClose: _ = null, mouseOnly: f = !1, restMs: p = 0, move: h = !0 } = t,
        E = i.useContext(I),
        m = T(),
        g = (0, s.SE)(_),
        A = (0, s.SE)(d),
        S = (0, s.SE)(n),
        y = (0, s.SE)(p),
        N = i.useRef(),
        v = i.useRef(-1),
        D = i.useRef(),
        L = i.useRef(-1),
        w = i.useRef(!0),
        M = i.useRef(!1),
        P = i.useRef(() => {}),
        x = i.useRef(!1),
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
            t || (C(v), C(L), (w.current = !0), (x.current = !1));
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
                let i = R(A.current, "close", N.current);
                i && !D.current
                    ? (C(v), (v.current = window.setTimeout(() => r(!1, e, n), i)))
                    : t && (C(v), r(!1, e, n));
            },
            [A, r],
        ),
        G = (0, s.Jt)(() => {
            P.current(), (D.current = void 0);
        }),
        F = (0, s.Jt)(() => {
            if (M.current) {
                let e = (0, s.YE)(u.floating).body;
                (e.style.pointerEvents = ""), e.removeAttribute(O), (M.current = !1);
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
            if ((C(v), (w.current = !1), (f && !(0, s.Go)(N.current)) || (b(y.current) > 0 && !R(A.current, "open"))))
                return;
            let t = R(A.current, "open", N.current);
            t
                ? (v.current = window.setTimeout(() => {
                      S.current || r(!0, e, "hover");
                  }, t))
                : n || r(!0, e, "hover");
        }
        function t(e) {
            if (V()) return void F();
            P.current();
            let t = (0, s.YE)(u.floating);
            if ((C(L), (x.current = !1), g.current && a.current.floatingContext)) {
                n || C(v),
                    (D.current = g.current({
                        ...a.current.floatingContext,
                        tree: E,
                        x: e.clientX,
                        y: e.clientY,
                        onClose() {
                            F(), G(), V() || U(e, !0, "safe-polygon");
                        },
                    }));
                let r = D.current;
                t.addEventListener("mousemove", r),
                    (P.current = () => {
                        t.removeEventListener("mousemove", r);
                    });
                return;
            }
            ("touch" === N.current && (0, s.gR)(u.floating, e.relatedTarget)) || U(e);
        }
        function i(e) {
            V() ||
                (a.current.floatingContext &&
                    (null == g.current ||
                        g.current({
                            ...a.current.floatingContext,
                            tree: E,
                            x: e.clientX,
                            y: e.clientY,
                            onClose() {
                                F(), G(), V() || U(e);
                            },
                        })(e)));
        }
        function l() {
            C(v);
        }
        function d(e) {
            V() || U(e, !1);
        }
    }, [u, c, e, f, h, U, G, F, r, n, S, E, A, g, a, V, y]),
        (0, s.OS)(() => {
            var e, t;
            if (c && n && null != (e = g.current) && null != (e = e.__options) && e.blockPointerEvents && k()) {
                M.current = !0;
                let e = u.floating;
                if ((0, o.vq)(u.domReference) && e) {
                    let n = (0, s.YE)(u.floating).body;
                    n.setAttribute(O, "");
                    let r = u.domReference,
                        i =
                            null == E ||
                            null == (t = E.nodesRef.current.find((e) => e.id === m)) ||
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
        }, [c, n, m, u, E, g, k]),
        (0, s.OS)(() => {
            n || ((N.current = void 0), (x.current = !1), G(), F());
        }, [n, G, F]),
        i.useEffect(
            () => () => {
                G(), C(v), C(L), F();
            },
            [c, u.domReference, G, F],
        );
    let B = i.useMemo(() => {
        function e(e) {
            N.current = e.pointerType;
        }
        return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove(e) {
                let { nativeEvent: t } = e;
                function i() {
                    w.current || S.current || r(!0, t, "hover");
                }
                (f && !(0, s.Go)(N.current)) ||
                    n ||
                    0 === b(y.current) ||
                    (x.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                    (C(L),
                    "touch" === N.current ? i() : ((x.current = !0), (L.current = window.setTimeout(i, b(y.current)))));
            },
        };
    }, [f, r, n, S, y]);
    return i.useMemo(() => (c ? { reference: B } : {}), [c, B]);
}
let L = 0;
function w(e, t) {
    void 0 === t && (t = {});
    let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
    r && cancelAnimationFrame(L);
    let s = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
    i ? s() : (L = requestAnimationFrame(s));
}
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
let P = { inert: new WeakMap(), "aria-hidden": new WeakMap(), none: new WeakMap() };
function x(e) {
    return "inert" === e ? P.inert : "aria-hidden" === e ? P["aria-hidden"] : P.none;
}
let k = new WeakSet(),
    U = {},
    G = 0,
    F = (e) => e && (e.host || F(e.parentNode));
function V(e, t, n) {
    var r, i, s;
    let a, l, u, c, d, _, f;
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let p = ((null == (r = e[0]) ? void 0 : r.ownerDocument) || document).body;
    return (
        (i = e.concat(Array.from(p.querySelectorAll('[aria-live],[role="status"],output')))),
        (s = t),
        (a = "data-floating-ui-inert"),
        (l = n ? "inert" : s ? "aria-hidden" : null),
        (u = i
            .map((e) => {
                if (p.contains(e)) return e;
                let t = F(e);
                return p.contains(t) ? t : null;
            })
            .filter((e) => null != e)),
        (c = new Set()),
        (d = new Set(u)),
        (_ = []),
        U[a] || (U[a] = new WeakMap()),
        (f = U[a]),
        u.forEach(function e(t) {
            !(!t || c.has(t)) && (c.add(t), t.parentNode && e(t.parentNode));
        }),
        (function e(t) {
            !t ||
                d.has(t) ||
                [].forEach.call(t.children, (t) => {
                    if ("script" !== (0, o.mq)(t))
                        if (c.has(t)) e(t);
                        else {
                            let e = l ? t.getAttribute(l) : null,
                                n = null !== e && "false" !== e,
                                r = x(l),
                                i = (r.get(t) || 0) + 1,
                                s = (f.get(t) || 0) + 1;
                            r.set(t, i),
                                f.set(t, s),
                                _.push(t),
                                1 === i && n && k.add(t),
                                1 === s && t.setAttribute(a, ""),
                                !n && l && t.setAttribute(l, "inert" === l ? "" : "true");
                        }
                });
        })(p),
        c.clear(),
        G++,
        () => {
            _.forEach((e) => {
                let t = x(l),
                    n = (t.get(e) || 0) - 1,
                    r = (f.get(e) || 0) - 1;
                t.set(e, n),
                    f.set(e, r),
                    n || (!k.has(e) && l && e.removeAttribute(l), k.delete(e)),
                    r || e.removeAttribute(a);
            }),
                --G ||
                    ((P.inert = new WeakMap()),
                    (P["aria-hidden"] = new WeakMap()),
                    (P.none = new WeakMap()),
                    (k = new WeakSet()),
                    (U = {}));
        }
    );
}
let B = {
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
    H = i.forwardRef(function (e, t) {
        let [n, r] = i.useState();
        (0, s.OS)(() => {
            (0, s.nr)() && r("button");
        }, []);
        let o = { ref: t, tabIndex: 0, role: n, "aria-hidden": !n || void 0, [v("focus-guard")]: "", style: B };
        return (0, a.jsx)("span", { ...e, ...o });
    }),
    j = i.createContext(null),
    Y = v("portal");
function W(e) {
    let { children: t, id: n, root: r, preserveTabOrder: l = !0 } = e,
        c = (function (e) {
            void 0 === e && (e = {});
            let { id: t, root: n } = e,
                r = m(),
                a = K(),
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
                    (n.id = r), n.setAttribute(Y, ""), e.appendChild(n), (c.current = n), u(n);
                }, [t, r]),
                (0, s.OS)(() => {
                    if (null === n || !r || c.current) return;
                    let e = n || (null == a ? void 0 : a.portalNode);
                    e && !(0, o.Ll)(e) && (e = e.current), (e = e || document.body);
                    let i = null;
                    t && (((i = document.createElement("div")).id = t), e.appendChild(i));
                    let s = document.createElement("div");
                    (s.id = r), s.setAttribute(Y, ""), (e = i || e).appendChild(s), (c.current = s), u(s);
                }, [t, n, r, a]),
                l
            );
        })({ id: n, root: r }),
        [d, _] = i.useState(null),
        f = i.useRef(null),
        p = i.useRef(null),
        h = i.useRef(null),
        E = i.useRef(null),
        g = null == d ? void 0 : d.modal,
        A = null == d ? void 0 : d.open,
        I = !!d && !d.modal && d.open && l && !!(r || c);
    return (
        i.useEffect(() => {
            if (c && l && !g)
                return (
                    c.addEventListener("focusin", e, !0),
                    c.addEventListener("focusout", e, !0),
                    () => {
                        c.removeEventListener("focusin", e, !0), c.removeEventListener("focusout", e, !0);
                    }
                );
            function e(e) {
                c && (0, s.Qp)(e) && ("focusin" === e.type ? s.yV : s.N)(c);
            }
        }, [c, l, g]),
        i.useEffect(() => {
            !c || A || (0, s.yV)(c);
        }, [A, c]),
        (0, a.jsxs)(j.Provider, {
            value: i.useMemo(
                () => ({
                    preserveTabOrder: l,
                    beforeOutsideRef: f,
                    afterOutsideRef: p,
                    beforeInsideRef: h,
                    afterInsideRef: E,
                    portalNode: c,
                    setFocusManagerState: _,
                }),
                [l, c],
            ),
            children: [
                I &&
                    c &&
                    (0, a.jsx)(H, {
                        "data-type": "outside",
                        ref: f,
                        onFocus: (e) => {
                            if ((0, s.Qp)(e, c)) {
                                var t;
                                null == (t = h.current) || t.focus();
                            } else {
                                let e = d ? d.domReference : null,
                                    t = (0, s.XJ)(e);
                                null == t || t.focus();
                            }
                        },
                    }),
                I && c && (0, a.jsx)("span", { "aria-owns": c.id, style: B }),
                c && u.createPortal(t, c),
                I &&
                    c &&
                    (0, a.jsx)(H, {
                        "data-type": "outside",
                        ref: p,
                        onFocus: (e) => {
                            if ((0, s.Qp)(e, c)) {
                                var t;
                                null == (t = E.current) || t.focus();
                            } else {
                                let t = d ? d.domReference : null,
                                    n = (0, s.vF)(t);
                                null == n || n.focus(),
                                    (null == d ? void 0 : d.closeOnFocusOut) &&
                                        (null == d || d.onOpenChange(!1, e.nativeEvent, "focus-out"));
                            }
                        },
                    }),
            ],
        })
    );
}
let K = () => i.useContext(j);
function $(e) {
    return i.useMemo(
        () => (t) => {
            e.forEach((e) => {
                e && (e.current = t);
            });
        },
        e,
    );
}
let z = [];
function q() {
    z = z.filter((e) => e.isConnected);
}
function X() {
    return q(), z[z.length - 1];
}
function Q(e, t) {
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
let Z = i.forwardRef(function (e, t) {
    return (0, a.jsx)("button", { ...e, type: "button", ref: t, tabIndex: -1, style: B });
});
function J(e) {
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
            closeOnFocusOut: E = !0,
            outsideElementsInert: m = !1,
            getInsideElements: g = () => [],
        } = e,
        {
            open: A,
            onOpenChange: T,
            events: S,
            dataRef: y,
            elements: { domReference: N, floating: O },
        } = t,
        R = (0, s.Jt)(() => {
            var e;
            return null == (e = y.current.floatingContext) ? void 0 : e.nodeId;
        }),
        b = (0, s.Jt)(g),
        D = "number" == typeof d && d < 0,
        L = (0, s.WZ)(N) && D,
        M = "u" > typeof HTMLElement && "inert" in HTMLElement.prototype,
        P = !M || c,
        x = !P || (M && m),
        k = (0, s.SE)(u),
        U = (0, s.SE)(d),
        G = (0, s.SE)(_),
        F = i.useContext(I),
        j = K(),
        Y = i.useRef(null),
        W = i.useRef(null),
        J = i.useRef(!1),
        ee = i.useRef(!1),
        et = i.useRef(-1),
        en = i.useRef(-1),
        er = null != j,
        ei = (0, s.nd)(O),
        es = (0, s.Jt)(function (e) {
            return void 0 === e && (e = ei), e ? (0, l.Kr)(e, (0, s.kQ)()) : [];
        }),
        ea = (0, s.Jt)((e) => {
            let t = es(e);
            return k.current
                .map((e) => (N && "reference" === e ? N : ei && "floating" === e ? ei : t))
                .filter(Boolean)
                .flat();
        });
    i.useEffect(() => {
        if (r || !p) return;
        function e(e) {
            if ("Tab" === e.key) {
                (0, s.gR)(ei, (0, s.RS)((0, s.YE)(ei))) && 0 === es().length && !L && (0, s.jo)(e);
                let t = ea(),
                    n = (0, s.EW)(e);
                "reference" === k.current[0] && n === N && ((0, s.jo)(e), e.shiftKey ? w(t[t.length - 1]) : w(t[1])),
                    "floating" === k.current[1] && n === ei && e.shiftKey && ((0, s.jo)(e), w(t[0]));
            }
        }
        let t = (0, s.YE)(ei);
        return (
            t.addEventListener("keydown", e),
            () => {
                t.removeEventListener("keydown", e);
            }
        );
    }, [r, N, ei, p, k, L, es, ea]),
        i.useEffect(() => {
            if (!r && O)
                return (
                    O.addEventListener("focusin", e),
                    () => {
                        O.removeEventListener("focusin", e);
                    }
                );
            function e(e) {
                let t = (0, s.EW)(e),
                    n = es().indexOf(t);
                -1 !== n && (et.current = n);
            }
        }, [r, O, es]),
        i.useEffect(() => {
            if (r || !E) return;
            function e() {
                (ee.current = !0),
                    setTimeout(() => {
                        ee.current = !1;
                    });
            }
            function t(e) {
                let t = e.relatedTarget,
                    n = e.currentTarget,
                    r = (0, s.EW)(e);
                queueMicrotask(() => {
                    let i = R(),
                        a = !(
                            (0, s.gR)(N, t) ||
                            (0, s.gR)(O, t) ||
                            (0, s.gR)(t, O) ||
                            (0, s.gR)(null == j ? void 0 : j.portalNode, t) ||
                            (null != t && t.hasAttribute(v("focus-guard"))) ||
                            (F &&
                                ((0, s.CM)(F.nodesRef.current, i).find((e) => {
                                    var n, r;
                                    return (
                                        (0, s.gR)(null == (n = e.context) ? void 0 : n.elements.floating, t) ||
                                        (0, s.gR)(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                                    );
                                }) ||
                                    (0, s.$4)(F.nodesRef.current, i).find((e) => {
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
                        (n === N && ei && Q(ei, k),
                        f &&
                            n !== N &&
                            !(null != r && r.isConnected) &&
                            (0, s.RS)((0, s.YE)(ei)) === (0, s.YE)(ei).body)
                    ) {
                        (0, o.sb)(ei) && ei.focus();
                        let e = et.current,
                            t = es(),
                            n = t[e] || t[t.length - 1] || ei;
                        (0, o.sb)(n) && n.focus();
                    }
                    if (y.current.insideReactTree) {
                        y.current.insideReactTree = !1;
                        return;
                    }
                    (L || !p) && t && a && !ee.current && t !== X() && ((J.current = !0), T(!1, e, "focus-out"));
                });
            }
            let n = !!(!F && j);
            function i() {
                C(en),
                    (y.current.insideReactTree = !0),
                    (en.current = window.setTimeout(() => {
                        y.current.insideReactTree = !1;
                    }));
            }
            if (O && (0, o.sb)(N))
                return (
                    N.addEventListener("focusout", t),
                    N.addEventListener("pointerdown", e),
                    O.addEventListener("focusout", t),
                    n && O.addEventListener("focusout", i, !0),
                    () => {
                        N.removeEventListener("focusout", t),
                            N.removeEventListener("pointerdown", e),
                            O.removeEventListener("focusout", t),
                            n && O.removeEventListener("focusout", i, !0);
                    }
                );
        }, [r, N, O, ei, p, F, j, T, E, f, es, L, R, k, y]);
    let eo = i.useRef(null),
        el = i.useRef(null),
        eu = $([eo, null == j ? void 0 : j.beforeInsideRef]),
        ec = $([el, null == j ? void 0 : j.afterInsideRef]);
    function ed(e) {
        return !r && h && p
            ? (0, a.jsx)(Z, {
                  ref: "start" === e ? Y : W,
                  onClick: (e) => T(!1, e.nativeEvent),
                  children: "string" == typeof h ? h : "Dismiss",
              })
            : null;
    }
    i.useEffect(() => {
        var e, t;
        if (r || !O) return;
        let n = Array.from(
                (null == j || null == (e = j.portalNode) ? void 0 : e.querySelectorAll("[" + v("portal") + "]")) || [],
            ),
            i = [
                O,
                null ==
                    (t = (F ? (0, s.$4)(F.nodesRef.current, R()) : []).find((e) => {
                        var t;
                        return (0, s.WZ)((null == (t = e.context) ? void 0 : t.elements.domReference) || null);
                    })) || null == (t = t.context)
                    ? void 0
                    : t.elements.domReference,
                ...n,
                ...b(),
                Y.current,
                W.current,
                eo.current,
                el.current,
                null == j ? void 0 : j.beforeOutsideRef.current,
                null == j ? void 0 : j.afterOutsideRef.current,
                k.current.includes("reference") || L ? N : null,
            ].filter((e) => null != e),
            a = p || L ? V(i, !x, x) : V(i);
        return () => {
            a();
        };
    }, [r, N, O, p, k, j, L, P, x, F, R, b]),
        (0, s.OS)(() => {
            if (r || !(0, o.sb)(ei)) return;
            let e = (0, s.YE)(ei),
                t = (0, s.RS)(e);
            queueMicrotask(() => {
                let e = ea(ei),
                    n = U.current,
                    r = ("number" == typeof n ? e[n] : n.current) || ei,
                    i = (0, s.gR)(ei, t);
                D || i || !A || w(r, { preventScroll: r === ei });
            });
        }, [r, A, ei, D, ea, U]),
        (0, s.OS)(() => {
            var e;
            if (r || !ei) return;
            let t = (0, s.YE)(ei);
            function n(e) {
                let { reason: t, event: n, nested: r } = e;
                if (
                    (["hover", "safe-polygon"].includes(t) && "mouseleave" === n.type && (J.current = !0),
                    "outside-press" === t)
                )
                    if (r) J.current = !1;
                    else if ((0, s.YF)(n) || (0, s.Pg)(n)) J.current = !1;
                    else {
                        let e = !1;
                        document.createElement("div").focus({
                            get preventScroll() {
                                return (e = !0), !1;
                            },
                        }),
                            e ? (J.current = !1) : (J.current = !0);
                    }
            }
            (e = (0, s.RS)(t)),
                q(),
                e && "body" !== (0, o.mq)(e) && (z.push(e), z.length > 20 && (z = z.slice(-20))),
                S.on("openchange", n);
            let i = t.createElement("span");
            return (
                i.setAttribute("tabindex", "-1"),
                i.setAttribute("aria-hidden", "true"),
                Object.assign(i.style, B),
                er && N && N.insertAdjacentElement("afterend", i),
                () => {
                    S.off("openchange", n);
                    let e = (0, s.RS)(t),
                        r =
                            (0, s.gR)(O, e) ||
                            (F &&
                                (0, s.CM)(F.nodesRef.current, R(), !1).some((t) => {
                                    var n;
                                    return (0, s.gR)(null == (n = t.context) ? void 0 : n.elements.floating, e);
                                })),
                        a = (function () {
                            if ("boolean" == typeof G.current) {
                                let e = N || X();
                                return e && e.isConnected ? e : i;
                            }
                            return G.current.current || i;
                        })();
                    queueMicrotask(() => {
                        let n,
                            u = ((n = (0, s.kQ)()), (0, l.AO)(a, n) ? a : (0, l.Kr)(a, n)[0] || a);
                        G.current &&
                            !J.current &&
                            (0, o.sb)(u) &&
                            (u === e || e === t.body || r) &&
                            u.focus({ preventScroll: !0 }),
                            i.remove();
                    });
                }
            );
        }, [r, O, ei, G, y, S, F, er, N, R]),
        i.useEffect(
            () => (
                queueMicrotask(() => {
                    J.current = !1;
                }),
                () => {
                    queueMicrotask(q);
                }
            ),
            [r],
        ),
        (0, s.OS)(() => {
            if (!r && j)
                return (
                    j.setFocusManagerState({ modal: p, closeOnFocusOut: E, open: A, onOpenChange: T, domReference: N }),
                    () => {
                        j.setFocusManagerState(null);
                    }
                );
        }, [r, j, p, A, T, E, N]),
        (0, s.OS)(() => {
            r || (ei && Q(ei, k));
        }, [r, ei, k]);
    let e_ = !r && P && (!p || !L) && (er || p);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e_ &&
                (0, a.jsx)(H, {
                    "data-type": "inside",
                    ref: eu,
                    onFocus: (e) => {
                        if (p) {
                            let e = ea();
                            w("reference" === u[0] ? e[0] : e[e.length - 1]);
                        } else if (null != j && j.preserveTabOrder && j.portalNode)
                            if (((J.current = !1), (0, s.Qp)(e, j.portalNode))) {
                                let e = (0, s.vF)(N);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = j.beforeOutsideRef.current) || t.focus();
                            }
                    },
                }),
            !L && ed("start"),
            n,
            ed("end"),
            e_ &&
                (0, a.jsx)(H, {
                    "data-type": "inside",
                    ref: ec,
                    onFocus: (e) => {
                        if (p) w(ea()[0]);
                        else if (null != j && j.preserveTabOrder && j.portalNode)
                            if ((E && (J.current = !0), (0, s.Qp)(e, j.portalNode))) {
                                let e = (0, s.XJ)(N);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = j.afterOutsideRef.current) || t.focus();
                            }
                    },
                }),
        ],
    });
}
let ee = 0,
    et = "--floating-ui-scrollbar-width",
    en = () => {},
    er = i.forwardRef(function (e, t) {
        let { lockScroll: n = !1, ...r } = e;
        return (
            (0, s.OS)(() => {
                if (n)
                    return (
                        1 == ++ee &&
                            (en = (function () {
                                let e = (0, s.uo)(),
                                    t =
                                        /iP(hone|ad|od)|iOS/.test(e) ||
                                        ("MacIntel" === e && navigator.maxTouchPoints > 1),
                                    n = document.body.style,
                                    r =
                                        Math.round(document.documentElement.getBoundingClientRect().left) +
                                        document.documentElement.scrollLeft
                                            ? "paddingLeft"
                                            : "paddingRight",
                                    i = window.innerWidth - document.documentElement.clientWidth,
                                    a = n.left ? parseFloat(n.left) : window.scrollX,
                                    o = n.top ? parseFloat(n.top) : window.scrollY;
                                if (((n.overflow = "hidden"), n.setProperty(et, i + "px"), i && (n[r] = i + "px"), t)) {
                                    var l, u;
                                    let e = (null == (l = window.visualViewport) ? void 0 : l.offsetLeft) || 0;
                                    Object.assign(n, {
                                        position: "fixed",
                                        top:
                                            -(
                                                o -
                                                Math.floor(
                                                    (null == (u = window.visualViewport) ? void 0 : u.offsetTop) || 0,
                                                )
                                            ) + "px",
                                        left: -(a - Math.floor(e)) + "px",
                                        right: "0",
                                    });
                                }
                                return () => {
                                    Object.assign(n, { overflow: "", [r]: "" }),
                                        n.removeProperty(et),
                                        t &&
                                            (Object.assign(n, { position: "", top: "", left: "", right: "" }),
                                            window.scrollTo(a, o));
                                };
                            })()),
                        () => {
                            0 == --ee && en();
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
    ei = { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
    es = { pointerdown: "onPointerDownCapture", mousedown: "onMouseDownCapture", click: "onClickCapture" },
    ea = (e) => {
        var t, n;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
    };
function eo(e, t) {
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
            bubbles: E,
            capture: m,
        } = t,
        g = i.useContext(I),
        A = (0, s.Jt)("function" == typeof d ? d : () => !1),
        T = "function" == typeof d ? A : d,
        S = i.useRef(!1),
        { escapeKey: y, outsidePress: N } = ea(E),
        { escapeKey: C, outsidePress: O } = ea(m),
        R = i.useRef(!1),
        b = (0, s.Jt)((e) => {
            var t;
            if (!n || !u || !c || "Escape" !== e.key || R.current) return;
            let i = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                a = g ? (0, s.CM)(g.nodesRef.current, i) : [];
            if (!y && (e.stopPropagation(), a.length > 0)) {
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
            let i = S.current;
            if (((S.current = !1), ("click" === _ && i) || n || ("function" == typeof T && !T(e)))) return;
            let u = (0, s.EW)(e),
                c = "[" + v("inert") + "]",
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
            let E = g ? (0, s.CM)(g.nodesRef.current, p) : [];
            if (E.length > 0) {
                let e = !0;
                if (
                    (E.forEach((t) => {
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
        (l.current.__escapeKeyBubbles = y), (l.current.__outsidePressBubbles = N);
        let e = -1;
        function t(e) {
            r(!1, e, "ancestor-scroll");
        }
        function i() {
            window.clearTimeout(e), (R.current = !0);
        }
        function d() {
            e = window.setTimeout(
                () => {
                    R.current = !1;
                },
                5 * !!(0, o.Tc)(),
            );
        }
        let f = (0, s.YE)(a.floating);
        c &&
            (f.addEventListener("keydown", C ? D : b, C),
            f.addEventListener("compositionstart", i),
            f.addEventListener("compositionend", d)),
            T && f.addEventListener(_, O ? w : L, O);
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
                    (f.removeEventListener("keydown", C ? D : b, C),
                    f.removeEventListener("compositionstart", i),
                    f.removeEventListener("compositionend", d)),
                    T && f.removeEventListener(_, O ? w : L, O),
                    p.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, a, c, T, _, n, r, h, u, y, N, b, C, D, L, O, w]),
        i.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, T, _]);
    let M = i.useMemo(
            () => ({
                onKeyDown: b,
                ...(f && {
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
            [b, r, f, p],
        ),
        P = i.useMemo(
            () => ({
                onKeyDown: b,
                onMouseDown() {
                    S.current = !0;
                },
                onMouseUp() {
                    S.current = !0;
                },
                [es[_]]: () => {
                    l.current.insideReactTree = !0;
                },
            }),
            [b, _, l],
        );
    return i.useMemo(() => (u ? { reference: M, floating: P } : {}), [u, M, P]);
}
function el(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        n = (function (e) {
            let { open: t = !1, onOpenChange: n, elements: r } = e,
                a = m(),
                o = i.useRef({}),
                [l] = i.useState(() => g()),
                u = null != T(),
                [c, d] = i.useState(r.reference),
                _ = (0, s.Jt)((e, t, r) => {
                    (o.current.openEvent = e ? t : void 0),
                        l.emit("openchange", { open: e, event: t, reason: r, nested: u }),
                        null == n || n(e, t, r);
                }),
                f = i.useMemo(() => ({ setPositionReference: d }), []),
                p = i.useMemo(
                    () => ({
                        reference: c || r.reference || null,
                        floating: r.floating || null,
                        domReference: r.reference,
                    }),
                    [c, r.reference, r.floating],
                );
            return i.useMemo(
                () => ({ dataRef: o, open: t, onOpenChange: _, elements: p, events: l, floatingId: a, refs: f }),
                [t, _, p, l, a, f],
            );
        })({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
        r = e.rootContext || n,
        a = r.elements,
        [l, u] = i.useState(null),
        [d, _] = i.useState(null),
        f = (null == a ? void 0 : a.domReference) || l,
        p = i.useRef(null),
        h = i.useContext(I);
    (0, s.OS)(() => {
        f && (p.current = f);
    }, [f]);
    let E = (0, c.we)({ ...e, elements: { ...a, ...(d && { reference: d }) } }),
        A = i.useCallback(
            (e) => {
                let t = (0, o.vq)(e)
                    ? {
                          getBoundingClientRect: () => e.getBoundingClientRect(),
                          getClientRects: () => e.getClientRects(),
                          contextElement: e,
                      }
                    : e;
                _(t), E.refs.setReference(t);
            },
            [E.refs],
        ),
        S = i.useCallback(
            (e) => {
                ((0, o.vq)(e) || null === e) && ((p.current = e), u(e)),
                    ((0, o.vq)(E.refs.reference.current) ||
                        null === E.refs.reference.current ||
                        (null !== e && !(0, o.vq)(e))) &&
                        E.refs.setReference(e);
            },
            [E.refs],
        ),
        y = i.useMemo(() => ({ ...E.refs, setReference: S, setPositionReference: A, domReference: p }), [E.refs, S, A]),
        N = i.useMemo(() => ({ ...E.elements, domReference: f }), [E.elements, f]),
        v = i.useMemo(() => ({ ...E, ...r, refs: y, elements: N, nodeId: t }), [E, y, N, t, r]);
    return (
        (0, s.OS)(() => {
            r.dataRef.current.floatingContext = v;
            let e = null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
            e && (e.context = v);
        }),
        i.useMemo(() => ({ ...E, context: v, refs: y, elements: N }), [E, y, N, v])
    );
}
function eu(e, t, n) {
    let r = new Map(),
        i = "item" === n,
        s = e;
    if (i && e) {
        let { [d]: t, [_]: n, ...r } = e;
        s = r;
    }
    return {
        ...("floating" === n && { tabIndex: -1, "data-floating-ui-focusable": "" }),
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
function ec(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        n = e.map((e) => (null == e ? void 0 : e.floating)),
        r = e.map((e) => (null == e ? void 0 : e.item)),
        s = i.useCallback((t) => eu(t, e, "reference"), t),
        a = i.useCallback((t) => eu(t, e, "floating"), n),
        o = i.useCallback((t) => eu(t, e, "item"), r);
    return i.useMemo(() => ({ getReferenceProps: s, getFloatingProps: a, getItemProps: o }), [s, a, o]);
}
let ed = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function e_(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function ef(e, t) {
    void 0 === t && (t = {});
    let { initial: n = { opacity: 0 }, open: r, close: a, common: o, duration: l = 250 } = t,
        c = e.placement,
        d = c.split("-")[0],
        _ = i.useMemo(() => ({ side: d, placement: c }), [d, c]),
        f = "number" == typeof l,
        p = (f ? l : l.open) || 0,
        h = (f ? l : l.close) || 0,
        [E, m] = i.useState(() => ({ ...e_(o, _), ...e_(n, _) })),
        { isMounted: g, status: A } = (function (e, t) {
            void 0 === t && (t = {});
            let {
                    open: n,
                    elements: { floating: r },
                } = e,
                { duration: a = 250 } = t,
                o = ("number" == typeof a ? a : a.close) || 0,
                [l, c] = i.useState("unmounted"),
                d = (function (e, t) {
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
                })(n, o);
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
        })(e, { duration: l }),
        I = (0, s.SE)(n),
        T = (0, s.SE)(r),
        S = (0, s.SE)(a),
        y = (0, s.SE)(o);
    return (
        (0, s.OS)(() => {
            let e = e_(I.current, _),
                t = e_(S.current, _),
                n = e_(y.current, _),
                r = e_(T.current, _) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
            if (
                ("initial" === A && m((t) => ({ transitionProperty: t.transitionProperty, ...n, ...e })),
                "open" === A &&
                    m({
                        transitionProperty: Object.keys(r).map(ed).join(","),
                        transitionDuration: p + "ms",
                        ...n,
                        ...r,
                    }),
                "close" === A)
            ) {
                let r = t || e;
                m({ transitionProperty: Object.keys(r).map(ed).join(","), transitionDuration: h + "ms", ...n, ...r });
            }
        }, [h, S, I, T, y, p, A, _]),
        { isMounted: g, styles: E }
    );
}
function ep(e, t) {
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
function eh(e) {
    void 0 === e && (e = {});
    let { buffer: t = 0.5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e,
        i = { current: -1 },
        s = !1,
        a = null,
        l = null,
        u = "u" > typeof performance ? performance.now() : 0,
        c = (e) => {
            let { x: n, y: c, placement: d, elements: _, onClose: f, nodeId: p, tree: h } = e;
            return function (e) {
                function E() {
                    C(i), f();
                }
                if ((C(i), !_.domReference || !_.floating || null == d || null == n || null == c)) return;
                let { clientX: m, clientY: g } = e,
                    A = [m, g],
                    I = "composedPath" in e ? e.composedPath()[0] : e.target,
                    T = "mouseleave" === e.type,
                    S = M(_.floating, I),
                    y = M(_.domReference, I),
                    N = _.domReference.getBoundingClientRect(),
                    v = _.floating.getBoundingClientRect(),
                    O = d.split("-")[0],
                    R = n > v.right - v.width / 2,
                    b = c > v.bottom - v.height / 2,
                    D = A[0] >= N.x && A[0] <= N.x + N.width && A[1] >= N.y && A[1] <= N.y + N.height,
                    L = v.width > N.width,
                    w = v.height > N.height,
                    P = (L ? N : v).left,
                    x = (L ? N : v).right,
                    k = (w ? N : v).top,
                    U = (w ? N : v).bottom;
                if (S && ((s = !0), !T)) return;
                if ((y && (s = !1), y && !T)) {
                    s = !0;
                    return;
                }
                if (
                    (T && (0, o.vq)(e.relatedTarget) && M(_.floating, e.relatedTarget)) ||
                    (h &&
                        (function e(t, n, r) {
                            return (
                                void 0 === r && (r = !0),
                                t
                                    .filter((e) => {
                                        var t;
                                        return e.parentId === n && (!r || (null == (t = e.context) ? void 0 : t.open));
                                    })
                                    .flatMap((n) => [n, ...e(t, n.id, r)])
                            );
                        })(h.nodesRef.current, p).length)
                )
                    return;
                if (
                    ("top" === O && c >= N.bottom - 1) ||
                    ("bottom" === O && c <= N.top + 1) ||
                    ("left" === O && n >= N.right - 1) ||
                    ("right" === O && n <= N.left + 1)
                )
                    return E();
                let G = [];
                switch (O) {
                    case "top":
                        G = [
                            [P, N.top + 1],
                            [P, v.bottom - 1],
                            [x, v.bottom - 1],
                            [x, N.top + 1],
                        ];
                        break;
                    case "bottom":
                        G = [
                            [P, v.top + 1],
                            [P, N.bottom - 1],
                            [x, N.bottom - 1],
                            [x, v.top + 1],
                        ];
                        break;
                    case "left":
                        G = [
                            [v.right - 1, U],
                            [v.right - 1, k],
                            [N.left + 1, k],
                            [N.left + 1, U],
                        ];
                        break;
                    case "right":
                        G = [
                            [N.right - 1, U],
                            [N.right - 1, k],
                            [v.left + 1, k],
                            [v.left + 1, U],
                        ];
                }
                if (!ep([m, g], G)) {
                    if (s && !D) return E();
                    if (!T && r) {
                        let t = (function (e, t) {
                            let n = performance.now(),
                                r = n - u;
                            if (null === a || null === l || 0 === r) return (a = e), (l = t), (u = n), null;
                            let i = e - a,
                                s = t - l,
                                o = Math.sqrt(i * i + s * s);
                            return (a = e), (l = t), (u = n), o / r;
                        })(e.clientX, e.clientY);
                        if (null !== t && t < 0.1) return E();
                    }
                    ep(
                        [m, g],
                        (function (e) {
                            let [n, r] = e;
                            switch (O) {
                                case "top": {
                                    let e = [
                                        [v.left, R || L ? v.bottom - t : v.top],
                                        [v.right, R ? (L ? v.bottom - t : v.top) : v.bottom - t],
                                    ];
                                    return [
                                        [L ? n + t / 2 : R ? n + 4 * t : n - 4 * t, r + t + 1],
                                        [L ? n - t / 2 : R ? n + 4 * t : n - 4 * t, r + t + 1],
                                        ...e,
                                    ];
                                }
                                case "bottom": {
                                    let e = [
                                        [v.left, R || L ? v.top + t : v.bottom],
                                        [v.right, R ? (L ? v.top + t : v.bottom) : v.top + t],
                                    ];
                                    return [
                                        [L ? n + t / 2 : R ? n + 4 * t : n - 4 * t, r - t],
                                        [L ? n - t / 2 : R ? n + 4 * t : n - 4 * t, r - t],
                                        ...e,
                                    ];
                                }
                                case "left":
                                    return [
                                        [b || w ? v.right - t : v.left, v.top],
                                        [b ? (w ? v.right - t : v.left) : v.right - t, v.bottom],
                                        [n + t + 1, w ? r + t / 2 : b ? r + 4 * t : r - 4 * t],
                                        [n + t + 1, w ? r - t / 2 : b ? r + 4 * t : r - 4 * t],
                                    ];
                                case "right": {
                                    let e = [
                                        [b || w ? v.left + t : v.right, v.top],
                                        [b ? (w ? v.left + t : v.right) : v.left + t, v.bottom],
                                    ];
                                    return [
                                        [n - t, w ? r + t / 2 : b ? r + 4 * t : r - 4 * t],
                                        [n - t, w ? r - t / 2 : b ? r + 4 * t : r - 4 * t],
                                        ...e,
                                    ];
                                }
                            }
                        })([n, c]),
                    )
                        ? !s && r && (i.current = window.setTimeout(E, 40))
                        : E();
                }
            };
        };
    return (c.__options = { blockPointerEvents: n }), c;
}
