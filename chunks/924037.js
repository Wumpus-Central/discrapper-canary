i.d(e, { default: () => a });
var n = i(627968);
i(64700);
var r = i(158954),
    s = i(397927);
let a = (t) => {
    let { entry: e, transitionState: i, requestId: a, onClose: d } = t;
    return (0, n.jsx)(r.Modal, {
        title: `Debugging entry: ${e.id}`,
        transitionState: i,
        actions: [],
        onClose: d,
        children: (0, n.jsx)("div", {
            style: { userSelect: "text", padding: "16px" },
            children: (0, n.jsx)(s.Text, {
                variant: "text-sm/normal",
                children: (0, n.jsx)("pre", { children: JSON.stringify({ entry: e, requestId: a }, null, 2) }),
            }),
        }),
    });
};
