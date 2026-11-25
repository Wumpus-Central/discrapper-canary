t.d(r, { p: () => M, A: () => C });
var n = t(477900),
    l = t(582128),
    a = t(503698),
    u = t.n(a),
    s = t(631903),
    o = t(855986),
    c = t(775602),
    i = t(218394),
    d = t(203632),
    f = t(855915),
    A = t(940622),
    m = t(442372),
    T = t(881106),
    E = t(284009),
    I = t.n(E),
    p = t(964486);
let h = 1e3 / 24,
    N = function (e) {
        let {
                minInterval: r = h,
                allowableMinInterval: t,
                droppedFramesCallbackThreshold: n,
                droppedFramesCallback: a,
                droppedFramesResetTime: u = 3e3,
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            s = l.useRef(r),
            o = l.useRef(0),
            c = l.useRef(void 0),
            i = l.useRef(void 0),
            d = l.useRef(!0),
            f = l.useRef(0),
            A = l.useRef(void 0),
            m = l.useCallback(() => {
                ((f.current = 0), null != A.current && (clearTimeout(A.current), (A.current = void 0)));
            }, []),
            T = l.useCallback(() => {
                ((d.current = !1), cancelAnimationFrame(o.current), clearTimeout(A.current));
            }, []),
            E = l.useCallback(
                (r) => {
                    if (!d.current) return;
                    (null == c.current && (c.current = r), null == i.current && (i.current = r));
                    let l = r - i.current;
                    (r - c.current > 1.5 * Math.min(t ?? 120, s.current) &&
                        ((f.current += 1),
                        null != A.current && clearTimeout(A.current),
                        (A.current = setTimeout(m, u)),
                        null != n &&
                            f.current > n &&
                            (I()(
                                null != a,
                                "useClock - If you set a dropped frames threshold, you must provide a droppedFramesCallback to do something when that threshold is hit",
                            ),
                            a() && (f.current = 0))),
                        (c.current = r),
                        l >= s.current - 3 && ((i.current = r), e(l)),
                        (o.current = requestAnimationFrame(E)));
                },
                [t, m, u, n, a, e],
            ),
            N = l.useCallback(() => {
                ((d.current = !0),
                    (i.current = void 0),
                    cancelAnimationFrame(o.current),
                    (o.current = requestAnimationFrame(E)));
            }, [E]);
        return (
            l.useEffect(() => {
                s.current = r;
            }, [r]),
            (0, p.Ay)(() => ((o.current = requestAnimationFrame(E)), () => T())),
            { stop: T, reset: N, ticking: d }
        );
    };
var y = t(942426),
    b = t(435558);
function v(e, r) {
    var t, n;
    if (null == e) return e;
    let l = (0, b.cloneDeep)(e),
        a =
            ((t = l.effects.reduce((e, r) => {
                let t = r.randomizedSources?.length ?? 0;
                return (t > 0 && (e = 0 === e ? t : Math.min(e, t)), e);
            }, 0)),
            null == (n = r) ? Math.floor(Math.random() * (t - 1 - 0 + 1) + 0) : Math.floor(n * t));
    return (
        (l.effects = l.effects.map(
            (e) => (
                null != e.randomizedSources && e.randomizedSources.length > 0 && (e.src = e.randomizedSources[a].src),
                e
            ),
        )),
        l
    );
}
(t(323874), t(14289), t(35956));
var S = t(676279),
    g = t(856383),
    R = t(666082);
let P = (e) => {
        let {
                layerConfig: r,
                animationType: t,
                ticking: a,
                time: u,
                hasPlayedThrough: o,
                setHasPlayedThrough: c,
                maxLoops: i,
                loopEnd: d,
                bannerAdjustment: f,
                imageData: A,
            } = e,
            m = !0,
            E = 0,
            [I, p] = l.useState("reset"),
            h = l.useRef(A?.src ?? r.src),
            [N, y] = l.useState(A?.src ?? r.src),
            b = l.useRef(null),
            v = (0, S.gm)() && null != r.loopDelay && r.loopDelay > 0 && A?.src != null;
        function P(e) {
            (0, S.gm)() && e !== I && p(e);
        }
        if (
            (l.useEffect(() => {
                if (!v || "layer" === I) return;
                let e = new AbortController();
                return (
                    !(async function () {
                        if (A?.src != null)
                            try {
                                if (null == b.current) {
                                    let r = await fetch(A.src, { signal: e.signal }),
                                        t = await r.blob();
                                    if (e.signal.aborted) return;
                                    b.current = t;
                                }
                                (h.current !== A?.src && URL.revokeObjectURL(h.current),
                                    (h.current = URL.createObjectURL(b.current)),
                                    y(() => h.current));
                            } catch (e) {
                                if ("AbortError" === e.name) return null;
                                g.A.captureException(e);
                            }
                    })(),
                    () => {
                        e.abort();
                    }
                );
            }, [I, v, y, A?.src]),
            l.useEffect(
                () => () => {
                    h.current !== A?.src && URL.revokeObjectURL(h.current);
                },
                [],
            ),
            a || (m = !1),
            u < r.start && (m = !1),
            !r.loop && u > r.duration + r.start && (m = !1),
            t === s.l.ANIMATION_TYPE_PERSISTENT && !o && null != i && u >= d && c(!0),
            r.loop && void 0 !== r.loopDelay && r.loopDelay > 0)
        ) {
            let e = r.duration + r.loopDelay;
            ((E = Math.floor((u - r.start) / e)),
                u - r.start - E * e > r.duration &&
                    (t === s.l.ANIMATION_TYPE_INTERMITTENT && !o && null != i && E >= i && c(!0), (m = !1)));
        }
        return m
            ? (P("layer"),
              (0, n.jsx)("img", {
                  src: N,
                  className: R.QZ,
                  style: { top: (r.position?.y ?? 0) - f, left: r.position?.x ?? 0 },
                  alt: "",
                  "aria-hidden": !0,
              }))
            : (P("reset"), (0, n.jsx)("img", { src: T.Ut, alt: "", "aria-hidden": !0 }));
    },
    M = (e) => {
        let {
                bannerAdjustment: r = 0,
                maxLoops: t,
                resetOnHover: a = !1,
                isHovering: o = !1,
                useOpacityOnHover: c = !0,
                autoPlay: i = !0,
                restartMethod: f,
                profileEffect: A,
                delayIntro: m = !0,
                restartKey: T,
                layerData: E,
            } = e,
            I = l.useRef(null),
            p = l.useMemo(() => A.effects.sort((e, r) => (e.zIndex ?? 0) - (r.zIndex ?? 0)), [A]),
            { accessibilityLabel: h } = A,
            { firstLoop: y, loopEnd: b } = l.useMemo(() => {
                let e = 0,
                    r = 1 / 0;
                return (
                    p.forEach((t) => {
                        let n = t.start + t.duration;
                        (n > e && (e = n), t.loop && t.start < r && (r = t.start));
                    }),
                    { firstLoop: r, loopEnd: e }
                );
            }, [p]),
            v = m ? 500 : 0.1,
            [S, g] = l.useState(-v),
            {
                stop: M,
                reset: _,
                ticking: C,
            } = N(
                l.useCallback((e) => {
                    g((r) => r + e);
                }, []),
            ),
            O = l.useRef(v);
        (l.useEffect(() => {
            O.current = v;
        }),
            l.useEffect(() => {
                g(-O.current);
            }, [A]));
        let [w, x] = l.useState(!1);
        return (
            l.useEffect(() => {
                null != T && (g(-O.current), x(!1), C.current || _());
            }, [T, _, C]),
            l.useEffect(() => {
                (!0 === i || o || (M(), g(0)),
                    !o && w && C.current && (M(), g(0)),
                    a &&
                        o &&
                        !C.current &&
                        (_(),
                        A.animationType === s.l.ANIMATION_TYPE_PERSISTENT ? g(f === d.HL.FromStart ? 0 : y) : g(0)));
            }, [o, w, y, a, M, _, C, A.animationType, i, f]),
            (0, n.jsx)("div", {
                ref: I,
                className: u()(R.yC, { [R.yo]: o && c }),
                "aria-label": h,
                role: "img",
                children: (0, n.jsx)("div", {
                    className: R.vW,
                    children: p.map((e, l) => {
                        if (
                            !C.current &&
                            A.animationType === s.l.ANIMATION_TYPE_PERSISTENT &&
                            null != A.staticFrameSrc &&
                            0 === l &&
                            !0 === i
                        ) {
                            let { staticFrameSrc: t } = A;
                            return (0, n.jsx)(
                                "img",
                                {
                                    className: R.QZ,
                                    style: { top: e.position?.y ?? 0 - r, left: e.position?.x ?? 0 },
                                    src: t,
                                    alt: "",
                                    "aria-hidden": !0,
                                },
                                e.src + l,
                            );
                        }
                        return (0, n.jsx)(
                            P,
                            {
                                layerConfig: e,
                                animationType: A.animationType,
                                ticking: C.current,
                                time: S,
                                hasPlayedThrough: w,
                                setHasPlayedThrough: x,
                                maxLoops: t,
                                loopEnd: b,
                                bannerAdjustment: r,
                                imageData: E?.[e.src],
                            },
                            e.src + l,
                        );
                    }),
                }),
            })
        );
    };
function _(e) {
    let {
            profileEffect: r,
            useThumbnail: t,
            bannerAdjustment: l = 0,
            isHovering: a = !1,
            useOpacityOnHover: s = !0,
        } = e,
        { reducedMotionSrc: o, thumbnailPreviewSrc: c, accessibilityLabel: i } = r;
    return (0, n.jsx)("div", {
        className: u()(R.yC, { [R.yo]: a && s }),
        "aria-label": i,
        role: "img",
        children: (0, n.jsx)("div", {
            className: R.vW,
            children: (0, n.jsx)("img", {
                src: t && !a ? c : o,
                className: R.QZ,
                style: { top: 0 - l },
                alt: "",
                "aria-hidden": !0,
            }),
        }),
    });
}
let C = function (e) {
    let r = (0, i.j)(),
        t = (0, o.bG)([c.Ay], () => c.Ay.useReducedMotion),
        a = (0, y.A)(e.skuId),
        u = (0, A.C)(a),
        d = (function (e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                [t, n] = l.useState(e),
                [a, u] = l.useState(r),
                [s, o] = l.useState(v(e, r));
            return (((0, b.isEqual)(t, e) && a === r) || (n(e), u(r), o(v(e, r))), s);
        })(a, l.useContext(m.A)),
        T = u ?? d,
        { autoPlay: E = !0, isHovering: I } = e,
        p = !!(
            (!r && e.shopPreview) ||
            (!r && a?.animationType === s.l.ANIMATION_TYPE_PERSISTENT) ||
            t ||
            (!1 === E && !1 === I)
        ),
        { loaded: h, layerData: N } = (0, f.A)({ skuId: a?.skuId, layers: p ? void 0 : a?.effects });
    return null != a && null != T && (r || e.shopPreview || a.animationType !== s.l.ANIMATION_TYPE_INTERMITTENT)
        ? p
            ? (0, n.jsx)(_, {
                  useThumbnail: e.useThumbnail,
                  profileEffect: T,
                  bannerAdjustment: e.bannerAdjustment,
                  isHovering: e.isHovering,
                  useOpacityOnHover: e.useOpacityOnHover,
              })
            : h
              ? (0, n.jsx)(M, { profileEffect: T, layerData: N, ...e })
              : null
        : null;
};
