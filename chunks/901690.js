n.d(t, { A: () => f });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(451988),
    o = n(765671),
    c = n(964486),
    d = n(461782),
    u = n(426179),
    h = n(401901),
    m = n(40056),
    A = n(139208);
let g = { x: 0, y: 0 };
function p(e) {
    return (1 & e.buttons) == 1;
}
let f = l.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: s, wrapperClassName: f } = t,
        { onActive: _ } = l.useContext(d.k3),
        {
            enabled: E,
            minZoom: C,
            isDragging: x,
            setIsDragging: S,
            panOffset: T,
            setPanOffset: I,
            zoomLevel: N,
            isWheeling: v,
            setIsWheeling: y,
            isSlidering: b,
            setVideoAspectRatio: j,
            wrapperRef: R,
            doZoom: M,
            clampPanOffset: D,
        } = l.useContext(m.e),
        [O, L] = l.useState(null),
        [P, w] = l.useState(null),
        [k, U] = l.useState(0),
        [G, F] = l.useState(null),
        [H, B] = l.useState(null),
        [V, K] = l.useState(!1),
        W = l.useRef(new r.Ep()),
        z = l.useRef(new r.Ep()),
        Y = l.useRef(null),
        q = N > C,
        J = l.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && j(e.width / e.height), s?.(e);
            },
            [s, j],
        ),
        $ = l.useCallback(
            (e) => {
                if (null == R.current) return g;
                let t = R.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [R],
        ),
        Z = l.useCallback(
            (e) => {
                if (!q || !p(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = $(e);
                S(!0), w(t), L(t), U(Date.now()), B(t), F(T);
            },
            [$, q, T, S],
        ),
        X = l.useCallback(
            (e) => {
                if (((E || q) && _(), !x || !q || null == H || null == G)) return;
                e.preventDefault(), e.stopPropagation();
                let t = $(e),
                    n = t.x - H.x,
                    i = t.y - H.y;
                I(D({ x: G.x + n, y: G.y + i })), L(t);
            },
            [D, H, G, E, $, x, q, _, I],
        ),
        Q = l.useCallback(
            (e) => {
                !x || p(e) || (e.preventDefault(), e.stopPropagation(), S(!1), B(null), F(null));
            },
            [x, S],
        ),
        ee = l.useCallback(
            (e) => {
                if (q && null != P && null != O) {
                    let { x: t, y: n } = P,
                        { x: i, y: l } = O;
                    (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - k >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [q, P, k, O],
        ),
        et = l.useCallback(() => {
            S(!1), B(null), F(null);
        }, [S]),
        en = l.useCallback(
            (e) => {
                E &&
                    (y(!0),
                    M(N - e.deltaY / 100, $(e), "wheel"),
                    _(),
                    W.current.start(100, () => {
                        y(!1);
                    }));
            },
            [E, M, N, $, _, y],
        );
    (0, o.i4)(
        R,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!q || null == t || null == n) return;
                let i = Y.current;
                if (null == i) {
                    Y.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: s } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - s)) ||
                    (K(!0),
                    I((e) => {
                        let i = (l * (N - 1)) / 2,
                            a = (s * (N - 1)) / 2,
                            r = (t * (N - 1)) / 2,
                            o = (n * (N - 1)) / 2;
                        return D({ x: (0 !== i ? e.x / i : 0) * r, y: (0 !== a ? e.y / a : 0) * o });
                    }),
                    (Y.current = { width: t, height: n }),
                    z.current.start(100, () => {
                        K(!1);
                    }));
            },
            [D, q, N, I],
        ),
        [q, N],
    ),
        (0, c.l0)(() => {
            W.current.stop(), z.current.stop();
        }),
        l.useEffect(() => {
            null != n && (0, u.c)(n, void 0, E && q ? N : 1);
        }, [E, q, n, N]);
    let ei = l.useMemo(() => {
        let e = D(T);
        return {
            "--custom-zoom-scale": N,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": x || V || v || b ? "none" : "transform 0.15s ease-out",
        };
    }, [D, x, V, v, b, T, N]);
    return (0, i.jsx)("div", {
        ref: R,
        className: a()(A.iE, f, { [A.rc]: E && q, [A.d$]: x }),
        onMouseDown: Z,
        onMouseMove: X,
        onMouseUp: Q,
        onMouseLeave: et,
        onWheel: en,
        onClick: ee,
        children:
            null != n &&
            (0, i.jsx)("div", {
                className: a()(A.j, A.L2),
                style: ei,
                children: (0, i.jsx)(h.A, { ...t, onResize: J, wrapperClassName: void 0 }),
            }),
    });
});
