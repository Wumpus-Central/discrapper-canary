n.d(t, {
    cE: () => b,
    vP: () => E,
}),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(442837),
    c = n(481060),
    u = n(493773),
    d = n(607070),
    f = n(597952),
    _ = n(377089),
    p = n(877371),
    h = n(580747),
    m = n(998502);
let g = i.createContext({
    lang: "",
    style: "",
    className: "",
    focused: !1,
});
function E() {
    let e = i.useContext(g);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function b(e) {
    let {
            rootClassName: t,
            lang: n,
            theme: a,
            density: E,
            focused: b,
            fontScale: y,
            fontScaleClass: O,
            mouseMode: v,
            keyboardModeEnabled: I,
            saturation: T,
            desaturateUserColors: S,
            useForcedColors: A,
            systemForcedColors: C,
            useReducedMotion: N,
            alwaysShowLinkDecorations: R,
            hardwareAccelerationEnabled: P,
            highContrastMode: D,
            isPopoutWindow: w,
            children: L,
        } = e,
        x = window.CSS.supports("selector(::-webkit-scrollbar)"),
        M = (0, l.e7)([d.Z], () => d.Z.zoom),
        k = w ? "" : "--custom-zoom: ".concat(M, ";"),
        j = "font-size: ".concat(y, "%; --saturation-factor: ").concat(T, "; ").concat(k),
        U = (0, h.Z)("highlight_mana_buttons"),
        G = (0, h.Z)("highlight_mana_components"),
        B = (0, h.Z)("highlight_void_toggleables"),
        Z = (0, h.Z)("highlight_void_buttons"),
        F = o()(
            (0, f.Z)(),
            (0, c.QeD)(a),
            "density-".concat(E),
            O,
            {
                "low-saturation": T <= c.AEw,
                "keyboard-mode": I,
                "decorate-links": R,
                "no-webkit-scrollbar": !x,
                "has-webkit-scrollbar": x,
                "mouse-mode": v,
                "reduce-motion": N,
                "full-motion": !N,
                "is-mobile": s.tq,
                "app-focused": b,
                "desaturate-user-colors": S,
                "disable-forced-colors": !A && "active" === C,
                "enable-forced-colors": A,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !P,
                "visual-refresh-chat-input": !1,
                "mana-toggle-inputs": (0, p.A)("RootElementContextProvider"),
                "mana-text-inputs": (0, _.U)("RootElementContextProvider"),
                "highlight-mana-buttons": U,
                "highlight-mana-components": G,
                "highlight-void-toggleables": B,
                "highlight-void-buttons": Z,
                "high-contrast-mode": D,
            },
            t,
        ),
        V = i.useMemo(
            () => ({
                lang: n,
                style: j,
                className: F,
                focused: b,
            }),
            [n, j, F, b],
        );
    return (
        (0, u.ZP)(() => {
            m.ZP.setTrafficLightPosition({
                x: 9,
                y: 9,
            });
        }),
        (0, r.jsx)(g.Provider, {
            value: V,
            children: L,
        })
    );
}
