n.d(t, {
    AC: () => E,
    Bm: () => d,
    D3: () => C,
    Dm: () => f,
    Er: () => N,
    FU: () => P,
    Gm: () => U,
    HU: () => p,
    IX: () => M,
    Jb: () => R,
    LO: () => T,
    M1: () => y,
    Qp: () => A,
    RI: () => g,
    RJ: () => S,
    XS: () => _,
    Xt: () => L,
    YV: () => I,
    kI: () => m,
    qz: () => O,
    ts: () => h,
    uS: () => c,
    uh: () => D,
});
var i = n(228366),
    r = n(817281),
    a = n(954571),
    l = n(775602),
    s = n(652215),
    o = n(823894),
    u = n(355097);
function _(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize: e });
}
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    i.h.dispatch({ type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: e });
}
function A(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_ZOOM", zoom: e });
}
function c() {
    i.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" }),
        a.default.track(s.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !0 });
}
function d() {
    i.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" }),
        a.default.track(s.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !1 });
}
function I() {
    i.h.dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
}
function T() {
    i.h.dispatch({ type: "ACCESSIBILITY_DARK_SIDEBAR_TOGGLE" });
}
function N() {
    i.h.dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
}
function S(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED", systemPrefersReducedMotion: e });
}
function p(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_SATURATION", saturation: e });
}
function O(e) {
    let t = l.A.useReducedMotion;
    i.h.dispatch({ type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: e });
    let n = l.A.useReducedMotion;
    !t && n
        ? r.Ay.applySettingsOverride({
              gifAutoPlay: { value: !1, reasonKey: u._A.REDUCED_MOTION },
              animateEmoji: { value: !1, reasonKey: u._A.REDUCED_MOTION },
              animateStickers: { value: o.BJ.ANIMATE_ON_INTERACTION, reasonKey: u._A.REDUCED_MOTION_STICKERS },
          })
        : t && !n && r.Ay.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
}
function C(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors: e });
}
function g(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors: e });
}
function R(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast: e });
}
function m(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations: e });
}
function h(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor: e });
}
function M(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle: e }),
        a.default.track(s.HAw.ROLE_STYLE_SETTING_UPDATED, { role_style: e });
}
function f(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled: e });
}
function L() {
    i.h.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
}
function y() {
    i.h.dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
}
function D(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode: e });
}
function U(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled: e });
}
function P(e) {
    i.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { hdrDynamicRange: e } });
}
