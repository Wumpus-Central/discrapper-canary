n.d(t, { Z: () => o });
var i = n(54381);
n(473749);
var r = n(481060),
    l = n(388032),
    a = n(797763);
function o(e) {
    let { onClose: t, guildName: n } = e;
    return (0, i.jsxs)("div", {
        className: a.container,
        children: [
            (0, i.jsx)("div", {
                className: a.iconContainer,
                children: (0, i.jsx)(r.YlB, {
                    size: "custom",
                    color: "currentColor",
                    className: a.icon,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, i.jsxs)("div", {
                className: a.header,
                children: [
                    (0, i.jsx)(r.Heading, {
                        variant: "heading-md/semibold",
                        className: a.headerText,
                        children: l.intl.string(l.t.LIIyeE),
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: "text-sm/normal",
                        children: l.intl.format(l.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: a.button,
                        children: (0, i.jsx)(r.Button, {
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
