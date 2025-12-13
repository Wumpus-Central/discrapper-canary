n.d(t, { Z: () => T }), n(388685);
var l = n(54381),
    i = n(473749),
    r = n(467721),
    a = n(907331),
    o = n(442837),
    s = n(481060),
    u = n(607070),
    c = n(451478),
    d = n(454135);
let g = [8, 16, 11, 13, 6],
    f = 6.67 / 8,
    h =
        "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
    m = "translate("
        .concat(12.33 - 15 * f, ", ")
        .concat(1 - 15.5 * f, ") scale(")
        .concat(f, ")");
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : g,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
    return t.map((t) => Math.max(n, Math.min(l, t + E(-e, e))));
}
function E(e, t) {
    return Math.random() * (t - e) + e;
}
let p = [6, 10, 9, 16, 8],
    v = {
        [d.i.GENTLE_AMBIENT]: {
            firstState: "burst",
            springConfig: {
                tension: 240,
                friction: 14,
                mass: 1.1,
                clamp: !0,
            },
            states: {
                burst: {
                    getHeights: () => N(4),
                    getAnimationDelay: () => E(16, 32),
                    getStateDuration: () => E(3000, 6000),
                    getNextState: () => "quiet",
                },
                quiet: {
                    getHeights: () => N(3),
                    getAnimationDelay: () => E(16, 128),
                    getStateDuration: () => E(1000, 3000),
                    getNextState: () => "burst",
                },
            },
        },
        [d.i.GENTLE_AMBIENT_WITH_INTRO]: {
            firstState: "introSilent",
            springConfig: {
                tension: 300,
                friction: 14,
                mass: 1,
                clamp: !0,
            },
            states: {
                introSilent: {
                    getHeights: () =>
                        (function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            return [, , , , ,].fill(0).map(() => t + E(0, e));
                        })(),
                    getAnimationDelay: () => E(8, 16),
                    getStateDuration: () => E(8, 24),
                    getNextState: () => "waveBuildCenter",
                },
                waveBuildCenter: {
                    getHeights: () => N(3, [2, 2, 5, 2, 2]),
                    getAnimationDelay: () => E(8, 16),
                    getStateDuration: () => E(8, 24),
                    getNextState: () => "waveBuildRight1",
                },
                waveBuildRight1: {
                    getHeights: () => N(4, [3, 3, 10, 6, 3], 1),
                    getAnimationDelay: () => E(8, 16),
                    getStateDuration: () => E(8, 24),
                    getNextState: () => "waveBuildRight2",
                },
                waveBuildRight2: {
                    getHeights: () => N(4, [3, 3, 7, 12, 6], 1),
                    getAnimationDelay: () => E(8, 16),
                    getStateDuration: () => E(8, 24),
                    getNextState: () => "wavePeakRight",
                },
                wavePeakRight: {
                    getHeights: () => N(4, [3, 3, 5, 10, 16], 1),
                    getAnimationDelay: () => E(8, 16),
                    getStateDuration: () => E(8, 24),
                    getNextState: () => "waveReturnLeft1",
                },
                waveReturnLeft1: {
                    getHeights: () => N(5, [3, 3, 8, 13, 7]),
                    getAnimationDelay: () => E(8, 16),
                    getStateDuration: () => E(8, 24),
                    getNextState: () => "waveReturnLeft2",
                },
                waveReturnLeft2: {
                    getHeights: () => N(5, [4, 6, 12, 9, 6]),
                    getAnimationDelay: () => E(8, 16),
                    getStateDuration: () => E(8, 24),
                    getNextState: () => "burst",
                },
                burst: {
                    getHeights: () => N(4),
                    getAnimationDelay: () => E(16, 32),
                    getStateDuration: () => E(3000, 6000),
                    getNextState: () => "quiet",
                },
                quiet: {
                    getHeights: () => N(3),
                    getAnimationDelay: () => E(16, 128),
                    getStateDuration: () => E(1000, 3000),
                    getNextState: () => "burst",
                },
            },
        },
        [d.i.HIGH_CONTRAST]: {
            firstState: "burst",
            springConfig: {
                tension: 400,
                friction: 12,
                mass: 1.2,
                clamp: !0,
            },
            states: {
                burst: {
                    getHeights: () => N(7, p),
                    getAnimationDelay: () => E(8, 16),
                    getStateDuration: () => E(3000, 6000),
                    getNextState: () => "quiet",
                },
                quiet: {
                    getHeights: () => N(4, p),
                    getAnimationDelay: () => E(16, 128),
                    getStateDuration: () => E(1000, 3000),
                    getNextState: () => "burst",
                },
            },
        },
    };
function T(e) {
    let {
            color: t = "currentColor",
            className: n,
            iconSize: f = 20,
            animationStyle: N = d.i.GENTLE_AMBIENT,
            locked: E = !1,
        } = e,
        p = i.useId(),
        T = (0, o.e7)([u.Z], () => u.Z.useReducedMotion),
        O = (0, o.e7)([c.Z], () => c.Z.isAppFocused()),
        [y, S] = i.useState(!1),
        b = i.useCallback((e) => {
            e && S(!0);
        }, []),
        j = (0, a.O)(b, 0.15),
        I = v[N],
        x = (function (e, t) {
            let [n, l] = i.useState(() => t.states[t.firstState].getHeights()),
                r = i.useRef(t.firstState),
                a = i.useRef(null),
                o = !e;
            return (
                i.useEffect(() => {
                    let e;
                    if (((r.current = t.firstState), (a.current = null), l(t.states[t.firstState].getHeights()), !o))
                        return;
                    a.current = {
                        now: Date.now(),
                        stateEnterTime: Date.now(),
                        stateEndTime: 0,
                    };
                    let n = a.current,
                        i = (e) => {
                            n.stateEnterTime = n.now;
                            let t = e.getStateDuration();
                            n.stateEndTime = t > 0 ? n.now + t : 0;
                        },
                        s = () => {
                            n.now = Date.now();
                            let a = r.current,
                                o = t.states[a];
                            if (null == o) {
                                (r.current = t.firstState), (e = setTimeout(s, 0));
                                return;
                            }
                            if ((l(o.getHeights()), 0 === n.stateEndTime || n.now >= n.stateEndTime)) {
                                let e = o.getNextState();
                                r.current = e;
                                let n = t.states[e];
                                null != n && i(n);
                            }
                            e = setTimeout(s, o.getAnimationDelay());
                        },
                        u = t.states[r.current];
                    return (
                        null != u && i(u),
                        s(),
                        () => {
                            clearTimeout(e);
                        }
                    );
                }, [o, t]),
                n
            );
        })(T || !O || !y, I).map((e) => ({
            height: e,
            config: I.springConfig,
        })),
        D = (0, s.bYB)(5, x, "animate-always"),
        _ = (f - 18) / 2,
        C = E
            ? (0, l.jsx)("defs", {
                  children: (0, l.jsxs)("mask", {
                      id: p,
                      children: [
                          (0, l.jsx)("rect", {
                              width: f,
                              height: f,
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
            : null,
        A = E ? "url(#".concat(p, ")") : void 0;
    return T
        ? (0, l.jsx)("span", {
              ref: j,
              className: n,
              style: { display: "inline-flex" },
              children: (0, l.jsxs)("svg", {
                  width: f,
                  height: f,
                  viewBox: "0 0 ".concat(f, " ").concat(f),
                  fill: "none",
                  children: [
                      C,
                      (0, l.jsx)("g", {
                          mask: A,
                          children: g.map((e, n) => {
                              let i = (f - e) / 2;
                              return (0, l.jsx)(
                                  "rect",
                                  {
                                      x: _ + 4 * n,
                                      y: i,
                                      width: 2,
                                      height: e,
                                      rx: 1,
                                      fill: t,
                                  },
                                  n,
                              );
                          }),
                      }),
                      E &&
                          (0, l.jsx)("path", {
                              d: h,
                              transform: m,
                              fill: t,
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                          }),
                  ],
              }),
          })
        : (0, l.jsx)("span", {
              ref: j,
              className: n,
              style: { display: "inline-flex" },
              children: (0, l.jsxs)("svg", {
                  width: f,
                  height: f,
                  viewBox: "0 0 ".concat(f, " ").concat(f),
                  fill: "none",
                  children: [
                      C,
                      (0, l.jsx)("g", {
                          mask: A,
                          children: D.map((e, n) => {
                              let i = e.height;
                              return (0, l.jsx)(
                                  r.animated.rect,
                                  {
                                      x: _ + 4 * n,
                                      y: i.to((e) => (f - e) / 2),
                                      width: 2,
                                      height: i,
                                      rx: 1,
                                      fill: t,
                                  },
                                  n,
                              );
                          }),
                      }),
                      E &&
                          (0, l.jsx)("path", {
                              d: h,
                              transform: m,
                              fill: t,
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                          }),
                  ],
              }),
          });
}
