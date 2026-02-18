"use strict";
let r;
n.d(t, { A: () => en, _: () => p });
var i = n(575593),
    s = n(311907),
    a = n(73153),
    o = n(652215),
    l = n(349828),
    u = n(849077),
    c = n(901123);
let d = {},
    _ = {},
    f = {},
    p = new Set([...c.Cr, l.Vc, u.Hy]),
    h = {},
    m = _,
    E = o.XlH.CLOSED,
    g = {};
function A() {
    (E = o.XlH.OPEN), (g = {});
}
function I() {
    (E = o.XlH.CLOSED), (g = {});
}
function T() {
    (E = o.XlH.SUBMITTING), (g = {});
}
function S(e) {
    let { guildId: t } = e;
    if (E !== o.XlH.SUBMITTING) return !1;
    (E = o.XlH.OPEN), (g[t ?? o.ME] = f);
}
function y(e) {
    let { guildId: t, errors: n } = e;
    if (E !== o.XlH.SUBMITTING) return !1;
    (E = o.XlH.OPEN), (g[t ?? o.ME] = n ?? f);
}
function v(e) {
    let { guildId: t } = e;
    (r = null == t || p.has(t) ? void 0 : t), (E = o.XlH.OPEN), (g = {});
}
function N(e) {
    let { guildId: t } = e;
    (r = null == t || p.has(t) ? void 0 : t), (g = {});
}
function C(e) {
    let { section: t } = e;
    if (t !== o.nc_.ACCOUNT) return !1;
    (E = o.XlH.OPEN), (g = {});
}
function b(e) {
    let { guildId: t, avatar: n } = e;
    (h[t ?? o.ME] = { ...h[t ?? o.ME], pendingAvatar: n }), (m = { ...m, tryItOutAvatar: void 0 });
}
function R(e) {
    let { globalName: t } = e;
    h[o.ME] = { ...h[o.ME], pendingGlobalName: t };
}
function O(e) {
    let { guildId: t, nickname: n } = e;
    h[t] = { ...h[t], pendingNickname: n };
}
function D(e) {
    let { legacyUsernameDisabled: t } = e;
    h[o.ME] = { ...h[o.ME], pendingLegacyUsernameDisabled: t };
}
function L(e) {
    let { guildId: t, item: n } = e;
    n.type === i.R.AVATAR_DECORATION
        ? (h[t ?? o.ME] = { ...h[t ?? o.ME], pendingAvatarDecoration: n.value })
        : n.type === i.R.PROFILE_EFFECT
          ? (h[t ?? o.ME] = { ...h[t ?? o.ME], pendingProfileEffect: n.value })
          : n.type === i.R.NAMEPLATE && (h[t ?? o.ME] = { ...h[t ?? o.ME], pendingNameplate: n.value });
}
function w(e) {
    let { guildId: t, banner: n } = e;
    h[t ?? o.ME] = { ...h[t ?? o.ME], pendingBanner: n };
}
function x(e) {
    let { guildId: t, bio: n } = e;
    h[t ?? o.ME] = { ...h[t ?? o.ME], pendingBio: n };
}
function M(e) {
    let { guildId: t, pronouns: n } = e;
    h[t ?? o.ME] = { ...h[t ?? o.ME], pendingPronouns: n };
}
function P(e) {
    let { color: t } = e;
    h[o.ME] = { ...h[o.ME], pendingAccentColor: t };
}
function k(e) {
    let { guildId: t, themeColors: n } = e;
    h[t ?? o.ME] = { ...h[t ?? o.ME], pendingThemeColors: n };
}
function U(e) {
    let { primaryGuildId: t } = e;
    h[o.ME] = { ...h[o.ME], pendingPrimaryGuildId: t };
}
function G(e) {
    let { guildId: t, displayNameStyles: n } = e;
    h[t ?? o.ME] = { ...h[t ?? o.ME], pendingDisplayNameStyles: n };
}
function F(e) {
    let { themeColors: t } = e;
    m = { ...m, tryItOutThemeColors: t };
}
function V(e) {
    let { avatar: t } = e;
    m = { ...m, tryItOutAvatar: t };
}
function B(e) {
    let { avatarDecoration: t } = e;
    m = { ...m, tryItOutAvatarDecoration: t };
}
function H(e) {
    let { profileEffect: t } = e;
    m = { ...m, tryItOutProfileEffect: t };
}
function j(e) {
    let { banner: t } = e;
    m = { ...m, tryItOutBanner: t };
}
function Y(e) {
    let { displayNameStyles: t } = e;
    m = { ...m, tryItOutDisplayNameStyles: t };
}
function W(e) {
    let { banner: t, themeColors: n, avatarDecoration: r, displayNameStyles: i } = e;
    m = { ...m, tryItOutBanner: t, tryItOutThemeColors: n, tryItOutAvatarDecoration: r, tryItOutDisplayNameStyles: i };
}
function K() {
    h = Object.fromEntries(
        Object.entries(h).map((e) => {
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
function z() {
    h = Object.fromEntries(
        Object.entries(h).map((e) => {
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
function $() {
    m = _;
}
function q() {
    if ((h[o.ME] ?? {})?.pendingLegacyUsernameDisabled === void 0) return !1;
    h[o.ME] = { ...h[o.ME], pendingLegacyUsernameDisabled: void 0 };
}
function Z() {
    if ((h[o.ME] ?? {})?.pendingPrimaryGuildId === void 0) return !1;
    h[o.ME] = { ...h[o.ME], pendingPrimaryGuildId: void 0 };
}
function X() {
    g = {};
}
function Q() {
    (h = {}), (g = {});
}
function J() {
    Q(), $(), I();
}
function ee(e) {
    let { guildId: t, errors: n } = e;
    (E = o.XlH.OPEN),
        (g[t ?? o.ME] =
            Object.fromEntries(
                Object.entries(n).map((e) => {
                    let [t, n] = e;
                    return [t, [n]];
                }),
            ) ?? f);
}
class et extends s.Ay.Store {
    static displayName = "UserProfileSettingsStore";
    get selectedGuildId() {
        return r;
    }
    getFormState() {
        return E;
    }
    getErrors(e) {
        return g[e ?? o.ME] ?? f;
    }
    getPendingChanges(e) {
        return h[e ?? o.ME] ?? d;
    }
    getTryItOutChanges() {
        return m;
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
let en = new et(a.h, {
    USER_SETTINGS_MODAL_INIT: A,
    USER_SETTINGS_MODAL_OPEN: A,
    USER_SETTINGS_MODAL_SET_SECTION: C,
    USER_PROFILE_SETTINGS_INIT: v,
    USER_PROFILE_SETTINGS_SET_GUILD: N,
    USER_PROFILE_SETTINGS_CLOSE: I,
    USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM: J,
    USER_PROFILE_SETTINGS_SUBMIT: T,
    USER_PROFILE_SETTINGS_SUBMIT_SUCCESS: S,
    USER_PROFILE_SETTINGS_SUBMIT_FAILURE: y,
    USER_PROFILE_SETTINGS_SET_PENDING_AVATAR: b,
    USER_PROFILE_SETTINGS_SET_PENDING_GLOBAL_NAME: R,
    USER_PROFILE_SETTINGS_SET_PENDING_NICKNAME: O,
    USER_PROFILE_SETTINGS_SET_PENDING_LEGACY_USERNAME_DISABLED: D,
    USER_PROFILE_SETTINGS_SET_PENDING_COLLECTIBLES_ITEM: L,
    USER_PROFILE_SETTINGS_SET_PENDING_BANNER: w,
    USER_PROFILE_SETTINGS_SET_PENDING_BIO: x,
    USER_PROFILE_SETTINGS_SET_PENDING_PRONOUNS: M,
    USER_PROFILE_SETTINGS_SET_PENDING_ACCENT_COLOR: P,
    USER_PROFILE_SETTINGS_SET_PENDING_THEME_COLORS: k,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR: V,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION: B,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT: H,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER: j,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS: F,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: Y,
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET: W,
    USER_PROFILE_SETTINGS_SET_PENDING_PRIMARY_GUILD_ID: U,
    USER_PROFILE_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES: G,
    USER_PROFILE_SETTINGS_CLEAR_ERRORS: X,
    USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: K,
    USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES: z,
    USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES: Q,
    USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES: $,
    USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED: q,
    USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: Z,
    USER_PROFILE_UPDATE_FAILURE: ee,
    LOGOUT: J,
});
