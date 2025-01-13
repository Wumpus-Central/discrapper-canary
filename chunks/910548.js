n.d(t, {
    ZP: function () {
        return w;
    }
}),
    n(47120);
var i,
    r,
    l,
    a,
    o = n(200651),
    s = n(192379),
    c = n(120356),
    d = n.n(c),
    u = n(119617),
    m = n(772848),
    h = n(468194),
    f = n(477690),
    p = n(481060),
    _ = n(230711),
    g = n(745510),
    E = n(549006),
    C = n(64078),
    I = n(29270),
    x = n(709586),
    N = n(267642),
    v = n(739566),
    T = n(834129),
    S = n(981631),
    A = n(388032),
    b = n(602216);
((l = i || (i = {})).ENTER = 'enter'), (l.CONFETTI = 'confetti'), (l.LEAF_PEEL = 'leaf_peel'), (l.LEAF_FALL = 'leaf_fall'), (l.EXIT = 'exit');
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
((a = r || (r = {})).TOP_LEFT = 'TOP_LEFT'), (a.TOP_RIGHT = 'TOP_RIGHT'), (a.BOTTOM_LEFT = 'BOTTOM_LEFT'), (a.BOTTOM_RIGHT = 'BOTTOM_RIGHT');
let R = ['TOP_LEFT', 'TOP_RIGHT'],
    Z = (0, h.Mg)(f.Z.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
    P = {
        leafPosition: {
            x: 85,
            y: 125
        },
        leafRotationDirection: 1
    },
    L = Object.freeze({
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
            ...P,
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
            ...P,
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
    y = 'falling-leaf',
    O = ['#61D5B2'],
    M = n(303893),
    k = n(313226),
    D = [M, k];
function B() {
    return n
        .e('60005')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
function U(e) {
    let { onAnimationComplete: t, onClick: n, position: i, size: l } = e,
        a = s.useRef(null),
        [c, h] = s.useState(null),
        [f] = s.useState(
            null != i
                ? i
                : (function () {
                      switch (Math.floor(Math.random() * Object.keys(r).length)) {
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
        { createMultipleConfettiAt: _, confettiCanvas: E } = s.useContext(g.h),
        [C, I] = s.useState(null),
        x = (0, u.uR)(E, C),
        N = (function (e, t) {
            if (null == e) return 'enter';
            switch (e) {
                case 'enter':
                    return 'confetti';
                case 'confetti':
                    if (R.includes(t)) return 'leaf_peel';
                    return 'exit';
                case 'leaf_peel':
                    return 'leaf_fall';
                case 'leaf_fall':
                    return 'exit';
                case 'exit':
                    return 'enter';
            }
        })(c, f),
        v = R.includes(f),
        T = v && 'exit' === c,
        S = s.useCallback((e) => {
            h(e);
        }, []),
        A = s.useCallback(() => {
            'exit' === c && (null == t || t());
        }, [t, c]),
        P = s.useCallback((e) => {
            a.current = e;
        }, []);
    return (
        s.useEffect(() => {
            if ('confetti' === c) {
                let { confettiVelocityDirection: e } = L[f],
                    t = (function (e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Z,
                            i = null == e ? void 0 : e.getBoundingClientRect();
                        if (null == i)
                            return {
                                x: 0,
                                y: 0
                            };
                        let r = L[t].getConfettiPosition(n);
                        return {
                            x: i.left + r.x,
                            y: i.top + r.y
                        };
                    })(a.current, f, l);
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
        }, [_, f, c, l]),
        s.useEffect(() => {
            if (v && 'leaf_fall' === c) {
                let e = L[f].leafRotationDirection;
                x.createConfetti(
                    {
                        id: ''.concat(y, '-').concat((0, m.Z)()),
                        position: {
                            type: 'static',
                            value: (function (e, t) {
                                let n = null == e ? void 0 : e.getBoundingClientRect();
                                if (null == n)
                                    return {
                                        x: 0,
                                        y: 0
                                    };
                                let i = L[t];
                                return {
                                    x: n.left + i.leafPosition.x,
                                    y: n.top + i.leafPosition.y
                                };
                            })(a.current, f)
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
                    { sprite: 'TOP_LEFT' === f ? M : k }
                );
            }
        }, [v, x, f, c]),
        (0, o.jsxs)(o.Fragment, {
            children: [
                (0, o.jsx)(u.Ji, {
                    ref: I,
                    sprites: D,
                    colors: O,
                    spriteWidth: 45,
                    spriteHeight: 45
                }),
                (0, o.jsx)(p.Clickable, {
                    onClick: n,
                    className: d()(b.easterEggAnimationClickTarget, {
                        [b.easterEggAnimationClickTargetTopLeft]: 'TOP_LEFT' === f,
                        [b.easterEggAnimationClickTargetTopRight]: 'TOP_RIGHT' === f,
                        [b.easterEggAnimationClickTargetBottomLeft]: 'BOTTOM_LEFT' === f,
                        [b.easterEggAnimationClickTargetBottomRight]: 'BOTTOM_RIGHT' === f
                    }),
                    children: (0, o.jsx)(p.SequencedLottieAnimation, {
                        animationRef: P,
                        className: d()(b.easterEggAnimation, { [b.easterEggAnimationHideLeaf]: T }),
                        nextScene: N,
                        sceneSegments: j,
                        onScenePlay: S,
                        onSceneComplete: A,
                        importData: B,
                        pauseWhileUnfocused: !1
                    })
                })
            ]
        })
    );
}
function w(e) {
    let t,
        { message: n, compact: i, guild: r, usernameHook: l, onClickMessage: a } = e,
        c = (function (e) {
            switch (e.type) {
                case S.uaV.GUILD_BOOST_TIER_1:
                    return S.Eu4.TIER_1;
                case S.uaV.GUILD_BOOST_TIER_2:
                    return S.Eu4.TIER_2;
                case S.uaV.GUILD_BOOST_TIER_3:
                    return S.Eu4.TIER_3;
            }
            return null;
        })(n),
        d = (0, I.Z)(n),
        { createMultipleConfettiAt: u, addClickListener: m } = s.useContext(g.h),
        [h, f] = s.useState(!1),
        j = s.useRef(null),
        { reducedMotion: R } = s.useContext(p.AccessibilityPreferencesContext),
        Z = (0, v.ZH)(n),
        P = Z.nick,
        L = l(Z);
    t =
        null == c || null == r
            ? d > 1
                ? A.intl.format(A.t.yfC9dn, {
                      username: P,
                      usernameHook: L,
                      numSubscriptions: d
                  })
                : A.intl.format(A.t['57St//'], {
                      username: P,
                      usernameHook: L
                  })
            : d > 1
              ? A.intl.format(A.t.PO9uJC, {
                    username: P,
                    usernameHook: L,
                    numSubscriptions: d,
                    guildName: r.name,
                    newTierName: (0, N.nW)(c)
                })
              : A.intl.format(A.t.cUfTTE, {
                    username: P,
                    usernameHook: L,
                    guildName: r.name,
                    newTierName: (0, N.nW)(c)
                });
    let O = s.useCallback(() => {
            if (!R.enabled)
                if (h || 0 !== Math.floor(50 * Math.random())) {
                    var e;
                    let t = null === (e = j.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                    if (null == t) return;
                    u(t.left + t.width / 2, t.top + t.height / 2);
                } else f(!0);
        }, [u, R, h]),
        M = s.useCallback(() => {
            f(!1);
        }, []),
        k = s.useCallback(() => {
            (0, C.AI)({ settingsVisible: !0 }), _.Z.open(S.oAB.POGGERMODE), f(!1);
        }, []),
        D = s.useCallback(
            (e, t) => {
                (null == t ? void 0 : t.id.startsWith(y)) && k();
            },
            [k]
        );
    s.useEffect(() => m(D));
    let B = (0, o.jsx)(p.Clickable, {
        className: b.iconWrapper,
        innerRef: j,
        onClick: a,
        children: (0, o.jsx)(x.Z, {
            className: b.icon,
            onMouseEnter: O
        })
    });
    return (0, o.jsxs)(T.Z, {
        iconNode: B,
        timestamp: n.timestamp,
        compact: i,
        children: [
            (0, o.jsx)('div', {
                onClick: a,
                className: b.message,
                children: t
            }),
            h
                ? (0, o.jsx)(E.ZP, {
                      children: (0, o.jsx)('div', {
                          className: b.cannonWrapper,
                          children: (0, o.jsx)(U, {
                              onAnimationComplete: M,
                              onClick: k
                          })
                      })
                  })
                : null
        ]
    });
}
