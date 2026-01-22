n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(432022),
    a = n(311907),
    s = n(397927),
    o = n(775602),
    l = n(985018),
    c = n(798516),
    u = n(910200);
let d = () =>
        (0, r.jsxs)("div", {
            className: u.oR,
            children: [
                (0, r.jsx)(s.y$y, {
                    type: s.tVU.SPINNING_CIRCLE_SIMPLE,
                    className: c.S,
                }),
                (0, r.jsx)(s.Text, {
                    color: "text-strong",
                    variant: "text-md/normal",
                    children: l.intl.string(l.t["5z/hlE"]),
                }),
            ],
        }),
    f = (e) => {
        let { shown: t, sent: n, className: c } = e,
            u = (0, a.bG)([o.A], () => o.A.useReducedMotion),
            f = (0, s.pnh)(
                t,
                {
                    from: {
                        transform: u ? "translateY(0)" : "translateY(16px)",
                        opacity: 0,
                    },
                    enter: {
                        transform: "translateY(0)",
                        opacity: 1,
                    },
                    leave: {
                        transform: u ? "translateY(0)" : "translateY(16px)",
                        opacity: 0,
                    },
                    config: {
                        mass: 1,
                        tension: 500,
                        friction: 18,
                        clamp: !0,
                    },
                    delay: 200,
                },
                "animate-always",
            );
        return (0, r.jsx)(r.Fragment, {
            children: f(
                (e, t) =>
                    t &&
                    (0, r.jsx)(i.animated.div, {
                        className: c,
                        style: e,
                        children: n
                            ? (0, r.jsx)(s.y8, {
                                  message: l.intl.string(l.t.fjcCk5),
                                  type: s.ToastType.SUCCESS,
                                  id: "success_message_toast",
                              })
                            : (0, r.jsx)(s.y8, {
                                  message: "",
                                  type: s.ToastType.CUSTOM,
                                  id: "custom_loading_message_toast",
                                  options: { component: (0, r.jsx)(d, {}) },
                              }),
                    }),
            ),
        });
    };
