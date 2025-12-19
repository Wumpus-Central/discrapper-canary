n.d(t, { Z: () => u });
var a = n(54381),
    r = n(473749),
    i = n(793030),
    l = n(704215),
    s = n(481060),
    o = n(605236),
    c = n(675478),
    d = n(963182);
function u() {
    return (0, a.jsx)(s.Ttm, {
        className: d.container,
        children: (0, a.jsx)(m, {}),
    });
}
function m() {
    let e = r.useCallback(() => {
            (0, c.Z1)(l.z.NITRO_TENURE_BADGE_LEVEL_UP);
        }, []),
        { lastDismissedAtMs: t } = (0, o.Fo)(l.z.NITRO_TENURE_BADGE_LEVEL_UP),
        n = null != t ? new Date(t) : null;
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(i.X6q, {
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
