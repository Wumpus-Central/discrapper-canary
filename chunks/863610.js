"use strict";
n.d(t, { U: () => I, n: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(397927),
    u = n(611635),
    c = n(439442);
function d() {
    return new Promise((e) => setTimeout(e, 1e3));
}
let _ = 0.25,
    f = 4,
    h = 1,
    p = 2.8,
    g = {
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
let I = i.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: a = "currentColor", spacing: s = 2.5 } = e,
            { focused: c } = (0, u.xb)(),
            g = i.useRef(!0);
        i.useEffect(() => () => void (g.current = !1), []);
        let [I] = (0, l.zhh)(
                () => ({
                    ...E,
                    to: async (e) => {
                        let t = p;
                        for (; g.current; )
                            c
                                ? ((t += h * f), await e({ dotCycle: t, immediate: !1 }))
                                : t !== p
                                  ? ((t = p), await e({ dotCycle: t, immediate: !0 }))
                                  : await d();
                    },
                }),
                "animate-always",
                [c],
            ),
            T = (2 * t * 3 + (t / 4) * 2) / 2;
        return (0, r.jsx)(r.Fragment, {
            children: [0, 1, 2].map((e) => {
                let i = _ * e,
                    l = t + t * s * e;
                return (0, r.jsx)(
                    o.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [T, l]) : l,
                        cy: t,
                        r: I.dotCycle
                            .to((e) => A(e - i))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (c ? e : t)),
                        fill: a,
                        style: {
                            opacity: I.dotCycle
                                .to((e) => A(e - i))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (c ? e : 1)),
                        },
                    },
                    e,
                );
            }),
        });
    }),
    T = i.memo(function (e) {
        let { dotRadius: t, x: n, y: i, hide: a = !1, themed: d = !1, className: _, ref: f } = e,
            { focused: h } = (0, u.xb)();
        return (0, l.pnh)(
            a,
            { ...g, key: (e) => (e ? "true" : "false") },
            h ? "animate-always" : "animate-never",
        )((e, a, l) => {
            let { dotPosition: u } = e,
                { key: h } = l;
            return a
                ? null
                : (0, r.jsx)(
                      "svg",
                      {
                          ref: f,
                          x: n,
                          y: i,
                          width: 2 * t * 3 + (t / 2) * 2,
                          height: 2 * t,
                          className: s()(_, c.r, d ? c.S : null),
                          children: (0, r.jsx)(o.animated.g, {
                              style: { opacity: u.to((e) => Math.min(1, Math.max(e, 0))) },
                              children: (0, r.jsx)(I, { dotRadius: t, dotPosition: u }),
                          }),
                      },
                      h,
                  );
        });
    });
