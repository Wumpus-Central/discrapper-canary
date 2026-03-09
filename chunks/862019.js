"use strict";
n.d(t, {
    DL: () => eM,
    Mk: () => x,
    XF: () => en,
    bv: () => eC,
    iB: () => eU,
    s3: () => ef,
    s9: () => eS,
    we: () => ev,
    zR: () => eg,
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
    return "data-floating-ui-" + e;
}
function D(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
}
let L = b("safe-polygon");
function w(e, t, n) {
    if (n && !(0, s.Go)(n)) return 0;
    if ("number" == typeof e) return e;
    if ("function" == typeof e) {
        let n = e();
        return "number" == typeof n ? n : null == n ? void 0 : n[t];
    }
    return null == e ? void 0 : e[t];
}
function M(e) {
    return "function" == typeof e ? e() : e;
}
function x(e, t) {
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
            t || (D(y), D(N), (C.current = !0), (P.current = !1));
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
                let i = w(A.current, "close", S.current);
                i && !v.current
                    ? (D(y), (y.current = window.setTimeout(() => r(!1, e, n), i)))
                    : t && (D(y), r(!1, e, n));
            },
            [A, r],
        ),
        G = (0, s.Jt)(() => {
            x.current(), (v.current = void 0);
        }),
        F = (0, s.Jt)(() => {
            if (b.current) {
                let e = (0, s.YE)(u.floating).body;
                (e.style.pointerEvents = ""), e.removeAttribute(L), (b.current = !1);
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
            if ((D(y), (C.current = !1), (f && !(0, s.Go)(S.current)) || (M(T.current) > 0 && !w(A.current, "open"))))
                return;
            let t = w(A.current, "open", S.current);
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
            if ((D(N), (P.current = !1), g.current && a.current.floatingContext)) {
                n || D(y),
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
            D(y);
        }
        function d(e) {
            V() || U(e, !1);
        }
    }, [u, c, e, f, h, U, G, F, r, n, I, m, A, g, a, V, T]),
        (0, s.OS)(() => {
            var e, t;
            if (c && n && null != (e = g.current) && null != (e = e.__options) && e.blockPointerEvents && k()) {
                b.current = !0;
                let e = u.floating;
                if ((0, o.vq)(u.domReference) && e) {
                    let n = (0, s.YE)(u.floating).body;
                    n.setAttribute(L, "");
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
                G(), D(y), D(N), F();
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
                    0 === M(T.current) ||
                    (P.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                    (D(N),
                    "touch" === S.current ? i() : ((P.current = !0), (N.current = window.setTimeout(i, M(T.current)))));
            },
        };
    }, [f, r, n, I, T]);
    return i.useMemo(() => (c ? { reference: B } : {}), [c, B]);
}
let P = null,
    k = 0;
function U(e, t) {
    void 0 === t && (t = {});
    let { preventScroll: n = !1, cancelPrevious: r = !0, sync: i = !1 } = t;
    r && cancelAnimationFrame(k);
    let s = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
    i ? s() : (k = requestAnimationFrame(s));
}
function G(e, t) {
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
function F(e) {
    return "composedPath" in e ? e.composedPath()[0] : e.target;
}
function V(e) {
    return (null == e ? void 0 : e.ownerDocument) || document;
}
let B = { inert: new WeakMap(), "aria-hidden": new WeakMap(), none: new WeakMap() };
function H(e) {
    return "inert" === e ? B.inert : "aria-hidden" === e ? B["aria-hidden"] : B.none;
}
let j = new WeakSet(),
    Y = {},
    W = 0,
    K = () => "u" > typeof HTMLElement && "inert" in HTMLElement.prototype,
    $ = (e) => e && (e.host || $(e.parentNode)),
    z = (e, t) =>
        t
            .map((t) => {
                if (e.contains(t)) return t;
                let n = $(t);
                return e.contains(n) ? n : null;
            })
            .filter((e) => null != e);
function q(e, t, n, r) {
    let i = "data-floating-ui-inert",
        s = r ? "inert" : n ? "aria-hidden" : null,
        a = z(t, e),
        l = new Set(),
        u = new Set(a),
        c = [];
    Y[i] || (Y[i] = new WeakMap());
    let d = Y[i];
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
                            r = H(s),
                            a = (r.get(e) || 0) + 1,
                            o = (d.get(e) || 0) + 1;
                        r.set(e, a),
                            d.set(e, o),
                            c.push(e),
                            1 === a && n && j.add(e),
                            1 === o && e.setAttribute(i, ""),
                            !n && s && e.setAttribute(s, "inert" === s ? "" : "true");
                    }
            });
    }
    return (
        a.forEach(_),
        f(t),
        l.clear(),
        W++,
        () => {
            c.forEach((e) => {
                let t = H(s),
                    n = (t.get(e) || 0) - 1,
                    r = (d.get(e) || 0) - 1;
                t.set(e, n),
                    d.set(e, r),
                    n || (!j.has(e) && s && e.removeAttribute(s), j.delete(e)),
                    r || e.removeAttribute(i);
            }),
                --W ||
                    ((B.inert = new WeakMap()),
                    (B["aria-hidden"] = new WeakMap()),
                    (B.none = new WeakMap()),
                    (j = new WeakSet()),
                    (Y = {}));
        }
    );
}
function Z(e, t, n) {
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let r = V(e[0]).body;
    return q(e.concat(Array.from(r.querySelectorAll('[aria-live],[role="status"],output'))), r, t, n);
}
let X = {
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
    Q = i.forwardRef(function (e, t) {
        let [n, r] = i.useState();
        (0, s.OS)(() => {
            (0, s.nr)() && r("button");
        }, []);
        let o = { ref: t, tabIndex: 0, role: n, "aria-hidden": !n || void 0, [b("focus-guard")]: "", style: X };
        return (0, a.jsx)("span", { ...e, ...o });
    }),
    J = i.createContext(null),
    ee = b("portal");
function et(e) {
    void 0 === e && (e = {});
    let { id: t, root: n } = e,
        r = y(),
        a = er(),
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
            (n.id = r), n.setAttribute(ee, ""), e.appendChild(n), (c.current = n), u(n);
        }, [t, r]),
        (0, s.OS)(() => {
            if (null === n || !r || c.current) return;
            let e = n || (null == a ? void 0 : a.portalNode);
            e && !(0, o.Ll)(e) && (e = e.current), (e = e || document.body);
            let i = null;
            t && (((i = document.createElement("div")).id = t), e.appendChild(i));
            let s = document.createElement("div");
            (s.id = r), s.setAttribute(ee, ""), (e = i || e).appendChild(s), (c.current = s), u(s);
        }, [t, n, r, a]),
        l
    );
}
function en(e) {
    let { children: t, id: n, root: r, preserveTabOrder: o = !0 } = e,
        l = et({ id: n, root: r }),
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
        (0, a.jsxs)(J.Provider, {
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
                    (0, a.jsx)(Q, {
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
                g && l && (0, a.jsx)("span", { "aria-owns": l.id, style: X }),
                l && u.createPortal(t, l),
                g &&
                    l &&
                    (0, a.jsx)(Q, {
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
let er = () => i.useContext(J);
function ei(e) {
    return i.useMemo(
        () => (t) => {
            e.forEach((e) => {
                e && (e.current = t);
            });
        },
        e,
    );
}
let es = 20,
    ea = [];
function eo() {
    ea = ea.filter((e) => e.isConnected);
}
function el(e) {
    eo(), e && "body" !== (0, o.mq)(e) && (ea.push(e), ea.length > es && (ea = ea.slice(-20)));
}
function eu() {
    return eo(), ea[ea.length - 1];
}
function ec(e) {
    let t = (0, s.kQ)();
    return (0, l.AO)(e, t) ? e : (0, l.Kr)(e, t)[0] || e;
}
function ed(e, t) {
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
let e_ = i.forwardRef(function (e, t) {
    return (0, a.jsx)("button", { ...e, type: "button", ref: t, tabIndex: -1, style: X });
});
function ef(e) {
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
        L = (0, s.WZ)(y) && R,
        w = K(),
        M = !w || c,
        x = !M || (w && E),
        P = (0, s.SE)(u),
        k = (0, s.SE)(d),
        G = (0, s.SE)(_),
        F = O(),
        V = er(),
        B = i.useRef(null),
        H = i.useRef(null),
        j = i.useRef(!1),
        Y = i.useRef(!1),
        W = i.useRef(-1),
        $ = i.useRef(-1),
        z = null != V,
        q = (0, s.nd)(v),
        J = (0, s.Jt)(function (e) {
            return void 0 === e && (e = q), e ? (0, l.Kr)(e, (0, s.kQ)()) : [];
        }),
        ee = (0, s.Jt)((e) => {
            let t = J(e);
            return P.current
                .map((e) => (y && "reference" === e ? y : q && "floating" === e ? q : t))
                .filter(Boolean)
                .flat();
        });
    i.useEffect(() => {
        if (r || !p) return;
        function e(e) {
            if ("Tab" === e.key) {
                (0, s.gR)(q, (0, s.RS)((0, s.YE)(q))) && 0 === J().length && !L && (0, s.jo)(e);
                let t = ee(),
                    n = (0, s.EW)(e);
                "reference" === P.current[0] && n === y && ((0, s.jo)(e), e.shiftKey ? U(t[t.length - 1]) : U(t[1])),
                    "floating" === P.current[1] && n === q && e.shiftKey && ((0, s.jo)(e), U(t[0]));
            }
        }
        let t = (0, s.YE)(q);
        return (
            t.addEventListener("keydown", e),
            () => {
                t.removeEventListener("keydown", e);
            }
        );
    }, [r, y, q, p, P, L, J, ee]),
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
                    n = J().indexOf(t);
                -1 !== n && (W.current = n);
            }
        }, [r, v, J]),
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
                            (0, s.gR)(null == V ? void 0 : V.portalNode, t) ||
                            (null != t && t.hasAttribute(b("focus-guard"))) ||
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
                        (n === y && q && ed(q, P),
                        f && n !== y && !(null != r && r.isConnected) && (0, s.RS)((0, s.YE)(q)) === (0, s.YE)(q).body)
                    ) {
                        (0, o.sb)(q) && q.focus();
                        let e = W.current,
                            t = J(),
                            n = t[e] || t[t.length - 1] || q;
                        (0, o.sb)(n) && n.focus();
                    }
                    if (S.current.insideReactTree) {
                        S.current.insideReactTree = !1;
                        return;
                    }
                    (L || !p) && t && a && !Y.current && t !== eu() && ((j.current = !0), I(!1, e, "focus-out"));
                });
            }
            let n = !!(!F && V);
            function i() {
                D($),
                    (S.current.insideReactTree = !0),
                    ($.current = window.setTimeout(() => {
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
        }, [r, y, v, q, p, F, V, I, m, f, J, L, N, P, S]);
    let et = i.useRef(null),
        en = i.useRef(null),
        es = ei([et, null == V ? void 0 : V.beforeInsideRef]),
        ea = ei([en, null == V ? void 0 : V.afterInsideRef]);
    function ef(e) {
        return !r && h && p
            ? (0, a.jsx)(e_, {
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
                (null == V || null == (e = V.portalNode) ? void 0 : e.querySelectorAll("[" + b("portal") + "]")) || [],
            ),
            i = [
                v,
                null ==
                    (t = (F ? (0, s.$4)(F.nodesRef.current, N()) : []).find((e) => {
                        var t;
                        return (0, s.WZ)((null == (t = e.context) ? void 0 : t.elements.domReference) || null);
                    })) || null == (t = t.context)
                    ? void 0
                    : t.elements.domReference,
                ...n,
                ...C(),
                B.current,
                H.current,
                et.current,
                en.current,
                null == V ? void 0 : V.beforeOutsideRef.current,
                null == V ? void 0 : V.afterOutsideRef.current,
                P.current.includes("reference") || L ? y : null,
            ].filter((e) => null != e),
            a = p || L ? Z(i, !x, x) : Z(i);
        return () => {
            a();
        };
    }, [r, y, v, p, P, V, L, M, x, F, N, C]),
        (0, s.OS)(() => {
            if (r || !(0, o.sb)(q)) return;
            let e = (0, s.YE)(q),
                t = (0, s.RS)(e);
            queueMicrotask(() => {
                let e = ee(q),
                    n = k.current,
                    r = ("number" == typeof n ? e[n] : n.current) || q,
                    i = (0, s.gR)(q, t);
                R || i || !A || U(r, { preventScroll: r === q });
            });
        }, [r, A, q, R, ee, k]),
        (0, s.OS)(() => {
            if (r || !q) return;
            let e = (0, s.YE)(q);
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
            el((0, s.RS)(e)), T.on("openchange", t);
            let n = e.createElement("span");
            function i() {
                if ("boolean" == typeof G.current) {
                    let e = y || eu();
                    return e && e.isConnected ? e : n;
                }
                return G.current.current || n;
            }
            return (
                n.setAttribute("tabindex", "-1"),
                n.setAttribute("aria-hidden", "true"),
                Object.assign(n.style, X),
                z && y && y.insertAdjacentElement("afterend", n),
                () => {
                    T.off("openchange", t);
                    let r = (0, s.RS)(e),
                        a =
                            (0, s.gR)(v, r) ||
                            (F &&
                                (0, s.CM)(F.nodesRef.current, N(), !1).some((e) => {
                                    var t;
                                    return (0, s.gR)(null == (t = e.context) ? void 0 : t.elements.floating, r);
                                })),
                        l = i();
                    queueMicrotask(() => {
                        let t = ec(l);
                        G.current &&
                            !j.current &&
                            (0, o.sb)(t) &&
                            (t === r || r === e.body || a) &&
                            t.focus({ preventScroll: !0 }),
                            n.remove();
                    });
                }
            );
        }, [r, v, q, G, S, T, F, z, y, N]),
        i.useEffect(
            () => (
                queueMicrotask(() => {
                    j.current = !1;
                }),
                () => {
                    queueMicrotask(eo);
                }
            ),
            [r],
        ),
        (0, s.OS)(() => {
            if (!r && V)
                return (
                    V.setFocusManagerState({ modal: p, closeOnFocusOut: m, open: A, onOpenChange: I, domReference: y }),
                    () => {
                        V.setFocusManagerState(null);
                    }
                );
        }, [r, V, p, A, I, m, y]),
        (0, s.OS)(() => {
            r || (q && ed(q, P));
        }, [r, q, P]);
    let ep = !r && M && (!p || !L) && (z || p);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            ep &&
                (0, a.jsx)(Q, {
                    "data-type": "inside",
                    ref: es,
                    onFocus: (e) => {
                        if (p) {
                            let e = ee();
                            U("reference" === u[0] ? e[0] : e[e.length - 1]);
                        } else if (null != V && V.preserveTabOrder && V.portalNode)
                            if (((j.current = !1), (0, s.Qp)(e, V.portalNode))) {
                                let e = (0, s.vF)(y);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = V.beforeOutsideRef.current) || t.focus();
                            }
                    },
                }),
            !L && ef("start"),
            n,
            ef("end"),
            ep &&
                (0, a.jsx)(Q, {
                    "data-type": "inside",
                    ref: ea,
                    onFocus: (e) => {
                        if (p) U(ee()[0]);
                        else if (null != V && V.preserveTabOrder && V.portalNode)
                            if ((m && (j.current = !0), (0, s.Qp)(e, V.portalNode))) {
                                let e = (0, s.XJ)(y);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = V.afterOutsideRef.current) || t.focus();
                            }
                    },
                }),
        ],
    });
}
let ep = 0,
    eh = "--floating-ui-scrollbar-width";
function em() {
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
    if (((n.overflow = "hidden"), n.setProperty(eh, i + "px"), i && (n[r] = i + "px"), t)) {
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
            n.removeProperty(eh),
            t && (Object.assign(n, { position: "", top: "", left: "", right: "" }), window.scrollTo(a, o));
    };
}
let eE = () => {},
    eg = i.forwardRef(function (e, t) {
        let { lockScroll: n = !1, ...r } = e;
        return (
            (0, s.OS)(() => {
                if (n)
                    return (
                        1 == ++ep && (eE = em()),
                        () => {
                            0 == --ep && eE();
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
    eA = { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
    eI = { pointerdown: "onPointerDownCapture", mousedown: "onMouseDownCapture", click: "onClickCapture" },
    eT = (e) => {
        var t, n;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
    };
function eS(e, t) {
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
        { escapeKey: S, outsidePress: y } = eT(m),
        { escapeKey: v, outsidePress: N } = eT(E),
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
        D = (0, s.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                R(e), null == (t = (0, s.EW)(e)) || t.removeEventListener("keydown", n);
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
                c = "[" + b("inert") + "]",
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
            (f.addEventListener("keydown", v ? D : R, v),
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
                    (f.removeEventListener("keydown", v ? D : R, v),
                    f.removeEventListener("compositionstart", i),
                    f.removeEventListener("compositionend", d)),
                    I && f.removeEventListener(_, N ? w : L, N),
                    p.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, a, c, I, _, n, r, h, u, S, y, R, v, D, L, N, w]),
        i.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, I, _]);
    let M = i.useMemo(
            () => ({
                onKeyDown: R,
                ...(f && {
                    [eA[p]]: (e) => {
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
        x = i.useMemo(
            () => ({
                onKeyDown: R,
                onMouseDown() {
                    T.current = !0;
                },
                onMouseUp() {
                    T.current = !0;
                },
                [eI[_]]: () => {
                    l.current.insideReactTree = !0;
                },
            }),
            [R, _, l],
        );
    return i.useMemo(() => (u ? { reference: M, floating: x } : {}), [u, M, x]);
}
function ey(e) {
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
function ev(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        n = ey({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
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
function eN(e, t, n) {
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
function eC(e) {
    void 0 === e && (e = []);
    let t = e.map((e) => (null == e ? void 0 : e.reference)),
        n = e.map((e) => (null == e ? void 0 : e.floating)),
        r = e.map((e) => (null == e ? void 0 : e.item)),
        s = i.useCallback((t) => eN(t, e, "reference"), t),
        a = i.useCallback((t) => eN(t, e, "floating"), n),
        o = i.useCallback((t) => eN(t, e, "item"), r);
    return i.useMemo(() => ({ getReferenceProps: s, getFloatingProps: a, getItemProps: o }), [s, a, o]);
}
let eR = "Escape";
function eO(e, t, n) {
    switch (e) {
        case "vertical":
            return t;
        case "horizontal":
            return n;
        default:
            return t || n;
    }
}
let eb = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function eD(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function eL(e, t) {
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
function ew(e, t) {
    void 0 === t && (t = {});
    let {
            open: n,
            elements: { floating: r },
        } = e,
        { duration: a = 250 } = t,
        o = ("number" == typeof a ? a : a.close) || 0,
        [l, c] = i.useState("unmounted"),
        d = eL(n, o);
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
function eM(e, t) {
    void 0 === t && (t = {});
    let { initial: n = { opacity: 0 }, open: r, close: a, common: o, duration: l = 250 } = t,
        u = e.placement,
        c = u.split("-")[0],
        d = i.useMemo(() => ({ side: c, placement: u }), [c, u]),
        _ = "number" == typeof l,
        f = (_ ? l : l.open) || 0,
        p = (_ ? l : l.close) || 0,
        [h, m] = i.useState(() => ({ ...eD(o, d), ...eD(n, d) })),
        { isMounted: E, status: g } = ew(e, { duration: l }),
        A = (0, s.SE)(n),
        I = (0, s.SE)(r),
        T = (0, s.SE)(a),
        S = (0, s.SE)(o);
    return (
        (0, s.OS)(() => {
            let e = eD(A.current, d),
                t = eD(T.current, d),
                n = eD(S.current, d),
                r = eD(I.current, d) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
            if (
                ("initial" === g && m((t) => ({ transitionProperty: t.transitionProperty, ...n, ...e })),
                "open" === g &&
                    m({
                        transitionProperty: Object.keys(r).map(eb).join(","),
                        transitionDuration: f + "ms",
                        ...n,
                        ...r,
                    }),
                "close" === g)
            ) {
                let r = t || e;
                m({ transitionProperty: Object.keys(r).map(eb).join(","), transitionDuration: p + "ms", ...n, ...r });
            }
        }, [p, T, A, I, S, f, g, d]),
        { isMounted: E, styles: h }
    );
}
function ex(e, t, n) {
    return (
        void 0 === n && (n = !0),
        e
            .filter((e) => {
                var r;
                return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open));
            })
            .flatMap((t) => [t, ...ex(e, t.id, n)])
    );
}
function eP(e, t) {
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
function ek(e, t) {
    return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height;
}
function eU(e) {
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
                D(i), d();
            }
            if ((D(i), !u.domReference || !u.floating || null == l || null == n || null == a)) return;
            let { clientX: h, clientY: m } = e,
                E = [h, m],
                g = F(e),
                A = "mouseleave" === e.type,
                I = G(u.floating, g),
                T = G(u.domReference, g),
                S = u.domReference.getBoundingClientRect(),
                y = u.floating.getBoundingClientRect(),
                v = l.split("-")[0],
                N = n > y.right - y.width / 2,
                C = a > y.bottom - y.height / 2,
                R = ek(E, S),
                O = y.width > S.width,
                b = y.height > S.height,
                L = (O ? S : y).left,
                w = (O ? S : y).right,
                M = (b ? S : y).top,
                x = (b ? S : y).bottom;
            if (I && ((s = !0), !A)) return;
            if ((T && (s = !1), T && !A)) {
                s = !0;
                return;
            }
            if (
                (A && (0, o.vq)(e.relatedTarget) && G(u.floating, e.relatedTarget)) ||
                (f && ex(f.nodesRef.current, _).length)
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
            if (!eP([h, m], P)) {
                if (s && !R) return p();
                if (!A && r) {
                    let t = c(e.clientX, e.clientY),
                        n = 0.1;
                    if (null !== t && t < n) return p();
                }
                eP([h, m], k([n, a])) ? !s && r && (i.current = window.setTimeout(p, 40)) : p();
            }
        };
    };
    return (d.__options = { blockPointerEvents: n }), d;
}
