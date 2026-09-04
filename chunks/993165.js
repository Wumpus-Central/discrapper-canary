n.d(t, { RQ: () => I, YW: () => x, pA: () => h, tM: () => m });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    r = n(461797),
    a = n(287809),
    o = n(158045),
    d = n(23722);
let u = { id: "default" },
    c = l.createContext(null),
    g = l.createContext(null);
function m(e) {
    let { children: t } = e,
        [n, m] = l.useState(u),
        [f, x] = l.useState(null),
        [h] = l.useState(r.B$),
        I = l.useRef(h),
        p = (0, d.A)((e) => {
            m(e);
        }),
        A = l.useCallback(() => {
            m(u);
        }, []),
        j = l.useCallback(() => I.current, []),
        E = (0, s.bG)([a.default], () => o.Ay.canUsePremiumProfileCustomization(a.default.getCurrentUser())),
        v = E ? u : n,
        S = !E && f?.id === "premiumTryItOut",
        C = l.useCallback(() => {
            x(v);
        }, [v]),
        b = l.useCallback((e) => {
            I.current = e;
        }, []),
        k = l.useMemo(
            () => ({
                selectedPanel: v,
                readyPanel: f,
                handlePanelTransitionComplete: C,
                navigate: p,
                goBack: A,
                getCurrentPreset: j,
                cachePreset: b,
            }),
            [v, f, C, p, A, j, b],
        );
    return (0, i.jsx)(g.Provider, { value: S, children: (0, i.jsx)(c.Provider, { value: k, children: t }) });
}
function f() {
    let e = l.useContext(c);
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
function I() {
    let { getCurrentPreset: e, cachePreset: t } = f(),
        [n, i] = l.useState(e);
    return {
        preset: n,
        setPreset: l.useCallback(
            (e) => {
                t(e), i(e);
            },
            [t],
        ),
    };
}
