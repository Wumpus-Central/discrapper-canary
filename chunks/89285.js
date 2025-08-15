n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(388032),
    o = n(488463);
function s(e) {
    let { name: t, onRetry: n } = e,
        s = null != t ? t : a.intl.string(a.t["11pdXV"]);
    return (0, r.jsx)("div", {
        className: o.container,
        children: (0, r.jsxs)("div", {
            className: o.headingContainer,
            children: [
                (0, r.jsx)(i.X6q, {
                    variant: "heading-lg/medium",
                    color: "header-primary",
                    children: s,
                }),
                (0, r.jsxs)(i.P3F, {
                    className: o.error,
                    onClick: n,
                    children: [
                        (0, r.jsx)(i.Mgn, {
                            size: "sm",
                            color: "currentColor",
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-feedback-warning",
                            children: a.intl.string(a.t.tmGHjY),
                        }),
                    ],
                }),
            ],
        }),
    });
}
