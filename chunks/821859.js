n.d(t, { Ay: () => f }), n(321073);
var r = n(627968),
    l = n(64700),
    a = n(503698),
    i = n.n(a),
    s = n(382222),
    o = n(876230),
    u = n(61491),
    c = n(397927),
    d = n(624600),
    m = n(972441),
    p = n(737149);
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
            progressFillClassName: S,
            glowClassName: C,
            timelineHeightPx: A = 4,
            segmentBorderRadius: N,
            hoverTimelineHeightPx: T,
            initialTimelineHeightPx: R = A,
            onClick: w,
            onScrubBack: j,
            onScrubForward: P,
            indicatorConfig: D,
            "data-testid": L,
        } = e,
        {
            contRef: M,
            boundingRect: k,
            handleMouseEnter: I,
            handleMouseLeave: B,
            handleMouseMove: U,
            handleKeyDown: O,
            hoveredAtX: K,
            maxSeekableX: _,
            isHovering: G,
            handleClick: Q,
            ariaProps: $,
        } = (0, m.A)({
            onScrubBack: j,
            onScrubForward: P,
            maxSeekableTime: b,
            interactionEnabled: f,
            durationSec: g,
            percent: n,
            onClick: w,
        }),
        F = l.useMemo(() => (null == K || null == k ? null : (0, u.rB)((0, u.hc)(K, k, g))), [K, k, g]),
        Y = l.useMemo(() => {
            if (null != k) return (0, u.TO)(n, k);
        }, [n, k]),
        [{ playbackPxSpring: z }, X] = (0, c.zhh)(() => ({ playbackPxSpring: 0, config: h }));
    l.useEffect(() => {
        X({ playbackPxSpring: null == Y || Number.isNaN(Y) ? 0 : Y, immediate: !a });
    }, [Y, a, X]);
    let W = k?.width != null && k?.width !== 0 ? k?.width : 1,
        V = g > 1,
        H = D?.indicators,
        J = l.useMemo(() => {
            let e;
            return null != H && null != k && V
                ? ((e = k.width),
                  H.map((t) => {
                      let n = Math.max(0, Math.min((0, u.DX)(t.timeSec, g, k) - t.widthPx / 2, e - t.widthPx));
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [H, g, k, V]),
        Z = l.useMemo(
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
                })(W, J),
            [W, J],
        ),
        q = D?.hoverExpansionPx ?? 0,
        ee = l.useCallback(
            (e) =>
                null != e &&
                null != J &&
                J.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (D?.animatingIndex === t.index ? q : 0) &&
                        e <= t.rightPx + t.gapPx + (D?.animatingIndex === t.index ? q : 0),
                ),
            [J, D?.animatingIndex, q],
        );
    return (0, r.jsx)("div", {
        className: p.jD,
        ref: M,
        "data-testid": L,
        style: {
            "--custom-timeline-height": `${null != T && G ? T : A}px`,
            "--custom-initial-timeline-height": `${R}px`,
        },
        children: (0, r.jsxs)(c.DUT, {
            className: i()(p.KF, { [p.uc]: f }),
            ignoreKeyPress: !0,
            onClick: Q,
            onMouseEnter: I,
            onMouseLeave: B,
            onMouseMove: U,
            onKeyDown: O,
            tabIndex: f ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: p.G9,
                    ...$,
                    children:
                        null != k &&
                        Z.map((e, t) =>
                            (0, r.jsx)(
                                d.A,
                                {
                                    segment: e,
                                    playbackPxSpring: z,
                                    animatingIndex: D?.animatingIndex,
                                    expansionSpring: D?.expansionSpring,
                                    backgroundColor: x,
                                    timelineWidth: W,
                                    preloadedBuffers: v,
                                    maxSeekableX: _,
                                    interactionEnabled: f,
                                    segmentBorderRadius: N,
                                    progressFillClassName: S ?? p.UA,
                                    glowClassName: C ?? p.pN,
                                    showGlow: y && E !== o.Q6.ENDED && null != Y && Y > e.startPx,
                                },
                                t,
                            ),
                        ),
                }),
                null != k && J?.map((e) => D?.renderIndicator(e, null != Y && !Number.isNaN(Y) ? Y : 0)),
                G &&
                    null != F &&
                    t &&
                    !ee(K) &&
                    (0, r.jsx)(c.Text, {
                        className: p.Ey,
                        variant: "text-xs/normal",
                        color: "always-white",
                        style: { left: null != K ? `${K}px` : "auto" },
                        children: F,
                    }),
                G &&
                    f &&
                    null != Y &&
                    !ee(Y) &&
                    (0, r.jsx)(s.animated.div, { className: p.Ub, style: { left: z.to((e) => `${e}px`) } }),
            ],
        }),
    });
}
