"use strict";
n.d(t, { BN: () => h, ER: () => f, Ej: () => E, RK: () => m, UU: () => p, cY: () => _, jD: () => g, we: () => d });
var i = n(38339),
    r = n(64700),
    s = n(340287),
    a = "u" > typeof document ? r.useLayoutEffect : function () {};
function o(e, t) {
    let n, i, r;
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if ("function" == typeof e && e.toString() === t.toString()) return !0;
    if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (i = n; 0 != i--; ) if (!o(e[i], t[i])) return !1;
            return !0;
        }
        if ((n = (r = Object.keys(e)).length) !== Object.keys(t).length) return !1;
        for (i = n; 0 != i--; ) if (!{}.hasOwnProperty.call(t, r[i])) return !1;
        for (i = n; 0 != i--; ) {
            let n = r[i];
            if (("_owner" !== n || !e.$$typeof) && !o(e[n], t[n])) return !1;
        }
        return !0;
    }
    return e != e && t != t;
}
function l(e) {
    return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function u(e, t) {
    let n = l(e);
    return Math.round(t * n) / n;
}
function c(e) {
    let t = r.useRef(e);
    return (
        a(() => {
            t.current = e;
        }),
        t
    );
}
function d(e) {
    void 0 === e && (e = {});
    let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: d = [],
            platform: _,
            elements: { reference: h, floating: f } = {},
            transform: p = !0,
            whileElementsMounted: E,
            open: m,
        } = e,
        [g, A] = r.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [I, T] = r.useState(d);
    o(I, d) || T(d);
    let [S, y] = r.useState(null),
        [C, N] = r.useState(null),
        v = r.useCallback((e) => {
            e !== D.current && ((D.current = e), y(e));
        }, []),
        R = r.useCallback((e) => {
            e !== L.current && ((L.current = e), N(e));
        }, []),
        O = h || S,
        b = f || C,
        D = r.useRef(null),
        L = r.useRef(null),
        w = r.useRef(g),
        M = null != E,
        P = c(E),
        x = c(_),
        k = c(m),
        U = r.useCallback(() => {
            if (!D.current || !L.current) return;
            let e = { placement: t, strategy: n, middleware: I };
            x.current && (e.platform = x.current),
                (0, i.rD)(D.current, L.current, e).then((e) => {
                    let t = { ...e, isPositioned: !1 !== k.current };
                    G.current &&
                        !o(w.current, t) &&
                        ((w.current = t),
                        s.flushSync(() => {
                            A(t);
                        }));
                });
        }, [I, t, n, x, k]);
    a(() => {
        !1 === m && w.current.isPositioned && ((w.current.isPositioned = !1), A((e) => ({ ...e, isPositioned: !1 })));
    }, [m]);
    let G = r.useRef(!1);
    a(
        () => (
            (G.current = !0),
            () => {
                G.current = !1;
            }
        ),
        [],
    ),
        a(() => {
            if ((O && (D.current = O), b && (L.current = b), O && b)) {
                if (P.current) return P.current(O, b, U);
                U();
            }
        }, [O, b, U, P, M]);
    let F = r.useMemo(() => ({ reference: D, floating: L, setReference: v, setFloating: R }), [v, R]),
        V = r.useMemo(() => ({ reference: O, floating: b }), [O, b]),
        B = r.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!V.floating) return e;
            let t = u(V.floating, g.x),
                i = u(V.floating, g.y);
            return p
                ? {
                      ...e,
                      transform: "translate(" + t + "px, " + i + "px)",
                      ...(l(V.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: t, top: i };
        }, [n, p, V.floating, g.x, g.y]);
    return r.useMemo(() => ({ ...g, update: U, refs: F, elements: V, floatingStyles: B }), [g, U, F, V, B]);
}
let _ = (e, t) => ({ ...(0, i.cY)(e), options: [e, t] }),
    h = (e, t) => ({ ...(0, i.BN)(e), options: [e, t] }),
    f = (e, t) => ({ ...(0, i.ER)(e), options: [e, t] }),
    p = (e, t) => ({ ...(0, i.UU)(e), options: [e, t] }),
    E = (e, t) => ({ ...(0, i.Ej)(e), options: [e, t] }),
    m = (e, t) => ({ ...(0, i.RK)(e), options: [e, t] }),
    g = (e, t) => ({ ...(0, i.jD)(e), options: [e, t] });
