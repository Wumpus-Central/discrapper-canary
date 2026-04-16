n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(985018),
    s = n(30323);
function r(e) {
    let { onClose: t, guildName: n } = e;
    return (0, i.jsxs)("div", {
        className: s.kL,
        children: [
            (0, i.jsx)("div", {
                className: s.zc,
                children: (0, i.jsx)(l.gQi, {
                    size: "custom",
                    color: "currentColor",
                    className: s.Kk,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, i.jsxs)("div", {
                className: s.wx,
                children: [
                    (0, i.jsx)(l.Heading, {
                        variant: "heading-md/semibold",
                        className: s.TK,
                        children: a.intl.string(a.t.LIIyeE),
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: a.intl.format(a.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: s.x6,
                        children: (0, i.jsx)(l.Button, {
                            variant: "primary",
                            text: a.intl.string(a.t.BddRzS),
                            onClick: t,
                        }),
                    }),
                ],
            }),
        ],
    });
}
