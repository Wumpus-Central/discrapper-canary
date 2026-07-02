"use strict";
n.d(t, {
    $c: () => C,
    DL: () => em,
    Mk: () => N,
    P6: () => D,
    R1: () => S,
    XF: () => q,
    bv: () => ed,
    fI: () => T,
    iB: () => eg,
    s3: () => ee,
    s9: () => el,
    we: () => ec,
    zR: () => ea,
});
var r,
    a = n(64700);
if (!/^(38190|98365)$/.test(n.j)) var i = n(357786);
var o = n(627968);
if (!/^(38190|98365)$/.test(n.j)) var s = n(84157);
if (!/^(38190|98365)$/.test(n.j)) var l = n(111975);
var c = n(340287);
if (!/^(38190|98365)$/.test(n.j)) var u = n(879821);
let d = "active",
    _ = "selected",
    p = { ...(r || (r = n.t(a, 2))) },
    m = !1,
    f = 0,
    g = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + f++,
    h = p.useId,
    b = /^(38190|98365)$/.test(n.j)
        ? null
        : h ||
          function () {
              let [e, t] = a.useState(() => (m ? g() : void 0));
              return (
                  (0, i.OS)(() => {
                      null == e && t(g());
                  }, []),
                  a.useEffect(() => {
                      m = !0;
                  }, []),
                  e
              );
          };
function E() {
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
let y = /^(38190|98365)$/.test(n.j) ? null : a.createContext(null),
    v = /^(38190|98365)$/.test(n.j) ? null : a.createContext(null),
    S = () => {
        var e;
        return (null == (e = a.useContext(y)) ? void 0 : e.id) || null;
    };
function T(e) {
    let t = b(),
        n = a.useContext(v),
        r = S(),
        o = e || r;
    return (
        (0, i.OS)(() => {
            if (!t) return;
            let e = { id: t, parentId: o };
            return (
                null == n || n.addNode(e),
                () => {
                    null == n || n.removeNode(e);
                }
            );
        }, [n, t, o]),
        t
    );
}
function C(e) {
    let { children: t, id: n } = e,
        r = S();
    return (0, o.jsx)(y.Provider, { value: a.useMemo(() => ({ id: n, parentId: r }), [n, r]), children: t });
}
function D(e) {
    let { children: t } = e,
        n = a.useRef([]),
        r = a.useCallback((e) => {
            n.current = [...n.current, e];
        }, []),
        i = a.useCallback((e) => {
            n.current = n.current.filter((t) => t !== e);
        }, []),
        [s] = a.useState(() => E());
    return (0, o.jsx)(v.Provider, {
        value: a.useMemo(() => ({ nodesRef: n, addNode: r, removeNode: i, events: s }), [r, i, s]),
        children: t,
    });
}
function O(e) {
    return "data-floating-ui-" + e;
}
function w(e) {
    -1 !== e.current && (clearTimeout(e.current), (e.current = -1));
}
let A = /^(38190|98365)$/.test(n.j) ? null : O("safe-polygon");
function R(e, t, n) {
    if (n && !(0, i.Go)(n)) return 0;
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
function N(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, dataRef: o, events: l, elements: c } = e,
        { enabled: u = !0, delay: d = 0, handleClose: _ = null, mouseOnly: p = !1, restMs: m = 0, move: f = !0 } = t,
        g = a.useContext(v),
        h = S(),
        b = (0, i.SE)(_),
        E = (0, i.SE)(d),
        y = (0, i.SE)(n),
        T = (0, i.SE)(m),
        C = a.useRef(),
        D = a.useRef(-1),
        O = a.useRef(),
        N = a.useRef(-1),
        x = a.useRef(!0),
        L = a.useRef(!1),
        k = a.useRef(() => {}),
        I = a.useRef(!1),
        P = (0, i.Jt)(() => {
            var e;
            let t = null == (e = o.current.openEvent) ? void 0 : e.type;
            return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t;
        });
    a.useEffect(() => {
        if (u)
            return (
                l.on("openchange", e),
                () => {
                    l.off("openchange", e);
                }
            );
        function e(e) {
            let { open: t } = e;
            t || (w(D), w(N), (x.current = !0), (I.current = !1));
        }
    }, [u, l]),
        a.useEffect(() => {
            if (!u || !b.current || !n) return;
            function e(e) {
                P() && r(!1, e, "hover");
            }
            let t = (0, i.YE)(c.floating).documentElement;
            return (
                t.addEventListener("mouseleave", e),
                () => {
                    t.removeEventListener("mouseleave", e);
                }
            );
        }, [c.floating, n, r, u, b, P]);
    let F = a.useCallback(
            function (e, t, n) {
                void 0 === t && (t = !0), void 0 === n && (n = "hover");
                let a = R(E.current, "close", C.current);
                a && !O.current
                    ? (w(D), (D.current = window.setTimeout(() => r(!1, e, n), a)))
                    : t && (w(D), r(!1, e, n));
            },
            [E, r],
        ),
        Y = (0, i.Jt)(() => {
            k.current(), (O.current = void 0);
        }),
        B = (0, i.Jt)(() => {
            if (L.current) {
                let e = (0, i.YE)(c.floating).body;
                (e.style.pointerEvents = ""), e.removeAttribute(A), (L.current = !1);
            }
        }),
        U = (0, i.Jt)(() => !!o.current.openEvent && ["click", "mousedown"].includes(o.current.openEvent.type));
    a.useEffect(() => {
        if (u && (0, s.vq)(c.domReference)) {
            let r = c.domReference,
                i = c.floating;
            return (
                n && r.addEventListener("mouseleave", a),
                f && r.addEventListener("mousemove", e, { once: !0 }),
                r.addEventListener("mouseenter", e),
                r.addEventListener("mouseleave", t),
                i &&
                    (i.addEventListener("mouseleave", a),
                    i.addEventListener("mouseenter", l),
                    i.addEventListener("mouseleave", d)),
                () => {
                    n && r.removeEventListener("mouseleave", a),
                        f && r.removeEventListener("mousemove", e),
                        r.removeEventListener("mouseenter", e),
                        r.removeEventListener("mouseleave", t),
                        i &&
                            (i.removeEventListener("mouseleave", a),
                            i.removeEventListener("mouseenter", l),
                            i.removeEventListener("mouseleave", d));
                }
            );
        }
        function e(e) {
            if ((w(D), (x.current = !1), (p && !(0, i.Go)(C.current)) || (M(T.current) > 0 && !R(E.current, "open"))))
                return;
            let t = R(E.current, "open", C.current);
            t
                ? (D.current = window.setTimeout(() => {
                      y.current || r(!0, e, "hover");
                  }, t))
                : n || r(!0, e, "hover");
        }
        function t(e) {
            if (U()) return void B();
            k.current();
            let t = (0, i.YE)(c.floating);
            if ((w(N), (I.current = !1), b.current && o.current.floatingContext)) {
                n || w(D),
                    (O.current = b.current({
                        ...o.current.floatingContext,
                        tree: g,
                        x: e.clientX,
                        y: e.clientY,
                        onClose() {
                            B(), Y(), U() || F(e, !0, "safe-polygon");
                        },
                    }));
                let r = O.current;
                t.addEventListener("mousemove", r),
                    (k.current = () => {
                        t.removeEventListener("mousemove", r);
                    });
                return;
            }
            ("touch" === C.current && (0, i.gR)(c.floating, e.relatedTarget)) || F(e);
        }
        function a(e) {
            U() ||
                (o.current.floatingContext &&
                    (null == b.current ||
                        b.current({
                            ...o.current.floatingContext,
                            tree: g,
                            x: e.clientX,
                            y: e.clientY,
                            onClose() {
                                B(), Y(), U() || F(e);
                            },
                        })(e)));
        }
        function l() {
            w(D);
        }
        function d(e) {
            U() || F(e, !1);
        }
    }, [c, u, e, p, f, F, Y, B, r, n, y, g, E, b, o, U, T]),
        (0, i.OS)(() => {
            var e, t;
            if (u && n && null != (e = b.current) && null != (e = e.__options) && e.blockPointerEvents && P()) {
                L.current = !0;
                let e = c.floating;
                if ((0, s.vq)(c.domReference) && e) {
                    let n = (0, i.YE)(c.floating).body;
                    n.setAttribute(A, "");
                    let r = c.domReference,
                        a =
                            null == g ||
                            null == (t = g.nodesRef.current.find((e) => e.id === h)) ||
                            null == (t = t.context)
                                ? void 0
                                : t.elements.floating;
                    return (
                        a && (a.style.pointerEvents = ""),
                        (n.style.pointerEvents = "none"),
                        (r.style.pointerEvents = "auto"),
                        (e.style.pointerEvents = "auto"),
                        () => {
                            (n.style.pointerEvents = ""), (r.style.pointerEvents = ""), (e.style.pointerEvents = "");
                        }
                    );
                }
            }
        }, [u, n, h, c, g, b, P]),
        (0, i.OS)(() => {
            n || ((C.current = void 0), (I.current = !1), Y(), B());
        }, [n, Y, B]),
        a.useEffect(
            () => () => {
                Y(), w(D), w(N), B();
            },
            [u, c.domReference, Y, B],
        );
    let j = a.useMemo(() => {
        function e(e) {
            C.current = e.pointerType;
        }
        return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove(e) {
                let { nativeEvent: t } = e;
                function a() {
                    x.current || y.current || r(!0, t, "hover");
                }
                (p && !(0, i.Go)(C.current)) ||
                    n ||
                    0 === M(T.current) ||
                    (I.current && e.movementX ** 2 + e.movementY ** 2 < 2) ||
                    (w(N),
                    "touch" === C.current ? a() : ((I.current = !0), (N.current = window.setTimeout(a, M(T.current)))));
            },
        };
    }, [p, r, n, y, T]);
    return a.useMemo(() => (u ? { reference: j } : {}), [u, j]);
}
let x = 0;
function L(e, t) {
    void 0 === t && (t = {});
    let { preventScroll: n = !1, cancelPrevious: r = !0, sync: a = !1 } = t;
    r && cancelAnimationFrame(x);
    let i = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
    a ? i() : (x = requestAnimationFrame(i));
}
function k(e, t) {
    if (!e || !t) return !1;
    let n = null == t.getRootNode ? void 0 : t.getRootNode();
    if (e.contains(t)) return !0;
    if (n && (0, s.Ng)(n)) {
        let n = t;
        for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
        }
    }
    return !1;
}
let I = { inert: new WeakMap(), "aria-hidden": new WeakMap(), none: new WeakMap() };
function P(e) {
    return "inert" === e ? I.inert : "aria-hidden" === e ? I["aria-hidden"] : I.none;
}
let F = new WeakSet(),
    Y = /^(38190|98365)$/.test(n.j) ? null : {},
    B = 0,
    U = (e) => e && (e.host || U(e.parentNode));
function j(e, t, n) {
    var r, a, i;
    let o, l, c, u, d, _, p;
    void 0 === t && (t = !1), void 0 === n && (n = !1);
    let m = ((null == (r = e[0]) ? void 0 : r.ownerDocument) || document).body;
    return (
        (a = e.concat(Array.from(m.querySelectorAll('[aria-live],[role="status"],output')))),
        (i = t),
        (o = "data-floating-ui-inert"),
        (l = n ? "inert" : i ? "aria-hidden" : null),
        (c = a
            .map((e) => {
                if (m.contains(e)) return e;
                let t = U(e);
                return m.contains(t) ? t : null;
            })
            .filter((e) => null != e)),
        (u = new Set()),
        (d = new Set(c)),
        (_ = []),
        Y[o] || (Y[o] = new WeakMap()),
        (p = Y[o]),
        c.forEach(function e(t) {
            !(!t || u.has(t)) && (u.add(t), t.parentNode && e(t.parentNode));
        }),
        (function e(t) {
            !t ||
                d.has(t) ||
                [].forEach.call(t.children, (t) => {
                    if ("script" !== (0, s.mq)(t))
                        if (u.has(t)) e(t);
                        else {
                            let e = l ? t.getAttribute(l) : null,
                                n = null !== e && "false" !== e,
                                r = P(l),
                                a = (r.get(t) || 0) + 1,
                                i = (p.get(t) || 0) + 1;
                            r.set(t, a),
                                p.set(t, i),
                                _.push(t),
                                1 === a && n && F.add(t),
                                1 === i && t.setAttribute(o, ""),
                                !n && l && t.setAttribute(l, "inert" === l ? "" : "true");
                        }
                });
        })(m),
        u.clear(),
        B++,
        () => {
            _.forEach((e) => {
                let t = P(l),
                    n = (t.get(e) || 0) - 1,
                    r = (p.get(e) || 0) - 1;
                t.set(e, n),
                    p.set(e, r),
                    n || (!F.has(e) && l && e.removeAttribute(l), F.delete(e)),
                    r || e.removeAttribute(o);
            }),
                --B ||
                    ((I.inert = new WeakMap()),
                    (I["aria-hidden"] = new WeakMap()),
                    (I.none = new WeakMap()),
                    (F = new WeakSet()),
                    (Y = {}));
        }
    );
}
let H = /^(38190|98365)$/.test(n.j)
        ? null
        : {
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
    G = /^(38190|98365)$/.test(n.j)
        ? null
        : a.forwardRef(function (e, t) {
              let [n, r] = a.useState();
              (0, i.OS)(() => {
                  (0, i.nr)() && r("button");
              }, []);
              let s = { ref: t, tabIndex: 0, role: n, "aria-hidden": !n || void 0, [O("focus-guard")]: "", style: H };
              return (0, o.jsx)("span", { ...e, ...s });
          }),
    z = /^(38190|98365)$/.test(n.j) ? null : a.createContext(null),
    W = /^(38190|98365)$/.test(n.j) ? null : O("portal");
function q(e) {
    let { children: t, id: n, root: r, preserveTabOrder: l = !0 } = e,
        u = (function (e) {
            void 0 === e && (e = {});
            let { id: t, root: n } = e,
                r = b(),
                o = V(),
                [l, c] = a.useState(null),
                u = a.useRef(null);
            return (
                (0, i.OS)(
                    () => () => {
                        null == l || l.remove(),
                            queueMicrotask(() => {
                                u.current = null;
                            });
                    },
                    [l],
                ),
                (0, i.OS)(() => {
                    if (!r || u.current) return;
                    let e = t ? document.getElementById(t) : null;
                    if (!e) return;
                    let n = document.createElement("div");
                    (n.id = r), n.setAttribute(W, ""), e.appendChild(n), (u.current = n), c(n);
                }, [t, r]),
                (0, i.OS)(() => {
                    if (null === n || !r || u.current) return;
                    let e = n || (null == o ? void 0 : o.portalNode);
                    e && !(0, s.Ll)(e) && (e = e.current), (e = e || document.body);
                    let a = null;
                    t && (((a = document.createElement("div")).id = t), e.appendChild(a));
                    let i = document.createElement("div");
                    (i.id = r), i.setAttribute(W, ""), (e = a || e).appendChild(i), (u.current = i), c(i);
                }, [t, n, r, o]),
                l
            );
        })({ id: n, root: r }),
        [d, _] = a.useState(null),
        p = a.useRef(null),
        m = a.useRef(null),
        f = a.useRef(null),
        g = a.useRef(null),
        h = null == d ? void 0 : d.modal,
        E = null == d ? void 0 : d.open,
        y = !!d && !d.modal && d.open && l && !!(r || u);
    return (
        a.useEffect(() => {
            if (u && l && !h)
                return (
                    u.addEventListener("focusin", e, !0),
                    u.addEventListener("focusout", e, !0),
                    () => {
                        u.removeEventListener("focusin", e, !0), u.removeEventListener("focusout", e, !0);
                    }
                );
            function e(e) {
                u && (0, i.Qp)(e) && ("focusin" === e.type ? i.yV : i.N)(u);
            }
        }, [u, l, h]),
        a.useEffect(() => {
            !u || E || (0, i.yV)(u);
        }, [E, u]),
        (0, o.jsxs)(z.Provider, {
            value: a.useMemo(
                () => ({
                    preserveTabOrder: l,
                    beforeOutsideRef: p,
                    afterOutsideRef: m,
                    beforeInsideRef: f,
                    afterInsideRef: g,
                    portalNode: u,
                    setFocusManagerState: _,
                }),
                [l, u],
            ),
            children: [
                y &&
                    u &&
                    (0, o.jsx)(G, {
                        "data-type": "outside",
                        ref: p,
                        onFocus: (e) => {
                            if ((0, i.Qp)(e, u)) {
                                var t;
                                null == (t = f.current) || t.focus();
                            } else {
                                let e = d ? d.domReference : null,
                                    t = (0, i.XJ)(e);
                                null == t || t.focus();
                            }
                        },
                    }),
                y && u && (0, o.jsx)("span", { "aria-owns": u.id, style: H }),
                u && c.createPortal(t, u),
                y &&
                    u &&
                    (0, o.jsx)(G, {
                        "data-type": "outside",
                        ref: m,
                        onFocus: (e) => {
                            if ((0, i.Qp)(e, u)) {
                                var t;
                                null == (t = g.current) || t.focus();
                            } else {
                                let t = d ? d.domReference : null,
                                    n = (0, i.vF)(t);
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
let V = () => a.useContext(z);
function $(e) {
    return a.useMemo(
        () => (t) => {
            e.forEach((e) => {
                e && (e.current = t);
            });
        },
        e,
    );
}
let Q = /^(38190|98365)$/.test(n.j) ? null : [];
function K() {
    Q = Q.filter((e) => e.isConnected);
}
function X() {
    return K(), Q[Q.length - 1];
}
function Z(e, t) {
    var n;
    if (!t.current.includes("floating") && !(null != (n = e.getAttribute("role")) && n.includes("dialog"))) return;
    let r = (0, i.kQ)(),
        a = (0, l.nq)(e, r).filter((e) => {
            let t = e.getAttribute("data-tabindex") || "";
            return (0, l.AO)(e, r) || (e.hasAttribute("data-tabindex") && !t.startsWith("-"));
        }),
        o = e.getAttribute("tabindex");
    t.current.includes("floating") || 0 === a.length
        ? "0" !== o && e.setAttribute("tabindex", "0")
        : ("-1" !== o || (e.hasAttribute("data-tabindex") && "-1" !== e.getAttribute("data-tabindex"))) &&
          (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"));
}
let J = /^(38190|98365)$/.test(n.j)
    ? null
    : a.forwardRef(function (e, t) {
          return (0, o.jsx)("button", { ...e, type: "button", ref: t, tabIndex: -1, style: H });
      });
function ee(e) {
    let {
            context: t,
            children: n,
            disabled: r = !1,
            order: c = ["content"],
            guards: u = !0,
            initialFocus: d = 0,
            returnFocus: _ = !0,
            restoreFocus: p = !1,
            modal: m = !0,
            visuallyHiddenDismiss: f = !1,
            closeOnFocusOut: g = !0,
            outsideElementsInert: h = !1,
            getInsideElements: b = () => [],
        } = e,
        {
            open: E,
            onOpenChange: y,
            events: S,
            dataRef: T,
            elements: { domReference: C, floating: D },
        } = t,
        A = (0, i.Jt)(() => {
            var e;
            return null == (e = T.current.floatingContext) ? void 0 : e.nodeId;
        }),
        R = (0, i.Jt)(b),
        M = "number" == typeof d && d < 0,
        N = (0, i.WZ)(C) && M,
        x = "u" > typeof HTMLElement && "inert" in HTMLElement.prototype,
        k = !x || u,
        I = !k || (x && h),
        P = (0, i.SE)(c),
        F = (0, i.SE)(d),
        Y = (0, i.SE)(_),
        B = a.useContext(v),
        U = V(),
        z = a.useRef(null),
        W = a.useRef(null),
        q = a.useRef(!1),
        ee = a.useRef(!1),
        et = a.useRef(-1),
        en = a.useRef(-1),
        er = null != U,
        ea = (0, i.nd)(D),
        ei = (0, i.Jt)(function (e) {
            return void 0 === e && (e = ea), e ? (0, l.Kr)(e, (0, i.kQ)()) : [];
        }),
        eo = (0, i.Jt)((e) => {
            let t = ei(e);
            return P.current
                .map((e) => (C && "reference" === e ? C : ea && "floating" === e ? ea : t))
                .filter(Boolean)
                .flat();
        });
    a.useEffect(() => {
        if (r || !m) return;
        function e(e) {
            if ("Tab" === e.key) {
                (0, i.gR)(ea, (0, i.RS)((0, i.YE)(ea))) && 0 === ei().length && !N && (0, i.jo)(e);
                let t = eo(),
                    n = (0, i.EW)(e);
                "reference" === P.current[0] && n === C && ((0, i.jo)(e), e.shiftKey ? L(t[t.length - 1]) : L(t[1])),
                    "floating" === P.current[1] && n === ea && e.shiftKey && ((0, i.jo)(e), L(t[0]));
            }
        }
        let t = (0, i.YE)(ea);
        return (
            t.addEventListener("keydown", e),
            () => {
                t.removeEventListener("keydown", e);
            }
        );
    }, [r, C, ea, m, P, N, ei, eo]),
        a.useEffect(() => {
            if (!r && D)
                return (
                    D.addEventListener("focusin", e),
                    () => {
                        D.removeEventListener("focusin", e);
                    }
                );
            function e(e) {
                let t = (0, i.EW)(e),
                    n = ei().indexOf(t);
                -1 !== n && (et.current = n);
            }
        }, [r, D, ei]),
        a.useEffect(() => {
            if (r || !g) return;
            function e() {
                (ee.current = !0),
                    setTimeout(() => {
                        ee.current = !1;
                    });
            }
            function t(e) {
                let t = e.relatedTarget,
                    n = e.currentTarget,
                    r = (0, i.EW)(e);
                queueMicrotask(() => {
                    let a = A(),
                        o = !(
                            (0, i.gR)(C, t) ||
                            (0, i.gR)(D, t) ||
                            (0, i.gR)(t, D) ||
                            (0, i.gR)(null == U ? void 0 : U.portalNode, t) ||
                            (null != t && t.hasAttribute(O("focus-guard"))) ||
                            (B &&
                                ((0, i.CM)(B.nodesRef.current, a).find((e) => {
                                    var n, r;
                                    return (
                                        (0, i.gR)(null == (n = e.context) ? void 0 : n.elements.floating, t) ||
                                        (0, i.gR)(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                                    );
                                }) ||
                                    (0, i.$4)(B.nodesRef.current, a).find((e) => {
                                        var n, r, a;
                                        return (
                                            [
                                                null == (n = e.context) ? void 0 : n.elements.floating,
                                                (0, i.nd)(null == (r = e.context) ? void 0 : r.elements.floating),
                                            ].includes(t) ||
                                            (null == (a = e.context) ? void 0 : a.elements.domReference) === t
                                        );
                                    })))
                        );
                    if (
                        (n === C && ea && Z(ea, P),
                        p &&
                            n !== C &&
                            !(null != r && r.isConnected) &&
                            (0, i.RS)((0, i.YE)(ea)) === (0, i.YE)(ea).body)
                    ) {
                        (0, s.sb)(ea) && ea.focus();
                        let e = et.current,
                            t = ei(),
                            n = t[e] || t[t.length - 1] || ea;
                        (0, s.sb)(n) && n.focus();
                    }
                    if (T.current.insideReactTree) {
                        T.current.insideReactTree = !1;
                        return;
                    }
                    (N || !m) && t && o && !ee.current && t !== X() && ((q.current = !0), y(!1, e, "focus-out"));
                });
            }
            let n = !!(!B && U);
            function a() {
                w(en),
                    (T.current.insideReactTree = !0),
                    (en.current = window.setTimeout(() => {
                        T.current.insideReactTree = !1;
                    }));
            }
            if (D && (0, s.sb)(C))
                return (
                    C.addEventListener("focusout", t),
                    C.addEventListener("pointerdown", e),
                    D.addEventListener("focusout", t),
                    n && D.addEventListener("focusout", a, !0),
                    () => {
                        C.removeEventListener("focusout", t),
                            C.removeEventListener("pointerdown", e),
                            D.removeEventListener("focusout", t),
                            n && D.removeEventListener("focusout", a, !0);
                    }
                );
        }, [r, C, D, ea, m, B, U, y, g, p, ei, N, A, P, T]);
    let es = a.useRef(null),
        el = a.useRef(null),
        ec = $([es, null == U ? void 0 : U.beforeInsideRef]),
        eu = $([el, null == U ? void 0 : U.afterInsideRef]);
    function ed(e) {
        return !r && f && m
            ? (0, o.jsx)(J, {
                  ref: "start" === e ? z : W,
                  onClick: (e) => y(!1, e.nativeEvent),
                  children: "string" == typeof f ? f : "Dismiss",
              })
            : null;
    }
    a.useEffect(() => {
        var e, t;
        if (r || !D) return;
        let n = Array.from(
                (null == U || null == (e = U.portalNode) ? void 0 : e.querySelectorAll("[" + O("portal") + "]")) || [],
            ),
            a = [
                D,
                null ==
                    (t = (B ? (0, i.$4)(B.nodesRef.current, A()) : []).find((e) => {
                        var t;
                        return (0, i.WZ)((null == (t = e.context) ? void 0 : t.elements.domReference) || null);
                    })) || null == (t = t.context)
                    ? void 0
                    : t.elements.domReference,
                ...n,
                ...R(),
                z.current,
                W.current,
                es.current,
                el.current,
                null == U ? void 0 : U.beforeOutsideRef.current,
                null == U ? void 0 : U.afterOutsideRef.current,
                P.current.includes("reference") || N ? C : null,
            ].filter((e) => null != e),
            o = m || N ? j(a, !I, I) : j(a);
        return () => {
            o();
        };
    }, [r, C, D, m, P, U, N, k, I, B, A, R]),
        (0, i.OS)(() => {
            if (r || !(0, s.sb)(ea)) return;
            let e = (0, i.YE)(ea),
                t = (0, i.RS)(e);
            queueMicrotask(() => {
                let e = eo(ea),
                    n = F.current,
                    r = ("number" == typeof n ? e[n] : n.current) || ea,
                    a = (0, i.gR)(ea, t);
                M || a || !E || L(r, { preventScroll: r === ea });
            });
        }, [r, E, ea, M, eo, F]),
        (0, i.OS)(() => {
            var e;
            if (r || !ea) return;
            let t = (0, i.YE)(ea);
            function n(e) {
                let { reason: t, event: n, nested: r } = e;
                if (
                    (["hover", "safe-polygon"].includes(t) && "mouseleave" === n.type && (q.current = !0),
                    "outside-press" === t)
                )
                    if (r) q.current = !1;
                    else if ((0, i.YF)(n) || (0, i.Pg)(n)) q.current = !1;
                    else {
                        let e = !1;
                        document.createElement("div").focus({
                            get preventScroll() {
                                return (e = !0), !1;
                            },
                        }),
                            e ? (q.current = !1) : (q.current = !0);
                    }
            }
            (e = (0, i.RS)(t)),
                K(),
                e && "body" !== (0, s.mq)(e) && (Q.push(e), Q.length > 20 && (Q = Q.slice(-20))),
                S.on("openchange", n);
            let a = t.createElement("span");
            return (
                a.setAttribute("tabindex", "-1"),
                a.setAttribute("aria-hidden", "true"),
                Object.assign(a.style, H),
                er && C && C.insertAdjacentElement("afterend", a),
                () => {
                    S.off("openchange", n);
                    let e = (0, i.RS)(t),
                        r =
                            (0, i.gR)(D, e) ||
                            (B &&
                                (0, i.CM)(B.nodesRef.current, A(), !1).some((t) => {
                                    var n;
                                    return (0, i.gR)(null == (n = t.context) ? void 0 : n.elements.floating, e);
                                })),
                        o = (function () {
                            if ("boolean" == typeof Y.current) {
                                let e = C || X();
                                return e && e.isConnected ? e : a;
                            }
                            return Y.current.current || a;
                        })();
                    queueMicrotask(() => {
                        let n,
                            c = ((n = (0, i.kQ)()), (0, l.AO)(o, n) ? o : (0, l.Kr)(o, n)[0] || o);
                        Y.current &&
                            !q.current &&
                            (0, s.sb)(c) &&
                            (c === e || e === t.body || r) &&
                            c.focus({ preventScroll: !0 }),
                            a.remove();
                    });
                }
            );
        }, [r, D, ea, Y, T, S, B, er, C, A]),
        a.useEffect(
            () => (
                queueMicrotask(() => {
                    q.current = !1;
                }),
                () => {
                    queueMicrotask(K);
                }
            ),
            [r],
        ),
        (0, i.OS)(() => {
            if (!r && U)
                return (
                    U.setFocusManagerState({ modal: m, closeOnFocusOut: g, open: E, onOpenChange: y, domReference: C }),
                    () => {
                        U.setFocusManagerState(null);
                    }
                );
        }, [r, U, m, E, y, g, C]),
        (0, i.OS)(() => {
            r || (ea && Z(ea, P));
        }, [r, ea, P]);
    let e_ = !r && k && (!m || !N) && (er || m);
    return (0, o.jsxs)(o.Fragment, {
        children: [
            e_ &&
                (0, o.jsx)(G, {
                    "data-type": "inside",
                    ref: ec,
                    onFocus: (e) => {
                        if (m) {
                            let e = eo();
                            L("reference" === c[0] ? e[0] : e[e.length - 1]);
                        } else if (null != U && U.preserveTabOrder && U.portalNode)
                            if (((q.current = !1), (0, i.Qp)(e, U.portalNode))) {
                                let e = (0, i.vF)(C);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = U.beforeOutsideRef.current) || t.focus();
                            }
                    },
                }),
            !N && ed("start"),
            n,
            ed("end"),
            e_ &&
                (0, o.jsx)(G, {
                    "data-type": "inside",
                    ref: eu,
                    onFocus: (e) => {
                        if (m) L(eo()[0]);
                        else if (null != U && U.preserveTabOrder && U.portalNode)
                            if ((g && (q.current = !0), (0, i.Qp)(e, U.portalNode))) {
                                let e = (0, i.XJ)(C);
                                null == e || e.focus();
                            } else {
                                var t;
                                null == (t = U.afterOutsideRef.current) || t.focus();
                            }
                    },
                }),
        ],
    });
}
let et = 0,
    en = "--floating-ui-scrollbar-width",
    er = () => {},
    ea = /^(38190|98365)$/.test(n.j)
        ? null
        : a.forwardRef(function (e, t) {
              let { lockScroll: n = !1, ...r } = e;
              return (
                  (0, i.OS)(() => {
                      if (n)
                          return (
                              1 == ++et &&
                                  (er = (function () {
                                      let e = (0, i.uo)(),
                                          t =
                                              /iP(hone|ad|od)|iOS/.test(e) ||
                                              ("MacIntel" === e && navigator.maxTouchPoints > 1),
                                          n = document.body.style,
                                          r =
                                              Math.round(document.documentElement.getBoundingClientRect().left) +
                                              document.documentElement.scrollLeft
                                                  ? "paddingLeft"
                                                  : "paddingRight",
                                          a = window.innerWidth - document.documentElement.clientWidth,
                                          o = n.left ? parseFloat(n.left) : window.scrollX,
                                          s = n.top ? parseFloat(n.top) : window.scrollY;
                                      if (
                                          ((n.overflow = "hidden"),
                                          n.setProperty(en, a + "px"),
                                          a && (n[r] = a + "px"),
                                          t)
                                      ) {
                                          var l, c;
                                          let e = (null == (l = window.visualViewport) ? void 0 : l.offsetLeft) || 0;
                                          Object.assign(n, {
                                              position: "fixed",
                                              top:
                                                  -(
                                                      s -
                                                      Math.floor(
                                                          (null == (c = window.visualViewport)
                                                              ? void 0
                                                              : c.offsetTop) || 0,
                                                      )
                                                  ) + "px",
                                              left: -(o - Math.floor(e)) + "px",
                                              right: "0",
                                          });
                                      }
                                      return () => {
                                          Object.assign(n, { overflow: "", [r]: "" }),
                                              n.removeProperty(en),
                                              t &&
                                                  (Object.assign(n, { position: "", top: "", left: "", right: "" }),
                                                  window.scrollTo(o, s));
                                      };
                                  })()),
                              () => {
                                  0 == --et && er();
                              }
                          );
                  }, [n]),
                  (0, o.jsx)("div", {
                      ref: t,
                      ...r,
                      style: { position: "fixed", overflow: "auto", top: 0, right: 0, bottom: 0, left: 0, ...r.style },
                  })
              );
          }),
    ei = /^(38190|98365)$/.test(n.j)
        ? null
        : { pointerdown: "onPointerDown", mousedown: "onMouseDown", click: "onClick" },
    eo = /^(38190|98365)$/.test(n.j)
        ? null
        : { pointerdown: "onPointerDownCapture", mousedown: "onMouseDownCapture", click: "onClickCapture" },
    es = (e) => {
        var t, n;
        return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n,
        };
    };
function el(e, t) {
    void 0 === t && (t = {});
    let { open: n, onOpenChange: r, elements: o, dataRef: l } = e,
        {
            enabled: c = !0,
            escapeKey: u = !0,
            outsidePress: d = !0,
            outsidePressEvent: _ = "pointerdown",
            referencePress: p = !1,
            referencePressEvent: m = "pointerdown",
            ancestorScroll: f = !1,
            bubbles: g,
            capture: h,
        } = t,
        b = a.useContext(v),
        E = (0, i.Jt)("function" == typeof d ? d : () => !1),
        y = "function" == typeof d ? E : d,
        S = a.useRef(!1),
        { escapeKey: T, outsidePress: C } = es(g),
        { escapeKey: D, outsidePress: w } = es(h),
        A = a.useRef(!1),
        R = (0, i.Jt)((e) => {
            var t;
            if (!n || !c || !u || "Escape" !== e.key || A.current) return;
            let a = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                o = b ? (0, i.CM)(b.nodesRef.current, a) : [];
            if (!T && (e.stopPropagation(), o.length > 0)) {
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
            r(!1, (0, i.O_)(e) ? e.nativeEvent : e, "escape-key");
        }),
        M = (0, i.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                R(e), null == (t = (0, i.EW)(e)) || t.removeEventListener("keydown", n);
            };
            null == (t = (0, i.EW)(e)) || t.addEventListener("keydown", n);
        }),
        N = (0, i.Jt)((e) => {
            var t;
            let n = l.current.insideReactTree;
            l.current.insideReactTree = !1;
            let a = S.current;
            if (((S.current = !1), ("click" === _ && a) || n || ("function" == typeof y && !y(e)))) return;
            let c = (0, i.EW)(e),
                u = "[" + O("inert") + "]",
                d = (0, i.YE)(o.floating).querySelectorAll(u),
                p = (0, s.vq)(c) ? c : null;
            for (; p && !(0, s.eu)(p); ) {
                let e = (0, s.$4)(p);
                if ((0, s.eu)(e) || !(0, s.vq)(e)) break;
                p = e;
            }
            if (
                d.length &&
                (0, s.vq)(c) &&
                !(0, i.tZ)(c) &&
                !(0, i.gR)(c, o.floating) &&
                Array.from(d).every((e) => !(0, i.gR)(p, e))
            )
                return;
            if ((0, s.sb)(c) && k) {
                let t = (0, s.eu)(c),
                    n = (0, s.L9)(c),
                    r = /auto|scroll/,
                    a = t || r.test(n.overflowX),
                    i = t || r.test(n.overflowY),
                    o = a && c.clientWidth > 0 && c.scrollWidth > c.clientWidth,
                    l = i && c.clientHeight > 0 && c.scrollHeight > c.clientHeight,
                    u = "rtl" === n.direction,
                    d = l && (u ? e.offsetX <= c.offsetWidth - c.clientWidth : e.offsetX > c.clientWidth),
                    _ = o && e.offsetY > c.clientHeight;
                if (d || _) return;
            }
            let m = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
                f =
                    b &&
                    (0, i.CM)(b.nodesRef.current, m).some((t) => {
                        var n;
                        return (0, i.F2)(e, null == (n = t.context) ? void 0 : n.elements.floating);
                    });
            if ((0, i.F2)(e, o.floating) || (0, i.F2)(e, o.domReference) || f) return;
            let g = b ? (0, i.CM)(b.nodesRef.current, m) : [];
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
        x = (0, i.Jt)((e) => {
            var t;
            let n = () => {
                var t;
                N(e), null == (t = (0, i.EW)(e)) || t.removeEventListener(_, n);
            };
            null == (t = (0, i.EW)(e)) || t.addEventListener(_, n);
        });
    a.useEffect(() => {
        if (!n || !c) return;
        (l.current.__escapeKeyBubbles = T), (l.current.__outsidePressBubbles = C);
        let e = -1;
        function t(e) {
            r(!1, e, "ancestor-scroll");
        }
        function a() {
            window.clearTimeout(e), (A.current = !0);
        }
        function d() {
            e = window.setTimeout(
                () => {
                    A.current = !1;
                },
                5 * !!(0, s.Tc)(),
            );
        }
        let p = (0, i.YE)(o.floating);
        u &&
            (p.addEventListener("keydown", D ? M : R, D),
            p.addEventListener("compositionstart", a),
            p.addEventListener("compositionend", d)),
            y && p.addEventListener(_, w ? x : N, w);
        let m = [];
        return (
            f &&
                ((0, s.vq)(o.domReference) && (m = (0, s.v9)(o.domReference)),
                (0, s.vq)(o.floating) && (m = m.concat((0, s.v9)(o.floating))),
                !(0, s.vq)(o.reference) &&
                    o.reference &&
                    o.reference.contextElement &&
                    (m = m.concat((0, s.v9)(o.reference.contextElement)))),
            (m = m.filter((e) => {
                var t;
                return e !== (null == (t = p.defaultView) ? void 0 : t.visualViewport);
            })).forEach((e) => {
                e.addEventListener("scroll", t, { passive: !0 });
            }),
            () => {
                u &&
                    (p.removeEventListener("keydown", D ? M : R, D),
                    p.removeEventListener("compositionstart", a),
                    p.removeEventListener("compositionend", d)),
                    y && p.removeEventListener(_, w ? x : N, w),
                    m.forEach((e) => {
                        e.removeEventListener("scroll", t);
                    }),
                    window.clearTimeout(e);
            }
        );
    }, [l, o, u, y, _, n, r, f, c, T, C, R, D, M, N, w, x]),
        a.useEffect(() => {
            l.current.insideReactTree = !1;
        }, [l, y, _]);
    let L = a.useMemo(
            () => ({
                onKeyDown: R,
                ...(p && {
                    [ei[m]]: (e) => {
                        r(!1, e.nativeEvent, "reference-press");
                    },
                    ...("click" !== m && {
                        onClick(e) {
                            r(!1, e.nativeEvent, "reference-press");
                        },
                    }),
                }),
            }),
            [R, r, p, m],
        ),
        k = a.useMemo(
            () => ({
                onKeyDown: R,
                onMouseDown() {
                    S.current = !0;
                },
                onMouseUp() {
                    S.current = !0;
                },
                [eo[_]]: () => {
                    l.current.insideReactTree = !0;
                },
            }),
            [R, _, l],
        );
    return a.useMemo(() => (c ? { reference: L, floating: k } : {}), [c, L, k]);
}
function ec(e) {
    void 0 === e && (e = {});
    let { nodeId: t } = e,
        n = (function (e) {
            let { open: t = !1, onOpenChange: n, elements: r } = e,
                o = b(),
                s = a.useRef({}),
                [l] = a.useState(() => E()),
                c = null != S(),
                [u, d] = a.useState(r.reference),
                _ = (0, i.Jt)((e, t, r) => {
                    (s.current.openEvent = e ? t : void 0),
                        l.emit("openchange", { open: e, event: t, reason: r, nested: c }),
                        null == n || n(e, t, r);
                }),
                p = a.useMemo(() => ({ setPositionReference: d }), []),
                m = a.useMemo(
                    () => ({
                        reference: u || r.reference || null,
                        floating: r.floating || null,
                        domReference: r.reference,
                    }),
                    [u, r.reference, r.floating],
                );
            return a.useMemo(
                () => ({ dataRef: s, open: t, onOpenChange: _, elements: m, events: l, floatingId: o, refs: p }),
                [t, _, m, l, o, p],
            );
        })({ ...e, elements: { reference: null, floating: null, ...e.elements } }),
        r = e.rootContext || n,
        o = r.elements,
        [l, c] = a.useState(null),
        [d, _] = a.useState(null),
        p = (null == o ? void 0 : o.domReference) || l,
        m = a.useRef(null),
        f = a.useContext(v);
    (0, i.OS)(() => {
        p && (m.current = p);
    }, [p]);
    let g = (0, u.we)({ ...e, elements: { ...o, ...(d && { reference: d }) } }),
        h = a.useCallback(
            (e) => {
                let t = (0, s.vq)(e)
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
        y = a.useCallback(
            (e) => {
                ((0, s.vq)(e) || null === e) && ((m.current = e), c(e)),
                    ((0, s.vq)(g.refs.reference.current) ||
                        null === g.refs.reference.current ||
                        (null !== e && !(0, s.vq)(e))) &&
                        g.refs.setReference(e);
            },
            [g.refs],
        ),
        T = a.useMemo(() => ({ ...g.refs, setReference: y, setPositionReference: h, domReference: m }), [g.refs, y, h]),
        C = a.useMemo(() => ({ ...g.elements, domReference: p }), [g.elements, p]),
        D = a.useMemo(() => ({ ...g, ...r, refs: T, elements: C, nodeId: t }), [g, T, C, t, r]);
    return (
        (0, i.OS)(() => {
            r.dataRef.current.floatingContext = D;
            let e = null == f ? void 0 : f.nodesRef.current.find((e) => e.id === t);
            e && (e.context = D);
        }),
        a.useMemo(() => ({ ...g, context: D, refs: T, elements: C }), [g, T, C, D])
    );
}
function eu(e, t, n) {
    let r = new Map(),
        a = "item" === n,
        i = e;
    if (a && e) {
        let { [d]: t, [_]: n, ...r } = e;
        i = r;
    }
    return {
        ...("floating" === n && { tabIndex: -1, "data-floating-ui-focusable": "" }),
        ...i,
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
                            let [n, i] = t;
                            if (!(a && [d, _].includes(n)))
                                if (0 === n.indexOf("on")) {
                                    if ((r.has(n) || r.set(n, []), "function" == typeof i)) {
                                        var o;
                                        null == (o = r.get(n)) || o.push(i),
                                            (e[n] = function () {
                                                for (var e, t = arguments.length, a = Array(t), i = 0; i < t; i++)
                                                    a[i] = arguments[i];
                                                return null == (e = r.get(n))
                                                    ? void 0
                                                    : e.map((e) => e(...a)).find((e) => void 0 !== e);
                                            });
                                    }
                                } else e[n] = i;
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
        i = a.useCallback((t) => eu(t, e, "reference"), t),
        o = a.useCallback((t) => eu(t, e, "floating"), n),
        s = a.useCallback((t) => eu(t, e, "item"), r);
    return a.useMemo(() => ({ getReferenceProps: i, getFloatingProps: o, getItemProps: s }), [i, o, s]);
}
let e_ = (e) => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
function ep(e, t) {
    return "function" == typeof e ? e(t) : e;
}
function em(e, t) {
    void 0 === t && (t = {});
    let { initial: n = { opacity: 0 }, open: r, close: o, common: s, duration: l = 250 } = t,
        u = e.placement,
        d = u.split("-")[0],
        _ = a.useMemo(() => ({ side: d, placement: u }), [d, u]),
        p = "number" == typeof l,
        m = (p ? l : l.open) || 0,
        f = (p ? l : l.close) || 0,
        [g, h] = a.useState(() => ({ ...ep(s, _), ...ep(n, _) })),
        { isMounted: b, status: E } = (function (e, t) {
            void 0 === t && (t = {});
            let {
                    open: n,
                    elements: { floating: r },
                } = e,
                { duration: o = 250 } = t,
                s = ("number" == typeof o ? o : o.close) || 0,
                [l, u] = a.useState("unmounted"),
                d = (function (e, t) {
                    let [n, r] = a.useState(e);
                    return (
                        e && !n && r(!0),
                        a.useEffect(() => {
                            if (!e && n) {
                                let e = setTimeout(() => r(!1), t);
                                return () => clearTimeout(e);
                            }
                        }, [e, n, t]),
                        n
                    );
                })(n, s);
            return (
                d || "close" !== l || u("unmounted"),
                (0, i.OS)(() => {
                    if (r) {
                        if (n) {
                            u("initial");
                            let e = requestAnimationFrame(() => {
                                c.flushSync(() => {
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
                { isMounted: d, status: l }
            );
        })(e, { duration: l }),
        y = (0, i.SE)(n),
        v = (0, i.SE)(r),
        S = (0, i.SE)(o),
        T = (0, i.SE)(s);
    return (
        (0, i.OS)(() => {
            let e = ep(y.current, _),
                t = ep(S.current, _),
                n = ep(T.current, _),
                r = ep(v.current, _) || Object.keys(e).reduce((e, t) => ((e[t] = ""), e), {});
            if (
                ("initial" === E && h((t) => ({ transitionProperty: t.transitionProperty, ...n, ...e })),
                "open" === E &&
                    h({
                        transitionProperty: Object.keys(r).map(e_).join(","),
                        transitionDuration: m + "ms",
                        ...n,
                        ...r,
                    }),
                "close" === E)
            ) {
                let r = t || e;
                h({ transitionProperty: Object.keys(r).map(e_).join(","), transitionDuration: f + "ms", ...n, ...r });
            }
        }, [f, S, y, v, T, m, E, _]),
        { isMounted: b, styles: g }
    );
}
function ef(e, t) {
    let [n, r] = e,
        a = !1,
        i = t.length;
    for (let e = 0, o = i - 1; e < i; o = e++) {
        let [i, s] = t[e] || [0, 0],
            [l, c] = t[o] || [0, 0];
        s >= r != c >= r && n <= ((l - i) * (r - s)) / (c - s) + i && (a = !a);
    }
    return a;
}
function eg(e) {
    void 0 === e && (e = {});
    let { buffer: t = 0.5, blockPointerEvents: n = !1, requireIntent: r = !0 } = e,
        a = { current: -1 },
        i = !1,
        o = null,
        l = null,
        c = "u" > typeof performance ? performance.now() : 0,
        u = (e) => {
            let { x: n, y: u, placement: d, elements: _, onClose: p, nodeId: m, tree: f } = e;
            return function (e) {
                function g() {
                    w(a), p();
                }
                if ((w(a), !_.domReference || !_.floating || null == d || null == n || null == u)) return;
                let { clientX: h, clientY: b } = e,
                    E = [h, b],
                    y = "composedPath" in e ? e.composedPath()[0] : e.target,
                    v = "mouseleave" === e.type,
                    S = k(_.floating, y),
                    T = k(_.domReference, y),
                    C = _.domReference.getBoundingClientRect(),
                    D = _.floating.getBoundingClientRect(),
                    O = d.split("-")[0],
                    A = n > D.right - D.width / 2,
                    R = u > D.bottom - D.height / 2,
                    M = E[0] >= C.x && E[0] <= C.x + C.width && E[1] >= C.y && E[1] <= C.y + C.height,
                    N = D.width > C.width,
                    x = D.height > C.height,
                    L = (N ? C : D).left,
                    I = (N ? C : D).right,
                    P = (x ? C : D).top,
                    F = (x ? C : D).bottom;
                if (S && ((i = !0), !v)) return;
                if ((T && (i = !1), T && !v)) {
                    i = !0;
                    return;
                }
                if (
                    (v && (0, s.vq)(e.relatedTarget) && k(_.floating, e.relatedTarget)) ||
                    (f &&
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
                        })(f.nodesRef.current, m).length)
                )
                    return;
                if (
                    ("top" === O && u >= C.bottom - 1) ||
                    ("bottom" === O && u <= C.top + 1) ||
                    ("left" === O && n >= C.right - 1) ||
                    ("right" === O && n <= C.left + 1)
                )
                    return g();
                let Y = [];
                switch (O) {
                    case "top":
                        Y = [
                            [L, C.top + 1],
                            [L, D.bottom - 1],
                            [I, D.bottom - 1],
                            [I, C.top + 1],
                        ];
                        break;
                    case "bottom":
                        Y = [
                            [L, D.top + 1],
                            [L, C.bottom - 1],
                            [I, C.bottom - 1],
                            [I, D.top + 1],
                        ];
                        break;
                    case "left":
                        Y = [
                            [D.right - 1, F],
                            [D.right - 1, P],
                            [C.left + 1, P],
                            [C.left + 1, F],
                        ];
                        break;
                    case "right":
                        Y = [
                            [C.right - 1, F],
                            [C.right - 1, P],
                            [D.left + 1, P],
                            [D.left + 1, F],
                        ];
                }
                if (!ef([h, b], Y)) {
                    if (i && !M) return g();
                    if (!v && r) {
                        let t = (function (e, t) {
                            let n = performance.now(),
                                r = n - c;
                            if (null === o || null === l || 0 === r) return (o = e), (l = t), (c = n), null;
                            let a = e - o,
                                i = t - l,
                                s = Math.sqrt(a * a + i * i);
                            return (o = e), (l = t), (c = n), s / r;
                        })(e.clientX, e.clientY);
                        if (null !== t && t < 0.1) return g();
                    }
                    ef(
                        [h, b],
                        (function (e) {
                            let [n, r] = e;
                            switch (O) {
                                case "top": {
                                    let e = [
                                        [D.left, A || N ? D.bottom - t : D.top],
                                        [D.right, A ? (N ? D.bottom - t : D.top) : D.bottom - t],
                                    ];
                                    return [
                                        [N ? n + t / 2 : A ? n + 4 * t : n - 4 * t, r + t + 1],
                                        [N ? n - t / 2 : A ? n + 4 * t : n - 4 * t, r + t + 1],
                                        ...e,
                                    ];
                                }
                                case "bottom": {
                                    let e = [
                                        [D.left, A || N ? D.top + t : D.bottom],
                                        [D.right, A ? (N ? D.top + t : D.bottom) : D.top + t],
                                    ];
                                    return [
                                        [N ? n + t / 2 : A ? n + 4 * t : n - 4 * t, r - t],
                                        [N ? n - t / 2 : A ? n + 4 * t : n - 4 * t, r - t],
                                        ...e,
                                    ];
                                }
                                case "left":
                                    return [
                                        [R || x ? D.right - t : D.left, D.top],
                                        [R ? (x ? D.right - t : D.left) : D.right - t, D.bottom],
                                        [n + t + 1, x ? r + t / 2 : R ? r + 4 * t : r - 4 * t],
                                        [n + t + 1, x ? r - t / 2 : R ? r + 4 * t : r - 4 * t],
                                    ];
                                case "right": {
                                    let e = [
                                        [R || x ? D.left + t : D.right, D.top],
                                        [R ? (x ? D.left + t : D.right) : D.left + t, D.bottom],
                                    ];
                                    return [
                                        [n - t, x ? r + t / 2 : R ? r + 4 * t : r - 4 * t],
                                        [n - t, x ? r - t / 2 : R ? r + 4 * t : r - 4 * t],
                                        ...e,
                                    ];
                                }
                            }
                        })([n, u]),
                    )
                        ? !i && r && (a.current = window.setTimeout(g, 40))
                        : g();
                }
            };
        };
    return (u.__options = { blockPointerEvents: n }), u;
}
