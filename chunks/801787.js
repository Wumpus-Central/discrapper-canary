n.d(t, {
    C1: () => E,
    Od: () => d,
    TC: () => g,
    bg: () => u,
    wM: () => h,
    ze: () => m
}),
    n(789020),
    n(26686),
    n(411104);
var r = n(200651),
    i = n(192379),
    o = n(231338);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                a(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var u = (function (e) {
    return (e[(e.MOBILE_DARK_GRADIENT_THEME_ENABLED = 4)] = 'MOBILE_DARK_GRADIENT_THEME_ENABLED'), (e[(e.MOBILE_LIGHT_GRADIENT_THEME_ENABLED = 8)] = 'MOBILE_LIGHT_GRADIENT_THEME_ENABLED'), (e[(e.REDUCED_CONTRAST_ENABLED = 16)] = 'REDUCED_CONTRAST_ENABLED'), (e[(e.INCREASED_CONTRAST_ENABLED = 32)] = 'INCREASED_CONTRAST_ENABLED'), (e[(e.REDUCE_SATURATION_ENABLED = 64)] = 'REDUCE_SATURATION_ENABLED'), e;
})({});
function d(e, t) {
    return e | t;
}
function f(e) {
    let t = JSON.stringify(e);
    return c(s({}, e), { key: t });
}
let p = {
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
    _ = i.createContext(p);
function h(e) {
    let { children: t, theme: n = o.BR.DARK, primaryColor: a = null, secondaryColor: s = null, gradient: l = null, flags: c = 0, contrast: u = 1, saturation: d = 1, density: p = 'cozy', disableAdaptiveTheme: h = !1 } = e,
        m = i.useMemo(
            () =>
                f({
                    theme: n,
                    primaryColor: a,
                    secondaryColor: s,
                    gradient: l,
                    flags: c,
                    contrast: u,
                    saturation: d,
                    density: p,
                    disableAdaptiveTheme: h
                }),
            [n, a, s, l, c, u, d, p, h]
        );
    return (0, r.jsx)(_.Provider, {
        value: m,
        children: t
    });
}
function m(e) {
    let { children: t, theme: n, primaryColor: o, secondaryColor: a, gradient: s, flags: l, contrast: c, saturation: u, density: d, disableAdaptiveTheme: p } = e,
        h = i.useContext(_),
        m = i.useMemo(
            () =>
                f({
                    theme: null != n ? n : h.theme,
                    primaryColor: null != o ? o : h.primaryColor,
                    secondaryColor: null != a ? a : h.secondaryColor,
                    gradient: null != s ? s : h.gradient,
                    flags: null != l ? l : h.flags,
                    contrast: null != c ? c : h.contrast,
                    saturation: null != u ? u : h.saturation,
                    density: null != d ? d : h.density,
                    disableAdaptiveTheme: null != p ? p : h.disableAdaptiveTheme
                }),
            [n, h.theme, h.primaryColor, h.secondaryColor, h.gradient, h.flags, h.contrast, h.saturation, h.density, h.disableAdaptiveTheme, o, a, s, l, c, u, d, p]
        );
    return (0, r.jsx)(_.Provider, {
        value: m,
        children: t
    });
}
function g() {
    let e = i.useContext(_);
    if (null == e) throw Error('useThemeContext must be used within a ThemeContext.Provider');
    return e;
}
function E(e) {
    let { children: t } = e,
        n = g();
    return (0, r.jsx)(r.Fragment, { children: t(n) });
}
