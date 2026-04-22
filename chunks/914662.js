n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(60270),
    a = n(534514),
    s = n(834730),
    r = n(821609),
    o = n(985018),
    c = n(103731);
function d(e) {
    let { onClose: t, guildName: n } = e;
    return (0, i.jsxs)("div", {
        className: c.kL,
        children: [
            (0, i.jsx)("div", {
                className: c.zc,
                children: (0, i.jsx)(l.g, {
                    size: "custom",
                    color: "currentColor",
                    className: c.Kk,
                    width: 20,
                    height: 20,
                }),
            }),
            (0, i.jsxs)("div", {
                className: c.wx,
                children: [
                    (0, i.jsx)(a.D, {
                        variant: "heading-md/semibold",
                        className: c.TK,
                        children: o.intl.string(o.t.LIIyeE),
                    }),
                    (0, i.jsx)(s.E, {
                        variant: "text-sm/normal",
                        children: o.intl.format(o.t["4/6vQh"], { guildName: n }),
                    }),
                    (0, i.jsx)("div", {
                        "data-button-hoisted-classname-wrapper": !0,
                        className: c.x6,
                        children: (0, i.jsx)(r.$, { variant: "primary", text: o.intl.string(o.t.BddRzS), onClick: t }),
                    }),
                ],
            }),
        ],
    });
}
