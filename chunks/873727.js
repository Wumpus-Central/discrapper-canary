var i = n(775602),
    r = n(413599),
    l = n(253932),
    s = n(351906),
    a = n(157146);
let o = Object.freeze({
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
        hidePersonalInformation: !1,
    }),
    u = 221552 == n.j ? ["custom-theme-background", "custom-client-theme"] : null;
function c(e) {
    switch (e) {
        case "light":
        case "midnight":
        case "darker":
            return e;
        default:
            return "dark";
    }
}
function d() {
    if ("u" < typeof document || "u" < typeof window) return null;
    let e = document.documentElement,
        t = u.filter((t) => e.classList.contains(t));
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
function m() {
    let e =
        "u" > typeof window && "function" == typeof window.matchMedia
            ? window.matchMedia(a.U).matches
                ? "cozy"
                : "compact"
            : "cozy";
    return (0, a.d)(l.Xi.getSetting(), e);
}
function h() {
    let e = i.Ay.fontScale;
    return Number.isFinite(e) ? Math.round(100 * e) / 100 : o.fontScale;
}
n.d(
    t,
    {},
    {
        Lq: d,
        U0: h,
        _n: function () {
            return {
                theme: c(r.A.theme),
                ui_density: m(),
                message_display_compact: String(l.hH.getSetting()),
                font_scale: String(h()),
                reduced_motion: String(i.Ay.useReducedMotion),
                high_contrast: String(i.Ay.isHighContrastModeEnabled),
                forced_colors: String(i.Ay.useForcedColors),
                underline_links: String(i.Ay.alwaysShowLinkDecorations),
                hide_personal_information: String(s.A.hidePersonalInformation),
            };
        },
        mB: function (e) {
            return {
                baseTheme: c(r.A.theme),
                customTheme: d(),
                uiDensity: m(),
                messageDisplayCompact: l.hH.getSetting(),
                fontScale: h(),
                reducedMotion: e,
                highContrast: i.Ay.isHighContrastModeEnabled,
                forcedColors: i.Ay.useForcedColors,
                underlineLinks: i.Ay.alwaysShowLinkDecorations,
                formFactor: "desktop",
                hidePersonalInformation: s.A.hidePersonalInformation,
            };
        },
        x4: c,
    },
);
