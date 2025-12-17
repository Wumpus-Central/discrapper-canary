n.d(t, { Z: () => a }), n(953529);
var l = n(54381);
n(473749);
var i = n(481060),
    r = n(388032),
    o = n(385250);
function a(e) {
    let { displayName: t, description: n, icon: a, isLoading: c, isConnected: s, canConnect: u, onConnect: d } = e;
    return (0, l.jsxs)("div", {
        className: o.card,
        children: [
            (0, l.jsxs)("div", {
                className: o.leftContent,
                children: [
                    (0, l.jsx)("div", {
                        className: o.icon,
                        children: a,
                    }),
                    (0, l.jsxs)("div", {
                        className: o.textContent,
                        children: [
                            (0, l.jsx)(i.Text, {
                                variant: "text-md/medium",
                                color: "text-strong",
                                children: t,
                            }),
                            null != n &&
                                n.length > 0 &&
                                (0, l.jsx)(i.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-muted",
                                    children: n,
                                }),
                        ],
                    }),
                ],
            }),
            c
                ? (0, l.jsx)(i.$jN, {})
                : s
                  ? (0, l.jsxs)("div", {
                        className: o.connectedStatus,
                        children: [
                            (0, l.jsx)(i.Text, {
                                variant: "text-md/medium",
                                color: "text-feedback-positive",
                                children: r.intl.string(r.t["LV+CXH"]),
                            }),
                            (0, l.jsx)(i.owK, {
                                size: "custom",
                                width: 20,
                                height: 20,
                                color: "var(--status-positive)",
                            }),
                        ],
                    })
                  : (0, l.jsx)(i.Button, {
                        variant: "primary",
                        size: "sm",
                        onClick: d,
                        text: r.intl.string(r.t.S0W8Z5),
                        disabled: !u,
                    }),
        ],
    });
}
