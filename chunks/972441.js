n.d(t, { A: () => c });
var r = n(64700),
    l = n(621466),
    a = n(158954),
    i = n(61491),
    s = n(770178),
    u = n(765548),
    o = n(650583);
function c(e) {
    let {
            onScrubBack: t,
            onScrubForward: n,
            maxSeekableTime: c,
            interactionEnabled: d,
            durationSec: m,
            onClick: f,
            percent: h,
            onDragStateChange: p,
        } = e,
        [x, E] = r.useState(null),
        [b, v] = r.useState(null),
        [g, y] = r.useState(!1),
        [S, C] = r.useState(!1),
        [A, N] = r.useState(null),
        [R, w] = r.useState(!1),
        { i18n: T } = (0, a.G98)(),
        L = r.useMemo(() => {
            let e = { role: "progressbar", "aria-label": "Progress Bar" };
            return (
                null != h &&
                    "number" == typeof h &&
                    ((e["aria-valuenow"] = h),
                    (e["aria-valuemin"] = 0),
                    (e["aria-valuemax"] = 100),
                    (e["aria-label"] = T.PERCENT_COMPLETE(Math.round(h)))),
                e
            );
        }, [h, T]),
        j = r.useMemo(() => (null == x || null == c ? null : (0, i.DX)(c, m, x)), [x, c, m]),
        P = (0, u.A)((e) => {
            E(e.contentRect);
        }),
        D = (0, s.w)(P),
        M = (e) => {
            if (null != D.current) {
                let t = D.current.getBoundingClientRect(),
                    n = e.clientX - t.left,
                    r = null != c ? (c / m) * t.width : null;
                w(null != r && n > r), v(n);
            }
        },
        k = r.useRef(!1),
        I = r.useRef(null),
        B = (0, u.A)((e, t) => {
            if (null == f) return;
            let n = e - t.left,
                r = (0, i.hc)(n, t, m);
            (null != c && r > c) || f(r);
        }),
        U = r.useCallback(
            (e) => {
                let { key: r } = e;
                r === o.N$.ArrowLeft && null != t
                    ? (e.preventDefault(), e.stopPropagation(), t())
                    : r === o.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
            },
            [t, n],
        );
    return (
        r.useEffect(
            () => () => {
                (k.current = !1), I.current?.(), (I.current = null);
            },
            [],
        ),
        {
            contRef: D,
            boundingRect: x,
            handleMouseEnter: (e) => {
                d && (y(!0), M(e));
            },
            handleMouseLeave: (e) => {
                d && !k.current && (y(!1), v(null), w(!1));
            },
            handleMouseMove: (e) => {
                d && g && M(e);
            },
            handleMouseDown: (e) => {
                if (!d || null == f || 0 !== e.button) return;
                I.current?.();
                let t = e.currentTarget.getBoundingClientRect(),
                    n = (0, i.hc)(e.clientX - t.left, t, m);
                if (null != c && n > c) return;
                (k.current = !0),
                    C(!0),
                    p?.(!0),
                    N(Math.max(0, Math.min(e.clientX - t.left, t.width))),
                    B(e.clientX, t);
                let r = (e) => {
                        if (null != D.current) {
                            let t = D.current.getBoundingClientRect(),
                                n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                r = null != c ? (c / m) * t.width : null,
                                l = null != r ? Math.min(n, r) : n;
                            w(null != r && n > r), v(n), N(l), B(e.clientX, t);
                        } else B(e.clientX, t);
                    },
                    a = (e) => {
                        (k.current = !1),
                            (I.current = null),
                            C(!1),
                            N(null),
                            p?.(!1),
                            w(!1),
                            null != D.current &&
                                (((0, l.vq)(e.target, Node) && D.current.contains(e.target)) || (y(!1), v(null))),
                            window.removeEventListener("mousemove", r),
                            window.removeEventListener("mouseup", a);
                    };
                window.addEventListener("mousemove", r),
                    window.addEventListener("mouseup", a),
                    (I.current = () => {
                        window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", a);
                    });
            },
            handleKeyDown: U,
            hoveredAtX: b,
            maxSeekableX: j,
            isHovering: g,
            isDragging: S,
            dragX: A,
            isHoverBeyondMax: R,
            handleClick: () => {},
            ariaProps: L,
        }
    );
}
