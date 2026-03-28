n.d(t, { A: () => u });
var r = n(64700),
    l = n(158954),
    a = n(61491),
    i = n(770178),
    s = n(765548),
    o = n(650583);
function u(e) {
    let {
            onScrubBack: t,
            onScrubForward: n,
            maxSeekableTime: u,
            interactionEnabled: c,
            durationSec: d,
            onClick: m,
            percent: p,
        } = e,
        [h, f] = r.useState(null),
        [x, E] = r.useState(null),
        [v, g] = r.useState(!1),
        { i18n: b } = (0, l.G98)(),
        y = r.useMemo(() => {
            let e = { role: "progressbar", "aria-label": "Progress Bar" };
            return (
                null != p &&
                    "number" == typeof p &&
                    ((e["aria-valuenow"] = p),
                    (e["aria-valuemin"] = 0),
                    (e["aria-valuemax"] = 100),
                    (e["aria-label"] = b.PERCENT_COMPLETE(Math.round(p)))),
                e
            );
        }, [p, b]),
        S = r.useMemo(() => (null == h || null == u ? null : (0, a.DX)(u, d, h)), [h, u, d]),
        C = (0, s.A)((e) => {
            f(e.contentRect);
        }),
        A = (0, i.w)(C),
        N = (e) => {
            null != A.current && E(e.clientX - A.current.getBoundingClientRect().left);
        };
    return {
        contRef: A,
        boundingRect: h,
        handleMouseEnter: (e) => {
            c && (g(!0), N(e));
        },
        handleMouseLeave: (e) => {
            c && (g(!1), E(null));
        },
        handleMouseMove: (e) => {
            c && v && N(e);
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
        hoveredAtX: x,
        maxSeekableX: S,
        isHovering: v,
        handleClick: (e) => {
            if (!c || null == m) return;
            let t = e.currentTarget.getBoundingClientRect(),
                n = e.clientX - t.left,
                r = (0, a.hc)(n, t, d);
            m(null != u ? Math.min(r, u) : r);
        },
        ariaProps: y,
    };
}
