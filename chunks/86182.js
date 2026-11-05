n(938796);
var i = n(477900),
    r = n(582128),
    a = n(38021);
n.d(
    t,
    {},
    {
        w: function (e) {
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
                    reduceAdaptiveTheme: f,
                } = e,
                h = r.useContext(a.Dx);
            a.PQ;
            let I = r.useMemo(
                () =>
                    (0, a.dI)({
                        theme: n ?? h.theme,
                        primaryColor: s ?? h.primaryColor,
                        secondaryColor: l ?? h.secondaryColor,
                        gradient: o ?? h.gradient,
                        flags: d ?? h.flags,
                        contrast: c ?? h.contrast,
                        saturation: u ?? h.saturation,
                        enabledExperiments: _ ?? h.enabledExperiments,
                        density: E ?? h.density,
                        disableAdaptiveTheme: A ?? h.disableAdaptiveTheme,
                        reduceAdaptiveTheme: f ?? h.reduceAdaptiveTheme,
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
                    h.enabledExperiments,
                    h.density,
                    h.disableAdaptiveTheme,
                    h.reduceAdaptiveTheme,
                    s,
                    l,
                    o,
                    d,
                    c,
                    u,
                    _,
                    E,
                    A,
                    f,
                ],
            );
            return (0, i.jsx)(a.Dx.Provider, { value: I, children: t });
        },
    },
);
