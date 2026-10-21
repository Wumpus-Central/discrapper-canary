t.d(n, { t: () => o });
var l = t(477900),
    a = t(582128),
    r = t(62617);
let i =
        "https://cdn.discordapp.com/assets/content/2babfb296a4477affb8d33a3373319a8d5032f7bbaa5c679f35aa3a879547499.png",
    s = `${i} 1x, https://cdn.discordapp.com/assets/content/40875baf2ee95e3a3565c352102de84f40e14d109c20f9624b5121b8bd26cf71.png 2x, https://cdn.discordapp.com/assets/content/aafe397aef05aff53782c96f270e731d8ffb4f8ea0a1ac64eacea2e9619029ed.png 3x`;
function o(e) {
    let { alt: n, ariaLabel: t, ariaHidden: o, role: u, width: d, height: c, className: f, style: m } = e,
        g = a.useMemo(
            () => (0, r.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: m }),
            [d, c, m],
        );
    return (0, l.jsx)("img", {
        style: g,
        src: i,
        srcSet: s,
        className: (0, r.Z)(f),
        alt: n,
        "aria-label": t,
        "aria-hidden": o,
        role: u ?? "img",
    });
}
