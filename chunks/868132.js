n.d(t, { wE: () => z, Xq: () => T, q6: () => U });
var i = n(627968),
    r = n(64700),
    s = n(17928),
    a = n(775602),
    l = n(7584),
    o = n(267102),
    u = n(232835),
    c = n(417146),
    d = n(552122);
let m = (0, n(353640).v)(() => ({ hasFiredFromMessage: new Set() }));
var g = n(106778),
    f = n(21161);
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
var p = n(652215);
let b = 1e3 / 60,
    C = {
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
    x = ["#FFFFFF"],
    v = [n(426560), ...h(["snowflake"])];
function A(e) {
    let { children: t } = e,
        [n, s] = r.useState(!1),
        a = (0, o.Us)(),
        [l, u] = r.useState(null),
        { confettiCanvas: c } = r.useContext(f.x),
        d = (0, g.f9)(c, l),
        m = r.useMemo(() => ({ triggerAnimation: () => s(!0), untriggerAnimation: () => s(!1) }), []),
        h = r.useCallback(() => {
            let e = c?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            d.createConfetti({
                ...C,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [d, c]);
    return (r.useEffect(() => {
        let e = n ? setInterval(h, b) : null;
        return () => clearInterval(e);
    }, [n, h]),
    a === p.BRT.OVERLAY)
        ? t
        : (0, i.jsxs)(z.Provider, {
              value: m,
              children: [t, (0, i.jsx)(g.K_, { ref: u, colors: x, sprites: v, spriteWidth: 24, spriteHeight: 24 })],
          });
}
var y = n(544048),
    j = n(513609),
    N = n(536283),
    R = n(490114);
let E = [],
    S = new Set(["jack_o_lantern", "nose"]),
    w = { jack_o_lantern: { sprites: h(["chocolate_bar", "lollipop", "candy"]) }, nose: { sprites: h(["foot"]) } },
    V = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function k() {
    return n
        .e("98150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let M = r.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [s, a] = r.useState(null),
        { confettiCanvas: l } = r.useContext(f.x),
        o = (0, g.f9)(l, s);
    return (
        r.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    o.createMultipleConfetti(
                        {
                            ...N.Mw,
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
        (0, i.jsx)(g.K_, { ref: a, colors: E, sprites: n, spriteWidth: 48, spriteHeight: 48 })
    );
});
function _(e) {
    let { children: t } = e,
        n = r.useRef({}),
        [s, a] = r.useState(null),
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
        })(s),
        u = r.useRef(null),
        [c, d] = r.useState(!1),
        m = r.useRef("jack_o_lantern"),
        g = (0, o.Us)(),
        f = r.useCallback(
            (e) => {
                if (!c) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of S) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                        return null;
                    })(e);
                    null != t && ((m.current = t), d(!0), a(null));
                }
            },
            [c],
        ),
        h = r.useMemo(() => ({ triggerAnimation: f, untriggerAnimation: () => {} }), [f]),
        b = r.useCallback((e) => {
            a(e);
        }, []),
        C = r.useCallback((e) => {
            "exit" === e && d(!1);
        }, []),
        x = r.useCallback((e) => {
            u.current = e;
        }, []);
    return (r.useEffect(() => {
        if ("confetti" === s) {
            if (null == u.current) return;
            let e = u.current.getBoundingClientRect(),
                t = e.left - 11,
                i = e.top + 125,
                r = n.current[m.current];
            r?.fireConfetti(t, i);
        }
    }, [s]),
    g !== p.BRT.APP)
        ? t
        : (0, i.jsxs)(z.Provider, {
              value: h,
              children: [
                  t,
                  Object.keys(w).map((e) => {
                      let t = w[e];
                      return (0, i.jsx)(
                          M,
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
                      ? (0, i.jsx)(j.Ay, {
                            children: (0, i.jsx)("div", {
                                className: R.k,
                                children: (0, i.jsx)(y.t, {
                                    animationRef: x,
                                    className: R.I,
                                    nextScene: l,
                                    sceneSegments: V,
                                    onScenePlay: b,
                                    onSceneComplete: C,
                                    importData: k,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
function I(e) {
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
let z = r.createContext({ triggerAnimation: () => {}, untriggerAnimation: () => {} });
function B(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: s } = r.useContext(z),
        a = (0, o.Us)(),
        l = r.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    a !== p.BRT.OVERLAY && I(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    a !== p.BRT.OVERLAY && I(e) && s(e);
                },
            }),
            [a, n, s],
        );
    return (0, i.jsx)(z.Provider, { value: l, children: t });
}
function T(e) {
    let { children: t } = e,
        n = d.A.useIsEligible(),
        s = r.useCallback((e, t) => {
            switch (t) {
                case c.n.THROW_EMOJI:
                    return (0, i.jsx)(_, { children: e });
                case c.n.SNOW:
                    return (0, i.jsx)(A, { children: e });
            }
        }, []);
    return n && null != c.A.emojiAnimationType ? s((0, i.jsx)(B, { children: t }), c.A.emojiAnimationType) : t;
}
function F(e) {
    let { emojiRef: t, channelId: n, messageId: i, emojiName: a } = e,
        l = (0, s.bG)([u.A], () => u.A.getMessage(n, i)),
        { triggerAnimation: o } = r.useContext(z);
    return (
        r.useEffect(() => {
            if (
                !c.A.triggerEmojiAnimationFromSentMessage ||
                l?.state !== p.cmJ.SENT ||
                (function (e) {
                    let { hasFiredFromMessage: t } = m.getState();
                    return t.has(e);
                })(i)
            )
                return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 &&
                n <= window.innerHeight &&
                (o(a),
                (function (e) {
                    let { hasFiredFromMessage: t } = m.getState();
                    t.add(e), m.setState({ hasFiredFromMessage: t });
                })(i));
        }, [a, t, l?.state, i, o]),
        null
    );
}
function U(e) {
    let { channelId: t, messageId: n, emojiName: r, disable: l, emojiRef: u } = e,
        c = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        m = d.A.useIsEligible(),
        g = (0, o.Us)();
    return l || g === p.BRT.OVERLAY || !m || null == n || null == t || c || null == u || !I(r)
        ? null
        : (0, i.jsx)(F, { emojiRef: u, channelId: t, messageId: n, emojiName: r });
}
