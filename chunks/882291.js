n.d(t, { A: () => g }), n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(490249),
    o = n(61491),
    u = n(397927),
    c = n(624600),
    d = n(972441),
    m = n(717415),
    p = n(961255),
    f = n(261331),
    E = n(203908),
    h = n(750813),
    v = n(23373);
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
            preloadedBuffers: _,
            duration: b,
            maxSeekableTime: y,
            playerState: T,
            onClick: N,
            onScrubBack: D,
            onScrubForward: R,
            "data-testid": L,
        } = e,
        { quest: I, sourceQuestContent: M, useNewProgressBarStyling: j } = l.useContext(m.VideoQuestModalContext),
        {
            contRef: w,
            boundingRect: k,
            handleMouseEnter: O,
            handleMouseLeave: P,
            handleMouseMove: Q,
            handleKeyDown: V,
            hoveredAtX: U,
            maxSeekableX: B,
            isHovering: F,
            handleClick: G,
            ariaProps: K,
        } = (0, d.A)({
            onScrubBack: D,
            onScrubForward: R,
            maxSeekableTime: y,
            interactionEnabled: S,
            duration: b,
            percent: i,
            onClick: N,
        }),
        Y = l.useMemo(() => (null == U || null == k ? null : (0, o.rB)((0, o.hc)(U, k, b))), [U, k, b]),
        $ = l.useMemo(() => {
            if (null != k) return (0, o.TO)(i, k);
        }, [i, k]),
        { currentPxSpring: H } = (0, u.zhh)(
            { currentPxSpring: $ ?? 0, config: x },
            g ? "animate-always" : "animate-never",
        ),
        {
            indicators: z,
            isInExclusionZone: W,
            setHoveredIndicatorIndex: q,
            animatingIndicatorIndex: X,
            expansionSpring: J,
        } = (0, E.Ay)({ timelineRect: k, videoDuration: b, targetSec: t }),
        Z = l.useMemo(() => W($), [$, W]),
        ee = l.useMemo(() => W(U), [U, W]),
        et = !A && j,
        en = k?.width != null && k?.width !== 0 ? k?.width : 1,
        er = l.useMemo(
            () =>
                ((e, t) => {
                    let n = [{ startPx: 0, endPx: t, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (0 === e.length) return n;
                    for (let r = 0; r < e.length; r++) {
                        let l = Math.max(0, e[r].leftPx - E.Ue),
                            i = Math.min(t, e[r].rightPx + E.Ue),
                            s = n?.[n.length - 1];
                        null != s && ((s.endPx = l), (s.rightIndicatorIndex = r));
                        let a = null != s && s.endPx <= s.startPx,
                            o = a ? s?.leftIndicatorIndex : r;
                        a && n.pop(),
                            i < t && n.push({ startPx: i, endPx: t, leftIndicatorIndex: o, rightIndicatorIndex: null });
                    }
                    return n;
                })(z, en),
            [z, en],
        );
    return (0, r.jsx)("div", {
        className: v.jD,
        ref: w,
        "data-testid": L,
        style: {
            "--custom-timeline-height": `${j || F ? 4 : 2}px`,
            "--custom-initial-timeline-height": `${j ? 4 : 2}px`,
        },
        children: (0, r.jsxs)(u.DUT, {
            className: s()(v.KF, { [v.uc]: S }),
            ignoreKeyPress: !0,
            onClick: G,
            onMouseEnter: O,
            onMouseLeave: P,
            onMouseMove: Q,
            onKeyDown: V,
            tabIndex: S ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: v.G9,
                    ...K,
                    children:
                        null != k &&
                        er.map((e, t) =>
                            (0, r.jsx)(
                                c.A,
                                {
                                    showGlow: T !== f.Q6.ENDED && null != $ && $ > e.startPx,
                                    segment: e,
                                    currentPxSpring: H,
                                    animatingIndex: X,
                                    backgroundColor: C,
                                    expansionSpring: J,
                                    timelineWidth: en,
                                    preloadedBuffers: _,
                                    maxSeekableX: B,
                                    interactionEnabled: S,
                                    useNewStyles: j,
                                    progressFillClassName: et ? h.QR : h.UA,
                                    glowClassName: et ? h.Um : h.U5,
                                },
                                t,
                            ),
                        ),
                }),
                null != k &&
                    z.map((e, t) => {
                        let n = X === e.index,
                            l = e.targetSec;
                        return (0, r.jsx)(
                            p.A,
                            {
                                currentPx: null != $ ? $ : 0,
                                indicator: e,
                                isAnimated: n,
                                expansionSpring: J,
                                quest: I,
                                sourceQuestContent: M,
                                onMouseEnter: () => q(e.index),
                                onMouseLeave: () => q(null),
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
                    null != $ &&
                    !Z &&
                    (0, r.jsx)(a.animated.div, { className: v.Ub, style: { left: H.to((e) => `${e}px`) } }),
            ],
        }),
    });
}
