n.d(t, { Z: () => s }), n(953529);
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(921801),
    o = n(861380);
function s(e) {
    let { children: t, title: n, description: s, webSetting: l } = e;
    return (0, r.jsx)(a.F, {
        setting: l,
        children: (0, r.jsxs)("div", {
            className: o.category,
            children: [
                (0, r.jsxs)("div", {
                    className: o.categoryHeader,
                    children: [
                        (0, r.jsx)(i.X6q, {
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            children: n,
                        }),
                        null != s
                            ? (0, r.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  color: "header-secondary",
                                  children: s,
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)("div", {
                    className: o.categoryContent,
                    children: t,
                }),
                (0, r.jsx)(i.$i$, { className: o.categoryDivider }),
            ],
        }),
    });
}
