(n.d(t, { ZP: () => U }), n(388685));
var r,
    i = n(255367),
    l = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(505266),
    c = n(772848),
    u = n(468194),
    d = n(477690),
    p = n(481060),
    m = n(230711),
    f = n(745510),
    g = n(549006),
    _ = n(64078),
    h = n(29270),
    b = n(267642),
    E = n(739566),
    C = n(834129),
    v = n(981631),
    O = n(388032),
    x = n(573510);
function y(e) {
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
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function I(e, t) {
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
let j = {
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
var S = (((r = {}).TOP_LEFT = 'TOP_LEFT'), (r.TOP_RIGHT = 'TOP_RIGHT'), (r.BOTTOM_LEFT = 'BOTTOM_LEFT'), (r.BOTTOM_RIGHT = 'BOTTOM_RIGHT'), r);
let T = ['TOP_LEFT', 'TOP_RIGHT'],
    N = (0, u.Mg)(d.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    P = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    A = Object.freeze({
        TOP_LEFT: {
            getConfettiPosition: (e) => ({
                x: e - 11,
                y: e - 125
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
                x: 11,
                y: e - 125
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
        BOTTOM_LEFT: I(y({}, P), {
            getConfettiPosition: (e) => ({
                x: e - 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1
            }
        }),
        BOTTOM_RIGHT: I(y({}, P), {
            getConfettiPosition: (e) => ({
                x: 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: -1,
                y: -1
            }
        })
    }),
    w = 'falling-leaf',
    Z = ['#61D5B2'],
    R = n(303893),
    D = n(313226),
    L = [R, D];
function M() {
    return n
        .e('77843')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function k(e) {
    let { onAnimationComplete: t, onClick: n, position: r, size: a } = e,
        u = l.useRef(null),
        [d, m] = l.useState(null),
        [g] = l.useState(
            null != r
                ? r
                : (function () {
                      switch (Math.floor(Math.random() * Object.keys(S).length)) {
                          case 0:
                              return 'TOP_LEFT';
                          case 2:
                              return 'TOP_RIGHT';
                          case 3:
                              return 'BOTTOM_LEFT';
                          default:
                              return 'BOTTOM_RIGHT';
                      }
                  })()
        ),
        { createMultipleConfettiAt: _, confettiCanvas: h } = l.useContext(f.h),
        [b, E] = l.useState(null),
        C = (0, s.uR)(h, b),
        v = (function (e, t) {
            if (null == e) return 'enter';
            switch (e) {
                case 'enter':
                    return 'confetti';
                case 'confetti':
                    if (T.includes(t)) return 'leaf_peel';
                    return 'exit';
                case 'leaf_peel':
                    return 'leaf_fall';
                case 'leaf_fall':
                    return 'exit';
                case 'exit':
                    return 'enter';
            }
        })(d, g),
        O = T.includes(g),
        y = O && 'exit' === d,
        I = l.useCallback((e) => {
            m(e);
        }, []),
        P = l.useCallback(() => {
            'exit' === d && (null == t || t());
        }, [t, d]),
        k = l.useCallback((e) => {
            u.current = e;
        }, []);
    return (
        l.useEffect(() => {
            if ('confetti' === d) {
                let { confettiVelocityDirection: e } = A[g],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : N,
                            r = null == e ? void 0 : e.getBoundingClientRect();
                        if (null == r)
                            return {
                                x: 0,
                                y: 0
                            };
                        let i = A[t].getConfettiPosition(n);
                        return {
                            x: r.left + i.x,
                            y: r.top + i.y
                        };
                    })(u.current, g, a);
                _(t.x, t.y, {
                    velocity: {
                        type: 'static-random',
                        minValue: {
                            x: 10 * e.x,
                            y: 80 * e.y
                        },
                        maxValue: {
                            x: 80 * e.x,
                            y: 180 * e.y
                        }
                    }
                });
            }
        }, [_, g, d, a]),
        l.useEffect(() => {
            if (O && 'leaf_fall' === d) {
                let e = A[g].leafRotationDirection;
                C.createConfetti(
                    {
                        id: ''.concat(w, '-').concat((0, c.Z)()),
                        position: {
                            type: 'static',
                            value: (function (e, t) {
                                let n = null == e ? void 0 : e.getBoundingClientRect();
                                if (null == n)
                                    return {
                                        x: 0,
                                        y: 0
                                    };
                                let r = A[t];
                                return {
                                    x: n.left + r.leafPosition.x,
                                    y: n.top + r.leafPosition.y
                                };
                            })(u.current, g)
                        },
                        size: {
                            type: 'static',
                            value: 45
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
                                z: 8 * e
                            },
                            maxAddValue: {
                                x: 0,
                                y: 0,
                                z: 12 * e
                            }
                        }
                    },
                    { sprite: 'TOP_LEFT' === g ? R : D }
                );
            }
        }, [O, C, g, d]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Ji, {
                    ref: E,
                    sprites: L,
                    colors: Z,
                    spriteWidth: 45,
                    spriteHeight: 45
                }),
                (0, i.jsx)(p.P3F, {
                    onClick: n,
                    className: o()(x.easterEggAnimationClickTarget, {
                        [x.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === g,
                        [x.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === g,
                        [x.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === g,
                        [x.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === g
                    }),
                    children: (0, i.jsx)(p.kci, {
                        animationRef: k,
                        className: o()(x.easterEggAnimation, { [x.easterEggAnimationHideLeaf]: y }),
                        nextScene: v,
                        sceneSegments: j,
                        onScenePlay: I,
                        onSceneComplete: P,
                        importData: M,
                        pauseWhileUnfocused: !1
                    })
                })
            ]
        })
    );
}
function U(e) {
    let t,
        { message: n, compact: r, guild: a, usernameHook: o, onClickMessage: s } = e,
        c = (function (e) {
            switch (e.type) {
                case v.uaV.GUILD_BOOST_TIER_1:
                    return v.Eu4.TIER_1;
                case v.uaV.GUILD_BOOST_TIER_2:
                    return v.Eu4.TIER_2;
                case v.uaV.GUILD_BOOST_TIER_3:
                    return v.Eu4.TIER_3;
            }
            return null;
        })(n),
        u = (0, h.Z)(n),
        { createMultipleConfettiAt: d, addClickListener: y } = l.useContext(f.h),
        [I, j] = l.useState(!1),
        S = l.useRef(null),
        { reducedMotion: T } = l.useContext(p.Sfi),
        N = (0, E.ZP)(n),
        P = N.nick,
        A = o(N);
    t =
        null == c || null == a
            ? u > 1
                ? O.intl.format(O.t.yfC9dn, {
                      username: P,
                      usernameHook: A,
                      numSubscriptions: u
                  })
                : O.intl.format(O.t['57St//'], {
                      username: P,
                      usernameHook: A
                  })
            : u > 1
              ? O.intl.format(O.t.PO9uJC, {
                    username: P,
                    usernameHook: A,
                    numSubscriptions: u,
                    guildName: a.name,
                    newTierName: (0, b.nW)(c)
                })
              : O.intl.format(O.t.cUfTTE, {
                    username: P,
                    usernameHook: A,
                    guildName: a.name,
                    newTierName: (0, b.nW)(c)
                });
    let Z = l.useCallback(() => {
            if (!T.enabled)
                if (I || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null == (e = S.current) ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    d(t.left + t.width / 2, t.top + t.height / 2);
                } else j(!0);
        }, [d, T, I]),
        R = l.useCallback(() => {
            j(!1);
        }, []),
        D = l.useCallback(() => {
            ((0, _.AI)({ settingsVisible: !0 }), m.Z.open(v.oAB.POGGERMODE), j(!1));
        }, []),
        L = l.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(w)) && D();
            },
            [D]
        );
    l.useEffect(() => y(L));
    let M = (0, i.jsx)(p.P3F, {
        className: x.iconWrapper,
        innerRef: S,
        onClick: s,
        children: (0, i.jsx)(p.$Eu, {
            color: p.TVs.unsafe_rawColors.GUILD_BOOSTING_PINK,
            className: x.icon,
            onMouseEnter: Z
        })
    });
    return (0, i.jsxs)(C.Z, {
        iconNode: M,
        timestamp: n.timestamp,
        compact: r,
        children: [
            (0, i.jsx)('div', {
                onClick: s,
                className: x.message,
                children: t
            }),
            I
                ? (0, i.jsx)(g.ZP, {
                      children: (0, i.jsx)('div', {
                          className: x.cannonWrapper,
                          children: (0, i.jsx)(k, {
                              onAnimationComplete: R,
                              onClick: D
                          })
                      })
                  })
                : null
        ]
    });
}
