i.d(t, { Z: () => x }), i(47120);
var n = i(200651),
    a = i(192379),
    o = i(119617),
    s = i(642128),
    l = i(748780),
    r = i(481060),
    c = i(596454),
    d = i(745510),
    u = i(314910),
    h = i(912893),
    m = i(768581),
    p = i(176354),
    g = i(675654),
    f = i(372728);
let v = [];
function x(e) {
    let { messageId: t, emoji: i, startPosition: x, targetPosition: b } = e,
        [T, j] = a.useState(0),
        [_, C] = a.useState(0),
        [R, S] = a.useState(null),
        { confettiCanvas: N } = a.useContext(d.h),
        I = (0, o.uR)(N, R),
        E = a.useMemo(
            () => [
                {
                    src:
                        null == i.id
                            ? p.ZP.getURL(i.name)
                            : m.ZP.getEmojiURL({
                                  id: i.id,
                                  animated: !1,
                                  size: 22
                              }),
                    colorize: !1
                }
            ],
            [i.name, i.id]
        ),
        Z = b.x - (b.width / 2) * 0.5,
        y = b.y - (b.height / 2) * 0.5,
        O = (0, r.q_F)({
            from: { y: x.y },
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
        A = (0, r.q_F)({
            from: {
                x: x.x,
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
                (0, h.G)(t, i.name, i.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                j(t);
            }
        });
    return (
        a.useEffect(() => {
            T > 0 &&
                _ > 0 &&
                I.createConfetti({
                    ...g.We,
                    position: {
                        type: 'static',
                        value: {
                            x: T,
                            y: _
                        }
                    }
                });
        }, [I, T, _]),
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(o.Ji, {
                    ref: S,
                    sprites: E,
                    colors: v,
                    spriteWidth: g.Ko,
                    spriteHeight: g.Ko
                }),
                (0, n.jsx)(u.ZP, {
                    children: (0, n.jsx)(s.animated.div, {
                        style: { ...O },
                        className: f.emojiContainer,
                        children: (0, n.jsx)(s.animated.div, {
                            style: {
                                ...A,
                                opacity: A.opacity
                            },
                            children: (0, n.jsx)(c.Z, {
                                className: f.emoji,
                                emojiId: i.id,
                                emojiName: i.name,
                                animated: i.animated,
                                size: 'jumbo'
                            })
                        })
                    })
                })
            ]
        })
    );
}
