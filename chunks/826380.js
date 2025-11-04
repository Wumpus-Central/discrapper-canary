t.d(n, { Z: () => r }), t(953529);
var l = t(951288);
t(647438);
var i = t(481060),
    a = t(388032),
    o = t(462097);
function r(e) {
    let { displayName: n, description: t, icon: r, isLoading: s, isConnected: u, canConnect: c, onConnect: d } = e;
    return (0, l.jsxs)("div", {
        className: o.card,
        children: [
            (0, l.jsxs)("div", {
                className: o.leftContent,
                children: [
                    (0, l.jsx)("div", {
                        className: o.icon,
                        children: r,
                    }),
                    (0, l.jsxs)("div", {
                        className: o.textContent,
                        children: [
                            (0, l.jsx)(i.Text, {
                                variant: "text-md/medium",
                                color: "text-primary",
                                children: n,
                            }),
                            null != t &&
                                t.length > 0 &&
                                (0, l.jsx)(i.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-tertiary",
                                    children: t,
                                }),
                        ],
                    }),
                ],
            }),
            s
                ? (0, l.jsx)(i.$jN, {})
                : u
                  ? (0, l.jsxs)("div", {
                        className: o.connectedStatus,
                        children: [
                            (0, l.jsx)(i.Text, {
                                variant: "text-md/medium",
                                color: "text-feedback-positive",
                                children: a.intl.string(a.t["LV+CXH"]),
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
                        text: a.intl.string(a.t.S0W8Z5),
                        disabled: !c,
                    }),
        ],
    });
}
