n.d(t, { RQ: () => p, YW: () => f, pA: () => h, tM: () => m });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    r = n(461797),
    a = n(287809),
    o = n(158045),
    d = n(23722);
let c = { id: "default" },
    u = l.createContext(null),
    g = l.createContext(null);
function m(e) {
    let { children: t } = e,
        [n, m] = l.useState(c),
        [x, f] = l.useState(null),
        [h] = l.useState(r.B$),
        p = l.useRef(h),
        j = (0, d.A)((e) => {
            m(e);
        }),
        I = l.useCallback(() => {
            m(c);
        }, []),
        A = l.useCallback(() => p.current, []),
        v = (0, s.bG)([a.default], () => o.Ay.canUsePremiumProfileCustomization(a.default.getCurrentUser())),
        E = v ? c : n,
        C = !v && x?.id === "premiumTryItOut",
        S = l.useCallback(() => {
            f(E);
        }, [E]),
        b = l.useCallback((e) => {
            p.current = e;
        }, []),
        T = l.useMemo(
            () => ({
                selectedPanel: E,
                readyPanel: x,
                handlePanelTransitionComplete: S,
                navigate: j,
                goBack: I,
                getCurrentPreset: A,
                cachePreset: b,
            }),
            [E, x, S, j, I, A, b],
        );
    return (0, i.jsx)(g.Provider, { value: C, children: (0, i.jsx)(u.Provider, { value: T, children: t }) });
}
function x() {
    let e = l.useContext(u);
    if (null == e)
        throw Error("useNavigationContext must be used within UserProfileModalV2EditingPanelNavigationProvider");
    return e;
}
function f() {
    let e = l.useContext(g);
    if (null == e)
        throw Error(
            "useIsUserProfileModalV2PremiumTryItOut must be used within UserProfileModalV2EditingPanelNavigationProvider",
        );
    return e;
}
function h() {
    let { selectedPanel: e, readyPanel: t, handlePanelTransitionComplete: n, navigate: i, goBack: l } = x();
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
    let { getCurrentPreset: e, cachePreset: t } = x(),
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
