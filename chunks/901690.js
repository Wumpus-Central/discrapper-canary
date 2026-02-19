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
    A = n(139208);
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
            isDragging: C,
            setIsDragging: x,
            panOffset: S,
            setPanOffset: T,
            zoomLevel: I,
            isWheeling: N,
            setIsWheeling: v,
            isSlidering: y,
            setVideoAspectRatio: b,
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
        Y = I > E,
        q = l.useCallback(
            (e) => {
                e.width > 0 && e.height > 0 && b(e.width / e.height), s?.(e);
            },
            [s, b],
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
                x(!0), P(t), O(t), k(Date.now()), H(t), G(S);
            },
            [J, Y, S, x],
        ),
        Z = l.useCallback(
            (e) => {
                if (((_ || Y) && f(), !C || !Y || null == F || null == U)) return;
                e.preventDefault(), e.stopPropagation();
                let t = J(e),
                    n = t.x - F.x,
                    i = t.y - F.y;
                T(M({ x: U.x + n, y: U.y + i })), O(t);
            },
            [M, F, U, _, J, C, Y, f, T],
        ),
        X = l.useCallback(
            (e) => {
                !C || g(e) || (e.preventDefault(), e.stopPropagation(), x(!1), H(null), G(null));
            },
            [C, x],
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
            x(!1), H(null), G(null);
        }, [x]),
        et = l.useCallback(
            (e) => {
                _ &&
                    (v(!0),
                    R(I - e.deltaY / 100, J(e), "wheel"),
                    f(),
                    K.current.start(100, () => {
                        v(!1);
                    }));
            },
            [_, R, I, J, f, v],
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
                    T((e) => {
                        let i = (l * (I - 1)) / 2,
                            a = (s * (I - 1)) / 2,
                            r = (t * (I - 1)) / 2,
                            o = (n * (I - 1)) / 2;
                        return M({ x: (0 !== i ? e.x / i : 0) * r, y: (0 !== a ? e.y / a : 0) * o });
                    }),
                    (z.current = { width: t, height: n }),
                    W.current.start(100, () => {
                        V(!1);
                    }));
            },
            [M, Y, I, T],
        ),
        [Y, I],
    ),
        (0, c.l0)(() => {
            K.current.stop(), W.current.stop();
        }),
        l.useEffect(() => {
            null != n && (0, u.c)(n, void 0, _ && Y ? I : 1);
        }, [_, Y, n, I]);
    let en = l.useMemo(() => {
        let e = M(S);
        return {
            "--custom-zoom-scale": I,
            "--custom-pan-x": `${e.x}px`,
            "--custom-pan-y": `${e.y}px`,
            "--custom-zoom-transition": C || B || N || y ? "none" : "transform 0.15s ease-out",
        };
    }, [M, C, B, N, y, S, I]);
    return (0, i.jsx)("div", {
        ref: j,
        className: a()(A.iE, p, { [A.rc]: _ && Y, [A.d$]: C }),
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
