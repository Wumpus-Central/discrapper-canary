"use strict";
n.d(t, { E: () => c }), n(667532);
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(963935),
    l = n(272053),
    s = n(985018),
    o = n(325490);
function u(e) {
    let { node: t, isLast: n } = e,
        a = t.useTitle(),
        s = t.useBadge?.(),
        u = (0, r.jsxs)(i.BJc, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: o.Ze,
            children: [
                (0, r.jsx)(i.EYj, {
                    variant: n ? "text-md/medium" : "text-md/normal",
                    color: n ? "text-default" : void 0,
                    className: o.b,
                    children: a,
                }),
                n && null != s && s,
                !n &&
                    (0, r.jsx)(i.EYj, { variant: "text-md/normal", color: "interactive-text-default", children: "/" }),
            ],
        });
    return (0, r.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: o.QF,
        children: n
            ? u
            : (0, r.jsx)(i.DUT, {
                  onClick: () => {
                      l.A.navigate(t.key);
                  },
                  className: o.vk,
                  children: u,
              }),
    });
}
function c(e) {
    let { node: t } = e,
        n = (function (e) {
            let t = [e];
            for (let n = e.parent; null != n && n.type !== a.Z6.SIDEBAR_ITEM; n = n.parent)
                n.type === a.Z6.PANEL && t.unshift(n);
            return t;
        })(t);
    return (0, r.jsx)("nav", {
        "aria-label": s.intl.string(s.t["bM+M/m"]),
        className: o.m7,
        children: (0, r.jsx)(i.BJc, {
            direction: "horizontal",
            role: "list",
            className: o.jD,
            children: n.map((e, t) => (0, r.jsx)(u, { node: e, isLast: t === n.length - 1 }, e.key)),
        }),
    });
}
