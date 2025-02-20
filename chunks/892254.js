n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(780384),
    a = n(607070),
    s = n(514361),
    l = n(210887),
    c = n(264783),
    u = n(231338);
function d(e) {
    let { children: t } = e,
        n = (0, i.e7)([l.Z], () => l.Z.theme),
        d = (0, i.e7)([s.Z], () => s.Z.gradientPreset),
        { saturation: f, contrast: p } = (0, i.cj)([a.Z], () => ({
            saturation: a.Z.saturation,
            contrast: a.Z.contrast
        })),
        _ = 0;
    null != d && (_ = d.theme === u.BR.LIGHT ? (0, o.Od)(_, o.bg.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, o.Od)(_, o.bg.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== f && (_ = (0, o.Od)(_, o.bg.REDUCE_SATURATION_ENABLED));
    let h = (0, c.A)();
    return (0, r.jsx)(o.wM, {
        theme: n,
        flags: _,
        saturation: f,
        contrast: p,
        density: h,
        children: t
    });
}
