"use strict";
n.d(t, {
    $c: () => y,
    DL: () => ef,
    Mk: () => D,
    P6: () => N,
    R1: () => T,
    XF: () => j,
    bv: () => ed,
    fI: () => S,
    iB: () => eh,
    s3: () => Z,
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
    d = n(879821);
let c = "active",
    _ = "selected",
    f = { ...(r || (r = n.t(i, 2))) },
    E = !1,
    h = 0,
    p = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + h++,
    m =
        f.useId ||
        function () {
            let [e, t] = i.useState(() => (E ? p() : void 0));
            return (
                (0, s.OS)(() => {
                    null == e && t(p());
                }, []),
                i.useEffect(() => {
                    E = !0;
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
function O(e) {
    return "data-floating-ui-" + e;
}
function R(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
}
let v = O("safe-polygon");
function C(e, t, n) {
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
        { enabled: d = !0, delay: c = 0, handleClose: _ = null, mouseOnly: f = !1, restMs: E = 0, move: h = !0 } = t,
        p = i.useContext(I),
        m = T(),
        g = (0, s.SE)(_),
        A = (0, s.SE)(c),
        S = (0, s.SE)(n),
        y = (0, s.SE)(E),
        N = i.useRef(),
        O = i.useRef(-1),
        D = i.useRef(),
        L = i.useRef(-1),
        w = i.useRef(!0),
        M = i.useRef(!1),
        P = i.useRef(() => {}),
        U = i.useRef(!1),
        k = (0, s.Jt)(() => {
            var e;
            let t = null == (e = a.current.openEvent) ? void 0 : e.type;
            return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t;
        });
    i.useEffect(() => {
        if (d)
            return (
                l.on("openchange", e),
                () => {
                    l.off("openchange", e);
                }
            );
        function e(e) {
            let { open: t } = e;
            t || (R(O), R(L), (w.current = !0), (U.current = !1));
        }
    }, [d, l]),
        i.useEffect(() => {
            if (!d || !g.current || !n) return;
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
        }, [u.floating, n, r, d, g, k]);
    let x = i.useCallback(
            function (e, t, n) {
                void 0 === t && (t = !0), void 0 === n && (n = "hover");
                let i = C(A.current, "close", N.current);
                i && !D.current
                    ? (R(O), (O.current = window.setTimeout(() => r(!1, e, n), i)))
                    : t && (R(O), r(!1, e, n));
            },
            [A, r],
        ),
        G = (0, s.Jt)(() => {
            P.current(), (D.current = void 0);
        }),
        V = (0, s.Jt)(() => {
            if (M.current) {
                let e = (0, s.YE)(u.floating).body;
                (e.style.pointerEvents = ""), e.removeAttribute(v), (M.current = !1);
            }
        }),
        F = (0, s.Jt)(() => !!a.current.openEvent && ["click", "mousedown"].includes(a.current.openEvent.type));
    i.useEffect(() => {
        if (d && (0, o.vq)(u.domReference)) {
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
                    s.addEventListener("mouseleave", c)),
                () => {
                    n && r.removeEventListener("mouseleave", i),
                        h && r.removeEventListener("mousemove", e),
                        r.removeEventListener("mouseenter", e),
                        r.removeEventListener("mouseleave", t),
                        s &&
                            (s.removeEventListener("mouseleave", i),
                            s.removeEventListener("mouseenter", l),
                            s.removeEventListener("mouseleave", c));
                }
            );
        }
        function e(e) {
            if ((R(O), (w.current = !1), (f && !(0, s.Go)(N.current)) || (b(y.current) > 0 && !C(A.current, "open"))))
                return;
            let t = C(A.current, "open", N.current);
            t
                ? (O.current = window.setTimeout(() => {
                      S.current || r(!0, e, "hover");
                  }, t))
                : n || r(!0, e, "hover");
        }
        function t(e) {
            if (F()) return void V();
            P.current();
            let t = (0, s.YE)(u.floating);
            if ((R(L), (U.current = !1), g.current && a.current.floatingContext)) {
                n || R(O),
                    (D.current = g.current({
                        ...a.current.floatingContext,
                        tree: p,
                        x: e.clientX,
                        y: e.clientY,
                        onClose() {
                            V(), G(), F() || x(e, !0, "safe-polygon");
                        },
                    }));
                let r = D.current;
                t.addEventListener("mousemove", r),
                    (P.current = () => {
                        t.removeEventListener("mousemove", r);
                    });
                return;
            }
            ("touch" === N.current && (0, s.gR)(u.floating, e.relatedTarget)) || x(e);
        }
        function i(e) {
            F() ||
                (a.current.floatingContext &&
                    (null == g.current ||
                        g.current({
                            ...a.current.floatingContext,
                            tree: p,
                            x: e.clientX,
                            y: e.clientY,
                            onClose() {
                                V(), G(), F() || x(e);
                            },
                        })(e)));
        }
        function l() {
            R(O);
        }
        function c(e) {
            F() || x(e, !1);
        }
    }, [u, d, e, f, h, x, G, V, r, n, S, p, A, g, a, F, y]),
        (0, s.OS)(() => {
            var e, t;
            if (d && n && null != (e = g.current) && null != (e = e.__options) && e.blockPointerEvents && k()) {
                M.current = !0;
                let e = u.floating;
                if ((0, o.vq)(u.domReference) && e) {
                    let n = (0, s.YE)(u.floating).body;
                    n.setAttribute(v, "");
                    let r = u.domReference,
                        i =
                            null == p ||
                            null == (t = p.nodesRef.current.find((e) => e.id === m)) ||
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
        }, [d, n, m, u, p, g, k]),
        (0, s.OS)(() => {
            n || ((N.current = void 0), (U.current = !1), G(), V());
        }, [n, G, V]),
        i.useEffect(
            () => () => {
                G(), R(O), R(L), V();
            },
            [d, u.domReference, G, V],
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
                    (U.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                    (R(L),
                    "touch" === N.current ? i() : ((U.current = !0), (L.current = window.setTimeout(i, b(y.current)))));
            },
        };
    }, [f, r, n, S, y]);
    return i.useMemo(() => (d ? { reference: B } : {}), [d, B]);
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
function U(e) {
    return "inert" === e ? P.inert : "aria-hidden" === e ? P["aria-hidden"] : P.none;
}
let k = new WeakSet(),
    x = {},
    G = 0,
    V = (e) => e && (e.host || V(e.parentNode));
function F(e, t, n) {
    var r, i, s;
    let a, l, u, d, c, _, f;
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let E = ((null == (r = e[0]) ? void 0 : r.ownerDocument) || document).body;
    return (
        (i = e.concat(Array.from(E.querySelectorAll('[aria-live],[role="status"],output')))),
        (s = t),
        (a = "data-floating-ui-inert"),
        (l = n ? "inert" : s ? "aria-hidden" : null),
        (u = i
            .map((e) => {
                if (E.contains(e)) return e;
                let t = V(e);
                return E.contains(t) ? t : null;
            })
            .filter((e) => null != e)),
        (d = new Set()),
        (c = new Set(u)),
        (_ = []),
        x[a] || (x[a] = new WeakMap()),
        (f = x[a]),
        u.forEach(function e(t) {
            !(!t || d.has(t)) && (d.add(t), t.parentNode && e(t.parentNode));
        }),
        (function e(t) {
            !t ||
                c.has(t) ||
                [].forEach.call(t.children, (t) => {
                    if ("script" !== (0, o.mq)(t))
                        if (d.has(t)) e(t);
                        else {
                            let e = l ? t.getAttribute(l) : null,
                                n = null !== e && "false" !== e,
                                r = U(l),
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
        })(E),
        d.clear(),
        G++,
        () => {
            _.forEach((e) => {
                let t = U(l),
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
                    (x = {}));
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
        let o = { ref: t, tabIndex: 0, role: n, "aria-hidden": !n || void 0, [O("focus-guard")]: "", style: B };
        return (0, a.jsx)("span", { ...e, ...o });
    }),
    Y = i.createContext(null),
    W = O("portal");
function j(e) {
    let { children: t, id: n, root: r, preserveTabOrder: l = !0 } = e,
        d = (function (e) {
            void 0 === e && (e = {});
            let { id: t, root: n } = e,
                r = m(),
                a = K(),
                [l, u] = i.useState(null),
                d = i.useRef(null);
            return (
                (0, s.OS)(
                    () => () => {
                        null == l || l.remove(),
                            queueMicrotask(() => {
                                d.current = null;
                            });
                    },
                    [l],
                ),
                (0, s.OS)(() => {
                    if (!r || d.current) return;
                    let e = t ? document.getElementById(t) : null;
                    if (!e) return;
                    let n = document.createElement("div");
                    (n.id = r), n.setAttribute(W, ""), e.appendChild(n), (d.current = n), u(n);
                }, [t, r]),
                (0, s.OS)(() => {
                    if (null === n || !r || d.current) return;
                    let e = n || (null == a ? void 0 : a.portalNode);
                    e && !(0, o.Ll)(e) && (e = e.current), (e = e || document.body);
                    let i = null;
                    t && (((i = document.createElement("div")).id = t), e.appendChild(i));
                    let s = document.createElement("div");
                    (s.id = r), s.setAttribute(W, ""), (e = i || e).appendChild(s), (d.current = s), u(s);
                }, [t, n, r, a]),
                l
            );
        })({ id: n, root: r }),
        [c, _] = i.useState(null),
        f = i.useRef(null),
        E = i.useRef(null),
        h = i.useRef(null),
        p = i.useRef(null),
        g = null == c ? void 0 : c.modal,
        A = null == c ? void 0 : c.open,
        I = !!c && !c.modal && c.open && l && !!(r || d);
    return (
        i.useEffect(() => {
            if (d && l && !g)
                return (
                    d.addEventListener("focusin", e, !0),
                    d.addEventListener("focusout", e, !0),
                    () => {
                        d.removeEventListener("focusin", e, !0), d.removeEventListener("focusout", e, !0);
                    }
                );
            function e(e) {
                d && (0, s.Qp)(e) && ("focusin" === e.type ? s.yV : s.N)(d);
            }
        }, [d, l, g]),
        i.useEffect(() => {
            !d || A || (0, s.yV)(d);
        }, [A, d]),
        (0, a.jsxs)(Y.Provider, {
            value: i.useMemo(
                () => ({
                    preserveTabOrder: l,
                    beforeOutsideRef: f,
                    afterOutsideRef: E,
                    beforeInsideRef: h,
                    afterInsideRef: p,
                    portalNode: d,
                    setFocusManagerState: _,
                }),
                [l, d],
            ),
            children: [
                I &&
                    d &&
                    (0, a.jsx)(H, {
                        "data-type": "outside",
                        ref: f,
                        onFocus: (e) => {
                            if ((0, s.Qp)(e, d)) {
                                var t;
                                null == (t = h.current) || t.focus();
                            } else {
                                let e = c ? c.domReference : null,
                                    t = (0, s.XJ)(e);
                                null == t || t.focus();
                            }
                        },
                    }),
                I && d && (0, a.jsx)("span", { "aria-owns": d.id, style: B }),
                d && u.createPortal(t, d),
                I &&
                    d &&
                    (0, a.jsx)(H, {
                        "data-type": "outside",
                        ref: E,
                        onFocus: (e) => {
                            if ((0, s.Qp)(e, d)) {
                                var t;
                                null == (t = p.current) || t.focus();
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
let K = () => i.useContext(Y);
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
let J = i.forwardRef(function (e, t) {
    return (0, a.jsx)("button", { ...e, type: "button", ref: t, tabIndex: -1, style: B });
});
function Z(e) {
    let {
            context: t,
            children: n,
            disabled: r = !1,
            order: u = ["content"],
            guards: d = !0,
            initialFocus: c = 0,
            returnFocus: _ = !0,
            restoreFocus: f = !1,
            modal: E = !0,
            visuallyHiddenDismiss: h = !1,
            closeOnFocusOut: p = !0,
            outsideElementsInert: m = !1,
            getInsideElements: g = () => [],
        } = e,
        {
            open: A,
            onOpenChange: T,
            events: S,
            dataRef: y,
            elements: { domReference: N, floating: v },
        } = t,
        C = (0, s.Jt)(() => {
            var e;
            return null == (e = y.current.floatingContext) ? void 0 : e.nodeId;
        }),
        b = (0, s.Jt)(g),
        D = "number" == typeof c && c < 0,
        L = (0, s.WZ)(N) && D,
        M = "u" > typeof HTMLElement && "inert" in HTMLElement.prototype,
        P = !M || d,
        U = !P || (M && m),
        k = (0, s.SE)(u),
        x = (0, s.SE)(c),
        G = (0, s.SE)(_),
        V = i.useContext(I),
        Y = K(),
        W = i.useRef(null),
        j = i.useRef(null),
        Z = i.useRef(!1),
        ee = i.useRef(!1),
        et = i.useRef(-1),
        en = i.useRef(-1),
        er = null != Y,
        ei = (0, s.nd)(v),
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
        if (r || !E) return;
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
    }, [r, N, ei, E, k, L, es, ea]),
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
                    n = es().indexOf(t);
                -1 !== n && (et.current = n);
            }
        }, [r, v, es]),
        i.useEffect(() => {
            if (r || !p) return;
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
                    let i = C(),
                        a = !(
                            (0, s.gR)(N, t) ||
                            (0, s.gR)(v, t) ||
                            (0, s.gR)(t, v) ||
                            (0, s.gR)(null == Y ? void 0 : Y.portalNode, t) ||
                            (null != t && t.hasAttribute(O("focus-guard"))) ||
                            (V &&
                                ((0, s.CM)(V.nodesRef.current, i).find((e) => {
                                    var n, r;
                                    return (
                                        (0, s.gR)(null == (n = e.context) ? void 0 : n.elements.floating, t) ||
                                        (0, s.gR)(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                                    );
                                }) ||
                                    (0, s.$4)(V.nodesRef.current, i).find((e) => {
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
                    (L || !E) && t && a && !ee.current && t !== X() && ((Z.current = !0), T(!1, e, "focus-out"));
                });
            }
            let n = !!(!V && Y);
            function i() {
                R(en),
                    (y.current.insideReactTree = !0),
                    (en.current = window.setTimeout(() => {
                        y.current.insideReactTree = !1;
                    }));
            }
            if (v && (0, o.sb)(N))
                return (
                    N.addEventListener("focusout", t),
                    N.addEventListener("pointerdown", e),
                    v.addEventListener("focusout", t),
                    n && v.addEventListener("focusout", i, !0),
                    () => {
                        N.removeEventListener("focusout", t),
                            N.removeEventListener("pointerdown", e),
                            v.removeEventListener("focusout", t),
                            n && v.removeEventListener("focusout", i, !0);
                    }
                );
        }, [r, N, v, ei, E, V, Y, T, p, f, es, L, C, k, y]);
    let eo = i.useRef(null),
        el = i.useRef(null),
        eu = $([eo, null == Y ? void 0 : Y.beforeInsideRef]),
        ed = $([el, null == Y ? void 0 : Y.afterInsideRef]);
    function ec(e) {
        return !r && h && E
            ? (0, a.jsx)(J, {
                  ref: "start" === e ? W : j,
                  onClick: (e) => T(!1, e.nativeEvent),
                  children: "string" == typeof h ? h : "Dismiss",
              })
            : null;
    }
    i.useEffect(() => {
        var e, t;
        if (r || !v) return;
        let n = Array.from(
                (null == Y || null == (e = Y.portalNode) ? void 0 : e.querySelectorAll("[" + O("portal") + "]")) || [],
            ),
            i = [
                v,
                null ==
                    (t = (V ? (0, s.$4)(V.nodesRef.current, C()) : []).find((e) => {
                        var t;
                        return (0, s.WZ)((null == (t = e.context) ? void 0 : t.elements.domReference) || null);
                    })) || null == (t = t.context)
                    ? void 0
                    : t.elements.domReference,
                ...n,
                ...b(),
                W.current,
                j.current,
                eo.current,
                el.current,
                null == Y ? void 0 : Y.beforeOutsideRef.current,
                null == Y ? void 0 : Y.afterOutsideRef.current,
                k.current.includes("reference") || L ? N : null,
            ].filter((e) => null != e),
            a = E || L ? F(i, !U, U) : F(i);
        return () => {
            a();
        };
    }, [r, N, v, E, k, Y, L, P, U, V, C, b]),
        (0, s.OS)(() => {
            if (r || !(0, o.sb)(ei)) return;
            let e = (0, s.YE)(ei),
                t = (0, s.RS)(e);
            queueMicrotask(() => {
                let e = ea(ei),
                    n = x.current,
                    r = ("number" == typeof n ? e[n] : n.current) || ei,
                    i = (0, s.gR)(ei, t);
                D || i || !A || w(r, { preventScroll: r === ei });
            });
        }, [r, A, ei, D, ea, x]),
        (0, s.OS)(() => {
            var e;
            if (r || !ei) return;
            let t = (0, s.YE)(ei);
            function n(e) {
                let { reason: t, event: n, nested: r } = e;
                if (
                    (["hover", "safe-polygon"].includes(t) && "mouseleave" === n.type && (Z.current = !0),
                    "outside-press" === t)
                )
                    if (r) Z.current = !1;
                    else if ((0, s.YF)(n) || (0, s.Pg)(n)) Z.current = !1;
                    else {
                        let e = !1;
                        document.createElement("div").focus({
                            get preventScroll() {
                                return (e = !0), !1;
                            },
                        }),
                            e ? (Z.current = !1) : (Z.current = !0);
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
                            (0, s.gR)(v, e) ||
                            (V &&
                                (0, s.CM)(V.nodesRef.current, C(), !1).some((t) => {
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
                            !Z.current &&
                            (0, o.sb)(u) &&
                            (u === e || e === t.body || r) &&
                            u.focus({ preventScroll: !0 }),
                            i.remove();
                    });
                }
            );
        }, [r, v, ei, G, y, S, V, er, N, C]),
        i.useEffect(
            () => (
                queueMicrotask(() => {
                    Z.current = !1;
                }),
                () => {
                    queueMicrotask(q);
                }
            ),
            [r],
        ),
        (0, s.OS)(() => {
            if (!r && Y)
                return (
                    Y.setFocusManagerState({ modal: E, closeOnFocusOut: p, open: A, onOpenChange: T, domReference: N }),
                    () => {
                        Y.setFocusManagerState(null);
                    }
                );
        }, [r, Y, E, A, T, p, N]),
        (0, s.OS)(() => {
            r || (ei && Q(ei, k));
        }, [r, ei, k]);
    let e_ = !r && P && (!E || !L) && (er || E);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            e_ &&
                (0, a.jsx)(H, {
                    "data-type": "inside",
                    ref: eu,
                    onFocus: (e) => {
                        if (E) {
                            let e = ea();
                            w("reference" === u[0] ? e[0] : e[e.length - 1]);
                        } else if (null != Y && Y.preserveTabOrder && Y.portalNode)
                            if (((Z.current = !1), (0, s.Qp)(e, Y.portalNode))) {
                                let e = (0, s.vF)(N);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = Y.beforeOutsideRef.current) || t.focus();
                            }
                    },
                }),
            !L && ec("start"),
            n,
            ec("end"),
            e_ &&
                (0, a.jsx)(H, {
                    "data-type": "inside",
                    ref: ed,
                    onFocus: (e) => {
                        if (E) w(ea()[0]);
                        else if (null != Y && Y.preserveTabOrder && Y.portalNode)
                            if ((p && (Z.current = !0), (0, s.Qp)(e, Y.portalNode))) {
                                let e = (0, s.XJ)(N);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = Y.afterOutsideRef.current) || t.focus();
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
            escapeKey: d = !0,
            outsidePress: c = !0,
            outsidePressEvent: _ = "pointerdown",
            referencePress: f = !1,
            referencePressEvent: E = "pointerdown",
            ancestorScroll: h = !1,
            bubbles: p,
            capture: m,
        } = t,
        g = i.useContext(I),
        A = (0, s.Jt)("function" == typeof c ? c : () => !1),
        T = "function" == typeof c ? A : c,
        S = i.useRef(!1),
        { escapeKey: y, outsidePress: N } = ea(p),
        { escapeKey: R, outsidePress: v } = ea(m),
        C = i.useRef(!1),
        b = (0, s.Jt)((e) => {
            var t;
            if (!n || !u || !d || "Escape" !== e.key || C.current) return;
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
                d = "[" + O("inert") + "]",
                c = (0, s.YE)(a.floating).querySelectorAll(d),
                f = (0, o.vq)(u) ? u : null;
            for (; f && !(0, o.eu)(f); ) {
                let e = (0, o.$4)(f);
                if ((0, o.eu)(e) || !(0, o.vq)(e)) break;
                f = e;
            }
            if (
                c.length &&
                (0, o.vq)(u) &&
                !(0, s.tZ)(u) &&
                !(0, s.gR)(u, a.floating) &&
                Array.from(c).every((e) => !(0, s.gR)(f, e))
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
                    d = "rtl" === n.direction,
                    c = l && (d ? e.offsetX <= u.offsetWidth - u.clientWidth : e.offsetX > u.clientWidth),
                    _ = a && e.offsetY > u.clientHeight;
                if (c || _) return;
            }
            let E = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                h =
                    g &&
                    (0, s.CM)(g.nodesRef.current, E).some((t) => {
                        var n;
                        return (0, s.F2)(e, null == (n = t.context) ? void 0 : n.elements.floating);
                    });
            if ((0, s.F2)(e, a.floating) || (0, s.F2)(e, a.domReference) || h) return;
            let p = g ? (0, s.CM)(g.nodesRef.current, E) : [];
            if (p.length > 0) {
                let e = !0;
                if (
                    (p.forEach((t) => {
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
            window.clearTimeout(e), (C.current = !0);
        }
        function c() {
            e = window.setTimeout(
                () => {
                    C.current = !1;
                },
                5 * !!(0, o.Tc)(),
            );
        }
        let f = (0, s.YE)(a.floating);
        d &&
            (f.addEventListener("keydown", R ? D : b, R),
            f.addEventListener("compositionstart", i),
            f.addEventListener("compositionend", c)),
            T && f.addEventListener(_, v ? w : L, v);
        let E = [];
        return (
            h &&
                ((0, o.vq)(a.domReference) && (E = (0, o.v9)(a.domReference)),
                (0, o.vq)(a.floating) && (E = E.concat((0, o.v9)(a.floating))),
                !(0, o.vq)(a.reference) &&
                    a.reference &&
                    a.reference.contextElement &&
                    (E = E.concat((0, o.v9)(a.reference.contextElement)))),
            (E = E.filter((e) => {
                var t;
                return e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport);
            })).forEach((e) => {
                e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
                d &&
                    (f.removeEventListener("keydown", R ? D : b, R),
                    f.removeEventListener("compositionstart", i),
                    f.removeEventListener("compositionend", c)),
                    T && f.removeEventListener(_, v ? w : L, v),
                    E.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, a, d, T, _, n, r, h, u, y, N, b, R, D, L, v, w]),
        i.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, T, _]);
    let M = i.useMemo(
            () => ({
                onKeyDown: b,
                ...(f && {
                    [ei[E]]: (e) => {
                        r(!1, e.nativeEvent, "reference-press");
                    },
                    ...("click" !== E && {
                        onClick(e) {
                            r(!1, e.nativeEvent, "reference-press");
                        },
                    }),
                }),
            }),
            [b, r, f, E],
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
                [d, c] = i.useState(r.reference),
                _ = (0, s.Jt)((e, t, r) => {
                    (o.current.openEvent = e ? t : void 0),
                        l.emit("openchange", { open: e, event: t, reason: r, nested: u }),
                        null == n || n(e, t, r);
                }),
                f = i.useMemo(() => ({ setPositionReference: c }), []),
                E = i.useMemo(
                    () => ({
                        reference: d || r.reference || null,
                        floating: r.floating || null,
                        domReference: r.reference,
                    }),
                    [d, r.reference, r.floating],
                );
            return i.useMemo(
                () => ({ dataRef: o, open: t, onOpenChange: _, elements: E, events: l, floatingId: a, refs: f }),
                [t, _, E, l, a, f],
            );
        })({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
        r = e.rootContext || n,
        a = r.elements,
        [l, u] = i.useState(null),
        [c, _] = i.useState(null),
        f = (null == a ? void 0 : a.domReference) || l,
        E = i.useRef(null),
        h = i.useContext(I);
    (0, s.OS)(() => {
        f && (E.current = f);
    }, [f]);
    let p = (0, d.we)({ ...e, elements: { ...a, ...(c && { reference: c }) } }),
        A = i.useCallback(
            (e) => {
                let t = (0, o.vq)(e)
                    ? {
                          getBoundingClientRect: () => e.getBoundingClientRect(),
                          getClientRects: () => e.getClientRects(),
                          contextElement: e,
                      }
                    : e;
                _(t), p.refs.setReference(t);
            },
            [p.refs],
        ),
        S = i.useCallback(
            (e) => {
                ((0, o.vq)(e) || null === e) && ((E.current = e), u(e)),
                    ((0, o.vq)(p.refs.reference.current) ||
                        null === p.refs.reference.current ||
                        (null !== e && !(0, o.vq)(e))) &&
                        p.refs.setReference(e);
            },
            [p.refs],
        ),
        y = i.useMemo(() => ({ ...p.refs, setReference: S, setPositionReference: A, domReference: E }), [p.refs, S, A]),
        N = i.useMemo(() => ({ ...p.elements, domReference: f }), [p.elements, f]),
        O = i.useMemo(() => ({ ...p, ...r, refs: y, elements: N, nodeId: t }), [p, y, N, t, r]);
    return (
        (0, s.OS)(() => {
            r.dataRef.current.floatingContext = O;
            let e = null == h ? void 0 : h.nodesRef.current.find((e) => e.id === t);
            e && (e.context = O);
        }),
        i.useMemo(() => ({ ...p, context: O, refs: y, elements: N }), [p, y, N, O])
    );
}
function eu(e, t, n) {
    let r = new Map(),
        i = "item" === n,
        s = e;
    if (i && e) {
        let { [c]: t, [_]: n, ...r } = e;
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
                            if (!(i && [c, _].includes(n)))
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
function ed(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        n = e.map((e) => (null == e ? void 0 : e.floating)),
        r = e.map((e) => (null == e ? void 0 : e.item)),
        s = i.useCallback((t) => eu(t, e, "reference"), t),
        a = i.useCallback((t) => eu(t, e, "floating"), n),
        o = i.useCallback((t) => eu(t, e, "item"), r);
    return i.useMemo(() => ({ getReferenceProps: s, getFloatingProps: a, getItemProps: o }), [s, a, o]);
}
let ec = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function e_(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function ef(e, t) {
    void 0 === t && (t = {});
    let { initial: n = { opacity: 0 }, open: r, close: a, common: o, duration: l = 250 } = t,
        d = e.placement,
        c = d.split("-")[0],
        _ = i.useMemo(() => ({ side: c, placement: d }), [c, d]),
        f = "number" == typeof l,
        E = (f ? l : l.open) || 0,
        h = (f ? l : l.close) || 0,
        [p, m] = i.useState(() => ({ ...e_(o, _), ...e_(n, _) })),
        { isMounted: g, status: A } = (function (e, t) {
            void 0 === t && (t = {});
            let {
                    open: n,
                    elements: { floating: r },
                } = e,
                { duration: a = 250 } = t,
                o = ("number" == typeof a ? a : a.close) || 0,
                [l, d] = i.useState("unmounted"),
                c = (function (e, t) {
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
                c || "close" !== l || d("unmounted"),
                (0, s.OS)(() => {
                    if (r) {
                        if (n) {
                            d("initial");
                            let e = requestAnimationFrame(() => {
                                u.flushSync(() => {
                                    d("open");
                                });
                            });
                            return () => {
                                cancelAnimationFrame(e);
                            };
                        }
                        d("close");
                    }
                }, [n, r]),
                { isMounted: c, status: l }
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
                        transitionProperty: Object.keys(r).map(ec).join(","),
                        transitionDuration: E + "ms",
                        ...n,
                        ...r,
                    }),
                "close" === A)
            ) {
                let r = t || e;
                m({ transitionProperty: Object.keys(r).map(ec).join(","), transitionDuration: h + "ms", ...n, ...r });
            }
        }, [h, S, I, T, y, E, A, _]),
        { isMounted: g, styles: p }
    );
}
function eE(e, t) {
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
        d = (e) => {
            let { x: n, y: d, placement: c, elements: _, onClose: f, nodeId: E, tree: h } = e;
            return function (e) {
                function p() {
                    R(i), f();
                }
                if ((R(i), !_.domReference || !_.floating || null == c || null == n || null == d)) return;
                let { clientX: m, clientY: g } = e,
                    A = [m, g],
                    I = "composedPath" in e ? e.composedPath()[0] : e.target,
                    T = "mouseleave" === e.type,
                    S = M(_.floating, I),
                    y = M(_.domReference, I),
                    N = _.domReference.getBoundingClientRect(),
                    O = _.floating.getBoundingClientRect(),
                    v = c.split("-")[0],
                    C = n > O.right - O.width / 2,
                    b = d > O.bottom - O.height / 2,
                    D = A[0] >= N.x && A[0] <= N.x + N.width && A[1] >= N.y && A[1] <= N.y + N.height,
                    L = O.width > N.width,
                    w = O.height > N.height,
                    P = (L ? N : O).left,
                    U = (L ? N : O).right,
                    k = (w ? N : O).top,
                    x = (w ? N : O).bottom;
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
                        })(h.nodesRef.current, E).length)
                )
                    return;
                if (
                    ("top" === v && d >= N.bottom - 1) ||
                    ("bottom" === v && d <= N.top + 1) ||
                    ("left" === v && n >= N.right - 1) ||
                    ("right" === v && n <= N.left + 1)
                )
                    return p();
                let G = [];
                switch (v) {
                    case "top":
                        G = [
                            [P, N.top + 1],
                            [P, O.bottom - 1],
                            [U, O.bottom - 1],
                            [U, N.top + 1],
                        ];
                        break;
                    case "bottom":
                        G = [
                            [P, O.top + 1],
                            [P, N.bottom - 1],
                            [U, N.bottom - 1],
                            [U, O.top + 1],
                        ];
                        break;
                    case "left":
                        G = [
                            [O.right - 1, x],
                            [O.right - 1, k],
                            [N.left + 1, k],
                            [N.left + 1, x],
                        ];
                        break;
                    case "right":
                        G = [
                            [N.right - 1, x],
                            [N.right - 1, k],
                            [O.left + 1, k],
                            [O.left + 1, x],
                        ];
                }
                if (!eE([m, g], G)) {
                    if (s && !D) return p();
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
                        if (null !== t && t < 0.1) return p();
                    }
                    eE(
                        [m, g],
                        (function (e) {
                            let [n, r] = e;
                            switch (v) {
                                case "top": {
                                    let e = [
                                        [O.left, C || L ? O.bottom - t : O.top],
                                        [O.right, C ? (L ? O.bottom - t : O.top) : O.bottom - t],
                                    ];
                                    return [
                                        [L ? n + t / 2 : C ? n + 4 * t : n - 4 * t, r + t + 1],
                                        [L ? n - t / 2 : C ? n + 4 * t : n - 4 * t, r + t + 1],
                                        ...e,
                                    ];
                                }
                                case "bottom": {
                                    let e = [
                                        [O.left, C || L ? O.top + t : O.bottom],
                                        [O.right, C ? (L ? O.top + t : O.bottom) : O.top + t],
                                    ];
                                    return [
                                        [L ? n + t / 2 : C ? n + 4 * t : n - 4 * t, r - t],
                                        [L ? n - t / 2 : C ? n + 4 * t : n - 4 * t, r - t],
                                        ...e,
                                    ];
                                }
                                case "left":
                                    return [
                                        [b || w ? O.right - t : O.left, O.top],
                                        [b ? (w ? O.right - t : O.left) : O.right - t, O.bottom],
                                        [n + t + 1, w ? r + t / 2 : b ? r + 4 * t : r - 4 * t],
                                        [n + t + 1, w ? r - t / 2 : b ? r + 4 * t : r - 4 * t],
                                    ];
                                case "right": {
                                    let e = [
                                        [b || w ? O.left + t : O.right, O.top],
                                        [b ? (w ? O.left + t : O.right) : O.left + t, O.bottom],
                                    ];
                                    return [
                                        [n - t, w ? r + t / 2 : b ? r + 4 * t : r - 4 * t],
                                        [n - t, w ? r - t / 2 : b ? r + 4 * t : r - 4 * t],
                                        ...e,
                                    ];
                                }
                            }
                        })([n, d]),
                    )
                        ? !s && r && (i.current = window.setTimeout(p, 40))
                        : p();
                }
            };
        };
    return (d.__options = { blockPointerEvents: n }), d;
}
