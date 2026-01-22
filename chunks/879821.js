n.d(t, {
    BN: () => _,
    ER: () => h,
    Ej: () => g,
    RK: () => E,
    UU: () => m,
    cY: () => p,
    jD: () => b,
    we: () => f,
});
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

function c(e) {
    return "u" < typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}

function u(e, t) {
    let n = c(e);
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

function f(e) {
    void 0 === e && (e = {});
    let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: s = [],
            platform: f,
            elements: { reference: p, floating: _ } = {},
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
        [y, O] = i.useState(s);
    l(y, s) || O(s);
    let [A, v] = i.useState(null),
        [S, I] = i.useState(null),
        T = i.useCallback((e) => {
            e !== w.current && ((w.current = e), v(e));
        }, []),
        C = i.useCallback((e) => {
            e !== P.current && ((P.current = e), I(e));
        }, []),
        N = p || A,
        R = _ || S,
        w = i.useRef(null),
        P = i.useRef(null),
        D = i.useRef(E),
        x = null != m,
        L = d(m),
        j = d(f),
        M = d(g),
        k = i.useCallback(() => {
            if (!w.current || !P.current) return;
            let e = {
                placement: t,
                strategy: n,
                middleware: y,
            };
            j.current && (e.platform = j.current),
                (0, r.rD)(w.current, P.current, e).then((e) => {
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
    o(() => {
        !1 === g &&
            D.current.isPositioned &&
            ((D.current.isPositioned = !1),
            b((e) => ({
                ...e,
                isPositioned: !1,
            })));
    }, [g]);
    let U = i.useRef(!1);
    o(
        () => (
            (U.current = !0),
            () => {
                U.current = !1;
            }
        ),
        [],
    ),
        o(() => {
            if ((N && (w.current = N), R && (P.current = R), N && R)) {
                if (L.current) return L.current(N, R, k);
                k();
            }
        }, [N, R, k, L, x]);
    let G = i.useMemo(
            () => ({
                reference: w,
                floating: P,
                setReference: T,
                setFloating: C,
            }),
            [T, C],
        ),
        V = i.useMemo(
            () => ({
                reference: N,
                floating: R,
            }),
            [N, R],
        ),
        F = i.useMemo(() => {
            let e = {
                position: n,
                left: 0,
                top: 0,
            };
            if (!V.floating) return e;
            let t = u(V.floating, E.x),
                r = u(V.floating, E.y);
            return h
                ? {
                      ...e,
                      transform: "translate(" + t + "px, " + r + "px)",
                      ...(c(V.floating) >= 1.5 && {
                          willChange: "transform",
                      }),
                  }
                : {
                      position: n,
                      left: t,
                      top: r,
                  };
        }, [n, h, V.floating, E.x, E.y]);
    return i.useMemo(
        () => ({
            ...E,
            update: k,
            refs: G,
            elements: V,
            floatingStyles: F,
        }),
        [E, k, G, V, F],
    );
}
let p = (e, t) => ({
        ...(0, r.cY)(e),
        options: [e, t],
    }),
    _ = (e, t) => ({
        ...(0, r.BN)(e),
        options: [e, t],
    }),
    h = (e, t) => ({
        ...(0, r.ER)(e),
        options: [e, t],
    }),
    m = (e, t) => ({
        ...(0, r.UU)(e),
        options: [e, t],
    }),
    g = (e, t) => ({
        ...(0, r.Ej)(e),
        options: [e, t],
    }),
    E = (e, t) => ({
        ...(0, r.RK)(e),
        options: [e, t],
    }),
    b = (e, t) => ({
        ...(0, r.jD)(e),
        options: [e, t],
    });
