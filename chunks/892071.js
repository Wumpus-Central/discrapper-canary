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
    p = n(377089),
    _ = n(877371),
    m = n(580747),
    h = n(998502);
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
            keyboardModeEnabled: S,
            saturation: I,
            desaturateUserColors: T,
            useForcedColors: C,
            systemForcedColors: A,
            useReducedMotion: N,
            alwaysShowLinkDecorations: P,
            hardwareAccelerationEnabled: R,
            highContrastMode: w,
            isPopoutWindow: D,
            children: x,
        } = e,
        L = window.CSS.supports("selector(::-webkit-scrollbar)"),
        j = (0, l.e7)([d.Z], () => d.Z.zoom),
        M = D ? "" : "--custom-zoom: ".concat(j, ";"),
        k = "font-size: ".concat(y, "%; --saturation-factor: ").concat(I, "; ").concat(M),
        U = (0, m.Z)("highlight_mana_buttons"),
        G = (0, m.Z)("highlight_mana_components"),
        Z = (0, m.Z)("highlight_void_toggleables"),
        F = (0, m.Z)("highlight_void_buttons"),
        B = o()(
            (0, f.Z)(),
            (0, c.QeD)(a),
            "density-".concat(E),
            O,
            {
                "low-saturation": I <= c.AEw,
                "keyboard-mode": S,
                "decorate-links": P,
                "no-webkit-scrollbar": !L,
                "has-webkit-scrollbar": L,
                "mouse-mode": v,
                "reduce-motion": N,
                "full-motion": !N,
                "is-mobile": s.tq,
                "app-focused": b,
                "desaturate-user-colors": T,
                "disable-forced-colors": !C && "active" === A,
                "enable-forced-colors": C,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !R,
                "visual-refresh-chat-input": !1,
                "mana-toggle-inputs": (0, _.A)("RootElementContextProvider"),
                "mana-text-inputs": (0, p.U)("RootElementContextProvider"),
                "highlight-mana-buttons": U,
                "highlight-mana-components": G,
                "highlight-void-toggleables": Z,
                "highlight-void-buttons": F,
                "high-contrast-mode": w,
            },
            t,
        ),
        V = i.useMemo(
            () => ({
                lang: n,
                style: k,
                className: B,
                focused: b,
            }),
            [n, k, B, b],
        );
    return (
        (0, u.ZP)(() => {
            h.ZP.setTrafficLightPosition({
                x: 9,
                y: 9,
            });
        }),
        (0, r.jsx)(g.Provider, {
            value: V,
            children: x,
        })
    );
}
