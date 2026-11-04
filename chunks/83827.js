n.d(t, { t: () => o });
var l = n(477900),
    r = n(582128),
    i = n(62617);
let a =
        "https://cdn.discordapp.com/assets/content/2babfb296a4477affb8d33a3373319a8d5032f7bbaa5c679f35aa3a879547499.png",
    s = `${a} 1x, https://cdn.discordapp.com/assets/content/40875baf2ee95e3a3565c352102de84f40e14d109c20f9624b5121b8bd26cf71.png 2x, https://cdn.discordapp.com/assets/content/aafe397aef05aff53782c96f270e731d8ffb4f8ea0a1ac64eacea2e9619029ed.png 3x`;
function o(e) {
    let { alt: t, ariaLabel: n, ariaHidden: o, role: u, width: d, height: c, className: f, style: _ } = e,
        E = r.useMemo(
            () => (0, i.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: _ }),
            [d, c, _],
        );
    return (0, l.jsx)("img", {
        style: E,
        src: a,
        srcSet: s,
        className: (0, i.Z)(f),
        alt: t,
        "aria-label": n,
        "aria-hidden": o,
        role: u ?? "img",
    });
}
