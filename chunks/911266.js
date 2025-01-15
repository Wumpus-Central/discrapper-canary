var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(768581),
    o = n(176354),
    c = n(111810),
    d = n(235894),
    u = n(280629);
t.Z = (e) => {
    let { message: t } = e,
        n = l.useRef(5 * Math.random() - 2.5).current;
    if (!(0, c.p7)('Message Confetti Peak') || !(0, d.U)(t)) return null;
    let r = (0, d.E)(t);
    if (null == r) return null;
    let h = r.emoji[0],
        p =
            null == h.id
                ? o.ZP.getURL(h.name)
                : s.ZP.getEmojiURL({
                      id: h.id,
                      animated: !1,
                      size: 32,
                      forcePNG: !0
                  });
    return (0, i.jsxs)('div', {
        className: u.emojiWrapper,
        style: { right: ''.concat(13 + n, '%') },
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: p,
                className: a()([u.emoji, u.left]),
                height: 28,
                width: 28,
                style: {
                    top: 4,
                    transform: 'rotateZ(11deg)'
                }
            }),
            (0, i.jsx)('img', {
                alt: '',
                src: p,
                className: a()([u.emoji, u.right]),
                height: 26,
                width: 26,
                style: {
                    left: 68,
                    top: 8
                }
            }),
            (0, i.jsx)('img', {
                alt: '',
                src: p,
                className: a()([u.emoji, u.center]),
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
