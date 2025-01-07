n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    o = n(192379),
    a = n(119617),
    s = n(666912),
    l = n(748780),
    r = n(481060),
    c = n(596454),
    d = n(745510),
    u = n(314910),
    h = n(912893),
    m = n(768581),
    p = n(176354),
    f = n(675654),
    g = n(372728);
let v = [];
function b(e) {
    let { messageId: t, emoji: n, startPosition: b, targetPosition: T } = e,
        [x, _] = o.useState(0),
        [j, C] = o.useState(0),
        [S, E] = o.useState(null),
        { confettiCanvas: I } = o.useContext(d.h),
        R = (0, a.uR)(I, S),
        N = o.useMemo(
            () => [
                {
                    src:
                        null == n.id
                            ? p.ZP.getURL(n.name)
                            : m.ZP.getEmojiURL({
                                  id: n.id,
                                  animated: !1,
                                  size: 22
                              }),
                    colorize: !1
                }
            ],
            [n.name, n.id]
        ),
        Z = T.x - (T.width / 2) * 0.5,
        y = T.y - (T.height / 2) * 0.5,
        A = (0, r.useSpring)({
            from: { y: b.y },
            to: { y: y },
            config: {
                duration: 450,
                easing: l.Z.Easing.in(l.Z.Easing.exp)
            },
            onChange: (e) => {
                let { y: t } = e;
                C(t);
            }
        }),
        O = (0, r.useSpring)({
            from: {
                x: b.x,
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
                easing: l.Z.Easing.in(l.Z.Easing.ease)
            },
            onRest: () => {
                (0, h.G)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                _(t);
            }
        });
    return (
        o.useEffect(() => {
            x > 0 &&
                j > 0 &&
                R.createConfetti({
                    ...f.We,
                    position: {
                        type: 'static',
                        value: {
                            x: x,
                            y: j
                        }
                    }
                });
        }, [R, x, j]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(a.Ji, {
                    ref: E,
                    sprites: N,
                    colors: v,
                    spriteWidth: f.Ko,
                    spriteHeight: f.Ko
                }),
                (0, i.jsx)(u.ZP, {
                    children: (0, i.jsx)(s.animated.div, {
                        style: { ...A },
                        className: g.emojiContainer,
                        children: (0, i.jsx)(s.animated.div, {
                            style: {
                                ...O,
                                opacity: O.opacity
                            },
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
