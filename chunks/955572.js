"use strict";
n.d(t, {
    AC: () => d,
    Bm: () => p,
    D3: () => T,
    Dm: () => O,
    Er: () => m,
    FU: () => w,
    Gm: () => L,
    HU: () => A,
    IX: () => C,
    Jb: () => y,
    LO: () => E,
    M1: () => b,
    Qp: () => _,
    RI: () => S,
    RJ: () => g,
    XS: () => c,
    Xt: () => R,
    YV: () => h,
    kI: () => N,
    qz: () => I,
    ts: () => v,
    uS: () => f,
    uh: () => D,
});
var r = n(73153),
    i = n(817281),
    s = n(954571),
    a = n(775602),
    o = n(652215),
    l = n(823894),
    u = n(355097);
function c(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize: e });
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    r.h.dispatch({ type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: e });
}
function _(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SET_ZOOM", zoom: e });
}
function f() {
    r.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" }),
        s.default.track(o.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !0 });
}
function p() {
    r.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" }),
        s.default.track(o.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !1 });
}
function h() {
    r.h.dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
}
function E() {
    r.h.dispatch({ type: "ACCESSIBILITY_DARK_SIDEBAR_TOGGLE" });
}
function m() {
    r.h.dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
}
function g(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED", systemPrefersReducedMotion: e });
}
function A(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SET_SATURATION", saturation: e });
}
function I(e) {
    let t = a.A.useReducedMotion;
    r.h.dispatch({ type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: e });
    let n = a.A.useReducedMotion;
    !t && n
        ? i.Ay.applySettingsOverride({
              gifAutoPlay: { value: !1, reasonKey: u._A.REDUCED_MOTION },
              animateEmoji: { value: !1, reasonKey: u._A.REDUCED_MOTION },
              animateStickers: { value: l.BJ.ANIMATE_ON_INTERACTION, reasonKey: u._A.REDUCED_MOTION_STICKERS },
          })
        : t && !n && i.Ay.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
}
function T(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors: e });
}
function S(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors: e });
}
function y(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast: e });
}
function N(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations: e });
}
function v(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor: e });
}
function C(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle: e }),
        s.default.track(o.HAw.ROLE_STYLE_SETTING_UPDATED, { role_style: e });
}
function O(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled: e });
}
function R() {
    r.h.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
}
function b() {
    r.h.dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
}
function D(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode: e });
}
function L(e) {
    r.h.dispatch({ type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled: e });
}
function w(e) {
    r.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { hdrDynamicRange: e } });
}
