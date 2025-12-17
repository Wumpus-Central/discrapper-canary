n.d(t, { Z: () => y }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(392711),
    s = n(442837),
    c = n(570140),
    u = n(607070),
    d = n(768581),
    p = n(176354),
    f = n(823961),
    h = n(992970),
    m = n(111810),
    g = n(287941),
    b = n(235894),
    C = n(858441);
let y = (e) => {
    let { message: t, hovering: n, compact: l } = e,
        y = r.useRef((0, o.random)(-6, 24)).current,
        v = (0, s.e7)([f.Z], () => f.Z.confettiMode),
        x = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        O = r.useRef(0),
        E = r.useRef(null),
        j = r.useRef(null),
        [S, _] = r.useState(!1),
        P = r.useMemo(() => !n && !v && !x, [v, n, x]);
    if (
        (r.useEffect(() => {
            n || _(!1), n && v && _(!0);
        }, [n, v]),
        r.useEffect(() => {
            !x &&
                (S ||
                    (!1 === n && ((O.current = 0), null != E.current && (clearTimeout(E.current), (E.current = null))),
                    (O.current = Date.now()),
                    (E.current = setTimeout(() => {
                        let e = O.current;
                        if (0 !== e && !1 !== n && !(Date.now() - e < 1000) && !v) {
                            if (null != j.current) {
                                var i;
                                let {
                                    x: e,
                                    y: n,
                                    width: r,
                                    height: l,
                                } = null == (i = j.current) ? void 0 : i.getBoundingClientRect();
                                (0, g.Z)(
                                    t,
                                    {
                                        x: e,
                                        y: n - 20,
                                        w: r,
                                        h: l,
                                    },
                                    !0,
                                    h.LL.UserTriggered,
                                );
                            } else (0, g.Z)(t, void 0, !0, h.LL.UserTriggered);
                            _(!0),
                                c.Z.dispatch({
                                    type: "POTIONS_SET_CONFETTI_MODE",
                                    enabled: !0,
                                });
                        }
                    }, 1100))));
        }, [v, S, n, t, x]),
        !(0, m.p7)("Message Confetti Peak") || !(0, b.Uw)(t))
    )
        return null;
    let I = (0, b.Eq)(t);
    if (null == I) return null;
    if (l)
        return (0, i.jsx)("span", {
            className: C.hidden,
            "aria-hidden": "true",
        });
    let Z = I.emoji[0],
        T =
            null == Z.id
                ? p.ZP.getURL(Z.name)
                : d.ZP.getEmojiURL({
                      id: Z.id,
                      animated: !1,
                      size: 32,
                      forcePNG: !0,
                  });
    return (0, i.jsxs)("div", {
        ref: j,
        className: C.emojiWrapper,
        style: { right: "".concat(256 + y, "px") },
        children: [
            (0, i.jsx)("img", {
                alt: "",
                src: T,
                className: a()([C.emoji, C.left, P && C.shy, v && C.confettiMode]),
                width: 28,
            }),
            (0, i.jsx)("img", {
                alt: "",
                src: T,
                className: a()([C.emoji, C.right, P && C.shy, v && C.confettiMode]),
                width: 26,
            }),
            (0, i.jsx)("img", {
                alt: "",
                src: T,
                className: a()([C.emoji, C.center, P && C.shy, v && C.confettiMode]),
                width: 32,
            }),
        ],
    });
};
