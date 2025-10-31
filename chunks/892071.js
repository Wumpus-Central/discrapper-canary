n.d(t, {
    cE: () => g,
    vP: () => m,
}),
    n(415506);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(873546),
    l = n(442837),
    c = n(481060),
    u = n(607070),
    d = n(597952),
    f = n(377089),
    _ = n(877371),
    p = n(580747);
let h = i.createContext({
    lang: "",
    style: "",
    className: "",
    focused: !1,
});
function m() {
    let e = i.useContext(h);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function g(e) {
    let {
            rootClassName: t,
            lang: n,
            theme: a,
            density: m,
            focused: g,
            fontScale: E,
            fontScaleClass: b,
            mouseMode: y,
            keyboardModeEnabled: O,
            saturation: v,
            desaturateUserColors: I,
            useForcedColors: T,
            systemForcedColors: S,
            useReducedMotion: A,
            alwaysShowLinkDecorations: C,
            hardwareAccelerationEnabled: N,
            highContrastMode: R,
            isPopoutWindow: P,
            children: w,
        } = e,
        D = window.CSS.supports("selector(::-webkit-scrollbar)"),
        x = (0, l.e7)([u.Z], () => u.Z.zoom),
        L = P ? "" : "--custom-zoom: ".concat(x, ";"),
        M = "font-size: ".concat(E, "%; --saturation-factor: ").concat(v, "; ").concat(L),
        j = (0, p.Z)("highlight_mana_buttons"),
        k = (0, p.Z)("highlight_mana_components"),
        U = (0, p.Z)("highlight_void_toggleables"),
        G = (0, p.Z)("highlight_void_buttons"),
        B = o()(
            (0, d.Z)(),
            (0, c.QeD)(a),
            "density-".concat(m),
            b,
            {
                "low-saturation": v <= c.AEw,
                "keyboard-mode": O,
                "decorate-links": C,
                "no-webkit-scrollbar": !D,
                "has-webkit-scrollbar": D,
                "mouse-mode": y,
                "reduce-motion": A,
                "full-motion": !A,
                "is-mobile": s.tq,
                "app-focused": g,
                "desaturate-user-colors": I,
                "disable-forced-colors": !T && "active" === S,
                "enable-forced-colors": T,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !N,
                "visual-refresh-chat-input": !1,
                "mana-toggle-inputs": (0, _.A)("RootElementContextProvider"),
                "mana-text-inputs": (0, f.U)("RootElementContextProvider"),
                "highlight-mana-buttons": j,
                "highlight-mana-components": k,
                "highlight-void-toggleables": U,
                "highlight-void-buttons": G,
                "high-contrast-mode": R,
            },
            t,
        ),
        Z = i.useMemo(
            () => ({
                lang: n,
                style: M,
                className: B,
                focused: g,
            }),
            [n, M, B, g],
        );
    return (0, r.jsx)(h.Provider, {
        value: Z,
        children: w,
    });
}
