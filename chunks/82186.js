"use strict";
n.d(t, { E: () => _ });
var r = n(627968);
n(64700);
var i = n(331322),
    a = n(834730),
    l = n(939249),
    s = n(272053),
    o = n(215566),
    c = n(985018),
    u = n(508891);
function d(e) {
    let { node: t, isLast: n } = e,
        c = t.useTitle(),
        d = t.usePersistentBadge?.(),
        _ = (0, r.jsxs)(i.B, {
            direction: "horizontal",
            align: "center",
            gap: "xs",
            className: u.Ze,
            children: [
                (0, r.jsx)(a.E, {
                    variant: n ? "text-md/medium" : "text-md/normal",
                    color: n ? "text-default" : void 0,
                    className: u.b,
                    children: c,
                }),
                n && null != d && (0, r.jsx)(o.A, { badge: d }),
                !n &&
                    (0, r.jsx)(a.E, {
                        variant: "text-md/normal",
                        color: "interactive-text-default",
                        "aria-hidden": !0,
                        children: "/",
                    }),
            ],
        });
    return (0, r.jsx)("li", {
        "aria-current": n ? "page" : void 0,
        className: u.QF,
        children: n
            ? _
            : (0, r.jsx)(l.D, {
                  onClick: () => {
                      s.A.navigate(t.key);
                  },
                  className: u.vk,
                  children: _,
              }),
    });
}
function _(e) {
    let { path: t } = e;
    return (0, r.jsx)("nav", {
        "aria-label": c.intl.string(c.t["bM+M/m"]),
        className: u.m7,
        children: (0, r.jsx)(i.B, {
            direction: "horizontal",
            role: "list",
            className: u.jD,
            children: t.map((e, n) => (0, r.jsx)(d, { node: e, isLast: n === t.length - 1 }, e.key)),
        }),
    });
}
