"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(303727),
    r = n(985018),
    a = n(610688);
function o(e) {
    let { Icon: t, header: n, tip: o, disableStars: c } = e;
    return (0, i.jsxs)("div", {
        className: a.kL,
        children: [
            (0, i.jsxs)("div", {
                className: a.zc,
                children: [
                    (0, i.jsx)(t, { color: "currentColor", size: "custom", className: a.Kk, width: 36, height: 36 }),
                    c ? null : (0, i.jsx)(l.A, { className: a.uf }),
                ],
            }),
            (0, i.jsx)(s.Heading, { className: a.wx, variant: "heading-xl/semibold", children: n }),
            (0, i.jsxs)(s.Text, {
                color: "text-default",
                variant: "text-xs/normal",
                children: [
                    c
                        ? null
                        : (0, i.jsxs)(s.Text, {
                              tag: "span",
                              className: a.PP,
                              variant: "text-xs/bold",
                              color: "text-feedback-positive",
                              children: [r.intl.string(r.t["8tvIiN"]), ":", " "],
                          }),
                    o,
                ],
            }),
        ],
    });
}
