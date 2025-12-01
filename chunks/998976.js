n.d(t, {
    Cp: () => b,
    RR: () => h,
    X5: () => E,
    YF: () => f,
    cv: () => p,
    dp: () => g,
    dr: () => m,
    uY: () => _,
});
var r = n(615673),
    i = n(473749),
    a = n(24156),
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
            elements: { reference: p, floating: _ } = {},
            transform: m = !0,
            whileElementsMounted: h,
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
    let [v, S] = i.useState(null),
        [I, T] = i.useState(null),
        A = i.useCallback((e) => {
            e !== R.current && ((R.current = e), S(e));
        }, []),
        C = i.useCallback((e) => {
            e !== w.current && ((w.current = e), T(e));
        }, []),
        N = p || v,
        P = _ || I,
        R = i.useRef(null),
        w = i.useRef(null),
        D = i.useRef(E),
        x = null != h,
        L = d(h),
        j = d(f),
        M = d(g),
        k = i.useCallback(() => {
            if (!R.current || !w.current) return;
            let e = {
                placement: t,
                strategy: n,
                middleware: y,
            };
            j.current && (e.platform = j.current),
                (0, r.oo)(R.current, w.current, e).then((e) => {
                    let t = {
                        ...e,
                        isPositioned: !1 !== M.current,
                    };
                    U.current &&
                        !l(D.current, t) &&
                        ((D.current = t),
                        a.flushSync(() => {
                            b(t);
                        }));
                });
        }, [y, t, n, j, M]);
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
            if ((N && (R.current = N), P && (w.current = P), N && P)) {
                if (L.current) return L.current(N, P, k);
                k();
            }
        }, [N, P, k, L, x]);
    let G = i.useMemo(
            () => ({
                reference: R,
                floating: w,
                setReference: A,
                setFloating: C,
            }),
            [A, C],
        ),
        Z = i.useMemo(
            () => ({
                reference: N,
                floating: P,
            }),
            [N, P],
        ),
        B = i.useMemo(() => {
            let e = {
                position: n,
                left: 0,
                top: 0,
            };
            if (!Z.floating) return e;
            let t = u(Z.floating, E.x),
                r = u(Z.floating, E.y);
            return m
                ? {
                      ...e,
                      transform: "translate(" + t + "px, " + r + "px)",
                      ...(c(Z.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : {
                      position: n,
                      left: t,
                      top: r,
                  };
        }, [n, m, Z.floating, E.x, E.y]);
    return i.useMemo(
        () => ({
            ...E,
            update: k,
            refs: G,
            elements: Z,
            floatingStyles: B,
        }),
        [E, k, G, Z, B],
    );
}
let p = (e, t) => ({
        ...(0, r.cv)(e),
        options: [e, t],
    }),
    _ = (e, t) => ({
        ...(0, r.uY)(e),
        options: [e, t],
    }),
    m = (e, t) => ({
        ...(0, r.dr)(e),
        options: [e, t],
    }),
    h = (e, t) => ({
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
