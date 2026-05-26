n.d(t, { A: () => I });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(172218),
    u = n(17928),
    o = n(775602),
    c = n(763827),
    d = n(531685),
    g = n(25639),
    h = n(63727);
let f = "ease-in-out",
    m = [8, 16, 11, 13, 6],
    A = Array.from({ length: 5 }, (e, t) => t),
    N = [2, 2, 5, 2, 2],
    x = [3, 3, 10, 6, 3],
    E = [3, 3, 7, 12, 6],
    v = [3, 3, 5, 10, 16],
    S = [3, 3, 8, 13, 7],
    D = [4, 6, 12, 9, 6],
    b = [6, 10, 9, 16, 8],
    T = 6.67 / 8,
    j =
        "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
    y = `translate(${12.33 - 15 * T}, ${1 - 15.5 * T}) scale(${T})`;
function M(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 16;
    for (let l = 0; l < 5; l++) {
        let r = n[l],
            s = p(-t, t);
        e[l] = Math.max(i, Math.min(a, r + s));
    }
    return e;
}
function p(e, t) {
    return Math.random() * (t - e) + e;
}
let R = {
    [g.s.GENTLE_AMBIENT]: {
        firstState: "burst",
        transitionConfig: { durationMs: 180, timingFunction: f },
        states: {
            burst: {
                getHeights: (e) => M(e, 4),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => M(e, 3),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [g.s.GENTLE_AMBIENT_WITH_INTRO]: {
        firstState: "introSilent",
        transitionConfig: { durationMs: 100, timingFunction: f },
        states: {
            introSilent: {
                getHeights: (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                        for (let i = 0; i < 5; i++) e[i] = n + p(0, t);
                        return e;
                    })(e),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "waveBuildCenter",
            },
            waveBuildCenter: {
                getHeights: (e) => M(e, 3, N),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "waveBuildRight1",
            },
            waveBuildRight1: {
                getHeights: (e) => M(e, 4, x, 1),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "waveBuildRight2",
            },
            waveBuildRight2: {
                getHeights: (e) => M(e, 4, E, 1),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "wavePeakRight",
            },
            wavePeakRight: {
                getHeights: (e) => M(e, 4, v, 1),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "waveReturnLeft1",
            },
            waveReturnLeft1: {
                getHeights: (e) => M(e, 5, S),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "waveReturnLeft2",
            },
            waveReturnLeft2: {
                getHeights: (e) => M(e, 5, D),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(32, 64),
                getNextState: () => "burst",
            },
            burst: {
                getHeights: (e) => M(e, 4),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => M(e, 3),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [g.s.HIGH_CONTRAST]: {
        firstState: "burst",
        transitionConfig: { durationMs: 120, timingFunction: f },
        states: {
            burst: {
                getHeights: (e) => M(e, 7, b),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => M(e, 4, b),
                getAnimationDelay: () => p(64, 128),
                getStateDuration: () => p(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
};
function C(e) {
    let { iconSize: t = 20, locked: n = !1, maskId: a } = e;
    return n
        ? (0, i.jsx)("defs", {
              children: (0, i.jsxs)("mask", {
                  id: a,
                  children: [
                      (0, i.jsx)("rect", { width: t, height: t, fill: "white" }),
                      (0, i.jsx)("rect", { x: 11.33, y: 0, width: 8.67, height: 9.5, fill: "black", rx: 1 }),
                  ],
              }),
          })
        : null;
}
function w(e) {
    let t,
        n,
        l,
        {
            color: o = "currentColor",
            className: c,
            animationStyle: f = g.s.GENTLE_AMBIENT,
            iconSize: m = 20,
            locked: N = !1,
        } = e,
        x = a.useId(),
        E = (0, u.bG)([d.A], () => d.A.isAppFocused()),
        [v, S] = a.useState(!1),
        D = a.useCallback((e) => {
            S((t) => (t !== e ? e : t));
        }, []),
        b = (0, s.K)(D, 0.15),
        T = a.useRef([, , , , ,].fill(0)),
        M = R[f],
        p = !E || !v,
        w = (m - 18) / 2,
        _ = p ? 0 : M.transitionConfig.durationMs,
        I = a.useRef(null),
        L = a.useMemo(
            () => ({
                transitionProperty: "transform",
                transitionDuration: `${_}ms`,
                transitionTimingFunction: M.transitionConfig.timingFunction,
            }),
            [M.transitionConfig.timingFunction, _],
        ),
        U = a.useMemo(() => ({ ...L, width: 2, height: 16, backgroundColor: o }), [L, o]),
        G = a.useMemo(() => ({ left: w, top: (m - 16) / 2, width: 18, height: 16, columnGap: 2 }), [m, w, 18]),
        k = a.useCallback(
            (e) => {
                let t = I.current;
                if (null == t) return;
                let n = t.children;
                for (let t = 0; t < 5; t++) {
                    let i = n.item(t);
                    if (null == i) continue;
                    let a = e[t],
                        l = Math.max(2, Math.min(16, "number" == typeof a && Number.isFinite(a) ? a : 2)) / 16;
                    i.style.transform = `scaleY(${l})`;
                }
            },
            [I],
        );
    a.useLayoutEffect(() => {
        p || k(M.states[M.firstState].getHeights(T.current));
    }, [k, M, p]),
        (t = a.useRef(M.firstState)),
        (n = a.useRef(null)),
        (l = !p),
        a.useEffect(() => {
            if (!l) return;
            (t.current = M.firstState), (n.current = null);
            let e = null,
                i = !1;
            n.current = { now: Date.now(), stateEnterTime: Date.now(), stateEndTime: 0 };
            let a = n.current,
                r = (e) => {
                    a.stateEnterTime = a.now;
                    let t = e.getStateDuration();
                    a.stateEndTime = t > 0 ? a.now + t : 0;
                },
                s = (t) => {
                    u(),
                        i ||
                            (e = setTimeout(
                                () => {
                                    (e = null), i || o();
                                },
                                Math.max(0, t),
                            ));
                },
                u = () => {
                    null != e && (clearTimeout(e), (e = null));
                },
                o = () => {
                    if (i) return;
                    (e = null), (a.now = Date.now());
                    let n = t.current,
                        l = M.states[n];
                    if (null == l) {
                        (t.current = M.firstState), s(0);
                        return;
                    }
                    try {
                        let e = l.getHeights(T.current);
                        k(e);
                    } catch (e) {
                        i = !0;
                        return;
                    }
                    if (0 === a.stateEndTime || a.now >= a.stateEndTime) {
                        let e = l.getNextState();
                        t.current = e;
                        let n = M.states[e];
                        null != n && r(n);
                    }
                    s(l.getAnimationDelay());
                },
                c = M.states[t.current];
            return (
                null != c && r(c),
                s(0),
                () => {
                    (i = !0), u();
                }
            );
        }, [k, l, M, T]);
    let H = N ? `url(#${x})` : void 0;
    return (0, i.jsx)("span", {
        ref: b,
        className: r()(c, h.Aj),
        children: (0, i.jsxs)("svg", {
            width: m,
            height: m,
            viewBox: `0 0 ${m} ${m}`,
            fill: "none",
            children: [
                (0, i.jsx)(C, { iconSize: m, locked: N, maskId: x }),
                (0, i.jsx)("g", {
                    mask: H,
                    children: (0, i.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: m,
                        height: m,
                        children: (0, i.jsx)("div", {
                            className: h.FH,
                            children: (0, i.jsx)("div", {
                                ref: I,
                                className: h.Gb,
                                style: G,
                                children: A.map((e) => (0, i.jsx)("div", { className: h.M0, style: U }, e)),
                            }),
                        }),
                    }),
                }),
                N && (0, i.jsx)("path", { d: j, transform: y, fill: o, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function _(e) {
    let { color: t = "currentColor", className: n, iconSize: l = 20, locked: r = !1 } = e,
        s = a.useId(),
        u = (l - 18) / 2,
        o = r ? `url(#${s})` : void 0;
    return (0, i.jsx)("span", {
        className: n,
        style: { display: "inline-flex", pointerEvents: "none", contain: "strict", width: l, height: l },
        children: (0, i.jsxs)("svg", {
            width: l,
            height: l,
            viewBox: `0 0 ${l} ${l}`,
            fill: "none",
            children: [
                (0, i.jsx)(C, { iconSize: l, locked: r, maskId: s }),
                (0, i.jsx)("g", {
                    mask: o,
                    children: m.map((e, n) => {
                        let a = (l - e) / 2;
                        return (0, i.jsx)("rect", { x: u + 4 * n, y: a, width: 2, height: e, rx: 1, fill: t }, n);
                    }),
                }),
                r && (0, i.jsx)("path", { d: j, transform: y, fill: t, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function I(e) {
    let {
            color: t = "currentColor",
            className: n,
            iconSize: l = 20,
            animationStyle: r = g.s.GENTLE_AMBIENT,
            locked: s = !1,
        } = e,
        d = (0, u.bG)([o.A], () => o.A.useReducedMotion),
        h = (0, u.bG)([c.A], () => c.A.isConnected()),
        [f, m] = a.useState(h);
    return (a.useEffect(() => {
        if (h) {
            let e = setTimeout(() => m(!0), 800);
            return () => clearTimeout(e);
        }
        m(!1);
    }, [h]),
    d || f)
        ? (0, i.jsx)(_, { color: t, className: n, iconSize: l, locked: s })
        : (0, i.jsx)(w, { color: t, className: n, animationStyle: r, iconSize: l, locked: s });
}
