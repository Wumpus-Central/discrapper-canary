(n.d(t, { w: () => s }), n(938796));
var i = n(477900),
    r = n(582128),
    a = n(38021);
function s(e) {
    let {
            children: t,
            theme: n,
            primaryColor: s,
            secondaryColor: l,
            gradient: o,
            flags: d,
            contrast: c,
            saturation: u,
            enabledExperiments: _,
            density: E,
            disableAdaptiveTheme: A,
            reduceAdaptiveTheme: h,
        } = e,
        f = r.useContext(a.Dx);
    a.PQ;
    let I = r.useMemo(
        () =>
            (0, a.dI)({
                theme: n ?? f.theme,
                primaryColor: s ?? f.primaryColor,
                secondaryColor: l ?? f.secondaryColor,
                gradient: o ?? f.gradient,
                flags: d ?? f.flags,
                contrast: c ?? f.contrast,
                saturation: u ?? f.saturation,
                enabledExperiments: _ ?? f.enabledExperiments,
                density: E ?? f.density,
                disableAdaptiveTheme: A ?? f.disableAdaptiveTheme,
                reduceAdaptiveTheme: h ?? f.reduceAdaptiveTheme,
            }),
        [
            n,
            f.theme,
            f.primaryColor,
            f.secondaryColor,
            f.gradient,
            f.flags,
            f.contrast,
            f.saturation,
            f.enabledExperiments,
            f.density,
            f.disableAdaptiveTheme,
            f.reduceAdaptiveTheme,
            s,
            l,
            o,
            d,
            c,
            u,
            _,
            E,
            A,
            h,
        ],
    );
    return (0, i.jsx)(a.Dx.Provider, { value: I, children: t });
}
