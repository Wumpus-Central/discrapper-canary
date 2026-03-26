n.d(t, { A: () => g }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(497766),
    o = n(61491),
    u = n(397927),
    c = n(624600),
    d = n(972441),
    m = n(795068),
    p = n(163961),
    E = n(104148),
    f = n(758468),
    h = n(381135),
    v = n(712119);
let x = { tension: 300, friction: 30, clamp: !0 };
function g(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: a,
            animate: g,
            interactionEnabled: S,
            isQuestCompleted: A,
            backgroundColor: b,
            preloadedBuffers: _,
            durationSec: C,
            maxSeekableTime: y,
            playerState: T,
            onClick: N,
            onScrubBack: D,
            onScrubForward: I,
            "data-testid": R,
        } = e,
        { quest: L, sourceQuestContent: w, useNewProgressBarStyling: M } = l.useContext(m.a),
        {
            contRef: k,
            boundingRect: P,
            handleMouseEnter: j,
            handleMouseLeave: O,
            handleMouseMove: U,
            handleKeyDown: B,
            hoveredAtX: Q,
            maxSeekableX: V,
            isHovering: K,
            handleClick: F,
            ariaProps: $,
        } = (0, d.A)({
            onScrubBack: D,
            onScrubForward: I,
            maxSeekableTime: y,
            interactionEnabled: S,
            durationSec: C,
            percent: a,
            onClick: N,
        }),
        Y = l.useMemo(() => (null == Q || null == P ? null : (0, o.rB)((0, o.hc)(Q, P, C))), [Q, P, C]),
        G = l.useMemo(() => {
            if (null != P) return (0, o.TO)(a, P);
        }, [a, P]),
        { currentPxSpring: H } = (0, u.zhh)(
            { currentPxSpring: null == G || Number.isNaN(G) ? 0 : G, config: x },
            g ? "animate-always" : "animate-never",
        ),
        {
            indicators: z,
            isInExclusionZone: W,
            setHoveredIndicatorIndex: q,
            animatingIndicatorIndex: X,
            expansionSpring: J,
        } = (0, f.Ay)({ timelineRect: P, videoDuration: C, targetSec: t }),
        Z = l.useMemo(() => W(G), [G, W]),
        ee = l.useMemo(() => W(Q), [Q, W]),
        et = !A && M,
        en = P?.width != null && P?.width !== 0 ? P?.width : 1,
        er = l.useMemo(
            () =>
                ((e, t) => {
                    let n = [{ startPx: 0, endPx: t, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (0 === e.length) return n;
                    for (let r = 0; r < e.length; r++) {
                        let l = Math.max(0, e[r].leftPx - f.Ue),
                            a = Math.min(t, e[r].rightPx + f.Ue),
                            i = n?.[n.length - 1];
                        null != i && ((i.endPx = l), (i.rightIndicatorIndex = r));
                        let s = null != i && i.endPx <= i.startPx,
                            o = s ? i?.leftIndicatorIndex : r;
                        s && n.pop(),
                            a < t && n.push({ startPx: a, endPx: t, leftIndicatorIndex: o, rightIndicatorIndex: null });
                    }
                    return n;
                })(z, en),
            [z, en],
        );
    return (0, r.jsx)("div", {
        className: v.jD,
        ref: k,
        "data-testid": R,
        style: {
            "--custom-timeline-height": `${M || K ? 4 : 2}px`,
            "--custom-initial-timeline-height": `${M ? 4 : 2}px`,
        },
        children: (0, r.jsxs)(u.DUT, {
            className: i()(v.KF, { [v.uc]: S }),
            ignoreKeyPress: !0,
            onClick: F,
            onMouseEnter: j,
            onMouseLeave: O,
            onMouseMove: U,
            onKeyDown: B,
            tabIndex: S ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: v.G9,
                    ...$,
                    children:
                        null != P &&
                        er.map((e, t) =>
                            (0, r.jsx)(
                                c.A,
                                {
                                    showGlow: T !== p.Q6.ENDED && null != G && G > e.startPx,
                                    segment: e,
                                    playbackPxSpring: H,
                                    animatingIndex: X,
                                    backgroundColor: b,
                                    expansionSpring: J,
                                    timelineWidth: en,
                                    preloadedBuffers: _,
                                    maxSeekableX: V,
                                    interactionEnabled: S,
                                    useNewStyles: M,
                                    progressFillClassName: et ? h.QR : h.UA,
                                    glowClassName: et ? h.Um : h.U5,
                                },
                                t,
                            ),
                        ),
                }),
                null != P &&
                    z.map((e, t) => {
                        let n = X === e.index,
                            l = e.targetSec;
                        return (0, r.jsx)(
                            E.A,
                            {
                                currentPx: null != G ? G : 0,
                                indicator: e,
                                isAnimated: n,
                                expansionSpring: J,
                                quest: L,
                                sourceQuestContent: w,
                                onMouseEnter: () => q(e.index),
                                onMouseLeave: () => q(null),
                                onClick: null != N ? () => N(l) : void 0,
                            },
                            `indicator-${t}`,
                        );
                    }),
                K &&
                    null != Y &&
                    n &&
                    !ee &&
                    (0, r.jsx)(u.Text, {
                        className: v.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != Q ? `${Q}px` : "auto" },
                        children: Y,
                    }),
                K &&
                    S &&
                    null != G &&
                    !Z &&
                    (0, r.jsx)(s.animated.div, { className: v.Ub, style: { left: H.to((e) => `${e}px`) } }),
            ],
        }),
    });
}
