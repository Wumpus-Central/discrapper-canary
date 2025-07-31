let r, i, a, o, s, l, c, u, d, _, f;
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
function O(e) {
    ((_ = e.guild), (b = g.QZA.OPEN), (y = {}), (f = e.source));
}
function v() {
    ((b = g.QZA.CLOSED), (y = {}), (f = void 0));
}
function I() {
    ((b = g.QZA.SUBMITTING), (y = {}));
}
function T(e) {
    ((_ = e.guild), (y = {}));
}
function S(e) {
    var t;
    if (b !== g.QZA.SUBMITTING) return !1;
    ((b = g.QZA.OPEN), (y = null != (t = e.errors) ? t : {}));
}
function A(e) {
    ((b = g.QZA.OPEN), (y = e.errors));
}
function N(e) {
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
    s = t;
}
function w(e) {
    let { bio: t } = e;
    l = t;
}
function D(e) {
    let { pronouns: t } = e;
    c = t;
}
function L(e) {
    let { nickname: t } = e;
    u = t;
}
function x(e) {
    let { themeColors: t } = e;
    d = t;
}
function k(e) {
    let { nameplate: t } = e;
    a = t;
}
function M() {
    (j(), U(), (y = {}), (b = g.QZA.OPEN));
}
function j() {
    ((r = void 0), (u = void 0), (i = void 0), (a = void 0));
}
function U() {
    ((s = void 0), (l = void 0), (c = void 0), (d = void 0), (o = void 0));
}
function G() {
    y = {};
}
function B() {
    (M(), v());
}
class V extends (p = h.ZP.Store) {
    getFormState() {
        return b;
    }
    getErrors() {
        return y;
    }
    showNotice() {
        return void 0 !== r || void 0 !== i || void 0 !== o || void 0 !== s || void 0 !== l || void 0 !== c || void 0 !== u || void 0 !== d || void 0 !== a;
    }
    getIsSubmitDisabled() {
        return void 0 !== l && l.length > g.tPV;
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
        return s;
    }
    getPendingBio() {
        return l;
    }
    getPendingNickname() {
        return u;
    }
    getPendingPronouns() {
        return c;
    }
    getPendingAccentColor() {
        return u;
    }
    getPendingThemeColors() {
        return d;
    }
    getPendingNameplate() {
        return a;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingAvatarDecoration: i,
            pendingProfileEffectId: o,
            pendingBanner: s,
            pendingBio: l,
            pendingPronouns: c,
            pendingNickname: u,
            pendingThemeColors: d,
            pendingNameplate: a
        };
    }
    getGuild() {
        return _;
    }
    getSource() {
        return f;
    }
}
E(V, 'displayName', 'GuildIdentitySettingsStore');
let F = new V(m.Z, {
    GUILD_IDENTITY_SETTINGS_INIT: O,
    GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: B,
    GUILD_IDENTITY_SETTINGS_SET_GUILD: T,
    GUILD_IDENTITY_SETTINGS_SUBMIT: I,
    GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: S,
    USER_PROFILE_UPDATE_FAILURE: A,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: N,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: C,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NAMEPLATE: k,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: R,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: P,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: w,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: D,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: L,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: x,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: j,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: U,
    GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: M,
    GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: M,
    GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: G
});
