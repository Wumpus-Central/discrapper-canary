let r, i, a, o, s, l, c, u, d, f, _, p;
n.d(t, { Z: () => H });
var h,
    m = n(442837),
    g = n(570140),
    E = n(981631);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let y = E.QZA.CLOSED,
    O = {};
function v(e) {
    (_ = e.guild), (y = E.QZA.OPEN), (O = {}), (p = e.source);
}
function I() {
    (y = E.QZA.CLOSED), (O = {}), (p = void 0);
}
function T() {
    (y = E.QZA.SUBMITTING), (O = {});
}
function S(e) {
    (_ = e.guild), (O = {});
}
function A(e) {
    var t;
    if (y !== E.QZA.SUBMITTING) return !1;
    (y = E.QZA.OPEN), (O = null != (t = e.errors) ? t : {});
}
function C(e) {
    (y = E.QZA.OPEN), (O = e.errors);
}
function N(e) {
    let { avatar: t } = e;
    r = t;
}
function R(e) {
    let { avatarDecoration: t } = e;
    i = t;
}
function P(e) {
    let { profileEffect: t } = e;
    o = t;
}
function w(e) {
    let { banner: t } = e;
    s = t;
}
function D(e) {
    let { bio: t } = e;
    l = t;
}
function x(e) {
    let { pronouns: t } = e;
    c = t;
}
function L(e) {
    let { nickname: t } = e;
    u = t;
}
function M(e) {
    let { themeColors: t } = e;
    d = t;
}
function j(e) {
    let { nameplate: t } = e;
    a = t;
}
function k(e) {
    let { displayNameStyles: t } = e;
    f = t;
}
function U() {
    G(), B(), (O = {}), (y = E.QZA.OPEN);
}
function G() {
    (r = void 0), (u = void 0), (i = void 0), (a = void 0), (f = void 0);
}
function B() {
    (s = void 0), (l = void 0), (c = void 0), (d = void 0), (o = void 0);
}
function Z() {
    O = {};
}
function F() {
    U(), I();
}
class V extends (h = m.ZP.Store) {
    getFormState() {
        return y;
    }
    getErrors() {
        return O;
    }
    showNotice() {
        return (
            void 0 !== r ||
            void 0 !== i ||
            void 0 !== o ||
            void 0 !== s ||
            void 0 !== l ||
            void 0 !== c ||
            void 0 !== u ||
            void 0 !== d ||
            void 0 !== a ||
            void 0 !== f
        );
    }
    getIsSubmitDisabled() {
        return void 0 !== l && l.length > E.tPV;
    }
    getPendingAvatar() {
        return r;
    }
    getPendingAvatarDecoration() {
        return i;
    }
    getPendingProfileEffect() {
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
    getPendingDisplayNameStyles() {
        return f;
    }
    getAllPending() {
        return {
            pendingAvatar: r,
            pendingAvatarDecoration: i,
            pendingProfileEffect: o,
            pendingBanner: s,
            pendingBio: l,
            pendingPronouns: c,
            pendingNickname: u,
            pendingThemeColors: d,
            pendingNameplate: a,
            pendingDisplayNameStyles: f,
        };
    }
    getGuild() {
        return _;
    }
    getSource() {
        return p;
    }
}
b(V, "displayName", "GuildIdentitySettingsStore");
let H = new V(g.Z, {
    GUILD_IDENTITY_SETTINGS_INIT: v,
    GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: F,
    GUILD_IDENTITY_SETTINGS_SET_GUILD: S,
    GUILD_IDENTITY_SETTINGS_SUBMIT: T,
    GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: A,
    USER_PROFILE_UPDATE_FAILURE: C,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: N,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: R,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_DISPLAY_NAME_STYLES: k,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NAMEPLATE: j,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT: P,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: w,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: D,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: x,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: L,
    GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: M,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: G,
    GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: B,
    GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: U,
    GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: U,
    GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: Z,
});
