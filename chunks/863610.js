"use strict";
n.d(t, { U: () => E, n: () => p });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(580929),
    l = n(717421),
    u = n(866323),
    d = n(597619),
    c = n(872293);
let _ = {
        config: { friction: 50, tension: 900, mass: 1 },
        unique: !0,
        initial: { dotPosition: 1 },
        from: { dotPosition: 0 },
        enter: { dotPosition: 1 },
        leave: { dotPosition: 0 },
    },
    h = { config: { duration: 2400 }, from: { dotCycle: 2.8 }, reset: !0 };
function f(e) {
    let t = e % 2;
    return t > 1 ? 1 - (t - 1) : t;
}
let E = r.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: s = "currentColor", spacing: a = 2.5 } = e,
            { focused: u } = (0, d.xb)(),
            c = r.useRef(!0);
        r.useEffect(() => () => void (c.current = !1), []);
        let [_] = (0, l.z)(
                () => ({
                    ...h,
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
            E = (2 * t * 3 + (t / 4) * 2) / 2;
        return (0, i.jsx)(i.Fragment, {
            children: [0, 1, 2].map((e) => {
                let r = 0.25 * e,
                    l = t + t * a * e;
                return (0, i.jsx)(
                    o.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [E, l]) : l,
                        cy: t,
                        r: _.dotCycle
                            .to((e) => f(e - r))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (u ? e : t)),
                        fill: s,
                        style: {
                            opacity: _.dotCycle
                                .to((e) => f(e - r))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (u ? e : 1)),
                        },
                    },
                    e,
                );
            }),
        });
    }),
    p = r.memo(function (e) {
        let { dotRadius: t, x: n, y: r, hide: s = !1, themed: l = !1, className: h, ref: f } = e,
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
                : (0, i.jsx)(
                      "svg",
                      {
                          ref: f,
                          x: n,
                          y: r,
                          width: 2 * t * 3 + (t / 2) * 2,
                          height: 2 * t,
                          className: a()(h, c.r, l ? c.S : null),
                          children: (0, i.jsx)(o.animated.g, {
                              style: { opacity: d.to((e) => Math.min(1, Math.max(e, 0))) },
                              children: (0, i.jsx)(E, { dotRadius: t, dotPosition: d }),
                          }),
                      },
                      _,
                  );
        });
    });
