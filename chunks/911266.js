n.d(t, { Z: () => x }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n(442837),
    c = n(570140),
    d = n(607070),
    u = n(768581),
    h = n(176354),
    p = n(823961),
    m = n(992970),
    f = n(111810),
    g = n(287941),
    _ = n(235894),
    C = n(961393);
let x = (e) => {
    let { message: t, hovering: n, compact: a } = e,
        x = l.useRef((0, s.random)(-6, 24)).current,
        v = (0, o.e7)([p.Z], () => p.Z.confettiMode),
        E = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        I = l.useRef(0),
        b = l.useRef(null),
        Z = l.useRef(null),
        [N, T] = l.useState(!1),
        S = l.useMemo(() => !n && !v && !E, [v, n, E]);
    if (
        (l.useEffect(() => {
            n || T(!1), n && v && T(!0);
        }, [n, v]),
        l.useEffect(() => {
            !E &&
                (N ||
                    (!1 === n && ((I.current = 0), null != b.current && (clearTimeout(b.current), (b.current = null))),
                    (I.current = Date.now()),
                    (b.current = setTimeout(() => {
                        let e = I.current;
                        if (0 !== e && !1 !== n && !(Date.now() - e < 1000) && !v) {
                            if (null != Z.current) {
                                var i;
                                let { x: e, y: n, width: l, height: a } = null === (i = Z.current) || void 0 === i ? void 0 : i.getBoundingClientRect();
                                (0, g.Z)(
                                    t,
                                    {
                                        x: e,
                                        y: n - 20,
                                        w: l,
                                        h: a
                                    },
                                    !0,
                                    m.LL.UserTriggered
                                );
                            } else (0, g.Z)(t, void 0, !0, m.LL.UserTriggered);
                            T(!0),
                                c.Z.dispatch({
                                    type: 'POTIONS_SET_CONFETTI_MODE',
                                    enabled: !0
                                });
                        }
                    }, 1100))));
        }, [v, N, n, t, E]),
        !(0, f.p7)('Message Confetti Peak') || !(0, _.Uw)(t))
    )
        return null;
    let j = (0, _.Eq)(t);
    if (null == j) return null;
    if (a)
        return (0, i.jsx)('span', {
            className: C.hidden,
            'aria-hidden': 'true'
        });
    let y = j.emoji[0],
        A =
            null == y.id
                ? h.ZP.getURL(y.name)
                : u.ZP.getEmojiURL({
                      id: y.id,
                      animated: !1,
                      size: 32,
                      forcePNG: !0
                  });
    return (0, i.jsxs)('div', {
        ref: Z,
        className: r()(C.emojiWrapper),
        style: { right: ''.concat(256 + x, 'px') },
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: A,
                className: r()([C.emoji, C.left, S && C.shy, v && C.confettiMode]),
                width: 28
            }),
            (0, i.jsx)('img', {
                alt: '',
                src: A,
                className: r()([C.emoji, C.right, S && C.shy, v && C.confettiMode]),
                width: 26
            }),
            (0, i.jsx)('img', {
                alt: '',
                src: A,
                className: r()([C.emoji, C.center, S && C.shy, v && C.confettiMode]),
                width: 32
            })
        ]
    });
};
