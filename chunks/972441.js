n.d(t, { A: () => o });
var r = n(64700),
    i = n(61491),
    s = n(770178),
    l = n(765548),
    a = n(650583);
function o(e) {
    let { onScrubBack: t, onScrubForward: n, maxSeekableTime: o, interactionEnabled: u, duration: c, onClick: d } = e,
        [m, p] = r.useState(null),
        [E, f] = r.useState(null),
        [v, h] = r.useState(!1),
        x = r.useMemo(() => (null == m || null == o ? null : (0, i.DX)(o, c, m)), [m, o, c]),
        g = (0, l.A)((e) => {
            p(e.contentRect);
        }),
        S = (0, s.w)(g),
        C = (e) => {
            null != S.current && f(e.clientX - S.current.getBoundingClientRect().left);
        };
    return {
        contRef: S,
        boundingRect: m,
        handleMouseEnter: (e) => {
            u && (h(!0), C(e));
        },
        handleMouseLeave: (e) => {
            u && (h(!1), f(null));
        },
        handleMouseMove: (e) => {
            u && v && C(e);
        },
        handleKeyDown: r.useCallback(
            (e) => {
                let { key: r } = e;
                r === a.N$.ArrowLeft && null != t
                    ? (e.preventDefault(), e.stopPropagation(), t())
                    : r === a.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
            },
            [t, n],
        ),
        hoveredAtX: E,
        maxSeekableX: x,
        isHovering: v,
        handleClick: (e) => {
            if (!u || null == d) return;
            let t = e.currentTarget.getBoundingClientRect(),
                n = e.clientX - t.left;
            d((0, i.hc)(n, t, c));
        },
    };
}
