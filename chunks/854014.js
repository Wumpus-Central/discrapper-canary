n.d(t, {
    C: () => a,
    Z: () => u,
});
var r = n(951288),
    i = n(120356),
    l = n.n(i),
    o = n(481060),
    s = n(873395);
function a(e) {
    let { onClick: t, active: n, children: i } = e;
    return (0, r.jsx)(o.P3F, {
        className: l()(s.item, { [s.active]: n }),
        onClick: t,
        children: i,
    });
}
function u(e) {
    var { onClick: t, active: n } = e,
        i = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++)
                    (n = l[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ["onClick", "active"]);
    if ("render" in i) {
        let { render: e } = i;
        return (0, r.jsx)(a, {
            onClick: t,
            active: n,
            children: (0, r.jsx)(e, {}),
        });
    }
    let { icon: l, title: u, trailing: c } = i;
    return (0, r.jsxs)(a, {
        onClick: t,
        active: n,
        children: [
            (0, r.jsxs)("div", {
                className: s.itemContent,
                children: [
                    (0, r.jsx)(l, {
                        color: "currentColor",
                        size: "refresh_sm",
                        className: s.icon,
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/medium",
                        color: "currentColor",
                        children: u,
                    }),
                ],
            }),
            (0, r.jsx)("div", {
                className: s.itemContent,
                children: c,
            }),
        ],
    });
}
