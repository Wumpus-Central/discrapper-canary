n.d(t, { b: () => o });
var l = n(477900),
    a = n(582128),
    r = n(62617);
let i =
        "https://cdn.discordapp.com/assets/content/e3ff12ce9ff6af64661e245a86c558e608cffbcb918af93a1114fe79804d7861.png",
    s = `${i} 1x, https://cdn.discordapp.com/assets/content/8f5f221111fa3615d69d879043b508468a28555a8f79f1d8c2c72c02d341f6cd.png 2x, https://cdn.discordapp.com/assets/content/7932e36c4b8669c5e63659892d67e50374cd334d7d34026d428db30055172f4a.png 3x`;
function o(e) {
    let { alt: t, ariaLabel: n, ariaHidden: o, role: u, width: d, height: c, className: f, style: g } = e,
        m = a.useMemo(
            () => (0, r.H)({ width: d, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: g }),
            [d, c, g],
        );
    return (0, l.jsx)("img", {
        style: m,
        src: i,
        srcSet: s,
        className: (0, r.Z)(f),
        alt: t,
        "aria-label": n,
        "aria-hidden": o,
        role: u ?? "img",
    });
}
