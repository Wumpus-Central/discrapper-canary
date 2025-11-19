n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(921254),
    o = n(790519),
    s = n(748780),
    l = n(481060),
    c = n(596454),
    u = n(745510),
    d = n(314910),
    f = n(912893),
    _ = n(768581),
    p = n(176354),
    h = n(675654),
    m = n(42868);
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
    I = [];
function T(e) {
    let { messageId: t, emoji: n, startPosition: g, targetPosition: b } = e,
        [T, S] = i.useState(0),
        [A, C] = i.useState(0),
        [N, R] = i.useState(null),
        { confettiCanvas: P } = i.useContext(u.h),
        D = (0, a.uR)(P, N),
        w = i.useMemo(
            () => [
                {
                    src:
                        null == n.id
                            ? p.ZP.getURL(n.name)
                            : _.ZP.getEmojiURL({
                                  id: n.id,
                                  animated: !1,
                                  size: 22,
                              }),
                    colorize: !1,
                },
            ],
            [n.name, n.id],
        ),
        L = b.x - (b.width / 2) * v,
        x = b.y - (b.height / 2) * v,
        M = (0, l.q_F)({
            from: { y: g.y },
            to: { y: x },
            config: {
                duration: O,
                easing: s.Z.Easing.in(s.Z.Easing.exp),
            },
            onChange: (e) => {
                let { y: t } = e;
                C(t);
            },
        }),
        j = (0, l.q_F)({
            from: {
                x: g.x,
                scale: 1,
                opacity: 1,
            },
            to: {
                x: L,
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
                S(t);
            },
        });
    return (
        i.useEffect(() => {
            T > 0 &&
                A > 0 &&
                D.createConfetti(
                    y(E({}, h.We), {
                        position: {
                            type: "static",
                            value: {
                                x: T,
                                y: A,
                            },
                        },
                    }),
                );
        }, [D, T, A]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.Ji, {
                    ref: R,
                    sprites: w,
                    colors: I,
                    spriteWidth: h.Ko,
                    spriteHeight: h.Ko,
                }),
                (0, r.jsx)(d.ZP, {
                    children: (0, r.jsx)(o.animated.div, {
                        style: E({}, M),
                        className: m.emojiContainer,
                        children: (0, r.jsx)(o.animated.div, {
                            style: y(E({}, j), { opacity: j.opacity }),
                            children: (0, r.jsx)(c.Z, {
                                className: m.emoji,
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
