n.d(t, {
    cE: () => y,
    vP: () => b,
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
    h = n(740492),
    g = n(998502);
let E = i.createContext({
    lang: "",
    style: "",
    className: "",
    focused: !1,
});
function b() {
    let e = i.useContext(E);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function y(e) {
    let {
            rootClassName: t,
            lang: n,
            theme: a,
            density: b,
            focused: y,
            fontScale: O,
            fontScaleClass: v,
            mouseMode: S,
            keyboardModeEnabled: I,
            saturation: T,
            desaturateUserColors: C,
            useForcedColors: A,
            systemForcedColors: N,
            useReducedMotion: P,
            alwaysShowLinkDecorations: R,
            hardwareAccelerationEnabled: w,
            highContrastMode: D,
            isPopoutWindow: x,
            children: L,
        } = e,
        j = window.CSS.supports("selector(::-webkit-scrollbar)"),
        M = (0, l.e7)([d.Z], () => d.Z.zoom),
        k = x ? "" : "--custom-zoom: ".concat(M, ";"),
        U = (0, m.Z)("highlight_mana_buttons"),
        G = (0, m.Z)("highlight_mana_components"),
        Z = (0, m.Z)("highlight_void_toggleables"),
        F = (0, m.Z)("highlight_void_buttons"),
        B = (0, l.e7)([h.ZP], () => h.ZP.hdrDynamicRange),
        V = "font-size: "
            .concat(O, "%; --saturation-factor: ")
            .concat(T, "; dynamic-range-limit: ")
            .concat(B, "; ")
            .concat(k),
        H = o()(
            (0, f.Z)(),
            (0, c.QeD)(a),
            "density-".concat(b),
            v,
            {
                "low-saturation": T <= c.AEw,
                "keyboard-mode": I,
                "decorate-links": R,
                "no-webkit-scrollbar": !j,
                "has-webkit-scrollbar": j,
                "mouse-mode": S,
                "reduce-motion": P,
                "full-motion": !P,
                "is-mobile": s.tq,
                "app-focused": y,
                "desaturate-user-colors": C,
                "disable-forced-colors": !A && "active" === N,
                "enable-forced-colors": A,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !w,
                "visual-refresh-chat-input": !1,
                "mana-toggle-inputs": (0, _.A)("RootElementContextProvider"),
                "mana-text-inputs": (0, p.U)("RootElementContextProvider"),
                "highlight-mana-buttons": U,
                "highlight-mana-components": G,
                "highlight-void-toggleables": Z,
                "highlight-void-buttons": F,
                "high-contrast-mode": D,
            },
            t,
        ),
        Y = i.useMemo(
            () => ({
                lang: n,
                style: V,
                className: H,
                focused: y,
            }),
            [n, V, H, y],
        );
    return (
        (0, u.ZP)(() => {
            g.ZP.setTrafficLightPosition({
                x: 9,
                y: 9,
            });
        }),
        (0, r.jsx)(E.Provider, {
            value: Y,
            children: L,
        })
    );
}
