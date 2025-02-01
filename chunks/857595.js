n.d(t, {
    Ej: () => T,
    Nc: () => E,
    Nv: () => R,
    Qj: () => _,
    TX: () => b,
    Uv: () => C,
    ZZ: () => d,
    Zt: () => y,
    cq: () => f,
    eN: () => N,
    f1: () => h,
    gs: () => S,
    lq: () => m,
    o2: () => v,
    oL: () => c,
    qz: () => I,
    r_: () => g,
    rf: () => p,
    u1: () => A
});
var i = n(570140),
    r = n(153867),
    a = n(626135),
    s = n(607070),
    o = n(981631),
    l = n(969943),
    u = n(611480);
function c(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_FONT_SIZE',
        fontSize: e
    });
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING',
        messageGroupSpacing: e
    });
}
function f(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ZOOM',
        zoom: e
    });
}
function _() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_KEYBOARD_MODE_ENABLE' }), a.default.track(o.rMx.KEYBOARD_MODE_TOGGLED, { enabled: !0 });
}
function p() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_KEYBOARD_MODE_DISABLE' }), a.default.track(o.rMx.KEYBOARD_MODE_TOGGLED, { enabled: !1 });
}
function h() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_DESATURATE_ROLES_TOGGLE' });
}
function m() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_DARK_SIDEBAR_TOGGLE' });
}
function g() {
    i.Z.dispatch({ type: 'KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN' });
}
function E(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED',
        systemPrefersReducedMotion: e
    });
}
function v(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_SATURATION',
        saturation: e
    });
}
function y(e) {
    let t = s.Z.useReducedMotion;
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION',
        prefersReducedMotion: e
    });
    let n = s.Z.useReducedMotion;
    !t && n
        ? r.ZP.applySettingsOverride({
              gifAutoPlay: {
                  value: !1,
                  reasonKey: l.mX.REDUCED_MOTION
              },
              animateEmoji: {
                  value: !1,
                  reasonKey: l.mX.REDUCED_MOTION
              },
              animateStickers: {
                  value: u.yr.ANIMATE_ON_INTERACTION,
                  reasonKey: l.mX.REDUCED_MOTION_STICKERS
              }
          })
        : t && !n && r.ZP.clearSettingsOverride('gifAutoPlay', 'animateEmoji', 'animateStickers');
}
function I(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_SYNC_FORCED_COLORS',
        syncForcedColors: e
    });
}
function T(e, t) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED',
        systemPrefersColorScheme: e,
        systemForcedColors: t
    });
}
function b(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED',
        systemPrefersContrast: e
    });
}
function S(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS',
        alwaysShowLinkDecorations: e
    });
}
function A(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ROLE_STYLE',
        roleStyle: e
    }),
        a.default.track(o.rMx.ROLE_STYLE_SETTING_UPDATED, { role_style: e });
}
function N() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE' });
}
function C() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE' });
}
function R(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_HIDE_TAGS',
        hideTags: e
    });
}
