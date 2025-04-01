n.d(t, { Z: () => O }), n(47120);
var i = n(200651),
    o = n(192379),
    r = n(48026),
    a = n(642128),
    s = n(748780),
    l = n(481060),
    c = n(596454),
    u = n(745510),
    d = n(314910),
    h = n(912893),
    p = n(768581),
    m = n(176354),
    f = n(675654),
    g = n(803781);
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
function v(e, t) {
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
let j = [];
function O(e) {
    let { messageId: t, emoji: n, startPosition: O, targetPosition: y } = e,
        [T, x] = o.useState(0),
        [_, S] = o.useState(0),
        [E, P] = o.useState(null),
        { confettiCanvas: N } = o.useContext(u.h),
        C = (0, r.uR)(N, E),
        R = o.useMemo(
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
        I = y.x - (y.width / 2) * 0.5,
        w = y.y - (y.height / 2) * 0.5,
        Z = (0, l.q_F)({
            from: { y: O.y },
            to: { y: w },
            config: {
                duration: 450,
                easing: s.Z.Easing.in(s.Z.Easing.exp)
            },
            onChange: (e) => {
                let { y: t } = e;
                S(t);
            }
        }),
        A = (0, l.q_F)({
            from: {
                x: O.x,
                scale: 1,
                opacity: 1
            },
            to: {
                x: I,
                scale: 0.5,
                opacity: 0.4
            },
            config: {
                duration: 450,
                easing: s.Z.Easing.in(s.Z.Easing.ease)
            },
            onRest: () => {
                (0, h.G)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                x(t);
            }
        });
    return (
        o.useEffect(() => {
            T > 0 &&
                _ > 0 &&
                C.createConfetti(
                    v(b({}, f.We), {
                        position: {
                            type: 'static',
                            value: {
                                x: T,
                                y: _
                            }
                        }
                    })
                );
        }, [C, T, _]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(r.Ji, {
                    ref: P,
                    sprites: R,
                    colors: j,
                    spriteWidth: f.Ko,
                    spriteHeight: f.Ko
                }),
                (0, i.jsx)(d.ZP, {
                    children: (0, i.jsx)(a.animated.div, {
                        style: b({}, Z),
                        className: g.emojiContainer,
                        children: (0, i.jsx)(a.animated.div, {
                            style: v(b({}, A), { opacity: A.opacity }),
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
