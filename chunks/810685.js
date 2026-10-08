e.d(s, { M: () => n });
var t = e(477900),
    a = e(582128),
    r = e(62617),
    c = e(700129);
function n(i) {
    let { alt: s, ariaLabel: e, ariaHidden: n, role: l, width: d, height: h, className: p, style: u } = i,
        o = a.useMemo(
            () => (0, r.H)({ width: d, height: h, intrinsicWidth: 288, intrinsicHeight: 162, style: u }),
            [d, h, u],
        );
    return (0, t.jsx)("img", {
        style: o,
        src: c.A,
        className: (0, r.Z)(p),
        alt: s,
        "aria-label": e,
        "aria-hidden": n,
        role: l ?? "img",
    });
}
