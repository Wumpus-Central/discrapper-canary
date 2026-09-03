n.d(t, { C: () => _ });
var i = n(477900),
    r = n(582128),
    a = n(345870),
    s = n(503698),
    l = n.n(s),
    o = n(597619),
    d = n(128539);
let c = r.memo(function (e) {
    let { dotRadius: t, x: n, y: r, spacing: a = 2.5, themed: s = !1, className: c, ref: u } = e,
        { focused: _ } = (0, o.xb)();
    return (0, i.jsx)("svg", {
        ref: u,
        x: n,
        y: r,
        width: 2 * t * 3 + (t / 2) * 2,
        height: 2 * t,
        className: l()(c, d.r$, s ? d.Sp : null, _ ? null : d.Ft),
        "aria-hidden": !0,
        children: [0, 1, 2].map((e) =>
            (0, i.jsx)("circle", { className: d.Om, cx: t + t * a * e, cy: t, r: t, fill: "currentColor" }, e),
        ),
    });
});
var u = n(863610);
let _ = r.memo(function (e) {
    let { location: t, hide: n = !1, ...r } = e;
    return (0, a.v)(t) ? (n ? null : (0, i.jsx)(c, { ...r })) : (0, i.jsx)(u.n, { ...r, hide: n });
});
