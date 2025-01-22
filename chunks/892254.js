r.d(n, {
    Z: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(780384),
    s = r(607070),
    l = r(514361),
    u = r(210887),
    c = r(264783),
    d = r(231338);
function f(e) {
    let { children: n } = e,
        r = (0, a.e7)([u.Z], () => u.Z.theme),
        f = (0, a.e7)([l.Z], () => l.Z.gradientPreset),
        { saturation: p, contrast: h } = (0, a.cj)([s.Z], () => ({
            saturation: s.Z.saturation,
            contrast: s.Z.contrast
        })),
        _ = 0;
    null != f && (_ = f.theme === d.BR.LIGHT ? (0, o.Od)(_, o.bg.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, o.Od)(_, o.bg.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== p && (_ = (0, o.Od)(_, o.bg.REDUCE_SATURATION_ENABLED));
    let m = (0, c.A)();
    return (0, i.jsx)(o.wM, {
        theme: r,
        flags: _,
        saturation: p,
        contrast: h,
        density: m,
        children: n
    });
}
