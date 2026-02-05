n.d(t, { A: () => L });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(172218),
    o = n(311907),
    u = n(775602),
    c = n(383501),
    d = n(531685),
    h = n(25639),
    g = n(962762);
let f = "ease-in-out",
    m = [8, 16, 11, 13, 6],
    p = Array.from({ length: 5 }, (e, t) => t),
    N = [2, 2, 5, 2, 2],
    A = [3, 3, 10, 6, 3],
    E = [3, 3, 7, 12, 6],
    x = [3, 3, 5, 10, 16],
    T = [3, 3, 8, 13, 7],
    v = [4, 6, 12, 9, 6],
    b = [6, 10, 9, 16, 8],
    S = 6.67 / 8,
    R =
        "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
    y = `translate(${12.33 - 15 * S}, ${1 - 15.5 * S}) scale(${S})`;
function C(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 16;
    for (let a = 0; a < 5; a++) {
        let s = n[a],
            r = D(-t, t);
        e[a] = Math.max(l, Math.min(i, s + r));
    }
    return e;
}
function D(e, t) {
    return Math.random() * (t - e) + e;
}
let M = {
    [h.s.GENTLE_AMBIENT]: {
        firstState: "burst",
        transitionConfig: { durationMs: 180, timingFunction: f },
        states: {
            burst: {
                getHeights: (e) => C(e, 4),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => C(e, 3),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [h.s.GENTLE_AMBIENT_WITH_INTRO]: {
        firstState: "introSilent",
        transitionConfig: { durationMs: 100, timingFunction: f },
        states: {
            introSilent: {
                getHeights: (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                        for (let l = 0; l < 5; l++) e[l] = n + D(0, t);
                        return e;
                    })(e),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveBuildCenter",
            },
            waveBuildCenter: {
                getHeights: (e) => C(e, 3, N),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveBuildRight1",
            },
            waveBuildRight1: {
                getHeights: (e) => C(e, 4, A, 1),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveBuildRight2",
            },
            waveBuildRight2: {
                getHeights: (e) => C(e, 4, E, 1),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "wavePeakRight",
            },
            wavePeakRight: {
                getHeights: (e) => C(e, 4, x, 1),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveReturnLeft1",
            },
            waveReturnLeft1: {
                getHeights: (e) => C(e, 5, T),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveReturnLeft2",
            },
            waveReturnLeft2: {
                getHeights: (e) => C(e, 5, v),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "burst",
            },
            burst: {
                getHeights: (e) => C(e, 4),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => C(e, 3),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [h.s.HIGH_CONTRAST]: {
        firstState: "burst",
        transitionConfig: { durationMs: 120, timingFunction: f },
        states: {
            burst: {
                getHeights: (e) => C(e, 7, b),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => C(e, 4, b),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
};
function j(e) {
    let { iconSize: t = 20, locked: n = !1, maskId: i } = e;
    return n
        ? (0, l.jsx)("defs", {
              children: (0, l.jsxs)("mask", {
                  id: i,
                  children: [
                      (0, l.jsx)("rect", { width: t, height: t, fill: "white" }),
                      (0, l.jsx)("rect", { x: 11.33, y: 0, width: 8.67, height: 9.5, fill: "black", rx: 1 }),
                  ],
              }),
          })
        : null;
}
function I(e) {
    let t,
        n,
        a,
        {
            color: u = "currentColor",
            className: c,
            animationStyle: f = h.s.GENTLE_AMBIENT,
            iconSize: m = 20,
            locked: N = !1,
        } = e,
        A = i.useId(),
        E = (0, o.bG)([d.A], () => d.A.isAppFocused()),
        [x, T] = i.useState(!1),
        v = i.useCallback((e) => {
            T((t) => (t !== e ? e : t));
        }, []),
        b = (0, r.K)(v, 0.15),
        S = i.useRef([, , , , ,].fill(0)),
        C = M[f],
        D = !E || !x,
        I = (m - 18) / 2,
        _ = D ? 0 : C.transitionConfig.durationMs,
        L = i.useRef(null),
        w = i.useMemo(
            () => ({
                transitionProperty: "transform",
                transitionDuration: `${_}ms`,
                transitionTimingFunction: C.transitionConfig.timingFunction,
            }),
            [C.transitionConfig.timingFunction, _],
        ),
        k = i.useMemo(() => ({ ...w, width: 2, height: 16, backgroundColor: u }), [w, u]),
        G = i.useMemo(() => ({ left: I, top: (m - 16) / 2, width: 18, height: 16, columnGap: 2 }), [m, I, 18]),
        O = i.useCallback(
            (e) => {
                let t = L.current;
                if (null == t) return;
                let n = t.children;
                for (let t = 0; t < 5; t++) {
                    let l = n.item(t);
                    if (null == l) continue;
                    let i = e[t],
                        a = Math.max(2, Math.min(16, "number" == typeof i && Number.isFinite(i) ? i : 2)) / 16;
                    l.style.transform = `scaleY(${a})`;
                }
            },
            [L],
        );
    i.useLayoutEffect(() => {
        D || O(C.states[C.firstState].getHeights(S.current));
    }, [O, C, D]),
        (t = i.useRef(C.firstState)),
        (n = i.useRef(null)),
        (a = !D),
        i.useEffect(() => {
            if (!a) return;
            (t.current = C.firstState), (n.current = null);
            let e = null,
                l = !1;
            n.current = { now: Date.now(), stateEnterTime: Date.now(), stateEndTime: 0 };
            let i = n.current,
                s = (e) => {
                    i.stateEnterTime = i.now;
                    let t = e.getStateDuration();
                    i.stateEndTime = t > 0 ? i.now + t : 0;
                },
                r = (t) => {
                    o(),
                        l ||
                            (e = setTimeout(
                                () => {
                                    (e = null), l || u();
                                },
                                Math.max(0, t),
                            ));
                },
                o = () => {
                    null != e && (clearTimeout(e), (e = null));
                },
                u = () => {
                    if (l) return;
                    (e = null), (i.now = Date.now());
                    let n = t.current,
                        a = C.states[n];
                    if (null == a) {
                        (t.current = C.firstState), r(0);
                        return;
                    }
                    try {
                        let e = a.getHeights(S.current);
                        O(e);
                    } catch (e) {
                        l = !0;
                        return;
                    }
                    if (0 === i.stateEndTime || i.now >= i.stateEndTime) {
                        let e = a.getNextState();
                        t.current = e;
                        let n = C.states[e];
                        null != n && s(n);
                    }
                    r(a.getAnimationDelay());
                },
                c = C.states[t.current];
            return (
                null != c && s(c),
                r(0),
                () => {
                    (l = !0), o();
                }
            );
        }, [O, a, C, S]);
    let P = N ? `url(#${A})` : void 0;
    return (0, l.jsx)("span", {
        ref: b,
        className: s()(c, g.Aj),
        children: (0, l.jsxs)("svg", {
            width: m,
            height: m,
            viewBox: `0 0 ${m} ${m}`,
            fill: "none",
            children: [
                (0, l.jsx)(j, { iconSize: m, locked: N, maskId: A }),
                (0, l.jsx)("g", {
                    mask: P,
                    children: (0, l.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: m,
                        height: m,
                        children: (0, l.jsx)("div", {
                            className: g.FH,
                            children: (0, l.jsx)("div", {
                                ref: L,
                                className: g.Gb,
                                style: G,
                                children: p.map((e) => (0, l.jsx)("div", { className: g.M0, style: k }, e)),
                            }),
                        }),
                    }),
                }),
                N && (0, l.jsx)("path", { d: R, transform: y, fill: u, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function _(e) {
    let { color: t = "currentColor", className: n, iconSize: a = 20, locked: s = !1 } = e,
        r = i.useId(),
        o = (a - 18) / 2,
        u = s ? `url(#${r})` : void 0;
    return (0, l.jsx)("span", {
        className: n,
        style: { display: "inline-flex", pointerEvents: "none", contain: "strict", width: a, height: a },
        children: (0, l.jsxs)("svg", {
            width: a,
            height: a,
            viewBox: `0 0 ${a} ${a}`,
            fill: "none",
            children: [
                (0, l.jsx)(j, { iconSize: a, locked: s, maskId: r }),
                (0, l.jsx)("g", {
                    mask: u,
                    children: m.map((e, n) => {
                        let i = (a - e) / 2;
                        return (0, l.jsx)("rect", { x: o + 4 * n, y: i, width: 2, height: e, rx: 1, fill: t }, n);
                    }),
                }),
                s && (0, l.jsx)("path", { d: R, transform: y, fill: t, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function L(e) {
    let {
            color: t = "currentColor",
            className: n,
            iconSize: a = 20,
            animationStyle: s = h.s.GENTLE_AMBIENT,
            locked: r = !1,
        } = e,
        d = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        g = (0, o.bG)([c.A], () => c.A.isConnected()),
        [f, m] = i.useState(g);
    return (i.useEffect(() => {
        if (g) {
            let e = setTimeout(() => m(!0), 800);
            return () => clearTimeout(e);
        }
        m(!1);
    }, [g]),
    d || f)
        ? (0, l.jsx)(_, { color: t, className: n, iconSize: a, locked: r })
        : (0, l.jsx)(I, { color: t, className: n, animationStyle: s, iconSize: a, locked: r });
}
