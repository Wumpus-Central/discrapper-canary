(n.d(t, { Z: () => y }), n(388685));
var i = n(255367),
    r = n(73800),
    l = n(505266),
    o = n(264738),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
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
let O = [];
function y(e) {
    let { messageId: t, emoji: n, startPosition: y, targetPosition: v } = e,
        [T, x] = r.useState(0),
        [S, E] = r.useState(0),
        [R, I] = r.useState(null),
        { confettiCanvas: P } = r.useContext(u.h),
        N = (0, l.uR)(P, R),
        C = r.useMemo(
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
        w = v.x - (v.width / 2) * 0.5,
        Z = v.y - (v.height / 2) * 0.5,
        A = (0, s.q_F)({
            from: { y: y.y },
            to: { y: Z },
            config: {
                duration: 450,
                easing: a.Z.Easing.in(a.Z.Easing.exp)
            },
            onChange: (e) => {
                let { y: t } = e;
                E(t);
            }
        }),
        M = (0, s.q_F)({
            from: {
                x: y.x,
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
                x(t);
            }
        });
    return (
        r.useEffect(() => {
            T > 0 &&
                S > 0 &&
                N.createConfetti(
                    j(b({}, f.We), {
                        position: {
                            type: 'static',
                            value: {
                                x: T,
                                y: S
                            }
                        }
                    })
                );
        }, [N, T, S]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.Ji, {
                    ref: I,
                    sprites: C,
                    colors: O,
                    spriteWidth: f.Ko,
                    spriteHeight: f.Ko
                }),
                (0, i.jsx)(d.ZP, {
                    children: (0, i.jsx)(o.animated.div, {
                        style: b({}, A),
                        className: g.emojiContainer,
                        children: (0, i.jsx)(o.animated.div, {
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
