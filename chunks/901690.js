n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(451988),
    o = n(765671),
    d = n(964486),
    c = n(461782),
    u = n(426179),
    _ = n(401901),
    f = n(40056),
    m = n(926613);
function p(e) {
    return (1 & e.buttons) == 1;
}
let g = l.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: a, wrapperClassName: g } = t,
        { onActive: h } = l.useContext(c.k3),
        {
            enabled: A,
            minZoom: x,
            isDragging: v,
            setIsDragging: I,
            panOffset: E,
            setPanOffset: C,
            zoomLevel: j,
            isWheeling: N,
            setIsWheeling: y,
            isSlidering: b,
            setVideoAspectRatio: S,
            wrapperRef: w,
            doZoom: T,
            clampPanOffset: k,
        } = l.useContext(f.e9),
        [R, L] = l.useState(null),
        [D, M] = l.useState(null),
        [O, F] = l.useState(0),
        [V, P] = l.useState(null),
        [G, H] = l.useState(null),
        [U, W] = l.useState(!1),
        z = l.useRef(new s.Ep()),
        B = l.useRef(new s.Ep()),
        Z = l.useRef(null),
        Y = j > x,
        $ = l.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && S(e.width / e.height), a?.(e);
            },
            [a, S],
        ),
        Q = l.useCallback(
            (e) => {
                if (null == w.current) return f.qd;
                let t = w.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [w],
        ),
        K = l.useCallback(
            (e) => {
                if (!Y || !p(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = Q(e);
                I(!0), M(t), L(t), F(Date.now()), H(t), P(E);
            },
            [Q, Y, E, I],
        ),
        X = l.useCallback(
            (e) => {
                if (((A || Y) && h(), !v || !Y || null == G || null == V)) return;
                e.preventDefault(), e.stopPropagation();
                let t = Q(e),
                    n = t.x - G.x,
                    i = t.y - G.y;
                C(k({ x: V.x + n, y: V.y + i })), L(t);
            },
            [k, G, V, A, Q, v, Y, h, C],
        ),
        q = l.useCallback(
            (e) => {
                !v || p(e) || (e.preventDefault(), e.stopPropagation(), I(!1), H(null), P(null));
            },
            [v, I],
        ),
        J = l.useCallback(
            (e) => {
                if (Y && null != D && null != R) {
                    let { x: t, y: n } = D,
                        { x: i, y: l } = R;
                    (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - O >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [Y, D, O, R],
        ),
        ee = l.useCallback(() => {
            I(!1), H(null), P(null);
        }, [I]),
        et = l.useCallback(
            (e) => {
                A &&
                    (y(!0),
                    T(j - e.deltaY / 100, Q(e), "wheel"),
                    h(),
                    z.current.start(100, () => {
                        y(!1);
                    }));
            },
            [A, T, j, Q, h, y],
        );
    (0, o.i4)(
        w,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!Y || null == t || null == n) return;
                let i = Z.current;
                if (null == i) {
                    Z.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: a } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - a)) ||
                    (W(!0),
                    C((e) => {
                        let i = (l * (j - 1)) / 2,
                            r = (a * (j - 1)) / 2,
                            s = (t * (j - 1)) / 2,
                            o = (n * (j - 1)) / 2;
                        return k({ x: (0 !== i ? e.x / i : 0) * s, y: (0 !== r ? e.y / r : 0) * o });
                    }),
                    (Z.current = { width: t, height: n }),
                    B.current.start(100, () => {
                        W(!1);
                    }));
            },
            [k, Y, j, C],
        ),
        [Y, j],
    ),
        (0, d.l0)(() => {
            z.current.stop(), B.current.stop();
        }),
        l.useEffect(() => {
            null != n && (0, u.c)(n, void 0, A && Y ? j : 1);
        }, [A, Y, n, j]);
    let en = l.useMemo(() => {
        let e = k(E);
        return {
            "--custom-zoom-scale": j,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": v || U || N || b ? "none" : "transform 0.15s ease-out",
        };
    }, [k, v, U, N, b, E, j]);
    return (0, i.jsx)("div", {
        ref: w,
        className: r()(m.iE, g, { [m.rc]: A && Y, [m.d$]: v }),
        onMouseDown: K,
        onMouseMove: X,
        onMouseUp: q,
        onMouseLeave: ee,
        onWheel: et,
        onClick: J,
        children:
            null != n &&
            (0, i.jsx)("div", {
                className: r()(m.j, m.L2),
                style: en,
                children: (0, i.jsx)(_.A, { ...t, onResize: $, wrapperClassName: void 0 }),
            }),
    });
});
