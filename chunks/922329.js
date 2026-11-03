n.d(t, { n: () => h, p: () => f });
var l = n(477900);
n(582128);
var r = n(503698),
    a = n.n(r),
    i = n(514042),
    s = n(834730),
    u = n(939249),
    o = n(153171);
function c(e) {
    return a()(o._B, { [o.ND]: e });
}
function d(e) {
    let { name: t, thumbSrc: n = null, thumb: r, compact: a = !1, subText: u, children: c, onThumbError: d } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != r
                ? r
                : null != n
                  ? (0, l.jsx)("img", { src: n, alt: "", className: o.gJ, onError: d })
                  : (0, l.jsx)(i.FileIcon, { size: a ? "xs" : "sm", color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: o.Wd,
                children: [
                    (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", className: o.Rr, children: t }),
                    u,
                ],
            }),
            c,
        ],
    });
}
function f(e) {
    return (0, l.jsx)("div", { className: c(e.compact ?? !1), children: d(e) });
}
function h(e) {
    let { name: t, thumbSrc: n, ariaLabel: r, onClick: i, onThumbError: s } = e;
    return (0, l.jsx)(u.D, {
        className: a()(c(!0), o.w8),
        onClick: i,
        "aria-label": r,
        children: d({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
