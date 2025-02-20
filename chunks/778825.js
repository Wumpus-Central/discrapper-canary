let r, i, o, a, s, l, c, u, d, f, p, _;
n.d(t, { Z: () => V });
var h,
    m = n(442837),
    g = n(570140),
    E = n(981631);
function v(e, t, n) {
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
let b = E.QZA.CLOSED,
    y = {};
function O(e) {
    (f = e.guild), (b = E.QZA.OPEN), (y = {}), (p = e.source), (_ = e.analyticsLocations);
}
function S() {
    (b = E.QZA.CLOSED), (y = {}), (p = void 0), (_ = []);
}
function I() {
    (b = E.QZA.SUBMITTING), (y = {});
}
function T(e) {
    (f = e.guild), (y = {});
}
function N(e) {
    var t;
    if (b !== E.QZA.SUBMITTING) return !1;
    (b = E.QZA.OPEN), (y = null !== (t = e.errors) && void 0 !== t ? t : {});
}
function A(e) {
    (b = E.QZA.OPEN), (y = e.errors);
}
function C(e) {
    let { avatar: t } = e;
    r = t;
}
function R(e) {
    let { avatar: t } = e;
    i = t;
}
function P(e) {
    let { avatarDecoration: t } = e;
    o = t;
}
function w(e) {
    let { profileEffectId: t } = e;
    a = t;
}
function D(e) {
    let { banner: t } = e;
    s = t;
}
function x(e) {
    let { bio: t } = e;
    l = t;
}
function L(e) {
    let { pronouns: t } = e;
    c = t;
}
function M(e) {
    let { nickname: t } = e;
    u = t;
}
function k(e) {
    let { themeColors: t } = e;
    d = t;
}
function j() {
    U(), G(), (y = {}), (b = E.QZA.OPEN);
}
function U() {
    (r = void 0), (i = void 0), (u = void 0), (o = void 0);
}
function G() {
    (s = void 0), (l = void 0), (c = void 0), (d = void 0), (a = void 0);
}
function B() {
    y = {};
}
function Z() {
    j(), S();
}
class F extends (h = m.ZP.Store) {
    getFormState() {
        return b;
    }
    getErrors() {
        return y;
    }
    showNotice() {
        return void 0 !== r || void 0 !== i || void 0 !== o || void 0 !== a || void 0 !== s || void 0 !== l || void 0 !== c || void 0 !== u || void 0 !== d;
    }
    getIsSubmitDisabled() {
        return void 0 !== l && l.length > E.tPV;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingAvatarV2() {
        return i;
    }
    getPendingAvatarDecoration() {
        return o;
    }
    getPendingProfileEffectId() {
        return a;
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
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingAvatarV2: i,
            pendingAvatarDecoration: o,
            pendingProfileEffectId: a,
            pendingBanner: s,
            pendingBio: l,
            pendingPronouns: c,
            pendingNickname: u,
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
        return _;
    }
}
v(F, 'displayName', 'GuildIdentitySettingsStore');
let V = new F(g.Z, {
    GUILD_IDENTITY_SETTINGS_INIT: O,
    GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: Z,
    GUILD_IDENTITY_SETTINGS_SET_GUILD: T,
    GUILD_IDENTITY_SETTINGS_SUBMIT: I,
    GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: N,
    USER_PROFILE_UPDATE_FAILURE: A,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: C,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_V2: R,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: P,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: w,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: D,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: x,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: L,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: M,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: k,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: U,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: G,
    GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: j,
    GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: j,
    GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: B
});
