n.d(t, { Z: () => C }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    s = n(699758),
    a = n(913338),
    o = n(388032);
function C(e) {
    let { defaultCategory: t, onCategoryChange: n, className: C } = e,
        [d, c] = i.useState(t),
        p = i.useMemo(
            () => [
                {
                    name: o.intl.string(o.t["6Zuiv7"]),
                    value: s.KN.Trick,
                    key: "Trick",
                    icon: (0, r.jsx)(l.yDF, {
                        size: "sm",
                        color: "currentColor",
                    }),
                },
                {
                    name: o.intl.string(o.t["2UeOlZ"]),
                    value: s.KN.Treat,
                    key: "Treat",
                    icon: (0, r.jsx)(l.sq, {
                        size: "sm",
                        color: "currentColor",
                    }),
                },
            ],
            [],
        ),
        u = i.useCallback(
            (e) => {
                c(e.value), n(e.value);
            },
            [n],
        );
    return (0, r.jsx)(a.w, {
        className: C,
        options: p,
        value: d,
        onChange: u,
    });
}
