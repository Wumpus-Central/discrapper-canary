n.d(t, { Ay: () => en }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(106778),
    l = n(835245),
    c = n(23339),
    u = n(319060),
    d = n(397927),
    f = n(21161),
    p = n(513609),
    _ = n(928830),
    h = n(567771),
    m = n(780964),
    g = n(840065),
    E = n(473145),
    b = n(763754),
    y = n(888675),
    O = n(652215),
    A = n(985018),
    v = n(811336);
function S(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = 50,
    R = {
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
var w = (function (e) {
    return (
        (e.TOP_LEFT = "TOP_LEFT"),
        (e.TOP_RIGHT = "TOP_RIGHT"),
        (e.BOTTOM_LEFT = "BOTTOM_LEFT"),
        (e.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
        e
    );
})({});
let P = ["TOP_LEFT", "TOP_RIGHT"],
    D = (0, c.xI)(u.A.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    x = 11,
    L = 125,
    j = {
        leafPosition: {
            x: 85,
            y: 125,
        },
        leafRotationDirection: 1,
    },
    M = 10,
    k = 80,
    U = 80,
    G = 180,
    V = 8,
    F = 12,
    B = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: (e) => ({
                x: e - x,
                y: e - L,
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
                x: x,
                y: e - L,
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
        BOTTOM_LEFT: C(I({}, j), {
            getConfettiPosition: (e) => ({
                x: e - x,
                y: L,
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1,
            },
        }),
        BOTTOM_RIGHT: C(I({}, j), {
            getConfettiPosition: (e) => ({
                x: x,
                y: L,
            }),
            confettiVelocityDirection: {
                x: -1,
                y: -1,
            },
        }),
    }),
    H = "falling-leaf";
function Y(e) {
    switch (e.type) {
        case O.lAJ.GUILD_BOOST_TIER_1:
            return O.TVA.TIER_1;
        case O.lAJ.GUILD_BOOST_TIER_2:
            return O.TVA.TIER_2;
        case O.lAJ.GUILD_BOOST_TIER_3:
            return O.TVA.TIER_3;
    }
    return null;
}
function W() {
    switch (Math.floor(Math.random() * Object.keys(w).length)) {
        case 0:
            return "TOP_LEFT";
        case 2:
            return "TOP_RIGHT";
        case 3:
            return "BOTTOM_LEFT";
        default:
            return "BOTTOM_RIGHT";
    }
}
let K = 45,
    z = ["#61D5B2"],
    q = n(80705),
    X = n(232460),
    Z = [q, X];
function Q() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function $(e, t) {
    if (null == e) return "enter";
    switch (e) {
        case "enter":
            return "confetti";
        case "confetti":
            if (P.includes(t)) return "leaf_peel";
            return "exit";
        case "leaf_peel":
            return "leaf_fall";
        case "leaf_fall":
            return "exit";
        case "exit":
            return "enter";
    }
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : D,
        r = null == e ? void 0 : e.getBoundingClientRect();
    if (null == r)
        return {
            x: 0,
            y: 0,
        };
    let i = B[t].getConfettiPosition(n);
    return {
        x: r.left + i.x,
        y: r.top + i.y,
    };
}
function ee(e, t) {
    let n = null == e ? void 0 : e.getBoundingClientRect();
    if (null == n)
        return {
            x: 0,
            y: 0,
        };
    let r = B[t];
    return {
        x: n.left + r.leafPosition.x,
        y: n.top + r.leafPosition.y,
    };
}
function et(e) {
    let { onAnimationComplete: t, onClick: n, position: a, size: c } = e,
        u = i.useRef(null),
        [p, _] = i.useState(null),
        [h] = i.useState(null != a ? a : W()),
        { createMultipleConfettiAt: m, confettiCanvas: g } = i.useContext(f.x),
        [E, b] = i.useState(null),
        y = (0, o.f9)(g, E),
        O = $(p, h),
        A = P.includes(h),
        S = A && "exit" === p,
        I = i.useCallback((e) => {
            _(e);
        }, []),
        T = i.useCallback(() => {
            "exit" === p && (null == t || t());
        }, [t, p]),
        C = i.useCallback((e) => {
            u.current = e;
        }, []);
    return (
        i.useEffect(() => {
            if ("confetti" === p) {
                let { confettiVelocityDirection: e } = B[h],
                    t = J(u.current, h, c);
                m(t.x, t.y, {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: M * e.x,
                            y: U * e.y,
                        },
                        maxValue: {
                            x: k * e.x,
                            y: G * e.y,
                        },
                    },
                });
            }
        }, [m, h, p, c]),
        i.useEffect(() => {
            if (A && "leaf_fall" === p) {
                let e = B[h].leafRotationDirection;
                y.createConfetti(
                    {
                        id: "".concat(H, "-").concat((0, l.A)()),
                        position: {
                            type: "static",
                            value: ee(u.current, h),
                        },
                        size: {
                            type: "static",
                            value: K,
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
                                z: V * e,
                            },
                            maxAddValue: {
                                x: 0,
                                y: 0,
                                z: F * e,
                            },
                        },
                    },
                    { sprite: "TOP_LEFT" === h ? q : X },
                );
            }
        }, [A, y, h, p]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(o.K_, {
                    ref: b,
                    sprites: Z,
                    colors: z,
                    spriteWidth: K,
                    spriteHeight: K,
                }),
                (0, r.jsx)(d.DUT, {
                    onClick: n,
                    className: s()(v.FT, {
                        [v.FZ]: "TOP_LEFT" === h,
                        [v.S]: "TOP_RIGHT" === h,
                        [v.Re]: "BOTTOM_LEFT" === h,
                        [v._t]: "BOTTOM_RIGHT" === h,
                    }),
                    children: (0, r.jsx)(d.tvC, {
                        animationRef: C,
                        className: s()(v.oQ, { [v.EG]: S }),
                        nextScene: O,
                        sceneSegments: R,
                        onScenePlay: I,
                        onSceneComplete: T,
                        importData: Q,
                        pauseWhileUnfocused: !1,
                    }),
                }),
            ],
        })
    );
}
function en(e) {
    let t,
        { message: n, compact: a, guild: s, usernameHook: o, onClickMessage: l } = e,
        c = Y(n),
        u = (0, h.A)(n),
        { createMultipleConfettiAt: S, addClickListener: I } = i.useContext(f.x),
        [T, C] = i.useState(!1),
        R = i.useRef(null),
        { reducedMotion: w } = i.useContext(d.CZY),
        P = (0, b.Ay)(n),
        D = P.nick,
        x = o(P);
    t =
        null == c || null == s
            ? u > 1
                ? A.intl.format(A.t.yfC9ds, {
                      username: D,
                      usernameHook: x,
                      numSubscriptions: u,
                  })
                : A.intl.format(A.t["57St/7"], {
                      username: D,
                      usernameHook: x,
                  })
            : u > 1
              ? A.intl.format(A.t.PO9uJD, {
                    username: D,
                    usernameHook: x,
                    numSubscriptions: u,
                    guildName: s.name,
                    newTierName: (0, E.gb)(c),
                })
              : A.intl.format(A.t.cUfTTE, {
                    username: D,
                    usernameHook: x,
                    guildName: s.name,
                    newTierName: (0, E.gb)(c),
                });
    let L = i.useCallback(() => {
            if (!w.enabled)
                if (T || 0 !== Math.floor(Math.random() * N)) {
                    var e;
                    let t = null == (e = R.current) ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    S(t.left + t.width / 2, t.top + t.height / 2);
                } else C(!0);
        }, [S, w, T]),
        j = i.useCallback(() => {
            C(!1);
        }, []),
        M = i.useCallback(() => {
            (0, _.O9)({ settingsVisible: !0 }),
                (0, g.openUserSettings)(m.X.POGGERMODE_PANEL, { section: O.nc_.POGGERMODE }),
                C(!1);
        }, []),
        k = i.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(H)) && M();
            },
            [M],
        );
    i.useEffect(() => I(k));
    let U = i.useCallback(
            (e) => {
                e.target === e.currentTarget && l(e);
            },
            [l],
        ),
        G = (0, r.jsx)(d.DUT, {
            className: v.P0,
            innerRef: R,
            onClick: l,
            children: (0, r.jsx)(d._Jp, {
                color: d.LU0.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: v.Kk,
                onMouseEnter: L,
            }),
        });
    return (0, r.jsxs)(y.A, {
        iconNode: G,
        timestamp: n.timestamp,
        compact: a,
        children: [
            (0, r.jsx)("div", {
                onClick: U,
                className: v.iU,
                children: t,
            }),
            T
                ? (0, r.jsx)(p.Ay, {
                      children: (0, r.jsx)("div", {
                          className: v.LK,
                          children: (0, r.jsx)(et, {
                              onAnimationComplete: j,
                              onClick: M,
                          }),
                      }),
                  })
                : null,
        ],
    });
}
