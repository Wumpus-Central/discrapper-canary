n.d(t, { ZP: () => U }), n(47120);
var r,
    i = n(200651),
    a = n(192379),
    l = n(120356),
    o = n.n(l),
    s = n(48026),
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
    y = n(739566),
    E = n(834129),
    v = n(981631),
    O = n(388032),
    N = n(573510);
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
        BOTTOM_LEFT: C(j({}, A), {
            getConfettiPosition: (e) => ({
                x: e - 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1
            }
        }),
        BOTTOM_RIGHT: C(j({}, A), {
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
    k = ['#61D5B2'],
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
function W(e) {
    let { onAnimationComplete: t, onClick: n, position: r, size: l } = e,
        u = a.useRef(null),
        [d, m] = a.useState(null),
        [h] = a.useState(
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
        { createMultipleConfettiAt: g, confettiCanvas: _ } = a.useContext(f.h),
        [b, x] = a.useState(null),
        y = (0, s.uR)(_, b),
        E = (function (e, t) {
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
        })(d, h),
        v = T.includes(h),
        O = v && 'exit' === d,
        j = a.useCallback((e) => {
            m(e);
        }, []),
        C = a.useCallback(() => {
            'exit' === d && (null == t || t());
        }, [t, d]),
        A = a.useCallback((e) => {
            u.current = e;
        }, []);
    return (
        a.useEffect(() => {
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
                    })(u.current, h, l);
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
        }, [g, h, d, l]),
        a.useEffect(() => {
            if (v && 'leaf_fall' === d) {
                let e = w[h].leafRotationDirection;
                y.createConfetti(
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
                    { sprite: 'TOP_LEFT' === h ? R : D }
                );
            }
        }, [v, y, h, d]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Ji, {
                    ref: x,
                    sprites: L,
                    colors: k,
                    spriteWidth: 45,
                    spriteHeight: 45
                }),
                (0, i.jsx)(p.P3F, {
                    onClick: n,
                    className: o()(N.easterEggAnimationClickTarget, {
                        [N.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === h,
                        [N.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === h,
                        [N.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === h,
                        [N.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === h
                    }),
                    children: (0, i.jsx)(p.kci, {
                        animationRef: A,
                        className: o()(N.easterEggAnimation, { [N.easterEggAnimationHideLeaf]: O }),
                        nextScene: E,
                        sceneSegments: I,
                        onScenePlay: j,
                        onSceneComplete: C,
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
        { message: n, compact: r, guild: l, usernameHook: o, onClickMessage: s } = e,
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
        { createMultipleConfettiAt: d, addClickListener: j } = a.useContext(f.h),
        [C, I] = a.useState(!1),
        S = a.useRef(null),
        { reducedMotion: T } = a.useContext(p.Sfi),
        P = (0, y.ZH)(n),
        A = P.nick,
        w = o(P);
    t =
        null == c || null == l
            ? u > 1
                ? O.NW.format(O.t.yfC9dn, {
                      username: A,
                      usernameHook: w,
                      numSubscriptions: u
                  })
                : O.NW.format(O.t['57St//'], {
                      username: A,
                      usernameHook: w
                  })
            : u > 1
              ? O.NW.format(O.t.PO9uJC, {
                    username: A,
                    usernameHook: w,
                    numSubscriptions: u,
                    guildName: l.name,
                    newTierName: (0, x.nW)(c)
                })
              : O.NW.format(O.t.cUfTTE, {
                    username: A,
                    usernameHook: w,
                    guildName: l.name,
                    newTierName: (0, x.nW)(c)
                });
    let k = a.useCallback(() => {
            if (!T.enabled)
                if (C || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null == (e = S.current) ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    d(t.left + t.width / 2, t.top + t.height / 2);
                } else I(!0);
        }, [d, T, C]),
        R = a.useCallback(() => {
            I(!1);
        }, []),
        D = a.useCallback(() => {
            (0, g.AI)({ settingsVisible: !0 }), m.Z.open(v.oAB.POGGERMODE), I(!1);
        }, []),
        L = a.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(Z)) && D();
            },
            [D]
        );
    a.useEffect(() => j(L));
    let M = (0, i.jsx)(p.P3F, {
        className: N.iconWrapper,
        innerRef: S,
        onClick: s,
        children: (0, i.jsx)(b.Z, {
            className: N.icon,
            onMouseEnter: k
        })
    });
    return (0, i.jsxs)(E.Z, {
        iconNode: M,
        timestamp: n.timestamp,
        compact: r,
        children: [
            (0, i.jsx)('div', {
                onClick: s,
                className: N.message,
                children: t
            }),
            C
                ? (0, i.jsx)(h.ZP, {
                      children: (0, i.jsx)('div', {
                          className: N.cannonWrapper,
                          children: (0, i.jsx)(W, {
                              onAnimationComplete: R,
                              onClick: D
                          })
                      })
                  })
                : null
        ]
    });
}
