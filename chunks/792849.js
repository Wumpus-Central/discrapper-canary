a.d(t, { g: () => d });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(261225),
    o = a(970488);
let s = (e) => {
        let { color: t, children: a } = e;
        return (0, l.jsx)("div", {
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
            children: a,
        });
    },
    d = {
        name: "Grid",
        id: "grid",
        component: (e) => {
            let { columns: t, perPage: a, paginationPosition: d, gridItemColumns: i, gridItemRows: c } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.Text, {
                        variant: "text-lg/semibold",
                        children:
                            "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens.",
                    }),
                    (0, l.jsx)("br", {}),
                    (0, l.jsx)(r.Text, {
                        variant: "text-lg/semibold",
                        children: "GridItem is (optionally) used to set the size of a grid itme in the grid.",
                    }),
                    (0, l.jsx)("div", {
                        style: { marginTop: 24 },
                        children: (0, l.jsxs)(n.A, {
                            perPage: a,
                            columns: t,
                            paginationPosition: d,
                            children: [
                                (0, l.jsx)(s, { color: "red" }),
                                (0, l.jsx)(o.A, {
                                    columns: i,
                                    rows: c,
                                    children: (0, l.jsx)(s, {
                                        color: "orange",
                                        children: (0, l.jsx)(r.Text, {
                                            variant: "text-lg/semibold",
                                            children: "GridItem",
                                        }),
                                    }),
                                }),
                                (0, l.jsx)(s, { color: "yellow" }),
                                (0, l.jsx)(s, { color: "green" }),
                                (0, l.jsx)(s, { color: "blue" }),
                                (0, l.jsx)(s, { color: "violet" }),
                                (0, l.jsx)(s, { color: "red" }),
                                (0, l.jsx)(s, { color: "orange" }),
                                (0, l.jsx)(s, { color: "yellow" }),
                                (0, l.jsx)(s, { color: "green" }),
                                (0, l.jsx)(s, { color: "blue" }),
                                (0, l.jsx)(s, { color: "violet" }),
                                (0, l.jsx)(s, { color: "red" }),
                                (0, l.jsx)(s, { color: "orange" }),
                                (0, l.jsx)(s, { color: "yellow" }),
                                (0, l.jsx)(s, { color: "green" }),
                                (0, l.jsx)(s, { color: "blue" }),
                                (0, l.jsx)(s, { color: "violet" }),
                                (0, l.jsx)(s, { color: "red" }),
                                (0, l.jsx)(s, { color: "orange" }),
                                (0, l.jsx)(s, { color: "yellow" }),
                                (0, l.jsx)(s, { color: "green" }),
                                (0, l.jsx)(s, { color: "blue" }),
                                (0, l.jsx)(s, {
                                    color: "violet",
                                    children: (0, l.jsx)(r.Text, {
                                        variant: "text-lg/semibold",
                                        children: "Last Child",
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            });
        },
        controls: {
            columns: { label: "Columns", type: "number", defaultValue: 3 },
            perPage: { label: "Grid Items per Page (default, all)", type: "number", defaultValue: 3 },
            paginationPosition: {
                label: "Pagination Position",
                type: "select",
                defaultValue: "bottom",
                options: [
                    { label: "Top", value: "top" },
                    { label: "Bottom", value: "bottom" },
                ],
            },
            gridItemColumns: { label: "Grid Item Columns", type: "number", defaultValue: 1 },
            gridItemRows: { label: "Grid Item Rows", type: "number", defaultValue: 1 },
        },
    };
