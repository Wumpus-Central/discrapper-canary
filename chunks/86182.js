n.d(t, { w: () => s }), n(938796);
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
        I = r.useContext(a.Dx);
    a.PQ;
    let f = r.useMemo(
        () =>
            (0, a.dI)({
                theme: n ?? I.theme,
                primaryColor: s ?? I.primaryColor,
                secondaryColor: l ?? I.secondaryColor,
                gradient: o ?? I.gradient,
                flags: d ?? I.flags,
                contrast: c ?? I.contrast,
                saturation: u ?? I.saturation,
                enabledExperiments: _ ?? I.enabledExperiments,
                density: E ?? I.density,
                disableAdaptiveTheme: A ?? I.disableAdaptiveTheme,
                reduceAdaptiveTheme: h ?? I.reduceAdaptiveTheme,
            }),
        [
            n,
            I.theme,
            I.primaryColor,
            I.secondaryColor,
            I.gradient,
            I.flags,
            I.contrast,
            I.saturation,
            I.enabledExperiments,
            I.density,
            I.disableAdaptiveTheme,
            I.reduceAdaptiveTheme,
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
    return (0, i.jsx)(a.Dx.Provider, { value: f, children: t });
}
