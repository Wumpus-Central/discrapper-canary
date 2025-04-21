let r, i, a, o, s, l, c, u, d, f;
n.d(t, { Z: () => B });
var _,
    p = n(442837),
    h = n(570140),
    m = n(981631);
function g(e, t, n) {
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
let E = m.QZA.CLOSED,
    b = {};
function y(e) {
    (d = e.guild), (E = m.QZA.OPEN), (b = {}), (f = e.source);
}
function v() {
    (E = m.QZA.CLOSED), (b = {}), (f = void 0);
}
function O() {
    (E = m.QZA.SUBMITTING), (b = {});
}
function I(e) {
    (d = e.guild), (b = {});
}
function S(e) {
    var t;
    if (E !== m.QZA.SUBMITTING) return !1;
    (E = m.QZA.OPEN), (b = null != (t = e.errors) ? t : {});
}
function T(e) {
    (E = m.QZA.OPEN), (b = e.errors);
}
function A(e) {
    let { avatar: t } = e;
    r = t;
}
function N(e) {
    let { avatarDecoration: t } = e;
    i = t;
}
function C(e) {
    let { profileEffectId: t } = e;
    a = t;
}
function R(e) {
    let { banner: t } = e;
    o = t;
}
function P(e) {
    let { bio: t } = e;
    s = t;
}
function w(e) {
    let { pronouns: t } = e;
    l = t;
}
function D(e) {
    let { nickname: t } = e;
    c = t;
}
function L(e) {
    let { themeColors: t } = e;
    u = t;
}
function x() {
    M(), k(), (b = {}), (E = m.QZA.OPEN);
}
function M() {
    (r = void 0), (c = void 0), (i = void 0);
}
function k() {
    (o = void 0), (s = void 0), (l = void 0), (u = void 0), (a = void 0);
}
function j() {
    b = {};
}
function U() {
    x(), v();
}
class G extends (_ = p.ZP.Store) {
    getFormState() {
        return E;
    }
    getErrors() {
        return b;
    }
    showNotice() {
        return void 0 !== r || void 0 !== i || void 0 !== a || void 0 !== o || void 0 !== s || void 0 !== l || void 0 !== c || void 0 !== u;
    }
    getIsSubmitDisabled() {
        return void 0 !== s && s.length > m.tPV;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingAvatarDecoration() {
        return i;
    }
    getPendingProfileEffectId() {
        return a;
    }
    getPendingBanner() {
        return o;
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
            pendingProfileEffectId: a,
            pendingBanner: o,
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
}
g(G, 'displayName', 'GuildIdentitySettingsStore');
let B = new G(h.Z, {
    GUILD_IDENTITY_SETTINGS_INIT: y,
    GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: U,
    GUILD_IDENTITY_SETTINGS_SET_GUILD: I,
    GUILD_IDENTITY_SETTINGS_SUBMIT: O,
    GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: S,
    USER_PROFILE_UPDATE_FAILURE: T,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: A,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: N,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: C,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: R,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: P,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: w,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: D,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: L,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: M,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: k,
    GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: x,
    GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: x,
    GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: j
});
