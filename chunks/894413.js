(n.d(t, { Ay: () => N }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    u = n(876230),
    o = n(61491),
    s = n(717421),
    c = n(939249),
    d = n(834730),
    m = n(621466),
    f = n(116711),
    p = n(770178),
    h = n(765548),
    v = n(650583),
    x = n(683574),
    g = n(530567),
    E = n(565164),
    b = n(120692),
    y = n(494154);
let S = l.memo(function (e) {
        let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
        return (0, r.jsx)(b.animated.div, {
            "data-testid": "discord-web-video-player-playhead",
            className: y.lG,
            style: { left: n && null != l ? `${l}px` : t.to((e) => `${e}px`) },
        });
    }),
    C = (e) => {
        let {
                segment: t,
                animatingIndex: n,
                playbackPxSpring: l,
                playerState: a,
                isDragging: o,
                dragX: s,
                expansionSpring: c,
                timelineWidth: d,
                bufferedRanges: m,
                maxSeekableX: f,
                segmentBorderRadius: p = 99,
                progressClassName: h,
            } = e,
            { startPx: v, endPx: x, leftIndicatorIndex: g, rightIndicatorIndex: E } = t,
            S = x - v,
            C = l.to((e) => Math.min(Math.max(0, e - v), S)),
            w = null != n && null != c && g === n,
            N = !w && null != n && null != c && E === n,
            P = w || N,
            A = o && null != s ? Math.min(Math.max(0, s - v), S) : null,
            { progressToPlayheadBarTransform: R, glowWidth: L } = (function (e) {
                let {
                    segmentWidth: t,
                    dragFillWidth: n,
                    shrinkEnd: r,
                    isAnimating: l,
                    fillWidthAnimated: a,
                    expansionSpring: i,
                } = e;
                return null != n
                    ? { progressToPlayheadBarTransform: `translateX(-${t - n}px)`, glowWidth: n }
                    : r && null != i
                      ? {
                            progressToPlayheadBarTransform: (0, b.to)(
                                [a, i],
                                (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                            ),
                            glowWidth: (0, b.to)([a, i], (e, n) => Math.min(Number(e), t - Number(n))),
                        }
                      : l && null != i
                        ? {
                              progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                              glowWidth: (0, b.to)([a, i], (e, t) => Math.max(0, Number(e) - Number(t))),
                          }
                        : {
                              progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                              glowWidth: a,
                          };
            })({
                segmentWidth: S,
                dragFillWidth: A,
                shrinkEnd: N,
                isAnimating: P,
                fillWidthAnimated: C,
                expansionSpring: c,
            }),
            T = null != A ? (A <= 0 ? 0 : 1) : C.to((e) => (e <= 0 ? 0 : 1)),
            k = a !== u.Q6.ENDED,
            M = Math.max(0, f ?? 0),
            j = m.filter((e) => e.endPx >= v && e.startPx <= x),
            D = { borderRadius: `${p}px` };
        return (0, r.jsxs)(b.animated.div, {
            className: i()(y.Td, h),
            style: {
                left: w ? c.to((e) => v + e) : v,
                width: P ? c.to((e) => S - e) : S,
                "--custom-r-left": l.to((e) => (0 === v || e >= v ? "99px" : "0px")),
                "--custom-r-right": l.to((e) => (x >= d || e >= x ? "99px" : "0px")),
                "--custom-timeline-width": `${d}px`,
            },
            children: [
                (0, r.jsxs)("div", {
                    className: y.MI,
                    children: [
                        (0, r.jsxs)(b.animated.div, {
                            className: y._I,
                            style: { left: w ? c.to((e) => -(v + e)) : -v },
                            children: [
                                j.map((e) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: y.Zn,
                                            style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...D },
                                        },
                                        `${e.startPx}:${e.endPx}`,
                                    ),
                                ),
                                M > 0 &&
                                    (0, r.jsx)("div", {
                                        className: y.YK,
                                        style: { width: `${M}px`, opacity: 1, ...D },
                                    }),
                            ],
                        }),
                        (0, r.jsx)(b.animated.div, { className: y.wx, style: { transform: R, opacity: T } }),
                    ],
                }),
                k && (0, r.jsx)(b.animated.div, { className: y.fk, style: { width: L, opacity: T } }),
            ],
        });
    };
y.f5;
let w = { tension: 300, friction: 30, clamp: !0 };
function N(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: d,
            backgroundColor: b,
            playerState: N,
            preloadedBuffers: A,
            durationSec: R,
            maxSeekableTime: L,
            progressClassName: T,
            timelineHeightPx: k,
            segmentBorderRadius: M,
            hoverTimelineHeightPx: j,
            initialTimelineHeightPx: D,
            persistPlayhead: I = !0,
            onClick: B,
            onScrubBack: F,
            onScrubForward: $,
            onDragStateChange: U,
            indicatorConfig: _,
            scrubPreviewCues: K,
            onIndicatorSeek: O,
            getCurrentTimeSec: Q,
            "data-testid": G,
        } = e,
        H = l.useContext(x.qb),
        X = H?.controlBarConfig ?? g.X4[u.oA.MD],
        V = k ?? X.timelineHeightPx,
        Y = j ?? (null == k ? X.hoverTimelineHeightPx : void 0),
        {
            contRef: z,
            boundingRect: W,
            handleMouseEnter: Z,
            handleMouseLeave: q,
            handleMouseMove: J,
            handleKeyDown: ee,
            hoveredAtX: et,
            maxSeekableX: en,
            isHovering: er,
            isDragging: el,
            dragX: ea,
            isHoverBeyondMax: ei,
            handleClick: eu,
            handleMouseDown: eo,
            ariaProps: es,
        } = (function (e) {
            let {
                    onScrubBack: t,
                    onScrubForward: n,
                    maxSeekableTime: r,
                    interactionEnabled: a,
                    durationSec: i,
                    onClick: u,
                    percent: s,
                    onDragStateChange: c,
                    onDragXChange: d,
                } = e,
                [x, g] = l.useState(null),
                [E, b] = l.useState(null),
                [y, S] = l.useState(!1),
                [C, w] = l.useState(!1),
                [N, P] = l.useState(null),
                [A, R] = l.useState(!1),
                { i18n: L } = (0, f.G9)(),
                T = l.useMemo(() => {
                    let e = { role: "progressbar", "aria-label": "Progress Bar" };
                    return (
                        null != s &&
                            "number" == typeof s &&
                            ((e["aria-valuenow"] = s),
                            (e["aria-valuemin"] = 0),
                            (e["aria-valuemax"] = 100),
                            (e["aria-label"] = L.PERCENT_COMPLETE(Math.round(s)))),
                        e
                    );
                }, [s, L]),
                k = l.useMemo(() => (null == x || null == r ? null : (0, o.DX)(r, i, x)), [x, r, i]),
                M = (0, h.A)((e) => {
                    g(e.contentRect);
                }),
                j = (0, p.w)(M);
            function D(e) {
                if (null != j.current) {
                    let t = j.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        l = null != r ? (r / i) * t.width : null;
                    (R(null != l && n > l), b(n));
                }
            }
            let I = l.useRef(!1),
                B = l.useRef(null),
                F = (0, h.A)((e, t) => {
                    if (null == u) return;
                    let n = e - t.left,
                        l = (0, o.hc)(n, t, i);
                    (null != r && l > r) || u(l);
                }),
                $ = l.useCallback(
                    (e) => {
                        let { key: r } = e;
                        r === v.N$.ArrowLeft && null != t
                            ? (e.preventDefault(), e.stopPropagation(), t())
                            : r === v.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
                    },
                    [t, n],
                );
            return (
                l.useEffect(
                    () => () => {
                        ((I.current = !1), B.current?.(), (B.current = null));
                    },
                    [],
                ),
                {
                    contRef: j,
                    boundingRect: x,
                    handleMouseEnter: function (e) {
                        a && (S(!0), D(e));
                    },
                    handleMouseLeave: function (e) {
                        a && !I.current && (S(!1), b(null), R(!1));
                    },
                    handleMouseMove: function (e) {
                        a && y && D(e);
                    },
                    handleMouseDown: function (e) {
                        if (!a || null == u || 0 !== e.button) return;
                        B.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, o.hc)(e.clientX - t.left, t, i);
                        if (null != r && n > r) return;
                        ((I.current = !0), w(!0), c?.(!0));
                        let l = Math.max(0, Math.min(e.clientX - t.left, t.width));
                        function s(e) {
                            if (null != j.current) {
                                let t = j.current.getBoundingClientRect(),
                                    n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                    l = null != r ? (r / i) * t.width : null,
                                    a = null != l ? Math.min(n, l) : n;
                                (R(null != l && n > l), b(n), P(a), d?.(a), F(e.clientX, t));
                            } else F(e.clientX, t);
                        }
                        function f(e) {
                            ((I.current = !1),
                                (B.current = null),
                                w(!1),
                                P(null),
                                c?.(!1),
                                R(!1),
                                null != j.current &&
                                    (((0, m.vq)(e.target, Node) && j.current.contains(e.target)) || (S(!1), b(null))),
                                window.removeEventListener("mousemove", s),
                                window.removeEventListener("mouseup", f));
                        }
                        (P(l),
                            d?.(l),
                            F(e.clientX, t),
                            window.addEventListener("mousemove", s),
                            window.addEventListener("mouseup", f),
                            (B.current = () => {
                                (window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", f));
                            }));
                    },
                    handleKeyDown: $,
                    hoveredAtX: E,
                    maxSeekableX: k,
                    isHovering: y,
                    isDragging: C,
                    dragX: N,
                    isHoverBeyondMax: A,
                    handleClick: function () {},
                    ariaProps: T,
                }
            );
        })({
            onScrubBack: F,
            onScrubForward: $,
            maxSeekableTime: L,
            interactionEnabled: d,
            durationSec: R,
            percent: n,
            onClick: B,
            onDragStateChange: U,
            onDragXChange: (e) => ev.set(e),
        }),
        ec = l.useMemo(() => (null == et || null == W ? null : (0, o.hc)(et, W, R)), [et, W, R]),
        ed = l.useMemo(() => (null == ec ? null : (0, o.rB)(ec)), [ec]),
        em = l.useMemo(() => (null == K || null == ec ? null : (0, E.B8)(K, ec)), [K, ec]),
        ef = l.useMemo(() => {
            if (null != W) return (0, o.TO)(n, W);
        }, [n, W]),
        ep = W?.width != null && W?.width !== 0 ? W?.width : 1,
        eh = l.useMemo(() => A?.map((e) => ({ startPx: e.start * ep, endPx: (e.start + e.size) * ep })) ?? [], [A, ep]),
        [{ playbackPxSpring: ev }, ex] = (0, s.z)(() => ({ playbackPxSpring: 0, config: w })),
        eg = l.useRef(el);
    l.useLayoutEffect(() => {
        let e = eg.current;
        ((eg.current = el),
            e && !el && ex({ playbackPxSpring: null == ef || Number.isNaN(ef) ? 0 : ef, immediate: !0 }));
    }, [el, ef, ex]);
    let eE = l.useRef(null),
        eb = l.useRef(null),
        ey = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == Q || R <= 0 || ep <= 0) return;
        ((eb.current = eE.current ?? Q()), (ey.current = performance.now()));
        let e = 0,
            t = !1;
        return (
            (e = requestAnimationFrame(function n() {
                if (t || null == Q) return;
                let r = performance.now(),
                    l = ey.current;
                ey.current = r;
                let a = eb.current;
                if (null != a) {
                    a += null != l ? (r - l) / 1e3 : 0;
                    let e = Q();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - a;
                        a = Math.abs(t) > 0.5 ? e : a + 0.1 * t;
                    }
                } else a = Q() ?? null;
                if (null != a && Number.isFinite(a)) {
                    ((eb.current = a), (eE.current = a));
                    let e = Math.min(Math.max(0, (a / R) * ep), ep);
                    ev.set(e);
                }
                e = requestAnimationFrame(n);
            })),
            () => {
                ((t = !0), cancelAnimationFrame(e), (eb.current = null), (ey.current = null));
            }
        );
    }, [a, Q, R, ep, ev]);
    let eS = a && null != Q && R > 0;
    l.useEffect(() => {
        let e;
        if (!eS) {
            if (null != Q && R > 0 && ep > 0) {
                let t = Q();
                null != t && Number.isFinite(t) && ((eE.current = t), (e = Math.min(Math.max(0, (t / R) * ep), ep)));
            }
            (null == e && (e = null == ef || Number.isNaN(ef) ? 0 : ef), ex({ playbackPxSpring: e, immediate: !0 }));
        }
    }, [ef, eS, ex, Q, R, ep]);
    let eC = R > 1,
        ew = _?.indicators,
        eN = l.useMemo(() => {
            let e;
            return null != ew && null != W && eC
                ? ((e = W.width),
                  ew.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, o.DX)(t.timeSec, R, W) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [ew, R, W, eC]),
        eP = l.useMemo(
            () =>
                (function (e, t) {
                    let n = [{ startPx: 0, endPx: e, leftIndicatorIndex: null, rightIndicatorIndex: null }];
                    if (null == t || 0 === t.length) return n;
                    for (let r = 0; r < t.length; r++) {
                        let l = Math.max(0, t[r].leftPx - t[r].gapPx),
                            a = Math.min(e, t[r].rightPx + t[r].gapPx),
                            i = n[n.length - 1];
                        (null != i && ((i.endPx = l), (i.rightIndicatorIndex = t[r].index)),
                            null != i && i.endPx <= i.startPx && n.pop(),
                            a < e &&
                                n.push({
                                    startPx: a,
                                    endPx: e,
                                    leftIndicatorIndex: t[r].index,
                                    rightIndicatorIndex: null,
                                }));
                    }
                    return n;
                })(ep, eN),
            [ep, eN],
        ),
        eA = _?.hoverExpansionPx ?? 0,
        eR = l.useCallback(
            (e) =>
                null != e &&
                null != eN &&
                eN.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (_?.animatingIndex === t.index ? eA : 0) &&
                        e <= t.rightPx + t.gapPx + (_?.animatingIndex === t.index ? eA : 0),
                ),
            [eN, _?.animatingIndex, eA],
        );
    return (0, r.jsx)("div", {
        className: i()(y.jD, { [y.Wd]: null != T }),
        ref: z,
        "data-testid": G,
        style: {
            "--custom-timeline-height": `${null != Y && er ? Y : V}px`,
            "--custom-initial-timeline-height": `${D ?? V}px`,
            "--custom-timeline-track-background": b,
        },
        children: (0, r.jsxs)(c.D, {
            className: i()(y.KF, { [y.uc]: d }),
            focusProps: { enabled: t, ringClassName: y.Rg },
            style: ei ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: eu,
            onMouseDown: eo,
            onMouseEnter: Z,
            onMouseLeave: q,
            onMouseMove: J,
            onKeyDown: ee,
            tabIndex: d ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: y.PH,
                    ...es,
                    children:
                        null != W &&
                        eP.map((e, t) =>
                            (0, r.jsx)(
                                C,
                                {
                                    segment: e,
                                    playbackPxSpring: ev,
                                    playerState: N,
                                    isDragging: el,
                                    dragX: ea,
                                    animatingIndex: _?.animatingIndex,
                                    expansionSpring: _?.expansionSpring,
                                    timelineWidth: ep,
                                    bufferedRanges: eh,
                                    maxSeekableX: en,
                                    segmentBorderRadius: M,
                                    progressClassName: T,
                                },
                                t,
                            ),
                        ),
                }),
                null != W &&
                    eN?.map((e) => {
                        var t;
                        return _?.renderIndicator(
                            e,
                            null != ef && !Number.isNaN(ef) ? ef : 0,
                            !0 === e.source.clickable && null != O ? () => O(e.source.timeSec) : void 0,
                            ((t = (0, o.DX)(e.source.timeSec, R, W)),
                            null != en && t < en
                                ? "var(--custom-timeline-seekable-background)"
                                : eh.some((e) => e.startPx <= t && t <= e.endPx)
                                  ? "var(--custom-timeline-buffered-background)"
                                  : "var(--custom-timeline-track-background)"),
                        );
                    }),
                (0, r.jsx)(P, {
                    isHovering: er,
                    hoveredAtX: et,
                    hoveredTimeSec: ec,
                    formattedTime: ed,
                    isFullyVisible: t,
                    isInExclusionZone: eR,
                    scrubPreviewCue: em,
                    timelineWidthPx: ep,
                }),
                (er || I) &&
                    d &&
                    null != ef &&
                    !eR(el && null != ea ? ea : ef) &&
                    (0, r.jsx)(S, { playbackPxSpring: ev, isDragging: el, dragX: ea }),
            ],
        }),
    });
}
function P(e) {
    let {
        isHovering: t,
        hoveredAtX: n,
        hoveredTimeSec: l,
        formattedTime: a,
        isFullyVisible: i,
        isInExclusionZone: u,
        scrubPreviewCue: o,
        timelineWidthPx: s,
    } = e;
    return !t || null == n || !i || u(n)
        ? null
        : null != o && null != l
          ? (0, r.jsx)(E.wb, { cue: o, timeSec: l, cursorXPx: n, timelineWidthPx: s })
          : null == a
            ? null
            : (0, r.jsx)(d.E, {
                  className: y.Hz,
                  variant: "body-xs/normal",
                  color: "text-overlay-light",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: a,
              });
}
