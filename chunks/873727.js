n.d(t, { Lq: () => c, U0: () => h, _n: () => A, mB: () => m, x4: () => u });
var i = n(775602),
    r = n(363195),
    l = n(885386),
    s = n(157146);
let a = Object.freeze({
        baseTheme: "dark",
        customTheme: null,
        uiDensity: "default",
        messageDisplayCompact: !1,
        fontScale: 100,
        reducedMotion: !1,
        highContrast: !1,
        forcedColors: !1,
        underlineLinks: !1,
        formFactor: "desktop",
    }),
    o = 221552 == n.j ? ["custom-theme-background", "custom-client-theme"] : null;
function u(e) {
    switch (e) {
        case "light":
        case "midnight":
        case "darker":
            return e;
        default:
            return "dark";
    }
}
function c() {
    if ("u" < typeof document || "u" < typeof window) return null;
    let e = document.documentElement,
        t = o.filter((t) => e.classList.contains(t));
    if (0 === t.length) return null;
    let n = window.getComputedStyle(e),
        i = {};
    for (let e = 0; e < n.length; e++) {
        let t = n.item(e);
        t.startsWith("--custom-") && (i[t] = n.getPropertyValue(t).trim());
    }
    let r = n.getPropertyValue("--background-gradient-chat").trim();
    return ("" !== r && (i["--background-gradient-chat"] = r), { classNames: t, variables: i });
}
function d() {
    let e =
        "u" > typeof window && "function" == typeof window.matchMedia
            ? window.matchMedia(s.Un).matches
                ? "cozy"
                : "compact"
            : s.fS;
    return (0, s.dV)(l.Xi.getSetting(), e);
}
function h() {
    let e = i.Ay.fontScale;
    return Number.isFinite(e) ? Math.round(100 * e) / 100 : a.fontScale;
}
function m(e) {
    return {
        baseTheme: u(r.A.theme),
        customTheme: c(),
        uiDensity: d(),
        messageDisplayCompact: l.hH.getSetting(),
        fontScale: h(),
        reducedMotion: e,
        highContrast: i.Ay.isHighContrastModeEnabled,
        forcedColors: i.Ay.useForcedColors,
        underlineLinks: i.Ay.alwaysShowLinkDecorations,
        formFactor: "desktop",
    };
}
function A() {
    return {
        theme: u(r.A.theme),
        ui_density: d(),
        message_display_compact: String(l.hH.getSetting()),
        font_scale: String(h()),
        reduced_motion: String(i.Ay.useReducedMotion),
        high_contrast: String(i.Ay.isHighContrastModeEnabled),
        forced_colors: String(i.Ay.useForcedColors),
        underline_links: String(i.Ay.alwaysShowLinkDecorations),
    };
}
