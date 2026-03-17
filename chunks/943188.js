a.d(t, { d: () => s });
var l = a(627968);
a(64700);
var r = a(397927),
    n = a(673277);
let o = () => (0, l.jsx)("div", { style: { background: "rgba(255, 255, 255, 0.6)", height: 120 } }),
    s = {
        name: "Section",
        id: "section",
        component: (e) => {
            let { verticalMargin: t, padding: a } = e;
            return (0, l.jsxs)(l.Fragment, {
                children: [
                    (0, l.jsx)(r.Text, {
                        variant: "text-lg/semibold",
                        children:
                            "Section is used to space out sections of the page. It takes a vertical margin to apply margin above and below, as well as padding to inset its children.",
                    }),
                    (0, l.jsxs)("div", {
                        children: [
                            (0, l.jsx)("div", {
                                style: { background: "red" },
                                children: (0, l.jsx)(n.A, {
                                    verticalMargin: t,
                                    padding: a,
                                    children: (0, l.jsx)(o, {}),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                style: { background: "orange" },
                                children: (0, l.jsx)(n.A, {
                                    verticalMargin: t,
                                    padding: a,
                                    children: (0, l.jsx)(o, {}),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                style: { background: "yellow" },
                                children: (0, l.jsx)(n.A, {
                                    verticalMargin: t,
                                    padding: a,
                                    children: (0, l.jsx)(o, {}),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                style: { background: "green" },
                                children: (0, l.jsx)(n.A, {
                                    verticalMargin: t,
                                    padding: a,
                                    children: (0, l.jsx)(o, {}),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                style: { background: "blue" },
                                children: (0, l.jsx)(n.A, {
                                    verticalMargin: t,
                                    padding: a,
                                    children: (0, l.jsx)(o, {}),
                                }),
                            }),
                            (0, l.jsx)("div", {
                                style: { background: "violet" },
                                children: (0, l.jsx)(n.A, {
                                    verticalMargin: t,
                                    padding: a,
                                    children: (0, l.jsx)(o, {}),
                                }),
                            }),
                        ],
                    }),
                ],
            });
        },
        controls: {
            verticalMargin: { label: "Vertical Margin", type: "number", defaultValue: 16 },
            padding: { label: "Padding", type: "number", defaultValue: 8 },
        },
    };
