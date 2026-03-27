n.d(t, { A: () => f }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(880013),
    o = n(876230),
    u = n(61491),
    c = n(397927),
    d = n(624600),
    m = n(972441),
    p = n(751741);
let h = { tension: 300, friction: 30, clamp: !0 };
function f(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: f,
            backgroundColor: x,
            playerState: E,
            preloadedBuffers: v,
            durationSec: g,
            maxSeekableTime: b,
            progressGlow: y,
            onClick: S,
            onScrubBack: C,
            onScrubForward: A,
            indicatorConfig: N,
            "data-testid": T,
        } = e,
        {
            contRef: w,
            boundingRect: R,
            handleMouseEnter: j,
            handleMouseLeave: D,
            handleMouseMove: P,
            handleKeyDown: L,
            hoveredAtX: M,
            maxSeekableX: k,
            isHovering: I,
            handleClick: B,
            ariaProps: U,
        } = (0, m.A)({
            onScrubBack: C,
            onScrubForward: A,
            maxSeekableTime: b,
            interactionEnabled: f,
            durationSec: g,
            percent: n,
            onClick: S,
        }),
        K = l.useMemo(() => (null == M || null == R ? null : (0, u.rB)((0, u.hc)(M, R, g))), [M, R, g]),
        O = l.useMemo(() => {
            if (null != R) return (0, u.TO)(n, R);
        }, [n, R]),
        [{ playbackPxSpring: _ }, G] = (0, c.zhh)(() => ({ playbackPxSpring: 0, config: h }));
    l.useEffect(() => {
        G({ playbackPxSpring: null == O || Number.isNaN(O) ? 0 : O, immediate: !a });
    }, [O, a, G]);
    let Q = R?.width != null && R?.width !== 0 ? R?.width : 1,
        F = g > 1,
        $ = N?.indicators,
        Y = l.useMemo(() => {
            let e;
            return null != $ && null != R && F
                ? ((e = R.width),
                  $.map((t) => {
                      let n = Math.max(0, Math.min((0, u.DX)(t.timeSec, g, R) - t.widthPx / 2, e - t.widthPx));
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [$, g, R, F]),
        z = l.useMemo(
            () =>
                ((e, t) => {
                    let n = [{ startPx: 0, endPx: e, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (null == t || 0 === t.length) return n;
                    for (let r = 0; r < t.length; r++) {
                        let l = Math.max(0, t[r].leftPx - t[r].gapPx),
                            a = Math.min(e, t[r].rightPx + t[r].gapPx),
                            i = n[n.length - 1];
                        null != i && ((i.endPx = l), (i.rightIndicatorIndex = t[r].index)),
                            null != i && i.endPx <= i.startPx && n.pop(),
                            a < e &&
                                n.push({
                                    startPx: a,
                                    endPx: e,
                                    leftIndicatorIndex: t[r].index,
                                    rightIndicatorIndex: null,
                                });
                    }
                    return n;
                })(Q, Y),
            [Q, Y],
        ),
        X = N?.hoverExpansionPx ?? 0,
        W = l.useCallback(
            (e) =>
                null != e &&
                null != Y &&
                Y.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (N?.animatingIndex === t.index ? X : 0) &&
                        e <= t.rightPx + t.gapPx + (N?.animatingIndex === t.index ? X : 0),
                ),
            [Y, N?.animatingIndex, X],
        );
    return (0, r.jsx)("div", {
        className: p.jD,
        ref: w,
        "data-testid": T,
        style: { "--custom-timeline-height": "4px", "--custom-initial-timeline-height": "4px" },
        children: (0, r.jsxs)(c.DUT, {
            className: i()(p.KF, { [p.uc]: f }),
            ignoreKeyPress: !0,
            onClick: B,
            onMouseEnter: j,
            onMouseLeave: D,
            onMouseMove: P,
            onKeyDown: L,
            tabIndex: f ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: p.G9,
                    ...U,
                    children:
                        null != R &&
                        z.map((e, t) =>
                            (0, r.jsx)(
                                d.A,
                                {
                                    segment: e,
                                    playbackPxSpring: _,
                                    animatingIndex: N?.animatingIndex,
                                    expansionSpring: N?.expansionSpring,
                                    backgroundColor: x,
                                    timelineWidth: Q,
                                    preloadedBuffers: v,
                                    maxSeekableX: k,
                                    interactionEnabled: f,
                                    useNewStyles: !0,
                                    progressFillClassName: p.UA,
                                    glowClassName: p.pN,
                                    showGlow: y && E !== o.Q6.ENDED,
                                },
                                t,
                            ),
                        ),
                }),
                null != R && Y?.map((e) => N?.renderIndicator(e, null != O && !Number.isNaN(O) ? O : 0)),
                I &&
                    null != K &&
                    t &&
                    !W(M) &&
                    (0, r.jsx)(c.Text, {
                        className: p.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != M ? `${M}px` : "auto" },
                        children: K,
                    }),
                I &&
                    f &&
                    null != O &&
                    !W(O) &&
                    (0, r.jsx)(s.animated.div, { className: p.Ub, style: { left: _.to((e) => `${e}px`) } }),
            ],
        }),
    });
}
