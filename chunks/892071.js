n.d(t, {
    cE: () => m,
    vP: () => h,
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
    d = n(580747),
    f = n(819439),
    _ = n(998502);
let p = i.createContext({
    lang: "",
    style: "",
    className: "",
});
function h() {
    let e = i.useContext(p);
    if (void 0 === e) throw Error("useRootElementContext must be used within a RootElementContextProvider");
    return e;
}
function m(e) {
    let {
            rootClassName: t,
            lang: n,
            theme: a,
            density: h,
            focused: m,
            fontScale: g,
            fontScaleClass: E,
            mouseMode: b,
            keyboardModeEnabled: y,
            saturation: O,
            desaturateUserColors: v,
            useForcedColors: I,
            systemForcedColors: T,
            useReducedMotion: S,
            alwaysShowLinkDecorations: A,
            hardwareAccelerationEnabled: C,
            highContrastMode: N,
            isPopoutWindow: R,
            children: P,
        } = e,
        w = window.CSS.supports("selector(::-webkit-scrollbar)"),
        D = "font-size: ".concat(g, "%; --saturation-factor: ").concat(O, ";"),
        x = (0, d.Z)("highlight_mana_buttons"),
        L = (0, d.Z)("highlight_mana_components"),
        j = (0, d.Z)("highlight_void_toggleables"),
        M = (0, d.Z)("highlight_void_buttons"),
        k = o()(
            (0, c.Z)(),
            (0, l.QeD)(a),
            "density-".concat(h),
            E,
            {
                "low-saturation": O <= l.AEw,
                "keyboard-mode": y,
                "decorate-links": A,
                "no-webkit-scrollbar": !w,
                "has-webkit-scrollbar": w,
                "mouse-mode": b,
                "reduce-motion": S,
                "full-motion": !S,
                "is-mobile": s.tq,
                "app-focused": m,
                "desaturate-user-colors": v,
                "disable-forced-colors": !I && "active" === T,
                "enable-forced-colors": I,
                "visual-refresh": !0,
                "hardware-acceleration-disabled": !C,
                "visual-refresh-chat-input": !1,
                "mana-text-inputs": (0, u.U)("RootElementContextProvider"),
                "highlight-mana-buttons": x,
                "highlight-mana-components": L,
                "highlight-void-toggleables": j,
                "highlight-void-buttons": M,
                "high-contrast-mode": N,
            },
            t,
        ),
        U = i.useMemo(
            () => ({
                lang: n,
                style: D,
                className: k,
            }),
            [n, D, k],
        ),
        G = (0, f.$)({ location: "RootElementContextProvider" });
    return (
        i.useLayoutEffect(() => {
            if (R) return;
            let e = G
                ? {
                      x: 10,
                      y: 16,
                  }
                : {
                      x: 10,
                      y: 10,
                  };
            _.ZP.setTrafficLightPosition(e);
        }, [R, G]),
        (0, r.jsx)(p.Provider, {
            value: U,
            children: P,
        })
    );
}
