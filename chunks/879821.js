"use strict";
n.d(t, { BN: () => f, ER: () => E, Ej: () => p, RK: () => m, UU: () => h, cY: () => _, jD: () => g, we: () => c });
var r = n(193439),
    i = n(64700),
    s = n(340287),
    a = "u" > typeof document ? i.useLayoutEffect : function () {};
function o(e, t) {
    let n, r, i;
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if ("function" == typeof e && e.toString() === t.toString()) return !0;
    if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!o(e[r], t[r])) return !1;
            return !0;
        }
        if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
        for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
        for (r = n; 0 != r--; ) {
            let n = i[r];
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
function d(e) {
    let t = i.useRef(e);
    return (
        a(() => {
            t.current = e;
        }),
        t
    );
}
function c(e) {
    void 0 === e && (e = {});
    let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: c = [],
            platform: _,
            elements: { reference: f, floating: E } = {},
            transform: h = !0,
            whileElementsMounted: p,
            open: m,
        } = e,
        [g, A] = i.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [I, T] = i.useState(c);
    o(I, c) || T(c);
    let [S, y] = i.useState(null),
        [N, O] = i.useState(null),
        R = i.useCallback((e) => {
            e !== D.current && ((D.current = e), y(e));
        }, []),
        v = i.useCallback((e) => {
            e !== L.current && ((L.current = e), O(e));
        }, []),
        C = f || S,
        b = E || N,
        D = i.useRef(null),
        L = i.useRef(null),
        w = i.useRef(g),
        M = null != p,
        P = d(p),
        U = d(_),
        k = d(m),
        x = i.useCallback(() => {
            if (!D.current || !L.current) return;
            let e = { placement: t, strategy: n, middleware: I };
            U.current && (e.platform = U.current),
                (0, r.rD)(D.current, L.current, e).then((e) => {
                    let t = { ...e, isPositioned: !1 !== k.current };
                    G.current &&
                        !o(w.current, t) &&
                        ((w.current = t),
                        s.flushSync(() => {
                            A(t);
                        }));
                });
        }, [I, t, n, U, k]);
    a(() => {
        !1 === m && w.current.isPositioned && ((w.current.isPositioned = !1), A((e) => ({ ...e, isPositioned: !1 })));
    }, [m]);
    let G = i.useRef(!1);
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
            if ((C && (D.current = C), b && (L.current = b), C && b)) {
                if (P.current) return P.current(C, b, x);
                x();
            }
        }, [C, b, x, P, M]);
    let V = i.useMemo(() => ({ reference: D, floating: L, setReference: R, setFloating: v }), [R, v]),
        F = i.useMemo(() => ({ reference: C, floating: b }), [C, b]),
        B = i.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!F.floating) return e;
            let t = u(F.floating, g.x),
                r = u(F.floating, g.y);
            return h
                ? {
                      ...e,
                      transform: "translate(" + t + "px, " + r + "px)",
                      ...(l(F.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: t, top: r };
        }, [n, h, F.floating, g.x, g.y]);
    return i.useMemo(() => ({ ...g, update: x, refs: V, elements: F, floatingStyles: B }), [g, x, V, F, B]);
}
let _ = (e, t) => ({ ...(0, r.cY)(e), options: [e, t] }),
    f = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
    E = (e, t) => ({ ...(0, r.ER)(e), options: [e, t] }),
    h = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
    p = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] }),
    m = (e, t) => ({ ...(0, r.RK)(e), options: [e, t] }),
    g = (e, t) => ({ ...(0, r.jD)(e), options: [e, t] });
