c.d(s, { u: () => d });
var e = c(477900),
    t = c(582128),
    a = c(62617);
function d(i) {
    let { alt: s, ariaLabel: c, ariaHidden: d, role: n, size: r = 64 } = i,
        h = t.useMemo(() => (0, a.H)({ width: r, height: r, intrinsicWidth: 64, intrinsicHeight: 64 }), [r]);
    return (0, e.jsx)("img", {
        style: h,
        src: "https://cdn.discordapp.com/assets/content/96552954edc2aaf6953969b70c978f2601341c8c90edbc90e605e0392cada677.svg",
        className: (0, a.Z)(),
        alt: s,
        "aria-label": c,
        "aria-hidden": d,
        role: n ?? "img",
    });
}
