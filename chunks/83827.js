n.d(t, { t: () => s });
var i = n(477900),
    r = n(582128),
    a = n(62617);
let l =
        "https://cdn.discordapp.com/assets/content/2babfb296a4477affb8d33a3373319a8d5032f7bbaa5c679f35aa3a879547499.png",
    d = `${l} 1x, https://cdn.discordapp.com/assets/content/40875baf2ee95e3a3565c352102de84f40e14d109c20f9624b5121b8bd26cf71.png 2x, https://cdn.discordapp.com/assets/content/aafe397aef05aff53782c96f270e731d8ffb4f8ea0a1ac64eacea2e9619029ed.png 3x`;
function s(e) {
    let { alt: t, ariaLabel: n, ariaHidden: s, role: u, width: o, height: c, className: _, style: f } = e,
        E = r.useMemo(
            () => (0, a.H)({ width: o, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: f }),
            [o, c, f],
        );
    return (0, i.jsx)("img", {
        style: E,
        src: l,
        srcSet: d,
        className: (0, a.Z)(_),
        alt: t,
        "aria-label": n,
        "aria-hidden": s,
        role: u ?? "img",
    });
}
