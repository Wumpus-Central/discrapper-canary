n.d(t, { A: () => p });
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
    A = n(97762);
function g(e) {
    return (1 & e.buttons) == 1;
}
let p = l.memo(function (e) {
    let { ...t } = e,
        { streamId: n, onResize: s, wrapperClassName: p } = t,
        { onActive: f } = l.useContext(d.k3),
        {
            enabled: _,
            minZoom: E,
            isDragging: x,
            setIsDragging: C,
            panOffset: S,
            setPanOffset: I,
            zoomLevel: T,
            isWheeling: N,
            setIsWheeling: b,
            isSlidering: y,
            setVideoAspectRatio: v,
            wrapperRef: j,
            doZoom: R,
            clampPanOffset: M,
        } = l.useContext(m.e9),
        [D, O] = l.useState(null),
        [L, P] = l.useState(null),
        [w, k] = l.useState(0),
        [U, G] = l.useState(null),
        [F, H] = l.useState(null),
        [B, V] = l.useState(!1),
        K = l.useRef(new r.Ep()),
        W = l.useRef(new r.Ep()),
        z = l.useRef(null),
        Y = T > E,
        q = l.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && v(e.width / e.height), s?.(e);
            },
            [s, v],
        ),
        J = l.useCallback(
            (e) => {
                if (null == j.current) return m.qd;
                let t = j.current.getBoundingClientRect();
                return { x: e.clientX - t.left - t.width / 2, y: e.clientY - t.top - t.height / 2 };
            },
            [j],
        ),
        $ = l.useCallback(
            (e) => {
                if (!Y || !g(e)) return;
                e.preventDefault(), e.stopPropagation();
                let t = J(e);
                C(!0), P(t), O(t), k(Date.now()), H(t), G(S);
            },
            [J, Y, S, C],
        ),
        Z = l.useCallback(
            (e) => {
                if (((_ || Y) && f(), !x || !Y || null == F || null == U)) return;
                e.preventDefault(), e.stopPropagation();
                let t = J(e),
                    n = t.x - F.x,
                    i = t.y - F.y;
                I(M({ x: U.x + n, y: U.y + i })), O(t);
            },
            [M, F, U, _, J, x, Y, f, I],
        ),
        X = l.useCallback(
            (e) => {
                !x || g(e) || (e.preventDefault(), e.stopPropagation(), C(!1), H(null), G(null));
            },
            [x, C],
        ),
        Q = l.useCallback(
            (e) => {
                if (Y && null != L && null != D) {
                    let { x: t, y: n } = L,
                        { x: i, y: l } = D;
                    (Math.sqrt((i - t) ** 2 + (l - n) ** 2) > 0.01 || Date.now() - w >= 500) &&
                        (e.preventDefault(), e.stopPropagation());
                }
            },
            [Y, L, w, D],
        ),
        ee = l.useCallback(() => {
            C(!1), H(null), G(null);
        }, [C]),
        et = l.useCallback(
            (e) => {
                _ &&
                    (b(!0),
                    R(T - e.deltaY / 100, J(e), "wheel"),
                    f(),
                    K.current.start(100, () => {
                        b(!1);
                    }));
            },
            [_, R, T, J, f, b],
        );
    (0, o.i4)(
        j,
        l.useCallback(
            (e) => {
                let { width: t, height: n } = e;
                if (!Y || null == t || null == n) return;
                let i = z.current;
                if (null == i) {
                    z.current = { width: t, height: n };
                    return;
                }
                let { width: l, height: s } = i;
                (1 > Math.abs(t - l) && 1 > Math.abs(n - s)) ||
                    (V(!0),
                    I((e) => {
                        let i = (l * (T - 1)) / 2,
                            a = (s * (T - 1)) / 2,
                            r = (t * (T - 1)) / 2,
                            o = (n * (T - 1)) / 2;
                        return M({ x: (0 !== i ? e.x / i : 0) * r, y: (0 !== a ? e.y / a : 0) * o });
                    }),
                    (z.current = { width: t, height: n }),
                    W.current.start(100, () => {
                        V(!1);
                    }));
            },
            [M, Y, T, I],
        ),
        [Y, T],
    ),
        (0, c.l0)(() => {
            K.current.stop(), W.current.stop();
        }),
        l.useEffect(() => {
            null != n && (0, u.c)(n, void 0, _ && Y ? T : 1);
        }, [_, Y, n, T]);
    let en = l.useMemo(() => {
        let e = M(S);
        return {
            "--custom-zoom-scale": T,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": x || B || N || y ? "none" : "transform 0.15s ease-out",
        };
    }, [M, x, B, N, y, S, T]);
    return (0, i.jsx)("div", {
        ref: j,
        className: a()(A.iE, p, { [A.rc]: _ && Y, [A.d$]: x }),
        onMouseDown: $,
        onMouseMove: Z,
        onMouseUp: X,
        onMouseLeave: ee,
        onWheel: et,
        onClick: Q,
        children:
            null != n &&
            (0, i.jsx)("div", {
                className: a()(A.j, A.L2),
                style: en,
                children: (0, i.jsx)(h.A, { ...t, onResize: q, wrapperClassName: void 0 }),
            }),
    });
});
