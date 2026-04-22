"use strict";
a.d(t, { g: () => d });
var r = a(627968);
a(64700);
var l = a(834730),
    n = a(204990),
    i = a(261225),
    s = a(970488);
let o = (e) => {
        let { color: t, children: a } = e;
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
            children: a,
        });
    },
    d = {
        name: "Grid",
        id: "grid",
        component: (e) => {
            let {
                columns: t,
                paginationStrategy: a,
                perPage: n,
                paginationPosition: d,
                gridItemColumns: c,
                gridItemRows: u,
            } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(l.E, {
                        variant: "text-lg/semibold",
                        children:
                            "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens.",
                    }),
                    (0, r.jsx)("br", {}),
                    (0, r.jsx)(l.E, {
                        variant: "text-lg/semibold",
                        children: "GridItem is (optionally) used to set the size of a grid itme in the grid.",
                    }),
                    (0, r.jsx)("div", {
                        style: { marginTop: 24 },
                        children: (0, r.jsxs)(i.A, {
                            columns: t,
                            paginationOptions: { paginationStrategy: a, perPage: n, paginationPosition: d },
                            children: [
                                (0, r.jsx)(o, { color: "red" }),
                                (0, r.jsx)(s.A, {
                                    columns: c,
                                    rows: u,
                                    children: (0, r.jsx)(o, {
                                        color: "orange",
                                        children: (0, r.jsx)(l.E, {
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
                                (0, r.jsx)(o, {
                                    color: "violet",
                                    children: (0, r.jsx)(l.E, { variant: "text-lg/semibold", children: "Last Child" }),
                                }),
                            ],
                        }),
                    }),
                ],
            });
        },
        controls: {
            columns: { label: "Columns", type: "number", defaultValue: 3 },
            paginationStrategy: {
                label: "Pagination Strategy",
                type: "select",
                defaultValue: n.o.PAGINATE,
                options: [
                    { label: "Paginate", value: n.o.PAGINATE },
                    { label: "Truncate", value: n.o.TRUNCATE },
                ],
            },
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
