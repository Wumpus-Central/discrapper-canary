n.d(t, { Z: () => O }), n(388685);
var i = n(255367),
    o = n(73800),
    l = n(505266),
    r = n(695469),
    a = n(748780),
    s = n(481060),
    c = n(596454),
    u = n(745510),
    d = n(314910),
    h = n(912893),
    p = n(768581),
    m = n(176354),
    f = n(675654),
    g = n(403122);
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = [];
function O(e) {
    let { messageId: t, emoji: n, startPosition: O, targetPosition: y } = e,
        [T, E] = o.useState(0),
        [R, S] = o.useState(0),
        [x, N] = o.useState(null),
        { confettiCanvas: I } = o.useContext(u.h),
        P = (0, l.uR)(I, x),
        C = o.useMemo(
            () => [
                {
                    src:
                        null == n.id
                            ? m.ZP.getURL(n.name)
                            : p.ZP.getEmojiURL({
                                  id: n.id,
                                  animated: !1,
                                  size: 22
                              }),
                    colorize: !1
                }
            ],
            [n.name, n.id]
        ),
        Z = y.x - (y.width / 2) * 0.5,
        w = y.y - (y.height / 2) * 0.5,
        A = (0, s.q_F)({
            from: { y: O.y },
            to: { y: w },
            config: {
                duration: 450,
                easing: a.Z.Easing.in(a.Z.Easing.exp)
            },
            onChange: (e) => {
                let { y: t } = e;
                S(t);
            }
        }),
        M = (0, s.q_F)({
            from: {
                x: O.x,
                scale: 1,
                opacity: 1
            },
            to: {
                x: Z,
                scale: 0.5,
                opacity: 0.4
            },
            config: {
                duration: 450,
                easing: a.Z.Easing.in(a.Z.Easing.ease)
            },
            onRest: () => {
                (0, h.G)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                E(t);
            }
        });
    return (
        o.useEffect(() => {
            T > 0 &&
                R > 0 &&
                P.createConfetti(
                    j(b({}, f.We), {
                        position: {
                            type: 'static',
                            value: {
                                x: T,
                                y: R
                            }
                        }
                    })
                );
        }, [P, T, R]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.Ji, {
                    ref: N,
                    sprites: C,
                    colors: v,
                    spriteWidth: f.Ko,
                    spriteHeight: f.Ko
                }),
                (0, i.jsx)(d.ZP, {
                    children: (0, i.jsx)(r.animated.div, {
                        style: b({}, A),
                        className: g.emojiContainer,
                        children: (0, i.jsx)(r.animated.div, {
                            style: j(b({}, M), { opacity: M.opacity }),
                            children: (0, i.jsx)(c.Z, {
                                className: g.emoji,
                                emojiId: n.id,
                                emojiName: n.name,
                                animated: n.animated,
                                size: 'jumbo'
                            })
                        })
                    })
                })
            ]
        })
    );
}
