"use strict";
n.d(t, { D: () => d });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(985018),
    l = n(668435),
    u = n(886981);
function c() {
    return (0, r.jsxs)("div", {
        className: s()(u.oR, l.o),
        children: [
            (0, r.jsx)(a.A9s, { size: "custom", className: l.K, color: a.LU0.colors.STATUS_POSITIVE.css }),
            (0, r.jsx)(a.Text, {
                color: "text-strong",
                variant: "text-sm/semibold",
                children: o.intl.string(o.t["3T2jbf"]),
            }),
        ],
    });
}
function d() {
    let e = o.intl.string(o.t["3T2jbf"]);
    (0, a.showToast)((0, a.createToast)("", a.ToastType.CUSTOM, { component: (0, r.jsx)(c, {}) })), a.ORC.announce(e);
}
