n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
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
    _ = n(874341);
let y = (e) => {
    let { message: t, hovering: n, compact: l } = e,
        y = i.useRef((0, o.random)(-6, 24)).current,
        C = (0, s.e7)([f.Z], () => f.Z.confettiMode),
        v = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        O = i.useRef(0),
        x = i.useRef(null),
        E = i.useRef(null),
        [j, S] = i.useState(!1),
        P = i.useMemo(() => !n && !C && !v, [C, n, v]);
    if (
        (i.useEffect(() => {
            n || S(!1), n && C && S(!0);
        }, [n, C]),
        i.useEffect(() => {
            !v &&
                (j ||
                    (!1 === n && ((O.current = 0), null != x.current && (clearTimeout(x.current), (x.current = null))),
                    (O.current = Date.now()),
                    (x.current = setTimeout(() => {
                        let e = O.current;
                        if (0 !== e && !1 !== n && !(Date.now() - e < 1000) && !C) {
                            if (null != E.current) {
                                var r;
                                let {
                                    x: e,
                                    y: n,
                                    width: i,
                                    height: l,
                                } = null == (r = E.current) ? void 0 : r.getBoundingClientRect();
                                (0, g.Z)(
                                    t,
                                    {
                                        x: e,
                                        y: n - 20,
                                        w: i,
                                        h: l,
                                    },
                                    !0,
                                    h.LL.UserTriggered,
                                );
                            } else (0, g.Z)(t, void 0, !0, h.LL.UserTriggered);
                            S(!0),
                                c.Z.dispatch({
                                    type: "POTIONS_SET_CONFETTI_MODE",
                                    enabled: !0,
                                });
                        }
                    }, 1100))));
        }, [C, j, n, t, v]),
        !(0, m.p7)("Message Confetti Peak") || !(0, b.Uw)(t))
    )
        return null;
    let I = (0, b.Eq)(t);
    if (null == I) return null;
    if (l)
        return (0, r.jsx)("span", {
            className: _.hidden,
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
    return (0, r.jsxs)("div", {
        ref: E,
        className: _.emojiWrapper,
        style: { right: "".concat(256 + y, "px") },
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: T,
                className: a()([_.emoji, _.left, P && _.shy, C && _.confettiMode]),
                width: 28,
            }),
            (0, r.jsx)("img", {
                alt: "",
                src: T,
                className: a()([_.emoji, _.right, P && _.shy, C && _.confettiMode]),
                width: 26,
            }),
            (0, r.jsx)("img", {
                alt: "",
                src: T,
                className: a()([_.emoji, _.center, P && _.shy, C && _.confettiMode]),
                width: 32,
            }),
        ],
    });
};
