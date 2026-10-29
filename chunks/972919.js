i.d(t, { w: () => a });
var s = i(477900),
    n = i(582128),
    r = i(62617);
function a(e) {
    let { alt: t, ariaLabel: i, ariaHidden: a, role: l, size: o = 64 } = e,
        c = n.useMemo(() => (0, r.H)({ width: o, height: o, intrinsicWidth: 64, intrinsicHeight: 64 }), [o]);
    return (0, s.jsx)("img", {
        style: c,
        src: "https://cdn.discordapp.com/assets/content/3bc18204c2bf43975ded85a602c7816d032bc07cf9b1d5589e52404f9bc1d687.svg",
        className: (0, r.Z)(),
        alt: t,
        "aria-label": i,
        "aria-hidden": a,
        role: l ?? "img",
    });
}
