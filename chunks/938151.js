n.d(t, { Z: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(481060),
    s = n(624968),
    l = n(29594),
    c = n(152928);
let u = [
        {
            label: "xxs",
            value: "xxs",
        },
        {
            label: "xs",
            value: "xs",
        },
        {
            label: "sm",
            value: "sm",
        },
        {
            label: "md",
            value: "md",
        },
        {
            label: "lg",
            value: "lg",
        },
        {
            label: "xl",
            value: "xl",
        },
        {
            label: "xxl",
            value: "xxl",
        },
        {
            label: "0px",
            value: 0,
        },
        {
            label: "4px",
            value: 4,
        },
        {
            label: "6px",
            value: 6,
        },
        {
            label: "8px",
            value: 8,
        },
        {
            label: "12px",
            value: 12,
        },
        {
            label: "16px",
            value: 16,
        },
        {
            label: "20px",
            value: 20,
        },
        {
            label: "24px",
            value: 24,
        },
        {
            label: "32px",
            value: 32,
        },
        {
            label: "40px",
            value: 40,
        },
    ],
    d = () => {
        let [e, t] = i.useState(15),
            [n, d] = i.useState(12),
            [f, _] = i.useState("xl"),
            p = i.useMemo(
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
                    edgeFade: f,
                    children: p,
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
                            d(+e);
                        },
                        label: "Children Gap",
                    }),
                }),
                (0, r.jsx)(l.BZ, {
                    children: (0, r.jsx)(o.q4e, {
                        value: f,
                        options: u,
                        onChange: (e) => _(e),
                        label: "Edge Fade Space",
                    }),
                }),
            ],
        });
    };
