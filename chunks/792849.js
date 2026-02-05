"use strict";
n.d(t, { g: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(261225),
    s = n(970488);
let o = (e) => {
        let { color: t, children: n } = e;
        return (0, r.jsx)("div", {
            style: {
                background: t,
                minHeight: 120,
                height: "100%",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
            },
            children: n,
        });
    },
    l = {
        name: "Grid",
        id: "grid",
        component: (e) => {
            let { columns: t, gridItemColumns: n, gridItemRows: l } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-lg/semibold",
                        children:
                            "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens.",
                    }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(i.Text, {
                        variant: "text-lg/semibold",
                        children: "GridItem is (optionally) used to set the size of a grid itme in the grid.",
                    }),
                    (0, r.jsx)("div", {
                        style: { marginTop: 24 },
                        children: (0, r.jsxs)(a.A, {
                            columns: t,
                            children: [
                                (0, r.jsx)(o, { color: "red" }),
                                (0, r.jsx)(s.A, {
                                    columns: n,
                                    rows: l,
                                    children: (0, r.jsx)(o, {
                                        color: "orange",
                                        children: (0, r.jsx)(i.Text, {
                                            variant: "text-lg/semibold",
                                            children: "GridItem",
                                        }),
                                    }),
                                }),
                                (0, r.jsx)(o, { color: "yellow" }),
                                (0, r.jsx)(o, { color: "green" }),
                                (0, r.jsx)(o, { color: "blue" }),
                                (0, r.jsx)(o, { color: "violet" }),
                                (0, r.jsx)(o, { color: "red" }),
                                (0, r.jsx)(o, { color: "orange" }),
                                (0, r.jsx)(o, { color: "yellow" }),
                                (0, r.jsx)(o, { color: "green" }),
                                (0, r.jsx)(o, { color: "blue" }),
                                (0, r.jsx)(o, { color: "violet" }),
                                (0, r.jsx)(o, { color: "red" }),
                                (0, r.jsx)(o, { color: "orange" }),
                                (0, r.jsx)(o, { color: "yellow" }),
                                (0, r.jsx)(o, { color: "green" }),
                                (0, r.jsx)(o, { color: "blue" }),
                                (0, r.jsx)(o, { color: "violet" }),
                                (0, r.jsx)(o, { color: "red" }),
                                (0, r.jsx)(o, { color: "orange" }),
                                (0, r.jsx)(o, { color: "yellow" }),
                                (0, r.jsx)(o, { color: "green" }),
                                (0, r.jsx)(o, { color: "blue" }),
                                (0, r.jsx)(o, { color: "violet" }),
                            ],
                        }),
                    }),
                ],
            });
        },
        controls: {
            columns: { label: "Columns", type: "number", defaultValue: 3 },
            gridItemColumns: { label: "Grid Item Columns", type: "number", defaultValue: 1 },
            gridItemRows: { label: "Grid Item Rows", type: "number", defaultValue: 1 },
        },
    };
