n.d(t, { RQ: () => p, YW: () => f, pA: () => h, tM: () => m });
var i = n(477900),
    l = n(582128),
    s = n(17928),
    r = n(461797),
    a = n(287809),
    o = n(158045),
    c = n(23722);
let d = { id: "default" },
    u = l.createContext(null),
    g = l.createContext(null);
function m(e) {
    let { children: t } = e,
        [n, m] = l.useState(d),
        [x, f] = l.useState(null),
        [h] = l.useState(r.B$),
        p = l.useRef(h),
        I = (0, c.A)((e) => {
            m(e);
        }),
        j = l.useCallback(() => {
            m(d);
        }, []),
        A = l.useCallback(() => p.current, []),
        E = (0, s.bG)([a.default], () => o.Ay.canUsePremiumProfileCustomization(a.default.getCurrentUser())),
        v = E ? d : n,
        C = !E && x?.id === "premiumTryItOut",
        S = l.useCallback(() => {
            f(v);
        }, [v]),
        b = l.useCallback((e) => {
            p.current = e;
        }, []),
        T = l.useMemo(
            () => ({
                selectedPanel: v,
                readyPanel: x,
                handlePanelTransitionComplete: S,
                navigate: I,
                goBack: j,
                getCurrentPreset: A,
                cachePreset: b,
            }),
            [v, x, S, I, j, A, b],
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
