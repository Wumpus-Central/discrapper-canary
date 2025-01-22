r.d(n, {
    Ej: function () {
        return T;
    },
    Nc: function () {
        return v;
    },
    Nv: function () {
        return O;
    },
    Qj: function () {
        return h;
    },
    TX: function () {
        return S;
    },
    Uv: function () {
        return R;
    },
    ZZ: function () {
        return f;
    },
    Zt: function () {
        return b;
    },
    cq: function () {
        return p;
    },
    eN: function () {
        return N;
    },
    f1: function () {
        return m;
    },
    gs: function () {
        return A;
    },
    lq: function () {
        return g;
    },
    o2: function () {
        return y;
    },
    oL: function () {
        return d;
    },
    qz: function () {
        return I;
    },
    r_: function () {
        return E;
    },
    rf: function () {
        return _;
    },
    u1: function () {
        return C;
    }
});
var i = r(570140),
    a = r(153867),
    o = r(626135),
    s = r(607070),
    l = r(981631),
    u = r(969943),
    c = r(611480);
function d(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_FONT_SIZE',
        fontSize: e
    });
}
function f() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_MESSAGE_GROUP_SPACING',
        messageGroupSpacing: e
    });
}
function p(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ZOOM',
        zoom: e
    });
}
function h() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_KEYBOARD_MODE_ENABLE' }), o.default.track(l.rMx.KEYBOARD_MODE_TOGGLED, { enabled: !0 });
}
function _() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_KEYBOARD_MODE_DISABLE' }), o.default.track(l.rMx.KEYBOARD_MODE_TOGGLED, { enabled: !1 });
}
function m() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_DESATURATE_ROLES_TOGGLE' });
}
function g() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_DARK_SIDEBAR_TOGGLE' });
}
function E() {
    i.Z.dispatch({ type: 'KEYBOARD_NAVIGATION_EXPLAINER_MODAL_SEEN' });
}
function v(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_PREFERS_REDUCED_MOTION_CHANGED',
        systemPrefersReducedMotion: e
    });
}
function y(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_SATURATION',
        saturation: e
    });
}
function b(e) {
    let n = s.Z.useReducedMotion;
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION',
        prefersReducedMotion: e
    });
    let r = s.Z.useReducedMotion;
    !n && r
        ? a.ZP.applySettingsOverride({
              gifAutoPlay: {
                  value: !1,
                  reasonKey: u.mX.REDUCED_MOTION
              },
              animateEmoji: {
                  value: !1,
                  reasonKey: u.mX.REDUCED_MOTION
              },
              animateStickers: {
                  value: c.yr.ANIMATE_ON_INTERACTION,
                  reasonKey: u.mX.REDUCED_MOTION_STICKERS
              }
          })
        : n && !r && a.ZP.clearSettingsOverride('gifAutoPlay', 'animateEmoji', 'animateStickers');
}
function I(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_SYNC_FORCED_COLORS',
        syncForcedColors: e
    });
}
function T(e, n) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED',
        systemPrefersColorScheme: e,
        systemForcedColors: n
    });
}
function S(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SYSTEM_PREFERS_CONTRAST_CHANGED',
        systemPrefersContrast: e
    });
}
function A(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ALWAYS_SHOW_LINK_DECORATIONS',
        alwaysShowLinkDecorations: e
    });
}
function C(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_ROLE_STYLE',
        roleStyle: e
    }),
        o.default.track(l.rMx.ROLE_STYLE_SETTING_UPDATED, { role_style: e });
}
function N() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_SUBMIT_BUTTON_TOGGLE' });
}
function R() {
    i.Z.dispatch({ type: 'ACCESSIBILITY_SYNC_PROFILE_THEME_WITH_USER_THEME_TOGGLE' });
}
function O(e) {
    i.Z.dispatch({
        type: 'ACCESSIBILITY_SET_HIDE_TAGS',
        hideTags: e
    });
}
