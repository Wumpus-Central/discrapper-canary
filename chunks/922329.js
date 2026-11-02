n.d(t, { n: () => m, p: () => f });
var l = n(477900);
n(582128);
var a = n(503698),
    r = n.n(a),
    i = n(514042),
    s = n(834730),
    o = n(939249),
    u = n(153171);
function d(e) {
    return r()(u._B, { [u.ND]: e });
}
function c(e) {
    let { name: t, thumbSrc: n = null, thumb: a, compact: r = !1, subText: o, children: d, onThumbError: c } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != a
                ? a
                : null != n
                  ? (0, l.jsx)("img", { src: n, alt: "", className: u.gJ, onError: c })
                  : (0, l.jsx)(i.FileIcon, { size: r ? "xs" : "sm", color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: u.Wd,
                children: [
                    (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", className: u.Rr, children: t }),
                    o,
                ],
            }),
            d,
        ],
    });
}
function f(e) {
    return (0, l.jsx)("div", { className: d(e.compact ?? !1), children: c(e) });
}
function m(e) {
    let { name: t, thumbSrc: n, ariaLabel: a, onClick: i, onThumbError: s } = e;
    return (0, l.jsx)(o.D, {
        className: r()(d(!0), u.w8),
        onClick: i,
        "aria-label": a,
        children: c({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
