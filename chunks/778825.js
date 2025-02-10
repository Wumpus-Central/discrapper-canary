let i, r, a, s, o, l, u, c, d, f, _;
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
let v = g.QZA.CLOSED,
    y = {};
function I(e) {
    (d = e.guild), (v = g.QZA.OPEN), (y = {}), (f = e.source), (_ = e.analyticsLocations);
}
function T() {
    (v = g.QZA.CLOSED), (y = {}), (f = void 0), (_ = []);
}
function b() {
    (v = g.QZA.SUBMITTING), (y = {});
}
function S(e) {
    (d = e.guild), (y = {});
}
function A(e) {
    var t;
    if (v !== g.QZA.SUBMITTING) return !1;
    (v = g.QZA.OPEN), (y = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function N(e) {
    (v = g.QZA.OPEN), (y = e.errors);
}
function C(e) {
    let { avatar: t } = e;
    i = t;
}
function R(e) {
    let { avatarDecoration: t } = e;
    r = t;
}
function O(e) {
    let { profileEffectId: t } = e;
    a = t;
}
function D(e) {
    let { banner: t } = e;
    s = t;
}
function L(e) {
    let { bio: t } = e;
    o = t;
}
function x(e) {
    let { pronouns: t } = e;
    l = t;
}
function P(e) {
    let { nickname: t } = e;
    u = t;
}
function w(e) {
    let { themeColors: t } = e;
    c = t;
}
function M() {
    k(), U(), (y = {}), (v = g.QZA.OPEN);
}
function k() {
    (i = void 0), (u = void 0), (r = void 0);
}
function U() {
    (s = void 0), (o = void 0), (l = void 0), (c = void 0), (a = void 0);
}
function G() {
    y = {};
}
function B() {
    M(), T();
}
class Z extends (p = h.ZP.Store) {
    getFormState() {
        return v;
    }
    getErrors() {
        return y;
    }
    showNotice() {
        return void 0 !== i || void 0 !== r || void 0 !== a || void 0 !== s || void 0 !== o || void 0 !== l || void 0 !== u || void 0 !== c;
    }
    getIsSubmitDisabled() {
        return void 0 !== o && o.length > g.tPV;
    }
    getPendingAvatar() {
        return i;
    }
    getPendingAvatarDecoration() {
        return r;
    }
    getPendingProfileEffectId() {
        return a;
    }
    getPendingBanner() {
        return s;
    }
    getPendingBio() {
        return o;
    }
    getPendingNickname() {
        return u;
    }
    getPendingPronouns() {
        return l;
    }
    getPendingAccentColor() {
        return u;
    }
    getPendingThemeColors() {
        return c;
    }
    getAllPending() {
        return {
            pendingAvatar: i,
            pendingAvatarDecoration: r,
            pendingProfileEffectId: a,
            pendingBanner: s,
            pendingBio: o,
            pendingPronouns: l,
            pendingNickname: u,
            pendingThemeColors: c
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
E(Z, 'displayName', 'GuildIdentitySettingsStore');
let F = new Z(m.Z, {
    GUILD_IDENTITY_SETTINGS_INIT: I,
    GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: B,
    GUILD_IDENTITY_SETTINGS_SET_GUILD: S,
    GUILD_IDENTITY_SETTINGS_SUBMIT: b,
    GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: A,
    USER_PROFILE_UPDATE_FAILURE: N,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: C,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: R,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: O,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: D,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: L,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: x,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: P,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: w,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: k,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: U,
    GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: M,
    GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: M,
    GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: G
});
