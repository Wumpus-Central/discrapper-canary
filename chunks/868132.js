n.d(t, { q: () => L, X: () => I });
var i = n(477900),
    s = n(582128),
    r = n(17928),
    a = n(775602),
    l = n(7584),
    o = n(267102),
    u = n(232835),
    c = n(771527),
    d = n(552122);
let m = (0, n(196765).v)(() => ({ hasFiredFromMessage: new Set() }));
var h = n(498924),
    p = n(776310),
    f = n(21161);
function g(e) {
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
var C = n(652215);
let y = 1e3 / 60,
    b = {
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
    x = [n(426560), ...g(["snowflake"])];
function A(e) {
    let { children: t } = e,
        [n, r] = s.useState(!1),
        a = (0, o.Us)(),
        [l, u] = s.useState(null),
        { confettiCanvas: c } = s.useContext(f.x),
        d = (0, p.f9)(c, l),
        m = s.useMemo(() => ({ triggerAnimation: () => r(!0), untriggerAnimation: () => r(!1) }), []),
        g = s.useCallback(() => {
            let e = c?.getCanvas();
            if (null == e) return;
            let t = e.getBoundingClientRect();
            d.createConfetti({
                ...b,
                position: {
                    type: "static-random",
                    minValue: { x: -t.width / 2, y: -24 },
                    maxValue: { x: t.width, y: -24 },
                },
            });
        }, [d, c]);
    return (s.useEffect(() => {
        let e = n ? setInterval(g, y) : null;
        return () => clearInterval(e);
    }, [n, g]),
    a === C.BRT.OVERLAY)
        ? t
        : (0, i.jsxs)(h.w.Provider, {
              value: m,
              children: [t, (0, i.jsx)(p.K_, { ref: u, colors: v, sprites: x, spriteWidth: 24, spriteHeight: 24 })],
          });
}
var S = n(544048),
    j = n(513609),
    N = n(536283),
    E = n(757959);
let R = [],
    w = new Set(["jack_o_lantern", "nose"]),
    V = { jack_o_lantern: { sprites: g(["chocolate_bar", "lollipop", "candy"]) }, nose: { sprites: g(["foot"]) } },
    k = { enter: { BEG: 0, END: 22 }, confetti: { BEG: 23, END: 119 }, exit: { BEG: 164, END: 200 } };
function F() {
    return n
        .e("698150")
        .then(n.t.bind(n, 633343, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let B = function (e) {
    let { sprites: t, ref: n } = e,
        [r, a] = s.useState(null),
        { confettiCanvas: l } = s.useContext(f.x),
        o = (0, p.f9)(l, r);
    return (
        s.useImperativeHandle(
            n,
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
        (0, i.jsx)(p.K_, { ref: a, colors: R, sprites: t, spriteWidth: 48, spriteHeight: 48 })
    );
};
function M(e) {
    let { children: t } = e,
        n = s.useRef({}),
        [r, a] = s.useState(null),
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
        })(r),
        u = s.useRef(null),
        [c, d] = s.useState(!1),
        m = s.useRef("jack_o_lantern"),
        p = (0, o.Us)(),
        f = s.useCallback(
            (e) => {
                if (!c) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of w) if (null != e.match(RegExp(`:${t}(_tone[1-9])?`))) return t;
                        return null;
                    })(e);
                    null != t && ((m.current = t), d(!0), a(null));
                }
            },
            [c],
        ),
        g = s.useMemo(() => ({ triggerAnimation: f, untriggerAnimation: () => {} }), [f]),
        y = s.useCallback((e) => {
            a(e);
        }, []),
        b = s.useCallback((e) => {
            "exit" === e && d(!1);
        }, []),
        v = s.useCallback((e) => {
            u.current = e;
        }, []);
    return (s.useEffect(() => {
        if ("confetti" === r) {
            if (null == u.current) return;
            let e = u.current.getBoundingClientRect(),
                t = e.left - 11,
                i = e.top + 125,
                s = n.current[m.current];
            s?.fireConfetti(t, i);
        }
    }, [r]),
    p !== C.BRT.APP)
        ? t
        : (0, i.jsxs)(h.w.Provider, {
              value: g,
              children: [
                  t,
                  Object.keys(V).map((e) => {
                      let t = V[e];
                      return (0, i.jsx)(
                          B,
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
                                className: E.k,
                                children: (0, i.jsx)(S.t, {
                                    animationRef: v,
                                    className: E.I,
                                    nextScene: l,
                                    sceneSegments: k,
                                    onScenePlay: y,
                                    onSceneComplete: b,
                                    importData: F,
                                    pauseWhileUnfocused: !1,
                                }),
                            }),
                        })
                      : null,
              ],
          });
}
function U(e) {
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
function _(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: r } = s.useContext(h.w),
        a = (0, o.Us)(),
        l = s.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    a !== C.BRT.OVERLAY && U(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    a !== C.BRT.OVERLAY && U(e) && r(e);
                },
            }),
            [a, n, r],
        );
    return (0, i.jsx)(h.w.Provider, { value: l, children: t });
}
function I(e) {
    let { children: t } = e,
        n = d.A.useIsEligible(),
        r = s.useCallback((e, t) => {
            switch (t) {
                case c.n.THROW_EMOJI:
                    return (0, i.jsx)(M, { children: e });
                case c.n.SNOW:
                    return (0, i.jsx)(A, { children: e });
            }
        }, []);
    return n && null != c.A.emojiAnimationType ? r((0, i.jsx)(_, { children: t }), c.A.emojiAnimationType) : t;
}
function z(e) {
    let { emojiRef: t, channelId: n, messageId: i, emojiName: a } = e,
        l = (0, r.bG)([u.A], () => u.A.getMessage(n, i)),
        { triggerAnimation: o } = s.useContext(h.w);
    return (
        s.useEffect(() => {
            if (
                !c.A.triggerEmojiAnimationFromSentMessage ||
                l?.state !== C.cmJ.SENT ||
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
function L(e) {
    let { channelId: t, messageId: n, emojiName: s, disable: l, emojiRef: u } = e,
        c = (0, r.bG)([a.Ay], () => a.Ay.useReducedMotion),
        m = d.A.useIsEligible(),
        h = (0, o.Us)();
    return l || h === C.BRT.OVERLAY || !m || null == n || null == t || c || null == u || !U(s)
        ? null
        : (0, i.jsx)(z, { emojiRef: u, channelId: t, messageId: n, emojiName: s });
}
