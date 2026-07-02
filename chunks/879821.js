"use strict";
if (
    (n.d(t, { BN: () => m, ER: () => f, Ej: () => h, RK: () => b, UU: () => g, cY: () => p, jD: () => E, we: () => _ }),
    !/^(38190|98365)$/.test(n.j))
)
    var r = n(193439);
var a = n(64700),
    i = n(340287),
    o = /^(38190|98365)$/.test(n.j) ? null : "u" > typeof document,
    s = /^(38190|98365)$/.test(n.j) ? null : o ? a.useLayoutEffect : function () {};
function l(e, t) {
    let n, r, a;
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if ("function" == typeof e && e.toString() === t.toString()) return !0;
    if (e && t && "object" == typeof e) {
        if (Array.isArray(e)) {
            if ((n = e.length) !== t.length) return !1;
            for (r = n; 0 != r--; ) if (!l(e[r], t[r])) return !1;
            return !0;
        }
        if ((n = (a = Object.keys(e)).length) !== Object.keys(t).length) return !1;
        for (r = n; 0 != r--; ) if (!{}.hasOwnProperty.call(t, a[r])) return !1;
        for (r = n; 0 != r--; ) {
            let n = a[r];
            if (("_owner" !== n || !e.$$typeof) && !l(e[n], t[n])) return !1;
        }
        return !0;
    }
    return e != e && t != t;
}
function c(e) {
    return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function u(e, t) {
    let n = c(e);
    return Math.round(t * n) / n;
}
function d(e) {
    let t = a.useRef(e);
    return (
        s(() => {
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
            middleware: o = [],
            platform: _,
            elements: { reference: p, floating: m } = {},
            transform: f = !0,
            whileElementsMounted: g,
            open: h,
        } = e,
        [b, E] = a.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [y, v] = a.useState(o);
    l(y, o) || v(o);
    let [S, T] = a.useState(null),
        [C, D] = a.useState(null),
        O = a.useCallback((e) => {
            e !== M.current && ((M.current = e), T(e));
        }, []),
        w = a.useCallback((e) => {
            e !== N.current && ((N.current = e), D(e));
        }, []),
        A = p || S,
        R = m || C,
        M = a.useRef(null),
        N = a.useRef(null),
        x = a.useRef(b),
        L = null != g,
        k = d(g),
        I = d(_),
        P = d(h),
        F = a.useCallback(() => {
            if (!M.current || !N.current) return;
            let e = { placement: t, strategy: n, middleware: y };
            I.current && (e.platform = I.current),
                (0, r.rD)(M.current, N.current, e).then((e) => {
                    let t = { ...e, isPositioned: !1 !== P.current };
                    Y.current &&
                        !l(x.current, t) &&
                        ((x.current = t),
                        i.flushSync(() => {
                            E(t);
                        }));
                });
        }, [y, t, n, I, P]);
    s(() => {
        !1 === h && x.current.isPositioned && ((x.current.isPositioned = !1), E((e) => ({ ...e, isPositioned: !1 })));
    }, [h]);
    let Y = a.useRef(!1);
    s(
        () => (
            (Y.current = !0),
            () => {
                Y.current = !1;
            }
        ),
        [],
    ),
        s(() => {
            if ((A && (M.current = A), R && (N.current = R), A && R)) {
                if (k.current) return k.current(A, R, F);
                F();
            }
        }, [A, R, F, k, L]);
    let B = a.useMemo(() => ({ reference: M, floating: N, setReference: O, setFloating: w }), [O, w]),
        U = a.useMemo(() => ({ reference: A, floating: R }), [A, R]),
        j = a.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!U.floating) return e;
            let t = u(U.floating, b.x),
                r = u(U.floating, b.y);
            return f
                ? {
                      ...e,
                      transform: "translate(" + t + "px, " + r + "px)",
                      ...(c(U.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: t, top: r };
        }, [n, f, U.floating, b.x, b.y]);
    return a.useMemo(() => ({ ...b, update: F, refs: B, elements: U, floatingStyles: j }), [b, F, B, U, j]);
}
let p = (e, t) => ({ ...(0, r.cY)(e), options: [e, t] }),
    m = (e, t) => ({ ...(0, r.BN)(e), options: [e, t] }),
    f = (e, t) => ({ ...(0, r.ER)(e), options: [e, t] }),
    g = (e, t) => ({ ...(0, r.UU)(e), options: [e, t] }),
    h = (e, t) => ({ ...(0, r.Ej)(e), options: [e, t] }),
    b = (e, t) => ({ ...(0, r.RK)(e), options: [e, t] }),
    E = (e, t) => ({ ...(0, r.jD)(e), options: [e, t] });
