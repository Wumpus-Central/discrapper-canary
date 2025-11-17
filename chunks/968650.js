i.d(e, { default: () => a }), i(49124);
var n = i(54381);
i(473749);
var r = i(793030),
    s = i(481060);
let a = (t) => {
    let { entry: e, transitionState: i, requestId: a, onClose: d } = t;
    return (0, n.jsx)(r.Modal, {
        title: "Debugging entry: ".concat(e.id),
        transitionState: i,
        actions: [],
        onClose: d,
        children: (0, n.jsx)("div", {
            style: {
                userSelect: "text",
                padding: "16px",
            },
            children: (0, n.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: (0, n.jsx)("pre", {
                    children: JSON.stringify(
                        {
                            entry: e,
                            requestId: a,
                        },
                        null,
                        2,
                    ),
                }),
            }),
        }),
    });
};
