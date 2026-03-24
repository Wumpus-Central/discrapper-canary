n.d(t, { A: () => u });
var r = n(64700),
    l = n(158954),
    s = n(61491),
    i = n(770178),
    a = n(765548),
    o = n(650583);
function u(e) {
    let {
            onScrubBack: t,
            onScrubForward: n,
            maxSeekableTime: u,
            interactionEnabled: c,
            duration: d,
            onClick: m,
            percent: p,
        } = e,
        [f, E] = r.useState(null),
        [h, v] = r.useState(null),
        [x, g] = r.useState(!1),
        { i18n: S } = (0, l.G98)(),
        A = r.useMemo(() => {
            let e = { role: "progressbar", "aria-label": "Progress Bar" };
            return (
                null != p &&
                    "number" == typeof p &&
                    ((e["aria-valuenow"] = p),
                    (e["aria-valuemin"] = 0),
                    (e["aria-valuemax"] = 100),
                    (e["aria-label"] = S.PERCENT_COMPLETE(Math.round(p)))),
                e
            );
        }, [p, S]),
        C = r.useMemo(() => (null == f || null == u ? null : (0, s.DX)(u, d, f)), [f, u, d]),
        _ = (0, a.A)((e) => {
            E(e.contentRect);
        }),
        b = (0, i.w)(_),
        y = (e) => {
            null != b.current && v(e.clientX - b.current.getBoundingClientRect().left);
        };
    return {
        contRef: b,
        boundingRect: f,
        handleMouseEnter: (e) => {
            c && (g(!0), y(e));
        },
        handleMouseLeave: (e) => {
            c && (g(!1), v(null));
        },
        handleMouseMove: (e) => {
            c && x && y(e);
        },
        handleKeyDown: r.useCallback(
            (e) => {
                let { key: r } = e;
                r === o.N$.ArrowLeft && null != t
                    ? (e.preventDefault(), e.stopPropagation(), t())
                    : r === o.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
            },
            [t, n],
        ),
        hoveredAtX: h,
        maxSeekableX: C,
        isHovering: x,
        handleClick: (e) => {
            if (!c || null == m) return;
            let t = e.currentTarget.getBoundingClientRect(),
                n = e.clientX - t.left;
            m((0, s.hc)(n, t, d));
        },
        ariaProps: A,
    };
}
