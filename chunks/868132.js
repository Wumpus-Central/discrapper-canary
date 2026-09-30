n.d(t, { q: () => U, X: () => T });
var i = n(477900),
    r = n(582128),
    s = n(17928),
    a = n(775602),
    l = n(7584),
    o = n(267102),
    u = n(232835),
    c = n(771527),
    d = n(552122);
let m = (0, n(196765).v)(() => ({ hasFiredFromMessage: new Set() }));
var g = n(498924),
    f = n(776310),
    h = n(21161);
function p(e) {
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
var b = n(652215);
let C = 1e3 / 60,
    x = {
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
    v = ["#FFFFFF"],
    y = [n(426560), ...p(["snowflake"])];
function A(e) {
    let { children: t } = e,
        [n, s] = r.useState(!1),
        a = (0, o.Us)(),
        [l, u] = r.useState(null),
        { confettiCanvas: c } = r.useContext(h.x),
        d = (0, f.f9)(c, l),
        m = r.useMemo(() => ({ triggerAnimation: () => s(!0), untriggerAnimation: () => s(!1) }), []),
        p = r.useCallback(() => {
            let e = c?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            d.createConfetti({
                ...x,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [d, c]);
    return (r.useEffect(() => {
        let e = n ? setInterval(p, C) : null;
        return () => clearInterval(e);
    }, [n, p]),
    a === b.BRT.OVERLAY)
        ? t
        : (0, i.jsxs)(g.w.Provider, {
              value: m,
              children: [t, (0, i.jsx)(f.K_, { ref: u, colors: v, sprites: y, spriteWidth: 24, spriteHeight: 24 })],
          });
}
var j = n(544048),
    N = n(513609),
    w = n(536283),
    R = n(757959);
let E = [],
    S = new Set(["jack_o_lantern", "nose"]),
    V = { jack_o_lantern: { sprites: p(["chocolate_bar", "lollipop", "candy"]) }, nose: { sprites: p(["foot"]) } },
    k = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function M() {
    return n
        .e("698150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let _ = r.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [s, a] = r.useState(null),
        { confettiCanvas: l } = r.useContext(h.x),
        o = (0, f.f9)(l, s);
    return (
        r.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    o.createMultipleConfetti(
                        {
                            ...w.Mw,
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
        (0, i.jsx)(f.K_, { ref: a, colors: E, sprites: n, spriteWidth: 48, spriteHeight: 48 })
    );
});
function I(e) {
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
        f = (0, o.Us)(),
        h = r.useCallback(
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
        p = r.useMemo(() => ({ triggerAnimation: h, untriggerAnimation: () => {} }), [h]),
        C = r.useCallback((e) => {
            a(e);
        }, []),
        x = r.useCallback((e) => {
            "exit" === e && d(!1);
        }, []),
        v = r.useCallback((e) => {
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
    f !== b.BRT.APP)
        ? t
        : (0, i.jsxs)(g.w.Provider, {
              value: p,
              children: [
                  t,
                  Object.keys(V).map((e) => {
                      let t = V[e];
                      return (0, i.jsx)(
                          _,
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
                                className: R.k,
                                children: (0, i.jsx)(j.t, {
                                    animationRef: v,
                                    className: R.I,
                                    nextScene: l,
                                    sceneSegments: k,
                                    onScenePlay: C,
                                    onSceneComplete: x,
                                    importData: M,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
function z(e) {
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
function B(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: s } = r.useContext(g.w),
        a = (0, o.Us)(),
        l = r.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    a !== b.BRT.OVERLAY && z(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    a !== b.BRT.OVERLAY && z(e) && s(e);
                },
            }),
            [a, n, s],
        );
    return (0, i.jsx)(g.w.Provider, { value: l, children: t });
}
function T(e) {
    let { children: t } = e,
        n = d.A.useIsEligible(),
        s = r.useCallback((e, t) => {
            switch (t) {
                case c.n.THROW_EMOJI:
                    return (0, i.jsx)(I, { children: e });
                case c.n.SNOW:
                    return (0, i.jsx)(A, { children: e });
            }
        }, []);
    return n && null != c.A.emojiAnimationType ? s((0, i.jsx)(B, { children: t }), c.A.emojiAnimationType) : t;
}
function F(e) {
    let { emojiRef: t, channelId: n, messageId: i, emojiName: a } = e,
        l = (0, s.bG)([u.A], () => u.A.getMessage(n, i)),
        { triggerAnimation: o } = r.useContext(g.w);
    return (
        r.useEffect(() => {
            if (
                !c.A.triggerEmojiAnimationFromSentMessage ||
                l?.state !== b.cmJ.SENT ||
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
                    (t.add(e), m.setState({ hasFiredFromMessage: t }));
                })(i));
        }, [a, t, l?.state, i, o]),
        null
    );
}
function U(e) {
    let { channelId: t, messageId: n, emojiName: r, disable: l, emojiRef: u } = e,
        c = (0, s.bG)([a.Ay], () => a.Ay.useReducedMotion),
        m = d.A.useIsEligible(),
        g = (0, o.Us)();
    return l || g === b.BRT.OVERLAY || !m || null == n || null == t || c || null == u || !z(r)
        ? null
        : (0, i.jsx)(F, { emojiRef: u, channelId: t, messageId: n, emojiName: r });
}
