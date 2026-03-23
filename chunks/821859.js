n.d(t, { A: () => E });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(497766),
    o = n(876230),
    u = n(61491),
    c = n(397927),
    d = n(624600),
    m = n(194822),
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
            onScrubForward: _,
            "data-testid": b,
        } = e,
        {
            contRef: y,
            boundingRect: T,
            handleMouseEnter: N,
            handleMouseLeave: D,
            handleMouseMove: R,
            handleKeyDown: L,
            hoveredAtX: M,
            maxSeekableX: j,
            isHovering: I,
            handleClick: w,
            ariaProps: k,
        } = (0, m.A)({
            onScrubBack: C,
            onScrubForward: _,
            maxSeekableTime: S,
            interactionEnabled: E,
            duration: g,
            percent: n,
            onClick: A,
        }),
        O = l.useMemo(() => (null == M || null == T ? null : (0, u.rB)((0, u.hc)(M, T, g))), [M, T, g]),
        P = l.useMemo(() => {
            if (null != T) return (0, u.TO)(n, T);
        }, [n, T]),
        [{ currentPxSpring: Q }, U] = (0, c.zhh)(() => ({ currentPxSpring: 0, config: f }));
    l.useEffect(() => {
        U({ currentPxSpring: P ?? 0, immediate: !i });
    }, [P, i, U]);
    let V = T?.width != null && T?.width !== 0 ? T?.width : 1,
        B = l.useMemo(() => [{ startPx: 0, endPx: V, leftIndicatorIndex: null, rightIndicatorIndex: null }], [V]);
    return (0, r.jsx)("div", {
        className: p.jD,
        ref: y,
        "data-testid": b,
        style: { "--custom-timeline-height": "4px", "--custom-initial-timeline-height": "4px" },
        children: (0, r.jsxs)(c.DUT, {
            className: s()(p.KF, { [p.uc]: E }),
            ignoreKeyPress: !0,
            onClick: w,
            onMouseEnter: N,
            onMouseLeave: D,
            onMouseMove: R,
            onKeyDown: L,
            tabIndex: E ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: p.G9,
                    ...k,
                    children:
                        null != T &&
                        B.map((e, t) =>
                            (0, r.jsx)(
                                d.A,
                                {
                                    segment: e,
                                    currentPxSpring: Q,
                                    backgroundColor: h,
                                    timelineWidth: V,
                                    preloadedBuffers: x,
                                    maxSeekableX: j,
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
                I &&
                    null != O &&
                    t &&
                    (0, r.jsx)(c.Text, {
                        className: p.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != M ? `${M}px` : "auto" },
                        children: O,
                    }),
                I &&
                    E &&
                    null != P &&
                    (0, r.jsx)(a.animated.div, { className: p.Ub, style: { left: Q.to((e) => `${e}px`) } }),
            ],
        }),
    });
}
