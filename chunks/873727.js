n.d(t, { Lq: () => c, U0: () => _, _n: () => A, mB: () => E, x4: () => d });
var i = n(775602),
    r = n(363195),
    a = n(885386),
    s = n(157146);
let l = Object.freeze({
        baseTheme: "dark",
        customTheme: null,
        uiDensity: "default",
        messageDisplayCompact: !1,
        fontScale: 100,
        reducedMotion: !1,
        highContrast: !1,
        forcedColors: !1,
        underlineLinks: !1,
    }),
    o = ["custom-theme-background", "custom-client-theme"];
function d(e) {
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
    return { classNames: t, variables: i };
}
function u() {
    let e =
        "u" > typeof window && "function" == typeof window.matchMedia
            ? window.matchMedia(s.Un).matches
                ? "cozy"
                : "compact"
            : s.fS;
    return (0, s.dV)(a.Xi.getSetting(), e);
}
function _() {
    let e = i.Ay.fontScale;
    return Number.isFinite(e) ? Math.round(100 * e) / 100 : l.fontScale;
}
function E(e) {
    return {
        baseTheme: d(r.A.theme),
        customTheme: c(),
        uiDensity: u(),
        messageDisplayCompact: a.hH.getSetting(),
        fontScale: _(),
        reducedMotion: e,
        highContrast: i.Ay.isHighContrastModeEnabled,
        forcedColors: i.Ay.useForcedColors,
        underlineLinks: i.Ay.alwaysShowLinkDecorations,
    };
}
function A() {
    return {
        theme: d(r.A.theme),
        ui_density: u(),
        message_display_compact: String(a.hH.getSetting()),
        font_scale: String(_()),
        reduced_motion: String(i.Ay.useReducedMotion),
        high_contrast: String(i.Ay.isHighContrastModeEnabled),
        forced_colors: String(i.Ay.useForcedColors),
        underline_links: String(i.Ay.alwaysShowLinkDecorations),
    };
}
