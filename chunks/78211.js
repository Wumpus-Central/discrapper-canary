n.d(t, { I: () => a });
var i = n(477900),
    s = n(582128),
    r = n(62617),
    l = n(615939);
function a(e) {
    let { alt: t, ariaLabel: n, ariaHidden: a, role: o, width: c, height: d, className: u, style: h } = e,
        C = s.useMemo(
            () => (0, r.H)({ width: c, height: d, intrinsicWidth: 288, intrinsicHeight: 192, style: h }),
            [c, d, h],
        );
    return (0, i.jsx)("img", {
        style: C,
        src: l.A,
        className: (0, r.Z)(u),
        alt: t,
        "aria-label": n,
        "aria-hidden": a,
        role: o ?? "img",
    });
}
