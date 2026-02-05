"use strict";
n.d(t, { BN: () => p, ER: () => h, Ej: () => g, RK: () => E, UU: () => m, cY: () => f, jD: () => A, we: () => _ });
var r = n(193439),
    i = n(64700),
    a = n(340287),
    s = function () {},
    o = "u" > typeof document ? i.useLayoutEffect : s;
function l(e, t) {
    let n, r, i;
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if ("function" == typeof e && e.toString() === t.toString()) return !0;
    if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!l(e[r], t[r])) return !1;
            return !0;
        }
        if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
        for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, i[r])) return !1;
        for (r = n; 0 != r--; ) {
            let n = i[r];
            if (("_owner" !== n || !e.$$typeof) && !l(e[n], t[n])) return !1;
        }
        return !0;
    }
    return e != e && t != t;
}
function u(e) {
    return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function c(e, t) {
    let n = u(e);
    return Math.round(t * n) / n;
}
function d(e) {
    let t = i.useRef(e);
    return (
        o(() => {
            t.current = e;
        }),
        t
    );
}
function _(e) {
    void 0 === e && (e = {});
    let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: s = [],
            platform: _,
            elements: { reference: f, floating: p } = {},
            transform: h = !0,
            whileElementsMounted: m,
            open: g,
        } = e,
        [E, A] = i.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [I, T] = i.useState(s);
    l(I, s) || T(s);
    let [y, S] = i.useState(null),
        [v, C] = i.useState(null),
        b = i.useCallback((e) => {
            e !== D.current && ((D.current = e), S(e));
        }, []),
        N = i.useCallback((e) => {
            e !== L.current && ((L.current = e), C(e));
        }, []),
        R = f || y,
        O = p || v,
        D = i.useRef(null),
        L = i.useRef(null),
        w = i.useRef(E),
        x = null != m,
        P = d(m),
        M = d(_),
        k = d(g),
        U = i.useCallback(() => {
            if (!D.current || !L.current) return;
            let e = { placement: t, strategy: n, middleware: I };
            M.current && (e.platform = M.current),
                (0, r.rD)(D.current, L.current, e).then((e) => {
                    let t = { ...e, isPositioned: !1 !== k.current };
                    G.current &&
                        !l(w.current, t) &&
                        ((w.current = t),
                        a.flushSync(() => {
                            A(t);
                        }));
                });
        }, [I, t, n, M, k]);
    o(() => {
        !1 === g && w.current.isPositioned && ((w.current.isPositioned = !1), A((e) => ({ ...e, isPositioned: !1 })));
    }, [g]);
    let G = i.useRef(!1);
    o(
        () => (
            (G.current = !0),
            () => {
                G.current = !1;
            }
        ),
        [],
    ),
        o(() => {
            if ((R && (D.current = R), O && (L.current = O), R && O)) {
                if (P.current) return P.current(R, O, U);
                U();
            }
        }, [R, O, U, P, x]);
    let V = i.useMemo(() => ({ reference: D, floating: L, setReference: b, setFloating: N }), [b, N]),
        F = i.useMemo(() => ({ reference: R, floating: O }), [R, O]),
        B = i.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!F.floating) return e;
            let t = c(F.floating, E.x),
                r = c(F.floating, E.y);
            return h
                ? {
                      ...e,
                      transform: "translate(" + t + "px, " + r + "px)",
                      ...(u(F.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: t, top: r };
        }, [n, h, F.floating, E.x, E.y]);
    return i.useMemo(() => ({ ...E, update: U, refs: V, elements: F, floatingStyles: B }), [E, U, V, F, B]);
}
let f = (e, t) => ({ ...(0, r.cY)(e), options: [e, t] }),
    p = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
    h = (e, t) => ({ ...(0, r.ER)(e), options: [e, t] }),
    m = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
    g = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] }),
    E = (e, t) => ({ ...(0, r.RK)(e), options: [e, t] }),
    A = (e, t) => ({ ...(0, r.jD)(e), options: [e, t] });
