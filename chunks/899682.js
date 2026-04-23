"use strict";
n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(419354),
    s = n(311907),
    a = n(866323),
    o = n(857250),
    l = n(97483),
    u = n(289873),
    c = n(834730),
    d = n(775602),
    _ = n(985018),
    f = n(401871),
    p = n(861173);
let h = () =>
        (0, r.jsxs)("div", {
            className: p.oR,
            children: [
                (0, r.jsx)(u.y, { type: u.t.SPINNING_CIRCLE_SIMPLE, className: f.S }),
                (0, r.jsx)(c.E, {
                    color: "text-strong",
                    variant: "text-md/normal",
                    children: _.intl.string(_.t["5z/hlE"]),
                }),
            ],
        }),
    E = (e) => {
        let { shown: t, sent: n, className: u } = e,
            c = (0, s.bG)([d.A], () => d.A.useReducedMotion),
            f = (0, a.p)(
                t,
                {
                    from: { transform: c ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    enter: { transform: "translateY(0)", opacity: 1 },
                    leave: { transform: c ? "translateY(0)" : "translateY(16px)", opacity: 0 },
                    config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
                    delay: 200,
                },
                "animate-always",
            );
        return (0, r.jsx)(r.Fragment, {
            children: f(
                (e, t) =>
                    t &&
                    (0, r.jsx)(i.animated.div, {
                        className: u,
                        style: e,
                        children: n
                            ? (0, r.jsx)(o.y, {
                                  message: _.intl.string(_.t.fjcCk5),
                                  type: l.Ck.SUCCESS,
                                  id: "success_message_toast",
                              })
                            : (0, r.jsx)(o.y, {
                                  message: "",
                                  type: l.Ck.CUSTOM,
                                  id: "custom_loading_message_toast",
                                  options: { component: (0, r.jsx)(h, {}) },
                              }),
                    }),
            ),
        });
    };
