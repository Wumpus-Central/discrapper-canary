n.d(t, { A: () => s });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(985018),
    a = n(135716);
function s(e) {
    let { onClose: t, guildName: n } = e;
    return (0, r.jsxs)("div", {
        className: a.kL,
        children: [
            (0, r.jsx)("div", {
                className: a.zc,
                children: (0, r.jsx)(l.gQi, {
                    size: "custom",
                    color: "currentColor",
                    className: a.Kk,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, r.jsxs)("div", {
                className: a.wx,
                children: [
                    (0, r.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        className: a.TK,
                        children: i.intl.string(i.t.LIIyeE),
                    }),
                    (0, r.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: i.intl.format(i.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, r.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: a.x6,
                        children: (0, r.jsx)(l.Button, {
                            variant: "primary",
                            text: i.intl.string(i.t.BddRzS),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
