n.d(t, {
    AC: () => d,
    Bm: () => _,
    D3: () => O,
    Dm: () => C,
    Er: () => g,
    FU: () => D,
    Gm: () => P,
    HU: () => b,
    IX: () => T,
    Jb: () => v,
    LO: () => m,
    M1: () => R,
    Qp: () => f,
    RI: () => A,
    RJ: () => E,
    XS: () => u,
    Xt: () => N,
    YV: () => h,
    kI: () => S,
    qz: () => y,
    ts: () => I,
    uS: () => p,
    uh: () => w,
});
var r = n(73153),
    i = n(817281),
    a = n(954571),
    s = n(775602),
    o = n(652215),
    l = n(815968),
    c = n(823894);
function u(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_FONT_SIZE",
        fontSize: e,
    });
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING",
        messageGroupSpacing: e,
    });
}
function f(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_ZOOM",
        zoom: e,
    });
}
function p() {
    r.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_ENABLE" }),
        a.default.track(o.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !0 });
}
function _() {
    r.h.dispatch({ type: "ACCESSIBILITY_KEYBOARD_MODE_DISABLE" }),
        a.default.track(o.HAw.KEYBOARD_MODE_TOGGLED, { enabled: !1 });
}
function h() {
    r.h.dispatch({ type: "ACCESSIBILITY_DESATURATE_ROLES_TOGGLE" });
}
function m() {
    r.h.dispatch({ type: "ACCESSIBILITY_DARK_SIDEBAR_TOGGLE" });
}
function g() {
    r.h.dispatch({ type: "KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN" });
}
function E(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED",
        systemPrefersReducedMotion: e,
    });
}
function b(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_SATURATION",
        saturation: e,
    });
}
function y(e) {
    let t = s.A.useReducedMotion;
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION",
        prefersReducedMotion: e,
    });
    let n = s.A.useReducedMotion;
    !t && n
        ? i.Ay.applySettingsOverride({
              gifAutoPlay: {
                  value: !1,
                  reasonKey: l._A.REDUCED_MOTION,
              },
              animateEmoji: {
                  value: !1,
                  reasonKey: l._A.REDUCED_MOTION,
              },
              animateStickers: {
                  value: c.BJ.ANIMATE_ON_INTERACTION,
                  reasonKey: l._A.REDUCED_MOTION_STICKERS,
              },
          })
        : t && !n && i.Ay.clearSettingsOverride("gifAutoPlay", "animateEmoji", "animateStickers");
}
function O(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_SYNC_FORCED_COLORS",
        syncForcedColors: e,
    });
}
function A(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED",
        systemForcedColors: e,
    });
}
function v(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED",
        systemPrefersContrast: e,
    });
}
function S(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS",
        alwaysShowLinkDecorations: e,
    });
}
function I(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_ENABLE_CUSTOM_CURSOR",
        enableCustomCursor: e,
    });
}
function T(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_ROLE_STYLE",
        roleStyle: e,
    }),
        a.default.track(o.HAw.ROLE_STYLE_SETTING_UPDATED, { role_style: e });
}
function C(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_DISPLAY_NAME_STYLES_ENABLED",
        enabled: e,
    });
}
function N() {
    r.h.dispatch({ type: "ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE" });
}
function R() {
    r.h.dispatch({ type: "ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE" });
}
function w(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_CONTRAST_MODE",
        contrastMode: e,
    });
}
function P(e) {
    r.h.dispatch({
        type: "ACCESSIBILITY_SET_SWITCH_ICONS_ENABLED",
        switchIconsEnabled: e,
    });
}
function D(e) {
    r.h.dispatch({
        type: "UNSYNCED_USER_SETTINGS_UPDATE",
        settings: { hdrDynamicRange: e },
    });
}
