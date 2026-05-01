"use strict";
let i;
n.d(t, { A: () => y, _: () => f });
var r = n(17928),
    s = n(228366),
    a = n(652215),
    o = n(349828),
    l = n(849077),
    u = n(901123);
let c = {},
    d = {},
    _ = {},
    f = new Set([...u.Cr, o.Vc, l.Hy]),
    h = {},
    p = d,
    E = a.XlH.CLOSED,
    m = {};
function g() {
    (E = a.XlH.OPEN), (m = {});
}
function A() {
    (E = a.XlH.CLOSED), (m = {});
}
function I() {
    p = d;
}
function T() {
    (h = {}), (m = {});
}
function S() {
    T(), I(), A();
}
class N extends r.Ay.Store {
    static displayName = "UserProfileSettingsStore";
    get selectedGuildId() {
        return i;
    }
    getFormState() {
        return E;
    }
    getErrors(e) {
        return m[e ?? a.ME] ?? _;
    }
    getPendingChanges(e) {
        return h[e ?? a.ME] ?? c;
    }
    getTryItOutChanges() {
        return p;
    }
    hasUnsavedChanges() {
        return Object.values(h).some((e) => Object.values(e).some((e) => void 0 !== e));
    }
    showNotice() {
        return !!(
            Object.values(this.getPendingChanges(a.ME)).some((e) => void 0 !== e) ||
            Object.values(this.getPendingChanges(i)).some((e) => void 0 !== e)
        );
    }
    canSubmit() {
        for (let e of [a.ME, i]) {
            let t = this.getPendingChanges(e);
            if (void 0 !== t.pendingBio && t.pendingBio.length > a.NA2) return !1;
        }
        return !0;
    }
}
let y = new N(s.h, {
    USER_SETTINGS_MODAL_INIT: g,
    USER_SETTINGS_MODAL_OPEN: g,
    USER_SETTINGS_MODAL_SET_SECTION: function (e) {
        let { section: t } = e;
        if (t !== a.nc_.ACCOUNT) return !1;
        (E = a.XlH.OPEN), (m = {});
    },
    USER_PROFILE_SETTINGS_INIT: function (e) {
        let { guildId: t } = e;
        (i = null == t || f.has(t) ? void 0 : t), (E = a.XlH.OPEN), (m = {});
    },
    USER_PROFILE_SETTINGS_SET_GUILD: function (e) {
        let { guildId: t } = e;
        (i = null == t || f.has(t) ? void 0 : t), (m = {});
    },
    USER_PROFILE_SETTINGS_CLOSE: A,
    USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM: S,
    USER_PROFILE_SETTINGS_SUBMIT: function () {
        (E = a.XlH.SUBMITTING), (m = {});
    },
    USER_PROFILE_SETTINGS_SUBMIT_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (E !== a.XlH.SUBMITTING) return !1;
        (E = a.XlH.OPEN), (m[t ?? a.ME] = _);
    },
    USER_PROFILE_SETTINGS_SUBMIT_FAILURE: function (e) {
        let { guildId: t, errors: n } = e;
        if (E !== a.XlH.SUBMITTING) return !1;
        (E = a.XlH.OPEN), (m[t ?? a.ME] = n ?? _);
    },
    USER_PROFILE_SETTINGS_SET_PENDING_CHANGES: function (e) {
        let { type: t, guildId: n, ...i } = e;
        h[n ?? a.ME] = { ...h[n ?? a.ME], ...i };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR: function (e) {
        let { avatar: t } = e;
        p = { ...p, tryItOutAvatar: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION: function (e) {
        let { avatarDecoration: t } = e;
        p = { ...p, tryItOutAvatarDecoration: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT: function (e) {
        let { profileEffect: t } = e;
        p = { ...p, tryItOutProfileEffect: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER: function (e) {
        let { banner: t } = e;
        p = { ...p, tryItOutBanner: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS: function (e) {
        let { themeColors: t } = e;
        p = { ...p, tryItOutThemeColors: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: function (e) {
        let { displayNameStyles: t } = e;
        p = { ...p, tryItOutDisplayNameStyles: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET: function (e) {
        let { banner: t, themeColors: n, avatarDecoration: i, displayNameStyles: r } = e;
        p = {
            ...p,
            tryItOutBanner: t,
            tryItOutThemeColors: n,
            tryItOutAvatarDecoration: i,
            tryItOutDisplayNameStyles: r,
        };
    },
    USER_PROFILE_SETTINGS_CLEAR_ERRORS: function () {
        m = {};
    },
    USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: function () {
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
    },
    USER_PROFILE_SETTINGS_RESET_PENDING_PROFILE_CHANGES: function () {
        h = Object.fromEntries(
            Object.entries(h).map((e) => {
                let [t, n] = e;
                return [
                    t,
                    {
                        ...n,
                        pendingPronouns: void 0,
                        pendingProfileEffect: void 0,
                        pendingProfileFrame: void 0,
                        pendingBanner: void 0,
                        pendingBannerOriginalMd5: void 0,
                        pendingAccentColor: void 0,
                        pendingThemeColors: void 0,
                        pendingBio: void 0,
                    },
                ];
            }),
        );
    },
    USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES: T,
    USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES: I,
    USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED: function () {
        if ((h[a.ME] ?? {})?.pendingLegacyUsernameDisabled === void 0) return !1;
        h[a.ME] = { ...h[a.ME], pendingLegacyUsernameDisabled: void 0 };
    },
    USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: function () {
        if ((h[a.ME] ?? {})?.pendingPrimaryGuildId === void 0) return !1;
        h[a.ME] = { ...h[a.ME], pendingPrimaryGuildId: void 0 };
    },
    USER_PROFILE_UPDATE_FAILURE: function (e) {
        let { guildId: t, errors: n } = e;
        (E = a.XlH.OPEN),
            (m[t ?? a.ME] =
                Object.fromEntries(
                    Object.entries(n).map((e) => {
                        let [t, n] = e;
                        return [t, [n]];
                    }),
                ) ?? _);
    },
    LOGOUT: S,
});
