n.d(t, { Z: () => u }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(481060),
    s = n(624968),
    l = n(29594),
    c = n(330569);
let u = () => {
    let [e, t] = i.useState(15),
        [n, u] = i.useState(12),
        d = i.useMemo(
            () =>
                [...Array(e)].map((e, t) =>
                    (0, r.jsx)(
                        o.P3F,
                        {
                            className: c.child,
                            onClick: () => console.log(t),
                            children: t,
                        },
                        t,
                    ),
                ),
            [e],
        );
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(s.Z, {
                gap: n,
                children: d,
            }),
            (0, r.jsx)(l.dv, {}),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.oil, {
                    type: "number",
                    min: 0,
                    value: e.toString(),
                    onChange: (e) => {
                        t((0, a.clamp)(+e, 0, 100));
                    },
                    label: "Children Count",
                }),
            }),
            (0, r.jsx)(l.BZ, {
                children: (0, r.jsx)(o.oil, {
                    type: "number",
                    min: 0,
                    value: n.toString(),
                    onChange: (e) => {
                        u(+e);
                    },
                    label: "Children Gap",
                }),
            }),
        ],
    });
};
