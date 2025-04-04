n.d(t, {
    Ej: () => O,
    Nc: () => E,
    Nv: () => C,
    Qj: () => _,
    TX: () => I,
    Uv: () => A,
    ZZ: () => d,
    Zt: () => y,
    cq: () => f,
    eN: () => N,
    f1: () => h,
    gs: () => S,
    lq: () => m,
    o2: () => b,
    oL: () => u,
    qz: () => v,
    r_: () => g,
    rf: () => p,
    u1: () => T
});
var r = n(570140),
    i = n(153867),
    o = n(626135),
    a = n(607070),
    s = n(981631),
    l = n(969943),
    c = n(611480);
function u(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_FONT_SIZE',
        fontSize: e
    });
}
function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING',
        messageGroupSpacing: e
    });
}
function f(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ZOOM',
        zoom: e
    });
}
function _() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_KEYBOARD_MODE_ENABLE' }), o.default.track(s.rMx.KEYBOARD_MODE_TOGGLED, { enabled: !0 });
}
function p() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_KEYBOARD_MODE_DISABLE' }), o.default.track(s.rMx.KEYBOARD_MODE_TOGGLED, { enabled: !1 });
}
function h() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_DESATURATE_ROLES_TOGGLE' });
}
function m() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_DARK_SIDEBAR_TOGGLE' });
}
function g() {
    r.Z.dispatch({ type: 'KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN' });
}
function E(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED',
        systemPrefersReducedMotion: e
    });
}
function b(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_SATURATION',
        saturation: e
    });
}
function y(e) {
    let t = a.Z.useReducedMotion;
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION',
        prefersReducedMotion: e
    });
    let n = a.Z.useReducedMotion;
    !t && n
        ? i.ZP.applySettingsOverride({
              gifAutoPlay: {
                  value: !1,
                  reasonKey: l.mX.REDUCED_MOTION
              },
              animateEmoji: {
                  value: !1,
                  reasonKey: l.mX.REDUCED_MOTION
              },
              animateStickers: {
                  value: c.yr.ANIMATE_ON_INTERACTION,
                  reasonKey: l.mX.REDUCED_MOTION_STICKERS
              }
          })
        : t && !n && i.ZP.clearSettingsOverride('gifAutoPlay', 'animateEmoji', 'animateStickers');
}
function v(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_SYNC_FORCED_COLORS',
        syncForcedColors: e
    });
}
function O(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED',
        systemForcedColors: e
    });
}
function I(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED',
        systemPrefersContrast: e
    });
}
function S(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS',
        alwaysShowLinkDecorations: e
    });
}
function T(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ROLE_STYLE',
        roleStyle: e
    }),
        o.default.track(s.rMx.ROLE_STYLE_SETTING_UPDATED, { role_style: e });
}
function N() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE' });
}
function A() {
    r.Z.dispatch({ type: 'ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE' });
}
function C(e) {
    r.Z.dispatch({
        type: 'ACCESSIBILITY_SET_HIDE_TAGS',
        hideTags: e
    });
}
