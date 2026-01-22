n.d(t, {
    w: () => s,
}),
    n(938796),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(38021);

function s(e) {
    let {
            children: t,
            theme: n,
            primaryColor: s,
            secondaryColor: o,
            gradient: l,
            flags: c,
            contrast: u,
            saturation: d,
            density: f,
            disableAdaptiveTheme: p,
            reduceAdaptiveTheme: _,
        } = e,
        h = i.useContext(a.Dx);
    a.PQ;
    let m = i.useMemo(
        () =>
            (0, a.dI)({
                theme: null != n ? n : h.theme,
                primaryColor: null != s ? s : h.primaryColor,
                secondaryColor: null != o ? o : h.secondaryColor,
                gradient: null != l ? l : h.gradient,
                flags: null != c ? c : h.flags,
                contrast: null != u ? u : h.contrast,
                saturation: null != d ? d : h.saturation,
                density: null != f ? f : h.density,
                disableAdaptiveTheme: null != p ? p : h.disableAdaptiveTheme,
                reduceAdaptiveTheme: null != _ ? _ : h.reduceAdaptiveTheme,
            }),
        [
            n,
            h.theme,
            h.primaryColor,
            h.secondaryColor,
            h.gradient,
            h.flags,
            h.contrast,
            h.saturation,
            h.density,
            h.disableAdaptiveTheme,
            h.reduceAdaptiveTheme,
            s,
            o,
            l,
            c,
            u,
            d,
            f,
            p,
            _,
        ],
    );
    return (0, r.jsx)(a.Dx.Provider, {
        value: m,
        children: t,
    });
}
