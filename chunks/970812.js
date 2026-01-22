n.d(t, { A: () => E }), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(172218),
    a = n(311907),
    s = n(775602),
    o = n(531685),
    u = n(25639);
let c = "ease-in-out",
    d = [8, 16, 11, 13, 6],
    f = Array.from({ length: 5 }, (e, t) => t),
    g = 6.67 / 8,
    h =
        "M16.5 18H16a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.5v-.5a2.5 2.5 0 0 0-5 0v.5Zm3.5 0v-.5a1 1 0 1 0-2 0v.5h2Z",
    m = "translate("
        .concat(12.33 - 15 * g, ", ")
        .concat(1 - 15.5 * g, ") scale(")
        .concat(g, ")");
function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
    return t.map((t) => Math.max(n, Math.min(l, t + y(-e, e))));
}
function y(e, t) {
    return Math.random() * (t - e) + e;
}
let N = [6, 10, 9, 16, 8],
    A = {
        [u.s.GENTLE_AMBIENT]: {
            firstState: "burst",
            transitionConfig: {
                durationMs: 180,
                timingFunction: c,
            },
            states: {
                burst: {
                    getHeights: () => b(4),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(3000, 6000),
                    getNextState: () => "quiet",
                },
                quiet: {
                    getHeights: () => b(3),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(1000, 3000),
                    getNextState: () => "burst",
                },
            },
        },
        [u.s.GENTLE_AMBIENT_WITH_INTRO]: {
            firstState: "introSilent",
            transitionConfig: {
                durationMs: 100,
                timingFunction: c,
            },
            states: {
                introSilent: {
                    getHeights: () =>
                        (function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                            return [, , , , ,].fill(0).map(() => t + y(0, e));
                        })(),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(32, 64),
                    getNextState: () => "waveBuildCenter",
                },
                waveBuildCenter: {
                    getHeights: () => b(3, [2, 2, 5, 2, 2]),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(32, 64),
                    getNextState: () => "waveBuildRight1",
                },
                waveBuildRight1: {
                    getHeights: () => b(4, [3, 3, 10, 6, 3], 1),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(32, 64),
                    getNextState: () => "waveBuildRight2",
                },
                waveBuildRight2: {
                    getHeights: () => b(4, [3, 3, 7, 12, 6], 1),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(32, 64),
                    getNextState: () => "wavePeakRight",
                },
                wavePeakRight: {
                    getHeights: () => b(4, [3, 3, 5, 10, 16], 1),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(32, 64),
                    getNextState: () => "waveReturnLeft1",
                },
                waveReturnLeft1: {
                    getHeights: () => b(5, [3, 3, 8, 13, 7]),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(32, 64),
                    getNextState: () => "waveReturnLeft2",
                },
                waveReturnLeft2: {
                    getHeights: () => b(5, [4, 6, 12, 9, 6]),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(32, 64),
                    getNextState: () => "burst",
                },
                burst: {
                    getHeights: () => b(4),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(3000, 6000),
                    getNextState: () => "quiet",
                },
                quiet: {
                    getHeights: () => b(3),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(1000, 3000),
                    getNextState: () => "burst",
                },
            },
        },
        [u.s.HIGH_CONTRAST]: {
            firstState: "burst",
            transitionConfig: {
                durationMs: 120,
                timingFunction: c,
            },
            states: {
                burst: {
                    getHeights: () => b(7, N),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(3000, 6000),
                    getNextState: () => "quiet",
                },
                quiet: {
                    getHeights: () => b(4, N),
                    getAnimationDelay: () => y(64, 128),
                    getStateDuration: () => y(1000, 3000),
                    getNextState: () => "burst",
                },
            },
        },
    };
function E(e) {
    let t,
        n,
        c,
        {
            color: g = "currentColor",
            className: b,
            iconSize: y = 20,
            animationStyle: N = u.s.GENTLE_AMBIENT,
            locked: E = !1,
        } = e,
        p = r.useId(),
        O = (0, a.bG)([s.A], () => s.A.useReducedMotion),
        T = (0, a.bG)([o.A], () => o.A.isAppFocused()),
        [v, S] = r.useState(!1),
        j = r.useCallback((e) => {
            S((t) => (t !== e ? e : t));
        }, []),
        x = (0, i.K)(j, 0.15),
        I = A[N],
        D = O || !T || !v,
        _ = r.useMemo(() => I.states[I.firstState].getHeights(), [I]),
        w = (y - 18) / 2,
        C = D ? 0 : I.transitionConfig.durationMs,
        M = r.useRef(null),
        L = r.useMemo(
            () => ({
                transformBox: "fill-box",
                transformOrigin: "center",
                transitionProperty: "transform",
                transitionDuration: "".concat(C, "ms"),
                transitionTimingFunction: I.transitionConfig.timingFunction,
            }),
            [I.transitionConfig.timingFunction, C],
        ),
        R = r.useCallback(
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
        O || R(_);
    }, [R, _, O]),
        (t = r.useRef(I.firstState)),
        (n = r.useRef(null)),
        (c = !D),
        r.useEffect(() => {
            if (!c) return;
            (t.current = I.firstState), (n.current = null);
            let e = null,
                l = null,
                r = !1;
            n.current = {
                now: Date.now(),
                stateEnterTime: Date.now(),
                stateEndTime: 0,
            };
            let i = n.current,
                a = (e) => {
                    i.stateEnterTime = i.now;
                    let t = e.getStateDuration();
                    i.stateEndTime = t > 0 ? i.now + t : 0;
                },
                s = (t) => {
                    if ((o(), !r)) {
                        if (t <= 0) {
                            l = requestAnimationFrame(u);
                            return;
                        }
                        e = setTimeout(() => {
                            (e = null), r || (l = requestAnimationFrame(u));
                        }, t);
                    }
                },
                o = () => {
                    null != e && (clearTimeout(e), (e = null)), null != l && (cancelAnimationFrame(l), (l = null));
                },
                u = () => {
                    if (r) return;
                    (e = null), (l = null), (i.now = Date.now());
                    let n = t.current,
                        o = I.states[n];
                    if (null == o) {
                        (t.current = I.firstState), s(0);
                        return;
                    }
                    try {
                        let e = o.getHeights();
                        R(e);
                    } catch (e) {
                        r = !0;
                        return;
                    }
                    if (0 === i.stateEndTime || i.now >= i.stateEndTime) {
                        let e = o.getNextState();
                        t.current = e;
                        let n = I.states[e];
                        null != n && a(n);
                    }
                    s(o.getAnimationDelay());
                },
                d = I.states[t.current];
            return (
                null != d && a(d),
                s(0),
                () => {
                    (r = !0), o();
                }
            );
        }, [R, c, I]);
    let G = E
            ? (0, l.jsx)("defs", {
                  children: (0, l.jsxs)("mask", {
                      id: p,
                      children: [
                          (0, l.jsx)("rect", {
                              width: y,
                              height: y,
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
        P = E ? "url(#".concat(p, ")") : void 0;
    return O
        ? (0, l.jsx)("span", {
              ref: x,
              className: b,
              style: { display: "inline-flex" },
              children: (0, l.jsxs)("svg", {
                  width: y,
                  height: y,
                  viewBox: "0 0 ".concat(y, " ").concat(y),
                  fill: "none",
                  children: [
                      G,
                      (0, l.jsx)("g", {
                          mask: P,
                          children: d.map((e, t) => {
                              let n = (y - e) / 2;
                              return (0, l.jsx)(
                                  "rect",
                                  {
                                      x: w + 4 * t,
                                      y: n,
                                      width: 2,
                                      height: e,
                                      rx: 1,
                                      fill: g,
                                  },
                                  t,
                              );
                          }),
                      }),
                      E &&
                          (0, l.jsx)("path", {
                              d: h,
                              transform: m,
                              fill: g,
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                          }),
                  ],
              }),
          })
        : (0, l.jsx)("span", {
              ref: x,
              className: b,
              style: { display: "inline-flex" },
              children: (0, l.jsxs)("svg", {
                  width: y,
                  height: y,
                  viewBox: "0 0 ".concat(y, " ").concat(y),
                  fill: "none",
                  children: [
                      G,
                      (0, l.jsx)("g", {
                          ref: M,
                          mask: P,
                          children: f.map((e) => {
                              let t = (y - 16) / 2;
                              return (0, l.jsx)(
                                  "rect",
                                  {
                                      x: w + 4 * e,
                                      y: t,
                                      width: 2,
                                      height: 16,
                                      rx: 1,
                                      fill: g,
                                      style: L,
                                  },
                                  e,
                              );
                          }),
                      }),
                      E &&
                          (0, l.jsx)("path", {
                              d: h,
                              transform: m,
                              fill: g,
                              fillRule: "evenodd",
                              clipRule: "evenodd",
                          }),
                  ],
              }),
          });
}
