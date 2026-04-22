"use strict";
a.d(t, { Z: () => o });
var r = a(627968);
a(64700);
var l = a(359778),
    n = a(834730),
    i = a(264302);
let s = (e) => {
        let { color: t, children: a } = e;
        return (0, r.jsx)(l.Z, {
            style: { backgroundColor: t, padding: "16px", minWidth: "100px", minHeight: "100px" },
            children: (0, r.jsx)(n.E, { variant: "text-md/semibold", children: a }),
        });
    },
    o = {
        name: "Stack",
        id: "cms-stack",
        component: (e) =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(n.E, { variant: "text-lg/semibold", children: "Stack component for CMS layouts." }),
                    (0, r.jsx)("div", {
                        style: { border: "1px dashed #ccc", padding: "16px" },
                        children: (0, r.jsxs)(i.A, {
                            ...e,
                            children: [
                                (0, r.jsx)(s, { color: "#5865F2", children: "Item 1" }),
                                (0, r.jsx)(s, { color: "#57F287", children: "Item 2" }),
                                (0, r.jsx)(s, { color: "#FEE75C", children: "Item 3" }),
                            ],
                        }),
                    }),
                    (0, r.jsx)("hr", {}),
                    (0, r.jsx)(n.E, { variant: "text-md/semibold", children: "Horizontal Stack" }),
                    (0, r.jsx)("div", {
                        style: { border: "1px dashed #ccc", padding: "16px" },
                        children: (0, r.jsxs)(i.A, {
                            ...e,
                            direction: "horizontal",
                            children: [
                                (0, r.jsx)(s, { color: "#5865F2", children: "Item 1" }),
                                (0, r.jsx)(s, { color: "#57F287", children: "Item 2" }),
                                (0, r.jsx)(s, { color: "#FEE75C", children: "Item 3" }),
                            ],
                        }),
                    }),
                    (0, r.jsx)(n.E, { variant: "text-md/semibold", children: "Vertical Stack" }),
                    (0, r.jsx)("div", {
                        style: { border: "1px dashed #ccc", padding: "16px" },
                        children: (0, r.jsxs)(i.A, {
                            ...e,
                            direction: "vertical",
                            children: [
                                (0, r.jsx)(s, { color: "#5865F2", children: "Item 1" }),
                                (0, r.jsx)(s, { color: "#57F287", children: "Item 2" }),
                                (0, r.jsx)(s, { color: "#FEE75C", children: "Item 3" }),
                            ],
                        }),
                    }),
                ],
            }),
        controls: {
            direction: {
                type: "select",
                label: "Direction",
                defaultValue: "vertical",
                options: [
                    { label: "Horizontal", value: "horizontal" },
                    { label: "Vertical", value: "vertical" },
                ],
            },
            align: {
                type: "select",
                label: "Align",
                defaultValue: "start",
                options: [
                    { label: "Start", value: "start" },
                    { label: "Center", value: "center" },
                    { label: "End", value: "end" },
                    { label: "Stretch", value: "stretch" },
                ],
            },
            justify: {
                type: "select",
                label: "Justify",
                defaultValue: "start",
                options: [
                    { label: "Start", value: "start" },
                    { label: "Center", value: "center" },
                    { label: "End", value: "end" },
                    { label: "Space Between", value: "space-between" },
                    { label: "Space Around", value: "space-around" },
                ],
            },
        },
    };
