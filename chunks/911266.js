n.d(t, { Z: () => C }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
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
        C = i.useRef((0, o.random)(-6, 24)).current,
        x = (0, s.e7)([h.Z], () => h.Z.confettiMode),
        y = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        v = i.useRef(0),
        j = i.useRef(null),
        O = i.useRef(null),
        [E, I] = i.useState(!1),
        P = i.useMemo(() => !n && !x && !y, [x, n, y]);
    if (
        (i.useEffect(() => {
            n || I(!1), n && x && I(!0);
        }, [n, x]),
        i.useEffect(() => {
            !y &&
                (E ||
                    (!1 === n && ((v.current = 0), null != j.current && (clearTimeout(j.current), (j.current = null))),
                    (v.current = Date.now()),
                    (j.current = setTimeout(() => {
                        let e = v.current;
                        if (0 !== e && !1 !== n && !(Date.now() - e < 1000) && !x) {
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
                            I(!0),
                                c.Z.dispatch({
                                    type: 'POTIONS_SET_CONFETTI_MODE',
                                    enabled: !0
                                });
                        }
                    }, 1100))));
        }, [x, E, n, t, y]),
        !(0, m.p7)('Message Confetti Peak') || !(0, b.Uw)(t))
    )
        return null;
    let S = (0, b.Eq)(t);
    if (null == S) return null;
    if (l)
        return (0, r.jsx)('span', {
            className: _.hidden,
            'aria-hidden': 'true'
        });
    let Z = S.emoji[0],
        N =
            null == Z.id
                ? p.ZP.getURL(Z.name)
                : d.ZP.getEmojiURL({
                      id: Z.id,
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
                src: N,
                className: a()([_.emoji, _.left, P && _.shy, x && _.confettiMode]),
                width: 28
            }),
            (0, r.jsx)('img', {
                alt: '',
                src: N,
                className: a()([_.emoji, _.right, P && _.shy, x && _.confettiMode]),
                width: 26
            }),
            (0, r.jsx)('img', {
                alt: '',
                src: N,
                className: a()([_.emoji, _.center, P && _.shy, x && _.confettiMode]),
                width: 32
            })
        ]
    });
};
