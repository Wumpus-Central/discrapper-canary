i.d(t, { RQ: () => I, YW: () => f, pA: () => h, tM: () => m });
var n = i(477900),
    l = i(582128),
    s = i(17928),
    a = i(461797),
    r = i(287809),
    o = i(158045),
    d = i(23722);
let c = { id: "default" },
    u = l.createContext(null),
    g = l.createContext(null);
function m(e) {
    let { children: t } = e,
        [i, m] = l.useState(c),
        [x, f] = l.useState(null),
        [h] = l.useState(a.B$),
        I = l.useRef(h),
        p = (0, d.A)((e) => {
            m(e);
        }),
        A = l.useCallback(() => {
            m(c);
        }, []),
        j = l.useCallback(() => I.current, []),
        E = (0, s.bG)([r.default], () => o.Ay.canUsePremiumProfileCustomization(r.default.getCurrentUser())),
        v = E ? c : i,
        C = !E && x?.id === "premiumTryItOut",
        S = l.useCallback(() => {
            f(v);
        }, [v]),
        b = l.useCallback((e) => {
            I.current = e;
        }, []),
        k = l.useMemo(
            () => ({
                selectedPanel: v,
                readyPanel: x,
                handlePanelTransitionComplete: S,
                navigate: p,
                goBack: A,
                getCurrentPreset: j,
                cachePreset: b,
            }),
            [v, x, S, p, A, j, b],
        );
    return (0, n.jsx)(g.Provider, { value: C, children: (0, n.jsx)(u.Provider, { value: k, children: t }) });
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
function I() {
    let { getCurrentPreset: e, cachePreset: t } = x(),
        [i, n] = l.useState(e);
    return {
        preset: i,
        setPreset: l.useCallback(
            (e) => {
                (t(e), n(e));
            },
            [t],
        ),
    };
}
