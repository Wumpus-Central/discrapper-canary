n.d(t, {
    Ay: () => B,
}),
    n(896048);
var r,
    i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(106778),
    c = n(835245),
    u = n(23339),
    d = n(319060),
    p = n(397927),
    m = n(21161),
    f = n(513609),
    g = n(928830),
    h = n(567771),
    _ = n(780964),
    b = n(840065),
    A = n(473145),
    y = n(763754),
    v = n(888675),
    x = n(652215),
    O = n(985018),
    E = n(811336);

function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = {
    enter: {
        BEG: 0,
        END: 22,
    },
    confetti: {
        BEG: 23,
        END: 119,
    },
    leaf_peel: {
        BEG: 120,
        END: 160,
    },
    leaf_fall: {
        BEG: 161,
        END: 163,
    },
    exit: {
        BEG: 164,
        END: 200,
    },
};
var S =
    (((r = {}).TOP_LEFT = "TOP_LEFT"),
    (r.TOP_RIGHT = "TOP_RIGHT"),
    (r.BOTTOM_LEFT = "BOTTOM_LEFT"),
    (r.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
    r);
let T = ["TOP_LEFT", "TOP_RIGHT"],
    N = (0, u.xI)(d.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    P = {
        leafPosition: {
            x: 85,
            y: 125,
        },
        leafRotationDirection: 1,
    },
    w = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: (e) => ({
                x: e - 11,
                y: e - 125,
            }),
            confettiVelocityDirection: {
                x: 1,
                y: 1,
            },
            leafPosition: {
                x: 100,
                y: 144,
            },
            leafRotationDirection: 1,
        },
        TOP_RIGHT: {
            getConfettiPosition: (e) => ({
                x: 11,
                y: e - 125,
            }),
            confettiVelocityDirection: {
                x: -1,
                y: 1,
            },
            leafPosition: {
                x: 90,
                y: 144,
            },
            leafRotationDirection: -1,
        },
        BOTTOM_LEFT: C(j({}, P), {
            getConfettiPosition: (e) => ({
                x: e - 11,
                y: 125,
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1,
            },
        }),
        BOTTOM_RIGHT: C(j({}, P), {
            getConfettiPosition: (e) => ({
                x: 11,
                y: 125,
            }),
            confettiVelocityDirection: {
                x: -1,
                y: -1,
            },
        }),
    }),
    R = "falling-leaf",
    D = ["#61D5B2"],
    L = n(80705),
    M = n(232460),
    k = [L, M];

function U() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}

function G(e) {
    let { onAnimationComplete: t, onClick: n, position: r, size: a } = e,
        u = l.useRef(null),
        [d, f] = l.useState(null),
        [g] = l.useState(
            null != r
                ? r
                : (function () {
                      switch (Math.floor(Math.random() * Object.keys(S).length)) {
                          case 0:
                              return "TOP_LEFT";
                          case 2:
                              return "TOP_RIGHT";
                          case 3:
                              return "BOTTOM_LEFT";
                          default:
                              return "BOTTOM_RIGHT";
                      }
                  })(),
        ),
        { createMultipleConfettiAt: h, confettiCanvas: _ } = l.useContext(m.x),
        [b, A] = l.useState(null),
        y = (0, o.f9)(_, b),
        v = (function (e, t) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    if (T.includes(t)) return "leaf_peel";
                    return "exit";
                case "leaf_peel":
                    return "leaf_fall";
                case "leaf_fall":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(d, g),
        x = T.includes(g),
        O = x && "exit" === d,
        j = l.useCallback((e) => {
            f(e);
        }, []),
        C = l.useCallback(() => {
            "exit" === d && (null == t || t());
        }, [t, d]),
        P = l.useCallback((e) => {
            u.current = e;
        }, []);
    return (
        l.useEffect(() => {
            if ("confetti" === d) {
                let { confettiVelocityDirection: e } = w[g],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N,
                            r = null == e ? void 0 : e.getBoundingClientRect();
                        if (null == r)
                            return {
                                x: 0,
                                y: 0,
                            };
                        let i = w[t].getConfettiPosition(n);
                        return {
                            x: r.left + i.x,
                            y: r.top + i.y,
                        };
                    })(u.current, g, a);
                h(t.x, t.y, {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 10 * e.x,
                            y: 80 * e.y,
                        },
                        maxValue: {
                            x: 80 * e.x,
                            y: 180 * e.y,
                        },
                    },
                });
            }
        }, [h, g, d, a]),
        l.useEffect(() => {
            if (x && "leaf_fall" === d) {
                let e = w[g].leafRotationDirection;
                y.createConfetti(
                    {
                        id: "".concat(R, "-").concat((0, c.A)()),
                        position: {
                            type: "static",
                            value: (function (e, t) {
                                let n = null == e ? void 0 : e.getBoundingClientRect();
                                if (null == n)
                                    return {
                                        x: 0,
                                        y: 0,
                                    };
                                let r = w[t];
                                return {
                                    x: n.left + r.leafPosition.x,
                                    y: n.top + r.leafPosition.y,
                                };
                            })(u.current, g),
                        },
                        size: {
                            type: "static",
                            value: 45,
                        },
                        rotation: {
                            type: "linear-random",
                            minValue: {
                                x: 0,
                                y: 0,
                                z: 0,
                            },
                            maxValue: {
                                x: 0,
                                y: 0,
                                z: 0,
                            },
                            minAddValue: {
                                x: 0,
                                y: 0,
                                z: 8 * e,
                            },
                            maxAddValue: {
                                x: 0,
                                y: 0,
                                z: 12 * e,
                            },
                        },
                    },
                    {
                        sprite: "TOP_LEFT" === g ? L : M,
                    },
                );
            }
        }, [x, y, g, d]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.K_, {
                    ref: A,
                    sprites: k,
                    colors: D,
                    spriteWidth: 45,
                    spriteHeight: 45,
                }),
                (0, i.jsx)(p.DUT, {
                    onClick: n,
                    className: s()(E.FT, {
                        [E.FZ]: "TOP_LEFT" === g,
                        [E.S]: "TOP_RIGHT" === g,
                        [E.Re]: "BOTTOM_LEFT" === g,
                        [E._t]: "BOTTOM_RIGHT" === g,
                    }),
                    children: (0, i.jsx)(p.tvC, {
                        animationRef: P,
                        className: s()(E.oQ, {
                            [E.EG]: O,
                        }),
                        nextScene: v,
                        sceneSegments: I,
                        onScenePlay: j,
                        onSceneComplete: C,
                        importData: U,
                        pauseWhileUnfocused: !1,
                    }),
                }),
            ],
        })
    );
}

function B(e) {
    let t,
        { message: n, compact: r, guild: a, usernameHook: s, onClickMessage: o } = e,
        c = (function (e) {
            switch (e.type) {
                case x.lAJ.GUILD_BOOST_TIER_1:
                    return x.TVA.TIER_1;
                case x.lAJ.GUILD_BOOST_TIER_2:
                    return x.TVA.TIER_2;
                case x.lAJ.GUILD_BOOST_TIER_3:
                    return x.TVA.TIER_3;
            }
            return null;
        })(n),
        u = (0, h.A)(n),
        { createMultipleConfettiAt: d, addClickListener: j } = l.useContext(m.x),
        [C, I] = l.useState(!1),
        S = l.useRef(null),
        { reducedMotion: T } = l.useContext(p.CZY),
        N = (0, y.Ay)(n),
        P = N.nick,
        w = s(N);
    t =
        null == c || null == a
            ? u > 1
                ? O.intl.format(O.t.yfC9ds, {
                      username: P,
                      usernameHook: w,
                      numSubscriptions: u,
                  })
                : O.intl.format(O.t["57St/7"], {
                      username: P,
                      usernameHook: w,
                  })
            : u > 1
              ? O.intl.format(O.t.PO9uJD, {
                    username: P,
                    usernameHook: w,
                    numSubscriptions: u,
                    guildName: a.name,
                    newTierName: (0, A.gb)(c),
                })
              : O.intl.format(O.t.cUfTTE, {
                    username: P,
                    usernameHook: w,
                    guildName: a.name,
                    newTierName: (0, A.gb)(c),
                });
    let D = l.useCallback(() => {
            if (!T.enabled)
                if (C || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null == (e = S.current) ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    d(t.left + t.width / 2, t.top + t.height / 2);
                } else I(!0);
        }, [d, T, C]),
        L = l.useCallback(() => {
            I(!1);
        }, []),
        M = l.useCallback(() => {
            (0, g.O9)({
                settingsVisible: !0,
            }),
                (0, b.openUserSettings)(_.X.POGGERMODE_PANEL, {
                    section: x.nc_.POGGERMODE,
                }),
                I(!1);
        }, []),
        k = l.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(R)) && M();
            },
            [M],
        );
    l.useEffect(() => j(k));
    let U = l.useCallback(
            (e) => {
                e.target === e.currentTarget && o(e);
            },
            [o],
        ),
        B = (0, i.jsx)(p.DUT, {
            className: E.P0,
            innerRef: S,
            onClick: o,
            children: (0, i.jsx)(p._Jp, {
                color: p.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: E.Kk,
                onMouseEnter: D,
            }),
        });
    return (0, i.jsxs)(v.A, {
        iconNode: B,
        timestamp: n.timestamp,
        compact: r,
        children: [
            (0, i.jsx)("div", {
                onClick: U,
                className: E.iU,
                children: t,
            }),
            C
                ? (0, i.jsx)(f.Ay, {
                      children: (0, i.jsx)("div", {
                          className: E.LK,
                          children: (0, i.jsx)(G, {
                              onAnimationComplete: L,
                              onClick: M,
                          }),
                      }),
                  })
                : null,
        ],
    });
}
