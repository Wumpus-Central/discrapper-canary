"use strict";
n.d(t, { E: () => c });
var r = n(627968);
n(64700);
var i = n(158954),
    a = n(272053),
    s = n(215566),
    l = n(985018),
    o = n(508891);
function u(e) {
    let { node: t, isLast: n } = e,
        l = t.useTitle(),
        u = t.usePersistentBadge?.(),
        c = (0, r.jsxs)(i.BJc, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: o.Ze,
            children: [
                (0, r.jsx)(i.EYj, {
                    variant: n ? "text-md/medium" : "text-md/normal",
                    color: n ? "text-default" : void 0,
                    className: o.b,
                    children: l,
                }),
                n && null != u && (0, r.jsx)(s.A, { badge: u }),
                !n &&
                    (0, r.jsx)(i.EYj, {
                        variant: "text-md/normal",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: "/",
                    }),
            ],
        });
    return (0, r.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: o.QF,
        children: n
            ? c
            : (0, r.jsx)(i.DUT, {
                  onClick: () => {
                      a.A.navigate(t.key);
                  },
                  className: o.vk,
                  children: c,
              }),
    });
}
function c(e) {
    let { path: t } = e;
    return (0, r.jsx)("nav", {
        "aria-label": l.intl.string(l.t["bM+M/m"]),
        className: o.m7,
        children: (0, r.jsx)(i.BJc, {
            direction: "horizontal",
            role: "list",
            className: o.jD,
            children: t.map((e, n) => (0, r.jsx)(u, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
