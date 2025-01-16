var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(392711),
    o = n(442837),
    c = n(570140),
    d = n(607070),
    u = n(768581),
    h = n(176354),
    p = n(823961),
    m = n(111810),
    f = n(287941),
    g = n(235894),
    C = n(61750);
t.Z = (e) => {
    let { message: t, hovering: n } = e,
        r = l.useRef((0, s.random)(-6, 24)).current,
        x = (0, o.e7)([p.Z], () => p.Z.confettiMode),
        v = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        _ = l.useRef(0),
        I = l.useRef(null),
        E = l.useRef(null),
        b = l.useMemo(() => !n && !x && !v, [x, n, v]);
    if (
        (l.useEffect(() => {
            !v &&
                (!1 === n && ((_.current = 0), null != I.current && (clearTimeout(I.current), (I.current = null))),
                (_.current = Date.now()),
                (I.current = setTimeout(() => {
                    let e = _.current;
                    if (0 !== e && !1 !== n) {
                        if (!(Date.now() - e < 1000)) {
                            if (!x) {
                                if (null != E.current) {
                                    var i;
                                    let { x: e, y: n, width: l, height: r } = null === (i = E.current) || void 0 === i ? void 0 : i.getBoundingClientRect();
                                    (0, f.Z)(
                                        t,
                                        {
                                            x: e,
                                            y: n - 20,
                                            w: l,
                                            h: r
                                        },
                                        !0
                                    );
                                } else (0, f.Z)(t, void 0, !0);
                            }
                            c.Z.dispatch({
                                type: 'POTIONS_SET_CONFETTI_MODE',
                                enabled: !0
                            });
                        }
                    }
                }, 1100)));
        }, [x, n, t, v]),
        !(0, m.p7)('Message Confetti Peak') || !(0, g.U)(t))
    )
        return null;
    let Z = (0, g.E)(t);
    if (null == Z) return null;
    let S = Z.emoji[0],
        N =
            null == S.id
                ? h.ZP.getURL(S.name)
                : u.ZP.getEmojiURL({
                      id: S.id,
                      animated: !1,
                      size: 32,
                      forcePNG: !0
                  });
    return (0, i.jsxs)('div', {
        ref: E,
        className: a()(C.emojiWrapper),
        style: { right: ''.concat(256 + r, 'px') },
        children: [
            (0, i.jsx)('img', {
                alt: '',
                src: N,
                className: a()([C.emoji, C.left, b && C.shy, x && C.confettiMode]),
                height: 28,
                width: 28
            }),
            (0, i.jsx)('img', {
                alt: '',
                src: N,
                className: a()([C.emoji, C.right, b && C.shy, x && C.confettiMode]),
                height: 26,
                width: 26
            }),
            (0, i.jsx)('img', {
                alt: '',
                src: N,
                className: a()([C.emoji, C.center, b && C.shy, x && C.confettiMode]),
                height: 32,
                width: 32
            })
        ]
    });
};
