n.d(t, {
    A: () => M,
}),
    n(896048);
var l = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    o = n(172218),
    s = n(311907),
    u = n(775602),
    c = n(383501),
    d = n(531685),
    h = n(25639),
    f = n(962762);
let g = "ease-in-out",
    p = [8, 16, 11, 13, 6],
    b = Array.from(
        {
            length: 5,
        },
        (e, t) => t,
    ),
    m = [2, 2, 5, 2, 2],
    y = [3, 3, 10, 6, 3],
    v = [3, 3, 7, 12, 6],
    O = [3, 3, 5, 10, 16],
    j = [3, 3, 8, 13, 7],
    E = [4, 6, 12, 9, 6],
    N = [6, 10, 9, 16, 8],
    A = 6.67 / 8,
    S =
        "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
    x = "translate("
        .concat(12.33 - 15 * A, ", ")
        .concat(1 - 15.5 * A, ") scale(")
        .concat(A, ")");

function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : p,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2,
        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 16;
    for (let i = 0; i < 5; i++) {
        let a = n[i],
            o = D(-t, t);
        e[i] = Math.max(l, Math.min(r, a + o));
    }
    return e;
}

function D(e, t) {
    return Math.random() * (t - e) + e;
}
let w = {
    [h.s.GENTLE_AMBIENT]: {
        firstState: "burst",
        transitionConfig: {
            durationMs: 180,
            timingFunction: g,
        },
        states: {
            burst: {
                getHeights: (e) => T(e, 4),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => T(e, 3),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [h.s.GENTLE_AMBIENT_WITH_INTRO]: {
        firstState: "introSilent",
        transitionConfig: {
            durationMs: 100,
            timingFunction: g,
        },
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
                getHeights: (e) => T(e, 3, m),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveBuildRight1",
            },
            waveBuildRight1: {
                getHeights: (e) => T(e, 4, y, 1),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveBuildRight2",
            },
            waveBuildRight2: {
                getHeights: (e) => T(e, 4, v, 1),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "wavePeakRight",
            },
            wavePeakRight: {
                getHeights: (e) => T(e, 4, O, 1),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveReturnLeft1",
            },
            waveReturnLeft1: {
                getHeights: (e) => T(e, 5, j),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "waveReturnLeft2",
            },
            waveReturnLeft2: {
                getHeights: (e) => T(e, 5, E),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(32, 64),
                getNextState: () => "burst",
            },
            burst: {
                getHeights: (e) => T(e, 4),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => T(e, 3),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
    [h.s.HIGH_CONTRAST]: {
        firstState: "burst",
        transitionConfig: {
            durationMs: 120,
            timingFunction: g,
        },
        states: {
            burst: {
                getHeights: (e) => T(e, 7, N),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(3e3, 6e3),
                getNextState: () => "quiet",
            },
            quiet: {
                getHeights: (e) => T(e, 4, N),
                getAnimationDelay: () => D(64, 128),
                getStateDuration: () => D(1e3, 3e3),
                getNextState: () => "burst",
            },
        },
    },
};

function P(e) {
    let { iconSize: t = 20, locked: n = !1, maskId: r } = e;
    return n
        ? (0, l.jsx)("defs", {
              children: (0, l.jsxs)("mask", {
                  id: r,
                  children: [
                      (0, l.jsx)("rect", {
                          width: t,
                          height: t,
                          fill: "white",
                      }),
                      (0, l.jsx)("rect", {
                          x: 11.33,
                          y: 0,
                          width: 8.67,
                          height: 9.5,
                          fill: "black",
                          rx: 1,
                      }),
                  ],
              }),
          })
        : null;
}

function R(e) {
    let t,
        n,
        i,
        {
            color: u = "currentColor",
            className: c,
            animationStyle: g = h.s.GENTLE_AMBIENT,
            iconSize: p = 20,
            locked: m = !1,
        } = e,
        y = r.useId(),
        v = (0, s.bG)([d.A], () => d.A.isAppFocused()),
        [O, j] = r.useState(!1),
        E = r.useCallback((e) => {
            j((t) => (t !== e ? e : t));
        }, []),
        N = (0, o.K)(E, 0.15),
        A = r.useRef([, , , , ,].fill(0)),
        T = w[g],
        D = !v || !O,
        R = (p - 18) / 2,
        C = D ? 0 : T.transitionConfig.durationMs,
        M = r.useRef(null),
        I = r.useMemo(
            () => ({
                transitionProperty: "transform",
                transitionDuration: "".concat(C, "ms"),
                transitionTimingFunction: T.transitionConfig.timingFunction,
            }),
            [T.transitionConfig.timingFunction, C],
        ),
        _ = r.useMemo(() => {
            var e, t;
            return (
                (e = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (l = l.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            l.forEach(function (t) {
                                var l;
                                (l = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: l,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = l);
                            });
                    }
                    return e;
                })({}, I)),
                (t = t =
                    {
                        width: 2,
                        height: 16,
                        backgroundColor: u,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var l = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, l);
                          }
                          return n;
                      })(Object(t)).forEach(function (n) {
                          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                      }),
                e
            );
        }, [I, u]),
        L = r.useMemo(
            () => ({
                left: R,
                top: (p - 16) / 2,
                width: 18,
                height: 16,
                columnGap: 2,
            }),
            [p, R, 18],
        ),
        k = r.useCallback(
            (e) => {
                let t = M.current;
                if (null == t) return;
                let n = t.children;
                for (let t = 0; t < 5; t++) {
                    let l = n.item(t);
                    if (null == l) continue;
                    let r = e[t],
                        i = Math.max(2, Math.min(16, "number" == typeof r && Number.isFinite(r) ? r : 2)) / 16;
                    l.style.transform = "scaleY(".concat(i, ")");
                }
            },
            [M],
        );
    r.useLayoutEffect(() => {
        D || k(T.states[T.firstState].getHeights(A.current));
    }, [k, T, D]),
        (t = r.useRef(T.firstState)),
        (n = r.useRef(null)),
        (i = !D),
        r.useEffect(() => {
            if (!i) return;
            (t.current = T.firstState), (n.current = null);
            let e = null,
                l = !1;
            n.current = {
                now: Date.now(),
                stateEnterTime: Date.now(),
                stateEndTime: 0,
            };
            let r = n.current,
                a = (e) => {
                    r.stateEnterTime = r.now;
                    let t = e.getStateDuration();
                    r.stateEndTime = t > 0 ? r.now + t : 0;
                },
                o = (t) => {
                    s(),
                        l ||
                            (e = setTimeout(
                                () => {
                                    (e = null), l || u();
                                },
                                Math.max(0, t),
                            ));
                },
                s = () => {
                    null != e && (clearTimeout(e), (e = null));
                },
                u = () => {
                    if (l) return;
                    (e = null), (r.now = Date.now());
                    let n = t.current,
                        i = T.states[n];
                    if (null == i) {
                        (t.current = T.firstState), o(0);
                        return;
                    }
                    try {
                        let e = i.getHeights(A.current);
                        k(e);
                    } catch (e) {
                        l = !0;
                        return;
                    }
                    if (0 === r.stateEndTime || r.now >= r.stateEndTime) {
                        let e = i.getNextState();
                        t.current = e;
                        let n = T.states[e];
                        null != n && a(n);
                    }
                    o(i.getAnimationDelay());
                },
                c = T.states[t.current];
            return (
                null != c && a(c),
                o(0),
                () => {
                    (l = !0), s();
                }
            );
        }, [k, i, T, A]);
    let G = m ? "url(#".concat(y, ")") : void 0;
    return (0, l.jsx)("span", {
        ref: N,
        className: a()(c, f.Aj),
        children: (0, l.jsxs)("svg", {
            width: p,
            height: p,
            viewBox: "0 0 ".concat(p, " ").concat(p),
            fill: "none",
            children: [
                (0, l.jsx)(P, {
                    iconSize: p,
                    locked: m,
                    maskId: y,
                }),
                (0, l.jsx)("g", {
                    mask: G,
                    children: (0, l.jsx)("foreignObject", {
                        x: 0,
                        y: 0,
                        width: p,
                        height: p,
                        children: (0, l.jsx)("div", {
                            className: f.FH,
                            children: (0, l.jsx)("div", {
                                ref: M,
                                className: f.Gb,
                                style: L,
                                children: b.map((e) =>
                                    (0, l.jsx)(
                                        "div",
                                        {
                                            className: f.M0,
                                            style: _,
                                        },
                                        e,
                                    ),
                                ),
                            }),
                        }),
                    }),
                }),
                m &&
                    (0, l.jsx)("path", {
                        d: S,
                        transform: x,
                        fill: u,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                    }),
            ],
        }),
    });
}

function C(e) {
    let { color: t = "currentColor", className: n, iconSize: i = 20, locked: a = !1 } = e,
        o = r.useId(),
        s = (i - 18) / 2,
        u = a ? "url(#".concat(o, ")") : void 0;
    return (0, l.jsx)("span", {
        className: n,
        style: {
            display: "inline-flex",
            pointerEvents: "none",
            contain: "strict",
            width: i,
            height: i,
        },
        children: (0, l.jsxs)("svg", {
            width: i,
            height: i,
            viewBox: "0 0 ".concat(i, " ").concat(i),
            fill: "none",
            children: [
                (0, l.jsx)(P, {
                    iconSize: i,
                    locked: a,
                    maskId: o,
                }),
                (0, l.jsx)("g", {
                    mask: u,
                    children: p.map((e, n) => {
                        let r = (i - e) / 2;
                        return (0, l.jsx)(
                            "rect",
                            {
                                x: s + 4 * n,
                                y: r,
                                width: 2,
                                height: e,
                                rx: 1,
                                fill: t,
                            },
                            n,
                        );
                    }),
                }),
                a &&
                    (0, l.jsx)("path", {
                        d: S,
                        transform: x,
                        fill: t,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                    }),
            ],
        }),
    });
}

function M(e) {
    let {
            color: t = "currentColor",
            className: n,
            iconSize: i = 20,
            animationStyle: a = h.s.GENTLE_AMBIENT,
            locked: o = !1,
        } = e,
        d = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        f = (0, s.bG)([c.A], () => c.A.isConnected()),
        [g, p] = r.useState(f);
    return (r.useEffect(() => {
        if (f) {
            let e = setTimeout(() => p(!0), 800);
            return () => clearTimeout(e);
        }
        p(!1);
    }, [f]),
    d || g)
        ? (0, l.jsx)(C, {
              color: t,
              className: n,
              iconSize: i,
              locked: o,
          })
        : (0, l.jsx)(R, {
              color: t,
              className: n,
              animationStyle: a,
              iconSize: i,
              locked: o,
          });
}
