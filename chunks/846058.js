t.d(n, { b: () => o });
var a = t(477900),
    l = t(582128),
    r = t(62617);
let i =
        "https://cdn.discordapp.com/assets/content/e3ff12ce9ff6af64661e245a86c558e608cffbcb918af93a1114fe79804d7861.png",
    s = `${i} 1x, https://cdn.discordapp.com/assets/content/8f5f221111fa3615d69d879043b508468a28555a8f79f1d8c2c72c02d341f6cd.png 2x, https://cdn.discordapp.com/assets/content/7932e36c4b8669c5e63659892d67e50374cd334d7d34026d428db30055172f4a.png 3x`;
function o(e) {
    let { alt: n, ariaLabel: t, ariaHidden: o, role: d, width: u, height: c, className: f, style: g } = e,
        m = l.useMemo(
            () => (0, r.H)({ width: u, height: c, intrinsicWidth: 24, intrinsicHeight: 24, style: g }),
            [u, c, g],
        );
    return (0, a.jsx)("img", {
        style: m,
        src: i,
        srcSet: s,
        className: (0, r.Z)(f),
        alt: n,
        "aria-label": t,
        "aria-hidden": o,
        role: d ?? "img",
    });
}
