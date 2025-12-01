n.d(t, { Z: () => I }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(921254),
    o = n(666917),
    s = n(748780),
    l = n(481060),
    c = n(596454),
    u = n(745510),
    d = n(314910),
    f = n(912893),
    p = n(768581),
    _ = n(176354),
    m = n(675654),
    h = n(42868);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                g(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let O = 450,
    v = 0.5,
    S = [];
function I(e) {
    let { messageId: t, emoji: n, startPosition: g, targetPosition: b } = e,
        [I, T] = i.useState(0),
        [A, C] = i.useState(0),
        [N, P] = i.useState(null),
        { confettiCanvas: R } = i.useContext(u.h),
        w = (0, a.uR)(R, N),
        D = i.useMemo(
            () => [
                {
                    src:
                        null == n.id
                            ? _.ZP.getURL(n.name)
                            : p.ZP.getEmojiURL({
                                  id: n.id,
                                  animated: !1,
                                  size: 22,
                              }),
                    colorize: !1,
                },
            ],
            [n.name, n.id],
        ),
        x = b.x - (b.width / 2) * v,
        L = b.y - (b.height / 2) * v,
        j = (0, l.q_F)({
            from: { y: g.y },
            to: { y: L },
            config: {
                duration: O,
                easing: s.Z.Easing.in(s.Z.Easing.exp),
            },
            onChange: (e) => {
                let { y: t } = e;
                C(t);
            },
        }),
        M = (0, l.q_F)({
            from: {
                x: g.x,
                scale: 1,
                opacity: 1,
            },
            to: {
                x: x,
                scale: v,
                opacity: 0.4,
            },
            config: {
                duration: O,
                easing: s.Z.Easing.in(s.Z.Easing.ease),
            },
            onRest: () => {
                (0, f.G)(t, n.name, n.id);
            },
            onChange: (e) => {
                let { x: t } = e;
                T(t);
            },
        });
    return (
        i.useEffect(() => {
            I > 0 &&
                A > 0 &&
                w.createConfetti(
                    y(E({}, m.We), {
                        position: {
                            type: "static",
                            value: {
                                x: I,
                                y: A,
                            },
                        },
                    }),
                );
        }, [w, I, A]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.Ji, {
                    ref: P,
                    sprites: D,
                    colors: S,
                    spriteWidth: m.Ko,
                    spriteHeight: m.Ko,
                }),
                (0, r.jsx)(d.ZP, {
                    children: (0, r.jsx)(o.animated.div, {
                        style: E({}, j),
                        className: h.emojiContainer,
                        children: (0, r.jsx)(o.animated.div, {
                            style: y(E({}, M), { opacity: M.opacity }),
                            children: (0, r.jsx)(c.Z, {
                                className: h.emoji,
                                emojiId: n.id,
                                emojiName: n.name,
                                animated: n.animated,
                                size: "jumbo",
                            }),
                        }),
                    }),
                }),
            ],
        })
    );
}
