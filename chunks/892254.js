r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(442837),
    l = r(780384),
    u = r(607070),
    c = r(514361),
    d = r(210887),
    f = r(695346),
    _ = r(231338);
function h() {
    let [e, n] = s.useState('cozy');
    return (
        s.useEffect(() => {
            let e = window.matchMedia('(min-width: 1024px) and (min-height: 820px)'),
                r = (e) => {
                    n(e.matches ? 'cozy' : 'compact');
                };
            return (
                e.addEventListener('change', r),
                () => {
                    e.removeEventListener('change', r);
                }
            );
        }, []),
        e
    );
}
function p() {
    let e = f.N5.useSetting(),
        n = h();
    return 'auto' === e ? n : e.startsWith('cozy') ? 'cozy' : 'compact';
}
function m(e) {
    let { children: n } = e,
        r = (0, o.e7)([d.Z], () => d.Z.theme),
        i = (0, o.e7)([c.Z], () => c.Z.gradientPreset),
        { saturation: s, contrast: f } = (0, o.cj)([u.Z], () => ({
            saturation: u.Z.saturation,
            contrast: u.Z.contrast
        })),
        h = 0;
    null != i && (h = i.theme === _.BR.LIGHT ? (0, l.Od)(h, l.bg.MOBILE_LIGHT_GRADIENT_THEME_ENABLED) : (0, l.Od)(h, l.bg.MOBILE_DARK_GRADIENT_THEME_ENABLED)), 1 !== s && (h = (0, l.Od)(h, l.bg.REDUCE_SATURATION_ENABLED));
    let m = p();
    return (0, a.jsx)(l.wM, {
        theme: r,
        flags: h,
        saturation: s,
        contrast: f,
        density: m,
        children: n
    });
}
