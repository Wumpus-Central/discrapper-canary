i.d(t, { RQ: () => h, YW: () => x, pA: () => f, tM: () => g });
var n = i(477900),
    l = i(582128),
    s = i(17928),
    r = i(461797),
    a = i(287809),
    o = i(158045),
    d = i(23722);
let u = l.createContext(null),
    c = l.createContext(null);
function g(e) {
    let { children: t } = e,
        [i, g] = l.useState("default"),
        [m, x] = l.useState(null),
        [f] = l.useState(r.B$),
        h = l.useRef(f),
        p = (0, d.A)(() => {
            g("premiumTryItOut");
        }),
        I = l.useCallback(() => {
            g("default");
        }, []),
        j = l.useCallback(() => h.current, []),
        A = (0, s.bG)([a.default], () => o.Ay.canUsePremiumProfileCustomization(a.default.getCurrentUser())),
        v = A ? "default" : i,
        E = !A && "premiumTryItOut" === m,
        S = l.useCallback(() => {
            x(v);
        }, [v]),
        C = l.useCallback((e) => {
            h.current = e;
        }, []),
        b = l.useMemo(
            () => ({
                selectedPanel: v,
                readyPanel: m,
                handlePanelTransitionComplete: S,
                goToPremiumTryItOut: p,
                goBack: I,
                getCurrentPreset: j,
                cachePreset: C,
            }),
            [v, m, S, p, I, j, C],
        );
    return (0, n.jsx)(c.Provider, { value: E, children: (0, n.jsx)(u.Provider, { value: b, children: t }) });
}
function m() {
    let e = l.useContext(u);
    if (null == e)
        throw Error("useNavigationContext must be used within UserProfileModalV2EditingPanelNavigationProvider");
    return e;
}
function x() {
    let e = l.useContext(c);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function f() {
    let { selectedPanel: e, readyPanel: t, handlePanelTransitionComplete: i, goToPremiumTryItOut: n, goBack: l } = m();
    return { selectedPanel: e, readyPanel: t, handlePanelTransitionComplete: i, goToPremiumTryItOut: n, goBack: l };
}
function h() {
    let { getCurrentPreset: e, cachePreset: t } = m(),
        [i, n] = l.useState(e);
    return {
        preset: i,
        setPreset: l.useCallback(
            (e) => {
                t(e), n(e);
            },
            [t],
        ),
    };
}
