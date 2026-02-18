a.d(l, { d: () => s });
var t = a(627968),
    o = a(206471),
    n = a(397927),
    i = a(860606);
let s = {
    title: "Text",
    stories: [
        {
            name: "Text",
            id: "text",
            component: n.Text,
            controls: {
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "text-sm/normal",
                    options: Object.values(o.O).map((e) => ({ label: e, value: e })),
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
                return (0, t.jsx)(n.ArX, {
                    className: i.H,
                    children: Object.values(o.O).map((l) =>
                        (0, t.jsxs)(
                            n.ZpM,
                            {
                                className: i.N,
                                children: [
                                    (0, t.jsx)(n.Text, { ...e, variant: l, children: e.children }),
                                    (0, t.jsx)(n.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-subtle",
                                        children: l,
                                    }),
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
