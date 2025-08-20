n.d(t, { Z: () => s });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(99690),
    a = n(388032),
    o = n(430147);
let s = (e) => {
    let { user: t } = e;
    return (0, r.jsxs)("div", {
        className: o.container,
        children: [
            (0, r.jsx)(i.X6q, {
                className: o.header,
                variant: "heading-sm/semibold",
                children: a.intl.string(a.t["Rsth7+"]),
            }),
            (0, r.jsx)("div", {
                className: o.userContainer,
                children: (0, r.jsxs)("div", {
                    className: o.userInfo,
                    children: [
                        (0, r.jsx)(l.Z, {
                            className: o.userIcon,
                            user: t,
                            size: i.EFr.SIZE_40,
                        }),
                        (0, r.jsxs)("div", {
                            children: [
                                null != t.globalName &&
                                    (0, r.jsx)(i.Text, {
                                        variant: "text-md/semibold",
                                        color: "header-primary",
                                        children: t.globalName,
                                    }),
                                (0, r.jsx)(i.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: t.username,
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        ],
    });
};
