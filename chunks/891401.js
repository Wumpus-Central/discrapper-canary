n.d(t, { Z: () => u });
var a = n(54381),
    l = n(473749),
    r = n(793030),
    i = n(704215),
    s = n(481060),
    o = n(605236),
    c = n(675478),
    d = n(715639);
function u() {
    return (0, a.jsx)(s.Ttm, {
        className: d.container,
        children: (0, a.jsx)(m, {}),
    });
}
function m() {
    let e = l.useCallback(() => {
            (0, c.Z1)(i.z.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, o.Fo)(i.z.NITRO_TENURE_BADGE_LEVEL_UP),
        n = null != t ? new Date(t) : null;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(r.X6q, {
                className: d.header,
                variant: "heading-lg/semibold",
                children: "Tenure Badges",
            }),
            (0, a.jsxs)("p", {
                children: [
                    "Level Up DC:\xA0",
                    null != n &&
                        (0, a.jsxs)("b", {
                            children: ["Dismissed (", n.toLocaleDateString(), ")"],
                        }),
                    null == n && (0, a.jsx)("b", { children: "Not Dismissed" }),
                ],
            }),
            (0, a.jsx)("div", {
                className: d.tenureBadgeControls,
                children: (0, a.jsx)(s.Button, {
                    variant: "primary",
                    text: "Reset Level Up DC",
                    onClick: e,
                }),
            }),
        ],
    });
}
