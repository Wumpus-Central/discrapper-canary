"use strict";
n.d(t, { U: () => A, n: () => I });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(407045),
    l = n(397927),
    u = n(611635),
    c = n(872293);
function d() {
    return new Promise((e) => setTimeout(e, 1e3));
}
let _ = 0.25,
    f = 4,
    p = 1,
    h = 2.8,
    m = {
        config: { friction: 50, tension: 900, mass: 1 },
        unique: !0,
        initial: { dotPosition: 1 },
        from: { dotPosition: 0 },
        enter: { dotPosition: 1 },
        leave: { dotPosition: 0 },
    },
    E = { config: { duration: 2400 }, from: { dotCycle: 2.8 }, reset: !0 };
function g(e) {
    let t = e % 2;
    return t > 1 ? 1 - (t - 1) : t;
}
let A = i.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: s = "currentColor", spacing: a = 2.5 } = e,
            { focused: c } = (0, u.xb)(),
            m = i.useRef(!0);
        i.useEffect(() => () => void (m.current = !1), []);
        let [A] = (0, l.zhh)(
                () => ({
                    ...E,
                    to: async (e) => {
                        let t = h;
                        for (; m.current; )
                            c
                                ? ((t += p * f), await e({ dotCycle: t, immediate: !1 }))
                                : t !== h
                                  ? ((t = h), await e({ dotCycle: t, immediate: !0 }))
                                  : await d();
                    },
                }),
                "animate-always",
                [c],
            ),
            I = (2 * t * 3 + (t / 4) * 2) / 2;
        return (0, r.jsx)(r.Fragment, {
            children: [0, 1, 2].map((e) => {
                let i = _ * e,
                    l = t + t * a * e;
                return (0, r.jsx)(
                    o.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [I, l]) : l,
                        cy: t,
                        r: A.dotCycle
                            .to((e) => g(e - i))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (c ? e : t)),
                        fill: s,
                        style: {
                            opacity: A.dotCycle
                                .to((e) => g(e - i))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (c ? e : 1)),
                        },
                    },
                    e,
                );
            }),
        });
    }),
    I = i.memo(function (e) {
        let { dotRadius: t, x: n, y: i, hide: s = !1, themed: d = !1, className: _, ref: f } = e,
            { focused: p } = (0, u.xb)();
        return (0, l.pnh)(
            s,
            { ...m, key: (e) => (e ? "true" : "false") },
            p ? "animate-always" : "animate-never",
        )((e, s, l) => {
            let { dotPosition: u } = e,
                { key: p } = l;
            return s
                ? null
                : (0, r.jsx)(
                      "svg",
                      {
                          ref: f,
                          x: n,
                          y: i,
                          width: 2 * t * 3 + (t / 2) * 2,
                          height: 2 * t,
                          className: a()(_, c.r, d ? c.S : null),
                          children: (0, r.jsx)(o.animated.g, {
                              style: { opacity: u.to((e) => Math.min(1, Math.max(e, 0))) },
                              children: (0, r.jsx)(A, { dotRadius: t, dotPosition: u }),
                          }),
                      },
                      p,
                  );
        });
    });
