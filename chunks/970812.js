n.d(t, { A: () => R });
var a = n(627968),
    i = n(64700),
    r = n(503698),
    o = n.n(r),
    l = n(172218),
    s = n(17928),
    c = n(775602),
    _ = n(763827),
    u = n(531685),
    d = n(25639),
    b = n(63727);
let m = "ease-in-out",
    g = [8, 16, 11, 13, 6],
    f = Array.from({ length: 5 }, (e, t) => t),
    h = [2, 2, 5, 2, 2],
    p = [3, 3, 10, 6, 3],
    x = [3, 3, 7, 12, 6],
    A = [3, 3, 5, 10, 16],
    N = [3, 3, 8, 13, 7],
    v = [4, 6, 12, 9, 6],
    C = [6, 10, 9, 16, 8],
    E = 6.67 / 8,
    S =
        "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
    D = `translate(${12.33 - 15 * E}, ${1 - 15.5 * E}) scale(${E})`;
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g,
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 16;
    for (let r = 0; r < 5; r++) {
        let o = n[r],
            l = I(-t, t);
        e[r] = Math.max(a, Math.min(i, o + l));
    }
    return e;
}
function I(e, t) {
    return Math.random() * (t - e) + e;
}
let w = {
    [d.s.GENTLE_AMBIENT]: {
        firstState: "burst",
        transitionConfig: { durationMs: 180, timingFunction: m },
        states: {
            burst: {
                getHeights: (e) => T(e, 4),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => T(e, 3),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [d.s.GENTLE_AMBIENT_WITH_INTRO]: {
        firstState: "introSilent",
        transitionConfig: { durationMs: 100, timingFunction: m },
        states: {
            introSilent: {
                getHeights: (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                        for (let a = 0; a < 5; a++) e[a] = n + I(0, t);
                        return e;
                    })(e),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(32, 64),
                getNextState: () => "waveBuildCenter",
            },
            waveBuildCenter: {
                getHeights: (e) => T(e, 3, h),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(32, 64),
                getNextState: () => "waveBuildRight1",
            },
            waveBuildRight1: {
                getHeights: (e) => T(e, 4, p, 1),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(32, 64),
                getNextState: () => "waveBuildRight2",
            },
            waveBuildRight2: {
                getHeights: (e) => T(e, 4, x, 1),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(32, 64),
                getNextState: () => "wavePeakRight",
            },
            wavePeakRight: {
                getHeights: (e) => T(e, 4, A, 1),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(32, 64),
                getNextState: () => "waveReturnLeft1",
            },
            waveReturnLeft1: {
                getHeights: (e) => T(e, 5, N),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(32, 64),
                getNextState: () => "waveReturnLeft2",
            },
            waveReturnLeft2: {
                getHeights: (e) => T(e, 5, v),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(32, 64),
                getNextState: () => "burst",
            },
            burst: {
                getHeights: (e) => T(e, 4),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => T(e, 3),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [d.s.HIGH_CONTRAST]: {
        firstState: "burst",
        transitionConfig: { durationMs: 120, timingFunction: m },
        states: {
            burst: {
                getHeights: (e) => T(e, 7, C),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => T(e, 4, C),
                getAnimationDelay: () => I(64, 128),
                getStateDuration: () => I(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
};
function k(e) {
    let { iconSize: t = 20, locked: n = !1, maskId: i } = e;
    return n
        ? (0, a.jsx)("defs", {
              children: (0, a.jsxs)("mask", {
                  id: i,
                  children: [
                      (0, a.jsx)("rect", { width: t, height: t, fill: "white" }),
                      (0, a.jsx)("rect", { x: 11.33, y: 0, width: 8.67, height: 9.5, fill: "black", rx: 1 }),
                  ],
              }),
          })
        : null;
}
function M(e) {
    let t,
        n,
        r,
        {
            color: c = "currentColor",
            className: _,
            animationStyle: m = d.s.GENTLE_AMBIENT,
            iconSize: g = 20,
            locked: h = !1,
        } = e,
        p = i.useId(),
        x = (0, s.bG)([u.A], () => u.A.isAppFocused()),
        [A, N] = i.useState(!1),
        v = i.useCallback((e) => {
            N((t) => (t !== e ? e : t));
        }, []),
        C = (0, l.K)(v, 0.15),
        E = i.useRef([, , , , ,].fill(0)),
        T = w[m],
        I = !x || !A,
        M = (g - 18) / 2,
        y = I ? 0 : T.transitionConfig.durationMs,
        R = i.useRef(null),
        j = i.useMemo(
            () => ({
                transitionProperty: "transform",
                transitionDuration: `${y}ms`,
                transitionTimingFunction: T.transitionConfig.timingFunction,
            }),
            [T.transitionConfig.timingFunction, y],
        ),
        L = i.useMemo(() => ({ ...j, width: 2, height: 16, backgroundColor: c }), [j, c]),
        G = i.useMemo(() => ({ left: M, top: (g - 16) / 2, width: 18, height: 16, columnGap: 2 }), [g, M, 18]),
        B = i.useCallback(
            (e) => {
                let t = R.current;
                if (null == t) return;
                let n = t.children;
                for (let t = 0; t < 5; t++) {
                    let a = n.item(t);
                    if (null == a) continue;
                    let i = e[t],
                        r = Math.max(2, Math.min(16, "number" == typeof i && Number.isFinite(i) ? i : 2)) / 16;
                    a.style.transform = `scaleY(${r})`;
                }
            },
            [R],
        );
    i.useLayoutEffect(() => {
        I || B(T.states[T.firstState].getHeights(E.current));
    }, [B, T, I]),
        (t = i.useRef(T.firstState)),
        (n = i.useRef(null)),
        (r = !I),
        i.useEffect(() => {
            if (!r) return;
            (t.current = T.firstState), (n.current = null);
            let e = null,
                a = !1;
            n.current = { now: Date.now(), stateEnterTime: Date.now(), stateEndTime: 0 };
            let i = n.current,
                o = (e) => {
                    i.stateEnterTime = i.now;
                    let t = e.getStateDuration();
                    i.stateEndTime = t > 0 ? i.now + t : 0;
                },
                l = (t) => {
                    s(),
                        a ||
                            (e = setTimeout(
                                () => {
                                    (e = null), a || c();
                                },
                                Math.max(0, t),
                            ));
                },
                s = () => {
                    null != e && (clearTimeout(e), (e = null));
                },
                c = () => {
                    if (a) return;
                    (e = null), (i.now = Date.now());
                    let n = t.current,
                        r = T.states[n];
                    if (null == r) {
                        (t.current = T.firstState), l(0);
                        return;
                    }
                    try {
                        let e = r.getHeights(E.current);
                        B(e);
                    } catch (e) {
                        a = !0;
                        return;
                    }
                    if (0 === i.stateEndTime || i.now >= i.stateEndTime) {
                        let e = r.getNextState();
                        t.current = e;
                        let n = T.states[e];
                        null != n && o(n);
                    }
                    l(r.getAnimationDelay());
                },
                _ = T.states[t.current];
            return (
                null != _ && o(_),
                l(0),
                () => {
                    (a = !0), s();
                }
            );
        }, [B, r, T, E]);
    let U = h ? `url(#${p})` : void 0;
    return (0, a.jsx)("span", {
        ref: C,
        className: o()(_, b.Aj),
        children: (0, a.jsxs)("svg", {
            width: g,
            height: g,
            viewBox: `0 0 ${g} ${g}`,
            fill: "none",
            children: [
                (0, a.jsx)(k, { iconSize: g, locked: h, maskId: p }),
                (0, a.jsx)("g", {
                    mask: U,
                    children: (0, a.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: g,
                        height: g,
                        children: (0, a.jsx)("div", {
                            className: b.FH,
                            children: (0, a.jsx)("div", {
                                ref: R,
                                className: b.Gb,
                                style: G,
                                children: f.map((e) => (0, a.jsx)("div", { className: b.M0, style: L }, e)),
                            }),
                        }),
                    }),
                }),
                h && (0, a.jsx)("path", { d: S, transform: D, fill: c, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function y(e) {
    let { color: t = "currentColor", className: n, iconSize: r = 20, locked: o = !1 } = e,
        l = i.useId(),
        s = (r - 18) / 2,
        c = o ? `url(#${l})` : void 0;
    return (0, a.jsx)("span", {
        className: n,
        style: { display: "inline-flex", pointerEvents: "none", contain: "strict", width: r, height: r },
        children: (0, a.jsxs)("svg", {
            width: r,
            height: r,
            viewBox: `0 0 ${r} ${r}`,
            fill: "none",
            children: [
                (0, a.jsx)(k, { iconSize: r, locked: o, maskId: l }),
                (0, a.jsx)("g", {
                    mask: c,
                    children: g.map((e, n) => {
                        let i = (r - e) / 2;
                        return (0, a.jsx)("rect", { x: s + 4 * n, y: i, width: 2, height: e, rx: 1, fill: t }, n);
                    }),
                }),
                o && (0, a.jsx)("path", { d: S, transform: D, fill: t, fillRule: "evenodd", clipRule: "evenodd" }),
            ],
        }),
    });
}
function R(e) {
    let {
            color: t = "currentColor",
            className: n,
            iconSize: r = 20,
            animationStyle: o = d.s.GENTLE_AMBIENT,
            locked: l = !1,
        } = e,
        u = (0, s.bG)([c.A], () => c.A.useReducedMotion),
        b = (0, s.bG)([_.A], () => _.A.isConnected()),
        [m, g] = i.useState(b);
    return (i.useEffect(() => {
        if (b) {
            let e = setTimeout(() => g(!0), 800);
            return () => clearTimeout(e);
        }
        g(!1);
    }, [b]),
    u || m)
        ? (0, a.jsx)(y, { color: t, className: n, iconSize: r, locked: l })
        : (0, a.jsx)(M, { color: t, className: n, animationStyle: o, iconSize: r, locked: l });
}
