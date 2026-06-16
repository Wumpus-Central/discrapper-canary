"use strict";
n.d(t, {
    AC: () => d,
    Bm: () => f,
    D3: () => I,
    Dm: () => R,
    Er: () => E,
    FU: () => M,
    Gm: () => L,
    HU: () => g,
    IX: () => N,
    Jb: () => S,
    M1: () => b,
    Qp: () => _,
    RI: () => T,
    RJ: () => m,
    XS: () => c,
    Xt: () => O,
    YV: () => p,
    kI: () => y,
    n8: () => w,
    qz: () => A,
    ts: () => C,
    uS: () => h,
    uh: () => D,
    w_: () => v,
});
var i = n(228366),
    r = n(817281),
    s = n(174459),
    a = n(775602),
    o = n(652215),
    l = n(823894),
    u = n(355097);
function c(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_FONT_SIZE", fontSize: e });
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    i.h.dispatch({ type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING", messageGroupSpacing: e });
}
function _(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_ZOOM", zoom: e });
}
function h() {
    i.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" }),
        s.default.track(o.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !0 });
}
function f() {
    i.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" }),
        s.default.track(o.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !1 });
}
function p() {
    i.h.dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
}
function E() {
    i.h.dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
}
function m(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED", systemPrefersReducedMotion: e });
}
function g(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_SATURATION", saturation: e });
}
function A(e) {
    let t = a.Ay.useReducedMotion;
    i.h.dispatch({ type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION", prefersReducedMotion: e });
    let n = a.Ay.useReducedMotion;
    !t && n
        ? r.Ay.applySettingsOverride({
              gifAutoPlay: { value: !1, reasonKey: u._A.REDUCED_MOTION },
              animateEmoji: { value: !1, reasonKey: u._A.REDUCED_MOTION },
              animateStickers: { value: l.BJ.ANIMATE_ON_INTERACTION, reasonKey: u._A.REDUCED_MOTION_STICKERS },
          })
        : t && !n && r.Ay.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
}
function I(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS", syncForcedColors: e });
}
function T(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED", systemForcedColors: e });
}
function S(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED", systemPrefersContrast: e });
}
function y(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS", alwaysShowLinkDecorations: e });
}
function C(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR", enableCustomCursor: e });
}
function N(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_ROLE_STYLE", roleStyle: e }),
        s.default.track(o.HAw.ROLE_STYLE_SETTING_UPDATED, { role_style: e });
}
function v(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_OFFICIAL_MESSAGE_STYLE", officialMessageStyle: e }),
        s.default.track(o.HAw.OFFICIAL_MESSAGE_STYLE_SETTING_UPDATED, { official_message_style: e });
}
function R(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED", enabled: e });
}
function O() {
    i.h.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
}
function b() {
    i.h.dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
}
function D(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_CONTRAST_MODE", contrastMode: e });
}
function L(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED", switchIconsEnabled: e });
}
function w(e) {
    i.h.dispatch({ type: "ACCESSIBILITY_SET_CHAT_BAR_SETTINGS", ...e });
}
function M(e) {
    i.h.dispatch({ type: "UNSYNCED_USER_SETTINGS_UPDATE", settings: { hdrDynamicRange: e } });
}
