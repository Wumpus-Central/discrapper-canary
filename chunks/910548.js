n.d(t, { ZP: () => en }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(238651),
    l = n(772848),
    c = n(468194),
    u = n(477690),
    d = n(481060),
    f = n(745510),
    _ = n(549006),
    p = n(64078),
    h = n(29270),
    m = n(313789),
    g = n(518596),
    E = n(267642),
    b = n(739566),
    y = n(834129),
    O = n(981631),
    v = n(388032),
    I = n(465687);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
            : A(Object(t)).forEach(function (n) {
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
var P = (function (e) {
    return (
        (e.TOP_LEFT = "TOP_LEFT"),
        (e.TOP_RIGHT = "TOP_RIGHT"),
        (e.BOTTOM_LEFT = "BOTTOM_LEFT"),
        (e.BOTTOM_RIGHT = "BOTTOM_RIGHT"),
        e
    );
})({});
let w = ["TOP_LEFT", "TOP_RIGHT"],
    D = (0, c.Mg)(u.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    x = 11,
    L = 125,
    M = {
        leafPosition: {
            x: 85,
            y: 125,
        },
        leafRotationDirection: 1,
    },
    j = 10,
    k = 80,
    U = 80,
    G = 180,
    B = 8,
    Z = 12,
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
        BOTTOM_LEFT: C(S({}, M), {
            getConfettiPosition: (e) => ({
                x: e - x,
                y: L,
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1,
            },
        }),
        BOTTOM_RIGHT: C(S({}, M), {
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
    switch (Math.floor(Math.random() * Object.keys(P).length)) {
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
    X = [z, q];
function Q() {
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
            if (w.includes(t)) return "leaf_peel";
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
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : D,
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
        [_, p] = i.useState(null),
        [h] = i.useState(null != a ? a : Y()),
        { createMultipleConfettiAt: m, confettiCanvas: g } = i.useContext(f.h),
        [E, b] = i.useState(null),
        y = (0, s.uR)(g, E),
        O = J(_, h),
        v = w.includes(h),
        T = v && "exit" === _,
        S = i.useCallback((e) => {
            p(e);
        }, []),
        A = i.useCallback(() => {
            "exit" === _ && (null == t || t());
        }, [t, _]),
        C = i.useCallback((e) => {
            u.current = e;
        }, []);
    return (
        i.useEffect(() => {
            if ("confetti" === _) {
                let { confettiVelocityDirection: e } = F[h],
                    t = $(u.current, h, c);
                m(t.x, t.y, {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: j * e.x,
                            y: U * e.y,
                        },
                        maxValue: {
                            x: k * e.x,
                            y: G * e.y,
                        },
                    },
                });
            }
        }, [m, h, _, c]),
        i.useEffect(() => {
            if (v && "leaf_fall" === _) {
                let e = F[h].leafRotationDirection;
                y.createConfetti(
                    {
                        id: "".concat(V, "-").concat((0, l.Z)()),
                        position: {
                            type: "static",
                            value: ee(u.current, h),
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
                                z: B * e,
                            },
                            maxAddValue: {
                                x: 0,
                                y: 0,
                                z: Z * e,
                            },
                        },
                    },
                    { sprite: "TOP_LEFT" === h ? z : q },
                );
            }
        }, [v, y, h, _]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.Ji, {
                    ref: b,
                    sprites: X,
                    colors: K,
                    spriteWidth: W,
                    spriteHeight: W,
                }),
                (0, r.jsx)(d.P3F, {
                    onClick: n,
                    className: o()(I.easterEggAnimationClickTarget, {
                        [I.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === h,
                        [I.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === h,
                        [I.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === h,
                        [I.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === h,
                    }),
                    children: (0, r.jsx)(d.kci, {
                        animationRef: C,
                        className: o()(I.easterEggAnimation, { [I.easterEggAnimationHideLeaf]: T }),
                        nextScene: O,
                        sceneSegments: R,
                        onScenePlay: S,
                        onSceneComplete: A,
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
        { message: n, compact: a, guild: o, usernameHook: s, onClickMessage: l } = e,
        c = H(n),
        u = (0, h.Z)(n),
        { createMultipleConfettiAt: T, addClickListener: S } = i.useContext(f.h),
        [A, C] = i.useState(!1),
        R = i.useRef(null),
        { reducedMotion: P } = i.useContext(d.Sfi),
        w = (0, b.ZP)(n),
        D = w.nick,
        x = s(w);
    t =
        null == c || null == o
            ? u > 1
                ? v.intl.format(v.t.yfC9ds, {
                      username: D,
                      usernameHook: x,
                      numSubscriptions: u,
                  })
                : v.intl.format(v.t["57St/7"], {
                      username: D,
                      usernameHook: x,
                  })
            : u > 1
              ? v.intl.format(v.t.PO9uJD, {
                    username: D,
                    usernameHook: x,
                    numSubscriptions: u,
                    guildName: o.name,
                    newTierName: (0, E.nW)(c),
                })
              : v.intl.format(v.t.cUfTTE, {
                    username: D,
                    usernameHook: x,
                    guildName: o.name,
                    newTierName: (0, E.nW)(c),
                });
    let L = i.useCallback(() => {
            if (!P.enabled)
                if (A || 0 !== Math.floor(Math.random() * N)) {
                    var e;
                    let t = null == (e = R.current) ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    T(t.left + t.width / 2, t.top + t.height / 2);
                } else C(!0);
        }, [T, P, A]),
        M = i.useCallback(() => {
            C(!1);
        }, []),
        j = i.useCallback(() => {
            (0, p.AI)({ settingsVisible: !0 }),
                (0, g.openUserSettings)(m.n.POGGERMODE_PANEL, { section: O.oAB.POGGERMODE }),
                C(!1);
        }, []),
        k = i.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(V)) && j();
            },
            [j],
        );
    i.useEffect(() => S(k));
    let U = (0, r.jsx)(d.P3F, {
        className: I.iconWrapper,
        innerRef: R,
        onClick: l,
        children: (0, r.jsx)(d.Ucv, {
            color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: I.icon,
            onMouseEnter: L,
        }),
    });
    return (0, r.jsxs)(y.Z, {
        iconNode: U,
        timestamp: n.timestamp,
        compact: a,
        children: [
            (0, r.jsx)("div", {
                onClick: l,
                className: I.message,
                children: t,
            }),
            A
                ? (0, r.jsx)(_.ZP, {
                      children: (0, r.jsx)("div", {
                          className: I.cannonWrapper,
                          children: (0, r.jsx)(et, {
                              onAnimationComplete: M,
                              onClick: j,
                          }),
                      }),
                  })
                : null,
        ],
    });
}
