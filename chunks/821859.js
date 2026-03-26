n.d(t, { A: () => f }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(4208),
    o = n(876230),
    u = n(61491),
    c = n(397927),
    d = n(624600),
    m = n(972441),
    p = n(737149);
let E = { tension: 300, friction: 30, clamp: !0 };
function f(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: f,
            backgroundColor: h,
            playerState: v,
            preloadedBuffers: x,
            durationSec: g,
            maxSeekableTime: S,
            onClick: A,
            onScrubBack: b,
            onScrubForward: _,
            indicatorConfig: C,
            "data-testid": y,
        } = e,
        {
            contRef: T,
            boundingRect: N,
            handleMouseEnter: D,
            handleMouseLeave: I,
            handleMouseMove: R,
            handleKeyDown: L,
            hoveredAtX: w,
            maxSeekableX: M,
            isHovering: k,
            handleClick: P,
            ariaProps: j,
        } = (0, m.A)({
            onScrubBack: b,
            onScrubForward: _,
            maxSeekableTime: S,
            interactionEnabled: f,
            durationSec: g,
            percent: n,
            onClick: A,
        }),
        O = l.useMemo(() => (null == w || null == N ? null : (0, u.rB)((0, u.hc)(w, N, g))), [w, N, g]),
        U = l.useMemo(() => {
            if (null != N) return (0, u.TO)(n, N);
        }, [n, N]),
        [{ playbackPxSpring: B }, Q] = (0, c.zhh)(() => ({ playbackPxSpring: 0, config: E }));
    l.useEffect(() => {
        Q({ playbackPxSpring: null == U || Number.isNaN(U) ? 0 : U, immediate: !a });
    }, [U, a, Q]);
    let V = N?.width != null && N?.width !== 0 ? N?.width : 1,
        K = g > 1,
        F = C?.indicators,
        $ = l.useMemo(() => {
            let e;
            return null != F && null != N && K
                ? ((e = N.width),
                  F.map((t) => {
                      let n = Math.max(0, Math.min((0, u.DX)(t.timeSec, g, N) - t.widthPx / 2, e - t.widthPx));
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [F, g, N, K]),
        Y = l.useMemo(
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
                })(V, $),
            [V, $],
        ),
        G = C?.hoverExpansionPx ?? 0,
        H = l.useCallback(
            (e) =>
                null != e &&
                null != $ &&
                $.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (C?.animatingIndex === t.index ? G : 0) &&
                        e <= t.rightPx + t.gapPx + (C?.animatingIndex === t.index ? G : 0),
                ),
            [$, C?.animatingIndex, G],
        );
    return (0, r.jsx)("div", {
        className: p.jD,
        ref: T,
        "data-testid": y,
        style: { "--custom-timeline-height": "4px", "--custom-initial-timeline-height": "4px" },
        children: (0, r.jsxs)(c.DUT, {
            className: i()(p.KF, { [p.uc]: f }),
            ignoreKeyPress: !0,
            onClick: P,
            onMouseEnter: D,
            onMouseLeave: I,
            onMouseMove: R,
            onKeyDown: L,
            tabIndex: f ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: p.G9,
                    ...j,
                    children:
                        null != N &&
                        Y.map((e, t) =>
                            (0, r.jsx)(
                                d.A,
                                {
                                    segment: e,
                                    playbackPxSpring: B,
                                    animatingIndex: C?.animatingIndex,
                                    expansionSpring: C?.expansionSpring,
                                    backgroundColor: h,
                                    timelineWidth: V,
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
                null != N && $?.map((e) => C?.renderIndicator(e, null != U && !Number.isNaN(U) ? U : 0)),
                k &&
                    null != O &&
                    t &&
                    !H(w) &&
                    (0, r.jsx)(c.Text, {
                        className: p.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != w ? `${w}px` : "auto" },
                        children: O,
                    }),
                k &&
                    f &&
                    null != U &&
                    !H(U) &&
                    (0, r.jsx)(s.animated.div, { className: p.Ub, style: { left: B.to((e) => `${e}px`) } }),
            ],
        }),
    });
}
