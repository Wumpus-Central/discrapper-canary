n.d(t, { ZP: () => F }), n(47120);
var r,
    i = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
    s = n(119617),
    c = n(772848),
    d = n(468194),
    u = n(477690),
    p = n(481060),
    m = n(230711),
    f = n(745510),
    h = n(549006),
    g = n(64078),
    _ = n(29270),
    b = n(709586),
    v = n(267642),
    y = n(739566),
    x = n(834129),
    O = n(981631),
    E = n(388032),
    j = n(65527);
function N(e) {
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
let P = ['TOP_LEFT', 'TOP_RIGHT'],
    T = (0, d.Mg)(u.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
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
        BOTTOM_LEFT: C(N({}, A), {
            getConfettiPosition: (e) => ({
                x: e - 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1
            }
        }),
        BOTTOM_RIGHT: C(N({}, A), {
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
    L = n(313226),
    D = [R, L];
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
    let { onAnimationComplete: t, onClick: n, position: r, size: o } = e,
        d = a.useRef(null),
        [u, m] = a.useState(null),
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
        [b, v] = a.useState(null),
        y = (0, s.uR)(_, b),
        x = (function (e, t) {
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
        })(u, h),
        O = P.includes(h),
        E = O && 'exit' === u,
        N = a.useCallback((e) => {
            m(e);
        }, []),
        C = a.useCallback(() => {
            'exit' === u && (null == t || t());
        }, [t, u]),
        A = a.useCallback((e) => {
            d.current = e;
        }, []);
    return (
        a.useEffect(() => {
            if ('confetti' === u) {
                let { confettiVelocityDirection: e } = w[h],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T,
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
                    })(d.current, h, o);
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
        }, [g, h, u, o]),
        a.useEffect(() => {
            if (O && 'leaf_fall' === u) {
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
                            })(d.current, h)
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
                    { sprite: 'TOP_LEFT' === h ? R : L }
                );
            }
        }, [O, y, h, u]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(s.Ji, {
                    ref: v,
                    sprites: D,
                    colors: k,
                    spriteWidth: 45,
                    spriteHeight: 45
                }),
                (0, i.jsx)(p.P3F, {
                    onClick: n,
                    className: l()(j.easterEggAnimationClickTarget, {
                        [j.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === h,
                        [j.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === h,
                        [j.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === h,
                        [j.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === h
                    }),
                    children: (0, i.jsx)(p.kci, {
                        animationRef: A,
                        className: l()(j.easterEggAnimation, { [j.easterEggAnimationHideLeaf]: E }),
                        nextScene: x,
                        sceneSegments: I,
                        onScenePlay: N,
                        onSceneComplete: C,
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
        { message: n, compact: r, guild: o, usernameHook: l, onClickMessage: s } = e,
        c = (function (e) {
            switch (e.type) {
                case O.uaV.GUILD_BOOST_TIER_1:
                    return O.Eu4.TIER_1;
                case O.uaV.GUILD_BOOST_TIER_2:
                    return O.Eu4.TIER_2;
                case O.uaV.GUILD_BOOST_TIER_3:
                    return O.Eu4.TIER_3;
            }
            return null;
        })(n),
        d = (0, _.Z)(n),
        { createMultipleConfettiAt: u, addClickListener: N } = a.useContext(f.h),
        [C, I] = a.useState(!1),
        S = a.useRef(null),
        { reducedMotion: P } = a.useContext(p.Sfi),
        T = (0, y.ZH)(n),
        A = T.nick,
        w = l(T);
    t =
        null == c || null == o
            ? d > 1
                ? E.NW.format(E.t.yfC9dn, {
                      username: A,
                      usernameHook: w,
                      numSubscriptions: d
                  })
                : E.NW.format(E.t['57St//'], {
                      username: A,
                      usernameHook: w
                  })
            : d > 1
              ? E.NW.format(E.t.PO9uJC, {
                    username: A,
                    usernameHook: w,
                    numSubscriptions: d,
                    guildName: o.name,
                    newTierName: (0, v.nW)(c)
                })
              : E.NW.format(E.t.cUfTTE, {
                    username: A,
                    usernameHook: w,
                    guildName: o.name,
                    newTierName: (0, v.nW)(c)
                });
    let k = a.useCallback(() => {
            if (!P.enabled) {
                if (C || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null === (e = S.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    if (null != t) u(t.left + t.width / 2, t.top + t.height / 2);
                } else I(!0);
            }
        }, [u, P, C]),
        R = a.useCallback(() => {
            I(!1);
        }, []),
        L = a.useCallback(() => {
            (0, g.AI)({ settingsVisible: !0 }), m.Z.open(O.oAB.POGGERMODE), I(!1);
        }, []),
        D = a.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(Z)) && L();
            },
            [L]
        );
    a.useEffect(() => N(D));
    let M = (0, i.jsx)(p.P3F, {
        className: j.iconWrapper,
        innerRef: S,
        onClick: s,
        children: (0, i.jsx)(b.Z, {
            className: j.icon,
            onMouseEnter: k
        })
    });
    return (0, i.jsxs)(x.Z, {
        iconNode: M,
        timestamp: n.timestamp,
        compact: r,
        children: [
            (0, i.jsx)('div', {
                onClick: s,
                className: j.message,
                children: t
            }),
            C
                ? (0, i.jsx)(h.ZP, {
                      children: (0, i.jsx)('div', {
                          className: j.cannonWrapper,
                          children: (0, i.jsx)(W, {
                              onAnimationComplete: R,
                              onClick: L
                          })
                      })
                  })
                : null
        ]
    });
}
