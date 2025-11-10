n.d(t, {
    Cp: () => b,
    RR: () => m,
    X5: () => E,
    YF: () => f,
    cv: () => _,
    dp: () => g,
    dr: () => h,
    uY: () => p,
});
var r = n(615673),
    i = n(647438),
    a = n(603113),
    o = function () {},
    s = "undefined" != typeof document ? i.useLayoutEffect : o;
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
function c(e) {
    return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function u(e, t) {
    let n = c(e);
    return Math.round(t * n) / n;
}
function d(e) {
    let t = i.useRef(e);
    return (
        s(() => {
            t.current = e;
        }),
        t
    );
}
function f(e) {
    void 0 === e && (e = {});
    let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: o = [],
            platform: f,
            elements: { reference: _, floating: p } = {},
            transform: h = !0,
            whileElementsMounted: m,
            open: g,
        } = e,
        [E, b] = i.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
        }),
        [y, O] = i.useState(o);
    l(y, o) || O(o);
    let [v, I] = i.useState(null),
        [S, T] = i.useState(null),
        A = i.useCallback((e) => {
            e !== P.current && ((P.current = e), I(e));
        }, []),
        C = i.useCallback((e) => {
            e !== w.current && ((w.current = e), T(e));
        }, []),
        N = _ || v,
        R = p || S,
        P = i.useRef(null),
        w = i.useRef(null),
        D = i.useRef(E),
        x = null != m,
        L = d(m),
        M = d(f),
        j = d(g),
        k = i.useCallback(() => {
            if (!P.current || !w.current) return;
            let e = {
                placement: t,
                strategy: n,
                middleware: y,
            };
            M.current && (e.platform = M.current),
                (0, r.oo)(P.current, w.current, e).then((e) => {
                    let t = {
                        ...e,
                        isPositioned: !1 !== j.current,
                    };
                    U.current &&
                        !l(D.current, t) &&
                        ((D.current = t),
                        a.flushSync(() => {
                            b(t);
                        }));
                });
        }, [y, t, n, M, j]);
    s(() => {
        !1 === g &&
            D.current.isPositioned &&
            ((D.current.isPositioned = !1),
            b((e) => ({
                ...e,
                isPositioned: !1,
            })));
    }, [g]);
    let U = i.useRef(!1);
    s(
        () => (
            (U.current = !0),
            () => {
                U.current = !1;
            }
        ),
        [],
    ),
        s(() => {
            if ((N && (P.current = N), R && (w.current = R), N && R)) {
                if (L.current) return L.current(N, R, k);
                k();
            }
        }, [N, R, k, L, x]);
    let G = i.useMemo(
            () => ({
                reference: P,
                floating: w,
                setReference: A,
                setFloating: C,
            }),
            [A, C],
        ),
        B = i.useMemo(
            () => ({
                reference: N,
                floating: R,
            }),
            [N, R],
        ),
        Z = i.useMemo(() => {
            let e = {
                position: n,
                left: 0,
                top: 0,
            };
            if (!B.floating) return e;
            let t = u(B.floating, E.x),
                r = u(B.floating, E.y);
            return h
                ? {
                      ...e,
                      transform: "translate(" + t + "px, " + r + "px)",
                      ...(c(B.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : {
                      position: n,
                      left: t,
                      top: r,
                  };
        }, [n, h, B.floating, E.x, E.y]);
    return i.useMemo(
        () => ({
            ...E,
            update: k,
            refs: G,
            elements: B,
            floatingStyles: Z,
        }),
        [E, k, G, B, Z],
    );
}
let _ = (e, t) => ({
        ...(0, r.cv)(e),
        options: [e, t],
    }),
    p = (e, t) => ({
        ...(0, r.uY)(e),
        options: [e, t],
    }),
    h = (e, t) => ({
        ...(0, r.dr)(e),
        options: [e, t],
    }),
    m = (e, t) => ({
        ...(0, r.RR)(e),
        options: [e, t],
    }),
    g = (e, t) => ({
        ...(0, r.dp)(e),
        options: [e, t],
    }),
    E = (e, t) => ({
        ...(0, r.X5)(e),
        options: [e, t],
    }),
    b = (e, t) => ({
        ...(0, r.Cp)(e),
        options: [e, t],
    });
