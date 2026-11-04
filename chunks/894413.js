(n.d(t, { Ay: () => w }), n(321073));
var r = n(477900),
    l = n(582128),
    a = n(503698),
    i = n.n(a),
    o = n(876230),
    u = n(61491),
    s = n(717421),
    c = n(939249),
    d = n(834730),
    m = n(621466),
    f = n(116711),
    p = n(770178),
    h = n(765548),
    x = n(650583),
    v = n(683574),
    g = n(530567),
    b = n(565164),
    E = n(736819),
    P = n(494154);
let y = l.memo(function (e) {
        let { playbackPxSpring: t, isDragging: n, dragX: l } = e;
        return (0, r.jsx)(E.animated.div, {
            "data-testid": "discord-web-video-player-playhead",
            className: P.lG,
            style: { left: n && null != l ? `${l}px` : t.to((e) => `${e}px`) },
        });
    }),
    S = (e) => {
        let {
                segment: t,
                animatingIndex: n,
                playbackPxSpring: l,
                playerState: a,
                isDragging: u,
                dragX: s,
                expansionSpring: c,
                timelineWidth: d,
                bufferedRanges: m,
                maxSeekableX: f,
                segmentBorderRadius: p = 99,
                progressClassName: h,
            } = e,
            { startPx: x, endPx: v, leftIndicatorIndex: g, rightIndicatorIndex: b } = t,
            y = v - x,
            S = l.to((e) => Math.min(Math.max(0, e - x), y)),
            C = null != n && null != c && g === n,
            w = !C && null != n && null != c && b === n,
            N = C || w,
            A = u && null != s ? Math.min(Math.max(0, s - x), y) : null,
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
                            progressToPlayheadBarTransform: (0, E.to)(
                                [a, i],
                                (e, n) => `translateX(-${Math.max(0, t - Number(n) - Number(e))}px)`,
                            ),
                            glowWidth: (0, E.to)([a, i], (e, n) => Math.min(Number(e), t - Number(n))),
                        }
                      : l && null != i
                        ? {
                              progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                              glowWidth: (0, E.to)([a, i], (e, t) => Math.max(0, Number(e) - Number(t))),
                          }
                        : {
                              progressToPlayheadBarTransform: a.to((e) => `translateX(-${t - Number(e)}px)`),
                              glowWidth: a,
                          };
            })({
                segmentWidth: y,
                dragFillWidth: A,
                shrinkEnd: w,
                isAnimating: N,
                fillWidthAnimated: S,
                expansionSpring: c,
            }),
            T = null != A ? (A <= 0 ? 0 : 1) : S.to((e) => (e <= 0 ? 0 : 1)),
            M = a !== o.Q6.ENDED,
            k = Math.max(0, (f ?? 0) - x),
            j = m.filter((e) => e.endPx >= x && e.startPx <= v),
            D = { borderRadius: `${p}px` };
        return (0, r.jsxs)(E.animated.div, {
            className: i()(P.Td, h),
            style: {
                left: C ? c.to((e) => x + e) : x,
                width: N ? c.to((e) => y - e) : y,
                "--custom-r-left": l.to((e) => (0 === x || e >= x ? "99px" : "0px")),
                "--custom-r-right": l.to((e) => (v >= d || e >= v ? "99px" : "0px")),
                "--custom-timeline-width": `${d}px`,
            },
            children: [
                (0, r.jsxs)("div", {
                    className: P.MI,
                    children: [
                        (0, r.jsxs)(E.animated.div, {
                            className: P._I,
                            style: { left: C ? c.to((e) => -(x + e)) : -x },
                            children: [
                                j.map((e) =>
                                    (0, r.jsx)(
                                        "div",
                                        {
                                            className: P.Zn,
                                            style: { width: `${e.endPx - e.startPx}px`, left: `${e.startPx}px`, ...D },
                                        },
                                        `${e.startPx}:${e.endPx}`,
                                    ),
                                ),
                                k > 0 &&
                                    (0, r.jsx)("div", {
                                        className: P.YK,
                                        style: { width: `${k}px`, opacity: 1, ...D },
                                    }),
                            ],
                        }),
                        (0, r.jsx)(E.animated.div, { className: P.wx, style: { transform: R, opacity: T } }),
                    ],
                }),
                M && (0, r.jsx)(E.animated.div, { className: P.fk, style: { width: L, opacity: T } }),
            ],
        });
    };
P.f5;
let C = { tension: 300, friction: 30, clamp: !0 };
function w(e) {
    let {
            isFullyVisible: t,
            percent: n,
            animate: a,
            interactionEnabled: d,
            backgroundColor: E,
            playerState: w,
            preloadedBuffers: A,
            durationSec: R,
            maxSeekableTime: L,
            progressClassName: T,
            timelineHeightPx: M,
            segmentBorderRadius: k,
            hoverTimelineHeightPx: j,
            initialTimelineHeightPx: D,
            persistPlayhead: I = !0,
            onClick: B,
            onScrubBack: F,
            onScrubForward: G,
            onDragStateChange: $,
            indicatorConfig: H,
            scrubPreviewCues: U,
            onIndicatorSeek: _,
            getCurrentTimeSec: O,
            "data-testid": K,
        } = e,
        Q = l.useContext(v.qb),
        z = Q?.controlBarConfig ?? g.X4[o.oA.MD],
        V = M ?? z.timelineHeightPx,
        X = j ?? (null == M ? z.hoverTimelineHeightPx : void 0),
        {
            contRef: Y,
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
            handleClick: eo,
            handleMouseDown: eu,
            ariaProps: es,
        } = (function (e) {
            let {
                    onScrubBack: t,
                    onScrubForward: n,
                    maxSeekableTime: r,
                    interactionEnabled: a,
                    durationSec: i,
                    onClick: o,
                    percent: s,
                    onDragStateChange: c,
                    onDragXChange: d,
                } = e,
                [v, g] = l.useState(null),
                [b, E] = l.useState(null),
                [P, y] = l.useState(!1),
                [S, C] = l.useState(!1),
                [w, N] = l.useState(null),
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
                M = l.useMemo(() => (null == v || null == r ? null : (0, u.DX)(r, i, v)), [v, r, i]),
                k = (0, h.A)((e) => {
                    g(e.contentRect);
                }),
                j = (0, p.w)(k);
            function D(e) {
                if (null != j.current) {
                    let t = j.current.getBoundingClientRect(),
                        n = e.clientX - t.left,
                        l = null != r ? (r / i) * t.width : null;
                    (R(null != l && n > l), E(n));
                }
            }
            let I = l.useRef(!1),
                B = l.useRef(null),
                F = (0, h.A)((e, t) => {
                    if (null == o) return;
                    let n = e - t.left,
                        l = (0, u.hc)(n, t, i);
                    (null != r && l > r) || o(l);
                }),
                G = l.useCallback(
                    (e) => {
                        let { key: r } = e;
                        r === x.N$.ArrowLeft && null != t
                            ? (e.preventDefault(), e.stopPropagation(), t())
                            : r === x.N$.ArrowRight && null != n && (e.preventDefault(), e.stopPropagation(), n());
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
                    boundingRect: v,
                    handleMouseEnter: function (e) {
                        a && (y(!0), D(e));
                    },
                    handleMouseLeave: function (e) {
                        a && !I.current && (y(!1), E(null), R(!1));
                    },
                    handleMouseMove: function (e) {
                        a && P && D(e);
                    },
                    handleMouseDown: function (e) {
                        if (!a || null == o || 0 !== e.button) return;
                        B.current?.();
                        let t = e.currentTarget.getBoundingClientRect(),
                            n = (0, u.hc)(e.clientX - t.left, t, i);
                        if (null != r && n > r) return;
                        ((I.current = !0), C(!0), c?.(!0));
                        let l = Math.max(0, Math.min(e.clientX - t.left, t.width));
                        function s(e) {
                            if (null != j.current) {
                                let t = j.current.getBoundingClientRect(),
                                    n = Math.max(0, Math.min(e.clientX - t.left, t.width)),
                                    l = null != r ? (r / i) * t.width : null,
                                    a = null != l ? Math.min(n, l) : n;
                                (R(null != l && n > l), E(n), N(a), d?.(a), F(e.clientX, t));
                            } else F(e.clientX, t);
                        }
                        function f(e) {
                            ((I.current = !1),
                                (B.current = null),
                                C(!1),
                                N(null),
                                c?.(!1),
                                R(!1),
                                null != j.current &&
                                    (((0, m.vq)(e.target, Node) && j.current.contains(e.target)) || (y(!1), E(null))),
                                window.removeEventListener("mousemove", s),
                                window.removeEventListener("mouseup", f));
                        }
                        (N(l),
                            d?.(l),
                            F(e.clientX, t),
                            window.addEventListener("mousemove", s),
                            window.addEventListener("mouseup", f),
                            (B.current = () => {
                                (window.removeEventListener("mousemove", s), window.removeEventListener("mouseup", f));
                            }));
                    },
                    handleKeyDown: G,
                    hoveredAtX: b,
                    maxSeekableX: M,
                    isHovering: P,
                    isDragging: S,
                    dragX: w,
                    isHoverBeyondMax: A,
                    handleClick: function () {},
                    ariaProps: T,
                }
            );
        })({
            onScrubBack: F,
            onScrubForward: G,
            maxSeekableTime: L,
            interactionEnabled: d,
            durationSec: R,
            percent: n,
            onClick: B,
            onDragStateChange: $,
            onDragXChange: (e) => ex.set(e),
        }),
        ec = l.useMemo(() => (null == et || null == W ? null : (0, u.hc)(et, W, R)), [et, W, R]),
        ed = l.useMemo(() => (null == ec ? null : (0, u.rB)(ec)), [ec]),
        em = l.useMemo(() => (null == U || null == ec ? null : (0, b.B8)(U, ec)), [U, ec]),
        ef = l.useMemo(() => {
            if (null != W) return (0, u.TO)(n, W);
        }, [n, W]),
        ep = W?.width != null && W?.width !== 0 ? W?.width : 1,
        eh = l.useMemo(() => A?.map((e) => ({ startPx: e.start * ep, endPx: (e.start + e.size) * ep })) ?? [], [A, ep]),
        [{ playbackPxSpring: ex }, ev] = (0, s.z)(() => ({ playbackPxSpring: 0, config: C })),
        eg = l.useRef(el);
    l.useLayoutEffect(() => {
        let e = eg.current;
        ((eg.current = el),
            e && !el && ev({ playbackPxSpring: null == ef || Number.isNaN(ef) ? 0 : ef, immediate: !0 }));
    }, [el, ef, ev]);
    let eb = l.useRef(null),
        eE = l.useRef(null),
        eP = l.useRef(null);
    l.useEffect(() => {
        if (!a || null == O || R <= 0 || ep <= 0) return;
        ((eE.current = eb.current ?? O()), (eP.current = performance.now()));
        let e = 0,
            t = !1;
        return (
            (e = requestAnimationFrame(function n() {
                if (t || null == O) return;
                let r = performance.now(),
                    l = eP.current;
                eP.current = r;
                let a = eE.current;
                if (null != a) {
                    a += null != l ? (r - l) / 1e3 : 0;
                    let e = O();
                    if (null != e && Number.isFinite(e)) {
                        let t = e - a;
                        a = Math.abs(t) > 0.5 ? e : a + 0.1 * t;
                    }
                } else a = O() ?? null;
                if (null != a && Number.isFinite(a)) {
                    ((eE.current = a), (eb.current = a));
                    let e = Math.min(Math.max(0, (a / R) * ep), ep);
                    ex.set(e);
                }
                e = requestAnimationFrame(n);
            })),
            () => {
                ((t = !0), cancelAnimationFrame(e), (eE.current = null), (eP.current = null));
            }
        );
    }, [a, O, R, ep, ex]);
    let ey = a && null != O && R > 0;
    l.useEffect(() => {
        let e;
        if (!ey) {
            if (null != O && R > 0 && ep > 0) {
                let t = O();
                null != t && Number.isFinite(t) && ((eb.current = t), (e = Math.min(Math.max(0, (t / R) * ep), ep)));
            }
            (null == e && (e = null == ef || Number.isNaN(ef) ? 0 : ef), ev({ playbackPxSpring: e, immediate: !0 }));
        }
    }, [ef, ey, ev, O, R, ep]);
    let eS = R > 1,
        eC = H?.indicators,
        ew = l.useMemo(() => {
            let e;
            return null != eC && null != W && eS
                ? ((e = W.width),
                  eC.map((t) => {
                      let n = Math.max(
                          0,
                          Math.min(
                              (0, u.DX)(t.timeSec, R, W) -
                                  ("start" === t.align ? 0 : "end" === t.align ? t.widthPx : t.widthPx / 2),
                              e - t.widthPx,
                          ),
                      );
                      return { leftPx: n, rightPx: n + t.widthPx, gapPx: t.gapPx, index: t.index, source: t };
                  }))
                : void 0;
        }, [eC, R, W, eS]),
        eN = l.useMemo(
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
                })(ep, ew),
            [ep, ew],
        ),
        eA = H?.hoverExpansionPx ?? 0,
        eR = l.useCallback(
            (e) =>
                null != e &&
                null != ew &&
                ew.some(
                    (t) =>
                        e >= t.leftPx - t.gapPx - (H?.animatingIndex === t.index ? eA : 0) &&
                        e <= t.rightPx + t.gapPx + (H?.animatingIndex === t.index ? eA : 0),
                ),
            [ew, H?.animatingIndex, eA],
        );
    return (0, r.jsx)("div", {
        className: i()(P.jD, { [P.Wd]: null != T }),
        ref: Y,
        "data-testid": K,
        style: {
            "--custom-timeline-height": `${null != X && er ? X : V}px`,
            "--custom-initial-timeline-height": `${D ?? V}px`,
            "--custom-timeline-track-background": E,
        },
        children: (0, r.jsxs)(c.D, {
            className: i()(P.KF, { [P.uc]: d }),
            focusProps: { enabled: t, ringClassName: P.Rg },
            style: ei ? { cursor: "default" } : void 0,
            ignoreKeyPress: !0,
            onClick: eo,
            onMouseDown: eu,
            onMouseEnter: Z,
            onMouseLeave: q,
            onMouseMove: J,
            onKeyDown: ee,
            tabIndex: d ? void 0 : -1,
            children: [
                (0, r.jsx)("div", {
                    className: P.PH,
                    ...es,
                    children:
                        null != W &&
                        eN.map((e, t) =>
                            (0, r.jsx)(
                                S,
                                {
                                    segment: e,
                                    playbackPxSpring: ex,
                                    playerState: w,
                                    isDragging: el,
                                    dragX: ea,
                                    animatingIndex: H?.animatingIndex,
                                    expansionSpring: H?.expansionSpring,
                                    timelineWidth: ep,
                                    bufferedRanges: eh,
                                    maxSeekableX: en,
                                    segmentBorderRadius: k,
                                    progressClassName: T,
                                },
                                t,
                            ),
                        ),
                }),
                null != W &&
                    ew?.map((e) => {
                        var t;
                        return H?.renderIndicator(
                            e,
                            null != ef && !Number.isNaN(ef) ? ef : 0,
                            !0 === e.source.clickable && null != _ ? () => _(e.source.timeSec) : void 0,
                            ((t = (0, u.DX)(e.source.timeSec, R, W)),
                            null != en && t < en
                                ? "var(--custom-timeline-seekable-background)"
                                : eh.some((e) => e.startPx <= t && t <= e.endPx)
                                  ? "var(--custom-timeline-buffered-background)"
                                  : "var(--custom-timeline-track-background)"),
                        );
                    }),
                (0, r.jsx)(N, {
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
                    (0, r.jsx)(y, { playbackPxSpring: ex, isDragging: el, dragX: ea }),
            ],
        }),
    });
}
function N(e) {
    let {
        isHovering: t,
        hoveredAtX: n,
        hoveredTimeSec: l,
        formattedTime: a,
        isFullyVisible: i,
        isInExclusionZone: o,
        scrubPreviewCue: u,
        timelineWidthPx: s,
    } = e;
    return !t || null == n || !i || o(n)
        ? null
        : null != u && null != l
          ? (0, r.jsx)(b.wb, { cue: u, timeSec: l, cursorXPx: n, timelineWidthPx: s })
          : null == a
            ? null
            : (0, r.jsx)(d.E, {
                  className: P.Hz,
                  variant: "body-xs/normal",
                  color: "text-overlay-light",
                  tabularNumbers: !0,
                  style: { left: `${n}px` },
                  children: a,
              });
}
