n.d(t, { Z: () => j }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(505266),
    l = n(240894),
    s = n(748780),
    a = n(481060),
    c = n(596454),
    u = n(745510),
    d = n(314910),
    h = n(912893),
    p = n(768581),
    f = n(176354),
    m = n(675654),
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
function O(e, t) {
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
function j(e) {
    let { messageId: t, emoji: n, startPosition: j, targetPosition: y } = e,
        [_, S] = r.useState(0),
        [T, x] = r.useState(0),
        [P, E] = r.useState(null),
        { confettiCanvas: C } = r.useContext(u.h),
        I = (0, o.uR)(C, P),
        R = r.useMemo(
            () => [
                {
                    src:
                        null == n.id
                            ? f.ZP.getURL(n.name)
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
        w = y.x - (y.width / 2) * 0.5,
        N = y.y - (y.height / 2) * 0.5,
        Z = (0, a.q_F)({
            from: { y: j.y },
            to: { y: N },
            config: {
                duration: 450,
                easing: s.Z.Easing.in(s.Z.Easing.exp)
            },
            onChange: (e) => {
                let { y: t } = e;
                x(t);
            }
        }),
        A = (0, a.q_F)({
            from: {
                x: j.x,
                scale: 1,
                opacity: 1
            },
            to: {
                x: w,
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
                S(t);
            }
        });
    return (
        r.useEffect(() => {
            _ > 0 &&
                T > 0 &&
                I.createConfetti(
                    O(b({}, m.We), {
                        position: {
                            type: 'static',
                            value: {
                                x: _,
                                y: T
                            }
                        }
                    })
                );
        }, [I, _, T]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Ji, {
                    ref: E,
                    sprites: R,
                    colors: v,
                    spriteWidth: m.Ko,
                    spriteHeight: m.Ko
                }),
                (0, i.jsx)(d.ZP, {
                    children: (0, i.jsx)(l.animated.div, {
                        style: b({}, Z),
                        className: g.emojiContainer,
                        children: (0, i.jsx)(l.animated.div, {
                            style: O(b({}, A), { opacity: A.opacity }),
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
