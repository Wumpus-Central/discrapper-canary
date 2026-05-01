"use strict";
n.d(t, { wE: () => P, Xq: () => U, q6: () => G });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(775602),
    o = n(7584),
    l = n(267102),
    u = n(232835),
    c = n(417146),
    d = n(552122);
let _ = (0, n(353640).v)(() => ({ hasFiredFromMessage: new Set() }));
var f = n(106778),
    h = n(21161);
function p(e) {
    let t = [];
    return (
        e.forEach((e) => {
            let n = o.Ay.getByName(e);
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
var E = n(652215);
let m = 1e3 / 60,
    g = {
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
    A = ["#FFFFFF"],
    I = [n(426560), ...p(["snowflake"])];
function T(e) {
    let { children: t } = e,
        [n, s] = r.useState(!1),
        a = (0, l.Us)(),
        [o, u] = r.useState(null),
        { confettiCanvas: c } = r.useContext(h.x),
        d = (0, f.f9)(c, o),
        _ = r.useMemo(() => ({ triggerAnimation: () => s(!0), untriggerAnimation: () => s(!1) }), []),
        p = r.useCallback(() => {
            let e = c?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            d.createConfetti({
                ...g,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [d, c]);
    return (r.useEffect(() => {
        let e = n ? setInterval(p, m) : null;
        return () => clearInterval(e);
    }, [n, p]),
    a === E.BRT.OVERLAY)
        ? t
        : (0, i.jsxs)(P.Provider, {
              value: _,
              children: [t, (0, i.jsx)(f.K_, { ref: u, colors: A, sprites: I, spriteWidth: 24, spriteHeight: 24 })],
          });
}
var S = n(544048),
    N = n(513609),
    y = n(536283),
    C = n(490114);
let v = [],
    O = new Set(["jack_o_lantern", "nose"]),
    R = { jack_o_lantern: { sprites: p(["chocolate_bar", "lollipop", "candy"]) }, nose: { sprites: p(["foot"]) } },
    b = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function D() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let L = r.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [s, a] = r.useState(null),
        { confettiCanvas: o } = r.useContext(h.x),
        l = (0, f.f9)(o, s);
    return (
        r.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    l.createMultipleConfetti(
                        {
                            ...y.Mw,
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
            [l],
        ),
        (0, i.jsx)(f.K_, { ref: a, colors: v, sprites: n, spriteWidth: 48, spriteHeight: 48 })
    );
});
function w(e) {
    let { children: t } = e,
        n = r.useRef({}),
        [s, a] = r.useState(null),
        o = (function (e) {
            if (null == e) return "enter";
            switch (e) {
                case "enter":
                    return "confetti";
                case "confetti":
                    return "exit";
                case "exit":
                    return "enter";
            }
        })(s),
        u = r.useRef(null),
        [c, d] = r.useState(!1),
        _ = r.useRef("jack_o_lantern"),
        f = (0, l.Us)(),
        h = r.useCallback(
            (e) => {
                if (!c) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of O) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                        return null;
                    })(e);
                    null != t && ((_.current = t), d(!0), a(null));
                }
            },
            [c],
        ),
        p = r.useMemo(() => ({ triggerAnimation: h, untriggerAnimation: () => {} }), [h]),
        m = r.useCallback((e) => {
            a(e);
        }, []),
        g = r.useCallback((e) => {
            "exit" === e && d(!1);
        }, []),
        A = r.useCallback((e) => {
            u.current = e;
        }, []);
    return (r.useEffect(() => {
        if ("confetti" === s) {
            if (null == u.current) return;
            let e = u.current.getBoundingClientRect(),
                t = e.left - 11,
                i = e.top + 125,
                r = n.current[_.current];
            r?.fireConfetti(t, i);
        }
    }, [s]),
    f !== E.BRT.APP)
        ? t
        : (0, i.jsxs)(P.Provider, {
              value: p,
              children: [
                  t,
                  Object.keys(R).map((e) => {
                      let t = R[e];
                      return (0, i.jsx)(
                          L,
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
                                className: C.k,
                                children: (0, i.jsx)(S.t, {
                                    animationRef: A,
                                    className: C.I,
                                    nextScene: o,
                                    sceneSegments: b,
                                    onScenePlay: m,
                                    onSceneComplete: g,
                                    importData: D,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
function M(e) {
    if (null == e || null == c.A.emojiAnimationTriggers) return !1;
    for (let t of c.A.emojiAnimationTriggers) {
        let n = o.Ay.getByName(t);
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
let P = r.createContext({ triggerAnimation: () => {}, untriggerAnimation: () => {} });
function x(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: s } = r.useContext(P),
        a = (0, l.Us)(),
        o = r.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    a !== E.BRT.OVERLAY && M(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    a !== E.BRT.OVERLAY && M(e) && s(e);
                },
            }),
            [a, n, s],
        );
    return (0, i.jsx)(P.Provider, { value: o, children: t });
}
function U(e) {
    let { children: t } = e,
        n = d.A.useIsEligible(),
        s = r.useCallback((e, t) => {
            switch (t) {
                case c.n.THROW_EMOJI:
                    return (0, i.jsx)(w, { children: e });
                case c.n.SNOW:
                    return (0, i.jsx)(T, { children: e });
            }
        }, []);
    return n && null != c.A.emojiAnimationType ? s((0, i.jsx)(x, { children: t }), c.A.emojiAnimationType) : t;
}
function k(e) {
    let { emojiRef: t, channelId: n, messageId: i, emojiName: a } = e,
        o = (0, s.bG)([u.A], () => u.A.getMessage(n, i)),
        { triggerAnimation: l } = r.useContext(P);
    return (
        r.useEffect(() => {
            if (
                !c.A.triggerEmojiAnimationFromSentMessage ||
                o?.state !== E.cmJ.SENT ||
                (function (e) {
                    let { hasFiredFromMessage: t } = _.getState();
                    return t.has(e);
                })(i)
            )
                return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 &&
                n <= window.innerHeight &&
                (l(a),
                (function (e) {
                    let { hasFiredFromMessage: t } = _.getState();
                    t.add(e), _.setState({ hasFiredFromMessage: t });
                })(i));
        }, [a, t, o?.state, i, l]),
        null
    );
}
function G(e) {
    let { channelId: t, messageId: n, emojiName: r, disable: o, emojiRef: u } = e,
        c = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        _ = d.A.useIsEligible(),
        f = (0, l.Us)();
    return o || f === E.BRT.OVERLAY || !_ || null == n || null == t || c || null == u || !M(r)
        ? null
        : (0, i.jsx)(k, { emojiRef: u, channelId: t, messageId: n, emojiName: r });
}
