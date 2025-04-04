let r, i, o, a, s, l, c, u, d, f, _;
n.d(t, { Z: () => F });
var p,
    h = n(442837),
    m = n(570140),
    g = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let b = g.QZA.CLOSED,
    y = {};
function v(e) {
    (d = e.guild), (b = g.QZA.OPEN), (y = {}), (f = e.source), (_ = e.analyticsLocations);
}
function O() {
    (b = g.QZA.CLOSED), (y = {}), (f = void 0), (_ = []);
}
function I() {
    (b = g.QZA.SUBMITTING), (y = {});
}
function S(e) {
    (d = e.guild), (y = {});
}
function T(e) {
    var t;
    if (b !== g.QZA.SUBMITTING) return !1;
    (b = g.QZA.OPEN), (y = null != (t = e.errors) ? t : {});
}
function N(e) {
    (b = g.QZA.OPEN), (y = e.errors);
}
function A(e) {
    let { avatar: t } = e;
    r = t;
}
function C(e) {
    let { avatarDecoration: t } = e;
    i = t;
}
function R(e) {
    let { profileEffectId: t } = e;
    o = t;
}
function P(e) {
    let { banner: t } = e;
    a = t;
}
function w(e) {
    let { bio: t } = e;
    s = t;
}
function D(e) {
    let { pronouns: t } = e;
    l = t;
}
function L(e) {
    let { nickname: t } = e;
    c = t;
}
function x(e) {
    let { themeColors: t } = e;
    u = t;
}
function M() {
    k(), j(), (y = {}), (b = g.QZA.OPEN);
}
function k() {
    (r = void 0), (c = void 0), (i = void 0);
}
function j() {
    (a = void 0), (s = void 0), (l = void 0), (u = void 0), (o = void 0);
}
function U() {
    y = {};
}
function G() {
    M(), O();
}
class B extends (p = h.ZP.Store) {
    getFormState() {
        return b;
    }
    getErrors() {
        return y;
    }
    showNotice() {
        return void 0 !== r || void 0 !== i || void 0 !== o || void 0 !== a || void 0 !== s || void 0 !== l || void 0 !== c || void 0 !== u;
    }
    getIsSubmitDisabled() {
        return void 0 !== s && s.length > g.tPV;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingAvatarDecoration() {
        return i;
    }
    getPendingProfileEffectId() {
        return o;
    }
    getPendingBanner() {
        return a;
    }
    getPendingBio() {
        return s;
    }
    getPendingNickname() {
        return c;
    }
    getPendingPronouns() {
        return l;
    }
    getPendingAccentColor() {
        return c;
    }
    getPendingThemeColors() {
        return u;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingAvatarDecoration: i,
            pendingProfileEffectId: o,
            pendingBanner: a,
            pendingBio: s,
            pendingPronouns: l,
            pendingNickname: c,
            pendingThemeColors: u
        };
    }
    getGuild() {
        return d;
    }
    getSource() {
        return f;
    }
    getAnalyticsLocations() {
        return _;
    }
}
E(B, 'displayName', 'GuildIdentitySettingsStore');
let F = new B(m.Z, {
    GUILD_IDENTITY_SETTINGS_INIT: v,
    GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: G,
    GUILD_IDENTITY_SETTINGS_SET_GUILD: S,
    GUILD_IDENTITY_SETTINGS_SUBMIT: I,
    GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: T,
    USER_PROFILE_UPDATE_FAILURE: N,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: A,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: C,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: R,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: P,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: w,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: D,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: L,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: x,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: k,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: j,
    GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: M,
    GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: M,
    GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: U
});
