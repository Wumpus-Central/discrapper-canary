n.d(t, {
    A: () => d,
    k: () => l,
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(51130),
    l = (function (e) {
        return (e.INFO = "info"), (e.WARNING = "warning"), e;
    })({});
let c = {
        info: o.pq,
        warning: o.$e,
    },
    u = {
        info: s.mir,
        warning: s.EpV,
    };
function d(e) {
    let { children: t, className: n, look: i = "info" } = e,
        l = u[i];
    return (0, r.jsxs)("div", {
        className: a()(o.zr, n, c[i]),
        children: [
            (0, r.jsx)(l, {
                className: o.Kk,
                color: "currentColor",
            }),
            (0, r.jsx)(s.Text, {
                className: o.Qq,
                variant: "text-sm/medium",
                color: "text-default",
                children: t,
            }),
        ],
    });
}
