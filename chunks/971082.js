n.d(t, {
    $: () => p,
    Z: () => g,
});
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(36563),
    o = n(681715),
    c = n(481060),
    s = n(313201),
    u = n(245583);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function f(e, t) {
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
            (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function g(e) {
    var { label: t, className: n, size: i = c.EFr.SIZE_16, maxUsers: o = 4 } = e,
        g = f(e, ["label", "className", "size", "maxUsers"]);
    let p = (0, s.Dt)();
    return (0, r.jsxs)("div", {
        className: l()(n, u.container),
        children: [
            (0, r.jsx)(
                a.g,
                d(
                    {
                        "aria-labelledby": p,
                        overflowCountClassName: u.overflow,
                        size: i,
                        maxUsers: o,
                    },
                    g,
                ),
            ),
            (0, r.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "text-subtle",
                id: p,
                children: t,
            }),
        ],
    });
}
function p(e) {
    var { label: t, className: n, overflowCountClassName: i, size: s = c.EFr.SIZE_16, maxUsers: g = 4, onClick: p } = e,
        m = f(e, ["label", "className", "overflowCountClassName", "size", "maxUsers", "onClick"]);
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(o.u, {
            text: t,
            asContainer: !0,
            ariaHidden: !0,
            children: (0, r.jsx)(c.P3F, {
                onClick: p,
                "aria-label": t,
                children: (0, r.jsx)(
                    a.g,
                    d(
                        {
                            size: s,
                            maxUsers: g,
                            overflowCountClassName: l()(u.overflow, i),
                            "aria-hidden": !0,
                        },
                        m,
                    ),
                ),
            }),
        }),
    });
}
