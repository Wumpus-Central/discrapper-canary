n.d(t, {
    g: () => s,
});
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(245595);
let o = (e) => {
        let { color: t } = e;
        return (0, r.jsx)("div", {
            style: {
                background: t,
                height: 120,
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
            },
        });
    },
    s = {
        name: "Grid",
        id: "grid",
        component: (e) => {
            let { columns: t } = e;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(i.Text, {
                        variant: "text-lg/semibold",
                        children:
                            "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens.",
                    }),
                    (0, r.jsx)("div", {
                        style: {
                            marginTop: 24,
                        },
                        children: (0, r.jsxs)(a.A, {
                            columns: t,
                            children: [
                                (0, r.jsx)(o, {
                                    color: "red",
                                }),
                                (0, r.jsx)(o, {
                                    color: "orange",
                                }),
                                (0, r.jsx)(o, {
                                    color: "yellow",
                                }),
                                (0, r.jsx)(o, {
                                    color: "green",
                                }),
                                (0, r.jsx)(o, {
                                    color: "blue",
                                }),
                                (0, r.jsx)(o, {
                                    color: "violet",
                                }),
                                (0, r.jsx)(o, {
                                    color: "red",
                                }),
                                (0, r.jsx)(o, {
                                    color: "orange",
                                }),
                                (0, r.jsx)(o, {
                                    color: "yellow",
                                }),
                                (0, r.jsx)(o, {
                                    color: "green",
                                }),
                                (0, r.jsx)(o, {
                                    color: "blue",
                                }),
                                (0, r.jsx)(o, {
                                    color: "violet",
                                }),
                                (0, r.jsx)(o, {
                                    color: "red",
                                }),
                                (0, r.jsx)(o, {
                                    color: "orange",
                                }),
                                (0, r.jsx)(o, {
                                    color: "yellow",
                                }),
                                (0, r.jsx)(o, {
                                    color: "green",
                                }),
                                (0, r.jsx)(o, {
                                    color: "blue",
                                }),
                                (0, r.jsx)(o, {
                                    color: "violet",
                                }),
                                (0, r.jsx)(o, {
                                    color: "red",
                                }),
                                (0, r.jsx)(o, {
                                    color: "orange",
                                }),
                                (0, r.jsx)(o, {
                                    color: "yellow",
                                }),
                                (0, r.jsx)(o, {
                                    color: "green",
                                }),
                                (0, r.jsx)(o, {
                                    color: "blue",
                                }),
                                (0, r.jsx)(o, {
                                    color: "violet",
                                }),
                            ],
                        }),
                    }),
                ],
            });
        },
        controls: {
            columns: {
                label: "Columns",
                type: "number",
                defaultValue: 3,
            },
        },
    };
