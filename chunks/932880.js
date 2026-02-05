"use strict";
n.d(t, { d: () => l });
var r = n(627968),
    i = n(206471),
    a = n(397927),
    s = n(860606);
function o(e) {
    return (0, r.jsx)(a.ArX, {
        className: s.H,
        children: Object.values(i.O).map((t) =>
            (0, r.jsxs)(
                a.ZpM,
                {
                    className: s.N,
                    children: [
                        (0, r.jsx)(a.Text, { ...e, variant: t, children: e.children }),
                        (0, r.jsx)(a.Text, { variant: "text-xs/normal", color: "text-subtle", children: t }),
                    ],
                },
                t,
            ),
        ),
    });
}
let l = {
    title: "Text",
    stories: [
        {
            name: "Text",
            id: "text",
            component: a.Text,
            controls: {
                variant: {
                    label: "Variant",
                    type: "select",
                    defaultValue: "text-sm/normal",
                    options: Object.values(i.O).map((e) => ({ label: e, value: e })),
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
            component: o,
            controls: { children: { label: "Text", type: "text", defaultValue: "Hello, world!" } },
        },
    ],
};
