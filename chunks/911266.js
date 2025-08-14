n.d(t, { Z: () => O }), n(388685);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(392711),
    l = n(442837),
    c = n(570140),
    u = n(607070),
    d = n(768581),
    f = n(176354),
    _ = n(823961),
    p = n(992970),
    h = n(111810),
    m = n(287941),
    g = n(235894),
    E = n(874341);
let b = 1000,
    y = 256,
    O = (e) => {
        let { message: t, hovering: n, compact: o } = e,
            O = i.useRef((0, s.random)(-6, 24)).current,
            v = (0, l.e7)([_.Z], () => _.Z.confettiMode),
            I = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
            T = i.useRef(0),
            S = i.useRef(null),
            A = i.useRef(null),
            [N, C] = i.useState(!1),
            R = i.useMemo(() => !n && !v && !I, [v, n, I]);
        if (
            (i.useEffect(() => {
                n || C(!1), n && v && C(!0);
            }, [n, v]),
            i.useEffect(() => {
                !I &&
                    (N ||
                        (!1 === n &&
                            ((T.current = 0), null != S.current && (clearTimeout(S.current), (S.current = null))),
                        (T.current = Date.now()),
                        (S.current = setTimeout(() => {
                            let e = T.current;
                            if (0 !== e && !1 !== n && !(Date.now() - e < b) && !v) {
                                if (null != A.current) {
                                    var r;
                                    let {
                                        x: e,
                                        y: n,
                                        width: i,
                                        height: o,
                                    } = null == (r = A.current) ? void 0 : r.getBoundingClientRect();
                                    (0, m.Z)(
                                        t,
                                        {
                                            x: e,
                                            y: n - 20,
                                            w: i,
                                            h: o,
                                        },
                                        !0,
                                        p.LL.UserTriggered,
                                    );
                                } else (0, m.Z)(t, void 0, !0, p.LL.UserTriggered);
                                C(!0),
                                    c.Z.dispatch({
                                        type: "POTIONS_SET_CONFETTI_MODE",
                                        enabled: !0,
                                    });
                            }
                        }, b + 100))));
            }, [v, N, n, t, I]),
            !(0, h.p7)("Message Confetti Peak") || !(0, g.Uw)(t))
        )
            return null;
        let P = (0, g.Eq)(t);
        if (null == P) return null;
        if (o)
            return (0, r.jsx)("span", {
                className: E.hidden,
                "aria-hidden": "true",
            });
        let w = P.emoji[0],
            D =
                null == w.id
                    ? f.ZP.getURL(w.name)
                    : d.ZP.getEmojiURL({
                          id: w.id,
                          animated: !1,
                          size: 32,
                          forcePNG: !0,
                      });
        return (0, r.jsxs)("div", {
            ref: A,
            className: E.emojiWrapper,
            style: { right: "".concat(y + O, "px") },
            children: [
                (0, r.jsx)("img", {
                    alt: "",
                    src: D,
                    className: a()([E.emoji, E.left, R && E.shy, v && E.confettiMode]),
                    width: 28,
                }),
                (0, r.jsx)("img", {
                    alt: "",
                    src: D,
                    className: a()([E.emoji, E.right, R && E.shy, v && E.confettiMode]),
                    width: 26,
                }),
                (0, r.jsx)("img", {
                    alt: "",
                    src: D,
                    className: a()([E.emoji, E.center, R && E.shy, v && E.confettiMode]),
                    width: 32,
                }),
            ],
        });
    };
