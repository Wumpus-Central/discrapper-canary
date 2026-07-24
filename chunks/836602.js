"use strict";
let i;
n.d(t, { A: () => C, _: () => E });
var r = n(17928),
    a = n(228366),
    s = n(652215),
    l = n(349828),
    o = n(849077),
    d = n(901123);
let c = {},
    u = {},
    _ = {},
    E = new Set([...d.Cr, l.Vc, o.Hy]),
    A = {},
    h = u,
    I = s.XlH.CLOSED,
    f = {};
function p() {
    (I = s.XlH.OPEN), (f = {});
}
function T() {
    (I = s.XlH.CLOSED), (f = {});
}
function m() {
    h = u;
}
function g() {
    (A = {}), (f = {});
}
function S() {
    g(), m(), T();
}
class N extends r.Ay.Store {
    static displayName = "UserProfileSettingsStore";
    get selectedGuildId() {
        return i;
    }
    getFormState() {
        return I;
    }
    getErrors(e) {
        return f[e ?? s.ME] ?? _;
    }
    getPendingChanges(e) {
        return A[e ?? s.ME] ?? c;
    }
    getTryItOutChanges() {
        return h;
    }
    hasTryItOutChanges() {
        return Object.values(h).some((e) => void 0 !== e);
    }
    hasUnsavedChanges() {
        return Object.values(A).some((e) => Object.values(e).some((e) => void 0 !== e));
    }
    showNotice() {
        return !!(
            Object.values(this.getPendingChanges(s.ME)).some((e) => void 0 !== e) ||
            Object.values(this.getPendingChanges(i)).some((e) => void 0 !== e)
        );
    }
    canSubmit() {
        for (let e of [s.ME, i]) {
            let t = this.getPendingChanges(e);
            if (void 0 !== t.pendingBio && t.pendingBio.length > s.NA2) return !1;
        }
        return !0;
    }
}
let C = new N(a.h, {
    USER_SETTINGS_MODAL_INIT: p,
    USER_SETTINGS_MODAL_OPEN: p,
    USER_SETTINGS_MODAL_SET_SECTION: function (e) {
        let { section: t } = e;
        if (t !== s.nc_.ACCOUNT) return !1;
        (I = s.XlH.OPEN), (f = {});
    },
    USER_PROFILE_SETTINGS_INIT: function (e) {
        let { guildId: t } = e;
        (i = null == t || E.has(t) ? void 0 : t), (I = s.XlH.OPEN), (f = {});
    },
    USER_PROFILE_SETTINGS_SET_GUILD: function (e) {
        let { guildId: t } = e;
        (i = null == t || E.has(t) ? void 0 : t), (f = {});
    },
    USER_PROFILE_SETTINGS_CLOSE: T,
    USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM: S,
    USER_PROFILE_SETTINGS_SUBMIT: function () {
        (I = s.XlH.SUBMITTING), (f = {});
    },
    USER_PROFILE_SETTINGS_SUBMIT_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (I !== s.XlH.SUBMITTING) return !1;
        (I = s.XlH.OPEN), (f[t ?? s.ME] = _);
    },
    USER_PROFILE_SETTINGS_SUBMIT_FAILURE: function (e) {
        let { guildId: t, errors: n } = e;
        if (I !== s.XlH.SUBMITTING) return !1;
        (I = s.XlH.OPEN), (f[t ?? s.ME] = n ?? _);
    },
    USER_PROFILE_SETTINGS_SET_PENDING_CHANGES: function (e) {
        let { type: t, guildId: n, ...i } = e;
        A[n ?? s.ME] = { ...A[n ?? s.ME], ...i };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR: function (e) {
        let { avatar: t } = e;
        h = { ...h, tryItOutAvatar: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION: function (e) {
        let { avatarDecoration: t } = e;
        h = { ...h, tryItOutAvatarDecoration: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT: function (e) {
        let { profileEffect: t } = e;
        h = { ...h, tryItOutProfileEffect: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER: function (e) {
        let { banner: t } = e;
        h = { ...h, tryItOutBanner: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS: function (e) {
        let { themeColors: t } = e;
        h = { ...h, tryItOutThemeColors: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: function (e) {
        let { displayNameStyles: t } = e;
        h = { ...h, tryItOutDisplayNameStyles: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET: function (e) {
        let { banner: t, themeColors: n, avatarDecoration: i, displayNameStyles: r } = e;
        h = {
            ...h,
            tryItOutBanner: t,
            tryItOutThemeColors: n,
            tryItOutAvatarDecoration: void 0 !== i ? i : h.tryItOutAvatarDecoration,
            tryItOutDisplayNameStyles: r,
        };
    },
    USER_PROFILE_SETTINGS_CLEAR_ERRORS: function () {
        f = {};
    },
    USER_PROFILE_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: function () {
        A = Object.fromEntries(
            Object.entries(A).map((e) => {
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
        A = Object.fromEntries(
            Object.entries(A).map((e) => {
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
    USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES: g,
    USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES: m,
    USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED: function () {
        if ((A[s.ME] ?? {})?.pendingLegacyUsernameDisabled === void 0) return !1;
        A[s.ME] = { ...A[s.ME], pendingLegacyUsernameDisabled: void 0 };
    },
    USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: function () {
        if ((A[s.ME] ?? {})?.pendingPrimaryGuildId === void 0) return !1;
        A[s.ME] = { ...A[s.ME], pendingPrimaryGuildId: void 0 };
    },
    USER_PROFILE_UPDATE_FAILURE: function (e) {
        let { guildId: t, errors: n } = e;
        (I = s.XlH.OPEN), (f[t ?? s.ME] = n ?? _);
    },
    LOGOUT: S,
});
