"use strict";
n.d(t, { w: () => s }), n(938796);
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
            flags: u,
            contrast: c,
            saturation: d,
            enabledExperiments: _,
            density: f,
            disableAdaptiveTheme: h,
            reduceAdaptiveTheme: p,
        } = e,
        g = i.useContext(a.Dx);
    a.PQ;
    let E = i.useMemo(
        () =>
            (0, a.dI)({
                theme: n ?? g.theme,
                primaryColor: s ?? g.primaryColor,
                secondaryColor: o ?? g.secondaryColor,
                gradient: l ?? g.gradient,
                flags: u ?? g.flags,
                contrast: c ?? g.contrast,
                saturation: d ?? g.saturation,
                enabledExperiments: _ ?? g.enabledExperiments,
                density: f ?? g.density,
                disableAdaptiveTheme: h ?? g.disableAdaptiveTheme,
                reduceAdaptiveTheme: p ?? g.reduceAdaptiveTheme,
            }),
        [
            n,
            g.theme,
            g.primaryColor,
            g.secondaryColor,
            g.gradient,
            g.flags,
            g.contrast,
            g.saturation,
            g.enabledExperiments,
            g.density,
            g.disableAdaptiveTheme,
            g.reduceAdaptiveTheme,
            s,
            o,
            l,
            u,
            c,
            d,
            _,
            f,
            h,
            p,
        ],
    );
    return (0, r.jsx)(a.Dx.Provider, { value: E, children: t });
}
