n.d(t, { RQ: () => p, YW: () => x, pA: () => h, tM: () => m });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    a = n(461797),
    r = n(287809),
    o = n(158045),
    d = n(23722);
let c = { id: "default" },
    u = l.createContext(null),
    g = l.createContext(null);
function m(e) {
    let { children: t } = e,
        [n, m] = l.useState(c),
        [f, x] = l.useState(null),
        [h] = l.useState(a.B$),
        p = l.useRef(h),
        I = (0, d.A)((e) => {
            m(e);
        }),
        E = l.useCallback(() => {
            m(c);
        }, []),
        A = l.useCallback(() => p.current, []),
        j = (0, s.bG)([r.default], () => o.Ay.canUsePremiumProfileCustomization(r.default.getCurrentUser())),
        v = j ? c : n,
        C = !j && f?.id === "premiumTryItOut",
        b = l.useCallback(() => {
            x(v);
        }, [v]),
        k = l.useCallback((e) => {
            p.current = e;
        }, []),
        S = l.useMemo(
            () => ({
                selectedPanel: v,
                readyPanel: f,
                handlePanelTransitionComplete: b,
                navigate: I,
                goBack: E,
                getCurrentPreset: A,
                cachePreset: k,
            }),
            [v, f, b, I, E, A, k],
        );
    return (0, i.jsx)(g.Provider, { value: C, children: (0, i.jsx)(u.Provider, { value: S, children: t }) });
}
function f() {
    let e = l.useContext(u);
    if (null == e)
        throw Error("useNavigationContext must be used within UserProfileModalV2EditingPanelNavigationProvider");
    return e;
}
function x() {
    let e = l.useContext(g);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function h() {
    let { selectedPanel: e, readyPanel: t, handlePanelTransitionComplete: n, navigate: i, goBack: l } = f();
    return {
        selectedPanel: e,
        readyPanel: t,
        initialTarget: t?.initialTarget ?? null,
        handlePanelTransitionComplete: n,
        navigate: i,
        goBack: l,
    };
}
function p() {
    let { getCurrentPreset: e, cachePreset: t } = f(),
        [n, i] = l.useState(e);
    return {
        preset: n,
        setPreset: l.useCallback(
            (e) => {
                (t(e), i(e));
            },
            [t],
        ),
    };
}
