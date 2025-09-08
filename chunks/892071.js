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
    l = n(481060),
    c = n(597952),
    u = n(377089),
    d = n(877371),
    f = n(580747),
    _ = n(819439),
    p = n(998502);
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
        x = "font-size: ".concat(E, "%; --saturation-factor: ").concat(v, ";"),
        L = (0, f.Z)("highlight_mana_buttons"),
        j = (0, f.Z)("highlight_mana_components"),
        M = (0, f.Z)("highlight_void_toggleables"),
        k = (0, f.Z)("highlight_void_buttons"),
        U = o()(
            (0, c.Z)(),
            (0, l.QeD)(a),
            "density-".concat(m),
            b,
            {
                "low-saturation": v <= l.AEw,
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
                "mana-toggle-inputs": (0, d.A)("RootElementContextProvider"),
                "mana-text-inputs": (0, u.U)("RootElementContextProvider"),
                "highlight-mana-buttons": L,
                "highlight-mana-components": j,
                "highlight-void-toggleables": M,
                "highlight-void-buttons": k,
                "high-contrast-mode": R,
            },
            t,
        ),
        G = i.useMemo(
            () => ({
                lang: n,
                style: x,
                className: U,
                focused: g,
            }),
            [n, x, U, g],
        ),
        B = (0, _.$)({ location: "RootElementContextProvider" });
    return (
        i.useLayoutEffect(() => {
            if (P) return;
            let e = B
                ? {
                      x: 10,
                      y: 13,
                  }
                : {
                      x: 9,
                      y: 9,
                  };
            p.ZP.setTrafficLightPosition(e);
        }, [P, B]),
        (0, r.jsx)(h.Provider, {
            value: G,
            children: w,
        })
    );
}
