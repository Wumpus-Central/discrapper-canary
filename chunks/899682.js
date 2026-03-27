"use strict";
n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(880013),
    s = n(311907),
    a = n(397927),
    o = n(775602),
    l = n(985018),
    u = n(605850),
    c = n(549290);
let d = () =>
        (0, r.jsxs)("div", {
            className: c.oR,
            children: [
                (0, r.jsx)(a.y$y, { type: a.tVU.SPINNING_CIRCLE_SIMPLE, className: u.S }),
                (0, r.jsx)(a.Text, {
                    color: "text-strong",
                    variant: "text-md/normal",
                    children: l.intl.string(l.t["5z/hlE"]),
                }),
            ],
        }),
    _ = (e) => {
        let { shown: t, sent: n, className: u } = e,
            c = (0, s.bG)([o.A], () => o.A.useReducedMotion),
            _ = (0, a.pnh)(
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
            children: _(
                (e, t) =>
                    t &&
                    (0, r.jsx)(i.animated.div, {
                        className: u,
                        style: e,
                        children: n
                            ? (0, r.jsx)(a.y8, {
                                  message: l.intl.string(l.t.fjcCk5),
                                  type: a.ToastType.SUCCESS,
                                  id: "success_message_toast",
                              })
                            : (0, r.jsx)(a.y8, {
                                  message: "",
                                  type: a.ToastType.CUSTOM,
                                  id: "custom_loading_message_toast",
                                  options: { component: (0, r.jsx)(d, {}) },
                              }),
                    }),
            ),
        });
    };
