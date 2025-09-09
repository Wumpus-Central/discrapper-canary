n.d(t, {
    cE: () => b,
    vP: () => E,
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
    p = n(580747),
    h = n(819439),
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
            highContrastMode: w,
            isPopoutWindow: D,
            children: x,
        } = e,
        L = window.CSS.supports("selector(::-webkit-scrollbar)"),
        j = (0, l.e7)([u.Z], () => u.Z.zoom),
        M = D ? "" : "--custom-zoom: ".concat(j, ";"),
        k = "font-size: ".concat(y, "%; --saturation-factor: ").concat(T, "; ").concat(M),
        U = (0, p.Z)("highlight_mana_buttons"),
        G = (0, p.Z)("highlight_mana_components"),
        B = (0, p.Z)("highlight_void_toggleables"),
        Z = (0, p.Z)("highlight_void_buttons"),
        F = o()(
            (0, d.Z)(),
            (0, c.QeD)(a),
            "density-".concat(E),
            O,
            {
                "low-saturation": T <= c.AEw,
                "keyboard-mode": I,
                "decorate-links": R,
                "no-webkit-scrollbar": !L,
                "has-webkit-scrollbar": L,
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
                "mana-toggle-inputs": (0, _.A)("RootElementContextProvider"),
                "mana-text-inputs": (0, f.U)("RootElementContextProvider"),
                "highlight-mana-buttons": U,
                "highlight-mana-components": G,
                "highlight-void-toggleables": B,
                "highlight-void-buttons": Z,
                "high-contrast-mode": w,
            },
            t,
        ),
        V = i.useMemo(
            () => ({
                lang: n,
                style: k,
                className: F,
                focused: b,
            }),
            [n, k, F, b],
        ),
        H = (0, h.$)({ location: "RootElementContextProvider" });
    return (
        i.useLayoutEffect(() => {
            if (D) return;
            let e = H
                ? {
                      x: 10,
                      y: 13,
                  }
                : {
                      x: 9,
                      y: 9,
                  };
            m.ZP.setTrafficLightPosition(e);
        }, [D, H]),
        (0, r.jsx)(g.Provider, {
            value: V,
            children: x,
        })
    );
}
