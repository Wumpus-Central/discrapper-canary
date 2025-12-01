n.d(t, { z: () => o }), n(997841), n(415506);
var r = n(54381),
    i = n(473749),
    a = n(70007);
function o(e) {
    let {
            children: t,
            theme: n,
            primaryColor: o,
            secondaryColor: s,
            gradient: l,
            flags: c,
            contrast: u,
            saturation: d,
            density: f,
            disableAdaptiveTheme: p,
            reduceAdaptiveTheme: _,
        } = e,
        m = i.useContext(a.Ni);
    a.qF;
    let h = i.useMemo(
        () =>
            (0, a.TT)({
                theme: null != n ? n : m.theme,
                primaryColor: null != o ? o : m.primaryColor,
                secondaryColor: null != s ? s : m.secondaryColor,
                gradient: null != l ? l : m.gradient,
                flags: null != c ? c : m.flags,
                contrast: null != u ? u : m.contrast,
                saturation: null != d ? d : m.saturation,
                density: null != f ? f : m.density,
                disableAdaptiveTheme: null != p ? p : m.disableAdaptiveTheme,
                reduceAdaptiveTheme: null != _ ? _ : m.reduceAdaptiveTheme,
            }),
        [
            n,
            m.theme,
            m.primaryColor,
            m.secondaryColor,
            m.gradient,
            m.flags,
            m.contrast,
            m.saturation,
            m.density,
            m.disableAdaptiveTheme,
            m.reduceAdaptiveTheme,
            o,
            s,
            l,
            c,
            u,
            d,
            f,
            p,
            _,
        ],
    );
    return (0, r.jsx)(a.Ni.Provider, {
        value: h,
        children: t,
    });
}
