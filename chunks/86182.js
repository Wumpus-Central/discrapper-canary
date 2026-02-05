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
            density: _,
            disableAdaptiveTheme: f,
            reduceAdaptiveTheme: p,
        } = e,
        h = i.useContext(a.Dx);
    a.PQ;
    let m = i.useMemo(
        () =>
            (0, a.dI)({
                theme: n ?? h.theme,
                primaryColor: s ?? h.primaryColor,
                secondaryColor: o ?? h.secondaryColor,
                gradient: l ?? h.gradient,
                flags: u ?? h.flags,
                contrast: c ?? h.contrast,
                saturation: d ?? h.saturation,
                density: _ ?? h.density,
                disableAdaptiveTheme: f ?? h.disableAdaptiveTheme,
                reduceAdaptiveTheme: p ?? h.reduceAdaptiveTheme,
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
            u,
            c,
            d,
            _,
            f,
            p,
        ],
    );
    return (0, r.jsx)(a.Dx.Provider, { value: m, children: t });
}
