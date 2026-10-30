(s.d(t, { A: () => b }), s(508300));
var a = s(477900),
    i = s(582128),
    n = s(503698),
    l = s.n(n),
    r = s(722872),
    o = s(661531),
    u = s(602853),
    h = s(765671);
function d(e, t) {
    let s = e.getBoundingClientRect();
    return Math.min(1, Math.max(0, (t.clientX - s.left) / s.width));
}
var c = s(998304),
    p = s(934581),
    m = s(539451);
s(518950);
var g = s(587159);
let f = [0, 0, 0, 0, 0];
function v(e) {
    let { showAll: t, currentTime: s, duration: a, numSegments: i } = e;
    return t ? i : Math.max(0, Math.round((s / a) * i));
}
function y(e) {
    var t, s, a, i;
    let { context: n, devicePixelRatio: l, canvasHeight: r, segmentValue: o, segmentIndex: u, constrainMin: h } = e,
        d = h ? 22 * o + 2 : 24 * o;
    0 !== d &&
        ((t = 6 * u * l),
        (s = (r / 2 - d / 2) * l),
        (a = d * l),
        (i = +l),
        n.moveTo(t, s + i),
        n.lineTo(t, s + a - i),
        n.arc(t + i, s + a - i, i, Math.PI, 0, !0),
        n.lineTo(t + 2 * i, s + i),
        n.arc(t + i, s + i, i, 0, Math.PI, !0),
        n.closePath());
}
function S(e, t, s) {
    let [a, n] = i.useState(e),
        [l, r] = i.useState(e),
        o = i.useRef(l);
    return (
        i.useLayoutEffect(() => {
            o.current = l;
        }),
        i.useLayoutEffect(() => {
            (n(o.current), r(e));
        }, [e, t, s]),
        [a, l]
    );
}
function C(e, t, s, a) {
    if (null == a) return [t, !1];
    let i = Math.min((s - a) / 200, 1);
    return 1 === i ? [t, !1] : [(0, c.De)(e, t, i), !0];
}
function T(e, t, s) {
    if (null == e) return 1;
    let a = Math.max(0, Math.min(e - (s > 1 ? (t / (s - 1)) * 60 : 0), 100));
    return Math.max(0, r.easeOutBack(a, 0, 1, 100, 2));
}
function b(e) {
    let t,
        s,
        {
            className: n,
            fluid: r = !1,
            neutralPlaybackColors: c = !1,
            animateOnMount: b = !1,
            waveform: x,
            currentTime: M,
            duration: w,
            played: A,
            playing: _,
            onDrag: D,
            onDragStart: k,
            onDragEnd: R,
        } = e,
        { ref: E, width: P } = (0, h.Ay)(),
        V = i.useMemo(
            () =>
                6 *
                    Math.floor(
                        ((w <= 0.5 ? 40 : w >= 45 ? 294 : ((Math.min(w, 45) - 0.5) / 44.5) * 254 + 40) + 4) / 6,
                    ) -
                4,
            [w],
        ),
        N = i.useRef(void 0),
        I =
            ((t = i.useMemo(
                () =>
                    (function (e) {
                        let t;
                        if (null == e) return;
                        try {
                            t = window.atob(e);
                        } catch (e) {
                            return;
                        }
                        let s = [];
                        for (let e = 0; e < t.length; e++) s[e] = t.charCodeAt(e) / 255;
                        return s;
                    })(x),
                [x],
            )),
            (s = i.useMemo(
                () =>
                    (function (e) {
                        if (null != e) return Math.floor((e + 4) / 6);
                    })(P),
                [P],
            )),
            i.useMemo(
                () =>
                    (function (e, t, s) {
                        if (null != e && null != t) {
                            if (e.length < t) {
                                if (s)
                                    return 0 === e.length
                                        ? Array(t).fill(0)
                                        : 1 === e.length
                                          ? Array(t).fill(e[0])
                                          : Array.from({ length: t }, (s, a) => {
                                                let i = (a * (e.length - 1)) / (t - 1),
                                                    n = Math.floor(i),
                                                    l = Math.min(e.length - 1, n + 1),
                                                    r = i - n;
                                                return e[n] * (1 - r) + e[l] * r;
                                            });
                                let a = t - e.length;
                                return e.concat(Array(a).fill(0));
                            }
                            return (0, p.A)(e, t);
                        }
                    })(t ?? [], s, r) ?? f,
                [t, s, r],
            )),
        j = _ && !c,
        L = i.useRef(A),
        U = i.useRef(j),
        O = i.useRef(null),
        W = i.useRef(null),
        B = i.useRef(b),
        F = window.devicePixelRatio,
        {
            lastBackgroundFillColor: H,
            backgroundFillColor: z,
            lastActiveFillColor: K,
            activeFillColor: q,
            lastInactiveFillColor: G,
            inactiveFillColor: Y,
        } = (function (e, t) {
            let s = (0, u.r)(o.A.colors.BACKGROUND_MOD_MUTED).hex(),
                a = (0, u.r)(o.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
                i = (0, u.r)(o.A.colors.INTERACTIVE_TEXT_ACTIVE).hex(),
                n = (0, u.r)(o.A.unsafe_rawColors.BRAND_430).hex(),
                l = (0, u.r)(o.A.unsafe_rawColors.WHITE).hex(),
                r = t ? n : s,
                [h, d] = S(r, t, e),
                [c, p] = S(t ? l : e ? i : a, t, e),
                [m, g] = S(e ? r : a, t, e);
            return {
                lastBackgroundFillColor: h,
                backgroundFillColor: d,
                lastActiveFillColor: c,
                activeFillColor: p,
                lastInactiveFillColor: m,
                inactiveFillColor: g,
            };
        })(A, j),
        $ = { currentTime: M, duration: w, played: A },
        X = i.useRef($);
    (i.useEffect(() => {
        X.current = $;
    }),
        i.useEffect(() => {
            ((W.current = null), (B.current = b));
        }, [b, I]),
        i.useEffect(() => {
            let { currentTime: e, duration: t, played: s } = X.current,
                a = v({ showAll: !s, currentTime: e, duration: t, numSegments: I.length });
            N.current = I.map((e, t) => new m.A(t < a ? e : 0));
        }, [I]),
        i.useEffect(() => {
            let e = N.current;
            if (null == e) return;
            let t = v({ showAll: !A, currentTime: M, duration: w, numSegments: I.length });
            for (let s = 0; s < e.length; s++) {
                let a = e[s];
                if (s < t) {
                    a.animateTo(I[s]);
                    continue;
                }
                a.reset();
            }
        }, [I, M, w, A]),
        i.useEffect(() => {
            let e = null;
            return (
                (e = requestAnimationFrame(function t(s) {
                    let a = E.current,
                        i = a?.getContext("2d"),
                        n = N.current;
                    if (null == a || null == i || null == n) return;
                    let l = !1;
                    B.current && ((B.current = !1), (W.current = s));
                    let r = null;
                    if (null != W.current) {
                        let e = s - W.current;
                        e < 160 ? ((r = e), (l = !0)) : (W.current = null);
                    }
                    ((L.current !== A || U.current !== j) && ((L.current = A), (U.current = j), (O.current = s)),
                        null != O.current && s > O.current + 200 && (O.current = null));
                    let o = a.height / F;
                    (i.clearRect(0, 0, a.width, a.height), i.beginPath());
                    let [u, h] = C(H, z, s, O.current);
                    ((l = l || h), (i.fillStyle = u));
                    for (let e = 0; e < I.length; e++) {
                        let t = T(r, e, I.length);
                        y({
                            context: i,
                            devicePixelRatio: F,
                            canvasHeight: o,
                            segmentValue: I[e] * t,
                            segmentIndex: e,
                            constrainMin: !0,
                        });
                    }
                    i.fill();
                    let [d, c] = C(G, Y, s, O.current);
                    l = l || c;
                    let [p, m] = C(K, q, s, O.current);
                    l = l || m;
                    for (let e = 0; e < n.length; e++) {
                        let t = n[e],
                            s = T(r, e, n.length),
                            a = Math.max(t.getCurrentValue(), I[e] - 0.1) * s;
                        (i.beginPath(),
                            (i.fillStyle = t.isReset ? d : p),
                            y({
                                context: i,
                                devicePixelRatio: F,
                                canvasHeight: o,
                                segmentValue: a,
                                segmentIndex: e,
                                constrainMin: !t.isReset,
                            }),
                            (l = l || t.isAnimating()),
                            i.fill());
                    }
                    l && (e = requestAnimationFrame(t));
                })),
                () => {
                    null != e && cancelAnimationFrame(e);
                }
            );
        }, [E, F, I, P, b, M, w, A, j, H, z, K, q, G, Y]));
    let [, Z] = (function (e) {
        let { ref: t, onDrag: s, onDragStart: a, onDragEnd: n } = e,
            [l, r] = i.useState(!1);
        return (
            i.useEffect(() => {
                if (l)
                    return (
                        window.addEventListener("mouseup", e),
                        window.addEventListener("mousemove", a),
                        () => {
                            (window.removeEventListener("mouseup", e), window.removeEventListener("mousemove", a));
                        }
                    );
                function e() {
                    (n?.(), r(!1));
                }
                function a(e) {
                    let a = t.current;
                    null != a && s?.(d(a, e));
                }
            }, [t, l, n, s]),
            [
                l,
                i.useCallback(
                    (e) => {
                        e.preventDefault();
                        let i = t.current;
                        null != i && (r(!0), a?.(), s?.(d(i, e)));
                    },
                    [t, a, s],
                ),
            ]
        );
    })({ ref: E, onDrag: D, onDragStart: k, onDragEnd: R });
    return (0, a.jsx)("canvas", {
        onMouseDown: Z,
        className: l()(g.J, n),
        style: r ? void 0 : { width: V },
        ref: E,
        height: 32 * window.devicePixelRatio,
        width: (P ?? 0) * window.devicePixelRatio,
    });
}
