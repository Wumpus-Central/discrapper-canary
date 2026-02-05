"use strict";
n.d(t, { A: () => K });
var r = n(575593),
    i = n(311907),
    a = n(73153),
    s = n(652215);
let o = {},
    l = {},
    u = {},
    c = {},
    d = l,
    _ = s.XlH.CLOSED,
    f = {};
function p() {
    (_ = s.XlH.OPEN), (f = {});
}
function h() {
    (_ = s.XlH.CLOSED), (f = {});
}
function m() {
    (_ = s.XlH.SUBMITTING), (f = {});
}
function g(e) {
    let { guildId: t, errors: n } = e;
    if (_ !== s.XlH.SUBMITTING) return !1;
    (_ = s.XlH.OPEN), (f[t ?? s.ME] = n ?? u);
}
function E(e) {
    let { section: t } = e;
    if (t !== s.nc_.ACCOUNT) return !1;
    (_ = s.XlH.OPEN), (f = {});
}
function A(e) {
    let { guildId: t, avatar: n } = e;
    (c[t ?? s.ME] = { ...c[t ?? s.ME], pendingAvatar: n }), (d = { ...d, tryItOutAvatar: void 0 });
}
function I(e) {
    let { globalName: t } = e;
    c[s.ME] = { ...c[s.ME], pendingGlobalName: t };
}
function T(e) {
    let { legacyUsernameDisabled: t } = e;
    c[s.ME] = { ...c[s.ME], pendingLegacyUsernameDisabled: t };
}
function y(e) {
    let { guildId: t, item: n } = e;
    n.type === r.R.AVATAR_DECORATION
        ? (c[t ?? s.ME] = { ...c[t ?? s.ME], pendingAvatarDecoration: n.value })
        : n.type === r.R.PROFILE_EFFECT
          ? (c[t ?? s.ME] = { ...c[t ?? s.ME], pendingProfileEffect: n.value })
          : n.type === r.R.NAMEPLATE && (c[t ?? s.ME] = { ...c[t ?? s.ME], pendingNameplate: n.value });
}
function S(e) {
    let { guildId: t, banner: n } = e;
    c[t ?? s.ME] = { ...c[t ?? s.ME], pendingBanner: n };
}
function v(e) {
    let { guildId: t, bio: n } = e;
    c[t ?? s.ME] = { ...c[t ?? s.ME], pendingBio: n };
}
function C(e) {
    let { guildId: t, pronouns: n } = e;
    c[t ?? s.ME] = { ...c[t ?? s.ME], pendingPronouns: n };
}
function b(e) {
    let { color: t } = e;
    c[s.ME] = { ...c[s.ME], pendingAccentColor: t };
}
function N(e) {
    let { guildId: t, themeColors: n } = e;
    c[t ?? s.ME] = { ...c[t ?? s.ME], pendingThemeColors: n };
}
function R(e) {
    let { primaryGuildId: t } = e;
    c[s.ME] = { ...c[s.ME], pendingPrimaryGuildId: t };
}
function O(e) {
    let { guildId: t, displayNameStyles: n } = e;
    c[t ?? s.ME] = { ...c[t ?? s.ME], pendingDisplayNameStyles: n };
}
function D(e) {
    let { themeColors: t } = e;
    d = { ...d, tryItOutThemeColors: t };
}
function L(e) {
    let { avatar: t } = e;
    d = { ...d, tryItOutAvatar: t };
}
function w(e) {
    let { avatarDecoration: t } = e;
    d = { ...d, tryItOutAvatarDecoration: t };
}
function x(e) {
    let { profileEffect: t } = e;
    d = { ...d, tryItOutProfileEffect: t };
}
function P(e) {
    let { banner: t } = e;
    d = { ...d, tryItOutBanner: t };
}
function M(e) {
    let { displayNameStyles: t } = e;
    d = { ...d, tryItOutDisplayNameStyles: t };
}
function k(e) {
    let { banner: t, themeColors: n, avatarDecoration: r, displayNameStyles: i } = e;
    d = { ...d, tryItOutBanner: t, tryItOutThemeColors: n, tryItOutAvatarDecoration: r, tryItOutDisplayNameStyles: i };
}
function U(e) {
    let { guildId: t } = e;
    f[t ?? s.ME] = {};
}
function G(e) {
    let { guildId: t } = e;
    V({ type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES", guildId: t }),
        F({ type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES", guildId: t }),
        j({ type: "USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED" }),
        H({ type: "USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES" }),
        (f[t ?? s.ME] = {});
}
function V(e) {
    let { guildId: t } = e;
    if (0 === Object.keys(c[t ?? s.ME] ?? {}).length) return !1;
    c[t ?? s.ME] = {
        ...c[t ?? s.ME],
        pendingGlobalName: void 0,
        pendingDisplayNameStyles: void 0,
        pendingAvatar: void 0,
        pendingAvatarDecoration: void 0,
        pendingNameplate: void 0,
        pendingProfileEffect: void 0,
    };
}
function F(e) {
    let { guildId: t } = e;
    if (0 === Object.keys(c[t ?? s.ME] ?? {}).length) return !1;
    c[t ?? s.ME] = {
        ...c[t ?? s.ME],
        pendingPronouns: void 0,
        pendingProfileEffect: void 0,
        pendingBanner: void 0,
        pendingAccentColor: void 0,
        pendingThemeColors: void 0,
        pendingBio: void 0,
    };
}
function B(e) {
    d = l;
}
function j(e) {
    if ((c[s.ME] ?? {})?.pendingLegacyUsernameDisabled === void 0) return !1;
    c[s.ME] = { ...c[s.ME], pendingLegacyUsernameDisabled: void 0 };
}
function H(e) {
    if ((c[s.ME] ?? {})?.pendingPrimaryGuildId === void 0) return !1;
    c[s.ME] = { ...c[s.ME], pendingPrimaryGuildId: void 0 };
}
function Y() {
    G({ type: "USER_SETTINGS_RESET_ALL_PENDING" }), B({ type: "USER_SETTINGS_RESET_ALL_TRY_IT_OUT" }), h();
}
class W extends i.Ay.Store {
    static displayName = "UserProfileSettingsStore";
    getFormState() {
        return _;
    }
    getErrors(e) {
        return f[e ?? s.ME] ?? u;
    }
    getPendingChanges(e) {
        return c[e ?? s.ME] ?? o;
    }
    getTryItOutChanges() {
        return d;
    }
    showNotice(e) {
        return Object.values(this.getPendingChanges(e)).some((e) => void 0 !== e);
    }
    canSubmit(e) {
        let t = this.getPendingChanges(e);
        return void 0 === t.pendingBio || !(t.pendingBio.length > s.NA2);
    }
}
let K = new W(a.h, {
    USER_SETTINGS_ACCOUNT_INIT: p,
    USER_SETTINGS_MODAL_INIT: p,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: p,
    USER_SETTINGS_MODAL_SET_SECTION: E,
    USER_SETTINGS_ACCOUNT_CLOSE: h,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: Y,
    USER_SETTINGS_ACCOUNT_SUBMIT: m,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: g,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: A,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: I,
    USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: T,
    USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM: y,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: S,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: v,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: C,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: b,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: N,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: L,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: w,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: x,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: P,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: D,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: M,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: k,
    USER_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: R,
    USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: O,
    USER_SETTINGS_CLEAR_ERRORS: U,
    USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: V,
    USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: F,
    USER_SETTINGS_RESET_ALL_PENDING: G,
    USER_SETTINGS_RESET_ALL_TRY_IT_OUT: B,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: j,
    USER_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: H,
    LOGOUT: Y,
});
