a.d(t, { Z: () => d });
var l = a(627968);
a(64700);
var r = a(359778),
    n = a(834730),
    s = a(264302);
let i = (e) => {
        let { color: t, children: a } = e;
        return (0, l.jsx)(r.Z, {
            style: { backgroundColor: t, padding: "16px", minWidth: "100px", minHeight: "100px" },
            children: (0, l.jsx)(n.E, { variant: "text-md/semibold", children: a }),
        });
    },
    d = {
        name: "Stack",
        id: "cms-stack",
        component: (e) =>
            (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(n.E, { variant: "text-lg/semibold", children: "Stack component for CMS layouts." }),
                    (0, l.jsx)("div", {
                        style: { border: "1px dashed #ccc", padding: "16px" },
                        children: (0, l.jsxs)(s.A, {
                            ...e,
                            children: [
                                (0, l.jsx)(i, { color: "#5865F2", children: "Item 1" }),
                                (0, l.jsx)(i, { color: "#57F287", children: "Item 2" }),
                                (0, l.jsx)(i, { color: "#FEE75C", children: "Item 3" }),
                            ],
                        }),
                    }),
                    (0, l.jsx)("hr", {}),
                    (0, l.jsx)(n.E, { variant: "text-md/semibold", children: "Horizontal Stack" }),
                    (0, l.jsx)("div", {
                        style: { border: "1px dashed #ccc", padding: "16px" },
                        children: (0, l.jsxs)(s.A, {
                            ...e,
                            direction: "horizontal",
                            children: [
                                (0, l.jsx)(i, { color: "#5865F2", children: "Item 1" }),
                                (0, l.jsx)(i, { color: "#57F287", children: "Item 2" }),
                                (0, l.jsx)(i, { color: "#FEE75C", children: "Item 3" }),
                            ],
                        }),
                    }),
                    (0, l.jsx)(n.E, { variant: "text-md/semibold", children: "Vertical Stack" }),
                    (0, l.jsx)("div", {
                        style: { border: "1px dashed #ccc", padding: "16px" },
                        children: (0, l.jsxs)(s.A, {
                            ...e,
                            direction: "vertical",
                            children: [
                                (0, l.jsx)(i, { color: "#5865F2", children: "Item 1" }),
                                (0, l.jsx)(i, { color: "#57F287", children: "Item 2" }),
                                (0, l.jsx)(i, { color: "#FEE75C", children: "Item 3" }),
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
