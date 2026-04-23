l.d(t, { A: () => w });
var n = l(627968),
    i = l(64700),
    a = l(503698),
    s = l.n(a),
    r = l(172218),
    o = l(311907),
    u = l(775602),
    c = l(383501),
    d = l(531685),
    A = l(25639),
    h = l(63727);
let g = "ease-in-out",
    E = [8, 16, 11, 13, 6],
    f = Array.from({ length: 5 }, (e, t) => t),
    _ = [2, 2, 5, 2, 2],
    m = [3, 3, 10, 6, 3],
    I = [3, 3, 7, 12, 6],
    N = [3, 3, 5, 10, 16],
    L = [3, 3, 8, 13, 7],
    v = [4, 6, 12, 9, 6],
    C = [6, 10, 9, 16, 8],
    x = 6.67 / 8,
    T =
        "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
    p = `translate(${12.33 - 15 * x}, ${1 - 15.5 * x}) scale(${x})`;
function S(e, t) {
    let l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E,
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 16;
    for (let a = 0; a < 5; a++) {
        let s = l[a],
            r = b(-t, t);
        e[a] = Math.max(n, Math.min(i, s + r));
    }
    return e;
}
function b(e, t) {
    return Math.random() * (t - e) + e;
}
let D = {
    [A.s.GENTLE_AMBIENT]: {
        firstState: "burst",
        transitionConfig: { durationMs: 180, timingFunction: g },
        states: {
            burst: {
                getHeights: (e) => S(e, 4),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => S(e, 3),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [A.s.GENTLE_AMBIENT_WITH_INTRO]: {
        firstState: "introSilent",
        transitionConfig: { durationMs: 100, timingFunction: g },
        states: {
            introSilent: {
                getHeights: (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                        for (let n = 0; n < 5; n++) e[n] = l + b(0, t);
                        return e;
                    })(e),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(32, 64),
                getNextState: () => "waveBuildCenter",
            },
            waveBuildCenter: {
                getHeights: (e) => S(e, 3, _),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(32, 64),
                getNextState: () => "waveBuildRight1",
            },
            waveBuildRight1: {
                getHeights: (e) => S(e, 4, m, 1),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(32, 64),
                getNextState: () => "waveBuildRight2",
            },
            waveBuildRight2: {
                getHeights: (e) => S(e, 4, I, 1),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(32, 64),
                getNextState: () => "wavePeakRight",
            },
            wavePeakRight: {
                getHeights: (e) => S(e, 4, N, 1),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(32, 64),
                getNextState: () => "waveReturnLeft1",
            },
            waveReturnLeft1: {
                getHeights: (e) => S(e, 5, L),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(32, 64),
                getNextState: () => "waveReturnLeft2",
            },
            waveReturnLeft2: {
                getHeights: (e) => S(e, 5, v),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(32, 64),
                getNextState: () => "burst",
            },
            burst: {
                getHeights: (e) => S(e, 4),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => S(e, 3),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [A.s.HIGH_CONTRAST]: {
        firstState: "burst",
        transitionConfig: { durationMs: 120, timingFunction: g },
        states: {
            burst: {
                getHeights: (e) => S(e, 7, C),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => S(e, 4, C),
                getAnimationDelay: () => b(64, 128),
                getStateDuration: () => b(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
};
function y(e) {
    let { iconSize: t = 20, locked: l = !1, maskId: i } = e;
    return l
        ? (0, n.jsx)("defs", {
              children: (0, n.jsxs)("mask", {
                  id: i,
                  children: [
                      (0, n.jsx)("rect", { width: t, height: t, fill: "white" }),
                      (0, n.jsx)("rect", { x: 11.33, y: 0, width: 8.67, height: 9.5, fill: "black", rx: 1 }),
                  ],
              }),
          })
        : null;
}
function j(e) {
    let t,
        l,
        a,
        {
            color: u = "currentColor",
            className: c,
            animationStyle: g = A.s.GENTLE_AMBIENT,
            iconSize: E = 20,
            locked: _ = !1,
        } = e,
        m = i.useId(),
        I = (0, o.bG)([d.A], () => d.A.isAppFocused()),
        [N, L] = i.useState(!1),
        v = i.useCallback((e) => {
            L((t) => (t !== e ? e : t));
        }, []),
        C = (0, r.K)(v, 0.15),
        x = i.useRef([, , , , ,].fill(0)),
        S = D[g],
        b = !I || !N,
        j = (E - 18) / 2,
        G = b ? 0 : S.transitionConfig.durationMs,
        w = i.useRef(null),
        O = i.useMemo(
            () => ({
                transitionProperty: "transform",
                transitionDuration: `${G}ms`,
                transitionTimingFunction: S.transitionConfig.timingFunction,
            }),
            [S.transitionConfig.timingFunction, G],
        ),
        P = i.useMemo(() => ({ ...O, width: 2, height: 16, backgroundColor: u }), [O, u]),
        M = i.useMemo(() => ({ left: j, top: (E - 16) / 2, width: 18, height: 16, columnGap: 2 }), [E, j, 18]),
        R = i.useCallback(
            (e) => {
                let t = w.current;
                if (null == t) return;
                let l = t.children;
                for (let t = 0; t < 5; t++) {
                    let n = l.item(t);
                    if (null == n) continue;
                    let i = e[t],
                        a = Math.max(2, Math.min(16, "number" == typeof i && Number.isFinite(i) ? i : 2)) / 16;
                    n.style.transform = `scaleY(${a})`;
                }
            },
            [w],
        );
    i.useLayoutEffect(() => {
        b || R(S.states[S.firstState].getHeights(x.current));
    }, [R, S, b]),
        (t = i.useRef(S.firstState)),
        (l = i.useRef(null)),
        (a = !b),
        i.useEffect(() => {
            if (!a) return;
            (t.current = S.firstState), (l.current = null);
            let e = null,
                n = !1;
            l.current = { now: Date.now(), stateEnterTime: Date.now(), stateEndTime: 0 };
            let i = l.current,
                s = (e) => {
                    i.stateEnterTime = i.now;
                    let t = e.getStateDuration();
                    i.stateEndTime = t > 0 ? i.now + t : 0;
                },
                r = (t) => {
                    o(),
                        n ||
                            (e = setTimeout(
                                () => {
                                    (e = null), n || u();
                                },
                                Math.max(0, t),
                            ));
                },
                o = () => {
                    null != e && (clearTimeout(e), (e = null));
                },
                u = () => {
                    if (n) return;
                    (e = null), (i.now = Date.now());
                    let l = t.current,
                        a = S.states[l];
                    if (null == a) {
                        (t.current = S.firstState), r(0);
                        return;
                    }
                    try {
                        let e = a.getHeights(x.current);
                        R(e);
                    } catch (e) {
                        n = !0;
                        return;
                    }
                    if (0 === i.stateEndTime || i.now >= i.stateEndTime) {
                        let e = a.getNextState();
                        t.current = e;
                        let l = S.states[e];
                        null != l && s(l);
                    }
                    r(a.getAnimationDelay());
                },
                c = S.states[t.current];
            return (
                null != c && s(c),
                r(0),
                () => {
                    (n = !0), o();
                }
            );
        }, [R, a, S, x]);
    let F = _ ? `url(#${m})` : void 0;
    return (0, n.jsx)("span", {
        ref: C,
        className: s()(c, h.Aj),
        children: (0, n.jsxs)("svg", {
            width: E,
            height: E,
            viewBox: `0 0 ${E} ${E}`,
            fill: "none",
            children: [
                (0, n.jsx)(y, { iconSize: E, locked: _, maskId: m }),
                (0, n.jsx)("g", {
                    mask: F,
                    children: (0, n.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: E,
                        height: E,
                        children: (0, n.jsx)("div", {
                            className: h.FH,
                            children: (0, n.jsx)("div", {
                                ref: w,
                                className: h.Gb,
                                style: M,
                                children: f.map((e) => (0, n.jsx)("div", { className: h.M0, style: P }, e)),
                            }),
                        }),
                    }),
                }),
                _ && (0, n.jsx)("path", { d: T, transform: p, fill: u, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function G(e) {
    let { color: t = "currentColor", className: l, iconSize: a = 20, locked: s = !1 } = e,
        r = i.useId(),
        o = (a - 18) / 2,
        u = s ? `url(#${r})` : void 0;
    return (0, n.jsx)("span", {
        className: l,
        style: { display: "inline-flex", pointerEvents: "none", contain: "strict", width: a, height: a },
        children: (0, n.jsxs)("svg", {
            width: a,
            height: a,
            viewBox: `0 0 ${a} ${a}`,
            fill: "none",
            children: [
                (0, n.jsx)(y, { iconSize: a, locked: s, maskId: r }),
                (0, n.jsx)("g", {
                    mask: u,
                    children: E.map((e, l) => {
                        let i = (a - e) / 2;
                        return (0, n.jsx)("rect", { x: o + 4 * l, y: i, width: 2, height: e, rx: 1, fill: t }, l);
                    }),
                }),
                s && (0, n.jsx)("path", { d: T, transform: p, fill: t, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function w(e) {
    let {
            color: t = "currentColor",
            className: l,
            iconSize: a = 20,
            animationStyle: s = A.s.GENTLE_AMBIENT,
            locked: r = !1,
        } = e,
        d = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        h = (0, o.bG)([c.A], () => c.A.isConnected()),
        [g, E] = i.useState(h);
    return (i.useEffect(() => {
        if (h) {
            let e = setTimeout(() => E(!0), 800);
            return () => clearTimeout(e);
        }
        E(!1);
    }, [h]),
    d || g)
        ? (0, n.jsx)(G, { color: t, className: l, iconSize: a, locked: r })
        : (0, n.jsx)(j, { color: t, className: l, animationStyle: s, iconSize: a, locked: r });
}
