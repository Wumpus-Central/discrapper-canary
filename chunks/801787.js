n.d(t, {
    C1: () => p,
    Od: () => o,
    TC: () => _,
    bg: () => s,
    wM: () => d,
    ze: () => f
}),
    n(789020),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(231338),
    s = (function (e) {
        return (e[(e.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = 'MOBILE_DARK_GRADIENT_THEME_ENABLED'), (e[(e.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = 'MOBILE_LIGHT_GRADIENT_THEME_ENABLED'), (e[(e.REDUCED_CONTRAST_ENABLED = 16)] = 'REDUCED_CONTRAST_ENABLED'), (e[(e.INCREASED_CONTRAST_ENABLED = 32)] = 'INCREASED_CONTRAST_ENABLED'), (e[(e.REDUCE_SATURATION_ENABLED = 64)] = 'REDUCE_SATURATION_ENABLED'), e;
    })({});
function o(e, t) {
    return e | t;
}
function l(e) {
    let t = JSON.stringify(e);
    return {
        ...e,
        key: t
    };
}
let u = {
        theme: 'light',
        primaryColor: null,
        secondaryColor: null,
        gradient: null,
        key: 'light-false-null-null-null',
        flags: 0,
        contrast: 1,
        saturation: 1,
        density: 'compact',
        disableAdaptiveTheme: !1
    },
    c = r.createContext(u);
function d(e) {
    let { children: t, theme: n = a.BR.DARK, primaryColor: s = null, secondaryColor: o = null, gradient: u = null, flags: d = 0, contrast: f = 1, saturation: _ = 1, density: p = 'cozy', disableAdaptiveTheme: h = !1 } = e,
        m = r.useMemo(
            () =>
                l({
                    theme: n,
                    primaryColor: s,
                    secondaryColor: o,
                    gradient: u,
                    flags: d,
                    contrast: f,
                    saturation: _,
                    density: p,
                    disableAdaptiveTheme: h
                }),
            [n, s, o, u, d, f, _, p, h]
        );
    return (0, i.jsx)(c.Provider, {
        value: m,
        children: t
    });
}
function f(e) {
    let { children: t, theme: n, primaryColor: a, secondaryColor: s, gradient: o, flags: u, contrast: d, saturation: f, density: _, disableAdaptiveTheme: p } = e,
        h = r.useContext(c),
        m = r.useMemo(
            () =>
                l({
                    theme: null != n ? n : h.theme,
                    primaryColor: null != a ? a : h.primaryColor,
                    secondaryColor: null != s ? s : h.secondaryColor,
                    gradient: null != o ? o : h.gradient,
                    flags: null != u ? u : h.flags,
                    contrast: null != d ? d : h.contrast,
                    saturation: null != f ? f : h.saturation,
                    density: null != _ ? _ : h.density,
                    disableAdaptiveTheme: null != p ? p : h.disableAdaptiveTheme
                }),
            [n, h.theme, h.primaryColor, h.secondaryColor, h.gradient, h.flags, h.contrast, h.saturation, h.density, h.disableAdaptiveTheme, a, s, o, u, d, f, _, p]
        );
    return (0, i.jsx)(c.Provider, {
        value: m,
        children: t
    });
}
function _() {
    let e = r.useContext(c);
    if (null == e) throw Error('useThemeContext must be used within a ThemeContext.Provider');
    return e;
}
function p(e) {
    let { children: t } = e,
        n = _();
    return (0, i.jsx)(i.Fragment, { children: t(n) });
}
