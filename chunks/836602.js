let i;
n.d(t, { A: () => O, _: () => A });
var r = n(17928),
    a = n(73153),
    s = n(290386),
    l = n(652215),
    o = n(349828),
    d = n(849077),
    c = n(901123);
let u = {},
    _ = {},
    E = {},
    A = new Set([...c.Cr, o.Vc, d.Hy]),
    h = {},
    f = _,
    I = l.XlH.CLOSED,
    p = {};
function T() {
    ((I = l.XlH.OPEN), (p = {}));
}
function g() {
    ((I = l.XlH.CLOSED), (p = {}));
}
function m() {
    f = _;
}
function S() {
    ((h = {}), (p = {}));
}
function N() {
    (S(), m(), g());
}
class C extends r.Ay.Store {
    static displayName = "UserProfileSettingsStore";
    get selectedGuildId() {
        return i;
    }
    getFormState() {
        return I;
    }
    getErrors(e) {
        return p[e ?? l.ME] ?? E;
    }
    getPendingChanges(e) {
        return h[e ?? l.ME] ?? u;
    }
    getTryItOutChanges() {
        return f;
    }
    hasTryItOutChanges() {
        return Object.values(f).some((e) => void 0 !== e);
    }
    hasUnsavedChanges() {
        return Object.values(h).some((e) => Object.values(e).some((e) => void 0 !== e));
    }
    showNotice() {
        return !!(
            Object.values(this.getPendingChanges(l.ME)).some((e) => void 0 !== e) ||
            Object.values(this.getPendingChanges(i)).some((e) => void 0 !== e)
        );
    }
    canSubmit() {
        let e = (0, s.Z)({ location: "user_profile_settings_can_submit" });
        for (let t of [l.ME, i]) {
            let n = this.getPendingChanges(t);
            if (void 0 !== n.pendingBio && n.pendingBio.length > e) return !1;
        }
        return !0;
    }
}
let O = new C(a.h, {
    USER_SETTINGS_MODAL_INIT: T,
    USER_SETTINGS_MODAL_OPEN: T,
    USER_SETTINGS_MODAL_SET_SECTION: function (e) {
        let { section: t } = e;
        if (t !== l.nc_.ACCOUNT) return !1;
        ((I = l.XlH.OPEN), (p = {}));
    },
    USER_PROFILE_SETTINGS_INIT: function (e) {
        let { guildId: t } = e;
        ((i = null == t || A.has(t) ? void 0 : t), (I = l.XlH.OPEN), (p = {}));
    },
    USER_PROFILE_SETTINGS_SET_GUILD: function (e) {
        let { guildId: t } = e;
        ((i = null == t || A.has(t) ? void 0 : t), (p = {}));
    },
    USER_PROFILE_SETTINGS_CLOSE: g,
    USER_PROFILE_SETTINGS_RESET_AND_CLOSE_FORM: N,
    USER_PROFILE_SETTINGS_SUBMIT: function () {
        ((I = l.XlH.SUBMITTING), (p = {}));
    },
    USER_PROFILE_SETTINGS_SUBMIT_SUCCESS: function (e) {
        let { guildId: t } = e;
        if (I !== l.XlH.SUBMITTING) return !1;
        ((I = l.XlH.OPEN), (p[t ?? l.ME] = E));
    },
    USER_PROFILE_SETTINGS_SUBMIT_FAILURE: function (e) {
        let { guildId: t, errors: n } = e;
        if (I !== l.XlH.SUBMITTING) return !1;
        ((I = l.XlH.OPEN), (p[t ?? l.ME] = n ?? E));
    },
    USER_PROFILE_SETTINGS_SET_PENDING_CHANGES: function (e) {
        let { type: t, guildId: n, ...i } = e;
        h[n ?? l.ME] = { ...h[n ?? l.ME], ...i };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR: function (e) {
        let { avatar: t } = e;
        f = { ...f, tryItOutAvatar: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_AVATAR_DECORATION: function (e) {
        let { avatarDecoration: t } = e;
        f = { ...f, tryItOutAvatarDecoration: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PROFILE_EFFECT: function (e) {
        let { profileEffect: t } = e;
        f = { ...f, tryItOutProfileEffect: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_BANNER: function (e) {
        let { banner: t } = e;
        f = { ...f, tryItOutBanner: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_THEME_COLORS: function (e) {
        let { themeColors: t } = e;
        f = { ...f, tryItOutThemeColors: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_DISPLAY_NAME_STYLES: function (e) {
        let { displayNameStyles: t } = e;
        f = { ...f, tryItOutDisplayNameStyles: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_CUSTOM_TYPING_INDICATOR_STYLE: function (e) {
        let { customTypingIndicatorStyle: t } = e;
        f = { ...f, tryItOutCustomTypingIndicatorStyle: t };
    },
    USER_PROFILE_SETTINGS_SET_TRY_IT_OUT_PRESET: function (e) {
        let { lastPreset: t, banner: n, themeColors: i, avatarDecoration: r, displayNameStyles: a } = e;
        f = {
            ...f,
            tryItOutLastPreset: void 0 !== t ? t : f.tryItOutLastPreset,
            tryItOutBanner: n,
            tryItOutThemeColors: i,
            tryItOutAvatarDecoration: void 0 !== r ? r : f.tryItOutAvatarDecoration,
            tryItOutDisplayNameStyles: a,
        };
    },
    USER_PROFILE_SETTINGS_CLEAR_ERRORS: function () {
        p = {};
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
                        pendingCustomTypingIndicatorStyle: void 0,
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
                        pendingAccentColor: void 0,
                        pendingThemeColors: void 0,
                        pendingBio: void 0,
                    },
                ];
            }),
        );
    },
    USER_PROFILE_SETTINGS_RESET_PENDING_CHANGES: S,
    USER_PROFILE_SETTINGS_RESET_TRY_IT_OUT_CHANGES: m,
    USER_PROFILE_SETTINGS_RESET_PENDING_LEGACY_USERNAME_DISABLED: function () {
        if ((h[l.ME] ?? {})?.pendingLegacyUsernameDisabled === void 0) return !1;
        h[l.ME] = { ...h[l.ME], pendingLegacyUsernameDisabled: void 0 };
    },
    USER_PROFILE_SETTINGS_RESET_PENDING_PRIMARY_GUILD_CHANGES: function () {
        if ((h[l.ME] ?? {})?.pendingPrimaryGuildId === void 0) return !1;
        h[l.ME] = { ...h[l.ME], pendingPrimaryGuildId: void 0 };
    },
    USER_PROFILE_UPDATE_FAILURE: function (e) {
        let { guildId: t, errors: n } = e;
        ((I = l.XlH.OPEN), (p[t ?? l.ME] = n ?? E));
    },
    LOGOUT: N,
});
