n.d(t, { U: () => _, n: () => p });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(925747),
    o = n(717421),
    d = n(866323),
    u = n(597619),
    c = n(872293);
let h = {
        config: { friction: 50, tension: 900, mass: 1 },
        unique: !0,
        initial: { dotPosition: 1 },
        from: { dotPosition: 0 },
        enter: { dotPosition: 1 },
        leave: { dotPosition: 0 },
    },
    E = { config: { duration: 2400 }, from: { dotCycle: 2.8 }, reset: !0 };
function A(e) {
    let t = e % 2;
    return t > 1 ? 1 - (t - 1) : t;
}
let _ = l.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: a = "currentColor", spacing: r = 2.5 } = e,
            { focused: d } = (0, u.xb)(),
            c = l.useRef(!0);
        l.useEffect(() => () => void (c.current = !1), []);
        let [h] = (0, o.z)(
                () => ({
                    ...E,
                    to: async (e) => {
                        let t = 2.8;
                        for (; c.current; )
                            d
                                ? ((t += 4), await e({ dotCycle: t, immediate: !1 }))
                                : 2.8 !== t
                                  ? ((t = 2.8), await e({ dotCycle: t, immediate: !0 }))
                                  : await new Promise((e) => setTimeout(e, 1e3));
                    },
                }),
                "animate-always",
                [d],
            ),
            _ = (2 * t * 3 + (t / 4) * 2) / 2;
        return (0, i.jsx)(i.Fragment, {
            children: [0, 1, 2].map((e) => {
                let l = 0.25 * e,
                    o = t + t * r * e;
                return (0, i.jsx)(
                    s.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [_, o]) : o,
                        cy: t,
                        r: h.dotCycle
                            .to((e) => A(e - l))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (d ? e : t)),
                        fill: a,
                        style: {
                            opacity: h.dotCycle
                                .to((e) => A(e - l))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (d ? e : 1)),
                        },
                    },
                    e,
                );
            }),
        });
    }),
    p = l.memo(function (e) {
        let { dotRadius: t, x: n, y: l, hide: a = !1, themed: o = !1, className: E, ref: A } = e,
            { focused: p } = (0, u.xb)();
        return (0, d.p)(
            a,
            { ...h, key: (e) => (e ? "true" : "false") },
            p ? "animate-always" : "animate-never",
        )((e, a, d) => {
            let { dotPosition: u } = e,
                { key: h } = d;
            return a
                ? null
                : (0, i.jsx)(
                      "svg",
                      {
                          ref: A,
                          x: n,
                          y: l,
                          width: 2 * t * 3 + (t / 2) * 2,
                          height: 2 * t,
                          className: r()(E, c.r, o ? c.S : null),
                          children: (0, i.jsx)(s.animated.g, {
                              style: { opacity: u.to((e) => Math.min(1, Math.max(e, 0))) },
                              children: (0, i.jsx)(_, { dotRadius: t, dotPosition: u }),
                          }),
                      },
                      h,
                  );
        });
    });
