n.d(t, { A: () => f });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(442215),
    o = n(876230),
    u = n(61491),
    c = n(397927),
    d = n(624600),
    m = n(972441),
    p = n(23373);
let E = { tension: 300, friction: 30, clamp: !0 };
function f(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: i,
            interactionEnabled: f,
            backgroundColor: h,
            playerState: v,
            preloadedBuffers: x,
            duration: g,
            maxSeekableTime: S,
            onClick: A,
            onScrubBack: C,
            onScrubForward: _,
            "data-testid": b,
        } = e,
        {
            contRef: T,
            boundingRect: y,
            handleMouseEnter: N,
            handleMouseLeave: D,
            handleMouseMove: I,
            handleKeyDown: L,
            hoveredAtX: j,
            maxSeekableX: M,
            isHovering: w,
            handleClick: k,
            ariaProps: R,
        } = (0, m.A)({
            onScrubBack: C,
            onScrubForward: _,
            maxSeekableTime: S,
            interactionEnabled: f,
            duration: g,
            percent: n,
            onClick: A,
        }),
        P = l.useMemo(() => (null == j || null == y ? null : (0, u.rB)((0, u.hc)(j, y, g))), [j, y, g]),
        O = l.useMemo(() => {
            if (null != y) return (0, u.TO)(n, y);
        }, [n, y]),
        [{ currentPxSpring: Q }, V] = (0, c.zhh)(() => ({ currentPxSpring: 0, config: E }));
    l.useEffect(() => {
        V({ currentPxSpring: O ?? 0, immediate: !i });
    }, [O, i, V]);
    let U = y?.width != null && y?.width !== 0 ? y?.width : 1,
        B = l.useMemo(() => [{ startPx: 0, endPx: U, leftIndicatorIndex: null, rightIndicatorIndex: null }], [U]);
    return (0, r.jsx)("div", {
        className: p.jD,
        ref: T,
        "data-testid": b,
        style: { "--custom-timeline-height": "4px", "--custom-initial-timeline-height": "4px" },
        children: (0, r.jsxs)(c.DUT, {
            className: a()(p.KF, { [p.uc]: f }),
            ignoreKeyPress: !0,
            onClick: k,
            onMouseEnter: N,
            onMouseLeave: D,
            onMouseMove: I,
            onKeyDown: L,
            tabIndex: f ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: p.G9,
                    ...R,
                    children:
                        null != y &&
                        B.map((e, t) =>
                            (0, r.jsx)(
                                d.A,
                                {
                                    segment: e,
                                    currentPxSpring: Q,
                                    backgroundColor: h,
                                    timelineWidth: U,
                                    preloadedBuffers: x,
                                    maxSeekableX: M,
                                    interactionEnabled: f,
                                    useNewStyles: !0,
                                    progressFillClassName: p.UA,
                                    glowClassName: p.pN,
                                    showGlow: v !== o.Q6.ENDED,
                                },
                                t,
                            ),
                        ),
                }),
                w &&
                    null != P &&
                    t &&
                    (0, r.jsx)(c.Text, {
                        className: p.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != j ? `${j}px` : "auto" },
                        children: P,
                    }),
                w &&
                    f &&
                    null != O &&
                    (0, r.jsx)(s.animated.div, { className: p.Ub, style: { left: Q.to((e) => `${e}px`) } }),
            ],
        }),
    });
}
