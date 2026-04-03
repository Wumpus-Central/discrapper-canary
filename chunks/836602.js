"use strict";
let r;
n.d(t, { A: () => Y, _: () => f });
var i = n(311907),
    s = n(73153),
    a = n(652215),
    o = n(349828),
    l = n(849077),
    u = n(901123);
let c = {},
    d = {},
    _ = {},
    f = new Set([...u.Cr, o.Vc, l.Hy]),
    p = {},
    h = d,
    m = a.XlH.CLOSED,
    E = {};
function g() {
    (m = a.XlH.OPEN), (E = {});
}
function A() {
    (m = a.XlH.CLOSED), (E = {});
}
function I() {
    (m = a.XlH.SUBMITTING), (E = {});
}
function T(e) {
    let { guildId: t } = e;
    if (m !== a.XlH.SUBMITTING) return !1;
    (m = a.XlH.OPEN), (E[t ?? a.ME] = _);
}
function S(e) {
    let { guildId: t, errors: n } = e;
    if (m !== a.XlH.SUBMITTING) return !1;
    (m = a.XlH.OPEN), (E[t ?? a.ME] = n ?? _);
}
function y(e) {
    let { guildId: t } = e;
    (r = null == t || f.has(t) ? void 0 : t), (m = a.XlH.OPEN), (E = {});
}
function v(e) {
    let { guildId: t } = e;
    (r = null == t || f.has(t) ? void 0 : t), (E = {});
}
function N(e) {
    let { section: t } = e;
    if (t !== a.nc_.ACCOUNT) return !1;
    (m = a.XlH.OPEN), (E = {});
}
function C(e) {
    let { type: t, guildId: n, ...r } = e;
    p[n ?? a.ME] = { ...p[n ?? a.ME], ...r };
}
function R(e) {
    let { themeColors: t } = e;
    h = { ...h, tryItOutThemeColors: t };
}
function O(e) {
    let { avatar: t } = e;
    h = { ...h, tryItOutAvatar: t };
}
function b(e) {
    let { avatarDecoration: t } = e;
    h = { ...h, tryItOutAvatarDecoration: t };
}
function D(e) {
    let { profileEffect: t } = e;
    h = { ...h, tryItOutProfileEffect: t };
}
function L(e) {
    let { banner: t } = e;
    h = { ...h, tryItOutBanner: t };
}
function w(e) {
    let { displayNameStyles: t } = e;
    h = { ...h, tryItOutDisplayNameStyles: t };
}
function M(e) {
    let { banner: t, themeColors: n, avatarDecoration: r, displayNameStyles: i } = e;
    h = { ...h, tryItOutBanner: t, tryItOutThemeColors: n, tryItOutAvatarDecoration: r, tryItOutDisplayNameStyles: i };
}
function x() {
    p = Object.fromEntries(
        Object.entries(p).map((e) => {
            let [t, n] = e;
            return [
                t,
                {
                    ...n,
                    pendingGlobalName: void 0,
                    pendingNickname: void 0,
                    pendingDisplayNameStyles: void 0,
                    pendingAvatar: void 0,
                    pendingAvatarDecoration: void 0,
                    pendingNameplate: void 0,
                },
            ];
        }),
    );
}
function P() {
    p = Object.fromEntries(
        Object.entries(p).map((e) => {
            let [t, n] = e;
            return [
                t,
                {
                    ...n,
                    pendingPronouns: void 0,
                    pendingProfileEffect: void 0,
                    pendingProfileFrame: void 0,
                    pendingBanner: void 0,
                    pendingAccentColor: void 0,
                    pendingThemeColors: void 0,
                    pendingBio: void 0,
                },
            ];
        }),
    );
}
function k() {
    h = d;
}
function U() {
    if ((p[a.ME] ?? {})?.pendingLegacyUsernameDisabled === void 0) return !1;
    p[a.ME] = { ...p[a.ME], pendingLegacyUsernameDisabled: void 0 };
}
function G() {
    if ((p[a.ME] ?? {})?.pendingPrimaryGuildId === void 0) return !1;
    p[a.ME] = { ...p[a.ME], pendingPrimaryGuildId: void 0 };
}
function F() {
    E = {};
}
function V() {
    (p = {}), (E = {});
}
function B() {
    V(), k(), A();
}
function H(e) {
    let { guildId: t, errors: n } = e;
    (m = a.XlH.OPEN),
        (E[t ?? a.ME] =
            Object.fromEntries(
                Object.entries(n).map((e) => {
                    let [t, n] = e;
                    return [t, [n]];
                }),
            ) ?? _);
}
class j extends i.Ay.Store {
    static displayName = "UserProfileSettingsStore";
    get selectedGuildId() {
        return r;
    }
    getFormState() {
        return m;
    }
    getErrors(e) {
        return E[e ?? a.ME] ?? _;
    }
    getPendingChanges(e) {
        return p[e ?? a.ME] ?? c;
    }
    getTryItOutChanges() {
        return h;
    }
    showNotice() {
        return !!(
            Object.values(this.getPendingChanges(a.ME)).some((e) => void 0 !== e) ||
            Object.values(this.getPendingChanges(r)).some((e) => void 0 !== e)
        );
    }
    canSubmit() {
        for (let e of [a.ME, r]) {
            let t = this.getPendingChanges(e);
            if (void 0 !== t.pendingBio && t.pendingBio.length > a.NA2) return !1;
        }
        return !0;
    }
}
let Y = new j(s.h, {
    USER_SETTINGS_MODAL_INIT: g,
    USER_SETTINGS_MODAL_OPEN: g,
    USER_SETTINGS_MODAL_SET_SECTION: N,
    USER_PROFILE_SETTINGS_INIT: y,
    USER_PROFILE_SETTINGS_SET_GUILD: v,
    USER_PROFILE_SETTINGS_CLOSE: A,
    USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM: B,
    USER_PROFILE_SETTINGS_SUBMIT: I,
    USER_PROFILE_SETTINGS_SUBMIT_SUCCESS: T,
    USER_PROFILE_SETTINGS_SUBMIT_FAILURE: S,
    USER_PROFILE_SETTINGS_SET_PENDING_CHANGES: C,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR: O,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION: b,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT: D,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER: L,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS: R,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: w,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET: M,
    USER_PROFILE_SETTINGS_CLEAR_ERRORS: F,
    USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: x,
    USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES: P,
    USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES: V,
    USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES: k,
    USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED: U,
    USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: G,
    USER_PROFILE_UPDATE_FAILURE: H,
    LOGOUT: B,
});
