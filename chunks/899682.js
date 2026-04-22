"use strict";
n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(517738),
    s = n(311907),
    r = n(866323),
    a = n(857250),
    o = n(97483),
    c = n(289873),
    u = n(834730),
    d = n(775602),
    h = n(985018),
    m = n(401871),
    p = n(861173);
let f = () =>
        (0, i.jsxs)("div", {
            className: p.oR,
            children: [
                (0, i.jsx)(c.y, { type: c.t.SPINNING_CIRCLE_SIMPLE, className: m.S }),
                (0, i.jsx)(u.E, {
                    color: "text-strong",
                    variant: "text-md/normal",
                    children: h.intl.string(h.t["5z/hlE"]),
                }),
            ],
        }),
    g = (e) => {
        let { shown: t, sent: n, className: c } = e,
            u = (0, s.bG)([d.A], () => d.A.useReducedMotion),
            m = (0, r.p)(
                t,
                {
                    from: { transform: u ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    enter: { transform: "translateY(0)", opacity: 1 },
                    leave: { transform: u ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                    delay: 200,
                },
                "animate-always",
            );
        return (0, i.jsx)(i.Fragment, {
            children: m(
                (e, t) =>
                    t &&
                    (0, i.jsx)(l.animated.div, {
                        className: c,
                        style: e,
                        children: n
                            ? (0, i.jsx)(a.y, {
                                  message: h.intl.string(h.t.fjcCk5),
                                  type: o.Ck.SUCCESS,
                                  id: "success_message_toast",
                              })
                            : (0, i.jsx)(a.y, {
                                  message: "",
                                  type: o.Ck.CUSTOM,
                                  id: "custom_loading_message_toast",
                                  options: { component: (0, i.jsx)(f, {}) },
                              }),
                    }),
            ),
        });
    };
