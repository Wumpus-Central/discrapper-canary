n.d(t, { Z: () => v }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(505266),
    l = n(714673),
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
let j = [];
function v(e) {
    let { messageId: t, emoji: n, startPosition: v, targetPosition: y } = e,
        [T, S] = r.useState(0),
        [x, _] = r.useState(0),
        [P, E] = r.useState(null),
        { confettiCanvas: C } = r.useContext(u.h),
        R = (0, o.uR)(C, P),
        I = r.useMemo(
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
        w = y.x - (y.width / 2) * 0.5,
        N = y.y - (y.height / 2) * 0.5,
        Z = (0, s.q_F)({
            from: { y: v.y },
            to: { y: N },
            config: {
                duration: 450,
                easing: a.Z.Easing.in(a.Z.Easing.exp)
            },
            onChange: (e) => {
                let { y: t } = e;
                _(t);
            }
        }),
        A = (0, s.q_F)({
            from: {
                x: v.x,
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
                easing: a.Z.Easing.in(a.Z.Easing.ease)
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
            T > 0 &&
                x > 0 &&
                R.createConfetti(
                    O(b({}, f.We), {
                        position: {
                            type: 'static',
                            value: {
                                x: T,
                                y: x
                            }
                        }
                    })
                );
        }, [R, T, x]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Ji, {
                    ref: E,
                    sprites: I,
                    colors: j,
                    spriteWidth: f.Ko,
                    spriteHeight: f.Ko
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
