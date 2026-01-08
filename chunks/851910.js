n.d(t, { Z: () => T }), n(388685);
var l = n(54381),
    i = n(473749),
    r = n(907331),
    a = n(442837),
    o = n(607070),
    u = n(451478),
    s = n(454135);
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
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
        l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 16;
    return t.map((t) => Math.max(n, Math.min(l, t + E(-e, e))));
}
function E(e, t) {
    return Math.random() * (t - e) + e;
}
let y = [6, 10, 9, 16, 8],
    v = {
        [s.i.GENTLE_AMBIENT]: {
            firstState: "burst",
            transitionConfig: {
                durationMs: 180,
                timingFunction: c,
            },
            states: {
                burst: {
                    getHeights: () => N(4),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(3000, 6000),
                    getNextState: () => "quiet",
                },
                quiet: {
                    getHeights: () => N(3),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(1000, 3000),
                    getNextState: () => "burst",
                },
            },
        },
        [s.i.GENTLE_AMBIENT_WITH_INTRO]: {
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
                            return [, , , , ,].fill(0).map(() => t + E(0, e));
                        })(),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(32, 64),
                    getNextState: () => "waveBuildCenter",
                },
                waveBuildCenter: {
                    getHeights: () => N(3, [2, 2, 5, 2, 2]),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(32, 64),
                    getNextState: () => "waveBuildRight1",
                },
                waveBuildRight1: {
                    getHeights: () => N(4, [3, 3, 10, 6, 3], 1),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(32, 64),
                    getNextState: () => "waveBuildRight2",
                },
                waveBuildRight2: {
                    getHeights: () => N(4, [3, 3, 7, 12, 6], 1),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(32, 64),
                    getNextState: () => "wavePeakRight",
                },
                wavePeakRight: {
                    getHeights: () => N(4, [3, 3, 5, 10, 16], 1),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(32, 64),
                    getNextState: () => "waveReturnLeft1",
                },
                waveReturnLeft1: {
                    getHeights: () => N(5, [3, 3, 8, 13, 7]),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(32, 64),
                    getNextState: () => "waveReturnLeft2",
                },
                waveReturnLeft2: {
                    getHeights: () => N(5, [4, 6, 12, 9, 6]),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(32, 64),
                    getNextState: () => "burst",
                },
                burst: {
                    getHeights: () => N(4),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(3000, 6000),
                    getNextState: () => "quiet",
                },
                quiet: {
                    getHeights: () => N(3),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(1000, 3000),
                    getNextState: () => "burst",
                },
            },
        },
        [s.i.HIGH_CONTRAST]: {
            firstState: "burst",
            transitionConfig: {
                durationMs: 120,
                timingFunction: c,
            },
            states: {
                burst: {
                    getHeights: () => N(7, y),
                    getAnimationDelay: () => E(64, 128),
                    getStateDuration: () => E(3000, 6000),
                    getNextState: () => "quiet",
                },
                quiet: {
                    getHeights: () => N(4, y),
                    getAnimationDelay: () => E(64, 128),
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
            iconSize: c = 20,
            animationStyle: g = s.i.GENTLE_AMBIENT,
            locked: N = !1,
        } = e,
        E = i.useId(),
        y = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        T = (0, a.e7)([u.Z], () => u.Z.isAppFocused()),
        [O, p] = i.useState(!1),
        S = i.useCallback((e) => {
            p((t) => (t !== e ? e : t));
        }, []),
        b = (0, r.O)(S, 0.15),
        j = v[g],
        I = y || !T || !O,
        x = i.useMemo(() => j.states[j.firstState].getHeights(), [j]),
        D = (c - 18) / 2,
        _ = I ? 0 : j.transitionConfig.durationMs,
        C = i.useRef(null),
        A = i.useMemo(
            () => ({
                transformBox: "fill-box",
                transformOrigin: "center",
                transitionProperty: "transform",
                transitionDuration: "".concat(_, "ms"),
                transitionTimingFunction: j.transitionConfig.timingFunction,
            }),
            [j.transitionConfig.timingFunction, _],
        ),
        w = i.useCallback(
            (e) => {
                let t = C.current;
                if (null == t) return;
                let n = t.children;
                for (let t = 0; t < 5; t++) {
                    let l = n.item(t);
                    if (null == l) continue;
                    let i = e[t],
                        r = Math.max(2, Math.min(16, "number" == typeof i && Number.isFinite(i) ? i : 2)) / 16;
                    l.style.transform = "scaleY(".concat(r, ")");
                }
            },
            [C],
        );
    i.useLayoutEffect(() => {
        y || w(x);
    }, [w, x, y]);
    let M = i.useRef(j.firstState),
        L = i.useRef(null),
        R = !I;
    i.useEffect(() => {
        if (!R) return;
        (M.current = j.firstState), (L.current = null);
        let e = null,
            t = null,
            n = !1;
        L.current = {
            now: Date.now(),
            stateEnterTime: Date.now(),
            stateEndTime: 0,
        };
        let l = L.current,
            i = (e) => {
                l.stateEnterTime = l.now;
                let t = e.getStateDuration();
                l.stateEndTime = t > 0 ? l.now + t : 0;
            },
            r = (l) => {
                if ((a(), !n)) {
                    if (l <= 0) {
                        t = requestAnimationFrame(o);
                        return;
                    }
                    e = setTimeout(() => {
                        (e = null), n || (t = requestAnimationFrame(o));
                    }, l);
                }
            },
            a = () => {
                null != e && (clearTimeout(e), (e = null)), null != t && (cancelAnimationFrame(t), (t = null));
            },
            o = () => {
                if (n) return;
                (e = null), (t = null), (l.now = Date.now());
                let a = M.current,
                    o = j.states[a];
                if (null == o) {
                    (M.current = j.firstState), r(0);
                    return;
                }
                try {
                    let e = o.getHeights();
                    w(e);
                } catch (e) {
                    n = !0;
                    return;
                }
                if (0 === l.stateEndTime || l.now >= l.stateEndTime) {
                    let e = o.getNextState();
                    M.current = e;
                    let t = j.states[e];
                    null != t && i(t);
                }
                r(o.getAnimationDelay());
            },
            u = j.states[M.current];
        return (
            null != u && i(u),
            r(0),
            () => {
                (n = !0), a();
            }
        );
    }, [w, R, j]);
    let P = N
            ? (0, l.jsx)("defs", {
                  children: (0, l.jsxs)("mask", {
                      id: E,
                      children: [
                          (0, l.jsx)("rect", {
                              width: c,
                              height: c,
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
        G = N ? "url(#".concat(E, ")") : void 0;
    return y
        ? (0, l.jsx)("span", {
              ref: b,
              className: n,
              style: { display: "inline-flex" },
              children: (0, l.jsxs)("svg", {
                  width: c,
                  height: c,
                  viewBox: "0 0 ".concat(c, " ").concat(c),
                  fill: "none",
                  children: [
                      P,
                      (0, l.jsx)("g", {
                          mask: G,
                          children: d.map((e, n) => {
                              let i = (c - e) / 2;
                              return (0, l.jsx)(
                                  "rect",
                                  {
                                      x: D + 4 * n,
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
                      N &&
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
              ref: b,
              className: n,
              style: { display: "inline-flex" },
              children: (0, l.jsxs)("svg", {
                  width: c,
                  height: c,
                  viewBox: "0 0 ".concat(c, " ").concat(c),
                  fill: "none",
                  children: [
                      P,
                      (0, l.jsx)("g", {
                          ref: C,
                          mask: G,
                          children: f.map((e) => {
                              let n = (c - 16) / 2;
                              return (0, l.jsx)(
                                  "rect",
                                  {
                                      x: D + 4 * e,
                                      y: n,
                                      width: 2,
                                      height: 16,
                                      rx: 1,
                                      fill: t,
                                      style: A,
                                  },
                                  e,
                              );
                          }),
                      }),
                      N &&
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
