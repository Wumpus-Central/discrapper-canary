r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(780384),
    o = r(607070),
    l = r(514361),
    u = r(210887),
    c = r(264783),
    d = r(231338);
function f(e) {
    let { children: n } = e,
        r = (0, a.e7)([u.Z], () => u.Z.theme),
        f = (0, a.e7)([l.Z], () => l.Z.gradientPreset),
        { saturation: _, contrast: h } = (0, a.cj)([o.Z], () => ({
            saturation: o.Z.saturation,
            contrast: o.Z.contrast
        })),
        p = 0;
    null != f && (p = f.theme === d.BR.LIGHT ? (0, s.Od)(p, s.bg.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, s.Od)(p, s.bg.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== _ && (p = (0, s.Od)(p, s.bg.REDUCE_SATURATION_ENABLED));
    let m = (0, c.A)();
    return (0, i.jsx)(s.wM, {
        theme: r,
        flags: p,
        saturation: _,
        contrast: h,
        density: m,
        children: n
    });
}
