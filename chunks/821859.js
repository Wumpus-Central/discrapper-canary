n.d(t, { A: () => E });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(475539),
    o = n(876230),
    u = n(61491),
    c = n(397927),
    d = n(624600),
    m = n(972441),
    p = n(712119);
let f = { tension: 300, friction: 30, clamp: !0 };
function E(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: i,
            interactionEnabled: E,
            backgroundColor: h,
            playerState: v,
            preloadedBuffers: x,
            duration: g,
            maxSeekableTime: S,
            onClick: A,
            onScrubBack: C,
            onScrubForward: b,
            "data-testid": _,
        } = e,
        {
            contRef: y,
            boundingRect: T,
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
            onScrubForward: b,
            maxSeekableTime: S,
            interactionEnabled: E,
            duration: g,
            percent: n,
            onClick: A,
        }),
        P = l.useMemo(() => (null == j || null == T ? null : (0, u.rB)((0, u.hc)(j, T, g))), [j, T, g]),
        O = l.useMemo(() => {
            if (null != T) return (0, u.TO)(n, T);
        }, [n, T]),
        [{ currentPxSpring: Q }, V] = (0, c.zhh)(() => ({ currentPxSpring: 0, config: f }));
    l.useEffect(() => {
        V({ currentPxSpring: O ?? 0, immediate: !i });
    }, [O, i, V]);
    let U = T?.width != null && T?.width !== 0 ? T?.width : 1,
        B = l.useMemo(() => [{ startPx: 0, endPx: U, leftIndicatorIndex: null, rightIndicatorIndex: null }], [U]);
    return (0, r.jsx)("div", {
        className: p.jD,
        ref: y,
        "data-testid": _,
        style: { "--custom-timeline-height": "4px", "--custom-initial-timeline-height": "4px" },
        children: (0, r.jsxs)(c.DUT, {
            className: a()(p.KF, { [p.uc]: E }),
            ignoreKeyPress: !0,
            onClick: k,
            onMouseEnter: N,
            onMouseLeave: D,
            onMouseMove: I,
            onKeyDown: L,
            tabIndex: E ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: p.G9,
                    ...R,
                    children:
                        null != T &&
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
                                    interactionEnabled: E,
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
                    E &&
                    null != O &&
                    (0, r.jsx)(s.animated.div, { className: p.Ub, style: { left: Q.to((e) => `${e}px`) } }),
            ],
        }),
    });
}
