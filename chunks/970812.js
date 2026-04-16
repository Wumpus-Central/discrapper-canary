n.d(t, { A: () => O });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(172218),
    o = n(311907),
    u = n(775602),
    d = n(383501),
    c = n(531685),
    A = n(25639),
    h = n(63727);
let f = "ease-in-out",
    E = [8, 16, 11, 13, 6],
    _ = Array.from({ length: 5 }, (e, t) => t),
    g = [2, 2, 5, 2, 2],
    m = [3, 3, 10, 6, 3],
    I = [3, 3, 7, 12, 6],
    N = [3, 3, 5, 10, 16],
    C = [3, 3, 8, 13, 7],
    L = [4, 6, 12, 9, 6],
    T = [6, 10, 9, 16, 8],
    x = 6.67 / 8,
    S =
        "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
    b = `translate(${12.33 - 15 * x}, ${1 - 15.5 * x}) scale(${x})`;
function v(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E,
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 16;
    for (let a = 0; a < 5; a++) {
        let r = n[a],
            s = D(-t, t);
        e[a] = Math.max(i, Math.min(l, r + s));
    }
    return e;
}
function D(e, t) {
    return Math.random() * (t - e) + e;
}
let p = {
    [A.s.GENTLE_AMBIENT]: {
        firstState: "burst",
        transitionConfig: { durationMs: 180, timingFunction: f },
        states: {
            burst: {
                getHeights: (e) => v(e, 4),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => v(e, 3),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [A.s.GENTLE_AMBIENT_WITH_INTRO]: {
        firstState: "introSilent",
        transitionConfig: { durationMs: 100, timingFunction: f },
        states: {
            introSilent: {
                getHeights: (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                        for (let i = 0; i < 5; i++) e[i] = n + D(0, t);
                        return e;
                    })(e),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveBuildCenter",
            },
            waveBuildCenter: {
                getHeights: (e) => v(e, 3, g),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveBuildRight1",
            },
            waveBuildRight1: {
                getHeights: (e) => v(e, 4, m, 1),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveBuildRight2",
            },
            waveBuildRight2: {
                getHeights: (e) => v(e, 4, I, 1),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "wavePeakRight",
            },
            wavePeakRight: {
                getHeights: (e) => v(e, 4, N, 1),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveReturnLeft1",
            },
            waveReturnLeft1: {
                getHeights: (e) => v(e, 5, C),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveReturnLeft2",
            },
            waveReturnLeft2: {
                getHeights: (e) => v(e, 5, L),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "burst",
            },
            burst: {
                getHeights: (e) => v(e, 4),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => v(e, 3),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [A.s.HIGH_CONTRAST]: {
        firstState: "burst",
        transitionConfig: { durationMs: 120, timingFunction: f },
        states: {
            burst: {
                getHeights: (e) => v(e, 7, T),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => v(e, 4, T),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
};
function y(e) {
    let { iconSize: t = 20, locked: n = !1, maskId: l } = e;
    return n
        ? (0, i.jsx)("defs", {
              children: (0, i.jsxs)("mask", {
                  id: l,
                  children: [
                      (0, i.jsx)("rect", { width: t, height: t, fill: "white" }),
                      (0, i.jsx)("rect", { x: 11.33, y: 0, width: 8.67, height: 9.5, fill: "black", rx: 1 }),
                  ],
              }),
          })
        : null;
}
function G(e) {
    let t,
        n,
        a,
        {
            color: u = "currentColor",
            className: d,
            animationStyle: f = A.s.GENTLE_AMBIENT,
            iconSize: E = 20,
            locked: g = !1,
        } = e,
        m = l.useId(),
        I = (0, o.bG)([c.A], () => c.A.isAppFocused()),
        [N, C] = l.useState(!1),
        L = l.useCallback((e) => {
            C((t) => (t !== e ? e : t));
        }, []),
        T = (0, s.K)(L, 0.15),
        x = l.useRef([, , , , ,].fill(0)),
        v = p[f],
        D = !I || !N,
        G = (E - 18) / 2,
        j = D ? 0 : v.transitionConfig.durationMs,
        O = l.useRef(null),
        P = l.useMemo(
            () => ({
                transitionProperty: "transform",
                transitionDuration: `${j}ms`,
                transitionTimingFunction: v.transitionConfig.timingFunction,
            }),
            [v.transitionConfig.timingFunction, j],
        ),
        F = l.useMemo(() => ({ ...P, width: 2, height: 16, backgroundColor: u }), [P, u]),
        M = l.useMemo(() => ({ left: G, top: (E - 16) / 2, width: 18, height: 16, columnGap: 2 }), [E, G, 18]),
        R = l.useCallback(
            (e) => {
                let t = O.current;
                if (null == t) return;
                let n = t.children;
                for (let t = 0; t < 5; t++) {
                    let i = n.item(t);
                    if (null == i) continue;
                    let l = e[t],
                        a = Math.max(2, Math.min(16, "number" == typeof l && Number.isFinite(l) ? l : 2)) / 16;
                    i.style.transform = `scaleY(${a})`;
                }
            },
            [O],
        );
    l.useLayoutEffect(() => {
        D || R(v.states[v.firstState].getHeights(x.current));
    }, [R, v, D]),
        (t = l.useRef(v.firstState)),
        (n = l.useRef(null)),
        (a = !D),
        l.useEffect(() => {
            if (!a) return;
            (t.current = v.firstState), (n.current = null);
            let e = null,
                i = !1;
            n.current = { now: Date.now(), stateEnterTime: Date.now(), stateEndTime: 0 };
            let l = n.current,
                r = (e) => {
                    l.stateEnterTime = l.now;
                    let t = e.getStateDuration();
                    l.stateEndTime = t > 0 ? l.now + t : 0;
                },
                s = (t) => {
                    o(),
                        i ||
                            (e = setTimeout(
                                () => {
                                    (e = null), i || u();
                                },
                                Math.max(0, t),
                            ));
                },
                o = () => {
                    null != e && (clearTimeout(e), (e = null));
                },
                u = () => {
                    if (i) return;
                    (e = null), (l.now = Date.now());
                    let n = t.current,
                        a = v.states[n];
                    if (null == a) {
                        (t.current = v.firstState), s(0);
                        return;
                    }
                    try {
                        let e = a.getHeights(x.current);
                        R(e);
                    } catch (e) {
                        i = !0;
                        return;
                    }
                    if (0 === l.stateEndTime || l.now >= l.stateEndTime) {
                        let e = a.getNextState();
                        t.current = e;
                        let n = v.states[e];
                        null != n && r(n);
                    }
                    s(a.getAnimationDelay());
                },
                d = v.states[t.current];
            return (
                null != d && r(d),
                s(0),
                () => {
                    (i = !0), o();
                }
            );
        }, [R, a, v, x]);
    let k = g ? `url(#${m})` : void 0;
    return (0, i.jsx)("span", {
        ref: T,
        className: r()(d, h.Aj),
        children: (0, i.jsxs)("svg", {
            width: E,
            height: E,
            viewBox: `0 0 ${E} ${E}`,
            fill: "none",
            children: [
                (0, i.jsx)(y, { iconSize: E, locked: g, maskId: m }),
                (0, i.jsx)("g", {
                    mask: k,
                    children: (0, i.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: E,
                        height: E,
                        children: (0, i.jsx)("div", {
                            className: h.FH,
                            children: (0, i.jsx)("div", {
                                ref: O,
                                className: h.Gb,
                                style: M,
                                children: _.map((e) => (0, i.jsx)("div", { className: h.M0, style: F }, e)),
                            }),
                        }),
                    }),
                }),
                g && (0, i.jsx)("path", { d: S, transform: b, fill: u, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function j(e) {
    let { color: t = "currentColor", className: n, iconSize: a = 20, locked: r = !1 } = e,
        s = l.useId(),
        o = (a - 18) / 2,
        u = r ? `url(#${s})` : void 0;
    return (0, i.jsx)("span", {
        className: n,
        style: { display: "inline-flex", pointerEvents: "none", contain: "strict", width: a, height: a },
        children: (0, i.jsxs)("svg", {
            width: a,
            height: a,
            viewBox: `0 0 ${a} ${a}`,
            fill: "none",
            children: [
                (0, i.jsx)(y, { iconSize: a, locked: r, maskId: s }),
                (0, i.jsx)("g", {
                    mask: u,
                    children: E.map((e, n) => {
                        let l = (a - e) / 2;
                        return (0, i.jsx)("rect", { x: o + 4 * n, y: l, width: 2, height: e, rx: 1, fill: t }, n);
                    }),
                }),
                r && (0, i.jsx)("path", { d: S, transform: b, fill: t, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function O(e) {
    let {
            color: t = "currentColor",
            className: n,
            iconSize: a = 20,
            animationStyle: r = A.s.GENTLE_AMBIENT,
            locked: s = !1,
        } = e,
        c = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        h = (0, o.bG)([d.A], () => d.A.isConnected()),
        [f, E] = l.useState(h);
    return (l.useEffect(() => {
        if (h) {
            let e = setTimeout(() => E(!0), 800);
            return () => clearTimeout(e);
        }
        E(!1);
    }, [h]),
    c || f)
        ? (0, i.jsx)(j, { color: t, className: n, iconSize: a, locked: s })
        : (0, i.jsx)(G, { color: t, className: n, animationStyle: r, iconSize: a, locked: s });
}
