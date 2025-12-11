n.d(t, { Z: () => s });
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(388032),
    o = n(158859);
function s(e) {
    let { name: t, onRetry: n } = e,
        s = null != t ? t : a.intl.string(a.t["11pdXZ"]);
    return (0, r.jsx)("div", {
        className: o.container,
        children: (0, r.jsxs)("div", {
            className: o.headingContainer,
            children: [
                (0, r.jsx)(i.Heading, {
                    variant: "heading-lg/medium",
                    color: "text-strong",
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
                            children: a.intl.string(a.t.tmGHjc),
                        }),
                    ],
                }),
            ],
        }),
    });
}
