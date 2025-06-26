n.d(t, { ZP: () => F }), n(388685);
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
    h = n(549006),
    g = n(64078),
    _ = n(29270),
    b = n(709586),
    x = n(267642),
    E = n(739566),
    y = n(834129),
    v = n(981631),
    C = n(388032),
    O = n(573510);
function j(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function S(e, t) {
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
var T = (((r = {}).TOP_LEFT = 'TOP_LEFT'), (r.TOP_RIGHT = 'TOP_RIGHT'), (r.BOTTOM_LEFT = 'BOTTOM_LEFT'), (r.BOTTOM_RIGHT = 'BOTTOM_RIGHT'), r);
let N = ['TOP_LEFT', 'TOP_RIGHT'],
    P = (0, u.Mg)(d.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    A = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    w = Object.freeze({
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
        BOTTOM_LEFT: S(j({}, A), {
            getConfettiPosition: (e) => ({
                x: e - 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1
            }
        }),
        BOTTOM_RIGHT: S(j({}, A), {
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
    Z = 'falling-leaf',
    R = ['#61D5B2'],
    k = n(303893),
    L = n(313226),
    D = [k, L];
function M() {
    return n
        .e('77843')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function U(e) {
    let { onAnimationComplete: t, onClick: n, position: r, size: a } = e,
        u = l.useRef(null),
        [d, m] = l.useState(null),
        [h] = l.useState(
            null != r
                ? r
                : (function () {
                      switch (Math.floor(Math.random() * Object.keys(T).length)) {
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
        { createMultipleConfettiAt: g, confettiCanvas: _ } = l.useContext(f.h),
        [b, x] = l.useState(null),
        E = (0, s.uR)(_, b),
        y = (function (e, t) {
            if (null == e) return 'enter';
            switch (e) {
                case 'enter':
                    return 'confetti';
                case 'confetti':
                    if (N.includes(t)) return 'leaf_peel';
                    return 'exit';
                case 'leaf_peel':
                    return 'leaf_fall';
                case 'leaf_fall':
                    return 'exit';
                case 'exit':
                    return 'enter';
            }
        })(d, h),
        v = N.includes(h),
        C = v && 'exit' === d,
        j = l.useCallback((e) => {
            m(e);
        }, []),
        S = l.useCallback(() => {
            'exit' === d && (null == t || t());
        }, [t, d]),
        A = l.useCallback((e) => {
            u.current = e;
        }, []);
    return (
        l.useEffect(() => {
            if ('confetti' === d) {
                let { confettiVelocityDirection: e } = w[h],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P,
                            r = null == e ? void 0 : e.getBoundingClientRect();
                        if (null == r)
                            return {
                                x: 0,
                                y: 0
                            };
                        let i = w[t].getConfettiPosition(n);
                        return {
                            x: r.left + i.x,
                            y: r.top + i.y
                        };
                    })(u.current, h, a);
                g(t.x, t.y, {
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
        }, [g, h, d, a]),
        l.useEffect(() => {
            if (v && 'leaf_fall' === d) {
                let e = w[h].leafRotationDirection;
                E.createConfetti(
                    {
                        id: ''.concat(Z, '-').concat((0, c.Z)()),
                        position: {
                            type: 'static',
                            value: (function (e, t) {
                                let n = null == e ? void 0 : e.getBoundingClientRect();
                                if (null == n)
                                    return {
                                        x: 0,
                                        y: 0
                                    };
                                let r = w[t];
                                return {
                                    x: n.left + r.leafPosition.x,
                                    y: n.top + r.leafPosition.y
                                };
                            })(u.current, h)
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
                    { sprite: 'TOP_LEFT' === h ? k : L }
                );
            }
        }, [v, E, h, d]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Ji, {
                    ref: x,
                    sprites: D,
                    colors: R,
                    spriteWidth: 45,
                    spriteHeight: 45
                }),
                (0, i.jsx)(p.P3F, {
                    onClick: n,
                    className: o()(O.easterEggAnimationClickTarget, {
                        [O.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === h,
                        [O.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === h,
                        [O.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === h,
                        [O.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === h
                    }),
                    children: (0, i.jsx)(p.kci, {
                        animationRef: A,
                        className: o()(O.easterEggAnimation, { [O.easterEggAnimationHideLeaf]: C }),
                        nextScene: y,
                        sceneSegments: I,
                        onScenePlay: j,
                        onSceneComplete: S,
                        importData: M,
                        pauseWhileUnfocused: !1
                    })
                })
            ]
        })
    );
}
function F(e) {
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
        u = (0, _.Z)(n),
        { createMultipleConfettiAt: d, addClickListener: j } = l.useContext(f.h),
        [S, I] = l.useState(!1),
        T = l.useRef(null),
        { reducedMotion: N } = l.useContext(p.Sfi),
        P = (0, E.ZH)(n),
        A = P.nick,
        w = o(P);
    t =
        null == c || null == a
            ? u > 1
                ? C.intl.format(C.t.yfC9dn, {
                      username: A,
                      usernameHook: w,
                      numSubscriptions: u
                  })
                : C.intl.format(C.t['57St//'], {
                      username: A,
                      usernameHook: w
                  })
            : u > 1
              ? C.intl.format(C.t.PO9uJC, {
                    username: A,
                    usernameHook: w,
                    numSubscriptions: u,
                    guildName: a.name,
                    newTierName: (0, x.nW)(c)
                })
              : C.intl.format(C.t.cUfTTE, {
                    username: A,
                    usernameHook: w,
                    guildName: a.name,
                    newTierName: (0, x.nW)(c)
                });
    let R = l.useCallback(() => {
            if (!N.enabled)
                if (S || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null == (e = T.current) ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    d(t.left + t.width / 2, t.top + t.height / 2);
                } else I(!0);
        }, [d, N, S]),
        k = l.useCallback(() => {
            I(!1);
        }, []),
        L = l.useCallback(() => {
            (0, g.AI)({ settingsVisible: !0 }), m.Z.open(v.oAB.POGGERMODE), I(!1);
        }, []),
        D = l.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(Z)) && L();
            },
            [L]
        );
    l.useEffect(() => j(D));
    let M = (0, i.jsx)(p.P3F, {
        className: O.iconWrapper,
        innerRef: T,
        onClick: s,
        children: (0, i.jsx)(b.Z, {
            className: O.icon,
            onMouseEnter: R
        })
    });
    return (0, i.jsxs)(y.Z, {
        iconNode: M,
        timestamp: n.timestamp,
        compact: r,
        children: [
            (0, i.jsx)('div', {
                onClick: s,
                className: O.message,
                children: t
            }),
            S
                ? (0, i.jsx)(h.ZP, {
                      children: (0, i.jsx)('div', {
                          className: O.cannonWrapper,
                          children: (0, i.jsx)(U, {
                              onAnimationComplete: k,
                              onClick: L
                          })
                      })
                  })
                : null
        ]
    });
}
