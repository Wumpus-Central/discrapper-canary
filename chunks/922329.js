var l = n(477900);
n(582128);
var a = n(503698),
    s = n.n(a),
    r = n(514042),
    i = n(834730),
    u = n(939249),
    d = n(153171);
function o(e) {
    return s()(d._B, { [d.ND]: e });
}
function c(e) {
    let { name: t, thumbSrc: n = null, thumb: a, compact: s = !1, subText: u, children: o, onThumbError: c } = e;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            null != a
                ? a
                : null != n
                  ? (0, l.jsx)("img", { src: n, alt: "", className: d.gJ, onError: c })
                  : (0, l.jsx)(r.FileIcon, { size: s ? "xs" : "sm", color: "currentColor" }),
            (0, l.jsxs)("div", {
                className: d.Wd,
                children: [
                    (0, l.jsx)(i.E, { variant: "body-sm/medium", color: "text-default", className: d.Rr, children: t }),
                    u,
                ],
            }),
            o,
        ],
    });
}
n.d(
    t,
    {},
    {
        n: function (e) {
            let { name: t, thumbSrc: n, ariaLabel: a, onClick: r, onThumbError: i } = e;
            return (0, l.jsx)(u.D, {
                className: s()(o(!0), d.w8),
                onClick: r,
                "aria-label": a,
                children: c({ name: t, thumbSrc: n, compact: !0, onThumbError: i }),
            });
        },
        p: function (e) {
            return (0, l.jsx)("div", { className: o(e.compact ?? !1), children: c(e) });
        },
    },
);
