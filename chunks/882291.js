n.d(t, { A: () => g }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(475539),
    o = n(61491),
    u = n(397927),
    c = n(624600),
    d = n(972441),
    m = n(717415),
    p = n(961255),
    f = n(261331),
    E = n(203908),
    h = n(790191),
    v = n(712119);
let x = { tension: 300, friction: 30, clamp: !0 };
function g(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: i,
            animate: g,
            interactionEnabled: S,
            isQuestCompleted: A,
            backgroundColor: C,
            preloadedBuffers: b,
            duration: _,
            maxSeekableTime: y,
            playerState: T,
            onClick: N,
            onScrubBack: D,
            onScrubForward: I,
            "data-testid": L,
        } = e,
        { quest: j, sourceQuestContent: M, useNewProgressBarStyling: w } = l.useContext(m.VideoQuestModalContext),
        {
            contRef: k,
            boundingRect: R,
            handleMouseEnter: P,
            handleMouseLeave: O,
            handleMouseMove: Q,
            handleKeyDown: V,
            hoveredAtX: U,
            maxSeekableX: B,
            isHovering: F,
            handleClick: G,
            ariaProps: $,
        } = (0, d.A)({
            onScrubBack: D,
            onScrubForward: I,
            maxSeekableTime: y,
            interactionEnabled: S,
            duration: _,
            percent: i,
            onClick: N,
        }),
        Y = l.useMemo(() => (null == U || null == R ? null : (0, o.rB)((0, o.hc)(U, R, _))), [U, R, _]),
        K = l.useMemo(() => {
            if (null != R) return (0, o.TO)(i, R);
        }, [i, R]),
        { currentPxSpring: H } = (0, u.zhh)(
            { currentPxSpring: K ?? 0, config: x },
            g ? "animate-always" : "animate-never",
        ),
        {
            indicators: q,
            isInExclusionZone: W,
            setHoveredIndicatorIndex: z,
            animatingIndicatorIndex: X,
            expansionSpring: J,
        } = (0, E.Ay)({ timelineRect: R, videoDuration: _, targetSec: t }),
        Z = l.useMemo(() => W(K), [K, W]),
        ee = l.useMemo(() => W(U), [U, W]),
        et = !A && w,
        en = R?.width != null && R?.width !== 0 ? R?.width : 1,
        er = l.useMemo(
            () =>
                ((e, t) => {
                    let n = [{ startPx: 0, endPx: t, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (0 === e.length) return n;
                    for (let r = 0; r < e.length; r++) {
                        let l = Math.max(0, e[r].leftPx - E.Ue),
                            i = Math.min(t, e[r].rightPx + E.Ue),
                            a = n?.[n.length - 1];
                        null != a && ((a.endPx = l), (a.rightIndicatorIndex = r));
                        let s = null != a && a.endPx <= a.startPx,
                            o = s ? a?.leftIndicatorIndex : r;
                        s && n.pop(),
                            i < t && n.push({ startPx: i, endPx: t, leftIndicatorIndex: o, rightIndicatorIndex: null });
                    }
                    return n;
                })(q, en),
            [q, en],
        );
    return (0, r.jsx)("div", {
        className: v.jD,
        ref: k,
        "data-testid": L,
        style: {
            "--custom-timeline-height": `${w || F ? 4 : 2}px`,
            "--custom-initial-timeline-height": `${w ? 4 : 2}px`,
        },
        children: (0, r.jsxs)(u.DUT, {
            className: a()(v.KF, { [v.uc]: S }),
            ignoreKeyPress: !0,
            onClick: G,
            onMouseEnter: P,
            onMouseLeave: O,
            onMouseMove: Q,
            onKeyDown: V,
            tabIndex: S ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: v.G9,
                    ...$,
                    children:
                        null != R &&
                        er.map((e, t) =>
                            (0, r.jsx)(
                                c.A,
                                {
                                    showGlow: T !== f.Q6.ENDED && null != K && K > e.startPx,
                                    segment: e,
                                    currentPxSpring: H,
                                    animatingIndex: X,
                                    backgroundColor: C,
                                    expansionSpring: J,
                                    timelineWidth: en,
                                    preloadedBuffers: b,
                                    maxSeekableX: B,
                                    interactionEnabled: S,
                                    useNewStyles: w,
                                    progressFillClassName: et ? h.QR : h.UA,
                                    glowClassName: et ? h.Um : h.U5,
                                },
                                t,
                            ),
                        ),
                }),
                null != R &&
                    q.map((e, t) => {
                        let n = X === e.index,
                            l = e.targetSec;
                        return (0, r.jsx)(
                            p.A,
                            {
                                currentPx: null != K ? K : 0,
                                indicator: e,
                                isAnimated: n,
                                expansionSpring: J,
                                quest: j,
                                sourceQuestContent: M,
                                onMouseEnter: () => z(e.index),
                                onMouseLeave: () => z(null),
                                onClick: null != N ? () => N(l) : void 0,
                            },
                            `indicator-${t}`,
                        );
                    }),
                F &&
                    null != Y &&
                    n &&
                    !ee &&
                    (0, r.jsx)(u.Text, {
                        className: v.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != U ? `${U}px` : "auto" },
                        children: Y,
                    }),
                F &&
                    S &&
                    null != K &&
                    !Z &&
                    (0, r.jsx)(s.animated.div, { className: v.Ub, style: { left: H.to((e) => `${e}px`) } }),
            ],
        }),
    });
}
