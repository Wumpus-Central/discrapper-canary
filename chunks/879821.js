"use strict";
r.d(t, { BN: () => p, ER: () => h, Ej: () => _, RK: () => g, UU: () => m, cY: () => f, jD: () => v, we: () => d });
var n = r(38339),
    a = r(64700),
    s = r(340287),
    i = "u" > typeof document ? a.useLayoutEffect : function () {};
function o(e, t) {
    let r, n, a;
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if ("function" == typeof e && e.toString() === t.toString()) return !0;
    if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
            if ((r = e.length) !== t.length) return !1;
            for (n = r; 0 != n--; ) if (!o(e[n], t[n])) return !1;
            return !0;
        }
        if ((r = (a = Object.keys(e)).length) !== Object.keys(t).length) return !1;
        for (n = r; 0 != n--; ) if (!{}.hasOwnProperty.call(t, a[n])) return !1;
        for (n = r; 0 != n--; ) {
            let r = a[n];
            if (("_owner" !== r || !e.$$typeof) && !o(e[r], t[r])) return !1;
        }
        return !0;
    }
    return e != e && t != t;
}
function l(e) {
    return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function u(e, t) {
    let r = l(e);
    return Math.round(t * r) / r;
}
function c(e) {
    let t = a.useRef(e);
    return (
        i(() => {
            t.current = e;
        }),
        t
    );
}
function d(e) {
    void 0 === e && (e = {});
    let {
            placement: t = "bottom",
            strategy: r = "absolute",
            middleware: d = [],
            platform: f,
            elements: { reference: p, floating: h } = {},
            transform: m = !0,
            whileElementsMounted: _,
            open: g,
        } = e,
        [v, b] = a.useState({ x: 0, y: 0, strategy: r, placement: t, middlewareData: {}, isPositioned: !1 }),
        [y, E] = a.useState(d);
    o(y, d) || E(d);
    let [S, T] = a.useState(null),
        [x, w] = a.useState(null),
        C = a.useCallback((e) => {
            e !== M.current && ((M.current = e), T(e));
        }, []),
        D = a.useCallback((e) => {
            e !== R.current && ((R.current = e), w(e));
        }, []),
        O = p || S,
        A = h || x,
        M = a.useRef(null),
        R = a.useRef(null),
        k = a.useRef(v),
        N = null != _,
        L = c(_),
        I = c(f),
        P = c(g),
        F = a.useCallback(() => {
            if (!M.current || !R.current) return;
            let e = { placement: t, strategy: r, middleware: y };
            I.current && (e.platform = I.current),
                (0, n.rD)(M.current, R.current, e).then((e) => {
                    let t = { ...e, isPositioned: !1 !== P.current };
                    B.current &&
                        !o(k.current, t) &&
                        ((k.current = t),
                        s.flushSync(() => {
                            b(t);
                        }));
                });
        }, [y, t, r, I, P]);
    i(() => {
        !1 === g && k.current.isPositioned && ((k.current.isPositioned = !1), b((e) => ({ ...e, isPositioned: !1 })));
    }, [g]);
    let B = a.useRef(!1);
    i(
        () => (
            (B.current = !0),
            () => {
                B.current = !1;
            }
        ),
        [],
    ),
        i(() => {
            if ((O && (M.current = O), A && (R.current = A), O && A)) {
                if (L.current) return L.current(O, A, F);
                F();
            }
        }, [O, A, F, L, N]);
    let Y = a.useMemo(() => ({ reference: M, floating: R, setReference: C, setFloating: D }), [C, D]),
        U = a.useMemo(() => ({ reference: O, floating: A }), [O, A]),
        j = a.useMemo(() => {
            let e = { position: r, left: 0, top: 0 };
            if (!U.floating) return e;
            let t = u(U.floating, v.x),
                n = u(U.floating, v.y);
            return m
                ? {
                      ...e,
                      transform: "translate(" + t + "px, " + n + "px)",
                      ...(l(U.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: r, left: t, top: n };
        }, [r, m, U.floating, v.x, v.y]);
    return a.useMemo(() => ({ ...v, update: F, refs: Y, elements: U, floatingStyles: j }), [v, F, Y, U, j]);
}
let f = (e, t) => ({ ...(0, n.cY)(e), options: [e, t] }),
    p = (e, t) => ({ ...(0, n.BN)(e), options: [e, t] }),
    h = (e, t) => ({ ...(0, n.ER)(e), options: [e, t] }),
    m = (e, t) => ({ ...(0, n.UU)(e), options: [e, t] }),
    _ = (e, t) => ({ ...(0, n.Ej)(e), options: [e, t] }),
    g = (e, t) => ({ ...(0, n.RK)(e), options: [e, t] }),
    v = (e, t) => ({ ...(0, n.jD)(e), options: [e, t] });
