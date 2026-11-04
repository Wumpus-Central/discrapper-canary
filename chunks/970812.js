var i = n(477900),
    r = n(582128),
    a = n(503698),
    l = n.n(a),
    s = n(172218),
    u = n(855986),
    o = n(775602),
    c = n(495867),
    g = n(531685),
    h = n(25639),
    f = n(707020);
let d = "ease-in-out",
    m = [8, 16, 11, 13, 6],
    S = Array.from({ length: 5 }, (t, e) => e),
    x = [2, 2, 5, 2, 2],
    v = [3, 3, 10, 6, 3],
    D = [3, 3, 7, 12, 6],
    E = [3, 3, 5, 10, 16],
    w = [3, 3, 8, 13, 7],
    N = [4, 6, 12, 9, 6],
    y = [6, 10, 9, 16, 8],
    T =
        "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
    p = `translate(${12.33 - 12.50625}, ${-11.923125}) scale(0.83375)`;
function A(t, e) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 16;
    for (let a = 0; a < 5; a++) {
        let l = n[a],
            s = R(-e, e);
        t[a] = Math.max(i, Math.min(r, l + s));
    }
    return t;
}
function R(t, e) {
    return Math.random() * (e - t) + t;
}
let M = {
    [h.s.GENTLE_AMBIENT]: {
        firstState: "burst",
        transitionConfig: { durationMs: 180, timingFunction: d },
        states: {
            burst: {
                getHeights: (t) => A(t, 4),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (t) => A(t, 3),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [h.s.GENTLE_AMBIENT_WITH_INTRO]: {
        firstState: "introSilent",
        transitionConfig: { durationMs: 100, timingFunction: d },
        states: {
            introSilent: {
                getHeights: (t) =>
                    (function (t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                        for (let i = 0; i < 5; i++) t[i] = n + R(0, e);
                        return t;
                    })(t),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(32, 64),
                getNextState: () => "waveBuildCenter",
            },
            waveBuildCenter: {
                getHeights: (t) => A(t, 3, x),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(32, 64),
                getNextState: () => "waveBuildRight1",
            },
            waveBuildRight1: {
                getHeights: (t) => A(t, 4, v, 1),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(32, 64),
                getNextState: () => "waveBuildRight2",
            },
            waveBuildRight2: {
                getHeights: (t) => A(t, 4, D, 1),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(32, 64),
                getNextState: () => "wavePeakRight",
            },
            wavePeakRight: {
                getHeights: (t) => A(t, 4, E, 1),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(32, 64),
                getNextState: () => "waveReturnLeft1",
            },
            waveReturnLeft1: {
                getHeights: (t) => A(t, 5, w),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(32, 64),
                getNextState: () => "waveReturnLeft2",
            },
            waveReturnLeft2: {
                getHeights: (t) => A(t, 5, N),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(32, 64),
                getNextState: () => "burst",
            },
            burst: {
                getHeights: (t) => A(t, 4),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (t) => A(t, 3),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [h.s.HIGH_CONTRAST]: {
        firstState: "burst",
        transitionConfig: { durationMs: 120, timingFunction: d },
        states: {
            burst: {
                getHeights: (t) => A(t, 7, y),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (t) => A(t, 4, y),
                getAnimationDelay: () => R(64, 128),
                getStateDuration: () => R(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
};
function b(t) {
    let { iconSize: e = 20, locked: n = !1, maskId: r } = t;
    return n
        ? (0, i.jsx)("defs", {
              children: (0, i.jsxs)("mask", {
                  id: r,
                  children: [
                      (0, i.jsx)("rect", { width: e, height: e, fill: "white" }),
                      (0, i.jsx)("rect", { x: 11.33, y: 0, width: 8.67, height: 9.5, fill: "black", rx: 1 }),
                  ],
              }),
          })
        : null;
}
function j(t) {
    let e,
        n,
        a,
        {
            color: o = "currentColor",
            className: c,
            animationStyle: d = h.s.GENTLE_AMBIENT,
            iconSize: m = 20,
            locked: x = !1,
        } = t,
        v = r.useId(),
        D = (0, u.bG)([g.A], () => g.A.isAppFocused()),
        [E, w] = r.useState(!1),
        N = r.useCallback((t) => {
            w((e) => (e !== t ? t : e));
        }, []),
        y = (0, s.K)(N, 0.15),
        A = r.useRef([, , , , ,].fill(0)),
        R = M[d],
        j = !D || !E,
        k = (m - 18) / 2,
        H = j ? 0 : R.transitionConfig.durationMs,
        C = r.useRef(null),
        I = r.useMemo(
            () => ({
                transitionProperty: "transform",
                transitionDuration: `${H}ms`,
                transitionTimingFunction: R.transitionConfig.timingFunction,
            }),
            [R.transitionConfig.timingFunction, H],
        ),
        _ = r.useMemo(() => ({ ...I, width: 2, height: 16, backgroundColor: o }), [I, o]),
        B = r.useMemo(() => ({ left: k, top: (m - 16) / 2, width: 18, height: 16, columnGap: 2 }), [m, k, 18]),
        G = r.useCallback(
            (t) => {
                let e = C.current;
                if (null == e) return;
                let n = e.children;
                for (let e = 0; e < 5; e++) {
                    let i = n.item(e);
                    if (null == i) continue;
                    let r = t[e],
                        a = Math.max(2, Math.min(16, "number" == typeof r && Number.isFinite(r) ? r : 2)) / 16;
                    i.style.transform = `scaleY(${a})`;
                }
            },
            [C],
        );
    (r.useLayoutEffect(() => {
        j || G(R.states[R.firstState].getHeights(A.current));
    }, [G, R, j]),
        (e = r.useRef(R.firstState)),
        (n = r.useRef(null)),
        (a = !j),
        r.useEffect(() => {
            if (!a) return;
            ((e.current = R.firstState), (n.current = null));
            let t = null,
                i = !1;
            n.current = { now: Date.now(), stateEnterTime: Date.now(), stateEndTime: 0 };
            let r = n.current;
            function l(t) {
                r.stateEnterTime = r.now;
                let e = t.getStateDuration();
                r.stateEndTime = e > 0 ? r.now + e : 0;
            }
            function s() {
                null != t && (clearTimeout(t), (t = null));
            }
            let u = R.states[e.current];
            return (
                null != u && l(u),
                (function n(a) {
                    (s(),
                        i ||
                            (t = setTimeout(
                                () => {
                                    ((t = null),
                                        i ||
                                            (function () {
                                                if (i) return;
                                                ((t = null), (r.now = Date.now()));
                                                let a = e.current,
                                                    s = R.states[a];
                                                if (null == s) {
                                                    ((e.current = R.firstState), n(0));
                                                    return;
                                                }
                                                try {
                                                    let t = s.getHeights(A.current);
                                                    G(t);
                                                } catch (t) {
                                                    i = !0;
                                                    return;
                                                }
                                                if (0 === r.stateEndTime || r.now >= r.stateEndTime) {
                                                    let t = s.getNextState();
                                                    e.current = t;
                                                    let n = R.states[t];
                                                    null != n && l(n);
                                                }
                                                n(s.getAnimationDelay());
                                            })());
                                },
                                Math.max(0, a),
                            )));
                })(0),
                () => {
                    ((i = !0), s());
                }
            );
        }, [G, a, R, A]));
    let L = x ? `url(#${v})` : void 0;
    return (0, i.jsx)("span", {
        ref: y,
        className: l()(c, f.Aj),
        children: (0, i.jsxs)("svg", {
            width: m,
            height: m,
            viewBox: `0 0 ${m} ${m}`,
            fill: "none",
            children: [
                (0, i.jsx)(b, { iconSize: m, locked: x, maskId: v }),
                (0, i.jsx)("g", {
                    mask: L,
                    children: (0, i.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: m,
                        height: m,
                        children: (0, i.jsx)("div", {
                            className: f.FH,
                            children: (0, i.jsx)("div", {
                                ref: C,
                                className: f.Gb,
                                style: B,
                                children: S.map((t) => (0, i.jsx)("div", { className: f.M0, style: _ }, t)),
                            }),
                        }),
                    }),
                }),
                x && (0, i.jsx)("path", { d: T, transform: p, fill: o, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function k(t) {
    let { color: e = "currentColor", className: n, iconSize: a = 20, locked: l = !1 } = t,
        s = r.useId(),
        u = (a - 18) / 2,
        o = l ? `url(#${s})` : void 0;
    return (0, i.jsx)("span", {
        className: n,
        style: { display: "inline-flex", pointerEvents: "none", contain: "strict", width: a, height: a },
        children: (0, i.jsxs)("svg", {
            width: a,
            height: a,
            viewBox: `0 0 ${a} ${a}`,
            fill: "none",
            children: [
                (0, i.jsx)(b, { iconSize: a, locked: l, maskId: s }),
                (0, i.jsx)("g", {
                    mask: o,
                    children: m.map((t, n) => {
                        let r = (a - t) / 2;
                        return (0, i.jsx)("rect", { x: u + 4 * n, y: r, width: 2, height: t, rx: 1, fill: e }, n);
                    }),
                }),
                l && (0, i.jsx)("path", { d: T, transform: p, fill: e, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
n.d(
    e,
    {},
    {
        A: function (t) {
            let {
                    color: e = "currentColor",
                    className: n,
                    iconSize: a = 20,
                    animationStyle: l = h.s.GENTLE_AMBIENT,
                    locked: s = !1,
                } = t,
                g = (0, u.bG)([o.Ay], () => o.Ay.useReducedMotion),
                f = (0, u.bG)([c.A], () => c.A.isConnected()),
                [d, m] = r.useState(f);
            return (r.useEffect(() => {
                if (f) {
                    let t = setTimeout(() => m(!0), 800);
                    return () => clearTimeout(t);
                }
                m(!1);
            }, [f]),
            g || d)
                ? (0, i.jsx)(k, { color: e, className: n, iconSize: a, locked: s })
                : (0, i.jsx)(j, { color: e, className: n, animationStyle: l, iconSize: a, locked: s });
        },
    },
);
