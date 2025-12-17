n.d(t, { Z: () => f }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(199849),
    s = n(481060),
    l = n(624968),
    c = n(261538),
    u = n(222065);
let d = [
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
    f = () => {
        let [e, t] = i.useState(15),
            [n, f] = i.useState(8),
            [p, _] = i.useState("xl"),
            [m, h] = i.useState(!0),
            g = i.useMemo(
                () =>
                    [...Array(e)].map((e, t) =>
                        (0, r.jsx)(
                            s.P3F,
                            {
                                className: u.child,
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
                (0, r.jsx)(l.Z, {
                    gap: n,
                    edgeFade: p,
                    hideActionsWhenDisabled: m,
                    children: g,
                }),
                (0, r.jsx)(c.dv, {}),
                (0, r.jsxs)(c.BZ, {
                    children: [
                        (0, r.jsx)(s.Checkbox, {
                            checked: m,
                            onChange: () => h(!m),
                            label: "Hide Actions When Disabled",
                        }),
                        (0, r.jsx)(s.oil, {
                            type: "number",
                            min: 0,
                            value: e.toString(),
                            onChange: (e) => {
                                t((0, a.clamp)(+e, 0, 100));
                            },
                            label: "Children Count",
                        }),
                    ],
                }),
                (0, r.jsx)(c.BZ, {
                    children: (0, r.jsx)(o.y6, {
                        value: n,
                        options: d,
                        onChange: (e) => f(e),
                        label: "Children Gap",
                    }),
                }),
                (0, r.jsx)(c.BZ, {
                    children: (0, r.jsx)(o.y6, {
                        value: p,
                        options: d,
                        onChange: (e) => _(e),
                        label: "Edge Fade Space",
                    }),
                }),
            ],
        });
    };
