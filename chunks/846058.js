n.d(t, { b: () => u });
var l = n(477900),
    r = n(582128),
    a = n(62617);
let i =
        "https://cdn.discordapp.com/assets/content/e3ff12ce9ff6af64661e245a86c558e608cffbcb918af93a1114fe79804d7861.png",
    s = `${i} 1x, https://cdn.discordapp.com/assets/content/8f5f221111fa3615d69d879043b508468a28555a8f79f1d8c2c72c02d341f6cd.png 2x, https://cdn.discordapp.com/assets/content/7932e36c4b8669c5e63659892d67e50374cd334d7d34026d428db30055172f4a.png 3x`;
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
