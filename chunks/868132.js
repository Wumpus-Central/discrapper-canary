"use strict";
n.d(t, { wE: () => U, Xq: () => G, q6: () => k });
var i = n(477900),
    r = n(582128),
    a = n(17928),
    s = n(775602),
    l = n(7584),
    o = n(267102),
    d = n(232835),
    c = n(417146),
    u = n(552122);
let _ = (0, n(196765).v)(() => ({ hasFiredFromMessage: new Set() }));
var E = n(776310),
    A = n(21161);
function h(e) {
    let t = [];
    return (
        e.forEach((e) => {
            let n = l.Ay.getByName(e);
            if (null != n && (t.push({ src: n.url, colorize: !1 }), n.hasDiversity))
                for (let e in n.diversityChildren) {
                    let i = n.diversityChildren[e];
                    t.push({ src: i.url, colorize: !1 });
                }
        }),
        t
    );
}
n(321073);
var I = n(652215);
let f = 1e3 / 60,
    p = {
        velocity: { type: "static-random", minValue: { x: 8, y: 0 }, maxValue: { x: 50, y: 0 } },
        rotation: {
            type: "linear-random",
            minValue: { x: 0, y: 0, z: 0 },
            maxValue: { x: 0, y: 0, z: 360 },
            minAddValue: { x: 0, y: 0, z: -5 },
            maxAddValue: { x: 0, y: 0, z: 5 },
        },
        size: { type: "static-random", minValue: 2, maxValue: 24, uniformVectorValues: !0 },
        dragCoefficient: { type: "static", value: 0.8 },
        opacity: { type: "static-random", minValue: 0.7, maxValue: 0.5 },
    },
    T = ["#FFFFFF"],
    m = [n(426560), ...h(["snowflake"])];
function g(e) {
    let { children: t } = e,
        [n, a] = r.useState(!1),
        s = (0, o.Us)(),
        [l, d] = r.useState(null),
        { confettiCanvas: c } = r.useContext(A.x),
        u = (0, E.f9)(c, l),
        _ = r.useMemo(() => ({ triggerAnimation: () => a(!0), untriggerAnimation: () => a(!1) }), []),
        h = r.useCallback(() => {
            let e = c?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            u.createConfetti({
                ...p,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [u, c]);
    return (r.useEffect(() => {
        let e = n ? setInterval(h, f) : null;
        return () => clearInterval(e);
    }, [n, h]),
    s === I.BRT.OVERLAY)
        ? t
        : (0, i.jsxs)(U.Provider, {
              value: _,
              children: [t, (0, i.jsx)(E.K_, { ref: d, colors: T, sprites: m, spriteWidth: 24, spriteHeight: 24 })],
          });
}
var S = n(544048),
    N = n(513609),
    C = n(536283),
    O = n(437850);
let R = [],
    L = new Set(["jack_o_lantern", "nose"]),
    y = { jack_o_lantern: { sprites: h(["chocolate_bar", "lollipop", "candy"]) }, nose: { sprites: h(["foot"]) } },
    D = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function v() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let b = r.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [a, s] = r.useState(null),
        { confettiCanvas: l } = r.useContext(A.x),
        o = (0, E.f9)(l, a);
    return (
        r.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    o.createMultipleConfetti(
                        {
                            ...C.Mw,
                            position: { type: "static", value: { x: e, y: t } },
                            velocity: {
                                type: "static-random",
                                minValue: { x: -5, y: -40 },
                                maxValue: { x: -40, y: -100 },
                            },
                            size: { type: "static-random", minValue: 12, maxValue: 48 },
                            dragCoefficient: { type: "static", value: 0.01 },
                        },
                        20,
                    );
                },
            }),
            [o],
        ),
        (0, i.jsx)(E.K_, { ref: s, colors: R, sprites: n, spriteWidth: 48, spriteHeight: 48 })
    );
});
function M(e) {
    let { children: t } = e,
        n = r.useRef({}),
        [a, s] = r.useState(null),
        l = (function (e) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(a),
        d = r.useRef(null),
        [c, u] = r.useState(!1),
        _ = r.useRef("jack_o_lantern"),
        E = (0, o.Us)(),
        A = r.useCallback(
            (e) => {
                if (!c) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of L) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                        return null;
                    })(e);
                    null != t && ((_.current = t), u(!0), s(null));
                }
            },
            [c],
        ),
        h = r.useMemo(() => ({ triggerAnimation: A, untriggerAnimation: () => {} }), [A]),
        f = r.useCallback((e) => {
            s(e);
        }, []),
        p = r.useCallback((e) => {
            "exit" === e && u(!1);
        }, []),
        T = r.useCallback((e) => {
            d.current = e;
        }, []);
    return (r.useEffect(() => {
        if ("confetti" === a) {
            if (null == d.current) return;
            let e = d.current.getBoundingClientRect(),
                t = e.left - 11,
                i = e.top + 125,
                r = n.current[_.current];
            r?.fireConfetti(t, i);
        }
    }, [a]),
    E !== I.BRT.APP)
        ? t
        : (0, i.jsxs)(U.Provider, {
              value: h,
              children: [
                  t,
                  Object.keys(y).map((e) => {
                      let t = y[e];
                      return (0, i.jsx)(
                          b,
                          {
                              ref: (t) => {
                                  null != t ? (n.current[e] = t) : delete n.current[e];
                              },
                              sprites: t.sprites,
                          },
                          e,
                      );
                  }),
                  c
                      ? (0, i.jsx)(N.Ay, {
                            children: (0, i.jsx)("div", {
                                className: O.k,
                                children: (0, i.jsx)(S.t, {
                                    animationRef: T,
                                    className: O.I,
                                    nextScene: l,
                                    sceneSegments: D,
                                    onScenePlay: f,
                                    onSceneComplete: p,
                                    importData: v,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
function P(e) {
    if (null == e || null == c.A.emojiAnimationTriggers) return !1;
    for (let t of c.A.emojiAnimationTriggers) {
        let n = l.Ay.getByName(t);
        if (null != n) {
            if (`:${n.uniqueName}:` === e) return !0;
            for (let t in n.diversityChildren) {
                let i = n.diversityChildren[t];
                if (`:${i.uniqueName}:` === e) return !0;
            }
        }
    }
    return !1;
}
let U = r.createContext({ triggerAnimation: () => {}, untriggerAnimation: () => {} });
function w(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: a } = r.useContext(U),
        s = (0, o.Us)(),
        l = r.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    s !== I.BRT.OVERLAY && P(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    s !== I.BRT.OVERLAY && P(e) && a(e);
                },
            }),
            [s, n, a],
        );
    return (0, i.jsx)(U.Provider, { value: l, children: t });
}
function G(e) {
    let { children: t } = e,
        n = u.A.useIsEligible(),
        a = r.useCallback((e, t) => {
            switch (t) {
                case c.n.THROW_EMOJI:
                    return (0, i.jsx)(M, { children: e });
                case c.n.SNOW:
                    return (0, i.jsx)(g, { children: e });
            }
        }, []);
    return n && null != c.A.emojiAnimationType ? a((0, i.jsx)(w, { children: t }), c.A.emojiAnimationType) : t;
}
function x(e) {
    let { emojiRef: t, channelId: n, messageId: i, emojiName: s } = e,
        l = (0, a.bG)([d.A], () => d.A.getMessage(n, i)),
        { triggerAnimation: o } = r.useContext(U);
    return (
        r.useEffect(() => {
            if (
                !c.A.triggerEmojiAnimationFromSentMessage ||
                l?.state !== I.cmJ.SENT ||
                (function (e) {
                    let { hasFiredFromMessage: t } = _.getState();
                    return t.has(e);
                })(i)
            )
                return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 &&
                n <= window.innerHeight &&
                (o(s),
                (function (e) {
                    let { hasFiredFromMessage: t } = _.getState();
                    t.add(e), _.setState({ hasFiredFromMessage: t });
                })(i));
        }, [s, t, l?.state, i, o]),
        null
    );
}
function k(e) {
    let { channelId: t, messageId: n, emojiName: r, disable: l, emojiRef: d } = e,
        c = (0, a.bG)([s.Ay], () => s.Ay.useReducedMotion),
        _ = u.A.useIsEligible(),
        E = (0, o.Us)();
    return l || E === I.BRT.OVERLAY || !_ || null == n || null == t || c || null == d || !P(r)
        ? null
        : (0, i.jsx)(x, { emojiRef: d, channelId: t, messageId: n, emojiName: r });
}
