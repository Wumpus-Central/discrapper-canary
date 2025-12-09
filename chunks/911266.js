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
    h = n(823961),
    f = n(992970),
    m = n(111810),
    g = n(287941),
    b = n(235894),
    C = n(874341);
let y = (e) => {
    let { message: t, hovering: n, compact: l } = e,
        y = r.useRef((0, o.random)(-6, 24)).current,
        _ = (0, s.e7)([h.Z], () => h.Z.confettiMode),
        v = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        O = r.useRef(0),
        x = r.useRef(null),
        E = r.useRef(null),
        [j, S] = r.useState(!1),
        P = r.useMemo(() => !n && !_ && !v, [_, n, v]);
    if (
        (r.useEffect(() => {
            n || S(!1), n && _ && S(!0);
        }, [n, _]),
        r.useEffect(() => {
            !v &&
                (j ||
                    (!1 === n && ((O.current = 0), null != x.current && (clearTimeout(x.current), (x.current = null))),
                    (O.current = Date.now()),
                    (x.current = setTimeout(() => {
                        let e = O.current;
                        if (0 !== e && !1 !== n && !(Date.now() - e < 1000) && !_) {
                            if (null != E.current) {
                                var i;
                                let {
                                    x: e,
                                    y: n,
                                    width: r,
                                    height: l,
                                } = null == (i = E.current) ? void 0 : i.getBoundingClientRect();
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
        }, [_, j, n, t, v]),
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
        ref: E,
        className: C.emojiWrapper,
        style: { right: "".concat(256 + y, "px") },
        children: [
            (0, i.jsx)("img", {
                alt: "",
                src: T,
                className: a()([C.emoji, C.left, P && C.shy, _ && C.confettiMode]),
                width: 28,
            }),
            (0, i.jsx)("img", {
                alt: "",
                src: T,
                className: a()([C.emoji, C.right, P && C.shy, _ && C.confettiMode]),
                width: 26,
            }),
            (0, i.jsx)("img", {
                alt: "",
                src: T,
                className: a()([C.emoji, C.center, P && C.shy, _ && C.confettiMode]),
                width: 32,
            }),
        ],
    });
};
