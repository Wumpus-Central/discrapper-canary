n.d(t, { Z: () => C }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(392711),
    s = n(442837),
    c = n(570140),
    u = n(607070),
    d = n(768581),
    p = n(176354),
    h = n(823961),
    f = n(992970),
    m = n(111810),
    g = n(287941),
    b = n(235894),
    _ = n(675479);
let C = (e) => {
    let { message: t, hovering: n, compact: l } = e,
        C = i.useRef((0, a.random)(-6, 24)).current,
        y = (0, s.e7)([h.Z], () => h.Z.confettiMode),
        x = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        v = i.useRef(0),
        j = i.useRef(null),
        O = i.useRef(null),
        [E, N] = i.useState(!1),
        I = i.useMemo(() => !n && !y && !x, [y, n, x]);
    if (
        (i.useEffect(() => {
            n || N(!1), n && y && N(!0);
        }, [n, y]),
        i.useEffect(() => {
            !x &&
                (E ||
                    (!1 === n && ((v.current = 0), null != j.current && (clearTimeout(j.current), (j.current = null))),
                    (v.current = Date.now()),
                    (j.current = setTimeout(() => {
                        let e = v.current;
                        if (0 !== e && !1 !== n && !(Date.now() - e < 1000) && !y) {
                            if (null != O.current) {
                                var r;
                                let { x: e, y: n, width: i, height: l } = null == (r = O.current) ? void 0 : r.getBoundingClientRect();
                                (0, g.Z)(
                                    t,
                                    {
                                        x: e,
                                        y: n - 20,
                                        w: i,
                                        h: l
                                    },
                                    !0,
                                    f.LL.UserTriggered
                                );
                            } else (0, g.Z)(t, void 0, !0, f.LL.UserTriggered);
                            N(!0),
                                c.Z.dispatch({
                                    type: 'POTIONS_SET_CONFETTI_MODE',
                                    enabled: !0
                                });
                        }
                    }, 1100))));
        }, [y, E, n, t, x]),
        !(0, m.p7)('Message Confetti Peak') || !(0, b.Uw)(t))
    )
        return null;
    let P = (0, b.Eq)(t);
    if (null == P) return null;
    if (l)
        return (0, r.jsx)('span', {
            className: _.hidden,
            'aria-hidden': 'true'
        });
    let S = P.emoji[0],
        Z =
            null == S.id
                ? p.ZP.getURL(S.name)
                : d.ZP.getEmojiURL({
                      id: S.id,
                      animated: !1,
                      size: 32,
                      forcePNG: !0
                  });
    return (0, r.jsxs)('div', {
        ref: O,
        className: _.emojiWrapper,
        style: { right: ''.concat(256 + C, 'px') },
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: Z,
                className: o()([_.emoji, _.left, I && _.shy, y && _.confettiMode]),
                width: 28
            }),
            (0, r.jsx)('img', {
                alt: '',
                src: Z,
                className: o()([_.emoji, _.right, I && _.shy, y && _.confettiMode]),
                width: 26
            }),
            (0, r.jsx)('img', {
                alt: '',
                src: Z,
                className: o()([_.emoji, _.center, I && _.shy, y && _.confettiMode]),
                width: 32
            })
        ]
    });
};
