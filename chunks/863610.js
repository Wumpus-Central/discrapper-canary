n.d(t, { U: () => p, n: () => A });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(419354),
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
function _(e) {
    let t = e % 2;
    return t > 1 ? 1 - (t - 1) : t;
}
let p = r.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: l = "currentColor", spacing: a = 2.5 } = e,
            { focused: d } = (0, u.xb)(),
            c = r.useRef(!0);
        r.useEffect(() => () => void (c.current = !1), []);
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
            p = (2 * t * 3 + (t / 4) * 2) / 2;
        return (0, i.jsx)(i.Fragment, {
            children: [0, 1, 2].map((e) => {
                let r = 0.25 * e,
                    o = t + t * a * e;
                return (0, i.jsx)(
                    s.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [p, o]) : o,
                        cy: t,
                        r: h.dotCycle
                            .to((e) => _(e - r))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (d ? e : t)),
                        fill: l,
                        style: {
                            opacity: h.dotCycle
                                .to((e) => _(e - r))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (d ? e : 1)),
                        },
                    },
                    e,
                );
            }),
        });
    }),
    A = r.memo(function (e) {
        let { dotRadius: t, x: n, y: r, hide: l = !1, themed: o = !1, className: E, ref: _ } = e,
            { focused: A } = (0, u.xb)();
        return (0, d.p)(
            l,
            { ...h, key: (e) => (e ? "true" : "false") },
            A ? "animate-always" : "animate-never",
        )((e, l, d) => {
            let { dotPosition: u } = e,
                { key: h } = d;
            return l
                ? null
                : (0, i.jsx)(
                      "svg",
                      {
                          ref: _,
                          x: n,
                          y: r,
                          width: 2 * t * 3 + (t / 2) * 2,
                          height: 2 * t,
                          className: a()(E, c.r, o ? c.S : null),
                          children: (0, i.jsx)(s.animated.g, {
                              style: { opacity: u.to((e) => Math.min(1, Math.max(e, 0))) },
                              children: (0, i.jsx)(p, { dotRadius: t, dotPosition: u }),
                          }),
                      },
                      h,
                  );
        });
    });
