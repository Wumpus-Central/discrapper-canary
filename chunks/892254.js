n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(780384),
    s = n(607070),
    o = n(514361),
    l = n(210887),
    u = n(264783),
    c = n(231338);
function d(e) {
    let { children: t } = e,
        n = (0, r.e7)([l.Z], () => l.Z.theme),
        d = (0, r.e7)([o.Z], () => o.Z.gradientPreset),
        { saturation: f, contrast: _ } = (0, r.cj)([s.Z], () => ({
            saturation: s.Z.saturation,
            contrast: s.Z.contrast
        })),
        p = 0;
    null != d && (p = d.theme === c.BR.LIGHT ? (0, a.Od)(p, a.bg.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, a.Od)(p, a.bg.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== f && (p = (0, a.Od)(p, a.bg.REDUCE_SATURATION_ENABLED));
    let h = (0, u.A)();
    return (0, i.jsx)(a.wM, {
        theme: n,
        flags: p,
        saturation: f,
        contrast: _,
        density: h,
        children: t
    });
}
