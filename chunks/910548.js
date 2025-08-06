(n.d(t, { ZP: () => et }), n(388685));
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(505266),
    l = n(772848),
    c = n(468194),
    u = n(477690),
    d = n(481060),
    f = n(230711),
    _ = n(745510),
    p = n(549006),
    h = n(64078),
    m = n(29270),
    g = n(267642),
    E = n(739566),
    b = n(834129),
    y = n(981631),
    O = n(388032),
    v = n(573510);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            }));
    }
    return e;
}
function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let N = 50,
    C = {
        enter: {
            BEG: 0,
            END: 22
        },
        confetti: {
            BEG: 23,
            END: 119
        },
        leaf_peel: {
            BEG: 120,
            END: 160
        },
        leaf_fall: {
            BEG: 161,
            END: 163
        },
        exit: {
            BEG: 164,
            END: 200
        }
    };
var R = (function (e) {
    return ((e.TOP_LEFT = 'TOP_LEFT'), (e.TOP_RIGHT = 'TOP_RIGHT'), (e.BOTTOM_LEFT = 'BOTTOM_LEFT'), (e.BOTTOM_RIGHT = 'BOTTOM_RIGHT'), e);
})({});
let P = ['TOP_LEFT', 'TOP_RIGHT'],
    w = (0, c.Mg)(u.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    D = 11,
    L = 125,
    x = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    M = 10,
    k = 80,
    j = 80,
    U = 180,
    G = 8,
    B = 12,
    Z = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: (e) => ({
                x: e - D,
                y: e - L
            }),
            confettiVelocityDirection: {
                x: 1,
                y: 1
            },
            leafPosition: {
                x: 100,
                y: 144
            },
            leafRotationDirection: 1
        },
        TOP_RIGHT: {
            getConfettiPosition: (e) => ({
                x: D,
                y: e - L
            }),
            confettiVelocityDirection: {
                x: -1,
                y: 1
            },
            leafPosition: {
                x: 90,
                y: 144
            },
            leafRotationDirection: -1
        },
        BOTTOM_LEFT: A(T({}, x), {
            getConfettiPosition: (e) => ({
                x: e - D,
                y: L
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1
            }
        }),
        BOTTOM_RIGHT: A(T({}, x), {
            getConfettiPosition: (e) => ({
                x: D,
                y: L
            }),
            confettiVelocityDirection: {
                x: -1,
                y: -1
            }
        })
    }),
    F = 'falling-leaf';
function V(e) {
    switch (e.type) {
        case y.uaV.GUILD_BOOST_TIER_1:
            return y.Eu4.TIER_1;
        case y.uaV.GUILD_BOOST_TIER_2:
            return y.Eu4.TIER_2;
        case y.uaV.GUILD_BOOST_TIER_3:
            return y.Eu4.TIER_3;
    }
    return null;
}
function H() {
    switch (Math.floor(Math.random() * Object.keys(R).length)) {
        case 0:
            return 'TOP_LEFT';
        case 2:
            return 'TOP_RIGHT';
        case 3:
            return 'BOTTOM_LEFT';
        default:
            return 'BOTTOM_RIGHT';
    }
}
let Y = 45,
    W = ['#61D5B2'],
    K = n(303893),
    z = n(313226),
    q = [K, z];
function X() {
    return n
        .e('77843')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function Q(e, t) {
    if (null == e) return 'enter';
    switch (e) {
        case 'enter':
            return 'confetti';
        case 'confetti':
            if (P.includes(t)) return 'leaf_peel';
            return 'exit';
        case 'leaf_peel':
            return 'leaf_fall';
        case 'leaf_fall':
            return 'exit';
        case 'exit':
            return 'enter';
    }
}
function J(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : w,
        r = null == e ? void 0 : e.getBoundingClientRect();
    if (null == r)
        return {
            x: 0,
            y: 0
        };
    let i = Z[t].getConfettiPosition(n);
    return {
        x: r.left + i.x,
        y: r.top + i.y
    };
}
function $(e, t) {
    let n = null == e ? void 0 : e.getBoundingClientRect();
    if (null == n)
        return {
            x: 0,
            y: 0
        };
    let r = Z[t];
    return {
        x: n.left + r.leafPosition.x,
        y: n.top + r.leafPosition.y
    };
}
function ee(e) {
    let { onAnimationComplete: t, onClick: n, position: o, size: c } = e,
        u = i.useRef(null),
        [f, p] = i.useState(null),
        [h] = i.useState(null != o ? o : H()),
        { createMultipleConfettiAt: m, confettiCanvas: g } = i.useContext(_.h),
        [E, b] = i.useState(null),
        y = (0, s.uR)(g, E),
        O = Q(f, h),
        I = P.includes(h),
        T = I && 'exit' === f,
        S = i.useCallback((e) => {
            p(e);
        }, []),
        A = i.useCallback(() => {
            'exit' === f && (null == t || t());
        }, [t, f]),
        N = i.useCallback((e) => {
            u.current = e;
        }, []);
    return (
        i.useEffect(() => {
            if ('confetti' === f) {
                let { confettiVelocityDirection: e } = Z[h],
                    t = J(u.current, h, c);
                m(t.x, t.y, {
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: M * e.x,
                            y: j * e.y
                        },
                        maxValue: {
                            x: k * e.x,
                            y: U * e.y
                        }
                    }
                });
            }
        }, [m, h, f, c]),
        i.useEffect(() => {
            if (I && 'leaf_fall' === f) {
                let e = Z[h].leafRotationDirection;
                y.createConfetti(
                    {
                        id: ''.concat(F, '-').concat((0, l.Z)()),
                        position: {
                            type: 'static',
                            value: $(u.current, h)
                        },
                        size: {
                            type: 'static',
                            value: Y
                        },
                        rotation: {
                            type: 'linear-random',
                            minValue: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            maxValue: {
                                x: 0,
                                y: 0,
                                z: 0
                            },
                            minAddValue: {
                                x: 0,
                                y: 0,
                                z: G * e
                            },
                            maxAddValue: {
                                x: 0,
                                y: 0,
                                z: B * e
                            }
                        }
                    },
                    { sprite: 'TOP_LEFT' === h ? K : z }
                );
            }
        }, [I, y, h, f]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.Ji, {
                    ref: b,
                    sprites: q,
                    colors: W,
                    spriteWidth: Y,
                    spriteHeight: Y
                }),
                (0, r.jsx)(d.P3F, {
                    onClick: n,
                    className: a()(v.easterEggAnimationClickTarget, {
                        [v.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === h,
                        [v.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === h,
                        [v.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === h,
                        [v.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === h
                    }),
                    children: (0, r.jsx)(d.kci, {
                        animationRef: N,
                        className: a()(v.easterEggAnimation, { [v.easterEggAnimationHideLeaf]: T }),
                        nextScene: O,
                        sceneSegments: C,
                        onScenePlay: S,
                        onSceneComplete: A,
                        importData: X,
                        pauseWhileUnfocused: !1
                    })
                })
            ]
        })
    );
}
function et(e) {
    let t,
        { message: n, compact: o, guild: a, usernameHook: s, onClickMessage: l } = e,
        c = V(n),
        u = (0, m.Z)(n),
        { createMultipleConfettiAt: I, addClickListener: T } = i.useContext(_.h),
        [S, A] = i.useState(!1),
        C = i.useRef(null),
        { reducedMotion: R } = i.useContext(d.Sfi),
        P = (0, E.ZP)(n),
        w = P.nick,
        D = s(P);
    t =
        null == c || null == a
            ? u > 1
                ? O.intl.format(O.t.yfC9dn, {
                      username: w,
                      usernameHook: D,
                      numSubscriptions: u
                  })
                : O.intl.format(O.t['57St//'], {
                      username: w,
                      usernameHook: D
                  })
            : u > 1
              ? O.intl.format(O.t.PO9uJC, {
                    username: w,
                    usernameHook: D,
                    numSubscriptions: u,
                    guildName: a.name,
                    newTierName: (0, g.nW)(c)
                })
              : O.intl.format(O.t.cUfTTE, {
                    username: w,
                    usernameHook: D,
                    guildName: a.name,
                    newTierName: (0, g.nW)(c)
                });
    let L = i.useCallback(() => {
            if (!R.enabled)
                if (S || 0 !== Math.floor(Math.random() * N)) {
                    var e;
                    let t = null == (e = C.current) ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    I(t.left + t.width / 2, t.top + t.height / 2);
                } else A(!0);
        }, [I, R, S]),
        x = i.useCallback(() => {
            A(!1);
        }, []),
        M = i.useCallback(() => {
            ((0, h.AI)({ settingsVisible: !0 }), f.Z.open(y.oAB.POGGERMODE), A(!1));
        }, []),
        k = i.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(F)) && M();
            },
            [M]
        );
    i.useEffect(() => T(k));
    let j = (0, r.jsx)(d.P3F, {
        className: v.iconWrapper,
        innerRef: C,
        onClick: l,
        children: (0, r.jsx)(d.$Eu, {
            color: d.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: v.icon,
            onMouseEnter: L
        })
    });
    return (0, r.jsxs)(b.Z, {
        iconNode: j,
        timestamp: n.timestamp,
        compact: o,
        children: [
            (0, r.jsx)('div', {
                onClick: l,
                className: v.message,
                children: t
            }),
            S
                ? (0, r.jsx)(p.ZP, {
                      children: (0, r.jsx)('div', {
                          className: v.cannonWrapper,
                          children: (0, r.jsx)(ee, {
                              onAnimationComplete: x,
                              onClick: M
                          })
                      })
                  })
                : null
        ]
    });
}
