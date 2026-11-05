var e = t(477900),
    i = t(582128),
    n = t(503698),
    o = t.n(n),
    l = t(628284),
    r = t(624479),
    a = t(939249),
    u = t(866665),
    C = t(646514),
    p = t(957565),
    h = t(792996),
    k = t(596872);
t.d(
    c,
    {},
    {
        c: function (s) {
            let { chunks: c, className: t, onCopy: n, ...E } = s,
                T = i.useMemo(() => c?.join(" "), [c]),
                [d, x] = i.useState(!1),
                A = i.useCallback(() => {
                    (0, p.C)(T, () => {
                        (x(!0), n?.());
                    });
                }, [n, T]),
                I = d ? l.CircleCheckIcon : r.CopyIcon;
            return (0, e.jsx)(a.D, {
                className: o()(k.k, t),
                onClick: A,
                children: (0, e.jsx)(u.m, {
                    text: d ? h.intl.string(h.t.t5VZ88) : h.intl.string(h.t.OpuAlK),
                    children: (0, e.jsx)(I, {
                        ...E,
                        size: "xxs",
                        color: d ? C.A.colors.TEXT_FEEDBACK_POSITIVE : C.A.colors.INTERACTIVE_TEXT_DEFAULT,
                    }),
                }),
            });
        },
    },
);
