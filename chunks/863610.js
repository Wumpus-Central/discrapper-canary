"use strict";
n.d(t, { U: () => h, n: () => I });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(4798),
    o = n(717421),
    d = n(866323),
    c = n(597619),
    u = n(360589);
let _ = {
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
let h = r.memo(function (e) {
        let { dotRadius: t, dotPosition: n, fill: a = "currentColor", spacing: s = 2.5 } = e,
            { focused: d } = (0, c.xb)(),
            u = r.useRef(!0);
        r.useEffect(() => () => void (u.current = !1), []);
        let [_] = (0, o.z)(
                () => ({
                    ...E,
                    to: async (e) => {
                        let t = 2.8;
                        for (; u.current; )
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
            h = (2 * t * 3 + (t / 4) * 2) / 2;
        return (0, i.jsx)(i.Fragment, {
            children: [0, 1, 2].map((e) => {
                let r = 0.25 * e,
                    o = t + t * s * e;
                return (0, i.jsx)(
                    l.animated.circle,
                    {
                        cx: n ? n.to([0, 1], [h, o]) : o,
                        cy: t,
                        r: _.dotCycle
                            .to((e) => A(e - r))
                            .to([0, 0.4, 0.8, 1], [0.8 * t, 0.8 * t, t, t])
                            .to((e) => (d ? e : t)),
                        fill: a,
                        style: {
                            opacity: _.dotCycle
                                .to((e) => A(e - r))
                                .to([0, 0.4, 0.8, 1], [0.3, 0.3, 1, 1])
                                .to((e) => (d ? e : 1)),
                        },
                    },
                    e,
                );
            }),
        });
    }),
    I = r.memo(function (e) {
        let { dotRadius: t, x: n, y: r, hide: a = !1, themed: o = !1, className: E, ref: A } = e,
            { focused: I } = (0, c.xb)();
        return (0, d.p)(
            a,
            { ..._, key: (e) => (e ? "true" : "false") },
            I ? "animate-always" : "animate-never",
        )((e, a, d) => {
            let { dotPosition: c } = e,
                { key: _ } = d;
            return a
                ? null
                : (0, i.jsx)(
                      "svg",
                      {
                          ref: A,
                          x: n,
                          y: r,
                          width: 2 * t * 3 + (t / 2) * 2,
                          height: 2 * t,
                          className: s()(E, u.r, o ? u.S : null),
                          children: (0, i.jsx)(l.animated.g, {
                              style: { opacity: c.to((e) => Math.min(1, Math.max(e, 0))) },
                              children: (0, i.jsx)(h, { dotRadius: t, dotPosition: c }),
                          }),
                      },
                      _,
                  );
        });
    });
