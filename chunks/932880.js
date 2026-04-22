a.d(l, { d: () => d });
var t = a(627968),
    n = a(206471),
    o = a(573613),
    i = a(359778),
    r = a(834730),
    s = a(653197);
let d = {
    title: "Text",
    stories: [
        {
            name: "Text",
            id: "text",
            component: r.E,
            controls: {
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "text-sm/normal",
                    options: Object.values(n.O).map((e) => ({ label: e, value: e })),
                },
                color: {
                    label: "Color",
                    type: "select",
                    defaultValue: "text-strong",
                    options: [
                        { label: "Text Primary", value: "text-strong" },
                        { label: "Text Secondary", value: "text-subtle" },
                        { label: "Text Tertiary", value: "text-muted" },
                        { label: "Text Muted", value: "text-muted" },
                        { label: "Header Primary", value: "text-strong" },
                        { label: "Header Secondary", value: "text-default" },
                        { label: "Header Muted", value: "text-muted" },
                        { label: "Feedback Positive", value: "text-feedback-positive" },
                        { label: "Feedback Critical", value: "text-feedback-critical" },
                        { label: "Feedback Warning", value: "text-feedback-warning" },
                        { label: "Feedback Info", value: "text-feedback-info" },
                    ],
                },
                children: { label: "Text", type: "text", defaultValue: "Hello, world!" },
            },
        },
        {
            name: "Typography Scales",
            id: "text-scales",
            component: function (e) {
                return (0, t.jsx)(o.Ar, {
                    className: s.H,
                    children: Object.values(n.O).map((l) =>
                        (0, t.jsxs)(
                            i.Z,
                            {
                                className: s.N,
                                children: [
                                    (0, t.jsx)(r.E, { ...e, variant: l, children: e.children }),
                                    (0, t.jsx)(r.E, { variant: "text-xs/normal", color: "text-subtle", children: l }),
                                ],
                            },
                            l,
                        ),
                    ),
                });
            },
            controls: { children: { label: "Text", type: "text", defaultValue: "Hello, world!" } },
        },
    ],
};
