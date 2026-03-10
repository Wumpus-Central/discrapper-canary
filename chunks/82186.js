"use strict";
n.d(t, { E: () => d }), n(667532);
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(963935),
    s = n(272053),
    l = n(215566),
    o = n(985018),
    u = n(621580);
function c(e) {
    let { node: t, isLast: n } = e,
        a = t.useTitle(),
        o = t.usePersistentBadge?.(),
        c = (0, r.jsxs)(i.BJc, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: u.Ze,
            children: [
                (0, r.jsx)(i.EYj, {
                    variant: n ? "text-md/medium" : "text-md/normal",
                    color: n ? "text-default" : void 0,
                    className: u.b,
                    children: a,
                }),
                n && null != o && (0, r.jsx)(l.A, { badge: o }),
                !n &&
                    (0, r.jsx)(i.EYj, { variant: "text-md/normal", color: "interactive-text-default", children: "/" }),
            ],
        });
    return (0, r.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: u.QF,
        children: n
            ? c
            : (0, r.jsx)(i.DUT, {
                  onClick: () => {
                      s.A.navigate(t.key);
                  },
                  className: u.vk,
                  children: c,
              }),
    });
}
function d(e) {
    let { node: t } = e,
        n = (function (e) {
            let t = [e];
            for (let n = e.parent; null != n && n.type !== a.Z6.SIDEBAR_ITEM; n = n.parent)
                n.type === a.Z6.PANEL && t.unshift(n);
            return t;
        })(t);
    return (0, r.jsx)("nav", {
        "aria-label": o.intl.string(o.t["bM+M/m"]),
        className: u.m7,
        children: (0, r.jsx)(i.BJc, {
            direction: "horizontal",
            role: "list",
            className: u.jD,
            children: n.map((e, t) => (0, r.jsx)(c, { node: e, isLast: t === n.length - 1 }, e.key)),
        }),
    });
}
