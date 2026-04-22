"use strict";
a.d(t, { O: () => i });
var r = a(627968);
a(64700);
var l = a(834730),
    n = a(605248);
let i = {
    name: "Text",
    id: "cms-text",
    component: (e) =>
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.E, { variant: "text-lg/semibold", children: "Text component for CMS content." }),
                (0, r.jsx)(n.A, { ...e }),
                (0, r.jsx)("hr", {}),
                (0, r.jsx)(n.A, { content: "Variant = text-xs/normal", variant: "text-xs/normal" }),
                (0, r.jsx)(n.A, { content: "Variant = text-sm/normal", variant: "text-sm/normal" }),
                (0, r.jsx)(n.A, { content: "Variant = text-sm/medium", variant: "text-sm/medium" }),
                (0, r.jsx)(n.A, { content: "Variant = text-sm/semibold", variant: "text-sm/semibold" }),
                (0, r.jsx)(n.A, { content: "Variant = text-md/normal", variant: "text-md/normal" }),
                (0, r.jsx)(n.A, { content: "Variant = text-md/medium", variant: "text-md/medium" }),
                (0, r.jsx)(n.A, { content: "Variant = text-md/semibold", variant: "text-md/semibold" }),
                (0, r.jsx)(n.A, { content: "Variant = text-lg/normal", variant: "text-lg/normal" }),
                (0, r.jsx)(n.A, { content: "Variant = text-lg/medium", variant: "text-lg/medium" }),
                (0, r.jsx)(n.A, { content: "Variant = text-lg/semibold", variant: "text-lg/semibold" }),
            ],
        }),
    controls: {
        content: { type: "text", label: "Content", defaultValue: "Hello, world!" },
        variant: {
            type: "select",
            label: "Variant",
            defaultValue: "text-md/normal",
            options: [
                { label: "text-xs/normal", value: "text-xs/normal" },
                { label: "text-sm/normal", value: "text-sm/normal" },
                { label: "text-sm/medium", value: "text-sm/medium" },
                { label: "text-sm/semibold", value: "text-sm/semibold" },
                { label: "text-md/normal", value: "text-md/normal" },
                { label: "text-md/medium", value: "text-md/medium" },
                { label: "text-md/semibold", value: "text-md/semibold" },
                { label: "text-lg/normal", value: "text-lg/normal" },
                { label: "text-lg/medium", value: "text-lg/medium" },
                { label: "text-lg/semibold", value: "text-lg/semibold" },
            ],
        },
    },
};
