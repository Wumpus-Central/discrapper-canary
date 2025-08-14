n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(481060),
    o = n(388032),
    a = n(771371);
function s(e) {
    let { onClose: t, guildName: n } = e;
    return (0, r.jsxs)("div", {
        className: a.container,
        children: [
            (0, r.jsx)("div", {
                className: a.iconContainer,
                children: (0, r.jsx)(i.YlB, {
                    size: "custom",
                    color: "currentColor",
                    className: a.icon,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, r.jsxs)("div", {
                className: a.header,
                children: [
                    (0, r.jsx)(i.X6q, {
                        variant: "heading-md/semibold",
                        className: a.headerText,
                        children: o.intl.string(o.t.LIIyeH),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: o.intl.format(o.t["4/6vQk"], { guildName: n }),
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: a.button,
                        children: (0, r.jsx)(i.zxk, {
                            variant: "primary",
                            text: o.intl.string(o.t.BddRzc),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
