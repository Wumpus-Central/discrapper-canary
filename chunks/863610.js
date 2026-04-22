"use strict";
n.d(t, { U: () => h, n: () => p });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(517738),
    l = n(717421),
    u = n(866323),
    d = n(611635),
    c = n(872293);
let _ = {
        config: { friction: 50, tension: 900, mass: 1 },
        unique: !0,
        initial: { dotPosition: 1 },
        from: { dotPosition: 0 },
        enter: { dotPosition: 1 },
        leave: { dotPosition: 0 },
    },
    f = { config: { duration: 2400 }, from: { dotCycle: 2.8 }, reset: !0 };
function E(e) {
    let t = e % 2;
    return t > 1 ? 1 - (t - 1) : t;
}
let h = i.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: s = "currentColor", spacing: a = 2.5 } = e,
            { focused: u } = (0, d.xb)(),
            c = i.useRef(!0);
        i.useEffect(() => () => void (c.current = !1), []);
        let [_] = (0, l.z)(
                () => ({
                    ...f,
                    to: async (e) => {
                        let t = 2.8;
                        for (; c.current; )
                            u
                                ? ((t += 4), await e({ dotCycle: t, immediate: !1 }))
                                : 2.8 !== t
                                  ? ((t = 2.8), await e({ dotCycle: t, immediate: !0 }))
                                  : await new Promise((e) => setTimeout(e, 1e3));
                    },
                }),
                "animate-always",
                [u],
            ),
            h = (2 * t * 3 + (t / 4) * 2) / 2;
        return (0, r.jsx)(r.Fragment, {
            children: [0, 1, 2].map((e) => {
                let i = 0.25 * e,
                    l = t + t * a * e;
                return (0, r.jsx)(
                    o.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [h, l]) : l,
                        cy: t,
                        r: _.dotCycle
                            .to((e) => E(e - i))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (u ? e : t)),
                        fill: s,
                        style: {
                            opacity: _.dotCycle
                                .to((e) => E(e - i))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (u ? e : 1)),
                        },
                    },
                    e,
                );
            }),
        });
    }),
    p = i.memo(function (e) {
        let { dotRadius: t, x: n, y: i, hide: s = !1, themed: l = !1, className: f, ref: E } = e,
            { focused: p } = (0, d.xb)();
        return (0, u.p)(
            s,
            { ..._, key: (e) => (e ? "true" : "false") },
            p ? "animate-always" : "animate-never",
        )((e, s, u) => {
            let { dotPosition: d } = e,
                { key: _ } = u;
            return s
                ? null
                : (0, r.jsx)(
                      "svg",
                      {
                          ref: E,
                          x: n,
                          y: i,
                          width: 2 * t * 3 + (t / 2) * 2,
                          height: 2 * t,
                          className: a()(f, c.r, l ? c.S : null),
                          children: (0, r.jsx)(o.animated.g, {
                              style: { opacity: d.to((e) => Math.min(1, Math.max(e, 0))) },
                              children: (0, r.jsx)(h, { dotRadius: t, dotPosition: d }),
                          }),
                      },
                      _,
                  );
        });
    });
