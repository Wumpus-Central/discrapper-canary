var e = i(477900),
    n = i(582128),
    a = i(189213),
    r = i(534606),
    c = i(792996),
    l = i(945060);
i.d(
    s,
    {},
    {
        default: function (t) {
            let { transitionState: s, errors: i, onClose: o } = t,
                d = n.useMemo(() => [{ variant: "secondary", text: c.intl.string(c.t["NX+WJN"]), onClick: o }], [o]);
            return (0, e.jsx)(a.a, {
                title: c.intl.string(c.t.AUIsQU),
                transitionState: s,
                onClose: o,
                actions: d,
                children: (0, e.jsx)("div", {
                    className: l.s,
                    children: i.map((t) => (0, e.jsx)(r.A, { error: t }, t.filename)),
                }),
            });
        },
    },
);
