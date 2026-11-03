n.d(t, { t: () => u });
var l = n(477900),
    r = n(582128),
    a = n(62617);
let i =
        "https://cdn.discordapp.com/assets/content/2babfb296a4477affb8d33a3373319a8d5032f7bbaa5c679f35aa3a879547499.png",
    s = `${i} 1x, https://cdn.discordapp.com/assets/content/40875baf2ee95e3a3565c352102de84f40e14d109c20f9624b5121b8bd26cf71.png 2x, https://cdn.discordapp.com/assets/content/aafe397aef05aff53782c96f270e731d8ffb4f8ea0a1ac64eacea2e9619029ed.png 3x`;
function u(e) {
    let { alt: t, ariaLabel: n, ariaHidden: u, role: o, width: c, height: d, className: f, style: m } = e,
        g = r.useMemo(
            () => (0, a.H)({ width: c, height: d, intrinsicWidth: 24, intrinsicHeight: 24, style: m }),
            [c, d, m],
        );
    return (0, l.jsx)("img", {
        style: g,
        src: i,
        srcSet: s,
        className: (0, a.Z)(f),
        alt: t,
        "aria-label": n,
        "aria-hidden": u,
        role: o ?? "img",
    });
}
