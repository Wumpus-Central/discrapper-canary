var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(768581),
    o = n(111810),
    c = n(235894),
    d = n(61750);
t.Z = (e) => {
    let { message: t } = e,
        n = l.useRef(5 * Math.random() - 2.5).current;
    if (!(0, o.p7)('Message Confetti Peak') || !(0, c.U)(t)) return null;
    let r = (0, c.E)(t);
    if (null == r) return null;
    let u = r.emoji[0],
        h = s.ZP.getEmojiURL({
            id: u.id,
            animated: !1,
            size: 32,
            forcePNG: !0
        });
    return (0, i.jsxs)('div', {
        className: d.emojiWrapper,
        style: { right: ''.concat(13 + n, '%') },
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: h,
                className: a()([d.emoji, d.left]),
                height: 28,
                width: 28,
                style: {
                    top: 4,
                    transform: 'rotateZ(11deg)'
                }
            }),
            (0, i.jsx)('img', {
                alt: '',
                src: h,
                className: a()([d.emoji, d.right]),
                height: 26,
                width: 26,
                style: {
                    left: 60,
                    top: 8
                }
            }),
            (0, i.jsx)('img', {
                alt: '',
                src: h,
                className: a()([d.emoji, d.center]),
                height: 32,
                width: 32,
                style: {
                    left: 32,
                    transform: 'rotateZ(-10deg)'
                }
            })
        ]
    });
};
