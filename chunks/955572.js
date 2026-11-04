var i = n(73153),
    r = n(817281),
    a = n(129230),
    s = n(775602),
    l = n(652215),
    o = n(823894),
    d = n(355097);
n.d(
    t,
    {},
    {
        AC: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
            i.h.dispatch({ type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: e });
        },
        Bm: function () {
            (i.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" }),
                a.default.track(l.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !1 }));
        },
        D3: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors: e });
        },
        Dm: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled: e });
        },
        E7: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_MIN_TOAST_DURATION", minToastDurationMs: e });
        },
        Er: function () {
            i.h.dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
        },
        FU: function (e) {
            i.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { hdrDynamicRange: e } });
        },
        Gm: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled: e });
        },
        HU: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_SATURATION", saturation: e });
        },
        IX: function (e) {
            (i.h.dispatch({ type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle: e }),
                a.default.track(l.HAw.ROLE_STYLE_SETTING_UPDATED, { role_style: e }));
        },
        Jb: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast: e });
        },
        M1: function () {
            i.h.dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
        },
        Qp: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_ZOOM", zoom: e });
        },
        RI: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors: e });
        },
        RJ: function (e) {
            i.h.dispatch({
                type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED",
                systemPrefersReducedMotion: e,
            });
        },
        XS: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize: e });
        },
        Xt: function () {
            i.h.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
        },
        YV: function () {
            i.h.dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
        },
        kI: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations: e });
        },
        n8: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_CHAT_BAR_SETTINGS", ...e });
        },
        qz: function (e) {
            let t = s.Ay.prefersReducedMotion;
            i.h.dispatch({ type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: e });
            let n = s.Ay.prefersReducedMotion;
            !t && n
                ? r.Ay.applySettingsOverride({
                      gifAutoPlay: { value: !1, reasonKey: d._A.REDUCED_MOTION },
                      animateEmoji: { value: !1, reasonKey: d._A.REDUCED_MOTION },
                      animateStickers: { value: o.BJ.ANIMATE_ON_INTERACTION, reasonKey: d._A.REDUCED_MOTION_STICKERS },
                  })
                : t && !n && r.Ay.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
        },
        ts: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor: e });
        },
        uS: function () {
            (i.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" }),
                a.default.track(l.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !0 }));
        },
        uh: function (e) {
            i.h.dispatch({ type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode: e });
        },
        w_: function (e) {
            (i.h.dispatch({ type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle: e }),
                a.default.track(l.HAw.OFFICIAL_MESSAGE_STYLE_SETTING_UPDATED, { official_message_style: e }));
        },
    },
);
