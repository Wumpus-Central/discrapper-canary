s.d(t, { A: () => d });
var i = s(477900),
    a = s(582128),
    c = s(62617),
    r = s(534573),
    n = s(66417);
let l = {
    guild: function (e) {
        let { alt: t, ariaLabel: s, ariaHidden: r, role: n, width: l, height: d, className: h, style: o } = e,
            u = a.useMemo(
                () => (0, c.H)({ width: l, height: d, intrinsicWidth: 144, intrinsicHeight: 144, style: o }),
                [l, d, o],
            );
        return (0, i.jsx)("img", {
            style: u,
            src: "https://cdn.discordapp.com/assets/content/0a671db7333efd668b15bbc2d4391833c3678a9d3243e8248c3408e58ef793fb.svg",
            className: (0, c.Z)(h),
            alt: t,
            "aria-label": s,
            "aria-hidden": r,
            role: n ?? "img",
        });
    },
    character: function (e) {
        let { alt: t, ariaLabel: s, ariaHidden: r, role: n, width: l, height: d, className: h, style: o } = e,
            u = a.useMemo(
                () => (0, c.H)({ width: l, height: d, intrinsicWidth: 144, intrinsicHeight: 144, style: o }),
                [l, d, o],
            );
        return (0, i.jsx)("img", {
            style: u,
            src: "https://cdn.discordapp.com/assets/content/3a5694a4ae500bdb24f202353ff9a648926bf762df037e73177596e5b527c6c9.svg",
            className: (0, c.Z)(h),
            alt: t,
            "aria-label": s,
            "aria-hidden": r,
            role: n ?? "img",
        });
    },
};
function d(e) {
    let { iconUrl: t, size: s, fallback: c } = e,
        [d, h] = a.useState(null);
    if (null == t || t === d) {
        let e = l[c];
        return (0, i.jsx)(e, { alt: "", ariaHidden: !0, width: s, height: s, className: n.K });
    }
    return (0, i.jsx)("img", {
        src: (0, r.Ec)(t, { size: s }),
        onError: () => h(t),
        width: s,
        height: s,
        alt: "",
        className: n.K,
    });
}
