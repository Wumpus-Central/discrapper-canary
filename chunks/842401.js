n.d(t, { Z: () => o });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(99690),
    a = n(388032),
    s = n(430147);
let o = (e) => {
    let { user: t } = e;
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsx)(i.Heading, {
                className: s.header,
                variant: "heading-sm/semibold",
                children: a.intl.string(a.t.Rsth7z),
            }),
            (0, r.jsx)("div", {
                className: s.userContainer,
                children: (0, r.jsxs)("div", {
                    className: s.userInfo,
                    children: [
                        (0, r.jsx)(l.Z, {
                            className: s.userIcon,
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
