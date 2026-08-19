i.d(t, { RQ: () => p, YW: () => f, pA: () => h, tM: () => m });
var n = i(477900),
    l = i(582128),
    s = i(17928),
    r = i(461797),
    a = i(287809),
    o = i(158045),
    d = i(23722);
let c = { id: "default" },
    u = l.createContext(null),
    g = l.createContext(null);
function m(e) {
    let { children: t } = e,
        [i, m] = l.useState(c),
        [x, f] = l.useState(null),
        [h] = l.useState(r.B$),
        p = l.useRef(h),
        I = (0, d.A)((e) => {
            m(e);
        }),
        j = l.useCallback(() => {
            m(c);
        }, []),
        A = l.useCallback(() => p.current, []),
        v = (0, s.bG)([a.default], () => o.Ay.canUsePremiumProfileCustomization(a.default.getCurrentUser())),
        E = v ? c : i,
        S = !v && x?.id === "premiumTryItOut",
        C = l.useCallback(() => {
            f(E);
        }, [E]),
        T = l.useCallback((e) => {
            p.current = e;
        }, []),
        b = l.useMemo(
            () => ({
                selectedPanel: E,
                readyPanel: x,
                handlePanelTransitionComplete: C,
                navigate: I,
                goBack: j,
                getCurrentPreset: A,
                cachePreset: T,
            }),
            [E, x, C, I, j, A, T],
        );
    return (0, n.jsx)(g.Provider, { value: S, children: (0, n.jsx)(u.Provider, { value: b, children: t }) });
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
    let { selectedPanel: e, readyPanel: t, handlePanelTransitionComplete: i, navigate: n, goBack: l } = x();
    return {
        selectedPanel: e,
        readyPanel: t,
        initialTarget: t?.initialTarget ?? null,
        handlePanelTransitionComplete: i,
        navigate: n,
        goBack: l,
    };
}
function p() {
    let { getCurrentPreset: e, cachePreset: t } = x(),
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
