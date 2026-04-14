"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(621466),
    s = n(158954),
    a = n(61491),
    o = n(770178),
    l = n(765548),
    u = n(650583);
function c(e) {
    let {
            onScrubBack: t,
            onScrubForward: n,
            maxSeekableTime: c,
            interactionEnabled: d,
            durationSec: _,
            onClick: f,
            percent: h,
            onDragStateChange: p,
        } = e,
        [m, E] = r.useState(null),
        [g, A] = r.useState(null),
        [I, T] = r.useState(!1),
        [S, y] = r.useState(!1),
        [v, C] = r.useState(null),
        [N, R] = r.useState(!1),
        { i18n: b } = (0, s.G98)(),
        O = r.useMemo(() => {
            let e = { role: "progressbar", "aria-label": "Progress Bar" };
            return (
                null != h &&
                    "number" == typeof h &&
                    ((e["aria-valuenow"] = h),
                    (e["aria-valuemin"] = 0),
                    (e["aria-valuemax"] = 100),
                    (e["aria-label"] = b.PERCENT_COMPLETE(Math.round(h)))),
                e
            );
        }, [h, b]),
        D = r.useMemo(() => (null == m || null == c ? null : (0, a.DX)(c, _, m)), [m, c, _]),
        L = (0, l.A)((e) => {
            E(e.contentRect);
        }),
        w = (0, o.w)(L),
        M = (e) => {
            if (null != w.current) {
                let t = w.current.getBoundingClientRect(),
                    n = e.clientX - t.left,
                    r = null != c ? (c / _) * t.width : null;
                R(null != r && n > r), A(n);
            }
        },
        x = (e) => {
            d && (T(!0), M(e));
        },
        P = (e) => {
            d && !k.current && (T(!1), A(null), R(!1));
        },
        k = r.useRef(!1),
        U = r.useRef(null),
        G = (0, l.A)((e, t) => {
            if (null == f) return;
            let n = e - t.left,
                r = (0, a.hc)(n, t, _);
            (null != c && r > c) || f(r);
        }),
        F = (e) => {
            d && I && M(e);
        },
        B = (e) => {
            if (!d || null == f || 0 !== e.button) return;
            U.current?.();
            let t = e.currentTarget.getBoundingClientRect(),
                n = (0, a.hc)(e.clientX - t.left, t, _);
            if (null != c && n > c) return;
            (k.current = !0), y(!0), p?.(!0), C(Math.max(0, Math.min(e.clientX - t.left, t.width))), G(e.clientX, t);
            let r = (e) => {
                    if (null != w.current) {
                        let t = w.current.getBoundingClientRect(),
                            n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                            r = null != c ? (c / _) * t.width : null,
                            i = null != r ? Math.min(n, r) : n;
                        R(null != r && n > r), A(n), C(i), G(e.clientX, t);
                    } else G(e.clientX, t);
                },
                s = (e) => {
                    (k.current = !1),
                        (U.current = null),
                        y(!1),
                        C(null),
                        p?.(!1),
                        R(!1),
                        null != w.current &&
                            (((0, i.vq)(e.target, Node) && w.current.contains(e.target)) || (T(!1), A(null))),
                        window.removeEventListener("mousemove", r),
                        window.removeEventListener("mouseup", s);
                };
            window.addEventListener("mousemove", r),
                window.addEventListener("mouseup", s),
                (U.current = () => {
                    window.removeEventListener("mousemove", r), window.removeEventListener("mouseup", s);
                });
        },
        V = r.useCallback(
            (e) => {
                let { key: r } = e;
                r === u.N$.ArrowLeft && null != t
                    ? (e.preventDefault(), e.stopPropagation(), t())
                    : r === u.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
            },
            [t, n],
        ),
        H = () => {};
    return (
        r.useEffect(
            () => () => {
                (k.current = !1), U.current?.(), (U.current = null);
            },
            [],
        ),
        {
            contRef: w,
            boundingRect: m,
            handleMouseEnter: x,
            handleMouseLeave: P,
            handleMouseMove: F,
            handleMouseDown: B,
            handleKeyDown: V,
            hoveredAtX: g,
            maxSeekableX: D,
            isHovering: I,
            isDragging: S,
            dragX: v,
            isHoverBeyondMax: N,
            handleClick: H,
            ariaProps: O,
        }
    );
}
