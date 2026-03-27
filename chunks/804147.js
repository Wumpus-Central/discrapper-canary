n.d(t, { A: () => h }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    l = n(880013),
    o = n(61491),
    u = n(397927),
    c = n(624600),
    d = n(972441),
    m = n(795068),
    E = n(163961),
    p = n(104148),
    _ = n(758468),
    f = n(354061),
    v = n(751741);
let S = { tension: 300, friction: 30, clamp: !0 };
function h(e) {
    let {
            targetSec: t,
            isFullyVisible: n,
            percent: s,
            animate: h,
            interactionEnabled: g,
            isQuestCompleted: A,
            backgroundColor: x,
            preloadedBuffers: C,
            durationSec: T,
            maxSeekableTime: b,
            playerState: D,
            onClick: y,
            onScrubBack: I,
            onScrubForward: N,
            "data-testid": L,
        } = e,
        { quest: R, sourceQuestContent: O, useNewProgressBarStyling: M } = i.useContext(m.a),
        {
            contRef: k,
            boundingRect: w,
            handleMouseEnter: P,
            handleMouseLeave: j,
            handleMouseMove: V,
            handleKeyDown: U,
            hoveredAtX: Q,
            maxSeekableX: B,
            isHovering: F,
            handleClick: K,
            ariaProps: Y,
        } = (0, d.A)({
            onScrubBack: I,
            onScrubForward: N,
            maxSeekableTime: b,
            interactionEnabled: g,
            durationSec: T,
            percent: s,
            onClick: y,
        }),
        $ = i.useMemo(() => (null == Q || null == w ? null : (0, o.rB)((0, o.hc)(Q, w, T))), [Q, w, T]),
        H = i.useMemo(() => {
            if (null != w) return (0, o.TO)(s, w);
        }, [s, w]),
        { currentPxSpring: G } = (0, u.zhh)(
            { currentPxSpring: null == H || Number.isNaN(H) ? 0 : H, config: S },
            h ? "animate-always" : "animate-never",
        ),
        {
            indicators: q,
            isInExclusionZone: W,
            setHoveredIndicatorIndex: z,
            animatingIndicatorIndex: J,
            expansionSpring: X,
        } = (0, _.Ay)({ timelineRect: w, videoDuration: T, targetSec: t }),
        Z = i.useMemo(() => W(H), [H, W]),
        ee = i.useMemo(() => W(Q), [Q, W]),
        et = !A && M,
        en = w?.width != null && w?.width !== 0 ? w?.width : 1,
        er = i.useMemo(
            () =>
                ((e, t) => {
                    let n = [{ startPx: 0, endPx: t, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (0 === e.length) return n;
                    for (let r = 0; r < e.length; r++) {
                        let i = Math.max(0, e[r].leftPx - _.Ue),
                            s = Math.min(t, e[r].rightPx + _.Ue),
                            a = n?.[n.length - 1];
                        null != a && ((a.endPx = i), (a.rightIndicatorIndex = r));
                        let l = null != a && a.endPx <= a.startPx,
                            o = l ? a?.leftIndicatorIndex : r;
                        l && n.pop(),
                            s < t && n.push({ startPx: s, endPx: t, leftIndicatorIndex: o, rightIndicatorIndex: null });
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
            "--custom-timeline-height": `${M || F ? 4 : 2}px`,
            "--custom-initial-timeline-height": `${M ? 4 : 2}px`,
        },
        children: (0, r.jsxs)(u.DUT, {
            className: a()(v.KF, { [v.uc]: g }),
            ignoreKeyPress: !0,
            onClick: K,
            onMouseEnter: P,
            onMouseLeave: j,
            onMouseMove: V,
            onKeyDown: U,
            tabIndex: g ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: v.G9,
                    ...Y,
                    children:
                        null != w &&
                        er.map((e, t) =>
                            (0, r.jsx)(
                                c.A,
                                {
                                    showGlow: D !== E.Q6.ENDED && null != H && H > e.startPx,
                                    segment: e,
                                    playbackPxSpring: G,
                                    animatingIndex: J,
                                    backgroundColor: x,
                                    expansionSpring: X,
                                    timelineWidth: en,
                                    preloadedBuffers: C,
                                    maxSeekableX: B,
                                    interactionEnabled: g,
                                    useNewStyles: M,
                                    progressFillClassName: et ? f.QR : f.UA,
                                    glowClassName: et ? f.Um : f.U5,
                                },
                                t,
                            ),
                        ),
                }),
                null != w &&
                    q.map((e, t) => {
                        let n = J === e.index,
                            i = e.targetSec;
                        return (0, r.jsx)(
                            p.A,
                            {
                                currentPx: null != H ? H : 0,
                                indicator: e,
                                isAnimated: n,
                                expansionSpring: X,
                                quest: R,
                                sourceQuestContent: O,
                                onMouseEnter: () => z(e.index),
                                onMouseLeave: () => z(null),
                                onClick: null != y ? () => y(i) : void 0,
                            },
                            `indicator-${t}`,
                        );
                    }),
                F &&
                    null != $ &&
                    n &&
                    !ee &&
                    (0, r.jsx)(u.Text, {
                        className: v.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != Q ? `${Q}px` : "auto" },
                        children: $,
                    }),
                F &&
                    g &&
                    null != H &&
                    !Z &&
                    (0, r.jsx)(l.animated.div, { className: v.Ub, style: { left: G.to((e) => `${e}px`) } }),
            ],
        }),
    });
}
