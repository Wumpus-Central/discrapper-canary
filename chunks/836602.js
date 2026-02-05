"use strict";
let r;
n.d(t, { A: () => X });
var i = n(575593),
    a = n(311907),
    s = n(73153),
    o = n(652215);
let l = {},
    u = {},
    c = {},
    d = {},
    _ = u,
    f = o.XlH.CLOSED,
    p = {};
function h() {
    (f = o.XlH.OPEN), (p = {});
}
function m() {
    (f = o.XlH.CLOSED), (p = {});
}
function g() {
    (f = o.XlH.SUBMITTING), (p = {});
}
function E(e) {
    let { guildId: t } = e;
    if (f !== o.XlH.SUBMITTING) return !1;
    (f = o.XlH.OPEN), (p[t ?? o.ME] = c);
}
function A(e) {
    let { guildId: t, errors: n } = e;
    if (f !== o.XlH.SUBMITTING) return !1;
    (f = o.XlH.OPEN), (p[t ?? o.ME] = n ?? c);
}
function I(e) {
    let { guildId: t } = e;
    (r = t ?? void 0), (f = o.XlH.OPEN), (p = {});
}
function T(e) {
    let { guildId: t } = e;
    (r = t), (p = {});
}
function y(e) {
    let { section: t } = e;
    if (t !== o.nc_.ACCOUNT) return !1;
    (f = o.XlH.OPEN), (p = {});
}
function S(e) {
    let { guildId: t, avatar: n } = e;
    (d[t ?? o.ME] = { ...d[t ?? o.ME], pendingAvatar: n }), (_ = { ..._, tryItOutAvatar: void 0 });
}
function v(e) {
    let { globalName: t } = e;
    d[o.ME] = { ...d[o.ME], pendingGlobalName: t };
}
function C(e) {
    let { guildId: t, nickname: n } = e;
    d[t] = { ...d[t], pendingNickname: n };
}
function b(e) {
    let { legacyUsernameDisabled: t } = e;
    d[o.ME] = { ...d[o.ME], pendingLegacyUsernameDisabled: t };
}
function N(e) {
    let { guildId: t, item: n } = e;
    n.type === i.R.AVATAR_DECORATION
        ? (d[t ?? o.ME] = { ...d[t ?? o.ME], pendingAvatarDecoration: n.value })
        : n.type === i.R.PROFILE_EFFECT
          ? (d[t ?? o.ME] = { ...d[t ?? o.ME], pendingProfileEffect: n.value })
          : n.type === i.R.NAMEPLATE && (d[t ?? o.ME] = { ...d[t ?? o.ME], pendingNameplate: n.value });
}
function R(e) {
    let { guildId: t, banner: n } = e;
    d[t ?? o.ME] = { ...d[t ?? o.ME], pendingBanner: n };
}
function O(e) {
    let { guildId: t, bio: n } = e;
    d[t ?? o.ME] = { ...d[t ?? o.ME], pendingBio: n };
}
function D(e) {
    let { guildId: t, pronouns: n } = e;
    d[t ?? o.ME] = { ...d[t ?? o.ME], pendingPronouns: n };
}
function L(e) {
    let { color: t } = e;
    d[o.ME] = { ...d[o.ME], pendingAccentColor: t };
}
function w(e) {
    let { guildId: t, themeColors: n } = e;
    d[t ?? o.ME] = { ...d[t ?? o.ME], pendingThemeColors: n };
}
function x(e) {
    let { primaryGuildId: t } = e;
    d[o.ME] = { ...d[o.ME], pendingPrimaryGuildId: t };
}
function P(e) {
    let { guildId: t, displayNameStyles: n } = e;
    d[t ?? o.ME] = { ...d[t ?? o.ME], pendingDisplayNameStyles: n };
}
function M(e) {
    let { themeColors: t } = e;
    _ = { ..._, tryItOutThemeColors: t };
}
function k(e) {
    let { avatar: t } = e;
    _ = { ..._, tryItOutAvatar: t };
}
function U(e) {
    let { avatarDecoration: t } = e;
    _ = { ..._, tryItOutAvatarDecoration: t };
}
function G(e) {
    let { profileEffect: t } = e;
    _ = { ..._, tryItOutProfileEffect: t };
}
function V(e) {
    let { banner: t } = e;
    _ = { ..._, tryItOutBanner: t };
}
function F(e) {
    let { displayNameStyles: t } = e;
    _ = { ..._, tryItOutDisplayNameStyles: t };
}
function B(e) {
    let { banner: t, themeColors: n, avatarDecoration: r, displayNameStyles: i } = e;
    _ = { ..._, tryItOutBanner: t, tryItOutThemeColors: n, tryItOutAvatarDecoration: r, tryItOutDisplayNameStyles: i };
}
function j() {
    d = Object.fromEntries(
        Object.entries(d).map((e) => {
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
function H() {
    d = Object.fromEntries(
        Object.entries(d).map((e) => {
            let [t, n] = e;
            return [
                t,
                {
                    ...n,
                    pendingPronouns: void 0,
                    pendingProfileEffect: void 0,
                    pendingBanner: void 0,
                    pendingAccentColor: void 0,
                    pendingThemeColors: void 0,
                    pendingBio: void 0,
                },
            ];
        }),
    );
}
function Y() {
    _ = u;
}
function W() {
    if ((d[o.ME] ?? {})?.pendingLegacyUsernameDisabled === void 0) return !1;
    d[o.ME] = { ...d[o.ME], pendingLegacyUsernameDisabled: void 0 };
}
function K() {
    if ((d[o.ME] ?? {})?.pendingPrimaryGuildId === void 0) return !1;
    d[o.ME] = { ...d[o.ME], pendingPrimaryGuildId: void 0 };
}
function z() {
    p = {};
}
function $() {
    (d = {}), (p = {});
}
function q() {
    $(), Y(), m();
}
function Z(e) {
    let { guildId: t, errors: n } = e;
    (f = o.XlH.OPEN),
        (p[t ?? o.ME] =
            Object.fromEntries(
                Object.entries(n).map((e) => {
                    let [t, n] = e;
                    return [t, [n]];
                }),
            ) ?? c);
}
class Q extends a.Ay.Store {
    static displayName = "UserProfileSettingsStore";
    get selectedGuildId() {
        return r;
    }
    getFormState() {
        return f;
    }
    getErrors(e) {
        return p[e ?? o.ME] ?? c;
    }
    getPendingChanges(e) {
        return d[e ?? o.ME] ?? l;
    }
    getTryItOutChanges() {
        return _;
    }
    showNotice() {
        return !!(
            Object.values(this.getPendingChanges(o.ME)).some((e) => void 0 !== e) ||
            Object.values(this.getPendingChanges(r)).some((e) => void 0 !== e)
        );
    }
    canSubmit() {
        for (let e of [o.ME, r]) {
            let t = this.getPendingChanges(e);
            if (void 0 !== t.pendingBio && t.pendingBio.length > o.NA2) return !1;
        }
        return !0;
    }
}
let X = new Q(s.h, {
    USER_SETTINGS_MODAL_INIT: h,
    USER_SETTINGS_MODAL_OPEN: h,
    USER_SETTINGS_MODAL_SET_SECTION: y,
    USER_SETTINGS_ACCOUNT_INIT: I,
    USER_SETTINGS_ACCOUNT_SET_GUILD: T,
    USER_SETTINGS_ACCOUNT_CLOSE: m,
    USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: q,
    USER_SETTINGS_ACCOUNT_SUBMIT: g,
    USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: E,
    USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: A,
    USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: S,
    USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: v,
    USER_SETTINGS_ACCOUNT_SET_PENDING_NICKNAME: C,
    USER_SETTINGS_ACCOUNT_SET_PENDING_LEGACY_USERNAME_DISABLED: b,
    USER_SETTINGS_ACCOUNT_SET_PENDING_COLLECTIBLES_ITEM: N,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: R,
    USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: O,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: D,
    USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: L,
    USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: w,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: k,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: U,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT: G,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: V,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: M,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: F,
    USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET: B,
    USER_SETTINGS_ACCOUNT_SET_PENDING_PRIMARY_GUILD_ID: x,
    USER_SETTINGS_ACCOUNT_SET_PENDING_DISPLAY_NAME_STYLES: P,
    USER_SETTINGS_ACCOUNT_CLEAR_ERRORS: z,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_ACCOUNT_CHANGES: j,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_PROFILE_CHANGES: H,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_CHANGES: $,
    USER_SETTINGS_ACCOUNT_RESET_TRY_IT_OUT_CHANGES: Y,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_LEGACY_USERNAME_DISABLED: W,
    USER_SETTINGS_ACCOUNT_RESET_PENDING_PRIMARY_GUILD_CHANGES: K,
    USER_PROFILE_UPDATE_FAILURE: Z,
    LOGOUT: q,
});
