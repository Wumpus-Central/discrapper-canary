n.d(t, { Z: () => T }), n(47120);
var i = n(200651),
    a = n(192379),
    o = n(119617),
    s = n(642128),
    l = n(748780),
    r = n(481060),
    c = n(596454),
    d = n(745510),
    u = n(314910),
    h = n(912893),
    m = n(768581),
    p = n(176354),
    g = n(675654),
    f = n(372728);
let v = [];
function T(e) {
    let { messageId: t, emoji: n, startPosition: T, targetPosition: x } = e,
        [_, b] = a.useState(0),
        [j, C] = a.useState(0),
        [R, S] = a.useState(null),
        { confettiCanvas: E } = a.useContext(d.h),
        I = (0, o.uR)(E, R),
        N = a.useMemo(
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
        Z = x.x - (x.width / 2) * 0.5,
        y = x.y - (x.height / 2) * 0.5,
        A = (0, r.q_F)({
            from: { y: T.y },
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
        O = (0, r.q_F)({
            from: {
                x: T.x,
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
                b(t);
            }
        });
    return (
        a.useEffect(() => {
            _ > 0 &&
                j > 0 &&
                I.createConfetti({
                    ...g.We,
                    position: {
                        type: 'static',
                        value: {
                            x: _,
                            y: j
                        }
                    }
                });
        }, [I, _, j]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Ji, {
                    ref: S,
                    sprites: N,
                    colors: v,
                    spriteWidth: g.Ko,
                    spriteHeight: g.Ko
                }),
                (0, i.jsx)(u.ZP, {
                    children: (0, i.jsx)(s.animated.div, {
                        style: { ...A },
                        className: f.emojiContainer,
                        children: (0, i.jsx)(s.animated.div, {
                            style: {
                                ...O,
                                opacity: O.opacity
                            },
                            children: (0, i.jsx)(c.Z, {
                                className: f.emoji,
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
