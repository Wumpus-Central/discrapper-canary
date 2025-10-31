n.d(t, { Z: () => o });
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(388032),
    a = n(771371);
function o(e) {
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
                    (0, r.jsx)(i.Heading, {
                        variant: "heading-md/semibold",
                        className: a.headerText,
                        children: l.intl.string(l.t.LIIyeE),
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: "text-sm/normal",
                        children: l.intl.format(l.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: a.button,
                        children: (0, r.jsx)(i.Button, {
                            variant: "primary",
                            text: l.intl.string(l.t.BddRzS),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
