n.d(t, { n: () => m, p: () => f });
var l = n(477900);
n(582128);
var a = n(503698),
    i = n.n(a),
    r = n(514042),
    s = n(834730),
    o = n(939249),
    d = n(153171);
function u(e) {
    return i()(d._B, { [d.ND]: e });
}
function c(e) {
    let { name: t, thumbSrc: n = null, compact: a = !1, subText: i, children: o, onThumbError: u } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != n
                ? (0, l.jsx)("img", { src: n, alt: "", className: d.gJ, onError: u })
                : (0, l.jsx)(r.FileIcon, { size: a ? "xs" : "sm", color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: d.Wd,
                children: [
                    (0, l.jsx)(s.E, { variant: "text-sm/medium", color: "text-default", className: d.Rr, children: t }),
                    i,
                ],
            }),
            o,
        ],
    });
}
function f(e) {
    return (0, l.jsx)("div", { className: u(e.compact ?? !1), children: c(e) });
}
function m(e) {
    let { name: t, thumbSrc: n, ariaLabel: a, onClick: r, onThumbError: s } = e;
    return (0, l.jsx)(o.D, {
        className: i()(u(!0), d.w8),
        onClick: r,
        "aria-label": a,
        children: c({ name: t, thumbSrc: n, compact: !0, onThumbError: s }),
    });
}
