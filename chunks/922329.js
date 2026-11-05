var l = n(477900);
n(582128);
var a = n(503698),
    r = n.n(a),
    s = n(514042),
    i = n(834730),
    u = n(939249),
    o = n(153171);
function d(e) {
    return r()(o._B, { [o.ND]: e });
}
function c(e) {
    let { name: t, thumbSrc: n = null, thumb: a, compact: r = !1, subText: u, children: d, onThumbError: c } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != a
                ? a
                : null != n
                  ? (0, l.jsx)("img", { src: n, alt: "", className: o.gJ, onError: c })
                  : (0, l.jsx)(s.FileIcon, { size: r ? "xs" : "sm", color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: o.Wd,
                children: [
                    (0, l.jsx)(i.E, { variant: "body-sm/medium", color: "text-default", className: o.Rr, children: t }),
                    u,
                ],
            }),
            d,
        ],
    });
}
n.d(
    t,
    {},
    {
        n: function (e) {
            let { name: t, thumbSrc: n, ariaLabel: a, onClick: s, onThumbError: i } = e;
            return (0, l.jsx)(u.D, {
                className: r()(d(!0), o.w8),
                onClick: s,
                "aria-label": a,
                children: c({ name: t, thumbSrc: n, compact: !0, onThumbError: i }),
            });
        },
        p: function (e) {
            return (0, l.jsx)("div", { className: d(e.compact ?? !1), children: c(e) });
        },
    },
);
