n.d(t, { ZP: () => en }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(921254),
    l = n(772848),
    c = n(468194),
    u = n(477690),
    d = n(481060),
    f = n(745510),
    p = n(549006),
    _ = n(64078),
    m = n(29270),
    h = n(313789),
    g = n(518596),
    E = n(267642),
    b = n(739566),
    y = n(834129),
    O = n(981631),
    v = n(388032),
    S = n(465687);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = 50,
    P = {
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
var R = (function (e) {
    return (
        (e.TOP_LEFT = "TOP_LEFT"),
        (e.TOP_RIGHT = "TOP_RIGHT"),
        (e.BOTTOM_LEFT = "BOTTOM_LEFT"),
        (e.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
        e
    );
})({});
let D = ["TOP_LEFT", "TOP_RIGHT"],
    w = (0, c.Mg)(u.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
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
    Z = 8,
    B = 12,
    F = Object.freeze({
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
        BOTTOM_LEFT: A(T({}, j), {
            getConfettiPosition: (e) => ({
                x: e - x,
                y: L,
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1,
            },
        }),
        BOTTOM_RIGHT: A(T({}, j), {
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
    V = "falling-leaf";
function H(e) {
    switch (e.type) {
        case O.uaV.GUILD_BOOST_TIER_1:
            return O.Eu4.TIER_1;
        case O.uaV.GUILD_BOOST_TIER_2:
            return O.Eu4.TIER_2;
        case O.uaV.GUILD_BOOST_TIER_3:
            return O.Eu4.TIER_3;
    }
    return null;
}
function Y() {
    switch (Math.floor(Math.random() * Object.keys(R).length)) {
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
let W = 45,
    K = ["#61D5B2"],
    z = n(303893),
    q = n(313226),
    Q = [z, q];
function X() {
    return n
        .e("77843")
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function J(e, t) {
    if (null == e) return "enter";
    switch (e) {
        case "enter":
            return "confetti";
        case "confetti":
            if (D.includes(t)) return "leaf_peel";
            return "exit";
        case "leaf_peel":
            return "leaf_fall";
        case "leaf_fall":
            return "exit";
        case "exit":
            return "enter";
    }
}
function $(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w,
        r = null == e ? void 0 : e.getBoundingClientRect();
    if (null == r)
        return {
            x: 0,
            y: 0,
        };
    let i = F[t].getConfettiPosition(n);
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
    let r = F[t];
    return {
        x: n.left + r.leafPosition.x,
        y: n.top + r.leafPosition.y,
    };
}
function et(e) {
    let { onAnimationComplete: t, onClick: n, position: a, size: c } = e,
        u = i.useRef(null),
        [p, _] = i.useState(null),
        [m] = i.useState(null != a ? a : Y()),
        { createMultipleConfettiAt: h, confettiCanvas: g } = i.useContext(f.h),
        [E, b] = i.useState(null),
        y = (0, s.uR)(g, E),
        O = J(p, m),
        v = D.includes(m),
        I = v && "exit" === p,
        T = i.useCallback((e) => {
            _(e);
        }, []),
        C = i.useCallback(() => {
            "exit" === p && (null == t || t());
        }, [t, p]),
        A = i.useCallback((e) => {
            u.current = e;
        }, []);
    return (
        i.useEffect(() => {
            if ("confetti" === p) {
                let { confettiVelocityDirection: e } = F[m],
                    t = $(u.current, m, c);
                h(t.x, t.y, {
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
        }, [h, m, p, c]),
        i.useEffect(() => {
            if (v && "leaf_fall" === p) {
                let e = F[m].leafRotationDirection;
                y.createConfetti(
                    {
                        id: "".concat(V, "-").concat((0, l.Z)()),
                        position: {
                            type: "static",
                            value: ee(u.current, m),
                        },
                        size: {
                            type: "static",
                            value: W,
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
                                z: Z * e,
                            },
                            maxAddValue: {
                                x: 0,
                                y: 0,
                                z: B * e,
                            },
                        },
                    },
                    { sprite: "TOP_LEFT" === m ? z : q },
                );
            }
        }, [v, y, m, p]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.Ji, {
                    ref: b,
                    sprites: Q,
                    colors: K,
                    spriteWidth: W,
                    spriteHeight: W,
                }),
                (0, r.jsx)(d.P3F, {
                    onClick: n,
                    className: o()(S.easterEggAnimationClickTarget, {
                        [S.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === m,
                        [S.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === m,
                        [S.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === m,
                        [S.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === m,
                    }),
                    children: (0, r.jsx)(d.kci, {
                        animationRef: A,
                        className: o()(S.easterEggAnimation, { [S.easterEggAnimationHideLeaf]: I }),
                        nextScene: O,
                        sceneSegments: P,
                        onScenePlay: T,
                        onSceneComplete: C,
                        importData: X,
                        pauseWhileUnfocused: !1,
                    }),
                }),
            ],
        })
    );
}
function en(e) {
    let t,
        { message: n, compact: a, guild: o, usernameHook: s, onClickMessage: l } = e,
        c = H(n),
        u = (0, m.Z)(n),
        { createMultipleConfettiAt: I, addClickListener: T } = i.useContext(f.h),
        [C, A] = i.useState(!1),
        P = i.useRef(null),
        { reducedMotion: R } = i.useContext(d.Sfi),
        D = (0, b.ZP)(n),
        w = D.nick,
        x = s(D);
    t =
        null == c || null == o
            ? u > 1
                ? v.intl.format(v.t.yfC9ds, {
                      username: w,
                      usernameHook: x,
                      numSubscriptions: u,
                  })
                : v.intl.format(v.t["57St/7"], {
                      username: w,
                      usernameHook: x,
                  })
            : u > 1
              ? v.intl.format(v.t.PO9uJD, {
                    username: w,
                    usernameHook: x,
                    numSubscriptions: u,
                    guildName: o.name,
                    newTierName: (0, E.nW)(c),
                })
              : v.intl.format(v.t.cUfTTE, {
                    username: w,
                    usernameHook: x,
                    guildName: o.name,
                    newTierName: (0, E.nW)(c),
                });
    let L = i.useCallback(() => {
            if (!R.enabled)
                if (C || 0 !== Math.floor(Math.random() * N)) {
                    var e;
                    let t = null == (e = P.current) ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    I(t.left + t.width / 2, t.top + t.height / 2);
                } else A(!0);
        }, [I, R, C]),
        j = i.useCallback(() => {
            A(!1);
        }, []),
        M = i.useCallback(() => {
            (0, _.AI)({ settingsVisible: !0 }),
                (0, g.openUserSettings)(h.n.POGGERMODE_PANEL, { section: O.oAB.POGGERMODE }),
                A(!1);
        }, []),
        k = i.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(V)) && M();
            },
            [M],
        );
    i.useEffect(() => T(k));
    let U = i.useCallback(
            (e) => {
                e.target === e.currentTarget && l(e);
            },
            [l],
        ),
        G = (0, r.jsx)(d.P3F, {
            className: S.iconWrapper,
            innerRef: P,
            onClick: l,
            children: (0, r.jsx)(d.Ucv, {
                color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
                className: S.icon,
                onMouseEnter: L,
            }),
        });
    return (0, r.jsxs)(y.Z, {
        iconNode: G,
        timestamp: n.timestamp,
        compact: a,
        children: [
            (0, r.jsx)("div", {
                onClick: U,
                className: S.message,
                children: t,
            }),
            C
                ? (0, r.jsx)(p.ZP, {
                      children: (0, r.jsx)("div", {
                          className: S.cannonWrapper,
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
