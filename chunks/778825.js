let i, a, o, s, l, u, c, d, f, p, h;
var _,
    m = r(442837),
    g = r(570140),
    E = r(981631);
function v(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let y = E.QZA.CLOSED,
    b = {};
function I(e) {
    (f = e.guild), (y = E.QZA.OPEN), (b = {}), (p = e.source), (h = e.analyticsLocations);
}
function T() {
    (y = E.QZA.CLOSED), (b = {}), (p = void 0), (h = []);
}
function S() {
    (y = E.QZA.SUBMITTING), (b = {});
}
function A(e) {
    (f = e.guild), (b = {});
}
function C(e) {
    var n;
    if (y !== E.QZA.SUBMITTING) return !1;
    (y = E.QZA.OPEN), (b = null !== (n = e.errors) && void 0 !== n ? n : {});
}
function N(e) {
    (y = E.QZA.OPEN), (b = e.errors);
}
function R(e) {
    let { avatar: n } = e;
    i = n;
}
function O(e) {
    let { avatarDecoration: n } = e;
    a = n;
}
function D(e) {
    let { profileEffectId: n } = e;
    o = n;
}
function x(e) {
    let { banner: n } = e;
    s = n;
}
function L(e) {
    let { bio: n } = e;
    l = n;
}
function w(e) {
    let { pronouns: n } = e;
    u = n;
}
function P(e) {
    let { nickname: n } = e;
    c = n;
}
function M(e) {
    let { themeColors: n } = e;
    d = n;
}
function k() {
    U(), B(), (b = {}), (y = E.QZA.OPEN);
}
function U() {
    (i = void 0), (c = void 0), (a = void 0);
}
function B() {
    (s = void 0), (l = void 0), (u = void 0), (d = void 0), (o = void 0);
}
function G() {
    b = {};
}
function Z() {
    k(), T();
}
class F extends (_ = m.ZP.Store) {
    getFormState() {
        return y;
    }
    getErrors() {
        return b;
    }
    showNotice() {
        return void 0 !== i || void 0 !== a || void 0 !== o || void 0 !== s || void 0 !== l || void 0 !== u || void 0 !== c || void 0 !== d;
    }
    getIsSubmitDisabled() {
        return void 0 !== l && l.length > E.tPV;
    }
    getPendingAvatar() {
        return i;
    }
    getPendingAvatarDecoration() {
        return a;
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
        return c;
    }
    getPendingPronouns() {
        return u;
    }
    getPendingAccentColor() {
        return c;
    }
    getPendingThemeColors() {
        return d;
    }
    getAllPending() {
        return {
            pendingAvatar: i,
            pendingAvatarDecoration: a,
            pendingProfileEffectId: o,
            pendingBanner: s,
            pendingBio: l,
            pendingPronouns: u,
            pendingNickname: c,
            pendingThemeColors: d
        };
    }
    getGuild() {
        return f;
    }
    getSource() {
        return p;
    }
    getAnalyticsLocations() {
        return h;
    }
}
v(F, 'displayName', 'GuildIdentitySettingsStore'),
    (n.Z = new F(g.Z, {
        GUILD_IDENTITY_SETTINGS_INIT: I,
        GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: Z,
        GUILD_IDENTITY_SETTINGS_SET_GUILD: A,
        GUILD_IDENTITY_SETTINGS_SUBMIT: S,
        GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: C,
        USER_PROFILE_UPDATE_FAILURE: N,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: R,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: O,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: D,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: x,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: L,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: w,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: P,
        GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: M,
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: U,
        GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: B,
        GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: k,
        GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: k,
        GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: G
    }));
