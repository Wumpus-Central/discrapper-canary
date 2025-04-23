n.d(t, { Z: () => O }), n(388685);
var i = n(200651),
    r = n(192379),
    o = n(995899),
    a = n(272573),
    s = n(748780),
    l = n(481060),
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
        [x, T] = r.useState(0),
        [S, _] = r.useState(0),
        [C, R] = r.useState(null),
        { confettiCanvas: P } = r.useContext(u.h),
        E = (0, o.uR)(P, C),
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
        N = y.x - (y.width / 2) * 0.5,
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
                _(t);
            }
        }),
        A = (0, l.q_F)({
            from: {
                x: O.x,
                scale: 1,
                opacity: 1
            },
            to: {
                x: N,
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
                T(t);
            }
        });
    return (
        r.useEffect(() => {
            x > 0 &&
                S > 0 &&
                E.createConfetti(
                    j(b({}, f.We), {
                        position: {
                            type: 'static',
                            value: {
                                x: x,
                                y: S
                            }
                        }
                    })
                );
        }, [E, x, S]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Ji, {
                    ref: R,
                    sprites: I,
                    colors: v,
                    spriteWidth: f.Ko,
                    spriteHeight: f.Ko
                }),
                (0, i.jsx)(d.ZP, {
                    children: (0, i.jsx)(a.animated.div, {
                        style: b({}, Z),
                        className: g.emojiContainer,
                        children: (0, i.jsx)(a.animated.div, {
                            style: j(b({}, A), { opacity: A.opacity }),
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
