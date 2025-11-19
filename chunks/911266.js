n.d(t, { Z: () => C }), n(388685);
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
    h = n(823961),
    f = n(992970),
    m = n(111810),
    g = n(287941),
    b = n(235894),
    y = n(485933);
let C = (e) => {
    let { message: t, hovering: n, compact: l } = e,
        C = r.useRef((0, o.random)(-6, 24)).current,
        v = (0, s.e7)([h.Z], () => h.Z.confettiMode),
        _ = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        x = r.useRef(0),
        j = r.useRef(null),
        O = r.useRef(null),
        [E, S] = r.useState(!1),
        P = r.useMemo(() => !n && !v && !_, [v, n, _]);
    if (
        (r.useEffect(() => {
            n || S(!1), n && v && S(!0);
        }, [n, v]),
        r.useEffect(() => {
            !_ &&
                (E ||
                    (!1 === n && ((x.current = 0), null != j.current && (clearTimeout(j.current), (j.current = null))),
                    (x.current = Date.now()),
                    (j.current = setTimeout(() => {
                        let e = x.current;
                        if (0 !== e && !1 !== n && !(Date.now() - e < 1000) && !v) {
                            if (null != O.current) {
                                var i;
                                let {
                                    x: e,
                                    y: n,
                                    width: r,
                                    height: l,
                                } = null == (i = O.current) ? void 0 : i.getBoundingClientRect();
                                (0, g.Z)(
                                    t,
                                    {
                                        x: e,
                                        y: n - 20,
                                        w: r,
                                        h: l,
                                    },
                                    !0,
                                    f.LL.UserTriggered,
                                );
                            } else (0, g.Z)(t, void 0, !0, f.LL.UserTriggered);
                            S(!0),
                                c.Z.dispatch({
                                    type: "POTIONS_SET_CONFETTI_MODE",
                                    enabled: !0,
                                });
                        }
                    }, 1100))));
        }, [v, E, n, t, _]),
        !(0, m.p7)("Message Confetti Peak") || !(0, b.Uw)(t))
    )
        return null;
    let I = (0, b.Eq)(t);
    if (null == I) return null;
    if (l)
        return (0, i.jsx)("span", {
            className: y.hidden,
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
        ref: O,
        className: y.emojiWrapper,
        style: { right: "".concat(256 + C, "px") },
        children: [
            (0, i.jsx)("img", {
                alt: "",
                src: T,
                className: a()([y.emoji, y.left, P && y.shy, v && y.confettiMode]),
                width: 28,
            }),
            (0, i.jsx)("img", {
                alt: "",
                src: T,
                className: a()([y.emoji, y.right, P && y.shy, v && y.confettiMode]),
                width: 26,
            }),
            (0, i.jsx)("img", {
                alt: "",
                src: T,
                className: a()([y.emoji, y.center, P && y.shy, v && y.confettiMode]),
                width: 32,
            }),
        ],
    });
};
