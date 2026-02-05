"use strict";
n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(690450);
function r(e) {
    let { title: t, settings: n } = e;
    return (0, i.jsxs)("div", {
        children: [
            (0, i.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                className: l.wx,
                children: t,
            }),
            n.map((e) => e.renderComponent()),
        ],
    });
}
