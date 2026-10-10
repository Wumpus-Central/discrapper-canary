n.d(t, { n: () => f, p: () => m });
var l = n(477900);
n(582128);
var a = n(503698),
    r = n.n(a),
    i = n(514042),
    s = n(834730),
    u = n(939249),
    d = n(153171);
function o(e) {
    return r()(d._B, { [d.ND]: e });
}
function c(e) {
    let { name: t, thumbSrc: n = null, compact: a = !1, subText: r, children: u, onThumbError: o } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != n
                ? (0, l.jsx)("img", { src: n, alt: "", className: d.gJ, onError: o })
                : (0, l.jsx)(i.FileIcon, { size: a ? "xs" : "sm", color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: d.Wd,
                children: [
                    (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", className: d.Rr, children: t }),
                    r,
                ],
            }),
            u,
        ],
    });
}
function m(e) {
    return (0, l.jsx)("div", { className: o(e.compact ?? !1), children: c(e) });
}
function f(e) {
    let { name: t, thumbSrc: n, ariaLabel: a, onClick: i, onThumbError: s } = e;
    return (0, l.jsx)(u.D, {
        className: r()(o(!0), d.w8),
        onClick: i,
        "aria-label": a,
        children: c({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
