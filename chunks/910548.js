n.d(t, { ZP: () => w }), n(47120);
var i,
    l = n(200651),
    a = n(192379),
    r = n(120356),
    s = n.n(r),
    o = n(119617),
    c = n(772848),
    d = n(468194),
    u = n(477690),
    m = n(481060),
    h = n(230711),
    _ = n(745510),
    p = n(549006),
    g = n(64078),
    f = n(29270),
    x = n(709586),
    E = n(267642),
    C = n(739566),
    v = n(834129),
    I = n(981631),
    N = n(388032),
    S = n(602216);
let T = {
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
var b = (((i = {}).TOP_LEFT = 'TOP_LEFT'), (i.TOP_RIGHT = 'TOP_RIGHT'), (i.BOTTOM_LEFT = 'BOTTOM_LEFT'), (i.BOTTOM_RIGHT = 'BOTTOM_RIGHT'), i);
let A = ['TOP_LEFT', 'TOP_RIGHT'],
    j = (0, d.Mg)(u.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    y = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    Z = Object.freeze({
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
        BOTTOM_LEFT: {
            ...y,
            getConfettiPosition: (e) => ({
                x: e - 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: 1,
                y: -1
            }
        },
        BOTTOM_RIGHT: {
            ...y,
            getConfettiPosition: (e) => ({
                x: 11,
                y: 125
            }),
            confettiVelocityDirection: {
                x: -1,
                y: -1
            }
        }
    }),
    R = 'falling-leaf',
    L = ['#61D5B2'],
    P = n(303893),
    k = n(313226),
    M = [P, k];
function O() {
    return n
        .e('77843')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function D(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: r } = e,
        d = a.useRef(null),
        [u, h] = a.useState(null),
        [p] = a.useState(
            null != i
                ? i
                : (function () {
                      switch (Math.floor(Math.random() * Object.keys(b).length)) {
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
        { createMultipleConfettiAt: g, confettiCanvas: f } = a.useContext(_.h),
        [x, E] = a.useState(null),
        C = (0, o.uR)(f, x),
        v = (function (e, t) {
            if (null == e) return 'enter';
            switch (e) {
                case 'enter':
                    return 'confetti';
                case 'confetti':
                    if (A.includes(t)) return 'leaf_peel';
                    return 'exit';
                case 'leaf_peel':
                    return 'leaf_fall';
                case 'leaf_fall':
                    return 'exit';
                case 'exit':
                    return 'enter';
            }
        })(u, p),
        I = A.includes(p),
        N = I && 'exit' === u,
        y = a.useCallback((e) => {
            h(e);
        }, []),
        D = a.useCallback(() => {
            'exit' === u && (null == t || t());
        }, [t, u]),
        w = a.useCallback((e) => {
            d.current = e;
        }, []);
    return (
        a.useEffect(() => {
            if ('confetti' === u) {
                let { confettiVelocityDirection: e } = Z[p],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : j,
                            i = null == e ? void 0 : e.getBoundingClientRect();
                        if (null == i)
                            return {
                                x: 0,
                                y: 0
                            };
                        let l = Z[t].getConfettiPosition(n);
                        return {
                            x: i.left + l.x,
                            y: i.top + l.y
                        };
                    })(d.current, p, r);
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
        }, [g, p, u, r]),
        a.useEffect(() => {
            if (I && 'leaf_fall' === u) {
                let e = Z[p].leafRotationDirection;
                C.createConfetti(
                    {
                        id: ''.concat(R, '-').concat((0, c.Z)()),
                        position: {
                            type: 'static',
                            value: (function (e, t) {
                                let n = null == e ? void 0 : e.getBoundingClientRect();
                                if (null == n)
                                    return {
                                        x: 0,
                                        y: 0
                                    };
                                let i = Z[t];
                                return {
                                    x: n.left + i.leafPosition.x,
                                    y: n.top + i.leafPosition.y
                                };
                            })(d.current, p)
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
                    { sprite: 'TOP_LEFT' === p ? P : k }
                );
            }
        }, [I, C, p, u]),
        (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(o.Ji, {
                    ref: E,
                    sprites: M,
                    colors: L,
                    spriteWidth: 45,
                    spriteHeight: 45
                }),
                (0, l.jsx)(m.P3F, {
                    onClick: n,
                    className: s()(S.easterEggAnimationClickTarget, {
                        [S.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === p,
                        [S.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === p,
                        [S.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === p,
                        [S.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === p
                    }),
                    children: (0, l.jsx)(m.kci, {
                        animationRef: w,
                        className: s()(S.easterEggAnimation, { [S.easterEggAnimationHideLeaf]: N }),
                        nextScene: v,
                        sceneSegments: T,
                        onScenePlay: y,
                        onSceneComplete: D,
                        importData: O,
                        pauseWhileUnfocused: !1
                    })
                })
            ]
        })
    );
}
function w(e) {
    let t,
        { message: n, compact: i, guild: r, usernameHook: s, onClickMessage: o } = e,
        c = (function (e) {
            switch (e.type) {
                case I.uaV.GUILD_BOOST_TIER_1:
                    return I.Eu4.TIER_1;
                case I.uaV.GUILD_BOOST_TIER_2:
                    return I.Eu4.TIER_2;
                case I.uaV.GUILD_BOOST_TIER_3:
                    return I.Eu4.TIER_3;
            }
            return null;
        })(n),
        d = (0, f.Z)(n),
        { createMultipleConfettiAt: u, addClickListener: T } = a.useContext(_.h),
        [b, A] = a.useState(!1),
        j = a.useRef(null),
        { reducedMotion: y } = a.useContext(m.Sfi),
        Z = (0, C.ZH)(n),
        L = Z.nick,
        P = s(Z);
    t =
        null == c || null == r
            ? d > 1
                ? N.intl.format(N.t.yfC9dn, {
                      username: L,
                      usernameHook: P,
                      numSubscriptions: d
                  })
                : N.intl.format(N.t['57St//'], {
                      username: L,
                      usernameHook: P
                  })
            : d > 1
              ? N.intl.format(N.t.PO9uJC, {
                    username: L,
                    usernameHook: P,
                    numSubscriptions: d,
                    guildName: r.name,
                    newTierName: (0, E.nW)(c)
                })
              : N.intl.format(N.t.cUfTTE, {
                    username: L,
                    usernameHook: P,
                    guildName: r.name,
                    newTierName: (0, E.nW)(c)
                });
    let k = a.useCallback(() => {
            if (!y.enabled) {
                if (b || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null === (e = j.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    if (null != t) u(t.left + t.width / 2, t.top + t.height / 2);
                } else A(!0);
            }
        }, [u, y, b]),
        M = a.useCallback(() => {
            A(!1);
        }, []),
        O = a.useCallback(() => {
            (0, g.AI)({ settingsVisible: !0 }), h.Z.open(I.oAB.POGGERMODE), A(!1);
        }, []),
        w = a.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(R)) && O();
            },
            [O]
        );
    a.useEffect(() => T(w));
    let F = (0, l.jsx)(m.P3F, {
        className: S.iconWrapper,
        innerRef: j,
        onClick: o,
        children: (0, l.jsx)(x.Z, {
            className: S.icon,
            onMouseEnter: k
        })
    });
    return (0, l.jsxs)(v.Z, {
        iconNode: F,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, l.jsx)('div', {
                onClick: o,
                className: S.message,
                children: t
            }),
            b
                ? (0, l.jsx)(p.ZP, {
                      children: (0, l.jsx)('div', {
                          className: S.cannonWrapper,
                          children: (0, l.jsx)(D, {
                              onAnimationComplete: M,
                              onClick: O
                          })
                      })
                  })
                : null
        ]
    });
}
