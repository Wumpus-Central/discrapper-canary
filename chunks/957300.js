"use strict";
n.d(t, { A: () => r });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(70656);
function r(e) {
    let { step: t, header: n, children: r } = e;
    return (0, i.jsxs)("div", {
        className: l.eX,
        children: [
            (0, i.jsx)("div", {
                className: l.A1,
                children: (0, i.jsx)("div", {
                    className: l.xR,
                    children: (0, i.jsx)(s.Text, { className: l.qZ, variant: "text-sm/bold", children: t }),
                }),
            }),
            (0, i.jsxs)("div", {
                className: l.H7,
                children: [
                    (0, i.jsx)("div", {
                        className: l.__invalid_triggerHeaderContainer,
                        children: (0, i.jsx)(s.Text, { className: l.wy, variant: "text-sm/normal", children: n }),
                    }),
                    null != r && (0, i.jsx)("div", { className: l.Dx, children: r }),
                ],
            }),
        ],
    });
}
